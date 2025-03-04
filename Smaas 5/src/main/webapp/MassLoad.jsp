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
<link rel="stylesheet" href="./css/slimselect.min.css"/>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.13.5/xlsx.full.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.13.5/jszip.js"></script>
<script src="//cdn.rawgit.com/rainabba/jquery-table2excel/1.1.0/dist/jquery.table2excel.min.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.8/css/select2.min.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.8/js/select2.min.js"></script>
<!-- <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/chosen/1.1.0/chosen.min.css">
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/chosen/1.1.0/chosen.jquery.min.js"></script> -->

</head>
<!-- <body oncopy="return false" onpaste="return false"> -->	<!--Used for blocking copy paste-->
<script>
//(function () {
//  var value;
//  console.log("testing");
//  var e=document.getElementById("event_pri_mode1");
//  if (e != null) {
//      value = e.value;
//  }
//  else {
//      value = "";
//  }
//  
//  if(value=="")
//      {
//      document.querySelector('#fileUpload').setAttribute('disabled', true);
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
.hide{
    display: none;
  }
  .hidden-textbox{
  display:inline;
}



  #loading-spinner {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      color: #555;
  }

  #loading-spinner::before {
      content: "";
      width: 16px;
      height: 16px;
      border: 2px solid #ccc;
      border-top: 2px solid #000;
      border-radius: 50%;
      animation: spin 1s linear infinite;
  }

  @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
  }

</style>
<jsp:include page="./View/header.jsp" />
<!-- <div class="col-sm-12 col-md-12 col-lg-12" style="margin: 17px 0px;"><div class="space-route-head"></div><button class="bg-color margin-rl1 btn-head">Customer</button><button class="bg-color margin-rl1 btn-head">Mass Load Page</button><button class="margin-rl1 btn-head btn-head-active">Route</button><button class="bg-color margin-rl1 btn-head" onclick="javascript:GoodsMaster();">Goods Type</button></div> -->
<h2 style="text-align:center;margin:0px;"><img src="./images/Capture_scm_half_logo_1.png" style="width:50px;height:50px;"> Mass Load Dashboard</h2>
<div class="body_blur"></div>
<div class="container">
<div class="row">
<div class="col-sm-12 col-md-12 col-lg-12 text-center">
<div class="row text-center">
<div class="col-sm-12 col-md-12 col-lg-12" style="padding-right:17%;height: 30px;"><button class="bg-color btn-head float-right" id="backLink"><i class="fa fa-arrow-left" style="font-size:18px"></i></button></div>
<div id="error"></div>
</div></div>
          <div class="formfieldslist" style="margin-right:16rem; height: 45px;">
          <span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Upload Options :</span>
          <span class="float-left">
          <select  class="form-control p-0 pl-2 select" placeholder="Event Id" style="height:30px;font-size: 12px;font-weight:bold;" id="event_pri_mode1" onchange="javascript:return getTemplate(this.value);" >
          <option value="">Select option</option>
          <option value="Delivery Number, Invoice Number, Device Number, Event Status">Delivery Number, Invoice Number, Device Number, Event Status</option>
          <option value="Delivery Number, Device Number, Event Status">Delivery Number, Device Number, Event Status</option>
          <option value="Delivery Number, Event Status">Delivery Number, Event Status</option>
          <br>
          </select>
          </span>
          </div>
          
          
<!--           <div class="formfieldslist" style="margin-right:16rem; height: 45px;"><span class="w-50 p-1 font-weight-bold float-left text-right"  style="line-height: 20px;">Download Template :</span><span class="float-left">
          <select  id="value123" class="form-control p-0 pl-2 select" placeholder="Event Id" style="height:30px;font-size: 12px;font-weight:bold;" id="event_pri_mode1" onchange="dropdown1();">
          <option value="">Select option</option>
          <option value="DIDS">Delivery Number, Invoice Number, Device Number, Status</option>
          <option value="DDS">Delivery Number, Device Number, Status</option>
          <option value="DS">Delivery Number, Status</option>
          </select></span>
          </div> -->
          
<!--           <div class="formfieldslist" style="margin-right:16rem; height: 45px;">
          <span class="w-50 p-1 font-weight-bold float-left text-right"  style="line-height: 20px;">Error File Download :</span>
          <span class="float-left">
          <select  class="form-control p-0 pl-2 select" placeholder="Event" style="height:30px;font-size: 12px;font-weight:bold;" id="event_pri" onchange="javascript:return getErrorFile(this.value);" >
          <option value="">Choose File</option>
          <option value="Download Error File">Download Error File</option>
          </select>
          </span>
          </div> -->
          
           <div class="col-sm-12 col-lg-12 col-md-12 text-center">  
           <button class="bg-color margin-rl1 btn-head" style="display:none; line-height: 20px;margin-top: 22px;border-radius: 3px;font-weight:bold" onclick="javascript:return ErrorFile();" id="errorFileId">Download Error File</button>
           </div>
          
          <div style="display:flex;flex-direction:row;gap:10px;margin:auto" >
         <!--  <input type="button" id="download" style="display:none;height: 2rem;color: white;border: 0.05rem solid #965664;background-color: #965664;border-radius:0.3rem" value=Download> -->
