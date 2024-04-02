import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ItemsModule } from './items/items.module';
import { N8nCredentialsModule } from './n8n-credentials/n8n-credentials.module';

@Module({
  imports: [
    // initialize and load configuration for the entire application
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    ItemsModule,
    N8nCredentialsModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
