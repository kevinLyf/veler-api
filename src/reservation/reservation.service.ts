import { Injectable } from "@nestjs/common";
import { Reservation } from "@prisma/client";
import { PrismaService } from "src/prisma.service";


@Injectable()
export class ReservationService {
    constructor(private prismaService: PrismaService) {}

    async getAll(): Promise<Reservation[]> {
        return this.prismaService.reservation.findMany();
    }
    
}