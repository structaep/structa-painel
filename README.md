# Structa Engenharia Patrimonial - Painel Administrativo

## 🎯 Visão Geral
Sistema administrativo robusto para gestão da Structa Engenharia Patrimonial de Alta Performance. Aplicação web moderna com autenticação segura, níveis de acesso e interface elegante seguindo a identidade visual da marca.

## 🌐 URLs de Acesso

### Produção
- **Domínio Customizado**: https://painel.structaep.com.br
- **Cloudflare Pages**: https://structa-painel.pages.dev

### Desenvolvimento (Sandbox)
- **Aplicação**: https://3000-ickbeww795x0p12y0gre1-2e1b9533.sandbox.novita.ai
- **API**: https://3000-ickbeww795x0p12y0gre1-2e1b9533.sandbox.novita.ai/api

### Repositório
- **GitHub**: https://github.com/structaep/structa-painel

## ✅ Funcionalidades Implementadas

### 1. **Sistema de Autenticação** ✅
- Página de login elegante com identidade visual Structa
- Autenticação JWT com tokens seguros (8h de validade)
- Sistema de níveis de acesso (admin, seller, user)
- Proteção de rotas com middleware de autenticação
- Login simplificado: **admin / admin123**
- Link "Esqueci minha senha"
- Design responsivo (mobile, tablet, desktop)

### 2. **Dashboard Completo** ✅
- Sidebar lateral fixa com navegação
- Top bar com informações do usuário
- Cards de métricas principais:
  - Vendas do Mês
  - Clientes Ativos
  - Negociações
  - Taxa de Conversão
- Gráficos interativos (Chart.js):
  - Vendas por Mês (linha)
  - Tipos de Consórcio (donut)
  - Status das Vendas (pie)
- Menu mobile com botão hamburger flutuante
- Função de logout

### 3. **Apresentação Interativa de Vendas** ✅
- **Página inicial** `/vendas` com:
  - Botão "Iniciar Apresentação"
  - Botão "Configurações" (futuro gerenciamento)
- **Slide 1** - Institucional:
  - Badge premium "Consultoria Premium"
  - Logo + nome STRUCTA (layout horizontal)
  - Tagline "Engenharia Patrimonial de Alta Performance para médicos"
  - Duas colunas: foto profissional + texto motivacional
  - Cards de estatísticas: +R$ 100Mi gerenciados, 97,8% satisfação
  - Seção CTA com botão de ação
  - **Navegação completa**:
    - Botões próximo/anterior (canto inferior direito)
    - Teclas seta direita/esquerda
    - Barra de espaço para avançar
    - ESC para sair
    - Botão "Sair da Apresentação" (canto superior direito)
  - **Layout ultra compacto**:
    - 100vh altura com flexbox center
    - SEM ROLAGEM - tudo visível em uma tela
    - Totalmente responsivo (desktop, laptop, tablet, mobile)
    - Media queries para altura e largura
    - Fontes e espaçamentos otimizados

### 4. **Banco de Dados D1** ✅
- Estrutura completa de tabelas:
  - **users**: Usuários com níveis de acesso
  - **clients**: Cadastro de clientes
  - **sales**: Registro de vendas de consórcios
- Índices otimizados para performance
- Migrações versionadas
- Dados de seed para testes
- **Banco em produção**: ff0027fb-66ac-4b06-932d-abfb35fc2b13

### 5. **API Backend** ✅
- Endpoint de login: `POST /api/auth/login`
- Endpoint de verificação: `GET /api/auth/me`
- Endpoint de usuários: `GET /api/users` (apenas admin)
- Middleware de autenticação JWT
- Validação de dados e tratamento de erros

## 🔐 Credenciais de Acesso

### Administrador Simplificado
- **Usuário**: admin
- **Senha**: admin123
- **Nível**: admin
- **Acesso**: Total ao sistema

## 📊 Estrutura de Dados

### Tabela: users
```sql
- id: INTEGER (PK)
- email: TEXT (UNIQUE)
- password_hash: TEXT
- name: TEXT
- role: TEXT (admin, seller, user)
- status: TEXT (active, inactive)
- created_at, updated_at: DATETIME
```

### Tabela: clients
```sql
- id: INTEGER (PK)
- name, cpf, email, phone: TEXT
- address, city, state, zipcode: TEXT
- notes: TEXT
- created_by: INTEGER (FK users)
- created_at, updated_at: DATETIME
```

