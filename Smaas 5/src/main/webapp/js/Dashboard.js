 $(function() {
	 var UserId = $.session.get('UserId');
	 var lksdaf = getTimeZone();
	 //alert(lksdaf);
 	if(UserId == undefined)
		{
 			window.location.href = "index.jsp";
		}
 	
 	$(".body_blur,#backgroundBlur").on('click',function(){
 		$(".listoffilters").hide();
 	});

	$("#draftTableaa>tbody>tr").css({"height":"22px"});
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
	$("#home_info").on("click",function(){
		$("#data_menu2,#map_menu1,#data_menu_docs").hide();
		$("#home").show();
	});
	$("#data_info").on("click",function(){
		$("#home,#map_menu1,#data_menu_docs").hide();
		$("#data_menu2").show();
	});
	$("#mapShowInfoTab").on("click",function(){
		$("#data_menu2,#home,#data_menu_docs").hide();
		$("#map_menu1").show();
	});	
	$("#data_info_docs").on("click",function(){
		$("#data_menu2,#home,#map_menu1").hide();
		$("#data_menu_docs").show();
	});	
	$("#createshipment_link").on("click", function () {
       	   window.location.href = "CreateShipment.jsp";
    });
	$("#massLoad_link").on("click", function () {
       	  window.location.href = "MassLoad.jsp";
    });
	 $(".delivered").on("click", function() {
//The below code and setTimeout are added when we made the delivered dashboard empty.	
		  	$(".info").hide();
 	 		$(".dashboard_page").hide();
 	    	$(".delivered_shipments").empty();
 	    	$('#draftTable>tbody').empty();
 	    	$("#bottom_map").show();
 	    	$("#loadingimg").show();
		 
		  setTimeout(() => {	 
		   // Hide the loading indicator using jQuery
            $("#loadingimg").hide();
            $(".dashboard_page").show();
                    			 
		 // exitShipmentDetails();
		 $(this).addClass("btn-color").removeClass("delivered:hover font-color");
		 $('.live').addClass("live:hover font-color").removeClass("btn-color");
		 $(".delivered_shipments").show();
		 $(".live_shipments").hide();
		 $(".delivered ").addClass('btn-primary');
//		 Deliveryshipments_list(scmval, bpval);	//Only this single line is commented to make the list empty/blank dashboard in Delivered section.                  
                       }, 2000);	 
	 });

	 $(".live").on("click", function() {
		 //exitShipmentDetails();
		 $(this).addClass("btn-color").removeClass("live:hover font-color");
		 $('.delivered').addClass("delivered:hover font-color").removeClass("btn-color");
		 $(".live_shipments").show();
		 $(".delivered_shipments").hide();     	    	        
//		 liveshipments_list(scmval, bpval);
		 window.location.href = "Dashboard.jsp";
	 });
	 $(".hide_show_icon").on("click", function() {
		 $(".live_shipments").css("height", "520px");
		 $(".show_remaing").hide();
		 $(".show_hide_icon,.show_hide_filter").show();
		 $(this).hide();
		 screenResize();
	 });
	 $(".show_hide_icon").on("click", function() {
		 $(".live_shipments").css("height", "600px");
		 $(".show_hide_filter").hide();
		 $(".hide_show_icon,.show_remaing").show();
		 $(this).hide();
		 screenResize();
	 });
	 $("#backgroundBlur,.close,#CancelBtn").on("click", function() {
		 $("#backgroundBlur,.showtablelist").hide();
		 $(".showviewdata").hide();
		 $("body").css("overflow-y", "auto");
	 });
	  
	var RolePermission = $.session.get('RolePermission');
	 changebpid(useridsplit[0],useridsplit[1]);
/*	if(Role == "SUPERADMIN"){
		 changebpid(useridsplit[0],useridsplit[1]);
		var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsListAll";
//		var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentCount";
	}else if(Role == "ADMIN")
		{
			changebpid(useridsplit[0],useridsplit[1]);

		var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsList/"+useridsplit[0];
		}else if(Role == "FINANCE")
		{
			var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsList/"+useridsplit[0];
			changebpid(useridsplit[0],useridsplit[1]);
			}else{
				var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsList/"+useridsplit[0];
				//var url = localStorage.getItem("smaasip")+'/SCMXPert/getShipments/'+Cust_Id+'/'+UserId;
				//var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsListAll";
	///			var str = RolePermission.split(",");
				changebpid(useridsplit[0],useridsplit[1]); 
			}*/
	$('#datepicker').Zebra_DatePicker({
	    format: 'd-M-Y'
	});
//window.setInterval(function(){getCountShipmentsValues();}, 1000 * 60 * 60);
	$("#scmid").val(Cust_Id);
	$("#bpi_idchange").val(UserId);
        	 $('#bottom_map').scroll(function(){
        		 if ($(this).scrollTop() >= 10) {
        			 
        		 }
        		});
        	 var bpval = $("#bpi_idchange").val();
        	 var scmval = $("#scmid").val();
        	 var token = $.session.get('Token');
        	// //alert(url);
        	 $.ajax({
        		url: url,
        	 // url:localStorage.getItem("smaasip")+"/SCMXPert/getShipmentCount",
             	"method": "GET",
             	dataType: "json",
             	headers: {
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  },
             	success:function(filter){
             		if(filter != ''){
             			 var deliverd = [];
            			 var live = [];
/*             			 var deliverd = 0;
             			  var live = 0;*/
/*             			 deliverd = filter.deliveredCount;
                		 live = filter.notDeliveredCount;*/
 // Change the above url from getShipmentsListAll to getShipmentCount and uncomment the above code of declaring counts to zero and comment the below for each loop     		
                		 $.each(filter,function(key,value){
                			 
                			 if(value.delivered_Status == "Delivered"){
                				 deliverd.push(value.route_From);
                			 }
                			 if(value.delivered_Status != "Delivered"){
                				 live.push(value.route_From);
                			 }
                		 });
               		 
                		 $(".delivery_show_list_items").text(deliverd.length);
                		 $(".live_show_list_items").text(live.length);
             		}else{
             			$(".delivery_show_list_items").text(0);
               		 $(".live_show_list_items").text(0);
             		}
        		
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
        	 $(".dashboard_page").hide();
        		var useridsplit = UserId.split('-');
				useridsplit[0].toString();
				useridsplit[0] + "";
				useridsplit[1].toString();
				useridsplit[1] + "";
           	 var bpval = useridsplit[1];
    		 var scmval = useridsplit[0];
		     $( "#datepicker-13" ).datepicker({ dateFormat: 'm-d-yy'});
/*             $(".delivered").on("click",function(){
            	// exitShipmentDetails();
             	$(this).addClass("btn-color").removeClass("delivered:hover font-color");
             	$('.live').addClass("live:hover font-color").removeClass("btn-color");
             	$(".delivered_shipments").show();
             	$(".live_shipments").hide();
                Deliveryshipments_list(scmval,bpval);
             });*/

             
/*             $(".live").on("click",function(){
            	//exitShipmentDetails();
             	$(this).addClass("btn-color").removeClass("live:hover font-color");
             	$('.delivered').addClass("delivered:hover font-color").removeClass("btn-color");
             	$(".live_shipments").show();
             	$(".delivered_shipments").hide();

            	liveshipments_list(scmval,bpval);
             });*/
/*             $(".hide_show_icon").on("click",function(){
             	$(".live_shipments").css("height","520px");
             	$(".show_remaing").hide();
             	$(".show_hide_icon,.show_hide_filter").show();
             	$(this).hide();            	
             	screenResize();
             });*/
/*             $(".show_hide_icon").on("click",function(){
             	$(".live_shipments").css("height","600px");
             	$(".show_hide_filter").hide();
             	$(".hide_show_icon,.show_remaing").show();
             	$(this).hide();
             	screenResize();
             });*/
/*             $("#backgroundBlur,.close,#CancelBtn").on("click",function(){
             	$("#backgroundBlur,.showtablelist").hide();
             	$(".showviewdata").hide();
             	$("body").css("overflow-y","auto");
             });*/
/*       		$("#createshipment_link").on("click", function () {
       	        window.location.href = "CreateShipment.jsp";
        	    });*/
/*            $("#massLoad_link").on("click", function () {
       	        window.location.href = "MassLoad.jsp";
        	    }); */         	    
        	 $("#reset").on("click",function(){

        		 $("#devices").val('');
      //  		 $("#from").val('');	// from is changed and updated to fromPlant(i.e., the plant location)
        	     $("#plantName").val('');
        		 $("#to").val('');
        		 $("#selectgoods").val('');
         		 $("#datepicker").val('');
         		 $("#delivery").val('');
         		 $("#reference").val('');
        		 //$("#departments").val('');
        		 $("#eventName").val('');
//        		 liveshipments_list(scmval,bpval);
        	});


         });  
 function exitShipmentDetails(){

		$(".CreateShipment ").css({"padding":"0.1rem 0.9rem"});
		$(".delivered ").css({"font-size":"0.9rem"});
		$(".Zebra_DatePicker_Icon_Wrapper").css({"width":"90.6094px"});
///		$(".delivery_text").text("Delivery Number");   /// showing delivery no. instead of invoice
		$(".current_status_ship").css({"font-size":"0.7rem"});
		$(".sn-t1").css({"width":"80px"});
		$(".hide_show_icon").trigger("click")
		$(".live_shipments").css({"height":"520px"});
		$(".live_shipments > .Message_View > .live_shipments_list> .col-md-5 > h6").css({"font-size":"0.7rem"});
		$(".leftSideContent").addClass("col-md-5").removeClass("col-md-4").css({"transition-property":" all","transition-duration":"0.5s"});
		$(".rightSideContent").removeClass("col-md-8").addClass("col-md-7");
		$(".info").fadeOut("slow");
	/*	var shipMentIDSLIST = $.cookie("shipMentIDSLIST");
		var arr = JSON.parse(shipMentIDSLIST);*/
		
		$(".showmap,#bottom_map,.download").show();
		var token = $.session.get('Token');
		var ShipmentsList = $.cookie("ShipmentsList");
		var arrShipmentsList = JSON.parse(ShipmentsList);
		mapOnLoad(arrShipmentsList,"Live")
		/*for(var i=0;i<postionList.length;i++)
			{
				if(postionList[i] != '')
					{
						alert()
					}
			}*/
		
			//alert(arr[i]);
			////console.log(arr[i]);
			//var url = localStorage.getItem("smaasip")+"/SCMXPert/getWayInfo/"+arr[i];						
	/*		var returndata = $.ajax({
				url:url,
				type : "GET",
				dataType : "json",
				headers : {
					'Authorization': 'Bearer '+token
				},
				success : function(filter) {
					var posi = [];
					$.each(filter[filter.length-1],function(key,value){
						if(key == "wayPoints"){
							//alert(value);
							$(".showmap").empty();
							posi.push(value);
							//var points = ["40.053917","-75.79879"]
							////console.log(points);
							
						}
						////console.log(value);
					});
					//alert(positions.push(posi));
					//console.log("hello");
					//console.log(posi);
					positions.push(posi)
					
				}
				
			});*/
			
			
			/*//console.log(positions.push(posi));
			//console.log(positions);*/
			////console.log(returndata);
			//}
		/*//console.log("hell");
		//console.log(positions);*/
			
			/*var url = localStorage.getItem("smaasip")+"/SCMXPert/getWayInfo/"+value;
				$.getJSON(url,function(filter){
					//console.log(filter);
				});
				
				
				$.ajax({
					url:url,
					type : "GET",
					dataType : "json",
					headers : {
						'Authorization': 'Bearer '+token,
					},
					success : function(filter) {
						alert(filter);
					}
					
				});*/
		
	
		
		
 }
function getCountShipmentsValues()
{
	 var bpval = $("#bpi_idchange").val();
	 var scmval = $("#scmid").val();
	 var token = $.session.get('Token');
	 var Role = $.session.get('Role');
		var UserId = $.session.get('UserId');
		var useridsplit = UserId.split('-');
		useridsplit[0].toString();
		useridsplit[0] + "";
		useridsplit[1].toString();
		useridsplit[1] + "";
   	 var bpval = useridsplit[1];
	 var scmval = useridsplit[0];
		if(Role == "SUPERADMIN"){
			
			var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsListAll";
		}else if(Role == "ADMIN")
			{
			//localStorage.getItem("smaasip")+'/SCMXPert/getShipments/'+scmval+'/'+bpval
			var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsList/"+useridsplit[0]
				//$("#customer").hide();
			}else if(Role == "FINANCE")
			{
				//localStorage.getItem("smaasip")/SCMXPert/getShipments/'+scmval+'/'+bpval
				var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsList/"+useridsplit[0]
					//$("#customer").hide();
				}else{
					var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsList/"+useridsplit[0];
				}
	 $.ajax({
		url: url,
     	"method": "GET",
     	dataType: "json",
     	headers: {
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  },
     	success:function(filter){
     		if(filter !=''){
     			 var deliverd = [];
     			 var live = [];
     			 $.each(filter,function(key,value){
     				 
     				 if(value.delivered_Status == "Delivered"){
     					 deliverd.push(value.route_From);
     				 }
     				 if(value.delivered_Status != "Delivered"){
     					 live.push(value.route_From);
     				 }
     			 });
     			 $(".delivery_show_list_items").text(deliverd.length);
     			 $(".live_show_list_items").text(live.length);
     		}else{
     			$(".delivery_show_list_items").text(0);
    			 $(".live_show_list_items").text(0);
     		}
	
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
function seachfilter()
      {

/*	   	var from = $("#from").val().trim();
      	var to = $("#to").val().trim();
      	var goods = $("#selectgoods").val();
      	var date = $("#datepicker").val();
      	var delivery = $("#delivery").val();
      	var refer = $("#reference").val();
      	var device = $("#devices").val();
      	var bpval = $("#bpi_idchange").val();
 			 var scmval = $("#scmid").val();*/
    	  //$(".live_shipments").empty();
    	  	$('.live_shipments_list').hide();
     	//	var sdkjfn = $("#from").val();    // The field "From" is changed as fromPlant. 
     		var fromPlant = $("#plantName").val();
	  		var sdkjfn1 = $("#to").val();
	  		var sdkjfn2 = $("#selectgoods").val();
	  		var Dateee = $("#datepicker").val();
	  		//var sdkjfn4 = $("#delivery").val();
	  		var sdkjfn4 = $("#invoice").val();
	  		var sdkjfn6 = $("#devices").val();
	  		//var sdkjfn5 = $("#reference").val();
	  		var sdkjfn5 = $("#deliveryNo").val();
	  		var sdkjfn7 = $("#eventName").val();
	  		

	  		if(Dateee != ''){
	  			sdkjfn3 = new Date(Dateee).toISOString();
	  			}else{
	  			sdkjfn3 = '';
	  			}
	  		var UserId = $.session.get('UserId');
	  		var useridsplit = UserId.split('-');
	  		useridsplit[0].toString();
	  		useridsplit[0] + "";
	  		useridsplit[1].toString();
	  		useridsplit[1] + "";
	  		/*var jsodkn = {
	  				"from":sdkjfn,
	  				"to":sdkjfn1,
	  				"goods":sdkjfn2,
	  				"created_Date":sdkjfn3,
	  				"Shipment_Num":sdkjfn4,
	  				"Device_Id":sdkjfn6,
	  				"reference":sdkjfn5
	  				
	  		};*/
	  		var Role = $.session.get('Role');
	  		if(Role == "SUPERADMIN"){
	  			
	  			var jsodkn = {
		  		//		"from":sdkjfn,
		  				"to":sdkjfn1,
		  				"goods":sdkjfn2,
		  				"created_Date":sdkjfn3,
		  				//"Shipment_Num":sdkjfn4,
		  				"Invoice_Number":sdkjfn4,
		  				"Device_Id":sdkjfn6,
		  				//"reference":sdkjfn5
		  				"Shipment_Num":sdkjfn5,
		  				"Shipment_Status":sdkjfn7,
		  				"plant":fromPlant
		  				
		  		};
				//var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsListAll";
	  			var skmflsd = localStorage.getItem("smaasip")+"/SCMXPert/searchfilter?";
		  		for(var sdf in jsodkn){
		  			if((sdf && jsodkn[sdf]) != '')
	  				{
	  				//alert(key)
	  					//lkmlksdf.push({[key]:value});
		  				skmflsd += sdf+'='+jsodkn[sdf];
			  			skmflsd += '&';
	  					
	  				}
		  			
		  		}
		  	/*	$.getJSON(skmflsd,function(response){
		  			getshipmentlistprintfilter(response);
		  		});*/
		  		
		// The code from the below line till $("#loadingimg").show(); is added to add loading element while the user hits Search button in both Live and Delivered dashboards.
		// Also the setTimeout inside the success function of ajax is added for the same purpose.
		// The same might be replicated below in the other condition.  		
/*		  	$(".info").hide();
 	 		$(".dashboard_page").hide();
 	    	$(".delivered_shipments").empty();
 	    	$('#draftTable>tbody').empty();
 	    	$("#bottom_map").show();
 	    	$("#loadingimg").show();*/
 	    	
				$.ajax({
    url: skmflsd,
    type : "GET",
    dataType: 'json',
	headers: {
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  },
    success:function(response){
/*		 setTimeout(() => {	 
		$("#loadingimg").hide();
		},5000)*/;
   	getshipmentlistprintfilter(response);
		  		}
		});
			}else{
			
				var jsodkn = {
		  		//		"from":sdkjfn,
		  				"to":sdkjfn1,
		  				"goods":sdkjfn2,
		  				"created_Date":sdkjfn3,
		  				//"Shipment_Num":sdkjfn4,
		  				"Invoice_Number":sdkjfn4,
		  				"Device_Id":sdkjfn6,
		  				//"reference":sdkjfn5,
		  				"Shipment_Num":sdkjfn5,
		  				"Shipment_Status":sdkjfn7,
		  				"customer_Id":useridsplit[0],
		  				"plant":fromPlant
		  				
		  		};
				var skmflsd = localStorage.getItem("smaasip")+"/SCMXPert/searchfilter?";
		  		for(var sdf in jsodkn){
		  			if((sdf && jsodkn[sdf]) != '')
	  				{
	  				//alert(key)
	  					//lkmlksdf.push({[key]:value});
		  				skmflsd += sdf+'='+jsodkn[sdf];
			  			skmflsd += '&';
	  					
	  				}
		  			
		  		}
		  		/*$.getJSON(skmflsd,function(response){
		  			getshipmentlistprintfilter(response);
		  		});*/
/*		  	$(".info").hide();
 	 		$(".dashboard_page").hide();
 	    	$(".delivered_shipments").empty();
 	    	$('#draftTable>tbody').empty();
 	    	$("#bottom_map").show();
 	    	$("#loadingimg").show();*/
		  		
		  		
						$.ajax({
    url: skmflsd,
    type : "GET",
    dataType: 'json',
	headers: {
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  },
    success:function(response){
/*				 setTimeout(() => {	 
		$("#loadingimg").hide();
		},5000);*/
   	getshipmentlistprintfilter(response);
		  		}
			});
	  		}
	  		
	  		/*//console.log(skmflsd);
	  		var lkmlksdf = [];
	  		$.each(jsodkn,function(key,value){
	  			
	  			if((key && value) != '')
	  				{
	  				//alert(key)
	  					lkmlksdf.push({[key]:value});
	  					
	  				}
	  		});*/
	  		////console.log($.param(kmlksdf, true));
	  		/*//console.log(JSON.stringify(lkmlksdf));
	  		var queryString=$.param(lkmlksdf);
	  		//console.log(queryString);*/
	  		////console.log(lkmlksdf);
	  		/*var knszdf = [];
	  		$(".filters").each(function(){
	  			knszdf.push($(this).val());
	  		})
	  		
	  		alert(knszdf);*/
	  		////console.log(jsodkn);
	  		//return false;
    	   /* $('.live_shipments_list').each(function(){
    	    	if(from != '' && to == ''){
    	    		if($(this).text().toUpperCase().indexOf(from.toUpperCase()) != -1){
    	    			////alert($(".live_shipments_list .from").text().toUpperCase().indexOf(from.toUpperCase()) !=-1);
        	    		$(this).show();
        	    	}
    	    	} else if(from !='' && to != ''){
    	    		if($(this).text().toUpperCase().indexOf(to.toUpperCase()) != -1){
        	    		$(this).show();
        	    	}
    	    	}else if(from == '' && to != ''){
    	    		if($(this).text().toUpperCase().indexOf(to.toUpperCase()) != -1){
        	    		$(this).show();
        	    	}
    	    	}
    	    	
    	       if($(this).text().toUpperCase().indexOf(from.toUpperCase() || to.toUpperCase() || goods || date || delivery || refer || device || delivery) != -1){
    	           $(this).show();
    	       }
    	    });*/
    	  	/*$(".info").hide();
    	 	$(".live_shipments").empty();
    	 	$("#draftTableaa>tbody").empty();
    	 	$("#bottom_map").show();
    	 	$(".delivered ").removeClass('btn-primary');
    	 	$(".live ").removeClass('btn-outline-info');
    	 	$(".live ").addClass('btn-primary');
    	 	$(".delivered ").addClass('btn-outline-info');
    	 	//$("body").hide();
    	 	$("#loadingimg").show();
    		 var Role = $.session.get('Role');
    			var UserId = $.session.get('UserId');
    			var Cust_Id = $.session.get('Cust_Id');
    			var UserId = $.session.get('UserId');
    			var useridsplit = UserId.split('-');
    			useridsplit[0].toString();
    			useridsplit[0] + "";
    			useridsplit[1].toString();
    			useridsplit[1] + "";
    	   	 var bpval = useridsplit[1];
    		 var scmval = useridsplit[0];
    	 	if(Role == "SUPERADMIN"){
    			
    			var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsListAll";
    		}else if(Role == "ADMIN")
    			{
    			//localStorage.getItem("smaasip")+'/SCMXPert/getShipments/'+scmval+'/'+bpval
    			var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsList/"+useridsplit[0]
    				//$("#customer").hide();
    			}else if(Role == "FINANCE")
    			{
    				//localStorage.getItem("smaasip")+'/SCMXPert/getShipments/'+scmval+'/'+bpval
    				var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsList/"+useridsplit[0]
    					//$("#customer").hide();
    				}else{
    					var url = localStorage.getItem("smaasip")+'/SCMXPert/getShipmentsList/'+useridsplit[0];
    					//var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsListAll";
    				}

    	 	 $.getJSON(url, function(filter){

    	  		var sdkjfn = $("#from").val();
    	  		var sdkjfn1 = $("#to").val();
    	  		var sdkjfn2 = $("#selectgoods").val();
    	  		var Dateee = $("#datepicker").val();
    	  		var sdkjfn4 = $("#delivery").val();
    	  		var sdkjfn6 = $("#devices").val();
    	  		var sdkjfn5 = $("#reference").val();
    
    	  		//alert(sdkjfn3);
    	  		//alert(sdkjfn2);
if(Dateee != ''){
sdkjfn3 = new Date(Dateee).toISOString();
}else{
sdkjfn3 = '';
}
			

    	  		
    	  		//alert(isoDate);
    	  		//return false;
//alert(filter);
    	  			$.each(filter,function(key,value){
//console.log(value);


			//if(value.route_From.toLowerCase() == sdkjfn.toLowerCase() && value.route_From !=sdkjfn1)
//alert(value.goods_Desc);
//&& (sdkjfn1.toLowerCase()  == '' && sdkjfn2.toLowerCase() == ''&& sdkjfn == '' && sdkjfn4 == '' && sdkjfn5 == '' && sdkjfn6 == '')){}else if(sdkjfn == value.route_From.toLowerCase()  && (sdkjfn1.toLowerCase()  == '' && sdkjfn2.toLowerCase() == ''&& sdkjfn3 == '' && sdkjfn4 == '' && sdkjfn5 == '' && sdkjfn6 == '')
	if(sdkjfn.toLowerCase() == value.route_From.toLowerCase()  && ( sdkjfn1  == '' && sdkjfn2 == '' && sdkjfn3 == '' && sdkjfn4 == '' && sdkjfn5 == '' && sdkjfn6 == ''))
	{
		getshipmentlistprintfilter(value);
	}else if(sdkjfn1.toLowerCase() == value.route_To.toLowerCase()  && ( sdkjfn  == '' && sdkjfn2 == '' && sdkjfn3 == '' && sdkjfn4 == '' && sdkjfn5 == '' && sdkjfn6 == ''))
	{
		getshipmentlistprintfilter(value);
	}else if(sdkjfn2.toLowerCase() == value.goods_Desc.toLowerCase()  && ( sdkjfn1  == '' && sdkjfn == '' && sdkjfn3 == '' && sdkjfn4 == '' && sdkjfn5 == '' && sdkjfn6 == ''))
	{
		getshipmentlistprintfilter(value);
	}else if( value.created_Date >= sdkjfn3    && ( sdkjfn1  == '' && sdkjfn == '' && sdkjfn2 == '' && sdkjfn4 == '' && sdkjfn5 == '' && sdkjfn6 == ''))
	{
		getshipmentlistprintfilter(value);
	}else if( sdkjfn4 == value.shipment_Num    && ( sdkjfn1  == '' && sdkjfn == '' && sdkjfn2 == '' && sdkjfn3 == '' && sdkjfn5 == '' && sdkjfn6 == ''))
	{
		getshipmentlistprintfilter(value);
	}
	else if( sdkjfn5.toLowerCase() == value.type_Of_Reference.toLowerCase()   && ( sdkjfn1  == '' && sdkjfn == '' && sdkjfn2 == '' && sdkjfn3 == '' && sdkjfn4 == '' && sdkjfn6 == ''))
	{
		getshipmentlistprintfilter(value);
	}else if( sdkjfn6 == value.device_Id   && ( sdkjfn1  == '' && sdkjfn == '' && sdkjfn2 == '' && sdkjfn3 == '' && sdkjfn4 == '' && sdkjfn5 == ''))
	{
		getshipmentlistprintfilter(value);
	}else if(sdkjfn.toLowerCase() == value.route_From.toLowerCase()  && sdkjfn1.toLowerCase()  == value.route_To.toLowerCase() && ( sdkjfn2 == '' && sdkjfn3 == '' && sdkjfn4 == '' && sdkjfn5 == '' && sdkjfn6 == ''))
	{
		getshipmentlistprintfilter(value);
	}else if(sdkjfn.toLowerCase() == value.route_From.toLowerCase()  && sdkjfn2.toLowerCase()  == value.goods_Desc.toLowerCase() && ( sdkjfn1 == '' && sdkjfn3 == '' && sdkjfn4 == '' && sdkjfn5 == '' && sdkjfn6 == ''))
	{
		getshipmentlistprintfilter(value);
	}else if(sdkjfn.toLowerCase() == value.route_From.toLowerCase() && value.created_Date >= sdkjfn3 && ( sdkjfn2 == '' && sdkjfn1 == '' && sdkjfn4 == '' && sdkjfn5 == '' && sdkjfn6 == ''))
	{
		getshipmentlistprintfilter(value);
	}else if(sdkjfn.toLowerCase() == value.route_From.toLowerCase()  && sdkjfn4  == value.value.shipment_Num && ( sdkjfn1 == '' && sdkjfn3 == '' && sdkjfn2 == '' && sdkjfn5 == '' && sdkjfn6 == ''))
	{
		getshipmentlistprintfilter(value);
	}else if(sdkjfn.toLowerCase() == value.route_From.toLowerCase()  && sdkjfn5.toLowerCase()  == value.type_Of_Reference.toLowerCase() && ( sdkjfn1 == '' && sdkjfn3 == '' && sdkjfn4 == '' && sdkjfn2 == '' && sdkjfn6 == ''))
	{
		getshipmentlistprintfilter(value);
	}else if(sdkjfn.toLowerCase() == value.route_From.toLowerCase()  && sdkjfn6  == value.device_Id && ( sdkjfn1 == '' && sdkjfn3 == '' && sdkjfn4 == '' && sdkjfn5 == '' && sdkjfn2 == ''))
	{
		getshipmentlistprintfilter(value);
	}else if(sdkjfn.toLowerCase() == value.route_From.toLowerCase()  && sdkjfn1.toLowerCase()  == value.route_To.toLowerCase() && sdkjfn2 == value.goods_Desc && (sdkjfn3 == '' && sdkjfn4 == '' && sdkjfn5 == '' && sdkjfn6 == ''))
	{
		getshipmentlistprintfilter(value);
	}else if(sdkjfn.toLowerCase() == value.route_From.toLowerCase()  && sdkjfn1.toLowerCase()  == value.route_To.toLowerCase() && sdkjfn2 == value.goods_Desc && value.created_Date >= sdkjfn3 && (sdkjfn4 == '' && sdkjfn5 == '' && sdkjfn6 == ''))
	{
		getshipmentlistprintfilter(value);
	}else if(sdkjfn.toLowerCase() == value.route_From.toLowerCase()  && sdkjfn1.toLowerCase()  == value.route_To.toLowerCase() && sdkjfn2 == value.goods_Desc && value.created_Date >= sdkjfn3 && sdkjfn4 == value.shipment_Num && (sdkjfn5 == '' && sdkjfn6 == ''))
	{
		getshipmentlistprintfilter(value);
	}else if(sdkjfn.toLowerCase() == value.route_From.toLowerCase()  && sdkjfn1.toLowerCase()  == value.route_To.toLowerCase() && sdkjfn2 == value.goods_Desc && value.created_Date >= sdkjfn3 && sdkjfn4 == value.shipment_Num && sdkjfn5.toLowerCase() == value.type_Of_Reference.toLowerCase() && sdkjfn6 == '')
	{
		getshipmentlistprintfilter(value);
	}else if(sdkjfn.toLowerCase() == value.route_From.toLowerCase()  && sdkjfn1.toLowerCase()  == value.route_To.toLowerCase() && sdkjfn2 == value.goods_Desc && value.created_Date >= sdkjfn3 && sdkjfn4 == value.shipment_Num && sdkjfn5.toLowerCase() == value.type_Of_Reference.toLowerCase() && sdkjfn6 == value.device_Id)
	{
		getshipmentlistprintfilter(value);
	}else{
		return "we don't have Records";
	}





    	  				if(value.route_From.toLowerCase() == sdkjfn.toLowerCase() ){alert("h");getshipmentlistprintfilter(value);}
					else if(value.route_To.toLowerCase() == sdkjfn1.toLowerCase() ){alert("he");getshipmentlistprintfilter(value);}
					else if(value.route_From.toLowerCase() == sdkjfn.toLowerCase() && value.route_To.toLowerCase() == sdkjfn1.toLowerCase() ){alert("hel");getshipmentlistprintfilter(value);}
					else if(value.created_Date > sdkjfn3 ){alert("hell");getshipmentlistprintfilter(value);}
					//else if(value.device_Id == sdkjfn4 ){	getshipmentlistprintfilter(value);}
    	  			//	else if(value.type_Of_Reference == sdkjfn5 ){	getshipmentlistprintfilter(value);}
    	  				

    	  				
    	  			
    	  		
    	 	});
    	 		 });*/
      }
function resetform()
{
	document.location.reload();	
}
function downloadtabletocsv(){
	$("#draftTableaa").tableToCSV({  
        filename: 'ShipmentsList'  
    });
}
 function liveshipments_list(cust_id,bp_id)
 {
 	$(".info").hide();
 	$(".live_shipments").empty();
 	$("#draftTableaa>tbody").empty();
 	$("#bottom_map").show();
 	$(".delivered ").removeClass('btn-primary');
 	$(".live ").removeClass('btn-outline-info');
 	$(".live ").addClass('btn-primary');
 	$(".delivered ").addClass('btn-outline-info');
 	//$("body").hide();
 	$("#loadingimg").show();
	 var Role = $.session.get('Role');
		var UserId = $.session.get('UserId');
		var Cust_Id = $.session.get('Cust_Id');
		var UserId = $.session.get('UserId');
		var useridsplit = UserId.split('-');
		useridsplit[0].toString();
		useridsplit[0] + "";
		useridsplit[1].toString();
		useridsplit[1] + "";
   	 var bpval = useridsplit[1];
	 var scmval = useridsplit[0];
 	if(Role == "SUPERADMIN"){
		
		var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsListAll";
	}else if(Role == "ADMIN")
		{
		//localStorage.getItem("smaasip")+'/SCMXPert/getShipments/'+scmval+'/'+bpval
		var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsList/"+useridsplit[0]
			//$("#customer").hide();
		}else if(Role == "FINANCE")
		{
			//localStorage.getItem("smaasip")+'/SCMXPert/getShipments/'+scmval+'/'+bpval
			var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsList/"+useridsplit[0]
				//$("#customer").hide();
			}else{
				var url = localStorage.getItem("smaasip")+'/SCMXPert/getShipmentsList/'+useridsplit[0];
				//var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsListAll";
			}

 /*	 $.getJSON(url,function(filter){
 		//alert(filter);
 		//exitShipmentDetails();
 		getshipmentlistprint(filter);
      });*/
		$.ajax({
    url: url,
    type : "GET",
    dataType: 'json',
	headers: {
	        	    'Authorization': localStorage.getItem('SavedToken')
	        	  },
    success:function(filter){
   //alert(filter);
 		//exitShipmentDetails();
 		getshipmentlistprint(filter);
      }
});
 	
}
 function getshipmentlistprint(filter){
	 if(filter != ''){
		
		 //console.log(filter);
	 		// $("#loadingimg").remove();
	 		$("#loadingimg").hide();
	 		 $(".dashboard_page").show();
	      	var live_shipmen = [];
	      	var live_shipments = [];
	      	var shipMentIDS = [];
	      	$.each(filter,function(key,value){
	      		
	      		//console.log(value);
	      		$.each(value,function(keyses,valuese){
	      			////alert(keyses);
	      		});
	      	var alerts = '';
	      //	alert(value);
	      	if(value.shipment_Id == "T")
	     		 {	 	var alertss = "alarm.png";
	     			 	$(".imagenotif>img").addClass("alaram");
	     		 }else{
	     			 var alertss = "notification.png";
	     			 $(".imagenotif>img").removeClass("alaram");
	     		 }

	      var date_create = dateFormat(value.created_Date, "dd-mmm-yy");
	      var delivered_Date = dateFormat(value.delivered_Date, "dd-mmm-yy");
	      	
	      	//var theDate = new Date( Date.parse(value.created_Date));
	      	//var date_create = theDate.toLocaleDateString("DD/MM/YYYY");
	      //	//alert(date_create);
	      	var theDatee = new Date( Date.parse(value.delivered_Date));
	      	//var delivered_Date = theDatee.toLocaleDateString();
	      	var date_string = moment(date_create, "DD/MM/YYYY").format("D-M-YYYY");
	      //	var fromatted = d.toLocaleFormat("%d.%m.%Y %H:%M (%a)");
	      	
	/*             theDate.toLocaleString();  // "6/29/2011, 9:52:48 AM"
	      	theDate.toLocaleTimeString();  // "9:52:48 AM"
	      	theDate.toLocaleDateString();  // "6/29/2011" */
	      //	//console.log(value.wayPoints);
	        	var shipWayPoints = [];
	      	var var_length = value.wayPoints.length; 
	      	 for(i=0;i<=var_length-1;i++){
	      		 shipWayPoints.push("'"+value.wayPoints[i]+"'");
	      	    }
	      	 var getPointsWays = "["+shipWayPoints+"]";
	      	
	      	var ship = [];
	      	
      		
	      	var var_points = value.wayPoints
	      	var var_length = value.wayPoints.length;
				
	      	if(value.delivered_Status != "Delivered")
	      		{
	      		var var_length = value.wayPoints.length;
	      		
	       		if(var_length > 0)
	       			{
	       			var datajhsdf = value.wayPoints[var_length-1];
	           		var newstr = datajhsdf.join(', ');
	       				live_shipmen.push(newstr); 
	       			}
				else{
	       				//live_shipmen.push(value.route_From);
	       			}
	      		            		
	      		ship.push(value.route_From);
	      		shipMentIDS.push(value.shipment_Id);
		      
	      		if(value.delivered_Status == null)
	      			{
	      			var status_length = 10;
	      			}else{
	      				var status_length = value.delivered_Status.length;
	      			}
	      		
	      		if(value.goods_Desc.length > 18)
	      			{
	      				var Good_font_size = "10";
	      			}else{
	      				var Good_font_size = "12";
	      			}
	      		if(status_length > 15)
      			{
      				var font_size = "10";
      			}else{
      				var font_size = "12";
      			}
	      //	alert(value.temp);
	      		//alert(value.goods_Desc.length);
	      		////console.log(value.goods_Desc.length);  style="font-size:'+Good_font_size+'px;   style="font-size:'+font_size+'px;"
	      		$('#draftTableaa>tbody').empty();
	      		$('#draftTableaa>tbody>td').css("padding","0px");
	      	//	var shipment_device = '<div id="message_view_'+escapeHtml(value.shipment_Id)+'" class="Message_View"><div class="p-1 m-1 live_shipments_list row two_view_'+escapeHtml(value.shipment_Id)+'" onclick="javascript:showdatadialogbox(\''+escapeHtml(value.shipment_Id)+'\',\''+escapeHtml(value.shipment_Num)+'\',\''+escapeHtml(value.device_Id)+'\',\''+escapeHtml(value.created_Date)+'\',\''+escapeHtml(value.route_From)+'\',\''+escapeHtml(value.route_To)+'\',\''+escapeHtml(value.type_Of_Reference)+'\','+escapeHtml(getPointsWays)+',\''+escapeHtml(value.temp)+'\');" style="width:98%;border:1px solid black;border-radius:3px;min-height:60px;cursor:pointer;"  ><div class="col-md-5 col-sm-5 p-1"><h6 class="m-0" style="font-size:0.7rem;"><div class="float-left sn-t1">Shipment No.</div><div class="float-left sn-t2">:</div><div class="float-left sn-t3"> '+escapeHtml(value.shipment_Num)+'</div><div style="clear:both"></div></h6><h6 class="m-0" style="font-size:0.7rem;font-weight:600;"><div class="float-left sn-t1">Internal Id</div><div class="float-left sn-t2">:</div><div class="float-left sn-t3">'+escapeHtml(value.shipment_Id)+'</div><div style="clear:both"></div></h6><h6 style="font-size:0.7rem;font-weight:600;margin-bottom:0px;"> <div class="float-left sn-t1">Product Name</div><div class="float-left sn-t2">:</div><div class="float-left sn-t3" "> '+escapeHtml(value.goods_Desc)+'</div><div style="clear:both"></div></h6></div><div class="col-md-6 col-sm-6 pl-0"><div style="width:100%;"><p style="float:left;text-align:left;width:50%;font-size:10px;margin:0px;font-weight:600;margin-top:0px;">'+escapeHtml(date_create)+'<br>'+escapeHtml(value.route_From)+'</p><p style="float:left;text-align:right;width:46%;font-size:10px;font-weight:600;margin-top:0px;">'+escapeHtml(delivered_Date)+'</br>'+escapeHtml(value.route_To)+'</p><div style="clear:both;"></div></div><div class="text-center m-auto" style="width:75%;height: 10px;position: relative;bottom: 12px;"><div class="p-1 points-dots"></div><div class="progress margin-auto" style="position: relative;height: 0.5rem;"><div class="progress-bar progress-bar-striped progress-bar-animated "style="width:'+escapeHtml(value.event_Status)+'%;background-size: 0.5rem 0.8rem;background-color:#43b54380;background-image: linear-gradient(45deg,rgba(255, 255, 255, 0.82) 25%,#797676c7 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);"></div></div><div class="p-1 points-dots2"></div><div class="current_status_ship" style="font-size: 12px;font-weight: 600;height: 0px;position: relative;bottom: 5px;width: 100%;text-align: center;">Current Status: <span >'+escapeHtml(value.delivered_Status)+'</span></div></div><div class="clear:both;"></div></div><div class="col-md-1 col-sm-1 text-center p-0 imagenotif"><img src="./images/'+alertss+'" style="width:16px;height:16px;margin-top:20px;" class="notif"></div><div style="clear:both"></div></div></div>';
                var shipment_device = '<div id="message_view_'+escapeHtml(value.shipment_Id)+'" class="Message_View"><div class="p-1 m-1 live_shipments_list row two_view_'+escapeHtml(value.shipment_Id)+'" onclick="javascript:showdatadialogbox(\''+escapeHtml(value.shipment_Id)+'\',\''+escapeHtml(value.shipment_Num)+'\',\''+escapeHtml(value.device_Id)+'\',\''+escapeHtml(value.created_Date)+'\',\''+escapeHtml(value.route_From)+'\',\''+escapeHtml(value.route_To)+'\',\''+escapeHtml(value.type_Of_Reference)+'\','+escapeHtml(getPointsWays)+',\''+escapeHtml(value.temp)+'\');" style="width:98%;border:1px solid black;border-radius:3px;min-height:60px;cursor:pointer;"  ><div class="col-md-5 col-sm-5 p-1"><h6 class="m-0" style="font-size:0.7rem;"><div class="float-left sn-t1">Delivery No.</div><div class="float-left sn-t2">:</div><div class="float-left sn-t3"> '+escapeHtml(value.shipment_Num)+'</div><div style="clear:both"></div></h6><h6 class="m-0" style="font-size:0.7rem;font-weight:600;"><div class="float-left sn-t1">Shipment Id</div><div class="float-left sn-t2">:</div><div class="float-left sn-t3">'+escapeHtml(value.shipment_Id)+'</div><div style="clear:both"></div></h6><h6 style="font-size:0.7rem;font-weight:600;margin-bottom:0px;"> <div class="float-left sn-t1">Product Name</div><div class="float-left sn-t2">:</div><div class="float-left sn-t3" "> '+escapeHtml(value.comments)+'</div><div style="clear:both"></div></h6></div><div class="col-md-6 col-sm-6 pl-0"><div style="width:100%;"><p style="float:left;text-align:left;width:50%;font-size:10px;margin:0px;font-weight:600;margin-top:0px;">'+escapeHtml(date_create)+'<br>'+escapeHtml(value.route_From)+'</p><p style="float:left;text-align:right;width:46%;font-size:10px;font-weight:600;margin-top:0px;">'+escapeHtml(delivered_Date)+'</br>'+escapeHtml(value.route_To)+'</p><div style="clear:both;"></div></div><div class="text-center m-auto" style="width:75%;height: 10px;position: relative;bottom: 12px;"><div class="p-1 points-dots"></div><div class="progress margin-auto" style="position: relative;height: 0.5rem;"><div class="progress-bar progress-bar-striped progress-bar-animated "style="width:'+escapeHtml(value.event_Status)+'%;background-size: 0.5rem 0.8rem;background-color:#43b54380;background-image: linear-gradient(45deg,rgba(255, 255, 255, 0.82) 25%,#797676c7 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);"></div></div><div class="p-1 points-dots2"></div><div class="current_status_ship" style="font-size: 12px;font-weight: 600;height: 0px;position: relative;bottom: 5px;width: 100%;text-align: center;">Current Status: <span >'+escapeHtml(value.delivered_Status)+'</span></div></div><div class="clear:both;"></div></div><div class="col-md-1 col-sm-1 text-center p-0 imagenotif"><img src="./images/'+alertss+'" style="width:16px;height:16px;margin-top:20px;" class="notif"></div><div style="clear:both"></div></div></div>';
	      			$(".live_shipments").append(shipment_device);
	      			var string_json = [];
	      		
	      		/*	$.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/getShipmentTransactionDeviceDataLast/"+value.shipment_Id,function(filters){
	      				var filter_length = filters.length;
	      				var value_filter = filters[filter_length - 1];
	      				////alert(sort(value_filter.event_SNo));
	      				var event_sNO = [];
	      				$.each(filters,function(key,value){
	      					event_sNO.push(value.event_SNo);
	      				});
	      				
	      				event_sNO.sort(function(a, b){return b-a});
	      				var event_SNo_c = event_sNO[0];
	      				$.each(filters,function(kew,val){
	      					if(event_SNo_c == val.event_SNo)
	      						{
	      						var status_length = val.event_Name.length;
				             		if(status_length > 15)
				             			{
				             				var font_size = "10";
				             			}else{
				             				var font_size = "12";
				             			}
				             			   //console.log("bhanu");
                                 //console.log(val);
                                      var tabletr = "<tr><td>"+val.shipment_Id+"</td><td>"+val.shipment_Num+"</td><td>"+val.device_Id+"</td><td style='font-size:"+font_size+"px;'>"+val.event_Name+"</td><td>"+val.batteryLevel+"</td><td>"+val.mode_of_Transport+"</td><td>"+val.address+"</td><td>"+val.po_Number+"</td><td>"+val.ndc_Number+"</td><td>"+val.invoice_Number+"</td><td>"+val.shipper_Number+"</td><td>"+val.serial_Number_of_goods+"</td></tr>";
                                      $('#draftTableaa>tbody').append(tabletr);

	      						}
	      					
	      					});
	      				
	      			});*/
//console.log(value.shipment_Id)///remove here for data in dashboard
		$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getShipmentTransactionDeviceDataLast/"+value.shipment_Id,
    type : "GET",
    dataType: 'json',
	headers: {
		            'Content-Type' : "application/json",
	        	    'Authorization': localStorage.getItem('SavedToken')
	        	  },
    success:function(filters){
  	var filter_length = filters.length;
	      				var value_filter = filters[filter_length - 1];
	      				////alert(sort(value_filter.event_SNo));

	      				var event_sNO = [];
 //   console.log(filters)///remove here for data in dashboard
	      				$.each(filters,function(key,value){
//	alert(value.event_SNo);///remove here for data in dashboard
	      					event_sNO.push(value.event_SNo);
	      				});
	      				
	      				event_sNO.sort(function(a, b){return b-a});
	      				var event_SNo_c = event_sNO[0];
	      				$.each(filters,function(kew,val){
	      					if(event_SNo_c == val.event_SNo)
	      						{
//			alert("test iff");	   
//          alert(event_sNO);	  ///remove here for data in dashboard
//   console.log(event_sNO);                     
	      						var status_length = val.event_Name.length;
//	alert("var ");  ///remove here for data in dashboard
	      			//			alert(event_SNo_c);
				             		if(status_length > 15)
	
				             			{
				             				var font_size = "10";
				             			}else{
				             				var font_size = "12";
				             			}

				//             		alert("test");	   
                //                 console.log(val);
                                      var tabletr = "<tr><td>"+escapeHtml(val.shipment_Id)+"</td><td>"+escapeHtml(val.shipment_Num)+"</td><td>"+escapeHtml(val.device_Id)+"</td><td style='font-size:"+font_size+"px;'>"+escapeHtml(val.event_Name)+"</td><td>"+escapeHtml(val.batteryLevel)+"</td><td>"+escapeHtml(val.mode_of_Transport)+"</td><td>"+escapeHtml(val.fromPlant)+"</td><td>"+escapeHtml(val.address)+"</td><td>"+escapeHtml(val.po_Number)+"</td><td>"+escapeHtml(val.ndc_Number)+"</td><td>"+escapeHtml(val.invoice_Number)+"</td><td>"+escapeHtml(val.shipper_Number)+"</td><td>"+escapeHtml(val.serial_Number_of_goods)+"</td></tr>";
                                      $('#draftTableaa>tbody').append(tabletr);

	      						}
	      					
	      					});
	      				
	      			}
});
	      			////alert($('#draftTableaa>tbody').html());
	      			////alert(shipment_val);
	      		}
	    	//mapDashboardPointsRoute(value.shipment_Id);
				});
	      
	      	//alert(shipMentIDS);
	      	//console.log(token);
	      	$.cookie("shipMentIDSLIST",JSON.stringify(shipMentIDS));
	      	
	      	/******** Notification ******/
	      	if(window.location.hash == '#CreateShipmentSuccess')
	    	{
	    	    //show the notification
	      		
	      		$('html,body').scrollTop(1000);
	      		$('.live_shipments').scrollTop(100000);
	      		/* $('.live_shipments').animate({
	      	        scrollTop: $(".live_shipments").offset().top - 60
	      	    }, 'slow');*/
	    		/*//alert("success");
	    		var text="hello world";
	    		$("#message_view_T000000050 ").append("<div class='arrow-left'></div><div id='successMessage' style='vertical-align: middle;width: 260px;position: absolute;left: 560px;border: 1px solid #30d4bd80;background: #f6f7f6;margin: 20px;z-index: 1;bottom: 5px;height: 100px;border-radius: 5px;box-shadow: #000000f5 0px 1px 16px;text-align: left;font-size: 12px;font-weight: bold;padding-left: 2%;padding-top: 2%;'>" + text + "</div>");*/
	      	/*	var shipmentid = $.cookie("internalshipment","T000000050");
	      		$(".two_view_"+shipmentid).css({"background":"#ff00008f","color":"#fff"});
	      		$(".two_view_"+shipmentid).append('<div id="CreatedNewShipmentMessage" style="padding-left:30%;"><img src="./images/correct.gif" id="tickimg" style="width:45px;"/> New Shipment Added</div>');
	      		 setTimeout(function (){
	             	$(".two_view_"+shipmentid).css({"background":"#fff","color":"#000"});
	             	$("#CreatedNewShipmentMessage").hide();
	             	var first = $(location).attr('pathname');
	             	window.history.pushState({}, "Title",first );
	             	$.cookie("internalshipment","");
	             	
	             },5000);*/
	      		var shipmentid = $.cookie("internalshipment");
	      		//var shipmentid = "T000000054";
	      		$(".two_view_"+shipmentid).css({"background":"#894151a1","color":"#fff"});
	      		$(".two_view_"+shipmentid).append('<div id="CreatedNewShipmentMessage" style="padding-left:30%;"><img src="./images/correct.gif" id="tickimg" style="width:45px;"/> New Shipment Added</div>');
	      		 setTimeout(function (){
	             	$(".two_view_"+shipmentid).css({"background":"#fff","color":"#000"});
	             	$("#CreatedNewShipmentMessage").hide();
	             	var first = $(location).attr('pathname');
	             	window.history.pushState({}, "Title",first );
	             	$.cookie("internalshipment","");
	             	
	             },3000);
	      		 
	      		//var first = $(location).attr('pathname');
	      		////alert(first);
	      		//var url = ""+first.split("#")[0];
	      

	      		//var url = window.history.pushState({}, "Title",first );
	      		////alert(url);
	      		/*var url = first.split("#")[0];
	      		//alert(url);*/
	    		
	    	}
	      	if(window.location.hash == '#UpdateShipmentSuccess')
	    	{
	      		var shipmentid = $.cookie("Updateinternalshipment");
	      		//var shipmentid = "T000000050"
	      		$(".body_blur").show();
	      		$("body").append('<div id="CreatedNewShipmentMessage" style="position: absolute;top: 10%;background: #fff;box-shadow: #000 0px 1px 15px;border-radius: 5px;padding: 1%;margin: 11% 35%;z-index: 1;"><img src="./images/correct.gif" id="tickimg" style="width:45px;"/> '+escapeHtml(shipmentid)+' Shipment Event Updated Successfully </div>');
	      		 setTimeout(function (){
	             //	$(".two_view_"+shipmentid).css({"background":"#fff","color":"#000"});
	             	$("#CreatedNewShipmentMessage").hide();
	             	var first = $(location).attr('pathname');
	             	window.history.pushState({}, "Title",first );
	             	$.cookie("Updateinternalshipment","");
	             	$(".body_blur").hide();
	             	
	             },3000);   		
	    	}

		if(window.location.hash == '#CompleteShipmentSuccess')
	    	{
	      		var shipmentid = $.cookie("Completeinternalshipment");
	      		//var shipmentid = "T000000050"
	      			//alert(shipmentid);
	      		$(".body_blur").show();
	      		$("body").append('<div id="CreatedNewShipmentMessage" style="position: absolute;top: 10%;background: #fff;box-shadow: #000 0px 1px 15px;border-radius: 5px;padding: 1%;margin: 11% 35%;z-index: 1;"><img src="./images/correct.gif" id="tickimg" style="width:45px;"/> '+escapeHtml(shipmentid)+' Shipment Event Completed Successfully </div>');
	      		 setTimeout(function (){
	             //	$(".two_view_"+shipmentid).css({"background":"#fff","color":"#000"});
	             	$("#CreatedNewShipmentMessage").hide();
	             	var first = $(location).attr('pathname');
	             	window.history.pushState({}, "Title",first );
	             	$.cookie("Completeinternalshipment","");
	             	$(".body_blur").hide();
	             	
	             },3000);   		
	    	}
		//alert(shipMentIDS);
	      	mapOnLoad(shipMentIDS,"live");
	      /*	$(".delivery_charts").hide();
	      	$(".live_charts").show();*/
			}else{
				$("#loadingimg").hide();
		 		 $(".dashboard_page").show();
				var live_shipmen = '';
				////alert(live_shipmen);
				/*$("#loadingimg").hide();
		 		 $(".dashboard_page").show();*/
				mapOnLoad(live_shipmen,"live");
			}
 }
 
 function getshipmentlistprintfilter(filter){
//alert(filter);
	 if(filter != ''){
		$(".live_shipments").empty();
		$(".delivered_shipments").empty();
		$(".info").hide();
		$("#bottom_map,.download").show();
		
		// alert("hello");
	 		// $("#loadingimg").remove();
	 		$("#loadingimg").hide();
	 		 $(".dashboard_page").show();
	      	var live_shipmen = [];
	      	var live_shipments = [];
	      	
	      	$.each(filter,function(key,value){
	      	//	//alert(value);
	      		//alert(value.wayPoints);
	      		$.each(value,function(keyses,valuese){
	      			//alert(keyses);
	      		});
	      	var alerts = '';
//alert(value.shipment_Id);
//           if(value.shipment_Id == "T000000010")
	      	if(value.shipment_Id == "T")
	     		 {	 	var alertss = "alarm.png";
	     			 	$(".imagenotif>img").addClass("alaram");
	     		 }else{
	     			 var alertss = "notification.png";
	     			 $(".imagenotif>img").removeClass("alaram");
	     		 }

	      var date_create = dateFormat(value.created_Date, "dd-mmm-yy");
	      var delivered_Date = dateFormat(value.delivered_Date, "dd-mmm-yy");
	      	
	      	//var theDate = new Date( Date.parse(value.created_Date));
	      	//var date_create = theDate.toLocaleDateString("DD/MM/YYYY");
	      //	//alert(date_create);
	      	var theDatee = new Date( Date.parse(value.delivered_Date));
	      	//var delivered_Date = theDatee.toLocaleDateString();
	      	var date_string = moment(date_create, "DD/MM/YYYY").format("D-M-YYYY");
	      //	var fromatted = d.toLocaleFormat("%d.%m.%Y %H:%M (%a)");
	      	
	/*             theDate.toLocaleString();  // "6/29/2011, 9:52:48 AM"
	      	theDate.toLocaleTimeString();  // "9:52:48 AM"
	      	theDate.toLocaleDateString();  // "6/29/2011" */
	     // 	//console.log(value.wayPoints);
	        	var shipWayPoints = [];
	      	var var_length = value.wayPoints.length; 
	      	 for(i=0;i<=var_length-1;i++){
	      		 shipWayPoints.push("'"+value.wayPoints[i]+"'");
	      	    }
	      	 var getPointsWays = "["+shipWayPoints+"]";
	      	
	      	var ship = [];
	      
	      	var var_points = value.wayPoints
	      	var var_length = value.wayPoints.length;
				
	      	if(value.shipment_Status != "Delivered")
	      		{
	      		var var_length = value.wayPoints.length;
	      		
	       		if(var_length > 0)
	       			{
	       			var datajhsdf = value.wayPoints[var_length-1];
	           		var newstr = datajhsdf.join(', ');
	       				live_shipmen.push(newstr); 
	       			}else{
	       				//live_shipmen.push(value.route_From);
	       			}
	      		            		
	      		ship.push(value.route_From);
	      		
	      		if(value.shipment_Status == null)
	      			{
	      			var status_length = 10;
	      			}else{
	      				var status_length = value.shipment_Status.length;
	      			}
	      		
	      		if(status_length > 15)
	      			{
	      				var font_size = "10";
	      			}else{
	      				var font_size = "12";
	      			}
	      		$('#draftTableaa>tbody').empty();
	      		$('#draftTableaa>tbody>td').css("padding","0px");
	      		var shipment_device = '<div id="message_view_'+escapeHtml(value.shipment_Id)+'" class="Message_View"><div class="p-1 m-1 live_shipments_list row two_view_'+escapeHtml(value.shipment_Id)+'" onclick="javascript:showdatadialogbox(\''+escapeHtml(value.shipment_Id)+'\',\''+escapeHtml(value.shipment_Num)+'\',\''+escapeHtml(value.device_Id)+'\',\''+escapeHtml(value.created_Date)+'\',\''+escapeHtml(value.route_From)+'\',\''+escapeHtml(value.route_To)+'\',\''+escapeHtml(value.type_Of_Reference)+'\','+escapeHtml(getPointsWays)+',\''+escapeHtml(value.temp)+'\');" style="width:98%;border:1px solid black;border-radius:3px;min-height:60px;cursor:pointer;"  ><div class="col-md-5 col-sm-5 p-1"><h6 class="m-0" style="font-size:0.7rem;"><div class="float-left sn-t1">Delivery No.</div><div class="float-left sn-t2">:</div><div class="float-left sn-t3"> '+escapeHtml(value.shipment_Num)+'</div><div style="clear:both"></div></h6><h6 class="m-0" style="font-size:0.7rem;font-weight:600;"><div class="float-left sn-t1">Internal Id</div><div class="float-left sn-t2">:</div><div class="float-left sn-t3">'+escapeHtml(value.shipment_Id)+'</div><div style="clear:both"></div></h6><h6 style="font-size:0.7rem;font-weight:600;margin-bottom:0px;"> <div class="float-left sn-t1">Product Name</div><div class="float-left sn-t2">:</div><div class="float-left sn-t3" "> '+escapeHtml(value.goods_Desc)+'</div><div style="clear:both"></div></h6></div><div class="col-md-6 col-sm-6 pl-0"><div style="width:100%;"><p style="float:left;text-align:left;width:50%;font-size:10px;margin:0px;font-weight:600;margin-top:0px;">'+escapeHtml(date_create)+'<br>'+escapeHtml(value.route_From)+'</p><p style="float:left;text-align:right;width:46%;font-size:10px;font-weight:600;margin-top:0px;">'+escapeHtml(delivered_Date)+'</br>'+escapeHtml(value.route_To)+'</p><div style="clear:both;"></div></div><div class="text-center m-auto" style="width:75%;height: 10px;position: relative;bottom: 12px;"><div class="p-1 points-dots"></div><div class="progress margin-auto" style="position: relative;height: 0.5rem;"><div class="progress-bar progress-bar-striped progress-bar-animated "style="width:'+escapeHtml(value.event_Status)+'%;background-size: 0.5rem 0.8rem;background-color:#43b54380;background-image: linear-gradient(45deg,rgba(255, 255, 255, 0.82) 25%,#797676c7 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);"></div></div><div class="p-1 points-dots2"></div><div class="current_status_ship" style="font-size: 12px;font-weight: 600;height: 0px;position: relative;bottom: 5px;width: 100%;text-align: center;">Current Status: <span >'+escapeHtml(value.delivered_Status)+'</span></div></div><div class="clear:both;"></div></div><div class="col-md-1 col-sm-1 text-center p-0 imagenotif"><img src="./images/'+escapeHtml(alertss)+'" style="width:16px;height:16px;margin-top:20px;" class="notif"></div><div style="clear:both"></div></div></div>';
	      			///console.log("in search filter");
	      			$(".live_shipments").append(shipment_device);
	      			var string_json = [];
	      		////alert(value.shipment_Id);
	      		/*	$.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/getShipmentTransactionDeviceDataLast/"+value.shipment_Id,function(filters){
	      				var filter_length = filters.length;
	      				var value_filter = filters[filter_length - 1];
	      				////alert(sort(value_filter.event_SNo));
	      				var event_sNO = [];
	      				$.each(filters,function(key,value){
	      					event_sNO.push(value.event_SNo);
	      				});
	      				
	      				event_sNO.sort(function(a, b){return b-a});
	      				var event_SNo_c = event_sNO[0];
	      				$.each(filters,function(kew,val){
	      					if(event_SNo_c == val.event_SNo)
	      						{
	      						var status_length = val.event_Name.length;
				             		if(status_length > 15)
				             			{
				             				var font_size = "10";
				             			}else{
				             				var font_size = "12";
				             			}
				             	//	//console.log(val);
	          						var tabletr = "<tr><td>"+val.shipment_Id+"</td><td>"+val.shipment_Num+"</td><td>"+val.device_Id+"</td><td style='font-size:"+font_size+"px;'>"+val.event_Name+"</td><td>"+val.batteryLevel+"</td><td>"+val.mode_of_Transport+"</td><td>"+val.address+"</td></tr>";
	                  				$('#draftTableaa>tbody').append(tabletr); 

	      						}
	      					
	      					});
	      				
	      			});*/
		$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getShipmentTransactionDeviceDataLast/"+value.shipment_Id,
    type : "GET",
    dataType: 'json',
	headers: {
		            'Content-Type' : "application/json",
	        	    'Authorization': localStorage.getItem('SavedToken')
	        	  },
    success:function(filters){
 	var filter_length = filters.length;
	      				var value_filter = filters[filter_length - 1];
	      				////alert(sort(value_filter.event_SNo));
	      				var event_sNO = [];
	      				$.each(filters,function(key,value){
	      					event_sNO.push(value.event_SNo);
	      				});
	      				
	      				event_sNO.sort(function(a, b){return b-a});
	      				var event_SNo_c = event_sNO[0];
	      				$.each(filters,function(kew,val){
	      					if(event_SNo_c == val.event_SNo)
	      						{
	      						var status_length = val.event_Name.length;
				             		if(status_length > 15)
				             			{
				             				var font_size = "10";
				             			}else{
				             				var font_size = "12";
				             			}
				             	//	//console.log(val);
	          						var tabletr = "<tr><td>"+escapeHtml(val.shipment_Id)+"</td><td>"+escapeHtml(val.shipment_Num)+"</td><td>"+escapeHtml(val.device_Id)+"</td><td style='font-size:"+escapeHtml(font_size)+"px;'>"+escapeHtml(val.event_Name)+"</td><td>"+escapeHtml(val.batteryLevel)+"</td><td>"+escapeHtml(val.mode_of_Transport)+"</td><td>"+escapeHtml(val.fromPlant)+"</td><td>"+escapeHtml(val.address)+"</td><td>"+escapeHtml(val.po_Number)+"</td><td>"+escapeHtml(val.ndc_Number)+"</td><td>"+escapeHtml(val.invoice_Number)+"</td><td>"+escapeHtml(val.shipper_Number)+"</td><td>"+escapeHtml(val.serial_Number_of_goods)+"</td></tr>";
	                  				$('#draftTableaa>tbody').append(tabletr); 

	      						}
	      					
	      					});
	      				
	      			}
});
	      			////alert($('#draftTableaa>tbody').html());
	      			////alert(shipment_val);
	      		}
	      	
			if(value.shipment_Status == "Delivered")
	      		{
	      		var var_length = value.wayPoints.length;
	      		
	       		if(var_length > 0)
	       			{
	       			var datajhsdf = value.wayPoints[var_length-1];
	           		var newstr = datajhsdf.join(', ');
	       				live_shipmen.push(newstr); 
	       			}else{
	       				//live_shipmen.push(value.route_From);
	       			}
	      		            		
	      		ship.push(value.route_From);
	      		if(value.shipment_Status == null)
	      			{
	      			var status_length = 10;
	      			}else{
	      				var status_length = value.shipment_Status.length;
	      			}
	      		
	      		if(status_length > 15)
	      			{
	      				var font_size = "10";
	      			}else{
	      				var font_size = "12";
	      			}
	      		$('#draftTableaa>tbody').empty();
	      		$('#draftTableaa>tbody>td').css("padding","0px");
	      		var shipment_device = '<div id="message_view_'+escapeHtml(value.shipment_Id)+'" class="Message_View"><div class="p-1 m-1 live_shipments_list row two_view_'+escapeHtml(value.shipment_Id)+'" onclick="javascript:showdatadialogbox(\''+escapeHtml(value.shipment_Id)+'\',\''+escapeHtml(value.shipment_Num)+'\',\''+escapeHtml(value.device_Id)+'\',\''+escapeHtml(value.created_Date)+'\',\''+escapeHtml(value.route_From)+'\',\''+escapeHtml(value.route_To)+'\',\''+escapeHtml(value.type_Of_Reference)+'\','+escapeHtml(getPointsWays)+',\''+escapeHtml(value.temp)+'\');" style="width:98%;border:1px solid black;border-radius:3px;min-height:60px;cursor:pointer;"  ><div class="col-md-5 col-sm-5 p-1"><h6 class="m-0" style="font-size:0.7rem;"><div class="float-left sn-t1">Shipment No.</div><div class="float-left sn-t2">:</div><div class="float-left sn-t3"> '+escapeHtml(value.shipment_Num)+'</div><div style="clear:both"></div></h6><h6 class="m-0" style="font-size:0.7rem;font-weight:600;"><div class="float-left sn-t1">Internal Id</div><div class="float-left sn-t2">:</div><div class="float-left sn-t3">'+escapeHtml(value.shipment_Id)+'</div><div style="clear:both"></div></h6><h6 style="font-size:0.7rem;font-weight:600;margin-bottom:0px;"> <div class="float-left sn-t1">Product Name</div><div class="float-left sn-t2">:</div><div class="float-left sn-t3" "> '+escapeHtml(value.goods_Desc)+'</div><div style="clear:both"></div></h6></div><div class="col-md-6 col-sm-6 pl-0"><div style="width:100%;"><p style="float:left;text-align:left;width:50%;font-size:10px;margin:0px;font-weight:600;margin-top:0px;">'+escapeHtml(date_create)+'<br>'+escapeHtml(value.route_From)+'</p><p style="float:left;text-align:right;width:46%;font-size:10px;font-weight:600;margin-top:0px;">'+escapeHtml(delivered_Date)+'</br>'+escapeHtml(value.route_To)+'</p><div style="clear:both;"></div></div><div class="text-center m-auto" style="width:75%;height: 10px;position: relative;bottom: 12px;"><div class="p-1 points-dots"></div><div class="progress margin-auto" style="position: relative;height: 0.5rem;"><div class="progress-bar progress-bar-striped progress-bar-animated "style="width:'+escapeHtml(value.event_Status)+'%;background-size: 0.5rem 0.8rem;background-color:#43b54380;background-image: linear-gradient(45deg,rgba(255, 255, 255, 0.82) 25%,#797676c7 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);"></div></div><div class="p-1 points-dots2"></div><div class="current_status_ship" style="font-size: 12px;font-weight: 600;height: 0px;position: relative;bottom: 5px;width: 100%;text-align: center;">Current Status: <span >'+escapeHtml(value.delivered_Status)+'</span></div></div><div class="clear:both;"></div></div><div class="col-md-1 col-sm-1 text-center p-0 imagenotif"><img src="./images/'+alertss+'" style="width:16px;height:16px;margin-top:20px;" class="notif"></div><div style="clear:both"></div></div></div>';             
	      			$(".delivered_shipments").append(shipment_device);
	      			var string_json = [];
	      		////alert(value.shipment_Id);
	      		/*	$.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/getShipmentTransactionDeviceDataLast/"+value.shipment_Id,function(filters){
	      				var filter_length = filters.length;
	      				var value_filter = filters[filter_length - 1];
	      				////alert(sort(value_filter.event_SNo));
	      				var event_sNO = [];
	      				$.each(filters,function(key,value){
	      					event_sNO.push(value.event_SNo);
	      				});
	      				
	      				event_sNO.sort(function(a, b){return b-a});
	      				var event_SNo_c = event_sNO[0];
	      				$.each(filters,function(kew,val){
	      					if(event_SNo_c == val.event_SNo)
	      						{
	      						var status_length = val.event_Name.length;
				             		if(status_length > 15)
				             			{
				             				var font_size = "10";
				             			}else{
				             				var font_size = "12";
				             			}
				             	//	//console.log(val);
	          						var tabletr = "<tr><td>"+val.shipment_Id+"</td><td>"+val.shipment_Num+"</td><td>"+val.device_Id+"</td><td style='font-size:"+font_size+"px;'>"+val.event_Name+"</td><td>"+val.batteryLevel+"</td><td>"+val.mode_of_Transport+"</td><td>"+val.address+"</td></tr>";
	                  				$('#draftTableaa>tbody').append(tabletr); 

	      						}
	      					
	      					});
	      				
	      			});*/
		$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getShipmentTransactionDeviceDataLast/"+value.shipment_Id,
    type : "GET",
    dataType: 'json',
	headers: {
		            'Content-Type' : "application/json",
	        	    'Authorization': localStorage.getItem('SavedToken')
	        	  },
    success:function(filters){
 	var filter_length = filters.length;
	      				var value_filter = filters[filter_length - 1];
	      				////alert(sort(value_filter.event_SNo));
	      				var event_sNO = [];
	      				$.each(filters,function(key,value){
	      					event_sNO.push(value.event_SNo);
	      				});
	      				
	      				event_sNO.sort(function(a, b){return b-a});
	      				var event_SNo_c = event_sNO[0];
	      				$.each(filters,function(kew,val){
	      					if(event_SNo_c == val.event_SNo)
	      						{
	      						var status_length = val.event_Name.length;
				             		if(status_length > 15)
				             			{
				             				var font_size = "10";
				             			}else{
				             				var font_size = "12";
				             			}
				             	//	//console.log(val);
	          						var tabletr = "<tr><td>"+escapeHtml(val.shipment_Id)+"</td><td>"+escapeHtml(val.shipment_Num)+"</td><td>"+escapeHtml(val.device_Id)+"</td><td style='font-size:"+escapeHtml(font_size)+"px;'>"+escapeHtml(val.event_Name)+"</td><td>"+escapeHtml(val.batteryLevel)+"</td><td>"+escapeHtml(val.mode_of_Transport)+"</td><td>"+escapeHtml(val.fromPlant)+"</td><td>"+escapeHtml(val.address)+"</td></tr>";
	                  				$('#draftTableaa>tbody').append(tabletr); 

	      						}
	      					
	      					});
		}
		});

	      			////alert($('#draftTableaa>tbody').html());
	      			////alert(shipment_val);
	      		}
				
	    	});
	      	
	      	/******** Notification ******/
	      	if(window.location.hash == '#CreateShipmentSuccess')
	    	{
	    	    //show the notification
	      		
	      		$('html,body').scrollTop(1000);
	      		$('.live_shipments').scrollTop(100000);
	      		/* $('.live_shipments').animate({
	      	        scrollTop: $(".live_shipments").offset().top - 60
	      	    }, 'slow');*/
	    		/*//alert("success");
	    		var text="hello world";
	    		$("#message_view_T000000050 ").append("<div class='arrow-left'></div><div id='successMessage' style='vertical-align: middle;width: 260px;position: absolute;left: 560px;border: 1px solid #30d4bd80;background: #f6f7f6;margin: 20px;z-index: 1;bottom: 5px;height: 100px;border-radius: 5px;box-shadow: #000000f5 0px 1px 16px;text-align: left;font-size: 12px;font-weight: bold;padding-left: 2%;padding-top: 2%;'>" + text + "</div>");*/
	      	/*	var shipmentid = $.cookie("internalshipment","T000000050");
	      		$(".two_view_"+shipmentid).css({"background":"#ff00008f","color":"#fff"});
	      		$(".two_view_"+shipmentid).append('<div id="CreatedNewShipmentMessage" style="padding-left:30%;"><img src="./images/correct.gif" id="tickimg" style="width:45px;"/> New Shipment Added</div>');
	      		 setTimeout(function (){
	             	$(".two_view_"+shipmentid).css({"background":"#fff","color":"#000"});
	             	$("#CreatedNewShipmentMessage").hide();
	             	var first = $(location).attr('pathname');
	             	window.history.pushState({}, "Title",first );
	             	$.cookie("internalshipment","");
	             	
	             },5000);*/
	      		var shipmentid = $.cookie("internalshipment");
	      		//var shipmentid = "T000000053";
	      		$(".two_view_"+shipmentid).css({"background":"#ff00008f","color":"#fff"});
	      		$(".two_view_"+shipmentid).append('<div id="CreatedNewShipmentMessage" style="padding-left:30%;"><img src="./images/correct.gif" id="tickimg" style="width:45px;"/> New Shipment Added</div>');
	      		 setTimeout(function (){
	             	$(".two_view_"+shipmentid).css({"background":"#fff","color":"#000"});
	             	$("#CreatedNewShipmentMessage").hide();
	             	var first = $(location).attr('pathname');
	             	window.history.pushState({}, "Title",first );
	             	$.cookie("internalshipment","");
	             	
	             },5000);
	      		 
	      		//var first = $(location).attr('pathname');
	      		////alert(first);
	      		//var url = ""+first.split("#")[0];
	      

	      		//var url = window.history.pushState({}, "Title",first );
	      		////alert(url);
	      		/*var url = first.split("#")[0];
	      		//alert(url);*/
	    		
	    	}
	      	if(window.location.hash == '#UpdateShipmentSuccess')
	    	{
	      		var shipmentid = $.cookie("Updateinternalshipment");
	      		//var shipmentid = "T000000050"
	      		$(".body_blur").show();
	      		$("body").append('<div id="CreatedNewShipmentMessage" style="position: absolute;top: 10%;background: #fff;box-shadow: #000 0px 1px 15px;border-radius: 5px;padding: 1%;margin: 11% 35%;z-index: 1;"><img src="./images/correct.gif" id="tickimg" style="width:45px;"/> '+escapeHtml(shipmentid)+' Shipment Event Updated Successfully </div>');
	      		 setTimeout(function (){
	             //	$(".two_view_"+shipmentid).css({"background":"#fff","color":"#000"});
	             	$("#CreatedNewShipmentMessage").hide();
	             	var first = $(location).attr('pathname');
	             	window.history.pushState({}, "Title",first );
	             	$.cookie("Updateinternalshipment","");
	             	$(".body_blur").hide();
	             	
	             },3000);   		
	    	}

		if(window.location.hash == '#CompleteShipmentSuccess')
	    	{
	      		var shipmentid = $.cookie("Completeinternalshipment");
	      		//var shipmentid = "T000000050"
	      			//alert(shipmentid);
	      		$(".body_blur").show();
	      		$("body").append('<div id="CreatedNewShipmentMessage" style="position: absolute;top: 10%;background: #fff;box-shadow: #000 0px 1px 15px;border-radius: 5px;padding: 1%;margin: 11% 35%;z-index: 1;"><img src="./images/correct.gif" id="tickimg" style="width:45px;"/> '+shipmentid+' Shipment Event Completed Successfully </div>');
	      		 setTimeout(function (){
	             //	$(".two_view_"+shipmentid).css({"background":"#fff","color":"#000"});
	             	$("#CreatedNewShipmentMessage").hide();
	             	var first = $(location).attr('pathname');
	             	window.history.pushState({}, "Title",first );
	             	$.cookie("Completeinternalshipment","");
	             	$(".body_blur").hide();
	             	
	             },3000);   		
	    	} 		

	      	mapOnLoad(live_shipmen,"live");
	      /*	$(".delivery_charts").hide();
	      	$(".live_charts").show();*/
	      
			}else{
				$("#loadingimg").hide();
		 		 $(".dashboard_page").show();
				var live_shipmen = '';
				////alert(live_shipmen);
				/*$("#loadingimg").hide();
		 		 $(".dashboard_page").show();*/
				mapOnLoad(live_shipmen,"live");
			}
 }
 
 
 function myFunction() {
 	  points.sort(function(a, b){return b-a});
 	  document.getElementById("demo").innerHTML = points[0];
 	}
 function Deliveryshipments_list(scmid,bpid)
 {
//alert(scmid);
//alert(bpid);
	 //exitShipmentDetails();
 	$(".info").hide();
 	 $(".dashboard_page").hide();
 	    	$(".delivered_shipments").empty();
 	    	$('#draftTable>tbody').empty();
 	    	$("#bottom_map").show();
 	    	$("#loadingimg").show();
 	    	$(".live ").removeClass('btn-primary');
         	$(".delivered ").removeClass('btn-outline-info');
 	    	$(".delivered ").addClass('btn-primary');
         	$(".live ").addClass('btn-outline-info');
       	 var Role = $.session.get('Role');
 		var UserId = $.session.get('UserId');
		var useridsplit = UserId.split('-');
		useridsplit[0].toString();
		useridsplit[0] + "";
		useridsplit[1].toString();
		useridsplit[1] + "";
   	 var bpval = useridsplit[1];
	 var scmval = useridsplit[0];

         	if(Role == "SUPERADMIN"){
    			//alert(Role);
    			//var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsListAll";
var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsListDelivered/"+useridsplit[0]+"/Delivered"
    		}else if(Role == "ADMIN")
    			{
//alert(Role+"hello");
    			//localStorage.getItem("smaasip")+'/SCMXPert/getShipments/'+scmval+'/'+bpval
    			var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsListDelivered/"+useridsplit[0]+"/Delivered"
    				//$("#customer").hide();
    			}else if(Role == "FINANCE")
    			{
    				//localStorage.getItem("smaasip")+'/SCMXPert/getShipments/'+scmval+'/'+bpval
    				var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsList/"+useridsplit[0]
    					//$("#customer").hide();
    				}else{
    					//var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsList/"+useridsplit[0];
    					var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsListDelivered/"+useridsplit[0]+"/Delivered"
    				}

   //     	 $.getJSON(url, function(filter){
////console.log(filter);return false;
        /*		$("#loadingimg").hide();
    		 $(".dashboard_page").show();
             	var live_shipmen = [];
             	var live_shipments = [];
             	var shipMentIDS = [];
             	$.each(filter,function(key,value){
             		////alert(value.wayPoints);
      		      		//alert(value.delivered_Status); 
             		$.each(value,function(keyses,valuese){
             			////alert(keyses);
             		});
             	var alerts = '';
             	if(alerts == "Active")
            		 {	 	var alertss = "alarm.png";
            			 	$(".imagenotif>img").addClass("alaram");
            		 }else{
            			 var alertss = "notification.png";
            			 $(".imagenotif>img").removeClass("alaram");
            		 }
             	var theDate = new Date( Date.parse(value.created_Date));
             	var date_create = theDate.toLocaleDateString();
             	var theDatee = new Date( Date.parse(value.delivered_Date));
             	var delivered_Date = theDatee.toLocaleDateString();
             	var date_string = moment(date_create, "MM/DD/YYYY").format("M-D-YYYY");
      	
/*             theDate.toLocaleString();  // "6/29/2011, 9:52:48 AM"
      	theDate.toLocaleTimeString();  // "9:52:48 AM"
      	theDate.toLocaleDateString();  // "6/29/2011" */
  //      	var shipWayPoints = [];
  //    	var var_length = value.wayPoints.length; 
   //   	 for(i=0;i<=var_length-1;i++){
  //    		 shipWayPoints.push("'"+value.wayPoints[i]+"'");
   //   	    }
   //   	 var getPointsWays = "["+shipWayPoints+"]";
   //   	var ship = [];
////console.log(value);//return false;
  //    	shipMentIDS.push(value.shipment_Id);
   //   	if(value.delivered_Status == "Delivered")
   //   		{
      		

      		
  //    		var var_length = value.wayPoints.length;
	//	if(var_length > 0){
	//alert(var_length);
 //     		var datajhsdf = value.wayPoints[var_length-1];
  //     		var newstr = datajhsdf.join(', ');

  //    		live_shipmen.push(newstr);  
//}
           		
    /*  		ship.push(value.route_From);
      		var status_length = value.delivered_Status.length;

      		if(status_length > 15)
      			{
      				var font_size = "10";
      			}else{
      				var font_size = "12";
      			}
      		$('#draftTableaa>tbody').empty();
      		$('#draftTableaa>tbody>td').css("padding","0px");*/
      		////alert(value.goodl);

     // 		var shipment_device = '<div id="message_view_'+value.shipment_Id+'" class="Message_View"><div class="p-1 m-1 live_shipments_list row two_view_'+value.shipment_Id+'" onclick="javascript:showdatadialogbox(\''+value.shipment_Id+'\',\''+value.shipment_Num+'\',\''+value.device_Id+'\',\''+value.created_Date+'\',\''+value.route_From+'\',\''+value.route_To+'\',\''+value.type_Of_Reference+'\','+getPointsWays+',\''+value.temp+'\');" style="width:98%;border:1px solid black;border-radius:3px;min-height:60px;cursor:pointer;"  ><div class="col-md-5 col-sm-5 p-1"><h6 class="m-0" style="font-size:0.7rem;"><div class="float-left sn-t1">Shipment No.</div><div class="float-left sn-t2">:</div><div class="float-left sn-t3"> '+value.shipment_Num+'</div><div style="clear:both"></div></h6><h6 class="m-0" style="font-size:0.7rem;font-weight:600;"><div class="float-left sn-t1">Internal Id</div><div class="float-left sn-t2">:</div><div class="float-left sn-t3">'+value.shipment_Id+'</div><div style="clear:both"></div></h6><h6 style="font-size:0.7rem;font-weight:600;margin-bottom:0px;"> <div class="float-left sn-t1">Product Name</div><div class="float-left sn-t2">:</div><div class="float-left sn-t3" "> '+value.goods_Desc+'</div><div style="clear:both"></div></h6></div><div class="col-md-6 col-sm-6 pl-0"><div style="width:100%;"><p style="float:left;text-align:left;width:50%;font-size:10px;margin:0px;font-weight:600;margin-top:0px;">'+date_create+'<br>'+value.route_From+'</p><p style="float:left;text-align:right;width:46%;font-size:10px;font-weight:600;margin-top:0px;">'+delivered_Date+'</br>'+value.route_To+'</p><div style="clear:both;"></div></div><div class="text-center m-auto" style="width:75%;height: 10px;position: relative;bottom: 12px;"><div class="p-1 points-dots"></div><div class="progress margin-auto" style="position: relative;height: 0.5rem;"><div class="progress-bar progress-bar-striped progress-bar-animated "style="width:'+value.event_Status+'%;background-size: 0.5rem 0.8rem;background-color:#43b54380;background-image: linear-gradient(45deg,rgba(255, 255, 255, 0.82) 25%,#797676c7 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);"></div></div><div class="p-1 points-dots2"></div><div class="current_status_ship" style="font-size: 12px;font-weight: 600;height: 0px;position: relative;bottom: 5px;width: 100%;text-align: center;">Current Status: <span >'+value.delivered_Status+'</span></div></div><div class="clear:both;"></div></div><div class="col-md-1 col-sm-1 text-center p-0 imagenotif"><img src="./images/'+alertss+'" style="width:16px;height:16px;margin-top:20px;" class="notif"></div><div style="clear:both"></div></div></div>';
     // 			$(".delivered_shipments").append(shipment_device).css({"overflow-y":"auto","max-height": "450px"});
     // 			var string_json = [];
      		////alert(value.shipment_Id);
      	/*		$.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/getShipmentTransactionDeviceData/"+value.shipment_Id,function(filters){
      				var filter_length = filters.length;
      				var value_filter = filters[filter_length - 1];
      				////alert(sort(value_filter.event_SNo));
      				var event_sNO = [];
      				$.each(filters,function(key,value){
      					event_sNO.push(value.event_SNo);
      					/* $.each(value,function(keyssssss,values){
      						//alert(keyssssss);
      					}); */
      	//			});
      				
      //				event_sNO.sort(function(a, b){return b-a});
      				////alert(event_sNO);
      //				var event_SNo_c = event_sNO[0];
      				
      //				$.each(filters,function(kew,val){
      //					if(event_SNo_c == val.event_SNo)
      //						{
      						////alert(kew);
     // 						var status_length = val.event_Name.length;
	//		             		if(status_length > 15)
	//		             			{
	//		             				var font_size = "10";
		//	             			}else{
			//             				var font_size = "12";
			  //           			}
			    //         			//console.log("Delivered");
			      //       			//console.log(val);
          		//				var tabletr = "<tr><td>"+val.shipment_Id+"</td><td>"+val.shipment_Num+"</td><td>"+val.device_Id+"</td><td style='font-size:"+font_size+"px;'>"+val.event_Name+"</td><td>"+val.batteryLevel+"</td><td>"+val.mode_of_Transport+"</td><td>"+val.address+"</td><td>"+val.po_Number+"</td><td>"+val.ndc_Number+"</td><td>"+val.invoice_Number+"</td><td>"+val.shipper_Number+"</td><td>"+val.serial_Number_of_goods+"</td></tr>";
                 // 				$('#draftTableaa>tbody').append(tabletr); */
                  			
                  				//var json_table =    <td>"+val.report_type+"</td><td>"+val.internal_temperature+"<sup style='font-size:8px;font-weight:bold;'>0</sup>"+val.temp_Measurment+"</td>;
                       			             						
    //  						}
      					////alert(tabletr);
      					
   //   				});
      				
      				
      				             				 
    //  			});

   //   		}
	//		});
   //          	$.cookie("shipMentIDSLIST",JSON.stringify(shipMentIDS));
             	//alert(live_shipmen);
   //   	mapOnLoad(shipMentIDS,"delivery");
      	/*$(".live_charts").hide();
      	$(".delivery_charts").show();*/
 //     });*/
 			$.ajax({
    url: url,
    type : "GET",
    dataType: 'json',
	headers: {
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  },
    success:function(filter){
  	$("#loadingimg").hide();
    		 $(".dashboard_page").show();
             	var live_shipmen = [];
             	var live_shipments = [];
             	var shipMentIDS = [];
             	$.each(filter,function(key,value){
             		////alert(value.wayPoints);
      		      		//alert(value.delivered_Status); 
             		$.each(value,function(keyses,valuese){
             			////alert(keyses);
             		});
             	var alerts = '';
             	if(alerts == "Active")
            		 {	 	var alertss = "alarm.png";
            			 	$(".imagenotif>img").addClass("alaram");
            		 }else{
            			 var alertss = "notification.png";
            			 $(".imagenotif>img").removeClass("alaram");
            		 }
             	var theDate = new Date( Date.parse(value.created_Date));
             	var date_create = theDate.toLocaleDateString();
             	var theDatee = new Date( Date.parse(value.delivered_Date));
             	var delivered_Date = theDatee.toLocaleDateString();
             	var date_string = moment(date_create, "MM/DD/YYYY").format("M-D-YYYY");
      	
/*             theDate.toLocaleString();  // "6/29/2011, 9:52:48 AM"
      	theDate.toLocaleTimeString();  // "9:52:48 AM"
      	theDate.toLocaleDateString();  // "6/29/2011" */
        	var shipWayPoints = [];
      	var var_length = value.wayPoints.length; 
      	 for(i=0;i<=var_length-1;i++){
      		 shipWayPoints.push("'"+value.wayPoints[i]+"'");
      	    }
      	 var getPointsWays = "["+shipWayPoints+"]";
      	var ship = [];
////console.log(value);//return false;
      	shipMentIDS.push(value.shipment_Id);
      	if(value.delivered_Status == "Delivered")
      		{
      		

      		
      		var var_length = value.wayPoints.length;
		if(var_length > 0){
	//alert(var_length);
      		var datajhsdf = value.wayPoints[var_length-1];
       		var newstr = datajhsdf.join(', ');

      		live_shipmen.push(newstr);  
}
           		
      		ship.push(value.route_From);
      		var status_length = value.delivered_Status.length;

      		if(status_length > 15)
      			{
      				var font_size = "10";
      			}else{
      				var font_size = "12";
      			}
      		$('#draftTableaa>tbody').empty();
      		$('#draftTableaa>tbody>td').css("padding","0px");
      		////alert(value.goodl);

      		//var shipment_device = '<div id="message_view_'+escapeHtml(value.shipment_Id)+'" class="Message_View"><div class="p-1 m-1 live_shipments_list row two_view_'+escapeHtml(value.shipment_Id)+'" onclick="javascript:showdatadialogbox(\''+escapeHtml(value.shipment_Id)+'\',\''+escapeHtml(value.shipment_Num)+'\',\''+escapeHtml(value.device_Id)+'\',\''+escapeHtml(value.created_Date)+'\',\''+escapeHtml(value.route_From)+'\',\''+escapeHtml(value.route_To)+'\',\''+escapeHtml(value.type_Of_Reference)+'\','+escapeHtml(getPointsWays)+',\''+escapeHtml(value.temp)+'\');" style="width:98%;border:1px solid black;border-radius:3px;min-height:60px;cursor:pointer;"  ><div class="col-md-5 col-sm-5 p-1"><h6 class="m-0" style="font-size:0.7rem;"><div class="float-left sn-t1">Shipment No.</div><div class="float-left sn-t2">:</div><div class="float-left sn-t3"> '+escapeHtml(value.shipment_Num)+'</div><div style="clear:both"></div></h6><h6 class="m-0" style="font-size:0.7rem;font-weight:600;"><div class="float-left sn-t1">Internal Id</div><div class="float-left sn-t2">:</div><div class="float-left sn-t3">'+escapeHtml(value.shipment_Id)+'</div><div style="clear:both"></div></h6><h6 style="font-size:0.7rem;font-weight:600;margin-bottom:0px;"> <div class="float-left sn-t1">Product Name</div><div class="float-left sn-t2">:</div><div class="float-left sn-t3" "> '+escapeHtml(value.goods_Desc)+'</div><div style="clear:both"></div></h6></div><div class="col-md-6 col-sm-6 pl-0"><div style="width:100%;"><p style="float:left;text-align:left;width:50%;font-size:10px;margin:0px;font-weight:600;margin-top:0px;">'+escapeHtml(date_create)+'<br>'+escapeHtml(value.route_From)+'</p><p style="float:left;text-align:right;width:46%;font-size:10px;font-weight:600;margin-top:0px;">'+escapeHtml(delivered_Date)+'</br>'+escapeHtml(value.route_To)+'</p><div style="clear:both;"></div></div><div class="text-center m-auto" style="width:75%;height: 10px;position: relative;bottom: 12px;"><div class="p-1 points-dots"></div><div class="progress margin-auto" style="position: relative;height: 0.5rem;"><div class="progress-bar progress-bar-striped progress-bar-animated "style="width:'+escapeHtml(value.event_Status)+'%;background-size: 0.5rem 0.8rem;background-color:#43b54380;background-image: linear-gradient(45deg,rgba(255, 255, 255, 0.82) 25%,#797676c7 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);"></div></div><div class="p-1 points-dots2"></div><div class="current_status_ship" style="font-size: 12px;font-weight: 600;height: 0px;position: relative;bottom: 5px;width: 100%;text-align: center;">Current Status: <span >'+escapeHtml(value.delivered_Status)+'</span></div></div><div class="clear:both;"></div></div><div class="col-md-1 col-sm-1 text-center p-0 imagenotif"><img src="./images/'+escapeHtml(alertss)+'" style="width:16px;height:16px;margin-top:20px;" class="notif"></div><div style="clear:both"></div></div></div>';
           var shipment_device = '<div id="message_view_'+escapeHtml(value.shipment_Id)+'" class="Message_View"><div class="p-1 m-1 live_shipments_list row two_view_'+escapeHtml(value.shipment_Id)+'" onclick="javascript:showdatadialogbox(\''+escapeHtml(value.shipment_Id)+'\',\''+escapeHtml(value.shipment_Num)+'\',\''+escapeHtml(value.device_Id)+'\',\''+escapeHtml(value.created_Date)+'\',\''+escapeHtml(value.route_From)+'\',\''+escapeHtml(value.route_To)+'\',\''+escapeHtml(value.type_Of_Reference)+'\','+escapeHtml(getPointsWays)+',\''+escapeHtml(value.temp)+'\');" style="width:98%;border:1px solid black;border-radius:3px;min-height:60px;cursor:pointer;"  ><div class="col-md-5 col-sm-5 p-1"><h6 class="m-0" style="font-size:0.7rem;"><div class="float-left sn-t1">Delivery No.</div><div class="float-left sn-t2">:</div><div class="float-left sn-t3"> '+escapeHtml(value.shipment_Num)+'</div><div style="clear:both"></div></h6><h6 class="m-0" style="font-size:0.7rem;font-weight:600;"><div class="float-left sn-t1">Shipment Id</div><div class="float-left sn-t2">:</div><div class="float-left sn-t3">'+escapeHtml(value.shipment_Id)+'</div><div style="clear:both"></div></h6><h6 style="font-size:0.7rem;font-weight:600;margin-bottom:0px;"> <div class="float-left sn-t1">Product Name</div><div class="float-left sn-t2">:</div><div class="float-left sn-t3" "> '+escapeHtml(value.goods_Desc)+'</div><div style="clear:both"></div></h6></div><div class="col-md-6 col-sm-6 pl-0"><div style="width:100%;"><p style="float:left;text-align:left;width:50%;font-size:10px;margin:0px;font-weight:600;margin-top:0px;">'+escapeHtml(date_create)+'<br>'+escapeHtml(value.route_From)+'</p><p style="float:left;text-align:right;width:46%;font-size:10px;font-weight:600;margin-top:0px;">'+escapeHtml(delivered_Date)+'</br>'+escapeHtml(value.route_To)+'</p><div style="clear:both;"></div></div><div class="text-center m-auto" style="width:75%;height: 10px;position: relative;bottom: 12px;"><div class="p-1 points-dots"></div><div class="progress margin-auto" style="position: relative;height: 0.5rem;"><div class="progress-bar progress-bar-striped progress-bar-animated "style="width:'+escapeHtml(value.event_Status)+'%;background-size: 0.5rem 0.8rem;background-color:#43b54380;background-image: linear-gradient(45deg,rgba(255, 255, 255, 0.82) 25%,#797676c7 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);"></div></div><div class="p-1 points-dots2"></div><div class="current_status_ship" style="font-size: 12px;font-weight: 600;height: 0px;position: relative;bottom: 5px;width: 100%;text-align: center;">Current Status: <span >'+escapeHtml(value.delivered_Status)+'</span></div></div><div class="clear:both;"></div></div><div class="col-md-1 col-sm-1 text-center p-0 imagenotif"><img src="./images/'+escapeHtml(alertss)+'" style="width:16px;height:16px;margin-top:20px;" class="notif"></div><div style="clear:both"></div></div></div>';
      			$(".delivered_shipments").append(shipment_device).css({"overflow-y":"auto","max-height": "450px"});
      			var string_json = [];
      		////alert(value.shipment_Id);
      	/*		$.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/getShipmentTransactionDeviceData/"+value.shipment_Id,function(filters){
      				var filter_length = filters.length;
      				var value_filter = filters[filter_length - 1];
      				////alert(sort(value_filter.event_SNo));
      				var event_sNO = [];
      				$.each(filters,function(key,value){
      					event_sNO.push(value.event_SNo);
      					/* $.each(value,function(keyssssss,values){
      						//alert(keyssssss);
      					}); */
     // 				});
     // 				
      //				event_sNO.sort(function(a, b){return b-a});
      				////alert(event_sNO);
      //				var event_SNo_c = event_sNO[0];
      				
      //				$.each(filters,function(kew,val){
     // 					if(event_SNo_c == val.event_SNo)
      //						{
      						////alert(kew);
    //  						var status_length = val.event_Name.length;
		//	             		if(status_length > 15)
		//	             			{
		//	             				var font_size = "10";
		//	             			}else{
		//	             				var font_size = "12";
		//	             			}
		//	             			//console.log("Delivered");
		//	             			//console.log(val);
        //  						var tabletr = "<tr><td>"+val.shipment_Id+"</td><td>"+val.shipment_Num+"</td><td>"+val.device_Id+"</td><td style='font-size:"+font_size+"px;'>"+val.event_Name+"</td><td>"+val.batteryLevel+"</td><td>"+val.mode_of_Transport+"</td><td>"+val.address+"</td><td>"+val.po_Number+"</td><td>"+val.ndc_Number+"</td><td>"+val.invoice_Number+"</td><td>"+val.shipper_Number+"</td><td>"+val.serial_Number_of_goods+"</td></tr>";
        //          				$('#draftTableaa>tbody').append(tabletr); 
                  			
                  				//var json_table =    <td>"+val.report_type+"</td><td>"+val.internal_temperature+"<sup style='font-size:8px;font-weight:bold;'>0</sup>"+val.temp_Measurment+"</td>;
                       			             						
      //						}
      					////alert(tabletr);
      					
      //				});
      				
      				
      				             				 
      	//		});*/
		$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getShipmentTransactionDeviceData/"+value.shipment_Id,
    type : "GET",
    dataType: 'json',
	headers: {
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  },
    success:function(filters){
  var filter_length = filters.length;
      				var value_filter = filters[filter_length - 1];
      				////alert(sort(value_filter.event_SNo));
      				var event_sNO = [];
      				$.each(filters,function(key,value){
      					event_sNO.push(value.event_SNo);
      					/* $.each(value,function(keyssssss,values){
      						//alert(keyssssss);
      					}); */
      				});
      				
      				event_sNO.sort(function(a, b){return b-a});
      				////alert(event_sNO);
      				var event_SNo_c = event_sNO[0];
      				
      				$.each(filters,function(kew,val){
      					if(event_SNo_c == val.event_SNo)
      						{
      						////alert(kew);
      						var status_length = val.event_Name.length;
			             		if(status_length > 15)
			             			{
			             				var font_size = "10";
			             			}else{
			             				var font_size = "12";
			             			}
			             			//console.log("Delivered");
			             			//console.log(val);
          						var tabletr = "<tr><td>"+escapeHtml(val.shipment_Id)+"</td><td>"+escapeHtml(val.shipment_Num)+"</td><td>"+escapeHtml(val.device_Id)+"</td><td style='font-size:"+font_size+"px;'>"+escapeHtml(val.event_Name)+"</td><td>"+escapeHtml(val.batteryLevel)+"</td><td>"+escapeHtml(val.mode_of_Transport)+"</td><td>"+escapeHtml(val.fromPlant)+"</td><td>"+escapeHtml(val.address)+"</td><td>"+escapeHtml(val.po_Number)+"</td><td>"+escapeHtml(val.ndc_Number)+"</td><td>"+escapeHtml(val.invoice_Number)+"</td><td>"+escapeHtml(val.shipper_Number)+"</td><td>"+escapeHtml(val.serial_Number_of_goods)+"</td></tr>";
                  				$('#draftTableaa>tbody').append(tabletr); 
                  			
                  				//var json_table =    <td>"+val.report_type+"</td><td>"+val.internal_temperature+"<sup style='font-size:8px;font-weight:bold;'>0</sup>"+val.temp_Measurment+"</td>;
                       			             						
      						}
      					////alert(tabletr);
      					
      				});
      				
      				
      				             				 
      			}
			});
             	$.cookie("shipMentIDSLIST",JSON.stringify(shipMentIDS));
             	//alert(live_shipmen);
      	mapOnLoad(shipMentIDS,"delivery");
      	/*$(".live_charts").hide();
      	$(".delivery_charts").show();*/
      }
		});
		}
		
 });
 }


 function clearLine() {
     jg.clear();
 }
 function getTimeZone() {
	    return /\((.*)\)/.exec(new Date().toString())[1];
	}
 function getgraph(dataPoints_temp,dataPoints_humi,device_id,shipment_num,temp) {

	 //console.log(temp);
	 var tempvalue = temp.split("-");
	// alert(tempvalue[0]);
	var lower =parseInt(tempvalue[0])
	//alert(lower*(-5));
	// alert(tempvalue[1]);
 	//alert(temp);
	    chart = new CanvasJS.Chart("chartContainer",{
	    
	    	animationEnabled: true,
	    	zoomEnabled: true,
	    	theme: "light2",
	    	exportEnabled: true,
	    	//exportFileName: "CMAAS",
	    	  exportFileName: "SMAAS",
	        title:{
	            text:"Shipment Quality Parameters",
                fontSize:20
	        },
	        
	        axisY:{
	        	/*scaleBreaks: {
	    			customBreaks: [{
	    				spacing: 5,
	    				startValue: 30,
	    				endValue: 35
	    			}]
	    		},*/
	        
	        	stripLines: [/*{
	              	value: tempvalue[0]-2,
	              	lineDashType: "longDash",
	              	thickness: 1,
	              	color:"#51cda0"
	            },{
	              	value: tempvalue[0],
	              	lineDashType: "dash",
	              	thickness: 1,
	              	color:"#51cda0"
	            },*/{
	              	value:tempvalue[0],
	              	lineDashType: "dash",
	              	thickness: 1,
	              	color:"red"
	            },/*{
	              	value: 37,
	              	lineDashType: "longDash",
	              	thickness: 1,
	              	color:"#6d78ad"
	            },{
	              	value: 39,
	              	lineDashType: "dash",
	              	thickness: 1,
	              	color:"#6d78ad"
	            },*/{
	              	value: tempvalue[1].replace("c",""),
	              	lineDashType: "dash",
	              	thickness: 1,
	              	color:"red"
	            }],
	        
	        	 viewportMinimum: -20,
	        	   viewportMaximum: 50,
	        
	        	/* scaleBreaks: {
	        			customBreaks: [{
	        				startValue: 50,
	        				endValue: 80,
	        				color: "orange"
	        			}]
	        		    },*/
	        	//includeZero: false,
	        	        	/*crosshair: {
	    			enabled: true
	    		},*/
	        	     /* minimum: -30,
	        	      maximum: 100*/
	        	     },
	        	     
	        axisX:{ 
	        	
	        	title:getTimeZone(),
	        	horizontalAlign: "right", // left, center ,right 
	           // verticalAlign: "bottom",
	        	labelMaxWidth: 60,
	        	//lineColor:"red",
	        	//includeZero: false,
	        	// xValueType: "dateTime",
	        	/*interval: 36,
	        	intervalType:"hour",*/
	        	/*labelFormatter: function(e){
	        		alert(e.value)
					return  e.value;  stripvalues(dataPoints_humi)
				},*/
	        	//horizontalAlign:"right",
				valueFormatString: "hh:mm tt DD-MMM    YYYY ",
				labelAutoFit: true,
	        	//valueFormatString: "####",
	        	//logarithmic: true,stripvalues(dataPoints_humi)
	        /*	stripLines: [{
	    			value: stripvalues(dataPoints_humi),
	    			label: "Point Rise",
	    			labelFontColor: "#808080",
	    			labelAlign: "far",
	    			labelBackgroundColor:"yellow",
	    			labelPlacement:"inside"
	    		}],*/
	    		
	    		stripLines: stripvalues(dataPoints_humi,dataPoints_temp,temp),
	    	
	        	 labelFontSize: 10,
	        	 labelFontWeight: "bold",
	        	labelAngle: 180,
	        	labelAlign:"center",
	        	
	    		crosshair: {
	    			enabled: true,
	    			snapToDataPoint: true
	    		}
	        	//gridThickness: 2,
	        	//valueFormatString: "DD MMM-hh:mm tt"
	        	//valueFormatString: "DD MMM"   type1DataPoints(dataPoints_humi)  type1DataPoints1(dataPoints_temp)
	        },
	        toolTip:{
	    		
	        /*	contentFormatter: function (e) {
	                var content = "";
	                for (var i = 0; i < e.entries.length; i++){
	                  content = CanvasJS.formatDate(e.entries[i].dataPoint.x, "HH-mm-ss MM/DD/YYYY");       
	                }       
	                return content;
	              },*/
	        	contentFormatter: function (e) {
					var content = " ";
					content += "<strong><text>Time-Date</text> : "+escapeHtml(convert(e.entries[0].dataPoint.x))+"</strong>";
					content += "<br/>";
					content += "<strong><text style='color:red;'>Device-Id</text> : "+escapeHtml(device_id)+" </strong>";
					content += "<br/>";
				//	content += "<strong><text style='color:#945564;'>Shipment-Number</text> : "+escapeHtml(shipment_num)+"</strong> ";
					content += "<strong><text style='color:#945564;'>Delivery-Number</text> : "+escapeHtml(shipment_num)+"</strong> ";
					content += "<br/>";
					content += "<strong><text style='color:#ff0000;'>Threshold</text> : "+escapeHtml(temp)+"</strong> ";
					content += "<br/>";					
					for (var i = 0; i < e.entries.length; i++) {
						if(e.entries[i].dataSeries.name == "Temperature(C)"){
							content += "<strong><text style='color:#51cda0;'>"+e.entries[i].dataSeries.name + "</text> :" + "<strong>" + e.entries[i].dataPoint.y +' '+e.entries[i].dataSeries.yValueFormatString+ "</strong>";
							content += "<br/>";
						}else{
							content += "<strong><text style='color:blue;'>"+e.entries[i].dataSeries.name + "</text> :" + "<strong>" + e.entries[i].dataPoint.y +' '+e.entries[i].dataSeries.yValueFormatString+ "</strong>";
							content += "<br/>";
						}
						
					}
					return content;
				},
	              shared: true
	    	},
	        legend:{
	    		cursor: "pointer",
	    		fontSize: 14,
	    		horizontalAlign: "right", // left, center ,right 
	            verticalAlign: "top",
	    		itemclick: toggleDataSeries,           
	    	},
	    	
	        data: [
	    	{
	    	  //name: "Humidity(%H)",
	    		name: "Address",
	    		type: "line",	    		
	    		markerType: "circle",
	    		xValueFormatString: "hh:mm TT DD-MMM-YY ",
	    		//yValueFormatString: "%",
	    		yValueFormatString: "",
	    		showInLegend: true,
	    		dataPoints:  type1DataPoints(dataPoints_humi)	    		
	    	},{
	    		name: "Temperature(C)",
	    		type: "line",
	    		 markerType: "circle",
	    		 xValueFormatString: "hh:mm TT DD-MMM-YY ",
	    		yValueFormatString: "C",
	    		showInLegend: true,
	    		dataPoints: type1DataPoints1(dataPoints_temp,temp)
	    	},{
	    	  //name: "Humidity(%H)",
	    		name: "Threshold",
	    		type: "line",	    		
	    		markerType: "circle",
	    		xValueFormatString: "hh:mm TT DD-MMM-YY ",
	    		//yValueFormatString: "%",
	    		yValueFormatString: "",
	    		showInLegend: true,
	    		dataPoints:  type1DataPoints(dataPoints_humi[0])	    		
	    	}]
	        
	    });
	    chart.render();
	    
 }
 function stripvalues(step,step1,temp){
	 //console.log("hello");
	 ////console.log(step);
	 var dataPoints = [];
		//var h;
		/*for(var w = .01; w < 100 ; w *= step){
			h =  -5 * Math.log(w*w + 1);
			dataPoints.push({x: w, y: h});
		}*/
		$.each(step,function(key,valuee){
			//alert(value.y);
			/*if(valuee.y > 70){
				//alert(valuee.x)
				dataPoints.push({value:new Date(valuee.x),color:"#6d78ad",label: valuee.y+" %" ,labelFontSize:10,labelFontColor: "#6d78ad",thickness:1,labelAlign: "far",labelPlacement:"inside"});	
				
			}else if(valuee.y < 40){
				//alert(valuee.y);
				dataPoints.push({value:new Date(valuee.x),color:"#6d78ad",label: valuee.y+" %",labelFontSize:10,labelFontColor: "#6d78ad",thickness:1,labelAlign: "near",labelPlacement:"inside"});
			}*/
			/*$.each(value,function(key1,valuee){
				alert(valuee);
			});*/

		});
		var tempvalue = temp.split("-");
		
		$.each(step1,function(key,valuee){
			//alert(value.y);
			/*if(valuee.y > tempvalue[1]){
				//alert(valuee.x)
				dataPoints.push({value:new Date(valuee.x),color:"#51cda0",label: valuee.y+" F",labelFontSize:9,labelFontColor: "#51cda0",thickness:1,labelAlign: "far",labelPlacement:"inside"});	
				
			}else if(valuee.y < tempvalue[0]){
				//alert(valuee.y);
				dataPoints.push({value:new Date(valuee.x),color:"#51cda0",label: valuee.y+" F",labelFontSize:9,labelFontColor: "#51cda0",thickness:1,labelAlign: "near",labelPlacement:"inside"});
			}*/
			/*$.each(value,function(key1,valuee){
				alert(valuee);
			});*/

		});
		//console.log(dataPoints);
		return dataPoints
 }
 
 function type1DataPoints(step){
		var dataPoints = [];
		//var h;
		/*for(var w = .01; w < 100 ; w *= step){
			h =  -5 * Math.log(w*w + 1);
			dataPoints.push({x: w, y: h});
		}*/
		$.each(step,function(key,value){
			//alert(value.y);
			if(value.y > 70){
				dataPoints.push({x: new Date(value.x), y: value.y,markerColor: "red", markerType: "triangle",markerSize: 8,  });	
			}else if(value.y < 40){
				dataPoints.push({x: new Date(value.x), y: value.y,markerColor: "red", markerType: "cross",markerSize: 6,  });
			}else{
				dataPoints.push({x: new Date(value.x), y: value.y});	
			}
			/*$.each(value,function(key1,valuee){
				alert(valuee);
			});*/

		});
		//console.log(dataPoints);
		return dataPoints
	}
 function type1DataPoints1(step,temp){
		var dataPoints = [];
		//var h;
		/*for(var w = .01; w < 100 ; w *= step){
			h =  -5 * Math.log(w*w + 1);
			dataPoints.push({x: w, y: h});
		}*/	var tempvalue = temp.split("-");
		$.each(step,function(key,value){
			//alert(value.x);
			if(value.y > tempvalue[1].replace("c","")){
                dataPoints.push({x: new Date(value.x), y: value.y, markerColor: "red", markerType: "cross",markerSize: 3,  });   
            }else if(value.y < tempvalue[0]){
                dataPoints.push({x: new Date(value.x), y: value.y,markerColor: "red", markerType: "cross",markerSize: 3,  });
            }else{
                dataPoints.push({x: new Date(value.x), y: value.y});   
            }
			
			
				
			/*$.each(value,function(key1,valuee){
				alert(valuee);
			});*/

		});
		return dataPoints
	}
 function convert(str) {
     var month, day, year, hours, minutes, seconds;
     var shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
     var date = new Date(str),
         month = shortMonths[date.getMonth()],
         day = ("0" + date.getDate()).slice(-2),
    ttime =  formatAMPM(date);
   /*  hours = ("0" + formatAMPM(date.getHours())).slice(-1),
     minutes = ("0" + date.getMinutes()).slice(-2),
     seconds = ("0" + date.getSeconds()).slice(-2);*/

     var mySQLDate = [ day, month,date.getFullYear()].join("-");
     var mySQLTime = [hours, minutes, seconds].join(":");
     return [ ttime,mySQLDate].join(" ");
 }
 function formatAMPM(date) {
	  var hours = date.getHours();
	  var minutes = date.getMinutes();
	  var seconds = ("0" + date.getSeconds()).slice(-2);
	  var ampm = hours >= 12 ? 'PM' : 'AM';
	  hours = hours % 12;
	  hours = hours ? hours : 12; // the hour '0' should be '12'
	  hours = hours < 10 ? '0'+hours : hours;
	  minutes = minutes < 10 ? '0'+minutes : minutes;
	  var strTime = hours + ':' + minutes + ':' +seconds+''+ ampm;
	  return strTime;
	}
