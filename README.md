## Analise estatica

Um processo de examinar o código-fonte do JavaScript sem realmente executá-lo.

As ferramentas de análise estática examinam o código JavaScript em busca de problemas como:

- Erros de Sintaxe: Verificar se o código segue as regras gramaticais da linguagem.
- Padrões de Codificação: Identificar o uso inconsistente de estilos de codificação, como espaços em branco, indentação, etc.
- Análise de Fluxo de Dados: Rastrear o fluxo de dados através do código para identificar variáveis não utilizadas, acessos inseguros a objetos, entre outros.
- Detecção de Erros Comuns: Identificar potenciais erros lógicos ou bugs, como acessos indefinidos ou comparações errôneas.
- Segurança: Procurar por vulnerabilidades conhecidas de segurança, como XSS (Cross-Site Scripting) ou injeção de SQL.

### Prettier 
Deixa o código em uma formatação padrão, conforme previamente definido. 
Instalar prettier: npm i -D prettier

Adicionando no package.json em scripts o comando: 
"format": "prettier --write \"src/**/*{.js,jsx}\"" 

Ao posteriormente chamar o comando as configurações definidas no .prettierrc será aplicada em todos os arquivos. 

### Instalando o ES lint
-> Novo terminal
-> npm i -D eslint eslint-config-prettier
-> Adicionar configuração em .eslintrc

- Instalando Plugins do React 
-> npm install -D eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks

-> Adicionando plugins no extend em .eslintrc:

"extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
    ]

-> Adicionando rules fo Lint e alguns plugins:

  "rules": {
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": "warn",
    "no-unused-vars": "off",
    "import/no-unresolved": "off"
  },
  "plugins": [
    "react",
    "import",
    "jsx-a11y"
  ],

-> Adicionando config para que o Lint detecte a versão do React

"settings": {
    "react": {
      "version": "detect"
    }
  }

-> Adicionando no package.json em scripts o comando: 

"lint": "eslint \"src/**/*{.js,.jsx}\" --quiet",

Assim, as regras de Lint serão aplicadas em qualquer arquivo com extensão .js ou .jsx na pasta "src"

### Métodos Assíncronos

Utilizados para lidar com códigos assíncronos, experam que as promises sejam resolvidas para fazer a consulta. 

Exemplo de Caso: Requisição a uma API

Alguns métodos assíncronos: 
- findBy()
- findAllBy()

Mais sobre: <a href="https://testing-library.com/docs/dom-testing-library/api-async/">Link<a>


-> Usar o toMatchSnapshot para gravar o código padrão usado no teste, pois caso haja alterações ele sinaliza, recomendado usar junto a asserções fortes que testam o componente.

### jest.fn

Uma função fornecida pelo framework de teste Jest para criar mocks ou espiões de funções.

- mock: um objeto simulado que substitui uma função real durante os testes, permitindo verificar como ela é chamada e controlar seu comportamento.

### it ou test?

Principalmente uma questão de preferência de sintaxe. A escolha entre it e test depende do framework de teste.

- Ao utilizar Mocha, usar it; 
- Ao utilizar Jest, use test. 

Ambos funcionam de forma semelhante e servem ao mesmo propósito de escrever e organizar testes em JS.


### build seguro
Na vercel Vercel: script de build que garante que a aplicação só será enviada para produção caso todos os testes passem -> react-scripts test && react-scripts build