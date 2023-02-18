import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";

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
}
