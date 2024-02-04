import { Injectable, NotFoundException } from '@nestjs/common';
import { Brand } from './../../entities/brand.entity';
import { CreateBrandsDto, UpdateBrandsDto } from 'src/dto/brands.dto';

@Injectable()
export class BrandsService {
  private counterId = 3;
  /**
   * Represents a collection of categories.
   */
  private brands: Brand[] = [
    {
      id: 1,
      name: 'Brand 1',
      image: 'amazon.com',
      products: ['Product 1', 'Product 2'],
    },
    {
      id: 2,
      name: 'Brand 2',
      image: 'amazon.com',
      products: ['Product 3', 'Product 4'],
    },
    {
      id: 3,
      name: 'Brand 3',
      image: 'amazon.com',
      products: ['Product 5', 'Product 6'],
    },
  ];

  findAll() {
    return this.brands;
  }

  findOne(id: number) {
    const brand = this.brands.find((item) => item.id === id);
    // Error first
    if (!brand) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    return brand;
  }

  create(payload: CreateBrandsDto) {
    this.counterId = this.counterId + 1;
    const newBrand = {
      id: this.counterId,
      ...payload,
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  update(id: number, payload: UpdateBrandsDto) {
    const brand = this.findOne(id);
    if (brand) {
      const index = this.brands.findIndex((brand) => brand.id === id);
      this.brands[index] = {
        ...brand,
        ...payload,
      };
      return this.brands[index];
    }
  }

  remove(id: number) {
    const index = this.brands.findIndex((brand) => brand.id === id);
    if (index === -1) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    this.brands.splice(index, 1);
    return {
      message: `Brand #${id} removed`,
    };
  }
}
