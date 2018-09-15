import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
    ) { }

    async signIn(): Promise<string> {
        // In the real-world app you shouldn't expose this method publicly
        // instead, return a token once you verify user credentials
        const user: JwtPayload = { email: 'user@email.com' };
        return this.jwtService.sign(user);
    }

    async validateUser(_payload: JwtPayload): Promise<any> {
        // validate the jwt (npo db needed)
        return true;
    }
}