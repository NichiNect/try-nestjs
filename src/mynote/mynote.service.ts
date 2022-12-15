import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MynoteDto } from './mynote.dto';
import { MyNote } from './mynote.entity';

@Injectable()
export class MynoteService {

    constructor (
        @InjectRepository(MyNote)
        private mynoteRepository: Repository<MyNote>
    ) {

    }
    
    async showAll () {
        return await this.mynoteRepository.find();
    }

    async create (data: MynoteDto) {

        const myNote = await this.mynoteRepository.create(data);
        await this.mynoteRepository.save(myNote);

        return myNote;
    }

    async getAll () {
        return `this from service`;
    }

    async getById (id: string) {
        return await this.mynoteRepository.findOne({ where: { id } });
    }

    async update (id: string, data: Partial<MynoteDto>) {

        await this.mynoteRepository.update({ id }, data);

        return await this.mynoteRepository.findOne({ where: { id } });
    }

    async delete (id: string) {
        await this.mynoteRepository.delete({ id });

        return {
            deleted: true
        }
    }
}
