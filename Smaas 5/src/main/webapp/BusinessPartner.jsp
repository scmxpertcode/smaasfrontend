<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<style>
.showviewdata1
{ display:none;
    width: 52%;
margin: 0% 27%;
   }


#error1{color: red;};
#error2{color: red};
#adminerror{color:red;font-size:12px;width:100%;text-align:center;}
</style>

<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='expires' content='0'>
<meta http-equiv='pragma' content='no-cache'>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>SCMXpert/Business Partner</title>
<jsp:include page="./View/jsfiles.jsp" />
<script src="./js/BusinessPartner.js"></script>
<link rel="stylesheet" href="./css/passwordRequirements.css" />
</head>
<body oncopy="return false" onpaste="return false">
<jsp:include page="./View/header.jsp" />
<script src="./js/passwordRequirements.js"></script>
<link rel="stylesheet" href="./css/slimselect.min.css"/>
 
<script>
$(function() {
	 var UserId = $.session.get('UserId');
	if(UserId == undefined)
		{
			window.location.href = "index.jsp";
		}
	
	var UserName = $.session.get('UserName');
	var CustomerName = $.session.get('CustomerName');
	var Cust_Id = $.session.get('Cust_Id');
	var UserId = $.session.get('UserId');
	$("#customer_Name").text(CustomerName);
	$("#bp_name_f").text(UserName);
	$("#scmid").val(Cust_Id);
	$("#bpi_idchange").val(UserId);
	
   
	 if($("#listBusinessPartner").val() == 'New') {
         document.getElementById('updateEvent').style.visibility = 'hidden';
     } else {
         document.getElementById('updateEvent').style.visibility = 'visible';
     }   
	 $(".CancelEventb,.closeevent").on("click",function(){
		 $(".addShipToPop,.addShipfromPop,.body_blur,.AddEventBlock").hide();
	 });
	
});
$(document).ready(function (){
    $(".pr-password").passwordRequirements({

    });
    
});

function blockSpecialChar(e){
	var k;
	document.all ? k = e.keyCode : k = e.which;
	return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
	}
	
