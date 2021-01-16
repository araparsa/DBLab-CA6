import { Test, TestingModule } from '@nestjs/testing';
import { UserServices } from './user.service';

describe('UserServices', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserServices],
    }).compile();

    service = module.get<UserService>(UserServices);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
