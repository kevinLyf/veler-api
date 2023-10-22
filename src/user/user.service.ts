import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { User } from "./user.model";

@Injectable()
export class UserService {
    constructor(private prismaService: PrismaService) {}

    async getAllUser() : Promise<User[]> {
        return this.prismaService.user.findMany();
    }

    async getUserById(id: string): Promise<User | null> {
        return this.prismaService.user.findUnique({ where: { id }, include: {
            reservations: true,
        } });
    }
    
    // ERROR
    async deleteUserById(id: string): Promise<User | null> {
        return this.prismaService.user.delete({ where: { id } });
    }
}