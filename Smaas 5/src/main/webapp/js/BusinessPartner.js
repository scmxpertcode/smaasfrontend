$(function() {
	var UserId = $.session.get('UserId');
	if (UserId == undefined) {
		window.location.href = "index.jsp";
	}

	var UserName = $.session.get('UserName');
	var CustomerName = $.session.get('CustomerName');
	var Cust_Id = $.session.get('Cust_Id');
	var UserId = $.session.get('UserId');
	var token = $.session.get('Token');
	var Role = $.session.get('Role');
	var useridsplit = UserId.split('-');
	useridsplit[0].toString();
	useridsplit[0] + "";
	useridsplit[1].toString();
	useridsplit[1] + "";
	var CustomerName = $.session.get('CustomerName');
	$("#Cust_Id").val(useridsplit[0]);
	$("#cust_name").val(CustomerName);
	var RolePermission = $.session.get('RolePermission');
	bpnewe_id = '';
	getBusinessPartnerAllDetails(bpnewe_id);
	//getAllBusinessPartner();
	timezones();
	
	$("#CancelEventbdfg,.body_blur,.close,.closeevent,#backgroundBlur").on("click",function(){
		  cancellocation();
		   //canceltick();    
		   });
	
$(".body_blur5").on("click",function(){
		
		document.location.reload();
	});


	
	/*	if(Role == "SUPERADMIN"){
	 //console.log(RolePermission);
	 var str = RolePermission.split(",")
	 //console.log(str);
	 //$(".headermenu").unbind('hover');

	 $.each(str,function(key,value){ //console.log(value);
	 var string = value.split("/");
	 ////console.log(string[2]);
	 string[2].toString();
	 string[2] + "";
	 ////console.log("."+String(string[2]));
	
	 $("."+String(string[2])).show();
	 });

	 //$(".showRolesList").css("margin-top","6%");
	 //	$(".sessionUsername").css({"width":"50%","float":"left","font-weight":"bold"});
	 //	$(".userrole").css({"width":"50%","float":"left","font-weight":"bold"});
	 //$(".sessionUsernameDisplay").css("width","40%");
	
	 //$("#AD_Name,#BP_Name").remove();
	 var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsListAll";
	 }else if(Role == "ADMIN")
	 {
	 //console.log(RolePermission);
	 var str = RolePermission.split(",")
	 //console.log(str);
	 //$(".headermenu").unbind('hover');

	 $.each(str,function(key,value){ //console.log(value);
	 var string = value.split("/");
	 ////console.log(string[2]);
	 string[2].toString();
	 string[2] + "";
	 ////console.log("."+String(string[2]));
	
	 $("."+String(string[2])).show();
	 });
	 //localStorage.getItem("smaasip")+'/SCMXPert/getShipments/'+scmval+'/'+bpval
	
	 $(".showRolesList").prepend('<div class="userrole"><span class="sessionUsernameDisplay">Customer</span><span style="float:left;width:3%;text-align:center;">:</span><span class="">MABE</span></div>').css("margin-top","6%");
	 $("#SPAD_Name > #user_SPAD_Name").text(UserName).show().addClass("");
	 //	$(".sessionUsername").css({"width":"50%","float":"left","font-weight":"bold"});
	 //	$(".userrole").css({"width":"50%","float":"left","font-weight":"bold"});
	 //$(".sessionUsernameDisplay").css("width","50%");
	 //$("#SPAD_Name,#BP_Name").remove();
	 var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsList/"+UserId;
	 //$("#customer").hide();
	 }else if(Role == "FINANCE")
	 {
	 //localStorage.getItem("smaasip")+'/SCMXPert/getShipments/'+scmval+'/'+bpval
	 //console.log(RolePermission);
	 var str = RolePermission.split(",")
	 //console.log(str);
	 //$(".headermenu").unbind('hover');
	
	 $.each(str,function(key,value){ //console.log(value);
	 var string = value.split("/");
	 ////console.log(string[2]);
	 string[2].toString();
	 string[2] + "";
	 ////console.log("."+String(string[2]));
	
	 $("."+String(string[2])).show();
	 });
	 $(".showRolesList").prepend('<div class="userrole"><span class="sessionUsernameDisplay">Customer</span><span style="float:left;width:3%;text-align:center;">:</span><span class="">MABE</span></div>').css("margin-top","6%");
	 $("#SPAD_Name > #user_SPAD_Name").text(UserName).show().addClass("");
	 //	$(".sessionUsername").css({"width":"50%","float":"left","font-weight":"bold"});
	 //	$(".userrole").css({"width":"50%","float":"left","font-weight":"bold"});
	 //$(".sessionUsernameDisplay").css("width","50%");
	 //$("#SPAD_Name,#BP_Name").remove();
	 var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsList/"+UserId;
	 //	$("#customer").hide();
	 }*/

	$("#customer_Name").text(CustomerName);
	$("#bp_name_f").text(UserName);
	$("#scmid").val(Cust_Id);
	$("#bpi_idchange").val(UserId);
	//getAllBusinessPartner();

	$("#shipFrom").keydown(function(){
			var value_data = $(this).val();
//alert(value_data);
			$("#showprelocationf").empty();
			$("#error2").empty();
			$("#showprelocationf").hide();
			$(".cancelsavebtns").css({"margin-top":"5%"});
			if(value_data.length >= 2){
				var optionValues = [];
				$('#partnerLocation option').each(function(){
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
							{
//alert("hello");
						$("#error2").text("City name already exists");
								$("#showprelocationf").show();
								$("#showprelocationf").html('<div style="width: 60%;text-indent: 10px;font-weight: 600;margin: auto;margin-top:2px;background: #965664;color: #fff;padding: 2px 0px;border-radius: 2px;box-shadow: #000 0px 1px 5px;">'+escapeHtml(value)+'</div>');
								$(".cancelsavebtns").css({"margin-top":"11%"});
								$(".AddEventfromBP").prop("onclick",null).off("onclick");
								return false;
							}else{
//alert("hello");
								$(".cancelsavebtns").css({"margin-top":"5%"});
								$(".AddEventfromBP").attr("onclick","javascript:addNewLocationfrom()").on("onclick");

							}
			});
			}else{
				$("#error2,#showprelocationf").empty();
$(".AddEventfromBP").attr("onclick","javascript:addNewLocationfrom()").on("onclick");
				}
		});


});