function blockSpecialChar1(e1){
	var k;
	document.all ? k = e1.keyCode : k = e1.which;
	return ((k >= 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || k == 46 || (k >= 48 && k <= 57));
	}
	
</script>

<h2 style="text-align:center;margin:0px;"><img src="./images/Capture_scm_half_logo_1.png" style="width:50px;height:50px;">Business Partner Master</h2>
<div class="col-sm-12 col-md-12 col-lg-12" style="padding-right:17%;height: 30px;"><button class="bg-color btn-head float-right" id="backLink"><i class="fa fa-arrow-left" style="font-size:18px"></i></button></div>
<div class="container">
<div class="hidden"></div>
	<div class="col-sm-12 col-md-12 col-lg-12 p-2 m-auto" >
	<div style="border-radius:3px;padding:1%;background:linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(242, 242, 242, 1) 0%, rgba(228, 228, 228, 1) 100%, rgba(255, 255, 255, 1) 100%);border:1px solid #000;">
		<div class="formfieldslist">
		<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Customer ID</span><span class="float-left spaceTextAlign">:</span>
		<span class="float-left" style="width:45%;">
		 <input type="text" class="form-control" placeholder="Customer Id" id="Cust_Id" style="font-size: 12px;font-weight:bold;" disabled="disabled"/>
		 </span></div>
		 
		<div class="formfieldslist">
		<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Customer Name</span><span class="float-left spaceTextAlign">:</span>
		<span class="float-left" style="width:45%;">
		<input type="text" class="form-control" placeholder="Customer Name" id="cust_name" style="font-size: 12px;font-weight:bold;" disabled="disabled"/>
		</span></div>
		 
		</div>
	</div>


     <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12 mt-3 m-auto" >
        <div class="col-sm-12 col-md-6 col-lg-6 text-center p-0 float-left">
	  
	<div class="formfieldslist">
	<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Partner ID</span><span class="float-left spaceTextAlign">:</span>
	<span class="float-left" style="width:45%;">
	<select class="form-control" placeholder="Event Id" style="font-size: 12px;font-weight:bold;padding: 0px;padding-left: 0.5rem;" id="listBusinessPartner" onChange="javascript:getBusinessPartnerAllDetails(this.value);">
	<option value="">New</option>

	 </select></span></div>
	  
<div class="formfieldslist">
<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Partner Type</span><span class="float-left spaceTextAlign">:</span>
<span class="float-left" style="width:45%;">
<select class="form-control" placeholder="Event Id" style="font-size: 12px;font-weight:bold;padding: 0px;padding-left: 0.5rem;" id="partnerType">
<option value="">Select option</option>
          <option class="" value="Customer">Customer</option>
          <option class="" value="Road Transport">Road Transport</option>
          <option class="" value="Rail Transport">Rail Transport</option>
          <option class="" value="Ocean Transport">Ocean Transport</option>
          <option class="" value="Air Transport">Air Transport</option>
          <option class="" value="3 Party Logistics">3 Party Logistics</option>
          <option class="" value="Forwarding Agent">Forwarding Agent</option>
          <option class="" value="Insurance Agent">Insurance Agent</option>
          <option class="" value="Inspection company">Inspection company</option>
          <option class="" value="Distribution center">Distribution center</option>
          <option class="" value="Warehouse">Warehouse</option>
          <option class="" value="QA Team">QA Team</option>
          <option class="" value="Logistics Team">Logistics Team</option>
          <option class="" value="Others users">Others users</option>
          <option class="" value="Plant">Plant</option>
          <option class="" value="Retail">Retail</option>
          <option class="" value="manufacturer">manufacturer</option></select></span></div>
          
	<div class="formfieldslist">
	<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Partner Company</span><span class="float-left spaceTextAlign">:</span>
	<span class="float-left" style="width:45%;">
	<input type="text" placeholder="Partner Company" id="partnerCompany" class="form-control" style="font-size: 12px;font-weight:bold;" onkeypress="return blockSpecialChar(event)"/>
	</span></div>
	
	<div class="formfieldslist">
	<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Partner Name</span><span class="float-left spaceTextAlign">:</span>
	<span class="float-left" style="width:45%;">
	<input type="text" placeholder="Partner Name" id="partnerName" class="form-control" style="font-size: 12px;font-weight:bold;" onkeypress="return blockSpecialChar(event)"/>
	</span></div>
	
	<div class="formfieldslist">
	<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Partner Name 2</span><span class="float-left spaceTextAlign">:</span>
	<span class="float-left" style="width:45%;">
	<input type="text" placeholder="Partner Name 2" id="partnerName2" class="form-control" style="font-size: 12px;font-weight:bold;" onkeypress="return blockSpecialChar(event)"/>
	</span></div>
	
	<div class="formfieldslist" class="formfieldslist">
	<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Partner Locations</span><span class="float-left spaceTextAlign">:</span>
	<span class="float-left" style="width:40%;">
	<select class="form-control p-0 pl-2 " placeholder="Partner Locations" style="font-size: 12px;font-weight:bold;" id="partnerLocation">
	<option value="">New</option></select></span>
	<span class="bg-color float-left addRoute-btn" onclick="javascript:addNewLocation();" style="padding: 8px;height:34px;">
	<i class="fa fa-plus-circle"></i> </span></div>
	
	 <div class="formfieldslist">
	<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">External Number</span><span class="float-left spaceTextAlign">:</span>
	<span class="float-left" style="width:45%;">
	<input type="text" placeholder="External Number" id="partnerExtName" class="form-control" style="font-size: 12px;font-weight:bold;" onkeypress="return blockSpecialChar(event)"/></span></div>
	
	<div class="formfieldslist">
	<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Partner Status</span><span class="float-left spaceTextAlign">:</span>
	<span class="float-left" style="width:45%;">
	<select class="form-control" placeholder="Partner Status" style="font-size: 12px;font-weight:bold;padding: 0px;padding-left: 0.5rem;" id="partnerStatus"> 
	<option value="Active">Active</option>
	<option value="Inactive">Inactive</option>
	</select></span></div>
	
	
	<div class="formfieldslist">
	<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Escalation Manager</span><span class="float-left spaceTextAlign">:</span>
	<span class="float-left" style="width:45%;">
	<select class="form-control" placeholder="Escalation Manager" style="font-size: 12px;font-weight:bold;padding: 0px;padding-left: 0.5rem;" id="partnerEscal">
	<option value="">New</option></select></span></div>
	</div>
		<div class="col-sm-12 col-md-6 col-lg-6 text-center p-0 float-left">
			<div class="bg-color" style="width: 90%;margin: 2% 5%;color:#ffffff;border-radius:5px;padding-left: 30px; padding-top: 3px; padding-bottom: 3px; font-weight: bold;">Partner Access Matrix</div>
             <div style="padding-left:25%;height:300px;overflow-y:auto;">
               <div id="error"></div>
             <table id="partnerAcessMatrixtable">
             <thead><div style="width:41%;float:left;font-weight:bold;text-align:left;margin-bottom:5px;"><span>Operational Access</span></div><div style="width:50%;float:left;font-weight:bold;text-align:left;margin-bottom:5px;"><span>Master Access</span></div></thead>
           
             <tbody>
             	<tr><td style="padding-left:5px;"><input type="checkbox" name="AcessMatrix" value="Dashboard"></td><td style="text-align:left;">Dashboard</td><td></td><td style="padding-left:5px;"><input type="checkbox" name="AcessMatrix" value="Admin"></td><td style="text-align:left;">Admin</td></tr>
             	<tr><td style="padding-left:5px;"><input type="checkbox" name="AcessMatrix" value="CreateShipment"></td><td style="text-align:left;">Create Shipment</td><td></td><td style="padding-left:5px;"><input type="checkbox" name="AcessMatrix" value="BusinessPartner"></td><td style="text-align:left;">Business Partner</td></tr>
             	<tr><td style="padding-left:5px;"><input type="checkbox" name="AcessMatrix" value="UpdateEvent"></td><td style="text-align:left;">Update Event</td><td></td><td style="padding-left:5px;"><input type="checkbox" name="AcessMatrix" value="RouteMaster"></td><td style="text-align:left;">Route Master</td></tr>
             	<tr><td style="padding-left:5px;"><input type="checkbox" name="AcessMatrix" value="CompleteShipment"></td><td style="text-align:left;">Complete Shipment</td><td></td><td style="padding-left:5px;"><input type="checkbox" name="AcessMatrix" value="GoodsMaster"></td><td style="text-align:left;">Goods Master</td></tr>
             	<tr><td style="padding-left:5px;"><input type="checkbox" name="AcessMatrix" value="Reports"></td><td style="text-align:left;">Reports</td><td></td><td style="padding-left:5px;"><input type="checkbox" name="AcessMatrix" value="DeviceManagement"></td><td style="text-align:left;">Device Management</td></tr>
             	<tr><td style="padding-left:5px;"><!-- <input type="checkbox" name="AcessMatrix" value="Alerts"> --></td><td style="text-align:left;"><!-- Alerts --></td><td></td><td style="padding-left:5px;"><input type="checkbox" name="AcessMatrix" value="DeviceConfigure"></td><td style="text-align:left;">Device Configure</td></tr>
             	</tbody>
             </table> 
             </div>  
<!--              
             <div style="width: 90%;height: 40px;padding: 5px;margin-top:10px;margin: auto;background: #e0e0e0;padding-top:8px;"> 
              <select class="form-class" onchange="javascript:changeAppendValuepartner(this.value);" >
          <option class="" selected="" value="Select option">Select option</option>
          <option class="" value="SCM MANAGER">SCM MANAGER</option>
          <option class="" value="Warehouse Manager">Warehouse Manager</option>
          <option class="" value="Storage inchrge">Storage inchrge</option>
          <option class="" value="Manager">Manager</option>
          <option class="" value="Captain">Captain</option>
          <option class="" value="3PL Manager">3PL Manager</option>
          <option class="" value="3PL Store Incharge">3PL Store Incharge</option>
          <option class="" value="Manager">Manager</option>
          <option class="" value="Agent">Agent</option>
          <option class="" value="Trucking">Trucking</option></select>
          </div> -->
	</div>
	</div>
	</div>
	<div class="row">
	<div class="col-sm-12 col-md-6 col-lg-6 text-center p-0 float-left">
			<div class="bg-color" style="width: 90%; margin: 2% 5%;color:#ffffff;border-radius:5px;padding-left: 30px; padding-top: 3px; padding-bottom: 3px; font-weight: bold;">User Details</div>
     <div class="col-sm-12 col-md-12 col-lg-12" id="adminerror" style="color:red;"></div> 
	<div class="formfieldslist">
	<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">User ID</span><span class="float-left spaceTextAlign">:</span>
	<span class="float-left" style="width:45%;">
	<input type="text" placeholder="User ID" id="userId" class="form-control" style="font-size: 12px;font-weight:bold;" disabled="disabled" onkeypress="return blockSpecialChar(event)"/></span></div>
	
	<div class="formfieldslist" onkeypress="return blockSpecialChar1(event)">
	<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Password</span><span class="float-left spaceTextAlign">:</span>
	<span class="float-left" style="width:45%;">
<!-- 	<input type="password" placeholder="Password" id="password" class="form-control" style="font-size: 12px;font-weight:bold;"/> -->
	<input type="password" name="password" id="password" class="pr-password form-control input_pass" required placeholder="Password" style="width:45%;font-size: 13px;position:absolute;font-weight:bold;z-index: 1;" onkeypress="javascript:return keycodecheckBusiness(event)">
								<img src="./images/showpassword.jpg" style="width:25px;left:43%;" id="showPassword" onclick="javascript:return ShowPassword();" title="Show Password"/>
								<img src="./images/Hidepassword.jpg" style="width:25px;left:43%;" id="hidePassword" onclick="javascript:return ShowPassword();" title="Hide Password"/>
	
	</span></div>
	
	<div class="formfieldslist" onkeypress="return blockSpecialChar1(event)">
	<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Confirm Password</span><span class="float-left spaceTextAlign">:</span>
	<span class="float-left" style="width:45%;">
	<!-- <input type="text" placeholder="Confirm Password" id="c_password" class="form-control" style="font-size: 12px;font-weight:bold;"/> -->
	<input type="password" name="c_password" id="cs_password" class="pr-password form-control input_pass" required placeholder="Confirm Password" style="width:45%;font-size: 13px;position:absolute;font-weight:bold;z-index: 1;" onkeypress="javascript:return keycodecheck(event)">
								<img src="./images/showpassword.jpg" style="width:25px;left:43%;" id="showPasswordc" onclick="javascript:return ShowPassword1();" title="Show Password"/>
								<img src="./images/Hidepassword.jpg" style="width:25px;left:43%;;" id="hidePasswordc" onclick="javascript:return ShowPassword1();" title="Hide Password"/>
	</span></div>
	
	
	<div class="formfieldslist">
	<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Language</span><span class="float-left spaceTextAlign">:</span>
	<span class="float-left" style="width:45%;">
	<select class="form-control" placeholder="Language" style="font-size: 12px;font-weight:bold;padding: 0px;padding-left: 0.5rem;" id="language">
	<option value="">Select Language</option>
	<option value="English">English</option>
	<option value="Hindi">Hindi</option>
	<option value="Tamil">Tamil</option>
	</select></span></div>
	
	<div class="formfieldslist">
	<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Time Zone</span><span class="float-left spaceTextAlign">:</span>
	<span class="float-left" style="width:45%;">
	<select id="timeZone" class="form-control" style="font-size: 12px;font-weight:bold;"><option value="">Select Your TimeZone</option></select></span></div>
	
	<div class="formfieldslist">
	<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Date Format</span><span class="float-left spaceTextAlign">:</span>
	<span class="float-left" style="width:45%;">
	<select id="DateOfDay" class="form-control" style="font-size: 12px;font-weight:bold;"><option value="">Select Date Formate</option><option value="DD-MM-YYYY">DD-MM-YYYY</option><option value="MM-DD-YYYY">MM-DD-YYYY</option><option value="YYYY-MM-DD">YYYY-MM-DD</option><option value="YYYY-DD-MM">YYYY-DD-MM</option><option value="DD/MM/YYYY">DD/MM/YYYY</option><option value="MM/DD/YYYY">MM/DD/YYYY</option><option value="YYYY/MM/DD">YYYY/MM/DD</option><option value="YYYY/DD/MM">YYYY/DD/MM</option><option value="DD:MM:YYYY">DD:MM:YYYY</option><option value="MM:DD:YYYY">MM:DD:YYYY</option><option value="YYYY:MM:DD">YYYY:MM:DD</option><option value="YYYY:DD:MM">YYYY:DD:MM</option></select></span></div>
	
	<div class="bg-color" style="width: 90%;margin: 2% 5%;color:#ffffff;border-radius:5px;padding-left: 30px; padding-top: 3px; padding-bottom: 3px; font-weight: bold;">Communication</div>
	
	<div class="formfieldslist">
	<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Email</span><span class="float-left spaceTextAlign">:</span>
	<span class="float-left" style="width:45%;">
	<input type="text" placeholder="Enter Email" id="email" class="form-control" style="font-size: 12px;font-weight:bold;" onkeypress="return blockSpecialChar1(event)"/></span></div>
	
	<div class="formfieldslist">
	<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Telephone Number</span><span class="float-left spaceTextAlign">:</span>
	<span class="float-left" style="width:45%;">
	<input type="text" placeholder="Enter Tele-Phone" id="telNumber" class="form-control" style="font-size: 12px;font-weight:bold;" onkeypress="return blockSpecialChar(event)"/></span></div>
	
	<div class="formfieldslist">
	<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Cell Phone Number</span><span class="float-left spaceTextAlign">:</span>
	<span class="float-left" style="width:45%;">
	<input type="text" placeholder="Enter Cell-Phone" id="cellNumber" class="form-control" style="font-size: 12px;font-weight:bold;" onkeypress="return blockSpecialChar(event)"/></span></div>
	
	<div class="formfieldslist">
	<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Communication Method</span><span class="float-left spaceTextAlign">:</span>
	<span class="float-left" style="width:45%;">
	 <select class="form-control" placeholder="Comm. Method" style="font-size: 12px;font-weight:bold;padding: 0px;padding-left: 0.5rem;" id="commMethod">
	<option value="">Select Communication Method</option>
	<option value="Email">Email</option>
	<option value="SMS">SMS</option>
	<option value="Phone">Phone</option>
	<option value="Twitter">Twitter</option>
	</select></span></div>
	
	</div>
		<div class="col-sm-12 col-md-6 col-lg-6 text-center p-0 float-left">
					<div class="bg-color" style="width: 90%;margin: 2% 5%;color:#ffffff;border-radius:5px;padding-left: 30px; padding-top: 3px; padding-bottom: 3px; font-weight: bold;">Partner Access Events</div>
             <div style="padding-left:25%;">
           <div id="error1"></div>
             <table id="partnerAcessEvents">
            
           
             <tbody>
             	<!-- <tr><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Preparation"></td><td style="text-align:left;">Preparation</td><td></td><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Inspection"></td><td style="text-align:left;">Inspection</td></tr> -->
             	<tr><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Shipment Created"></td><td style="text-align:left;">Shipment Created</td><td></td><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Additional Events"></td><td style="text-align:left;">Additional Events</td></tr>
             	<tr><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Attach Device and Start"></td><td style="text-align:left;">Attach Device and Start</td><td></td><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Additional Documents"></td><td style="text-align:left;">Additional Documents</td></tr>
             	<tr><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Upload Documents"></td><td style="text-align:left;">Upload Documents</td><td></td><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Raise Exception"></td><td style="text-align:left;">Raise Exception</td></tr>
             	<tr><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="FDA may proceed"></td><td style="text-align:left;">FDA may proceed</td><td></td><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Inspection"></td><td style="text-align:left;">Inspection</td></tr>
             	<tr><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Goods Receipt"></td><td style="text-align:left;">Goods Receipt</td><td></td><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Relabeling"></td><td style="text-align:left;">Relabeling</td></tr>
             	<!-- <tr><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Upload Invoice or Device Number"></td><td style="text-align:left;">Upload Invoice or Device Number</td><td></td><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Relabeling"></td><td style="text-align:left;">Relabeling</td></tr> -->
             	<tr><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Loaded into Truck"></td><td style="text-align:left;">Loaded into Truck</td><td></td><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Scrap Goods"></td><td style="text-align:left;">Scrap Goods</td></tr>
                <!--<tr><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Start of Shipment"></td><td style="text-align:left;">Start of Shipment</td><td></td><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Relabeling"></td><td style="text-align:left;">Relabeling</td></tr> -->
             	<!--<tr><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Attach Device"></td><td style="text-align:left;">Attach Device</td><td></td><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Relabeling"></td><td style="text-align:left;">Relabeling</td></tr> -->          	
             	<tr><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Loaded into Airplane"></td><td style="text-align:left;">Loaded into Airplane</td><td></td><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Bulk Breaking"></td><td style="text-align:left;">Bulk Breaking</td></tr>
             	<tr><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Receipt into CFS"></td><td style="text-align:left;">Receipt into CFS</td><td></td><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Cross Shipments"></td><td style="text-align:left;">Cross Shipments</td></tr>
             	<tr><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Receipt from CFS"></td><td style="text-align:left;">Receipt from CFS</td><td></td><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Consolidation"></td><td style="text-align:left;">Consolidation</td></tr>
             	<tr><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Custom Clearance"></td><td style="text-align:left;">Custom Clearance</td><td></td><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Kitting"></td><td style="text-align:left;">Kitting</td></tr>
             	<tr><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Deliver to Warehouse"></td><td style="text-align:left;">Deliver to Warehouse</td><td></td><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Part Load"></td><td style="text-align:left;">Part Load</td></tr>
             	<tr><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Delivery to DC"></td><td style="text-align:left;">Delivery to DC</td><td></td><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Part Unload"></td><td style="text-align:left;">Part Unload</td></tr> 
             	             	<tr><td style="padding-left:5px;"><input type="checkbox" name="AcessEvents" value="Loaded into Ship"></td><td style="text-align:left;">Loaded into Ship</td><td></td></tr>
             	
             	</tbody>
             </table> 
             </div>  
<!--              
             <div style="width: 90%;height: 40px;padding: 5px;margin-top:10px;margin: auto;background: #e0e0e0;padding-top:8px;"> 
              <select class="form-class" onchange="javascript:changeAppendValuepartner(this.value);" >
          <option class="" selected="" value="Select option">Select option</option>
          <option class="" value="SCM MANAGER">SCM MANAGER</option>
          <option class="" value="Warehouse Manager">Warehouse Manager</option>
          <option class="" value="Storage inchrge">Storage inchrge</option>
          <option class="" value="Manager">Manager</option>
          <option class="" value="Captain">Captain</option>
          <option class="" value="3PL Manager">3PL Manager</option>
          <option class="" value="3PL Store Incharge">3PL Store Incharge</option>
          <option class="" value="Manager">Manager</option>
          <option class="" value="Agent">Agent</option>
          <option class="" value="Trucking">Trucking</option></select>
          </div> -->
	
	</div>
	
	</div>
	</div>
	

        	<div class="col-sm-12 col-md-12 col-lg-12 text-center mb-5">
	<div class="w-75 p-3"></div>
	<div>
	 
			<button class="bg-color margin-rl1 btn-head" id="delete_event" onclick="javascript:Dashboard();" title="Move to Dashboard">Cancel</button> 
			<button class="bg-color margin-rl1 btn-head" id="createEvent" onclick="javascript:createBusinessPartner();">Create</button>
			 <button class="bg-color margin-rl1 btn-head" id="updateEvent" onclick="javascript:updateBusinessPartner();">Update</button> 
			
		</div>
		
		  
	</div>
	<div class="showviewdata1"></div>
  


 <div class="body_blur"></div>
      <div class="AddEventBlock">
      	<h3 style="text-align:center;width:94%;float:left;padding-top:2%;">Add Partner Event</h3><span class="closeevent" style="width: 2.7%;height: 30px;float: left;padding: 1% 3% 1% 0%;cursor:pointer;">X</span><span style="clear:both;"></span>
      	<input type="text" name="eventId" id="eventId"  placeholder="Enter Event Id Like E0011" style="margin-top: 1rem; text-align: center;width: 60%;padding-top: 2%;margin: 0% 20%;height: 30px; padding-top: 2px; font-size: 12px; padding-bottom: 2px;font-weight: 600; border-radius: 4px; border: 1px solid #ced4da; margin-bottom: 4px;" />
      	<select class="form-control" id="selectvalues" style="margin-top:1rem;text-align: center;width: 60%;padding-top: 2%;margin: auto;height: 30px;padding-top: 2px;font-size: 12px;padding-bottom: 2px;font-weight: 600;" onchange="javascript:selectBpName(this.value);"><option>Select Partner</option></select>
      	<div style="width:100%;height:4px;"></div>
      	<select class="form-control" id="eventslist" style="margin-top:1rem;text-align: center;width: 60%;padding-top: 2%;margin: auto;height: 30px;padding-top: 2px;font-size: 12px;padding-bottom: 2px;font-weight: 600;"><option value="">Select Event</option></select>
      	<div style="width:70%;margin:auto;text-align:center;margin-top: 2%;" ><button id="CancelEventbsdfg" class="CancelEventb bg-color margin-rl1 btn-head"  >Cancel Event</button>
      	<button id="AddEvent" class="bg-color margin-rl1 btn-head"  onclick="javascript:addEvent();">Add Event</button></div>
      </div>
         <div class="addShipfromPop">
      	<div ><h3 style="text-align:center;width:94%;float:left;padding-top:3%;">Add Location</h3><span class="closeevent" style="width: 2.7%;height: 50px;float: left;padding: 1% 3% 1% 0%;cursor:pointer;">X</span></div><div style="clear:both;"></div>
      	<div id="error2"  style="text-align: center;color:red;"></div>
      	<input type="text" class="invalidText" name="shipTo" id="shipFrom"  placeholder="Enter Location" style="margin-top: 1rem; text-align: center;width: 60%;padding-top: 2%;margin:4% 20% 1% 20%;height: 30px; padding-top: 2px; font-size: 12px; padding-bottom: 2px;font-weight: 600; border-radius: 4px; border: 1px solid #ced4da;" onkeypress="return blockSpecialChar(event)"/>
      	<div id="showprelocationf"></div>
      	<div style="width:70%;margin:auto;text-align:center;margin-top: 2%;" >
      	<button id="CancelEventbdfg" class="CancelEventb bg-color margin-rl1 btn-head" onclick="javascript:cancellocation();" >Cancel</button>
      	<button id="AddEvent" class="bg-color margin-rl1 btn-head AddEventfromBP"  onclick="javascript:addNewLocationfrom();">Add Location</button></div>
      </div>
       <div class="addShipToPop">
      	<h3 style="text-align:center;width:94%;float:left;padding-top:3%;">Add Shipment To</h3><span class="closeevent" style="width: 2.7%;height: 50px;float: left;padding: 1% 3% 1% 0%;cursor:pointer;">X</span><span style="clear:both;"></span>
      	<input type="text" class="invalidText1" name="shipTo" id="shipFrom"  placeholder="Enter City Name" style="margin-top: 1rem; text-align: center;width: 60%;padding-top: 2%;margin:4% 20% 1% 20%;height: 30px; padding-top: 2px; font-size: 12px; padding-bottom: 2px;font-weight: 600; border-radius: 4px; border: 1px solid #ced4da;" onkeypress="return blockSpecialChar(event)"/>
      	<div class="showprelocationt"></div>
      	<div style="width:70%;margin:auto;text-align:center;margin-top: 2%;" ><button id="CancelEventbdfc" class=" CancelEventb bg-color margin-rl1 btn-head"  >Cancel</button>
      	<button id="AddEvent" class="bg-color margin-rl1 btn-head"  onclick="javascript:addShipToNew();">Add Ship To</button></div>
      </div>
 <div class="body_blur5"></div>
 <!-- <script type="text/javascript">
new SlimSelect({
	  select: '#listBusinessPartner'
	})
new SlimSelect({
	  select: '#partnerType'
	})
new SlimSelect({
	  select: '#partnerLocation'
	})
new SlimSelect({
	  select: '#partnerStatus'
	})
new SlimSelect({
	  select: '#partnerEscal'
	})
new SlimSelect({
   	  select: '#language'
   	})
new SlimSelect({
 	  select: '#timeZone'
 	})
new SlimSelect({
 	  select: '#DateOfDay'
 	})
new SlimSelect({
	  select: '#commMethod'
	})
</script> -->
</body>
</html>