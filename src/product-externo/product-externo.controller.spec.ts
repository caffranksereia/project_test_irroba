import { Test, TestingModule } from '@nestjs/testing';
import { ProductExternoController } from './product-externo.controller';

describe('ProductExternoController', () => {
  let controller: ProductExternoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductExternoController],
    }).compile();

    controller = module.get<ProductExternoController>(ProductExternoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
