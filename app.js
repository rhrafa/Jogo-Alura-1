let listaDeNumerosSorteador = [];
let numeroLimite = 10;

let numeroSecreto = gerarNumeroAleatorio();

let tentativa = 1;
console.log (numeroSecreto);
exibirMensagemInicial();

function exibirMensagemInicial(){
  exibirTextonNaTela('h1','Jogo do número sectreto');
  exibirTextonNaTela('p','escolha um número de 1 a 10');
}


function exibirTextonNaTela(tag,texto){
let campo = document.querySelector(tag);
 campo.innerHTML = texto;
}


function verificarChute(){
    let chute = document.querySelector('input').value;
   if(chute==numeroSecreto){
    exibirTextonNaTela('h1','você acertou o número secreto');
    let palavraTentativa = tentativa > 1 ?'tentativas': 'tentativa';
    let mensagenTentativas = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}!`
    exibirTextonNaTela('p',mensagenTentativas);
     document.getElementById('reiniciar').removeAttribute('disabled');
   }else{
    if(chute>numeroSecreto){
      exibirTextonNaTela('p','O número secreto é menor');
    }else{
      exibirTextonNaTela('p','O número secreto é maior');
    } tentativa++
    limparCampo();
   }
}


function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteador.length;

  if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteador = [];
  }

  if (listaDeNumerosSorteador.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  } else{
    listaDeNumerosSorteador.push(numeroEscolhido);
    console.log(listaDeNumerosSorteador);
    return numeroEscolhido;
  }
}

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}


function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo()
  tentativa = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled',true);
}