### Tabela: sales
```sql
- id: INTEGER (PK)
- client_id: INTEGER (FK clients)
- consortium_type: TEXT (Imóvel, Veículo)
- credit_value, installment_value: REAL
- installments: INTEGER
- status: TEXT (pending, active, cancelled)
- contract_date, first_payment_date: DATE
- seller_id: INTEGER (FK users)
- notes: TEXT
- created_at, updated_at: DATETIME
```

## ❌ Funcionalidades Pendentes

### Próximos Slides da Apresentação 🚧
- **Slide 2**: Conteúdo a ser definido
- **Slide 3**: Conteúdo a ser definido
- **Slide N**: Slides adicionais conforme necessário
- **Configurações**: Sistema para ativar/desativar slides

### Cadastro de Clientes 🚧
- Formulário completo de cadastro
- Listagem de clientes
- Edição e exclusão
- Busca e filtros

### Cadastro de Vendas 🚧
- Formulário de registro de vendas
- Seleção de cliente
- Cálculo automático de parcelas
- Status de venda

### Métricas Reais no Dashboard 🚧
- Integração com banco D1
- Dados reais de vendas
- Atualização automática
- Gráficos com dados dinâmicos

## 🎨 Identidade Visual

### Cores Principais
- **Azul-petróleo**: `#1F3B4D` (institucional)
- **Dourado champagne**: `#C9A56D` (premium)
- **Branco gelo**: `#F6F7F8` (background)
- **Cinza grafite**: `#2A2A2A` (textos)

### Tipografia
- **Logo**: Playfair Display SemiBold
- **Títulos**: Playfair Display
- **Corpo**: Poppins

### Símbolo
- Bastão de Asclépio estilizado (⚕)

## 🚀 Próximos Passos Recomendados

1. **Criar Slide 2 da Apresentação** 
   - Definir conteúdo e layout
   - Manter padrão compacto sem rolagem
   - Adicionar navegação entre slides

2. **Sistema de Configuração de Slides**
   - Página para ativar/desativar slides
   - Ordenação de slides
   - Preview antes de apresentar

3. **Implementar CRUD de Clientes**
   - Formulário de cadastro
   - Listagem com paginação
   - Busca e filtros avançados

4. **Implementar CRUD de Vendas**
   - Formulário completo
   - Validações
   - Relatórios

5. **Conectar Métricas Reais**
   - Buscar dados do D1
   - Atualizar cards automaticamente
   - Gráficos com dados reais

## 🛠️ Stack Tecnológica

- **Backend**: Hono (Cloudflare Workers)
- **Frontend**: HTML + TailwindCSS + Vanilla JavaScript
- **Banco de Dados**: Cloudflare D1 (SQLite)
- **Autenticação**: JWT + bcrypt
- **Deploy**: Cloudflare Pages
- **Versionamento**: Git + GitHub
- **Process Manager**: PM2

## 📦 Comandos Úteis

```bash
# Desenvolvimento
npm run dev:sandbox          # Iniciar servidor local
npm run build                # Build do projeto

# Banco de Dados
npm run db:migrate:local     # Aplicar migrações localmente
npm run db:migrate:prod      # Aplicar migrações em produção

# PM2
pm2 list                     # Listar serviços
pm2 logs structa-admin --nostream  # Ver logs
pm2 restart structa-admin    # Reiniciar serviço
pm2 delete structa-admin     # Remover do PM2

# Deploy
npm run deploy               # Deploy para Cloudflare Pages

# Utilitários
npm run clean-port           # Limpar porta 3000
npm run test                 # Testar aplicação
```

## 📝 Status do Projeto

- **Fase Atual**: ✅ Dashboard + Apresentação Slide 1 Completos
- **Progresso**: 45% (3 de 7 funcionalidades principais)
- **Última Atualização**: 2026-03-01
- **Status**: 🟢 Em Desenvolvimento Ativo
- **Deploy**: 🟢 Online em Produção

## 🔒 Segurança

- Senhas hasheadas com bcrypt (salt rounds: 10)
- Tokens JWT com expiração de 8 horas
- Middleware de autenticação em rotas protegidas
- Validação de níveis de acesso
- Proteção contra SQL injection (prepared statements)

## 📱 Responsividade

- Design responsivo com TailwindCSS
- Funciona em desktop, tablet e mobile
- Interface otimizada para diferentes tamanhos de tela

---

**Desenvolvido para Structa Engenharia Patrimonial** - Sistema de Gestão de Alta Performance
