import { BadRequestException, Injectable } from "@nestjs/common";
import { Reservation } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { UserService } from "src/user/user.service";


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
        data.check_in = new Date(data.check_in);
        data.check_out = new Date(data.check_out);
      
        const reservation = await this.prismaService.reservation.create({
          data: {
            ...data,
            check_in: data.check_in.toISOString(),
            check_out: data.check_out.toISOString(),
          },
        });
      
        return {
          ...reservation,
          check_in: data.check_in,
          check_out: data.check_out,
        };
      }
      
}