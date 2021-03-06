import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { StatusModule } from './status/status.module';
import { StatusController } from './status/status.controller';

@Module({
  imports: [AuthModule, StatusModule],
  controllers: [AppController, StatusController],
  providers: [AppService],
})
export class AppModule { }
