## 🚀 Academia Accenture 2025 - Testes Automatizados com Cypress

Bem-vindo ao repositório de testes automatizados utilizando **Cypress**!  
Este projeto tem como objetivo garantir a qualidade e o funcionamento correto da aplicação através de testes end-to-end.

## 🖼️ Exemplos de Telas e Resultados
Veja abaixo uma imagen do funcionamento do projeto:

![Video_PARA_GIFT_DESAFIO_ACCENTE_1](https://github.com/user-attachments/assets/e665890c-bcf5-46d4-9344-6865643575c4)


## 🛠️ Tecnologias e Ferramentas Utilizadas

- [Cypress](https://www.cypress.io/) 🧪 — Framework de testes E2E
- [Node.js](https://nodejs.org/) 🟩 — Ambiente de execução JavaScript
- [npm](https://www.npmjs.com/) 📦 — Gerenciador de pacotes
- [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) 🥒 — Permite escrever testes em formato Gherkin (BDD) usando arquivos `.feature`
- [Faker.js](https://fakerjs.dev/) 🎲 — Biblioteca para geração de dados fake/dinâmicos nos testes automatizados, facilitando a criação de cenários realistas e evitando dados duplicados.

### Como o Faker.js é utilizado?

A biblioteca `faker.js` é utilizada nos arquivos da pasta `support/pages` para gerar dados como nomes, e-mails, senhas e outros campos necessários durante a execução dos testes.  
Isso garante que cada execução utilize informações únicas, tornando os testes mais robustos e confiáveis.

**Exemplo de uso:**
```javascript
// ...existing code...
import { faker } from '@faker-js/faker';

const nomeFake = faker.person.fullName();
const emailFake = faker.internet.email();
// ...existing code...
```


## 📁 Estrutura do Projeto

```
academia_accenture2025/
├── cypress/
│   ├── e2e/
│   ├── fixtures/
│   ├── support/
├── cypress.config.js
├── package.json
└── README.md
```

- **cypress/e2e/**: Onde ficam os testes automatizados.
- **cypress/fixtures/**: Arquivos de dados para os testes.
- **cypress/support/**: Comandos customizados e configurações globais.

## ⚙️ Como instalar e rodar os testes

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Abra o Cypress em modo interativo**
   ```bash
   npx cypress open
   ```
   Ou rode os testes em modo headless:
   ```bash
   npx cypress run
   ```

   
