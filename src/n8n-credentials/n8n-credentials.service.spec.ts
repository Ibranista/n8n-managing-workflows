import { Test, TestingModule } from '@nestjs/testing';
import { N8nCredentialsService } from './n8n-credentials.service';

describe('N8nCredentialsService', () => {
  let service: N8nCredentialsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [N8nCredentialsService],
    }).compile();

    service = module.get<N8nCredentialsService>(N8nCredentialsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
