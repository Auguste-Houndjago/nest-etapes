import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
//localhost:3000/users/user
  @Get('user')

  getUsers(){

    return this.userService.getUsers()
  }

}