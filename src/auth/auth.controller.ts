import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { User } from "src/user/user.model";
import { AuthService } from "./auth.service";

@Controller("/auth")
export class AuthController{
    constructor(private readonly authService: AuthService) {}

    @Post("/signup")
    async register(@Body() data: User) : Promise<User | void> {
        const result = await this.authService.register(data);
        if(!result) throw new HttpException("An error occurred while creating the user", HttpStatus.BAD_REQUEST);

        return result;
    }

    @Post("/signin")
    async login(@Body() {email, password}): Promise<User | void> {
        const result = await this.authService.login(email, password);
        if(!result) throw new HttpException("Failed to login", HttpStatus.BAD_REQUEST);

        return result;
    }
}