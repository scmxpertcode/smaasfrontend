<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "https://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>SCMXpert/Route Master</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='expires' content='0'>
<meta http-equiv='pragma' content='no-cache'>
<jsp:include page="./View/jsfiles.jsp" />
<script src="./js/RouteMaster.js"></script>
<link rel="stylesheet" href="./css/slimselect.min.css"/>
<script>
$(function(){
	 var UserId = $.session.get('UserId');
	 	if(UserId == undefined)
			{
	 			window.location.href = "index.jsp";
			}
});
function blockSpecialChar(e){
	var k;
	document.all ? k = e.keyCode : k = e.which;
	return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
	}
</script>
</head>
<body oncopy="return false" onpaste="return false">
<style>.hide_show_icon,.show_hide_icon{font-weight: bold;cursor:pointer;text-align:center;float:right;margin-top:1%;}
.hide_show_icon, .show_remaing{display:none;}
#backgroundBlur{background: #000000;opacity: .7;display: none;position: fixed;top: 0;left: 0;width: 100%;height: 100%;z-index: 1;}
#backgroundBlur1{background: #000000;opacity: .7;display: none;position: fixed;top: 0;left: 0;width: 100%;height: 100%;z-index: 1;}
.body_blur1{width:100%;height:100%;overflow:hidden;position:fixed;top:0px;z-index:1;background:#00000069;display:none;}
.view_body_boder{width:95%;height:80%;border:1px solid #000;margin:auto;box-shadow:0px 0px 5px #000;}
.view_body_header{width:100%;height:30px;padding-top:1%;padding-right:3%;}
.nodes{width:55px;font-size:11px;font-weight:bold;border:1px solid #000;float:left;text-align:center;margin:1px;float:right;border-radius:3px 3px 0px 0px;}
.AddEventBlock{width:30%;min-height:200px;background:#fff;border-radius:5px;top:40%;position:fixed;z-index:2;margin:0% 35%;display:none; background-color: #ffffff;}

.goodscontrol{margin-left: 550px; background-color: grey; margin-right: 800px;}
.container1{margin-left: 508px; margin-right: 665px; }
 td {
  border-collapse: collapse;
}
 /* input{width: 300px;} */
}
btn btn-light dropdown-toggle{
 background:brown;
}
#showprelocationf{    height: 45px;
    width: 60%;
    float: left;
    position: absolute;
    background: #fff;
    overflow-y: auto;
    /* box-shadow: #000 0px 1px 5px; */
    margin: 0% 20%;
    border-radius: 0px 0px 5px 5px;
    display:none;
}
#showprelocationt{    height: 45px;
    width: 60%;
    float: left;
    position: absolute;
    background: #fff;
    overflow-y: auto;
    /* box-shadow: #000 0px 1px 5px; */
    margin: 0% 20%;
    border-radius: 0px 0px 5px 5px;display:none;
}
#updateEvent{display:none;}
table>thead{color:#fff;}
</style>
<jsp:include page="./View/header.jsp" />
<!-- <div class="col-sm-12 col-md-12 col-lg-12" style="margin: 17px 0px;"><div class="space-route-head"></div><button class="bg-color margin-rl1 btn-head">Customer</button><button class="bg-color margin-rl1 btn-head">Business Partner</button><button class="margin-rl1 btn-head btn-head-active">Route</button><button class="bg-color margin-rl1 btn-head" onclick="javascript:GoodsMaster();">Goods Type</button></div> -->
<h2 style="text-align:center;margin:0px;"><img src="./images/Capture_scm_half_logo_1.png" style="width:50px;height:50px;"> Route Master</h2>

<div class="container">
<div class="row">
<div class="col-sm-12 col-md-12 col-lg-12 text-center">
<div class="row text-center">

<div class="col-sm-12 col-md-12 col-lg-12" style="padding-right:17%;height: 30px;"><button class="bg-color btn-head float-right" id="backLink"><i class="fa fa-arrow-left" style="font-size:18px"></i></button></div>

<div id="error"></div>
	<div class="col-sm-12 col-md-8 col-lg-8 p-2 m-auto" >
	<div style="border-radius:3px;padding:1%;background:linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(242, 242, 242, 1) 0%, rgba(228, 228, 228, 1) 100%, rgba(255, 255, 255, 1) 100%);border:1px solid #000;">
		<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Customer ID :</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" placeholder="Customer Id" id="Cust_Id" style="height:30px;font-size: 12px;font-weight:bold;" disabled="disabled"/></span></div>
		<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Customer Name :</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" placeholder="Customer Name" id="cust_name" style="height:30px;font-size: 12px;font-weight:bold;" disabled="disabled"/></span></div>
		<div class="formfieldslist" id="b_P_DIV"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Business Partner Name :</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" placeholder="Partner Name" class="bp_name_f" id="bp_name" style="height:30px;font-size: 12px;font-weight:bold;" disabled="disabled"/></span></div>
		</div>
	</div>
</div></div>
	<div class="col-sm-12 col-md-7 col-lg-7 mt-3 m-auto" >
	<div class="col-sm-12 col-md-12 col-lg-12 text-center p-0 float-left">
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Route :</span><span class="float-left" style="width:36%;"><select class="form-control select" placeholder="Event Id" style="height:30px;font-size: 12px;font-weight:bold;padding: 0px;padding-left: 0.2rem;" id="event_id_val" onchange="javascript:return selectRouting(this.value);"><option value="">Create New Route</option></select></span><span style="padding-top:10px;" class=" bg-color float-left addRoute-btn" onclick="javascript:DownloadAllRoutes();" title="Download All Routes List"><i class="fa fa-download" aria-hidden="true"></i> </span><!-- <span class="p-2 bg-color float-left addRoute-btn" onclick="javascript:selectRouting('');" title="Create New Route"><i class="fa fa-plus-circle"></i> </span> --><span style="padding-top:10px;" class=" bg-color float-left addRoute-btn" onclick="javascript:ShowAllRoutes();" title="Total Routes List"><i class="fa fa-list" aria-hidden="true"></i> </span></div>
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Route Id :</span><span class="float-left" style="width:45%;"><input type="text" disabled="disabled" placeholder="Enter Route Id 20001" id="event_type_val" class="form-control" style="height:30px;font-size: 12px;font-weight:bold;"/></span></div>
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Ship From :</span><span class="float-left" style="width:40%;"><!-- <input type="text" placeholder="Enter Route From" autocomplete="off" id="route_name_from" class="form-control" style="height:30px;font-size: 12px;font-weight:bold;"/><div class="showprelocationf"></div> --><select class="form-control p-0 pl-2 select" placeholder="Event Id" style="height:30px;font-size: 12px;font-weight:bold;" id="route_name_from" onchange="javascript:ship_from();"><option value="">Select From</option></select></span><span class="p-2 bg-color float-left addRoute-btn" onclick="javascript:addShipFrom();"><i class="fa fa-plus-circle"></i> </span></div>
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Ship To :</span><span class="float-left" style="width:40%;"><!-- <input type="text" placeholder="Enter Route To" autocomplete="off" id="route_name_to" class="form-control" style="height:30px;font-size: 12px;font-weight:bold;"/><div class="showprelocationt"></div> --> <select class="form-control p-0 pl-2 select" placeholder="Event Id" style="height:30px;font-size: 12px;font-weight:bold;" id="route_name_to" onchange="javascript:ship_to();"><option value="">Select To</option>
         </select></span><span class="p-2 bg-color float-left addRoute-btn" onclick="javascript:addShipTo();"><i class="fa fa-plus-circle"></i> </span></div>
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Primary Mode :</span><span class="float-left" style="width:45%;"><select class="form-control p-0 pl-2 select" placeholder="Event Id" style="height:30px;font-size: 12px;font-weight:bold;" id="event_pri_mode" onchange="javascript:pri_mode();"><option value="">Select Primary Mode</option>
          <option value="Road">Road</option>
          <option value="Ocean">Ocean</option>
          <option value="Rail">Rail</option>
          <option value="Air">Air</option>
          <option value="Barge">Barge</option>
          </select></span></div>
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Inco Terms :</span><span class="float-left" style="width:45%;"><select class="form-control p-0 pl-2 select" placeholder="Event Id" style="height:30px;font-size: 12px;font-weight:bold;" id="event_inco" onchange="javascript:event_inco();"><option value="">Select Inco Terms</option>
          <option value="DDP - Duty Paid">DDP - Duty Paid</option>
          <option value="FOB - Free on Board">FOB - Free on Board</option>
          <option value="EXW - Ex Works">EXW - Ex Works</option>
          <option value="FCA - Free Carrier">FCA - Free Carrier</option>
          <option value="CPT - Carriage Paid To">CPT - Carriage Paid To</option>
          <option value="CIP - Carriage and Insurance Paid To">CIP - Carriage and Insurance Paid To</option>
          <option value="DAT - Delivered at Terminal">DAT - Delivered at Terminal</option>
          <option value="DAP - Delivered at Place">DAP - Delivered at Place</option>
          <option value="FAS - Free Alongside Ship">FAS - Free Alongside Ship</option>
          <option value="CFR - Cost and Freight">CFR - Cost and Freight</option>
          <option value="CIF - Cost Insurance and Freight">CIF - Cost Insurance and Freight</option>
          </select></span></div>
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Standard Duration :</span><span class="float-left" style="width:45%;"><input type="text" placeholder="Duration" id="event_std_dur" class="form-control" style="height:30px;width:50%;font-size: 12px;font-weight:bold;float:left;" onkeypress="return blockSpecialChar(event)"/><select id="days_months" style="width:49%;margin-left:1%;font-size: 12px;font-weight:bold;float:left;height:30px;padding-top:2px;" class="form-control"><option value="hours">Hours</option><option value="days">Days</option><option value="months">Months</option></select></span></div>
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Route Status :</span><span class="float-left" style="width:45%;"><select class="form-control p-0 pl-2" placeholder="Event Id" style="height:30px;font-size: 12px;font-weight:bold;" id="event_status"><option value="Active">Active</option>
          <option value="Draft">Draft</option>
          <option value="Inactive">Inactive</option></select></span></div>
	<div style="width: 100%;height: 60px;font-size: 12px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Route Description :</span><span class="float-left" style="width:45%;"><textarea class="form-control" placeholder="Enter Description" disabled="disabled" id="event_description" style="height:55px;font-size: 12px;font-weight:bold;padding-top:2px;"></textarea></span></div>
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Customer Route Id :</span><span class="float-left" style="width:45%;"><input type="text" placeholder="Enter Route Id" id="cust_route_id" class="form-control" style="height:30px;font-size: 12px;font-weight:bold;" onkeypress="return blockSpecialChar(event)"/></span></div>
	</div>
	</div>
	<div class="w-100 p-2"></div>
	<div class="col-sm-12 col-md-12 col-lg-12">
	<div class="col-sm-10 col-md-8 col-lg-8 p-0 text-center m-auto">
		<div class="" style="padding:1%;border-radius:3px;width:92%;margin:1% 7%;height:240px;border:1px solid #000;">
		<div style="height:185px;width:99%;overflow-y:auto;">
		<table>
				<thead style="color:#000;">
					<tr>
						<th style="padding: 0px 11px;"></th>
						<th style="font-size: 12px;padding: 0px 4px;">Event Id</th>
						<th style="font-size: 12px;padding: 0px 20px;">Partner Id</th>
						<th style="font-size: 12px;padding: 0px 55px;">Partner Name</th>
						<th style="font-size: 12px;padding-left: 47px;">Event Name</th>
						<th style="font-size: 12px;padding-left: 47px;">Documents</th>
					</tr>
				</thead>
			</table>
		<table class="" id="inboxesvalues" style="border-collapse: inherit;">
				<thead style="display:none;">
					<tr>
						<th></th>
						<th>event_Id</th>
						<th>bp_Id</th>
						<th>d</th>
						<th>bp_Name</th>
						<th>d</th>
						<th>event_Name</th>
						<th>photo_Evidence</th>
						<th>d</th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
		<table class="" id="inboxesvalues2" style="border-collapse: inherit;">
				<thead style="display:none;">
					<tr>
						<th></th>
						<th>event_Id</th>
						<th>bp_Id</th>
						<th>d</th>
						<th>bp_Name</th>
						<th>d</th>
						<th>event_Name</th>
						<th>photo_Evidence</th>
							<th>d</th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
		</div>
			<!-- <button id="convert-table">Convert</button> -->
			<div class="w-100 mt-2 mb-2" style="background: #dddddd;padding: 1%;border-top: 1px solid #882535;"><span class="" style="width:100%;height:30px;"><img src="./images/up.png"  onclick="upNdownNew('up');" style="width:21px;margin-right:2%;cursor:pointer;" title="Move Event Up"><img src="./images/below.png" onclick="upNdownNew('down');" style="width:21px;margin-right:2%;cursor:pointer;" title="Move Event Down"><img src="./images/delete.png" onclick="javascript:deleteeRoute();" style="cursor:pointer;width:20px;margin-right:2%;" title="Delete Event"><img src="./images/synchronize.png" style="width:20px;margin-right:2%;cursor:pointer;" id="refreshiconRoute" title="Refresh"><img src="./images/plus-filled.png" style="width:20px;margin-right:2%;" onclick="javascript:dialogboxAddEvent();" class="AddButtonIcon" title="Add New Event"></span><span style="clear:both;"></span></div>
			
		</div>
			
		
	</div></div>
	<div class="col-sm-12 col-md-12 col-lg-12 text-center m-2 mb-5">
	<div class="w-100 p-3"></div>
	<div>
			<!-- <button class="btn btn-color m-1">Select Draft</button> -->
	<!-- 		<button class="btn btn-color m-1">Save as Draft</button>
			<button class="btn btn-color m-1">Add Tag Info</button> -->
		
			<button class="bg-color margin-rl1 btn-head" id="delete_event" onclick="javascript:return Dashboard();" title="Mode to Dashboard">Cancel</button></a>
			<button class="bg-color margin-rl1 btn-head" id="delete_event" onclick="javascript:reset();">Reset</button></a>
			<button class="bg-color margin-rl1 btn-head" id="createEvent" onclick="javascript:createRoute();">Create</button>
			<button class="bg-color margin-rl1 btn-head" id="updateEvent" onclick="javascript:UpdateRoute();">Update</button>
			
		</div>
		<!-- <br> -->
		<!-- <div class="alert alert-success" id="successalert"><strong>Successfully!</strong> Event Update <a href="Dashboard.jsp" class="alert-link">Move to Dashboard</a>.</div> -->
		<div class="showviewdata"></div>
	
	</div>
	
</div>

</div>
	<div class="showallRoutes"></div>
<!-- <footer></footer> -->
      <div class="body_blur"></div>
      <div class="AddEventBlock">
      	<h3 style="text-align:center;width:94%;float:left;padding-top:2%;">Add Partner Event</h3><span class="closeRoute" style="width: 2.7%;height: 30px;float: left;padding: 1% 3% 1% 0%;cursor:pointer;" onclick="javascript:return closeRoute();">X</span><span style="clear:both;"></span>
      	<div id="errorr"></div>
      	<input type="text" name="eventId" id="eventId" maxlength="6" placeholder="Enter Event Id Like E0011" style="margin-top: 1rem; text-align: center;width: 60%;padding-top: 2%;margin: 0% 20%;height: 30px; padding-top: 2px; font-size: 12px; padding-bottom: 2px;font-weight: 600; border-radius: 4px; border: 1px solid #ced4da; margin-bottom: 4px;" />
      	<select class="form-control" id="selectvalues" style="margin-top:1rem;text-align: center;width: 60%;padding-top: 2%;margin: auto;height: 30px;padding-top: 2px;font-size: 12px;padding-bottom: 2px;font-weight: 600;" onchange="javascript:selectBpName(this.value);"><option value="">Select Partner</option></select>
      	<div style="width:100%;min-height:4px;text-align: center;" id="partnerName"></div>
      	<select class="form-control" id="eventslist" style="margin-top:1rem;text-align: center;width: 60%;padding-top: 2%;margin: auto;height: 30px;padding-top: 2px;font-size: 12px;padding-bottom: 2px;font-weight: 600;"><option value="">Select Event</option></select>
      	<div class="cancelsavebtns" ><button id="CancelEventRoute" class="bg-color margin-rl1 btn-head"   onclick="javascript:return closeRoute();">Cancel Event</button>
      	<button id="AddEvent" class="bg-color margin-rl1 btn-head"  onclick="javascript:addEventNewRoute();">Add Event</button></div>
      </div>
         <div class="addShipfromPop">
      	<div style="width: 100%;height: 60px;"><h3 style="text-align:center;width:94%;float:left;padding-top:3%;">Add Shipment From</h3><span class="closeRoute" style="width: 2.7%;height: 50px;float: left;padding: 1% 3% 1% 0%;cursor:pointer;" onclick="javascript:return closeRoute();">X</span><span style="clear:both;"></span></div>
      	<div id="selecterror" style="text-align: center;color: red;margin-bottom: 6px;"></div>
      	<input type="text" class="invalidText" name="shipTo" id="shipFrom"  placeholder="Enter City Name" style="margin-top: 1rem; text-align: center;width: 60%;padding-top: 2%;margin:1% 20% 1% 20%;height: 30px; padding-top: 2px; font-size: 12px; padding-bottom: 2px;font-weight: 600; border-radius: 4px; border: 1px solid #ced4da;" onkeypress="return blockSpecialChar(event)"/>
      	<div id="showprelocationf"></div>
      	<div class="cancelsavebtns" ><button id="CancelEventRoute" class="bg-color margin-rl1 btn-head" onclick="javascript:return closeRoute();">Cancel</button>
      	<button id="AddEventfrom" class="bg-color margin-rl1 btn-head"  onclick="javascript:addShipFromNew();">Add Ship From</button></div>
      </div>
       <div class="addShipToPop">
      	<div style="width: 100%;height: 60px;"><h3 style="text-align:center;width:94%;float:left;padding-top:3%;">Add Shipment To</h3><span class="closeRoute" style="width: 2.7%;height: 50px;float: left;padding: 1% 3% 1% 0%;cursor:pointer;" onclick="javascript:return closeRoute();">X</span><span style="clear:both;"></span></div>
      	<div id="selecterrorto" style="text-align: center;color: red;margin-bottom: 6px;"></div>
      	<input type="text" class="invalidText1" name="shipTo" id="shipTo"  placeholder="Enter City Name" style="margin-top: 1rem; text-align: center;width: 60%;padding-top: 2%;margin:1% 20% 1% 20%;height: 30px; padding-top: 2px; font-size: 12px; padding-bottom: 2px;font-weight: 600; border-radius: 4px; border: 1px solid #ced4da;" onkeypress="return blockSpecialChar(event)"/>
      	<div id="showprelocationt"></div>
      	<div class="cancelsavebtns" ><button id="CancelEventRoute" class="bg-color margin-rl1 btn-head" onclick="javascript:return closeRoute();">Cancel</button>
      	<button id="AddEventto" class="bg-color margin-rl1 btn-head"  onclick="javascript:addShipToNew();">Add Ship To</button></div>
      </div>
      <div id="backgroundBlur1" style="z-index: 1;"></div>

    <!--  <script type="text/javascript">
 new SlimSelect({
	  select: '#event_id_val'
	}) 
new SlimSelect({
	  select: '#route_name_from'
	})
new SlimSelect({
	  select: '#route_name_to'
	})
new SlimSelect({
	  select: '#event_pri_mode'
	})
new SlimSelect({
	  select: '#event_inco'
	})
new SlimSelect({
   	  select: '#days_months'
   	})
new SlimSelect({
 	  select: '#event_status'
 	})
new SlimSelect({
 	  select: '#days_months'
 	})
	
</script> -->
</body>
</html>