function Communication() {
	if ($("#partnerType").val() == "EMAIL") {
		document.getElementById('updateEvent').style.visibility = 'hidden';
	} else {
		document.getElementById('createEvent').style.visibility = 'visible';
	}
}

function createBusinessPartner() {

	var CustmId = $("#Cust_Id").val();

	var partnerType = $("#partnerType").val();
	var PartnerCompany = $("#partnerCompany").val();
	var PartnerName = $("#partnerName").val();
	var partnerName2 = $("#partnerName2").val();
	var partnerLocation = $("#partnerLocation").val();
	var partnerExtName = $("#partnerExtName").val();
	var partnerStatus = $("#partnerStatus").val();
	var partnerEscal = $("#partnerEscal").val();

	var email = $("#email").val();
	var telNumber = $("#telNumber").val();
	var cellNumber = $("#cellNumber").val();
	var commMethod = $("#commMethod").val();

	var userId = $("#userId").val();
	////alert(userId);
	var useridsplit = userId.split('-');
	useridsplit[0].toString();
	useridsplit[0] + "";
	useridsplit[1].toString();
	useridsplit[1] + "";
	var PartnerId = useridsplit[1];
	
	var password = $("#password").val();
	var ConfirmPassword = $("#cs_password").val();
	var language = $("#language").val();
	var timeZone = $("#timeZone").val();
	var DateOfDay = $("#DateOfDay").val();
var error = document.getElementById("error");
var error1= document.getElementById("error1");

	//var table = $('#partnerAcessMatrixtable').tableToJSON();
	var AcessMatrix = $("input[name='AcessMatrix']:checked").map(function(_, el) {
		return $(el).val();
	}).get();
	
	var AcessEvents = $("input[name='AcessEvents']:checked").map(function(_, el) {
		return $(el).val();
	}).get();
	var Events = [];
	for(i=1;i<=AcessEvents.length;i++)
		{
			var Eve = '{ "event_Id":"E00'+i+'0","event_Status":"'+AcessEvents[i-1]+'"}';
			Events.push(Eve);
			
		}
	var newstr = '[' +  Events.join(', ') + ']';
	var panewstr = $.parseJSON(newstr);
	


	/*-----------  validation ----------*/
	
	/*//alert(AcessMatrix.length);*/
	if(AcessMatrix.length == 0)
		{
		var errovalkyue = "Select Aleast One Access Matrix";
		error.innerHTML = errovalkyue;
		return false;
		
		}else {
			error.innerHTML= "";
		}
	
	if(AcessEvents.length == 0)
	{
	var errovalkyue1 = "Select Aleast One Access Matrix";
	error1.innerHTML = errovalkyue1;
	return false;
	
	}else {
		error1.innerHTML= "";
	}
	
	//return false;
	
	$("input[name='AcessMatrix']checked")
	
	
	if (listBusinessPartner == "") {
		$("#listBusinessPartner").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#listBusinessPartner").focus().css("border", "1px solid #CCC");
	}

	if (partnerType == "") {
		$("#partnerType").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#partnerType").focus().css("border", "1px solid #CCC");

	}

	if (PartnerCompany == "") {
		$("#partnerCompany").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#partnerCompany").focus().css("border", "1px solid #CCC");

	}
	if (PartnerName == "") {
		$("#partnerName").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#partnerName").focus().css("border", "1px solid #CCC");

	}
	/*if (partnerName2 == "") {
		$("#partnerName2").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#partnerName2").focus().css("border", "1px solid #CCC");

	}*/
	/*if (partnerLocation == "") {
		$("#partnerLocation").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#partnerLocation").focus().css("border", "1px solid #CCC");

	}*/
	/*if (partnerExtName == "") {
		$("#partnerExtName").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#partnerExtName").focus().css("border", "1px solid #CCC");

	}*/
	if (partnerStatus == "") {
		$("#partnerStatus").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#partnerStatus").focus().css("border", "1px solid #CCC");
	}
	/*if (partnerEscal == "") {
		$("#partnerEscal").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#partnerEscal").focus()
				.css("border", "1px solid #CCC");
	}
	 */

	if (email == "") {
		$("#email").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#email").focus().css("border", "1px solid #CCC");
	}

/*	if (telNumber == "") {
		$("#telNumber").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#telNumber").focus().css("border", "1px solid #CCC");
	}

	if (cellNumber == "") {
		$("#cellNumber").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#cellNumber").focus().css("border", "1px solid #CCC");

	}*/

	if (commMethod == "") {
		$("#commMethod").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#commMethod").focus().css("border", "1px solid #CCC");

	}

	if (userId == "") {
		$("#userId").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#userId").focus().css("border", "1px solid #CCC");
	}

	if (password == "") {
		$("#password").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#password").focus().css("border", "1px solid #CCC");
	}

	if (ConfirmPassword == "") {
		$("#cs_password").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#cs_password").focus().css("border", "1px solid #CCC");

	}
	/*Password Verification*/

	if (password != ConfirmPassword) {
		/*//alert("Passwords do not match.");*/
		return false;
	}

	if (language == "") {
		$("#language").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#language").focus().css("border", "1px solid #CCC");

	}
	if (timeZone == "") {
		$("#timeZone").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#timeZone").focus().css("border", "1px solid #CCC");

	}
	if (DateOfDay == "") {
		$("#DateOfDay").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#DateOfDay").focus().css("border", "1px solid #CCC");

	}

	if (partnerAcessMatrixtable == "") {
		$("#partnerAcessMatrixtable").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#partnerAcessMatrixtable").focus().css("border", "1px solid #CCC");

	}
if(password   != ConfirmPassword)
{
//alert("hello");
	var txt = "Both Password and Conf-Password not Match";
	adminerror.innerHTML = txt;
$("#password,#cs_password").css({"border":"1px solid red"}).focus();
return false;}else{$("#password,#cs_password").css({"border":"1px solid #ced4da"})}
var customerName = $.session.get('CustomerName');
	var json_value = {
		"customer_Id" : CustmId,
		"bp_Id" : PartnerId,
		"partner_Type" : partnerType,
		"company_Name" : PartnerCompany,
		"name1" : PartnerName,
		"name2" : partnerName2,
		"location" : partnerLocation,
		"external_Number" : partnerExtName,
		"customer_Name" : customerName,
		"status" : partnerStatus,
		"escalation" : partnerEscal,
		"email_Id" : email,
		"email" : email,
		"telephoneNumber" : telNumber,
		"cellPhoneNumber" : cellNumber,
		"communicationmethod" : commMethod,
		"userId" : userId,
		"password" : password,
		"language" : language,
		"time_Zone" : timeZone,
		"date_Format" : DateOfDay,
		"userBP_Id" : PartnerId,
		"rolevalue" : AcessMatrix,
		"allEvent":panewstr

	};
	////console.log(panewstr);
	var eventsList =[];
	$.each(panewstr,function(key,value){
		eventsList.push(value.event_Status);
	});
	//var smaasip= localStorage.getItem("smaasip");
	////console.log(eventsList);
	// //console.log(json_value);
	//console.log(smaasip);
	// return false;
	var url = localStorage.getItem("smaasip")+"/SCMXPert/createNewBusinessPartnerMaster";	
//	console.log(url);
//	alert(url);
//return false;
//	var url = "https://www.smaas-lb.de:8000/SCMXPert/createNewBusinessPartnerMaster";
	$.ajax({
				type : "post",
				url : url,
			//	url : "https://www.smaas-lb.de:8000/SCMXPert/createNewBusinessPartnerMaster",
				headers: {
					'Content-Type' : "application/json",
		   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken'),
/*  "Access-Control-Allow-Origin" : ""  */
		   	     	  	    	        	  },
				data : JSON.stringify(json_value),
				beforeSend: function() {
		             // $("#loading-image").show();
		             var loading = '<img src="./images/loading.gif" id="loadingimg"/>';
		             $(".body_blur5").show().html(loading).css({"background":"#000000c2"});
		             $("#loadingimg").show();
		             var mailhtml = '<!DOCTYPE HTML><html><head></head><body style="margin:0px;"><header style="box-shadow:0px 1px 3px #000;height:60px;"><img src="https://127.0.0.1//images/logo_scm.png" style="float: right;margin-top:10px;width: 227px;height: 45px;margin-right: 25px;"/></header><div style="width:100%;margin:auto;"><h2 style="text-align:center;">Business Partner Sucessfully Created </h2><h5 style="text-align:center;">Your Details</h5><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">User ID :</span><span style="width:50%;height:35px;float:left;">'+escapeHtml(json_value.userId)+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Password :</span><span style="width:50%;height:35px;float:left;">'+escapeHtml(json_value.password)+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Customer ID :</span><span style="width:50%;height:35px;float:left;">'+escapeHtml(json_value.customer_Id)+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Email ID :</span><span style="width:50%;height:35px;float:left;">'+escapeHtml(json_value.email)+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Selected Partner Access Matrix :</span><span style="width:50%;height:35px;float:left;">'+escapeHtml(json_value.rolevalue)+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Selected Partner Access Events :</span><span style="width:50%;height:35px;float:left;">'+escapeHtml(eventsList)+'</span></div></div></body></html>';
			/*	 var mailhtml = 'Mail sent successfully';*/
		             var token = $.session.get('Token');	
		             var subject = "Created Business Partner";
		             var stringArray = [];
		             stringArray.push(json_value.email);
		             var email = stringArray;
		             //console.log(email);
		        	 var data = {'to':email,'content':mailhtml,'subject':subject};
		        	// console.log(data);
					 $.ajax({						
						url: localStorage.getItem("smaasip")+"/SCMXPert/MailSender",
				//	    url: localStorage.getItem("MailUrl"),			//url used with mapping in kong gateway	
						type: "POST",
					/*	crossDomain: true,*/
					/*	dataType: 'json',*/
				     	headers: {		
					"Content-Type": "application/json",		
        'Authorization': localStorage.getItem('SavedToken'),
        'Access-Control-Allow-Origin' : "*",
'dataType':'json',
'contentType':'json',
//"Access-Control-Allow-Credentials": "true",
"Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
"Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
/*"Access-Control-Allow-Method" : "OPTIONS",*/
   /*  "Access-Control-Allow-Headers": "x-requested-with", */
//"X-CSRF-TOKEN": localStorage.getItem('SavedToken')

         
    }, 	 
 data:JSON.stringify(data),
				     	 success: function (data) {
				     		
				     	 }
					 });
		              
		           },
				success : function(data) {
					var bp_id = '';
					getBusinessPartnerAllDetails(bp_id);
					//console.log("data")
					//console.log(json_value.userId);
					var correct = '<img src="./images/correct.gif" id="tickimg" style="width:65px;"/>';
					
					var Idb = json_value.userId;
					
					/*$(".showviewdata1")
							.show()   
							.html('<div class="alert alert-success" role="alert" >Business Partner Created <strong> Successfully! </strong> and Your ID is ' + Idb	+ '  <a href="Dashboard.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">Move to Dashboard</a>.</div>');*/
					$(".body_blur5").show().html('<div class="alert alert-success" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;"><div class="close" onclick="javascript:return canceltick();">X</div>'+correct+'Business Partner Created <strong> Successfully! Remaining Details Send To Your Mail</strong> and Your ID is ' +  Idb 	+ '  <a href="Dashboard.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">Move to Dashboard</a>.</div>').css({"background":"#000000c2"});
				
					
				},
			});

}

