import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { User } from '../../users/schemas/user.model'
import { UserRoles } from '../../users/schemas/user-roles.model'

interface RoleCreateAttrs {
    value: string
    description: string
}


@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreateAttrs>{
    @ApiProperty({ example: 1, description: 'Unique id' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number

    @ApiProperty({ example: 'USER', description: 'Role name' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    value: string

    @ApiProperty({ example: 'Role owned by all users' })
    @Column({ type: DataType.STRING, allowNull: false })
    description: string

    @BelongsToMany(() => User, () => UserRoles)
    users: User[]
}
