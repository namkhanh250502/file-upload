import { Module } from '@nestjs/common';
import { ClassModule } from './class/class.module';
import { ClassTeacherModule } from './class-teacher/class-teacher.module';

import { PrismaService } from './prisma.service';
import { TeacherModule } from './teacher/teacher.module';


@Module({

  imports: [TeacherModule,ClassModule, ClassTeacherModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
