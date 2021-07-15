import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { Role } from '../../roles/schemas/roles.model'
import { UserRoles } from './user-roles.model'

interface UserCreateAttrs {
    email: string
    password: string
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreateAttrs> {
    @ApiProperty({ example: '1337', description: 'Unique id' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number

    @ApiProperty({ example: 'user@example.com', description: 'User\'s email' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string

    @ApiProperty({ example: 'example123', description: 'User\'s password' })
    @Column({ type: DataType.STRING, allowNull: false })
    password: string

    @ApiProperty({ example: 'true', description: 'Is user banned or no' })
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean

    @ApiProperty({ example: 'Spam', description: 'User\'s ban reason' })
    @Column({ type: DataType.STRING, allowNull: true })
    banReason: string

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
}
