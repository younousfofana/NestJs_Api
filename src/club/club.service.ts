import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Club } from './club.entity';

@Injectable()
export class ClubService {
    
    constructor(
                @InjectRepository(Club) 
                private readonly clubRepository : Repository<Club>
               ){}

    public findAll() : Promise<Club[]>
    {
      return this.clubRepository.find();
    }

    public findOne(Id:number) : Promise<Club | null>
    {
        return this.clubRepository.findOneBy({Id})
    }
}
