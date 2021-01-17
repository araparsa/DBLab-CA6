import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export default class CreateTaskDto{
    
    @ApiProperty({
        description: "description"})
    description: string;

    @ApiProperty({
        description: "category id"})
    categoryID: number;

    @ApiProperty({
        description: "tag ids"})
    tagIDs: number[];
    
    @ApiPropertyOptional({
        description: "subtask ids"})
    subtaskIDs: number[];

}