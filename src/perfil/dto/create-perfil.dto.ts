import { IsNotEmpty,IsString,} from "class-validator";
import {Perfil} from '../entities/perfil.entity'

export class CreatePerfilDto extends Perfil {
    @IsString()
    @IsNotEmpty()
    titulo: string

    @IsString()
    @IsNotEmpty()
    imagem: string
}
