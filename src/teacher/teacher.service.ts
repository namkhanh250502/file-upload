import { Injectable } from '@nestjs/common';
import { DtoTeacher } from 'src/dto/dto.teacher';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class TeacherService {
    constructor(private prisma: PrismaService) {}

    getAll():Promise<DtoTeacher[]> {
        return this.prisma.teacher.findMany()
    }

    get(teacher_id: number):Promise<DtoTeacher> {
        return this.prisma.teacher.findUnique({where:{teacher_id:Number(teacher_id)}})
    }

    create(data:DtoTeacher):Promise<DtoTeacher> {
        return this.prisma.teacher.create({data})
    }

    update(teacher_id: number, data: DtoTeacher):Promise<DtoTeacher> {
        return this.prisma.teacher.update({
            where:{teacher_id:Number(teacher_id)},
            data:{

            }
        })
    }

    delete(teacher_id: number):Promise<DtoTeacher> {
        return this.prisma.teacher.delete({where:{teacher_id:Number(teacher_id)}})
    }
}
