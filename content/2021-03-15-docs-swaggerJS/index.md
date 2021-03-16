---
title: "documentando con swaggerJS"
path: blog/docs-swaggerJS
tags: [nodejs]
cover: ./swagger.jpeg
date: 2021-03-15
draw: true
excerpt: docs-swaggerJS

---


# intento 1

npm install swagger-jsdoc@5.0.1 --save-exact
npm install swagger-ui-express --save

config general 
```
// app.js
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for JSONPlaceholder',
    version: '1.0.0',
    description:
      'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'JSONPlaceholder',
      url: 'https://jsonplaceholder.typicode.com',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
```






# intento 2 
npm i swagger-ui-express@4.1.6
npm i swagger-jsdoc@6.0.1


config general 
```
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "A simple Express Library API"
    },
    servers: [
      {
        url: "https://5s5s7.sse.codesandbox.io/"
      }
    ]
  },
  apis: ["./routes/*.js"]
};

const specs = swaggerJsDoc(options);

//const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

```

# usado 

```
import swaggerJsDoc from 'swagger-jsdoc';
import Config from './config.js';

const cfg = new Config();
/* setup swagger docs */
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: tituloaplicacion,
      version: versionaplicacion,
      description: descripcionaplicacion,
    },
    servers: [
      {
        url: https://direccion.com,
      },
    ],
  },
  apis: ['./src/routes/*.js', './src/models/*.js', './app.js'],
};
const specs = swaggerJsDoc(options);

route.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));
```


# esquema de ejemplo para un modelo/objeto
```

/**
 * @swagger
 * components:
 *   schemas:
 *     product:
 *       type: object
 *       required:
 *       properties:
 *         id:
 *           type: int
 *           description: the product id unique
 *         name:
 *           type: string
 *           description: the product name
 *         url_image:
 *           type: string
 *           description: the product image
 *         price:
 *           type: float
 *           description: the product price
 *         discount:
 *           type: int
 *           description: the product discount
 *         category:
 *           type: int
 *           description: the product category
 *       example:
 *         id: 99
 *         name: cafe enlatado
 *         url_image: https://picsum.photos/200/300/
 *         price: 2900
 *         discount: 90
 *         category: "naturales"
 */
```

# documentando una ruta de api

```

/**
 * @swagger
 * /api/product:
 *   get:
 *     summary: Returns the list of all the products
 *     tags: [api product]
 *     responses:
 *       200:
 *         description: The list of the product
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/product'
 */

```

```
/**
 * @swagger
 * /api/product/{formName}:
 *   get:
 *     summary: find products by name
 *     tags: [api product]
 *     parameters:
 *       - in: path
 *         name: formName
 *         schema:
 *           type: string
 *           default: pisco
 *         required: true
 *     responses:
 *       200:
 *         description:  find some product filtering by name
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/product'
 */
```