import { IsBoolean, IsNotEmpty,IsString,} from "class-validator";
import { Usuario } from '../entities/usuario.entity';


export class CreateUsuarioDto extends Usuario{
    @IsString()
    @IsNotEmpty()
    nome: string

    @IsString()
    @IsNotEmpty()
    sobrenome: string

    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    senha: string

    @IsNotEmpty()
    cpf: number

    @IsBoolean()
    isAdmin?: boolean | null;
}
