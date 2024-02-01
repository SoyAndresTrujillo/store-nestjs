import { Controller, Get, Param } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getAll(): any {
    return {
      message: 'All brands',
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string): any {
    return {
      message: `Brand ${id}`,
    };
  }

  @Get('filter/:brand')
  getBrandByFilter(@Param('brand') brand: string): any {
    return {
      message: `filtering brands by ${brand}`,
    };
  }
}
