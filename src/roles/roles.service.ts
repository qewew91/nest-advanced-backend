import { Injectable } from '@nestjs/common'
import { CreateRoleDto } from './dto/create-role.dto'
import { Role } from './schemas/roles.model'
import { InjectModel } from '@nestjs/sequelize'

@Injectable()
export class RolesService {
    constructor(@InjectModel(Role) private roleRepo: typeof Role) {
    }

    async createRole(roleDto: CreateRoleDto): Promise<Role> {
        return await this.roleRepo.create(roleDto)
    }

    async getRoleByValue(value: string): Promise<Role> {
        return await this.roleRepo.findOne({ where: { value } })
    }
}
