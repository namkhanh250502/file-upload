import { Controller, Get, Post, Put, Delete, Body, Param, UseInterceptors, UploadedFile  } from '@nestjs/common';
import { ClassService } from './class.service';
import { DtoClass } from 'src/dto/dto.class';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('class')
export class ClassController {
    constructor(private readonly classService: ClassService) {}

    @Get('get')
    getAll():Promise<DtoClass[]> {
        return this.classService.getAll()
    }

    @Get('get/:class_id')
    get(@Param('class_id') class_id: number):Promise<DtoClass> {
        return this.classService.get(class_id)
    }

    @Post('post')
    create(@Body() data: DtoClass):Promise<DtoClass> {
        return this.classService.create(data)
    }

    @Put('put/:class_id')
    @UseInterceptors(
        FileInterceptor(
            'URL',{
                storage:diskStorage({
                    destination:'./files',
                    filename(req, file, callback) {
                        callback(null,`${file.originalname}`)
                    },
                })
            }))
    update(@Param('class_id') class_id:number,@Body() data:DtoClass,@UploadedFile() URL:Express.Multer.File):Promise<DtoClass> {
        console.log('URL: ', URL.path);
        console.log('data: ', data);
        return this.classService.update(class_id,data,URL)
    }

    @Delete('delete/:class_id')
    delete(@Param('class_id') class_id: number):Promise<DtoClass> {
        return this.classService.delete(class_id)
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('URL',{
        storage:diskStorage({
            destination:'./files',
            filename(req, file, callback) {
                callback(null,`${file.originalname}`)
            },
        })

    }))
    upload(@UploadedFile() URL: Express.Multer.File, data: DtoClass):Promise<DtoClass>{
        return this.classService.upload(data,URL)
    }


 }
