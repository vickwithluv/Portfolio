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
                



$(document).ready(function () {
    $(document).on("scroll", onScroll);
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('ativo');
        });
            $(this).addClass('ativo');
                        

            var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 400, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);});
        });
    });

    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('#nav-list a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos-70) {
                $('#nav-list ul li a').removeClass("ativo");
                currLink.addClass("ativo");
            }
            else{currLink.removeClass("ativo");
        }
    });
}
                   