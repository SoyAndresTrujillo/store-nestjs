import { Controller, Get, Param } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getAll(): any {
    return {
      message: 'Customers list',
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string): any {
    return {
      message: `Customer ${id}`,
    };
  }

  @Get('filter/:customer')
  getByFilter(@Param('customer') customer: string): any {
    return {
      message: `filtering customers by ${customer}`,
    };
  }
}
