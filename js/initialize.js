// Public variables
var map;
var returnLayer;
var drawLayer;

function init() {

	//////////// OPENLAYERS /////////////
	//Define Projections
	Proj4js.defs["EPSG:27700"]  = "+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +datum=OSGB36 +units=m +no_defs";
	Proj4js.defs["EPSG:4326"]   = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";
	Proj4js.defs["EPSG:900913"] = "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs";

    // Create map
    map = new OpenLayers.Map("basicMap", {controls: [new OpenLayers.Control.Navigation()]});
    
    // Add google layer
    var googleLayer = new OpenLayers.Layer.Google('Google', {type: google.maps.MapTypeId.SATELLITE});
	    
	// Set initial center location
    //map.setCenter(new OpenLayers.LonLat(-0.13, 51.55).transform(new OpenLayers.Projection("EPSG:4326"), map.getProjectionObject()), 13);
	var centerPoint = new OpenLayers.LonLat(-0.13, 51.55)
	map.setCenter(centerPoint, 7);

    
    drawingLayer = new OpenLayers.Layer.Vector("drawingLayer");   								// Add drawing layer
    returnLayer = new OpenLayers.Layer.Vector("returnLayer");									// Add return layer
    polygon = new OpenLayers.Control.DrawFeature(drawingLayer, OpenLayers.Handler.Polygon);	    // add polygon drawing control

	// add layers
	map.addLayers([googleLayer, drawingLayer, returnLayer, polygon]);
	//map.addLayers([googleLayer, drawingLayer, returnLayer, polygon, cities]);
		
	//40 Cities
	//map.zoomToMaxExtent();     
	
	//////////// OTHER /////////////
	// Create map controls	
	mapControls();
	
	//make raphael interface
	makeInterface();
	
	// Hide and show div options
	hideShow();
	
	// Set up charts
	makeCharts();
	
	// Image sequence
	imageSequence();      
	
}

