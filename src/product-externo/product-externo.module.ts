import { Module } from '@nestjs/common';
import { ProductExternoService } from './product-externo.service';
import { ProductExternoController } from './product-externo.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [ProductExternoService],
  controllers: [ProductExternoController],
})
export class ProductExternoModule {}
