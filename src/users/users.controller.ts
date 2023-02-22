import {
 Controller,
 Body,
 Post,
 Get,
 HttpStatus,
 Res,
} from "@nestjs/common";
import { response } from "express";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private apiService: UsersService) {}

  @Post()
  async authUser(@Body() body: Body, @Res() response) {
    const userAuth = await this.apiService.auth(body);
    try {
      if (!userAuth.date_expire) {
        return response.status(HttpStatus.ACCEPTED).json({
          message: "ok Authorization ",
          userAuth,
        });
      }
      return userAuth;
    } catch (error) {
      return response.status(error.status).json({
        message: "You need new token",
      });
    }
  }

  @Get(":id")
  async getProduct(@Res() response, id: string) {
    const productId = await this.apiService.getProduct(id);
    return response.status(HttpStatus.OK).json({
      message: "Ok",
      productId,
    });
  }
}
