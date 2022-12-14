import { Module } from '@nestjs/common';
import { MyNote } from './mynote.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { MynoteController } from './mynote.controller';
import { MynoteService } from './mynote.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([MyNote])
    ],
    controllers: [
        AppController,
        MynoteController
    ],
    providers: [
        AppService,
        MynoteService
    ]
})
export class MynoteModule {

}
