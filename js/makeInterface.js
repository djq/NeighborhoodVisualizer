// Set Slider variables
sl    = new Object();
sl.X  = 20;  // slider x-lim
sl.Y  = 230; // slider y-lim
sl.H  = 20;  // slider height
sl.W  = 150; // slider width
sl.B  = 20;  // slider button width
sl.R  = 3;   // slider corner roundness
sl.op = 1;  // opacity
sl.di = 30; // Distance between sliders

function makeInterface() {
	
	// Create Canvas
	var r = Raphael("sidebar", "100%", "100%");
	
	// Make background
	background = r.rect(0, 0, "100%", "100%").attr({fill:"black", stroke:"none", opacity:0.5});

	// Create buttons (define position variables)
	drawX = 100;
	sendX = drawX + 30;
	setX  = sendX + 30;
	layerX = setX + 30;
	animateX = layerX + 30;
	panSouth = animateX + 30;
	hideX = 500;
		
	// Draw Button
	textDraw = r.text(20 + sl.B*1.5, drawX + sl.B*0.5, "draw").attr({font: "14px Fontin-Sans, Arial", fill: "#fff", opacity: 1, "text-anchor": "start"});
	draw = r.rect(20, drawX, sl.B, sl.B, sl.R).attr({fill: "white", stroke: "none", opacity:0.5});
	draw.click(function (event){
		if(draw.attr('opacity') == 0.5){
			draw.attr({opacity: 1});
		}
		else{
			draw.attr({opacity: 0.5});
		}
		toggleDrawControl();
	});
	
	// Send Button
	textSend = r.text(20 + sl.B*1.5, sendX + sl.B*0.5,"send").attr({font: "14px Fontin-Sans, Arial", fill: "#fff", opacity: 1, "text-anchor": "start"});
	send = r.rect(20, sendX, sl.B, sl.B, sl.R).attr({fill: "white", stroke: "none", opacity:0.5});
	send.click(function (event){
		if(send.attr('opacity') == 0.5){
			send.attr({opacity: 1});
		}
		else{
			send.attr({opacity: 0.5});
		}
		sendData();
	});
	
	// Add geoJson Button
	textAddGeoJ = r.text(20 + sl.B*1.5, setX + sl.B*0.5,"return").attr({font: "14px Fontin-Sans, Arial", fill: "#fff", opacity: 1, "text-anchor": "start"});
	addGeoJ = r.rect(20, setX, sl.B, sl.B, sl.R).attr({fill: "white", stroke: "none", opacity:0.5});
	addGeoJ.click(function (event){
		if(addGeoJ.attr('opacity') == 0.5){
			addGeoJ.attr({opacity: 1});
		}
		else{
			addGeoJ.attr({opacity: 0.5});
		}
		setGeoJson();
	});
	
	// Add layer switcher button
	showLayer = r.text(20 + sl.B*1.5, layerX + sl.B*0.5,"Hide/show layer").attr({font: "14px Fontin-Sans, Arial", fill: "#fff", opacity: 1, "text-anchor": "start"});
	showLayer = r.rect(20, layerX, sl.B, sl.B, sl.R).attr({fill: "white", stroke: "none", opacity:0.5});
	showLayer.click(function (event){
		if(showLayer.attr('opacity') == 0.5){
			showLayer.attr({opacity: 1});
			prefabLayers[5].setVisibility(true);
		}
		else{
			showLayer.attr({opacity: 0.5});
			prefabLayers[5].setVisibility(false);
		}
	});
	
	// Add animate switcher button
	animateLayer = r.text(20 + sl.B*1.5, animateX + sl.B*0.5,"Animate Layers").attr({font: "14px Fontin-Sans, Arial", fill: "#fff", opacity: 1, "text-anchor": "start"});
	animateLayer = r.rect(20, animateX, sl.B, sl.B, sl.R).attr({fill: "white", stroke: "none", opacity:0.5});
	animateLayer.click(function (event){
		animateLayer.animate([{opacity: 1}, {opacity: 0.5}], 500);
		var ele = document.getElementById("movieBar");
		ele.style.display = "block"    		
		animateLayers(0);
		showLayer.attr({opacity: 1});
	});
}