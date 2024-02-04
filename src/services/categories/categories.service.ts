import { Injectable, NotFoundException } from '@nestjs/common';
import { Categorie } from './../../entities/categorie.entity';
import {
  CreateCategoriesDto,
  UpdateCategoriesDto,
} from 'src/dto/categories.dto';

@Injectable()
export class CategoriesService {
  private counterId = 4;
  /**
   * Represents a collection of categories.
   */
  private categories: Categorie[] = [
    {
      id: 1,
      name: 'Category 1',
      description: 'Description 1',
      status: true,
    },
    {
      id: 2,
      name: 'Category 2',
      description: 'Description 2',
      status: true,
    },
    {
      id: 3,
      name: 'Category 3',
      description: 'Description 3',
      status: true,
    },
  ];

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    const category = this.categories.find((item) => item.id === id);
    // Error first
    if (!category) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return category;
  }

  create(payload: CreateCategoriesDto) {
    this.counterId = this.counterId + 1;
    const newCategory = {
      id: this.counterId,
      ...payload,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  update(id: number, payload: UpdateCategoriesDto) {
    const category = this.findOne(id);
    if (category) {
      const index = this.categories.findIndex((category) => category.id === id);
      this.categories[index] = {
        ...category,
        ...payload,
      };
      return this.categories[index];
    }
  }

  remove(id: number) {
    const index = this.categories.findIndex((category) => category.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.categories.splice(index, 1);
    return {
      message: `Product #${id} removed`,
    };
  }
}
