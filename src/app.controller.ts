import { Req, Get, Controller, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBearerAuth } from '@nestjs/swagger'
import { JwtAuthGuard } from './modules/auth/jwt-auth.guard';

@Controller()
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  root(@Req() request): string {
    return this.appService.root(request.user);
  }
}
