import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export default class UpdateTaskDto{
    
    @ApiProperty({
        description: "task id"})
    taskID: number;
    
    @ApiPropertyOptional({
        description: "task description"})
    description: string;
    
    @ApiPropertyOptional({
        description: "category id"})
    categoryID: number;

    @ApiPropertyOptional({
        description: "subtask ids"})
    subtaskIDs: number[];

    @ApiPropertyOptional({
        description: "tag ids"})
    tagIDs: number[];

}