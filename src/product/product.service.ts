import { Injectable,NotFoundException  } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create_product.dto';
import { Product, ProductDocument } from 'src/schemas/product.schemas';
import { UpdateProductDto } from './dto/update_product.dto';


@Injectable()
export class ProductService {
    constructor(
        @InjectModel('Product') private readonly productModel: Model<ProductDocument>,
    ){}

    async create(createProduct:CreateProductDto): Promise<Product>{
        const createdProduct= await this.productModel.create(createProduct);
        return createdProduct.save();
    }

    async update(id: string, updateProductDto: UpdateProductDto ): Promise<Product>{
        const existingProdut = await this.productModel.findByIdAndUpdate(id, updateProductDto,{
            new: true
        });
        if (!existingProdut) {
            throw new NotFoundException(`Product #${id} not found`);
          }
          return existingProdut;

    }

    async findAll(): Promise<Product[]> {
        const productData = await this.productModel.find().exec();

        if (!productData || productData.length == 0) {
            throw new NotFoundException('Product data not found!');
        }
        return productData;
    }

    async findOne(id: string): Promise<Product> {
        const existingProduct =  this.productModel.findOne({ id: id }).exec();

        if (!existingProduct) {
            throw new NotFoundException(`Product #${id} not found`);
           }
           return existingProduct;
    }
    
    async delete(id: string) {
        const deleteProduct = await this.productModel.findByIdAndRemove({ id: id }).exec();

        if (!deleteProduct) {
            throw new NotFoundException(`Product #${id} not found`);
          }
          return deleteProduct;
        return deleteProduct;
    }
}