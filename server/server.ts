import app from './app';
import { swaggerDocs } from './src/api/v1/swagger/swagger';

const server = app.listen(app.get('port'), () => {
  console.log(`🚀  app listen on ${app.get('port')}`);
  swaggerDocs(app, app.get('port'));
});

export default server;
