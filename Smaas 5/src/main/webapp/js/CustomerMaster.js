$(document).ready(function(){
	countryList();
	customerId();
	GetAllCustomer();
	timezones();
	$(".body_blur > .close").on("click",function(){
		document.location.reload();
	});
});
function sendEmailToAdminCustomer(valueText){
	var newCustomer = $("#newCustomerID").val();
	var customer_name = $("#customer_name").val();


	var custSector = $("#custSector").val();
	var custBusiness = $("#custBusiness").val();
	//var dunsNO = $("#dunsNO").val();
	//var g10NO = $("#g10NO").val();
//	var custStatus = $("#custStatus").val();
	var custConctName = $("#custConctName").val();
//	var designatin = $("#designatin").val();
	var emailAddress = $("#emailAddress").val();
	var telNo = $("#telNo").val();
	var phoneNo = $("#phoneNo").val();
	var altConctName = $("#altConctName").val();
	var altEmailAdd = $("#altEmailAdd").val();
	var altPhoneNO = $("#altPhoneNO").val();
	var adminId = $("#adminId").val();
	var adminPartnerRole = $("#adminPartnerRole").val();
	var adminName = $("#adminName").val();
	var adminEmail = $("#adminEmail").val();
	var adminuserId = $("#adminuserId").val();
	var adminpassword = $("#adminpassword").val();
//	var admincon_password = $("#admincon-password").val();
	var admintelNo = $("#admintelNo").val();
	var adminCellNo = $("#adminCellNo").val();
	var adminCommMethod = $("#adminCommMethod").val();
	var adminLanguage = $("#adminLanguage").val();
	var adminTimeZone = $("#adminTimeZone").val();
	var adminDateFormate = $("#adminDateFormate").val();
	var json_value = {

			"customer_Id" :newCustomer,
			"name1" : customer_name,
			"name2" : customer_name2,
		//	"external_Number" : externalNO,
			"customerSector":custSector,
		//	"business_Partner_Id" : [],
			"customer_Business":custBusiness,
	//		"duns" : dunsNO,
	//		"g10" : g10NO,
	//		"custStatus":custStatus,

	//		"address1" : street1,
	//		"address2" : street2,
	//		"address3" : street3,
	//		"city" : city,
	//		"state" : region,
	//		"country" : countryList,
	//		"zip" : zipPin,
	//		"timezone" : timeZone,


			"contact_Name" : custConctName,
			"designation" : designatin,
			"email_Id" : emailAddress,
			"telephoneNumber" : telNo,
			"cellPhoneNumber" : phoneNo,
			"altrContactName" : altConctName,
			"altrEmailAddress" : altEmailAdd,
			"altrPhoneNumber" : altPhoneNO,

		//	"taxNumber1" : taxNo,
		//	"taxNumber2" : taxNo2,
	//		"paymentTerms" : payment,
	//		"currency" : currency,
	//		"bankName"  : bankName,
	//		"bankRouting" : bankRout,
	//		"bankAccNo" : bankAcc,
	//		"dataShardRegion" : dataShare,


			


			"adminId" : adminId,
			"adminPartner_Role" : adminPartnerRole,
			"adminAdmin_Name" : adminName,
			"adminUserId" : adminuserId,
			"adminUserPassword" : adminpassword,
			"adminEmail" : adminEmail,
			"adminTelephoneNumber" : admintelNo,
			"adminCellPhoneNumber" : adminCellNo,
			"adminCommunication_Method" : adminCommMethod,
			"adminLanguage" : adminLanguage,
			"adminTime_Zone" : adminTimeZone,
			"adminDate_Format" : adminDateFormate

		};
	var subject = "Customer Details";
	 var token = $.session.get('Token');
	  var stringArray = [];
     
     	 stringArray.push(json_value.adminEmail);
    
      var email = stringArray;
      ////alert(email);
	////alert(JSON.stringify(json_value));
	var mailhtml = '<!DOCTYPE HTML><html><head></head><body style="margin:0px;"><header style="box-shadow:0px 1px 3px #000;height:60px;"><img src="https://127.0.0.1/SCMXPert/images/logo_scm.png" style="float: right;margin-top:10px;width: 227px;height: 45px;margin-right: 25px;"/></header><div style="width:100%;margin:auto;"><h2 style="text-align:center;">Customer '+valueText+' Sucessfully  </h2><h5 style="text-align:center;">Your Details</h5><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Customer ID :</span><span style="width:50%;height:35px;float:left;">'+json_value.customer_Id+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Customer Name :</span><span style="width:50%;height:35px;float:left;">'+json_value.name1+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Your ID :</span><span style="width:50%;height:35px;float:left;">'+json_value.adminId+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Your Name :</span><span style="width:50%;height:35px;float:left;">'+json_value.adminAdmin_Name+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">User ID :</span><span style="width:50%;height:35px;float:left;">'+json_value.adminUserId+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Password :</span><span style="width:50%;height:35px;float:left;">'+json_value.adminUserPassword+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Email ID :</span><span style="width:50%;height:35px;float:left;">'+json_value.adminEmail+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Entered Mobile Number :</span><span style="width:50%;height:35px;float:left;">'+json_value.adminCellPhoneNumber+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Selected Customer Sector :</span><span style="width:50%;height:35px;float:left;">'+json_value.customerSector+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Selected Customer Business :</span><span style="width:50%;height:35px;float:left;">'+json_value.customer_Business+'</span></div></div></body></html>';
	var data = {'to':email,'content':mailhtml,'subject':subject};
	 //console.log(data);
	 $.ajax({
			url: localStorage.getItem("smaasip")+"/SCMXPert/MailSender",
		///	url: localStorage.getItem("MailUrl"),
	     	type: "POST",
	     	headers: {
	     		"Content-Type": "application/json",
	     	    'Authorization': localStorage.getItem('SavedToken')
	     	  },
	     	  data:JSON.stringify(data),
	     	 beforeSend: function() {	var loading = '<img src="./images/loading.gif" id="loadingimg"/>';
             $(".body_blur").show().html(loading).css({"background":"#000000c2"});
             $("#loadingimg").show();},
	     	 success: function (data) {
//	             var correct = '<img src="./images/correct.gif" id="tickimg" style="width:65px;"/>';
//			    	var Idb = json_value.adminUserId;
//			    	$(".body_blur").show().html('<div class="alert alert-success" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;text-align:center;"><div class="close">X</div>'+correct+'Customer Details Sent <strong> Successfully! </strong> To this '+json_value.adminEmail+' and Your ID is ' + Idb	+ '  <a href="Dashboard.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">Move to Dashboard</a>.</div>').css({"background":"#000000c2"});
//			    	
	     	 }
		 });
       
	
//	var street1 = $("#street1").val();
//	var street2 = $("#street2").val();
//	var street3 = $("#street3").val();
//	var city = $("#city").val();
//	var region = $("#region-state").val();
//	var countryList = $("#countryList").val();
//	var zipPin = $("#zipPin").val();
//	var timeZone = $("#timeZone").val();
//	var webSite = $("#webSite").val();
//	var taxNo = $("#taxNo").val();
//	var taxNo2 = $("#taxNo2").val();
//	var payment = $("#payment").val();
//	var currency = $("#currency").val();
//	var bankName = $("#bankName").val();
//	var bankRout = $("#bankRout").val();
//	var bankAcc = $("#bankAcc").val();
//	var dataShare = $("#dataShare").val();
//	var financeAdminId = $("#financeAdminId").val();
//	var financePartnerRole = $("#financePartnerRole").val();
//	var financeName = $("#financeName").val();
//	var financeEmail = $("#financeEmail").val();
//	var financeUserId = $("#financeUserId").val();
//	var financePassword = $("#financePassword").val();
//	var financeCon = $("#financeCon-Password").val();
//	var financeTelNo = $("#financeTelNo").val();
//	var financeCellPhone = $("#financeCellPhone").val();
//	var financeCommMethod = $("#financeCommMethod").val();
//	var finaceLanguage = $("#finaceLanguage").val();
//	var financeTimezone = $("#financeTimezone").val();
//	var financeDateFormate = $("#financeDateFormate").val();
	
	
}
function sendEmailToFinanceCustomer(valueText)
{
	var newCustomer = $("#newCustomerID").val();
	var customer_name = $("#customer_name").val();


	var custSector = $("#custSector").val();
	var custBusiness = $("#custBusiness").val();
	//var dunsNO = $("#dunsNO").val();
	//var g10NO = $("#g10NO").val();
//	var custStatus = $("#custStatus").val();
	var custConctName = $("#custConctName").val();
//	var designatin = $("#designatin").val();
	var emailAddress = $("#emailAddress").val();
	var telNo = $("#telNo").val();
	var phoneNo = $("#phoneNo").val();
	var altConctName = $("#altConctName").val();
	var altEmailAdd = $("#altEmailAdd").val();
	var altPhoneNO = $("#altPhoneNO").val();
	var financeAdminId = $("#financeAdminId").val();
	var financePartnerRole = $("#financePartnerRole").val();
	var financeName = $("#financeName").val();
	var financeEmail = $("#financeEmail").val();
	var financeUserId = $("#financeUserId").val();
	var financePassword = $("#financePassword").val();
	var financeCon = $("#financeCon-Password").val();
	var financeTelNo = $("#financeTelNo").val();
	var financeCellPhone = $("#financeCellPhone").val();
	var financeCommMethod = $("#financeCommMethod").val();
	var finaceLanguage = $("#finaceLanguage").val();
	var financeTimezone = $("#financeTimezone").val();
	var financeDateFormate = $("#financeDateFormate").val();

	var subject = "Finance Customer Details";
	 var token = $.session.get('Token');
	  var stringArray = [];
     
     	 stringArray.push(financeEmail);
    
      var email = stringArray;
      ////alert(email);
	////alert(JSON.stringify(json_value));
	var mailhtml = '<!DOCTYPE HTML><html><head></head><body style="margin:0px;"><header style="box-shadow:0px 1px 3px #000;height:60px;"><img src="https://127.0.0.1/SCMXPert/images/logo_scm.png" style="float: right;margin-top:10px;width: 227px;height: 45px;margin-right: 25px;"/></header><div style="width:100%;margin:auto;"><h2 style="text-align:center;">Customer '+valueText+' Sucessfully  </h2><h5 style="text-align:center;">Your Details</h5><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Customer ID :</span><span style="width:50%;height:35px;float:left;">'+newCustomer+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Customer Name :</span><span style="width:50%;height:35px;float:left;">'+customer_name+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Your ID :</span><span style="width:50%;height:35px;float:left;">'+financeAdminId+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Your Name :</span><span style="width:50%;height:35px;float:left;">'+financeName+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">User ID :</span><span style="width:50%;height:35px;float:left;">'+financeUserId+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Password :</span><span style="width:50%;height:35px;float:left;">'+financePassword+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Email ID :</span><span style="width:50%;height:35px;float:left;">'+financeEmail+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Entered Mobile Number :</span><span style="width:50%;height:35px;float:left;">'+financeCellPhone+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Selected Customer Sector :</span><span style="width:50%;height:35px;float:left;">'+custSector+'</span></div><div ><span style="width:49%;height:35px;float:left;text-align:right;padding-right:1%;">Selected Customer Business :</span><span style="width:50%;height:35px;float:left;">'+custBusiness+'</span></div></div></body></html>';
	var data = {'to':email,'content':mailhtml,'subject':subject};
	 //console.log(data);
	 $.ajax({
		//	url: localStorage.getItem("smaasip")+"/SCMXPert/MailSender",
		    url: localStorage.getItem("MailUrl"),
	     	type: "POST",
	     	headers: {
	     		"Content-Type": "application/json",
	     	    'Authorization': localStorage.getItem('SavedToken')
	     	  },
	     	  data:JSON.stringify(data),
	     	 beforeSend: function() {	var loading = '<img src="./images/loading.gif" id="loadingimg"/>';
             $(".body_blur").show().html(loading).css({"background":"#000000c2"});
             $("#loadingimg").show();},
	     	 success: function (data) {
//	             var correct = '<img src="./images/correct.gif" id="tickimg" style="width:65px;"/>';
//			    	var Idb = json_value.adminUserId;
//			    	$(".body_blur").show().html('<div class="alert alert-success" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;text-align:center;"><div class="close">X</div>'+correct+'Customer Details Sent <strong> Successfully! </strong> To this '+json_value.adminEmail+' and Your ID is ' + Idb	+ '  <a href="Dashboard.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">Move to Dashboard</a>.</div>').css({"background":"#000000c2"});
//			    	
	     	 }
		 });
}

