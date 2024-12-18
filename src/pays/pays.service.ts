import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pays } from './pays.entity';

@Injectable()
export class PaysService {

    constructor(
                @InjectRepository(Pays) 
                private readonly paysRepository : Repository<Pays>
               ){}

    public create(pays: Partial<Pays>): Promise<Pays>
    {  
      return this.paysRepository.save(pays);
    }
    
    public findAll() : Promise<Pays[]>
    {
      return this.paysRepository.find();
    }

    public findOne(Code : string) : Promise<Pays>
    {
      return this.paysRepository.findOneBy({Code});
    }

    public async delete(Code : string) : Promise<void>
    {
      await this.paysRepository.delete(Code);
    }
}
