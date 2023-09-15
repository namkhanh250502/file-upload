import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ClassService } from './class.service';

import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { DtoCreateClass } from 'src/dto/dto.createclass';
import { DtoUploadClass } from 'src/dto/dto.uploadclass';

@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Get('get')
  getAll(): Promise<DtoCreateClass[]> {
    return this.classService.getAll();
  }

  @Get('get/:class_id')
  get(@Param('class_id') class_id: number): Promise<DtoCreateClass> {
    return this.classService.get(class_id);
  }

  @Post('post')
  create(@Body() data: DtoCreateClass): Promise<DtoCreateClass> {
    return this.classService.create(data);
  }

  @Put('put/:class_id')
  @UseInterceptors(
    FileInterceptor('URL', {
      storage: diskStorage({
        destination: './files',
        filename(req, file, callback) {
          callback(null, `${file.originalname}`);
        },
      }),
    }),
  )
  update(
    @Param('class_id') class_id: number,
    @Body() data: DtoUploadClass,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<DtoCreateClass> {
    console.log('file: ', file.path);
    console.log('data: ', data);
    return this.classService.update(class_id, data, file);
  }

  @Delete('delete/:class_id')
  delete(@Param('class_id') class_id: number): Promise<DtoCreateClass> {
    return this.classService.delete(class_id);
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('URL', {
  storage: diskStorage({
    destination: './files',
    filename(req, file, callback) {
      callback(null, `${file.originalname}`);
    },
  }),
    }),
  )
  async upload(
    @UploadedFile() URL: Express.Multer.File,@Body()
    data: DtoCreateClass,
    ): Promise<DtoCreateClass> {
    console.log('URL: ', URL);
   
    return await this.classService.upload(URL,data)
  }
  
}
