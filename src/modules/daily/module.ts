/**
 * Module (模块注册层) 负责注册依赖关系
 */

import { Module } from '@nestjs/common';
import { DailyController } from './controller/index';
import { DailyService } from './service/index';
import { MailService } from '../../services/mail.service';

@Module({
  imports: [],
  exports: [DailyService],
  providers: [DailyService, MailService],
  controllers: [DailyController],
})
export class DailyModule {}
