<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "https://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='expires' content='0'>
<meta http-equiv='pragma' content='no-cache'>
<jsp:include page="./View/jsfiles.jsp" />
<jsp:include page="./View/header.jsp" />
<script src="./js/CustomerMaster.js"></script>
<link rel="stylesheet" href="./css/passwordRequirements.css" />
<link rel="stylesheet" href="./css/slimselect.min.css"/>
<style>
btn btn-light dropdown-toggle{
 background:brown;
}
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
.AddEventBlock{width:30%;height:200px;background:#fff;border-radius:5px;top:17rem;position:fixed;z-index:2;margin:0% 35%;display:none; background-color: grey;}

.goodscontrol{margin-left: 550px; background-color: grey; margin-right: 800px;}

.container1{margin-left: 508px; margin-right: 665px; }
#adminerror{color:red;font-size:12px;width:100%;text-align:center;}
#financeerror{color:red;font-size:12px;width:100%;text-align:center;}
#updateCustomer{display:none;}
 td {
  border-collapse: collapse;
}
 input{width: 300px;}
}
</style>
 
</head>
 
<body oncopy="return false" onpaste="return false">
<script src="./js/passwordRequirements.js"></script>
<link rel="stylesheet" href="./css/slimselect.min.css"/>
<script>
$(document).ready(function (){
    $(".pr-password").passwordRequirements({

    });
    
});
</script>
<div class="body_blur"></div>
<h2 style="text-align:center;margin:0px;"><img src="./images/Capture_scm_half_logo_1.png" style="width:50px;height:50px;"> Customer Master</h2>
<div class="col-sm-12 col-md-12 col-lg-12" style="padding-right:17%;height: 30px;"><button class="bg-color btn-head float-right" id="backLink"><i class="fa fa-arrow-left" style="font-size:18px"></i></button></div>
 <div style="clear:both"></div>
 <div class="container">
 <div class="row">
 <div class="col-sm-12 col-md-12 col-lg-12" id="error"></div>
 <div id="newCustomerNotshow"></div>
  		<div class="col-sm-12 col-lg-6 col-md-6 ">
  		 
  		  <div class="w-70 p-1 font-weight-bold float-right text-center" style="border-radius:5px;width:82% ;height: 30px;font-size: 12px;line-height: 20px;background: #894151e3;color:white; float: right;margin:15px;">General Information</div>
  			
  		<div style="clear:both"></div>
  		 <div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Customer Id</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<select onchange="javascript:return getCustomerDetails(this.value);"class="form-control" id="newCustomer" name="routes" style="height:30px;font-size: 12px;padding-top: 0px;font-weight:bold">
  			<option value="" >Create New Customer</option>
  			</select></span> </div> 
  			 
  		 
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Customer Name</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control"   placeholder="Customer Name" style="text-align:left;height:30px;font-size: 12px;font-weight:bold" id="customer_name"/></span></div> 
  			
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Customer Name2</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Customer Name2" style="height:30px;font-size: 12px;font-weight:bold " id="customer_name2"/></span></div> 

  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">External Number</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Customer External Number:" style="height:30px;font-size: 12px;font-weight:bold " id="externalNO"/></span></div> 
  			
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Customer Sector</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<select class="form-control" id="custSector" name="routes" style="height:30px;font-size: 12px;padding-top: 0px;font-weight:bold">
  			<option value="">Select Option</option>
  			<option value="Pharma">Pharma</option>
  			<option value="Foods">Foods</option>
  			<option value="Dairy">Dairy</option>
  			<option value="Logistics">Logistics</option>
  			<option value="Super Market">Super Market</option> 
  			<option value="Plant"> Plant</option>
  			</select></span> </div>

  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Customer Business</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<select class="form-control" id="custBusiness" name="routes" style="height:30px;font-size: 12px;padding-top: 0px; font-weight:bold">
  			<option value="">Select Option</option>
  			<option value="Exporter">Exporter</option>
  			<option value="Importer">Importer</option>
  			<option value="Manufacturer">Manufacturer</option>
  			<option value="Distributor">Distributor</option>
  			<option value="Retail">Retail</option>
  			<option value="Shipper">Shipper</option>
  			<option value="Forwarding Agent">Forwarding Agent</option>
  			<option value="Insurance">Insurance</option>
  			</select></span> </div>
  			
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">DUNS Number</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="DUNS Number" style="height:30px;font-size: 12px;font-weight:bold " id="dunsNO"/></span></div> 


  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">G10 Number</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="G10 Number" id="g10NO" style="height:30px;font-size: 12px; font-weight:bold"/></span></div> 

  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Customer Status</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<select class="form-control" id="custStatus" name="routes" style="height:30px;font-size: 12px;padding-top: 0px;font-weight:bold">
  			<option value="Active">Active</option>
  			<option value="Draft">Draft</option>
  			<option value="Inactive">Inactive</option>
  			</select></span></div>
  	
  		
  		 <div class="w-70 p-1 font-weight-bold float-right text-center" style="border-radius:5px;width:82% ;height: 30px;font-size: 12px;line-height: 20px;background: #894151e3;color:white;float: right;margin:15px;">Communication</div>
  		<div style="clear:both"></div>
  		 <div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Contact Name</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Contact Name" style="height:30px;font-size: 12px; font-weight:bold" id="custConctName"/></span></div> 
 
  			
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Designation</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Designation" style="height:30px;font-size: 12px;font-weight:bold " id="designatin"/></span></div> 
  			
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Email address</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Email Address" style="height:30px;font-size: 12px; font-weight:bold" id="emailAddress"/></span></div> 

  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Telephone Number</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Telephone Number" style="height:30px;font-size: 12px; font-weight:bold" id="telNo"/></span></div> 


  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Cell Phone Number</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Cell Phone Number" style="height:30px;font-size: 12px; font-weight:bold" id="phoneNo"/></span></div> 


  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Alt. Contact Name</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Alt. Contact Name" style="height:30px;font-size: 12px; font-weight:bold" id="altConctName"/></span></div> 


  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;"> Alt. Email Address</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Alt. Email Address" style="height:30px;font-size: 12px;font-weight:bold " id="altEmailAdd"/></span></div> 


  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Alt. Phone Number</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Alt. Telephone Number" style="height:30px;font-size: 12px; font-weight:bold" id="altPhoneNO"/></span></div> 

  		
  <div class="w-70 p-1 font-weight-bold float-right text-center" style="border-radius:5px;width:82% ;height: 30px;font-size: 12px;line-height: 20px;background: #894151e3;color:white; float: right;margin:15px;">Administrator</div>		
 		
  	<div style="clear:both"></div> <div class="col-sm-12 col-md-12 col-lg-12" id="adminerror"></div> 
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Admin ID</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Admin ID (Display A00001)" disabled="disabled" style="height:30px;font-size: 12px; font-weight:bold" id="adminId"/></span></div> 

  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Partner Role</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" value="ADMIN" placeholder="Admin (Display)" disabled="disabled" style="height:30px;font-size: 12px;font-weight:bold " id="adminPartnerRole"/></span></div> 
  			
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Admin Name</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Admin Name" style="height:30px;font-size: 12px;font-weight:bold " id="adminName"/></span></div> 

  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Email address</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Admin Email Address" style="height:30px;font-size: 12px; font-weight:bold" id="adminEmail"/></span></div> 

  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">User ID</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Admin User Id" disabled="disabled" style="height:30px;font-size: 12px;font-weight:bold " id="adminuserId"/></span></div> 

  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Password</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="password" name="password" id="adminpassword" class="pr-password form-control" required placeholder="Password" style="width:43%;font-size: 13px;position:absolute;font-weight:bold;" onkeypress="javascript:return keycodecheckBusiness1(event)">
  			<!-- <input type="text" class="form-control" placeholder="Admin Password" style="height:30px;font-size: 12px; font-weight:bold" id="adminpassword"/> -->
  								<img src="./images/showpassword.jpg" style="width:25px;left:88%;z-index:0;" id="showPassword" onclick="javascript:return ShowPassword2();" title="Show Password"/>
								<img src="./images/Hidepassword.jpg" style="width:25px;left:88%;z-index:0;" id="hidePassword" onclick="javascript:return ShowPassword2();" title="Hide Password"/>
  			
  			</span></div> 

  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Confirm Password</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="password" name="password" id="admincon-password" class="pr-password form-control" required placeholder="Confirm Password" style="width:43%;font-size: 13px;position:absolute;font-weight:bold;" onkeypress="javascript:return keycodecheckBusiness3(event)">
  			<!-- <input type="text" class="form-control" placeholder="Admin conf-Password" style="height:30px;font-size: 12px;font-weight:bold " id="admincon-password"/> -->
  								<img src="./images/showpassword.jpg" style="width:25px;left:88%;z-index:0;" id="showPasswordc" onclick="javascript:return ShowPassword3();" title="Show Password"/>
								<img src="./images/Hidepassword.jpg" style="width:25px;left:88%;z-index:0;" id="hidePasswordc" onclick="javascript:return ShowPassword3();" title="Hide Password"/>
  			
  			
  			</span></div> 

  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Telephone Number</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;"> 
  			<input type="text" class="form-control" placeholder="Admin Telphone Number" style="height:30px;font-size: 12px;font-weight:bold " id="admintelNo"/>
			
			</span></div> 

  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Cell Phone Number</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;"> 
  			<input type="text" class="form-control" placeholder="Admin Cell phone" style="height:30px;font-size: 12px; font-weight:bold" id="adminCellNo"/></span></div> 
  			
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Communication Method</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;"> 
<!--   			<input type="text" class="form-control" placeholder="Admin Comm. Method" style="height:30px;font-size: 12px; font-weight:bold" id="adminCommMethod"/></span> -->
  			<select class="form-control" placeholder="Comm. Method" style="font-size: 12px;font-weight:bold;padding: 0px;padding-left: 0.5rem;" id="adminCommMethod">
	<option value="">Select Communication Method</option>
	<option value="Email">Email</option>
	<option value="SMS">SMS</option>
	<option value="Phone">Phone</option>
	<option value="Twitter">Twitter</option>
	</select></span>
  			
  			</div>
  			
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Language</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<select class="form-control" name="routes" style="height:30px;font-size: 12px;padding-top: 0px;font-weight:bold" id="adminLanguage">
  			<option value="">Select Language</option>
  			<option value="English">English</option>
  			<option value="Hindi">Hindi</option>
  			<option value="Tamil">Tamil</option></select></span></div>
  	
			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Time Zone</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;"> 
  			<select class="form-control" id="adminTimeZone" name="routes" style="height:30px;font-size: 12px;padding-top: 0px;font-weight:bold">
  			<option value="">Select Time-Zone</option>
  			</select>
  			
  			</span></div>
  			
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Date Format</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;"> 
  			<select id="adminDateFormate" class="form-control" style="font-size: 12px;font-weight:bold;"><option value="">Select Date Formate</option><option value="DD-MM-YYYY">DD-MM-YYYY</option><option value="MM-DD-YYYY">MM-DD-YYYY</option><option value="YYYY-MM-DD">YYYY-MM-DD</option><option value="YYYY-DD-MM">YYYY-DD-MM</option><option value="DD/MM/YYYY">DD/MM/YYYY</option><option value="MM/DD/YYYY">MM/DD/YYYY</option><option value="YYYY/MM/DD">YYYY/MM/DD</option><option value="YYYY/DD/MM">YYYY/DD/MM</option><option value="DD:MM:YYYY">DD:MM:YYYY</option><option value="MM:DD:YYYY">MM:DD:YYYY</option><option value="YYYY:MM:DD">YYYY:MM:DD</option><option value="YYYY:DD:MM">YYYY:DD:MM</option></select>
  			</span></div>
  		</div>
  			
  		
  		
  		<div class="col-sm-12 col-lg-6 col-md-6">
  	
 <div class="w-70 p-1 font-weight-bold float-right text-center" style="border-radius:5px;width:82% ;height: 30px;font-size: 12px;line-height: 20px;background: #894151e3;color:white; float: right;margin:15px;">Customer Address</div> 		
  		
  	<div style="clear:both"></div>
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Street1</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Street1" style="height:30px;font-size: 12px;font-weight:bold " id="street1"/></span></div> 
  			
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Street2</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Street2" style="height:30px;font-size: 12px;font-weight:bold " id="street2"/></span></div> 
  			
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Street3</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Street3" style="height:30px;font-size: 12px;font-weight:bold " id="street3"/></span></div> 
  			
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">City</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="City" style="height:30px;font-size: 12px;font-weight:bold " id="city"/></span></div> 
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Country</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<select class="form-control" onchange="javascript:return stateList(this.value)" id="countryList" name="routes" style="height:30px;font-size: 12px;padding-top: 0px; font-weight:bold">
  			<option value="">Select Country</option>
  		
  			</select></span></div>
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Region/ State</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<select class="form-control" name="routes" style="height:30px;font-size: 12px;padding-top: 0px;font-weight:bold" id="region-state" />
  			<option value="">Select Region / State</option>
  		
  			</select></span></div>

  			
  			
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Zip / PIN </span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" id="zipPin" name="routes" placeholder="Enter Zip/Pin-Code" style="height:30px;font-size: 12px;padding-top: 0px;font-weight:bold" /></span></div>

  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Time Zone</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<select class="form-control" id="timeZone" name="routes" style="height:30px;font-size: 12px;padding-top: 0px;font-weight:bold">
  			<option value="">Select Time-Zone</option>
  			</select></span></div>
  			
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Web site</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="www." style="height:30px;font-size: 12px; font-weight:bold" id="webSite"/></span></div> 
  			
  		
  <div class="w-70 p-1 font-weight-bold float-right text-center" style="border-radius:5px;width:82% ;height: 30px;font-size: 12px;line-height: 20px;background: #894151e3;color:white; float: right;margin:15px;">Finance Information</div>
		 
  		 <div style="clear:both"></div>
  		<div id="financeaerror"></div>   
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Tax Number 1</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Tax Number1" style="height:30px;font-size: 12px;font-weight:bold " id="taxNo"/></span></div> 
  			
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Tax Number 2</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Tax Number2" style="height:30px;font-size: 12px;font-weight:bold " id="taxNo2"/></span></div> 
  			
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Payment Terms</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Payment" style="height:30px;font-size: 12px;font-weight:bold " id="payment" /></span></div> 

  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Currency</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<select class="form-control" id="currency" name="routes" style="height:30px;font-size: 12px;padding-top: 0px;font-weight:bold">
  			<option value="">Select Currency</option>
  			<option value="CAD">CAD Canadian Dollar</option>
