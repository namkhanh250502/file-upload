import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClassTeacherService } from './class-teacher.service';
import { DtoClassTeacher } from 'src/dto/dto.classTeacher';

@Controller('class-teacher')
export class ClassTeacherController {
    constructor(private readonly classTeacherSerive: ClassTeacherService) {}

    @Get('get')
    getAll():Promise<DtoClassTeacher[]> {
        return this.classTeacherSerive.getAll()
    }

    @Get('get/:class_id')
    get(@Param('class_id') class_id: number):Promise<DtoClassTeacher> {
        return this.classTeacherSerive.get(class_id)
    }

    @Post('post')
    create(@Body() data: DtoClassTeacher):Promise<DtoClassTeacher> {
        return this.classTeacherSerive.create(data)
    }

    @Put('put/:class_id')
    update(@Param('class_id') class_id: number, @Body() data: DtoClassTeacher):Promise<DtoClassTeacher> {
        return this.classTeacherSerive.update(class_id,data)
    }

    @Delete('delete/:class_id')
    delete(@Param('class_id') class_id: number):Promise<DtoClassTeacher> {
        return this.classTeacherSerive.delete(class_id)
    }
}
 