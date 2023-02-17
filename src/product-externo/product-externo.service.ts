import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ProductExternoService {
    constructor(private readonly service: HttpService){}

    async findId(id: string){
        const { data } = await this.service.axiosRef.get(`https://api.irroba.com.br/v1/product/${id}`);
        console.log(data)
        return data
    }

}
