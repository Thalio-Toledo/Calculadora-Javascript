
var acaoEscolhida="";
var valorTela="";
var valorAntigoTela="";



function botaoDigitoClick(evento){

    var digito = evento.target.value // valor.target.value pega valor do botao
    atualizarTela(`${valorTela}${digito}`);
}

function botaoAcaoClick(evento){
  
   var acao = evento.target.value;
   rodarAcao(acao)

    
}

function atualizarTela(numero){
  var tela = document.getElementById('tela'); // pegar o id da tela
  valorTela = numero
  tela.innerHTML = valorTela // colocar numero clicado na tela
}

function rodarAcao(acao){

  if(acao === "="){
    var resultado;
    if(acaoEscolhida ==="+"){
        resultado = parseInt(valorAntigoTela) + parseInt(valorTela);
    }

    if(acaoEscolhida ==="-"){
      resultado = parseInt(valorAntigoTela) - parseInt(valorTela);
  }
  if(acaoEscolhida ==="*"){
    resultado = parseInt(valorAntigoTela) * parseInt(valorTela);
}
if(acaoEscolhida ==="/"){
  resultado = parseInt(valorAntigoTela) / parseInt(valorTela);
}
    atualizarTela(resultado);

  }else{
    if(acao ==="c"){
      location.reload();
    }
    valorAntigoTela = valorTela
    atualizarTela("");
    acaoEscolhida = acao;
    
  

  }
  

  
}