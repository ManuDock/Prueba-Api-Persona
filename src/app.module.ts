import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaModule } from './persona/persona.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PersonaModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
