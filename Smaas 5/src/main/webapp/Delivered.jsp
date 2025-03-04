<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>SCMXpert Dashboard</title>
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='expires' content='0'>
<meta http-equiv='pragma' content='no-cache'>
   <jsp:include page="./View/jsfiles.jsp" />
<style>
btn btn-light dropdown-toggle{
 background:brown;
}
</style>
</head>
<body oncopy="return false" onpaste="return false">



<!--   <link href = "https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css" rel = "stylesheet"/> -->

     <!--  <script src = "https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script> -->
          <!-- Javascript -->
      <script>
         $(function() {
            $( "#datepicker-13" ).datepicker();

         });
      </script>
<header>
<div class="float-left" style="width:73%;">
<nav class="navbar navbar-expand-lg navbar-light text-light">
  <a class="navbar-brand" href="#" style=""><img src="./images/Capture_scm_half_logo_1.png" style="width:90%;margin-top:-6px;"/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse text-light w-50" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item m-1">
        <a class="p-2 pr-5 pl-5 active" href="#">Shipments</a>
      </li>
      <li class="nav-item m-1">
        <a class="p-2 pr-5 pl-5" href="#">Devices</a>
      </li>
      <li class="nav-item m-1">
        <a class="p-2 pr-5 pl-5" href="#">Alerts</a>
      </li>
      <li class="nav-item m-1">
        <a class="p-2 pr-5 pl-5" href="#">Reports</a>
      </li>
      <li class="nav-item m-1">
        <a class="p-2 pr-5 pl-5" href="#">Setup</a>
      </li>
    </ul>
    
  </div>
</nav>
</div>
<div class="w-25 float-left"> 
<a class="navbar-brand float-left" href="#" style="text-align: center;margin-right:0px;padding-top: 15px;margin-left: -60px;">
<img src="./images/Capture_scm_half_logo_2.png" style="width: 95%;margin-top: -6px;height: 55px;"/>
</a>
 <div class="dropdown float-left mt-3" style="margin-left:25%;">
    <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown"><img src="./images/user1.png" style="width:25px;height:25px;"/> User Proifle</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Link 1</a>
      <a class="dropdown-item" href="#">Link 2</a>
      <a class="dropdown-item" href="#">Link 3</a>
    </div>
  </div>


</div>
 
</header>
<div style="clear:both;"></div>

