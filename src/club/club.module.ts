import { Module } from '@nestjs/common';
import { ClubController } from './club.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Club } from './club.entity';
import { ClubService } from './club.service';

@Module({
  imports: [TypeOrmModule.forFeature([Club])],
  providers: [ClubService],
  controllers: [ClubController]
})
export class ClubModule {}