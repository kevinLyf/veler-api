import { BadRequestException, ConflictException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { User } from "src/user/user.model";

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService) {}

    async register(data: User): Promise<User | null> {
        const hasUser = await this.prismaService.user.findUnique({ where: { email: data.email } });
        if(hasUser) throw new BadRequestException("This user already exists", { description: "Email already in use" });

        return this.prismaService.user.create({ data });
    }

    async login(email: string, password: string): Promise<User> {
        const result = await this.prismaService.user.findUnique({ where: { email: email, password: password } });
        if(!result) throw new BadRequestException("Failed to login" , { description: "Email or password incorrect" });

        return result;
    }
}