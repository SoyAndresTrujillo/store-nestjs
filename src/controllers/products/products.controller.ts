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
  Res,
} from '@nestjs/common';

import { Response, response } from 'express';

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
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Res() response: Response, @Param('id') id: string) {
    // type express, but, is more utils use Decorators of nestjs
    // response.status(200).send({
    //   message: `product ${id}`,
    // });
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
