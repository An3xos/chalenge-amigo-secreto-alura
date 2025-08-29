var listaNomesAmigos=[];

function adicionarAmigo() {
    var nomeDoAmigo=document.querySelector('input').value
    if(nomeDoAmigo===''){
        alert('Por favor, insira um nome.');
    } else if (listaNomesAmigos.includes(nomeDoAmigo)){
        alert('Esse nome já foi inserido. Por favor insira outro nome.')
    } else{
        listaNomesAmigos.push(nomeDoAmigo);
    }
    console.log(listaNomesAmigos);
    document.querySelector('input').value="";
}

function atualizarListaNomes() {
    
}