 $(function() {
	 var UserName = $.session.get('UserName');
		var CustomerName = $.session.get('CustomerName');
		var Cust_Id = $.session.get('Cust_Id');
		var UserId = $.session.get('UserId');
		var Role = $.session.get('Role');
		var RolePermission = $.session.get('RolePermission');
		
		var useridsplit = UserId.split('-');
		useridsplit[0].toString();
		useridsplit[0] + "";
		useridsplit[1].toString();
		useridsplit[1] + "";
		$("#Cust_Id").val(useridsplit[0]);
		$("#cust_name").val(CustomerName);
		$("#customer_Name").text(CustomerName);
		$("#cust_name").val(CustomerName);
		$("#bp_name_f").text(UserName);
		$("#bp_name").val(UserName);
		$("#bpi_idchange").val(UserId);
	 var bp_name = $("#bp_name").val();
	 //var Cust_Id = $("#Cust_Id").val();route_name_from
	 getbp_id(useridsplit[1]);
	 getRouteId(useridsplit[0]);
	 getAllCountriesStates();
	 //getAllBusinessPartner();
	 AllRoutes();
	   // Usage
	 var Role = $.session.get('Role');

	 	var UserIds = $.session.get('UserId');
	
	 var UserId = UserIds;
	 	var useridsplit = UserId.split('-');
	 	useridsplit[0].toString();
	 	useridsplit[0] + "";
	 	useridsplit[1].toString();
	 	useridsplit[1] + "";
	 var RouteMasterGetRoute = localStorage.getItem("smaasip")+"/SCMXPert/getRoutes/"+useridsplit[0];
	 getRouteDEtails(RouteMasterGetRoute)
	
	 
	 $("#CancelEventbdfg,.body_blur1,.close,#backgroundBlur").on("click",function(){
		 
		 closefunction();
		   
		   });
	 
	 
 $("#backgroundBlur1").on("click",function(){
		 
		 closeRoute();
		 //closerouteslist();
		   
		   });
	 
	 
	 
	 /*
	  * var bp_id = '';
					getBusinessPartnerAllDetails(bp_id);
	  * $("#shipFrom,#shipTo").keydown(function(){
			//$(".showprelocationf").html('');
			var value_data = $(this).val();
			if(value_data.length >= 2){
				$(".showprelocationf").empty();
			var expression = new RegExp(value_data,"i");
			$.getJSON(RouteMasterGetRoute,function(data){
				$.each(data,function(key,value){
//					//alert(value.from);
					if(value.from.search(expression) != -1)
					//if(value.from == value_data)
						{
							$(".showprelocationf,.showprelocationt").append("<div style='width:60%;text-indent: 10px;font-weight: 600;margin: auto;margin-top:2px;background: #965664b8;color: #fff;padding: 2px 0px;border-radius: 2px'>"+value.from+"</div>")
						}
				});
			});
			
			}else{
				$(".showprelocationf").empty();
				}
		});*/
/*	 $('.switch-input').on('change', function() {
		 //alert("bkjxf");
	      var isChecked = $(this).is(':checked');
	      //alert(isChecked);
	      var selectedData;
	      var $switchLabel = $('.switch-label');
	      //console.log('isChecked: ' + isChecked); 
	      
	      if(isChecked) {
	        selectedData = $switchLabel.attr('data-on');
	        //alert("hello00");
	      } else {
	        selectedData = $switchLabel.attr('data-off');
	      }
	     
	      //console.log('Selected data: ' + selectedData);
	      
	    });*/
	 $("#shipFrom").keydown(function(){
			//$(".showprelocationf").html('');
			var value_data = $(this).val();
			$("#showprelocationf").empty();
			$("#selecterror").empty();
			$("#showprelocationf").hide();
			$(".cancelsavebtns").css({"margin-top":"5%"});
			if(value_data.length >= 2){
				var optionValues = [];
				$('#route_name_from option').each(function(){
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
						$("#selecterror").text("City name already exists");
								$("#showprelocationf").show();
								$("#showprelocationf").html('<div style="width: 90%;text-indent: 10px;font-weight: 600;margin: auto;margin-top:2px;background: #965664;color: #fff;padding: 2px 0px;border-radius: 2px;box-shadow: #000 0px 1px 5px;">'+value+'</div>');
								$(".cancelsavebtns").css({"margin-top":"11%"});
								$("#AddEventfrom").prop("onclick",null).off("onclick");
								return false;
							}else{
							//	//alert("from Exit "+value);
								$(".cancelsavebtns").css({"margin-top":"5%"});
								$("#AddEventfrom").attr("onclick","javascript:addShipFromNew()").on("onclick");
								
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
	 
	 $("#shipTo").keydown(function(){
			//$(".showprelocationf").html('');
			var value_data = $(this).val();
			$("#showprelocationt").empty();
			$("#selecterror").empty();
			$("#showprelocationt").hide();
			$(".cancelsavebtns").css({"margin-top":"5%"});
			if(value_data.length >= 2){
				var optionValues = [];
				$('#route_name_to option').each(function(){
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
								$("#showprelocationt").show();
								$("#showprelocationt").html('<div style="width: 90%;text-indent: 10px;font-weight: 600;margin: auto;margin-top:2px;background: #965664;color: #fff;padding: 2px 0px;border-radius: 2px;box-shadow: #000 0px 1px 5px;">'+value+'</div>');
								$(".cancelsavebtns").css({"margin-top":"11%"});
								$("#AddEventto").prop("onclick",null).off("onclick");
								return false;
							}else{
							//	//alert("from Exit "+value);
								$(".cancelsavebtns").css({"margin-top":"5%"});
								$("#AddEventto").attr("onclick","javascript:addShipToNew()").on("onclick");
								
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
	 
	    
	    // Params ($selector, boolean)
	  $(".body_blur").on('click',function(){
		  $(".showallRoutes").hide();
	  })

 });
 function setSwitchState(el, flag) {
     el.attr('checked', flag);
     $(".PhotoEvidence").text("No");
   }
   
 

function getRouteDEtails(RouteMasterGetRoute)
{
/*	$.getJSON(RouteMasterGetRoute,function(response){
		$.each(response,function(a,b){
			var RouteOption = '<option value="'+b.route_Id+'">'+b.description+'</option>';
			$("#event_id_val").append(RouteOption);
		});
	});*/
			$.ajax({
    url: RouteMasterGetRoute,
    type : "GET",
    dataType: 'json',
	headers: {
		   	     	   'Authorization': localStorage.getItem('SavedToken')
		   	     	  	   },
    success:function(response){
  	$.each(response,function(a,b){
			var RouteOption = '<option value="'+escapeHtml(b.route_Id)+'">'+escapeHtml(b.description)+'</option>';
			$("#event_id_val").append(RouteOption);
		});
		}
		});
}
function checkAlreadyRouteDesc(RouteMasterGetRoute,value)
{
	
}

function ship_from()
{
	var event_from = $("#route_name_from").val();
	$("#event_to").children('option[value="'+event_from+'"]').css('display','none');
	var event_to = $("#route_name_to").val();
	var event_pri_mode = $("#event_pri_mode").val();
	var event_inco = $("#event_inco").val();
	$("#event_description").val(event_from+' to '+event_to+', mode by '+event_pri_mode+','+event_inco);
}
function ship_to()
{

	var event_from = $("#route_name_from").val();
	var event_to = $("#route_name_to").val();
	var event_pri_mode = $("#event_pri_mode").val();
	var event_inco = $("#event_inco").val();
	$("#event_description").val(event_from+' to '+event_to+', mode by '+event_pri_mode+','+event_inco);
}
function pri_mode()
{
	var event_from = $("#route_name_from").val();
	var event_to = $("#route_name_to").val();
	var event_pri_mode = $("#event_pri_mode").val();
	var event_inco = $("#event_inco").val();
	$("#event_description").val(event_from+' to '+event_to+', mode by '+event_pri_mode+','+event_inco);
}
function event_inco()
{
	var event_from = $("#route_name_from").val();
	var event_to = $("#route_name_to").val();
	var event_pri_mode = $("#event_pri_mode").val();
	var event_inco = $("#event_inco").val();
	$("#event_description").val(event_from+' to '+event_to+', mode by '+event_pri_mode+','+event_inco);
}
function createRoute()
{
	
	var table = $('#inboxesvalues').tableToJSON();  
	
	var Cust_Id = $("#Cust_Id").val();

	var bp_name = $("#bp_name").val();
	var event_type_val = $("#event_type_val").val();
	var event_from = $("#route_name_from").val();
	var event_to = $("#route_name_to").val();
	var event_pri_mode = $("#event_pri_mode").val();
	var event_inco = $("#event_inco").val();
	var event_std_dur = $("#event_std_dur").val();
	var days_months = $("#days_months").val();
	var event_route_status = $("#event_status").val();
	var event_description = $("#event_description").val();
	var cust_route_id = $("#cust_route_id").val();
	var error = document.getElementById("error");
	
	if(event_from == "")
		{
		var text = "Enter Route From";
		error.innerHTML = text;
		$("#route_name_from").focus().css("border","1px solid red");
		return false;
		}
	if(event_to == "")
	{
	var text = "Enter Route To";
	error.innerHTML = text;
	$("#route_name_to").focus().css("border","1px solid red");
	return false;
	}

	if(event_pri_mode == "")
	{
	var text = "Select Primary Mode";
	error.innerHTML = text;
	$("#event_pri_mode").focus().css("border","1px solid red");
	return false;
	}

	/*if(event_inco == "")
	{
	var text = "Select Inco Terms";
	error.innerHTML = text;
	$("#event_inco").focus().css("border","1px solid red");
	return false;
	}*/

	if(event_std_dur == "")
	{
	var text = "Enter Duration Number";
	error.innerHTML = text;
	$("#event_std_dur").focus().css("border","1px solid red");
	return false;
	}
	if(cust_route_id == "")
	{
	var text = "Enter Customer Route ID";
	error.innerHTML = text;
	$("#cust_route_id").focus().css("border","1px solid red");
	return false;
	}

	
	
/*	var json_value = {  "customerId":Cust_Id,
						"businessId":bp_name,
						"route_Id":event_type_val,
						"shipFrom":event_from,
						"shipTo":event_to,
						"primaryMode":event_pri_mode,
						"incoTerms":event_inco,
						"standradDuration":event_std_dur+' '+days_months,
						"status":event_route_status,
						"description":event_description,
						"custRouteId":cust_route_id,
						"default_Business_Partners_And_Events":table
					};*/
		var table_json_array =[];			
					
					$('#inboxesvalues tbody tr').each(function() 
    {
      var firstCheckbox = $(this).find('input[type="checkbox"]:first');
      
          if (firstCheckbox.is(':checked')) 
          {
            var eventId = $(this).find('td:eq(1) div').text();
            var partnerId = $(this).find('td:eq(3) select').val();
            var partnerName = $(this).find('td:eq(5) select').val();
            
            var eventName = $(this).find('td:eq(6) div').text();
            var documents = $(this).find('td:eq(7) div:first').text();
            var tr_json=
            {
                "event_Id": eventId,
                "bp_Id":partnerId,
                "d":"",
                "bp_Name":partnerName,
                "event_Name":eventName,
                "photo_Evidence":documents
            };
            table_json_array.push(tr_json);
          } 
    });
    
    
    
    var json_value = {  "customerId":Cust_Id,
                        "businessId":bp_name,
                        "route_Id":event_type_val,
                        "shipFrom":event_from,
                        "shipTo":event_to,
                        "primaryMode":event_pri_mode,
                        "incoTerms":event_inco,
                        "standradDuration":event_std_dur+' '+days_months,
                        "status":event_route_status,
                        "description":event_description,
                        "custRouteId":cust_route_id,
                        "default_Business_Partners_And_Events":table
                    };
										
					
	///console.log(JSON.stringify(json_value));
	///return false;
    var url = localStorage.getItem("smaasip")+"/SCMXPert/addNewRoute";
	$.ajax({
       	 type:"post",
		 url:url,
		 headers: { Accept : "application/json",
					'Content-Type': "application/json", 
					'Authorization': localStorage.getItem('SavedToken')
			 		}, 
				
		 data: JSON.stringify(json_value),
		 beforeSend: function() {
             // $("#loading-image").show();
             var loading = '<img src="./images/loading.gif" id="loadingimg"/>';
             $(".body_blur").show().html(loading).css({"background":"#000000c2"});
             $("#loadingimg").show();
           },
	    success: function(data) {
	    	
	    	var correct = '<img src="./images/correct.gif" id="tickimg" style="width:65px;"/>';
			
			//var Idb = json_value.userId;
			
			/*$(".showviewdata1")
					.show()   
					.html('<div class="alert alert-success" role="alert" >Business Partner Created <strong> Successfully! </strong> and Your ID is ' + Idb	+ '  <a href="Dashboard.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">Move to Dashboard</a>.</div>');*/
			$(".body_blur").show().html('<div class="alert alert-success" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;"><div class="float-right" onclick="javascript:return closefunction();">X</div>'+correct+'Route Successful Created  <a href="Dashboard.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">Move to Dashboard</a>.</div>').css({"background":"#000000c2"});
	    	//$("#backgroundBlur").show();
	    	//$(".showviewdata").show().html('<div class="alert alert-success" role="alert">Route Successful Created  <a href="Dashboard.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">Move to Dashboard</a>.</div>');
	    	var UserId = $.session.get('UserId');
	   	 var Role = $.session.get('Role');
UserIds = $.session.get('UserId');
	
		 var UserId = UserIds;
		 	var useridsplit = UserId.split('-');
		 	useridsplit[0].toString();
		 	useridsplit[0] + "";
		 	useridsplit[1].toString();
		 	useridsplit[1] + "";
	    	//var RouteMasterGetRoute = localStorage.getItem("smaasip")+"/SCMXPert/getRoutes/"+useridsplit[0];
	    //	var Route_id = '';
	    	//RouteDetailsWithId(Route_id,RouteMasterGetRoute);
	    	//window.location.href = "Dashboard.jsp";
	    },
	}); 
}
function closefunction()
{

	document.location.reload();

}

function UpdateRoute()
{
	
	var table = $('#inboxesvalues2').tableToJSON();
	var Cust_Id = $("#Cust_Id").val();
	var bp_name = $("#bp_name").val();
	var event_type_val = $("#event_type_val").val();
	var event_from = $("#route_name_from").val();
	var event_to = $("#route_name_to").val();
	var event_pri_mode = $("#event_pri_mode").val();
	var event_inco = $("#event_inco").val();
	var event_std_dur = $("#event_std_dur").val();
	var days_months = $("#days_months").val();
	var event_route_status = $("#event_status").val();
	var event_description = $("#event_description").val();
	var cust_route_id = $("#cust_route_id").val();
	
	var table_json_array = [];
/*	var json_value = {  "customerId":Cust_Id,
						"businessId":bp_name,
						"route_Id":event_type_val,
						"shipFrom":event_from,
						"shipTo":event_to,
						"primaryMode":event_pri_mode,
						"incoTerms":event_inco,
						"standradDuration":event_std_dur+' '+days_months,
						"status":event_route_status,
						"description":event_description,
						"custRouteId":cust_route_id,
						"default_Business_Partners_And_Events":table
					};*/
					
					$('#inboxesvalues2 tbody tr').each(function() 
    {
      var firstCheckbox = $(this).find('input[type="checkbox"]:first');
      
          if (firstCheckbox.is(':checked')) 
          {
            var eventId = $(this).find('td:eq(1) div').text();
            var partnerId = $(this).find('td:eq(3) select').val();
            var partnerName = $(this).find('td:eq(5) select').val();
            
            var eventName = $(this).find('td:eq(6) div').text();
            var documents = $(this).find('td:eq(7) div:first').text();
            
            var tr_json=
            {
                "event_Id": eventId,
                "bp_Id":partnerId,
                "d":"",
                "bp_Name":partnerName,
                "event_Name":eventName,
                "photo_Evidence":documents
            };
            table_json_array.push(tr_json);
          } 
    });
 //   console.log(table_json_array);
    
    
    
    var json_value = {  "customerId":Cust_Id,
                        "businessId":bp_name,
                        "route_Id":event_type_val,
                        "shipFrom":event_from,
                        "shipTo":event_to,
                        "primaryMode":event_pri_mode,
                        "incoTerms":event_inco,
                        "standradDuration":event_std_dur+' '+days_months,
                        "status":event_route_status,
                        "description":event_description,
                        "custRouteId":cust_route_id,
                        "default_Business_Partners_And_Events":table
                    };
					
					
					
	////console.log(JSON.stringify(json_value));return false;
    var url = localStorage.getItem("smaasip")+"/SCMXPert/updateRoute";
	$.ajax({
       	 type:"post",
		 url:url,
		 headers: { Accept : "application/json",
					'Content-Type': "application/json",
					'Authorization': localStorage.getItem('SavedToken') 
			 		}, 
				
		 data: JSON.stringify(json_value),
		 beforeSend: function() {
             // $("#loading-image").show();
             var loading = '<img src="./images/loading.gif" id="loadingimg"/>';
             $(".body_blur").show().html(loading).css({"background":"#000000c2"});
             $("#loadingimg").show();
           },
	    success: function(data) {
	    	/*$("#backgroundBlur").show();
	    	$(".showviewdata").show().html('<div class="alert alert-success" role="alert">Route Update <strong>Successfully!</strong> <a href="Dashboard.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">Move to Dashboard</a>.</div>');*/
var correct = '<img src="./images/correct.gif" id="tickimg" style="width:65px;"/>';
			
			//var Idb = json_value.userId;
			
			/*$(".showviewdata1")
					.show()   
					.html('<div class="alert alert-success" role="alert" >Business Partner Created <strong> Successfully! </strong> and Your ID is ' + Idb	+ '  <a href="Dashboard.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">Move to Dashboard</a>.</div>');*/
			$(".body_blur").show().html('<div class="alert alert-success" role="alert" style="cursor:pointer; background:#fcfefc;width: 60%;margin: auto;top: 45%;"><div class="float-right" onclick="javascript:return closefunction();">X</div>'+correct+'Route Updated <strong>Successfully!</strong> <a href="Dashboard.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">Move to Dashboard</a>.</div>').css({"background":"#000000c2"});
	    	//var RouteMasterGetRoute = localStorage.getItem("smaasip")+"/SCMXPert/getRoutes/"+useridsplit[0];
	    	//var Route_id = '';
	    	//$("#event_id_val").val('');
	    	//RouteDetailsWithId(Route_id,RouteMasterGetRoute);
	    	//window.location.href = "RouteMaster.jsp";
	   	 //selectRoute('');
	    },
	}); 
}
function addShipFrom()
{
	$(".AddEventBlock,#backgroundBlur").show();
}
function addShipFromNew()
{
	$(".invalidText").focusout( function(e) {
var reg =/<(.|\n)*?>/g;
if (reg.test($('.invalidText').val()) == true) {
alert('Invalid input');
// $(".box").css({"border":"1px solid red"})
// return false;
}
e.preventDefault();

});
	var str = $("#shipFrom").val();
	/*str = str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
	    return letter.toUpperCase();
	});*/
	var shipFrom = str;
	var error = document.getElementById("selecterror");
	////alert(shipFrom);
/*	$("#route_name_from").append('<option value="'+shipFrom+'">'+shipFrom+'</option>');
	$("#route_name_from").val(shipFrom);
	$("#shipFrom").val('');
	$(".body_blur,.addShipfromPop,.addShipToPop").hide();*/
	
	if(shipFrom == '')
		{
		var txt = "Please Enter Route Name";
		error.innerHTML = txt;
		return false;
		}else{
	
	var dropdownvalues = [];
	$("#route_name_from option").each(function(){
		
		var values = $(this).attr('value');
		dropdownvalues.push(values);
	});
	var droper = dropdownvalues.filter(function(item){
		return item == shipFrom;
	});
	////console.log(droper);return false;
	if(droper != '')
		{
			var txt = "This Item is already Exits";
			error.innerHTML = txt;
			return false;
		}
	if(droper == '')
		{
			$("#route_name_from,#route_name_to").append('<option value="'+escapeHtml(shipFrom)+'">'+escapeHtml(shipFrom)+'</option>');
			$("#route_name_from").val(shipFrom);
			$("#backgroundBlur1").fadeOut();
			$(".addShipfromPop").hide();
			$("#shipFrom").val('');
		}
	var optionValues = [];
	 $('#route_name_from option').each(function(){
		    if($.inArray(this.value, optionValues) >-1){
		       $(this).remove()
		    }else{
		       optionValues.push(this.value);
		    }
		 });
	 }
}
function addShipToNew()
{
	$(".invalidText1").focusout( function(e) {
var reg =/<(.|\n)*?>/g;
if (reg.test($('.invalidText1').val()) == true) {
alert('Invalid input');
// $(".box").css({"border":"1px solid red"})
// return false;
}
e.preventDefault();

});
	var str = $("#shipTo").val();
	/*str = str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
	    return letter.toUpperCase();
	});*/
	var shipTo = str;
	////alert(shipFrom);
/*	$("#route_name_from").append('<option value="'+shipFrom+'">'+shipFrom+'</option>');
	$("#route_name_from").val(shipFrom);
	$("#shipFrom").val('');
	$(".body_blur,.addShipfromPop,.addShipToPop").hide();*/
	
	var optionValues = [];
	var error = document.getElementById("selecterrorto");
	
	if(shipTo == '')
	{
	var txt = "Please Enter Route Name";
	error.innerHTML = txt;
	return false;
	}else{
	
	var dropdownvalues = [];
	$("#route_name_to option").each(function(){
		
		var values = $(this).attr('value');
		dropdownvalues.push(values);
	});
	var droper = dropdownvalues.filter(function(item){
		return item == shipTo;
	});
	////console.log(droper);return false;
	if(droper != '')
		{
			var txt = "This Item is already Exits";
			error.innerHTML = txt;
			return false;
		}
	if(droper == '')
		{
			$("#route_name_to,#route_name_from").append('<option value="'+escapeHtml(shipTo)+'">'+escapeHtml(shipTo)+'</option>');
			//$("#route_name_from").append('<option value="'+shipTo+'">'+shipTo+'</option>');
			$("#route_name_to").val(shipTo);
			$("#backgroundBlur1").fadeOut();
			$(".addShipToPop").hide();
			$("#shipTo").val('');
		}
	
	 $('#route_name_to option').each(function(){
		    if($.inArray(this.value, optionValues) >-1){
		       $(this).remove()
		    }else{
		       optionValues.push(this.value);
		    }
		 });
	 ship_to();

}
}

function addShipFrom()
{
	$(".addShipfromPop,#backgroundBlur1").show();
}
function addShipTo()
{
	$(".addShipToPop,#backgroundBlur1").show();
}
/*function addShipFromNew()
{
	var shipFrom = $("#shipFrom").val();
	$("#route_name_from").append(shipFrom);
	$("#route_name_from").val(shipFrom);
	$("#shipFrom").val('');
	$(".body_blur,.addShipfromPop,.addShipToPop").hide();
}*/
/*function addShipToNew()
{
	var shipTo = $("#shipTo").val();
	$("#route_name_to").append(shipTo);
	$("#route_name_to").val(shipTo);
	$("#shipTo").val('');
	$(".body_blur,.addShipfromPop,.addShipToPop").hide();
}*/
function reset()
{
	
	var event_id_val = $("#event_id_val").val('');
	var event_type_val = $("#event_type_val").val('');
	var event_from = $("#event_from").val('');
	var event_to = $("#event_to").val('');
	var event_pri_mode = $("#event_pri_mode").val('');
	var event_inco = $("#event_inco").val('');
	var event_std_dur = $("#event_std_dur").val('');
	var event_route_status = $("#event_route_status").val('');
	var event_description = $("#event_description").val('');
}
function getRouteId(UserId)
{
	////alert(UserId);
/*	$.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/getIncrementedRoutedId/"+UserId,function(response){
		$("#event_type_val").val(response);	
	});*/
			$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getIncrementedRoutedId/"+UserId,
    type : "GET",
    dataType: 'json',
	headers: {
		   	     	   'Authorization': localStorage.getItem('SavedToken')
		   	     	  	   },
    success:function(response){
 		$("#event_type_val").val(response);	
	}
		
		});
	
}
function ShowAllRoutes()
{
	var Cust_Id = $("#Cust_Id").val();
	$(".body_blur").fadeIn();
	$(".showallRoutes").fadeIn().css({"width":"95%","height":"80%","background":"#fff","top": "0px","position":"fixed","z-index":"9","margin":"5% 2%","border-radius":"5px"});
	$(".showallRoutes").html("<div><h3 style='width:98%;margin:0px;text-align:center;padding-top:1%;float:left;'>Routes List</h3><div style='float:left;font-weight:bold;font-size:14px;padding-top:1%;margin-top:10px;width: 1.7%;height: 30px;' class='close' onclick='javascript:return closerouteslist();'>X</div></div><div style='height:450px;overflow-y:auto;float:left;width:100%;'><table id='showallRoutesList' class='table' style='width: 98%;margin: 1%;'><thead><tr style='background: #894151'><th>S.No</th><th>Route Id</th><th>Business-Partner</th><th>From - To</th><th>Customer RouteId</th><th>Inco Terms</th><th>Std.Duration</th><th>Description</th><th>Action</th></tr></thead><tbody></tbody></table></div><div style='width: 370px;margin: auto;margin-top: 2%;'><button class='bg-color margin-rl1 btn-head' style='margin-right: 12%;height:30px;width:130px;' onclick='javascript:return closerouteslist();'>Close</button><button class='bg-color margin-rl1 btn-head' style='width:130px;height:30px;'onclick='javascript:DownloadAllRoutes();'>Download to Csv</button></div>")
	$("#showallRoutesList").css({"font-size":"12px","font-weight":"bold"});
	var UserId = $.session.get('UserId');
	
	 	var UserIds = $.session.get('UserId');

	 var UserId = UserIds;
	 	var useridsplit = UserId.split('-');
	 	useridsplit[0].toString();
	 	useridsplit[0] + "";
	 	useridsplit[1].toString();
	 	useridsplit[1] + "";
	var GoodsMasterGetRoute = localStorage.getItem("smaasip")+"/SCMXPert/getRoutes/"+useridsplit[0];   
/*	$.getJSON(GoodsMasterGetRoute,function(response){
		//console.log(response);
		
			var num = 0
		$.each(response,function(a,b){
			var tabletr="<tr id='hidedata_"+b.route_Id+"'><td>"+(num+1)+"</td><td>"+b.route_Id+"</td><td>"+b.businessId+"</td><td>"+b.from+"-"+b.to+"</td><td>"+b.custRouteId+"</td><td>"+b.inco_Term+"</td><td>"+b.std_Duration+"</td><td>"+b.description+"</td><td><img src='./images/pencil.png' style='width:16px;height:16px;' title='Edit' onclick='javascript:return editRoute(\""+b.route_Id+"\")'/>&nbsp;&nbsp;&nbsp;&nbsp;<img src='./images/rubbish-bin (1).png' style='width:16px;height:16px;' title='Delete' onclick='javascript:return deleteRouteItem(\""+useridsplit[0]+"\",\""+b.route_Id+"\");'/></td></tr>"
			$("#showallRoutesList >tbody").append(tabletr);
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
 		//console.log(response);
		
			var num = 0
		$.each(response,function(a,b){
			var tabletr="<tr id='hidedata_"+escapeHtml(b.route_Id)+"'><td>"+escapeHtml(num+1)+"</td><td>"+escapeHtml(b.route_Id)+"</td><td>"+escapeHtml(b.businessId)+"</td><td>"+escapeHtml(b.from)+"-"+escapeHtml(b.to)+"</td><td>"+escapeHtml(b.custRouteId)+"</td><td>"+escapeHtml(b.inco_Term)+"</td><td>"+escapeHtml(b.std_Duration)+"</td><td>"+escapeHtml(b.description)+"</td><td><img src='./images/pencil.png' style='width:16px;height:16px;' title='Edit' onclick='javascript:return editRoute(\""+escapeHtml(b.route_Id)+"\")'/>&nbsp;&nbsp;&nbsp;&nbsp;<img src='./images/rubbish-bin (1).png' style='width:16px;height:16px;' title='Delete' onclick='javascript:return deleteRouteItem(\""+escapeHtml(useridsplit[0])+"\",\""+escapeHtml(b.route_Id)+"\");'/></td></tr>"
			$("#showallRoutesList >tbody").append(tabletr);
			num++;
		});
		
		}
		});
}
function closerouteslist()
{
	 AllRoutes();
	$(".body_blur").hide();
	 $(".showallRoutes").fadeOut().empty();
	
}
function DownloadAllRoutes()
{
	//$("#showallGoodsList").css({"font-size":"12px","font-weight":"bold"});
/*	$(".showallGoods").fadeIn().css({"width":"95%","height":"80%","background":"#fff","top": "0px","position":"fixed","z-index":"9","margin":"5% 2%","overflow-y":"auto","border-radius":"5px"});
	$(".showallGoods").html("<div><h3 style='width:98%;margin:0px;text-align:center;padding-top:1%;float:left;'>Goods Items List</h3><div style='float:left;font-weight:bold;font-size:14px;padding-top:1%;margin-top:10px;width: 1.7%;height: 30px;' class='close' onclick='javascript:return closegoodslist();'>X</div></div><table id='showallGoodsList' class='table'><thead><tr><th>S.No</th><th>Goods Id</th><th>Goods Item</th><th>Customer GoodId</th><th>Description</th><th>Temp. From - To</th><th>Humidity From - To</th><th>Shock From - To</th><th>Tilt From - To</th><th>Sensor</th><th>Hazardous</th><th>Pressure</th><th>Status</th></tr></thead><tbody></tbody></table>")
	var UserId = $.session.get('UserId');
	var GoodsMasterGetRoute = localStorage.getItem("smaasip")+"/SCMXPert/getGoods/"+UserId;   
	$.getJSON(GoodsMasterGetRoute,function(response){
		//console.log(response);
		
			var num = 0
		$.each(response,function(a,b){
			var tabletr="<tr><td>"+(num+1)+"</td><td>"+b.goods_Id+"</td><td>"+b.goods_Item+"</td><td>"+b.custGoodId+"</td><td>"+b.description+"</td><td>"+b.temperature_From+" "+b.tempUnits+"-"+b.temperature_To+" "+b.tempUnits+"</td><td>"+b.humidity_From+" "+b.humiUnits+"-"+b.humidity_To+" "+b.humiUnits+"</td><td>"+b.shock_From+" "+b.shockUnits+"-"+b.shock_To+" "+b.shockUnits+"</td><td>"+b.tilt_From+" "+b.tiltUnits+"-"+b.tilt_To+" "+b.tiltUnits+"</td><td>"+b.sensorSelect+"</td><td>"+b.hazardousSelect+"</td><td>"+b.pressureSelect+"</td><td>"+b.goods_Status+"</td></tr>"
			$("#showallGoodsList >tbody").append(tabletr);
			num++;
		});
		});*/
	$("#showallRoutesList").tableToCSV({  
        filename: 'RoutesList'  
    });
}

function AllRoutes()
{
	//$("#showallGoodsList").css({"font-size":"12px","font-weight":"bold"});
	
	$(".showallRoutes").html("<div><h3 style='width:98%;margin:0px;text-align:center;padding-top:1%;float:left;'>Goods Items List</h3><div style='float:left;font-weight:bold;font-size:14px;padding-top:1%;margin-top:10px;width: 1.7%;height: 30px;' class='close' onclick='javascript:return closegoodslist();'>X</div></div><table id='showallRoutesList' class='table'><thead><tr><th>S.No</th><th>Route Id</th><th>Business-Partner Id</th><th>From - To</th><th>Customer RouteId</th><th>Inco Terms</th><th>Std.Duration</th><th>Description</th></tr></thead><tbody></tbody></table>")
	var UserId = $.session.get('UserId');
	 var Role = $.session.get('Role');

	 	var UserIds = $.session.get('UserId');

	 var UserId = UserIds;
	 	var useridsplit = UserId.split('-');
	 	useridsplit[0].toString();
	 	useridsplit[0] + "";
	 	useridsplit[1].toString();
	 	useridsplit[1] + "";
	var GoodsMasterGetRoute = localStorage.getItem("smaasip")+"/SCMXPert/getRoutes/"+useridsplit[0];   
	/*$.getJSON(GoodsMasterGetRoute,function(response){
		//console.log(response);
		
			var num = 0
		$.each(response,function(a,b){
			var tabletr="<tr><td>"+(num+1)+"</td><td>"+b.route_Id+"</td><td>"+b.businessId+"</td><td>"+b.from+"-"+b.to+"</td><td>"+b.custRouteId+"</td><td>"+b.inco_Term+"</td><td>"+b.std_Duration+"</td><td>"+b.description+"</td></tr>"
			$("#showallRoutesList >tbody").append(tabletr);
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
 	//console.log(response);
		
			var num = 0
		$.each(response,function(a,b){
			var tabletr="<tr><td>"+escapeHtml(num+1)+"</td><td>"+escapeHtml(b.route_Id)+"</td><td>"+escapeHtml(b.businessId)+"</td><td>"+escapeHtml(b.from)+"-"+escapeHtml(b.to)+"</td><td>"+escapeHtml(b.custRouteId)+"</td><td>"+escapeHtml(b.inco_Term)+"</td><td>"+escapeHtml(b.std_Duration)+"</td><td>"+escapeHtml(b.description)+"</td></tr>"
			$("#showallRoutesList >tbody").append(tabletr);
			num++;
		});
		
		}
		});
	/*$("#showallGoodsList").tableToCSV({  
        filename: 'GoodsList'  
    });*/
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


function editRoute(Route_id)
{
	selectRoute(Route_id);
	$(".body_blur").hide();
	 $(".showallRoutes").fadeOut().empty();
	
}
function deleteRouteItem(cust_ID,gId)
{
	////alert(cust_ID+","+gId)
	var url = localStorage.getItem("smaasip")+"/SCMXPert/deleteRoute/"+cust_ID+"/"+gId;
	$.ajax({
      	 type:"get",
		 url:url,
		 headers: { Accept : "application/json",
					'Content-Type': "application/json", 
					'Authorization': localStorage.getItem('SavedToken')
			 		},
				
	    success: function(data) {
//	    	//alert(data);
	    	//console.log(data);
	    	$("#hidedata_"+gId).hide();
	    	
	    }
	});
	
}
function closeRoute()
{
	$(".cancelsavebtns").css({"margin-top":"5%"});
	$("#shipFrom").val('');
	$("#shipTo").val('');
	$("#showprelocationf").empty().hide();
	$("#showprelocationt").empty().hide();
	$("#selecterror").empty();
	$("#selecterrorto").empty();	
	$(".AddEventBlock,.body_blur,.addShipToPop,.addShipfromPop,#backgroundBlur1").hide();
	$("body").css("overflow","auto");
}


function selectRouting(val)
{
$("#refreshiconRoute").attr("onclick","javascript:return selectRoute('"+val+"')");
selectRoute(val);
}
