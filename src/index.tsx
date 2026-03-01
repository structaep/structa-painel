import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

// JWT Secret (em produção, usar variável de ambiente)
const JWT_SECRET = 'structa-secret-key-2026'

// CORS para API
app.use('/api/*', cors())

// Servir arquivos estáticos
app.use('/static/*', serveStatic({ root: './public' }))

// Middleware de autenticação
const authMiddleware = async (c: any, next: any) => {
  const authHeader = c.req.header('Authorization')
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return c.json({ error: 'Token não fornecido' }, 401)
  }

  const token = authHeader.substring(7)
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any
    c.set('user', decoded)
    await next()
  } catch (error) {
    return c.json({ error: 'Token inválido' }, 401)
  }
}

// ========== ROTAS DE AUTENTICAÇÃO ==========

// Login
app.post('/api/auth/login', async (c) => {
  try {
    const { email, password } = await c.req.json()
    
    if (!email || !password) {
      return c.json({ error: 'Email e senha são obrigatórios' }, 400)
    }

    const { DB } = c.env
    
    // Buscar usuário
    const user = await DB.prepare(
      'SELECT * FROM users WHERE email = ? AND status = ?'
    ).bind(email, 'active').first()

    if (!user) {
      return c.json({ error: 'Credenciais inválidas' }, 401)
    }

    // Verificar senha
    const isValidPassword = await bcrypt.compare(password, user.password_hash as string)
    
    if (!isValidPassword) {
      return c.json({ error: 'Credenciais inválidas' }, 401)
    }

    // Gerar token JWT
    const token = jwt.sign(
      { 
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      },
      JWT_SECRET,
      { expiresIn: '8h' }
    )

    return c.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    })
  } catch (error) {
    console.error('Login error:', error)
    return c.json({ error: 'Erro ao fazer login' }, 500)
  }
})

// Verificar token
app.get('/api/auth/me', authMiddleware, async (c) => {
  const user = c.get('user')
  return c.json({ user })
})

// ========== ROTAS DE USUÁRIOS ==========

// Listar usuários (apenas admin)
app.get('/api/users', authMiddleware, async (c) => {
  try {
    const user = c.get('user')
    
    if (user.role !== 'admin') {
      return c.json({ error: 'Acesso negado' }, 403)
    }

    const { DB } = c.env
    const { results } = await DB.prepare(
      'SELECT id, email, name, role, status, created_at FROM users ORDER BY created_at DESC'
    ).all()

    return c.json({ users: results })
  } catch (error) {
    console.error('List users error:', error)
    return c.json({ error: 'Erro ao listar usuários' }, 500)
  }
})

// ========== PÁGINA DE LOGIN ==========

