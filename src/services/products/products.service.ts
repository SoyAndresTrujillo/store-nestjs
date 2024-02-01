import { Injectable } from '@nestjs/common';
import { Product } from './../../entities/product.entity';

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
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      return null;
    }
    return product;
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
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
    const product = this.products[index];
    this.products = this.products.filter((product) => product.id !== id);
    return product;
  }
}
