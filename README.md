## Analise estatica

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

-> Adicionando config para que i Lint detecte a versão do React

"settings": {
    "react": {
      "version": "detect"
    }
  }

-> Adicionando no package.json em scripts o comando: 

"lint": "eslint \"src/**/*{.js,.jsx}\" --quiet",

Assim, as regras de Lint serão aplicadas em qualquer arquivo com extensão .js ou .jsx na pasta "src"

