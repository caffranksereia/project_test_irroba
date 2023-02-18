import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { v4 as v4 } from "uuid";

export type ProductToCategoryDocuments = HydratedDocument<ProductToCategory>;

@Schema()
export class ProductToCategory {
  @Prop()
  id: v4;

  @Prop()
  product_to_category: string;
}

export const ProductToCategorytSchemas =
  SchemaFactory.createForClass(ProductToCategory);
