<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "https://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>SCMXpert/AlertMaster</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='expires' content='0'>
<meta http-equiv='pragma' content='no-cache'>

<jsp:include page="./View/jsfiles.jsp" />
<script src="./js/AlertMaster.js"></script>

<link rel="stylesheet" href="./css/slimselect.min.css"/>
<title></title>
</head>
<body oncopy="return false" onpaste="return false">
<jsp:include page="./View/header.jsp" />

<script>
$(function() {

	if($("#listAlertid").val() == 'New') {
        document.getElementById('updateEvent').style.visibility = 'hidden';
    } else {
        document.getElementById('updateEvent').style.visibility = 'visible';
    } 
});

</script>
<h2 style="text-align:center;margin:0px;"><img src="./images/Capture_scm_half_logo_1.png" style="width:50px;height:50px;">Alert Master</h2>
<div class="col-sm-12 col-md-12 col-lg-12" style="padding-right:17%;height: 30px;"><button class="bg-color btn-head float-right" id="backLink"><i class="fa fa-arrow-left" style="font-size:18px"></i></button></div>
<div class="container">
<div class="hidden"></div>
<div class="col-sm-12 col-md-12 col-lg-12 p-2 m-auto" >
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
</div>
</div>
<div style="clear:both"></div>
<div class="container">


<button style="line-height: 20px; min-width: 85px;float:right;" class="bg-color margin-rl1 btn-head" onclick="javascript:DownloadAlertMasterList();">Download List</button>
<button style="line-height: 20px; min-width:85px;float:right;" class="bg-color margin-rl1 btn-head" id="delete_event" onclick="javascript:ShowAlertMasterList();"><i class="fa fa-list" aria-hidden="true"></i>&nbsp;&nbsp; AlertMaster List</button>
 <div style="clear:both"></div>
 <div class="row" style="margin: 1%;">
 
 <div class="col-sm-12 col-md-12 col-lg-12" id="error"></div>
 <div id="newCustomerNotshow"></div>
  		<div class="col-sm-12 col-lg-6 col-md-6 ">
        <div style="clear:both"></div>
        
        <div class="formfieldslist">
	<span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Alert Id :</span>
	<span class="float-left" style="width:45%;">
	<select class="form-control" placeholder="Event Id" style="font-size: 12px;font-weight:bold;padding: 0px;padding-left: 0.5rem;" id="listAlertid" onChange="javascript:getAlertMasterAllDetails(this.value);">
	<option value="">New</option>
	</select></span>
	<input type="hidden" value="" id="alert_id_new"/></div>
	
	<div class="formfieldslist">
	<span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Alert Name :</span>
	<span class="float-left" style="width:45%;">
	<input type="text" placeholder="Enter Alert Name" id="AlertName" class="form-control" style="font-size: 12px;font-weight:bold;"/>
	</span></div>
	
	<div class="formfieldslist">
	<span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Alert Type :</span>
	<span class="float-left" style="width:45%;">
	<select class="form-control" placeholder="Event Id" style="font-size: 12px;font-weight:bold;padding: 0px;padding-left: 0.5rem;" id="listAlertType">
	<option value="">Select option</option>
	<option value="GeoFence">GeoFence</option>
	<option value="Event Alert">Event</option>
	
	</select></span></div>
	
	<div class="formfieldslist">
	<span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Alert Priority :</span>
	<span class="float-left" style="width:45%;">
	<select class="form-control" placeholder="Event Id" style="font-size: 12px;font-weight:bold;padding: 0px;padding-left: 0.5rem;" id="listAlertpriority">
	<option value="">Select option</option>
	<option value="Information">Information</option>
	<option value="Warning">Warning</option>
	</select></span></div>
	
	<div class="formfieldslist">
	<span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Alert Mode :</span>
	<span class="float-left" style="width:45%;">
	<select class="form-control" placeholder="Event Id" style="font-size: 12px;font-weight:bold;padding: 0px;padding-left: 0.5rem;" id="listAlertmode">
	<option value="Email">Email</option>
	<option value="SMS">SMS</option>
	<option value="Phone">Phone</option>
	<option value="EDI">EDI</option>
	</select></span></div>
	
	<div class="formfieldslist">
	<span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Email Address :</span>
	<span class="float-left" style="width:45%;">
	<input type="text" placeholder="Enter Email Address" id="email" class="form-control" style="font-size: 12px;font-weight:bold;"/>
	</span></div>
	
	<div class="formfieldslist">
	<span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Email Subject :</span>
	<span class="float-left" style="width:45%;">
	<input type="text" placeholder="" id="Emailsub" class="form-control" style="font-size: 12px;font-weight:bold;"/>
	</span></div>
	
	<div class="formfieldslist" style="height:65px">
	<span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Email Message :</span>
	<span class="float-left" style="width:45%;">
	<textarea placeholder="Enter message" id="EmailMess" class="form-control" style="font-size:12px;font-weight:bold;"></textarea>
	</span></div>
	
	
	<div class="formfieldslist" style="height:40px">
	<span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Support Center :</span>
	<span class="float-left" style="width:45%;">
	<select class="form-control" placeholder="Event Id" style="font-size: 12px;font-weight:bold;padding:0px;padding-left: 0.5rem;" id="listsupportcenter" onclick="javascript:return selectCountryList(this.value);">
	<option value="">Select option</option>
	</select></span></div>
	
	<div class="formfieldslist">
	<span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">SMS Phone :</span>
	<span class="float-left" style="width:45%;">
	<input type="text" placeholder="Enter Mobile Number " id="smsphone" class="form-control" style="font-size: 12px;font-weight:bold;"/>
	</span></div>
	
	<div class="formfieldslist" style="height:65px">
	<span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">SMS Message :</span>
	<span class="float-left" style="width:45%;">
	<textarea type="text" placeholder="Enter message" id="smsmess" class="form-control" style="font-size: 12px;font-weight:bold;"></textarea>
	</span></div>
	
	<div class="formfieldslist" style="height:40px">
	<span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Voice Phone :</span>
	<span class="float-left" style="width:45%;">
	<select placeholder="" id="voicenum" class="form-control" style="font-size: 12px;font-weight:bold;">
	<option value="">Select option</option>
	<option value="">numm</option>
	</select>
  </span></div>
	
