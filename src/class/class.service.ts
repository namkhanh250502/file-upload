import { Injectable } from '@nestjs/common';
import path from 'path';
import { DtoClass } from 'src/dto/dto.class';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ClassService {
    constructor(private prisma: PrismaService) {}

    getAll():Promise<DtoClass[]> {
        return this.prisma.renamedclass.findMany()
    }

    get(class_id: number):Promise<DtoClass> {
        return this.prisma.renamedclass.findUnique({where:{class_id:Number(class_id)}})
    }

    create(data:DtoClass):Promise<DtoClass> {
        return this.prisma.renamedclass.create({data})
    }

    upload(data:DtoClass, URL:Express.Multer.File):Promise<DtoClass> {
        return this.prisma.renamedclass.create({
             data:{
                class_code: Number(data.class_code),
                class_name: data.class_name,
                URL: URL.path.replace('files\\','')
    }})
    }

    update(class_id: number, data: DtoClass,
        URL: Express.Multer.File):Promise<DtoClass> {
        return this.prisma.renamedclass.update({
            where:{class_id:Number(class_id)},
            data:{
                class_code:Number(data.class_code),
                class_name: data.class_name,
                URL:URL.path.replace('files\\','')

            }
        })
    }

    delete(class_id: number):Promise<DtoClass> {
        return this.prisma.renamedclass.delete({where:{class_id:Number(class_id)}})
    }
}
