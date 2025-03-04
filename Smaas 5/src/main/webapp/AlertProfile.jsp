<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "https://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<style>
</style>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>SCMXpert/Alerts</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='expires' content='0'>
<meta http-equiv='pragma' content='no-cache'>

<jsp:include page="./View/jsfiles.jsp" />
<script src="./js/AlertProfile.js"></script>
<link rel="stylesheet" href="./css/slimselect.min.css"/>
<script>
function blockSpecialChar(e){
	var k;
	document.all ? k = e.keyCode : k = e.which;
	return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
	}
</script>
</head>
<body oncopy="return false" onpaste="return false">
<jsp:include page="./View/header.jsp" />
  
<h2 style="text-align:center;margin:0px;"><img src="./images/Capture_scm_half_logo_1.png" style="width:50px;height:50px;">Alert Profile</h2>
<div class="col-sm-12 col-md-12 col-lg-12" style="padding-right:17%;height: 30px;"><button class="bg-color btn-head float-right" id="backLink"><i class="fa fa-arrow-left" style="font-size:18px"></i></button></div>
<div class="container">
<div class="hidden"></div>
	<div class="col-sm-12 col-md-12 col-lg-12 p-2 m-auto" >
	<div style="border-radius:2px;padding:1%;background:linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(242, 242, 242, 1) 0%, rgba(228, 228, 228, 1) 100%, rgba(255, 255, 255, 1) 100%);border:1px solid #000;">
<div class="formfieldslist">
     <span class="w-50 p-2 font-weight-bold float-left text-right" style="line-height: 20px;">Customer Id :</span>
     <span class="float-left" style="width:35%;">
     <input type"text" class="form-control" placeholder="Customer Id" id="Cust_Id" style="font-size: 12px; font-weight: bold;" disabled="disabled"/>
     </span>
</div>

