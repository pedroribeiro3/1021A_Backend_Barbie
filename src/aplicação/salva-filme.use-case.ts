import FilmeRepositorioInterface from "./filme-repositorio-interface"
class SalvaFilme {
    
    constructor(private bancoInterface:FilmeRepositorioInterface){}
    public async execute(input:Input):Promise<Output|undefined>{
        const {id, titulo, sinopse, foto} = input

        //Salvar no banco
        this.bancoInterface.salvar({id,titulo,sinopse,foto})
        const resultado = await this.bancoInterface.salvar({id,titulo,sinopse,foto})

        //Retornar
        if(!resultado) return undefined
        return {id, titulo, sinopse, foto}
        
    }
}

export default SalvaFilme

type Input = {
    id:number,
    titulo:string,
    sinopse:string,
    foto:string
}

type Output = {
    id:number,
    titulo:string,
    sinopse:string,
    foto:string
}