/**
 * BO (业务对象) 负责定义 Service 层对外输出的结果，或者是其他服务端的返回数据
 */

import { ApiProperty } from '@nestjs/swagger';

export class DailyBO {
  @ApiProperty({
    name: 'name',
    type: String,
    required: true,
    example: 'name',
    description: '名字',
  })
  name: string;
}

// // 通常建议引入 Entity 接口
// import { IDaily } from '@/extends/sequelize';

// export class DailyBO
// implements IDaily
// {
//   @ApiProperty({ name: 'name', type: String, required: true, example: 'name', description: '名字' })
//   name: string;
// }
