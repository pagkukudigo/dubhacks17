 function GetMap()
	{
		var map = new Microsoft.Maps.Map('#map', {
			credentials: 'ArH86Tt6a9tC7LMFqNXruTOPXaeWxQFuctvl7O3JKoAAU3KVM5bSd-wu4JN66Cem',
			showMapTypeSelector: false
		});

		Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
	    	var dirManager = new Microsoft.Maps.Directions.DirectionsManager(map);
    		dirManager.setRenderOptions({ itineraryContainer: document.getElementById('printoutPanel') });
    		dirManager.showInputPanel('directionsInputContainer');
		});
	}