import { Test, TestingModule } from '@nestjs/testing';
import { StatusController } from './status.controller';

describe('Status Controller', () => {
  let module: TestingModule;
  let controller: StatusController;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [StatusController],
    }).compile();
    controller = module.get<StatusController>(StatusController);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should return ok status', async () => {
    expect(await controller.status()).toEqual({ status: "ok" });
  });
});
