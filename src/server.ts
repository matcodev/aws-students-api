import express, { Express, Router, Request, Response, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';
import * as serverless from 'aws-serverless-express';
import dotenv from 'dotenv';
import swaggerDocument from './swagger.json';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';

dotenv.config();

const app: Express = express();
const router: Router = express.Router();

function verifyApiKey(req: Request, res: Response, next: NextFunction) {
  const apiKey = req.header('X-API-KEY');
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  } else {
    next();
  }
}

router.use('/dev/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use(verifyApiKey);
app.use('/', router);

const server = serverless.createServer(app);

export const handler = (event: APIGatewayProxyEvent, context: Context) => {
  return serverless.proxy(server, event, context);
};