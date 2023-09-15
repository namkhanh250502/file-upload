import { IsNumber, MaxLength } from "class-validator"

export class DtoTeacher {

    
    teacher_id?: number
    @IsNumber()
    teacher_code?: number
    teacher_name: string
    @IsNumber()
    teacher_phone?: number
    teacher_subject?: string
}