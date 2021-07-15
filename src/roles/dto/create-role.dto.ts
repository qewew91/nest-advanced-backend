import { ApiProperty } from '@nestjs/swagger'

export class CreateRoleDto {
    @ApiProperty({ example: 'USER', description: 'Role name' })
    readonly value: string

    @ApiProperty({ example: 'Role owned by all users' })
    readonly description: string
}