import { IsString, IsInt } from 'class-validator';

export class CreateHorseDto {
  @IsString()
  name: string;

  @IsInt()
  price: number;
}
