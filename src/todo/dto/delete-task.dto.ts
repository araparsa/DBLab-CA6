import { ApiProperty } from "@nestjs/swagger";

export default class DeleteTaskDto{

    @ApiProperty({
        description: "task id"})
    id: number;
}