# Structa Engenharia Patrimonial - Painel Administrativo

## 🎯 Visão Geral
Sistema administrativo robusto para gestão da Structa Engenharia Patrimonial de Alta Performance. Aplicação web moderna com autenticação segura, níveis de acesso e interface elegante seguindo a identidade visual da marca.

## 🌐 URLs de Acesso

### Produção (Configurado)
- **Domínio Principal**: https://www.structaep.com.br
- **Painel Admin**: https://painel.structaep.com.br (após deployment)
- **Cloudflare Pages**: Aguardando configuração

### Desenvolvimento (Sandbox)
- **Aplicação**: https://3000-ickbeww795x0p12y0gre1-2e1b9533.sandbox.novita.ai
- **API**: https://3000-ickbeww795x0p12y0gre1-2e1b9533.sandbox.novita.ai/api

## ✅ Funcionalidades Implementadas

### 1. **Sistema de Autenticação** ✅
- Página de login elegante com identidade visual Structa
- Autenticação JWT com tokens seguros (8h de validade)
- Sistema de níveis de acesso (admin, seller, user)
- Proteção de rotas com middleware de autenticação
- Mensagens de erro e sucesso amigáveis

### 2. **Banco de Dados D1** ✅
- Estrutura completa de tabelas:
  - **users**: Usuários com níveis de acesso
  - **clients**: Cadastro de clientes
  - **sales**: Registro de vendas de consórcios
- Índices otimizados para performance
- Migrações versionadas
- Dados de seed para testes

### 3. **API Backend** ✅
- Endpoint de login: `POST /api/auth/login`
- Endpoint de verificação: `GET /api/auth/me`
- Endpoint de usuários: `GET /api/users` (apenas admin)
- Middleware de autenticação JWT
- Validação de dados e tratamento de erros

## 🔐 Credenciais de Teste

### Administrador
- **Email**: admin@structa.com.br
- **Senha**: admin123
- **Nível**: admin

### Vendedores
- **Email**: vendedor1@structa.com.br / vendedor2@structa.com.br
- **Senha**: admin123
- **Nível**: seller

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

### 2. **Dashboard com Métricas** 🚧
- Visão geral de vendas
- Gráficos de performance
- Métricas principais (total de vendas, clientes, etc.)
- Cards informativos

### 3. **Sidebar de Navegação** 🚧
- Menu lateral com todas funcionalidades
- Navegação entre seções
- Indicador de página ativa
- Perfil do usuário logado

### 4. **Apresentação Interativa de Vendas** 🚧
- Visualização de vendas em formato interativo
- Filtros e ordenação
- Cards com detalhes das vendas

### 5. **Cadastro de Clientes** 🚧
- Formulário completo de cadastro
- Listagem de clientes
- Edição e exclusão
- Busca e filtros

### 6. **Cadastro de Vendas** 🚧
- Formulário de registro de vendas
- Seleção de cliente
- Cálculo automático de parcelas
- Status de venda

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

1. **Criar Dashboard Completo** 
   - Implementar métricas e gráficos
   - Adicionar widgets informativos
   - Integrar dados reais das vendas

2. **Desenvolver Sidebar de Navegação**
   - Menu lateral responsivo
   - Ícones para cada seção
   - Sistema de rotas

3. **Implementar CRUD de Clientes**
   - Formulário de cadastro
   - Listagem com paginação
   - Busca e filtros avançados

4. **Implementar CRUD de Vendas**
   - Formulário completo
   - Validações
   - Relatórios

5. **Sistema de Relatórios**
   - Exportação de dados
   - Gráficos avançados
   - Dashboard analítico

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

- **Fase Atual**: ✅ Login e Autenticação Concluídos
- **Progresso**: 20% (1 de 5 funcionalidades principais)
- **Última Atualização**: 2026-03-01
- **Status**: 🟢 Em Desenvolvimento Ativo

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
