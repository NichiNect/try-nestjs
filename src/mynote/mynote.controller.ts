import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { MynoteService } from './mynote.service';
import { MynoteDto } from './mynote.dto';

@Controller('mynote')
export class MynoteController {

    constructor (private MynoteService: MynoteService) {

    }

    @Get()
    showAllData() {
        return this.MynoteService.showAll();
    }

    @Post()
    storeData (@Body() data: MynoteDto) {

        return this.MynoteService.create(data);
    }

    @Get(':id')
    checkDetail (@Param('id') id: string): string {
        return 'Output data from controller detail ' + id;
    }

    @Get('service')
    showAll () {
        return this.MynoteService.getAll();
    }
}
