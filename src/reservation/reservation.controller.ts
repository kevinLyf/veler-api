import { BadRequestException, Body, Controller, Get, Post } from "@nestjs/common";
import { Reservation } from "@prisma/client";
import { ReservationService } from "./reservation.service";

@Controller("/reservation")
export class ReservationController {
    constructor(private readonly reservationService: ReservationService) {}

    @Get()
    async getAll(): Promise<Reservation[]> {
        return this.reservationService.getAll();
    }


    @Post()
    async create(@Body() data: Reservation): Promise<Reservation | null> {
        return this.reservationService.create(data);
    }
}