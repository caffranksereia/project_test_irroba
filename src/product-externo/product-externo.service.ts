import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ProductExternoService {
  constructor(private readonly service: HttpService){}

  async findId(id: string) {
    const { data } = await this.service.axiosRef.get(`
    https://api.irroba.com.br/v1/product/${id}`);
    return data;
  }

//   async findProduct(id: string) {
//     const { data } = await this.service.axiosRef.get(`
//     https://api.irroba.com.br/v1/product/${id}`,
//       {
//         headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer '+ token,
//         }
//       });
//     console.log(data);
//     console.log(data.authorization);
//     return data;
//   }
}
