import { Module } from '@nestjs/common';
import { JogoService } from './jogo.service';
import { JogoController } from './jogo.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [JogoController],
  providers: [JogoService, PrismaService]
})
export class JogoModule {}
