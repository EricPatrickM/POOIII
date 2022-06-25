import {Usuario, Endereco} from './Usuario'
import {sexo} from './Util/Enum'

const endereco1 : Endereco = new Endereco('rua teste 1', 123, 123456789, 'bairro teste 1',
 'cidade teste 1')
const usuario1 : Usuario = new Usuario('Eric', 123456789, 123456789, sexo.Masculino, endereco1)

const endereco2 : Endereco = new Endereco('rua teste 2', 123, 123456789, 'bairro teste 2',
 'cidade teste 2')
const usuario2 : Usuario = new Usuario('Gustavo', 123456789, 123456789, sexo.Masculino, endereco2)

console.log(usuario1.nome)
console.log(usuario2.nome)