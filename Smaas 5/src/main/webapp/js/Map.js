
var kkj = localStorage.getItem('zc');

var Filter = [];
var map = "";
var kcr = kkj.split(","); 

	
for(var i in kcr){
		Filter.push(kcr[i]);
	}
	
    var p1 = Filter.slice(0,50);
          
    //console.log("Arraylist:::::"+p1);
	
    L.mapquest.key = 'hOIVOcPqNee5A8KDPlsnfY8AgYvFXd57';

    // Geocode three locations, then call the createMap callback
    //  L.mapquest.geocoding().geocode(['Tirupati'], createMap);
    L.mapquest.geocoding().geocode(p1, createMap); 

    function createMap(error, response) {
        // Initialize the Map
        map = L.mapquest.map('map', {
            layers: L.mapquest.tileLayer('map'),
            center: [0, 0],
            zoom: 12
        });

          // Generate the feature group containing markers from the geocoded locations
          var featureGroup = generateMarkersFeatureGroup(response);

          // Add markers to the map and zoom to the features
          featureGroup.addTo(map);
          map.fitBounds(featureGroup.getBounds());
        }

        function generateMarkersFeatureGroup(response) {
          var group = [];
         
          for (var i = 0; i < response.results.length; i++) {
            var location = response.results[i].locations[0];
            var locationLatLng = location.latLng;
            

            // Create a marker for each location
            var marker = L.marker(locationLatLng, {icon: L.mapquest.icons.marker()})
              .bindPopup(location.adminArea5 + ', ' + location.adminArea3);

            group.push(marker);
          }
          ////console.log("location::::"+location);
          ////console.log("latlong::::"+locationLatLng);
          //console.log("latlong1111::::"+location.adminArea5+"-------"+location.adminArea3);
          return L.featureGroup(group);
        }