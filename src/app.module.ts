import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MynoteModule } from './mynote/mynote.module';
import * as ORMCONFIG from '../ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ORMCONFIG),
    MynoteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
