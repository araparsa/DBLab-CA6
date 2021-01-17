import { Injectable } from '@nestjs/common';
import UserEntity from '../../db/entity/user.entity';
import CreateUserDto from './dto/create-user.dto';
import BookEntity from '../../db/entity/book.entity';
import UpdateUserDto from "./dto/update-user.dto";
import DeleteUserDto from './dto/delete-user.dto';

@Injectable()
export class UserServices {

  async insert(userDetails: CreateUserDto): Promise<UserEntity> {
    const userEntity: UserEntity = UserEntity.create();
    const { name } = userDetails;
    userEntity.name = name;
    await UserEntity.save(userEntity);
    return userEntity;
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return await UserEntity.find();
  }

  async getBooksOfUser(userID: number): Promise<BookEntity[]> {
    const user: UserEntity = await UserEntity.findOne({where: {id: userID}, relations: ['books']});
    return user.books;
  }

  async update(userDetails: UpdateUserDto): Promise<UserEntity> {
    const { userID, name } = userDetails;
    const user: UserEntity = await UserEntity.findOne({where: {id: userID}});
    user.name = name;     
    await UserEntity.save(user);
    return  user;
  }

  async delete({userID}: DeleteUserDto): Promise<string> {
    const user: UserEntity = await UserEntity.findOne({ where: { id: userID } });
    await UserEntity.remove(user);
    return `user with id ${userID} removed`;
  }
}