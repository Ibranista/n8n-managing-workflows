import { Injectable } from '@nestjs/common';
import { CreateN8nCredentialDto } from './dto/create-n8n-credential.dto';
import { UpdateN8nCredentialDto } from './dto/update-n8n-credential.dto';
import axios from 'axios';

@Injectable()
export class N8nCredentialsService {
  CREDENTIALS_API_SCHEMA =
    ' https://n8n-zhd7.onrender.com/api/v1/credentials/schema/';

  CREDENTIALS_API = ' https://n8n-zhd7.onrender.com/api/v1/credentials/';
  BASE_URL = 'https://n8n-zhd7.onrender.com/api/v1/';
  async create(createN8nCredentialDto: any): Promise<any> {
    const data = createN8nCredentialDto;
    const headers = {
      'Content-Type': 'application/json',
      'X-N8N-API-KEY':
        'n8n_api_76e8fc28e515f8c33e0c7c53ff91dd103bd182b1ebcfc116fdb43cf07ad247c34766e5d3765e7c58',
    };
    try {
      const response = await axios.post(
        this.CREDENTIALS_API,
        JSON.stringify(data.dataToSend),
        {
          headers,
        },
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async findAll(credentialType: string) {
    const response = await fetch(this.CREDENTIALS_API_SCHEMA + credentialType, {
      headers: {
        accept: 'application/json',
        'X-N8N-API-KEY':
          'n8n_api_e2981b7873de02f6b69a0a9435b9fcddfd8d513e9365646e42cfd7c267099cff5c19bd960e2ab1d5',
      },
    });
    const data = await response.json();
    return data;
  }

  async findWorkFlow() {
    console.log('called');
    const response = await fetch(this.BASE_URL + 'workflows', {
      headers: {
        accept: 'application/json',
        'X-N8N-API-KEY':
          'n8n_api_e2981b7873de02f6b69a0a9435b9fcddfd8d513e9365646e42cfd7c267099cff5c19bd960e2ab1d5',
      },
    });
    const data = await response.json();
    console.log('data===>', data);
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} n8nCredential`;
  }

  update(id: number, updateN8nCredentialDto: UpdateN8nCredentialDto) {
    return `This action updates a #${id} n8nCredential`;
  }

  remove(id: number) {
    return `This action removes a #${id} n8nCredential`;
  }
}
