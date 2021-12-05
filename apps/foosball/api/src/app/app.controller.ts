import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('ping')
  getTestDataPing() {
    return this.appService.getTestDataPing();
  }

  @Get('user')
  getUser() {
    return this.appService.getUser('john@example.com');
  }

}