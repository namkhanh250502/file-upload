import { Injectable } from '@nestjs/common';
import { DtoClassTeacher } from 'src/dto/dto.classTeacher';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ClassTeacherService {
    constructor(private prisma: PrismaService) {}

    getAll():Promise<DtoClassTeacher[]> {
        return this.prisma.class_teacher.findMany()
    }

    get(ct_id: number):Promise<DtoClassTeacher> {
        return this.prisma.class_teacher.findUnique({where:{ct_id:Number(ct_id)}})
    }

    create(data:DtoClassTeacher):Promise<DtoClassTeacher> {
        return this.prisma.class_teacher.create({data})
    }

    update(ct_id: number, data: DtoClassTeacher):Promise<DtoClassTeacher> {
        return this.prisma.class_teacher.update({
            where:{ct_id:Number(ct_id)},
            data:{

            }
        })
    }

    delete(ct_id: number):Promise<DtoClassTeacher> {
        return this.prisma.class_teacher.delete({where:{ct_id:Number(ct_id)}})
    }
}
