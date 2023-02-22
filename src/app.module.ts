import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductModule } from "./product/product.module";
import { ConfigModule } from "@nestjs/config";
import { HttpModule } from "@nestjs/axios";
import { UsersController } from "./users/users.controller";
import { UsersService } from "./users/users.service";
import { UsersModule } from "./users/users.module";
import { Product, ProductSchemas } from "./schemas/product.schemas";
@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/product_db"),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchemas }]),
    ProductModule,
    ConfigModule.forRoot(),
    HttpModule,
    UsersModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
