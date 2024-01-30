import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello, World! 🎄';
  }

  @Get('/new-endpoint')
  newEndpoint(): string {
    return 'New endpoint';
  }

  @Get('/path/')
  new(): string {
    return 'with /sas/';
  }

  // Solucionar tema de rutas de choque de rutas
  // Es colocar las rutas que no son dinamicas de primeras
  @Get('/products/filter')
  getProductsFilter(): string {
    return `filtering products`;
  }

  // luego colocar las rutas dinamicas
  @Get('/products/:id')
  getProduct(@Param('id') id: string): string {
    return `prodcut ${id}`;
  }

  @Get('/categories/:categorieId/products/:productId')
  getProductByCategory(
    @Param('categorieId') categorieId: string,
    @Param('productId') productId: string,
  ) {
    return `product ${productId} and category ${categorieId}`;
  }

  // Get query params
  @Get('products')
  getProductFilters(
    @Query('limit') limit: number, // = value default
    @Query('offset') offset: number, // = value default
    @Query('brand') brand: string, // = value default
  ) {
    return `products limit => ${limit} and offset => ${offset} and brand => ${brand}`;
  }
}
