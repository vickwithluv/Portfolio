$('#aba1').on('click', function(e) {
    console.log("teste")
        $('html,body').animate({
          scrollTop: $('#sobre').offset().top
        },500);
    })
    $('#aba2').on('click', function(e) {
        console.log("teste")
            $('html,body').animate({
              scrollTop: $('#projetos').offset().top
            },500);
        })
        $('#aba3').on('click', function(e) {
            console.log("teste")
                $('html,body').animate({
                  scrollTop: $('#redes').offset().top
                },500);
            })
            $('#aba4').on('click', function(e) {
                console.log("teste")
                    $('html,body').animate({
                      scrollTop: $('#habilidades').offset().top
                    },500);
                })
                        
                $('#foto').on('click', function(e) {
                    console.log("teste")
                        $('html,body').animate({
                          scrollTop: $('#inicio').offset().top
                        },500);
                    })
                
// aaaaaaaaa
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


