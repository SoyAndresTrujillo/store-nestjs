import { Controller, Get, Param } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrands() {
    return 'List of brands';
  }

  @Get(':id')
  getBrand(@Param('id') id: string) {
    return `Brand #${id}`;
  }

  @Get('filter/:brand')
  getBrandByFilter(@Param('brand') brand: string) {
    return `Brand ${brand}`;
  }
}
