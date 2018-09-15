import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Glee2 Boilerplate')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('customTag')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  const port = parseInt(process.env.SERVER_PORT || "3000", 10);
  await app.listen(port);
  console.log(`Listening on port ${port}.`);

}
bootstrap();
