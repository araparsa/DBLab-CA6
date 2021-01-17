import { ApiProperty } from "@nestjs/swagger";

export default class CreateTagDto{
    @ApiProperty({
        description: "tag"})
    tag: string;
}