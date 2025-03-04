<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "https://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
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
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<link rel="stylesheet" href="./css/global.css"/>
<link rel="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.css"/>
<link rel="stylesheet" href = "https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css"/>
<script rel="javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script rel="javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script rel="javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<script src=" https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
 <script src = "https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
<script src="./js/jquery.cookie.js"></script>
<script src="./js/All.js"></script>
<script src="./js/CommonFunction.js"></script>
<script src="./js/jquery.cookie.js"></script>
<script src="./js/All.js"></script>
<script src="./js/CommonFunction.js"></script>
<meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
<script src='https://api.mapbox.com/mapbox-gl-js/v1.0.0/mapbox-gl.js'></script>
<link href='https://api.mapbox.com/mapbox-gl-js/v1.0.0/mapbox-gl.css' rel='stylesheet' />
  </head>
  <body>
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
}</style>
<jsp:include page="./View/header.jsp" />
 <h2 style="text-align:center;margin:0px;"><img src="./images/Capture_scm_half_logo_1.png" style="width:50px;height:50px;"> Available</h2>
 <div class="container">
  	<div class="row">
  	<div class="col-sm-12 col-md-12 col-lg-12"><a href="Dashboard.jsp"><button class="btn btn-dark float-right" style="padding: 1px 15px;font-size: 12px;font-weight: 600;margin-bottom: 1%;">Back</button></a></div>
  	<div class="col-sm-12 col-md-12 col-lg-12">
  	<div class="row">
  		<div class="col-sm-12 col-lg-5 col-md-5">
  			<div style="width: 100%;height: 30px;font-size: 12px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Customer Name :</span><span class="float-left" style="width:50%;"><input type="text" class="form-control" placeholder="Number of devices" style="height:25px;font-size: 12px; "/></span></div> 
  			<div style="width: 100%;height: 30px;font-size: 12px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Partner :</span><span class="float-left" style="width:50%;"><input type="text" class="form-control" placeholder="Number of devices" style="height:25px;font-size: 12px; "/></span></div> 
  			<div style="width: 100%;height: 30px;font-size: 12px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Department :</span><span class="float-left" style="width:50%;"><input type="text" class="form-control" placeholder="Number of devices" style="height:25px;font-size: 12px; "/></span></div> 

  			<div style="width: 100%;height: 30px;font-size: 12px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Device Location :</span><span class="float-left" style="width:50%;"><select class="form-control" id="Status" name="routes" onchange="javascript:SelectRoute(this.value);" style="height:25px;font-size: 12px;padding-top: 3px;"><option value="">Select Option</option></select></span><span class="ml-1"></div>

  			<div style="width: 100%;height: 30px;font-size: 12px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Destination : </span><span class="float-left" style="width:50%;"><select class="form-control" id="Status" name="routes" onchange="javascript:SelectRoute(this.value);" style="height:25px;font-size: 12px;padding-top: 3px;"><option value="">Select Option</option></select></span><span class="ml-1"></div>

  			<div style="width: 100%;height: 30px;font-size: 12px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Device Status :</span><span class="float-left" style="width:50%;"><select class="form-control" id="Status" name="routes" onchange="javascript:SelectRoute(this.value);" style="height:25px;font-size: 12px;padding-top: 3px; "><option value="">Select Option</option></select></span><span class="ml-1"></div>
  			<div style="width: 100%;height: 30px;font-size: 12px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Goods type :</span><span class="float-left" style="width:50%;"><select class="form-control" id="Status" name="routes" onchange="javascript:SelectRoute(this.value);" style="height:25px;font-size: 12px;padding-top: 3px;"><option value="">Select Option</option></select></span><span class="ml-1"></div>

  			<!-- <div style="width: 100%;height: 30px;font-size: 12px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Shipment Number :</span><span class="float-left" style="width:50%;"><select class="form-control" id="Status" name="routes" onchange="javascript:SelectRoute(this.value);" style="height:25px;font-size: 12px;padding-top: 3px;"><option value="">Select Option</option></select></span></div> --> 

			<div style="width: 100%;height: 30px;font-size: 12px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Delivery Number :</span><span class="float-left" style="width:50%;"><select class="form-control" id="Status" name="routes" onchange="javascript:SelectRoute(this.value);" style="height:25px;font-size: 12px;padding-top: 3px;"><option value="">Select Option</option></select></span></div>

  			<div style="width: 100%;height: 30px;font-size: 12px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Internal Transfer ID :</span><span class="float-left" style="width:50%;"><select class="form-control" id="Status" name="routes" onchange="javascript:SelectRoute(this.value);" style="height:25px;font-size: 12px;padding-top: 3px;"><option value="">Select Option</option></select></span><span class="ml-1"></div>
  		</div>
  		<div class="col-sm-12 col-md-7 col-lg-7"> 
  			<div id='map' style='width: 100%; height: 400px;'></div> 			
  			

