import { Controller, Get, Param } from '@nestjs/common';
import { MynoteService } from './mynote.service';

@Controller('mynote')
export class MynoteController {

    constructor (private MynoteService: MynoteService) {

    }

    @Get()
    checkOutput(): string {
        return 'Output data from controller';
    }

    @Get(':id')
    checkDetail(@Param('id') id: string): string {
        return 'Output data from controller detail ' + id;
    }

    @Get('service')
    showAll() {
        return this.MynoteService.getAll();
    }
}
