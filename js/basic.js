console.log('Ola, Javascript!')

var userName = 'Daiane'

document.getElementById('user-name').innerHTML = userName

// Variaveis //

// var nome = 'Mestre Yoda'
// var idade = 100
// var jedi = true

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof jedi)

//Operadores Matematicos //

//var n1 = 5
//var n2 = 2.5

//console.log(typeof n1)
//console.log(typeof n2)

//var total = n1 / n2 
//console.log(total)

// Operadores de Comparação //

//var v1 = 5
//var v2 = '5'

//var resultado = v1 !== v2
//console.log(resultado)

// Funçoes //

// function soma (n1, n2) {
// console,log(n1+n2)
//}
//soma (5,100)

//function boasVindas(nome){
//    alert(nome + ', seja bem vindo(a)')
//}
//boasVindas('Daiane')

//function soma (n1, n2){
//    return n1 + n2
//}
//var resultado = soma (10, 10)
//console.log(resultado)


// Controle de fluxos BDD (Behavior-Driven Development)//

// BDD Desenvolvimento criado por comportamento


// Sendo um cliente correntista do banco
// Posso sacar dinheiro em caixas eletronicos
// Para poder comprar em lugares que nao aceita cartao de debito e credito

//var saldo = 1000
//function saque(valor){
//    if (valor > saldo){
//       console.log('Valor do saque superior ao saldo')
//    } else if (valor > 700){
//        console.log('Valor do saque é superior ao maximo permitido por operação')
//    } else {
//        saldo = saldo - valor
//    }    
//}
//saque(701)
//console.log(saldo)


// Cenario 1: saque com sucesso
// Dado que meu saldo e de 1000 reais
// Quando faço um saque de 500 reais
// Entao o valor do saque deve ser deduzido do meu saldo

// Cenario 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 1001 reais
// Entao nao deve deduzir do meu saldo 
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo

// Cenario 3: Saque com valor maximo
// Dado que meu saldo e de 1000 reais
// E o valor maximo por operação é de 700 reais
// Quando faço um saque no valor de 701 reais
// Entao nao deve deduzir do saldo 
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao maximo permitido por operação

// Arrays //

//var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

//personagens.push('C3pO')
//personagens.push('R2D2') //push acrescenta no array
//personagens.pop() //pop remove do array

//personagens = personagens.filter(function(p){
//    return p !== 'Darth Vader'
//})

//personagens = personagens.filter(function(p){
//   return p === 'Mestre Yoda'
//})

//console.log(personagens)

// Controles de repetição //

//var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']
//personagens.forEach(function(p){ //controle de repetição
//    console.log(p)
//})

//for ( var i in personagens){
//    console.log(personagens[i])
//}

//for (var i = 0; i <= 10; i++){
//    console.log(i) //codigo vai ser executado ate a condição retornar false
//}

// Objetos //

//var yoda = {
//    nome: 'Mestre Yoda',
//    idade: 100,
//    jedi: true,
//    mostraIdade: function(){
//        console.log(`A idade do ${this.nome} é ${this.idade} anos.`)
//    } 
//}

//console.log(yoda)
//yoda.mostraIdade()

// Constantes //

//const nome = 'Darth Vader'
//console.log(nome)
