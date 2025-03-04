<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "https://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='expires' content='0'>
<meta http-equiv='pragma' content='no-cache'>
<jsp:include page="./View/jsfiles.jsp" />
 <script src = "https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
   <link href = "https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css" rel = "stylesheet"/>
<script src="./js/Devices.js"></script>
<link rel="stylesheet" href="./css/slimselect.min.css"/>
<script>
function blockSpecialChar(e){
	var k;
	document.all ? k = e.keyCode : k = e.which;
	return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
	}
</script>
</head>
<body oncopy="return false" onpaste="return false">
<script src="./js/zebra_datepicker.min.js"></script>
 <link rel="stylesheet" href="./css/zebra_datepicker.css" type="text/css">
<script>$(document).ready(function(){
	$("#originid").keydown(function(){
		//$(".showprelocationf").html('');
		var value_data = $(this).val();
		$("#showprelocationf").empty();
		$("#selecterror").empty();
		$("#showprelocationf").hide();
		$(".cancelsavebtns").css({"margin-top":"5%"});
		if(value_data.length >= 2){
			var optionValues = [];
			$('#event_from option').each(function(){
				    if($.inArray(this.value, optionValues) >-1){
				       $(this).remove()
				    }else{
				       optionValues.push(this.value);
				    }
				 });
			arr1 = optionValues.filter(function(entry) { return /\S/.test(entry); });
			//console.log(arr1);
			var expression = new RegExp(value_data,"i");
			$.each(arr1,function(key,value){
				
				
				if(value.search(expression) != -1)
					//if(value.from == value_data)
						//if(value.to == value_data)
						{
					////alert("from "+value);
					$("#selecterrorto").text("City name already exists");
							$("#showprelocationf").show();
							$("#showprelocationf").html('<div style="width: 90%;text-indent: 10px;font-weight: 600;margin: auto;margin-top:2px;background: #965664;color: #fff;padding: 2px 0px;border-radius: 2px;box-shadow: #000 0px 1px 5px;">'+value+'</div>');
							$(".cancelsavebtns").css({"margin-top":"11%"});
							$("#Addorigin").prop("onclick",null).off("onclick");
							return false;
						}else{
						//	//alert("from Exit "+value);
							$(".cancelsavebtns").css({"margin-top":"5%"});
							$("#Addorigin").attr("onclick","javascript:addoriginNew()").on("onclick");
							
						}
				/*if(value.search(expression) != -1)
					//if(value.from == value_data)
					{
						$(".showprelocationt,.showprelocationf").append("<div style='width:60%;text-indent: 10px;font-weight: 600;margin: auto;margin-top:2px;background: #965664b8;color: #fff;padding: 2px 0px;border-radius: 2px'>"+value.from+"</div>")
					}*/
			
			
			
			
		});
/*$.each(arr,function(key,value){
				
				
				if(value.search(expression) != -1)
					//if(value.from == value_data)
						//if(value.to == value_data)
						{
					////alert(value);
					$("#showprelocationt").show();
							$("#showprelocationt").html('<div style="width: 90%;text-indent: 10px;font-weight: 600;margin: auto;margin-top:2px;background: #965664;color: #fff;padding: 2px 0px;border-radius: 2px;box-shadow: #000 0px 1px 5px;">'+value+'</div>');
							$("#AddEventto").prop("onclick",null).off("onclick");
						}
				if(value.search(expression) != -1)
					//if(value.from == value_data)
					{
						$(".showprelocationt,.showprelocationf").append("<div style='width:60%;text-indent: 10px;font-weight: 600;margin: auto;margin-top:2px;background: #965664b8;color: #fff;padding: 2px 0px;border-radius: 2px'>"+value.from+"</div>")
					}
			
			
			
			
		});*/
			
			/*	var expression = new RegExp(value_data,"i");
		$.getJSON(RouteMasterGetRoute,function(data){
			
			$.each(data,function(key,value){
				
				
					if(value.to.search(expression) != -1)
						//if(value.from == value_data)
							//if(value.to == value_data)
							{
								$(".showprelocationt,.showprelocationf").append("<div style='width:60%;text-indent: 10px;font-weight: 600;margin: auto;margin-top:2px;background: #965664b8;color: #fff;padding: 2px 0px;border-radius: 2px'>"+value.to+"</div>")
							}
					if(value.from.search(expression) != -1)
						//if(value.from == value_data)
						{
							$(".showprelocationt,.showprelocationf").append("<div style='width:60%;text-indent: 10px;font-weight: 600;margin: auto;margin-top:2px;background: #965664b8;color: #fff;padding: 2px 0px;border-radius: 2px'>"+value.from+"</div>")
						}
				
				
				
				
			});
		});*/
		
		}else{
			$(".showprelocationt,.showprelocationf").empty();
			}
	});
	$('#transferDate,#expected_date').Zebra_DatePicker({
	    format: 'd-M-Y',
	    direction:true
	});

	
	/* alert("hello");
	 $.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/getInternalTransferId",function(response){
    	 alert(response);
     }); */
});
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