/* function convert(str) {
	    var date = new Date(str),
	        mnth = ("0" + (date.getMonth()+1)).slice(-2),
	        day  = ("0" + date.getDate()).slice(-2);
	        hours  = ("0" + date.getHours()).slice(-2);
	        minutes = ("0" + date.getMinutes()).slice(-2);
	    return [ date.getFullYear(), mnth, day, hours, minutes ].join("-");
	}*/
 function toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		chart.render();
	}
 function getmaproutelist(shipment_id)
 {
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
 	var bpval = $("#bpi_idchange").val();
	 	var scmval = $("#scmid").val();
	 	$('#showmap').empty();
	 	//$('.showmap').empty();
	 	$("#home").hide();
		$("#loadingimg1,#map_menu1").show();
		
		 var Role = $.session.get('Role');
		if(Role == "SUPERADMIN"){
			
			var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsListAll";
		}else if(Role == "ADMIN")
			{
			//localStorage.getItem("smaasip")+'/SCMXPert/getShipments/'+scmval+'/'+bpval
			var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsList/"+useridsplit[0]
			//$("#customer").hide();
			}else if(Role == "FINANCE")
			{
				//localStorage.getItem("smaasip")+'/SCMXPert/getShipments/'+scmval+'/'+bpval
				var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsList/"+useridsplit[0]
					//$("#customer").hide();
				}else{
					var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsListAll";
				}
/* 	 $.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsListByShipment_Id/"+shipment_id, function(filter){
 		 ////console.log(filter[0].route_From);

 			 		$("#loadingimg1").hide();
 			 		$("#showmap").html('<div id="map"></div>');
              		var shipWayPoints = [];
                  	var var_length = filter[0].wayPoints.length; 
                  	 for(i=0;i<=var_length-1;i++){
                  		 shipWayPoints.push(""+filter[0].wayPoints[i]+"");
                  	    }

              			//mapPointsRoute(filter[0].route_From,filter[0].route_To,shipWayPoints);
                  	mapPointsRoute(shipWayPoints,shipment_id);
                         	 
 		
 	 });*/
		$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsListByShipment_Id/"+shipment_id,
    type : "GET",
    dataType: 'json',
	headers: {
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  },
    success:function(filter){
 	 ////console.log(filter[0].route_From);

 			 		$("#loadingimg1").hide();
 			 		$("#showmap").html('<div id="map"></div>');
              		var shipWayPoints = [];
                  	var var_length = filter[0].wayPoints.length; 
                  	 for(i=0;i<=var_length-1;i++){
                  		 shipWayPoints.push(""+filter[0].wayPoints[i]+"");
                  	    }

              			//mapPointsRoute(filter[0].route_From,filter[0].route_To,shipWayPoints);
                  	mapPointsRoute(shipWayPoints,shipment_id);
                         	 
 		
 	 }
 });
}
 function showdatadialogbox(shipment_Id,shipment_Num,device_Id,created_Date,route_From,route_To,typeofreference,getPointsWays,temp)
 {
	 // <th>Internal Temp.</th>
	 $(".loadnfilterbutton").css("margin","4px 0px");
	 $.cookie("setTemp_"+shipment_Id,temp);
	 $("#home_info").removeClass("active").addClass("active");
	 $("#mapShowInfoTab,#data_info,#data_info_docs").removeClass("active");
	 $
     $("#data_info").attr("onclick","javascript:getTotalData('"+shipment_Id+"')");
     $("#data_info_docs").attr("onclick","javascript:getData('"+shipment_Id+"')");
	 $("#chartContainer").html();
	 $("#home").show();
	 $("#map_menu1,#data_menu2,#data_menu_docs").hide();
//	 $(".showtabledatainshipment").html('<button id="listoffilters" class="bg-color" style="color:#fff;font-size: 12px;font-weight: 700;color: #fff;border-radius: 3px;float: right;margin-top: 1px;" onclick="javascript:return showSelectTableValues(\''+escapeHtml(shipment_Id)+'\');">View More</button><div style="clear:both;"></div><div id="transcationtable" style="width:100%;height:160px;float:left;overflow-y:auto;"><table class="table table-striped table-bordered draftTableaa" id="shipmentdatalistshow" style="overflow-x:auto;font-size:11px;"><thead class="bg-color" style="color:white;"><tr><th>Shipment No.</th><th>Device Id</th><th>Event Name</th><th>Partner Name </th><th>Event Status</th><th>Date</th><th>Mode Of Transport</th></tr></thead><tbody></tbody></table></div>');
	 $(".showtabledatainshipment").html('<button id="listoffilters" class="bg-color" style="color:#fff;font-size: 12px;font-weight: 700;color: #fff;border-radius: 3px;float: right;margin-top: 1px;" onclick="javascript:return showSelectTableValues(\''+escapeHtml(shipment_Id)+'\');">View More</button><div style="clear:both;"></div><div id="transcationtable" style="width:100%;height:160px;float:left;overflow-y:auto;"><table class="table table-striped table-bordered draftTableaa" id="shipmentdatalistshow" style="overflow-x:auto;font-size:11px;"><thead class="bg-color" style="color:white;"><tr><th>Delivery No.</th><th>Device Id</th><th>Event Name</th><th>Partner Name </th><th>Event Status</th><th>Updated By</th><th>Date</th><th>Mode Of Transport</th></tr></thead><tbody></tbody></table></div>');
 	$(".info").hide();
 	$(".shipment_name").empty();
 	$(".showmap").hide();
		var attr_val = $('.two_view_'+shipment_Id).attr("onclick");
 	$("#bottom_map,.download").hide();
 	$("#mapShowInfoTab").removeAttr("onclick");
 	$("#mapShowInfoTab").attr("onclick","javascript:getmaproutelist('"+shipment_Id+"')");
 	//$(".info").show();
 	//mapPointsRoute(route_From,route_To,getPointsWays);
	mapPointsRoute(getPointsWays,shipment_Id);
 	var dataPoints_temp = [];
 	var dataPoints_humi = [];
 	var device_Idpoints = [];
 	var shipment_Idpoints = [];
 	
 	//   https://www.smaas.live:8080/SCMXPert/getDeviceDataTemp/T00000005"
/*		$.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/getDeviceDataTemp/"+shipment_Id,function(filterspoints){
			var latlong = [];
 	$.each(filterspoints, function(key, value){
 			var theDate = new Date( Date.parse(value.utc));
 			//console.log(value.utc);
 			//console.log(theDate);
 	      	var date_create = theDate.toLocaleString();
 	      	/*var sdf = value.utc
 	      	sdf.sort(function(a,b){
 	      	  // Turn your strings into dates, and then subtract them
 	      	  // to get a value that is either negative, positive, or zero.
 	      	  return new Date(b.date) - new Date(a.date);
 	      	});*/
 	      	/*Temparature and address*/
 	//      	//console.log(new Date(theDate)+","+parseFloat(value.internal_Temperature)+","+value.device_Id);
 	//     	dataPoints_temp.push({x: value.utc, y: parseFloat(value.internal_Temperature)});
 	      	//dataPoints_humi.push({x: value.utc, y: parseFloat(value.humidity)});
 	//      	dataPoints_humi.push({x: value.utc, y: value.address});
  
 	      	
 	//	        latlong.push(value.longitude+','+value.latitude);
 	//	       device_Idpoints.push(value.device_Id);
 	//	      shipment_Idpoints.push(value.shipment_Num);
 		        
 		   
 	
 //	 });
 
 //	 window.onload = getgraph(dataPoints_temp,dataPoints_humi,device_Idpoints[0],shipment_Idpoints[0],temp);
//		});*/
				$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getDeviceDataTemp/"+shipment_Id,
    type : "GET",
    dataType: 'json',
	headers: {
		       'Content-Type' : "application/json",
		   	   'Authorization': localStorage.getItem('SavedToken')
},
	
    success:function(filterspoints){
  			var latlong = [];
 	$.each(filterspoints, function(key, value){
 			var theDate = new Date( Date.parse(value.utc));
 			//console.log(value.utc);
 			//console.log(theDate);
 	      	var date_create = theDate.toLocaleString();
 	      	/*var sdf = value.utc
 	      	sdf.sort(function(a,b){
 	      	  // Turn your strings into dates, and then subtract them
 	      	  // to get a value that is either negative, positive, or zero.
 	      	  return new Date(b.date) - new Date(a.date);
 	      	});*/
 	      	/*Temparature and address*/
 	      	//console.log(new Date(theDate)+","+parseFloat(value.internal_Temperature)+","+value.device_Id);
 	      	dataPoints_temp.push({x: value.utc, y: parseFloat(value.internal_Temperature)});
 	      	//dataPoints_humi.push({x: value.utc, y: parseFloat(value.humidity)});
 	      	dataPoints_humi.push({x: value.utc, y: value.address});
  
 	      	
 		        latlong.push(value.longitude+','+value.latitude);
 		       device_Idpoints.push(value.device_Id);
 		      shipment_Idpoints.push(value.shipment_Num);
 		        
 		   
 	
 	 });
 
 	 window.onload = getgraph(dataPoints_temp,dataPoints_humi,device_Idpoints[0],shipment_Idpoints[0],temp);
}
		});
