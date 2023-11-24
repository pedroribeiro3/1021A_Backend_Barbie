import FilmeRepositorioInterface from "../../aplicação/filme-repositorio-interface"

export default class BancoEmMemoria implements FilmeRepositorioInterface{
    public dados:Filme[] = []
    constructor(){}
    public salvar(input:Filme):Promise<boolean>{
        this.dados.push(input)
        return new Promise((resolve,reject)=>{
            setTimeout(()=>resolve(true),1000)
        })
    }
    public listar():Promise<Filme[]>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>resolve(this.dados),10)
        })
    }
}

type Filme = {
    id: number,
    titulo: string,
    sinopse: string,
    foto: string
}