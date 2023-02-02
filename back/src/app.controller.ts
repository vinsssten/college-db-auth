import { Body, Controller, Get, HttpCode, Post, Query } from "@nestjs/common";
import { AppService } from './app.service';
import { SignUpDTO } from "./dto/SignUpDTO";
import { Repository } from "typeorm";
import { Auth } from "./entities/Auth";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { SignInDTO } from "./dto/SignInDTO";

@ApiTags('Auth')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Post('signUp')
  @HttpCode(200)
  signUp (
          @Query('login') login: string,
          @Query('password') password: string,
          @Query('name') name: string
  ) {
    return this.appService.signUp({ name, password, login });
  }

  @Post('signIn')
  @HttpCode(200)
  signIn (@Query('login') login: string, @Query('password') password: string) {
    try {
      return this.appService.signIn(login, password)
    } catch (e) {
      return {
        success: false,
        message: String(e)
      }
    }
  }
}
