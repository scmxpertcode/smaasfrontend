<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>SCMXpert/Dashboard</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='expires' content='0'>
<meta http-equiv='pragma' content='no-cache'>
<jsp:include page="./View/jsfiles.jsp" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.js"></script>
<script src="https://www.mapquestapi.com/sdk/leaflet/v2.2/mq-map.js?key=hNGkuW6RQrAmAPmQ6MKrUr0iJKrzgQwM"></script>
<script src="https://www.mapquestapi.com/sdk/leaflet/v2.2/mq-routing.js?key=hNGkuW6RQrAmAPmQ6MKrUr0iJKrzgQwM"></script>
<link rel="stylesheet" href="./css/slimselect2.min.css"/>

<style>
#shipmentdatalistshow>thead>tr>th{padding:4px;text-align:center;position: sticky;   top: 0;background: #945564;}
table>thead{color:#fff;}
  .leaflet-div-icon {
      background: none!important;
      border: none!important;
    }
    .sn-t1{width:80px;padding:1%;}
    .sn-t2{width:7px;padding:1%;}
    .sn-t3{padding:1%;font-weight:bolder;}
    .progress-bar {
     transform: rotate(180deg);
}
table {
  border: 1px solid black;
  table-layout: fixed;
  width: 250px;
}

th,
td {
  border: 1px solid black;
  width: 150px;
  overflow: hidden;
}

#data_menuTable {
background-color: white;
    color: black;
   
}

.loadnfilterbutton {
  background-color: #945564;
  border: none;
  color: white;
  padding: 4px 36px;                   
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 9px;
  cursor: pointer;
  border-radius: 16px;
  font-weight: bold;
  font-size: 0.9rem;
  margin-left:330px;
}
/*  padding: 3px 36px;     
margin-left:340px;         */
.loadnfilterbutton:hover {
  background-color: #945564;
}
#uploadevidencedata>thead>tr>th{
padding:5px;
text-align:center;
}
#uploadevidencedata>tbody>tr>td {
    padding: 3px;
    text-align: left;
}
</style>
<script>
function blockSpecialChar(e){
	var k;
	document.all ? k = e.keyCode : k = e.which;
	return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
	}
</script>
</head>
<body>

<script src="./js/Dashboard.js"></script>
<script src="./js/html2canvas.js"></script>
<script src="./js/canvas2image.js"></script>
<script src="./js/zebra_datepicker.min.js"></script>
<script type="text/javascript" src="./js/MediaScreen.js"></script>
 <link rel="stylesheet" href="./css/zebra_datepicker.css" type="text/css">

          <!-- Javascript -->
<img src="./images/loading.gif" id="loadingimg"/>
<div class="dashboard_page">
<jsp:include page="./View/header.jsp" />
<div class="row w-100 m-0 mb-3" style="background:#cbcdce52;">
	<div class="col-md-5 float-left pl-1 p-0 leftSideContent">
	<div class="w-100" style="padding: 2px;"></div>
	<div style="">
	<div class="my-div-main"><span class="btn live my-btn " style="border-radius:3px 0px 0px 0px;border:0px solid;font-weight: bold;font-size: 0.9rem;">Live <sup class="live_show_list_items bg-color"></sup></span><span class="btn delivered my-btn" id="delivered" style="border:0px solid;border-radius: 0px 3px 0px 0px;margin-left: 1px;font-weight: bold;font-size: 0.9rem;">Delivered <sup class="delivery_show_list_items bg-color"></sup></span><span class="font-color float-right createshipmentfont headermenu CreateShipment" style="padding: 0.1rem 0.75rem;border-radius:3px 3px 0px 0px;border:0px solid;">
	 <div class="my-div">
                    <span class="btn btn-outline-info float-right createshipmentfont" style="padding: 0.1rem 0.75rem;border-radius:3px 3px 0px 0px;border:0px solid;">
                        <div id="createshipment_link" class="bg-color" style="font-size: 0.9rem;"><i class="fa fa-plus-circle"></i> Create Shipment</div>
                    </span>
                </div>
		</span></div>
		
				