</script></script>
<jsp:include page="./View/header.jsp" />
 <h2 style="text-align:center;margin:0px;"><img src="./images/Capture_scm_half_logo_1.png" style="width:50px;height:50px;"> Create Device Transfer</h2>

 <div class="container">
  <div style="width: 100%;height: 31px;">
<button class="bg-color btn-head float-right" id="backLink"><i class="fa fa-arrow-left" style="font-size:18px"></i></button>
</div>
<div class="row">
 
<div class="col-sm-12 col-md-12 col-lg-12 text-center">
<div class="row text-center">



<div id="error"></div>
	<div class="col-sm-12 col-md-8 col-lg-8 p-2 m-auto" >
	<div style="border-radius:3px;padding:1%;background:linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(242, 242, 242, 1) 0%, rgba(228, 228, 228, 1) 100%, rgba(255, 255, 255, 1) 100%);border:1px solid #000;">
		<div class="formfieldslist"><span class=" p-1 font-weight-bold float-left text-left" style="line-height: 15px;text-indent: 60%;width:45%;">Internal Transfer Id </span><span class="float-left" style="width:5%;">:</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" placeholder="Internal Transfer Id" id=internalTransferId style="height:25px;font-size: 12px;font-weight:bold;" disabled="disabled"/></span></div>
		<div class="formfieldslist"><span class=" p-1 font-weight-bold float-left text-left" style="line-height: 15px;text-indent: 60%;width:45%;">Customer Name </span><span class="float-left" style="width:5%;">:</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" placeholder="Customer Name" id="Cust_Id" style="height:25px;font-size: 12px;font-weight:bold;" disabled="disabled"/></span></div>
		<div class="formfieldslist"><span class=" p-1 font-weight-bold float-left text-left" style="line-height: 15px;text-indent: 60%;width:45%;">Partner Name </span><span class="float-left" style="width:5%;">:</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" placeholder="Partner Name" id="bp_name" style="height:25px;font-size: 12px;font-weight:bold;" disabled="disabled"/></span></div>
		</div>
	</div>
