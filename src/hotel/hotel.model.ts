import { Prisma } from "@prisma/client";


export class Hotel implements Prisma.HotelCreateInput {
    id?: string;
    image?: string;
    name: string;
    address: string;
    description?: string;
    price: number;
    rating?: number;
    lat: number;
    lng: number;
    reservation?: Prisma.ReservationCreateNestedManyWithoutHotelInput;
    created_at?: string | Date;
}