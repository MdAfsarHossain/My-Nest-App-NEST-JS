/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { EvService } from './ev.service';

@Controller('ev')
export class EvController {
  constructor(private readonly evService: EvService) {}
  @Get()
  getUrl() {
    return this.evService.getDbUrl();
  }
  //   http://localhost:3000/ev
}

// Add this in app.module.ts file
// ConfigModule.forRoot({
//   isGlobal: true,
// }),