<div class="formfieldslist">
	<span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Chatbot Id :</span>
	<span class="float-left" style="width:45%;">
	<select class="form-control" placeholder="Event Id" style="font-size: 12px;font-weight:bold;padding: 0px;padding-left: 0.5rem;" id="listchatbotid">
	<option value="">Select option</option>
	<option value="Clever Bot">Clever Bot</option>
	<option value="Alert Bar">Alert Bar</option>
	</select></span></div>
	
	
	<div style="clear:both"></div>
	
	
	</div>
	<div class="col-sm-12 col-lg-6 col-md-6 ">
	<div class="formfieldslist">
	<span class="w-25 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Alert Contact :</span>
	<span class="float-left" style="width:45%;">
	<input type="text" placeholder="Name of the Person" id="Alertcont" class="form-control" style="font-size: 12px;font-weight:bold;"/>
	</span></div>
	
	<div class="formfieldslist"><span class="w-25 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Alert Frequency :</span>
	<span class="float-left" style="width:45%;">
	<input type="text" placeholder="Duration" id="Alertfreq" class="form-control" style="height:30px;width:50%;font-size: 12px;font-weight:bold;float:left;"/>
	<select id="days_months" style="width:49%;margin-left:1%;font-size: 12px;font-weight:bold;float:left;height:30px;padding-top:2px;" class="form-control">
	<option value="hours">Select</option>
	<option value="hours">Hours</option>
	<option value="days">Days</option>
	<option value="months">Months</option>
	</select></span></div>
	
	<div class="formfieldslist">
	<span class="w-25 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Alert  Remediation :</span>
	<span class="float-left" style="width:45%;">
	<select class="form-control" placeholder="" style="font-size: 12px;font-weight:bold;padding: 0px;padding-left: 0.5rem;" id="listalertremd">
	<option value="">Select option</option>
	<option value="SPO1">SPO1</option>
	<option value="SPO2">SPO2</option>
	</select></span></div>
	
	<div class="formfieldslist">
	<span class="w-25 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Alert  Escalation :</span>
	<span class="float-left" style="width:45%;">
	<select class="form-control" placeholder="" style="font-size: 12px;font-weight:bold;padding: 0px;padding-left: 0.5rem;" id="listalertescl">
	<option value="">Select option</option>
	<option value="Clever Bot">Clever Bot</option>
	<option value="Alert Bar">Alert Bar</option>
	</select></span></div>
	
	<div class="formfieldslist"><span class="w-25 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Escalation Time :</span>
	<span class="float-left" style="width:45%;">
	<input type="text" placeholder="Duration" id="escltime" class="form-control" style="height:30px;width:50%;font-size: 12px;font-weight:bold;float:left;"/>
	<select id="days_months2" style="width:49%;margin-left:1%;font-size: 12px;font-weight:bold;float:left;height:30px;padding-top:2px;" class="form-control">
	<option value="hours">Select</option>
	<option value="hours">Hours</option>
	<option value="days">Days</option>
	<option value="months">Months</option>
	</select></span></div>
	
	<div class="formfieldslist">
	<span class="w-25 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">EDI Message :</span>
	<span class="float-left" style="width:45%;">
	<select class="form-control" placeholder="" style="font-size: 12px;font-weight:bold;padding: 0px;padding-left: 0.5rem;" id="listedimess">
	<option value="">Select option</option>
	<option value="Advance ship notification">Advance ship notification</option>
	</select></span></div>
	
	<div class="formfieldslist">
	<span class="w-25 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">EDI Reason :</span>
	<span class="float-left" style="width:45%;">
	<select class="form-control" placeholder="" style="font-size: 12px;font-weight:bold;padding: 0px;padding-left: 0.5rem;" id="listedireas">
	<option value="">Select option</option>
	<option value="Delay">Delay</option>
	</select></span></div>
	
	<div class="formfieldslist">
	<span class="w-25 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">EDI Service :</span>
	<span class="float-left" style="width:45%;">
	<select class="form-control" placeholder="" style="font-size: 12px;font-weight:bold;padding: 0px;padding-left: 0.5rem;" id="listediserv">
	<option value="">Select option</option>
	<option value="Mulesoft">Mulesoft</option>
	</select></span></div>
	
	<div class="formfieldslist">
	<span class="w-25 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">WebService :</span>
	<span class="float-left" style="width:45%;">
	<select class="form-control" placeholder="" style="font-size: 12px;font-weight:bold;padding: 0px;padding-left: 0.5rem;" id="listwebserv">
	<option value="">Select option</option>
	<option value="webservice1">webservice1</option>
	</select></span></div>
	
	<div class="formfieldslist">
	<span class="w-25 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">JSON Format :</span>
	<span class="float-left" style="width:45%;">
	<select class="form-control" placeholder="" style="font-size: 12px;font-weight:bold;padding: 0px;padding-left: 0.5rem;" id="listjsonfor">
	<option value="">Select option</option>
	<option value="Rest End Point">Rest End Point</option>
	</select></span></div>
	
	<div class="formfieldslist">
	<span class="w-25 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">JSON Path:</span>
	<span class="float-left" style="width:45%;">
	<input type="text" placeholder="https:\\" id="jsonpath" class="form-control" style="font-size: 12px;font-weight:bold;"/>
	</span></div>
	
	<div class="formfieldslist">
	<span class="w-25 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Partner Service:</span>
	<span class="float-left" style="width:45%;">
	<select class="form-control" placeholder="" style="font-size: 12px;font-weight:bold;padding: 0px;padding-left: 0.5rem;" id="listpartnerserv">
	<option value="">Select option</option>
	<option value="Mulesoft">Mulesoft</option>
	</select></span></div>
	
	<div class="formfieldslist">
	<span class="w-25 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">BlockChain :</span>
	<span class="float-left" style="width:45%;">
	<select class="form-control" placeholder="https:\\" style="font-size: 12px;font-weight:bold;padding: 0px;padding-left: 0.5rem;" id="listbolckchain">
	<option value="">Select option</option>
	<option value="Walmart">Walmart</option>
	</select></span></div>
	
	<div class="formfieldslist">
	<span class="w-25 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Blockchain Key :</span>
	<span class="float-left" style="width:45%;">
	<select class="form-control" placeholder="https:\\" style="font-size: 12px;font-weight:bold;padding: 0px;padding-left: 0.5rem;" id="listblockchainkey">
	<option value="">Select option</option>
	<option value="Key">Key</option>
	</select></span></div>
	</div>
	
	<div class="ShowAlertMasterList"></div>
    
	<div class="col-sm-12 col-md-12 col-lg-12 text-center mb-5">
	<div class="w-75 p-3"></div>
	<div style="margin-top: 25px">
