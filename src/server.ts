import express, { Express, Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import * as serverless from 'aws-serverless-express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

const router: Router = express.Router();

function verifyApiKey(req: express.Request, res: express.Response, next: express.NextFunction) {
  const apiKey = req.header('X-API-KEY');
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  } else {
    next();
  }
}

router.use(verifyApiKey);

const swaggerDocument = require('../swagger.json');
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', router);

// Create a serverless Express server
const server = serverless.createServer(app);

export const handler = (event: any, context: any) => {
  // Pass AWS Lambda event and context to serverless Express server
  return serverless.proxy(server, event, context);
};