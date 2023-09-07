import { IsInt, IsNotEmpty, IsNumber, IsString, IsUrl, Length, Max, MaxLength, Min, MinLength, min } from "class-validator"

export class DtoCreateClass {
    @IsInt()
    @Min(1)
    @Max(20)
    @IsNotEmpty()
    class_id?: number
    @Length(2,30)
    class_name?: string
    @IsNumber()
    class_code?: number

    @IsUrl()
    URL?: string


}