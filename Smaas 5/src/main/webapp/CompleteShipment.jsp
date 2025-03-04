<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "https://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='expires' content='0'>
<meta http-equiv='pragma' content='no-cache'>
<title>SCMXpert Complete Shipment</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<jsp:include page="./View/jsfiles.jsp" />
<script src="./js/completeShipment.js"></script>
   <script src="./js/jszip.min.js"></script>
   <script src="./js/FileSaver.min.js"></script>
   <script src="./js/jszip-utils.min.js"></script>
   <link rel="stylesheet" href="./css/slimselect.min.css"/>
<style>
#successalert{display:none;}
table>thead{color:#fff;}
#previewCompletedEvidence{display:none;}
</style>
</head>
<body oncopy="return false" onpaste="return false">
<div class="bodybackblur"></div>
<img src="./images/loading.gif" id="loadingimg1"/>
      <script src = "https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
<jsp:include page="./View/header.jsp" />

<!-- <div style="clear:both;width:100%;height:20px;"></div> -->
<h2 style="text-align:center;"><img src="./images/Capture_scm_half_logo_1.png" style="width:50px;height:50px;"> Complete Shipment</h2>
<div class="container">
<div class="w-100">
<button class="bg-color btn-head float-right" id="backLink"><i class="fa fa-arrow-left" style="font-size:18px"></i></button></div>

<div class="row">
<div class="col-sm-12 col-md-10 col-lg-10 m-auto text-center">


<div class="row text-center">

<div id="error"></div>
<div class="col-sm-12 col-md-6 col-lg-6 pr-0 p-2  mr-0" >
   <div style="border-radius:3px;padding:2%;background:linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(242, 242, 242, 1) 0%, rgba(228, 228, 228, 1) 100%, rgba(255, 255, 255, 1) 100%);border:1px solid #000;">
		<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Shipment Id :</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" placeholder="Shipment Id" id="shipment_id" style="height:25px;font-size: 12px;font-weight:bold;" disabled="disabled"/></span></div>
		<!-- <div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Shipment Number :</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" placeholder="Shipment Number" id="shipment_number" style="height:25px;font-size: 12px;font-weight:bold;" disabled="disabled"/></span></div> -->
		<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Delivery Number :</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" placeholder="Delivery Number" id="shipment_number" style="height:25px;font-size: 12px;font-weight:bold;" disabled="disabled"/></span></div>
		<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Type of Reference :</span><span class="float-left" style="width:45%;"><input type="text" class="form-control"  style="height:25px;font-size: 11px;font-weight:bold;padding-top:2px;" id="typeOfReferenceshide" disabled="disabled"/></span></div>
		</div>
		</div>
		
		<div class="col-sm-12 col-md-6 col-lg-6 p-2 ml-0" >
		<div style="border-radius:3px;padding:4%;background:linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(242, 242, 242, 1) 0%, rgba(228, 228, 228, 1) 100%, rgba(255, 255, 255, 1) 100%);border:1px solid #000;">
		<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Connected Device :</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" placeholder="Connected Device" id="connected_device" style="height:25px;font-size: 12px;font-weight:bold;" disabled="disabled"/></span></div>
    <div style="width: 100%;height: 63px;font-size:12px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="width:150px;line-height: 15px;">Shipment Description :</span><span class="float-left" style="width:45%;"><textarea class="form-control comments" id="comments" placeholder="Enter Your Description"  style="height:70px;font-size: 12px;font-weight:bold;padding-top:1px;" disabled="disabled"></textarea></span></div>
		</div>
			</div>
</div></div>
<div class="col-sm-12 col-md-12 col-lg-12 m-auto" style="padding: 0px 9px;">
	<div class="col-sm-12 col-md-12 col-lg-12 p-0 text-center m-auto">
	<div class="" style="padding:1%;border-radius:3px;width:84%;margin: 0% 8%;height:245px;border:1px solid #000;">
		<div style="height:35px;width:100%;padding-bottom:1%;">
		<table class="" id="inboxesvaluesshowhead" style="background: #894151e3;margin-bottom: 5px;z-index:5;">
				<thead style="font-size:13px;">
					<tr>
						<th style="padding: 5px 10px;"></th>
						<th style="padding: 5px 20px;">Event Id</th>
						<th style="padding: 5px 74px;">Event</th>
						<th style="padding: 5px 15px;">Partner Id</th>
						<th style="padding: 5px 45px;">Partner Name</th>
						<th style="padding: 5px 35px;">Date</th>
						<th style="padding: 5px 19px;">Event Status</th>
						<th style="padding: 5px 5px;">Documents</th>
					</tr>
				</thead>
				<tbody style="display: none;"></tbody>
			</table>
			</div>
		
			<div style="height:190px;width:101%;overflow-y:auto;">
		   <table class="" id="inboxesvalues" style="margin-top:1px;">
				<thead>
					<tr style="display: none;">
						<th></th>
						<th>Event Id</th>
						<th>Partner</th>
						<th>Event</th>
						<th>Date</th>
						<th>Status</th>
						<th>Documents</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
			</div>
				
		</div>
			</div></div>
			
	<div class="col-sm-12 col-md-12 col-lg-12 mt-3" >
	<div class="col-sm-12 col-md-6 col-lg-6 text-center float-left p-0">
	<!-- <div id="error"></div> -->
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Event Id :</span><span class="float-left" style="width:35%;"><input type="text" class="form-control" placeholder="Event Id" style="height:25px;font-size: 12px;font-weight:bold;" disabled="disabled" id="event_id_val"/></span></div>
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Event :</span><span class="float-left" style="width:35%;"><input type="text" class="form-control" placeholder="Event Type " style="height:25px;font-size: 12px;font-weight:bold;" disabled="disabled" id="event_type_val" /></span></div>
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Partner :</span><span class="float-left" style="width:35%;"><input type="text" class="form-control" placeholder="Partner Name" style="height:25px;font-size: 12px;font-weight:bold;padding-top: 2px;" id="event_partner_from" disabled="disabled"/></span></div>
	<!--<option value="">Select Location</option>  --><div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Receiving Location :</span><span class="float-left" style="width:35%;"><select class="form-control" style="height:25px;font-size: 12px;font-weight:bold;padding-top:2px;" id="routes"></select></span></div>
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Upload Evidence :</span><span class="float-left" style="width:35%;"><input type="file" id="EvidenceUploadFile" name="evidence[]" multiple class="form-control" style="height:30px;font-size: 12px;font-weight:bold;padding-top: 3px;position:absolute;opacity:0;width:35%;" disabled="disabled"/><button class="form-control btn-outline-secondary font-bold" id="uplodimageslist" style="font-weight: bold;line-height: 10px;">Upload Evidence</button></span></div>
	</div>
	
	<div class="col-sm-12 col-md-6 col-lg-6 text-center float-left p-0">
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Receiving Reference :</span><span class="float-left" style="width:35%;"><input type="text" class="form-control" placeholder="Event Reference" style="height:25px;font-size: 12px;font-weight:bold;" id="event_reference"/></span></div>
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Type of Reference :</span><span class="float-left" style="width:35%;"><select class="form-control" style="height:25px;font-size: 11px;font-weight:bold;padding-top:2px;" id="typeOfReferences1"><option value="">Select Type Reference</option></select></span></div>
	<div style="width: 100%;height: 60px;font-size:12px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Receiving Description :</span><span class="float-left" style="width:35%;"><textarea class="form-control" placeholder="Receiving Description" style="height:55px;font-size: 12px;font-weight:bold;padding-top:2px;" id="event_description" name="comments[]"></textarea></span></div>
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 15px;">Device Return Location :</span><span class="float-left" style="width:35%;"><select type="text" class="form-control" style="height:25px;font-size: 12px;font-weight:bold;padding-top:2px;" id="return_location"><!-- <option value="">Select Location</option><option value="Device Release">Device Release</option> --></select></span></div>
	</div></div>
	
	<div class="col-sm-12 col-md-10 col-lg-10 m-auto text-center float-left p-0">
	<div class="totalimageview" id="totalimageview" style="overflow-y:auto;min-height: 1px; max-height: 350px;">
	<div class="gallery" id="gallery"></div></div></div>

	<div class="col-sm-12 col-md-12 col-lg-12 text-center m-3">
	<div>

			<button class="bg-color btn btn-color" style="color:#fff;font-weight:bold;min-height: 20px;padding: 4px 20px;font-size: 11px;margin: 0px;" id="cancel_receipt" onclick="javascript:CancelReceipt();">Cancel</button>
			<!-- <button class="bg-color btn btn-color" style="color:#fff;font-weight:bold;min-height: 20px;padding: 4px 8px;font-size: 11px;margin: 0px;" id="reset" onclick="javascript:reset();">Reset</button> -->
			<button class="bg-color btn btn-color" style="color:#fff;font-weight:bold;min-height: 20px;padding: 4px 8px;font-size: 11px;margin: 0px;" id="completeShipment" onclick="javascript:CompleteShipment();">Complete Shipment</button>
			
		</div>
		<div class="alert alert-success" id="successalert"> Event Update <strong>Successfully!</strong> <a href="Dashboard.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">Move to Dashboard</a>.</div>
	</div>
	
</div></div>
<!-- <div id="chartContainer" style="height: 450px; width: 100%;" class="live_charts"></div>
<button id="exportChart">Export Chart</button>
<button onclick="javascript:return completeShipmentimage();">complete</button> -->

<div id="chartContainer" style="height: 450px; width: 100%;display:none;"></div>
<div id="imageContainer" style="display:none;">
  <img id="chartImage" width="100%" height="450px">
</div>


<div class="showviewdata"></div>
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
      	<input type="text" name="eventId" id="eventId"  placeholder="Enter Event Id Like E0011" style="margin-top: 1rem; text-align: center;width: 60%;padding-top: 2%;margin: 0% 20%;height: 25px; padding-top: 2px; font-size: 12px; padding-bottom: 2px;font-weight: 600; border-radius: 4px; border: 1px solid #ced4da; margin-bottom: 4px;" />
      	<select class="form-control" id="selectvalues" style="margin-top:1rem;text-align: center;width: 60%;padding-top: 2%;margin: auto;height: 25px;padding-top: 2px;font-size: 12px;padding-bottom: 2px;font-weight: 600;" onchange="javascript:selectBpName(this.value);"><option>Select Partner</option></select>
      	<div style="width:100%;height:4px;"></div>
      	<select class="form-control" id="eventslist" style="margin-top:1rem;text-align: center;width: 60%;padding-top: 2%;margin: auto;height: 25px;padding-top: 2px;font-size: 12px;padding-bottom: 2px;font-weight: 600;"><option value="">Select Event</option></select>
      	<button id="CancelEvent" class="btn-color" style="height:25px;font-size:12px;font-weight:600;margin: 2% 20%;border-radius:5px;border:1px solid #17a2b8;" >Cancel Event</button>
      	<button id="AddEvent" class="btn-color" style="height:25px;font-size:12px;font-weight:600;margin: 2% 0%;border-radius:5px;border:1px solid #17a2b8;" onclick="javascript:addEvent();">Add Event</button>
      	
      </div>
<div class="body_blur"></div>
</body>
</html>