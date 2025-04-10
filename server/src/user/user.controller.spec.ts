import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './entity/user.entity';

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const args = {
        lastname: "Sentinel",
        firstname: "Marion",
        email: "Marion@gmail.com",
        password: "Azerty123",
        age: 21
      };
      const result = new User();
      jest.spyOn(userService, 'register').mockImplementation();

      expect(await controller.register(args)).toBe(result);
    });
  });
});