/*		$.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/getShipmentTransactionhistory/"+shipment_Id,function(filters){
			$('#shipmentdatalistshow>tbody').empty();
			var event_sNO = []; 
			var partner_From = [];
			var shipment_Num = [];
			var device_Id = [];
			$.each(filters,function(key,value){
				event_sNO.push(value.event_SNo);
				partner_From.push(value.partner_From);
				shipment_Num.push(value.shipment_Num);
				device_Id.push(value.device_Id);
			});
			$(".shortsMenu_update_complete").html('<button class="btn bg-color btn-head updateEventBtn" id="updateEventBtn" onclick="javascript:updateEvent(\''+shipment_Id+'\',\''+partner_From[0]+'\',\''+shipment_Num[0]+'\',\''+device_Id[0]+'\',\''+typeofreference+'\');" style=" font-size:11px;margin:2px;padding:0px 25px;height: 25px;line-height: 5px;">Update Event</button><button class="btn bg-color btn-head completdEvent"  id="completdEvent" onclick="javascript:CompleteShipment(\''+shipment_Id+'\',\''+partner_From[0]+'\',\''+shipment_Num[0]+'\',\''+device_Id[0]+'\',\''+typeofreference+'\');" style=" font-size:11px;margin:2px;padding:1px 8px;height: 25px;line-height: 5px;">Complete Shipment</button><button class="btn bg-color btn-head" style=" font-size:11px;margin:2px;width: 55px;float:left;height: 25px;line-height: 5px;" onclick="javascript:return exitShipmentDetails();">Exit</button><button class="btn bg-color btn-head" style=" font-size:11px;margin:2px;width: 60px;float:left;height: 25px;line-height: 5px;" onclick="javascript:return sendmailshare(\''+shipment_Id+'\');">Share</button><span style="clear:both;"></span>');
			//onclick="javascript:return sendmailshare(\''+shipment_Id+'\');"
			event_sNO.sort(function(a, b){return a-b});
			var eventlist_status =[];
			for(i=0;i<event_sNO.length;i++)
				{
				
					var event_num = event_sNO[i];
	 				$.each(filters,function(kew,val){
	 				//	//console.log(val);
	 					//console.log(event_num);
	 		 					if(event_num == val.event_SNo)
	 		 						{
	 		 						var status_length = val.event_Name.length;
	 			             		if(status_length > 15)
	 			             			{
	 			             				var font_size = "10";
	 			             			}else{
	 			             				var font_size = "12";
	 			             			}
	 			             		if(val.event_Exec_Date){
				             			var date_Time = dateFormat(val.event_Exec_Date, "dd-mmm-yyyy");
				             		}else{
				             			var date_Time = '';
				             		}
	 			             		/*var dateTime = new Date( Date.parse(val.event_Exec_Date));  ondblclick="javascript:TableViewDataTranscation(\''+val_data+'\');  <td>'+val.internal_temperature+'<sup style="font-size:8px;font-weight:bold;">0</sup>F</td>
	 		                    	var date_Time = dateTime.toLocaleString();*/
	// 			             		var val_data = val.altitude;
	// 		     						var tabletr = '<tr><td class="ShipmentNumber">'+val.shipment_Num+'</td><td class="">'+val.device_Id+'</td><td style="font-size:'+font_size+'px;">'+val.event_Name+'</td><td>'+val.partner_From+'</td><td>'+val.event_Status+'</td><td>'+date_Time+'</td><td>'+val.mode_of_Transport+'</td></tr>';
	//		     						//console.log(tabletr);
	// 		             				$('#shipmentdatalistshow>tbody').append(tabletr); 
	 //		             				eventlist_status.push(val.event_Status);
	 		             				
	 //		 						} 
	 		 					/*var dsklfjlsd = '["'+val.shipment_Num+'","'+val.device_Id+'","'+val.event_Name+'","'+val.partner_From+'"]';
	 		 					//console.log(dsklfjlsd)
	 		 					//$(".checkbox").find('[value=' + dsklfjlsd.join('], [value=') + ']').prop("checked", true);
	 		 					$.each(dsklfjlsd, function(i, val){*/

	 		 					  

	 		 					/*});*/
	 		 					
	// 		 				});
	 				
	//			}
