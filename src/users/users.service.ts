import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { User } from './schemas/user.model'
import { CreateUserDto } from './dto/create-user.dto'
import { RolesService } from '../roles/roles.service'

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepo: typeof User,
                private rolesService: RolesService) {
    }

    async createUser(userDto: CreateUserDto): Promise<User> {
        const user = await this.userRepo.create(userDto)
        const role = await this.rolesService.getRoleByValue('USER')
        await user.$set('roles', [role.id])
        return user
    }

    async getAllUsers(): Promise<User[]> {
        return await this.userRepo.findAll({ include: {all: true} })
    }
}
