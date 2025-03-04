$(function(){
	 var UserId = $.session.get('UserId');
	 	if(UserId == undefined)
			{
	 			window.location.href = "index.jsp";
			}
	 	var Role = $.session.get('Role');
		var RolePermission = $.session.get('RolePermission');
		//var UserId = UserIds;
		var useridsplit = UserId.split('-');
		useridsplit[0].toString();
		useridsplit[0] + "";
		useridsplit[1].toString();
		useridsplit[1] + "";
		//alert(useridsplit[0])
		var token = $.session.get('Token');
		////alert(useridsplit[1]);
		//getShipmentId(useridsplit[1]);
		//var UserIds = $.session.get('UserId');
		$.ajax({
			url: localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0],
			type: "GET",
			dataType: "json",
			headers: {
				'Content-Type' : "application/json",
			    'Authorization': localStorage.getItem('SavedToken'),
			  },
			success:function(data){
				var routeslist = [];
			//$("#internalshipment").val(data.internalShipmentId);
				$.each(data.business_Partner_Id,function(keys,values){
					if($.inArray(values, routeslist) != -1)
						{$(this).remove();}else{
							routeslist.push(values);
						}
			}); 
				 var optionValues =[];
				$.each(routeslist,function(key,value){
					var select_device_Id_items = '<option value="'+escapeHtml(value)+'">'+escapeHtml(value)+'</option>';
					$("#event_partner_from,#selectvalues").append(select_device_Id_items)
				});
				 $('#selectvalues option').each(function(){
					    if($.inArray(this.value, optionValues) >-1){
					       $(this).remove()
					    }else{
					       optionValues.push(this.value);
					    }
					 });
			}
		});

/*		var RouteMasterGetRoute = localStorage.getItem("smaasip")+"/SCMXPert/getRoutes/"+useridsplit[0];
		var token = $.session.get('Token');
		$.ajax({
			url: RouteMasterGetRoute,
			type: "GET",
			dataType: "json",
			headers: {
			    'Authorization': localStorage.getItem('SavedToken')
			  },
			success:function(data){
				 var optionValuesfrom = [];
				 var optionValuesto = [];
			$.each(data,function(key,value){
				$("#route_from").append('<option value="'+value.from+'">'+value.from+'</option>');
				$("#route_to").append('<option value="'+value.to+'">'+value.to+'</option>');
				$("#route_from").append('<option value="'+value.to+'">'+value.to+'</option>');
				$("#route_to").append('<option value="'+value.from+'">'+value.from+'</option>');
			});
			}
	
});*/
/*	CMAAS
 * 	var RouteGetRoute = localStorage.getItem("smaasip")+"/SCMXPert/getShipfromandto/"+useridsplit[0];
		var token = $.session.get('Token');
		$.ajax({
			url: RouteGetRoute,
			type: "GET",
			dataType: "json",
			headers: {
			    'Authorization': localStorage.getItem('SavedToken')
			  },
			success:function(data){
				//console.log(data.length);
				
				for(i=0;i< data.length;i++)
					{
						//console.log(data[i]);
						$("#route_from,#route_to").append('<option value="'+data[i]+'">'+data[i]+'</option>');
					}
				
			}
	
});*/
		
		
	/*	$("#shipTo,#shipFrom").keydown(function(){
			//$(".showprelocationf").html('');
			$("#selecterror").empty();
			$("#selecterrorto").empty();
			var value_data = $(this).val();
			$("#showprelocationf").empty();
			$("#showprelocationt").empty();
			if(value_data.length >= 2){
				var optionValues = [];
				$('#route_from option').each(function(){
					    if($.inArray(this.value, optionValues) >-1){
					       $(this).remove()
					    }else{
					       optionValues.push(this.value);
					    }
					 });
				arr = optionValues.filter(function(entry) { return /\S/.test(entry); });
				//console.log(arr);
				var expression = new RegExp(value_data,"i");
				$.each(arr,function(key,value){
					
					
					if(value.search(expression) != -1)
						//if(value.from == value_data)
							//if(value.to == value_data)
							{
						////alert(value);
								$("#showprelocationf").append('<div style="width:60%;text-indent: 10px;font-weight: 600;margin: auto;margin-top:2px;background: #965664b8;color: #fff;padding: 2px 0px;border-radius: 2px">'+value+'</div>');
							}
					if(value.search(expression) != -1)
						//if(value.from == value_data)
						{
							$(".showprelocationt,.showprelocationf").append("<div style='width:60%;text-indent: 10px;font-weight: 600;margin: auto;margin-top:2px;background: #965664b8;color: #fff;padding: 2px 0px;border-radius: 2px'>"+value.from+"</div>")
						}
				
				
				
				
			});
$.each(arr,function(key,value){
					
					
					if(value.search(expression) != -1)
						//if(value.from == value_data)
							//if(value.to == value_data)
							{
						////alert(value);
								$("#showprelocationt").html('<div style="width:60%;text-indent: 10px;font-weight: 600;margin: auto;margin-top:2px;background: #965664b8;color: #fff;padding: 2px 0px;border-radius: 2px">'+value+'</div>');
							}*/
					/*if(value.search(expression) != -1)
						//if(value.from == value_data)
						{
							$(".showprelocationt,.showprelocationf").append("<div style='width:60%;text-indent: 10px;font-weight: 600;margin: auto;margin-top:2px;background: #965664b8;color: #fff;padding: 2px 0px;border-radius: 2px'>"+value.from+"</div>")
						}*/
				
				
				
				
			/*});*/
				
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
			
			/*}else{
				$(".showprelocationt,.showprelocationf").empty();
				}
		});*/
		
		$(".closecreate,#CancelEvent,#CancelEventCreate1,#CancelEventCreate2,#CancelEventCreate3").on("click",function(){
			$(".addShipfromPop").hide();
			$(".addShipToPop,.addNDCToPop").hide();
			$(".body_blur").hide();
			$(".AddEventBlock").hide();
		})
		
		
		$('#expected_date').Zebra_DatePicker({
			 direction: true,
		    format: 'd-M-Y'
		});
		
});
function addRoute()
{
	window.location.href = "RouteMaster.jsp";
}

