import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';
import { Role } from './schemas/roles.model';
export declare class RolesController {
    private rolesService;
    constructor(rolesService: RolesService);
    createRole(roleDto: CreateRoleDto): Promise<Role>;
    getRoleByValue(value: string): Promise<Role>;
}
