import { Body, Controller, Delete, Get, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { UserServices } from './user.service';
import CreateUserDto from './dto/create-user.dto';
import UpdateUserDto from './dto/update-user.dto';
import DeleteUserDto from './dto/delete-user.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UserController {
  constructor(private readonly usersServices: UserServices) {}

//'postUser()' will handle the creating of new User
  // @Post('post')
  // postUser( @Body() user: CreateUserDto) {
  //   return this.usersServices.insert(user);
  // }

// 'getAll()' returns the list of all the existing users in the database
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.usersServices.getAllUsers();
  }

//'getBooks()' return all the books which are associated with the user 
// provided through 'userID' by the request  
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('books')
  getBooks( @Body('userID', ParseIntPipe) userID: number ) {
    return this.usersServices.getBooksOfUser(userID);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put('update')
  updateName( @Body() user: UpdateUserDto ){
    return this.usersServices.update(user);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete('delete')
  deleteUser( @Body() user: DeleteUserDto ){
    return this.usersServices.delete(user);
  }
}