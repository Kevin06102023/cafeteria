//Voy a decirle a javascript que se ejecute una vez que se haya cargado todo el documento HTML
$(document).ready(function(){

    //Efecto menú
    $('.menu a').each(function(index,elemento){
        $(this).css({
            'top': '-200px'
        });
        $(this).animate({
            top:'0'
        }, 200 + (index * 500))
    });
    if($(window).width()>800)
    $('header .texto').css({
         opacity:0,
         margintop:0
    });
    $('header .texto').animate({
        opacity:1,
        margintop:'-52px'
    }, 1500 );
 })

 //Scroll Elementos de menú
 var acercaDe =$('#acerca-de').offset().top,
 menú = $('#platillos').offset().top,
 galeria = $('#galeria').offset().top,
 ubicacion =$('#ubicacion').offset().top;
$('#btn-acerca-de').on ('click', function(e){
    e.preventDefault();
    $('html , body').animate({
        scrolltop:acercaDe - 100
    } ,500) ;
}) ;

$('#btn-galeria').on ('click', function(e){
    e.preventDefault();
    $('html , body').animate({
        scrollTop:menú - 100
    } ,500) ;
}) ;

$('#btn-menú').on ('click', function(e){
    e.preventDefault();
    $('html , body').animate({
        scrollTop:galeria - 100
    } ,500) ;
}) ;

$('#btn-ubicacion').on ('click', function(e){
    e.preventDefault();
    $('html , body').animate({
        scrollTop:ubicacion - 100
    } ,500) ;
}) ;