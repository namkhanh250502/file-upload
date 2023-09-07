import { IsString, MaxLength, MinLength } from "class-validator"

export class DtoClass {
    
    class_id?: number
    class_name?: string
    class_code?: number
    URL?: string
}