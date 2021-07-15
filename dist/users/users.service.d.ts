import { User } from './schemas/user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from '../roles/roles.service';
export declare class UsersService {
    private userRepo;
    private rolesService;
    constructor(userRepo: typeof User, rolesService: RolesService);
    createUser(userDto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
}