<!--     <div class="row" >
	<div class="btn-outline-dark btn-filter" style="margin-top: 0.5rem;font-size:0.78rem;border-radius:5px;margin-right:1rem;margin-left:300px"><i class="fa fa-upload"></i><a  data-cke-saved-href="MassLoad.jsp" href="MassLoad.jsp" target="_self" style="color: black;font-weight: 600;" id="hello">Mass Load</a></div>
	<div class="hide_show_icon btn-outline-dark btn-filter" style="padding:1%;font-size:10px;border-radius:5px;"><i class="fa fa-eye"></i> Show Filter</div>
    <div class="show_hide_icon btn-outline-dark btn-filter" style="padding:1%;font-size:10px;border-radius:5px;position:absolute; right:25px;"><i class="fa fa-eye-slash"></i> Hide Filter</div>
	<div style="clear:both;"></div>
	 </div>  -->
	        
      <div class="row"> 
      
<div class="my-div-main">
<div class="my-div" style=" margin-left:366px;">
   <span class="btn btn-outline-info float-right createshipmentfont" style="padding: 0.1rem 1.75rem;border-radius:3px 3px 0px 0px;border:0px solid;">		
	<div class="loadnfilterbutton" id="massLoad_link" style="font-size: 0.9rem;"><i class="fa fa-upload"></i> Mass Load</div>
   

   </span>
</div>
</div>

   
   	<div class="hide_show_icon btn-outline-dark btn-filter" style="padding:1%;font-size:10px;border-radius:5px;"><i class="fa fa-eye"></i>Show Filter</div>
    <div class="show_hide_icon btn-outline-dark btn-filter" style="padding:1%;font-size:10px;border-radius:5px;position:absolute; right:220px;"><i class="fa fa-eye-slash"></i>Hide Filter</div>
	<div style="clear:both;"></div>
		
     
	</div>
   
   
   	 
	 	 	 	 
	</div>

<div class="show_hide_filter" style="min-height:120px;" onkeypress="return blockSpecialChar(event)">
	<div id="error_filter"></div>
	<!-- The filter "From" is commented and changed as "From Plant" so the From option is commented and is written as a dropdown instead of textbox-->
<!-- 	<div class="float-left p-1" style="width:20%;"> 
		<label class="cols-label font-weight-bold">From : </label>
		<input type="text" class="form-control filters" id="from" placeholder="Enter Your Location" style="font-size: 10px;height: 22px;padding: 1px;padding-left: 5px;" autocomplete="off"/>
	</div> -->
	
	<div class="float-left p-1" style="width:20%;"> 
		<label class="cols-label font-weight-bold">From Plant :</label>
		<select style="font-size: 10px;height: 22px;padding: 1px;padding-left: 5px;" id="plantName" class="form-control filters">
		<option style="font-size:12px;" value="">Select Plant Name</option>
		</select>
	</div>
	
	<div class="float-left p-1" style="width:20%;"> 
		<label class="cols-label font-weight-bold">To: </label>
		<input type="text" class="form-control filters" id="to" placeholder="Enter Your Location" style="font-size: 10px;height: 22px;padding: 1px;padding-left: 5px;" autocomplete="off"/>
	</div>
	<div class="float-left p-1" style="width:20%;"> 
		<label class="cols-label font-weight-bold">Goods : </label>
		<select style="font-size: 10px;height: 22px;padding: 1px;padding-left: 5px;" id="selectgoods" class="form-control filters">
	<!-- 	<select style="font-size: 10px;
    height: 25px;
    padding: 1px 1px 1px 5px;
    background: none;
    border: none;" id="selectgoods" class=" filters"> -->
			<option style="font-size:12px;" value="">Select Any Goods</option>
		</select>
	</div>
	<div class="float-left p-1" style="width:20%;"> 
		<label class="cols-label font-weight-bold">Ship Date : </label>
		<input type="text" class="form-control filters" id="datepicker" placeholder="Select Date" style="background-color: white; font-size: 10px;height: 22px;padding: 1px;padding-left: 5px;" autocomplete="off"/>
	</div>
<!-- 	<div class="float-left p-1" style="width:20%;"> 
		<label class="cols-label font-weight-bold delivery_text">Delivery Number : </label>
		<input type="text" class="form-control filters" placeholder="Enter Delivery Number" id="delivery" style="font-size: 10px;height: 22px;padding: 1px;padding-left: 5px;" autocomplete="off"/>
	</div> -->
		<div class="float-left p-1" style="width:20%;"> 
		<label class="cols-label font-weight-bold delivery_text">Invoice Number : </label>
		<input type="text" class="form-control filters" placeholder="Enter Invoice Number" id="invoice" style="font-size: 10px;height: 22px;padding: 1px;padding-left: 5px;" autocomplete="off"/>
	</div>
