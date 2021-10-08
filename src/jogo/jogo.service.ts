import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';

@Injectable()
export class JogoService {
  constructor(private readonly prisma: PrismaService) {}

  
  create(data: CreateJogoDto) {
    return this.prisma.jogo.create({
      data,
    })
  }

  findAll() {
    return this.prisma.jogo.findMany();
  }

  findOne(id: number) {
    return this.prisma.jogo.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateJogoDto) {
    return this.prisma.jogo.update({
      where:{id},
      data,
    })
  }

  remove(id: number) {
    return this.prisma.jogo.delete({
      where: { id },
    });
  }
}
