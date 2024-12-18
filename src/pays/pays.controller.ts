import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PaysService } from './pays.service';
import { Pays } from './pays.entity';

@Controller('pays')
export class PaysController {

    constructor(private paysService : PaysService){}

    @Post()
    public create(@Body() pays: Partial<Pays>) : Promise<Pays>
    { 
      return this.paysService.create(pays);
    }

    @Get()
    public findAll()
    {
      return this.paysService.findAll();
    }

    @Get(':code')
    public findOne(@Param('code') code : string) : Promise<Pays>
    {
      return this.paysService.findOne(code);
    }

    @Delete(':code')
    public delete(@Param('code') code: string) : Promise<void>
    {
      return this.paysService.delete(code);
    }
}
