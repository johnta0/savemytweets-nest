import { Test, TestingModule } from '@nestjs/testing';
import { TwitterUsersService } from './twitter-users.service';

describe('TwitterUsersService', () => {
  let service: TwitterUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TwitterUsersService],
    }).compile();

    service = module.get<TwitterUsersService>(TwitterUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
