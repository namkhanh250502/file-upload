import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';

@Module({
  providers: [TeacherService],
  controllers: [TeacherController]
})
export class TeacherModule {}