<div class="row w-100 m-0">
	<div class="col-md-5 p-0 pl-2 float-left">
	<div class="w-100 p-1"></div>
	<div style="min-height:200px;">
	<div style="border-bottom:2px solid #000;padding-bottom:1px;"><a href="./Dashboard.jsp"><span class="btn btn-outline-info" style="border:0px solid;">Live (10*)</span></a><a href="./Delivered.jsp"><span class="btn btn-primary ml-1" id="delivered">Delivered (10*)</span></a><span class="btn btn-outline-info float-right">Create Shipment</span></div>
	
	
	
	<div class="w-25 float-left p-1"> 
		<label class="cols-label">From :- </label>
		<input type="text" class="form-control" placeholder="Enter Your Location" style="font-size:12px;"/>
	</div>
	<div class="w-25 float-left p-1"> 
		<label class="cols-label">To:- </label>
		<input type="text" class="form-control" placeholder="Enter Your Location" style="font-size:12px;"/>
	</div>
	<div class="w-25 float-left p-1"> 
		<label class="cols-label">Goods :- </label>
		<select style="font-size:12px;width:100%;height:30px;">
			<option style="font-size:12px;">Select Any Goods</option>
			<option style="font-size:12px;">Goods One</option>
			<option style="font-size:12px;">Goods Two</option>
			<option style="font-size:12px;">Goods Three</option>
		</select>
	</div>
	<div class="w-25 float-left p-1"> 
		<label class="cols-label">Ship Date :- </label>
		<input type="text" class="form-control" id="datepicker-13" placeholder="Select Date" style="font-size:12px;"/>
	</div>
	<div class="w-25 float-left p-1"> 
		<label class="cols-label">Delivery Number :- </label>
		<input type="text" class="form-control" placeholder="Enter Your Location" style="font-size:12px;"/>
	</div>
	<div class="w-25 float-left p-1"> 
		<label class="cols-label">Reference :- </label>
		<input type="text" class="form-control" placeholder="Enter Your Location" style="font-size:12px;"/>
	</div>
	<div class="w-25 float-left p-1"> 
		<label class="cols-label">Device :- </label>
		<select style="font-size:12px;width:100%;height:30px;">
			<option style="font-size:12px;">Select Any Device</option>
			<option style="font-size:12px;">Device One</option>
			<option style="font-size:12px;">Device Two</option>
			<option style="font-size:12px;">Device Three</option>
		</select>
	</div>
	<div class="w-25 float-left p-1"> 
		<label class="cols-label">Dept / Type :- </label>
		<select style="font-size:12px;width:100%;height:30px;">
			<option style="font-size:12px;">Select Any Dept/Type</option>
			<option style="font-size:12px;">Dept/Type One</option>
			<option style="font-size:12px;">Dept/Type Two</option>
			<option style="font-size:12px;">Dept/Type Three</option>
		</select>
	</div>
	</div>
	<div class="delivered">
		<div class="w-100 p-1 m-1" style="border:1px solid black;border-radius:3px;height:60px;">
		<div class="col-md-4 float-left">
			<h6 class="m-0">0-15 TCTest</h6>
			<p style="font-size:10px;margin:0px;font-weight:600;">From :- Merck West Point,PA</p>
			<p style="font-size:10px;margin:0px;font-weight:600;">To :- MD, Logistics,IN</p>
		</div>
		<div class="col-md-7 float-left">
			<div class="col-md-6 float-left p-0">
				<p style="font-size:10px;margin:0px;font-weight:600;margin-top:0px;text-align:left;margin-left:10px;margin-right:30px;">Dec 5,2018 1:01PM</p>
			</div>
			
			<div class="col-md-6 float-left p-0">
				<p style="font-size:10px;margin:0px;font-weight:600;margin-top:0px;text-align: center;">Dec 5,2018 1:01PM</p>
			</div>
			<div class="clear:both;"></div>
		
			
		</div>
		<div class="col-md-1 float-left text-center">
			<img src="./images/success.jpg" style="width:25px;height:18px;margin-top:20px;">
		</div>
		<div style="clear:both"></div>
		<div class="text-center m-auto" style="width:60%;height: 10px;position: relative;bottom: 25px;">
		<div class="p-1" style="width: 12px;border-radius: 15px;background: #268fff;height: 12px; position: relative;left: 100px;bottom: 5.5px;z-index: 1;"></div>
			 <div class="progress margin-auto" style="margin-left: 100px;margin-right: 10px;position: relative;bottom: 15px;height: 0.5rem;">
    		<div class="progress-bar progress-bar-striped progress-bar-animated" style="width:100%;background-size: 0.5rem 0.8rem;background-color:#43b54380;background-image: linear-gradient(45deg,rgba(255, 255, 255, 0.82) 25%,#000000c7 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);"></div>
  		</div>
  		<div class="p-1" style="width: 12px;border-radius: 15px;background: #268fff;height: 12px;position: relative;left: 310px;bottom: 25.5px;z-index: 1;"></div>
  		<div style="font-size: 12px;font-weight: 600;height: 0px;position: relative;bottom: 25px;width: 100%;text-align: center;text-indent: 70px;">Status: SuccessFully Delivered</div>
		</div>
		
		
		</div>
		<div class="w-100 p-1 m-1" style="border:1px solid black;border-radius:3px;height:60px;">
		<div class="col-md-4 float-left">
			<h6 class="m-0">0-15 TCTest</h6>
			<p style="font-size:10px;margin:0px;font-weight:600;">From :- Merck West Point,PA</p>
			<p style="font-size:10px;margin:0px;font-weight:600;">To :- MD, Logistics,IN</p>
		</div>
		<div class="col-md-7 float-left">
			<div class="col-md-6 float-left p-0">
				<p style="font-size:10px;margin:0px;font-weight:600;margin-top:0px;text-align:left;margin-left:10px;margin-right:30px;">Dec 5,2018 1:01PM</p>
			</div>
			
			<div class="col-md-6 float-left p-0">
				<p style="font-size:10px;margin:0px;font-weight:600;margin-top:0px;text-align: center;">Dec 5,2018 1:01PM</p>
			</div>
			<div class="clear:both;"></div>
		
			
		</div>
		<div class="col-md-1 float-left text-center">
			<img src="./images/success.jpg" style="width:25px;height:18px;margin-top:20px;">
		</div>
		<div style="clear:both"></div>
		<div class="text-center m-auto" style="width:60%;height: 10px;position: relative;bottom: 25px;">
		<div class="p-1" style="width: 12px;border-radius: 15px;background: #268fff;height: 12px; position: relative;left: 100px;bottom: 5.5px;z-index: 1;"></div>
			 <div class="progress margin-auto" style="margin-left: 100px;margin-right: 10px;position: relative;bottom: 15px;height: 0.5rem;">
    		<div class="progress-bar progress-bar-striped progress-bar-animated" style="width:100%;background-size: 0.5rem 0.8rem;background-color:#43b54380;background-image: linear-gradient(45deg,rgba(255, 255, 255, 0.82) 25%,#000000c7 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);"></div>
  		</div>
  		<div class="p-1" style="width: 12px;border-radius: 15px;background: #268fff;height: 12px;position: relative;left: 310px;bottom: 25.5px;z-index: 1;"></div>
  		<div style="font-size: 12px;font-weight: 600;height: 0px;position: relative;bottom: 25px;width: 100%;text-align: center;text-indent: 70px;">Status: SuccessFully Delivered</div>
		</div>
		 
	</div>

	</div>
	
