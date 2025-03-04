 $(function() {
	 var UserId = $.session.get('UserId');
	 	if(UserId == undefined)
			{
	 			window.location.href = "index.jsp";
			}
		 var UserName = $.session.get('UserName');
			var CustomerName = $.session.get('CustomerName');
			var Cust_Id = $.session.get('Cust_Id');
			var UserId = $.session.get('UserId');
			var Role = $.session.get('Role');
			var RolePermission = $.session.get('RolePermission');
			//var UserId = UserIds;
			var useridsplit = UserId.split('-');
			useridsplit[0].toString();
			useridsplit[0] + "";
			useridsplit[1].toString();
			useridsplit[1] + "";
			$("#customer_Name").text(CustomerName);
			$("#cust_name").val(CustomerName).attr("disabled",true);
			$("#bp_name_f").text(UserName);
			$("#bp_name").val(UserName).attr("disabled",true);
			$("#scmid,#Cust_Id").val(useridsplit[0]);
			$("#bpi_idchange").val(UserId);
	// var Cust_Id = $("#Cust_Id").val();
	 //getAllDevices();
			$('#expected_date,#transferDate').Zebra_DatePicker({
				 direction: true,
			    format: 'd-M-Y'
			});
			 $("#originid").keydown(function(){
					//$(".showprelocationf").html('');
					var value_data = $(this).val();
					$("#showprelocationf").empty();
					$("#selecterror").empty();
					$("#showprelocationf").hide();
					$(".cancelsavebtns").css({"margin-top":"5%"});
					if(value_data.length >= 1){
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
								$("#selecterror").text("City name already exists");
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
			 $("#destid").keydown(function(){
					//$(".showprelocationf").html('');
					var value_data = $(this).val();
					$("#showprelocationt").empty();
					$("#selecterror").empty();
					$("#showprelocationt").hide();
					$(".cancelsavebtns").css({"margin-top":"5%"});
					if(value_data.length >= 2){
						var optionValues = [];
						$('#event_to option').each(function(){
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
										$("#Adddestcity").prop("onclick",null).off("onclick");
										return false;
									}else{
									//	//alert("from Exit "+value);
										$(".cancelsavebtns").css({"margin-top":"5%"});
										$("#Adddestcity").attr("onclick","javascript:addNewdestcity()").on("onclick");
										
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
			 
			 var RouteGetRoute = localStorage.getItem("smaasip")+"/SCMXPert/getShipfromandto/"+useridsplit[0];
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
						//alert(data);
						for(i=0;i< data.length;i++)
							{
								//alert(data[i])
								//console.log(data[i]);
								$("#route_from,#route_to,#event_from,#event_to").append('<option value="'+escapeHtml(data[i])+'">'+escapeHtml(data[i])+'</option>');
							}
						
					}
			
		});
				setTimeout(function() {
					getdeviceslisde();
		    	}, 2000);
     
    /* $.each(listDevice,function(key,value){
    	 //alert(value);
     });*/
     
     //$("#bp_name").val($.cookie("DevicesCount"));
	// $("#deviceAvalibletable").DataTable();
    
 });
 function reset()
 {
	 window.location.reload();
 }
 function getdeviceslisde()
 {
	  var addDeviceCountList = $.cookie("DevicesCount")+' Devices';
	     //var listDevice = $.cookie("DevicesList");
	     var first = $(location).attr('pathname');
		    first.indexOf(1);
		    first.toLowerCase();
		  //  first = first.split("/")[2]
            first = first.split("/");
            first = first[first.length-1];
		    if(first == "CreateDeviceTransfer.jsp")
		    	{
		    	var Internalid = $.cookie("Internalid");
		    	if(Internalid == null || Internalid == ''){
	    			$("#numofDev").val(addDeviceCountList);
	        	   	var data = $.cookie("DevicesList");
	    	        var arr = data.split(',');
	    	        $.each(arr, function(i, obj){
	    	       	 $('#listOfDevices').append('<option value="'+arr[i]+'">'+arr[i]+'</option>');
	    	        });
	    			$.ajax({
	    				type:"get",
	    				url:localStorage.getItem("smaasip")+"/SCMXPert/getInternalTransferId",
						headers: {
		   	     	   'Authorization': localStorage.getItem('SavedToken')
		   	     	  	   },
	    				success:function(response){
	    					$("#internalTransferId").val(response);
	    				}
	    			});
	    		}
		    	if(Internalid != '')
		    		{
		    		//alert(Internalid);
		    		$.ajax({
		    			type:"get",
		    			url:localStorage.getItem("smaasip")+"/SCMXPert/getDevices/"+Internalid,
						headers: {
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  },
		    			success:function(response){
		    				//$("#internalTransferId").val(response);
		    				////console.log(response);
		    				$.each(response,function(key,value){
		    					////console.log(value);
		    					$("#numofDev").val(value.numberOfDevices);
		    					//alert(value.fromOrigin);
		    					$("#event_from").val(value.fromOrigin);
		    					$("#event_to").val(value.toDestination);
		    					$('#listOfDevices').append('<option value="'+escapeHtml(value.deviceId)+'">'+escapeHtml(value.deviceId)+'</option>');
		    					$("#trackingNo").val(value.trackingNumber);
		    					$("#courierCompList").val(value.courrierCompany);
		    					$("#transDesc").val(value.transferDescription);
		    					$("#event_partner_from").append('<option value="'+escapeHtml(value.receivingPartner)+'">'+escapeHtml(value.receivingPartner)+'</option>').val(value.receivingPartner);
		    					$("#transferDate").val(value.dateOfTransfer);
		    					$("#expected_date").val(value.expectedDate);
		    					$("#destinationAddress").val(value.destinationAddress);
		    				});
		    			}
		    		});
		    		}
		
		    	}
		   
		    if(first == "ReceiveDevices.jsp")
	    	{
	    	   	//var data = $.cookie("DevicesList");
	    	   	var Internalid = $.cookie("Internalid");
		        /*var arr = data.split(',');
		        $.each(arr, function(i, obj){
		       	 $('#listOfDevices').append('<option value="'+arr[i]+'">'+arr[i]+'</option>');
		        });
		        $("#numofDev").val(addDeviceCountList);*/
	    		if(Internalid != '')
	    		{
	    		//alert(Internalid);
	    			
	    		$.ajax({
	    			type:"get",
	    			url:localStorage.getItem("smaasip")+"/SCMXPert/getDevices/"+Internalid,
					headers: {
		   	     	   'Authorization': localStorage.getItem('SavedToken')
		   	     	  	   },
	    			success:function(response){
	    				//$("#internalTransferId").val(response);
	    				////console.log(response);
	    				$.each(response,function(key,value){
	    					//console.log(value);
	    					$("#numofDev").val(value.numberOfDevices);
	    					//alert(value.fromOrigin);
	    					$("#event_from").val(value.fromOrigin);
	    					$("#event_to").val(value.toDestination);
	    					$('#listOfDevices').append('<option value="'+escapeHtml(value.deviceId)+'">'+escapeHtml(value.deviceId)+'</option>');
	    					$("#trackingNo").val(value.trackingNumber);
	    					$("#courierCompList").val(value.courrierCompany);
	    					$("#transDesc").val(value.transferDescription);
	    					$("#event_partner_from").append('<option value="'+escapeHtml(value.receivingPartner)+'">'+escapeHtml(value.receivingPartner)+'</option>').val(value.receivingPartner);
	    					$("#transferDate").val(value.dateOfTransfer);
	    					$("#expected_date").val(value.expectedDate);
	    					$("#destinationAddress").val(value.destinationAddress);
	    					
	    					//alert(value.toDestination);
	    				});
	    			}
	    		});
	    		}
	    	}

 }
 function getAllDevices()
 {
	 $("#deviceAvalibletable>tbody").empty();
/*	 $.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/getAllDevices",function(response){
		 $.each(response,function(key,value){
			 //console.log(value);
			 $("#location").append('<option value="'+value.location+'">'+value.location+'</option>');
			 var optionValues =[];
			 $('#location option').each(function(){
			     if($.inArray(this.value, optionValues) >-1){
			     //	//alert(this);
			        $(this).remove()
			     }else{
			        optionValues.push(this.value);
			     }
			  });
			 $("#destination").append('<option value="'+value.toDestination+'">'+value.toDestination+'</option>');
			 var optionValues =[];
			 $('#destination option').each(function(){
			     if($.inArray(this.value, optionValues) >-1){
			     //	//alert(this);
			        $(this).remove()
			     }else{
			        optionValues.push(this.value);
			     }
			  });
			 $("#Status").append('<option value="'+value.deviceStatus+'">'+value.deviceStatus+'</option>');
			 var optionValues =[];
			 $('#Status option').each(function(){
			     if($.inArray(this.value, optionValues) >-1){
			     //	//alert(this);
			        $(this).remove()
			     }else{
			        optionValues.push(this.value);
			     }
			  });
			 $("#goodType").append('<option value="'+value.goodsType+'">'+value.goodsType+'</option>');
			 var optionValues =[];
			 $('#goodType option').each(function(){
			     if($.inArray(this.value, optionValues) >-1){
			     //	//alert(this);
			        $(this).remove()
			     }else{
			        optionValues.push(this.value);
			     }
			  });
			 //$("#ShipNumber").append(value.location);
			 $("#transfId").append('<option value="'+value.internalTransferId+'">'+value.internalTransferId+'</option>');
			 var optionValues =[];
			 $('#transfId option').each(function(){
			     if($.inArray(this.value, optionValues) >-1){
			     //	//alert(this);
			        $(this).remove()
			     }else{
			        optionValues.push(this.value);
			     }
			  });
			 if(value.deviceStatus == "Detached" || value.deviceStatus == "InTransit"){
				 var tableVales = '<tr id="checked_'+value.deviceId+'"><td><input type="checkbox" class="checkbox" style="padding:0px;margin:0px;width:14px;" value="'+value.deviceId+'" name="tablecheckbox"/></td><td>'+value.deviceId+'</td><td>'+value.deviceStatus+'</td><td>'+value.location+'</td><td>'+value.customerId+'</td><td>'+value.bpId+'</td><td>'+value.goodsType+'</td><td>'+value.toDestination+'</td><td id="interid_'+value.deviceId+'">'+value.internalTransferId+'</td><td>'+value.trackingNumber+'</td><td>'+value.battery+'</td></tr>';
				 $("#deviceAvalibletable>tbody").append(tableVales);
			 }else{
				 var tableVales = '<tr id="checked_'+value.deviceId+'"><td></td><td>'+value.deviceId+'</td><td>'+value.deviceStatus+'</td><td>'+value.location+'</td><td>'+value.customerId+'</td><td>'+value.bpId+'</td><td>'+value.goodsType+'</td><td>'+value.toDestination+'</td><td id="interid_'+value.deviceId+'">'+value.internalTransferId+'</td><td>'+value.trackingNumber+'</td><td>'+value.battery+'</td></tr>';
				 $("#deviceAvalibletable>tbody").append(tableVales);
			 }
			 
			/* //alert(value.location+', '+value.toDestination+', '+value.deviceStatus+' '+value.goodsType+', '+value.internalTransferId);
			 $.each(value,function(k,val){
				 
			
	
			 });*/
//		 });
//	 });*/
		$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getAllDevices",
    type : "GET",
    dataType: 'json',
	headers: {
		   	     	   'Authorization': localStorage.getItem('SavedToken')
		   	     	  	   },
    success:function(response){
	 $.each(response,function(key,value){
			 //console.log(value);
			 $("#location").append('<option value="'+escapeHtml(value.location)+'">'+escapeHtml(value.location)+'</option>');
			 var optionValues =[];
			 $('#location option').each(function(){
			     if($.inArray(this.value, optionValues) >-1){
			     //	//alert(this);
			        $(this).remove()
			     }else{
			        optionValues.push(this.value);
			     }
			  });
			 $("#destination").append('<option value="'+escapeHtml(value.toDestination)+'">'+escapeHtml(value.toDestination)+'</option>');
			 var optionValues =[];
			 $('#destination option').each(function(){
			     if($.inArray(this.value, optionValues) >-1){
			     //	//alert(this);
			        $(this).remove()
			     }else{
			        optionValues.push(this.value);
			     }
			  });
			 $("#Status").append('<option value="'+escapeHtml(value.deviceStatus)+'">'+escapeHtml(value.deviceStatus)+'</option>');
			 var optionValues =[];
			 $('#Status option').each(function(){
			     if($.inArray(this.value, optionValues) >-1){
			     //	//alert(this);
			        $(this).remove()
			     }else{
			        optionValues.push(this.value);
			     }
			  });
			 $("#goodType").append('<option value="'+escapeHtml(value.goodsType)+'">'+escapeHtml(value.goodsType)+'</option>');
			 var optionValues =[];
			 $('#goodType option').each(function(){
			     if($.inArray(this.value, optionValues) >-1){
			     //	//alert(this);
			        $(this).remove()
			     }else{
			        optionValues.push(this.value);
			     }
			  });
			 //$("#ShipNumber").append(value.location);
			 $("#transfId").append('<option value="'+escapeHtml(value.internalTransferId)+'">'+escapeHtml(value.internalTransferId)+'</option>');
			 var optionValues =[];
			 $('#transfId option').each(function(){
			     if($.inArray(this.value, optionValues) >-1){
			     //	//alert(this);
			        $(this).remove()
			     }else{
			        optionValues.push(this.value);
			     }
			  });
			 if(value.deviceStatus == "Detached" || value.deviceStatus == "InTransit"){
				 var tableVales = '<tr id="checked_'+escapeHtml(value.deviceId)+'"><td><input type="checkbox" class="checkbox" style="padding:0px;margin:0px;width:14px;" value="'+escapeHtml(value.deviceId)+'" name="tablecheckbox"/></td><td>'+escapeHtml(value.deviceId)+'</td><td>'+escapeHtml(value.deviceStatus)+'</td><td>'+escapeHtml(value.location)+'</td><td>'+escapeHtml(value.customerId)+'</td><td>'+escapeHtml(value.bpId)+'</td><td>'+escapeHtml(value.goodsType)+'</td><td>'+escapeHtml(value.toDestination)+'</td><td id="interid_'+escapeHtml(value.deviceId)+'">'+escapeHtml(value.internalTransferId)+'</td><td>'+escapeHtml(value.trackingNumber)+'</td><td>'+escapeHtml(value.battery)+'</td></tr>';
				 $("#deviceAvalibletable>tbody").append(tableVales);
			 }else{
				 var tableVales = '<tr id="checked_'+escapeHtml(value.deviceId)+'"><td></td><td>'+escapeHtml(value.deviceId)+'</td><td>'+escapeHtml(value.deviceStatus)+'</td><td>'+escapeHtml(value.location)+'</td><td>'+escapeHtml(value.customerId)+'</td><td>'+escapeHtml(value.bpId)+'</td><td>'+escapeHtml(value.goodsType)+'</td><td>'+escapeHtml(value.toDestination)+'</td><td id="interid_'+escapeHtml(value.deviceId)+'">'+escapeHtml(value.internalTransferId)+'</td><td>'+escapeHtml(value.trackingNumber)+'</td><td>'+escapeHtml(value.battery)+'</td></tr>';
				 $("#deviceAvalibletable>tbody").append(tableVales);
			 }
			 
			/* //alert(value.location+', '+value.toDestination+', '+value.deviceStatus+' '+value.goodsType+', '+value.internalTransferId);
			 $.each(value,function(k,val){
				 
			
	
			 });*/
		 });
	 }
});
}
 function InUsegetAllDevices()
 {
	/* $.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/getINUseDevices",function(response){
		 var routeslist = [];
		 var routeslistD = [];
		 var geolocation = [];
		 $.each(response,function(keys,values){
			 var geoloc = values.location;
			 geolocation.push(geoloc);
				if($.inArray(values.location, routeslist) != -1)
					{$(this).remove();}else{
						routeslist.push(values.location);
					}
				if($.inArray(values.toDestination, routeslist) != -1)
				{$(this).remove();}else{
					routeslistD.push(values.toDestination);
				}
		});
		 //console.log(geolocation);
		 //getlocations(geolocation);
		 $.each(routeslist,function(key,value){
				var select_device_Id_items = '<option value="'+value+'">'+value+'</option>';
				$("#route_name_from_InUse").append(select_device_Id_items)
			});
		 var optionValues =[];
			$('#route_name_from_InUse option').each(function(){
			    if($.inArray(this.value, optionValues) >-1){
			       $(this).remove()
			    }else{
			       optionValues.push(this.value);
			    }
			 });
		 $.each(routeslistD,function(key,value){
				var select_device_Id_items = '<option value="'+value+'">'+value+'</option>';
				$("#route_name_to_InUse").append(select_device_Id_items)
			});
		 var optionValues =[];
			$('#route_name_to_InUse option').each(function(){
			    if($.inArray(this.value, optionValues) >-1){
			       $(this).remove()
			    }else{
			       optionValues.push(this.value);
			    }
			 });
		 $.each(response,function(key,value){
			 //$("#route_name_from").append('<option value="'+value.location+'">'+value.location+'</option>');
			// $("#route_name_to").append('<option value="'+value.toDestination+'">'+value.toDestination+'</option>');
			 $("#Status").append('<option value="'+value.deviceStatus+'">'+value.deviceStatus+'</option>');
			 $("#goodType").append('<option value="'+value.goodsType+'">'+value.goodsType+'</option>');
			 $("#deviceId").append('<option value="'+value.deviceId+'">'+value.deviceId+'</option>');
			 //$("#ShipNumber").append(value.location);
			 $("#transfId").append('<option value="'+value.internalTransferId+'">'+value.internalTransferId+'</option>');
			 var theDate = new Date( Date.parse(value.time));
          	var date_create = theDate.toLocaleString();
			 var tableVales = '<tr id="checked_'+value.deviceId+'"><td>'+value.deviceId+'</td><td>'+value.customerId+'</td><td>'+value.bpId+'</td><td>'+value.shipmentNumber+'</td><td>'+value.fromOrigin+'</td><td>'+value.toDestination+'</td><td>'+value.goodsType+'</td><td>'+date_create+'</td><td>'+value.deviceStatus+'</td><td>'+value.location+'</td><td>'+value.battery+'</td></tr>';
			 $("#deviceInUsetable>tbody").append(tableVales);
			/* //alert(value.location+', '+value.toDestination+', '+value.deviceStatus+' '+value.goodsType+', '+value.internalTransferId);
			 $.each(value,function(k,val){
				 
			
	
			 });*/
//		 });
//		 var optionValues =[];
//			$('#Status option').each(function(){
//			    if($.inArray(this.value, optionValues) >-1){
//			       $(this).remove()
//			    }else{
//			       optionValues.push(this.value);
//			    }
//			 });
//			 var optionValues =[];
//				$('#goodType option').each(function(){
//				    if($.inArray(this.value, optionValues) >-1){
//				       $(this).remove()
//				    }else{
//				       optionValues.push(this.value);
//				    }
//				 });
//				 var optionValues =[];
//					$('#deviceId option').each(function(){
//					    if($.inArray(this.value, optionValues) >-1){
//					       $(this).remove()
//					    }else{
//					       optionValues.push(this.value);
//					    }
//					 });
//					 var optionValues =[];
//						$('#transfId option').each(function(){
//						    if($.inArray(this.value, optionValues) >-1){
//						       $(this).remove()
//						    }else{
//						       optionValues.push(this.value);
//						    }
//						 });

//	 });*/
		$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getINUseDevices",
    type : "GET",
    dataType: 'json',
	headers: {
		   	     	   'Authorization': localStorage.getItem('SavedToken')
		   	     	  	   },
    success:function(response){
 	 var routeslist = [];
		 var routeslistD = [];
		 var geolocation = [];
		 $.each(response,function(keys,values){
			 var geoloc = values.location;
			 geolocation.push(geoloc);
				if($.inArray(values.location, routeslist) != -1)
					{$(this).remove();}else{
						routeslist.push(values.location);
					}
				if($.inArray(values.toDestination, routeslist) != -1)
				{$(this).remove();}else{
					routeslistD.push(values.toDestination);
				}
		});
		 //console.log(geolocation);
		 //getlocations(geolocation);
		 $.each(routeslist,function(key,value){
				var select_device_Id_items = '<option value="'+escapeHtml(value)+'">'+escapeHtml(value)+'</option>';
				$("#route_name_from_InUse").append(select_device_Id_items)
			});
		 var optionValues =[];
			$('#route_name_from_InUse option').each(function(){
			    if($.inArray(this.value, optionValues) >-1){
			       $(this).remove()
			    }else{
			       optionValues.push(this.value);
			    }
			 });
		 $.each(routeslistD,function(key,value){
				var select_device_Id_items = '<option value="'+escapeHtml(value)+'">'+escapeHtml(value)+'</option>';
				$("#route_name_to_InUse").append(select_device_Id_items)
			});
		 var optionValues =[];
			$('#route_name_to_InUse option').each(function(){
			    if($.inArray(this.value, optionValues) >-1){
			       $(this).remove()
			    }else{
			       optionValues.push(this.value);
			    }
			 });
		 $.each(response,function(key,value){
			 //$("#route_name_from").append('<option value="'+value.location+'">'+value.location+'</option>');
			// $("#route_name_to").append('<option value="'+value.toDestination+'">'+value.toDestination+'</option>');
			 $("#Status").append('<option value="'+escapeHtml(value.deviceStatus)+'">'+escapeHtml(value.deviceStatus)+'</option>');
			 $("#goodType").append('<option value="'+escapeHtml(value.goodsType)+'">'+escapeHtml(value.goodsType)+'</option>');
			 $("#deviceId").append('<option value="'+escapeHtml(value.deviceId)+'">'+escapeHtml(value.deviceId)+'</option>');
			 //$("#ShipNumber").append(value.location);
			 $("#transfId").append('<option value="'+escapeHtml(value.internalTransferId)+'">'+escapeHtml(value.internalTransferId)+'</option>');
			 var theDate = new Date( Date.parse(value.time));
          	var date_create = theDate.toLocaleString();
			 var tableVales = '<tr id="checked_'+escapeHtml(value.deviceId)+'"><td>'+escapeHtml(value.deviceId)+'</td><td>'+escapeHtml(value.customerId)+'</td><td>'+escapeHtml(value.bpId)+'</td><td>'+escapeHtml(value.shipmentNumber)+'</td><td>'+escapeHtml(value.fromOrigin)+'</td><td>'+escapeHtml(value.toDestination)+'</td><td>'+escapeHtml(value.goodsType)+'</td><td>'+escapeHtml(date_create)+'</td><td>'+escapeHtml(value.deviceStatus)+'</td><td>'+escapeHtml(value.location)+'</td><td>'+escapeHtml(value.battery)+'</td></tr>';
			 $("#deviceInUsetable>tbody").append(tableVales);
			/* //alert(value.location+', '+value.toDestination+', '+value.deviceStatus+' '+value.goodsType+', '+value.internalTransferId);
			 $.each(value,function(k,val){
				 
			
	
			 });*/
		 });
		 var optionValues =[];
			$('#Status option').each(function(){
			    if($.inArray(this.value, optionValues) >-1){
			       $(this).remove()
			    }else{
			       optionValues.push(this.value);
			    }
			 });
			 var optionValues =[];
				$('#goodType option').each(function(){
				    if($.inArray(this.value, optionValues) >-1){
				       $(this).remove()
				    }else{
				       optionValues.push(this.value);
				    }
				 });
				 var optionValues =[];
					$('#deviceId option').each(function(){
					    if($.inArray(this.value, optionValues) >-1){
					       $(this).remove()
					    }else{
					       optionValues.push(this.value);
					    }
					 });
					 var optionValues =[];
						$('#transfId option').each(function(){
						    if($.inArray(this.value, optionValues) >-1){
						       $(this).remove()
						    }else{
						       optionValues.push(this.value);
						    }
						 });

	 }
		});
	 
 }
 
 
 function createDevice()
 {
	 
	 /*var values = new Array();

	 $.each($("input[name='tablecheckbox']:checked"),
	        function () {
		 		var checkedvalues = $("#checked_"+$(this).val()).html();
		 		$("#").append(checkedvalues);
		 		
//	             values.push($(this).text());
	        });

	    ////alert("val---" + values.join(", "));
	 var tablehtml = '<table id="avalibletabledata" style="d"><thead><tr><th></th><th>Device ID</th><th>Status</th><th>Device Location</th><th>Customer</th><th>Business Partner</th><th>Goods Type</th><th>Destination</th><th>Internal Transfer ID</th><th>Tracking Number</th><th>Battery %</th></tr></thead><tbody id="availabeltabledata"></tbody></table>'
	 //console.log(values.join(", "));
	 return false;*/
	 var DevicesCount = $('#tabledata td input[name="tablecheckbox"]').filter(':checked').length;
	 var DevicesList = [];
	 var intenalid = [];
     $.each($("input[name='tablecheckbox']:checked"), function(){            
    	 DevicesList.push($(this).val());
    	 var internalid = $("#interid_"+$(this).val()).text();
    	 intenalid.push(internalid);
    	 
     });
   var error = document.getElementById("error");
    var unique = intenalid.filter(function(itm, i, intenalid) {
        return i == intenalid.indexOf(itm);
    });
    if(intenalid.length == 0){
    	alert("atleast");
    	return false;
    }
    if(unique.length > 1)
    	{

    		error.innerHTML = "Your Selected Different Internal Ids Select Same Internal Id";
    		return false;
    	}else{
    		error.innerHTML = "";
    		 $.cookie("Internalid",unique);
    	     $.cookie("DevicesList",DevicesList);
    	     $.cookie("DevicesCount",DevicesCount);
    		 window.location.href = "CreateDeviceTransfer.jsp";	
    	}
     
 }
 function deviceRecipt()
 {
	 
	 /*var values = new Array();

	 $.each($("input[name='tablecheckbox']:checked"),
	        function () {
		 		var checkedvalues = $("#checked_"+$(this).val()).html();
		 		$("#").append(checkedvalues);
		 		
//	             values.push($(this).text());
	        });

	    ////alert("val---" + values.join(", "));
	 var tablehtml = '<table id="avalibletabledata" style="d"><thead><tr><th></th><th>Device ID</th><th>Status</th><th>Device Location</th><th>Customer</th><th>Business Partner</th><th>Goods Type</th><th>Destination</th><th>Internal Transfer ID</th><th>Tracking Number</th><th>Battery %</th></tr></thead><tbody id="availabeltabledata"></tbody></table>'
	 //console.log(values.join(", "));
	 return false;*/
	 var DevicesCount = $('#tabledata td input[name="tablecheckbox"]').filter(':checked').length;
	 var DevicesList = [];
	 var intenalid = [];
     $.each($("input[name='tablecheckbox']:checked"), function(){            
    	 DevicesList.push($(this).val());
    	 var internalid = $("#interid_"+$(this).val()).text();
    	 intenalid.push(internalid);
    	 
     });
   var error = document.getElementById("error");
    var unique = intenalid.filter(function(itm, i, intenalid) {
        return i == intenalid.indexOf(itm);
    });
    if(intenalid.length == 0){
    	alert("atleast Select One");
    	return false;
    }
    if(unique.length > 1)
    	{

    		error.innerHTML = "Your Selected Different Internal Ids Select Same Internal Id";
    		return false;
    	}else{
    		error.innerHTML = "";
    		 $.cookie("Internalid",unique);
    	     $.cookie("DevicesList",DevicesList);
    	     $.cookie("DevicesCount",DevicesCount);
    		 window.location.href = "ReceiveDevices.jsp";	
    	}
     
 }
 function filtertabledata(value)
 {
	 $("#tabledata tr").filter(function(){
		 var valala = $(this).toggle($(this).text().indexOf(value) > 1)
	 });
	 
	 
 }
 function createDevices()
 {
	 //alert("hello");
		var token = $.session.get('Token');
		//var table = $('#inboxesvalues').tableToJSON();
	 	var internalTransferId = $("#internalTransferId").val();
		var Cust_Id = $("#Cust_Id").val();
		var bp_name = $("#bp_name").val();
		var numofDevices = $("#numofDev").val();
		var event_from = $("#event_from").val();
		var event_to = $("#event_to").val();
		var trackingNo = $("#trackingNo").val();
		var courierCompList = $("#courierCompList").val();
		var transDesc = $("#transDesc").val();
		var event_partner_from = $("#event_partner_from").val();
		var transferDate = $("#transferDate").val();
		var expected_date = $("#expected_date").val();
		var destinationAddress = $("#destinationAddress").val();
	     var data = $.cookie("DevicesList");
	     var arr = data.split(',');
	     //console.log(arr);
	     $.each(arr, function(i, obj){
	    		var json_value = [{  "customerId":Cust_Id,
						"businessId":bp_name,
						"internalTransferId":internalTransferId,
						"trackingNumber":trackingNo,
						"courrierCompany":courierCompList,
						"transferDescription":transDesc,
						"fromOrigin":event_from,
						"toDestination":event_to,
						"receivingPartner":event_partner_from,
						"destinationAddress":destinationAddress,
						"dateOfTransfer":transferDate,
						"expectedDate":expected_date,
						"numberOfDevices":numofDevices,
						"deviceId":arr[i]
						
					}];
/*	alert(JSON.stringify(json_value));
	//console.log(JSON.stringify(json_value));*/
    var url = localStorage.getItem("smaasip")+"/SCMXPert/createDeviceTransfer";
	$.ajax({
       	 type:"post",
		 url:url,
		 headers: {
			 'Authorization': localStorage.getItem('SavedToken'),	 
			 Accept : "application/json",
		 
					'Content-Type': "application/json" 
			 		}, 
			 		beforeSend: function() {
			             // $("#loading-image").show();
			             var loading = '<img src="./images/loading.gif" id="loadingimg"/>';
			             $(".body_blur").show().html(loading).css({"background":"#000000c2"});
			             $("#loadingimg").show();
			           },
		 data: JSON.stringify(json_value),
	    success: function(data) {
	   	 var correct = '<img src="./images/correct.gif" id="tickimg" style="width:65px;"/>';
	    	//$(".showviewdata").show().html('<div class="alert alert-success" role="alert">Shipment Successful Completed Move To Dashboard <a href="./Dashboard.jsp">Dashboard</a></div>');
	    	$(".body_blur").html('<div class="alert alert-success" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;"><div class="close" onclick="javascript:return evenclose();">X</div>'+correct+'Device Transfer Successfuliy Completed Moving To Available Devices <a href="./Available.jsp">Available Devices</a>.</div>').css({"background":"#000000c2"});
//$.cookie("Completeinternalshipment",shipment_number);
	    	
	    	setTimeout(function() {
	    		window.location.href = "Available.jsp";
	    	}, 3000);
	    },
	});	 

	     });
		
 }
 function clickCancel()
 {
 	window.location.href = "Available.jsp";
 }
 function createReceiveDevices()
 {
		//var table = $('#inboxesvalues').tableToJSON();
	 	var internalTransferId = $("#internalTransferId").val();
		var Cust_Id = $("#Cust_Id").val();
		var bp_name = $("#bp_name").val();
		var numofDevices = $("#numofDev").val();
		var event_from = $("#event_from").val();
		var event_to = $("#event_to").val();
		var trackingNo = $("#trackingNo").val();
		var courierCompList = $("#courierCompList").val();
		var transDesc = $("#transDesc").val();
		var event_partner_from = $("#event_partner_from").val();
		var transferDate = $("#transferDate").val();
		var expected_date = $("#expected_date").val();
		var destinationAddress = $("#destinationAddress").val();
		var personReceiving = $("#personReceiving").val();
	     var data = $.cookie("DevicesList");
	     var arr = data.split(',');
	     $.each(arr, function(i, obj){
	    		var json_value = [{  
						"internalTransferId":internalTransferId,
						"trackingNumber":trackingNo,
						"courrierCompany":courierCompList,
						"transferDescription":transDesc,
						"fromOrigin":event_from,
						"toDestination":event_to,
						"receivingPartner":event_partner_from,
						"destinationAddress":destinationAddress,
						"dateOfTransfer":transferDate,
						"expectedDate":expected_date,
						"numberOfDevices":numofDevices,
						"deviceId":arr[i],
						"personReceiving":personReceiving
						
					}];
/*	//alert(JSON.stringify(json_value));
	//console.log(JSON.stringify(json_value));*/
    var url = localStorage.getItem("smaasip")+"/SCMXPert/receiceDeviceTransfer";
	$.ajax({
       	 type:"post",
		 url:url,
		 headers: { Accept : "application/json",
					'Content-Type': "application/json" ,
					'Authorization': localStorage.getItem('SavedToken')
			 		}, 
			 		beforeSend: function() {
			             // $("#loading-image").show();
			             var loading = '<img src="./images/loading.gif" id="loadingimg"/>';
			             $(".body_blur").show().html(loading).css({"background":"#000000c2"});
			             $("#loadingimg").show();
			           },
		 data: JSON.stringify(json_value),
	    success: function(data) {
	    	//alert(data);
	    	 var correct = '<img src="./images/correct.gif" id="tickimg" style="width:65px;"/>';
		    	//$(".showviewdata").show().html('<div class="alert alert-success" role="alert">Shipment Successful Completed Move To Dashboard <a href="./Dashboard.jsp">Dashboard</a></div>');
		    	$(".body_blur").html('<div class="alert alert-success" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;"><div class="close" onclick="javascript:return evenclose();">X</div>'+correct+'Device Receive  Successfuliy Completed Moving To Available Devices <a href="./Available.jsp">Available Devices</a>.</div>').css({"background":"#000000c2"});
	//$.cookie("Completeinternalshipment",shipment_number);
		    	setTimeout(function() {
		    		window.location.href = "Available.jsp";
		    	}, 3000);
		    	//window.location.href = "Available.jsp";
	    	//window.location.href = "Dashboard.jsp";
	    },
	});	 

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