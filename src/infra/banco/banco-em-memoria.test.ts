import {describe, test, expect} from 'vitest'
import BancoEmMemoria from './banco-em-memoria'

describe("Banco em memória",()=>{
    test("Deve salvar no banco em memória", async()=>{
        const input= {
            id: 1,
            titulo: "test",
            sinopse: "test",
            foto: "test",
        }
        const bancoEmMemoria = new BancoEmMemoria();
        const resultado = await bancoEmMemoria.salvar(input)
        expect(resultado).toBe(true)
        expect(bancoEmMemoria.dados).toHaveLength(1)
        expect(bancoEmMemoria.dados).toEqual([input])
    })
})