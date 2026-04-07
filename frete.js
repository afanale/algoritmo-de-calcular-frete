function frete() {

    
    let produto = {
        peso: [
        {min: 0, max: 3},
        {min: 3, max: 5},
        {min: 5, max: 10}
        ],
        nome: 'Arroz',
    }

    if (produto.peso[1].min <= 3) {
        return `O frete para o produto ${produto.nome} é de R$ 10,00`
    }
}
console.log(frete())