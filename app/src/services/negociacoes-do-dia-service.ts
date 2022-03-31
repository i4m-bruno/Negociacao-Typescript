import { NegociacosDoDia } from "../interfaces/negociacoes-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
    public obterNegociacoesDoDia(): Promise<Negociacao[]>{
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados: NegociacosDoDia[]) => {
                return dados.map(novosDados => {
                    return new Negociacao(
                        new Date(),
                        novosDados.vezes,
                        novosDados.montante
                    )
                })
            })
    }
}