app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Structa Engenharia Patrimonial - Painel Administrativo</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Poppins', sans-serif;
                background: linear-gradient(135deg, #1F3B4D 0%, #365C73 100%);
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .logo-text {
                font-family: 'Playfair Display', serif;
                font-weight: 600;
                letter-spacing: 0.22em;
                color: #C9A56D;
                font-size: 2rem;
            }
            
            .login-card {
                background: #F6F7F8;
                border-radius: 16px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                overflow: hidden;
                max-width: 450px;
                width: 90%;
                margin: 20px;
            }
            
            @media (max-width: 640px) {
                .logo-text {
                    font-size: 1.5rem;
                }
                
                .logo-image {
                    height: 60px !important;
                }
                
                .login-card {
                    width: 95%;
                    margin: 10px;
                }
                
                .login-header {
                    padding: 30px 20px !important;
                }
                
                .login-body {
                    padding: 30px 20px !important;
                }
            }
            
            .login-header {
                background: linear-gradient(135deg, #1F3B4D 0%, #2A4A5C 100%);
                padding: 40px 30px;
                text-align: center;
            }
            
            .logo-container {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 15px;
                margin-bottom: 15px;
            }
            
            .logo-image {
                height: 80px;
                width: auto;
                filter: drop-shadow(0 2px 8px rgba(201, 165, 109, 0.3));
            }
            
            .login-body {
                padding: 40px 30px;
            }
            
            .form-group {
                margin-bottom: 24px;
            }
            
            .form-label {
                display: block;
                color: #2A2A2A;
                font-weight: 500;
                margin-bottom: 8px;
                font-size: 0.9rem;
            }
            
            .form-input {
                width: 100%;
                padding: 14px 16px;
                border: 2px solid #E0E0E0;
                border-radius: 8px;
                font-size: 0.95rem;
                transition: all 0.3s;
                font-family: 'Poppins', sans-serif;
            }
            
            .form-input:focus {
                outline: none;
                border-color: #C9A56D;
                box-shadow: 0 0 0 3px rgba(201, 165, 109, 0.1);
            }
            
            .btn-login {
                width: 100%;
                padding: 14px;
                background: linear-gradient(135deg, #C9A56D 0%, #B89558 100%);
                color: #F6F7F8;
                border: none;
                border-radius: 8px;
                font-weight: 600;
                font-size: 1rem;
                cursor: pointer;
                transition: all 0.3s;
                font-family: 'Poppins', sans-serif;
            }
            
            .btn-login:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(201, 165, 109, 0.4);
            }
            
            .btn-login:active {
                transform: translateY(0);
            }
            
            .btn-login:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }
            
            .error-message {
                background: #FEE;
                color: #C33;
                padding: 12px;
                border-radius: 6px;
                margin-bottom: 20px;
                font-size: 0.9rem;
                display: none;
            }
            
            .success-message {
                background: #EFE;
                color: #3C3;
                padding: 12px;
                border-radius: 6px;
                margin-bottom: 20px;
                font-size: 0.9rem;
                display: none;
            }
            
            .forgot-password {
                text-align: center;
                margin-top: 16px;
            }
            
            .forgot-password a {
                color: #1F3B4D;
                text-decoration: none;
                font-size: 0.9rem;
                transition: color 0.3s;
            }
            
            .forgot-password a:hover {
                color: #C9A56D;
            }
        </style>
    </head>
    <body>
        <div class="login-card">
            <div class="login-header">
                <div class="logo-container">
                    <img src="/static/logo-structa.png" alt="Structa" class="logo-image">
                    <h1 class="logo-text">STRUCTA</h1>
                </div>
                <p style="color: #C9A56D; margin-top: 10px; font-size: 0.9rem; line-height: 1.4;">
                    Engenharia Patrimonial<br>de Alta Performance
                </p>
                <p style="color: #F6F7F8; margin-top: 12px; font-size: 0.85rem; opacity: 0.9;">
                    Painel Administrativo
                </p>
            </div>
            
            <div class="login-body">
                <div id="errorMessage" class="error-message"></div>
                <div id="successMessage" class="success-message"></div>
                
                <form id="loginForm">
                    <div class="form-group">
                        <label class="form-label">
                            <i class="fas fa-user" style="color: #C9A56D; margin-right: 5px;"></i>
                            Usuário
                        </label>
                        <input 
                            type="text" 
                            id="email" 
                            class="form-input" 
                            placeholder="Digite seu usuário"
                            required
                            autocomplete="username"
                        >
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">
                            <i class="fas fa-lock" style="color: #C9A56D; margin-right: 5px;"></i>
                            Senha
                        </label>
                        <input 
                            type="password" 
                            id="password" 
                            class="form-input" 
                            placeholder="Digite sua senha"
                            required
                            autocomplete="current-password"
                        >
                    </div>
                    
                    <button type="submit" class="btn-login" id="loginButton">
                        <i class="fas fa-sign-in-alt" style="margin-right: 8px;"></i>
                        Entrar
                    </button>
                    
                    <div class="forgot-password">
                        <a href="#" onclick="handleForgotPassword(event)">
                            <i class="fas fa-question-circle" style="margin-right: 5px;"></i>
                            Esqueci minha senha
                        </a>
                    </div>
                </form>
            </div>
        </div>
        
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script>
            const loginForm = document.getElementById('loginForm');
            const loginButton = document.getElementById('loginButton');
            const errorMessage = document.getElementById('errorMessage');
            const successMessage = document.getElementById('successMessage');
            
            function showError(message) {
                errorMessage.textContent = message;
                errorMessage.style.display = 'block';
                successMessage.style.display = 'none';
            }
            
            function showSuccess(message) {
                successMessage.textContent = message;
                successMessage.style.display = 'block';
                errorMessage.style.display = 'none';
            }
            
            function hideMessages() {
                errorMessage.style.display = 'none';
                successMessage.style.display = 'none';
            }
            
            function handleForgotPassword(event) {
                event.preventDefault();
                alert('Para recuperar sua senha, entre em contato com o administrador do sistema.\\n\\nEmail: suporte@structaep.com.br');
            }
            
            loginForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                hideMessages();
                
                console.log('Form submitted!');
                
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                
                console.log('Email:', email, 'Password length:', password.length);
                
                if (!email || !password) {
                    showError('Por favor, preencha todos os campos.');
                    return;
                }
                
                loginButton.disabled = true;
                loginButton.innerHTML = '<i class="fas fa-spinner fa-spin" style="margin-right: 8px;"></i>Entrando...';
                
                try {
                    console.log('Sending login request...');
                    const response = await axios.post('/api/auth/login', {
                        email,
                        password
                    });
                    
                    console.log('Response received:', response.data);
                    
                    if (response.data.token) {
                        localStorage.setItem('token', response.data.token);
                        localStorage.setItem('user', JSON.stringify(response.data.user));
                        
                        showSuccess('Login realizado com sucesso! Redirecionando...');
                        console.log('Redirecting to dashboard...');
                        
                        setTimeout(() => {
                            window.location.href = '/dashboard';
                        }, 1000);
                    } else {
                        showError('Resposta inválida do servidor.');
                    }
                } catch (error) {
                    console.error('Login error:', error);
                    console.error('Error details:', error.response);
                    if (error.response?.data?.error) {
                        showError(error.response.data.error);
                    } else if (error.message) {
                        showError('Erro: ' + error.message);
                    } else {
                        showError('Erro ao fazer login. Tente novamente.');
                    }
                } finally {
                    loginButton.disabled = false;
                    loginButton.innerHTML = '<i class="fas fa-sign-in-alt" style="margin-right: 8px;"></i>Entrar';
                }
            });
            
            // Limpar mensagens quando o usuário começar a digitar
            document.getElementById('email').addEventListener('input', hideMessages);
            document.getElementById('password').addEventListener('input', hideMessages);
        </script>
    </body>
    </html>
  `)
})

// ========== PÁGINA DE DASHBOARD ==========

app.get('/dashboard', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dashboard - Structa Painel</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Poppins', sans-serif;
                background: #F6F7F8;
            }
            
            .sidebar {
                position: fixed;
                left: 0;
                top: 0;
                height: 100vh;
                width: 280px;
                background: linear-gradient(180deg, #1F3B4D 0%, #2A4A5C 100%);
                box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
                transition: transform 0.3s ease;
                z-index: 1000;
                overflow-y: auto;
            }
            
            .sidebar-header {
                padding: 24px 20px;
                border-bottom: 1px solid rgba(201, 165, 109, 0.2);
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .sidebar-logo {
                height: 40px;
                width: auto;
            }
            
            .sidebar-title {
                font-family: 'Playfair Display', serif;
                font-weight: 600;
                letter-spacing: 0.15em;
                color: #C9A56D;
                font-size: 1.3rem;
            }
            
            .sidebar-menu {
                padding: 20px 0;
            }
            
            .menu-item {
                display: flex;
                align-items: center;
                padding: 14px 24px;
                color: #F6F7F8;
                text-decoration: none;
                transition: all 0.3s;
                cursor: pointer;
                border-left: 3px solid transparent;
            }
            
            .menu-item:hover {
                background: rgba(201, 165, 109, 0.1);
                border-left-color: #C9A56D;
            }
            
            .menu-item.active {
                background: rgba(201, 165, 109, 0.15);
                border-left-color: #C9A56D;
                color: #C9A56D;
            }
            
            .menu-item i {
                width: 24px;
                margin-right: 12px;
                text-align: center;
            }
            
            .main-content {
                margin-left: 280px;
                min-height: 100vh;
                transition: margin-left 0.3s ease;
            }
            
            .top-bar {
                background: white;
                padding: 20px 32px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .user-info {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .user-avatar {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: linear-gradient(135deg, #C9A56D 0%, #B89558 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: 600;
            }
            
            .content-area {
                padding: 32px;
            }
            
            .stats-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 24px;
                margin-bottom: 32px;
            }
            
            .stat-card {
                background: white;
                padding: 24px;
                border-radius: 12px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
                transition: transform 0.3s, box-shadow 0.3s;
            }
            
            .stat-card:hover {
                transform: translateY(-4px);
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            }
            
            .stat-icon {
                width: 56px;
                height: 56px;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                margin-bottom: 16px;
            }
            
            .stat-value {
                font-size: 2rem;
                font-weight: 700;
                color: #1F3B4D;
                margin-bottom: 8px;
            }
            
            .stat-label {
                color: #666;
                font-size: 0.9rem;
            }
            
            .chart-container {
                background: white;
                padding: 24px;
                border-radius: 12px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
                margin-bottom: 24px;
            }
            
            .mobile-menu-btn {
                display: none;
                position: fixed;
                bottom: 24px;
                right: 24px;
                width: 56px;
                height: 56px;
                background: linear-gradient(135deg, #C9A56D 0%, #B89558 100%);
                border-radius: 50%;
                border: none;
                color: white;
                font-size: 20px;
                box-shadow: 0 4px 12px rgba(201, 165, 109, 0.4);
                cursor: pointer;
                z-index: 999;
            }
            
            @media (max-width: 768px) {
                .sidebar {
                    transform: translateX(-100%);
                }
                
                .sidebar.active {
                    transform: translateX(0);
                }
                
                .main-content {
                    margin-left: 0;
                }
                
                .mobile-menu-btn {
                    display: block;
                }
                
                .top-bar {
                    padding: 16px 20px;
                }
                
                .content-area {
                    padding: 20px;
                }
                
                .stats-grid {
                    grid-template-columns: 1fr;
                }
            }
        </style>
    </head>
    <body>
        <!-- Sidebar -->
        <div class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <img src="/static/logo-structa.png" alt="Structa" class="sidebar-logo">
                <div class="sidebar-title">STRUCTA</div>
            </div>
            
            <nav class="sidebar-menu">
                <a href="/dashboard" class="menu-item active">
                    <i class="fas fa-chart-line"></i>
                    <span>Dashboard</span>
                </a>
                <a href="/vendas" class="menu-item">
                    <i class="fas fa-handshake"></i>
                    <span>Apresentação de Vendas</span>
                </a>
                <a href="/clientes" class="menu-item">
                    <i class="fas fa-users"></i>
                    <span>Clientes</span>
                </a>
                <a href="/cadastro-vendas" class="menu-item">
                    <i class="fas fa-file-invoice-dollar"></i>
                    <span>Cadastrar Vendas</span>
                </a>
                <a href="/relatorios" class="menu-item">
                    <i class="fas fa-chart-bar"></i>
                    <span>Relatórios</span>
                </a>
                <a href="/configuracoes" class="menu-item">
                    <i class="fas fa-cog"></i>
                    <span>Configurações</span>
                </a>
                <a onclick="logout()" class="menu-item" style="margin-top: auto; border-top: 1px solid rgba(201, 165, 109, 0.2);">
                    <i class="fas fa-sign-out-alt"></i>
                    <span>Sair</span>
                </a>
            </nav>
        </div>
        
        <!-- Main Content -->
        <div class="main-content">
            <!-- Top Bar -->
            <div class="top-bar">
                <h1 style="font-size: 1.5rem; font-weight: 600; color: #1F3B4D;">Dashboard</h1>
                <div class="user-info">
                    <div>
                        <div style="font-weight: 600; color: #1F3B4D; text-align: right;" id="userName">Carregando...</div>
                        <div style="font-size: 0.85rem; color: #666; text-align: right;" id="userRole">Admin</div>
                    </div>
                    <div class="user-avatar" id="userAvatar">A</div>
                </div>
            </div>
            
            <!-- Content Area -->
            <div class="content-area">
                <!-- Stats Grid -->
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-icon" style="background: rgba(76, 175, 80, 0.1); color: #4CAF50;">
                            <i class="fas fa-dollar-sign"></i>
                        </div>
                        <div class="stat-value">R$ 0,00</div>
                        <div class="stat-label">Vendas do Mês</div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon" style="background: rgba(33, 150, 243, 0.1); color: #2196F3;">
                            <i class="fas fa-users"></i>
                        </div>
                        <div class="stat-value">0</div>
                        <div class="stat-label">Clientes Ativos</div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon" style="background: rgba(255, 152, 0, 0.1); color: #FF9800;">
                            <i class="fas fa-handshake"></i>
                        </div>
                        <div class="stat-value">0</div>
                        <div class="stat-label">Negociações</div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon" style="background: rgba(156, 39, 176, 0.1); color: #9C27B0;">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <div class="stat-value">0%</div>
                        <div class="stat-label">Taxa de Conversão</div>
                    </div>
                </div>
                
                <!-- Charts -->
                <div class="chart-container">
                    <h2 style="font-size: 1.2rem; font-weight: 600; color: #1F3B4D; margin-bottom: 20px;">
                        Vendas por Mês
                    </h2>
                    <canvas id="salesChart" height="80"></canvas>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
                    <div class="chart-container">
                        <h2 style="font-size: 1.2rem; font-weight: 600; color: #1F3B4D; margin-bottom: 20px;">
                            Tipos de Consórcio
                        </h2>
                        <canvas id="consortiumChart"></canvas>
                    </div>
                    
                    <div class="chart-container">
                        <h2 style="font-size: 1.2rem; font-weight: 600; color: #1F3B4D; margin-bottom: 20px;">
                            Status das Vendas
                        </h2>
                        <canvas id="statusChart"></canvas>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Mobile Menu Button -->
        <button class="mobile-menu-btn" onclick="toggleSidebar()">
            <i class="fas fa-bars"></i>
        </button>
        
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script>
            // Auth check
            const token = localStorage.getItem('token');
            const user = JSON.parse(localStorage.getItem('user') || '{}');
            
            if (!token) {
                window.location.href = '/';
            } else {
                document.getElementById('userName').textContent = user.name || 'Usuário';
                document.getElementById('userRole').textContent = user.role === 'admin' ? 'Administrador' : 'Vendedor';
                document.getElementById('userAvatar').textContent = (user.name || 'U')[0].toUpperCase();
            }
            
            function logout() {
                if (confirm('Deseja realmente sair?')) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    window.location.href = '/';
                }
            }
            
            function toggleSidebar() {
                document.getElementById('sidebar').classList.toggle('active');
            }
            
            // Charts
            const salesCtx = document.getElementById('salesChart').getContext('2d');
            new Chart(salesCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                    datasets: [{
                        label: 'Vendas (R$)',
                        data: [0, 0, 0, 0, 0, 0],
                        borderColor: '#C9A56D',
                        backgroundColor: 'rgba(201, 165, 109, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
            
            const consortiumCtx = document.getElementById('consortiumChart').getContext('2d');
            new Chart(consortiumCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Imóvel', 'Veículo', 'Outros'],
                    datasets: [{
                        data: [0, 0, 0],
                        backgroundColor: ['#1F3B4D', '#C9A56D', '#365C73']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true
                }
            });
            
            const statusCtx = document.getElementById('statusChart').getContext('2d');
            new Chart(statusCtx, {
                type: 'pie',
                data: {
                    labels: ['Ativas', 'Pendentes', 'Canceladas'],
                    datasets: [{
                        data: [0, 0, 0],
                        backgroundColor: ['#4CAF50', '#FF9800', '#F44336']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true
                }
            });
        </script>
    </body>
    </html>
  `)
})

