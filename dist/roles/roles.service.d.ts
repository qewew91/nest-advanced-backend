import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './schemas/roles.model';
export declare class RolesService {
    private roleRepo;
    constructor(roleRepo: typeof Role);
    createRole(roleDto: CreateRoleDto): Promise<Role>;
    getRoleByValue(value: string): Promise<Role>;
}
