const botao = document.querySelector("#botao");
const nome = document.querySelector("#nome");
const situacao = document.querySelector("#situacao");
const imagem = document.querySelector("#goku");
var i=1;
botao.addEventListener("click", function (){
    if (i===0){
        nome.innerText ="Nome: Son Goku";
        situacao.innerText = "Situação: Ser Humano";
        imagem.src = "./assets/img/goku01.png";
        i++;
    }
    else if (i===1){
        nome.innerText ="Nome: Goku";
        situacao.innerText = "Situação: SSJ1";
        imagem.src = "./assets/img/goku02.png";
        i++;
    }
    else if (i===2){
        nome.innerText ="Nome: Kakaroto";
        situacao.innerText = "Situação: SSJ2";
        imagem.src = "./assets/img/goku03.png";
        i++;
    }
    else if (i===3){
        nome.innerText ="Nome: Cabeludo";
        situacao.innerText = "Situação: SSJ3";
        imagem.src = "./assets/img/goku04.png";
        i++;
    }
    else if (i===4){
        nome.innerText ="Nome: GokuGT";
        situacao.innerText = "Situação: SSJ4";
        imagem.src = "./assets/img/goku05.png";
        i=0;
    }
});

