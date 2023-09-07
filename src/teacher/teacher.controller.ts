import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { DtoTeacher } from 'src/dto/dto.teacher';

@Controller('teacher')
export class TeacherController {
    constructor(private readonly teachService: TeacherService) {}

    @Get('get')
    getAll():Promise<DtoTeacher[]> {
        return this.teachService.getAll()
    }

    @Get('get/:class_id')
    get(@Param('class_id') class_id: number):Promise<DtoTeacher> {
        return this.teachService.get(class_id)
    }

    @Post('post')
    create(@Body() data: DtoTeacher):Promise<DtoTeacher> {
        return this.teachService.create(data)
    }

    @Put('put/:class_id')
    update(@Param('class_id') class_id: number, @Body() data: DtoTeacher):Promise<DtoTeacher> {
        return this.teachService.update(class_id,data)
    }

    @Delete('delete/:class_id')
    delete(@Param('class_id') class_id: number):Promise<DtoTeacher> {
        return this.teachService.delete(class_id)
    }
}