// ========== PÁGINA DE VENDAS (APRESENTAÇÃO) ==========

app.get('/vendas', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Apresentação de Vendas - Structa</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Poppins', sans-serif; background: #F6F7F8; }
            
            .sidebar {
                position: fixed; left: 0; top: 0; height: 100vh; width: 280px;
                background: linear-gradient(180deg, #1F3B4D 0%, #2A4A5C 100%);
                box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1); transition: transform 0.3s ease;
                z-index: 1000; overflow-y: auto;
            }
            .sidebar-header {
                padding: 24px 20px; border-bottom: 1px solid rgba(201, 165, 109, 0.2);
                display: flex; align-items: center; gap: 12px;
            }
            .sidebar-logo { height: 40px; width: auto; }
            .sidebar-title {
                font-family: 'Playfair Display', serif; font-weight: 600;
                letter-spacing: 0.15em; color: #C9A56D; font-size: 1.3rem;
            }
            .sidebar-menu { padding: 20px 0; }
            .menu-item {
                display: flex; align-items: center; padding: 14px 24px; color: #F6F7F8;
                text-decoration: none; transition: all 0.3s; cursor: pointer;
                border-left: 3px solid transparent;
            }
            .menu-item:hover { background: rgba(201, 165, 109, 0.1); border-left-color: #C9A56D; }
            .menu-item.active { background: rgba(201, 165, 109, 0.15); border-left-color: #C9A56D; color: #C9A56D; }
            .menu-item i { width: 24px; margin-right: 12px; text-align: center; }
            
            .main-content { margin-left: 280px; min-height: 100vh; transition: margin-left 0.3s ease; }
            .top-bar {
                background: white; padding: 20px 32px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
                display: flex; justify-content: space-between; align-items: center;
            }
            .user-info { display: flex; align-items: center; gap: 12px; }
            .user-avatar {
                width: 40px; height: 40px; border-radius: 50%;
                background: linear-gradient(135deg, #C9A56D 0%, #B89558 100%);
                display: flex; align-items: center; justify-content: center;
                color: white; font-weight: 600;
            }
            .content-area { padding: 32px; }
            
            .page-container {
                min-height: calc(100vh - 80px);
                background: #F6F7F8;
                padding: 40px 20px;
            }
            .card-option {
                background: white;
                border-radius: 16px;
                padding: 40px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.08);
                transition: all 0.3s;
                cursor: pointer;
                border: 3px solid transparent;
            }
            .card-option:hover {
                transform: translateY(-8px);
                box-shadow: 0 12px 40px rgba(201, 165, 109, 0.2);
                border-color: #C9A56D;
            }
            .icon-circle {
                width: 80px;
                height: 80px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2rem;
                margin: 0 auto 24px;
            }
            
            @media (max-width: 768px) {
                .sidebar { transform: translateX(-100%); }
                .sidebar.active { transform: translateX(0); }
                .main-content { margin-left: 0; }
            }
        </style>
    </head>
    <body>
        ${getSidebarHTML()}
        
        <div class="main-content">
            ${getTopBarHTML('Apresentação de Vendas')}
            
            <div class="content-area">
                <div class="page-container">
                    <h1 style="font-size: 2rem; font-weight: 700; color: #1F3B4D; text-align: center; margin-bottom: 16px;">
                        Apresentação Interativa de Vendas
                    </h1>
                    <p style="text-align: center; color: #666; margin-bottom: 48px; font-size: 1.1rem;">
                        Escolha uma opção para continuar
                    </p>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px; max-width: 900px; margin: 0 auto;">
                        <div class="card-option" onclick="window.location.href='/vendas/apresentacao'">
                            <div class="icon-circle" style="background: linear-gradient(135deg, #1F3B4D 0%, #365C73 100%); color: white;">
                                <i class="fas fa-play"></i>
                            </div>
                            <h2 style="font-size: 1.5rem; font-weight: 600; color: #1F3B4D; text-align: center; margin-bottom: 12px;">
                                Iniciar Apresentação
                            </h2>
                            <p style="color: #666; text-align: center; line-height: 1.6;">
                                Inicie o modo apresentação em tela cheia com navegação por slides
                            </p>
                        </div>
                        
                        <div class="card-option" onclick="window.location.href='/vendas/configuracoes'">
                            <div class="icon-circle" style="background: linear-gradient(135deg, #C9A56D 0%, #B89558 100%); color: white;">
                                <i class="fas fa-cog"></i>
                            </div>
                            <h2 style="font-size: 1.5rem; font-weight: 600; color: #1F3B4D; text-align: center; margin-bottom: 12px;">
                                Configurações
                            </h2>
                            <p style="color: #666; text-align: center; line-height: 1.6;">
                                Gerencie os slides, ative ou desative slides específicos
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script>
            const token = localStorage.getItem('token');
            if (!token) window.location.href = '/';
            
            function logout() {
                if (confirm('Deseja realmente sair?')) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    window.location.href = '/';
                }
            }
        </script>
    </body>
    </html>
  `)
})

// ========== APRESENTAÇÃO INTERATIVA (SLIDE 1) ==========

app.get('/vendas/apresentacao', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Apresentação Structa</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
                font-family: 'Poppins', sans-serif;
                background: #1F3B4D;
                overflow: hidden;
            }
            
            .slide-container {
                width: 100vw;
                height: 100vh;
                display: flex;
                flex-direction: column;
                position: relative;
                overflow: hidden;
            }
            
            .slide-content {
                flex: 1;
                display: flex;
                flex-direction: column;
                padding: 30px 60px 80px;
                overflow: hidden;
            }
            
            .premium-badge {
                display: inline-block;
                background: linear-gradient(135deg, #C9A56D 0%, #B89558 100%);
                color: white;
                padding: 8px 30px;
                border-radius: 50px;
                font-size: 0.95rem;
                font-weight: 600;
                text-align: center;
                margin: 0 auto 20px;
                box-shadow: 0 4px 15px rgba(201, 165, 109, 0.3);
            }
            
            .logo-section {
                text-align: center;
                margin-bottom: 25px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8px;
            }
            
            .logo-section img {
                height: 50px;
                width: auto;
            }
            
            .logo-section .company-name {
                font-family: 'Playfair Display', serif;
                font-size: 2rem;
                font-weight: 700;
                color: #C9A56D;
                letter-spacing: 0.15em;
            }
            
            .logo-section .tagline {
                font-size: 1rem;
                color: #F6F7F8;
                font-weight: 300;
            }
            
            .two-columns {
                display: grid;
                grid-template-columns: 0.9fr 1.1fr;
                gap: 30px;
                margin-bottom: 25px;
                align-items: center;
                flex: 1;
            }
            
            .photo-column img {
                width: 100%;
                max-width: 350px;
                border-radius: 16px;
                box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
            }
            
            .text-column {
                color: #F6F7F8;
                font-size: 0.95rem;
                line-height: 1.7;
                font-weight: 300;
            }
            
            .text-column p {
                margin-bottom: 12px;
            }
            
            .text-column strong {
                color: #C9A56D;
                font-weight: 600;
            }
            
            .stats-section {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 25px;
                margin-bottom: 20px;
            }
            
            .stat-card {
                background: rgba(201, 165, 109, 0.1);
                border: 2px solid #C9A56D;
                border-radius: 12px;
                padding: 18px;
                text-align: center;
            }
            
            .stat-card .number {
                font-size: 1.8rem;
                font-weight: 700;
                color: #C9A56D;
                margin-bottom: 4px;
            }
            
            .stat-card .label {
                color: #F6F7F8;
                font-size: 0.9rem;
            }
            
            .cta-section {
                background: linear-gradient(135deg, #C9A56D 0%, #B89558 100%);
                border-radius: 16px;
                padding: 25px 35px;
                text-align: center;
            }
            
            .cta-section h2 {
                font-size: 1.5rem;
                font-weight: 700;
                color: #1F3B4D;
                margin-bottom: 10px;
            }
            
            .cta-section p {
                font-size: 0.95rem;
                color: #2A2A2A;
                margin-bottom: 18px;
                line-height: 1.5;
            }
            
            .cta-button {
                display: inline-block;
                background: #1F3B4D;
                color: white;
                padding: 12px 35px;
                border-radius: 50px;
                font-size: 1rem;
                font-weight: 600;
                text-decoration: none;
                transition: all 0.3s;
                box-shadow: 0 4px 15px rgba(31, 59, 77, 0.3);
            }
            
            .cta-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(31, 59, 77, 0.4);
            }
            
            .slide-navigation {
                position: fixed;
                bottom: 20px;
                right: 20px;
                display: flex;
                gap: 12px;
                z-index: 1000;
            }
            
            .nav-button {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: linear-gradient(135deg, #C9A56D 0%, #B89558 100%);
                color: white;
                border: none;
                font-size: 1.2rem;
                cursor: pointer;
                transition: all 0.3s;
                box-shadow: 0 4px 15px rgba(201, 165, 109, 0.4);
            }
            
            .nav-button:hover {
                transform: scale(1.1);
            }
            
            .nav-button:disabled {
                opacity: 0.3;
                cursor: not-allowed;
            }
            
            .exit-button {
                position: fixed;
                top: 20px;
                right: 20px;
                background: rgba(255, 255, 255, 0.1);
                color: white;
                border: 2px solid rgba(255, 255, 255, 0.3);
                padding: 10px 20px;
                border-radius: 50px;
                font-size: 0.9rem;
                cursor: pointer;
                transition: all 0.3s;
                z-index: 1001;
            }
            
            .exit-button:hover {
                background: rgba(255, 255, 255, 0.2);
            }
            
            @media (max-width: 1024px) {
                .slide-content { padding: 25px 40px 80px; }
                .two-columns { grid-template-columns: 1fr; gap: 20px; }
                .photo-column { text-align: center; }
                .photo-column img { max-width: 280px; }
                .stats-section { grid-template-columns: 1fr; gap: 15px; }
                .logo-section .company-name { font-size: 1.5rem; }
                .logo-section .tagline { font-size: 0.9rem; }
                .text-column { font-size: 0.85rem; }
                .cta-section h2 { font-size: 1.2rem; }
                .cta-section p { font-size: 0.85rem; }
                .cta-button { padding: 10px 25px; font-size: 0.9rem; }
            }
            
            @media (max-height: 700px) {
                .slide-content { padding: 20px 50px 70px; }
                .premium-badge { padding: 6px 25px; font-size: 0.85rem; margin-bottom: 15px; }
                .logo-section { margin-bottom: 15px; }
                .logo-section img { height: 40px; }
                .logo-section .company-name { font-size: 1.5rem; }
                .logo-section .tagline { font-size: 0.85rem; }
                .two-columns { gap: 20px; margin-bottom: 15px; }
                .text-column { font-size: 0.85rem; line-height: 1.5; }
                .text-column p { margin-bottom: 8px; }
                .stats-section { margin-bottom: 15px; gap: 15px; }
                .stat-card { padding: 12px; }
                .stat-card .number { font-size: 1.4rem; }
                .stat-card .label { font-size: 0.8rem; }
                .cta-section { padding: 18px 30px; }
                .cta-section h2 { font-size: 1.2rem; margin-bottom: 8px; }
                .cta-section p { font-size: 0.85rem; margin-bottom: 12px; }
                .cta-button { padding: 10px 30px; font-size: 0.9rem; }
            }
        </style>
    </head>
    <body>
        <div class="slide-container">
            <button class="exit-button" onclick="window.location.href='/vendas'">
                <i class="fas fa-times"></i> Sair da Apresentação
            </button>
            
            <div class="slide-content">
                <!-- Badge Premium -->
                <div style="text-align: center;">
                    <div class="premium-badge">Consultoria Premium</div>
                </div>
                
                <!-- Logo e Nome -->
                <div class="logo-section">
                    <img src="/static/logo-structa.png" alt="Structa">
                    <div class="company-name">STRUCTA</div>
                    <div class="tagline">Engenharia Patrimonial de Alta Performance para médicos.</div>
                </div>
                
                <!-- Duas Colunas -->
                <div class="two-columns">
                    <div class="photo-column">
                        <img src="/static/medico-foto.jpg" alt="Profissional">
                    </div>
                    <div class="text-column">
                        <p>Quando vi que funcionava, percebi algo importante:</p>
                        <p><strong>Muitos médicos vivem exatamente o que eu vivi.</strong><br>
                        Trabalham muito. Constroem pouco.<br>
                        Dependem exclusivamente da própria agenda.</p>
                        <p>Foi então que decidi compartilhar esse caminho.</p>
                        <p>Hoje, além de médico, atuo ajudando colegas a estruturarem patrimônio com <strong>estratégia, clareza e visão de longo prazo.</strong></p>
                        <p><strong>Não se trata de promessas rápidas.</strong><br>
                        Se trata de construção sólida.</p>
                        <p><strong>Não se trata de abandonar a medicina.</strong><br>
                        Se trata de não depender exclusivamente dela.</p>
                    </div>
                </div>
                
                <!-- Stats -->
                <div class="stats-section">
                    <div class="stat-card">
                        <div class="number">+R$ 100Mi</div>
                        <div class="label">em Créditos Gerenciados</div>
                    </div>
                    <div class="stat-card">
                        <div class="number">97,8%</div>
                        <div class="label">de Satisfação</div>
                    </div>
                </div>
                
                <!-- CTA -->
                <div class="cta-section">
                    <h2>Pronto para transformar seu futuro financeiro?</h2>
                    <p>Descubra como nossa metodologia pode gerar renda passiva consistente e construir seu patrimônio de forma inteligente</p>
                    <a href="#" class="cta-button" onclick="nextSlide(); return false;">
                        Pronto para conhecer nosso ecossistema <i class="fas fa-arrow-right" style="margin-left: 10px;"></i>
                    </a>
                </div>
            </div>
            
            <!-- Navegação -->
            <div class="slide-navigation">
                <button class="nav-button" onclick="previousSlide()" disabled>
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="nav-button" onclick="nextSlide()">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
        
        <script>
            function nextSlide() {
                alert('Próximo slide será implementado! Por enquanto, este é o slide 1.');
                // window.location.href = '/vendas/apresentacao/slide2';
            }
            
            function previousSlide() {
                // window.location.href = '/vendas/apresentacao';
            }
            
            // Navegação por teclado
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
                if (e.key === 'ArrowLeft') previousSlide();
                if (e.key === 'Escape') window.location.href = '/vendas';
            });
        </script>
    </body>
    </html>
  `)
})

