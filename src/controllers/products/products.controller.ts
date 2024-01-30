import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  // Solucionar tema de rutas de choque de rutas
  // Es colocar las rutas que no son dinamicas de primeras
  @Get('filter')
  getProductsFilter(): string {
    return `filtering products`;
  }

  // luego colocar las rutas dinamicas
  @Get(':id')
  getProduct(@Param('id') id: string): string {
    return `prodcut ${id}`;
  }

  // Get query params
  @Get('')
  getProductFilters(
    @Query('limit') limit: number, // = value default
    @Query('offset') offset: number, // = value default
    @Query('brand') brand: string, // = value default
  ) {
    return `products limit => ${limit} and offset => ${offset} and brand => ${brand}`;
  }
}
