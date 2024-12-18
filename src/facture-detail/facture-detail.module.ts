import { Module } from '@nestjs/common';
import { FactureDetailController } from './facture-detail.controller';
import { FactureDetailService } from './facture-detail.service';

@Module({
  controllers: [FactureDetailController],
  providers: [FactureDetailService]
})
export class FactureDetailModule {}