export default app

function getSidebarHTML() {
  return `
    <div class="sidebar" id="sidebar">
        <div class="sidebar-header">
            <img src="/static/logo-structa.png" alt="Structa" class="sidebar-logo">
            <div class="sidebar-title">STRUCTA</div>
        </div>
        
        <nav class="sidebar-menu">
            <a href="/dashboard" class="menu-item">
                <i class="fas fa-chart-line"></i>
                <span>Dashboard</span>
            </a>
            <a href="/vendas" class="menu-item active">
                <i class="fas fa-handshake"></i>
                <span>Apresentação de Vendas</span>
            </a>
            <a href="/clientes" class="menu-item">
                <i class="fas fa-users"></i>
                <span>Clientes</span>
            </a>
            <a href="/cadastro-vendas" class="menu-item">
                <i class="fas fa-file-invoice-dollar"></i>
                <span>Cadastrar Vendas</span>
            </a>
            <a href="/relatorios" class="menu-item">
                <i class="fas fa-chart-bar"></i>
                <span>Relatórios</span>
            </a>
            <a href="/configuracoes" class="menu-item">
                <i class="fas fa-cog"></i>
                <span>Configurações</span>
            </a>
            <a onclick="logout()" class="menu-item" style="margin-top: auto; border-top: 1px solid rgba(201, 165, 109, 0.2);">
                <i class="fas fa-sign-out-alt"></i>
                <span>Sair</span>
            </a>
        </nav>
    </div>
  `;
}

function getTopBarHTML(title: string) {
  return `
    <div class="top-bar">
        <h1 style="font-size: 1.5rem; font-weight: 600; color: #1F3B4D;">${title}</h1>
        <div class="user-info">
            <div>
                <div style="font-weight: 600; color: #1F3B4D; text-align: right;" id="userName">Admin</div>
                <div style="font-size: 0.85rem; color: #666; text-align: right;">Administrador</div>
            </div>
            <div class="user-avatar">A</div>
        </div>
    </div>
  `;
}
