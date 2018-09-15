import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { JwtAuthGuard } from './modules/auth/jwt-auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const apiVersionPrefix:string = process.env.API_VERSION || 'v1';
  app.setGlobalPrefix(apiVersionPrefix);
  const options = new DocumentBuilder()
    .setTitle('Glee2 Boilerplate')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('customTag')
    .setBasePath(apiVersionPrefix)
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  
  SwaggerModule.setup(`api/${apiVersionPrefix}`, app, document);

  const port = parseInt(process.env.SERVER_PORT || "3000", 10);
  await app.listen(port);
  console.log(`Listening on port ${port}.`);
}

bootstrap();
