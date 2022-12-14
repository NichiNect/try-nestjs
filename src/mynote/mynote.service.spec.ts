import { Test, TestingModule } from '@nestjs/testing';
import { MynoteService } from './mynote.service';

describe('MynoteService', () => {
  let service: MynoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MynoteService],
    }).compile();

    service = module.get<MynoteService>(MynoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
