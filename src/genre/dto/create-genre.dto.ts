import { Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class CreateGenreDto {
    @Length(3, 10)
    @ApiProperty({
        description:'genre type', 
        minLength: 3, 
        default: '' ,
        maxLength:10})
    readonly type: string;
}