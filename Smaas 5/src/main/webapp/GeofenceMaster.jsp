<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "https://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>SCMXpert/GeofenceMaster</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='expires' content='0'>
<meta http-equiv='pragma' content='no-cache'>

<jsp:include page="./View/jsfiles.jsp" />
<script src="./js/GeofenceMaster.js"></script>
<link rel="stylesheet" href="./css/slimselect.min.css"/>

<title>Insert title here</title>
</head>
<body oncopy="return false" onpaste="return false">
<jsp:include page="./View/header.jsp" />

<h2 style="text-align:center;margin:0px;"><img src="./images/Capture_scm_half_logo_1.png" style="width:50px;height:50px;">Geo-Fence Master</h2>
<div class="col-sm-12 col-md-12 col-lg-12" style="padding-right:17%;height: 30px;"><button class="bg-color btn-head float-right" id="backLink"><i class="fa fa-arrow-left" style="font-size:18px"></i></button></div>
<div class="container">
<div class="hidden"></div>
<div class="col-sm-12 col-md-12 col-lg-12 p-1 m-auto" >
<div style="border-radius:2px;padding:1%;background:linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(242, 242, 242, 1) 0%, rgba(228, 228, 228, 1) 100%, rgba(255, 255, 255, 1) 100%);border:1px solid #000;">
<div class="formfieldslist">
<span class="w-50 p-2 font-weight-bold float-left text-right" style="line-height: 20px;"> Customer Id :</span>
 <span class="float-left" style="width:35%;">
     <input type"text" class="form-control" placeholder="Customer Id" id="Cust_Id" style="font-size: 12px; font-weight: bold;" disabled="disabled"/>
     </span>
</div>
<div class="formfieldslist">
		<span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px; ">Customer Name :</span>
		<span class="float-left" style="width:35%;">
		<input type="text" class="form-control" placeholder="Customer Name" id="cust_name" style="font-size: 12px;font-weight:bold;" disabled="disabled"/>
     </span>
</div>

 <div class="formfieldslist">
		<span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Partner Name :</span>
		<span class="float-left" style="width:35%;">
		<input type="text" class="form-control" placeholder="Business Partner  Name 2 & (ID)" id="bp_name" style="font-size: 12px;font-weight:bold;" disabled="disabled"/>
     </span>
</div>

</div>
<div style="float:right;line-height: 55px;height: 49px; ">
<button style="line-height: 20px; min-width:85px;" class="bg-color margin-rl1 btn-head" id="delete_event" onclick="javascript:ShowGeofenceList();"><i class="fa fa-list" aria-hidden="true"></i>&nbsp;&nbsp; Geofence List</button>
<button style="line-height: 20px; min-width:85px;" class="bg-color margin-rl1 btn-head" id="delete_event" onclick="javascript:CreateNewGeofencemaster();"><i class="fa fa-plus" aria-hidden="true"></i> &nbsp;&nbsp;Create New Geofence</button>
</div>

</div>

<div class="col-sm-12 col-md-12 col-lg-12 text-center m-0 p-0" id="bottom_map1" style="height:150px;overflow-y:auto;">
	<table class="table table-striped table-bordered draftTableaa " id="draftTableaa" style="overflow-x:auto;font-size:11px;">
			<thead class="bg-color tableHeadershown" style="color:#fff;">
				<tr>
					<th>Geofence Id</th>
					<th>Route Id</th>
					<th>Longitude</th>
					<th>Latitude</th>
					<th>Radius</th>
					<th>Units</th>
				</tr>		
			</thead>
			<tbody >	
			</tbody>

				</table>
	</div>
	
	
	<div style="padding-left:42%; line-height: 100px">
<button style="line-height: 20px; min-width: 85px;" class="bg-color margin-rl1 btn-head" onclick="javascript:DownloadAllAlerts();">Download List</button>
<button style="line-height: 20px;" class="bg-color margin-rl1 btn-head" id="upload_event" onclick="javascript:uploadfile();" >Upload CSV</button>

</div>


<div class="showgeolist" style="margin: 5% 2%">
<div class="row">
<h3 style="width:92%;text-align:center;padding-left: 10%;padding-top: 2%;margin-bottom: 3%;">Create Geo-Fence Master</h3>
<h3 style="width:1%;float:right;padding:2%;text-align:center;font-size:16px;font-weight:bold;cursor:pointer" onclick="javascript:return cancelGeofenceMaster();">X</h3>
<div style="clear:both"></div>
<div class="col-sm-12 col-md-10 col-lg-10">


	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Geofence Id :</span><span class="float-left" style="width:35%;"><input type="text" disabled="disabled" placeholder=" " id="Alert_profile" class="form-control" style="height:30px;font-size: 12px;font-weight:bold;"/></span></div>
	<!-- <div class="formfieldslist" style="height:60px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Profile Description :</span><span class="float-left" style="width:35%;"><textarea  placeholder="Enter Description" id="event_description" class="form-control" style="height:50px;font-size: 12px;font-weight:bold;"></textarea></span></div> -->
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Route Id :</span><span class="float-left" style="width:35%;"><select placeholder=" " id="Alert_route" class="form-control" style="height:30px;font-size: 12px;font-weight:bold;"><option value="">Select Route Id</option></select></span></div>
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Longitude :</span><span class="float-left" style="width:35%;"><select  placeholder="Enter Route Id 20001" id="Alert_good" class="form-control" style="height:30px;font-size: 12px;font-weight:bold;"><option value="">Select Longitude</option></select></span></div>
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Latitude :</span><span class="float-left" style="width:35%;"><select  placeholder="Enter Route Id 20001" id="Alert_event" class="form-control" style="height:30px;font-size: 12px;font-weight:bold;"><option value="">Select Latitude</option></select></span></div>
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Radius :</span><span class="float-left" style="width:35%;"><select  placeholder="Enter Route Id 20001" id="Alert_geofence" class="form-control" style="height:30px;font-size: 12px;font-weight:bold;"><option value="">Select Radius</option></select></span></div>
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Units :</span><span class="float-left" style="width:35%;"><select  placeholder="Enter Route Id 20001" id="Alert_typeid" class="form-control" style="height:30px;font-size: 12px;font-weight:bold;"><option value="">Select Units</option>
	<option value="">Yards</option><option value="">KM</option></select></span></div>
	<!-- <div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Alert Id :</span><span class="float-left" style="width:35%;"><select  placeholder="Enter Route Id 20001" id="Alert_id" class="form-control" style="height:30px;font-size: 12px;font-weight:bold;"><option value="">Select Alert Id</option></select></span></div> -->
</div>

</div>

<div style="width:20%;margin:auto;margin-bottom:2%;margin-top:3%;"> 
<button style="line-height: 20px;" class="bg-color margin-rl1 btn-head" id="delete_event" onclick="javascript:return cancelgeofence();">Cancel</button>
<button style="line-height: 20px;" class="bg-color margin-rl1 btn-head" id="create_event" onclick="javascript:create//alert();">Create</button>
</div></div>
</div>
</div>

<div class="ShowGeofenceList"></div>
<div class="body_blur"></div>
<!-- <script type="text/javascript">
new SlimSelect({
	  select: '#Alert_route'
	})
new SlimSelect({
	  select: '#Alert_good'
	})
new SlimSelect({
	  select: '#Alert_event'
	})
new SlimSelect({
	  select: '#Alert_geofence'
	})
new SlimSelect({
	  select: '#Alert_typeid'
	})	
</script> -->
</body>
</html>