import { Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class CreateBookDto {
    @Length(4, 10)
    @ApiProperty({
        description:'book name', 
        minLength: 4, 
        default: '' ,
        maxLength:10})
    readonly name: string;

    @ApiProperty({
        description:'user id'})
    readonly userID: number;

    @ApiProperty({
        description:'genre ids'})
    readonly genreIDs: number[];
}