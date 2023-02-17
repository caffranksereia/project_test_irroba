import { Test, TestingModule } from '@nestjs/testing';
import { ProductExternoService } from './product-externo.service';

describe('ProductExternoService', () => {
  let service: ProductExternoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductExternoService],
    }).compile();

    service = module.get<ProductExternoService>(ProductExternoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
