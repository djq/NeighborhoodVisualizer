// Create toggle control function
function toggleDrawControl() {
	if(polygon.activate()){
		drawingLayer.removeAllFeatures();
	} else {
		polygon.deactivate();
	}      
}

// Create set layer from geoJson line
function setGeoJson(geoJsonArray){
	
	geoJsonArray = eval('[' + geoJsonArray + ']');
         
	console.log(geoJsonArray);
	
	var featurecollection = {
          "type": "FeatureCollection", 
          "features": [
            {"geometry": {
                "type": "GeometryCollection", 
                "geometries": geoJsonArray
            }, 
            "type": "Feature", 
            "properties": {}}
          ]
       };
     
	var geojson_format = new OpenLayers.Format.GeoJSON();
	returnLayer.addFeatures(geojson_format.read(featurecollection));
}  

// Create data send function
function sendData(){
	
	// Get vertices from first polygon (index == 0)
	vertices = drawingLayer.features[0].geometry.getVertices();
	
	// Iterate through vertices and create list of strings
	pointlist = [];
	for (var i = 0; i < vertices.length; i++) {			
		
		console.log("Y:%d X:%d",vertices[i].y, vertices[i].x)
		
		test =	new OpenLayers.LonLat(vertices[i].x, vertices[i].y).transform( 
				new OpenLayers.Projection("EPSG:900913"), 
        		new OpenLayers.Projection("EPSG:4326")
        		)
        x = test.lon
        y = test.lat
        console.log('X_input:%d Y_input:%d',x,y)	
        
        pointlist.push(x.toString() + ' ' + y.toString());
        
	}
	test =	new OpenLayers.LonLat(vertices[0].x, vertices[0].y).transform( 
				new OpenLayers.Projection("EPSG:900913"), 
        		new OpenLayers.Projection("EPSG:4326")
        		)
    x = test.lon
    y = test.lat
	
	// Duplicate first vertex at the end
	pointlist.push(x.toString() + ' ' + y.toString());
	
	console.log('pointlist:%s',pointlist.toString());
			
	// Send to php through ajax
	$.ajax({ 
		type: "POST",
		url: "postgis_polygon_v3.php", 
		data:{vertices: pointlist},  
		async: false,
		success: function(arrayData){setGeoJson(arrayData[0]);}, 
		dataType:'json'
	});	
}
