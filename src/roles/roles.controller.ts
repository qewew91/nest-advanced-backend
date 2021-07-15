import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateRoleDto } from './dto/create-role.dto'
import { RolesService } from './roles.service'
import { Role } from './schemas/roles.model'


@ApiTags('Roles')
@Controller('roles')
export class RolesController {
    constructor(private rolesService: RolesService) {
    }

    @ApiOperation({ summary: 'Create Role' })
    @ApiResponse({ status: HttpStatus.CREATED, type: Role })
    @Post()
    @HttpCode(HttpStatus.CREATED)
    createRole(@Body() roleDto: CreateRoleDto): Promise<Role> {
        return this.rolesService.createRole(roleDto)
    }


    @ApiOperation({ summary: 'Returns role by its value' })
    @ApiResponse({ status: HttpStatus.OK, type: Role })
    @Get('/:value')
    @HttpCode(HttpStatus.OK)
    getRoleByValue(@Param('value') value: string): Promise<Role> {
        return this.rolesService.getRoleByValue(value)
    }
}