<!-- 	<div class="float-left p-1" style="width:20%;"> 
		<label class="cols-label font-weight-bold">Reference : </label>
		<input type="text" class="form-control filters" placeholder="Enter Your Reference" id="reference" style="font-size: 10px;height: 22px;padding: 1px;padding-left: 5px;" autocomplete="off"/>
	</div> -->
	<div class="float-left p-1" style="width:20%;"> 
		<label class="cols-label font-weight-bold">Delivery No. : </label>
		<input type="text" class="form-control filters" placeholder="Enter Your Delivery No." id="deliveryNo" style="font-size: 10px;height: 22px;padding: 1px;padding-left: 5px;" autocomplete="off"/>
	</div>
	<div class="float-left p-1" style="width:20%;"> 
		<label class="cols-label font-weight-bold">Device : </label>
		<select style="font-size: 10px;height: 22px;padding: 1px;padding-left: 5px;" id="devices" class="form-control filters">
			<option style="font-size:12px;" value="">Select Any Device</option>
		</select>
	</div>
	<div class="float-left p-1" style="width:20%;"> 
<!-- 		<label class="cols-label font-weight-bold">Dept / Type : </label>
		<select style="font-size: 10px;height: 22px;padding: 1px;padding-left: 5px;" id="departments" class="form-control filters">
			<option style="font-size:12px;" value="">Select Any Dept/Type</option> -->
					<label class="cols-label font-weight-bold">Event Name :</label>
		<select style="font-size: 10px;height: 22px;padding: 1px;padding-left: 5px;" id="eventName" class="form-control filters">
			<option style="font-size:12px;" value="">Select Any Event Name</option>

		</select>
	</div>
	
	<div class="float-left" style="width:40%;padding-top:4.5%;"> 
		<label class="cols-label font-weight-bold"> </label>
		<button class="btn bg-color" style="font-size: 11px;margin: 2px;float: left;height: 22px;line-height: 10px;font-weight: bold;padding: 5px;" id="submit" onclick="javascript:seachfilter();"><i class="fa fa-search"></i> Search</button>
		<button class="btn bg-color" style="font-size: 11px;margin: 2px;float: left;height: 22px;line-height: 10px;font-weight: bold;padding: 5px;"  id="reset" onclick="javascript:resetform();" title="Refresh"><i class="fa fa-repeat"></i> Reset</button>
                   <!--  <button type="reset" class="btn bg-color" style="font-size: 11px;margin: 2px;width: 30px;float: left;height: 30px;line-height: 10px;font-weight: bold;padding: 5px;margin-left: 12%;" id="reset" onclick="javascript:resetform();" title="Refresh">Reset<i class="fa fa-repeat"></i></button> -->

		</select>
	</div>
	<div class="clear:both;"></div>
	</div>
		<div class="meter animate">
	<span style="width: 50%"><span></span></span>
</div>
	<div class="live_shipments"></div>
	<div class="delivered_shipments"></div>
</div>
<div class="showviewdata">
<h3 style="width:96%;float:left;text-align:center;">Heading</h3><span class="close" style="margin:1%;width:2%;float:left;cursor:pointer;text-align: center;">X</span>
<div style="clear:both;"></div>
<div class="view_body_boder"></div>
</div>

<div class="col-md-7 float-left rightSideContent" style="padding-left:0px;padding-right:1px;right:0px;">
	<div class="showmap">
		<div id="map"></div>
	</div>
	<div class="info" style="width:100%;z-index:1;display:none;overflow-y:auto;scrollbar-width: thin;border-left:2px solid #000;">
	<div class="info_attached">
	<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" data-toggle="tab" href="#home" id="home_info">Info</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#map_menu1" id="mapShowInfoTab">Map</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#data_menu2" id="data_info">Data</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#data_menu_docs" id="data_info_docs">Documents</a>
  </li>
