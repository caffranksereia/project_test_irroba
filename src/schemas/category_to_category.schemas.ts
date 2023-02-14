import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { type } from 'os';

export type ProductToCategoryDocuments = HydratedDocument<ProductToCategory>;

@Schema()
export class  ProductToCategory{
    @Prop()
    product_to_category: string;



}

export const ProductToCategorytSchemas = SchemaFactory.createForClass(ProductToCategory);