//			$("input[name='filterList']").prop('checked',false);
//			$("input[value='shipment_Num']").prop('checked', true);
//			 $("input[value='device_Id']").prop('checked', true);
//			$("input[value='event_Name']").prop('checked', true);
//			$("input[value='partner_From']").prop('checked', true);
//			$("input[value='event_Status']").prop('checked', true);
//			$("input[value='event_Exec_Date']").prop('checked', true);
//			$("input[value='mode_of_Transport']").prop('checked', true);
			////alert(shipment_Id);
//			var lenghtEvents = eventlist_status.length;
//			if(eventlist_status[lenghtEvents-2] == "Completed"){
//				$(".updateEventBtn").removeClass("btn-head bg-color").attr("onclick",false).css({"border":"1px solid black","font-weight":"bold"});
//			}
//			if(eventlist_status[lenghtEvents-2] != "Completed"){
//				$(".completdEvent").removeClass("btn-head bg-color").attr("onclick",false).css({"border":"1px solid black","font-weight":"bold"});
//			}
//			if(eventlist_status[lenghtEvents-1] == "Completed"){
//				$(".completdEvent").removeClass("btn-head bg-color").attr("onclick",false).css({"border":"1px solid black","font-weight":"bold"});
//			}
//			var shipment = $(".two_view_"+shipment_Id).html();
//			$(".shipment_name").html("<div class='row' style='margin:0px;'>"+shipment+"</div>");
//			var selHeaderCookie = $.cookie("showtableHead_"+shipment_Id);
//				var selbodyCookie = $.cookie("showtableBody_"+shipment_Id);
				////alert(selHeaderCookie);
				//var string = 'a,b,c,d',
