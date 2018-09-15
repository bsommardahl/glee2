import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secretOrPrivateKey: process.env.JWT_SECRET || 'secretKey',
            signOptions: {
                expiresIn: 3600,
            },
        }),
    ],
    providers: [JwtStrategy],
})
export class AuthModule { }