function updateBusinessPartner() {
	var CustmId = $("#Cust_Id").val();
	
	var userId = $("#userId").val();
	////alert(userId);
	var PartnerIds = $("#listBusinessPartner").val();
	var useridsplit = PartnerIds.split('-');
	useridsplit[0].toString();
	useridsplit[0] + "";
	useridsplit[1].toString();
	useridsplit[1] + "";
	var PartnerId = useridsplit[0];
	
	var partnerType = $("#partnerType").val();
	var PartnerCompany = $("#partnerCompany").val();
	var PartnerName = $("#partnerName").val();
	var partnerName2 = $("#partnerName2").val();
	var Location = $("#partnerLocation").val();
	var partnerExtName = $("#partnerExtName").val();
	var partnerStatus = $("#partnerStatus").val();
	var partnerEscal = $("#partnerEscal").val();
	var customerName = 	$.session.get('CustomerName');

	var userId = $("#userId").val();
	var password = $("#password").val();
	var ConfirmPassword = $("#cs_password").val();
	var language = $("#language").val();
	var timeZone = $("#timeZone").val();
	var DateOfDay = $("#DateOfDay").val();

	var email = $("#email").val();
	var telNumber = $("#telNumber").val();
	var cellNumber = $("#cellNumber").val();
	var commMethod = $("#commMethod").val();
	//var table = $('#partnerAcessMatrixtable').tableToJSON();

    var Locationss = [];
    
    Locationss.push(partnerLocation);

var Locationssss = Locationss;
	var AcessMatrix = $("input[name='AcessMatrix']:checked").map(function(_, el) {
		return $(el).val();
	}).get();
	var AcessEvents = $("input[name='AcessEvents']:checked").map(function(_, el) {
		return $(el).val();
	}).get();
	var Events = [];
	for(i=1;i<=AcessEvents.length;i++)
		{
			var Eve = '{ "event_Id":"E00'+i+'0","event_Status":"'+ AcessEvents[i-1]+'"}';
			Events.push(Eve);
			
		}
	var newstr = '[' +  Events.join(', ')  + ']';
	var panewstr = $.parseJSON(newstr);
var eventsList =[];
	$.each(panewstr,function(key,value){
		eventsList.push(value.event_Status);
	});
if(password   != ConfirmPassword)
{
//alert("hello");
	var txt = "Both Password and Conf-Password not Match";
	adminerror.innerHTML = txt;
$("#password,#cs_password").css({"border":"1px solid red"}).focus();
return false;}else{$("#password,#cs_password").css({"border":"1px solid #ced4da"})}

	var json_value = {
			"customer_Id" : CustmId,
		"bp_Id" : PartnerId,
		"partner_Type" : partnerType,
		"company_Name" : PartnerCompany,
		"name1" : PartnerName,
		"name2" : partnerName2,
		"location" : Location,
		"external_Number" : partnerExtName,
		"status" : partnerStatus,
		"escalation" : partnerEscal,
		"customer_Name":customerName,
		"userBP_Id" : PartnerId,
		"email_Id" : email,
		"telephoneNumber" : telNumber,
		"cellPhoneNumber" : cellNumber,
		"communication_Method" : commMethod,

		"userId" : userId,
		"password" : password,
		"language" : language,
		"time_Zone" : timeZone,
		"date_Format" : DateOfDay,
		"rolevalue" : AcessMatrix,
		"allEvent":panewstr

	};
	////alert(JSON.stringify(json_value));
///	console.log(JSON.stringify(json_value));
	
	var url = localStorage.getItem("smaasip")+"/SCMXPert/updateBusinessPartnerMaster";	
	$.ajax({
				type : "POST",
				url : url,
				headers: {
					'Content-Type' : "application/json",
		   	     	'Authorization': localStorage.getItem('SavedToken')
		   	     	  	    	        	  },
				
				data : JSON.stringify(json_value),
				beforeSend: function() {
		             // $("#loading-image").show();
		             var loading = '<img src="./images/loading.gif" id="loadingimg"/>';
		             $(".body_blur5").show().html(loading).css({"background":"#000000c2"});
		             $("#loadingimg").show();
		             var mailhtml = '<!DOCTYPE HTML><html><head></head><body style="margin:0px;"><header style="box-shadow:0px 1px 3px #000;height:60px;"><img src="https://127.0.0.1//images/logo_scm.png" style="float: right;margin-top:10px;width: 227px;height: 45px;margin-right: 25px;"/></header><div style="width:100%;margin:auto;"><h2 style="text-align:center;">Business Partner Sucessfully Updated </h2><h5 style="text-align:center;">Your Details</h5><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">User ID :</span><span style="width:50%;height:35px;float:left;">'+json_value.userId+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Password :</span><span style="width:50%;height:35px;float:left;">'+json_value.password+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Customer ID :</span><span style="width:50%;height:35px;float:left;">'+json_value.customer_Id+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Email ID :</span><span style="width:50%;height:35px;float:left;">'+json_value.email_Id+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Selected Partner Access Matrix :</span><span style="width:50%;height:35px;float:left;">'+json_value.rolevalue+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Selected Partner Access Events :</span><span style="width:50%;height:35px;float:left;">'+eventsList+'</span></div></div></body></html>';
                 //    var mailhtml = 'Mail sent successfully and updated business partner';
		             var token = $.session.get('Token');	
		             var subject = "Updated Business Partner";
		             var stringArray = [];
		            
		            	 stringArray.push(json_value.email_Id);
		         
		             var email = stringArray;
		             //console.log(json_value.customer_Id);
		        	 var data = {'to':email,'content':mailhtml,'subject':subject};
		///        	 console.log(JSON.stringify(data));
		///        	 return false;
					 $.ajax({
						url: localStorage.getItem("smaasip")+"/SCMXPert/MailSender",
				//		url: localStorage.getItem("MailUrl"),	//url used with mapping in kong gateway	
						type: "POST",
				     	headers: {
        'Authorization': localStorage.getItem('SavedToken'),
       /* "Access-Control-Allow-Origin" : "",*/
"Content-Type": "application/json",	
'dataType':'json',

        "Access-Control-Allow-Origin" : "*",
"Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
"Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
    },
				     	  data:JSON.stringify(data),
				     	 success: function (data) {
				     		
				     	 }
					 });
		              
		           },
				success : function(data) {
				
					var bp_id = '';
					getBusinessPartnerAllDetails(bp_id);
					//console.log("data")
					//console.log(json_value.userId);
					var correct = '<img src="./images/correct.gif" id="tickimg" style="width:65px;"/>';
					
					var Idb = json_value.userId;
					
					/*$(".showviewdata1")
							.show()   
							.html('<div class="alert alert-success" role="alert" >Business Partner Created <strong> Successfully! </strong> and Your ID is ' + Idb	+ '  <a href="Dashboard.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">Move to Dashboard</a>.</div>');*/
					$(".body_blur5").show().html('<div class="alert alert-success" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;"><div class="close" onclick="javascript:return canceltick();">X</div>'+escapeHtml(correct)+'Business Partner Updated <strong> Successfully! Remaining Details Send To Your Mail</strong> and Your ID is ' + escapeHtml( Idb )	+ '  <a href="Dashboard.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">Move to Dashboard</a>.</div>').css({"background":"#000000c2"});
					
				},
			});
}
/*function getAllBusinessPartner() {
	var UserId = $.session.get('UserId');
	var useridsplit = UserId.split('-');
	useridsplit[0].toString();
	useridsplit[0] + "";
	useridsplit[1].toString();
	useridsplit[1] + "";

	var token = $.session.get('Token');
	$.ajax({
		url : localStorage.getItem("smaasip")+'/SCMXPert/getAllBusinessPartner/'+useridsplit[0],
		type : "GET",
		dataType : "json",
		headers: { Authorization:localStorage.getItem('SavedToken') }
			'Authorization': localStorage.getItem('SavedToken')
		},
		success : function(filter) {
			$.each(filter,function(key, value) {
						////alert(value);
						$("#listBusinessPartner,#selectvalues").append(
								'<option value="' + value + '">' + value
										+ '</option>');
					});
		},
		statusCode : {
			401 : function() {
				// Only if your server returns a 403 status code can it come in this block. :-)
				logout();
			}
		},
		error : function(e) {
			////alert("Server error - " + e);
		}
	});

}*/
function timezones()
{
	var url = "./json/timezones.json";
	/*$.getJSON(url,function(response){
		$.each(response,function(key,value){
			$("#timeZone").append("<option value="+value.text+">"+value.text+"</option>");
		});
	});*/
	$.ajax({
    url: url,
    type : "GET",
    dataType: 'json',
    success:function(response){
   // //console.log(response);
	$.each(response,function(key,value){
			$("#timeZone").append("<option value="+escapeHtml( value.text )+">"+escapeHtml( value.text )+"</option>");
		});
       
    },
});
}

