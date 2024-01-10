var cont = document.getElementById("resultado");
var botao = document.getElementById("button");
var main = document.getElementById("main");

cont.innerHTML = "<p>Preparando a contagem...</p>";

function contar(){
    var tini = document.getElementById("iinicio");
    var tfim = document.getElementById("ifim");
    var tpasso = document.getElementById("ipasso");

    var ini = Number(tini.value);
    var fim = Number(tfim.value);
    var passo = Number(tpasso.value);

    cont.innerHTML = "<p></p>";
    if(passo == 0){
        alert("Passo 0 não pode ser utilizado, considerando Passo = 1");
        passo = 1;
    }
    if(ini-fim == 0){
        cont.innerText = `Valor indefinido`;
    }
    else if(ini > fim){
        for(ini; ini>=fim; ini-=passo){
            cont.innerHTML += `${ini} &#x1F449; `;
            main.style.height = `${200+cont.offsetHeight}px`
        }
        cont.innerHTML += `&#x1F3C1;`;
    }
    else{
        for(ini; ini<=fim; ini+=passo){
            cont.innerHTML += `${ini} &#x1F449; `;
            main.style.height = `${200+cont.offsetHeight}px`
        }
        cont.innerHTML += `&#x1F3C1;`;
    }
}