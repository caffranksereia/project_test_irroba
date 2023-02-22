import { Injectable, Res } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { map } from "rxjs";
import { application, response } from "express";

@Injectable()
export class UsersService {
  constructor(private readonly service: HttpService) {}

  async auth(body: Body) {
    const { data } = await this.service.axiosRef.post(
      "https://api.irroba.com.br/v1/getToken",
      body
    );
    return data;
  }
  async getProduct(id): Promise<{getToken: string}> {
    const { data } = await this.service.axiosRef.get(
      `https://api.irroba.com.br/v1/product/${id} `,
      {
        headers: {
          "Authorization":  getToken,
      }
      }
    );
    console.log(data);
    return data;
  }
}
