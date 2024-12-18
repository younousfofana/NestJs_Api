import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Facture } from './facture.entity';

@Injectable()
export class FactureService {
    constructor(
                @InjectRepository(Facture) 
                private readonly factureRepository : Repository<Facture>
               ){}

    public create(facture : Partial<Facture>) : Promise<Facture>
    {
      return this.factureRepository.save(facture);
    }

    public findAll() : Promise<Facture[]>
    {
      return this.factureRepository.find();
    }     

    public findOne(Id : number) : Promise<Facture | null>
    {
      return this.factureRepository.findOneBy({Id});
    }

    public async delete(Id : number) : Promise<void>
    {
      await this.factureRepository.delete(Id);
    }
}
