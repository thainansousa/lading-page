window.onload = function(){

	var map;

	function initialize(){
		var mapProp = {
			center: new google.maps.LatLng(-10.0918065,-42.2989304),
			scrollWheel: false,
			zoom:5,
			mapTypeId:google.maps.MapTypeId.ROADMAP
		}

		map = new google.maps.Map(document.getElementById("map"), mapProp);
	}
	initialize();
}