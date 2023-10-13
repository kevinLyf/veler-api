import { Prisma } from "@prisma/client";

export class User implements Prisma.UserCreateInput {
    id?: string;
    name: string;
    email: string;
    password: string;
    admin?: boolean;
    created_at?: string | Date;
}