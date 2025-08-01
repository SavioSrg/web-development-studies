import { Produto } from "../ex011/classes"

interface EstabelecimentoInterface {
    endereco: string
    setor: string
    filaDeEspera: number
    retornaNomeDosProdutos: () => string[]
    dimunuiFilaDeEspera(): void
}

class Estabelecimento implements EstabelecimentoInterface{
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

interface ReceitaInterface {
    remedios: string[]
    identificacaoDoMedico: string
}

interface Remedio extends Produto {
    receitaObrigatoria?: boolean
}

interface FarmaciaInterface extends EstabelecimentoInterface{
    comprarRemedioPrescrito: (receita: ReceitaInterface, produtosAComprar: string[]) => void
}

class Farmacia extends Estabelecimento implements FarmaciaInterface{
    constructor(
        public endereco: string,
        public setor: string,
        protected produtos: Remedio[],
        filaDeEspera?: number
    ) {
        super(endereco, setor, produtos, filaDeEspera)
    }

    retornaNomeDosProdutos(){
        return this.produtos.map(produto => produto.nome)
    }  

    public comprarRemedioPrescrito(
        receita: ReceitaInterface,
        produtosAComprar: string[]
): void{
        const remediosDisponiveis = this.produtos.filter(produto => produtosAComprar.includes(produto.nome) 
    )

    if(remediosDisponiveis.length === 0){
        console.log('Infelizmente não temos os remédios em estoque')
    }

    const remediosAutorizados = remediosDisponiveis.filter(
        produto => 
            produto.receitaObrigatoria ? true :
            receita.remedios.includes(produto.nome)
    )

    console.log({remediosDisponiveis})
    console.log({remediosAutorizados})
    }
}


const Indiana = new Farmacia(
    'Rua Vale Formoso, 333 - Centro',
    'farmaceutico', 
    [
        {nome: 'remédio controlado 1', valor: 9.50, receitaObrigatoria:true},
        {nome: 'remédio controlado 2', valor: 12.30, receitaObrigatoria: true},
        {nome: 'aspirina', valor: 6.80},
        {nome: 'Álcool em Gel 70%', valor: 15.90},
        {nome: 'Protetor Solar FPS 50', valor: 39.90},
        {nome: 'Shampoo', valor: 22.50}
    ],
    2
)

Indiana.comprarRemedioPrescrito({
    remedios: ['remédio controlado 1'],
    identificacaoDoMedico: '123-456-111'
}, ['aspirina', 'remédio controlado 2', 'vitamina C'])
