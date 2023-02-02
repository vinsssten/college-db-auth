import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Auth } from "./entities/Auth";


const options: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123123123',
  database: 'postgres',
  entities: [Auth],
};

@Module({
  imports: [
    TypeOrmModule.forRoot(options),
    TypeOrmModule.forFeature([Auth]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
