function hideShow(){

	// Set up functionality of div animation
	animatedcollapse.addDiv('sidebar', 'fade=0, width=230px');
	//animatedcollapse.addDiv('charts', 'fade=0, width=230px');
	animatedcollapse.init();

	// Collapse div
	var r = Raphael("hideSidebar");	
	
	// Create buttons
	hideSidebar = r.rect(0, 0, "100%", "100%", sl.R).attr({fill: "white", stroke: "none", opacity:0.5});
	hideSidebar.click(function (event){
		
		animatedcollapse.toggle("sidebar");
		
		if(hideSidebar.attr('opacity') == 0.5){
			hideSidebar.attr({opacity: 1});
		}
		else{
			hideSidebar.attr({opacity: 0.5});
		}
	});
	
	/*
	// Collapse div
	r = Raphael("hideCharts");	
	
	// Create buttons
	hideCharts = r.rect(0, 0, 20, 20, sl.R).attr({fill: "white", stroke: "none", opacity:0.5});
	hideCharts.click(function (event){
		animatedcollapse.toggle("charts");
		
		if(hideCharts.attr('opacity') == 0.5){
			hideCharts.attr({opacity: 1});
		}
		else{
			hideCharts.attr({opacity: 0.5});
		}
	});
	*/
}
