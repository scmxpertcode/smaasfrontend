<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "https://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='expires' content='0'>
<meta http-equiv='pragma' content='no-cache'>
<title>SCMXpert/Available Devices Dev</title>
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
<jsp:include page="./View/jsfiles.jsp" />
<script src="./js/Devices.js"></script>
<script src="./js/jquery.tabletojson.js"></script>
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
#deviceAvalibletable>tbody>tr>td{font-weight:500;}
.goodscontrol{margin-left: 550px; background-color: grey; margin-right: 800px;}
.container1{margin-left: 508px; margin-right: 665px; }
 td {
  border-collapse: collapse;
  font-weight:500;
}
 input{width: 300px;}
}
btn btn-light dropdown-toggle{
 background:brown;
}
#deviceAvalibletable>thead>tr>th{padding:4px;text-align:center;position: sticky;top: 0;background: #965664;}
#deviceAvalibletable>tbody>tr>td{padding:4px;text-align:center;}
</style>
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
<jsp:include page="./View/header.jsp" />
 <h2 style="text-align:center;margin:0px;"><img src="./images/Capture_scm_half_logo_1.png" style="width:50px;height:50px;"> Available Devices</h2>
 <div class="col-sm-12 col-md-12 col-lg-12" style="padding-right:17%;height: 30px;"><button class="bg-color btn-head float-right" id="backLink"><i class="fa fa-arrow-left" style="font-size:18px"></i></button></div>
 <div class="container">
  	<div class="row">
  	
  	<div class="col-sm-12 col-md-12 col-lg-12">
  	<div class="row">
  		<div class="col-sm-12 col-lg-5 col-md-5"  style="border: 1px solid #000;padding: 1%;border-radius: 3px">
  			<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Customer Name :</span><span class="float-left" style="width:50%;"><input type="text" class="form-control" placeholder="Number of devices" style="height:25px;font-size: 12px; " id="cust_name"/></span></div> 
  			<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Partner :</span><span class="float-left" style="width:50%;"><input type="text" class="form-control" placeholder="Number of devices" style="height:25px;font-size: 12px; " id="bp_name"/></span></div> 
  			<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Department :</span><span class="float-left" style="width:50%;"><input type="text" class="form-control" placeholder="Number of devices" style="height:25px;font-size: 12px; "/></span></div> 

  			<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Device Location :</span><span class="float-left" style="width:50%;"><select class="form-control select" id="location" name="routes" style="height:25px;font-size: 12px;padding-top: 3px;" onchange="javascript:filtertabledata(this.value);"><option value="">Select Option</option></select></span><span class="ml-1"></div>

  			<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Destination : </span><span class="float-left" style="width:50%;"><select class="form-control select" id="destination" name="routes" style="height:25px;font-size: 12px;padding-top: 3px;" onchange="javascript:filtertabledata(this.value);"><option value="">Select Option</option></select></span><span class="ml-1"></div>

  			<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Device Status :</span><span class="float-left" style="width:50%;"><select class="form-control select" id="Status" name="" style="height:25px;font-size: 12px;padding-top: 3px; " onchange="javascript:filtertabledata(this.value);"><option value="">Select Option</option></select></span><span class="ml-1"></div>
  			<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Goods type :</span><span class="float-left" style="width:50%;"><select class="form-control select" id="goodType" name="" style="height:25px;font-size: 12px;padding-top: 3px;" onchange="javascript:filtertabledata(this.value);"><option value="">Select Option</option></select></span><span class="ml-1"></div>

  			<!-- <div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Shipment Number :</span><span class="float-left" style="width:50%;"><select class="form-control select" id="ShipNumber" name="" style="height:25px;font-size: 12px;padding-top: 3px;" onchange="javascript:filtertabledata(this.value);"><option value="">Select Option</option></select></span></div> --> 
  			<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Delivery Number :</span><span class="float-left" style="width:50%;"><select class="form-control select" id="ShipNumber" name="" style="height:25px;font-size: 12px;padding-top: 3px;" onchange="javascript:filtertabledata(this.value);"><option value="">Select Option</option></select></span></div>

  			<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Internal Transfer ID :</span><span class="float-left" style="width:50%;"><select class="form-control select" id="transfId" name="" style="height:25px;font-size: 12px;padding-top: 3px;" onchange="javascript:filtertabledata(this.value);"><option value="">Select Option</option></select></span><span class="ml-1"></div>
  		</div>
  		<div class="col-sm-12 col-md-7 col-lg-7">
  			<div id="map" style="width:100%;height:390px;z-index:1;"></div>
  		</div>
  	</div>
  	</div></div>
<div id="error"></div>
<div class="col-sm-12 col-md-12 col-lg-12 mt-3 p-0" style="overflow-x:auto;height:300px;">
<table class="table table-striped table-bordered p-0" id="deviceAvalibletable" style="font-size:11px;overflow-x:auto;">
	<thead class="bg-color tableHeadershown" style="color:#fff;">
  		<tr>
  			<th></th>
			<th>Device ID</th>
			<th>Status</th>
			<th>Device Location</th>
			<th>Customer</th>
			<th>Business Partner</th>
			<th>Goods Type</th>
			<th>Destination</th>
			<th>Internal Transfer ID</th>
			<th>Tracking Number</th>
			<th>Battery %</th>
 		</tr>
 	</thead>
 	<tbody id="tabledata">
 <!-- 		<tr>
  			<td><input type="checkbox" style="padding:0px;margin:0px;width:14px;"/></td>
			<td>Device ID</td>
			<td>Status</td>
			<td>Device Location</td>
			<td>Customer</td>
			<td>Business Partner</td>
			<td>Goods Type</td>
			<td>Destination</td>
			<td>Internal Transfer ID</td>
			<td>Tracking Number</td>
			<td>Battery %</td>
 		</tr> -->
 	</tbody>
 </table>

</div>


	
	<div class="col-sm-12 col-md-12 col-lg-12 text-center m-2">
	<div class="w-100 p-3"></div>
	<div>
			<!-- <button class="btn btn-color m-1">Select Draft</button> -->
	<!-- 		<button class="btn btn-color m-1">Save as Draft</button>
			<button class="btn btn-color m-1">Add Tag Info</button> -->
		
	
			<button class="bg-color margin-rl1 btn-head" id="createDevice" onclick="javascript:return createDevice();">Edit / Create Transfer Device</button>
			<button class="bg-color margin-rl1 btn-head" id="deviceReceipt" onclick="javascript:return deviceRecipt();">Device Transfer Receipt</button>
			
		</div>
		<!-- <br> -->
		<!-- <div class="alert alert-success" id="successalert"><strong>Successfully!</strong> Event Update <a href="Dashboard.jsp" class="alert-link">Move to Dashboard</a>.</div> -->
		
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
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap"></script> -->
<div id="tabileshow"></div>

<!-- <script type="text/javascript">
new SlimSelect({
	  select: '#location'
	})
new SlimSelect({
	  select: '#destination'
	})
new SlimSelect({
	  select: '#Status'
	})
new SlimSelect({
	  select: '#goodType'
	})
new SlimSelect({
	  select: '#ShipNumber'
	})
new SlimSelect({
	  select: '#transfId'
	})
</script> -->
</body>
</html>