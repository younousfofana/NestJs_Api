import { Controller, Get } from '@nestjs/common';
import { ClubService } from './club.service';

@Controller('club')
export class ClubController { 

    constructor(private readonly ClubService : ClubService){}

    @Get()
    public getAllClub(){
        return this.ClubService.getAllClub();
    }
}
