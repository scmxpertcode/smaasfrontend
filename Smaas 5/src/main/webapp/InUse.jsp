<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "https://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>SCMXpert/InUse Devices</title>

<style>
btn btn-light dropdown-toggle{
 background:brown;
}
.header-menu{color:#fff;float:left;margin-top:1.9%;margin-left:1%;}
.header-menu a{color:#fff;font-weight:bold;}
.header-menu:hover{background:#fff;border-radius:5px 5px 0px 0px;}
.header-menu:hover a{color:#274a6f;}
.site-title{color: #ffffff;text-shadow: 0 4px 0 rgba(100,100,100,1), 0 8px 3px rgba(0,0,0,0.7);font-weight: 600;font-size: 38px;padding: 1%;font-weight: bold;}
.site-title a{text-decoration:none;color:#ffffff;}
.site-title:hover a{text-decoration:none;color:#ffffff;}
.hide_show_icon,.show_hide_icon{font-weight: bold;cursor:pointer;text-align:center;float:right;margin-top:1%;}
.hide_show_icon, .show_remaing{display:none;}
.showviewdata{display:none;width:80%;margin:2% 10%;background:#fff;border-radius:5px;z-index:2;position:absolute;height:90%;top:10px;bottom:10px;}
#backgroundBlur{background: #000000;opacity: .7;display: none;position: fixed;top: 0;left: 0;width: 100%;height: 100%;z-index: 1;}
.view_body_boder{width:95%;height:80%;border:1px solid #000;margin:auto;box-shadow:0px 0px 5px #000;}
.view_body_header{width:100%;height:30px;padding-top:1%;padding-right:3%;}
.nodes{width:55px;font-size:11px;font-weight:bold;border:1px solid #000;float:left;text-align:center;margin:1px;float:right;border-radius:3px 3px 0px 0px;}
.AddEventBlock{width:30%;height:200px;background:#fff;border-radius:5px;top:17rem;position:fixed;z-index:2;margin:0% 35%;display:none; background-color: grey;}

.goodscontrol{margin-left: 550px; background-color: grey; margin-right: 800px;}
.container1{margin-left: 508px; margin-right: 665px; }
 td {
  border-collapse: collapse;
}
 input{width: 300px;}
}
</style>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='expires' content='0'>
<meta http-equiv='pragma' content='no-cache'>
<jsp:include page="./View/jsfiles.jsp" />
<script src="./js/Devices.js"></script>
<link rel="stylesheet" href="./css/slimselect.min.css"/>
  </head>
  <body oncopy="return false" onpaste="return false">
  <style>.hide_show_icon,.show_hide_icon{font-weight: bold;cursor:pointer;text-align:center;float:right;margin-top:1%;}
.hide_show_icon, .show_remaing{display:none;}
.showviewdata{display:none;width:80%;margin:2% 10%;background:#fff;border-radius:5px;z-index:2;position:absolute;height:90%;top:10px;bottom:10px;}
#backgroundBlur{background: #000000;opacity: .7;display: none;position: fixed;top: 0;left: 0;width: 100%;height: 100%;z-index: 1;}
.view_body_boder{width:95%;height:80%;border:1px solid #000;margin:auto;box-shadow:0px 0px 5px #000;}
.view_body_header{width:100%;height:30px;padding-top:1%;padding-right:3%;}
.nodes{width:55px;font-size:11px;font-weight:bold;border:1px solid #000;float:left;text-align:center;margin:1px;float:right;border-radius:3px 3px 0px 0px;}
.AddEventBlock{width:30%;height:200px;background:#fff;border-radius:5px;top:17rem;position:fixed;z-index:2;margin:0% 35%;display:none; background-color: #ffffff;}

.goodscontrol{margin-left: 550px; background-color: grey; margin-right: 800px;}
.container1{margin-left: 508px; margin-right: 665px; }
 td {
  border-collapse: collapse;
}
 input{width: 300px;}
}
btn btn-light dropdown-toggle{
 background:brown;
}</style>
<jsp:include page="./View/header.jsp" />
<script src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"></script>
    <link type="text/css" rel="stylesheet" href="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css"/>

    <script type="text/javascript">
      window.onload = function() {
        L.mapquest.key = 'e8DYG9q9Zamy3iXMvD2iuo3mI93EGRHF';

        // Geocode three locations, then call the createMap callback
        L.mapquest.geocoding().geocode(['Portland, OR', 'Flagstaff, AZ', 'Denver, CO'], createMap);

        function createMap(error, response) {
          // Initialize the Map
          var map = L.mapquest.map('map', {
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
          return L.featureGroup(group);
        }
      }
    </script>
 <h2 style="text-align:center;margin:0px;"><img src="./images/Capture_scm_half_logo_1.png" style="width:50px;height:50px;"> In Use Devices</h2>
 <div class="container">
  	<div class="row">
  	<div class="col-sm-12 col-md-12 col-lg-12" style="padding-right:17%;height: 30px;"><button class="bg-color btn-head float-right" id="backLink"><i class="fa fa-arrow-left" style="font-size:18px"></i></button></div>
  	<div class="col-sm-12 col-md-12 col-lg-12">
  	<div class="row">
  		<div class="col-sm-12 col-lg-5 col-md-5">
  			<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Customer Name :</span><span class="float-left" style="width:50%;"><input type="text" class="form-control" placeholder="Customer Name" style="height:25px;font-size: 12px;font-weight:bold;" id="cust_name"/></span></div> 
  			<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Partner Name :</span><span class="float-left" style="width:50%;"><input type="text" class="form-control" placeholder="Bp Name" style="height:25px;font-size: 12px;font-weight:bold;; " id="bp_name"/></span></div> 
  			<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Department :</span><span class="float-left" style="width:50%;"><input type="text" class="form-control" placeholder="Number of devices" style="height:25px;font-size: 12px; "/></span></div> 

  			<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Ship From :</span><span class="float-left" style="width:50%;"><select class="form-control" id="route_name_from_InUse" name="routes" onchange="javascript:SelectRoute(this.value);" style="height:25px;font-size: 12px;padding-top: 3px;"><option value="">Select Option</option></select></span><span class="ml-1"></div>

  			<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Ship To : </span><span class="float-left" style="width:50%;"><select class="form-control" id="route_name_to_InUse" name="routes" onchange="javascript:SelectRoute(this.value);" style="height:25px;font-size: 12px;padding-top: 3px;"><option value="">Select Option</option></select></span><span class="ml-1"></div>

  			<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Goods Type :</span><span class="float-left" style="width:50%;"><select class="form-control" id="goodType" name="routes" onchange="javascript:SelectRoute(this.value);" style="height:25px;font-size: 12px;padding-top: 3px; "><option value="">Select Option</option></select></span><span class="ml-1"></div>
  			<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Device ID :</span><span class="float-left" style="width:50%;"><select class="form-control" id="deviceId" name="routes" onchange="javascript:SelectRoute(this.value);" style="height:25px;font-size: 12px;padding-top: 3px;"><option value="">Select Option</option></select></span><span class="ml-1"></div>

  			<!-- <div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Shipment Number :</span><span class="float-left" style="width:50%;"><input type="text" class="form-control" placeholder="Number of devices" style="height:25px;font-size: 12px; "/></span></div> --> 
			<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Delivery Number :</span><span class="float-left" style="width:50%;"><input type="text" class="form-control" placeholder="Number of devices" style="height:25px;font-size: 12px; "/></span></div>

  			<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Status :</span><span class="float-left" style="width:50%;"><select class="form-control" id="Status" name="routes" onchange="javascript:SelectRoute(this.value);" style="height:25px;font-size: 12px;padding-top: 3px;"><option value="">Select Option</option></select></span><span class="ml-1"></div>
  		</div>
  		<div class="col-sm-12 col-md-7 col-lg-7">
  			<!-- <div id="googleMap" style="width:100%;height:300px;"></div>	 -->
  			<div id="map" style="width:100%;height:280px;z-index:1;"></div>
  		</div>
  	</div>
  	</div></div>

<div class="col-sm-12 col-md-12 col-lg-12 mt-3 p-0" style="overflow-x:auto;height:300px;margin-bottom:15px;">
<table class="table table-striped table-bordered p-0" style="font-size:11px;overflow-x:auto;" id="deviceInUsetable">
	<thead class="bg-color tableHeadershown" style="color:#fff;">
  		<tr>
			<th>Device ID</th>
			<th>Customer</th>
			<th>Business Partner</th>
			<th>Shipment Number</th>
			<th>Ship From</th>
			<th>Ship To</th>
			<th>Goods Type</th>
			<th>ETA</th>
			<th>Status</th>
			<th>Location</th>
			<th>Battery %</th>
 		</tr>
 	</thead>
 	<tbody id="tabledata"></tbody>
 </table>
</div>


	
	
</div>
<!--  <script>
function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap"></script>
 -->
<!--  <script type="text/javascript">
new SlimSelect({
	  select: '#route_name_from_InUse'
	})
new SlimSelect({
	  select: '#route_name_to_InUse'
	})
new SlimSelect({
	  select: '#goodType'
	})
new SlimSelect({
	  select: '#deviceId'
	})
new SlimSelect({
	  select: '#Status'
	})	
</script> -->
</body>
</html>