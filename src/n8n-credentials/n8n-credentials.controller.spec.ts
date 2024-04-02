import { Test, TestingModule } from '@nestjs/testing';
import { N8nCredentialsController } from './n8n-credentials.controller';
import { N8nCredentialsService } from './n8n-credentials.service';

describe('N8nCredentialsController', () => {
  let controller: N8nCredentialsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [N8nCredentialsController],
      providers: [N8nCredentialsService],
    }).compile();

    controller = module.get<N8nCredentialsController>(N8nCredentialsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
