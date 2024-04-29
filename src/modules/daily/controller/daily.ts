/**
 * Controller (业务逻辑控制层) 负责逻辑的控制与转发，并负责对内协调 Service 层来处理业务逻辑
 *
 * 本层的使用场景有：
 *
 * 1. 绑定装饰器
 * 2. 绑定 DTO (输入)数据传输对象
 * 3. 绑定 Service 层
 * 4. 绑定 BO (输入)业务对象
 *
 * 不允许在 Controller 内直接调用 Manager/Provider/DAO 层
 */

import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Query } from '@nestjs/common';

import { DailyService } from '../service';
import { SendEmailDTO } from '../dto/daily';

@ApiTags('Daily')
@Controller('daily')
export class DailyController {
  constructor(private readonly service: DailyService) {}
  @Get('/sendEmail')
  public async sendEmail(@Query() dto: SendEmailDTO) {
    // console.log('req', dto);
    return this.service.sendEmail(dto.to);
  }
}

// import { HTTP_STATUS, IResponsePaginated } from '@/common';
// import { ApiExtraModels, ApiOperation, ApiTags } from '@nestjs/swagger';
// import { ApiPaginatedResponseBO, ApiListResponseBO, ApiResponseBO } from '@/extends/swagger';
// import { Controller, Get, Post, Query, Body, Param, HttpCode, HttpException } from '@nestjs/common';

// import {
//   FindDailyDTO,
//   CreateDailyDTO,
//   UpdateDailyDTO,
//   PaginatedDailyDTO,
// } from '../dto';

// import { DailyBO } from '../bo';
// import { DailyService } from '../service';

// @ApiTags('Daily')
// @Controller('daily')
// @ApiExtraModels(DailyBO)
// export class DailyController {
//   constructor(
//     private readonly service: DailyService,
//   ) {}

//   @ApiOperation({ summary: '查询详情 - Daily' })
//   @ApiResponseBO(DailyBO)
//   @Get('/find/one')
//   public async findOne(@Query() dto: FindDailyDTO): Promise<DailyBO> {
//     return this.service.findOne(dto);
//   }

//   @ApiOperation({ summary: '查询全部 - Daily' })
//   @ApiListResponseBO(DailyBO)
//   @Get('/find/all')
//   public async findAll(@Query() dto: FindDailyDTO): Promise<DailyBO[]> {
//     return this.service.findAll(dto);
//   }

//   @ApiOperation({ summary: '分页查询 - Daily' })
//   @ApiPaginatedResponseBO(DailyBO)
//   @Get('/paginated')
//   public async paginated(@Query() dto: PaginatedDailyDTO): Promise<IResponsePaginated<DailyBO>> {
//     return this.service.paginated(dto);
//   }

//   @ApiOperation({ summary: '创建 - Daily' })
//   @ApiResponseBO(DailyBO)
//   @Post('/create')
//   @HttpCode(HTTP_STATUS.SUCCESS)
//   public async create(@Body() dto: CreateDailyDTO): Promise<DailyBO> {
//     return this.service.create(dto);
//   }

//   @ApiOperation({ summary: '更新 - Daily' })
//   @ApiResponseBO()
//   @Post('/update/:id')
//   @HttpCode(HTTP_STATUS.SUCCESS)
//   public async update(@Param('id') id: string, @Body() dto: UpdateDailyDTO): Promise<void> {
//     if (!id) throw new HttpException('请求参数有误，缺少 id', HTTP_STATUS.UNPROCESSABLE);
//     return this.service.update(id, dto);
//   }

//   @ApiOperation({ summary: '删除 - Daily' })
//   @ApiResponseBO()
//   @Post('/delete/:id')
//   @HttpCode(HTTP_STATUS.SUCCESS)
//   public async delete(@Param('id') id: string): Promise<void> {
//     if (!id) throw new HttpException('请求参数有误，缺少 id', HTTP_STATUS.UNPROCESSABLE);
//     return this.service.delete(id);
//   }
// }
