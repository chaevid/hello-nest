import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after : ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie ID: ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie ID: ${movieId}`;
  }

  // Put : Update ALL
  // Patch : Update Parts
  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updatedData) {
    return {
      updatedMovie: movieId,
      ...updatedData,
    };
  }
}
