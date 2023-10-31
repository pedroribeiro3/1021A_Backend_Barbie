import {describe, test, expect} from 'vitest'
import SalvaFilme from './salva-filme.use-case'
describe('Testando usecase de salvar filme',()=>{
    test("Deve salvar um filme",()=>{
        //Entrada
        const filme = {
            id: 1,
            titulo: "test",
            descricao: "test",
            foto: "test"
        }

        //Processamento
        const salvaFilme = new SalvaFilme()
        const resultado = salvaFilme.execute(filme)

        //Resultado
        expect(resultado).toEqual(filme)
    })
})