function getBusinessPartnerAllDetails(bp_id) {
	if (bp_id == "") {
		$("#updateEvent").hide();
		$("#createEvent").show();
		var token = $.session.get('Token');
		$.ajax({
			url : localStorage.getItem("smaasip")+"/SCMXPert/getBpId",
			type : "GET",
			headers: {
	        	    'Authorization': localStorage.getItem('SavedToken')
	        	  },
			success : function(filter) {

				////console.log(Cust_Id+'_BP000'+filter);
				var Role = $.session.get('Role');
				if(Role == "BUSINESSPARTNER")
				{
				var UserIds = $.session.get('CustId');
				}else{
					var UserIds = $.session.get('UserId');
				}

				var useridsplit = UserIds.split('-');
				useridsplit[0].toString();
				useridsplit[0] + "";
				useridsplit[1].toString();
				useridsplit[1] + "";
				$("#userId").val(useridsplit[0] +'-'+ filter);
				//$(".container>.hidden").html('<input type="hidden" value="BP000'+filter+'" id="BusinessPartner"/>')
				$("#partnerCompany").val('');
				$("#partnerLocation").html('<option value="">Add Location</option>');
				$("#partnerType").val('');
				$("#cellNumber").val('');
				$("#email").val('');
				$("#commMethod").val('');
				$("#DateOfDay").val('');
				$("#partnerExtName").val('');
				$("#timeZone").val('');
				$("#partnerName").val('');
				$("#partnerName2").val('');
				$("#password").val('');
				$("#cs_password").val('');
				$("#telNumber").val('');
				$("#cellNumber").val();
				$("#language").val('');
				//$("#partnerStatus").val('');
				$("#partnerEscal").val('');
				 $("#partnerAcessMatrixtable input[type=checkbox]").each(function () {
		                $(this).prop("checked", false);
		            });
				 $("#partnerAcessEvents input[type=checkbox]").each(function () {
		                $(this).prop("checked", false);
		            });
				//$('input:checkbox[name="AcessEvents"]').attr('checked',false);
			},
			statusCode : {
				401 : function() {
					// Only if your server returns a 403 status code can it come in this block. :-)
					logout();
				}
			},
			error : function(e) {
				/*//alert("Server error - " + e);*/
				//console.log(e);
			}
		});

	}
	if (bp_id != "") {
		var token = $.session.get('Token');
		$("#updateEvent").show();
		$("#createEvent").hide();
		var useridsplit = bp_id.split('-');
		useridsplit[0].toString();
		useridsplit[0] + "";
		useridsplit[1].toString();
		useridsplit[1] + "";

		$.ajax({
			url : localStorage.getItem("smaasip")+'/SCMXPert/getBusinessMaster/'+useridsplit[0],
			type : "GET",
			dataType : "json",
			headers: {
		   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
		   	     	  	    	        	  },
			success : function(filter) {
				//console.log(filter);
				$("#partnerLocation").empty();	
				$("#partnerLocation").append('<option value="'+escapeHtml(filter.location)+'">'+escapeHtml(filter.location)+'</option>')
			/*	$("#partnerLocation").append('<option value=""></option>')
				$("#partnerLocation").attr('value',filter.location);
			$("#partnerLocation").text(filter.location);*/
				$("#partnerNewId").val(filter.bp_Id);
				$("#partnerCompany").val(filter.company_Name);
				$("#partnerLocation").val(filter.location);
				$("#partnerType").val(filter.partner_Type);
				$("#cellNumber").val(filter.cellPhoneNumber);
				$("#telNumber").val(filter.telephoneNumber);
				$("#email").val(filter.email_Id);
				$("#commMethod").val(filter.communication_Method);
				$("#DateOfDay").val(filter.date_Format);
				$("#partnerExtName").val(filter.external_Number);
				$("#timeZone").val(filter.time_Zone);
				$("#partnerName").val(filter.name1);
				$("#partnerName2").val(filter.name2);
				$("#password").val(filter.password);
				$("#cs_password").val(filter.password);
				$("#language").val(filter.language);
				$("#userId").val(filter.userId);
				$("#showPassword,#showPasswordc").css({"opacity":"1"});
				$("#partnerStatus").val(filter.status);
				//var Access = ["Dashboard","UpdateEvent","RouteMaster","CompleteShipment","GoodsMaster"];
				$.each(filter.rolevalue,function(key,value){
					$('input[type=checkbox][value='+value+']').prop("checked",true)
					});
				let EventsGets = [];
				$.each(filter.allEvent,function(key,value){
					//$('input[type=checkbox][value='+value.event_Status+']').prop("checked",true);
					EventsGets.push(value.event_Status);
				});
				//console.log(EventsGets);
				$.each(EventsGets,function(key,value){
					//console.log(value);
					$('input[type=checkbox][value="'+value+'"]').prop("checked",true)
					});
			},
			statusCode : {
				401 : function() {
					// Only if your server returns a 403 status code can it come in this block. :-)
					logout();
				}
			},
			error : function(e) {
				////alert("Server error - " + e);
			}
		});
	}

}