function addGood()
{
	window.location.href = "GoodsMaster.jsp";
}
/*function getShipmentId(bp_id)
{
	////alert(bp_id);
	 var token = $.session.get('Token');
	var url = localStorage.getItem("smaasip")+"/SCMXPert/getInternalShipmentId/"+bp_id;
	$.getJSON(url,function(response){
		////alert(response);
		});
	////alert(url);
	////alert(Token);
	$.ajax({
		url: url,
       	type: "GET",
       	headers: {
      	    'Authorization': localStorage.getItem('SavedToken')
      	  },
      	success: function(data, textStatus, xhr) {
      		////alert(data);
      		$("#internalshipment").val(data)
            //console.log(xhr.status);
        },
        complete: function(xhr, textStatus) {
            //console.log(xhr.status);
        } 
	});
}*/
function getRoute_id(v)
{
	
	var SCM_id = $("#Cust_Id").val();
	var Role = $.session.get('Role');

			var UserIds = $.session.get('UserId');

	var UserId = UserIds;
		var useridsplit = UserId.split('-');
		useridsplit[0].toString();
		useridsplit[0] + "";
		useridsplit[1].toString();
		useridsplit[1] + "";
	/*$.getJSON( localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0], function( data ) {
		////alert(data.bussinesPartnersDetails);
 		$.each(data.route,function(key,val){
 			
			if(v == val.route_Id)
				{ 
				$("#company_name").val(val.company_Name).css("font-weight","bold");
				$("#inboxesvalues>tbody").empty();
			$.each(val.default_Business_Partners_and_Events,function(keys,values){
				//var status_length = values.event_Status.length;
				//	var theDate = new Date( Date.parse(values.event_Exec_Date));
	             //	var date_create = theDate.toLocaleDateString();
	             	var key = keys+1;
	             	  var first = $(location).attr('pathname');
	             	    first.indexOf(1);
	             	    first.toLowerCase();
	             	    first = first.split("/")[2]
	             	   var content = fn(values.bp_Name, 20, true);
	             	   if(first == "CreateShipment.jsp"){
	           	    	var eventsboxes = '<tr id="row_val_'+values.event_Id+'" class="Event_class"><td class="p-1" style="display: block;"><input type="radio" name="event" style="width:14px;" value="'+values.event_Id+'" id="'+values.event_Id+'"/></td><td class="" style="font-size: 10px;padding:1px;"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 50px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="'+values.event_Id+'">'+values.event_Id+'</div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 190px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="event_name_'+values.event_Id+'">'+values.event_Name+'</div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;display:none;" id="partner_from_'+values.event_Id+'">'+values.bp_Id+'</div></td><td><div><select style="padding-left:20%;"onchange="javascript:return getPartnerNameIncreateShipment(this.value,\''+values.event_Id+'\')"class="bp_idDropDown bp_dropdownvalue_'+values.event_Id+'"></select></div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 160px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="PartnerName_'+values.event_Id+'">'+content+'</div></td><td class="pl-1"><div id="Evidence-'+values.event_Id+'" class="PhotoEvidence" style="display:none;">'+values.photo_Evidence+'</div><div style="" id="date_'+values.event_Id+'"><label class="switch"><input class="switch-input" id="switch-input-'+values.event_Id+'" type="checkbox" onchange="javascript:return setPhotoEvidence(\''+values.event_Id+'\');"/><span class="switch-label" data-on="Yes" data-off="No"></span><span class="switch-handle"></span></label></div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 80px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="event_STATUS_'+values.event_Id+'">Queued</div></td></tr>';
	           	    	$("#tableHeader").show();
	           	    	////alert(values.photo_Evidence);
	           	    	
	           	    }	
	             	  $("#inboxesvalues>tbody").append(eventsboxes);
	             	 if(values.photo_Evidence == "yes")
        	    		{
        	    		////alert("#switch-input-"+values.event_Id);
        	    			$("#switch-input-"+values.event_Id).attr('checked',true);
        	    		}else{
        	    			$("#switch-input-"+values.event_Id).attr('checked',false);
        	    		}
//        	    	//alert(flag);
        	    	//setPhotoEvidence(values.event_Id); 
			});
			//$("##inboxesvalues>tbody>tr:first")
		//	event
			$("#inboxesvalues input:radio[name=event]:first").attr("checked",true);
			var inputvalues = $("#inboxesvalues input:radio[name=event]:checked").val();
			$("#event_STATUS_"+inputvalues).text("Initialized");
				}
			});
 		$.each(data.businessPartner,function(key,value){ //<td><div><select onchange="javascript:return getPartnerNameIncreateShipment(this.value,\''+values.event_Id+'\')"class="bp_idDropDown"></select></div></td>
			$(".bp_idDropDown").append('<option value="'+value.bp_Id+'">'+value.bp_Id+'</option>');
		});
		$.each(data.route,function(key,value){ //<td><div><select onchange="javascript:return getPartnerNameIncreateShipment(this.value,\''+values.event_Id+'\')"class="bp_idDropDown"></select></div></td>
			////console.log(value);
			if(v == value.route_Id)
			{
				$.each(value.default_Business_Partners_and_Events,function(key,vale){
					$(".bp_dropdownvalue_"+vale.event_Id).val(vale.bp_Id);
				});
			}
			//$(".bp_dropdownvalue_"+value.event_Name).val(value.bp_Id);
		})
 		});*/
			$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0],
    type : "GET",
    dataType: 'json',
	headers: {
		       'Content-Type' : "application/json",
	        	    'Authorization': localStorage.getItem('SavedToken'),
	        	  },
    success:function( data ){
  	////alert(data.bussinesPartnersDetails);
 		$.each(data.route,function(key,val){
 			
			if(v == val.route_Id)
				{ 
				$("#company_name").val(val.company_Name).css("font-weight","bold");
				$("#inboxesvalues>tbody").empty();
			$.each(val.default_Business_Partners_and_Events,function(keys,values){
				//var status_length = values.event_Status.length;
				//	var theDate = new Date( Date.parse(values.event_Exec_Date));
	             //	var date_create = theDate.toLocaleDateString();
	             	var key = keys+1;
	             	  var first = $(location).attr('pathname');
	             	    first.indexOf(1);
	             	    first.toLowerCase();
	             	  //  first = first.split("/")[2]
                        first = first.split("/");
                        first = first[first.length-1];
	             	   var content = fn(values.bp_Name, 20, true);
	             	   if(first == "CreateShipment.jsp"){
	           	    	var eventsboxes = '<tr id="row_val_'+escapeHtml(values.event_Id)+'" class="Event_class"><td class="p-1" style="display: block;"><input type="radio" name="event" style="width:14px;" value="'+escapeHtml(values.event_Id)+'" id="'+escapeHtml(values.event_Id)+'"/></td><td class="" style="font-size: 10px;padding:1px;"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 50px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="'+escapeHtml(values.event_Id)+'">'+escapeHtml(values.event_Id)+'</div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 190px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="event_name_'+escapeHtml(values.event_Id)+'">'+escapeHtml(values.event_Name)+'</div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;display:none;" id="partner_from_'+escapeHtml(values.event_Id)+'">'+escapeHtml(values.bp_Id)+'</div></td><td><div><select style="padding-left:20%;"onchange="javascript:return getPartnerNameIncreateShipment(this.value,\''+escapeHtml(values.event_Id)+'\')"class="bp_idDropDown bp_dropdownvalue_'+escapeHtml(values.event_Id)+'"></select></div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 160px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="PartnerName_'+escapeHtml(values.event_Id)+'">'+escapeHtml(content)+'</div></td><td class="pl-1"><div id="Evidence-'+escapeHtml(values.event_Id)+'" class="PhotoEvidence" style="display:none;">'+escapeHtml(values.photo_Evidence)+'</div><div style="" id="date_'+escapeHtml(values.event_Id)+'"><label class="switch"><input class="switch-input" id="switch-input-'+escapeHtml(values.event_Id)+'" type="checkbox" onchange="javascript:return setPhotoEvidence(\''+escapeHtml(values.event_Id)+'\');"/><span class="switch-label" data-on="Yes" data-off="No"></span><span class="switch-handle"></span></label></div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 80px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="event_STATUS_'+escapeHtml(values.event_Id)+'">Queued</div></td></tr>';
	           	    	$("#tableHeader").show();
	           	    	//console.log(eventsboxes);
	           	    	//alert("eventsboxes");
	           	    	//alert(eventsboxes);
	           	    	////alert(values.photo_Evidence);
	           	    	
	           	    }	
	             	  $("#inboxesvalues>tbody").append(eventsboxes);
	             	 if(values.photo_Evidence == "yes")
        	    		{
        	    		////alert("#switch-input-"+values.event_Id);
        	    			$("#switch-input-"+values.event_Id).attr('checked',true);
        	    		}else{
        	    			$("#switch-input-"+values.event_Id).attr('checked',false);
        	    		}
//        	    	//alert(flag);
        	    	//setPhotoEvidence(values.event_Id); 
			});
			//$("##inboxesvalues>tbody>tr:first")
		//	event
			$("#inboxesvalues input:radio[name=event]:first").attr("checked",true);
			var inputvalues = $("#inboxesvalues input:radio[name=event]:checked").val();
			$("#event_STATUS_"+inputvalues).text("Initialized");
				}
			});
 		$.each(data.businessPartner,function(key,value){ //<td><div><select onchange="javascript:return getPartnerNameIncreateShipment(this.value,\''+values.event_Id+'\')"class="bp_idDropDown"></select></div></td>
			$(".bp_idDropDown").append('<option value="'+escapeHtml(value.bp_Id)+'">'+escapeHtml(value.bp_Id)+'</option>');
		});
		$.each(data.route,function(key,value){ //<td><div><select onchange="javascript:return getPartnerNameIncreateShipment(this.value,\''+values.event_Id+'\')"class="bp_idDropDown"></select></div></td>
			////console.log(value);
			if(v == value.route_Id)
			{
				$.each(value.default_Business_Partners_and_Events,function(key,vale){
					$(".bp_dropdownvalue_"+vale.event_Id).val(vale.bp_Id);
				});
			}
			//$(".bp_dropdownvalue_"+value.event_Name).val(value.bp_Id);
		})
 		}
	});
	/*$.getJSON( localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0], function( data ) {
		////alert(data);
		$.each(data.businessPartner,function(key,value){ //<td><div><select onchange="javascript:return getPartnerNameIncreateShipment(this.value,\''+values.event_Id+'\')"class="bp_idDropDown"></select></div></td>
			$(".bp_idDropDown").append('<option value="'+value.bp_Id+'">'+value.bp_Id+'</option>');
		});
		$.each(data.route,function(key,value){ //<td><div><select onchange="javascript:return getPartnerNameIncreateShipment(this.value,\''+values.event_Id+'\')"class="bp_idDropDown"></select></div></td>
			////console.log(value);
			if(v == value.route_Id)
			{
				$.each(value.default_Business_Partners_and_Events,function(key,vale){
					$(".bp_dropdownvalue_"+vale.event_Id).val(vale.bp_Id);
				});
			}
			//$(".bp_dropdownvalue_"+value.event_Name).val(value.bp_Id);
		})
	});*/
