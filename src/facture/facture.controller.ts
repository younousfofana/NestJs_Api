import { Controller, Get } from '@nestjs/common';
import { FactureService } from './facture.service';

@Controller('facture')
export class FactureController {

    constructor(private readonly factureService : FactureService){}

    @Get()
    public findAll()
    {
      return this.factureService.findAll();
    }
}