<div class="formfieldslist">
		<span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Customer Name :</span>
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
<!-- <div class="col-sm-12 col-md-12 col-lg-12 mt-3 p-0" style="overflow-x:auto;height:300px;margin-bottom:15px;">
<table class="table table-striped table-bordered draftTableaa " id="draftTableaa" style="overflow-x:auto;font-size:11px;height:150px;overflow-y:auto;">
<thead class="bg-color tableHeadershown" style="color:#fff;">
<thead style="text-align:center;">
 <tr>
    <th style=" font-size: 12px">Alert Profile</th>
    <th style=" font-size: 12px">Seq. </th> 
    <th style=" font-size: 12px" >Profile Description</th>
    <th style=" font-size: 12px">Route id</th>
    <th style=" font-size: 12px">Goods Type</th>
    <th style=" font-size: 12px">Event Id</th>
    <th style=" font-size: 12px">Buffer</th>
    <th style=" font-size: 12px">GeoFence</th>
    <th style=" font-size: 12px">Alert Type</th>
    <th style="marginleft: 15px ">Alert Id</th>
  </tr></thead>
  </thead>
  <tbody>
   <tr>
    <td style="padding-right: 5px;">
    <input type="text" class="form-control" placeholder="Profile ID" style="font-size: 12px;font-weight:bold; height: 30px;" /></td>
    <td style="padding-right: 5px"><input  type="text" class="form-control" placeholder="Seq." style="font-size: 12px;font-weight:bold; height: 30px;width:60px" /></td>
    <td style="padding-right: 5px"><input type="text" class="form-control" placeholder="Profile description" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
    <td style="padding-right: 5px"><input type="text" class="form-control" placeholder="Route" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
    <td style="padding-right: 5px"><input type="text" class="form-control" placeholder="Goods type" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
    <td style="padding-right: 5px"><input type="text" class="form-control" placeholder="Event Id" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
    <td style="padding-right: 5px"><input type="text" class="form-control" placeholder="Buffer" style="font-size: 12px;font-weight:bold; height: 30px; width: 70px" /></td>
    <td style="padding-right: 5px"><input type="text" class="form-control" placeholder="Geofence" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
    <td style="padding-right: 5px"><input type="text" class="form-control" placeholder="Alert type" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
    <td style="padding-right: 5px"><input type="text" class="form-control" placeholder="Alert" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
  </tr>
  <tr>
    <td style="padding-right: 5px;"><input type="text" class="form-control" placeholder="Profile ID" style="font-size: 12px;font-weight:bold; height: 30px;" /></td>
    <td style="padding-right: 5px" ><input type="text" class="form-control" placeholder="Seq." style="font-size: 12px;font-weight:bold; height: 30px;width:60px" /></td>
    <td style="padding-right: 5px" ><input type="text" class="form-control" placeholder="Profile description" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
    <td style="padding-right: 5px" ><input type="text" class="form-control" placeholder="Route" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
    <td style="padding-right: 5px" ><input type="text" class="form-control" placeholder="Goods type" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
    <td style="padding-right: 5px"><input type="text" class="form-control" placeholder="Event Id" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
    <td style="padding-right: 5px"><input type="text" class="form-control" placeholder="Buffer" style="font-size: 12px;font-weight:bold; height: 30px;width: 70px" /></td>
    <td style="padding-right: 5px"><input type="text" class="form-control" placeholder="Geofence" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
    <td style="padding-right: 5px"><input type="text" class="form-control" placeholder="Alert type" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
    <td style="padding-right: 5px"><input type="text" class="form-control" placeholder="Alert" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
    
  </tr>
  <tr>
  <td style="padding-right: 5px">
    <input type="text" class="form-control" placeholder="Profile ID" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
    <td style="padding-right: 5px" ><input type="text" class="form-control" placeholder="Seq." style="font-size: 12px;font-weight:bold; height: 30px;width:60px" /></td>
    <td style="padding-right: 5px"><input type="text" class="form-control" placeholder="Profile description" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
    <td style="padding-right: 5px"><input type="text" class="form-control" placeholder="Route" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
    <td style="padding-right: 5px"><input type="text" class="form-control" placeholder="Goods type" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
    <td style="padding-right: 5px"><input type="text" class="form-control" placeholder="Event Id" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
    <td style="padding-right: 5px"><input type="text" class="form-control" placeholder="Buffer" style="font-size: 12px;font-weight:bold; height: 30px;width: 70px" /></td>
    <td style="padding-right: 5px"><input type="text" class="form-control" placeholder="Geofence" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
    <td style="padding-right: 5px"><input type="text" class="form-control" placeholder="Alert type" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
    <td style="padding-right: 5px"><input type="text" class="form-control" placeholder="Alert" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
  </tr>
  <tr>
  <td style="padding-right: 5px;" >
    <input type="text" class="form-control" placeholder="Profile ID" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
    <td style="padding-right: 5px"><input type="text" class="form-control" placeholder="Seq." style="font-size: 12px;font-weight:bold; height: 30px;width:60px" /></td>
    <td style="padding-right: 5px"><input type="text" class="form-control" placeholder="Profile description" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
    <td style="padding-right: 5px" ><input type="text" class="form-control" placeholder="Route" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
    <td style="padding-right: 5px" ><input type="text" class="form-control" placeholder="Goods type" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
    <td style="padding-right: 5px" ><input type="text" class="form-control" placeholder="Event Id" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
    <td style="padding-right: 5px"><input type="text" class="form-control" placeholder="Buffer" style="font-size: 12px;font-weight:bold; height: 30px;width: 70px" /></td>
    <td style="padding-right: 5px"><input type="text" class="form-control" placeholder="Geofence" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
    <td style="padding-right: 5px"><input type="text" class="form-control" placeholder="Alert type" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
    <td style="padding-right: 5px" ><input type="text" class="form-control" placeholder="Alert" style="font-size: 12px;font-weight:bold; height: 30px" /></td>
  </tr></tbody>
</table>
</div> -->
<div style="float:right;line-height: 55px;height: 49px; ">
<button style="line-height: 20px; min-width:85px;" class="bg-color margin-rl1 btn-head" id="delete_event" onclick="javascript:ShowAlertList();"><i class="fa fa-list" aria-hidden="true"></i>&nbsp;&nbsp; Alerts List</button>
<button style="line-height: 20px; min-width:85px;" class="bg-color margin-rl1 btn-head" id="delete_event" onclick="javascript:CreateNewalert();"><i class="fa fa-plus" aria-hidden="true"></i> &nbsp;&nbsp;Create New Alert</button>

</div>
<div class="ShowAlertList"></div>
<div class="ShowEditList"></div>

<div style="width:100%;height:5px;"></div>
	<div class="col-sm-12 col-md-12 col-lg-12 text-center m-0 p-0" id="bottom_map1" style="height:150px;overflow-y:auto;">
	<table class="table table-striped table-bordered draftTableaa " id="draftTableaa" style="overflow-x:auto;font-size:11px;">
			<thead class="bg-color tableHeadershown" style="color:#fff;">
				<tr>
					<th>Seq. </th>
					<th>Alert Profile</th>
					<th>Profile Description</th>
					<th>Route id</th>
					<th>Goods Type</th>
					<th>Event Name</th>
					<th>Geofence</th>
					<th>Alert type</th>
					<th>Alert Id</th>
				</tr>
				
				
			</thead>
			<tbody >	
			</tbody>
			<!-- <tr>
				<td contenteditable="true">profile_id</td>
				<td contenteditable="true">Seq.</td>
				<td contenteditable="true">Profile Description</td>
				<td contenteditable="true">Route id</td>
				<td contenteditable="true">Goods Type</td>
				<td contenteditable="true">Event Id</td>
				<td contenteditable="true">Buffer</td>
				<td contenteditable="true">Geofence</td>
				<td contenteditable="true">Alert type</td>
				<td contenteditable="true">Alert Id</td>
				</tr>
				<tr>
				<td contenteditable="true">profile_id</td>
				<td contenteditable="true">Seq.</td>
				<td contenteditable="true">Profile Description</td>
				<td contenteditable="true">Route id</td>
				<td contenteditable="true">Goods Type</td>
				<td contenteditable="true">Event Id</td>
				<td contenteditable="true">Buffer</td>
				<td contenteditable="true">Geofence</td>
				<td contenteditable="true">Alert type</td>
				<td contenteditable="true">Alert Id</td>
				</tr> -->
				</table>
	</div>

