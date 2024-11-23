//Criando variaveis 
//Criamos uma variavel que recebe a informacao/elemento do documento html
const botaoJs = document.getElementById('botaoHtml');
let lampada = document.getElementById('lampada');
let statusTexto = document.getElementById('status');

//Criando uma funcao(bloco de codigo com funcao especifica)
function alternarLampada(){//INICIO DA FUNÇÃO
    //Se o texto do botao for igual a Ligar 
    if (boatao.textContent == 'Ligar') {//INICIO DO IF
        //Subisttituindo a imagem do elemento lampada atribuindo o scr. porque atribuimos o src? Lembre-se quando criamos uma imagem no html, para atribuir uma imagem ao comando img, temos de colocar o scr='caminho/nomeImagem'. Assim abaixo trocamos a imagem atribuindo um novo scr ao nosso elemento lampada do html
        lampada.src = 'imgLamp/ligado.png';
        //Abaixo a partir do metodo textContent atribuimos um novo texto para aparecer no nosso elemento do statusTexto que em nosso html é o elemento de id='status'
        botaoJs.textContent = 'Desligar';
        //Abaixo a partir do metodo textContent atribuimos um novo texto para aparecer no nosso elemento do statusTexto que em nosso html é o elemento de id='status'
        statusTexto.textContent = 'Aceso';
        //Abaixo a partir do metodo style modificamos o design do elemento syatusTexto que em nosso html é o elemento de id='status' trocando sua cor para laranja. Neste caso trocamos a cor, podemos acessar todas as funcoes do Style se apos a palavra style colocarmos o .(ponto)
        statusTexto.style.color = 'Orange';
        //Abaixo a partir do metodo style modificamos o design do elemento syatusTexto que em nosso html é o elemento de id='status' trocando o tamanho da letra. Neste caso trocamos a cor, podemos acessar todas as funcoes do Style se apos a palavra style colocarmos o .(ponto)
        statusTexto.style.fontSize = '30px';
        
    }//FIM DO IF
     else {//INICIO DO ELSE
        lampada.src = 'imgLamp/apagado.png';
        botaoJs.textContent= 'Ligar';
        statusTesto.textContent='Apagado';
        statusTexto.style.fontSize = '25px';
        statusTexto.style.color = 'rgb(126,125,125)';

    }//FIM DO ELSE
}//FIM DA FUNÇÃO
//Adicionar um evento ao meu botão toda vez que o usuario der um click
botaoJs.addEventListener('click',alternarLampada);


