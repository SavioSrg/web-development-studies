export type Produto = {
    nome: string
    valor: number
}


// class Estabelecimento {
//     private endereco: string
//     private setor: string
//     private produtos: Produto[]

//     constructor (endereco: string, setor: string, p: Produto[]) {
//         this.endereco = endereco
//         this.setor = setor
//         this. produtos = p
//     }
// }

class EstabelecimentoBase{
    private _filaDeEspera = 10

    constructor(
        public endereco: string,
        public setor: string,
        protected produtos: Produto[],
        filaDeEspera?: number
    ) {
        filaDeEspera = filaDeEspera ?? this._filaDeEspera
    }

    retornaNomeDosProdutos(){
        return this.produtos.map(produto => produto.nome)
    }

    get filaDeEspera() {
        return this._filaDeEspera
    }

    set filaDeEspera(fila: number){
        if (fila <= 0) {
            return
        }
        this._filaDeEspera = fila
    }

    dimunuiFilaDeEspera() {
        if(this.filaDeEspera === 0){
            return
        }
        this.filaDeEspera -= 1
    }
}

const padaria2 = new EstabelecimentoBase(
    'Rua dos Abacates, 357 - bloco A',
    'alimentação', 
    [
    {nome: 'banana', valor: 8}, 
    {nome: 'doce de leite', valor: 3},
    {nome: 'carne', valor: 20}
    ],
    2
)

const padaria = {
    endereço: 'Rua dos Laranjais, 1320 - bloco D',
    setor: 'alimentação',
    produtos: [
        {nome: 'pão', valor: 0.8}, 
        {nome: 'arroz', valor: 10}, 
        {nome: 'leite', valor: 5}, 
        {nome: 'doces', valor: 1.5},
        {nome: 'carne moída', valor: -20}
    ],
    
    NomeDosProdutos: function(){
        return this.produtos.map(produto => produto.nome)
    }
}
console.log(padaria)
console.log(padaria.NomeDosProdutos())
console.log(padaria2.retornaNomeDosProdutos())


padaria2.dimunuiFilaDeEspera()
padaria2.dimunuiFilaDeEspera()
padaria2.dimunuiFilaDeEspera()
padaria2.dimunuiFilaDeEspera()
padaria2.dimunuiFilaDeEspera()
console.log(padaria2.filaDeEspera)
console.log(padaria2.endereco)
console.log(padaria2.setor)