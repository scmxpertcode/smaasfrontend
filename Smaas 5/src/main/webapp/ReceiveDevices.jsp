<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "https://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>SCMXpert/Receive Devices</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='expires' content='0'>
<meta http-equiv='pragma' content='no-cache'>
<jsp:include page="./View/jsfiles.jsp" />
<script src="./js/zebra_datepicker.min.js"></script>
 <link rel="stylesheet" href="./css/zebra_datepicker.css" type="text/css"/>
<script src="./js/Devices.js"></script>
<link rel="stylesheet" href="./css/slimselect.min.css"/>


<script>
$(document).ready(function(){
	
	/* $.ajax({
		type:"get",
		url: localStorage.getItem("smaasip")+"/SCMXPert/getInternalTransferId",
		success:function(response){
			$("#internalTransferId").val(response);
		} */
	});
	/* alert("hello");
	 $.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/getInternalTransferId",function(response){
    	 alert(response);
     }); */

function addNeworigin(){
	$(".addOriginpopup,.body_blur").show();	
}

function cancelorigin(){
	
	$(".addOriginpopup,.body_blur").hide();
}

function addDestcity(){
	
$(".addDestcitypopup,.body_blur").show();	
}

function canceldestcity(){
	
	$(".addDestcitypopup,.body_blur").hide();	
	}

function addoriginNew(){
	
	var origin = $("#originid").val();
	var origin1 =origin;
	//alert(origin);
	var error = document.getElementById("error2");
	if(origin == '')
	{
	var txt = "Please Enter Location";
	error2.innerHTML = txt;
	return false;
	}else{
		$("#event_from").append('<option value="'+escapeHtml(origin)+'">'+escapeHtml(origin)+'</option>');
		$("#event_from").val(origin);
		$("#originid").val('');
		cancelorigin();
	}
	
	
}  
 function addNewdestcity(){
		
		var destid = $("#destid").val();
		var destid1 =destid;
		//alert(origin);
		var error = document.getElementById("error3");
		if(destid == '')
		{
		var txt = "Please Enter Location";
		error2.innerHTML = txt;
		return false;
		}else{
			$("#event_to").append('<option value="'+escapeHtml(destid)+'">'+escapeHtml(destid)+'</option>');
			$("#event_to").val(destid);
			$("#destid").val('');
			canceldestcity();
		}
		
		
	}
 function resetDevice()
 {
	 document.location.reload();
 }
/* function addoriginNew(){
	
	var origin = $("#originid").val();
	var origin1 =origin;
	var error = document.getElementById("error2");
	if(originid == '')
	{
	var txt = "Please Enter Location";
	error2.innerHTML = txt;
	return false;
	}
	
}  */

 function blockSpecialChar(e){
		var k;
		document.all ? k = e.keyCode : k = e.which;
		return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
		}
function escapeHtml(unsafe)
{
	//console.log(unsafe)
	if(typeof unsafe === "undefined" || typeof unsafe.replace === "undefined" || unsafe.length<1){
		return unsafe
	}
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");

 }	
</script>
</head>
<body oncopy="return false" onpaste="return false">
<jsp:include page="./View/header.jsp" />
 <h2 style="text-align:center;margin:0px;"><img src="./images/Capture_scm_half_logo_1.png" style="width:50px;height:50px;">Receive Device</h2>
 
 <div class="container">
 <div class="row">
 
 <div class="col-sm-12 col-md-12 col-lg-12 text-center">
<div class="row text-center">

<div class="col-sm-12 col-md-12 col-lg-12" style="padding-right:17%;height: 30px;"><button class="bg-color btn-head float-right" id="backLink"><i class="fa fa-arrow-left" style="font-size:18px"></i></button></div>

<div id="error"></div>
	<div class="col-sm-12 col-md-8 col-lg-8 p-2 m-auto" >
	<div style="border-radius:3px;padding:1%;background:linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(242, 242, 242, 1) 0%, rgba(228, 228, 228, 1) 100%, rgba(255, 255, 255, 1) 100%);border:1px solid #000;">
		<div style="width: 100%;height: 45px;font-size:12px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Internal Transfer Id :</span><span class="float-left" style="width:35%;"><input type="text" class="form-control" placeholder="Internal Transfer Id" id=internalTransferId style="height:25px;font-size: 12px;font-weight:bold;" disabled="disabled"/></span></div>
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
	</div>
