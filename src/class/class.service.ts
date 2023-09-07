import { Injectable } from '@nestjs/common';
import path from 'path';
import { DtoCreateClass } from 'src/dto/dto.createclass';
import { DtoUpdateClass } from 'src/dto/dto.updateclass';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ClassService {
    constructor(private prisma: PrismaService) {}

    getAll():Promise<DtoCreateClass[]> {
        return this.prisma.renamedclass.findMany()
    }

    get(class_id: number):Promise<DtoCreateClass> {
        return this.prisma.renamedclass.findUnique({where:{class_id:Number(class_id)}})
    }

    create(data:DtoCreateClass):Promise<DtoCreateClass> {
        return this.prisma.renamedclass.create({data})
    }

    upload(data:DtoUpdateClass, URL:Express.Multer.File):Promise<DtoUpdateClass> {
        return this.prisma.renamedclass.create({
             data:{
                class_code: Number(data.class_code),
                class_name: data.class_name,
                URL: URL.path.replace('files\\','')
    }})
    }

    update(class_id: number, data: DtoUpdateClass,
        URL: Express.Multer.File):Promise<DtoUpdateClass> {
        return this.prisma.renamedclass.update({
            where:{class_id:Number(class_id)},
            data:{
                class_code:Number(data.class_code),
                class_name: data.class_name,
                URL:URL.path.replace('files\\','')

            }
        })
    }

    delete(class_id: number):Promise<DtoCreateClass> {
        return this.prisma.renamedclass.delete({where:{class_id:Number(class_id)}})
    }
}
