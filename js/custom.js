$('.banner-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
	navText:[
		 "<span><i class='fa fa-angle-left'></i></span>",
      "<span><i class='fa fa-angle-right'></i></span>"
	],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$('.review-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
	navText:[
		 "<span><i class='fa fa-angle-left'></i></span>",
      "<span><i class='fa fa-angle-right'></i></span>"
	],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})