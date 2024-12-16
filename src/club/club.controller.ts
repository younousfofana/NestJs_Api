import { Controller, Get, Param } from '@nestjs/common';
import { ClubService } from './club.service';
import { Club } from './club.entity';

@Controller('club')
export class ClubController { 

    constructor(private readonly ClubService : ClubService){}

    @Get()
    public findAll(){
      return this.ClubService.findAll();
    }

    @Get(':id')
    public findOne(@Param('id') id : string) : Promise<Club>{
      return this.ClubService.findOne(+id);
    }
}