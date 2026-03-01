-- Inserir usuário admin de teste
-- Email: admin@structa.com.br
-- Senha: admin123
-- Hash bcrypt gerado: $2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdTq/VQ2q

INSERT OR REPLACE INTO users (id, email, password_hash, name, role, status) 
VALUES (1, 'admin@structa.com.br', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdTq/VQ2q', 'Administrador Structa', 'admin', 'active');

-- Inserir usuários vendedores de teste
INSERT OR IGNORE INTO users (email, password_hash, name, role, status) 
VALUES 
  ('vendedor1@structa.com.br', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdTq/VQ2q', 'João Silva', 'seller', 'active'),
  ('vendedor2@structa.com.br', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdTq/VQ2q', 'Maria Santos', 'seller', 'active');

-- Inserir clientes de exemplo
INSERT OR IGNORE INTO clients (name, cpf, email, phone, city, state, created_by) 
VALUES 
  ('Ana Paula Costa', '123.456.789-00', 'ana@email.com', '(11) 98765-4321', 'São Paulo', 'SP', 1),
  ('Carlos Eduardo Lima', '987.654.321-00', 'carlos@email.com', '(11) 97654-3210', 'São Paulo', 'SP', 1),
  ('Beatriz Oliveira', '456.789.123-00', 'beatriz@email.com', '(21) 96543-2109', 'Rio de Janeiro', 'RJ', 1);

-- Inserir vendas de exemplo
INSERT OR IGNORE INTO sales (client_id, consortium_type, credit_value, installments, installment_value, status, contract_date, seller_id) 
VALUES 
  (1, 'Imóvel', 200000.00, 120, 1666.67, 'active', '2026-01-15', 2),
  (2, 'Veículo', 80000.00, 80, 1000.00, 'active', '2026-02-10', 3),
  (3, 'Imóvel', 350000.00, 150, 2333.33, 'pending', '2026-02-28', 2);
