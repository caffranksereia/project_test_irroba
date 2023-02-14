import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from '../dto/create_product.dto';
import { Product } from 'src/schemas/product.schemas';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createCatDto: CreateProductDto) {
    await this.productService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
