import { Controller, Get, Param } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getBrands() {
    return 'List of orders';
  }

  @Get(':id')
  getBrand(@Param('id') id: string) {
    return `Order #${id}`;
  }

  @Get('filter/:order')
  getBrandByFilter(@Param('order') order: string) {
    return `Order ${order}`;
  }
}