//			    strx   = selbodyCookie.split(',');
//			    array  = [];

//			tablebodsysdf = array.concat(strx);
//				if(selHeaderCookie == undefined || selbodyCookie == undefined)
//					{
					////alert("hello");
					//$("input[name='filterList']").prop('checked',false);
//					 $("input[value='shipment_Num']").prop('checked', true);
//					 $("input[value='device_Id']").prop('checked', true);
//					$("input[value='event_Name']").prop('checked', true);
//					$("input[value='partner_From']").prop('checked', true);
//					$("input[value='event_Status']").prop('checked', true);
//					$("input[value='event_Exec_Date']").prop('checked', true);
//					$("input[value='mode_of_Transport']").prop('checked', true);
					////alert(selHeaderCookie);
					
//					}else if(selHeaderCookie == '' || selbodyCookie == ''){
						//$("input[name='filterList']").prop('checked',false);
//						 $("input[value='shipment_Num']").prop('checked', true);
//						 $("input[value='device_Id']").prop('checked', true);
//						$("input[value='event_Name']").prop('checked', true);
//						$("input[value='partner_From']").prop('checked', true);
//						$("input[value='event_Status']").prop('checked', true);
//						$("input[value='event_Exec_Date']").prop('checked', true);
//						$("input[value='mode_of_Transport']").prop('checked', true);
						
						////alert(selHeaderCookie);
						//SaveFiltersListBtn(shipment_Id);
