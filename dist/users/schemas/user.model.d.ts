import { Model } from 'sequelize-typescript';
import { Role } from '../../roles/schemas/roles.model';
interface UserCreateAttrs {
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreateAttrs> {
    id: number;
    email: string;
    password: string;
    banned: boolean;
    banReason: string;
    roles: Role[];
}
export {};