<!--           <label id="uploadfile" for="file-upload" class="custom-file-upload" style="cursor: pointer;display:none;border: 0.05rem solid #965664;background-color:#965664;color: white; border-radius:0.3rem; height: 2rem; line-height:2rem; text-align: center;"> 
               <i class="fa fa-cloud-upload" ></i> UploadFile            
           </label>
           <input type="file" id="file-upload" name='upload_cont_img' hidden/"> -->
           <span id="file-chosen"></span>                                     
          </div>
          
          <div class="col-sm-12 col-lg-12 col-md-12 text-center">         
  			  <button class="bg-color margin-rl1 btn-head" style="display:none; line-height: 20px;margin-top: 22px;border-radius: 3px;font-weight:bold" onclick="javascript:return DownloadExcelDataList();" id="dids">Download File</button>                
  			  <button class="bg-color margin-rl1 btn-head" style="display:none; line-height: 20px;margin-top: 22px;border-radius: 3px;font-weight:bold" onclick="javascript:return DownloadExcelDataList2();" id="dds">Download File here</button>
  			  <button class="bg-color margin-rl1 btn-head" style="display:none; line-height: 20px;margin-top: 22px;border-radius: 3px;font-weight:bold" onclick="javascript:return DownloadExcelDataList3();" id="ds">Download File</button>
  			<!--   <button class="bg-color margin-rl1 btn-head" style="display:none; line-height: 20px;margin-top: 22px;border-radius: 3px;font-weight:bold" onclick="javascript:return;" id="upload">Upload Template here</button> -->
  	<!-- 		  <label for="file-upload" class="bg-color margin-rl1 btn-head" style="line-height: 20px;margin-top: 22px;border-radius: 3px;font-weight:bold"> 
                <i></i> Upload Template here            
              </label>
              <input type="file" id="file-upload" name='upload_cont_img' hidden> -->
              
              <label id="uploadfile" for="file-upload" class="bg-color margin-rl1 btn-head" style="cursor: pointer;display:none;line-height:20px; margin-top: 22px;border-radius:3px;font-weight:bold;"> 
               <i></i> Upload File            
              </label>
              <input type="file" id="file-upload" name='upload_cont_img' hidden/"> 
                          
  		  </div>   
  		  
  		<div style="height:300px;width:100%;overflow-y:auto; display:none">
		<table class = "table2excel" id="tableforExcel" style="font-size:5px;">
			<thead>
				<tr>
					<th>Delivery number</th>
					<th>Invoice number</th>
					<th>Device_Id</th>
					<th>Event_Name</th>
					<th>Event_Status</th>							                                                                                                                                      					
				</tr>
				<tr>
					<th> </th>
					<th> </th>
					<th> </th>
					<th> </th>
					<th> </th>							                                                                                                                                      					
				</tr>
			</thead>
			<tbody ></tbody></table>	
			
			<table class = "table2excel" id="datainExcelSheet2" style="font-size:5px;">
			<thead>
				<tr>							
					<th>Event_Name</th>
					<th>Event_Status</th>							                                                                                                                                      					
				</tr>
				<tr>
					<td>Shipment Created</td>
					<td>Completed</td>																		                                                                                                                                      					
				</tr>
				<tr>
					<td>Attach Device and Start</td>
					<td>Initialized</td>																		                                                                                                                                      					
				</tr>
				<tr>
					<td>Upload Documents</td>
					<td>Queued</td>																		                                                                                                                                      					
				</tr>
				<tr>
					<td>Raise Exception</td>
					<td></td>																		                                                                                                                                      					
				</tr>
				<tr>
					<td>Additional Events</td>
					<td></td>																		                                                                                                                                      					
				</tr>
				<tr>
					<td>Additional Documents</td>
					<td></td>																		                                                                                                                                      					
				</tr>
			    <tr>
					<td>Goods Receipt</td>
					<td></td>																		                                                                                                                                      					
				</tr>
			</thead>
			<tbody ></tbody></table>		
	</div>	
	 		<div style="height:300px;width:100%;overflow-y:auto; display:none">
		<table class = "table2excel" id="tableforExcel2" style="font-size:5px;">
			<thead>
				<tr>
					<th>Delivery number</th>
					<th>Device_Id</th>
					<th>Event_Name</th>
					<th>Event_Status</th>							                                                                                                                                      					
				</tr>
				<tr>
					<th> </th>
					<th> </th>
					<th> </th>
					<th> </th>						                                                                                                                                      					
				</tr>
			</thead>
			<tbody ></tbody></table>			
	</div>	
	 		<div style="height:300px;width:100%;overflow-y:auto; display:none">
		<table class = "table2excel3" id="tableforExcel3" style="font-size:5px;">
			<thead>
				<tr>
					<th>Delivery number</th>
					<th>Event_Name</th>
					<th>Event_Status</th>							                                                                                                                                      					
				</tr>
				<tr>
					<th> </th>
					<th> </th>
					<th> </th>												                                                                                                                                      					
				</tr>
			</thead>
			<tbody ></tbody></table>			
	</div>
	<div style="height:300px;width:100%;overflow-y:auto; display:none">
		<table class = "table2excelerrorfile" id="tableforErrorfile" style="font-size:5px;">
			<thead>
				<tr>
					<th>Delivery number</th>
					<th>Invoice number</th>
					<th>Device_Id</th>
					<th>Event_Name</th>
					<th>Event_Status</th>								                                                                                                                                      					
				</tr>
				<tr>
					<th> </th>
					<th> </th>
					<th> </th>
					<th> </th>	
					<th> </th>													                                                                                                                                      					
				</tr>
			</thead>
			<tbody ></tbody></table>			
	</div>  
		<div id= "errordivid" class = "errordiv" style="display:block;height:180px;width:100%;overflow-y:auto;">
		<!-- <button class="bg-color margin-rl1 btn-head" style="display:none; line-height: 20px;margin-top: 22px;border-radius: 3px;font-weight:bold" onclick="javascript:return DownloadExcelDataList();" id="erroridss">Download File</button> -->
		   <table class="table table-striped table-bordered draftTableaa" id="draftTableaa" style="font-size:12px;">
			 <thead>
				<tr>
				   <!--  <th>Status</th> -->
					<th>Delivery No.</th>
					<th>Invoice No.</th>
					<th>Device Id</th>
					<th>Event Name</th>
					<th>Event Status</th>										                                                                                                                                      					
				</tr>
			</thead>
			<tbody ></tbody>
			</table>
		</div>
	
	<div class="col-sm-12 col-md-12 col-lg-12 mt-3" onkeypress="return blockSpecialChar(event)">
			<div id="errorselect" style="display: flex;
        justify-content: center;
        align-items: center; color:red;">
			
		</div>
				
	<!-- 	/////////////////// -->
	
			</div>
			
					<div class="col-sm-12 col-md-6 col-lg-6 text-center float-left p-0"  style="display:block;height:400px;width:100%;overflow-y:auto;">
					<div class="w-70 p-1 font-weight-bold float-right text-center" style="border-radius:5px;width:82% ;height: 30px;font-size: 12px;line-height: 20px;background: #894151e3;color:white; float: right;margin:15px;">Update Event</div>
					<div class="formfieldslist"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Invoice Number</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><input type="text" class="form-control" placeholder="E.g: 901xxxxxx5" style="height:30px;font-size: 12px;font-weight:bold;"  id="invoiceNumber"/></span></div>
					<div class="formfieldslist"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 13%;">(OR) Delivery Number</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><input type="text" class="form-control" placeholder="E.g: 00xxxxxxxx" style="height:30px;font-size: 12px;font-weight:bold;"  id="deliveryNumber"/></span></div>
					<!-- <span class="bg-primary" style="padding: 3px 10px;border-radius: 3px;color:#fff;font-weight:bold;font-size:12px;cursor:pointer;" onclick="javascript:addInvoiceNumber();">+</span> -->
					<div class="formfieldslist"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Event Name</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><select class="form-control"  style="height:30px;font-size: 11px;font-weight:bold;padding-top:2px;" id="nameofEvent"><option value=''>Select Event Name</option><option value='Shipment Created'>Shipment Created</option><option value='Attach Device and Start'>Attach Device and Start</option><option value='Upload Documents'>Upload Documents</option></select></span></div>
					<!-- <div class="formfieldslist"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Event Status</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><input type="text" class="form-control" placeholder="Event Status" style="height:30px;font-size: 12px;fonO-weight:bold;"  id="eventStatus"/></span></div> -->
					<div class="formfieldslist"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Event Status</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><select class="form-control"  style="height:30px;font-size: 11px;font-weight:bold;padding-top:2px;" id="eventStatus"><option value=''>Select Event Status</option><option value='Completed'>Completed</option><option value='Cancel'>Cancel</option></select></span></div>
					<div class="formfieldslist"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Plant</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><select class="form-control"  style="height:30px;font-size: 11px;font-weight:bold;padding-top:2px;" id="plantName"><option value=''>Select Plant Code</option><option value='2003'>2003</option><option value='2007'>2007</option><option value='2009'>2009</option><option value='2011'>2011</option><option value='2015'>2015</option><option value='2016'>2016</option><option value='6039'>6039</option></select></span></div>
					<div class="formfieldslist"><span class="w-47 p-1 pl-4 font-weight-bold float-left text-left lineHeight24" style="text-indent: 35%;">Device</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><select class="form-control select" name="devices" id="devices" style="height:30px;padding-bottom:3px;font-size: 12px;padding-top: 3px;" multiple size="5" onchange="limitSelection();"><option value="">Select plant first</option></select><input type="text" id="fixture-use-txt" class="form-control select" name="devices" style="display:inline;display:none;" placeholder="Enter other Device"></span><span class="" style="margin-top: 10px;line-height: 25px;margin-left: 3px;"><span class="bg-primary" style="padding: 3px 4px;border-radius: 3px"><img src="./images/bar-code.png" style="width:18px;height:18px;margin:1px;"/></span></span></div>
                    <!-- <div class="formfieldslist"><span class="w-47 p-1 pl-4 font-weight-bold float-left text-left lineHeight24" style="text-indent: 35%;">Device</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><select class="form-control select" name="devices" id="devices" style="height:30px;padding-bottom:3px;font-size: 12px;padding-top: 3px;"><option value="">Select plant first</option></select><input type="text" id="fixture-use-txt" class="form-control select" name="devices" style="display:inline;display:none;" placeholder="Enter other Device"></span><span class="" style="margin-top: 10px;line-height: 25px;margin-left: 3px;"><span class="bg-primary" style="padding: 3px 4px;border-radius: 3px"><img src="./images/bar-code.png" style="width:18px;height:18px;margin:1px;"/></span></span></div> -->
                    <button class="bg-color margin-rl1 btn-head" id="submitParams" style="position: absolute;top:80%;left:50%;">Submit</button>					
	
				    </div>
	
				<div class="col-sm-12 col-md-5 col-lg-5 text-center float-left p-0">
					<div class="w-70 p-1 font-weight-bold float-right text-center" style="border-radius:5px;width:82% ;height: 30px;font-size: 12px;line-height: 20px;background: #894151e3;color:white; float: right;margin:15px;">Upload Documents</div>
					<div class="formfieldslist"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 20%;">Invoice Number</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><input type="text" class="form-control" placeholder="E.g: 901xxxxxx5" style="height:30px;font-size: 12px;font-weight:bold;"  id="invoiceNumForEvidence"/></span></div>
					<div class="formfieldslist"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 3%;">(OR) Delivery Number</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><input type="text" class="form-control" placeholder="E.g: 00xxxxxxxx" style="height:30px;font-size: 12px;font-weight:bold;"  id="deliveryNum"/></span></div>
					<div class="formfieldslist"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 20%;">Type of Evidence</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><select class="form-control"  style="height:30px;font-size: 11px;font-weight:bold;padding-top:2px;" id="typeOfReferences1"><option value=''>Select Type of Evidence</option></select></span></div>
			   <!-- <div class="formfieldslist"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 20%;">Evidence For</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><select class="form-control"  style="height:30px;font-size: 11px;font-weight:bold;padding-top:2px;" id="evidencefor"><option value=''>Select Evidence For</option></select></span></div> -->
					<div style="width: 100%;height: 60px;font-size: 12px;"><span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 20%;">Evidence Description</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><textarea name="evidencedesc[]" class="form-control" placeholder="Enter Description"  id="evidence_description" style="height:55px;font-size: 12px;font-weight:bold;padding-top:2px;"></textarea></span></div>	
		
					<div class="formfieldslist">
         
       					<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 20%;">Upload Evidence</span>
      					<span class="float-left spaceTextAlign">:</span>
      					<span class="float-left" style="width:40%;">
<!--       <input type="file" id="EvidenceUploadFile" name="evidence[]" multiple class="form-control" style="height:30px;font-size: 12px;font-weight:bold;padding-top: 3px;position:absolute;opacity:0;width:40%;" disabled="disabled"/>
      <button class="form-control btn-outline-secondary font-bold" id="uplodimageslist" style="font-weight: bold;line-height: 10px;">Upload Evidence</button> -->
	      					<div class="btn-holder" style="justify-content: flex-end; display: flex;">
	      						<input type="file" id="file-input" multiple /><br>
	      <!-- <div class="btn-holder"> -->
	      						<!-- <button id="submit-button" class="bg-color margin-rl1 btn-head" style="position: absolute; margin-right: -85px;">Upload</button> -->
	      						<button id="submit-button" class="bg-color margin-rl1 btn-head" style="position: absolute;top:80%;left:50%;">Upload</button>
	      					</div>
      					</span>            
      
  					</div>
	
				</div>	
			
			
								
	       
    <script src="./js/MassLoad.js"></script>
</body>
</html>