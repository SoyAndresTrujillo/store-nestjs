import { IsArray, IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateBrandsDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;

  @IsArray()
  @IsNotEmpty()
  readonly products: string[];
}

export class UpdateBrandsDto extends PartialType(CreateBrandsDto) {}
