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
$(".grid figure, .gridFooter figure").mouseover(function(){
    $(this).css({"background-position":"right bottom"})
})

$(".grid figure, .gridFooter figure").mouseout(function(){
    $(this).css({"background-position":"left top"})
})
$(".grid figure, .gridFooter figure").click(function(){
    let vinculo = $(this).attr("vinculo");
    window.location = vinculo;
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

/**PRELOAD*/
$("body").css({"overflow-y":"hidden"});

let cargarImg = $("img");
let cargarScript = $("script");
let cargarCss = $("link");
let cargarVideos = $("video");
let cargarAudios = $("audio");
let totalObjetos = [];
let numItem = 0;
let valorPorcentaje = 0;
let incremento = 0;
let numCarga = 0;

totalObjetos.push(cargarImg,cargarScript,cargarCss,cargarVideos,cargarAudios);

totalObjetos.forEach(funcionForEach);

function funcionForEach(item,index){
    for(let i = 0; i < item.length; i++){
        
        numItem++;
        valorPorcentaje = 100/numItem;
       
    }
    for(let i = 0; i < item.length; i++){
           preload(i,item); 
    }
}

function preload(i,item){
    setTimeout(function(){
            $(item[i]).ready(function(){
                numCarga++;
            incremento = Math.floor(numCarga * valorPorcentaje);
            $("#porcentajeCarga").html(incremento+"%");
            $("#rellenoCarga").css({"width":incremento+"%"});

            if(incremento >= 100){
                $("#preload").delay(350).fadeOut("slow");
                $("body").delay(350).css({"overflow-y":"scroll"})
            }
        })
    },i*100)
}
