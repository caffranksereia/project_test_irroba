import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from 'src/dto/create_product.dto';
import { Product, ProductDocument } from 'src/schemas/product.schemas';


@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name) private readonly productModel: Model<ProductDocument>,
    ){}

    async create(createProduct:CreateProductDto): Promise<Product>{
        const createdProduct= await this.productModel.create(createProduct);
        return createdProduct;
    }

    async findAll(): Promise<Product[]> {
        return this.productModel.find().exec();
    }

    async findOne(id: string): Promise<Product> {
        return this.productModel.findOne({ _id: id }).exec();
    }
    
    async delete(id: string) {
        const deleteProduct = await this.productModel.findByIdAndRemove({ _id: id }).exec();
        return deleteProduct;
    }
}