<button style=" width:100px; line-height: 20px" class="bg-color margin-rl1 btn-head" id="delete_event" onclick="javascript:reset();">Cancel</button> 
<button style=" width:120px; line-height: 20px" class="bg-color margin-rl1 btn-head" id="createEvent" onclick="javascript:createAlertMaster();">Create</button>
<button style=" width:120px; line-height: 20px" class="bg-color margin-rl1 btn-head" id=updateEvent onclick="javascript:updateAlertMaster();">Update</button>
</div>
</div>
</div>
	</div>
	<div class="body_blur"></div>
	<!-- <script type="text/javascript">
new SlimSelect({
	  select: '#listAlertid'
	})
new SlimSelect({
	  select: '#listAlertType'
	})
new SlimSelect({
	  select: '#listAlertpriority'
	})
new SlimSelect({
	  select: '#listAlertmode'
	})
new SlimSelect({
	  select: '#listsupportcenter'
	})
new SlimSelect({
	  select: '#voicenum'
	})
new SlimSelect({
	  select: '#listchatbotid'
	})
new SlimSelect({
	  select: '#days_months'
	})
new SlimSelect({
	  select: '#listalertremd'
	})
new SlimSelect({
	  select: '#listalertescl'
	})
new SlimSelect({
	  select: '#days_months2'
	})
new SlimSelect({
	  select: '#listedimess'
	})
new SlimSelect({
	  select: '#listedireas'
	})
new SlimSelect({
	  select: '#listediserv'
	})
new SlimSelect({
	  select: '#listwebserv'
	})
new SlimSelect({
	  select: '#listjsonfor'
	})
new SlimSelect({
	  select: '#listpartnerserv'
	})
new SlimSelect({
	  select: '#listbolckchain'
	})
new SlimSelect({
	  select: '#listblockchainkey'
	})
</script> -->
</body>
</html>