import { Test, TestingModule } from '@nestjs/testing';
import { MynoteController } from './mynote.controller';

describe('MynoteController', () => {
  let controller: MynoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MynoteController],
    }).compile();

    controller = module.get<MynoteController>(MynoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
