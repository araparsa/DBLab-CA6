import { Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class CreateUserDto {
    @Length(3, 10)
    @ApiProperty({
        description:'name', 
        minLength: 3, 
        default: '' ,
        maxLength:10})
    readonly name: string;
    
    @ApiProperty({
        description: "username"
    })
    username: string;

    @ApiProperty({
        description: "password"
    })
    password: string;

    @ApiProperty({
        description:'user books'})
    readonly bookIDs: number[] ;
}