import { Module } from '@nestjs/common';
import { ClassTeacherController } from './class-teacher.controller';
import { ClassTeacherService } from './class-teacher.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ClassTeacherController],
  providers: [ClassTeacherService,PrismaService]
})
export class ClassTeacherModule {}
