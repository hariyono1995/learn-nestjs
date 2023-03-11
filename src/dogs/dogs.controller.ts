import { JoiValidationPipePipe } from './../joi-validation-pipe/joi-validation-pipe.pipe';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
} from '@nestjs/common';
import { CreateDogDto, createDogSchema } from './dto/create-dog.dto';

@Controller('dogs')
export class DogsController {
  @Get()
  findAll() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Get('one')
  async findOne() {
    try {
      throw new Error('');
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get(':id')
  async findByPk(@Param('id', ParseIntPipe) id: number) {
    return id;
  }

  @Get('edit/:id')
  async update(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return `Update dog with ${id}`;
  }

  @Post()
  @UsePipes(new JoiValidationPipePipe(createDogSchema))
  async addDog(@Body() createDogDto: CreateDogDto) {
    return 'add dog ';
  }
}
