import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAll(): any {
    return {
      message: 'Users list',
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string): any {
    return {
      message: `User ${id}`,
    };
  }

  @Get('filter/:user')
  getByFilter(@Param('user') user: string): any {
    return {
      message: `filtering users by ${user}`,
    };
  }
}
