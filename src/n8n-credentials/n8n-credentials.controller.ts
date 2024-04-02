import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { N8nCredentialsService } from './n8n-credentials.service';
import { CreateN8nCredentialDto } from './dto/create-n8n-credential.dto';
import { UpdateN8nCredentialDto } from './dto/update-n8n-credential.dto';

@Controller('n8n-credentials')
export class N8nCredentialsController {
  constructor(private readonly n8nCredentialsService: N8nCredentialsService) {}

  @Post()
  async create(@Body() createN8nCredentialDto: any) {
    return await this.n8nCredentialsService.create(createN8nCredentialDto);
  }

  @Get(':credentialType')
  findAll(@Param('credentialType') credentialT: string) {
    return this.n8nCredentialsService.findAll(credentialT);
  }

  @Get('workflows')
  findWorkFlow() {
    return this.n8nCredentialsService.findWorkFlow();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.n8nCredentialsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateN8nCredentialDto: UpdateN8nCredentialDto,
  ) {
    return this.n8nCredentialsService.update(+id, updateN8nCredentialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.n8nCredentialsService.remove(+id);
  }
}
