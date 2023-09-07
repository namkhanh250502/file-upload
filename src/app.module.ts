import { Module } from '@nestjs/common';
import { ClassModule } from './class/class.module';
import { ClassTeacherModule } from './class-teacher/class-teacher.module';

import { PrismaService } from './prisma.service';


@Module({
  imports: [ClassModule, ClassTeacherModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
