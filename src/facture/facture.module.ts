import { Module } from '@nestjs/common';
import { FactureController } from './facture.controller';
import { FactureService } from './facture.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Facture } from './facture.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Facture])],
  controllers: [FactureController],
  providers: [FactureService]
})
export class FactureModule {}