</div></div>
 
 	<div class="col-sm-12 col-md-6 col-lg-6 mt-3 m-auto" >
	<div class="col-sm-12 col-md-12 col-lg-12 text-center p-0" onkeypress="return blockSpecialChar(event)">

			<div style="width: 100%;height: 41px;font-size: 12px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Number of devices :</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" placeholder="Number of devices" style="margin-right:2px;height:25px;font-size: 12px;width:49%;float:left;" id="numofDev" disabled="disabled"/><select class="form-control pr-0 pt-1 pl-1 pb-0" id="listOfDevices" style="width:50%;height:25px;font-size: 12px;float:left;"></select></span></div>	

			<div style="width: 100%;height: 41px;font-size: 12px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Tracking Number :</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" placeholder="Tracking Number" style="height:25px;font-size: 12px; " id="trackingNo"/></span></div>	

			<div style="width: 100%;height: 41px;font-size: 12px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Courier Company :</span><span class="float-left" style="width:45%;"><select class="form-control" id="courierCompList" name="courierCompList" style="height:25px;font-size: 12px;padding-top: 3px;"><option value="">Select Option</option>
			<option value="escapeHtml(DHL Express)">DHL Express</option>
			<option value="escapeHtml(FedEx)">FedEx</option>
			<option value="escapeHtml(United Parcel Service, Inc)">United Parcel Service, Inc</option>
			<option value="escapeHtml(Blue Dart)">Blue Dart</option>
			<option value="escapeHtml(Royal Mail)">Royal Mail</option>
			<option value="escapeHtml(Schenker AG)">Schenker AG</option>
			<option value="escapeHtml(PostNL)">PostNL</option>
			<option value="escapeHtml(YRC Worldwide)">YRC Worldwide</option>
			<option value="escapeHtml(Japan Post Group)">Japan Post Group</option>
			<option value="escapeHtml(DTDC)">DTDC</option></select></span><span class="ml-1"></div>

			<div style="width: 100%;height: 60px;font-size: 12px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Transfer Description :</span><span class="float-left" style="width:45%;"><textarea class="form-control" placeholder="Transfer Description" id="transDesc" style="height:45px;font-size: 12px;"></textarea></span></div>	

			<div style="width: 100%;height: 41px;font-size: 12px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Origin :</span><span class="float-left" style="width:45%;"><select class="form-control"  id="event_from" name="routes" style="height:25px;font-size: 12px;padding-top: 3px;width:87%;float:left;"><option value="">Select Option</option></select><span class="bg-color float-left addRoute-btn" onclick="javascript:addNeworigin();" style="padding: 8px;height:34px;"><i class="fa fa-plus-circle"></i> </span></span></div>

			<div style="width: 100%;height: 41px;font-size: 12px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Destination City :</span><span class="float-left" style="width:45%;"><select class="form-control" id="event_to" name="routes" style="height:25px;font-size: 12px;padding-top: 3px;width:87%;float:left;"><option value="">Select Option</option></select><span class="bg-color float-left addRoute-btn" onclick="javascript:addDestcity();" style="padding: 8px;height:34px;"><i class="fa fa-plus-circle"></i> </span></span></div>

			<div style="width: 100%;height: 41px;font-size: 12px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Receiving Partner :</span><span class="float-left" style="width:45%;"><select class="form-control" id="event_partner_from" name="routes" style="height:25px;font-size: 12px;padding-top: 3px;"><option value="">Select Option</option></select></span><span class="ml-1"></div>

			<div style="width: 100%;height: 60px;font-size: 12px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Destination Address :</span><span class="float-left" style="width:45%;"><textarea id="AddressDesc" class="form-control" placeholder="Address" style="height:45px;font-size: 12px;"></textarea></span></div>

			<div style="width: 100%;height: 41px;font-size: 12px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Date of Transfer :</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" placeholder="Date of Transfer" id="transferDate" style="height:25px;font-size: 12px; "/></span><span class="ml-1"></div>

			<div style="width: 100%;height: 41px;font-size: 12px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Date of Receipt :</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" placeholder="Expected Date" id="expected_date" style="height:25px;font-size: 12px; "/></span><span class="ml-1"></div>

			<div style="width: 100%;height: 41px;font-size: 12px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Person Receiving :</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" placeholder="Person Receiving" id="personReceiving" style="height:25px;font-size: 12px; "/></span></div>

			<div style="width: 100%;height: 50px;font-size: 12px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Receipt Description :</span><span class="float-left" style="width:45%;"><textarea class="form-control" placeholder="Receipt Description" style="height:45px;font-size: 12px;" id="rescpDescript"></textarea></span></div>

		</div>

