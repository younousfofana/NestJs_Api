import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { FactureService } from './facture.service';
import { Facture } from './facture.entity';

@Controller('facture')
export class FactureController {

    constructor(private readonly factureService : FactureService){}

    @Post()
    public create(@Body() facture : Partial<Facture>)
    {
      return this.factureService.create(facture);
    }

    @Get()
    public findAll()
    {
      return this.factureService.findAll();
    }

    @Get(':id')
    public findOne(@Param('id') id : number)
    {
      return this.factureService.findOne(id);
    }

    @Delete(':id')
    public delete(@Param('id') id : number)
    {
      return this.factureService.delete(id);
    }
}
