import { Get, Controller, UseGuards, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  root(@Req() request): string {
    return this.appService.root(request.user);
  }
}
