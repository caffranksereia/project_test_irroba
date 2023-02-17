import { Controller, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private apiService: UsersService) {}

  @Post()
  async authUser(@Body() body: Body) {
    const userAuth = await this.apiService.auth(body);
    return userAuth;
  }
}