function getCustomerDetails(id)
{
	if(id == '')
		{
		document.location.reload();
		}else{
			$("#updateCustomer").show();
			$("#createCustomer").hide();
		}
	var cust_id = id.split("-");
	var Customers =  localStorage.getItem("smaasip")+"/SCMXPert/getCustomerMaster/"+cust_id[1];
	$.ajax({
		url:Customers,
		type:"get",
		headers: {
	        	    'Authorization': localStorage.getItem('SavedToken')
	        	  },
		success:function(response){
			stateList(response.country);
			var loading = '<img src="./images/loading.gif" id="loadingimg"/>';
            $(".body_blur").show().html(loading).css({"background":"#000000c2"});
            $("#loadingimg").show();
			setTimeout(function(){				 
				getCustomerDetailstotal(cust_id[1]);
				$(".body_blur").hide().html('');
	             $("#loadingimg").hide();
			},3000);
			
			/*//console.log(response.country);
			//console.log(states);*/
			/*var statess = $('select#region-state option').length;
			
			var newCustomer = $("#newCustomerID").val(response.customer_Id);
			var customer_name = $("#customer_name").val(response.name1);
			var customer_name2 = $("#customer_name2").val(response.name2);
			var externalNO = $("#externalNO").val(response.external_Number);
			var custSector = $("#custSector").val(response.customerSector);
			var custBusiness = $("#custBusiness").val(response.customer_Business);
			var dunsNO = $("#dunsNO").val(response.duns);
			var g10NO = $("#g10NO").val(response.g10);
			var custStatus = $("#custStatus").val(response.customerStatus);
			var custConctName = $("#custConctName").val(response.contact_Name);
			var designatin = $("#designatin").val(response.designation);
			var emailAddress = $("#emailAddress").val(response.email_Id);
			var telNo = $("#telNo").val(response.telephoneNumber);
			var phoneNo = $("#phoneNo").val(response.cellPhoneNumber);
			var altConctName = $("#altConctName").val(response.altrContactName);
			var altEmailAdd = $("#altEmailAdd").val(response.altrEmailAddress);
			var altPhoneNO = $("#altPhoneNO").val(response.altrPhoneNumber);
			var adminId = $("#adminId").val(response.adminId);
			var adminPartnerRole = $("#adminPartnerRole").val(response.adminPartner_Role);
			var adminName = $("#adminName").val(response.adminAdmin_Name);
			var adminEmail = $("#adminEmail").val(response.adminEmail);
			var adminuserId = $("#adminuserId").val(response.userId);
			var adminpassword = $("#adminpassword").val(response.adminUserPassword);
			var admincon_password = $("#admincon-password").val(response.adminUserPassword);
			var admintelNo = $("#admintelNo").val(response.adminTelephoneNumber);
			var adminCellNo = $("#adminCellNo").val(response.adminCellPhoneNumber);
			var adminCommMethod = $("#adminCommMethod").val(response.adminCommunication_Method);
			var adminLanguage = $("#adminLanguage").val(response.adminLanguage);
			var adminTimeZone = $("#adminTimeZone").val(response.adminTime_Zone);
			var adminDateFormate = $("#adminDateFormate").val(response.adminDate_Format);
			var street1 = $("#street1").val(response.address1);
			var street2 = $("#street2").val(response.address2);
			var street3 = $("#street3").val(response.address3);
			var city = $("#city").val(response.city);
			var countryList = $("#countryList").val(response.country);
			
			
			//var countryList = $("#countryList").val($("#countryList").val());
			var region = $("#region-state").val(response.state);
			var zipPin = $("#zipPin").val(response.zip);
			var timeZone = $("#timeZone").val(response.timezone);
		//	var webSite = $("#webSite").val(response.);
			var taxNo = $("#taxNo").val(response.taxNumber1);
			var taxNo2 = $("#taxNo2").val(response.taxNumber2);
			var payment = $("#payment").val(response.paymentTerms);
			var currency = $("#currency").val(response.currency);
			var bankName = $("#bankName").val(response.bankName);
			var bankRout = $("#bankRout").val(response.bankRouting);
			var bankAcc = $("#bankAcc").val(response.bankAccNo);
			var dataShare = $("#dataShare").val(response.dataShardRegion);
			var financeAdminId = $("#financeAdminId").val(response.financeAdminId);
			var financePartnerRole = $("#financePartnerRole").val(response.financePartnerRole);
			var financeName = $("#financeName").val(response.financeName);
			var financeEmail = $("#financeEmail").val(response.financeEmailAddress);
			var financeUserId = $("#financeUserId").val(response.financeUserId);
			var financePassword = $("#financePassword").val(response.financePassword);
			var financeCon = $("#financeCon-Password").val(response.financePassword);
			var financeTelNo = $("#financeTelNo").val(response.financeTelephoneNumber);
			var financeCellPhone = $("#financeCellPhone").val(response.financeCellPhoneNumber);
			var financeCommMethod = $("#financeCommMethod").val(response.financeCommMethod);
			var finaceLanguage = $("#finaceLanguage").val(response.financeLanguage);
			var financeTimezone = $("#financeTimezone").val(response.financeTimeZone);
			var financeDateFormate = $("#financeDateFormate").val(response.financeDateFromat);*/
			
			
		}
	});
	
}
function getCustomerDetailstotal(id)
{
	var Customers =  localStorage.getItem("smaasip")+"/SCMXPert/getCustomerMaster/"+id;
	$.ajax({
		url:Customers,
		type:"get",
		headers: {
	        	    'Authorization': localStorage.getItem('SavedToken')
	        	  },
		success:function(response){
			var newCustomer = $("#newCustomerID").val(response.customer_Id);
			var customer_name = $("#customer_name").val(response.name1);
			var customer_name2 = $("#customer_name2").val(response.name2);
			var externalNO = $("#externalNO").val(response.external_Number);
			var custSector = $("#custSector").val(response.customerSector);
			var custBusiness = $("#custBusiness").val(response.customer_Business);
			var dunsNO = $("#dunsNO").val(response.duns);
			var g10NO = $("#g10NO").val(response.g10);
			var custStatus = $("#custStatus").val(response.customerStatus);
			var custConctName = $("#custConctName").val(response.contact_Name);
			var designatin = $("#designatin").val(response.designation);
			var emailAddress = $("#emailAddress").val(response.email_Id);
			var telNo = $("#telNo").val(response.telephoneNumber);
			var phoneNo = $("#phoneNo").val(response.cellPhoneNumber);
			var altConctName = $("#altConctName").val(response.altrContactName);
			var altEmailAdd = $("#altEmailAdd").val(response.altrEmailAddress);
			var altPhoneNO = $("#altPhoneNO").val(response.altrPhoneNumber);
			var adminId = $("#adminId").val(response.adminId);
			var adminPartnerRole = $("#adminPartnerRole").val(response.adminPartner_Role);
			var adminName = $("#adminName").val(response.adminAdmin_Name);
			var adminEmail = $("#adminEmail").val(response.adminEmail);
			var adminuserId = $("#adminuserId").val(response.userId);
			var adminpassword = $("#adminpassword").val(response.adminUserPassword);
			$("#showPassword,#showPasswordc").css({"opacity":"1"});
			$("#showPasswordf,#showPasswordfc").css({"opacity":"1"})
			//$("#showPassword,#showPasswordc").css({"opacity":"1"})	
			var admincon_password = $("#admincon-password").val(response.adminUserPassword);
			var admintelNo = $("#admintelNo").val(response.adminTelephoneNumber);
			var adminCellNo = $("#adminCellNo").val(response.adminCellPhoneNumber);
			var adminCommMethod = $("#adminCommMethod").val(response.adminCommunication_Method);
			var adminLanguage = $("#adminLanguage").val(response.adminLanguage);
			var adminTimeZone = $("#adminTimeZone").val(response.adminTime_Zone);
			var adminDateFormate = $("#adminDateFormate").val(response.adminDate_Format);
			var street1 = $("#street1").val(response.address1);
			var street2 = $("#street2").val(response.address2);
			var street3 = $("#street3").val(response.address3);
			var city = $("#city").val(response.city);
			var countryList = $("#countryList").val(response.country);
			
			
			//var countryList = $("#countryList").val($("#countryList").val());
			var region = $("#region-state").val(response.state);
			var zipPin = $("#zipPin").val(response.zip);
			var timeZone = $("#timeZone").val(response.timezone);
			var webSite = $("#webSite").val(response.webSite);
			var taxNo = $("#taxNo").val(response.taxNumber1);
			var taxNo2 = $("#taxNo2").val(response.taxNumber2);
			var payment = $("#payment").val(response.paymentTerms);
			var currency = $("#currency").val(response.currency);
			var bankName = $("#bankName").val(response.bankName);
			var bankRout = $("#bankRout").val(response.bankRouting);
			var bankAcc = $("#bankAcc").val(response.bankAccNo);
			var dataShare = $("#dataShare").val(response.dataShardRegion);
			var financeAdminId = $("#financeAdminId").val(response.financeAdminId);
			var financePartnerRole = $("#financePartnerRole").val(response.financePartnerRole);
			var financeName = $("#financeName").val(response.financeName);
			var financeEmail = $("#financeEmail").val(response.financeEmailAddress);
			var financeUserId = $("#financeUserId").val(response.financeUserId);
			var financePassword = $("#financePassword").val(response.financePassword);
			var financeCon = $("#financeCon-Password").val(response.financePassword);
			var financeTelNo = $("#financeTelNo").val(response.financeTelephoneNumber);
			var financeCellPhone = $("#financeCellPhone").val(response.financeCellPhoneNumber);
			var financeCommMethod = $("#financeCommMethod").val(response.financeCommMethod);
			var finaceLanguage = $("#finaceLanguage").val(response.financeLanguage);
			var financeTimezone = $("#financeTimezone").val(response.financeTimeZone);
			var financeDateFormate = $("#financeDateFormate").val(response.financeDateFromat);
		}});
}
function updateCustomerMaster()
{
	var newCustomer = $("#newCustomerID").val();
	var customer_name = $("#customer_name").val();
	var customer_name2 = $("#customer_name2").val();
	var externalNO = $("#externalNO").val();
	var custSector = $("#custSector").val();
	var custBusiness = $("#custBusiness").val();
	var dunsNO = $("#dunsNO").val();
	var g10NO = $("#g10NO").val();
	var custStatus = $("#custStatus").val();
	var custConctName = $("#custConctName").val();
	var designatin = $("#designatin").val();
	var emailAddress = $("#emailAddress").val();
	var telNo = $("#telNo").val();
	var phoneNo = $("#phoneNo").val();
	var altConctName = $("#altConctName").val();
	var altEmailAdd = $("#altEmailAdd").val();
	var altPhoneNO = $("#altPhoneNO").val();
	var adminId = $("#adminId").val();
	var adminPartnerRole = $("#adminPartnerRole").val();
	var adminName = $("#adminName").val();
	var adminEmail = $("#adminEmail").val();
	var adminuserId = $("#adminuserId").val();
	var adminpassword = $("#adminpassword").val();
	var admincon_password = $("#admincon-password").val();
	var admintelNo = $("#admintelNo").val();
	var adminCellNo = $("#adminCellNo").val();
	var adminCommMethod = $("#adminCommMethod").val();
	var adminLanguage = $("#adminLanguage").val();
	var adminTimeZone = $("#adminTimeZone").val();
	var adminDateFormate = $("#adminDateFormate").val();
	var street1 = $("#street1").val();
	var street2 = $("#street2").val();
	var street3 = $("#street3").val();
	var city = $("#city").val();
	var region = $("#region-state").val();
	var countryList = $("#countryList").val();
	var zipPin = $("#zipPin").val();
	var timeZone = $("#timeZone").val();
	var webSite = $("#webSite").val();
	var taxNo = $("#taxNo").val();
	var taxNo2 = $("#taxNo2").val();
	var payment = $("#payment").val();
	var currency = $("#currency").val();
	var bankName = $("#bankName").val();
	var bankRout = $("#bankRout").val();
	var bankAcc = $("#bankAcc").val();
	var dataShare = $("#dataShare").val();
	var financeAdminId = $("#financeAdminId").val();
	var financePartnerRole = $("#financePartnerRole").val();
	var financeName = $("#financeName").val();
	var financeEmail = $("#financeEmail").val();
	var financeUserId = $("#financeUserId").val();
	var financePassword = $("#financePassword").val();
	var financeCon = $("#financeCon-Password").val();
	var financeTelNo = $("#financeTelNo").val();
	var financeCellPhone = $("#financeCellPhone").val();
	var financeCommMethod = $("#financeCommMethod").val();
	var finaceLanguage = $("#finaceLanguage").val();
	var financeTimezone = $("#financeTimezone").val();
	var financeDateFormate = $("#financeDateFormate").val();
if(customer_name == ''){error.innerHTML="Please Fill All Fields";
$("#customer_name").css({"border":"1px solid red"}).focus();
return false;}else{$("#customer_name").css({"border":"1px solid #ced4da"})}

if(adminpassword == ''){
var txt = "Enter Admin password";
	adminerror.innerHTML = txt;
$("#adminpassword").css({"border":"1px solid red"}).focus();
return false;}else{$("#adminpassword").css({"border":"1px solid #ced4da"})}

if(admincon_password == ''){
var txt = "EnterAdmin confirm password";
	adminerror.innerHTML = txt;
$("#admincon-password").css({"border":"1px solid red"}).focus();
return false;}else{$("#admincon-password").css({"border":"1px solid #ced4da"})}

if(adminpassword  != admincon_password)
{
//alert("hello");
	var txt = "Both Admin Password and Conf-Password not Match";
	adminerror.innerHTML = txt;
$("#admincon-password,#adminpassword").css({"border":"1px solid red"}).focus();
return false;}else{$("#admincon-password,#adminpassword").css({"border":"1px solid #ced4da"})}


if(financePassword != financeCon )
{
	var txt = "Both Finance Password and Conf-Password not Match";
	financeerror.innerHTML = txt;
$("#financePassword,#financeCon-Password").css({"border":"1px solid red"}).focus();
return false;}else{$("#financePassword,#financeCon-Password").css({"border":"1px solid #ced4da"})}
	var json_value = {
			"userId":adminuserId,
			"customer_Id" :newCustomer,
			"name1" : customer_name,
			"name2" : customer_name2,
			"external_Number" : externalNO,
			"customerSector":custSector,
			"business_Partner_Id" : [],
			"customer_Business":custBusiness,
			"duns" : dunsNO,
			"g10" : g10NO,
			"customerStatus":custStatus,

			"address1" : street1,
			"address2" : street2,
			"address3" : street3,
			"city" : city,
			"state" : region,
			"country" : countryList,
			"zip" : zipPin,
			"timezone" : timeZone,
			"webSite":webSite,


			"contact_Name" : custConctName,
			"designation" : designatin,
			"email_Id" : emailAddress,
			"telephoneNumber" : telNo,
			"cellPhoneNumber" : phoneNo,
			"altrContactName" : altConctName,
			"altrEmailAddress" : altEmailAdd,
			"altrPhoneNumber" : altPhoneNO,

			"taxNumber1" : taxNo,
			"taxNumber2" : taxNo2,
			"paymentTerms" : payment,
			"currency" : currency,
			"bankName"  : bankName,
			"bankRouting" : bankRout,
			"bankAccNo" : bankAcc,
			"dataShardRegion" : dataShare,


			"financeAdminId" : financeAdminId,
			"financePartnerRole" : financePartnerRole,
			"financeName" : financeName,
			"financeEmailAddress" : financeEmail,
			"financeUserId" : financeUserId,
			"financePassword" : financePassword,
			"financeTelephoneNumber" : financeTelNo,
			"financeCellPhoneNumber" : financeCellPhone,
			"financeCommMethod" : financeCommMethod,
			"financeLanguage" : finaceLanguage,
			"financeTimeZone" : financeTimezone,
			"financeDateFromat" :financeDateFormate,


			"adminId" : adminId,
			"adminPartner_Role" : adminPartnerRole,
			"adminAdmin_Name" : adminName,
			"adminUserId" : adminuserId,
			"adminUserPassword" : adminpassword,
			"adminEmail" : adminEmail,
			"adminTelephoneNumber" : admintelNo,
			"adminCellPhoneNumber" : adminCellNo,
			"adminCommunication_Method" : adminCommMethod,
			"adminLanguage" : adminLanguage,
			"adminTime_Zone" : adminTimeZone,
			"adminDate_Format" : adminDateFormate

		};
	////console.log(json_value);return false;
	 var url = localStorage.getItem("smaasip")+"/SCMXPert/updateCustomerMaster";
		$.ajax({
	       	 type:"post",
			 url:url,
			 headers: { Accept : "application/json",
						'Content-Type': "application/json",
						'Authorization': localStorage.getItem('SavedToken') 
				 		},
			 
			 data: JSON.stringify(json_value),
			 beforeSend: function() {
				
				 var loading = '<img src="./images/loading.gif" id="loadingimg"/>';
             $(".body_blur").show().html(loading).css({"background":"#000000c2"});
             $("#loadingimg").show();
             if(financeEmail.trim() != '' )
     		 {
     		sendEmailToFinanceCustomer("Updated");
     		 }
     	if(adminEmail.trim() != '' )
		 {
     		sendEmailToAdminCustomer("Updated");
		 }
             },
		    success: function(data) {
//		    	$("#backgroundBlur").show();
//		    	$(".showviewdata").show().html('<div class="alert alert-success" role="alert">Customer Successful Created  <a href="Dashboard.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">Move to Dashboard</a>.</div>');
		    	/*var UserId = $.session.get('UserId');
		    	var RouteMasterGetRoute = localStorage.getItem("smaasip")+"/SCMXPert/getRoutes/"+UserId;
		    	var Route_id = '';
		    	RouteDetailsWithId(Route_id,RouteMasterGetRoute);*/
		    	//window.location.href = "Dashboard.jsp";
		    	
		    },
		    complete: function (response) {
		    //	sendEmailToAdminCustomer();
		    	var correct = '<img src="./images/correct.gif" id="tickimg" style="width:65px;"/>';
		    	var Idb = json_value.adminUserId;
		    	$(".body_blur").show().html('<div class="alert alert-success" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;"><div class="close">X</div>'+correct+'Customer Updated <strong> Successfully! </strong> and Your ID is ' + Idb	+ '  <a href="Dashboard.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">Move to Dashboard</a>.</div>').css({"background":"#000000c2"});
			     }
		}); 

}
function GetAllCustomer()
{
	var Customers =  localStorage.getItem("smaasip")+"/SCMXPert/getAllCustomer";
	$.ajax({
		url:Customers,
		type:"get",
		headers: {
		   	     	   'Authorization': localStorage.getItem('SavedToken')
		   	     	  	   },
		success:function(response){
			$.each(response,function(key,value){
				$("#newCustomer").append('<option value="'+value+'">'+value+'</option>')
			});
			
			
		}
	});
}
function customerId()
{
	var CustomerId =  localStorage.getItem("smaasip")+"/SCMXPert/getCustomerId";
	$.ajax({
		url:CustomerId,
		type:"get",
		headers: {
		   	     	   'Authorization': localStorage.getItem('SavedToken')
		   	     	  	   },
		success:function(response){
			$("#newCustomerNotshow").html('<input type="text" value="'+response+'" hidden id="newCustomerID"/>').hide();
			getAdminId();
			getFinanceAdminId();
		}
	});
}
function createCustomerMaster()
{
//console.log("hello-pollo");
var newCustomer = $("#newCustomerID").val();
var customer_name = $("#customer_name").val();
var customer_name2 = $("#customer_name2").val();
var externalNO = $("#externalNO").val();
var custSector = $("#custSector").val();
var custBusiness = $("#custBusiness").val();
var dunsNO = $("#dunsNO").val();
var g10NO = $("#g10NO").val();
var custStatus = $("#custStatus").val();
var custConctName = $("#custConctName").val();
var designatin = $("#designatin").val();
var emailAddress = $("#emailAddress").val();
var telNo = $("#telNo").val();
var phoneNo = $("#phoneNo").val();
var altConctName = $("#altConctName").val();
var altEmailAdd = $("#altEmailAdd").val();
var altPhoneNO = $("#altPhoneNO").val();
var adminId = $("#adminId").val();
var adminPartnerRole = $("#adminPartnerRole").val();
var adminName = $("#adminName").val();
var adminEmail = $("#adminEmail").val();
var adminuserId = $("#adminuserId").val();
var adminpassword = $("#adminpassword").val().trim();
var admincon_password = $("#admincon-password").val().trim();
var admintelNo = $("#admintelNo").val();
var adminCellNo = $("#adminCellNo").val();
var adminCommMethod = $("#adminCommMethod").val();
var adminLanguage = $("#adminLanguage").val();
var adminTimeZone = $("#adminTimeZone").val();
var adminDateFormate = $("#adminDateFormate").val();
var street1 = $("#street1").val();
var street2 = $("#street2").val();
var street3 = $("#street3").val();
var city = $("#city").val();
var region = $("#region-state").val();
var countryList = $("#countryList").val();
var zipPin = $("#zipPin").val();
var timeZone = $("#timeZone").val();
var webSite = $("#webSite").val();
var taxNo = $("#taxNo").val();
var taxNo2 = $("#taxNo2").val();
var payment = $("#payment").val();
var currency = $("#currency").val();
var bankName = $("#bankName").val();
var bankRout = $("#bankRout").val();
var bankAcc = $("#bankAcc").val();
var dataShare = $("#dataShare").val();
var financeAdminId = $("#financeAdminId").val();
var financePartnerRole = $("#financePartnerRole").val();
var financeName = $("#financeName").val();
var financeEmail = $("#financeEmail").val();
var financeUserId = $("#financeUserId").val();
var financePassword = $("#financePassword").val().trim();
var financeCon = $("#financeCon-Password").val().trim();
var financeTelNo = $("#financeTelNo").val();
var financeCellPhone = $("#financeCellPhone").val();
var financeCommMethod = $("#financeCommMethod").val();
var finaceLanguage = $("#finaceLanguage").val();
var financeTimezone = $("#financeTimezone").val();
var financeDateFormate = $("#financeDateFormate").val();
 var error = document.getElementById("error");
 var adminerror = document.getElementById("adminerror");
 var financeerror = document.getElementById("financeerror");


if(customer_name == ''){error.innerHTML="Please Fill All Fields";
$("#customer_name").css({"border":"1px solid red"}).focus();
return false;}else{$("#customer_name").css({"border":"1px solid #ced4da"})}

if(adminpassword == ''){
var txt = "Enter Admin password";
	adminerror.innerHTML = txt;
$("#adminpassword").css({"border":"1px solid red"}).focus();
return false;}else{$("#adminpassword").css({"border":"1px solid #ced4da"})}

if(admincon_password == ''){
var txt = "EnterAdmin confirm password";
	adminerror.innerHTML = txt;
$("#admincon-password").css({"border":"1px solid red"}).focus();
return false;}else{$("#admincon-password").css({"border":"1px solid #ced4da"})}

if(adminpassword  != admincon_password)
{
//alert("hello");
	var txt = "Both Admin Password and Conf-Password not Match";
	adminerror.innerHTML = txt;
$("#admincon-password,#adminpassword").css({"border":"1px solid red"}).focus();
return false;}else{$("#admincon-password,#adminpassword").css({"border":"1px solid #ced4da"})}


if(financePassword != financeCon )
{
	var txt = "Both Finance Password and Conf-Password not Match";
	financeerror.innerHTML = txt;
$("#financePassword,#financeCon-Password").css({"border":"1px solid red"}).focus();
return false;}else{$("#financePassword,#financeCon-Password").css({"border":"1px solid #ced4da"})}
/*if(newCustomer == ''){
	error.innerHTML="Please Fill All Fields";
	return false;
}*/

/*if(customer_name == ''){error.innerHTML="Please Fill All Fields";
$("#customer_name").css({"border":"1px solid red"}).focus();
return false;}else{$("#customer_name").css({"border":"1px solid #ced4da"})}
if(customer_name2 == ''){error.innerHTML="Please Fill All Fields";
$("#customer_name2").css({"border":"1px solid red"}).focus();
return false;}else{$("#customer_name2").css({"border":"1px solid #ced4da"})}
if(externalNO == ''){error.innerHTML="Please Fill All Fields";
$("#externalNO").css({"border":"1px solid red"}).focus();
return false;}else{$("#externalNO").css({"border":"1px solid #ced4da"})}
if(custSector == ''){error.innerHTML="Please Fill All Fields";
$("#custSector").css({"border":"1px solid red"}).focus();
return false;}else{$("#custSector").css({"border":"1px solid #ced4da"})}
if(custBusiness == ''){error.innerHTML="Please Fill All Fields";
$("#custBusiness").css({"border":"1px solid red"}).focus();
return false;}else{$("#custBusiness").css({"border":"1px solid #ced4da"})}
if(dunsNO == ''){error.innerHTML="Please Fill All Fields";
$("#dunsNO").css({"border":"1px solid red"}).focus();
return false;}else{$("#dunsNO").css({"border":"1px solid #ced4da"})}
if(g10NO == ''){error.innerHTML="Please Fill All Fields";
$("#g10NO").css({"border":"1px solid red"}).focus();
return false;}else{$("#g10NO").css({"border":"1px solid #ced4da"})}
if(custStatus == ''){error.innerHTML="Please Fill All Fields";
$("#custStatus").css({"border":"1px solid red"}).focus();
return false;}else{$("#custStatus").css({"border":"1px solid #ced4da"})}
if(custConctName == ''){error.innerHTML="Please Fill All Fields";
$("#custConctName").css({"border":"1px solid red"}).focus();
return false;}else{$("#custConctName").css({"border":"1px solid #ced4da"})}
if(designatin == ''){error.innerHTML="Please Fill All Fields";
$("#designatin").css({"border":"1px solid red"}).focus();
return false;}else{$("#designatin").css({"border":"1px solid #ced4da"})}
if(emailAddress == ''){error.innerHTML="Please Fill All Fields";
$("#emailAddress").css({"border":"1px solid red"}).focus();
return false;}else{$("#emailAddress").css({"border":"1px solid #ced4da"})}
if(telNo == ''){error.innerHTML="Please Fill All Fields";
$("#telNo").css({"border":"1px solid red"}).focus();
return false;}else{$("#telNo").css({"border":"1px solid #ced4da"})}
if(phoneNo == ''){error.innerHTML="Please Fill All Fields";
$("#phoneNo").css({"border":"1px solid red"}).focus();
return false;}else{$("#phoneNo").css({"border":"1px solid #ced4da"})}
if(altConctName == ''){error.innerHTML="Please Fill All Fields";
$("#altConctName").css({"border":"1px solid red"}).focus();
return false;}else{$("#altConctName").css({"border":"1px solid #ced4da"})}
if(altEmailAdd == ''){error.innerHTML="Please Fill All Fields";
$("#altEmailAdd").css({"border":"1px solid red"}).focus();
return false;}else{$("#altEmailAdd").css({"border":"1px solid #ced4da"})}
if(altPhoneNO == ''){error.innerHTML="Please Fill All Fields";
$("#altPhoneNO").css({"border":"1px solid red"}).focus();
return false;}else{$("#altPhoneNO").css({"border":"1px solid #ced4da"})}*/
/*adminId
adminPartnerRole
adminName
adminEmail
adminuserId
adminpassword
admincon-password
admintelNo
adminCellNo
adminCommMethod
adminLanguage
adminTimeZone
adminDateFormate
street1
street2
street3
city
region-state
countryList
zipPin
timeZone
webSite
taxNo
taxNo2
payment
currency
bankName
bankRout
bankAcc
dataShare
financeAdminId
financePartnerRole
financeName
financeEmail
financeUserId
financePassword
financeCon-Password
financeTelNo
financeCellPhone
financeCommMethod
finaceLanguage
financeTimezone
financeDateFormate*/
	var json_value = {

			"customer_Id" :newCustomer,
			"name1" : customer_name,
			"name2" : customer_name2,
			"external_Number" : externalNO,
			"customerSector":custSector,
			"business_Partner_Id" : [],
			"customer_Business":custBusiness,
			"duns" : dunsNO,
			"g10" : g10NO,
			"customerStatus":custStatus,

			"address1" : street1,
			"address2" : street2,
			"address3" : street3,
			"city" : city,
			"state" : region,
			"country" : countryList,
			"zip" : zipPin,
			"timezone" : timeZone,
			"webSite":webSite,


			"contact_Name" : custConctName,
			"designation" : designatin,
			"email_Id" : emailAddress,
			"telephoneNumber" : telNo,
			"cellPhoneNumber" : phoneNo,
			"altrContactName" : altConctName,
			"altrEmailAddress" : altEmailAdd,
			"altrPhoneNumber" : altPhoneNO,

			"taxNumber1" : taxNo,
			"taxNumber2" : taxNo2,
			"paymentTerms" : payment,
			"currency" : currency,
			"bankName"  : bankName,
			"bankRouting" : bankRout,
			"bankAccNo" : bankAcc,
			"dataShardRegion" : dataShare,


			"financeAdminId" : financeAdminId,
			"financePartnerRole" : financePartnerRole,
			"financeName" : financeName,
			"financeEmailAddress" : financeEmail,
			"financeUserId" : financeUserId,
			"financePassword" : financePassword,
			"financeTelephoneNumber" : financeTelNo,
			"financeCellPhoneNumber" : financeCellPhone,
			"financeCommMethod" : financeCommMethod,
			"financeLanguage" : finaceLanguage,
			"financeTimeZone" : financeTimezone,
			"financeDateFromat" :financeDateFormate,


			"adminId" : adminId,
			"adminPartner_Role" : adminPartnerRole,
			"adminAdmin_Name" : adminName,
			"adminUserId" : adminuserId,
			"adminUserPassword" : adminpassword,
			"adminEmail" : adminEmail,
			"adminTelephoneNumber" : admintelNo,
			"adminCellPhoneNumber" : adminCellNo,
			"adminCommunication_Method" : adminCommMethod,
			"adminLanguage" : adminLanguage,
			"adminTime_Zone" : adminTimeZone,
			"adminDate_Format" : adminDateFormate,

			"adminDetails":[{
			"userid":adminuserId,
			"email":adminEmail,
			"password":adminpassword
			}],
			"financeDetails":[{
			"userid":financeUserId,
			"email":financeEmail,
			"password":financePassword
			}]

		};
	////console.log(json_value);return false;
	 var url = localStorage.getItem("smaasip")+"/SCMXPert/createNewCustomerMaster";
		$.ajax({
	       	 type:"post",
			 url:url,
			 headers: { Accept : "application/json",
						'Content-Type': "application/json" ,
						'Authorization': localStorage.getItem('SavedToken')
				 		}, 
					
			 data: JSON.stringify(json_value),
			 beforeSend: function() {
				 
				 
				 var loading = '<img src="./images/loading.gif" id="loadingimg"/>';
				 $(".body_blur").show().html(loading).css({"background":"#000000c2"});
             	 $("#loadingimg").show();
             	 if(financeEmail.trim() != '' )
             		 {
             		sendEmailToFinanceCustomer("Created");
             		 }
             	if(adminEmail.trim() != '' )
        		 {
             		sendEmailToAdminCustomer("Created");
        		 }
             
			 },
		    success: function(data) {
//		    	$("#backgroundBlur").show();
//		    	$(".showviewdata").show().html('<div class="alert alert-success" role="alert">Customer Successful Created  <a href="Dashboard.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">Move to Dashboard</a>.</div>');
		    	/*var UserId = $.session.get('UserId');
		    	var RouteMasterGetRoute = localStorage.getItem("smaasip")+"/SCMXPert/getRoutes/"+UserId;
		    	var Route_id = '';
		    	RouteDetailsWithId(Route_id,RouteMasterGetRoute);*/
		    	//window.location.href = "Dashboard.jsp";
		    	var correct = '<img src="./images/correct.gif" id="tickimg" style="width:65px;"/>';
		    	var Idb = json_value.adminUserId;
		    	$(".body_blur").show().html('<div class="alert alert-success" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;"><div class="close">X</div>'+correct+'Customer Created <strong> Successfully! </strong> and Your ID is ' + Idb	+ '  <a href="Dashboard.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">Move to Dashboard</a>.</div>').css({"background":"#000000c2"});
		    },
		}); 
}
function countryList()
{
	var url =  localStorage.getItem("smaasip")+"/SCMXPert/getAllCountries"
/*	$.getJSON(url,function(response){
		$.each(response,function(key,value){
			$("#countryList").append('<option value="'+value+'">'+value+'</option>');
		});
	});*/
			$.ajax({
    url: url,
    type : "GET",
    dataType: 'json',
	headers: {
		   	     	   'Authorization': localStorage.getItem('SavedToken')
		   	     	  	   },
    success:function(response){
 	$.each(response,function(key,value){
			$("#countryList").append('<option value="'+value+'">'+value+'</option>');
		});
}
});
}
function stateList(country)
{
	
	var url =  localStorage.getItem("smaasip")+"/SCMXPert/getcountryinfo/"+country
/*	$.getJSON(url,function(response){
		$("#region-state").empty();
		$("#region-state").html('<option value="">Select Region / State</option>');
		$.each(response.states,function(key,value){
			$("#region-state").append('<option value="'+key+'">'+key+'</option>');
		});
		return true;
	});*/
				$.ajax({
    url: url,
    type : "GET",
    dataType: 'json',
	headers: {
		   	     	   'Authorization': localStorage.getItem('SavedToken')
		   	     	  	   },
    success:function(response){
 	$("#region-state").empty();
		$("#region-state").html('<option value="">Select Region / State</option>');
		$.each(response.states,function(key,value){
			$("#region-state").append('<option value="'+key+'">'+key+'</option>');
		});
		return true;
	}
});
}
function getAdminId()
{
	var AdminId =  localStorage.getItem("smaasip")+"/SCMXPert/getAdminId";
	$.ajax({
		url:AdminId,
		type:"get",
		headers: {
		   	     	   'Authorization': localStorage.getItem('SavedToken')
		   	     	  	   },
		success:function(response){
			//$.cookie("admino",response);
			var customer = $("#newCustomerID").val();
			$("#adminId").val(response);
			$("#adminuserId").val(customer+'-'+response);
		}
	});
}
function getFinanceAdminId()
{
	var FianaceAdminId =  localStorage.getItem("smaasip")+"/SCMXPert/getFinanceAdminId";
	$.ajax({
		url:FianaceAdminId,
		type:"get",
		headers: {
		   	     	   'Authorization': localStorage.getItem('SavedToken')
		   	     	  	   },
		success:function(response){
			//$.cookie("admino",response);
			var customer = $("#newCustomerID").val();
			$("#financeAdminId").val(response);
			$("#financeUserId").val(customer+'-'+response);
		}
	});
}
function timezones()
{
	var url = "./json/timezones.json";
	$.getJSON(url,function(response){
		$.each(response,function(key,value){
			$("#timeZone,#adminTimeZone,#financeTimezone").append("<option value="+value.text+">"+value.text+"</option>");
		});
	});
	
}