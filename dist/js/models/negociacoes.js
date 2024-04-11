export class Transacoes {
    constructor() {
        this.transacoes = [];
    }
    adiciona(transacoes) {
        this.transacoes.push(transacoes);
    }
    lista() {
        return this.transacoes;
    }
}
