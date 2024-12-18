import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FactureDetail } from './facture-detail.entity';

@Injectable()
export class FactureDetailService {
    constructor(
                @InjectRepository(FactureDetail) 
                private readonly factureDetailRepository : Repository<FactureDetail>
               ){}

   public findAll() : Promise<FactureDetail[]>
   {
     return this.factureDetailRepository.find();
   }
}
