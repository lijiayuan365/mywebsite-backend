/**
 * Service (业务逻辑处理层) 负责定义对外暴露的能力，即本身可以完成哪些任务，并对内协调 Manager/Provider/DAO 层来处理业务逻辑
 *
 * 本层的使用场景有：
 *
 * 1. 对 Manager 层的调用
 * 2. 对 Provider 层的调用
 * 3. 对 DAO 层的调用
 *
 * 当设计复杂业务场景时，应该考虑将 Service 部分处理逻辑下沉为 Manager
 */

import { Injectable } from '@nestjs/common';
import { MailService } from '../../../services/mail.service';
import { awaitTo } from 'src/utils';

@Injectable()
export class DailyService {
  constructor(private readonly mailService: MailService) {}
  public async sendEmail(toEmail: string = '') {
    const [err, data] = await awaitTo(
      this.mailService.sendMail({
        to: toEmail,
        subject: '打卡提醒',
        text: 'hello world',
      }),
    );
    if (err) return err;
    return data;
  }
}

// import {
//   FindDailyDTO,
//   CreateDailyDTO,
//   UpdateDailyDTO,
//   PaginatedDailyDTO,
// } from '../dto';

// import { DailyDAO } from '../dao';

// @Injectable()
// export class DailyService {
//   constructor(
//     private readonly DAO: DailyDAO,
//   ) {}

//   /** 单条查询 */
//   public async findOne(dto: FindDailyDTO) {
//     return this.DAO.findOne(dto);
//   }

//   /** 多条查询 */
//   public async findAll(dto: FindDailyDTO) {
//     return this.DAO.findAll(dto);
//   }

//   /** 分页查询 */
//   public async paginated(dto: PaginatedDailyDTO) {
//     return this.DAO.paginated(dto);
//   }

//   /** 创建 */
//   public async create(dto: CreateDailyDTO) {
//     return this.DAO.create(dto);
//   }

//   /** 更新 */
//   public async update(id: string, dto: UpdateDailyDTO) {
//     return this.DAO.update(id, dto);
//   }

//   /** 按主键ID删除 */
//   public async delete(id: string) {
//     return this.DAO.delete(id);
//   }
// }
