

$(function() {
	getAllAlertMasterid();
	alertsList();	
	$.ajax({
		url:"./json/CountryCodes.json",
		type:"get",
		dataType:"json",
		success:function(response){
			////console.log(response);
			$.each(response,function(key,value){
				$("#listsupportcenter").append('<option value="'+escapeHtml(value.name)+'">'+escapeHtml(value.name)+'</option>');
			});
		}
	});
});
function selectCountryList(country)
{
	$.ajax({
		url:"./json/CountryCodes.json",
		type:"get",
		dataType:"json",
		success:function(response){
			////console.log(response);
			$.each(response,function(key,value){
				if(value.name == country)
					{
					$("#smsphone").val(value.dial_code+'-');
					
					
					}
				
			});
		}
	})
}
function createAlertMaster() {
	
	var UserId = $.session.get('UserId');
	var CustmId = $("#Cust_Id").val();
	//var CustmId = UserId;
	var Custmname = $("#cust_name").val();
	var partnername = $("#bp_name").val();
	
	var Alertid = $("#alert_id_new").val();
//	var useridsplit = Alertids.split('-');
//	useridsplit[0].toString();
//	useridsplit[0] + "";
//	useridsplit[1].toString();
//	useridsplit[1] + "";
//	var Alertid = useridsplit[1];
	
	
	var AlertName = $("#AlertName").val();
	var AlertType = $("#listAlertType").val();
	var Alertpriority= $("#listAlertpriority").val();
	var Alertmode = $("#listAlertmode").val();
	var email = $("#email").val();
	var array = email.split(",");
	
	
	var Emailsub = $("#Emailsub").val();
	var EmailMess = $("#EmailMess").val();
	var smsphone = $("#smsphone").val();
	var smsmess = $("#smsmess").val();
	var voicephone = $("#voicenum").val();
	var supportcenter = $("#listsupportcenter").val();
	var chatbotid = $("#listchatbotid").val();
	var Alertcontact = $("#Alertcont").val();
	var Alertfrequency = $("#Alertfreq").val();
	var days_months = $("#days_months").val();
	var alertremd = $("#listalertremd").val();
	var alertescl = $("#listalertescl").val();
	var escltime = $("#escltime").val();
	var days_months = $("#days_months").val();
	var edimessage = $("#listedimess").val();
	var edireason = $("#listedireas").val();
	var ediservice = $("#listediserv").val();
	var webservice = $("#listwebserv").val();
	var jsonformat = $("#listjsonfor").val();
	var jsonpath = $("#jsonpath").val();
	var partnerservice = $("#listpartnerserv").val();
	var blockchain = $("#listbolckchain").val();
	var blockchainkey = $("#listblockchainkey").val();
	
	
	/*-----------  validation ----------*/
	
	if (alert_id_new == "") {
		$("#alert_id_new").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#alert_id_new").focus().css("border", "1px solid #CCC");
	}
	
	if (AlertName == "") {
		$("#AlertName").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#AlertName").focus().css("border", "1px solid #CCC");
	}

    if (listAlertType == "") {
		$("#listAlertType").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#listAlertType").focus().css("border", "1px solid #CCC");
	}
	
	if (listAlertpriority == "") {
		$("#listAlertpriority").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#listAlertpriority").focus().css("border", "1px solid #CCC");
	}
	
    if (listAlertmode == "") {
		$("#listAlertmode").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#listAlertmode").focus().css("border", "1px solid #CCC");
	}

    if (email == "") {
		$("#email").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#email").focus().css("border", "1px solid #CCC");
	}
   
    if (Emailsub == "") {
		$("#Emailsub").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#Emailsub").focus().css("border", "1px solid #CCC");
	}

    if (EmailMess == "") {
		$("#EmailMess").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#EmailMess").focus().css("border", "1px solid #CCC");
	}
    
    
    if (smsphone == "") {
		$("#smsphone").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#smsphone").focus().css("border", "1px solid #CCC");
	}
    
    if (voicenum == "") {
		$("#voicenum").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#voicenum").focus().css("border", "1px solid #CCC");
	}
    
    if (Alertcont == "") {
		$("#Alertcont").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#Alertcont").focus().css("border", "1px solid #CCC");
	}
    
    if (Alertfreq == "") {
		$("#Alertfreq").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#Alertfreq").focus().css("border", "1px solid #CCC");
	}
    
    if (escltime == "") {
		$("#escltime").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#escltime").focus().css("border", "1px solid #CCC");
	}
    
    if (escltime == "") {
		$("#escltime").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#escltime").focus().css("border", "1px solid #CCC");
	}
    
var json_value = {
		"alert_Escallation":alertescl,
		"alert_Frequency":Alertfrequency,
		"alert_Priority":Alertpriority,
		"alert_Remediation":alertremd,
		"email_Addresses":array,
		"escallation_Time":escltime,
		"support_Center":supportcenter,
		"partner_service":partnerservice,
		"blockchain_key":blockchainkey,
		"alert_Contact":Alertcontact,
		"alert_Id":Alertid,
		"alert_Mode":Alertmode,
		"alert_Name":AlertName,
		"alert_Type":AlertType,
		"chatbot_Id":chatbotid,
		"customer_Id":CustmId,
		"customer_Name":Custmname,
		"email_Message":EmailMess,
		"email_Subject":Emailsub,
		"partner_Name":partnername,
		"phone":smsphone,
		"message":smsmess,
		"edi_Message":edimessage,
		"edi_Reason":edireason,
		"edi_Service":ediservice,
		"webService":webservice,
		"json_Format":jsonformat,
		"json_Path":jsonpath,
		"blockChain":blockchain,
		"voice_Phone":voicephone
		

	};
/*//console.log(array);
//console.log(JSON.stringify(json_value));
return false;*/
////alert(JSON.stringify(json_value));
//console.log(JSON.stringify(json_value));
//return false;
var token = $.session.get('Token');
var url = localStorage.getItem("smaasip")+"/SCMXPert/alerts";
 $.ajax({  
	 type : "post",
		url : url,
		headers: {
		   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken'),
		   	     	  	    	        	    'Content-type': 'application/json'
		   	     	  	    	        	  },
		data : JSON.stringify(json_value),
		dataType: "json",
		beforeSend: function() {
			////alert("hello");
//             $("#loading-image").show();
//            var loading = '<img src="./images/loading.gif" id="loadingimg"/>';
//            $(".body_blur").show().html(loading).css({"background":"#000000c2"});
//            $("#loadingimg").show();
			var UserId = $.session.get('UserId');
			var mailhtml = '<!DOCTYPE HTML><html><head></head><body style="margin:0px;"><header style="box-shadow:0px 1px 3px #000;height:60px;"><img src="https://127.0.0.1/SCMXPert/images/logo_scm.png" style="float: right;margin-top:10px;width: 227px;height: 45px;margin-right: 25px;"/></header><div style="width:100%;margin:auto;"><h2 style="text-align:center;">Alert Master Sucessfully Created </h2><h5 style="text-align:center;">Your Details</h5><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">User ID :</span><span style="width:50%;height:35px;float:left;">'+escapeHtml(UserId)+'</span></div><div></div><div><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Customer ID :</span><span style="width:50%;height:35px;float:left;">'+escapeHtml(json_value.customer_Id)+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Email ID :</span><span style="width:50%;height:35px;float:left;">'+escapeHtml(json_value.email_Addresses)+'</span></div></div></body></html>';
            var token = $.session.get('Token');	
            var subject = "Created Alert Master";
            var email = json_value.email_Addresses;
        	 var data = {'to':email,'content':mailhtml,'subject':subject};
///       	 console.log(data);
///       	 return false;
			 $.ajax({
				url: localStorage.getItem("smaasip")+"/SCMXPert/MailSender",
	///		    url: localStorage.getItem("MailUrl"),	
		     	type: "POST",
		     	headers: {
		   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken'),
		   	     	  	    	        	    'Content-type': 'application/json'
		   	     	  	    	        	  },
		     	  data:JSON.stringify(data),
		     	 success: function (data) {
		     		 //alert(data);
		     		
		     	 }
			 });
		
            },
            success : function(data) {
            	//console.log(UserId);
            	
           	var alertid = '';
           getAllAlertMasterid();
            	//console.log(data);
            	//console.log($("#listAlertid"));
            	document.location.reload();
            },
	 
 });
 
}
function getAllAlertMasterid() {
	////alert("haisai");
	

	var UserId = $.session.get('UserId');
	$("#updateEvent").hide();
	$("#createEvent").show();
	////console.log(UserId);
	var useridsplit = UserId.split('-');
	useridsplit[0].toString();
	useridsplit[0] + "";
	useridsplit[1].toString();
	useridsplit[1] + "";
	//console.log(UserId);
	var token = $.session.get('Token');
	////console.log(token);
	 
	var url = localStorage.getItem("smaasip")+"/SCMXPert/getIncrementedalertId/"+useridsplit[0];	
	//console.log(url);
	$.ajax({
		type : "GET",
		url : url,
		headers: {
		   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
		   	     	  	    	        	  },
		success : function(filter) {
			$("#alert_id_new").val(filter);
			/*//alert(filter)
			//console.log(url);
			//console.log(filter);
			$.each(filter,
					function(key, value) {
				//console.log(alert_Id);
				$.each(value,
					function(key, yes) {
					$("#listAlertid").append(
							'<option value="' + yes.alert_Id + '">' + yes.alert_Id
									+ '</option>');						

				});
						
					});*/
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

function updateAlertMaster(){
	var CustmId = $("#Cust_Id").val();
	//var CustmId = UserId;
	var Custmname = $("#cust_name").val();
	var partnername = $("#bp_name").val();
	
	var Alertid = $("#listAlertid").val();
	var AlertName = $("#AlertName").val();
	var AlertType = $("#listAlertType").val();
	var Alertpriority= $("#listAlertpriority").val();
	var Alertmode = $("#listAlertmode").val();
	var email = $("#email").val();
	var array = email.split(",");
	
	
	var Emailsub = $("#Emailsub").val();
	var EmailMess = $("#EmailMess").val();
	var smsphone = $("#smsphone").val();
	var smsmess = $("#smsmess").val();
	var voicephone = $("#voicenum").val();
	var supportcenter = $("#listsupportcenter").val();
	var chatbotid = $("#listchatbotid").val();
	var Alertcontact = $("#Alertcont").val();
	var Alertfrequency = $("#Alertfreq").val();
	var days_months = $("#days_months").val();
	var alertremd = $("#listalertremd").val();
	var alertescl = $("#listalertescl").val();
	var escltime = $("#escltime").val();
	var days_months = $("#days_months").val();
	var edimessage = $("#listedimess").val();
	var edireason = $("#listedireas").val();
	var ediservice = $("#listediserv").val();
	var webservice = $("#listwebserv").val();
	var jsonformat = $("#listjsonfor").val();
	var jsonpath = $("#jsonpath").val();
	var partnerservice = $("#listpartnerserv").val();
	var blockchain = $("#listbolckchain").val();
	var blockchainkey = $("#listblockchainkey").val();
	
	

var json_value = {
		

			"alert_Escallation":alertescl,
			"alert_Frequency":Alertfrequency,
			"alert_Priority":Alertpriority,
			"alert_Remediation":alertremd,
			"email_Addresses":array,
			"escallation_Time":escltime,
			"support_Center":supportcenter,
			"partner_service":partnerservice,
			"blockchain_key":blockchainkey,
			"alert_Contact":Alertcontact,
			"alert_Id":Alertid,
			"alert_Mode":Alertmode,
			"alert_Name":AlertName,
			"alert_Type":AlertType,
			"chatbot_Id":chatbotid,
			"customer_Id":CustmId,
			"customer_Name":Custmname,
			"email_Message":EmailMess,
			"email_Subject":Emailsub,
			"partner_Name":partnername,
			"phone":smsphone,
			"message":smsmess,
			"edi_Message":edimessage,
			"edi_Reason":edireason,
			"edi_Service":ediservice,
			"webService":webservice,
			"json_Format":jsonformat,
			"json_Path":jsonpath,
			"blockChain":blockchain,
			"voice_Phone":voicephone
		};
////console.log(JSON.stringify(json_value));
//return false;
var token = $.session.get('Token');
//console.log(Token);
var url= localStorage.getItem("smaasip")+"/SCMXPert/updateAlerts";
$.ajax({
	type : "post",
	url : url,
	headers: {
		   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken'),
		   	     	  	    	        	    'Content-type': 'application/json'
		   	     	  	    	        	  },
	data : JSON.stringify(json_value),
	 dataType: "json",
	beforeSend: function() {
		//alert("Update");
		var UserId = $.session.get('UserId');
		var mailhtml = '<!DOCTYPE HTML><html><head></head><body style="margin:0px;"><header style="box-shadow:0px 1px 3px #000;height:60px;"><img src="https://127.0.0.1/SCMXPert/images/logo_scm.png" style="float: right;margin-top:10px;width: 227px;height: 45px;margin-right: 25px;"/></header><div style="width:100%;margin:auto;"><h2 style="text-align:center;">Alert Master Sucessfully Updated </h2><h5 style="text-align:center;">Your Details</h5><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">User ID :</span><span style="width:50%;height:35px;float:left;">'+escapeHtml(UserId)+'</span></div><div></div><div><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Customer ID :</span><span style="width:50%;height:35px;float:left;">'+escapeHtml(json_value.customer_Id)+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Email ID :</span><span style="width:50%;height:35px;float:left;">'+escapeHtml(json_value.email_Addresses)+'</span></div></div></body></html>';
        var token = $.session.get('Token');	
        var subject = "Updated Alert Master";
        var email = json_value.email_Addresses;
   	 var data = {'to':email,'content':mailhtml,'subject':subject};
  	 //console.log(data);
		 $.ajax({
		//	url: localStorage.getItem("smaasip")+"/SCMXPert/MailSender",
			url: localStorage.getItem("MailUrl"),			
	     	type: "POST",
	     	headers: {
		   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken'),
		   	     	  	    	        	    'Content-type': 'application/json'
		   	     	  	    	        	  },
	     	  data:JSON.stringify(data),
	     	 success: function (data) {
	     		 //alert(data);
	     		
	     	 }
		 });
//         $("#loading-image").show();
//        var loading = '<img src="./images/loading.gif" id="loadingimg"/>';
//        $(".body_blur").show().html(loading).css({"background":"#000000c2"});
//        $("#loadingimg").show();
        },
        success : function(data) {
        	////console.log(UserId);
        	//var alert_id='';
        	//getAlertMasterAllDetails(alert_id);
           //console.log(data);
           document.location.reload();
          
           
        }
	
	
});
	
}

function alertsList()
{
	var UserId = $.session.get('UserId');
//	$("#updateEvent").hide();
//	$("#createEvent").show();
	var token = $.session.get('Token');
	var useridsplit = UserId.split('-');
	useridsplit[0].toString();
	useridsplit[0] + "";
	useridsplit[1].toString();
	useridsplit[1] + "";
	$.ajax({
		url : localStorage.getItem("smaasip")+'/SCMXPert/getAlerts/'+useridsplit[0],
		type : "GET",
		dataType : "json",
		headers: {
		   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
		   	     	  	    	        	  },
		success : function(filter) {
			$.each(filter,function(key,value){
				$("#listAlertid").append('<option value="'+escapeHtml(value.alert_Id)+'">'+escapeHtml(value.alert_Id)+'</option>');
			});


		}
	});
	}
function getAlertMasterAllDetails(alert_Id) {
	if(alert_Id == '')
		{
		document.location.reload();
		}
	if (alert_Id != "") {
//		$("#updateEvent").hide();
//		$("#createEvent").show();
		var token = $.session.get('Token');
		var UserId = $.session.get('UserId');
		$("#updateEvent").show();
	    $("#createEvent").hide();
		var useridsplit = UserId.split('-');
		useridsplit[0].toString();
		useridsplit[0] + "";
		useridsplit[1].toString();
		useridsplit[1] + "";
		//console.log("saikiran@"+alert_Id);
		$.ajax({
			url :  localStorage.getItem("smaasip")+'/SCMXPert/getAlertsID/'+useridsplit[0]+'/'+alert_Id,			
			type : "GET",
			dataType : "json",
			headers: {
		   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
		   	     	  	    	        	  },
			success : function(filter) {
				////console.log("ftgyh"+filter);
				
				$.each(filter,function(key,value){
					
					//console.log(value.email_Addresses);
					$("#AlertName").val(value.alert_Name);
					$("#listAlertType").val(value.alert_Type);
					$("#listAlertpriority").val(value.alert_Priority);
					$("#listAlertmode").val(value.alert_Mode);
					$("#email").val(value.email_Addresses);
					$("#Emailsub").val(value.email_Subject);
					$("#EmailMess").val(value.email_Message);
					$("#smsphone").val(value.phone);
					$("#smsmess").val(value.message);
					$("#voicenum").val(value.voice_Phone);
					$("#listsupportcenter").val(value.support_Center);
					$("#listchatbotid").val(value.chatbot_Id);
					
					$("#Alertcont").val(value.alert_Contact);
					$("#Alertfreq").val(value.alert_Frequency);
					$("#listalertremd").val(value.alert_Remediation);
					$("#listalertescl").val(value.alert_Escallation);
					$("#escltime").val(value.escallation_Time);
					$("#listedimess").val(value.edi_Message);
					$("#listedireas").val(value.edi_Reason);
					$("#listediserv").val(value.edi_Service);
					$("#listwebserv").val(value.webService);
					$("#listjsonfor").val(value.json_Format);
					$("#jsonpath").val(value.json_Path);
					$("#listpartnerserv").val(value.partner_service);
					$("#listbolckchain").val(value.blockChain);
					$("#listblockchainkey").val(value.blockchain_key);
					
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


function ShowAlertMasterList(alert_Id){

	var token = $.session.get('Token');
	var UserId = $.session.get('UserId');
	$("#updateEvent").show();
    $("#createEvent").hide();
	var useridsplit = UserId.split('-');
	useridsplit[0].toString();
	useridsplit[0] + "";
	useridsplit[1].toString();
	useridsplit[1] + "";

	//console.log(alert_Id);
	var Cust_Id = $("#Cust_Id").val();
	$(".body_blur").show();
	$(".ShowAlertMasterList").fadeIn().css({"width":"75%","height":"80%","background":"#fff","top": "0px","position":"fixed","z-index":"9","margin":"5% 1%","overflow-y":"auto","border-radius":"5px"});
	$(".ShowAlertMasterList").html("<div><h3 style='width:98%;margin:0px;text-align:center;padding-top:1%;float:left;'>AlertMaster List</h3><div style='float:left;font-weight:bold;font-size:14px;padding-top:1%;margin-top:10px;width: 1.7%;height: 30px;' class='close' cursor:pointer onclick='javascript:return closerouteslist();'>X</div></div><table id='showallAlertMasterList' class='table'><thead><tr><th>Alert Id</th><th>AlertName</th><th>Alert Type</th><th>Alert Priority</th><th>Alert Mode</th><th>Email Address</th><th>Email subject</th><th>Email Message</th><th>Support Center</th><th>Sms Phone</th><th>Sms Message</th><th>Voice Phone</th>" +
			"<th>Chat Id</th><th>Alert Contact</th><th>Alert Frequency</th><th>Alert Remediation</th><th>Alert Escalation</th><th>Escalation Time</th><th>Edi Reason</th><th>Edi Service</th><th>Web Service</th><th>Json Format</th>" +
			"<th>Json Path</th><th>Partner Service</th><th>Block Chain</th><th>Blockchain key</th><th>Action</th></tr></thead><tbody></tbody></table>")
	$("#showallAlertMasterList").css({"font-size":"12px","font-weight":"bold"});
	    var UserId = $.session.get('UserId');
	
	

	    var UserId = UserId;
	 	var useridsplit = UserId.split('-'); 	
	 	useridsplit[0].toString();
	 	useridsplit[0] + "";
	 	useridsplit[1].toString();
	 	useridsplit[1] + "";
	var GoodsMasterGetRoute = localStorage.getItem("smaasip")+"/SCMXPert/getAlerts/"+useridsplit[0];  
	//console.log(GoodsMasterGetRoute);
/*	$.getJSON(GoodsMasterGetRoute,function(response){	
		//console.log(response);
		
			var num = 0
		$.each(response,function(a,b){
			var numid = num+1;
			var tabletr="<tr ><td>"+b.alert_Id+"</td><td>"+b.alert_Name+"</td><td>"+b.alert_Type+"</td><td>"+b.alert_Priority+"</td><td>"+b.alert_Mode+"</td><td>"+b.email_Addresses+"</td><td>"+b.email_Subject+"</td><td>"+b.email_Message+"</td><td>"+b.support_Center+"</td><td>"+b.phone+"</td><td>"+b.message+"</td><td>"+b.voice_Phone+"</td><td>"+b.chatbot_Id+"</td><td>"+b.alert_Contact+"</td><td>"+b.alert_Frequency+"</td><td>"+b.alert_Remediation+"</td><td>"+b.alert_Escallation+"</td>" +
					"<td>"+b.escallation_Time+"</td><td>"+b.edi_Reason+"</td><td>"+b.edi_Service+"</td><td>"+b.webService+"</td><td>"+b.json_Format+"</td>" +
					"<td>"+b.json_Path+"</td><td>"+b.partner_service+"</td><td>"+b.blockChain+"</td><td>"+b.blockchain_key+"</td><td><img src='./images/rubbish-bin (1).png' style='width:16px;height:16px; cursor:pointer' title='Delete' onclick='javascript:return deleteRouteItem(\""+useridsplit[0]+"\",\""+b.route_Id+"\");'/></td></tr>"
			$("#showallAlertMasterList >tbody").append(tabletr);
			num++;
		});
		});*/
		$.ajax({
    url: GoodsMasterGetRoute,
    type : "GET",
    dataType: 'json',
	headers: {
	        	    'Authorization': localStorage.getItem('SavedToken')
	        	  },
    success:function(response){
   // //console.log(response);
		
			var num = 0
		$.each(response,function(a,b){
			var numid = num+1;
			var tabletr="<tr ><td>"+escapeHtml(b.alert_Id)+"</td><td>"+escapeHtml(b.alert_Name)+"</td><td>"+escapeHtml(b.alert_Type)+"</td><td>"+escapeHtml(b.alert_Priority)+"</td><td>"+escapeHtml(b.alert_Mode)+"</td><td>"+escapeHtml(b.email_Addresses)+"</td><td>"+escapeHtml(b.email_Subject)+"</td><td>"+escapeHtml(b.email_Message)+"</td><td>"+escapeHtml(b.support_Center)+"</td><td>"+escapeHtml(b.phone)+"</td><td>"+escapeHtml(b.message)+"</td><td>"+escapeHtml(b.voice_Phone)+"</td><td>"+escapeHtml(b.chatbot_Id)+"</td><td>"+escapeHtml(b.alert_Contact)+"</td><td>"+escapeHtml(b.alert_Frequency)+"</td><td>"+escapeHtml(b.alert_Remediation)+"</td><td>"+escapeHtml(b.alert_Escallation)+"</td>" +
					"<td>"+escapeHtml(b.escallation_Time)+"</td><td>"+escapeHtml(b.edi_Reason)+"</td><td>"+escapeHtml(b.edi_Service)+"</td><td>"+escapeHtml(b.webService)+"</td><td>"+escapeHtml(b.json_Format)+"</td>" +
					"<td>"+escapeHtml(b.json_Path)+"</td><td>"+escapeHtml(b.partner_service)+"</td><td>"+escapeHtml(b.blockChain)+"</td><td>"+escapeHtml(b.blockchain_key)+"</td><td><img src='./images/rubbish-bin (1).png' style='width:16px;height:16px; cursor:pointer' title='Delete' onclick='javascript:return deleteRouteItem(\""+escapeHtml(useridsplit[0])+"\",\""+escapeHtml(b.route_Id)+"\");'/></td></tr>"
			$("#showallAlertMasterList >tbody").append(tabletr);
			num++;
		});
       
    },
});
}
function closerouteslist()
{
	//AllRoutes();
	$(".body_blur").hide();
	 $(".ShowAlertMasterList").fadeOut();
	
}

function DownloadAlertMasterList(){	
	
	$("#showallAlertMasterList").tableToCSV({  
	    filename: 'AlertMasterList'  
	});
}

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


