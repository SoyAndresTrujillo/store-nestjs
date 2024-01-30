import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getBrands() {
    return 'List of users';
  }

  @Get(':id')
  getBrand(@Param('id') id: string) {
    return `Users #${id}`;
  }

  @Get('filter/:user')
  getBrandByFilter(@Param('user') user: string) {
    return `User ${user}`;
  }
}
