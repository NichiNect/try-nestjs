import { Injectable } from '@nestjs/common';

@Injectable()
export class MynoteService {

    async getAll () {
        return `this from service`;
    }
}
