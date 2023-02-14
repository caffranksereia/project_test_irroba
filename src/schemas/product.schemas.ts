import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { ProductToCategorytSchemas } from './category_to_category.schemas';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop()
    product_description: string;

    @Prop()
    price: string;

    @Prop()
    sku: string;

    @Prop()
    product_to_category: string;
    
}

export const ProductSchemas = SchemaFactory.createForClass(Product);