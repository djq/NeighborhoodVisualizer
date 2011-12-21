var prefabLayers;

function imageSequence(){
		
	// Add fixed layers
	prefabLayers = [ 
		new OpenLayers.Layer.GML("KML", "kml/camden1.kml", {format: OpenLayers.Format.KML}),
		new OpenLayers.Layer.GML("KML", "kml/camden2.kml", {format: OpenLayers.Format.KML}),
		new OpenLayers.Layer.GML("KML", "kml/camden3.kml", {format: OpenLayers.Format.KML}),
		new OpenLayers.Layer.GML("KML", "kml/camden4.kml", {format: OpenLayers.Format.KML}),
		new OpenLayers.Layer.GML("KML", "kml/camden5.kml", {format: OpenLayers.Format.KML}),
		new OpenLayers.Layer.GML("KML", "kml/camdenAll.kml", {format: OpenLayers.Format.KML})
		]
		
	prefabLayers[0].setVisibility(false);
	prefabLayers[1].setVisibility(false);
	prefabLayers[2].setVisibility(false);
	prefabLayers[3].setVisibility(false);
	prefabLayers[4].setVisibility(false);
	prefabLayers[5].setVisibility(false);
	
	map.addLayers(prefabLayers);

	// Create Canvas
	var r = Raphael("movieBar", "100%", "100%");
	
	// Make background
	background = r.rect(0, 0, "100%", "100%", 3).attr({fill:"black", stroke:"none", opacity:0.5});
	
	movie = r.rect(0, 0, 20, "100%", 3).attr({fill:"white", stroke:"none", opacity:0.5});
	
	
	// // Define image layer
    // var options = {isBaseLayer:false};
    // var graphic = new OpenLayers.Layer.Image(
        // 'CityLights',
        // 'http://earthtrends.wri.org/images/maps/4_m_citylights_lg.gif',
        // new OpenLayers.Bounds(-18.0, -8.8759, 18.0, 8.8759),
        // new OpenLayers.Size(58.0, 28.8),
        // {isBaseLayer:true}
    // );
	//             
	// map.addLayer(graphic);
	// graphic.setMap(map);
}

function animateLayers(nr){
	
	if(nr == prefabLayers.length - 1){
		setTimeout(function() {
			var ele = document.getElementById("movieBar");
			ele.style.display = "none";
			}, 2000);    		
		return;
	}
	if(nr == 0){
		prefabLayers[nr].setVisibility(true);
	}
	movie.animate({x:(50*nr + 50)}, 2000, function(){
		prefabLayers[nr + 1].setVisibility(true);
		prefabLayers[nr].setVisibility(false);
		animateLayers(nr + 1);
	});
}
