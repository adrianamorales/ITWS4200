// JavaScript Document

// Use the HTML5 Geolocation API to retrieve the current location from the browser
// Pass the location to the API 
// Populate the weather data in the browser
// Use CSS Transitions/Animations to enhance the 

// API Key 24423555a7b79662f7290afa3bcd4d7c

// GLOBAL VARIABLES
var myLatitude;
var myLongitude;
var geocoder;
var outputGeo = document.getElementById("weatherBody");

$( document ).ready(function() {
	getLocation();
	
});
// gets the coordinates
function getLocation() {
	
	//check if browser supports geolocation
	if (navigator.geolocation)
	{
		navigator.geolocation.watchPosition(showPosition);
	}
	
	//if not supported output error
	else {
		outputGeo.innerHTML = "Geolocation failed";	
	}
	
	//output geolocation
	function showPosition(position)
	{
		myLatitude = position.coords.latitude;
		myLongitude = position.coords.longitude; 
		//get location
		getCityName(myLatitude, myLongitude);
		getWeather();
		//alert("Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude);
	}
}

// Uses Forecast.io API to get weather data 
function getWeather() {
	

	var apiKey = '24423555a7b79662f7290afa3bcd4d7c';
	var url = 'https://api.forecast.io/forecast/';
	var weatherData;
	// refer to global latitude and longitude variables
	// call api and get data
	$.getJSON(url + apiKey + "/" + myLatitude + "," + myLongitude + "?callback=?", function(weatherData, status) {
		//console.log(data);
		//alert(status);
		var temper = weatherData.currently.temperature;
		var windS = weatherData.currently.windSpeed;
		var humid = weatherData.currently.humidity;
		var descrip = weatherData.currently.summary;
		var weatherIcon = weatherData.currently.icon
		//$('#weatherBody').hide();	
		$('#weatherBody').html("<ul><li><h5 class='subheader'><b>current temperature</b><hr/> " + temper + "</h5></li>" +
														"<li><h5 class='subheader'><b>windspeed</b><hr/> " + windS + "</h5></li>" +
														"<li><h5 class='subheader'><b>humdity:</b><hr/> " + humid  + "</h5></li>" + 
														"<li><h5 class='subheader'><b>summary</b><hr/> " + descrip + "</h5></li>" +
													 "</ul>").hide().fadeIn(700);
													 
		//var skycons = new Skycons({"color": "pink"});
		//skycons.add(document.getElementById("icon1"), weatherData.currently.icon);
	
	});
	
}

// Uses Google Maps API to get Address
function getCityName(myLatitude, myLongitude) {

	// Using Google Map API to get name of citiy 
	// Refer to https://developers.google.com/maps/ for more
	
	geocoder = new google.maps.Geocoder();
	
	var latlng = new google.maps.LatLng(myLatitude, myLongitude);
	
	geocoder.geocode({'latLng': latlng}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
		
			if (results[1]) 
			//<h4>Header</h4><hr/>
				{ $('#locationDiv').html("<h4>" + results[0].formatted_address + "</h2>").hide().fadeIn(200) ; }
				//alert(results[0].formatted_address); } 
			
			else 
			{ alert("No results found"); }
				
		} 
		
		else 
			{ alert("Geocoder failed due to: " + status);}
	});
	
}

	
	
	
