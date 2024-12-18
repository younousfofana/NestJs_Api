import { Module } from '@nestjs/common';
import { ServiceController } from './service/service.controller';
import { FactureController } from './facture.controller';
import { FactureService } from './facture.service';

@Module({
  controllers: [ServiceController, FactureController],
  providers: [FactureService]
})
export class FactureModule {}
