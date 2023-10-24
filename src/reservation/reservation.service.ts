import { Injectable } from "@nestjs/common";
import { Reservation } from "@prisma/client";
import { PrismaService } from "src/prisma.service";


@Injectable()
export class ReservationService {
    constructor(private prismaService: PrismaService) {}

    async getAll(): Promise<Reservation[]> {
        return this.prismaService.reservation.findMany();
    }

    async getById(id: string): Promise<Reservation | null> {
        return this.prismaService.reservation.findUnique({ where: { id } });
    }
    
    async create(data: Reservation): Promise<Reservation> {
        const reservation = await this.prismaService.reservation.create({
          data: {
            ...data,
            check_in: data.check_in,
            check_out: data.check_out,
          },
        });
      
        return {
          ...reservation,
          check_in: data.check_in,
          check_out: data.check_out,
        };
      }
      
}