</ul>
</div>
  <!-- Tab panes -->
  <div class="tab-content">
    <div id="home" class="container tab-pane active"><br>
     	<div class="row" style="background: lightgray;padding: 5px;margin: 0px;border-radius: 2px;margin-top: 5px;">
     		<div class="col-md-2 mt-1 p-0 shortsMenu_update_complete">
     			
     		</div>
     		
     		<div class="col-md-10" style="padding: 0% 1%;">
     			<div class="shipment_name"></div>
     		</div>
     	</div>
     	<div style="height:190px;width:100%;" class="showtabledatainshipment">
     	</div>
     	<div class="listoffilters" style="margin: 11px 130px;background: #fffdfd;width: 450px;height: 236px;padding: 0.9rem; ">
	<div class="row">
		<div class="col-md-6">
	<div class="checkbox"><input type = "checkbox" value="shipment_Id" name="filterList"/> <label>Shipment Id</label></div>
		<div class="checkbox"><input type = "checkbox" value="shipment_Num" name="filterList"/> <label>Delivery No.</label></div>
        <div class="checkbox"><input type = "checkbox" value="device_Id" name="filterList"/> <label>Device Id</label></div>
        <!-- <div class="checkbox"><input type = "checkbox" value="batteryLevel" name="filterList"/> <label>Battery</label></div> -->
		 <div class="checkbox"><input type = "checkbox" value="partner_From" name="filterList"/> <label>Partner From</label></div>
        <div class="checkbox"><input type = "checkbox" value="event_Name" name="filterList"/> <label>Event Name</label></div>
        <div class="checkbox"><input type = "checkbox" value="event_SNo" name="filterList"/> <label>Event SNo</label></div>
        <div class="checkbox"><input type = "checkbox" value="event_Id" name="filterList"/> <label>Event Id</label></div>
        
      <!--   <div class="checkbox"><input type = "checkbox" value="latitude" name="filterList"/> <label>Latitude</label></div>
         <div class="checkbox"><input type = "checkbox" value="longitude" name="filterList"/> <label>Longitude</label></div> -->
		</div>
		<div class="col-md-6">
		 <div class="checkbox"><input type = "checkbox" value="mode_of_Transport" name="filterList"/> <label>Mode of Transport</label></div>
       <!--  <div class="checkbox"><input type = "checkbox" value="internal_temperature" name="filterList"/> <label>Internal Temperature</label></div> -->
        <!-- <div class="checkbox"><input type = "checkbox" value="distance" name="filterList"/> <label>Distance</label></div>
        <div class="checkbox"><input type = "checkbox" value="report_type" name="filterList"/> <label>Report Type</label></div>
		 <div class="checkbox"><input type = "checkbox" value="sensor_id" name="filterList"/> <label>Sensor Id</label></div>
        <div class="checkbox"><input type = "checkbox" value="speed" name="filterList"/> <label>Speed</label></div>
        <div class="checkbox"><input type = "checkbox" value="utc" name="filterList"/> <label>Time</label></div>
        <div class="checkbox"><input type = "checkbox" value="address" name="filterList"/> <label>Address</label></div>
        -->
        <div class="checkbox"><input type = "checkbox" value="event_Exec_Date" name="filterList"/> <label>Event Executed Date</label></div>
        <div class="checkbox"><input type = "checkbox" value="expected_Date_At_BP" name="filterList"/> <label>Expected Date At BP</label></div>
        <div class="checkbox"><input type = "checkbox" value="typeOfReference" name="filterList"/> <label>Type Of Reference</label></div>
        <div class="checkbox"><input type = "checkbox" value="eventReferenceNumber" name="filterList"/> <label>Event Reference Number</label></div>
        <div class="checkbox"><input type = "checkbox" value="evidence" name="filterList"/> <label>Evidence</label></div>
        <div class="checkbox"><input type = "checkbox" value="customer_Id" name="filterList"/> <label>Customer Id</label></div>
        <div class="checkbox"><input type = "checkbox" value="event_Status" name="filterList"/> <label>Event Status</label></div>
        
        
        
		</div>
	</div>
	<button class="btn bg-color btn-head" id="SaveFiltersListBtn" style=" font-size:11px;margin:2px;width: 90px;float:left;height: 25px;line-height: 5px;">Show In Table</button>
	</div>
     				<div style="width:100%;height:20px;"></div>
			<div id="chartContainer" style="height: 450px; width: 100%;" class="live_charts"></div>
			<div style="width:100%;height:20px;"></div>

    </div>
    <div id="map_menu1" class="container tab-pane fade">
		<div class="row" style="background: lightgray;padding: 5px;margin: 0px;border-radius: 2px;margin-top: 5px;">
     		<div class="col-md-2 mt-1 p-0 shortsMenu_update_complete">
     			
     		</div>
     		<div class="col-md-10">
     			<div class="shipment_name"></div>
     		</div>
     	</div>
     	<div style="width:100%;height:5px;"></div>
     	<div id="showmap">     	
		<!-- <div id="map"></div> -->
		<img src="./images/loading.gif" id="loadingimg1"/>
    	</div>
    </div>
    <div id="data_menu2" class="container tab-pane fade">
         <div style="height:15px;width:100%;">
         </div>
         <table class="table" id="data_menuTable" >
         </table>
    </div>
    <div id="data_menu_docs" class="container tab-pane fade">
         <div style="height:15px;width:100%;">
         </div>
