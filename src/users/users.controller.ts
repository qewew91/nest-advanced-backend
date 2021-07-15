import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { User } from './schemas/user.model'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {
    }

    @ApiOperation({ summary: 'Create User' })
    @ApiResponse({ status: HttpStatus.CREATED, type: User })
    @Post()
    @HttpCode(HttpStatus.CREATED)
    createUser(@Body() userDto: CreateUserDto): Promise<User> {
        return this.usersService.createUser(userDto)
    }

    @ApiOperation({ summary: 'Get all Users' })
    @ApiResponse({ status: HttpStatus.OK, type: [User] })
    @Get()
    @HttpCode(HttpStatus.OK)
    getAllUsers(): Promise<User[]> {
        return this.usersService.getAllUsers()
    }
}
