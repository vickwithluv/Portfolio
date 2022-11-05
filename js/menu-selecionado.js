const abas = (document.querySelectorAll(".aba"));

abas.forEach(aba => {
    aba.addEventListener("click", function(){

        if(aba.classList.contains("ativo")){
            return;
        }

        selecionarAba(aba);
        // mostrarInformacaoDaAba(aba);
    })
})

function selecionarAba(aba){
    const abaSelecionada = (document.querySelector(".aba.ativo"));
    abaSelecionada.classList.remove("ativo");

    aba.classList.add("ativo");
}

function mostrarInformacaoDaAba(aba){
    // const informacaoSelecionada = document.querySelector(".abas.ativo")
    // console.log(informacaoSelecionada)
    // informacaoSelecionada.classList.remove("ativo");

    const idDoElementoDeInformacaoDaAba = `informacao-${aba.id}`;
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacaoDaAba);
    informacaoASerMostrada.classList.add("ativo");
}