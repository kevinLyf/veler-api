import { BadRequestException, Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { HotelService } from "./hotel.service";
import { Hotel } from "./hotel.model";

@Controller("/hotel")
export class HotelController {
    constructor(private readonly hotelService: HotelService) {}

    @Get("/")
    async getAllHotels(): Promise<Hotel[]> {
        return this.hotelService.getAllHotels();
    }

    @Get("/:id")
    async getHotelById(@Param() id: string): Promise<Hotel | null> {
        const result = await this.hotelService.getHotelById(id);
        if(!result) throw new BadRequestException("This hotel does not exist");

        return result;
    }
    
    @Post("/")
    async createHotel(@Body() data: Hotel): Promise<Hotel | null> {
        const result = await this.hotelService.createHotel(data);
        if(!result) throw new BadRequestException("Unable to create hotel");

        return result;
    }

    @Delete("/:id")
    async deleteHotel(@Param() id: string): Promise<Hotel | null> {
        try {
            const result = await this.hotelService.deleteHotel(id);
            return result;
         } catch(err) {
            throw new BadRequestException("This hotel does not exist");
         }
    }

}