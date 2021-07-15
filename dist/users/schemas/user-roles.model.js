"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoles = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const user_model_1 = require("./user.model");
const roles_model_1 = require("../../roles/schemas/roles.model");
let UserRoles = class UserRoles extends sequelize_typescript_1.Model {
};
__decorate([
    swagger_1.ApiProperty({ example: 1, description: 'Unique id' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], UserRoles.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 1337, description: 'User\'s primary key' }),
    sequelize_typescript_1.ForeignKey(() => user_model_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], UserRoles.prototype, "userId", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 1, description: 'Role\'s primary key' }),
    sequelize_typescript_1.ForeignKey(() => roles_model_1.Role),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], UserRoles.prototype, "roleId", void 0);
UserRoles = __decorate([
    sequelize_typescript_1.Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
], UserRoles);
exports.UserRoles = UserRoles;
//# sourceMappingURL=user-roles.model.js.map