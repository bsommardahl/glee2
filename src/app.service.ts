import { Injectable } from '@nestjs/common';
import { JwtPayload } from './modules/auth/jwt-payload.interface';

@Injectable()
export class AppService {
  root(user: JwtPayload): string {
    return `Hello ${user.name}!`;
  }
}
