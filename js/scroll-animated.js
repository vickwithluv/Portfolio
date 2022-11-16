// desce até a seção ao clicar na opção do menu
$('#aba1').on('click', function(e) {
    console.log($('#sobre').offset().top)
        $('html,main').animate({
          scrollTop: $('#sobre').offset().top 
        },500);
    })

$('#aba2').on('click', function(e) {
    console.log("teste")
        $('html,main').animate({
          scrollTop: $('#projetos').offset().top 
        },500);
    })

$('#aba3').on('click', function(e) {
    console.log("teste")
        $('html,main').animate({
          scrollTop: $('#habilidades').offset().top 
        },500);
    })

$('#aba4').on('click', function(e) {
    console.log("teste")
        $('html,main').animate({
          scrollTop: $('#redes').offset().top
        },500);
    })

$('#foto').on('click', function(e) {
    console.log("teste")
        $('html,main').animate({
          scrollTop: $('#inicio').offset().top
        },500);
    })


    // seleciona a seção ao descer até ela
    const ids=["#inicio","#sobre","#projetos","#habilidades","#redes"]

    document.querySelector("main").addEventListener("scroll", (e)=>{
        const scrollTop = document.querySelector("main").scrollTop +(window.innerHeight/2)
        
        ids.forEach(id=>{
           const offsetTop = document.querySelector(id).offsetTop +(document.querySelector(id).offsetHeight/2) -100
           if (scrollTop > offsetTop){
                document.querySelectorAll("header .nav-list a").forEach(element =>{
                    element.classList.remove("ativo")
                })
                document.querySelector(`a[href="${id}"]`).classList.add("ativo")
           }
    
        })
    })

//mudar background menu ao scrollar

$('main').scroll(function (event) {
  var scroll = $('main').scrollTop();
  console.log(scroll)
  
  if(scroll>0){
    $(".cabecalho").css("opacity","0.9");
  }else{
    $(".cabecalho").css("opacity","1");
  }
});