</div>

<div style="padding-left:42%; line-height: 100px">
<!-- <button style="line-height: 20px" class="bg-color margin-rl1 btn-head" id="delete_event" onclick="javascript:reset();">Download</button> 
<button style="line-height: 20px" class="bg-color margin-rl1 btn-head" id="delete_event" onclick="javascript:reset();">Upload</button> -->
<button style="line-height: 20px; min-width: 85px;" class="bg-color margin-rl1 btn-head" onclick="javascript:DownloadAllAlerts();">Download List</button>
<button style="line-height: 20px;" class="bg-color margin-rl1 btn-head" id="upload_event" onclick="javascript:uploadfile();" >Upload CSV</button>

</div>
</div>
<div class="body_blur"></div>
<div class="AlertFormPage">
<div class="row">
<h3 style="width:92%;text-align:center;float:left;padding-left: 10%;padding-top: 2%;margin-bottom: 3%;">Create Alert Profile</h3>
<h3 style="width:1%;float:right;padding:2%;text-align:center;font-size:16px;font-weight:bold;cursor:pointer" onclick="javascript:return cancelAlertprofile();">X</h3>
<div style="clear:both"></div>
<div class="col-sm-12 col-md-10 col-lg-10">


	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Alert Profile :</span><span class="float-left" style="width:35%;"><input type="text" disabled="disabled" placeholder="Enter Alert Id ALTP001" id="Alert_profile" class="form-control" style="height:30px;font-size: 12px;font-weight:bold;"/></span></div>
	<div class="formfieldslist" style="height:60px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Profile Description :</span><span class="float-left" style="width:35%;"><textarea  placeholder="Enter Description" id="event_description" class="form-control" style="height:50px;font-size: 12px;font-weight:bold;" onkeypress="return blockSpecialChar(event)"></textarea></span></div>
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Route Id :</span><span class="float-left" style="width:35%;"><select placeholder=" " id="Alert_route" class="form-control" style="height:30px;font-size: 12px;font-weight:bold;"><option value="">Select Route Id</option></select></span></div>
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Goods Type :</span><span class="float-left" style="width:35%;"><select  placeholder="Enter Route Id 20001" id="Alert_good" class="form-control" style="height:30px;font-size: 12px;font-weight:bold;"><option value="">Select Goods Id</option></select></span></div>
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Event Name :</span><span class="float-left" style="width:35%;"><select  placeholder="Enter Route Id 20001" id="Alert_event" class="form-control" style="height:30px;font-size: 12px;font-weight:bold;"><option value="">Select Event Name</option></select></span></div>
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Geofence :</span><span class="float-left" style="width:35%;"><select  placeholder="Enter Route Id 20001" id="Alert_geofence" class="form-control" style="height:30px;font-size: 12px;font-weight:bold;"><option value="">Select Geofence</option></select></span></div>
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Alert Type :</span><span class="float-left" style="width:35%;"><select  placeholder="Enter Route Id 20001" id="Alert_typeid" class="form-control" style="height:30px;font-size: 12px;font-weight:bold;"><option value="">Select Alert Type</option></select></span></div>
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Alert Id :</span><span class="float-left" style="width:35%;"><select  placeholder="Enter Route Id 20001" id="Alert_id" class="form-control" style="height:30px;font-size: 12px;font-weight:bold;"><option value="">Select Alert Id</option></select></span></div>
</div>

</div>

<div style="width:20%;margin:auto;margin-bottom:2%;margin-top:3%;"> 
<button style="line-height: 20px;" class="bg-color margin-rl1 btn-head" id="delete_event" onclick="javascript:return cancelAlertprofile();">Cancel</button>
<button style="line-height: 20px;" class="bg-color margin-rl1 btn-head" id="create_event" onclick="javascript:createalert();">Create</button>
</div></div>
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
new SlimSelect({
   	  select: '#Alert_id'
   	})	
</script> -->
</body>
</html>