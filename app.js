let listaNomesAmigos=[];

function adicionarAmigo() {
    let nomeDoAmigo=document.querySelector('input').value
    if(nomeDoAmigo===''){
        alert('Por favor, insira um nome.');
    } else if (listaNomesAmigos.some(a => a.toLowerCase() ===nomeDoAmigo.toLowerCase())){
        alert('Esse nome já foi inserido. Por favor insira outro nome.')
    } else{
        listaNomesAmigos.push(nomeDoAmigo);
    }
    exibirAmigos();
    console.log(listaNomesAmigos);
    document.querySelector('input').value="";
}

function exibirAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < listaNomesAmigos.length; i++) {
         lista.innerHTML += `<li>${listaNomesAmigos[i]}</li>`;
    }
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    if (listaNomesAmigos.length === 0){
        alert('Por favor, insira ao menos um amigo!');
        return;
    }
    const indice = Math.floor(Math.random()*listaNomesAmigos.length);
    const sorteado = listaNomesAmigos[indice];
    resultado.innerHTML = `O nome do seu amigo secreto é ${sorteado}!`;
    
}