//					}else{
//						var skdf = tablebodsysdf.length;
						////alert(skdf);
						/* $("input[value='shipment_Num']").prop('checked', true);
						 $("input[value='device_Id']").prop('checked', true);
						$("input[value='event_Name']").prop('checked', true);
						$("input[value='partner_From']").prop('checked', true);
						$("input[value='event_Status']").prop('checked', true);*/
//						SaveFiltersPreviousListBtn(shipment_Id);
//					}
				
			//$("#shipmentdatalistshow").DataTable();
//		});*/

				$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getShipmentTransactionhistory/"+shipment_Id,
    type : "GET",
    dataType: 'json',
	headers: {
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  },
    success:function(filters){
	$('#shipmentdatalistshow>tbody').empty();
			var event_sNO = []; 
			var partner_From = [];
			var shipment_Num = [];
			var device_Id = [];
			var plant =[];
			$.each(filters,function(key,value){
				event_sNO.push(value.event_SNo);
				partner_From.push(value.partner_From);
				shipment_Num.push(value.shipment_Num);
				device_Id.push(value.device_Id);
				plant.push(value.plant);
			});
			$(".shortsMenu_update_complete").html('<button class="btn bg-color btn-head updateEventBtn" id="updateEventBtn" onclick="javascript:updateEvent(\''+shipment_Id+'\',\''+partner_From[0]+'\',\''+shipment_Num[0]+'\',\''+device_Id[0]+'\',\''+typeofreference+'\',\''+plant[0]+'\');" style=" font-size:11px;margin:2px;padding:0px 25px;height: 25px;line-height: 5px;">Update Event</button><button class="btn bg-color btn-head completdEvent"  id="completdEvent" onclick="javascript:CompleteShipment(\''+shipment_Id+'\',\''+partner_From[0]+'\',\''+shipment_Num[0]+'\',\''+device_Id[0]+'\',\''+typeofreference+'\');" style=" font-size:11px;margin:2px;padding:1px 8px;height: 25px;line-height: 5px;">Complete Shipment</button><button class="btn bg-color btn-head" style=" font-size:11px;margin:2px;width: 55px;float:left;height: 25px;line-height: 5px;" onclick="javascript:return exitShipmentDetails();">Exit</button><button class="btn bg-color btn-head" style=" font-size:11px;margin:2px;width: 60px;float:left;height: 25px;line-height: 5px;" onclick="javascript:return sendmailshare(\''+shipment_Id+'\');">Share</button><span style="clear:both;"></span>');
			//onclick="javascript:return sendmailshare(\''+shipment_Id+'\');"
			event_sNO.sort(function(a, b){return a-b});
			var eventlist_status =[];
			
			let eventNamesWithStatus = new Map();
///			for(i=0;i<event_sNO.length;i++)
///				{
				
					var event_num = event_sNO[i];
	 				$.each(filters,function(kew,val){
	 				///console.log(val);
	 					//console.log(event_num);
	 	///	 					if(event_num == val.event_SNo)
	 	///	 						{
	 		 						var status_length = val.event_Name.length;
	 			             		if(status_length > 15)
	 			             			{
	 			             				var font_size = "10";
	 			             			}else{
	 			             				var font_size = "12";
	 			             			}
	 			             		if(val.event_Exec_Date){
				             			var date_Time = dateFormat(val.event_Exec_Date, "dd-mmm-yyyy");
				             		}else{
				             			var date_Time = '';
				             		}
	 			             		/*var dateTime = new Date( Date.parse(val.event_Exec_Date));  ondblclick="javascript:TableViewDataTranscation(\''+val_data+'\');  <td>'+val.internal_temperature+'<sup style="font-size:8px;font-weight:bold;">0</sup>F</td>
	 		                    	var date_Time = dateTime.toLocaleString();*/
	 			             		var val_data = val.altitude;
	 		     						var tabletr = '<tr><td class="ShipmentNumber">'+escapeHtml(val.shipment_Num)+'</td><td class="">'+escapeHtml(val.device_Id)+'</td><td style="font-size:'+font_size+'px;">'+escapeHtml(val.event_Name)+'</td><td>'+escapeHtml(val.partner_From)+'</td><td>'+escapeHtml(val.event_Status)+'</td><td>'+escapeHtml(val.partner)+'</td><td>'+escapeHtml(date_Time)+'</td><td>'+escapeHtml(val.mode_of_Transport)+'</td></tr>';
	 		     						//console.log(tabletr);
	 		             				$('#shipmentdatalistshow>tbody').append(tabletr); 
	 		             				eventlist_status.push(val.event_Status);
	 		             				eventNamesWithStatus.set(val.event_Name, val.event_Status);
	 	///	 						} 
	 		 					/*var dsklfjlsd = '["'+val.shipment_Num+'","'+val.device_Id+'","'+val.event_Name+'","'+val.partner_From+'"]';
	 		 					//console.log(dsklfjlsd)
	 		 					//$(".checkbox").find('[value=' + dsklfjlsd.join('], [value=') + ']').prop("checked", true);
	 		 					$.each(dsklfjlsd, function(i, val){*/

	 		 					  

	 		 					/*});*/
	 		 					
	 		 				});
	 				
	///			}
			$("input[name='filterList']").prop('checked',false);
			$("input[value='shipment_Num']").prop('checked', true);
			 $("input[value='device_Id']").prop('checked', true);
			$("input[value='event_Name']").prop('checked', true);
			$("input[value='partner_From']").prop('checked', true);
			$("input[value='event_Status']").prop('checked', true);
			$("input[value='event_Exec_Date']").prop('checked', true);
			$("input[value='mode_of_Transport']").prop('checked', true);
			////alert(shipment_Id);
			if(sessionStorage.getItem("Role") == "BUSINESSPARTNER")
            {
            var accessArray = sessionStorage.getItem("RoleList").split(",");
            if(!accessArray.includes("UpdateEvent"))
            {
                $('#updateEventBtn').removeClass('bg-color');
             $('#updateEventBtn').removeClass('btn-head');
              $('#updateEventBtn').attr('onclick', 'false');
              $('#updateEventBtn').css("border", "1px solid black");
            }
            if(!accessArray.includes("CompleteShipment"))
            {
                $('#completdEvent').removeClass('bg-color');
             $('#completdEvent').removeClass('btn-head');
              $('#completdEvent').attr('onclick', 'false');
              $('#completdEvent').css("border", "1px solid black");
            }
	}		
			
			var lenghtEvents = eventlist_status.length;
				///		alert(lenghtEvents);
				///		alert(eventlist_status);
/*			if(eventlist_status[lenghtEvents-2] == "Completed" && eventlist_status[lenghtEvents-3] == "Completed"){
				$(".updateEventBtn").removeClass("btn-head bg-color").attr("onclick",false).css({"border":"1px solid black","font-weight":"bold"});
			}
			if(eventlist_status[lenghtEvents-2] != "Completed" && eventlist_status[lenghtEvents-2] == "Completed"){
				$(".completdEvent").removeClass("btn-head bg-color").attr("onclick",false).css({"border":"1px solid black","font-weight":"bold"});
			}
			if(eventlist_status[lenghtEvents-1] == "Completed"){
				$(".completdEvent").removeClass("btn-head bg-color").attr("onclick",false).css({"border":"1px solid black","font-weight":"bold"});
			}
		    if(eventlist_status[lenghtEvents-2] == "Completed" && eventlist_status[lenghtEvents-3] == "Initialized"){
				$(".completdEvent").removeClass("btn-head bg-color").attr("onclick",false).css({"border":"1px solid black","font-weight":"bold"});
			}*/
let eventArray = [];
            eventNamesWithStatus.forEach((value, key) => {
       //         console.log(key, value);
                
                if(key == "Goods Receipt")
                {
                    if(value == "Completed")
                    {
                        $(".completdEvent").removeClass("btn-head bg-color").attr("onclick",false).css({"border":"1px solid black","font-weight":"bold"});
                    }
                }
                else
                {
                    if(value == "Initialized" || value == "Queued")
                    {
                        eventArray.push(value);
                    }
                }
            });
            
            if(eventArray.length == 0)
            {
                $(".updateEventBtn").removeClass("btn-head bg-color").attr("onclick",false).css({"border":"1px solid black","font-weight":"bold"});
            }
						
			var shipment = $(".two_view_"+shipment_Id).html();
			$(".shipment_name").html("<div class='row' style='margin:0px;'>"+shipment+"</div>");
			var selHeaderCookie = $.cookie("showtableHead_"+shipment_Id);
				var selbodyCookie = $.cookie("showtableBody_"+shipment_Id);
				////alert(selHeaderCookie);
				//var string = 'a,b,c,d',
			    strx   = selbodyCookie.split(',');
			    array  = [];

			tablebodsysdf = array.concat(strx);
				if(selHeaderCookie == undefined || selbodyCookie == undefined)
					{
					////alert("hello");
					//$("input[name='filterList']").prop('checked',false);
					 $("input[value='shipment_Num']").prop('checked', true);
					 $("input[value='device_Id']").prop('checked', true);
					$("input[value='event_Name']").prop('checked', true);
					$("input[value='partner_From']").prop('checked', true);
					$("input[value='event_Status']").prop('checked', true);
					$("input[value='event_Exec_Date']").prop('checked', true);
					$("input[value='mode_of_Transport']").prop('checked', true);
					////alert(selHeaderCookie);
					
					}else if(selHeaderCookie == '' || selbodyCookie == ''){
						//$("input[name='filterList']").prop('checked',false);
						 $("input[value='shipment_Num']").prop('checked', true);
						 $("input[value='device_Id']").prop('checked', true);
						$("input[value='event_Name']").prop('checked', true);
						$("input[value='partner_From']").prop('checked', true);
						$("input[value='event_Status']").prop('checked', true);
						$("input[value='event_Exec_Date']").prop('checked', true);
						$("input[value='mode_of_Transport']").prop('checked', true);
						
						////alert(selHeaderCookie);
						//SaveFiltersListBtn(shipment_Id);
					}else{
						var skdf = tablebodsysdf.length;
						////alert(skdf);
						/* $("input[value='shipment_Num']").prop('checked', true);
						 $("input[value='device_Id']").prop('checked', true);
						$("input[value='event_Name']").prop('checked', true);
						$("input[value='partner_From']").prop('checked', true);
						$("input[value='event_Status']").prop('checked', true);*/
						SaveFiltersPreviousListBtn(shipment_Id);
					}
				
			//$("#shipmentdatalistshow").DataTable();
		}
		});
	$("#addChangeFilterList").attr("onclick","javascript:showSelectTableValues('"+shipment_Id+"');");
	$(".CreateShipment ").css({"padding":"0.1rem 0.1rem"});
	$(".delivered ").css({"font-size":"0.8rem"});
	$(".Zebra_DatePicker_Icon_Wrapper").css({"width":"80.6094px"});
