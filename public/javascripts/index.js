/** 
 * ===================================================================
 * Main js
 *
 * ------------------------------------------------------------------- 
 */ 

(function($) {

	"use strict";


	/* ----------
	Loading Page
	----------*/
	var counter = 0;
	var c = 0;
    var perfData = window.performance.timing // The PerformanceTiming interface
    var estimatedTime = -(perfData.loadEventEnd - perfData.navigationStart) // Calculated Estimated Time of Page Load which returns negative value.
	var time = parseInt((estimatedTime/1000)%60)*100; //Converting EstimatedTime from miliseconds to seconds.)
	var i = setInterval(function(){
		$(".loading-page .counter p").html(counter + "%");
		$(".loading-page .counter hr").css("visibility", "visible");
        $(".loading-page .counter hr").css("width", counter+ "%");
  
      counter++;
      if(counter > 100) {
		  counter=0;
		  clearInterval(i);
		  $('.loading-page').fadeOut("slow","linear",()=>{
			$("header").css("visibility", "visible").hide().fadeIn(3000);;
			$("#home").css("display","inline-block").hide().fadeIn(3000);
			$('.home-particles').particleground({
				dotColor: '#fff',
				lineColor: '#555555',
				particleRadius: 6,
				curveLines: true,
				density: 10000,
				proximity: 110
			 }); 
		  });
		
		 
      }
	}, estimatedTime/100);
	

	/* --------------------------------------------------- */
	/*  Particle JS
	------------------------------------------------------ */
	
	
})(jQuery);