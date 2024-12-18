import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ClubService } from './club.service';
import { Club } from './club.entity';

@Controller('club')
export class ClubController { 

    constructor(private readonly ClubService : ClubService){}

    @Post()
    public create(@Body() club : Partial<Club>) : Promise<Club>
    {
      return this.ClubService.create(club);
    }

    @Get()
    public findAll(){
      return this.ClubService.findAll();
    }

    @Get(':id')
    public findOne(@Param('id') id : string) : Promise<Club>
    {
      return this.ClubService.findOne(+id);
    }

    @Delete(':id')
    public delete(@Param('id') id : string)
    {
      return this.ClubService.delete(+id);
    }
}