</div></div>
 	<div class="col-sm-12 col-md-8 col-lg-8 mt-3 m-auto" >
	<div class="col-sm-12 col-md-12 col-lg-12 text-center p-0 float-left" onkeypress="return blockSpecialChar(event)">

			<div class="formfieldslist"><span class=" p-1 font-weight-bold float-left text-left" style="line-height: 15px;text-indent: 60%;width:45%;">Number of devices </span><span class="float-left" style="width:5%;">:</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" placeholder="Number of devices" style="margin-right:2px;height:25px;font-size: 12px;width:49%;float:left;font-weight: bold;" id="numofDev" disabled="disabled"/><select class="form-control pr-0 pt-1 pl-1 pb-0" id="listOfDevices" style="width:50%;height:25px;font-size: 12px;float:left;"></select></span></div>	

			<div class="formfieldslist"><span class=" p-1 font-weight-bold float-left text-left" style="line-height: 15px;text-indent: 60%;width:45%;">Tracking Number </span><span class="float-left" style="width:5%;">:</span><span class="float-left"  style="width:45%;"><input type="text" class="form-control" style="height:25px;font-size: 12px;font-weight:bold;width:90%;float:left;font-weight: bold;" id="trackingNo"/><span class="bg-color" style="padding: 7px 5px;border-radius: 3px;float:left;margin-left: 2px;"><img src="./images/bar-code.png" style="width:18px;height:18px;margin:1px;"/></span></span><span class="" style="margin-top: 10px;line-height: 25px;margin-left: 3px;"></span></div>

			<div class="formfieldslist"><span class=" p-1 font-weight-bold float-left text-left" style="line-height: 15px;text-indent: 60%;width:45%;">Courier Company </span><span class="float-left" style="width:5%;">:</span><span class="float-left"  style="width:45%;"><select class="form-control" id="courierCompList" name="courierCompList" style="height:25px;font-size: 12px;padding-top: 3px;font-weight: bold;"><option value="">Select Option</option>
			<option value="escapeHtml(DHL Express)">DHL Express</option>
			<option value="escapeHtml(FedEx)">FedEx</option>
			<option value="escapeHtml(United Parcel Service, Inc)">United Parcel Service, Inc</option>
			<option value="escapeHtml(Blue Dart)">Blue Dart</option>
			<option value="escapeHtml(Royal Mail)">Royal Mail</option>
			<option value="escapeHtml(Schenker AG)">Schenker AG</option>
			<option value="escapeHtml(PostNL)">PostNL</option>
			<option value="escapeHtml(YRC Worldwide)">YRC Worldwide</option>
			<option value="escapeHtml(Japan Post Group)">Japan Post Group</option>
			<option value="escapeHtml(DTDC)">DTDC</option>
			</select></span><span class="ml-1"></div>

			<div style="width: 100%;height: 60px;font-size: 12px;"><span class=" p-1 font-weight-bold float-left text-left" style="line-height: 15px;text-indent: 60%;width:45%;">Transfer Description </span><span class="float-left" style="width:5%;">:</span><span class="float-left" style="width:45%;"><textarea class="form-control" id="transDesc" placeholder="Transfer Description" style="height:50px;font-size: 12px;font-weight: bold;"></textarea></span></div>	

			<div class="formfieldslist"><span class=" p-1 font-weight-bold float-left text-left" style="line-height: 15px;text-indent: 60%;width:45%;">Origin </span><span class="float-left" style="width:5%;">:</span><span class="float-left" style="width:45%;"><select class="form-control" id="event_from" name="routes" style="height:25px;font-size: 12px;padding-top: 3px;width:90%;float:left;font-weight: bold;"><option value="">Select Option</option></select><span class="bg-color add" style="padding: 7px 10px;border-radius: 3px;color:#fff;font-weight:bold;font-size:14px;float:left;margin-left:2px;" onclick="javascript:return addNeworigin();">+</span></span><span class="ml-0"><span class="" style="line-height: 25px;"></span></div>

			<div class="formfieldslist"><span class=" p-1 font-weight-bold float-left text-left" style="line-height: 15px;text-indent: 60%;width:45%;">Destination City </span><span class="float-left" style="width:5%;">:</span><span class="float-left" style="width:45%;"><select class="form-control" id="event_to" name="routes" style="height:25px;font-size: 12px;padding-top: 3px;width:90%;float:left;font-weight: bold;"><option value="">Select Option</option></select><span class="bg-color add" style="padding: 7px 10px;border-radius: 3px;color:#fff;font-weight:bold;font-size:14px;float:left;margin-left:2px;" onclick="javascript:return addDestcity();">+</span></span><span class="ml-2"><span class="" style="line-height: 25px;"></span></div>

			<div class="formfieldslist"><span class=" p-1 font-weight-bold float-left text-left" style="line-height: 15px;text-indent: 60%;width:45%;">Receiving Partner </span><span class="float-left" style="width:5%;">:</span><span class="float-left" style="width:45%;"><select class="form-control" id="event_partner_from" name="routes"  style="height:25px;font-size: 12px;padding-top: 3px;font-weight: bold;"><option value="">Select Option</option></select></span><span class="ml-1"></div>

			<div style="width: 100%;height: 60px;font-size: 12px;"><span class=" p-1 font-weight-bold float-left text-left" style="line-height: 15px;text-indent: 60%;width:45%;">Destination Address </span><span class="float-left" style="width:5%;">:</span><span class="float-left" style="width:45%;"><textarea class="form-control" placeholder="Address" style="height:50px;font-size: 12px;font-weight: bold;" id="destinationAddress"></textarea></span></div>

			<div class="formfieldslist"><span class=" p-1 font-weight-bold float-left text-left" style="line-height: 15px;text-indent: 60%;width:45%;">Date of Transfer </span><span class="float-left" style="width:5%;">:</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" style="height:25px;font-size: 12px;font-weight:bold;float:left;background: #fff;font-weight: bold;" placeholder="Date of Transfer" id="transferDate"/></span><span class="ml-1"></div>

			<div class="formfieldslist"><span class=" p-1 font-weight-bold float-left text-left" style="line-height: 15px;text-indent: 60%;width:45%;">Expected Date </span><span class="float-left" style="width:5%;">:</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" style="height:25px;font-size: 12px;font-weight:bold;float:left;background:#fff;font-weight: bold;" placeholder="Expected Date" id="expected_date"/></span><span class="ml-1"></div>

		</div></div>