<script src="https://unpkg.com/@mapbox/mapbox-sdk/umd/mapbox-sdk.min.js"></script>
<script>
	mapboxgl.accessToken = 'pk.eyJ1Ijoic2F0dmlrdXBhZGh5YXkiLCJhIjoiY2p4ZHEyN2x4MGdyNDNubWYxZnZzaXdkNSJ9.bkoNY-Qxr2G5Vi8MzSzDwg';
	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v8',
		center: [-121.505184, 40.488084],
		zoom: 2
	});

	var framesPerSecond = 15;
	var initialOpacity = 1
	var opacity = initialOpacity;
	var initialRadius = 5;
	var radius = initialRadius;
	var maxRadius = 14;

	map.on('load', function () {

		// Add a source and layer displaying a point which will be animated in a circle.
		map.addSource('point', {
			"type": "geojson",
				"data": {
				"type": "FeatureCollection",
				"features": [
					{
						"type": "Feature",
						"geometry": {
							"type": "Point",
							"coordinates": [-101.415061, 40.506229]
						}
					}, {
						"type": "Feature",
						"geometry": {
							"type": "Point",
							"coordinates": [-121.505184, 40.488084]
						}
					}, {
						"type": "Feature",
						"geometry": {
							"type": "Point",
							"coordinates": [-131.354465, 40.488737]
						}
					}]
			}
		});

		map.addLayer({
			"id": "point",
			"source": "point",
			"type": "circle",
			"paint": {
				"circle-radius": initialRadius,
				"circle-radius-transition": { duration: 0 },
				"circle-opacity-transition": { duration: 0 },
				"circle-color": "#007cbf"
			}
		});

		map.addLayer({
			"id": "point1",
			"source": "point",
			"type": "circle",
			"paint": {
				"circle-radius": initialRadius,
				"circle-color": "#007cbf"
			}
		});


		function animateMarker(timestamp) {
			setTimeout(function () {
				requestAnimationFrame(animateMarker);

				radius += (maxRadius - radius) / framesPerSecond;
				opacity -= (.9 / framesPerSecond);

				map.setPaintProperty('point', 'circle-radius', radius);
				map.setPaintProperty('point', 'circle-opacity', opacity);

				if (opacity <= 0) {
					radius = initialRadius;
					opacity = initialOpacity;
				}

			}, 1000 / framesPerSecond);

		}

		// Start the animation.
		animateMarker(0);
	});
		map.addControl(new mapboxgl.NavigationControl());
</script>
  			</div>
  	</div>
  	</div></div>
  
<div class="col-sm-12 col-md-12 col-lg-12 mt-3 p-0" style="overflow-x:auto;">
<table class="table table-striped table-bordered p-0" id="deviceAvalibletable" style="font-size:11px;overflow-x:auto;">
	<thead>
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
 	<tbody>
 		<tr>
  			<td><input type="checkbox" style="padding:0px;margin:0px;width:14px;"/></th>
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
 		</tr>
 	</tbody>
 </table>
</div>


	
	
</div>
 <script> 
function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap"></script>


</body>
</html>