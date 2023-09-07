import { Module } from '@nestjs/common';
import { ClassTeacherController } from './class-teacher.controller';
import { ClassTeacherService } from './class-teacher.service';

@Module({
  controllers: [ClassTeacherController],
  providers: [ClassTeacherService]
})
export class ClassTeacherModule {}