/*function getAllBusinessPartner()
{
 var token = $.session.get('Token');
 $.ajax({
		url: localStorage.getItem("smaasip")+'/SCMXPert/getAllBusinessPartner',
     	type: "GET",
     	dataType: "json",
     	headers: {
    	    'Authorization': localStorage.getItem('SavedToken')
    	  },
     	success:function(filter){
		 $.each(filter,function(key,value){
			 $("#listBusinessPartner").append('<option value="'+value+'">'+value+'</option>');
		 });
     	},
     	statusCode: {
     	    401: function() {
     	       // Only if your server returns a 403 status code can it come in this block. :-)
     	    	logout();
     	    }
     	},
     	error: function (e) {
     	    ////alert("Server error - " + e);
     	} 
	 });

}

function getBusinessPartnerAllDetails(bp_id)
{
if(bp_id == "")
{
var Cust_Id = $.session.get('UserId');
var token = $.session.get('Token');
//console.log(Cust_Id);
//console.log(Token);
$.ajax({
url: localStorage.getItem("smaasip")+"/SCMXPert/getIncrementedBP_ID/"+Cust_Id,
type: "GET",
dataType: "json",
headers: {
'Authorization': localStorage.getItem('SavedToken')
},
success:function(filter){
 
 ----------  Modified --------
 
 var useridsplit = Cust_Id.split('-');
	useridsplit[0].toString();
	useridsplit[0] + "";
	useridsplit[1].toString();
	useridsplit[1] + "";
////console.log(Cust_Id+'_BP000'+filter);
	$("#userId").val(useridsplit[0]+'-BP000'+filter);
$("#userId").val(Cust_Id+'_BP000'+filter);
$(".container>.hidden").html('<input type="hidden" value="BP000'+filter+'" id="BusinessPartner"/>')
$("#partnerCompany").val('');
//$("#partnerType").val(filter.partnerType);
$("#cellNumber").val('');
$("#email").val('');
$("#commMethod").val('');
$("#DateOfDay").val('');
$("#partnerExtName").val('');
$("#timeZone").val('');
$("#partnerName").val('');
$("#partnerName2").val('');
$("#password").val('');
$("#language").val('');
},
statusCode: {
401: function() {
// Only if your server returns a 403 status code can it come in this block. :-)
logout();
}
},
error: function (e) {
//alert("Server error - " + e);
//console.log(e);
} 
});

}
if(bp_id != "")
{
var token = $.session.get('Token');
$.ajax({
url: localStorage.getItem("smaasip")+'/SCMXPert/getBusinessMaster/'+bp_id,
type: "GET",
dataType: "json",
headers: {
'Authorization': localStorage.getItem('SavedToken')
},
success:function(filter){
//console.log(filter);
$("#partnerNewId").val(filter.bp_Id);
$("#partnerCompany").val(filter.company_Name);
//$("#partnerType").val(filter.partnerType);
$("#cellNumber").val(filter.cellPhoneNumber);
$("#email").val(filter.email_Id);
$("#commMethod").val(filter.communication_Method);
$("#DateOfDay").val(filter.date_Format);
$("#partnerExtName").val(filter.external_Number);
$("#timeZone").val(filter.time_Zone);
$("#partnerName").val(filter.name1);
$("#partnerName2").val(filter.name2);
$("#password").val(filter.password);
$("#language").val(filter.language);
$("#userId").val(filter.userId);
},
statusCode: {
401: function() {
// Only if your server returns a 403 status code can it come in this block. :-)
logout();
}
},
error: function (e) {
////alert("Server error - " + e);
} 
});
}

}
 */

