<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "https://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SCMXpert Dashboard</title>
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='expires' content='0'>
<meta http-equiv='pragma' content='no-cache'>
   <jsp:include page="./View/jsfiles.jsp" />
   <script src="./js/jszip.min.js"></script>
   <script src="./js/FileSaver.min.js"></script>
   <script src="./js/jszip-utils.min.js"></script>
   <script src="./js/UpdateShipmentEvent.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
   <link rel="stylesheet" href="./css/slimselect.min.css"/>
   <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.8/css/select2.min.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.8/js/select2.min.js"></script>
<style>

@media only screen and (min-width: 600px) {
  /* For mobile phones: */
  .row-padding{padding:0% 17%;}
/*   [class*="col-"] {
    width: 100%;
  } */
}
btn btn-light dropdown-toggle{
 background:brown;
}
.delivered_shipments{display:none;}
@keyframes blink {
       0% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
       50% {
            -webkit-transform: scale(1.5);
            transform: scale(1.5);
        }
        100% {
          -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
 .alaram {
        transition: .3s ease-in;
        animation: blink 1s;
        animation-iteration-count: infinite;
    }
 #tablelist_data>tbody>tr{transition: transform .2s;postion:relative; /* Animation */}
 #tablelist_data>tbody>tr:hover{ transform: scale(1.3);background:blue;color:#fff;box-shadow: -5px 3px 30px #000;}
.live_shipments_list{transition: transform .2s;/* Animation */}
.live_shipments_list:hover{transform: scale(1.04);box-shadow: -5px 3px 30px #000;z-index: 1;position: relative;}
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
footer{width:100%;height:50px;}
#scanboxview{display:none;}
.bodyblur{width:100%;height:100%;background:#000000e0;position:absolute;z-index:1;display:none;}
.bodyblur1{width:100%;height:100%;background:#000000e0;position:absolute;z-index:1;display:none;}
#locationboxview{display:none;background:#fff;border:1px solid #000;top:1px;}
.body_blur{width:100%;height:100%;overflow:hidden;position:fixed;top:0px;z-index:1;background:#00000069;display:none;}
.AddEventBlock{width:30%;min-height:200px;background:#fff;border-radius:5px;top:17rem;position:fixed;z-index:2;margin:0% 35%;display:none;}
.AddButtonIcon{cursor:pointer;}
#uploadevidencedata>thead>tr>th{
padding:5px;
text-align:center;
}
.container .btn-holder {
  justify-content: flex-end;
  display: flex;
}
#successalert{display:none;}
#showpopupImages{display:none;}
table>thead{color:#fff;}
table>thead>tr>th{padding: 5px;}
</style>
<script>
function blockSpecialChar(e){
	var k;
	document.all ? k = e.keyCode : k = e.which;
	return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
	}
</script>
<script>
$(document).ready(function(){
	$('#devices').change(function(){
	 if($(this).val() == "other")
	 {
	  $('#fixture-use-txt').show();
		//  $("#devices").val();

	 }
	 else
	 {
	 $('#fixture-use-txt').hide();
	 
	 }

	})

	})
</script>
<script>
$(document).ready(function () {

	// Initialize select2
	$("#devices").select2({
	    templateSelection: function(selectedOption) {
	        return selectedOption.text.split(" ")[0];
	    }
	});

	// Read selected option
	$('#fixture-use-txt').click(function () {
		var colorName = $('#devices option:selected').text();
		var colorHexaCode = $('#devices').val();
	});
});
</script>
</head>
<body oncopy="return false" onpaste="return false">
<jsp:include page="./View/header.jsp" />

<h2 style="text-align:center;margin:0px;"><img src="./images/Capture_scm_half_logo_1.png" style="width:50px;height:50px;"> Update Event Shipment</h2>
 <div class="body_blur"></div>
<div class="container">
<div class="w-100">
<button class="bg-color btn-head float-right" id="backLink"><i class="fa fa-arrow-left" style="font-size:18px"></i></button></div>
<div class="row">
<div class="col-sm-12 col-md-10 col-lg-10 m-auto text-center">

<div class="row text-center">

<div class="buttondivfor deleteevidence" style="display:none">
<button type="button" id="BtnDeleteEvidence" onclick="myFunction()">Delete Evidence</button>
</div>

<div id="error"></div>
	<div class="col-sm-12 col-md-6 col-lg-6 pr-0 p-2  mr-0" >
	<div style="border-radius:3px;padding:3% 5px;background:linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(242, 242, 242, 1) 0%, rgba(228, 228, 228, 1) 100%, rgba(255, 255, 255, 1) 100%);border:1px solid #000;">
		<div class="formfieldslist"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Shipment Id</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" placeholder="Shipment Id" id="shipment_id" style="height:25px;font-size: 12px;font-weight:bold;" disabled="disabled"/></span></div>
		<div class="formfieldslist"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Delivery Number</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" placeholder="Delivery Number" id="shipment_number" style="height:25px;font-size: 12px;font-weight:bold;" disabled="disabled"/></span></div>
		<div class="formfieldslist"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Invoice Number</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" placeholder="Invoice Number" id="delivery_num" style="height:25px;font-size: 12px;font-weight:bold;" disabled="disabled"/></span></div>
		<div class="formfieldslist"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Connected Device</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" placeholder="Connected Device" id="connected_device" style="height:25px;font-size: 12px;font-weight:bold;" disabled="disabled"/></span></div>
		<div class="formfieldslist"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Plant</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" placeholder="Plant" id="fromPlant" style="height:25px;font-size: 12px;font-weight:bold;" disabled="disabled"/></span></div>
		</div>
	</div>
	<div class="col-sm-12 col-md-6 col-lg-6 p-2 ml-0" >
	<div style="border-radius:3px;padding:3%;background:linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(242, 242, 242, 1) 0%, rgba(228, 228, 228, 1) 100%, rgba(255, 255, 255, 1) 100%);border:1px solid #000;">
		
		<!-- <div class="formfieldslist"><span class="w-47 p-1 pl-5 font-weight-bold float-left  text-left" style="text-indent: 12%;">Type of Reference</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:45%;"><input type="text" class="form-control"  style="height:25px;font-size: 11px;font-weight:bold;padding-top:2px;" id="typeOfReferences" disabled="disabled"/></span></div> -->
		<div class="formfieldslist"><span class="w-47 p-1 pl-5 font-weight-bold float-left  text-left" style="text-indent: 8%;">Type of Evidence</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:45%;"><input type="text" class="form-control"  style="height:25px;font-size: 11px;font-weight:bold;padding-top:2px;" id="typeOfReferences" disabled="disabled"/></span></div>
		<div class="formfieldslist"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 8%;">Batch Id</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" placeholder="Batch Id" id="batch_id" style="height:25px;font-size: 12px;font-weight:bold;" disabled="disabled"/></span></div>
		<div class="formfieldslist"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 8%;">Mode</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" placeholder="Mode" id="mode_trans" style="height:25px;font-size: 12px;font-weight:bold;" disabled="disabled"/></span></div>
		<div style="width: 100%;height: 80px;font-size:12px;"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 8%;">Shipment Description</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:45%;"><textarea class="form-control comments" id="comments" placeholder="Enter Your Description"  style="height:70px;font-size: 12px;font-weight:bold;padding-top:1px;" disabled="disabled"></textarea></span></div>
	
		</div>
	</div>
</div></div>

<div class="col-sm-12 col-md-10 col-lg-10 m-auto " style="padding:0px 9px;"><button class="bg-color btn-head float-right" style="height:25px;" onclick="javascript:dialogboxAddEvent();"><i class="fa fa-plus-circle"></i> Add Event</button></div>
<div class="col-sm-12 col-md-12 col-lg-12 m-auto" style="padding: 0px 9px;">
	<div class="col-sm-12 col-md-12 col-lg-12 p-0 text-center m-auto">
		<div class="" style="padding:1%;border-radius:3px;width:84%;margin: 0% 8%;min-height:1px;border:1px solid #000;">
		<div style="width:101%;">
		<table class="" id="inboxesvaluesshowhead" style="background: #894151e3;z-index:5;">
				<thead style="font-size:14px;">
					<tr>
						<th style="padding: 5px 10px;"></th>
						<th style="padding: 5px 11px;">Event Id</th>
						<th style="padding: 5px 74px;">Event</th>
						<th style="padding: 5px 15px;">Partner Id</th>
						<th style="padding: 5px 45px;">Partner Name</th>
						<th style="padding: 5px 35px;">Date</th>
						<th style="padding: 5px 15px;">Event Status</th>
						<th style="padding: 5px 5px;">Documents</th>
					</tr>
				</thead>
				<tbody style="display: none;"></tbody>
			</table>
			</div>
			<div style="min-height:0px;max-height:190px;width:101%;overflow-y:auto;">
		<table class="" id="inboxesvalues" style="margin-top:0.5%;">
				<thead>
					<tr>
						<th></th>
						<th>Event Id</th>
						<th>Event</th>
						<th>Partner</th>
						<th>Date</th>
						<th>Event Status</th>
						<th>Documents</th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
		
		</div>
			<!-- <button id="convert-table">Convert</button> -->
			<!-- <div class="w-100"><span class="" style="background:#ccd0d4;width:100%;height:27px;float:right;"><img src="./images/below.png" id="btnSubmit" style="width:23px;margin-left: 7%;margin-top: 3px;"><img src="./images/plus-filled.png" style="width:21px;margin-right:2%;float:right;margin-top: 3px;" onclick="javascript:dialogboxAddEvent();" class="AddButtonIcon"></span><span style="clear:both;"></span></div> -->
			
		</div>
			
		
	</div></div>
	<div class="col-sm-12 col-md-12 col-lg-12 mt-3" onkeypress="return blockSpecialChar(event)">
	<!-- <div class="col-sm-12 col-md-1 col-lg-1 text-center float-left"></div> -->
	<div class="col-sm-12 col-md-6 col-lg-6 text-center float-left p-0">
	<div class="formfieldslist"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Event Id</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><input type="text" class="form-control" placeholder="Event Id" style="height:30px;font-size: 12px;font-weight:bold;" disabled="disabled" id="event_id_val"/></span></div>
	<div class="formfieldslist"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Event</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><input type="text" placeholder="Event Type" disabled="disabled" id="event_type_val" class="form-control" style="height:30px;font-size: 12px;font-weight:bold;"/></span></div>
	<div class="formfieldslist"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Partner</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><input type="text" placeholder="Partner From"  id="event_partner_from" disabled="disabled" class="form-control" style="height:30px;font-size: 12px;font-weight:bold;padding-top: 3px;"/></span></div>
	<div class="formfieldslist"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Event Reference</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><input type="text" class="form-control" id="event_reference" placeholder="Event Reference" style="height:30px;font-size: 12px;font-weight:bold;"/></span></div>
	<div style="width: 100%;height: 60px;font-size: 12px;"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Event Description</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><textarea class="form-control" placeholder="Enter Description" id="event_description" style="height:55px;font-size: 12px;font-weight:bold;padding-top:2px;"></textarea></span></div>
	<!-- <div class="formfieldslist"><span class="w-47 p-1 pl-4 font-weight-bold float-left text-left lineHeight24">Device</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><select class="form-control select" name="devices" id="devices" style="height:30px;padding-bottom:3px;font-size: 12px;padding-top: 3px;"><option value="">Select Device</option></select></span><span class="" style="margin-top: 10px;line-height: 25px;margin-left: 3px;"><span class="bg-primary" style="padding: 3px 4px;border-radius: 3px"><img src="./images/bar-code.png" style="width:18px;height:18px;margin:1px;"/></span></span></div> -->
	
	</div>
	
	<div class="col-sm-12 col-md-5 col-lg-5 text-center float-left p-0">
	<!-- <div class="formfieldslist"><span class="w-47 p-1 pl-4 font-weight-bold float-left text-left lineHeight24" style="text-indent: 30%;">Device</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><select class="form-control select" name="devices" id="devices" style="height:30px;padding-bottom:3px;font-size: 12px;padding-top: 3px;"><option value="">Select Device</option></select></span><span class="" style="margin-top: 10px;line-height: 25px;margin-left: 3px;"><span class="bg-primary" style="padding: 3px 4px;border-radius: 3px"><img src="./images/bar-code.png" style="width:18px;height:18px;margin:1px;"/></span></span></div> -->
	<div class="formfieldslist"><span class="w-47 p-1 pl-4 font-weight-bold float-left text-left lineHeight24" style="text-indent: 30%;">Device</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><select class="form-control select" name="devices" id="devices" style="height:30px;padding-bottom:3px;font-size: 12px;padding-top: 3px;"></select><input type="text" id="fixture-use-txt" class="form-control select" name="devices" style="display:inline;display:none;" placeholder="Enter other Device"></span><span class="" style="margin-top: 10px;line-height: 25px;margin-left: 3px;"><span class="bg-primary" style="padding: 3px 4px;border-radius: 3px"><img src="./images/bar-code.png" style="width:18px;height:18px;margin:1px;"/></span></span></div>
	<div class="formfieldslist"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 20%;">Type of Evidence</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><select class="form-control"  style="height:30px;font-size: 11px;font-weight:bold;padding-top:2px;" id="typeOfReferences1"><option value=''>Select Type of Evidence</option></select></span></div>
	<div class="formfieldslist"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 20%;">Evidence For</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><select class="form-control"  style="height:30px;font-size: 11px;font-weight:bold;padding-top:2px;" id="evidencefor"><option value=''>Select Evidence For</option></select></span></div>
	<!-- <div style="width: 100%;height: 60px;font-size: 12px;"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 20%;">Event Description</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><textarea class="form-control" placeholder="Enter Description" id="event_description" style="height:55px;font-size: 12px;font-weight:bold;padding-top:2px;"></textarea></span></div> -->
	<!-- <div style="width: 100%;height: 60px;font-size: 12px;"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 18%;">Evidence Description</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><textarea class="form-control" placeholder="Enter Description" disabled="disabled" id="evidence_description" style="height:55px;font-size: 12px;font-weight:bold;padding-top:2px;"></textarea></span></div> -->
	<div style="width: 100%;height: 60px;font-size: 12px;"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 18%;">Evidence Description</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><textarea class="form-control" name="evidencedesc[]" placeholder="Enter Description" id="evidence_description" style="height:55px;font-size: 12px;font-weight:bold;padding-top:2px;"></textarea></span></div>
	<!-- <div class="formfieldslist"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 20%;">Upload Evidence</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><input type="file" id="EvidenceUploadFile" name="evidence[]" multiple class="form-control" style="height:30px;font-size: 12px;font-weight:bold;padding-top: 3px;position:absolute;opacity:0;width:40%;" disabled="disabled"/><button class="form-control btn-outline-secondary font-bold" id="uplodimageslist" style="font-weight: bold;line-height: 10px;">Upload Evidence</button></span></div> -->
	
	
		<div class="formfieldslist">
<!--  	  <label class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 20%;" for="myfile">Upload Evidence</label>
      <label class="float-left spaceTextAlign">:</label>
         <span class="float-left" style="width:40%;">
            <input type="file" id="EvidenceUploadFiles3" name="myfile"   style="height:60px;font-size: 12px;font-weight:bold;padding-top: 3px;position:absolute;width:40%;"><br><br>
            <input type="submit" id="test" class="bg-color margin-rl1 btn-head">
         </span>  -->
         
       <span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 20%;">Upload Evidence</span>
      <span class="float-left spaceTextAlign">:</span>
      <span class="float-left" style="width:40%;">
<!--       <input type="file" id="EvidenceUploadFile" name="evidence[]" multiple class="form-control" style="height:30px;font-size: 12px;font-weight:bold;padding-top: 3px;position:absolute;opacity:0;width:40%;" disabled="disabled"/>
      <button class="form-control btn-outline-secondary font-bold" id="uplodimageslist" style="font-weight: bold;line-height: 10px;">Upload Evidence</button> -->
      <div class="btn-holder">
      <input type="file" id="file-input" multiple /><br>
      <!-- <div class="btn-holder"> -->
      <button id="submit-button" class="bg-color margin-rl1 btn-head" style="position: absolute; margin-right: -85px;">Upload</button>
      </div>
      </span> 
      
      
      
  </div>
	
	</div>
	
	
	
	</div>
	

	<div class="col-sm-12 col-md-10 col-lg-10 m-auto text-center float-left p-0">
	<div class="totalimageview" id="totalimageview" style="overflow-y:auto;min-height: 1px; max-height: 350px;">
	</div></div>
	
	<div class="col-sm-12 col-md-12 col-lg-12 mt-3 p-0" style="overflow-x:auto;height:300px;margin-bottom:15px;" >
   <table class="table table-striped table-bordered p-0" style="margin: auto;overflow-x:auto;width: 100%;" id="uploadevidencedata">
    <thead class="bg-color tableHeadershown" style="color:#fff; font-size:12px;">
        <tr>
            <th>&nbsp;</th>
            <th>Doc Id</th>
            <th>Shipment Id</th>
            <th>Date Created</th>
            <th>Type of Evidence</th>
            <th>Evidence For</th>
            <th>Description</th>
            <th>Invoice</th>
            <th>Delivery</th>
            <th>Material</th>
            <th>Batch</th>
            <!-- <th width="30%">Event Description</th> -->
            <th>File Name</th>
            <!--   <th width="30%">URL</th> -->
            <th>Delete</th>
        </tr>
    </thead>
    <tbody id="tabledata"></tbody>
 </table>
</div>
	
	
	<div class="col-sm-12 col-md-12 col-lg-12 text-center m-2">
	
	<div>
			<!-- <button class="btn btn-color m-1">Select Draft</button> -->
	<!-- 		<button class="btn btn-color m-1">Save as Draft</button>
			<button class="btn btn-color m-1">Add Tag Info</button> -->
		
			<button class="bg-color margin-rl1 btn-head" id="delete_event" title="Move to Dashboard" onclick="javascript:return Dashboard();">Cancel Event</button></a>
			<button class="bg-color margin-rl1 btn-head" id="reseta" onclick="javascript:reset();">Reset</button>
			<button class="bg-color margin-rl1 btn-head" id="updateEvent">Update Event</button>
			
		</div>
		<br>
		<div class="alert alert-success" id="successalert"> Event Update <strong>Successfully!</strong> <a href="Dashboard.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">Move to Dashboard</a>.</div>
		
	</div>
	
</div></div>
<div id="showpopupImages">

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <div class="closePreview" onclick="javascript:closePreview();">X</div>
  <div class="carousel-inner">
  </div>
  
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<div id="previewCompletedEvidence">
<div class="closeEvidence float-right mt-4 mr-4" style="cursor:pointer">X</div> 
<button id="downloadImages" class="btn btn-info mt-3 mr-5 mb-1 float-right">Download Evidence</button>
<div id="belowShowCompletedPreviceImages">
</div>
</div></div>
     
      <div class="AddEventBlock">
       	<h3 style="text-align:center;width:94%;float:left;padding-top:2%;">Add Partner Event</h3><span class="close" style="width: 2.7%;height: 25px;float: left;padding: 1% 3% 1% 0%;">X</span><span style="clear:both;"></span>
      	<div id="EventError"></div>
      	<input type="text" name="eventId" id="eventId"  placeholder="Enter Event Id Like E0011" style="margin-top: 1rem; text-align: center;width: 60%;padding-top: 2%;margin: 0% 20%;height: 30px; padding-top: 2px; font-size: 12px; padding-bottom: 2px;font-weight: 600; border-radius: 4px; border: 1px solid #ced4da; margin-bottom: 4px;" />
      	<select class="form-control" id="selectvalues" style="margin-top:1rem;text-align: center;width: 60%;padding-top: 2%;margin: auto;height: 25px;padding-top: 2px;font-size: 12px;padding-bottom: 2px;font-weight: 600;" onchange="javascript:selectBpName(this.value);"><option value="">Select Partner</option></select>
      	<div style="width:100%;min-height:5px;text-align: center;" id="partnerName"></div>
      	<!-- <select class="form-control" id="mode" style="text-align: center;width: 60%;padding-top: 2%;margin: auto;height: 25px;padding-top: 2px;font-size: 12px;padding-bottom: 2px;font-weight: 600;margin-top:1%;margin-bottom:1%;"><option value="">Select Mode</option><option value="Road">Road</option><option value="Train">Train</option><option value="Water">Water</option><option value="Air">Air</option></select> -->
      	<select class="form-control" id="eventslist" style="margin-top:1rem;text-align: center;width: 60%;padding-top: 2%;margin: auto;height: 25px;padding-top: 2px;font-size: 12px;padding-bottom: 2px;font-weight: 600;"><option value="">Select Event</option></select>
      	<button id="CancelEvent" class="bg-color margin-rl1 btn-head" style="height:25px;font-size:12px;font-weight:600;margin: 2% 19%;border-radius:5px;" >Cancel Event</button>
      	<button id="AddEvent" class="bg-color margin-rl1 btn-head" style="height:25px;font-size:12px;font-weight:600;margin: 2% 0%;border-radius:5px;" onclick="javascript:addEventupdate();">Add Event</button>
      	
      	
      </div>
<div id="showPopupCompleteshipment"></div>
<!-- <script type="text/javascript">
new SlimSelect({
	  select: '#selectvalues'
	})
new SlimSelect({
	  select: '#eventslist'
	})
new SlimSelect({
	  select: '#typeOfReferences1'
	})
</script> -->
</body>
</html>