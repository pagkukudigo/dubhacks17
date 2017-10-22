var map, dirManager, currLoc, currWaypoint, searchManager, startLoc, endLoc;

function GetMap() {
	map = new Microsoft.Maps.Map("#map", {
		credentials: "ArH86Tt6a9tC7LMFqNXruTOPXaeWxQFuctvl7O3JKoAAU3KVM5bSd-wu4JN66Cem",
		showMapTypeSelector: false // only show road map type
	});

    navigator.geolocation.getCurrentPosition(function (position) {
        currLoc = new Microsoft.Maps.Location(
            position.coords.latitude,
            position.coords.longitude);

        //Add a pushpin at the user's location.
        var pin = new Microsoft.Maps.Pushpin(currLoc, {
        	title: "Current Location"
        });
        map.entities.push(pin);

        //Center the map on the user's location.
        map.setView({ center: currLoc, zoom: 12 });
    });

	Microsoft.Maps.loadModule("Microsoft.Maps.Directions", function () {
    	dirManager = new Microsoft.Maps.Directions.DirectionsManager(map);
		dirManager.setRenderOptions({
			itineraryContainer: document.getElementById("printoutPanel")
			// itineraryContainer: "#directionsItinerary"
		});
		dirManager.showInputPanel("dirPanel");
		dirManager.setRequestOptions({
			routeDraggable: false
		});
		currWaypoint = new Microsoft.Maps.Directions.Waypoint({location: currLoc});
		//dirManager.addWaypoint(new Microsoft.Maps.Directions.Waypoint({location: currLoc}))
		dirManager.addWaypoint(currWaypoint);
	    /*Microsoft.Maps.Events.addHandler(directionsManager, "directionsUpdated", function () {
	    	clearMap();
    	});
		dirManager.calculateDirections();*/
	});

    // Microsoft.Maps.loadModule(["Microsoft.Maps.AutoSuggest", "Microsoft.Maps.Search"], function () {
    //     var fromManager = new Microsoft.Maps.AutosuggestManager({ map: map });
    //     var toManager = new Microsoft.Maps.AutosuggestManager({map: map});
    //     fromManager.attachAutosuggest("#from", "#fromContainer", suggestionSelected);
    //     toManager.attachAutosuggest("#to", "#toContainer", suggestionSelected);
    //     //searchManager = new Microsoft.Maps.Search.SearchManager(map);
    // });
}

function clearMap() {
	map.entities.clear();
	map.layers.clear();
	dirManager.clearDisplay();
}

function GetDirections() {
	clearMap();

	// var start = new Microsoft.Maps.Directions.Waypoint({address: document.getElementById("from").value});
	var start = new Microsoft.Maps.Directions.Waypoint({address: document.getElementById("from").value});
	dirManager.addWaypoint(start);

	var end = new Microsoft.Maps.Directions.Waypoint({address: document.getElementById("to").value});
	//var end = new Microsoft.Maps.Directions.Waypoint({geocode(document.getElementById("to"))});
	dirManager.addWaypoint(end);

	dirManager.calculateDirections();
}

function suggestionSelected(result) {
    //Remove previously selected suggestions from the map.
    //map.entities.clear();
    //Show the suggestion as a pushpin.
    var pin = new Microsoft.Maps.Pushpin(result.location);
    map.entities.push(pin);
}

// function geocode(textBox) {
//     //Remove previously results from the map.
//     clearMap();
//     //Get the users query and geocode it.
//     var query = document.getElementById(textBox).value;
//     var searchRequest = {
//         where: query,
//         callback: function (r) {
//             if (r && r.results && r.results.length > 0) {
//                 var pin, pins = [], locs = [], output = 'Results:<br/>';
//                 //Add a pushpin for each result to the map and create a list to display.
//                 for (var i = 0; i < r.results.length; i++) {
//                     //Create a pushpin for each result.
//                     pin = new Microsoft.Maps.Pushpin(r.results[i].location, {
//                         text: i + ''
//                     });
//                     pins.push(pin);
//                     locs.push(r.results[i].location);
//                     output += i + ') ' + r.results[i].name + '<br/>';
//                 }
//                 //Add the pins to the map
//                 map.entities.push(pins);
//                 //Display list of results
//                 document.getElementById('output').innerHTML = output;
//                 //Determine a bounding box to best view the results.
//                 // var bounds;
//                 // if (r.results.length == 1) {
//                 //     bounds = r.results[0].bestView;
//                 // } else {
//                 //     //Use the locations from the results to calculate a bounding box.
//                 //     bounds = Microsoft.Maps.LocationRect.fromLocations(locs);
//                 // }
//                 // map.setView({ bounds: bounds, padding: 30 });
//             }
//         },
//         errorCallback: function (e) {
//             document.getElementById('output').innerHTML = "No results found.";
//         }
//     };
//     //Make the geocode request.
//     return searchManager.geocode(searchRequest);
// }