/*function getBusinessPartnerAllDetails(bp_id)
{
 var token = $.session.get('Token');
 $.ajax({
		url: localStorage.getItem("smaasip")+'/SCMXPert/getBusinessMaster/'+bp_id,
     	type: "GET",
     	dataType: "json",
     	headers: {
    	    'Authorization': localStorage.getItem('SavedToken')
    	  },
     	success:function(filter){
		//console.log(filter);
		$("#partnerType").val(filter.bPType);
     		$("#partnerCompany").val(filter.company_Name);
     		$("#cellNumber").val(filter.cellPhoneNumber);
     		$("#email").val(filter.email_Id);
     		$("#commMethod").val(filter.communication_Method);
     		$("#DateOfDay").val(filter.date_Format);
     		$("#partnerExtName").val(filter.external_Number);
     		
     		$("#timeZone").val(filter.time_Zone);
     		 $("#partnerName").val(filter.name1);
     		$("#partnerName2").val(filter.name2);
     		$("#password").val(filter.password);
     		$("#language").val(filter.language);
     		$("#userId").val(filter.userId);
     		
		$.each(filter,function(key,value){
			
			//console.log(value);
		})
     	},
     	statusCode: {
     	    401: function() {
     	       // Only if your server returns a 403 status code can it come in this block. :-)
     	    	logout();
     	    }
     	},
     	error: function (e) {
     	    ////alert("Server error - " + e);
     	} 
	 });
}*/

