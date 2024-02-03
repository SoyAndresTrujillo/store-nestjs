import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './../../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from 'src/dto/products.dto';

@Injectable()
export class ProductsService {
  private counterId = 3;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of product 1',
      price: 100,
      stock: 10,
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of product 2',
      price: 200,
      stock: 20,
      image: 'https://picsum.photos/200/300',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    console.log(product);
    // Error first
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((product) => product.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
  }

  remove(id: number) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products.splice(index, 1);
    return {
      message: `Product #${id} removed`,
    };
  }
}
