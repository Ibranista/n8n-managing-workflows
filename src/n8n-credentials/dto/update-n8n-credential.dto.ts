import { PartialType } from '@nestjs/swagger';
import { CreateN8nCredentialDto } from './create-n8n-credential.dto';

export class UpdateN8nCredentialDto extends PartialType(CreateN8nCredentialDto) {}
