import { Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';
import { TeacherModule } from './teacher/teacher.module';


@Module({
  imports: [TeacherModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
