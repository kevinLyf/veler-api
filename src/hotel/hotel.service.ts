import { BadRequestException, Injectable, Param } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { Hotel } from "./hotel.model";

@Injectable()
export class HotelService {
    constructor(private prismaService: PrismaService) {}

    async getAllHotels(): Promise<Hotel[]> {
        return this.prismaService.hotel.findMany({
          include: {
            reservation: true
          }
        }) as unknown as Hotel[];
    }

    async getHotelById(id: string): Promise<Hotel | null> {
      return this.prismaService.hotel.findUnique({ where: { id: id["id"] } });
    }

    async createHotel(data: Hotel): Promise<Hotel | null> {
        try {
            const result = await this.prismaService.hotel.create({ data });
            return result;
        } catch(err) {
           throw new BadRequestException("It was not possible to create a hotel", { description: "Fill in all fields" });
        }
    }

    async deleteHotel(id: string): Promise<Hotel | null>  {
        return this.prismaService.hotel.delete({ where: { id: id["id"] } });
    }

    async editHotel(id: string, hotel: Hotel): Promise<Hotel | null> {

      const hotelExists = await this.prismaService.hotel.findUnique({ where: { id: id["id"] } });

      if(!hotelExists) throw new BadRequestException("Hotel not found");

      return this.prismaService.hotel.update({ where: { id: id["id"] }, data: hotel });
    }
}