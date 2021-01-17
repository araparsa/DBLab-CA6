import { ApiProperty } from '@nestjs/swagger';

export default class UpdateUserDto {
    @ApiProperty({
        description:'user id'})
    userID: number;
    @ApiProperty({
        description:'user new name'})
    name: string; 
}