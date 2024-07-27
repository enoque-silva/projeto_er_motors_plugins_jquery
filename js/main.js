$(document).ready(function(){

    // $('form').on('click', function(e){
    //     e.preventDefault();
    // })

    $('#carousel-imagens').slick({
        autoplay:true
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })
    
    $('#telefone').mask('(00) 0.0000-0000');
    
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 14
            },
            mensagem: {
                required: true
            },
            veiculoInteresse: {
                required: false
            }
        },
        messages:{
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form){
            console.log(form);
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos);
    
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorrretos.`)
            }
        }  
    })   
    
    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        const nomeVeivculo = $(this).parent().find('h3').text();
        
        $('#veiculo-interesse').val(nomeVeivculo);
        
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})


