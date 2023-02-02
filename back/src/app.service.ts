import { Injectable } from '@nestjs/common';
import { Auth } from "./entities/Auth";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { SignUpDTO } from "./dto/SignUpDTO";
import { ApiBody } from "@nestjs/swagger";

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Auth)
    private authRepository: Repository<Auth>,) {
  }

  async signUp (info: SignUpDTO) {
    console.log(`Sign up with login: ${info.login}`);
    await this.authRepository.insert({
      ...info
    })
    return true;
  }
  async signIn (login: string, password: string) {
    const user = await this.authRepository.findOne({
      where: {login}
    })

    if (!user) {
      throw 'Incorrect login or password'
    }

    if (user.password != password) {
      throw 'Incorrect login or password'
    }

    return true
  }
}
