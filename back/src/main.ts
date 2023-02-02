import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const port = 3000;

  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*'
  })

  const config = new DocumentBuilder()
    .setTitle('Auth')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  console.log(`App started at http://localhost:${port}`);
  console.log(`Swagger is available at http://localhost:${port}/api`);
  await app.listen(port);
}
bootstrap();
