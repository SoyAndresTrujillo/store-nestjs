import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { UsersController } from './controllers/users/users.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { ProductsService } from './services/products/products.service';
import { CategoriesService } from './services/categories/categories.service';
import { BrandsService } from './services/brands/brands.service';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [ProductsModule, CategoriesModule, BrandsModule],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    BrandsController,
    OrdersController,
    UsersController,
    CustomersController,
  ],
  providers: [AppService, ProductsService, CategoriesService, BrandsService],
})
export class AppModule {}
