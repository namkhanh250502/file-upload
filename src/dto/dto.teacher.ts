import { IsNumber, MaxLength } from "class-validator"

export class DtoTeacher {

    @IsNumber()
    teacher_id?: number
    @IsNumber()
    @MaxLength(3000)
    teacher_code?: number
    teacher_name: string
    @IsNumber()
    teacher_phone?: number
    teacher_subject?: string
}