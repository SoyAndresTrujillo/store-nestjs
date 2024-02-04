import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCategoriesDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsBoolean()
  @IsNotEmpty()
  readonly status: boolean;
}

export class UpdateCategoriesDto extends PartialType(CreateCategoriesDto) {}
