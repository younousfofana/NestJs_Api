import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClubModule } from './club/club.module';
import { PaysModule } from './pays/pays.module';

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
    PaysModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}