/*	$.getJSON( localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0], function( data ) {
		////alert(data);
		////console.log(data.default_Business_Partners_and_Events);
		$.each(data.route,function(key,value){ //<td><div><select onchange="javascript:return getPartnerNameIncreateShipment(this.value,\''+values.event_Id+'\')"class="bp_idDropDown"></select></div></td>
			//console.log(value);
			if(v == val.route_Id)
			{
				$.each(value.default_Business_Partners_and_Events,function(key,value){
					//console.log(value);
				});
			}
			//$(".bp_dropdownvalue_"+value.event_Name).val(value.bp_Id);
		})
	});*/
	/* function setSwitchState(el, flag) {
		 //alert(flag)
	     el.attr('checked', flag);
	   }*/
	
	
	
	
	
	
}


function routeFromCreateShipment()
{
	$(".body_blur").show()
	$(".addShipfromPop").show();
}
function routeToCreateShipment()
{
	$(".body_blur").show()
	$(".addShipToPop").show();
}
function addShipFromNewCreateShipment()
{
	var shipFrom = $("#shipFrom").val();
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
	    $("#shipFrom").css({"margin": "0% 20% 1% 20%"});
		return false;
		}else{
	
	var dropdownvalues = [];
	$("#route_from option").each(function(){
		
		var values = $(this).attr('value');
		dropdownvalues.push(values);
	});
	var droper = dropdownvalues.filter(function(item){
		return item.toLowerCase() == shipFrom.toLowerCase();
	});
	////console.log(droper);return false;
	if(droper != '')
		{
			var txt = "This Item is already Exits";
			error.innerHTML = txt;
		    $("#shipFrom").css({"margin": "0% 20% 1% 20%"});
			return false;
		}
	if(droper == '')
		{

	$("#route_from,#route_to").append('<option value="'+escapeHtml(shipFrom)+'">'+escapeHtml(shipFrom)+'</option>');
	$("#route_from").val(shipFrom);
	$(".body_blur").hide()
	$(".addShipfromPop").hide();
		}
		}
}
function addShipToNewCreateShipment()
{
	var shipFrom = $("#shipTo").val();
	var error = document.getElementById("selecterrorto");
	////alert(shipFrom);
/*	$("#route_name_from").append('<option value="'+shipFrom+'">'+shipFrom+'</option>');
	$("#route_name_from").val(shipFrom);
	$("#shipFrom").val('');
	$(".body_blur,.addShipfromPop,.addShipToPop").hide();*/
	
	if(shipFrom == '')
		{
		var txt = "Please Enter Route Name";
		error.innerHTML = txt;
	    $("#shipTo").css({"margin": "0% 20% 1% 20%"});
		return false;
		}else{
	
	var dropdownvalues = [];
	$("#route_to option").each(function(){
		
		var values = $(this).attr('value');
		dropdownvalues.push(values);
	});
	var droper = dropdownvalues.filter(function(item){
		return item.toLowerCase() == shipFrom.toLowerCase();
	});
	////console.log(droper);return false;
	if(droper != '')
		{
			var txt = "This Item is already Exits";
			error.innerHTML = txt;
		    $("#shipTo").css({"margin": "0% 20% 1% 20%"});
			return false;
		}
	if(droper == '')
		{

	$("#route_to,#route_from").append('<option value="'+escapeHtml(shipFrom)+'">'+escapeHtml(shipFrom)+'</option>');
	$("#route_to").val(shipFrom);
	$(".body_blur").hide()
	$(".addShipToPop").hide();
		}
		}
}
function getPartnerNameIncreateShipment(BP_Value,id)
{
	$("#partner_from_"+id).text(BP_Value);
	var UserIds = $.session.get('UserId');
	var UserId = UserIds;
	var useridsplit = UserId.split('-');
		useridsplit[0].toString();
		useridsplit[0] + "";
		useridsplit[1].toString();
		useridsplit[1] + "";
/*	$.getJSON( localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0], function( data ) {
		$.each(data.businessPartner,function(key,value){
			if(BP_Value == value.bp_Id){
				$("#PartnerName_"+id).text(value.bp_Company);
			}
			//$(".bp_idDropDown").append('<option value="'+value.bp_Id+'">'+value.bp_Company+'</option>');
		})
	});*/
			$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0],
    type : "GET",
    dataType: 'json',
	headers: {
		'Content-Type' : "application/json",
	        	    'Authorization': localStorage.getItem('SavedToken'),
	        	  },
    success:function( data ){
  	$.each(data.businessPartner,function(key,value){
			if(BP_Value == value.bp_Id){
				$("#PartnerName_"+id).text(value.bp_Company);
			}
			//$(".bp_idDropDown").append('<option value="'+value.bp_Id+'">'+value.bp_Company+'</option>');
		})
		}
	});
