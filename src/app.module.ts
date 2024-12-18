import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClubModule } from './club/club.module';
import { PaysModule } from './pays/pays.module';
import { FactureController } from './facture/facture.controller';
import { FactureService } from './facture/facture.service';
import { FactureModule } from './facture/facture.module';
import { FactureDetailController } from './facture-detail/facture-detail.controller';
import { FactureDetailModule } from './facture-detail/facture-detail.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : 'mysql',
      host : 'localhost',
      username : 'root',
      password : '',
      database : 'rotary_db',
      synchronize : false,
      autoLoadEntities: true
    }),
    ClubModule,
    PaysModule,
    FactureModule,
    FactureDetailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