///	$(".delivery_text").text("Delivery NO.");
	$(".current_status_ship").css({"font-size":"0.6rem"});
	$(".sn-t1").css({"width":"70px"});
	$(".show_hide_icon").trigger("click")
	$(".live_shipments").css({"height":"620px"});
	$(".live_shipments_list >div >h6").css({"font-size":"0.6rem"});
	

	$(".live_shipments > .Message_View > .live_shipments_list> .col-md-5").css({"font-size":"0.6rem"});
	$(".leftSideContent").addClass("col-md-4").removeClass("col-md-5").css({"transition-property":" all","transition-duration":"0.5s"});
	$(".rightSideContent").removeClass("col-md-7").addClass("col-md-8");
	//$(".shipment_name > .row > div.col-md-5 >h6").css({"font-size":"0.7rem"});
	$(".shipment_name > .row > .col-md-5").addClass("side1");
	$(".side1").removeClass("col-md-5").addClass("col-md-4");
	$(".side1>h6").css({"font-size":"0.7rem"});
	$(".side1>h6>.sn-t1").css({"width":"80px"});
	$(".info").fadeIn("slow");

	
 }
 function sendmailshare(shipment_Id)
 {
	$("#backgroundBlur").fadeIn();
	 $('.mailviewer').fadeIn().css({"width":"95%","height":"90%","margin":"2%","position":"absolute","z-index":"9999999999","top":"1%","background":"#fff"});
	 var element = $("#transcationtable");
	 var element1 = $("#chartContainer");
	 //element.css({"background":"#000"});
	// var sdkfsdf = $("#transcationtable").html();
	 //$("#previewImage").prepend(sdkfsdf);
	 //var getCanvas;
	 var filename = shipment_Id;
	 var tabledata = $("#shipmentdatalistshow").tableToJSON();
	 var sdklfsdlk = JSON.stringify(tabledata);
	 html2canvas(element, {
		 dpi: 10000,
         onrendered: function (canvas) {
        	 var imageData = canvas.toDataURL("image/png").replace('image/jpeg', 'image/octet-stream');
        	 $.ajax({
        	        url:localStorage.getItem("smaasip")+'/SCMXPert/saveCanvasImage',
        	        data:{imageBase64: imageData,filename:shipment_Id},
        	        type: 'post',
        	        dataType: 'json',
					headers: {
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  },
        	        timeout: 10000,
        	        async: false,
        	        error: function(){
        	            //console.log("WOOPS");
        	        },
        	        success: function(res){
        	        	
        	            if(res.ret==0){
        	                //console.log("SUCCESS");
        	                $("#previewImage").prepend('<img src="D:/SCM/images/'+filename+'.png"/>');
        	            }else{
        	                //console.log("FAIL : " + res.msg);
        	            }
        	        }
        	    });
/*             var pHtml = "<img src="+image+" />";
        	 //console.log(Canvas2Image.saveAsPNG(canvas));*/
             //$("#previewImage").prepend(pHtml);
             }
         });
	 //var sdlkfjsdsxklfsfl = chart.exportChart({format: "jpg"});
//	 //alert(sdlkfjsdsxklfsfl);
	 html2canvas(element1, {
		 dpi: 10000,
         onrendered: function (canvas) {
        	 var imageData = canvas.toDataURL("image/png").replace('image/jpeg', 'image/octet-stream');
        	/* $.ajax({
        	        url:localStorage.getItem("smaasip")+'/SCMXPert/saveCanvasGraphImage',
        	        data:{imageBase64: imageData,filename:shipment_Id},
        	        type: 'post',
        	        dataType: 'json',
        	        timeout: 10000,
        	        async: false,
        	        error: function(){
        	            //console.log("WOOPS");
        	        },
        	        success: function(res){
        	        	
        	            if(res.ret==0){
        	                //console.log("SUCCESS");
        	                $("#previewImage").prepend('<img src="./Shipment_Data/Graph/'+filename+'.png"/>');
        	            }else{
        	                //console.log("FAIL : " + res.msg);
        	            }
        	        }
        	    });*/
             var pHtml = "<img src="+imageData+" />";
        	/* //console.log(Canvas2Image.saveAsPNG(canvas));*/
             $("#previewImage1").prepend(pHtml);
             }
         });
	 /*var filename = shipment_Id;
	 html2canvas(element).then(function(canvas){
		    // canvas width
		    var canvasWidth = canvas.width;
		    // canvas height
		    var canvasHeight = canvas.height;
		    // render canvas
		    $('.toCanvas').after(canvas);
		    // show 'to image' button
		    $('.toPic').show(1000);
		    // convert canvas to image
		    
		      var img = Canvas2Image.convertToImage(canvas, canvasWidth, canvasHeight);
		      // render image
		      $(".toPic").after(img);
		      // save
	
		        let type = $('#sel').val(); // image type
		        let w = $('#imgW').val(); // image width
		        let h = $('#imgH').val(); // image height
		        let f = shipment_Id; // file name
		        w = (w === '') ? canvasWidth : w;
		        h = (h === '') ? canvasHeight : h;
		        // save as image
		       var image = Canvas2Image.saveAsImage(canvas, w, h, type, f);

		     
		  
	 });*/
	 
	  /*var imgageData = element.toDataURL("image/png");
	    // Now browser starts downloading it instead of just showing it
	    var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");*/
	   /* $("#imageview").attr("src", newData);*/
	 $(".mailviewer").html('<input type="text" name="email" id="emailviewsend" /><div id="previewImage"><a href="#" id="download">Download</a></div><div id="previewImage1"></div><div class="emailtemplateview" style="display:none;">'+sdklfsdlk+'</div><button onclick="javascript:return emailsubmitsender();">Send</button>');
	 
	// $('.emailtemplateview').append('<	 type="text/javascript">function JSONToCSVConvertor(ReportTitle, ShowLabel){var JSONData = $(".emailtemplateview").text();var arrData = typeof JSONData != "object" ? JSON.parse(JSONData) : JSONData;var CSV = "";if (ShowLabel) {var row = "";for (var index in arrData[0]) {row += index + ",";}row = row.slice(0, -1);CSV += row + "\r\n";}for(var i = 0; i < arrData.length; i++){var row = "";for(var index in arrData[i]){row += '"' + arrData[i][index] + '",';}row.slice(0, row.length - 1);CSV += row + "\r\n";}if (CSV == ""){//alert("Invalid data");return;}var fileName = "MyReport_";fileName += ReportTitle.replace(/ /g,"_");var uri = "data:text/csv;charset=utf-8," + escape(CSV);var link = document.createElement("a");link.href = uri;link.style = "visibility:hidden";link.download = fileName + ".csv";document.body.appendChild(link);link.click();document.body.removeChild(link);}</script>');
	 JSONToCSVConvertor("transcationtable","true");
 }
 function graphimage(k)
 {
	 //alert(k);
 }
 function b64toBlob(b64Data, contentType, sliceSize) {
	  contentType = contentType || '';
	  sliceSize = sliceSize || 512;

	  var byteCharacters = atob(b64Data);
	  var byteArrays = [];

	  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
	    var slice = byteCharacters.slice(offset, offset + sliceSize);

	    var byteNumbers = new Array(slice.length);
	    for (var i = 0; i < slice.length; i++) {
	      byteNumbers[i] = slice.charCodeAt(i);
	    }

	    var byteArray = new Uint8Array(byteNumbers);

	    byteArrays.push(byteArray);
	  }
	    
	  var blob = new Blob(byteArrays, {type: contentType});
	  return blob;
	}
 function ConvertToCSV(objArray) {
	 var objArray = $(".emailtemplateview").text();
     var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
     var str = '';

     for (var i = 0; i < array.length; i++) {
         var line = '';
         for (var index in array[i]) {
             if (line != '') line += ','

             line += array[i][index];
         }

         str += line + '\r\n';
     }

     return str;
 }
 function JSONToCSVConvertor(ReportTitle, ShowLabel) {
	 ////alert("hjsdgf");
	    //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
	 var JSONData = $(".emailtemplateview").text();
	    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
	    
	    var CSV = '';    
	    //Set Report title in first row or line
	    
	   // CSV += ReportTitle + '\r\n\n';

	    //This condition will generate the Label/Header
	    if (ShowLabel) {
	        var row = "";
	        
	        //This loop will extract the label from 1st index of on array
	        for (var index in arrData[0]) {
	            
	            //Now convert each value to string and comma-seprated
	            row += index + ',';
	        }

	        row = row.slice(0, -1);
	        
	        //append Label row with line break
	        CSV += row + '\r\n';
	    }
	    
	    //1st loop is to extract each row
	    for (var i = 0; i < arrData.length; i++) {
	        var row = "";
	        
	        //2nd loop will extract each column and convert it in string comma-seprated
	        for (var index in arrData[i]) {
	            row += '"' + arrData[i][index] + '",';
	        }

	        row.slice(0, row.length - 1);
	        
	        //add a line break after each row
	        CSV += row + '\r\n';
	    }

	    if (CSV == '') {        
	        //alert("Invalid data");
	        return;
	    }   
	    
	    //Generate a file name
	    var fileName = "MyReport_";
	    //this will remove the blank-spaces from the title and replace it with an underscore
	    fileName += ReportTitle.replace(/ /g,"_");   
	    
	    //Initialize file format you want csv or xls
	    //console.log("hello "+CSV);
	    var uri = 'data:text/csv;' + CSV;
	    
	    // Now the little tricky part.
	    // you can use either>> window.open(uri);
	    // but this will not work in some browsers
	    // or you will not get the correct file extension    
	    
	    //this trick will generate a temp <a /> tag
	    //var link = document.createElement("a");    
	    //link.href = uri;
	    var link = document.getElementById("download");
	    link.href = uri;
	    
	    //set the visibility hidden so it will not effect on your web-layout
	    //link.style = "visibility:hidden";
/*	    //console.log(fileName);
	    //alert(fileName);*/
	    link.download = "D:/SCM/images/"+fileName + ".csv";
	    
	    //this part will append the anchor tag and remove it after automatic click
	   // document.body.appendChild(link);
	    ////alert(link);
	    $("#download").attr("href",link);
	    //console.log(link);
	    //link.click();
	   
	    //document.body.removeChild(link);
	}
 function emailsubmitsender()
 {
	 var token = $.session.get('Token');
	 var email = $("#emailviewsend").val()
	 var emilview = $("#previewImage").html();
	 var subject = "Shipment Content";
	 var data = {'to':email,'content':emilview,'subject':subject};

	 //console.log(JSON.stringify(data));
	 $.ajax({
		url: localStorage.getItem("smaasip")+"/SCMXPert/MailSender",
	///	url: localStorage.getItem("MailUrl"),
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
//	 $.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/MailSender/"+email+'/'+subject+'/'+emilview,function(response){
//		 //alert(response);
//	 });
 }
 function updateEvent(shp_id,bp_id,shipment_Num,device_Id,typeofreference,plant)
 {
 	$.cookie("shp_id", shp_id);
		$.cookie("shipment_Num",shipment_Num);
		$.cookie("device_Id",device_Id);
		$.cookie("typeofreference",typeofreference);
		$.cookie("plant",plant);
     window.location.href = "UpdateShipmentEvent.jsp";        	
 }
 function CompleteShipment(shp_id,bp_id,shipment_Num,device_Id,typeofreference)
 {
 	$.cookie("shp_id", shp_id);
 	$.cookie("shipment_Num",shipment_Num);
		$.cookie("device_Id",device_Id);
		$.cookie("typeofreference",typeofreference);
		typeofreference
     window.location.href = "CompleteShipment.jsp";
 }
 function TableViewDataTranscation(val)
 {
	 	$('.showviewdata').show();
 	$("body").css("overflow","hidden");
 	$("#backgroundBlur").show();
 }

 function showdetailslist(shipment_Id,device_id,utc_time,from,to,viewpoints)
 {
 	$(".info").hide();
 	$('.live_shipments_list ').removeClass("showlistcard");
 	$(".two_view_"+shipment_Id).addClass("showlistcard");
/* 	  $.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/getShipmentTransactionDeviceData/"+shipment_Id,function(filter){
 		  //console.log(filter);
 		  $('#draftTable>tbody').empty();
 		  $.each(filter,function(key,value){
 			  var tabletr = "<tr><td>"+value.shipment_Num+"</td><td>"+value.device_Id+"</td><td>"+value.event_Name+"</td><td>"+value.report_type+"</td><td>"+value.internal_temperature+"<sup style='font-size:8px;font-weight:bold;'>0</sup>"+value.temp_Measurment+"</td><td>"+value.bat+"</td><td>"+value.mode_of_Transport+"</td></tr>";
 			  $('#draftTable>tbody').append(tabletr);
 		  });
 		  
 	  });	*/ 
		$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getShipmentTransactionDeviceData/"+shipment_Id,
    type : "GET",
    dataType: 'json',
	headers: {
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  },
    success:function(filter){
 	  //console.log(filter);
 		  $('#draftTable>tbody').empty();
 		  $.each(filter,function(key,value){
 			  var tabletr = "<tr><td>"+escapeHtml(value.shipment_Num)+"</td><td>"+escapeHtml(value.device_Id)+"</td><td>"+escapeHtml(value.event_Name)+"</td><td>"+escapeHtml(value.report_type)+"</td><td>"+escapeHtml(value.internal_temperature)+"<sup style='font-size:8px;font-weight:bold;'>0</sup>"+escapeHtml(value.temp_Measurment)+"</td><td>"+escapeHtml(value.bat)+"</td><td>"+escapeHtml(value.mode_of_Transport)+"</td></tr>";
 			  $('#draftTable>tbody').append(tabletr);
 		  });
 		  
 	  }
		});
     $(".showmap > div").remove();
 	$(".showmap").html('<div id="map"></div>');
     L.mapquest.key = 'hNGkuW6RQrAmAPmQ6MKrUr0iJKrzgQwM';

     var map = L.mapquest.map('map', {
       center: [0,0],
       layers: L.mapquest.tileLayer('map'),
       zoom: 12
     });

     L.mapquest.directions().route({
       start:  '"'+from+'"',
       end: '"'+to+'"',
       waypoints: viewpoints
     });  
 }
 function checkdropdownlist(scmid,bpid,name){
	$.ajax({
    url: localStorage.getItem("smaasip")+'/SCMXPert/getFiltersData/'+scmid,
   "method": "GET",
  "timeout": 0,
	crossDomain : true,
	        	//dataType: "json",
	        	headers: {
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  },
    success:function(filter){
     	$.each(filter,function(key,value){
			 
			if(key == "plant")
				{
					$.each(value,function(keyss,valuess){
						var selectfromPlant = '<option value="'+escapeHtml(valuess)+'">'+escapeHtml(valuess)+'</option>';
						$("#plantName").append(selectfromPlant);
					})
				}
			 
			 
			if(key == "device_Id")
				{
					$.each(value,function(keys,values){
						var selectdevices = '<option value="'+escapeHtml(values)+'">'+escapeHtml(values)+'</option>';
						$("#devices").append(selectdevices);
					})
				}
				if(key == "departments")
				{
					$.each(value,function(keyss,valuess){
						var selectdept = '<option value="'+escapeHtml(valuess)+'">'+escapeHtml(valuess)+'</option>';
						$("#departments").append(selectdept);
					})
				}
			    if(key == "event_Name")
				{
					$.each(value,function(keyss,valuess){
						var selecteventName = '<option value="'+escapeHtml(valuess)+'">'+escapeHtml(valuess)+'</option>';
						$("#eventName").append(selecteventName);
					})
				}
				if(key == "goods")
				{
					var goodlist = [];
					$.each(value,function(keys,values){
						if($.inArray(values.goods_Item, goodlist) != -1)
							{$(this).remove();}else{
								goodlist.push(values.goods_Item);
							}
					});
					 $.each(goodlist,function(key,value){
						var select_device_Id_items = '<option value="'+escapeHtml(value)+'">'+escapeHtml(value)+'</option>';
						$("#selectgoods").append(select_device_Id_items)
					}); 
				}

			});
      }
		});
}
 function changebpid(scmid,bpid)
 {

 /*	 $.getJSON(localStorage.getItem("smaasip")+'/SCMXPert/getFiltersData/'+scmid, function(filter){
      	$.each(filter,function(key,value){
			if(key == "device_Id")
				{
					$.each(value,function(keys,values){
						var selectdevices = '<option value="'+values+'">'+values+'</option>';
						$("#devices").append(selectdevices);
					})
				}
				if(key == "departments")
				{
					$.each(value,function(keyss,valuess){
						var selectdept = '<option value="'+valuess+'">'+valuess+'</option>';
						$("#departments").append(selectdept);
					})
				}
				if(key == "goods")
				{
					var goodlist = [];
					$.each(value,function(keys,values){
						if($.inArray(values.goods_Item, goodlist) != -1)
							{$(this).remove();}else{
								goodlist.push(values.goods_Item);
							}
					});
					 $.each(goodlist,function(key,value){
						var select_device_Id_items = '<option value="'+value+'">'+value+'</option>';
						$("#selectgoods").append(select_device_Id_items)
					}); 
				}
			});
      });*/
//console.log(token)
		$.ajax({
    url: localStorage.getItem("smaasip")+'/SCMXPert/getFiltersData/'+scmid,
   "method": "GET",
  "timeout": 0,
	crossDomain : true,
	        	//dataType: "json",
	        	headers: {
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  },
    success:function(filter){
     	$.each(filter,function(key,value){
			if(key == "device_Id")
				{
					$.each(value,function(keys,values){
						var selectdevices = '<option value="'+escapeHtml(values)+'">'+escapeHtml(values)+'</option>';
						$("#devices").append(selectdevices);
					})
				}
/*				if(key == "departments")
				{
					$.each(value,function(keyss,valuess){
						var selectdept = '<option value="'+escapeHtml(valuess)+'">'+escapeHtml(valuess)+'</option>';
						$("#departments").append(selectdept);
					})
				}*/
			    if(key == "event_Name")
				{
					$.each(value,function(keyss,valuess){
						var selecteventName = '<option value="'+escapeHtml(valuess)+'">'+escapeHtml(valuess)+'</option>';
						$("#eventName").append(selecteventName);
					})
				}
				if(key == "goods")
				{
					var goodlist = [];
					$.each(value,function(keys,values){
						if($.inArray(values.goods_Item, goodlist) != -1)
							{$(this).remove();}else{
								goodlist.push(values.goods_Item);
							}
					});
					 $.each(goodlist,function(key,value){
						var select_device_Id_items = '<option value="'+escapeHtml(value)+'">'+escapeHtml(value)+'</option>';
						$("#selectgoods").append(select_device_Id_items)
					}); 
				}
				
			if(key == "plant")
				{
					$.each(value,function(keyss,valuess){
						var selectfromPlant = '<option value="'+escapeHtml(valuess)+'">'+escapeHtml(valuess)+'</option>';
						$("#plantName").append(selectfromPlant);
					})
				}
					
			});
      }
		});
	  /***   Get Data for Shipments through web services  ***  End***/
	//	liveshipments_list(scmid,bpid);
 
}
 function find_in_object(my_object,my_criteria){
 	return my_object.filter(function(obj) {
 	    return Object.keys(my_criteria).every(function(c) {
 	      return obj[c] == my_criteria[c];
 	    });
 	  });
 }
 
 function showSelectTableValues(shipment_id)
 {
 	////alert(shipment_id);
 $(".listoffilters,#backgroundBlur").show();
 $("#SaveFiltersListBtn").attr("onclick","javascript:SaveFiltersListBtn('"+escapeHtml(shipment_id)+"')");
 }