<div class="col-sm-12 col-md-12 col-lg-12 text-center m-2">
	<div class="w-100 p-3"></div>
	<div>
			<button class="bg-color margin-rl1 btn-head"  onclick="javascript:return clickCancel();"> Cancel Receive Device</button>
			<button class="bg-color margin-rl1 btn-head"  onclick="javascript:return reset();"> Reset </button>
			<button class="bg-color margin-rl1 btn-head" onclick="javascript:createReceiveDevices();"> Create / Update Receive Device </button>
		</div>
</div>
		</div>
		</div>
		</div>
		<div class="body_blur"></div>
		 <div class="addOriginpopup">
      	<div ><h3 style="text-align:center;width:94%;float:left;padding-top:3%;">Add Origin</h3><span class="closeevent" style="width: 2.7%;height: 50px;float: left;padding: 1% 3% 1% 0%;cursor:pointer;">X</span></div><div style="clear:both;"></div>
      	<div id="error2"  style="text-align: center;color:red;"></div>
      	<input type="text" name="shipTo" id="originid"  placeholder="Enter Origin" style="margin-top: 1rem; text-align: center;width: 60%;padding-top: 2%;margin:4% 20% 1% 20%;height: 30px; padding-top: 2px; font-size: 12px; padding-bottom: 2px;font-weight: 600; border-radius: 4px; border: 1px solid #ced4da;" onkeypress="return blockSpecialChar(event)"/>
      	<div id="showprelocationf"></div>
      	<div style="width:70%;margin:auto;text-align:center;margin-top: 2%;" >
      	<button id="CancelEventbdfg" class="CancelEventb bg-color margin-rl1 btn-head" onclick="javascript:cancelorigin();" >Cancel</button>
      	<button id="Addorigin" class="bg-color margin-rl1 btn-head AddEventfromBP"  onclick="javascript:addoriginNew();">Add Origin</button></div>
      </div>
		
		 <div class="addDestcitypopup">
      	<div ><h3 style="text-align:center;width:94%;float:left;padding-top:3%;">Add Destination city</h3><span class="closeevent" style="width: 2.7%;height: 50px;float: left;padding: 1% 3% 1% 0%;cursor:pointer;">X</span></div><div style="clear:both;"></div>
      	<div id="error2"  style="text-align: center;color:red;"></div>
      	<input type="text" name="shipTo" id="destid"  placeholder="Enter City" style="margin-top: 1rem; text-align: center;width: 60%;padding-top: 2%;margin:4% 20% 1% 20%;height: 30px; padding-top: 2px; font-size: 12px; padding-bottom: 2px;font-weight: 600; border-radius: 4px; border: 1px solid #ced4da;" onkeypress="return blockSpecialChar(event)"/>
      	<div id="showprelocationf"></div>
      	<div style="width:70%;margin:auto;text-align:center;margin-top: 2%;" >
      	<button id="CancelEvent" class="CancelEventb bg-color margin-rl1 btn-head" onclick="javascript:canceldestcity();" >Cancel</button>
      	<button id="Adddestcity" class="bg-color margin-rl1 btn-head AddEventfromBP"  onclick="javascript:addNewdestcity();">Add City</button></div>
      </div>
<!-- <script type="text/javascript">
new SlimSelect({
	  select: '#listOfDevices'
	})
new SlimSelect({
	  select: '#courierCompList'
	})
new SlimSelect({
	  select: '#event_from'
	})
new SlimSelect({
	  select: '#event_to'
	})
new SlimSelect({
	  select: '#event_partner_from'
	})	
</script> -->
</body>
</html>