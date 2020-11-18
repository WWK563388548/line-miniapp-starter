# line-miniapp-starter
A React + redux boilerplate of Line mini app

## How to use this:
- Run project on local environment: `yarn start` or `npm run start`
- Build project: `yarn build` or `npm run build`

## File structure:
```
project
│   README.md
│   babel.config.js // All of babel settings
│   package.json
│   tsconfig.json
│
└───src
│   │   App.tsx
│   │   app.scss 
│   │   app.scss.d.ts // Let the ts project support scss/sass
│   │   globalStyles.ts // Global styles
|   |   index.tsx
|   |   typed-css.d.ts // Let the ts project support scss/sass
│   │
│   └───assets // Place image resources and icons
│   |    │   icons
│   |    │   ...
|   | 
|   └───components // Place components and some default components
│   |
│   |
|   |
|   └───pages // Place the main page components
│   |
│   |
|   |
|   └───store // Place redux files
│   |
│   |
|   |
|   └───utils // Place util function(like request etc.)
│   
└───webpack // All of webpack settings
│    │   webpack.config.dev.js
│    │   webpack.config.prod.js
│
└───public
    │   index.html // Packaged resources, js files are placed here, and html is also here, 
                   // you can insert various script tags according to your needs 
                   // (such as line sdk： <script src="https://static.line-scdn.net/liff/edge/2.1/sdk.js"></script>）
```