/* function getBusinessPartnerAllDetails(bp_id)
 {
 if(bp_id == "New") {
 //console.log("-----------checking-------")
 //console.log(bp_id)
 document.getElementById('updateEvent').style.visibility = 'hidden';
 } else {
 document.getElementById('updateEvent').style.visibility = 'visible';
 document.getElementById('createEvent').style.visibility = 'hidden';
 }

 if(bp_id == "")
 {
 var Cust_Id = $.session.get('Cust_Id');
 var token = $.session.get('Token');
 //console.log(Cust_Id);
 //console.log(Token);
 $.ajax({
 url: localStorage.getItem("smaasip")+"/SCMXPert/getIncrementedBP_ID/"+Cust_Id,
 type: "GET",
 dataType: "json",
 headers: {
 'Authorization': localStorage.getItem('SavedToken')
 },
 success:function(filter){

 $("#userId").val(Cust_Id+'_BP000'+filter);
 $("#partnerCompany").val('');

 $("#cellNumber").val('');
 $("#email").val('');
 $("#commMethod").val('');
 $("#DateOfDay").val('');
 $("#partnerExtName").val('');
 $("#timeZone").val('');
 $("#partnerName").val('');
 $("#partnerName2").val('');
 $("#password").val('');
 $("#language").val('');
 },
 statusCode: {
 401: function() {
 // Only if your server returns a 403 status code can it come in this block. :-)
 logout();
 }
 },
 error: function (e) {
 //alert("Server error - " + e);
 //console.log(e);
 } 
 });

 }
 if(bp_id != "")
 {
 var token = $.session.get('Token');
 $.ajax({
 url: localStorage.getItem("smaasip")+'/SCMXPert/getBusinessMaster/'+bp_id,
 type: "GET",
 dataType: "json",
 headers: {
 'Authorization': localStorage.getItem('SavedToken')
 },
 success:function(filter){
 //console.log(filter);
 $("#partnerNewId").val(filter.bp_Id);
 $("#partnerCompany").val(filter.company_Name);
 //$("#partnerType").val(filter.partnerType);
 $("#cellNumber").val(filter.cellPhoneNumber);
 $("#email").val(filter.email_Id);
 $("#commMethod").val(filter.communication_Method);
 $("#DateOfDay").val(filter.date_Format);
 $("#partnerExtName").val(filter.external_Number);
 $("#timeZone").val(filter.time_Zone);
 $("#partnerName").val(filter.name1);
 $("#partnerName2").val(filter.name2);
 $("#password").val(filter.password);
 $("#language").val(filter.language);
 $("#userId").val(filter.userId);
 },
 statusCode: {
 401: function() {
 // Only if your server returns a 403 status code can it come in this block. :-)
 logout();
 }
 },
 error: function (e) {
 ////alert("Server error - " + e);
 } 
 });
 }*/

