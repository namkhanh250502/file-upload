import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  Length,
  Max,
  MaxLength,
  Min,
  MinLength,
  min,
} from 'class-validator';

export class DtoCreateClass {
  @Length(2, 30)
  class_name?: string;

  class_code?: number;

 
  URL?: string;
}
