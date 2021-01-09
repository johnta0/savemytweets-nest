import { Test, TestingModule } from '@nestjs/testing';
import { TwitterUsersController } from './twitter-users.controller';

describe('TwitterUsersController', () => {
  let controller: TwitterUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TwitterUsersController],
    }).compile();

    controller = module.get<TwitterUsersController>(TwitterUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
