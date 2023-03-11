import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interface/cats.interface';

// @Controller('cats')
// export class CatsController {
// @Get()
// @Header('Cache-Control', 'none')
// @Redirect('https://facebook.com', 301)
// findAll(@Req() request: Request): object {
//   return [];
// }

// @Post()
// @HttpCode(204)
// create(@Body() createCatDto: CreateCatDto): string {
//   return `create a new cat`;
// }

// @Get(':id')
// @Bind(Param('id'))
// findOne(id): string {
//   console.log(typeof id);

//   return `get cat with id ${id}`;
// }

// }

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
