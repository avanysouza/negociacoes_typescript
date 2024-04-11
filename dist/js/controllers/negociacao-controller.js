import { Negociacao } from "../models/negociacao.js";
import { Transacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.transacoes = new Transacoes();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adicionarNegociacao() {
        const negociacao = this.criarNegociacao();
        this.transacoes.adiciona(negociacao);
        console.log(this.transacoes.lista());
        this.limparFormulario();
    }
    criarNegociacao() {
        //uso de expressão regular para converter a string no formato com hifen para virgula
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
