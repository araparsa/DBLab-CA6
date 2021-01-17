import { ApiProperty } from "@nestjs/swagger";

export default class CreateCategoryDto{
    @ApiProperty({
        description: "category type"})
    type: string;

}