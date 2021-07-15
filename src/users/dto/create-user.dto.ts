import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
    @ApiProperty({ example: 'user@example.com', description: 'User\'s email' })
    readonly email: string

    @ApiProperty({ example: 'example123', description: 'User\'s password' })
    readonly password: string
}
