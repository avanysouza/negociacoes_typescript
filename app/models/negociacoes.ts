import { Negociacao } from "./negociacao";

export class Transacoes {

    private transacoes: Negociacao[] = [];


    adiciona(transacoes: Negociacao){
        this.transacoes.push(transacoes);
    }

    lista() : readonly Negociacao[]{

        return this.transacoes; 
    }

}

