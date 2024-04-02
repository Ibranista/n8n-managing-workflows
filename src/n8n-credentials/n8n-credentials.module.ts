import { Module } from '@nestjs/common';
import { N8nCredentialsService } from './n8n-credentials.service';
import { N8nCredentialsController } from './n8n-credentials.controller';

@Module({
  controllers: [N8nCredentialsController],
  providers: [N8nCredentialsService],
})
export class N8nCredentialsModule {}
