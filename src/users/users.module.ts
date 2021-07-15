import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { User } from './schemas/user.model'
import { Role } from '../roles/schemas/roles.model'
import { UserRoles } from './schemas/user-roles.model'
import { RolesModule } from '../roles/roles.module'

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles]),
    RolesModule
  ]
})
export class UsersModule {}
