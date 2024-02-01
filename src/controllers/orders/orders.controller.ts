import { Controller, Get, Param } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getAll(): any {
    return {
      message: 'Orders list',
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string): any {
    return {
      message: `Order ${id}`,
    };
  }

  @Get('filter/:order')
  getByFilter(@Param('order') order: string): any {
    return {
      message: `filtering orders by ${order}`,
    };
  }
}