<option value="EUR">EUR European Euro</option>
<option value="GBP">GBP British Pound</option>
<option value="INR">INR Indian Rupee</option>
<option value="USD">USD   US Dollar</option>

  
  			</select></span></div>

  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Bank name</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Enter Bank Name" id="bankName" name="routes" style="height:30px;font-size: 12px;padding-top: 0px;font-weight:bold"/></span></div>

  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Bank Routing</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Bank Route" style="height:30px;font-size: 12px; font-weight:bold" id="bankRout"/></span></div> 
  			
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Bank Acc. number</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Bank ACC.Number" style="height:30px;font-size: 12px; font-weight:bold" id="bankAcc"/></span></div> 
  			
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Data Shared Region</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Data Shared Region" style="height:30px;font-size: 12px; font-weight:bold" id="dataShare"/></span></div> 
  			
  			
 <div class="w-70 p-1 font-weight-bold float-right text-center" style="border-radius:5px;width:82% ;height: 30px;font-size: 12px;line-height: 20px;background: #894151e3;color:white; float: right;margin:15px;">Finance Contact Person</div>	
 		 
  		 <div style="clear:both"></div><div class="col-sm-12 col-md-12 col-lg-12" id="financeerror"></div>
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Finance Admin ID</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Finance Admin ID (Display A00002)" disabled="disabled" style="height:30px;font-size: 12px;font-weight:bold " id="financeAdminId"/></span></div> 
  			
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Finance Partner  Role</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" value="FINANCE" placeholder="Finance Admin Role" disabled="disabled" style="height:30px;font-size: 12px; font-weight:bold" id="financePartnerRole"/></span></div> 
  			
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Finance Name</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Finance Name" style="height:30px;font-size: 12px;font-weight:bold " id="financeName"/></span></div> 

  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Email address</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Finance Email Address" style="height:30px;font-size: 12px; font-weight:bold" id="financeEmail"/></span></div> 

  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">User ID</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Finance User Id" disabled="disabled" style="height:30px;font-size: 12px; font-weight:bold" id="financeUserId"/></span></div> 

  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Password </span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  				<input type="password" name="password" id="financePassword" class="pr-password form-control" required placeholder="Password" style="width:43%;font-size: 13px;position:absolute;font-weight:bold;" onkeypress="javascript:return keycodecheckBusiness2(event)">
  			<!-- <input type="text" class="form-control" placeholder="Admin Password" style="height:30px;font-size: 12px; font-weight:bold" id="adminpassword"/> -->
  								<img src="./images/showpassword.jpg" style="width:25px;left:88%;" id="showPasswordf" onclick="javascript:return ShowPassword4();" title="Show Password"/>
								<img src="./images/Hidepassword.jpg" style="width:25px;left:88%;" id="hidePasswordf" onclick="javascript:return ShowPassword4();" title="Hide Password"/>
  			
  			<!-- <input type="text" class="form-control" placeholder="Finance Password" style="height:30px;font-size: 12px; font-weight:bold" id="financePassword"/></span></div> -->
  			</span></div>
  			 
  			
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Confirm Password</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="password" name="password" id="financeCon-Password" class="pr-password form-control" required placeholder="Confirm Password" style="width:43%;font-size: 13px;position:absolute;font-weight:bold;" onkeypress="javascript:return keycodecheckBusiness4(event)">
  			<!-- <input type="text" class="form-control" placeholder="Admin Password" style="height:30px;font-size: 12px; font-weight:bold" id="adminpassword"/> -->
  								<img src="./images/showpassword.jpg" style="width:25px;left:88%;" id="showPasswordfc" onclick="javascript:return ShowPassword5();" title="Show Password"/>
								<img src="./images/Hidepassword.jpg" style="width:25px;left:88%;" id="hidePasswordfc" onclick="javascript:return ShowPassword5();" title="Hide Password"/>
  			
  			<!-- <input type="text" class="form-control" placeholder="Finance Conf-Password" style="height:30px;font-size: 12px;font-weight:bold " id="financeCon-Password"/></span></div> --> 
