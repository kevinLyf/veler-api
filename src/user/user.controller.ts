import { BadRequestException, Controller, Delete, Get, HttpException, HttpStatus, Param } from "@nestjs/common";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Controller("/user")
export class UserController {
    constructor(private readonly userService: UserService) {};

    @Get()
    async getAllUsers(): Promise<User[]> {
        return this.userService.getAllUser();
    }

    @Get("/:id")
    async getUserById(@Param('id') id: string): Promise<User | null> {
        const result = await this.userService.getUserById(id);
        if(!result) throw new HttpException("User not found", HttpStatus.BAD_REQUEST);
        return result;
    }

    @Delete("/:id")
    async deleteUserById(@Param() id: string): Promise<User | null> {
        try {
            const result = await this.userService.deleteUserById(id);
            return result;
        } catch(err) {
            throw new BadRequestException("User not found");
        }
    }
}