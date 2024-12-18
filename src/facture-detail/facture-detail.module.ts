import { Module } from '@nestjs/common';
import { FactureDetailController } from './facture-detail.controller';
import { FactureDetailService } from './facture-detail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactureDetail } from './facture-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FactureDetail])],
  controllers: [FactureDetailController],
  providers: [FactureDetailService]
})
export class FactureDetailModule {}
