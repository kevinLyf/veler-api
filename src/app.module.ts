import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { HotelModule } from './hotel/hotel.module';

@Module({
  imports: [UserModule, AuthModule, HotelModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
