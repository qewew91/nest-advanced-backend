import { User } from './schemas/user.model';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(userDto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
}
