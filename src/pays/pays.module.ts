import { Module } from '@nestjs/common';
import { PaysService } from './pays.service';
import { PaysController } from './pays.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pays } from './pays.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Pays])],
  providers: [PaysService],
  controllers: [PaysController]
})
export class PaysModule {}
