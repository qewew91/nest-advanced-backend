import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { User } from './user.model'
import { Role } from '../../roles/schemas/roles.model'

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles>{
    @ApiProperty({ example: 1, description: 'Unique id' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number

    @ApiProperty({ example: 1337, description: 'User\'s primary key' })
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number

    @ApiProperty({ example: 1, description: 'Role\'s primary key' })
    @ForeignKey(() => Role)
    @Column({ type: DataType.INTEGER })
    roleId: number
}