</div>
<div class="col-md-7 float-left p-2 pl-3">
	<img src="./images/maps.jpeg" style="width:100%;height:350px;">
	<table class="table table-sm table-bordered small mt-1 text-center" style="font-size:10.5px;">
	<thead>
	<tr class="table-active">
		<th>Remarks</th>
		<th>CTR.No</th>
		<th>Time(UTC+0)</th>
		<th>Report Type</th>
		<th>Temp</th>
		<th>Battery</th>
		<th>Lat, Lon</th>
		<th>Locating Mode</th>
		<th>Add.*</th>
	</tr>
	</thead>
	<tbody>
		<tr>
			<td>New</td>
			<td>00001181</td>
			<td>2/5/2019 2:50:52 PM</td>
			<td>Routine</td>
			<td>18.8<sup style="font-size:8px;font-weight:bold;">0</sup>C</td>
			<td>96%</td>
			<td>32.06497, 34.78917</td>
			<td>LBS</td>
			<td>Hollow drive,chester pennsylvania</td>		
		</tr>
				<tr>
			<td>New</td>
			<td>00001182</td>
			<td>2/5/2019 2:49:52 PM</td>
			<td>Routine</td>
			<td>18.8<sup style="font-size:8px;font-weight:bold;">0</sup>C</td>
			<td>96%</td>
			<td>32.06497, 34.78917</td>
			<td>LBS</td>
			<td>Hollow drive,chester pennsylvania</td>		
		</tr>
				<tr>
			<td>New</td>
			<td>00001191</td>
			<td>2/5/2019 2:48:52 PM</td>
			<td>Routine</td>
			<td>18.8<sup style="font-size:8px;font-weight:bold;">0</sup>C</td>
			<td>94%</td>
			<td>32.06497, 34.78917</td>
			<td>LBS</td>
			<td>Hollow drive,chester pennsylvania</td>		
		</tr>
		<tr>
			<td>New</td>
			<td>00001171</td>
			<td>2/5/2019 2:47:52 PM</td>
			<td>Routine</td>
			<td>18.8<sup style="font-size:8px;font-weight:bold;">0</sup>C</td>
			<td>94%</td>
			<td>32.06497, 34.78917</td>
			<td>LBS</td>
			<td>Hollow drive,chester pennsylvania</td>		
		</tr>
		<tr>
			<td>New</td>
			<td>00001162</td>
			<td>2/5/2019 2:46:52 PM</td>
			<td>Routine</td>
			<td>18.8<sup style="font-size:8px;font-weight:bold;">0</sup>C</td>
			<td>92%</td>
			<td>32.06497, 34.78917</td>
			<td>LBS</td>
			<td>Hollow drive,chester pennsylvania</td>		
		</tr>
	</tbody>
	</table>
</div>
</div>

</body>
</html>