import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Injectable()
export class GeneroService {
  constructor(private readonly prisma: PrismaService) {}
  create(data: CreateGeneroDto) {
    return this.prisma.genero.create({
      data
    });
  }

  findAll() {
    return this.prisma.genero.findMany()
  }

  findOne(id: number) {
    return this.prisma.genero.findUnique({
      where:{id}
    });
  }

  update(id: number, data: UpdateGeneroDto) {
    return this.prisma.genero.update({
      where:{id},
      data
    });
  }

  remove(id: number) {
    return this.prisma.genero.delete({
      where:{id}
    });
  }
}
