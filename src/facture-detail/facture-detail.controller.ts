import { Controller, Get } from '@nestjs/common';
import { FactureDetailService } from './facture-detail.service';

@Controller('facture-detail')
export class FactureDetailController {

    constructor(private readonly factureDetailService : FactureDetailService){}

    @Get()
    public findAll()
    {
      return this.factureDetailService.findAll();
    }
}
