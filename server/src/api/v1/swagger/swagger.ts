import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { Request, Response } from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'MELI API', version: '1.0.0' },
    servers: [
      {
        url: 'http://localhost:4000',
      },
    ],
  },
  apis: ['./src/api/v1/routes/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export const swaggerDocs = (app: any, port: number) => {
  app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
  app.get('/api/v1/docs.json', (_req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
  console.log(`📒  Version 1 Docs are available on http://localhost:${port}/api/v1/docs`);
};
