import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateProductDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly product_description: string;

  @IsString()
  @IsNotEmpty()
  readonly price: string;

  @IsString()
  @IsNotEmpty()
  readonly sku: string;

  @IsString()
  @IsNotEmpty()
  readonly product_to_category: string;
}
