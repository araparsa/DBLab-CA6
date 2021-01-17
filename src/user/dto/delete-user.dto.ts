import { ApiProperty } from "@nestjs/swagger";

export default class DeleteUserDto{
    @ApiProperty({
        description: "user id"})
        userID: number;
}