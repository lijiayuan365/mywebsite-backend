/**
 * DAO (数据访问层) 负责封装与数据库的交互
 *
 * 本层的使用场景有：
 *
 * 1. 封装 SQL/数据库交互命令 并获取返回值
 * 2. 封装 Extends 模块内 Entity 层的调用 (包含但不限于 sequelize/mongoose)
 */

import { Injectable } from '@nestjs/common';

@Injectable()
export class DailyDAO {}

// // 通常建议引入 Entity
// import { Daily } from '@/extends/sequelize';

// import {
//   FindDailyDTO,
//   CreateDailyDTO,
//   UpdateDailyDTO,
//   PaginatedDailyDTO,
// } from '../dto';

// @Injectable()
// export class DailyDAO {
//   private readonly entity = Daily;

//   /** 单条查询 */
//   public async findOne(dto: FindDailyDTO) {
//     const { condition } = this.entity.getConditionByDTO(dto);
//     const result = await this.entity.findOne({ where: condition });
//     return result;
//   }

//   /** 多条查询 */
//   public async findAll(dto: FindDailyDTO) {
//     const { condition } = this.entity.getConditionByDTO(dto);
//     const result = await this.entity.findAll({ where: condition });
//     return result;
//   }

//   /** 分页查询 */
//   public async paginated(dto: PaginatedDailyDTO) {
//     const { condition, page } = this.entity.getConditionByDTO(dto);
//     const result = await this.entity.paginated({ page, where: condition });
//     return result;
//   }

//   /** 创建 */
//   public async create(dto: CreateDailyDTO) {
//     const { entity } = this.entity.getEntityByDTO(dto);
//     const result = await this.entity.create(entity);
//     return result;
//   }

//   /** 更新 */
//   public async update(id: string, dto: UpdateDailyDTO) {
//     const { entity } = this.entity.getEntityByDTO(dto);
//     await this.entity.update(entity, { where: { id }});
//   }

//   /** 按主键ID删除 */
//   public async delete(id: string) {
//     await this.entity.destroy({ where: { id }});
//   }
// }
