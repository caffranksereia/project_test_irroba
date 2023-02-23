import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { ProductToCategory } from "./category_to_category.schemas";
import * as mongoose from "mongoose";
import { v4 as v4 } from "uuid";

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  id: v4;

  @Prop({ required: true })
  product_description: string;

  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  sku: string;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'category_to_product'}]})
  product_to_category: ProductToCategory;
}

export const ProductSchemas = SchemaFactory.createForClass(Product);