</span></div>

  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Telephone Number</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Finance Telphone Number" style="height:30px;font-size: 12px; font-weight:bold" id="financeTelNo"/></span></div> 
  			
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Cell Phone Number</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<input type="text" class="form-control" placeholder="Finance Cell phone Number" style="height:30px;font-size: 12px;font-weight:bold " id="financeCellPhone"/></span></div> 
  			
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Communication Method</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<!-- <input type="text" class="form-control" placeholder="Finance Comm. Method" style="height:30px;font-size: 12px;font-weight:bold " id="financeCommMethod"/></span> -->
  			<select class="form-control" placeholder="Comm. Method" style="font-size: 12px;font-weight:bold;padding: 0px;padding-left: 0.5rem;" id="financeCommMethod">
	<option value="">Select Communication Method</option>
	<option value="Email">Email</option>
	<option value="SMS">SMS</option>
	<option value="Phone">Phone</option>
	<option value="Twitter">Twitter</option>
	</select></span>
  			</div> 
  			
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Language</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<select class="form-control" name="routes" style="height:30px;font-size: 12px;padding-top: 0px;font-weight:bold" id="adminLanguage2">
  			<option value="">Select Language</option>
  			<option value="English">English</option>
  			<option value="Hindi">Hindi</option>
  			<option value="Tamil">Tamil</option></select></span></div>
  			
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Time Zone</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<select class="form-control" id="financeTimezone" name="routes" style="height:30px;font-size: 12px;padding-top: 0px;font-weight:bold">
  			<option value="">Select Time-Zone</option>

  			</select>
  			
  			</span></div> 
  			
  			<div class="formfieldslist">
  			<span class="w-47 p-1 pl-5 font-weight-bold float-left text-left" style="text-indent: 27%;">Date Format</span><span class="float-left spaceTextAlign">:</span>
  			<span class="float-left" style="width:45%;">
  			<select id="financeDateFormate" class="form-control" style="font-size: 12px;font-weight:bold;"><option value="">Select Date Formate</option><option value="DD-MM-YYYY">DD-MM-YYYY</option><option value="MM-DD-YYYY">MM-DD-YYYY</option><option value="YYYY-MM-DD">YYYY-MM-DD</option><option value="YYYY-DD-MM">YYYY-DD-MM</option><option value="DD/MM/YYYY">DD/MM/YYYY</option><option value="MM/DD/YYYY">MM/DD/YYYY</option><option value="YYYY/MM/DD">YYYY/MM/DD</option><option value="YYYY/DD/MM">YYYY/DD/MM</option><option value="DD:MM:YYYY">DD:MM:YYYY</option><option value="MM:DD:YYYY">MM:DD:YYYY</option><option value="YYYY:MM:DD">YYYY:MM:DD</option><option value="YYYY:DD:MM">YYYY:DD:MM</option></select>
  			</span></div> 
  			
  			</div>
  			 
  			 <div class="col-sm-12 col-lg-12 col-md-12 text-center"> 
  			  <button class="bg-color margin-rl1 btn-head" style="line-height: 20px;margin-top: 22px;border-radius: 3px;font-weight:bold" title="Move to Dashboard" onclick="javascript:return Dashboard();">Cancel</button>
  		  			 <!-- <button class="bg-color margin-rl1 btn-head" style="line-height: 20px;margin-top: 22px;border-radius: 3px;font-weight:bold" onclick="javascript:return sendEmailToCustomer();" >Send Email</button> -->
  			 <button class="bg-color margin-rl1 btn-head" style="line-height: 20px;margin-top: 22px;border-radius: 3px;font-weight:bold" onclick="javascript:return createCustomerMaster();" id="createCustomer">Create</button>
  			 <button class="bg-color margin-rl1 btn-head" style="line-height: 20px;margin-top: 22px;border-radius: 3px;font-weight:bold" onclick="javascript:return updateCustomerMaster();" id="updateCustomer">Update</button>
  			 </div>
  	 </div>
  		</div>
  		<div class="p-3 w-100"></div>
  		<div class="showviewdata"></div>
   <!--  <script type="text/javascript">
new SlimSelect({
	  select: '#newCustomer'
	})
new SlimSelect({
	  select: '#custSector'
	})
new SlimSelect({
	  select: '#custBusiness'
	})
new SlimSelect({
	  select: '#custStatus'
	})
new SlimSelect({
	  select: '#adminCommMethod'
	})
new SlimSelect({
   	  select: '#adminLanguage'
   	})
new SlimSelect({
 	  select: '#adminTimeZone'
 	})
new SlimSelect({
 	  select: '#adminDateFormate'
 	})
new SlimSelect({
	  select: '#countryList'
	})
new SlimSelect({
	  select: '#region-state'
	})
new SlimSelect({
	  select: '#timeZone'
	})
new SlimSelect({
	  select: '#currency'
	})
new SlimSelect({
 	  select: '#financeCommMethod'
 	})
new SlimSelect({
	  select: '#adminLanguage2'
	})
new SlimSelect({
	  select: '#financeTimezone'
	})
new SlimSelect({
	  select: '#financeDateFormate'
	})
	
</script> -->
</body>
</html>