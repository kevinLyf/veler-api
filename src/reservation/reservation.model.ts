import { Prisma } from "@prisma/client";

export class Reservation implements Prisma.ReservationCreateInput{
    id?: string;
    hotel: Prisma.HotelCreateNestedOneWithoutReservationInput;
    user: Prisma.UserCreateNestedOneWithoutReservationsInput;
    check_in: string | Date;
    check_out: string | Date;
    created_at?: string | Date;
}