function addNewLocation() {
	$(".addShipfromPop,.body_blur").show();
}
function addNewLocationfrom()

 {
	$(".invalidText").focusout( function(e) {
var reg =/<(.|\n)*?>/g;
if (reg.test($('.invalidText').val()) == true) {
alert('Invalid input');
}
e.preventDefault();

});
	var shipFrom = $("#shipFrom").val();
	
	var shipFrom1 = shipFrom;
	var error = document.getElementById("error2");
	
	if(shipFrom == '')
	{
	var txt = "Please Enter Location";
	error2.innerHTML = txt;
	return false;
	}
	
	
	$("#partnerLocation").append('<option value="' + escapeHtml(shipFrom) + '">' + escapeHtml(shipFrom) + '</option>');
	$("#partnerLocation").val(shipFrom);
	$("#shipFrom").val('');
	$(".body_blur,.addShipfromPop,.addShipToPop").hide();
}

function cancellocation(){
	
	var CancelEventbdfg = $("#CancelEventbdfg").val();
	  
	var error2 = document.getElementById("error2");
	
	if(CancelEventbdfg == ""){
		
		var txt = " ";
		error2.innerHTML = txt;
	}
	$("#shipFrom").val('');
	$("#showprelocationf").empty();

	
}



function changeAppendValuepartner(value) {
	$("#partnerAcessMatrixtable")
			.append(
					'<tr><td style="padding-left:5px;"><input type="checkbox" name="vehicle1" value="'
							+ escapeHtml( value )
							+ '"></td><td style="text-align:left;">'
							+ escapeHtml( value ) + '</td></tr>');
}


function canceltick(){
     $(".body_blur").empty();
	document.location.reload();

	};

function escapeHtml(unsafe)
{
	//console.log(unsafe)
	/*if(unsafe == null){
	alert(unsafe);
	alert(unsafe.replace);
	}*/
	if(typeof unsafe === "undefined" || !unsafe || typeof unsafe === null || typeof unsafe.replace === "undefined" || unsafe.length<1){
		return unsafe
	}
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");

 }
// function createBusinessPartner()
//{
/* var AcessMatrix = $("input[name='AcessMatrix']:checked").map(function(_, el) {
	 return $(el).val();
	}).get();
 //console.log(AcessMatrix);*/
//}
