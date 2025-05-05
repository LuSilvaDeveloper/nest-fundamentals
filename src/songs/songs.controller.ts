import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Post()
  create() {
    this.songsService.create('Lucas by Best Software Engineer');
  }

  @Get()
  findAll() {
    return 'find all songs endpoint';
  }

  @Get(':id')
  findOne() {
    return 'fetch song based on the id';
  }

  @Put(':id')
  update() {
    return 'updated song based on the id';
  }

  @Delete(':id')
  delete() {
    return 'deleted song based on the id';
  }

}
