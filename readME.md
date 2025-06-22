# Hexagonal Architecture Boilerplate - Criação de Usuário

## Requisitos Funcionais

Este projeto é um boilerplate simples utilizando arquitetura hexagonal para a funcionalidade de criação de usuário. Abaixo estão os requisitos funcionais implementados:

1. **Cadastro de Usuário**
   - O sistema deve permitir o cadastro de um novo usuário informando os dados obrigatórios (nome, e-mail, senha).
   - Deve validar se o e-mail informado já está em uso.
   - A senha deve ser armazenada de forma segura (hash).

2. **Validação de Dados**
   - O sistema deve validar os dados de entrada, garantindo que todos os campos obrigatórios estejam preenchidos e que o e-mail seja válido.
   - Deve retornar mensagens de erro apropriadas em caso de dados inválidos.

3. **Persistência**
   - O usuário cadastrado deve ser salvo em um repositório (banco de dados ou mock).

4. **Arquitetura Hexagonal**
   - Separação clara entre camadas de domínio, aplicação, infraestrutura e apresentação.
   - Utilização de portas e adaptadores para comunicação entre as camadas.

5. **Testes**
   - O projeto deve conter testes unitários para a lógica de criação de usuário.

## Requisitos Não Funcionais

1. **Segurança**
   - As senhas dos usuários devem ser armazenadas utilizando algoritmos de hash seguros.
   - O sistema deve validar e sanitizar todas as entradas para evitar vulnerabilidades comuns.

2. **Manutenibilidade**
   - O código deve ser modular e seguir princípios SOLID para facilitar manutenção e evolução.
   - A arquitetura deve permitir fácil substituição de implementações (ex: troca de banco de dados).

3. **Testabilidade**
   - O projeto deve ser facilmente testável, com dependências injetáveis e cobertura de testes unitários.

4. **Documentação**
   - O projeto deve conter documentação clara sobre a estrutura, uso e pontos de extensão.

5. **Performance**
   - O sistema deve ser capaz de cadastrar usuários de forma eficiente, mesmo com múltiplas requisições simultâneas.

## Requisitos de Design

1. **Arquitetura Hexagonal (Ports & Adapters)**
   - Separação entre lógica de negócio (domínio), casos de uso (aplicação), interfaces externas (infraestrutura) e camada de apresentação.
   - Comunicação entre as camadas feita por meio de interfaces (ports) e implementações (adapters).

2. **Organização de Pastas**
   - `src/domain`: Entidades, repositórios e regras de negócio.
   - `src/application`: Casos de uso e DTOs.
   - `src/infrastructure`: Implementações de repositórios, serviços externos e configurações.
   - `src/presentation`: Controladores, rotas e middlewares HTTP.
   - `src/shared`: Utilitários e componentes compartilhados.

3. **Padrões de Projeto**
   - Utilização de DTOs para transferência de dados entre camadas.
   - Injeção de dependências para facilitar testes e desacoplamento.
   - Validação centralizada de dados de entrada.

4. **Extensibilidade**
   - O projeto deve permitir fácil adição de novos casos de uso e integrações externas sem impactar a lógica de negócio.

## Como Usar

1. Instale as dependências:

   ```sh
   pnpm install
   ```

2. Execute o servidor de desenvolvimento:

   ```sh
   pnpm start
   ```

3. Execute os testes:

   ```sh
   pnpm test
   ```

---

Este boilerplate serve como ponto de partida para projetos Node.js utilizando arquitetura hexagonal, focando no desenvolvimento de forma limpa, testável e escalável.
