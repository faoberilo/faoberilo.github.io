var imagens=[
    './assets/img/goku01.png',
    './assets/img/goku02.png',
    './assets/img/goku03.png',
    './assets/img/goku04.png',
    './assets/img/goku05.png'
]
var i=1;
function alterarImagem(objeto01,objeto02,objeto03) {
        document.getElementById(objeto01).src = imagens[i];
        if(i==0){
            document.getElementById(objeto02).innerHTML = "Nome: Son Goku";
            document.getElementById(objeto03).innerHTML = "Situação: Humano";
        }
        if(i==1){
        document.getElementById(objeto02).innerHTML = "Nome: Goku";
        document.getElementById(objeto03).innerHTML = "Situação: SSJ1";
        }
        if(i==2){
            document.getElementById(objeto02).innerHTML = "Nome: Kakaroto";
            document.getElementById(objeto03).innerHTML = "Situação: SSJ2";
        }
        if(i==3){
            document.getElementById(objeto02).innerHTML = "Nome: Cabeludo";
            document.getElementById(objeto03).innerHTML = "Situação: SSJ3";
        }
        if(i==4){
            document.getElementById(objeto02).innerHTML = "Nome: DBGT";
            document.getElementById(objeto03).innerHTML = "Situação: SSJ4";
        }
        i++;
        if (i===5){
        i=0;
        }      
}