<div class="col-sm-12 col-md-12 col-lg-12 m-2">
	<div class="w-100 p-3"></div>
	<div class="text-center">
			<button class="bg-color margin-rl1 btn-head" style="padding: 6px 12px;" onclick="javascript:return clickCancel();"> Cancel Device Transfer </button>
			<button class="bg-color margin-rl1 btn-head" style="padding: 6px 12px;" onclick="javascript:return resetDevice();"> Reset </button>
			<button class="bg-color margin-rl1 btn-head" onclick="javascript:return createDevices();" style="padding: 6px 12px;"> Create / Update Device Transfer </button>
		</div>
</div></div></div>
<div class="body_blur"></div>
		 <div class="addOriginpopup" onkeypress="return blockSpecialChar(event)">
      	<div ><h3 style="text-align:center;width:94%;float:left;padding-top:3%;">Add Origin</h3><span class="closeevent" style="width: 2.7%;height: 50px;float: left;padding: 1% 3% 1% 0%;cursor:pointer;">X</span></div><div style="clear:both;"></div>
      	<div id="error2"  style="text-align: center;color:red;"></div>
      	<input type="text" name="shipTo" id="originid"  placeholder="Enter Origin" style="margin-top: 1rem; text-align: center;width: 60%;padding-top: 2%;margin:4% 20% 1% 20%;height: 30px; padding-top: 2px; font-size: 12px; padding-bottom: 2px;font-weight: 600; border-radius: 4px; border: 1px solid #ced4da;" />
      	<div id="showprelocationf"></div>
      	<div style="width:70%;margin:auto;text-align:center;margin-top: 2%;" >
      	<button id="CancelEventbdfg" class="CancelEventb bg-color margin-rl1 btn-head" onclick="javascript:cancelorigin();" >Cancel</button>
      	<button id="Addorigin" class="bg-color margin-rl1 btn-head AddEventfromBP"  onclick="javascript:addoriginNew();">Add Origin</button></div>
      </div>
		
		 <div class="addDestcitypopup" onkeypress="return blockSpecialChar(event)">
      	<div ><h3 style="text-align:center;width:94%;float:left;padding-top:3%;">Add Destination city</h3><span class="closeevent" style="width: 2.7%;height: 50px;float: left;padding: 1% 3% 1% 0%;cursor:pointer;">X</span></div><div style="clear:both;"></div>
      	<div id="error3"  style="text-align: center;color:red;"></div>
      	<input type="text" name="shipTo" id="destid"  placeholder="Enter City" style="margin-top: 1rem; text-align: center;width: 60%;padding-top: 2%;margin:4% 20% 1% 20%;height: 30px; padding-top: 2px; font-size: 12px; padding-bottom: 2px;font-weight: 600; border-radius: 4px; border: 1px solid #ced4da;" />
      	<div id="showprelocationf"></div>
      	<div style="width:70%;margin:auto;text-align:center;margin-top: 2%;" >
      	<button id="CancelEvent" class="CancelEventb bg-color margin-rl1 btn-head" onclick="javascript:canceldestcity();" >Cancel</button>
      	<button id="Adddestcity" class="bg-color margin-rl1 btn-head AddEventfromBP"  onclick="javascript:addNewdestcity();">Add City</button></div>
      </div>
<footer></footer>
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