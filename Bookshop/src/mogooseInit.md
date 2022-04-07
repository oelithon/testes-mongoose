Antes de tudo:

`npm init -y`

Vamos instalar o Mongoose e o Express em nossa aplicação:

`npm install mongoose express;`

Também precisamos instalar nossas dependências de desenvolvimento, faremos isso com:

`npm install -D typescript ts-node nodemon @types/express`

Dentro do package.json , vamos criar um script chamado "dev" para inicializar nossa aplicação com o nodemon:

```
  "scripts": {
    "dev": "nodemon --watch src/ --ext ts,json --ignore src//*.spec.ts --exec ts-node src/index.ts"
  },

```
