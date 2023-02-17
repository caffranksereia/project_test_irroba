import { Controller, Get, Param } from '@nestjs/common';
import { ProductExternoService } from './product-externo.service';

@Controller('product-externo')
export class ProductExternoController {
    constructor(private apiService: ProductExternoService){}

    @Get(':id')
    async findID(@Param('id') id: string): Promise<any> {
      const productId = await this.apiService.findId(id);
      return productId;
    }
}
