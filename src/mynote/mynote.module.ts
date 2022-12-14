import { Module } from '@nestjs/common';
import { MyNote } from './mynote.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([MyNote])
    ],
    controllers: [
        AppController
    ],
    providers: [
        AppService
    ]
})
export class MynoteModule {

}
