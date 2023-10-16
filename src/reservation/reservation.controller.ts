import { Controller, Get } from "@nestjs/common";
import { Reservation } from "@prisma/client";
import { ReservationService } from "./reservation.service";

@Controller("/reservation")
export class ReservationController {
    constructor(private readonly reservationService: ReservationService) {}

    @Get()
    async getAll(): Promise<Reservation[]> {
        return this.reservationService.getAll();
    }
}