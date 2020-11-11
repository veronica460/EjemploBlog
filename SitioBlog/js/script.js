/*BANNER */
$(".fade-slider").jdSlider({
    isSliding: false,
    isAuto: true,
    isLoop: true,
    isDrag: false,
    interval: 5000,
    isCursor: false,
    speed: 3000
});

let alturaBanner = $(".fade-slider").height();

$(".bannerEstatico").css({"height": alturaBanner + "px"})

/*ANIMACIONES SCROLL*/
$(window).scroll(function(){

    let posY = window.pageYOffset;

    if(posY > alturaBanner){

        $("header").css({"background": "white"})
        $("header .logotipo").css({"filter": "invert(100%)"})
        $(".fa-bars").css({"color": "black"})

    }else{

        $("header").css({"background": "rgba(0,0,0,.5)"})
        $("header .logotipo").css({"filter": "invert(0%)"})
        $(".fa-bars").css({"color": "white"})

    }
})

/**MENU */
$(".fa-bars").click(function(){
    $(".menu").fadeIn("fast");
})
$(".btn-close").click(function(){
    $(".menu").fadeOut("fast");
})

/**GRID DE CATEGORIAS */
$(".grid figure").mouseover(function(){
    $(this).css({"background-position":"right bottom"})
})

$(".grid figure").mouseout(function(){
    $(this).css({"background-position":"left top"})
})

/**PAGINACION */
$(".pagination").twbsPagination({
    totalPages:10,
    first: 'Primero',
    last: 'Último',
    next: '<i class="fas fa-angle-right"></i>',
    prev: '<i class="fas fa-angle-left"></i>',
    visiblePages: 4
});

/**SCROLLORAMA */
let controller = $.superscrollorama();
controller.addTween(".contenidoInicio.container", TweenMax.from(
    $(".contenidoInicio.container"), .5, {css:{opacity: 0}}
))

/**SCROLL UP */
$.scrollUp({
    scrollText: "",
    scrollSpeed: 2000,
    easingType: "easeOutQuint"
})