import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto'

export class UpdateProductDto extends PartialType(CreateStudentDto) {
    product_description: string;
    price: string;
    sku: string;
    product_to_category: string;
}