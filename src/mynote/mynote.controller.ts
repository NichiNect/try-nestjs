import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
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
    checkDetail (@Param('id') id: string) {
        return this.MynoteService.getById(id);
    }

    @Put(':id')
    updateData (@Param('id') id: string, @Body() data: Partial<MynoteDto>) {
        return this.MynoteService.update(id, data);
    }

    @Delete(':id')
    destroyData (@Param('id') id: string) {
        return this.MynoteService.delete(id);
    }

    // @Get('service')
    // showAll () {
    //     return this.MynoteService.getAll();
    // }
}