function SaveFiltersListBtn(shipment_id)
{
	////alert("hai jaisai");
	////alert(shipment_id);
	var selHeaderCookie = $.cookie("showtableHead_"+shipment_id);
	var selbodyCookie = $.cookie("showtableBody_"+shipment_id);

	if(selHeaderCookie == undefined || selbodyCookie == undefined)
		{
		var selHeader = $("input[name='filterList']:checked").map(function(_, el) {
			 return $(el).next("label").text();
			}).get();
			var selbody = $("input[name='filterList']:checked").map(function(_, el) {
			 return $(el).val();
			}).get();
			/*//alert(selHeader);
			//alert(selbody);*/
		}else if(selHeaderCookie == '' || selbodyCookie == ''){
			/*var selHeader = $.cookie("showtableHead_"+shipment_id);
			var selbody = $.cookie("showtableBody_"+shipment_id);*/
			var selHeader = $("input[name='filterList']:checked").map(function(_, el) {
				 return $(el).next("label").text();
				}).get();
				var selbody = $("input[name='filterList']:checked").map(function(_, el) {
				 return $(el).val();
				}).get();
		}else{
			var selHeader = $("input[name='filterList']:checked").map(function(_, el) {
				 return $(el).next("label").text();
				}).get();
				var selbody = $("input[name='filterList']:checked").map(function(_, el) {
				 return $(el).val();
				}).get();
			/*var selHeader = $.cookie("showtableHead_"+shipment_id);
			var selbody = $.cookie("showtableBody_"+shipment_id);*/
			
			  /* strx   = selHeaderCookie.split(',');
			   stry   = selbodyCookie.split(',');
			    array  = [];

			    selHeader = array.concat(strx);
			    selbody = array.concat(stry);*/
			    ////alert("hello"+selbody);
			    $("input[name='filterList']").prop('checked',false);
			    for(var i=0;i<selbody.length;i++)
			    	{
			    	////alert("pollo"+selbody[i]);
			    	 $("input[value='"+selbody[i]+"']").prop('checked', true);
			    	}
		
		}
	//console.log()
	
/*	//alert(selHeader);
	
	return false;*/

/*//console.log(selbody);
//console.log(selHeader);

var selHeader = $.cookie("showtableHead_"+shipment_id);
var selbody = $.cookie("showtableBody_"+shipment_id);
//alert(sdjfk)
return false;*/

$('#shipmentdatalistshow>tbody').empty();
/*$.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/getShipmentTransactionhistory/"+shipment_id,function(filters){
	////console.log(filters);
//	return false;
//	//alert(shipment_id);
//	//alert(shipment_id+"  "+"fghfhtkjgfdbhkjgdbfghjnbdjgbhjftjgbhjftbghkjd hhbg");
//	//alert(filters)
//		$('#shipmentdatalistshow>tbody').empty();
		var event_sNO = []; 
		var partner_From = [];
		var shipment_Num = [];
		var device_Id = [];
		$.each(filters,function(key,value){
			event_sNO.push(value.event_SNo);
			partner_From.push(value.partner_From);
			shipment_Num.push(value.shipment_Num);
			device_Id.push(value.device_Id);
		});
		event_sNO.sort(function(a, b){return a-b});
		for(i=0;i<event_sNO.length;i++)
			{
				var event_num = event_sNO[i];
				$.each(filters,function(kew,val){
		 					if(event_num == val.event_SNo)
		 						{
		 						var status_length = val.event_Name.length;
			             		if(status_length > 15)
			             			{
			             				var font_size = "8";
			             			}else{
			             				var font_size = "10";
			             			}
			             		var dateTime = new Date( Date.parse(val.utc));
		                    	var date_Time = dateTime.toLocaleString();
			             		var val_data = val.altitude;
		             				var tableHeader = []
		             				$.each(selHeader,function(key,headervalue){
		             					var tableHeadervalue = "<th>"+headervalue+"</th>";
		             					tableHeader.push(tableHeadervalue);
		             				});
		             				var tablebody = []
		             				$.each(selbody,function(key,bodyvalue){
		             					$.each(val,function(k,v){
		             						
		             						if(k == bodyvalue){
		             							var tablebodyvalue = "<td>"+v+"</td>";
		 		             					tablebody.push(tablebodyvalue);
		             						}
		             					})
		             				});
		             				//console.log(tableHeader);
		             				////alert(selHeader)
		             				//return false;
		             				$.cookie("showtableHead_"+shipment_id,selHeader)
		             				$.cookie("showtableBody_"+shipment_id,selbody)
		             				$('#shipmentdatalistshow>thead>tr').empty().html(tableHeader);
		             				$('#shipmentdatalistshow>tbody').append('<tr>'+tablebody+'</tr>');
		             				
		             				//var list ='<tr>'+tableHeader+'<th> <span id="addChangeFilterList"></span></th>'+tablebody+'</tr>';
		             			//	//console.log("listoihjgdf srughvjkrghre "+list)
									//$('#shipmentdatalistshow>thead').empty();  '<tr>'+tableHeader+'<th> <span id="addChangeFilterList"></span></th>'+tablebody+'</tr>'
	             				//$('#shipmentdatalistshow>thead').html('<tr>'+tableHeader+'<th> <span id="addChangeFilterList"></span></th></tr>'); 
		             				//$('#shipmentdatalistshow>thead>tbody').append.html('<tr>'+tableHeader+'<th> <span id="addChangeFilterList"></span></th>'+tablebody+'</tr>');
							} 
		 				});
				//$('#shipmentdatalistshow>thead>tr').append(tableHeader);
 				//$('#shipmentdatalistshow>tbody').append('<tr>'+tablebody+'</tr>');
			}
		var shipment = $(".two_view_"+shipment_id).html();
		$(".shipment_name").html("<div class='row'>"+shipment+"</div>");
		$("#addChangeFilterList").attr("onclick","javascript:showSelectTableValues('"+shipment_id+"');");

	});*/
			$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getShipmentTransactionhistory/"+shipment_id,
    type : "GET",
    dataType: 'json',
	headers: {
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  },
    success:function(filters){
   	////console.log(filters);
//	return false;
//	//alert(shipment_id);
//	//alert(shipment_id+"  "+"fghfhtkjgfdbhkjgdbfghjnbdjgbhjftjgbhjftbghkjd hhbg");
//	//alert(filters)
//		$('#shipmentdatalistshow>tbody').empty();
		var event_sNO = []; 
		var partner_From = [];
		var shipment_Num = [];
		var device_Id = [];
		$.each(filters,function(key,value){
			event_sNO.push(value.event_SNo);
			partner_From.push(value.partner_From);
			shipment_Num.push(value.shipment_Num);
			device_Id.push(value.device_Id);
		});
		event_sNO.sort(function(a, b){return a-b});
		for(i=0;i<event_sNO.length;i++)
			{
				var event_num = event_sNO[i];
				$.each(filters,function(kew,val){
		 					if(event_num == val.event_SNo)
		 						{
		 						var status_length = val.event_Name.length;
			             		if(status_length > 15)
			             			{
			             				var font_size = "8";
			             			}else{
			             				var font_size = "10";
			             			}
			             		var dateTime = new Date( Date.parse(val.utc));
		                    	var date_Time = dateTime.toLocaleString();
			             		var val_data = val.altitude;
		             				var tableHeader = []
		             				$.each(selHeader,function(key,headervalue){
		             					var tableHeadervalue = "<th>"+headervalue+"</th>";
		             					tableHeader.push(tableHeadervalue);
		             				});
		             				var tablebody = []
		             				$.each(selbody,function(key,bodyvalue){
		             					$.each(val,function(k,v){
		             						
		             						if(k == bodyvalue){
		             							var tablebodyvalue = "<td>"+v+"</td>";
		 		             					tablebody.push(tablebodyvalue);
		             						}
		             					})
		             				});
		             				//console.log(tableHeader);
		             				////alert(selHeader)
		             				//return false;
		             				$.cookie("showtableHead_"+shipment_id,selHeader)
		             				$.cookie("showtableBody_"+shipment_id,selbody)
		             				$('#shipmentdatalistshow>thead>tr').empty().html(tableHeader);
		             				$('#shipmentdatalistshow>tbody').append('<tr>'+tablebody+'</tr>');
		             				
		             				//var list ='<tr>'+tableHeader+'<th> <span id="addChangeFilterList"></span></th>'+tablebody+'</tr>';
		             			//	//console.log("listoihjgdf srughvjkrghre "+list)
									//$('#shipmentdatalistshow>thead').empty();  '<tr>'+tableHeader+'<th> <span id="addChangeFilterList"></span></th>'+tablebody+'</tr>'
	             				//$('#shipmentdatalistshow>thead').html('<tr>'+tableHeader+'<th> <span id="addChangeFilterList"></span></th></tr>'); 
		             				//$('#shipmentdatalistshow>thead>tbody').append.html('<tr>'+tableHeader+'<th> <span id="addChangeFilterList"></span></th>'+tablebody+'</tr>');
							} 
		 				});
				//$('#shipmentdatalistshow>thead>tr').append(tableHeader);
 				//$('#shipmentdatalistshow>tbody').append('<tr>'+tablebody+'</tr>');
			}
		var shipment = $(".two_view_"+shipment_id).html();
		$(".shipment_name").html("<div class='row'>"+shipment+"</div>");
		$("#addChangeFilterList").attr("onclick","javascript:showSelectTableValues('"+shipment_id+"');");

	}
		});
		
$(".listoffilters,#backgroundBlur").hide();	
}
function SaveFiltersPreviousListBtn(shipment_id)
{
	////alert("hai jaisai");
	////alert(shipment_id);
	var selHeaderCookie = $.cookie("showtableHead_"+shipment_id);
	var selbodyCookie = $.cookie("showtableBody_"+shipment_id);

	if(selHeaderCookie == undefined || selbodyCookie == undefined)
		{
		var selHeader = $("input[name='filterList']:checked").map(function(_, el) {
			 return $(el).next("label").text();
			}).get();
			var selbody = $("input[name='filterList']:checked").map(function(_, el) {
			 return $(el).val();
			}).get();
			/*//alert(selHeader);
			//alert(selbody);*/
		}else if(selHeaderCookie == '' || selbodyCookie == ''){
			/*var selHeader = $.cookie("showtableHead_"+shipment_id);
			var selbody = $.cookie("showtableBody_"+shipment_id);*/
			var selHeader = $("input[name='filterList']:checked").map(function(_, el) {
				 return $(el).next("label").text();
				}).get();
				var selbody = $("input[name='filterList']:checked").map(function(_, el) {
				 return $(el).val();
				}).get();
		}else{
			/*var selHeader = $("input[name='filterList']:checked").map(function(_, el) {
				 return $(el).next("label").text();
				}).get();
				var selbody = $("input[name='filterList']:checked").map(function(_, el) {
				 return $(el).val();
				}).get();*/
			/*var selHeader = $.cookie("showtableHead_"+shipment_id);
			var selbody = $.cookie("showtableBody_"+shipment_id);*/
			
			   strx   = selHeaderCookie.split(',');
			   stry   = selbodyCookie.split(',');
			    array  = [];

			    selHeader = array.concat(strx);
			    selbody = array.concat(stry);
			    ////alert("hello"+selbody);
			    $("input[name='filterList']").prop('checked',false);
			    for(var i=0;i<selbody.length;i++)
			    	{
			    	////alert("pollo"+selbody[i]);
			    	 $("input[value='"+selbody[i]+"']").prop('checked', true);
			    	}
		
		}
	//console.log()
	
/*	//alert(selHeader);
	
	return false;*/

/*//console.log(selbody);
//console.log(selHeader);

var selHeader = $.cookie("showtableHead_"+shipment_id);
var selbody = $.cookie("showtableBody_"+shipment_id);
//alert(sdjfk)
return false;*/

$('#shipmentdatalistshow>tbody').empty();
/*$.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/getShipmentTransactionhistory/"+shipment_id,function(filters){
	////console.log(filters);
//	return false;
//	//alert(shipment_id);
//	//alert(shipment_id+"  "+"fghfhtkjgfdbhkjgdbfghjnbdjgbhjftjgbhjftbghkjd hhbg");
//	//alert(filters)
//		$('#shipmentdatalistshow>tbody').empty();
		var event_sNO = []; 
		var partner_From = [];
		var shipment_Num = [];
		var device_Id = [];
		$.each(filters,function(key,value){
			event_sNO.push(value.event_SNo);
			partner_From.push(value.partner_From);
			shipment_Num.push(value.shipment_Num);
			device_Id.push(value.device_Id);
		});
		event_sNO.sort(function(a, b){return a-b});
		for(i=0;i<event_sNO.length;i++)
			{
				var event_num = event_sNO[i];
				$.each(filters,function(kew,val){
		 					if(event_num == val.event_SNo)
		 						{
		 						var status_length = val.event_Name.length;
			             		if(status_length > 15)
			             			{
			             				var font_size = "8";
			             			}else{
			             				var font_size = "10";
			             			}
			             		var dateTime = new Date( Date.parse(val.utc));
		                    	var date_Time = dateTime.toLocaleString();
			             		var val_data = val.altitude;
		             				var tableHeader = []
		             				$.each(selHeader,function(key,headervalue){
		             					var tableHeadervalue = "<th>"+headervalue+"</th>";
		             					tableHeader.push(tableHeadervalue);
		             				});
		             				var tablebody = []
		             				$.each(selbody,function(key,bodyvalue){
		             					$.each(val,function(k,v){
		             						
		             						if(k == bodyvalue){
		             							var tablebodyvalue = "<td>"+v+"</td>";
		 		             					tablebody.push(tablebodyvalue);
		             						}
		             					})
		             				});
		             				//console.log(tableHeader);
		             				////alert(selHeader)
		             				//return false;
		             				$.cookie("showtableHead_"+shipment_id,selHeader)
		             				$.cookie("showtableBody_"+shipment_id,selbody)
		             				$('#shipmentdatalistshow>thead>tr').empty().html(tableHeader);
		             				$('#shipmentdatalistshow>tbody').append('<tr>'+tablebody+'</tr>');
		             				
		             				//var list ='<tr>'+tableHeader+'<th> <span id="addChangeFilterList"></span></th>'+tablebody+'</tr>';
		             			//	//console.log("listoihjgdf srughvjkrghre "+list)
									//$('#shipmentdatalistshow>thead').empty();  '<tr>'+tableHeader+'<th> <span id="addChangeFilterList"></span></th>'+tablebody+'</tr>'
	             				//$('#shipmentdatalistshow>thead').html('<tr>'+tableHeader+'<th> <span id="addChangeFilterList"></span></th></tr>'); 
		             				//$('#shipmentdatalistshow>thead>tbody').append.html('<tr>'+tableHeader+'<th> <span id="addChangeFilterList"></span></th>'+tablebody+'</tr>');
							} 
		 				});
				//$('#shipmentdatalistshow>thead>tr').append(tableHeader);
 				//$('#shipmentdatalistshow>tbody').append('<tr>'+tablebody+'</tr>');
			}
		var shipment = $(".two_view_"+shipment_id).html();
		$(".shipment_name").html("<div class='row'>"+shipment+"</div>");
		$("#addChangeFilterList").attr("onclick","javascript:showSelectTableValues('"+shipment_id+"');");

	});*/
			$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getShipmentTransactionhistory/"+shipment_id,
    type : "GET",
    dataType: 'json',
	headers: {
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  },
    success:function(filters){
	////console.log(filters);
//	return false;
//	//alert(shipment_id);
//	//alert(shipment_id+"  "+"fghfhtkjgfdbhkjgdbfghjnbdjgbhjftjgbhjftbghkjd hhbg");
//	//alert(filters)
//		$('#shipmentdatalistshow>tbody').empty();
		var event_sNO = []; 
		var partner_From = [];
		var shipment_Num = [];
		var device_Id = [];
		$.each(filters,function(key,value){
			event_sNO.push(value.event_SNo);
			partner_From.push(value.partner_From);
			shipment_Num.push(value.shipment_Num);
			device_Id.push(value.device_Id);
		});
		event_sNO.sort(function(a, b){return a-b});
		for(i=0;i<event_sNO.length;i++)
			{
				var event_num = event_sNO[i];
				$.each(filters,function(kew,val){
		 					if(event_num == val.event_SNo)
		 						{
		 						var status_length = val.event_Name.length;
			             		if(status_length > 15)
			             			{
			             				var font_size = "8";
			             			}else{
			             				var font_size = "10";
			             			}
			             		var dateTime = new Date( Date.parse(val.utc));
		                    	var date_Time = dateTime.toLocaleString();
			             		var val_data = val.altitude;
		             				var tableHeader = []
		             				$.each(selHeader,function(key,headervalue){
		             					var tableHeadervalue = "<th>"+headervalue+"</th>";
		             					tableHeader.push(tableHeadervalue);
		             				});
		             				var tablebody = []
		             				$.each(selbody,function(key,bodyvalue){
		             					$.each(val,function(k,v){
		             						
		             						if(k == bodyvalue){
		             							var tablebodyvalue = "<td>"+v+"</td>";
		 		             					tablebody.push(tablebodyvalue);
		             						}
		             					})
		             				});
		             				//console.log(tableHeader);
		             				////alert(selHeader)
		             				//return false;
		             				$.cookie("showtableHead_"+shipment_id,selHeader)
		             				$.cookie("showtableBody_"+shipment_id,selbody)
		             				$('#shipmentdatalistshow>thead>tr').empty().html(tableHeader);
		             				$('#shipmentdatalistshow>tbody').append('<tr>'+tablebody+'</tr>');
		             				
		             				//var list ='<tr>'+tableHeader+'<th> <span id="addChangeFilterList"></span></th>'+tablebody+'</tr>';
		             			//	//console.log("listoihjgdf srughvjkrghre "+list)
									//$('#shipmentdatalistshow>thead').empty();  '<tr>'+tableHeader+'<th> <span id="addChangeFilterList"></span></th>'+tablebody+'</tr>'
	             				//$('#shipmentdatalistshow>thead').html('<tr>'+tableHeader+'<th> <span id="addChangeFilterList"></span></th></tr>'); 
		             				//$('#shipmentdatalistshow>thead>tbody').append.html('<tr>'+tableHeader+'<th> <span id="addChangeFilterList"></span></th>'+tablebody+'</tr>');
							} 
		 				});
				//$('#shipmentdatalistshow>thead>tr').append(tableHeader);
 				//$('#shipmentdatalistshow>tbody').append('<tr>'+tablebody+'</tr>');
			}
		var shipment = $(".two_view_"+shipment_id).html();
		$(".shipment_name").html("<div class='row'>"+shipment+"</div>");
		$("#addChangeFilterList").attr("onclick","javascript:showSelectTableValues('"+shipment_id+"');");

	}
		});
		
$(".listoffilters,#backgroundBlur").hide();	
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

function getTotalData(shipment_Id){
 
        $.ajax({
      url: localStorage.getItem("smaasip")+"/SCMXPert/getShipmentTransactionDeviceDataLast/"+shipment_Id,
      type : "GET",
      dataType: 'json',
      headers: {
                'Authorization': localStorage.getItem('SavedToken')
              },
      success:function(data){
      //console.log(filter);
//      console.log(data[0]);
  //     console.log("data here");
  //     console.log(data);
          $('#data_menuTable').empty();
          $.each(data,function(key,value){
           //  console.log("data");
           //  console.log(data);
           //  console.log('k');
           //  console.log(key);
           //  console.log('value');
           //  console.log(value);
           //  console.log("testingtocheck",typeof data);       
       
         var tabledata = "<table style='font-size:12px; color:white; background-color:#894151e3; width:100%;'><tr><tr><th>Shipment Id</th><td id='data_menuTable'>"+escapeHtml(value.shipment_Id)+"</td></tr><tr><th>Invoice Number</th><td id='data_menuTable'>"+escapeHtml(value.invoice_Number)+"</td></tr><tr><th>From Plant</th><td id='data_menuTable'>"+escapeHtml(value.fromPlant)+"</td></tr><tr><th>CMO Reference Number</th><td id='data_menuTable'>"+escapeHtml(value.cmo_Ref_Number)+"</td></tr><tr><th>Container Number</th><td id='data_menuTable'>"+escapeHtml(value.shipper_Number)+"</td></tr><tr><th>Route Details</th><td id='data_menuTable'>"+escapeHtml(value.route_Details)+"</td></tr><tr><th>Goods Type</th><td id='data_menuTable'>"+escapeHtml(value.goods_Type)+"</td></tr><tr><th>Product Name</th><td id='data_menuTable'>"+escapeHtml(value.comments)+"</td></tr><tr><th>Device Id</th><td id='data_menuTable'>"+escapeHtml(value.device_Id)+"</td></tr><tr><th>Expected Delivery Date</th><td id='data_menuTable'>"+escapeHtml(value.estimated_Delivery_Date)+"</td></tr><tr><th>Material Number</th><td id='data_menuTable'>"+escapeHtml(value.material_number)+"</td></tr><tr><th>PO Number</th><td id='data_menuTable'>"+escapeHtml(value.po_Number)+"</td></tr><tr><th>PO Item Number</th><td id='data_menuTable'>"+escapeHtml(value.poItmNumber)+"</td></tr><tr><th>Delivery Number</th><td id='data_menuTable'>"+escapeHtml(value.shipment_Num)+"</td></tr><tr><th>NDC Number</th><td id='data_menuTable'>"+escapeHtml(value.ndc_Number)+"</td></tr><tr><th>Batch Id</th><td id='data_menuTable'>"+escapeHtml(value.batch_Id)+"</td></tr><tr><th>Serial Number of goods</th><td id='data_menuTable'>"+escapeHtml(value.serial_Number_of_goods)+"</td></tr></tr></table>";
    //   var tabledata = "<table style='font-size:15px; color:white; background-color:#894151e3; width:100%;'><tr><tr><th>Delivery No.</th><td  id = 'data_menuTable'>"+escapeHtml(value.shipment_Num)+"</td></tr><tr><th>CMO Reference Number</th><td  id = 'data_menuTable'>"+escapeHtml(value.cmo_Ref_Number)+"</td></tr><tr><th>Container Number</th><td  id = 'data_menuTable'>"+escapeHtml(value.container_Number)+"</td></tr><tr><th>Route Details</th><td  id = 'data_menuTable'>"+escapeHtml(value.route_Details)+"</td></tr><tr><th>Goods Type</th><td  id = 'data_menuTable'>"+escapeHtml(value.goods_Type)+"</td></tr><tr><th>Device</th><td  id = 'data_menuTable'>"+escapeHtml(value.device_Id)+"</td></tr><tr><th>Expected Delivery Date</th><td  id = 'data_menuTable'>"+escapeHtml(value.event_Exec_Date)+"</td></tr><tr><th>PO Number</th><td  id = 'data_menuTable'>"+escapeHtml(value.po_Number)+"</td></tr><tr><th>Shipment/Invoice Number</th><td  id = 'data_menuTable'>"+escapeHtml(value.invoice_Number)+"</td></tr><tr><th>NDC Number</th><td  id = 'data_menuTable'>"+escapeHtml(value.ndc_Number)+"</td></tr><tr><th>Batch Id</th><td  id = 'data_menuTable'>"+escapeHtml(value.batch_Id)+"</td></tr><tr><th>Serial Number of goods</th><td  id = 'data_menuTable'>"+escapeHtml(value.serial_Number_of_goods)+"</td></tr></tr></table>";       
         $('#data_menuTable').append(tabledata);
    //          console.log("Table data");
    //          console.log(tabledata);
           
            return false;
          });
      }
        });
  }
  
function getData(shipment_Id){
 
    $.ajax({ 
      url: localStorage.getItem("smaasip")+"/SCMXPert/getShipmentTransactionhistory/"+shipment_Id,       
      type : "GET",
      dataType: 'json',
      headers: {
                        'Authorization': localStorage.getItem('SavedToken')
                },
      success:function(data){
              //console.log(data);
         $('#uploadevidencedata > tbody').empty();
         $.each(data,function(key,value){
             //console.log("data below");
             //console.log(data);
             //console.log("data");
             //console.log(data);
             $("#delivery_num").val(value.invoice_Number);
             $("#batch_id").val(value.batch_Id);
             $("#mode_trans").val(value.mode_of_Transport);            
             //console.log("key here");
             //console.log(key);
             //console.log("value here");
             //console.log(value);
             //console.log("evidenceNames list here");
             //console.log(value.evidenceList);
             //console.log("url list");
             //console.log( value.evidence_URL);
             //console.log("testingtocheck ",typeof data);                       
          var Names = value.evidenceList;    
          var links = value.evidence_URL;
          //console.log("hyperlink namesssssssss::::");             
          var totn_string = "";                                                                    
          var delete_string = 'Delete Evidence';
          var delete_link = delete_string.link(delete_string);            
          var evdnc_url = value.evidence_URL;                                                            
          var urls = value.evidence_URL;
          var desc = value.evidence_Description;
          var ref = value.typeOfReference;
        //   alert("urls");
          //alert(urls);         
 //desc.forEach((num1, index) => {
  //const num2 = urls[index];
 // const num3 = ref[index];
   //console.log(num3);
  // console.log(num1, num2, num3);
   
  //console.log(num1, num2);
//});                         
      if(!value.typeOfReference == null || !value.typeOfReference == ""){
         $.each(value.evidence_URL, function(index, url_value){		
			  //alert(url_value); 
		 //  $.each(value.evidence_Description, function(index2, desc_value){		
			   //alert(desc_value);
			   //alert(value.typeOfReference[url_value]);
			//	    $.each(value.typeOfReference, function(index3, ref_value){						
						//alert(ref_value);
         ///  var tabledata = '<tr id="uploadevidencedata"><td><input type="checkbox"/></td><td>'+escapeHtml(value.typeOfReference)+'</td><td>'+escapeHtml(value.evidence_Description)+'</td><td>'+"<a href='" + url_value + "'>" + Names[index] + "</a>"+'</td><td><input type="button" value="Delete" class="bg-color margin-rl1 btn-head"; onclick="GetSelected()"/></td></tr>';
            var tabledata = '<tr id="uploadevidencedata" style="font-size:12px;"><td><input type="checkbox"/></td><td>'+escapeHtml(value.docId[index])+'</td><td>'+escapeHtml(value.shipment_Id)+'</td><td>'+escapeHtml(value.docCreatedDate[index])+'</td><td>'+escapeHtml(value.typeOfReference[index])+'</td><td>'+escapeHtml(value.evidence_For[index])+'</td><td>'+escapeHtml(value.evidence_Description[index])+'</td><td>'+escapeHtml(value.invoice_Number)+'</td><td>'+escapeHtml(value.shipment_Num)+'</td><td>'+escapeHtml(value.material_number)+'</td><td>'+escapeHtml(value.batch_Id)+'</td><td>'+"<a href='" + url_value + "'>" + Names[index] + "</a>"+'</td><td><input type="button" value="Delete" class="bg-color margin-rl1 btn-head"; onclick="GetSelected()"/></td></tr>';             
           //   alert("at null");  
          // alert("url_value");
           // alert(url_value);
 //       if(url_value == "" || url_value == "null"){       
 //        tabledata.remove();
 //       }
 
        $('a[href=""], a[href="null"]').each(function() {
               // Navigate to the parent tr element and remove it
           $(this).closest('tr').remove();
        });
                  
            $('#uploadevidencedata > tbody').append(tabledata);
              //console.log("Table data");
              //console.log(tabledata);
              ///return false;
              //       }); ///3rd loop
                //     }); ///2nd loop
                 });  
         }                               
          });
 }
 })
 }  