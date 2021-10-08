import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PerfilModule } from './perfil/perfil.module';
import { UsuarioModule } from './usuario/usuario.module';
import { JogoModule } from './jogo/jogo.module';
import { GeneroModule } from './genero/genero.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [PerfilModule, UsuarioModule, JogoModule, GeneroModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
