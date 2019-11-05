import cors from '@koa/cors';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import mongoose from 'mongoose';
import restc from 'restc';
import { connectionString, port } from './config';
import routing from './routes/';

const mongoOptions = { "useNewUrlParser": true, "useUnifiedTopology": true };

mongoose.Promise = global.Promise;
mongoose.connect(connectionString, mongoOptions);
mongoose.connection.on('error', console.error);

// Create Koa Application
const app = new Koa();
const serve = require('koa-static');

app
  .use(cors())
  .use(logger())
  .use(serve('apidocs'))
  .use(restc.koa2())
  .use(bodyParser())

routing(app);

// Start the application
app.listen(port, () => console.log(`✅  The server is running at http://localhost:${port}/`))

export default app
