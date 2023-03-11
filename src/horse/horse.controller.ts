import { ValidationPipePipe } from './../validation-pipe/validation-pipe.pipe';
import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  ParseBoolPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateHorseDto } from './dto/create-horse.dto';

@Controller('horse')
export class HorseController {
  @Post()
  async addHorse(
    @Body(new ValidationPipePipe()) createHorseDto: CreateHorseDto,
  ) {
    return createHorseDto;
  }

  @Get()
  async findAll(
    @Query('activeOnly', new DefaultValuePipe(false), ParseBoolPipe)
    activeOnly: boolean,
  ) {
    return 'passed validation pipe';
  }
}
