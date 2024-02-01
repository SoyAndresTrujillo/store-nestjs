import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
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
  getOne(@Param('id') id: string) {
    return {
      message: `product ${id}`,
    };
  }

  // Get query params
  @Get('')
  getByFilters(
    @Query('limit') limit: number, // = value default
    @Query('offset') offset: number, // = value default
    @Query('brand') brand: string, // = value default
  ) {
    return {
      message: `products: limit => ${limit}, offset => ${offset}, brand => ${brand}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'action to create',
      payload: payload,
    };
  }

  @Put(':id') // put edita completamente un modelo y path parcialmente pero se usa mas put
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
    };
  }
}
