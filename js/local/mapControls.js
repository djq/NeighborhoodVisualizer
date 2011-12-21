function mapControls() {
	
	var r = Raphael("controls", "100%", "100%");	
	
	// North
	r.text(sl.B/2, sl.B/2,"N").attr({font: "14px Fontin-Sans, Arial", fill: "#fff", opacity: 1, "text-anchor": "center"});
	north = r.rect(0, 0, sl.B, sl.B, sl.R).attr({fill: "white", stroke: "none", opacity:0.5});
	north.click(function (event){
		north.animate([{opacity: 1}, {opacity: 0.5}], 500);
		map.pan(0,-50);
	});
	
	// South
	r.text(sl.B + sl.B/2, sl.B/2,"S").attr({font: "14px Fontin-Sans, Arial", fill: "#fff", opacity: 1, "text-anchor": "center"});
	south = r.rect(sl.B, 0, sl.B, sl.B, sl.R).attr({fill: "white", stroke: "none", opacity:0.5});
	south.click(function (event){
		south.animate([{opacity: 1}, {opacity: 0.5}], 500);
		map.pan(0,50);
	});
	// East
	r.text(2*sl.B + sl.B/2, sl.B/2,"E").attr({font: "14px Fontin-Sans, Arial", fill: "#fff", opacity: 1, "text-anchor": "center"});
	east = r.rect(2*sl.B, 0, sl.B, sl.B, sl.R).attr({fill: "white", stroke: "none", opacity:0.5});
	east.click(function (event){
		east.animate([{opacity: 1}, {opacity: 0.5}], 500);
		map.pan(50,0);
	});
	// West
	r.text(3*sl.B + sl.B/2, sl.B/2,"W").attr({font: "14px Fontin-Sans, Arial", fill: "#fff", opacity: 1, "text-anchor": "center"});
	west = r.rect(3*sl.B, 0, sl.B, sl.B, sl.R).attr({fill: "white", stroke: "none", opacity:0.5});
	west.click(function (event){
		west.animate([{opacity: 1}, {opacity: 0.5}], 500);
		map.pan(-50,0);
	});
	// +
	r.text(4*sl.B + sl.B/2, sl.B/2,"+").attr({font: "14px Fontin-Sans, Arial", fill: "#fff", opacity: 1, "text-anchor": "center"});
	plus = r.rect(4*sl.B, 0, sl.B, sl.B, sl.R).attr({fill: "white", stroke: "none", opacity:0.5});
	plus.click(function (event){
		plus.animate([{opacity: 1}, {opacity: 0.5}], 500);
		map.zoomIn();
	});
	// -
	r.text(5*sl.B + sl.B/2, sl.B/2,"-").attr({font: "14px Fontin-Sans, Arial", fill: "#fff", opacity: 1, "text-anchor": "center"});
	minus = r.rect(5*sl.B, 0, sl.B, sl.B, sl.R).attr({fill: "white", stroke: "none", opacity:0.5});
	minus.click(function (event){
		minus.animate([{opacity: 1}, {opacity: 0.5}], 500);
		map.zoomOut();
	});

}