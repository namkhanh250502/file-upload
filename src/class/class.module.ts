import { Module } from '@nestjs/common';
import { ClassController } from './class.controller';
import { ClassService } from './class.service';
import { PrismaService } from 'src/prisma.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports:[MulterModule.register({dest:'./uploads'})],
  controllers: [ClassController],
  providers: [ClassService,PrismaService]
})
export class ClassModule {}
