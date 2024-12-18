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

    public delete(Id : number)
    {
      return this.factureRepository.delete(Id);
    }
}
