import { Module } from '@nestjs/common'
import { RolesController } from './roles.controller'
import { RolesService } from './roles.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Role } from './schemas/roles.model'
import { User } from '../users/schemas/user.model'
import { UserRoles } from '../users/schemas/user-roles.model'

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [
      SequelizeModule.forFeature([Role, User, UserRoles])
  ],
  exports: [
      RolesService
  ]
})
export class RolesModule {}