<!--          <table class="table" id="data_menuTable" >
         </table> -->
      <table class="table table-striped table-bordered p-0" style="margin: auto;overflow-x:auto;width: 100%;" id="uploadevidencedata">
       <thead class="bg-color tableHeadershown" style="color:#fff; font-size:12px;">
        <tr>
            <th style="width:40px;">&nbsp;</th>
            <th style="width:80px;">Doc Id</th>
            <th style="width:80px;">Shipment Id</th>
            <th style="width:80px;">Date Created</th>
            <th style="width:80px;">Type of Evidence</th>
            <th style="width:80px;">Evidence For</th>
            <th style="width:85px;">Description</th>
            <th style="width:80px;">Invoice</th>
            <th style="width:80px;">Delivery</th>
            <th>Material</th>
            <th style="width:70px;">Batch</th>
            <!-- <th width="30%">Event Description</th> -->
            <th>File Name</th>
            <!--   <th width="30%">URL</th> -->
           <!--  <th>Delete</th> -->
        </tr>
       </thead>
       <tbody id="tabledata"></tbody>
      </table>      
    </div>
  </div>
</div>
<div style="width:100%;height:5px;"></div>
	<div class="col-sm-12 col-md-12 col-lg-12 text-center m-0 p-0" id="bottom_map">
		
		
		
		
		<div style="height:300px;width:100%;overflow-y:auto;">
		<table class="table table-striped table-bordered draftTableaa" id="draftTableaa" style="font-size:12px;">
			<thead>
				<tr>
					<th>Shipment Id</th>
					<th>Delivery No.</th>
					<!-- <th>Shipment No.</th> -->
					<th>Device Id</th>
					<th>Event Name</th>
					<th>Battery (%)</th>
					<th>Mode Of Transport</th>
					<th>From Plant</th>
					<th>Address</th>
					<th>PO Number</th>  
					<th>NDC Number</th>  
					<!-- <th>Delivery Number</th>   -->
					<th>Invoice Number</th>  
					<th>Container Number</th>  
					<th>Serial Number of Goods</th>  
					                                                                                                                                      
					
				</tr>
			</thead>
			<tbody ></tbody></table>
			<!-- <table class="table table-striped table-bordered draftTableaa" id="draftTableaa_del" style="font-size:12px;">
			<thead>
				<tr>
					<th>Shipment Id</th>
					<th>Delivery No.</th>
					<th>Device Id</th>
					<th>Event Name</th>
					<th>Battery</th>
					<th>Mode Of Transport</th>
					<th>Address</th>
				</tr>
			</thead>exportTableToCSV('Table.csv')
			<tbody ></tbody></table> -->
	</div>
	
<!-- <body oncopy="return false" onpaste="return false"> -->	<!--Used for blocking copy paste-->
<button onclick="javascript:return downloadtabletocsv();" class="btn bg-color download" style="color:#fff;min-width:100px;height: 25px;padding: 0px 7px;font-size: 11px;font-weight: bold;margin: 3px;float: left;">Download CSV File</button>
</div> 
<div class="mailviewer"></div>
<div id="backgroundBlur"></div>
  <div class="body_blur"></div>
</div>
<!-- <script type="text/javascript">
new SlimSelect({
	  select: '#selectgoods'
	})
new SlimSelect({
	  select: '#devices'
	})
new SlimSelect({
	  select: '#departments'
	})	
</script> -->
</body>
</html>