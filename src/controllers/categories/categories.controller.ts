import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':categorieId/products/:productId')
  get(
    @Param('categorieId') categorieId: string,
    @Param('productId') productId: string,
  ): any {
    return {
      message: `Product ${productId} of category ${categorieId}`,
    };
  }
}
