<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "https://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>SCMXpert/Goods Master</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='expires' content='0'>
<meta http-equiv='pragma' content='no-cache'>
<jsp:include page="./View/jsfiles.jsp" />
<script src="./js/GoodsMaster.js"></script>
<script src="./js/jquery.tabletojson.js"></script>
<link rel="stylesheet" href="./css/slimselect.min.css"/>
<style>
#updateGoods{display:none;}
table>thead{color:#fff;}
.body_blur1{width:100%;height:100%;overflow:hidden;position:fixed;top:0px;z-index:1;background:#00000069;display:none;}
</style>
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
 <h2 style="text-align:center;margin:0px;"><img src="./images/Capture_scm_half_logo_1.png" style="width:50px;height:50px;"> Goods Master</h2>
 <div class="container">
<div class="row">
<div class="col-sm-12 col-md-12 col-lg-12 text-center">
<div class="row text-center">

<div class="col-sm-12 col-md-12 col-lg-12" style="padding-right:17%;height: 30px;"><button class="bg-color btn-head float-right" id="backLink"><i class="fa fa-arrow-left" style="font-size:18px"></i></button></div>

<div id="error"></div>
	<div class="col-sm-12 col-md-8 col-lg-8 pb-0 pt-2 pr-2 pl-2 m-auto" >
	<div style="border-radius:3px;padding:1%;background:linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(242, 242, 242, 1) 0%, rgba(228, 228, 228, 1) 100%, rgba(255, 255, 255, 1) 100%);border:1px solid #000;">
		<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Customer ID :</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" placeholder="Customer Id" id="Cust_Id" style="height: 30px;font-size: 12px;font-weight:bold;" disabled="disabled"/></span></div>
		<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Customer Name :</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" placeholder="Customer Name" id="cust_name" style="height: 30px;font-size: 12px;font-weight:bold;" disabled="disabled" value=""/></span></div>
		<div class="formfieldslist" id="b_P_DIV"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Business Partner Name :</span><span class="float-left" style="width:40%;"><input type="text" class="form-control" placeholder="Partner Name" id="bp_name" style="height: 30px;font-size: 12px;font-weight:bold;" disabled="disabled"/></span></div>
		</div>
	</div>
		<div class="col-sm-12 col-md-8 col-lg-8 p-2 m-auto" >
	<div style="border-radius:3px;padding:1%;border:1px solid #000;">
	<!-- <div style="width: 100%;height: 35px;font-size: 12px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Good Description :</span><span class="float-left" style="width:40%;"><select class="form-control" placeholder="Event Id" style="height: 30px;font-size: 12px;font-weight:bold;padding: 0px;padding-left: 0.2rem;" id="goods_id_vaal"><option value="">Select Good Description</option></select></span></div> -->
	<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Goods Items :</span><span class="float-left" style="width:45%;"><select class="form-control" id="items" name="items" onchange="javascript:SelectGood(this.value);" style="width:71%;float:left;height: 30px;font-size: 12px;padding-top: 3px;"><option value="">Create New Good</option></select><span style="padding-top:10px;" class=" bg-color float-left addRoute-btn" onclick="javascript:DownloadAllGoods();" title="Download All Goods List"><i class="fa fa-download" aria-hidden="true"></i> </span><!-- <span class="p-2 bg-color float-left addRoute-btn" onclick="javascript:addGoodsType();" title="Create New Item"><i class="fa fa-plus-circle"></i> </span> --><span style="padding-top:10px;" class=" bg-color float-left addRoute-btn" onclick="javascript:ShowAllGoods();" title="Total Goods List"><i class="fa fa-list" aria-hidden="true"></i> </span></div>
	<div class="formfieldslist" id="NewGoodsItemNameBox"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Goods Item Name :</span><span class="float-left" style="width:40%;"><input type="text" class="form-control" placeholder="Enter New Goods Name" style="height: 30px;font-size: 12px;" id="NewGoodsItem" onkeypress="return blockSpecialChar(event)"/></span></div>
		<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Goods Master ID :</span><span class="float-left" style="width:40%;"><input type="text" class="form-control" placeholder="Internal Goods Type number" style="height: 30px;font-size: 12px;" id="GoodNumber"/></span></div>	

			<!-- <div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Goods Items :</span><span class="float-left" style="width:40%;"><select class="form-control" id="items" name="items" onchange="javascript:SelectGood(this.value);" style="width:90%;float:left;height: 30px;font-size: 12px;padding-top: 3px;"><option value="">Select Option</option></select><span class="p-2 bg-color float-left addRoute-btn" onclick="javascript:addGoodsType();"><i class="fa fa-plus-circle"></i> </span></div> -->

			<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Goods Type Status :</span><span class="float-left" style="width:40%;"><select class="form-control" id="Status" name="routes" onchange="javascript:SelectRoute(this.value);" style="height: 30px;font-size: 12px;padding-top: 3px;font-weight:bold;"><option value="Active">Active</option><option value="In Active">In Active</option></select></span><span class="ml-1"></div>

			<div class="formfieldslist" style="height:60px;"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Goods Description :</span><span class="float-left" style="width:40%;"><textarea class="form-control" placeholder="Goods Description" style="height:55px;font-size: 12px;" id="goodsDesc" onkeypress="return blockSpecialChar(event)"></textarea></span></div>
			<div class="formfieldslist"><span class="w-50 p-1 font-weight-bold float-left text-right" style="line-height: 20px;">Customer Goods Id :</span><span class="float-left" style="width:40%;"><input type="text" placeholder="Enter Good Id" id="cust_good_id" class="form-control" style="height: 30px;font-size: 12px;font-weight:bold;" onkeypress="return blockSpecialChar(event)"/></span></div>
		</div>
	</div>
	<div class="col-md-6 col-sm-12 m-auto p-0">
	<div class="bg-color" style="color:#ffffff;border-radius:5px;margin:5px 0px;padding-left: 30px; padding-top: 9px; padding-bottom: 9px; font-weight: bold;">Goods Control Parameters</div>
	<table class="control_parameters mb-3" onkeypress="return blockSpecialChar(event)">
		<thead>
			<tr>
				<th></th>
				<th>From</th>
				<th>To</th>
				<th>Unit</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td style="font-size:13px;">Temperature :</td>
				<td><input type="number" aria-label="tempfrom" id="tempFrom" class="form-control col" placeholder="From" style="font-size: 13px; height: 30px;  border-radius: 3px;"></td>
				<td><input type="number" aria-label="tempfrom" id="tempTo" class="form-control col" placeholder="To" style="font-size: 13px; height: 30px;  border-radius: 3px;"></td>
				<td><select  id="tempUnits" class="form-control pt-0" style="height: 30px;  border-radius: 3px;"><option value="">select</option><option value="F">F</option><option value="c">C</option></select></td>
			</tr>
			<tr>
				<td style="font-size:13px;">Relative Humidity :</td>
				<td><input type="number" aria-label="tempfrom" id="humFrom" class="form-control col" placeholder="From" style="font-size: 13px; height: 30px;  border-radius: 3px;"></td>
				<td><input type="number" aria-label="tempfrom" id="humTo" class="form-control col" placeholder="To" style="font-size: 13px; height: 30px;  border-radius: 3px;"></td>
				<td><select class="form-control pt-0" id="humiUnits"  style="height: 30px;  border-radius: 3px;"><option value="">select</option><option value="%">%</option></select></td>
			</tr>
			<tr>
				<td style="font-size:13px;">Shock :</td>
				<td><input type="number" aria-label="tempfrom" id="shockFrom"  class="form-control col" placeholder="From" style="font-size: 13px; height: 30px;  border-radius: 3px;"></td>
				<td><input type="number" aria-label="tempfrom" id="shockTo"  class="form-control col" placeholder="To" style="font-size: 13px; height: 30px;  border-radius: 3px;"></td>
				<td><select class="form-control pt-0" id="shockUnits"  style="height: 30px;  border-radius: 3px;"><option value="">select</option><option value="G">G</option></select></td>
			</tr>
			<tr>
				<td style="font-size:13px;">Tilt :</td>
				<td><input type="number" aria-label="tempfrom" id="tiltFrom"  class="form-control col" placeholder="From" style="font-size: 13px; height: 30px;  border-radius: 3px;"></td>
				<td><input type="number" aria-label="tempfrom" id="tiltTo"  class="form-control col" placeholder="To" style="font-size: 13px; height: 30px;  border-radius: 3px;"></td>
				<td><select class="form-control pt-0" id="tiltUnits"  style="height: 30px;  border-radius: 3px;"><option value="">select</option><option value="&#176;">Degree</option></select></td>
			</tr>
			<tr>
				<td style="font-size:13px;">Pressure :</td>
				<td><input type="number" aria-label="tempfrom" id="smellFrom"  class="form-control col" placeholder="From" style="font-size: 13px; height: 30px;  border-radius: 3px;"></td>
				<td><input type="number" aria-label="tempfrom" id="smellTo"  class="form-control col" placeholder="To" style="font-size: 13px; height: 30px;  border-radius: 3px;"></td>
				<td><select class="form-control pt-0"  id="smellUnits" style="height: 30px;  border-radius: 3px;"><option value="">select</option><option value="kPa">Kpa</option></select></td>
			</tr>
				<tr>
				<td style="font-size:13px;">Speed :</td>
				<td><input type="number" aria-label="speedfrom" id="speedFrom"  class="form-control col" placeholder="From" style="font-size: 13px; height: 30px;  border-radius: 3px;"></td>
				<td><input type="number" aria-label="speedfrom" id="speedTo"  class="form-control col" placeholder="To" style="font-size: 13px; height: 30px;  border-radius: 3px;"></td>
				<td><select class="form-control pt-0"  id="smellUnits" style="height: 30px;  border-radius: 3px;"><option value="">select</option><option value="km/h">Km/h</option><option value="m/s">m/s</option></select></td>
			</tr>
		</tbody>
	</table>
	<div style="margin-bottom:10px;">
	<div class="bg-color" style="margin-bottom: 15px;color:#ffffff;border-radius:5px;padding-left: 30px; padding-top: 9px; padding-bottom: 9px; font-weight: bold;">Additional Parameters</div>
	<div style="width:100%;height:40px;"><span style="width:45%;height: 30px;float: left;font-weight:bold;text-align:right;padding-right:10px;font-size:13px;line-height: 30px;">Light Sensor :</span><span style="width:50%;height: 30px;float: left;"><select class="form-control" style="width:100%;height: 30px;padding-top: 1px;padding-bottom: 1px;font-size: 13px;" id="sensorSelect"> <option  value="">Select Sensor</option>
          <option value="LS1 (Extremely Sensitive)">LS1 (Extremely Sensitive)</option>
          <option value="LS2 (Very Sensitive)">LS2 (Very Sensitive)</option>
          <option value="LS3 (Sensitive)">LS3 (Sensitive)</option>
          <option value="LS4 (Universal Sensitive)">LS4 (Universal Sensitive)</option>
          <option value="LS5 (Universal)">LS5 (Universal)</option>
          <option value="LS6 (Universal Insensitive)">LS6 (Universal Insensitive)</option>
          <option value="LS7 (Insensitive)">LS7 (Insensitive)</option>
          <option value="LS8 (Very Insensitive)">LS8 (Very Insensitive)</option>
          <option value="LS9 (Extremly Insensitive)">LS9 (Extremely Insensitive)</option></select></span></div>
	<div style="width:100%;height:40px;"><span style="width:45%;height: 30px;float: left;font-weight:bold;text-align:right;padding-right:10px;font-size:13px;line-height: 30px;">Pressure Change :</span><span style="width:50%;height: 30px;float: left;"><select class="form-control" style="width:100%;height: 30px;padding-top: 1px;padding-bottom: 1px;font-size: 13px;" id="pressureSelect"><option value="">Select Value</option>
          <option value="10 KPa">10 kPa</option>
          <option value="20 KPa">20 kPa</option>
          <option value="30 KPa">30 kPa</option>
          <option value="40 KPa">40 kPa</option>
          <option value="50 KPa">50 kPa</option></select></span></div>
	<div style="width:100%;height:40px;"><span style="width:45%;height: 30px;float: left;font-weight:bold;text-align:right;padding-right:10px;font-size:13px;line-height: 30px;">Hazardous Product :</span><span style="width:50%;height: 30px;float: left;"><select class="form-control" style="width:100%;height: 30px;padding-top: 1px;padding-bottom: 1px;font-size: 13px;" id="hazardousSelect"><option value="">Select Product</option>
          <option value="HAZMAT">Hazmat</option>
          <option value="Radioactive">Radio Active</option></select></span></div>
	<div style="width:100%;height:40px;"><span style="width:45%;height: 30px;float: left;font-weight:bold;text-align:right;padding-right:10px;font-size:13px;line-height: 30px;">Photo Evidence :</span><span style="width:50%;height: 30px;float: left;"><select class="form-control" style="width:100%;height: 30px;padding-top: 1px;padding-bottom: 1px;font-size: 13px;" id="evidenceSelect"><option value="">Select Photo</option><option value="No">No</option>
          <option value="Yes">Yes</option></select></span></div>
	
	</div>
	<button type="button" class="bg-color btn-head m-1" id="cancelGoods" onclick="javascript:return Dashboard();" title="Move To Dashboard">Cancel Goods</button>
	<button type="button" class="bg-color btn-head m-1" onclick="javascript:UpdateGoods();" id="updateGoods">Update Goods</button>
	<button type="button" class="bg-color btn-head m-1" onclick="javascript:createGoods();" id="createGoods">Create Goods</button>
	</div>
	</div>
</div></div>
</div>
</div>


	 		<div class="body_blur"></div>
	 		<div class="body_blur1"></div>
	       <div class="AddEventBlock">
      	<h3 style="text-align:center;width:94%;float:left;padding-top:2%;">Add Goods Item</h3><span class="close" style="width: 2.7%;height: 30px;float: left;padding: 1% 3% 1% 0%;">X</span><span style="clear:both;"></span>
      	<div style="width:100%;height:70px;text-align: center;color: red;margin-bottom: 6px;" id="selecterror"></div>
      	<input type="text" class="form-control" style="margin-top:1rem;text-align: center;width: 60%;padding-top: 2%;margin: auto;height: 30px;padding-top: 2px;font-size: 12px;padding-bottom: 2px;font-weight: 600;" id="goodstypevalue" placeholder="Enter Goods Type">
      	<div class="showpreGoods"></div>
		<button id="CancelEvent" class="bg-color btn-head" style="height: 30px;font-size:12px;font-weight:600;margin: 5% 20%;float:left;border-radius:5px;">Cancel</button> 
      	<button id="AddGoods" class="bg-color btn-head" style="height: 30px;font-size:12px;font-weight:600;margin: 5% 5%;float:left;border-radius:5px;" onclick="javascript:addGoodsNew();">Add Goods</button>  	
      	</div>
<div class="showviewdata"></div>
<div class="showallGoods"></div>
	
	<footer></footer>
	    <!--  <script type="text/javascript">
new SlimSelect({
	  select: '#items'
	})
new SlimSelect({
	  select: '#Status'
	})
new SlimSelect({
	  select: '#tempUnits'
	})
new SlimSelect({
	  select: '#humiUnits'
	})
new SlimSelect({
	  select: '#shockUnits'
	})
new SlimSelect({
   	  select: '#tiltUnits'
   	})
new SlimSelect({
 	  select: '#smellUnits'
 	})
new SlimSelect({
 	  select: '#smellUnitsSpeed'
 	})
new SlimSelect({
	  select: '#sensorSelect'
	})
new SlimSelect({
	  select: '#pressureSelect'
	})
new SlimSelect({
	  select: '#hazardousSelect'
	})
new SlimSelect({
	  select: '#evidenceSelect'
	})
	
</script> -->
</body>
</html>