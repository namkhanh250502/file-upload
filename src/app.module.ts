import { Module } from '@nestjs/common';
import { ClassModule } from './class/class.module';
import { ClassTeacherModule } from './class-teacher/class-teacher.module';


@Module({
  imports: [ClassModule, ClassTeacherModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
