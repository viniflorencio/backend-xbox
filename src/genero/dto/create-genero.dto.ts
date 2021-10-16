import { Genero } from "../entities/genero.entity"
import { IsNotEmpty,IsString,} from "class-validator";

export class CreateGeneroDto extends Genero {
    @IsString()
    @IsNotEmpty()
    nome : string
}