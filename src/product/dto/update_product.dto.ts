import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create_product.dto'

export class UpdateProductDto extends PartialType(CreateProductDto) {
    product_description: string;
    price: string;
    sku: string;
    product_to_category: string;
}