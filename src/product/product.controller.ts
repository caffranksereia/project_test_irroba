import { Body, Controller, Delete, Get, Param, Post, Put, HttpStatus, Res } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create_product.dto';
import { Product } from 'src/schemas/product.schemas';import { UpdateProductDto } from './dto/update_product.dto';
;

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Res() response, @Body() createCatDto: CreateProductDto) {
    try {
      const newProduct = await this.productService.create(createCatDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Product has been created sucessfully',
        newProduct,
      });
    } catch(err){
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Student not created',
      });
    }
  }
  @Put('/:id')
  async update(@Res() response,@Param('id') id: string,
  @Body() updateProductDto: UpdateProductDto) {
    try {
    const existingProduct = await this.productService.update(id, updateProductDto);
    return response.status(HttpStatus.OK).json({
    message: 'Product has been successfully updated',
    existingProduct,});
  } catch (err) {
    return response.status(err.status).json(err.response);
  }
  }

  @Get()
  async findAll(@Res() response) {
    try{
      const productData = await this.productService.findAll();
        return response.status(HttpStatus.OK).json({
        message: 'All product data found successfully',productData,});
    }catch(err){
      return response.status(err.status).json(err.response);
    }
  }

  @Get(':id')
  async findOne(@Res() response, @Param('id') id: string){
    try{
      const existingProduct = await this.productService.findOne(id);
      return response.status(HttpStatus.OK).json({
      message: 'Product found successfully',existingProduct,});
    }catch(err){}
    return response.status(err.status).json(err.response);
  }

  @Delete(':id')
  async delete(@Res() response, @Param('id') id: string) {
    try{
      const deleteProduct = await this.productService.delete(id);
      return response.status(HttpStatus.OK).json({
        message: 'Product deleted successfully',
        deleteProduct,});
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
