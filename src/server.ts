import express, { Express, Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import * as serverless from 'aws-serverless-express';
import path from 'path';

const app: Express = express();

const router: Router = express.Router();

const swaggerDocument = require('../swagger.json');
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', router);

// Create a serverless Express server
const server = serverless.createServer(app);

export const handler = (event: any, context: any) => {
  // Pass AWS Lambda event and context to serverless Express server
  return serverless.proxy(server, event, context);
};