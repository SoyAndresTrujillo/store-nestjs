import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  // ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from 'src/services/products/products.service';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  // Solucionar tema de rutas de choque de rutas
  // Es colocar las rutas que no son dinamicas de primeras
  @Get('filter')
  getByFilter() {
    return {
      message: `filtering products`,
    };
  }

  // luego colocar las rutas dinamicas
  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id', ParseIntPipe) id: number) {
    // type express, but, is more utils use Decorators of nestjs
    // response.status(200).send({
    //   message: `product ${id}`,
    // });
    // return {
    //   message: `product ${id}`,
    // };
    return this.productsService.findOne(id); // +id => convert string to number
  }

  // Get query params
  @Get('')
  getByFilters(
    @Query('limit') limit: number, // = value default
    @Query('offset') offset: number, // = value default
    @Query('brand') brand: string, // = value default
  ) {
    // return {
    //   message: `products: limit => ${limit}, offset => ${offset}, brand => ${brand}`,
    // };
    return this.productsService.findAll();
  }

  @Post()
  create(@Body() payload: any) {
    return this.productsService.create(payload);
  }

  @Put(':id') // put edita completamente un modelo y path parcialmente pero se usa mas put
  update(@Param('id') id: string, @Body() payload: any) {
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
