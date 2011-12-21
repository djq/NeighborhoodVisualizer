//Define Projections
Proj4js.defs["EPSG:27700"]  = "+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +datum=OSGB36 +units=m +no_defs";
Proj4js.defs["EPSG:4326"]   = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";
Proj4js.defs["EPSG:900913"] = "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs";

		// extents of cities
		var city_extents = [
					[-10, 50, 5, 60],
					[-75, 41, -71, 44],
					[-122.6, 37.6, -122.3, 37.9],
					[10, 10, 20, 20]
		];
					
		// map object
		var map;
						   
		function init(){          
				  
		map = new OpenLayers.Map("basicMap", {controls: [new OpenLayers.Control.Navigation()]});
		
		var googleLayer = new OpenLayers.Layer.Google('Google', {type: google.maps.MapTypeId.SATELLITE});
		
		
		//define style for polygon  
    
    
        var style = new OpenLayers.Style({
			fillColor: "black",			
			strokeWidth: 2,
			fillOpacity: 0.5, 
			strokeColor: "black"
    	});

		var citiesLayer  = new OpenLayers.Layer.Vector( 'Boxes', {
			styleMap: new OpenLayers.StyleMap(style)
		})  

		var proj = new OpenLayers.Projection("EPSG:4326");           
		
		map.addLayer(googleLayer);
		
		for (var i = 0; i < city_extents.length; i++) {
			ext = city_extents[i];
			bounds = OpenLayers.Bounds.fromArray(ext);                    
			bounds.transform(proj, map.getProjectionObject());			
			
			city = new OpenLayers.Feature.Vector(bounds.toGeometry());				
			city.id = i.toString();  
			city.centerPoint = new OpenLayers.LonLat(city_extents[i][0] + ( city_extents[i][2]  - city_extents[i][0] )/2, city_extents[i][1] + ( city_extents[i][3]  - city_extents[i][1] )/2);                 				
			citiesLayer.addFeatures(city);
		}
		
		function selected (evt) {
			console.log(evt.feature.id + " selected on " + this.name);
		}               
		
		/*
		// when polygon is clicked, move map to that area	
		citiesLayer.events.register("click", city, function() {
			console.log('City: ' + this.id);
			console.log(this.centerPoint);					
			console.log(this.centerPoint.transform(proj, map.getProjectionObject()));
			map.setCenter(this.centerPoint.transform(proj, map.getProjectionObject()), 5);
			
			//////////// OTHER /////////////						
			//make raphael interface
			makeInterface();
			
			// Hide and show div options
			hideShow();
			
			// Set up charts
			makeCharts();
			
			// Image sequence
			//imageSequence(); 
			
			
		});
		*/	
		
		map.addLayer(citiesLayer);                    
		
		var centerPoint = new OpenLayers.LonLat(0, 51);
		centerPoint.transform(proj, map.getProjectionObject());
		map.setCenter(centerPoint, 2);  
										
		// Create map controls	
		mapControls();
		  
		  
		}