import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchemas } from 'src/schemas/product.schemas';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchemas }])],
    controllers: [ProductController],
    providers: [ProductService]
})
export class ProductModule {}
