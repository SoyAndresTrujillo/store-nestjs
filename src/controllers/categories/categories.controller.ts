import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':categorieId/products/:productId')
  getProductByCategory(
    @Param('categorieId') categorieId: string,
    @Param('productId') productId: string,
  ) {
    return `product ${productId} and category ${categorieId}`;
  }
}
