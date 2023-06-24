import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseService } from './base.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, BaseService],
})
export class AppModule {}
