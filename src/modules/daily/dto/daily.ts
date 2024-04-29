/**
 * DTO (数据传输对象) 负责定义外部输入的数据参数定义/类型/校验规则
 */

import { ApiProperty } from '@nestjs/swagger';

export class DailyDTO {
  @ApiProperty({
    name: 'name',
    type: String,
    required: true,
    example: 'name',
    description: '名字',
  })
  name: string;
}

export class SendEmailDTO {
  @ApiProperty({
    name: 'to',
    type: String,
    required: true,
    example: 'xxx@qq.com',
    description: '发送邮箱',
  })
  to: string;
}
// import { IsNotEmpty } from 'class-validator';
// import { HttpRequestPageDTO } from '@/extends/swagger';
// import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';

// // 通常建议引入 Entity 接口
// import { IDaily } from '@/extends/sequelize';

// /** 分页查询 */
// export class PaginatedDailyDTO extends HttpRequestPageDTO implements IDaily {
//   @ApiProperty({ name: 'name', type: String, required: false, example: 'name', description: '名字' })
//   name?: string;
// }

// /** 单条/多条查询 */
// export class FindDailyDTO implements IDaily {
//   @ApiProperty({ name: 'name', type: String, required: false, example: 'name', description: '名字' })
//   name?: string;
// }

// /** 创建 */
// export class CreateDailyDTO implements IDaily {
//   @IsNotEmpty()
//   @ApiProperty({ name: 'name', type: String, required: true, example: 'name', description: '名字' })
//   name: string;
// }

// /** 更新 */
// export class UpdateDailyDTO extends PartialType(CreateDailyDTO) implements IDaily {}
