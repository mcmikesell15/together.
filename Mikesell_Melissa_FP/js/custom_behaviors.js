$(document).ready(function() {
					
	// VARIABLES

	var windowVisible = false;
	var endReached = false;
	
	
	// EVENT HANDLERS

	$(".begin").click(function(){
		$("#openingContainer").fadeOut(1000)
		$("#contentContainer").css({"overflow": "visible"})
		$(".b2").children("p").delay(1000).fadeIn(3000).addClass("boxText")
		$(".b1").delay(1000).fadeIn(1000)
	})

	$("#sanitizer").mouseover(function(){
		$(this).fadeOut(100)
		$("#sanitizerColor").fadeIn(700)
	})

	$("#mask").mouseover(function(){
		$(this).fadeOut(100)
		$("#maskColor").fadeIn(700)
	})
	$("#window").mouseover(function(){
		$("#window").fadeOut(1000)
		$("#windowColor").fadeIn(1000)
		$("#hearts").delay(1000).fadeIn(1000)
		windowVisible = true;
	})

	// $("#hearts").mouseout(function(){
	// 	$("#hearts").fadeOut(1000)
	// 	$("#windowColor").delay(1000).fadeOut(1000)
	// 	$("#window").delay(1000).fadeIn(1000)
	// })

	$("#battery").one("mouseover", function(){
		$(".batteryOuter").css({"opacity": ".6", "fill": "#1a3f49"}).animate({"opacity": 1}, 500).removeClass("vector")
		$(".batteryEnd").css({"opacity": ".6", "fill": "#1a3f49"}).animate({"opacity": 1}, 500).removeClass("vector")
		$(".batteryJuice").css({opacity: ".6", border: "1px solid #cc6a19", "background-color": "#cc6a19"}).animate({opacity: "1", }).addClass("batteryAnimate")
	})

	$(".b14").one("mouseover", function(){
		$("#coffeeCup").fadeOut(100)
		$(".coffee").fadeIn(500)
		$(".coffee1").animate({left: "-=50px"}, 500).addClass("coffee1Animate")
		$(".coffee2").delay(500).animate({left: "-=145px"}, 500).addClass("coffee2Animate")
		$(".steam").delay(1850).fadeIn(100)
	})

	$(".cars1").mouseover(function(){
		$(".cars1").addClass("carsAnimate")
		$(".balloons").fadeIn(100)
	})

	$("#clock").mouseover(function(){
		$(".hour").addClass("hourAnimate")
		$(".minute").addClass("minuteAnimate")
	})


// $(".image").mouseover(function(){
// 	if ($(this).hasClass("clicked") == false) {
// 		$(this).animate({
// 			"background-size": "110%"
// 		}, 500)
// 	} else {

// 	}
// })


$(".image").mouseover(function(){
	if ($(this).hasClass("clicked") == false) {
		$(this).addClass("imageHover")
		$(this).children(".filter").fadeOut(100)
	} else if ($(this).hasClass("clicked") == true) {

	}
})

$(".image").mouseleave(function(){
	if ($(this).hasClass("clicked") == false) {
		$(this).addClass("imageHover")
		$(this).delay(500).children(".filter").fadeIn(100)
	} else if ($(this).hasClass("clicked") == true) {

	}
})



	$(".image").click(function(){
		if ($(this).hasClass("clicked") == false) {
		$(this).children(".filter").fadeOut(100)
		$(this).removeClass("imageHover")
		$(this).addClass("imageExpand")
		$(this).addClass("clicked")
		$("#darkenBkgd").fadeIn(1000)
		$(this).children(".text1").fadeIn(1000).animate({
			opacity: "1",
			top: "-=40px"
		}, 1000)
		$(this).children(".text2").delay(3000).fadeIn(1000).animate({
			opacity: "1",
			top: "-=40px"
		}, 1000)
		$(this).children(".text3").delay(5000).fadeIn(1000).animate({
			opacity: "1",
			top: "-=40px"
		}, 1000)
	} else if ($(this).hasClass("clicked") == true) {
		$(this).children("p").animate({
			opacity: "0",
			top: "+=40px"
		}, 10)
		// $(this).children(".filter").css({"opacity": ".5"})
		$(this).removeClass("imageExpand")
		$(".clicked").children(".filter").fadeIn(100)
		$(this).removeClass("clicked")
		$("#darkenBkgd").fadeOut(1000)
	}
		//$(".b5").children(".text1").fadeIn(1000).addClass("textEnter")
		//$(".b5").children(".text2").delay(2000).fadeIn(1000).addClass("textEnter")
		//$(".b5").children(".text3").delay(4000).fadeIn(1000).addClass("textEnter")
	})

	$("#darkenBkgd").click(function(){
		$(this).fadeOut(1000)
		$(".clicked").children("p").animate({
			opacity: "0",
			top: "+=40px"
		}, 10)
		$(".clicked").children(".filter").fadeIn(100)
		// $(".clicked").children(".filter").css({"opacity": ".5"})
		$(".clicked").removeClass("imageExpand")
		$(".clicked").removeClass("clicked")

	})

	$("#endContainer").mouseover(function(){
		if(endReached == false) {
		$("h4").delay(300).fadeIn(1000)
		$(".end1").delay(2500).fadeIn(1000)
		$(".end2").delay(3500).fadeIn(1000)
		$(".end1").delay(1500).fadeOut(1000)
		$(".end2").delay(1000).animate({top: "-=50px"}, 1000)

		endReached = true;
	} else if(endReached == true) {

	}

	})






	/* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.box').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).delay(500).animate({'opacity':'1'},1000);
                    
            }
            
        }); 
    
    });



	
	// FUNCTIONS
	
	
	// INITIALIZATION
	
	
});