/*	//alert(value);
	//alert(id);*/
}


function addNDCNumber(){
var NewndcNumNew = $("#ndc_number").val();
 if(NewndcNumNew == ''){
 $("#ndc_number").val(NewndcNumNew+',');
 }else{
 $("#ndc_number").val(NewndcNumNew+',');
 }

/*$(".addNDCToPop,.body_blur").show();*/
}
function addNdcToNewCreateShipment(){
var ndcNumNew = $("#ndc_number").val();
var NewndcNumNew = $("#newNdcNumber").val();
 if(ndcNumNew == ''){
 $("#ndc_number").val(NewndcNumNew+',');
 }else{
 $("#ndc_number").val(ndcNumNew+NewndcNumNew+',');
 }
 $(".addNDCToPop,.body_blur").hide();
 $("#newNdcNumber").val('');
}



function addBatchId(){
var NewBatchIdNew = $("#batch_id").val();

 if(NewBatchIdNew == ''){
 
 $("#batch_id").val(NewBatchIdNew+',');
 }else{
 $("#batch_id").val(NewBatchIdNew+',');
 }
/*$(".addBatchIdToPop,.body_blur").show();*/
}
function addBatchIdToNewCreateShipment(){
var BatchIdNew = $("#batch_id").val();
var NewBatchIdNew = $("#newbatch_id").val();

 if(BatchIdNew == ''){
 
 $("#batch_id").val(NewBatchIdNew+',');
 }else{
 $("#batch_id").val(BatchIdNew+NewBatchIdNew+',');
 }
 $(".addBatchIdToPop,.body_blur").hide();
 $("#newbatch_id").val('');
}



function addSerialNumberofgoods(){
var NewSerialNumberofgoodsNew = $("#serial_number_of_goods").val();

 if(NewSerialNumberofgoodsNew == ''){
 
 $("#serial_number_of_goods").val(NewSerialNumberofgoodsNew+',');
 }else{
 $("#serial_number_of_goods").val(NewSerialNumberofgoodsNew+',');
 }
/*$(".addSerialNumberofgoodsToPop,.body_blur").show();*/
}
function addSerialNumberofgoodsToNewCreateShipment(){
var SerialNumberofgoodsNew = $("#serial_number_of_goods").val();
var NewSerialNumberofgoodsNew = $("#newserial_number_of_goods").val();

 if(SerialNumberofgoodsNew == ''){
 
 $("#serial_number_of_goods").val(NewSerialNumberofgoodsNew+',');
 }else{
 $("#serial_number_of_goods").val(SerialNumberofgoodsNew+NewSerialNumberofgoodsNew+',');
 }
 $(".addSerialNumberofgoodsToPop,.body_blur").hide();
 $("#newserial_number_of_goods").val('');
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
