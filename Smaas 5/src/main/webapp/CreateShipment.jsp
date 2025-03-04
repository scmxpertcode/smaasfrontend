<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='expires' content='0'>
<meta http-equiv='pragma' content='no-cache'>
<title>SCMXpert/CreateShipment</title>
<jsp:include page="./View/jsfiles.jsp" />
<script src="./js/CreateShipment.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.0.0/moment.min.js"></script>
<script src="./js/clockScript.js"></script>
<link href="./css/clockStyle.css"  rel = "stylesheet"/>
<link rel="stylesheet" href="./css/slimselect.min.css"/>
<style>
#error5{color: red};

@media only screen and (min-width: 600px) {
  /* For mobile phones: */
  .row-padding{padding:0% 17%;}
/*   [class*="col-"] {
    width: 100%;
  } */
}
btn btn-light dropdown-toggle{
 background:brown;
}
#scanboxview{display:none;}
.bodyblur{width:100%;height:100%;background:#000000e0;position:absolute;z-index:1;display:none;}
.bodyblur1{width:100%;height:100%;background:#000000e0;position:absolute;z-index:1;display:none;}
#locationboxview{display:none;background:#fff;border:1px solid #000;top:1px;}
.body_blur{width:100%;height:100%;overflow:hidden;position:fixed;top:0px;z-index:1;background:#00000069;display:none;}
.AddEventBlock{width:30%;min-height:200px;background:#fff;border-radius:5px;top:17rem;position:fixed;z-index:2;margin:0% 35%;display:none;}
.AddButtonIcon{cursor:pointer;}
/* #draftTable_length{float:left;} */
/* #draftTable_wrapper{overflow-x:auto;} */
.E0001{background:#ccd0d4;height:25px;font-size: 12px;}
.inputboxesevents{height:25px;font-size: 12px;}
.success_dialog{display:none;}
#backgroundBlur{background: #000000;opacity: .7;display: none;position: fixed;top: 0;left: 0;width: 100%;height: 100%;z-index: 999999999;}
#draftTable{display:none;}
#draftTable>thead>tr>th{padding:6px;text-align:center;}
#draftTable>thead{background: #965664f2;
    color: #fff;}
#draftTable>tbody>tr>td{padding: 2px;
    text-align: center;
    line-height: 25px;}
#draftTable_length{font-size: 12px;margin-top: 9px;display:none;}
#draftTable_filter{font-size: 12px;margin-top: 9px;display:none;}
#draftTable_info{font-size: 12px;}
#draftTable_paginate{font-size:9px;}
#draftTable>thead>tr>.sorting, .sorting_asc, .sorting_desc {
    background : none;
}
table.dataTable thead .sorting:before, table.dataTable thead .sorting_asc:before, table.dataTable thead .sorting_desc:before, table.dataTable thead .sorting_asc_disabled:before, table.dataTable thead .sorting_desc_disabled:before{content:none;}
table.dataTable thead .sorting:after, table.dataTable thead .sorting_asc:after, table.dataTable thead .sorting_desc:after, table.dataTable thead .sorting_asc_disabled:after, table.dataTable thead .sorting_desc_disabled:after{content:none;}
div::-webkit-scrollbar {
    width: 8px;
    height:8px;
}
#inboxesvalues>thead>tr>th{display:none;}

#draftTable_info{display:none;}
#draftTable_paginate{display:none;}
div::-webkit-scrollbar {
    width: 8px;
}
.bg-color{background:#894151e3;}

div::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
}

div::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
}
#tableHeader{position: relative;background: #fff;padding: 19px;width: 94%;border-bottom: 1px solid #000;display:none;}

label.required::before {
  content: '*';
  margin-right: 4px;
  color: red;
}
</style>
<script>
function blockSpecialChar(e){
	var k;
	document.all ? k = e.keyCode : k = e.which;
	return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
	}
</script>
</head>
<!-- <body oncopy="return false" onpaste="return false"> -->	<!--Used for blocking copy paste-->

<script src="./js/zebra_datepicker.min.js"></script>
 <link rel="stylesheet" href="./css/zebra_datepicker.css" type="text/css"/>


  <link href = "https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css" rel = "stylesheet"/> 
 <link href="https://fonts.googleapis.com/css?family=Bungee+Inline&display=swap" rel="stylesheet">
<!--   <script src=" https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
 <script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script> -->
<!--   <link href = "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.css"/>
 <link href = "https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css"/> -->

      <script src = "https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
      <script src="./js/CommonFunction.js"></script>
          <!-- Javascript -->
      <script type="text/javascript">
        $(document).ready(function(){
        
        	draftList();
        	var UserIds = $.session.get('UserId');
        	
    		var UserId = UserIds;
    			var useridsplit = UserId.split('-');
    			useridsplit[0].toString();
    			useridsplit[0] + "";
    			useridsplit[1].toString();
    			useridsplit[1] + "";
    		//	getShipmentId(useridsplit[1]);
    /*abid 	$.getJSON( localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0], function(data) { 	
    		//console.log(data); */
/* 	 		$.each(data.bussinesPartnersDetails,function(key,val){
 			////alert(val.events);
 			var valuesbp = $("#bp_name").val();
 			if(valuesbp == val.bp_Id)
 				{// //alert(val.events.length); 
 					$("#company_name").val(val.company_Name).css("font-weight","bold");
 					$("#inboxesvalues>tbody").empty();
 				$.each(val.events,function(keys,values){
 					var status_length = values.event_Status.length;
 						var theDate = new Date( Date.parse(values.event_Exec_Date));
 		             	var date_create = theDate.toLocaleDateString();
	 				var eventsboxes = '<tr><td class="p-1"><input type="radio" name="event" style="width:14px;" value="'+values.event_Id+'"/></td><td class="p-1" style="font-size: 10px;">'+values.event_Id+'</td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="partner_name_'+values.event_Id+'" value="'+part_from+'" style="height:25px;font-size: 12px;font-weight:bold;"  disabled="disabled"/></td><td class="pl-1"><input type="text" class="form-control mb-1  inputboxesevents" id="event_name_'+values.event_Id+'" value="'+values.event_Status+'" style="height:25px;font-size: 12px;font-weight:bold;"  disabled="disabled"/></td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="event_date_'+values.event_Id+'" value="Select Date" placeholder="Select Date" style="height:25px;font-size: 12px;font-weight:bold;"  disabled="disabled"/></td></tr>';
	 				$("#inboxesvalues>tbody").append(eventsboxes);
	 				$('#event_date_'+values.event_Id).datepicker();
	 				$(".E0001").attr('disabled', 'disabled').css({"background":"#ccd0d4"});
	 				
	 			});
 				}
 			
 		}); */
	 		
	/*abid  		var routeslist = [];
 		 $("#internalshipment").val(data.internalShipmentId);
	 		$.each(data.business_Partner_Id,function(keys,values){
				////alert(values.from+','+values.to+','+values.primary_Mode_Of_Transport);
				 var select_device_Id_items = '<option value="'+values+'">'+values+'</option>';
				 routeslist.push(values);
				 $("#event_partner_from,#selectvalues").append(select_device_Id_items);
				 //device_Id_select.push(select_device_Id_items); 
			});   
 			 */
	 		////alert(data.bussinesPartnersDetails);
	 /* 		$.each(data.bussinesPartnersDetails,function(key,val){
	 			////alert(val.events);
	 			var valuesbp = "BP0002";
	 			if(valuesbp == val.bp_Id)
	 				{//alert(val.events.length); 
	 				$.each(val.events,function(keys,values){
		 				var eventsboxes = '<tr><td class="p-1"><input type="radio" name="event" style="width:14px;"/></td><td class="p-1" style="font-size: 10px;">'+values.event_Id+'</td><td class="pl-1"><input type="text" class="form-control mb-1 '+values.event_Id+' inputboxesevents" value="'+valuesbp+'"/></td><td class="pl-1"><input type="text" class="form-control mb-1 '+values.event_Id+' inputboxesevents" value="'+values.event_Status+'"/></td><td class="pl-1"><input type="text" class="form-control mb-1 '+values.event_Id+' inputboxesevents" value=""/></td></tr>';
		 				$("#inboxesvalues>tbody").append(eventsboxes);
		 			});
	 				}
	 			
	 		}); */
	 		
	 		
    		//$.each(data,function(key,value){
    			////alert(value);
    			////alert(value.bussinesPartnersDetails);
    /********    bussinesPartnersDetails Items   *************/			
    			//var goods_select = [];
    		 	/* $.each(data.bussinesPartnersDetails,function(keys,values){
    		 		$("#company_name").val(values.company_Name).css("font-weight","bold");
    				 */
    			/* 	var select_goods_items = '<option value="'+values.goods_Item+'">'+values.goods_Item+'</option>';
    				$("#goods").append(select_goods_items);  */
    				//goods_select.push(select_goods_items);
    			/* }); */ 
   /********    Goods Items   *************/			
    			//var goods_select = [];
    		/*abid 	$.each(data.goods,function(keys,values){
					if(values.goods_Status == "Active"){
    				var select_goods_items = '<option value="'+values.goods_Id+','+values.goods_Item+'">'+values.goods_Item+'</option>';
    				$("#goods").append(select_goods_items);
					} */
    				//goods_select.push(select_goods_items);
    				//SelectGoods(values.goods_Id+','+values.goods_Item);
    	/*abid 		});
    			var optionValues =[];
    			$('#goods option').each(function(){
    			    if($.inArray(this.value, optionValues) >-1){
       			       $(this).remove()
    			    }else{
    			       optionValues.push(this.value);
    			    }
    			 }); */
    /********    Route Items   *************/			
    			//var route_select = [];
    		/*abid 	var optionValues =[];
       			$.each(data.route,function(keys,values){
    				////alert(values.from+','+values.to+','+values.primary_Mode_Of_Transport);
    				if(values.status == "Active"){
    				 var select_route_items = '<option value="'+values.businessId+','+values.route_Id+'">'+values.from+','+values.to+','+values.primary_Mode_Of_Transport+','+values.inco_Term+'</option>';
    				 $("#routes").append(select_route_items);
    				} */
    				// SelectRouteerList(values.businessId+','+values.route_Id);
    				 //route_select.push(select_route_items); 
    	/*abid 		}); 
       			$('#routes option').each(function(){
    			    if($.inArray(this.value, optionValues) >-1){
    			       $(this).remove()
    			    }else{
    			       optionValues.push(this.value);
    			    }
    			 }); */
    			
   /********    Reference Items   *************/			
    			//var typeOfReferences_select = [];
   		/*abid 		var optionValues =[];
    			$.each(data.typeOfReferences,function(keys,values){ */
    				////alert(values);
    				////alert(values.from+','+values.to+','+values.primary_Mode_Of_Transport);
    			/*abid 	 var select_typeOfReferences_items = '<option value="'+values+'">'+values+'</option>';
    				 $("#typeOfReferences").append(select_typeOfReferences_items); */
    				 //typeOfReferences_select.push(select_typeOfReferences_items); 
    	/*abid 		});   
    			$('#typeOfReferences option').each(function(){
    			    if($.inArray(this.value, optionValues) >-1){
    			       $(this).remove()
    			    }else{
    			       optionValues.push(this.value);
    			    }
    			 }); */
  /********    Device Items   *************/			
    			//var device_Id_select = [];
    	/*abid 		$.each(data.device_Id,function(keys,values){ */
    				////alert(values);
    				////alert(values.from+','+values.to+','+values.primary_Mode_Of_Transport);
    		/* abid		 var select_device_Id_items = '<option value="'+values+'">'+values+'</option>';
    				 $("#devices").append(select_device_Id_items); */
    				 //device_Id_select.push(select_device_Id_items); 
  /*  abid 			});  
    			var optionValues =[];
    			$('#devices option').each(function(){
    			    if($.inArray(this.value, optionValues) >-1){
    			       $(this).remove()
    			    }else{
    			       optionValues.push(this.value);
    			    }
    			 }); */
    			
    			//$("#goods").html("<option value=''>Select Goods</option>"+goods_select);
    			//$("#routes").html("<option value=''>Select Route</option>"+route_select);
    			//$("#typeOfReferences").html("<option value=''>Select Reference</option>"+typeOfReferences_select);
    			//$("#devices").html("<option value=''>Select Device</option>"+device_Id_select);
    		//});
    		/*   var items = [];
    		  $.each( data, function( key, val ) {
    		    items.push( "<li id='" + key + "'>" + val + "</li>" );
    		  }); */
    			

//    	});
    	$.ajax({
    	    url: localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0],
    	    type : "GET",
    	    dataType: 'json',
    	    headers: {
    	    	'Content-Type' : "application/json",
  	        	    'Authorization': localStorage.getItem('SavedToken'),
  	        	  }, 
    	    success:function(data){
    	    	//console.log(data);
    	    	
    	 		var routeslist = [];
    	 		 $("#internalshipment").val(data.internalShipmentId);
    		 		$.each(data.business_Partner_Id,function(keys,values){
    					////alert(values.from+','+values.to+','+values.primary_Mode_Of_Transport);
    					 var select_device_Id_items = '<option value="'+escapeHtml(values)+'">'+escapeHtml(values)+'</option>';
    					 routeslist.push(values);
    					 $("#event_partner_from,#selectvalues").append(select_device_Id_items);
    					 //device_Id_select.push(select_device_Id_items); 
    				});  
    		 		
    		 		$.each(data.goods,function(keys,values){
    					if(values.goods_Status == "Active"){
        				var select_goods_items = '<option value="'+escapeHtml(values.goods_Id)+','+escapeHtml(values.goods_Item)+','+escapeHtml(values.custGoodId)+'">'+escapeHtml(values.goods_Item)+'</option>';
        				$("#goods").append(select_goods_items);
    					}
    					
    		 		});
        			var optionValues =[];
        			$('#goods option').each(function(){
        			    if($.inArray(this.value, optionValues) >-1){
           			       $(this).remove()
        			    }else{
        			       optionValues.push(this.value);
        			    }
        			 });
        			
        			var optionValues =[];
           			$.each(data.route,function(keys,values){
        				////alert(values.from+','+values.to+','+values.primary_Mode_Of_Transport);
        				if(values.status == "Active"){
        				 var select_route_items = '<option value="'+escapeHtml(values.businessId)+','+escapeHtml(values.route_Id)+','+escapeHtml(values.custRouteId)+'">'+escapeHtml(values.from)+','+escapeHtml(values.to)+','+escapeHtml(values.primary_Mode_Of_Transport)+','+escapeHtml(values.inco_Term)+'</option>';
        				 $("#routes").append(select_route_items);
        				}
        				
           			}); 
           			$('#routes option').each(function(){
        			    if($.inArray(this.value, optionValues) >-1){
        			       $(this).remove()
        			    }else{
        			       optionValues.push(this.value);
        			    }
        			 });
    		 		
           			var optionValues =[];
        			$.each(data.typeOfReferences,function(keys,values){
        				
        				 var select_typeOfReferences_items = '<option value="'+escapeHtml(values)+'">'+escapeHtml(values)+'</option>';
        				 $("#typeOfReferences").append(select_typeOfReferences_items);
        				 
        			});   
        			$('#typeOfReferences option').each(function(){
        			    if($.inArray(this.value, optionValues) >-1){
        			       $(this).remove()
        			    }else{
        			       optionValues.push(this.value);
        			    }
        			 });
        			///////////////////
        		/* For each for showing Device Id list   */
/*         				$.each(data.device_Id,function(keys,values){
        					//////
        					 var select_device_Id_items = '<option value="'+escapeHtml(values)+'">'+escapeHtml(values)+'</option>';
            				 $("#devices").append(select_device_Id_items);
            				 //////////
        				}); */
        				
        		/* Below For each is for showing Device Id list with Battery percentage   */
        				$.each(data.device_Id,function(keys,values){
        				    let deviceIDWithPercentage = escapeHtml(values);
        				  var splitDeviceId = deviceIDWithPercentage.split(" ");
        				  var select_device_Id_items = '<option value="'+splitDeviceId[0]+'">'+deviceIDWithPercentage+'</option>';
        				  $("#devices").append(select_device_Id_items);
        				});
        			
            			var optionValues =[];
            			$('#devices option').each(function(){
            			    if($.inArray(this.value, optionValues) >-1){
            			       $(this).remove()
            			    }else{
            			       optionValues.push(this.value);
            			    }
            			 });
            			
            			$.each(data.plant,function(keys,values){
        					 var select_device_Id_items = '<option value="'+escapeHtml(values)+'">'+escapeHtml(values)+'</option>';
            				 $("#plantName").append(select_device_Id_items);
        				});
    			}
    	    });
    	
        	 var myDate=new Date();
        	    myDate.setDate(myDate.getDate()+1);
        	    // format a date
        	    var dt = myDate.getDate() + '/' + ("" + (myDate.getMonth() + 1)).slice(-2) + '/' + myDate.getFullYear();
        	//$("#expected_date").val(dt);
        	$("#typeOfReferences").on("change",function(){
        		var textval = $(this).val();
        		if(textval != '')
        			{
        				$("#error").empty();
        				$(this).focus().css("border","1px solid #ced4da");
        			}
        	});
        	$("#routes").on("change",function(){
        		var textval = $(this).val();
        		if(textval != '')
        			{
        				$("#error").empty();
        				$(this).focus().css("border","1px solid #ced4da");
        			}
        	});
        	$("#goods").on("change",function(){
        		var textval = $(this).val();
        		if(textval != '')
        			{
        				$("#error").empty();
        				$(this).focus().css("border","1px solid #ced4da");
        			}
        	});
        	$("#devices").on("change",function(){
        		var textval = $(this).val();
        		if(textval != '')
        			{
        				$("#error").empty();
        				$(this).focus().css("border","1px solid #ced4da");
        			}
        	});
        	$("#expected_date").on("change",function(){
        		var textval = $(this).val();
        		if(textval != '')
        			{
        				$("#error").empty();
        				$(this).css("border","1px solid #ced4da");
        			}
        	});
        	$("#shipment_number").on("keypress",function(){
        		$("#error").empty();
        		$(this).focus().css("border","1px solid #ced4da");
        	});
/*            	$("#expected_date").on("keypress",function(){
        		$("#error").empty();
        		$(this).focus().css("border","1px solid #ced4da");
        	}); */
        	
        	$("#plantName").on("change",function(){
        		var textval = $(this).val();
        		if(textval != '')
        			{
        				$("#error").empty();
        				$(this).focus().css("border","1px solid #ced4da");
        			}
        	});
        	
        	
        	$("input[type='radio']"). click(function(){
        		var radioValue = $("input[name='selectdraftselect']:checked"). val();
        	//	//alert(radioValue);
        			
        	});
        	
        	$("#copyButtonId").on("click",function(){
        		var value=$("input:radio[name=event]:checked").val();
        		var partner = $("#partner_name_"+value).val();
            	var event = $("#event_name_"+value).val();
            	var datee = $("#event_date_"+value).val();
        		
        	});
        	 var Role = $.session.get('Role');
	    	  if(Role == "BUSINESSPARTNER")
	    		{
	    		var UserIds = $.session.get('CustId');
	    		}else{
	    			var UserIds = $.session.get('UserId');
	    		}
	    	  var BpName = $.session.get('UserId');
	    	
	    	  var CustomerName = $.session.get('CustomerName');
	    		var UserName = $.session.get('UserName');
	    		////alert(CustomerName);//alert(UserName);
        	$("#Cust_Id").val(useridsplit[0]);
        	$("#Cust_Name").val(CustomerName);
        	$("#bp_name").val(UserName);
       /*  	$("#routes").on("change",function(){
        		var selectval = $(this).val();
        		////alert(selectval);
        		getbp_id(selectval);
        	}); */
        	
        
        	
        	setInterval(function(){ function formatAMPM(date) {
          		  var hours = date.getHours();
          		  var minutes = date.getMinutes();
          		  var ampm = hours >= 12 ? 'pm' : 'am';
          		  hours = hours % 12;
          		  hours = hours ? hours : 12; // the hour '0' should be '12'
          		  minutes = minutes < 10 ? '0'+minutes : minutes;
          		  var strTime = hours + ':' + minutes + ' ' + ampm;
          		  return strTime;
          		} 
        	var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        	var month_names_short =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        	var now       = new Date();
        	var thisMonth = month_names_short[now.getMonth()];
        	//var time = formatAMPM(new Date);
        	var today = new Date();
          	var date = thisMonth+'-'+today.getDate()+'-'+today.getFullYear();
          	//var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
          	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
          	var dateTime = date+' / '+time;
          	
          	var dateFormat = function () {
          	    var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
          	        timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
          	        timezoneClip = /[^-+\dA-Z]/g,
          	        pad = function (val, len) {
          	            val = String(val);
          	            len = len || 2;
          	            while (val.length < len) val = "0" + val;
          	            return val;
          	        };

          	    // Regexes and supporting functions are cached through closure
          	    return function (date, mask, utc) {
          	        var dF = dateFormat;

          	        // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
          	        if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
          	            mask = date;
          	            date = undefined;
          	        }

          	        // Passing date through Date applies Date.parse, if necessary
          	        date = date ? new Date(date) : new Date;
          	        if (isNaN(date)) throw SyntaxError("invalid date");

          	        mask = String(dF.masks[mask] || mask || dF.masks["default"]);

          	        // Allow setting the utc argument via the mask
          	        if (mask.slice(0, 4) == "UTC:") {
          	            mask = mask.slice(4);
          	            utc = true;
          	        }

          	        var _ = utc ? "getUTC" : "get",
          	            d = date[_ + "Date"](),
          	            D = date[_ + "Day"](),
          	            m = date[_ + "Month"](),
          	            y = date[_ + "FullYear"](),
          	            H = date[_ + "Hours"](),
          	            M = date[_ + "Minutes"](),
          	            s = date[_ + "Seconds"](),
          	            L = date[_ + "Milliseconds"](),
          	            o = utc ? 0 : date.getTimezoneOffset(),
          	            flags = {
          	                d:    d,
          	                dd:   pad(d),
          	                ddd:  dF.i18n.dayNames[D],
          	                dddd: dF.i18n.dayNames[D + 7],
          	                m:    m + 1,
          	                mm:   pad(m + 1),
          	                mmm:  dF.i18n.monthNames[m],
          	                mmmm: dF.i18n.monthNames[m + 12],
          	                yy:   String(y).slice(2),
          	                yyyy: y,
          	                h:    H % 12 || 12,
          	                hh:   pad(H % 12 || 12),
          	                H:    H,
          	                HH:   pad(H),
          	                M:    M,
          	                MM:   pad(M),
          	                s:    s,
          	                ss:   pad(s),
          	                l:    pad(L, 3),
          	                L:    pad(L > 99 ? Math.round(L / 10) : L),
          	                t:    H < 12 ? "a"  : "p",
          	                tt:   H < 12 ? "am" : "pm",
          	                T:    H < 12 ? "A"  : "P",
          	                TT:   H < 12 ? "AM" : "PM",
          	                Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
          	                o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
          	                S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
          	            };

          	        return mask.replace(token, function ($0) {
          	            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
          	        });
          	    };
          	}();

          	// Some common format strings
          	dateFormat.masks = {
          	    "default":      "ddd mmm dd yyyy HH:MM:ss",
          	    shortDate:      "m/d/yy",
          	    mediumDate:     "mmm d, yyyy",
          	    longDate:       "mmmm d, yyyy",
          	    fullDate:       "dddd, mmmm d, yyyy",
          	    shortTime:      "h:MM TT",
          	    mediumTime:     "h:MM:ss TT",
          	    longTime:       "h:MM:ss TT Z",
          	    isoDate:        "yyyy-mm-dd",
          	    isoTime:        "HH:MM:ss",
          	    isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
          	    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
          	};

          	// Internationalization strings
          	dateFormat.i18n = {
          	    dayNames: [
          	        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
          	        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
          	    ],
          	    monthNames: [
          	        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
          	        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
          	    ]
          	};

          	// For convenience...
          	Date.prototype.format = function (mask, utc) {
          	    return dateFormat(this, mask, utc);
          	};
          	
          	
          	
          	$("#sysdateandtime").text(dateFormat(new Date(), "dd-mmm-yy, HH:MM:ss Z"));
          //	$("#date_E0010").text(date);
          	
        	}, 1000);
        	$("#Status_E0010").text("INITIALIZED");
          /* 	$('#draftTable').DataTable(); */
        	
        	 $( "#expected_date" ).Zebra_DatePicker({
        		 direction:true,
     		    format: 'd-M-Y'
     		});
         	var part_from = $.cookie("BP_ID");
        	var SCM_id = $.cookie("SCM_id");
        	var ship_id = $.cookie("shp_id");
        	//getbp_id(part_from);
        	var Cust_Id = $("#Cust_Id").val();
        	////alert(Cust_Id);
        	////alert(Cust_Id);
        		
        		var Role = $.session.get('Role');
        	
        				
        	
       	    	//var randnumber = getRandom(10);
        	    	//$("#internalshipment").val(randnumber);
        	    	//$('.datepicker').datepicker();

        	    	$(".bodyblur,.bodyblur1").on("click",function(){
        	    		 $("#scanboxview,#locationboxview").hide();
         	    	    $(this).hide();
        	    	});
        	    	setTimeout(function(){
//        	    		$("header").css({"position":"unset","z-index":"0"});
        	    	    $("#scanboxview").hide();
        	    	    $(".bodyblur").hide();
        	    	}, 5000);
        	    	$("#scaninputnumber").on("click",function(){
        	    		$(this).css({"border":"1px solid #00000030","color":"#000"});
        	    	});
        	    	
        	    	
        	});
        

        
        function copy() {
        	 //var textarea = document.getElementById("inboxesvalues");
        	 var value=$("input:radio[name=event]:checked").val();
        	 var partner = $("#partner_name_"+value).val();
         	var event = $("#event_name_"+value).val();
         	var datee = $("#date_"+value).val();
         	if(value == undefined){
         	//alert("Select Atleast one Event");
         	}else{
         		var events_is = $('#inboxesvalues tr:last').find('td:eq(1) div').attr("id");
         		var events_length = $('#inboxesvalues>tbody .Event_class').length;
         		var radiovalue=$("input:radio[name=event]:checked").val();
         		$("#"+radiovalue).prop("checked", false);
          		var length_events = events_length+1
         		var eventNewId = "E000"+length_events;
          		
                     		
         		
         		//var evetntable = '<tr id="row_val_'+value+'"><td class="p-1"><input type="radio" name="event" style="width:14px;" value="'+value+'"/></td><td class="" style="font-size: 10px;padding:1px;"><input type="text" class="mb-1 form-control" value="'+value+'" style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 50px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;"  /> </td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="partner_name_'+value+'" value="'+partner+'" style="text-align:center;height:25px;font-size: 12px;font-weight:bold;"/></td><td class="pl-1"><input type="text" class="form-control mb-1  inputboxesevents" id="event_name_'+value+'" value="'+event+'" style="height:25px;font-size: 12px;font-weight:bold;"/></td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="event_date__copy'+value+'" value="" placeholder="Select Date" style="height:25px;font-size: 12px;font-weight:bold;"/></td></tr>';
         		var eventsboxes = '<tr id="row_val_'+eventNewId+'" class="Event_class"><td class="p-1"><input type="radio" name="event" style="width:14px;" value="'+eventNewId+'" id="'+eventNewId+'"/></td><td class="" style="font-size: 10px;padding:1px;"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 50px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;">'+eventNewId+'</div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="partner_from_'+eventNewId+'" contenteditable="true"></div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 190px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="event_name_'+eventNewId+'" contenteditable="true"></div></td><td class="pl-1"><input type="text" style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 135px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="date_'+eventNewId+'"/><img src="./images/save-icon.png" style="width:30px;height:23px;" onclick="javascript:saveCopyData(\''+eventNewId+'\');" id="saveimage"></td></tr>';
             	 $("#inboxesvalues>tbody").append(eventsboxes);
             	 $("#date_"+eventNewId).datepicker();
             	$("#"+eventNewId).prop("checked", true);
             	var div = document.getElementById(eventNewId);
             	setTimeout(function() {
             	    div.focus();
             	}, 0);
         	}
        	  /* textarea.select();
        	  document.execCommand("copy"); */
        	}
        function saveCopyData(id)
        {
        	////alert(id);
        	var partner_from = $("#partner_from_"+id).text();
        	var event_name = $("#event_name_"+id).text();
        	var date = $("#date_"+id).text();
        	var json_value = {
        		"event_Id" : id,
        		"bpId" : partner_from,
        		"eventName" : event_name,
        		"dateTime" : date
        		};
        	
        	var url = localStorage.getItem("smaasip")+"/SCMXPert/addCopyEvent";
        	$.ajax({
		       	 type:"post",
				 url:url,
				 headers: { Accept : "application/json",
							'Content-Type': "application/json" ,
							'Authorization': localStorage.getItem('SavedToken')
					 		}, 
					 		 
				 data: JSON.stringify(json_value),
        	    success: function(data) {
        	    	$("#saveimage").hide();
        	    	$("#date_"+id).css("width","160px");
        	    }
			});
        }

        function copyToClipboard(text) {
        	var text_val = text;
        	text_val.select();
            document.execCommand("copy");
            //$text.remove();
        }

        function selectDraft(id)
        {
        	
        	//alert(id);
        	/* var checkboxid = $.cookie("checboxid",id);
        	$("#"+checkboxid).prop('checked', false); */
        	/* $('.selectdraftclass:checked').each(function () {
        	    var prev = $(this).prev();
        	    //console.log(prev);
        	});  */
        	
        	/* var sel = $('input[type=checkbox]:checked').map(function(_, el) {
                return $(el).val();
            }).get();
        	//console.log(sel); */
        	$('input[class="selectdraftclass"]').prop('checked' , false);
        	
        	//$('.selectdraftclass').attr('checked', false);
        	var checbox = $("#"+id).val();
        	if(checbox == "true"){
        		$("#"+id).prop( "checked", false );
        		$('input[class="selectdraftclass"]').val("false");
        		document.location.reload();
        	}else{
        		
        		$("#"+id).prop( "checked", true );
        		$('input[class="selectdraftclass"]').val("false");
        		
        	}
        	var goodsvalues = []
        	$("#goods option").each(function(){
        		var values = $(this).attr('value');
        		goodsvalues.push(values);
        	});
        	//console.log(goodsvalues);
        /* 	var favorite = [];
            $.each($("input[name='selectdraftselect']:checked"), function(){
                favorite.push($(this).val());
            }); */
           // //console.log(favorite);
        /* 	for(var i=0; i<sel.length;i++)
        		{
        		//console.log(sel[i]); */
        		
        		/* if(sel[i] == id){
        			//console.log("hello"+sel[i]); */
        			
        		$("#"+id).change(function() {
          		  if ($(this).is(':checked')) {
          			  $("#tableheadercols").hide();
     /*abid            		$.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/getSavedDraft/"+id, function( data ) { 
                			//console.log(data);
                			//console.log(data.typeOfReference); */
                			////alert(data.internal_Shipment_Id);
              /*   		 	var internalshipment = $('#createShipment').find('input[name="internalshipment"]').val(data.shipment_Number);
                        	var cust_name = $('#createShipment').find('input[name="cust_name"]').val(data.customerId);
                        	var bp_name = $('#createShipment').find('input[name="bp_name"]').val(data.parnterFrom); */
                        	
             /*abid             	var route_from = $('#createShipment').find('input[name="route_from"]').val(data.routeFrom);
                        	var route_mode = $('#createShipment').find('input[name="route_mode"]').val(data.mode);
                        	var route_to = $('#createShipment').find('input[name="route_to"]').val(data.routeTo);
                        	var route_inco = $('#createShipment').find('input[name="route_inco"]').val(data.inco);  */
                        	/* var route_from = $('#route_from').append('<option value="'+data.routeFrom+'">'+data.routeFrom+'</option>');
                        	$('#route_from').val(data.routeFrom);
                        	var route_mode = $('#route_mode').val(data.mode);
                        	var route_to = $('#route_to').append('<option value="'+data.routeTo+'">'+data.routeTo+'</option>');
                        	$('#route_to').val(data.routeTo);
                        	var route_inco = $('#route_inco').val(data.inco); */
                        	
                        	//$("#routes").append('<option value="'+data.routeFrom+','+data.routeTo+','+data.mode+','+data.inco+'">'+data.routeFrom+','+data.routeTo+','+data.mode+','+data.inco+'</option>')
                        	//$("#routes").val(data.routeFrom+','+data.routeTo+','+data.mode+','+data.inco);
                        	
                  /*abid       	var typeOfReferences = $('#typeOfReferences').val(data.typeOfReference);
                        	
                        	var shipment_number = $('#createShipment').find('input[name="shipment_number"]').val(data.internal_Shipment_Id);
                        	var comments = $('#createShipment').find('textarea[name="comments[]"]').val(data.comments); */
                        	
                        	/* for(i=0;i<goodsvalues.length;i++){
                        		////console.log(data.goodsId+","+data.goodsType);
                        		if(goodsvalues[i] == data.goodsId+","+data.goodsType)
                        			{
                        			var goods = $('#goods').val(data.goodsId+","+data.goodsType);
                        			}
                        	}
                        	 */
                     /*abid    	var goods = $('#goods').val(data.goodsId+","+data.goodsType);
                           	var routesval = data.routeFrom+','+data.routeTo+','+data.mode+','+data.inco;
                           	var routes = $('#routes').val(data.routeId);
                           	SelectRouteerList(data.routeId);                	
                        	var devices = $('#devices').val(data.deviceId);
                        	var Exp_date = $('#createShipment').find('input[name="Exp_date"]').val(data.estimatedDeliveryDate); */
                /*         	var text = $('#createShipment').find('input[name="internalshipment"]').val();
                        	var text = $('#createShipment').find('input[name="internalshipment"]').val(); */
                        /*abid 	var value=$("input:radio[name=event]:checked").css("display","none");
                        	$("#inboxesvalues>thead").hide();
                        	$("#inboxesvalues>tbody").empty(); */
                        	//$("#tableheadercols").show();
                        	////alert("#"+data.selectEventId);
                    /* 		var partner = $("#partner_name_"+value).val();
                        	var event = $("#event_name_"+value).val();
                        	var datee = $("#event_date_"+value).val(); */
                   /*abid      	$("#row_val_"+data.selectEventId).attr('checked', true);
                		}); */
                		$.ajax({
                		    url: localStorage.getItem("smaasip")+"/SCMXPert/getSavedDraft/"+id,
                		    type : "GET",
                		    dataType: 'json',
                		    headers: { 
                		    	'Content-Type' : "application/json",
                		    	'Authorization': localStorage.getItem('SavedToken'),
                		    	},
                		    success:function( data ){
                		    	//console.log(data);
                    			//console.log(data.typeOfReference);
                    			
                    			var route_from = $('#createShipment').find('input[name="route_from"]').val(data.routeFrom);
                            	var route_mode = $('#createShipment').find('input[name="route_mode"]').val(data.mode);
                            	var route_to = $('#createShipment').find('input[name="route_to"]').val(data.routeTo);
                            	var route_inco = $('#createShipment').find('input[name="route_inco"]').val(data.inco); 
                            	
                            	var typeOfReferences = $('#typeOfReferences').val(data.typeOfReference);
                            	
                            	var shipment_number = $('#createShipment').find('input[name="shipment_number"]').val(data.internal_Shipment_Id);
                            	var comments = $('#createShipment').find('textarea[name="comments[]"]').val(data.comments);
                            	
                            	var goods = $('#goods').val(data.goodsId+","+data.goodsType);
                               	var routesval = data.routeFrom+','+data.routeTo+','+data.mode+','+data.inco;
                               	var routes = $('#routes').val(data.routeId);
                               	SelectRouteerList(data.routeId);                	
                            	var devices = $('#devices').val(data.deviceId);
                            	var Exp_date = $('#createShipment').find('input[name="Exp_date"]').val(data.estimatedDeliveryDate);
                            	
                            	var value=$("input:radio[name=event]:checked").css("display","none");
                            	$("#inboxesvalues>thead").hide();
                            	$("#inboxesvalues>tbody").empty();
                            	
                            	$("#row_val_"+data.selectEventId).attr('checked', true);
                            	
                		    }
                		});
                		$(".savedraft").css({"background":"#fff","color":"#000","font-weight":"500"});
                		$('.savedraft>td>span>img').attr("src","./images/delete.png");
                		$('#savedraft_'+id).css({"background":"#31bcd2","color":"#fff","font-weight":"500"});
                		$('#savedraft_'+id+'>td>span>img').attr("src","./images/delete1.png");
          		    $(this).attr('value', 'true');
          		  } else{
          			 // //console.log("sadf"+sel[i]);
          			
          			  var route_from = $('#createShipment').find('input[name="route_from"]').val('');
                      	var route_mode = $('#createShipment').find('input[name="route_mode"]').val('');
                      	var route_to = $('#createShipment').find('input[name="route_to"]').val('');
                      	var route_inco = $('#createShipment').find('input[name="route_inco"]').val(''); 
                      	$(".savedraft").css({"background":"#fff","color":"#000","font-weight":"500"});
                    		$('.savedraft>td>span>img').attr("src","./images/delete.png");
                    		$('#savedraft_'+id).css({"background":"","color":"#000","font-weight":"500"});
                    		$('#savedraft_'+id+'>td>span>img').attr("src","./images/delete.png");
                    		
          		   // $(this).attr('value', 'false');
          		  }
          		  
          		 // $('#checkbox-value').text($('#checkbox1').val());
          		});
        		/* }else{
        			
        		} */
        		/* } */
        	
        	
        	
        	
        	
        }

        
        function getRandom(length) {

        	return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));

        	}
        function scanbtn()
        {
        	$("header").css({"position":"absolute","z-index":"1"});
    		$(".bodyblur").show();
    		$('#scanboxview').show();
    		  setInterval(function(){ 
    			  $("#scanboxview").hide();
  	    	    $(".bodyblur").hide();
    		  }, 5000);
    		  var randnumber = getRandom(7);
  	    	$(".scaninputnumber").val(randnumber);
        }
        function addlocation()
        {
        	$("header").css({"position":"absolute","z-index":"1"});
    		$(".bodyblur1").show();
    		$('#locationboxview').show();

        }
        function checkvalidatedata()
        {
        	var shipInter = $("#internalshipment").val();
        	var shipScan = $("#scaninputnumber").val();
        	var wayship = $("#selectways").val();
        	var shipDesc = $("#shipdesc").val();
        	var shipbpLoc = $("#selectbplocation").val();
        	var shipSelLoc = $("#selectlocation").val();
        	var shipGoodType = $("#goodstype").val();
        	
        	if(shipScan == '')
        		{
        			$("#scaninputnumber").css({"border":"2px solid red","color":"red"}).attr("placeholder","Enter or Scan Your Shipment Number").focus();
        			return false;
        		}

        }
        function SelectRouteerList(val)
        {
        	//alert(val);
        	
        	if(val != ''){
        	 var res = val.split(",");
        	 $("#refreshiconcreateShipment").attr("onclick","return selectRoute('"+res[1]+"')");
        	 selectRoute(res[1]);
        	 
        	// getRoute_id(res[1]);
        	  var x = res[1];
        	  var Role = $.session.get('Role');
        
        			var UserIds = $.session.get('UserId');
        	
        	var UserId = UserIds;
        		var useridsplit = UserId.split('-');
        		useridsplit[0].toString();
        		useridsplit[0] + "";
        		useridsplit[1].toString();
        		useridsplit[1] + "";
        	  $("#inboxesvalues>thead").show();
        /* 	
         	  $.getJSON( localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0], function( data ) {
          		
          			$.each(data.route,function(keys,values){
        				////alert(values.from+','+values.to+','+values.primary_Mode_Of_Transport);
        				/*  var select_route_items = '<option value="'+values.route_Id+'">'+values.from+','+values.to+','+values.primary_Mode_Of_Transport+'</option>';
        				 $("#routes").append(select_route_items); 
        				 //route_select.push(select_route_items); 
        				 ////alert(values.route_Id);
        				 if(x == values.route_Id)
        					 {
        					 	$("#route_from").val(values.from).css("font-weight","bold");
        					 	$("#route_to").val(values.to).css("font-weight","bold");
        					 	$("#route_mode").val(values.primary_Mode_Of_Transport).css("font-weight","bold");
        					 	$("#route_inco").val(values.inco_Term).css("font-weight","bold");
        					 }
        			
          			});
          		}); */
        
         	  $("#inboxesvalues>thead>tr>th").show();
         	  $("#tableheadercols").hide();
         	 var sysdateime = $("#sysdateandtime").val();
         	$("#event_date_E0001").val(sysdateime);
         	$("#event_date_E0001").val(sysdateime);
        	}else{
        		$("#route_from").val('');
			 	$("#route_to").val('');
			 	$("#route_mode").val('');
			 	$("#route_inco").val('');
			 	$("#inboxesvalues2>tbody").empty();
			 	$("#tableHeader").hide();
        	}
        }
        function draftList()
        {
var UserIds = $.session.get('UserId');
        	
    		var UserId = UserIds;
    			var useridsplit = UserId.split('-');
    			useridsplit[0].toString();
    			useridsplit[0] + "";
    			useridsplit[1].toString();
    			useridsplit[1] + "";
    	
    			$("#draftTable tbody").empty();
/*abid         	$.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/customerGetSavedDraft/"+useridsplit[0], function(data){
    			
    			if(data.length > 0)
    				{
    					$("#draftTable").show();
    				}
    			$(".dataTables_empty").hide(); */
    			////alert(data.internal_Shipment_Id);
/*abid 				$.each(data,function(key,val){
					////alert(val.internal_Shipment_Id);
					 var adddraft = '<tr class="p-0 savedraft" style=" font-size:12px;font-weight:bold;" id="savedraft_'+val.internal_Shipment_Id+'"><td><span><input type="checkbox" class="selectdraftclass" id="'+val.internal_Shipment_Id+'" value="'+val.internal_Shipment_Id+'" onclick="javascript:selectDraft(\''+val.internal_Shipment_Id+'\')" name="selectdraftselect" style="width:12px;position: relative;margin:5px;"/></span></td><td>'+val.comments+'</td><td>'+val.internal_Shipment_Id+'</td><td>'+val.routeFrom+'</td><td>'+val.routeTo+'</td><td>'+val.goodsType+'</td><td>'+val.mode+'</td><td>'+val.inco+'</td><td><span><img src="./images/delete.png" onclick="javascript:deleteDraft(\''+val.internal_Shipment_Id+'\');" alt="Delete Draft" style="width:12px;cursor: pointer;"/></span></td></tr>';
						$("#draftTable tbody").append(adddraft);
				}); */
    			/* var adddraft = '<tr class="p-0" style=" font-size:12px;font-weight:bold;"><td>'+internalshipment+'</td><td>'+shipment_number+'</td><td>'+route_from+'</td><td>'+route_to+'</td><td>'+goods+'</td><td>'+route_inco+'</td><td><span><input type="checkbox" style="width:15px;height:15px;"/></span><span><img src="./images/delete.png" onclick="javascript:deleteDraft(\''+internalshipment+'\');" alt="Delete Draft"/></span></td></tr>';
				$("#draftTable tbody").append(adddraft); */
    			
//abid    		});
        	$.ajax({
        	    url: localStorage.getItem("smaasip")+"/SCMXPert/customerGetSavedDraft/"+useridsplit[0],
        	    type : "GET",
        	    dataType: 'json',
        	    headers: { 
        	    	'Content-Type' : "application/json",
        	    	'Authorization': localStorage.getItem('SavedToken'),
        	    	},
        	    success:function(data){
        	    	if(data.length > 0)
    				{
    					$("#draftTable").show();
    				}
    			$(".dataTables_empty").hide();
    			
    			$.each(data,function(key,val){
					////alert(val.internal_Shipment_Id);
					 var adddraft = '<tr class="p-0 savedraft" style=" font-size:12px;font-weight:bold;" id="savedraft_'+val.internal_Shipment_Id+'"><td><span><input type="checkbox" class="selectdraftclass" id="'+val.internal_Shipment_Id+'" value="'+val.internal_Shipment_Id+'" onclick="javascript:selectDraft(\''+val.internal_Shipment_Id+'\')" name="selectdraftselect" style="width:12px;position: relative;margin:5px;"/></span></td><td>'+val.comments+'</td><td>'+val.internal_Shipment_Id+'</td><td>'+val.routeFrom+'</td><td>'+val.routeTo+'</td><td>'+val.goodsType+'</td><td>'+val.mode+'</td><td>'+val.inco+'</td><td><span><img src="./images/delete.png" onclick="javascript:deleteDraft(\''+val.internal_Shipment_Id+'\');" alt="Delete Draft" style="width:12px;cursor: pointer;"/></span></td></tr>';
						$("#draftTable tbody").append(adddraft);
				});
        	    }
        	});
        }
        function SelectGoods(val)
        {
        	
        	 var res = val.split(",");
        	 //getbp_id(res[0]);
        	  var x = res[0];
        	  var Role = $.session.get('Role');
        	
        			var UserIds = $.session.get('UserId');
        
        	var UserId = UserIds;
        		var useridsplit = UserId.split('-');
        		useridsplit[0].toString();
        		useridsplit[0] + "";
        		useridsplit[1].toString();
        		useridsplit[1] + "";
        	 // $("#inboxesvalues>thead").show();
   /*abid       	  $.getJSON( localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0], function( data ) {
          		
          			$.each(data.goods,function(keys,values){ */
        				////alert(values.from+','+values.to+','+values.primary_Mode_Of_Transport);
        				/*  var select_route_items = '<option value="'+values.route_Id+'">'+values.from+','+values.to+','+values.primary_Mode_Of_Transport+'</option>';
        				 $("#routes").append(select_route_items); */
        				 //route_select.push(select_route_items); 
        				 ////alert(values.route_Id);
    /*abid     				 if(x == values.goods_Id)
        					 {
        					 	$("#temp").val(values.temperature_From+' - '+values.temperature_To+' '+values.tempUnits).css("font-weight","bold");
        					 	$("#humdity").val(values.humidity_From+' - '+values.humidity_To+' '+values.humiUnits).css("font-weight","bold");
        					 	$("#evidence").val(values.evidenceSelect).css("font-weight","bold");
        					 }
        			
          			});
          		}); */
         		$.ajax({
         		    url: localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0],
         		    type : "GET",
         		    dataType: 'json',
         		   headers: { 
         			  'Content-Type' : "application/json",
         			   'Authorization': localStorage.getItem('SavedToken'),
         			   },
         		    success:function( data ){
         		   	$.each(data.goods,function(keys,values){
        				////alert(values.from+','+values.to+','+values.primary_Mode_Of_Transport);
        				/*  var select_route_items = '<option value="'+values.route_Id+'">'+values.from+','+values.to+','+values.primary_Mode_Of_Transport+'</option>';
        				 $("#routes").append(select_route_items); */
        				 //route_select.push(select_route_items); 
        				 ////alert(values.route_Id);
        				 if(x == values.goods_Id)
        					 {
        					 	$("#temp").val(values.temperature_From+' - '+values.temperature_To+' '+values.tempUnits).css("font-weight","bold");
        					 	$("#humdity").val(values.humidity_From+' - '+values.humidity_To+' '+values.humiUnits).css("font-weight","bold");
        					 	$("#evidence").val(values.evidenceSelect).css("font-weight","bold");
        					 }
        			
          			});
         		    }
         		});
/*          	  $("#inboxesvalues>thead>tr>th").show();
         	  $("#tableheadercols").hide();
         	 var sysdateime = $("#sysdateandtime").val();
         	$("#event_date_E0001").val(sysdateime); */
        }
        function selectbp_id(valuesbp)
        {
        	////alert(valuesbp);
        	  var Role = $.session.get('Role');

			var UserIds = $.session.get('UserId');
		
	var UserId = UserIds;
		var useridsplit = UserId.split('-');
		useridsplit[0].toString();
		useridsplit[0] + "";
		useridsplit[1].toString();
		useridsplit[1] + "";
 /*abid         $.getJSON( localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0], function( data ) {
        	 ////alert(data);
         	$.each(data.bussinesPartnersDetails,function(key,val){
	 			////alert(val.events);
	 			
	 			if(valuesbp == val.bp_Id)
	 				{// //alert(val.events.length); 
	 					$("#company_name").val(val.company_Name).css("font-weight","bold");
	 					$("#inboxesvalues>tbody").empty();
	 				$.each(val.events,function(keys,values){
		 				var eventsboxes = '<tr><td class="p-1"><input type="radio" name="event" style="width:14px;" value="'+val.event_Id+'"/></td><td class="p-1" style="font-size: 10px;"></td><td class="p-1" style="font-size: 10px;"><input type="text" value="'+val.event_Id+'" style="height:25px;font-size: 12px;font-weight:bold;" /> </td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="partner_name_'+val.event_Id+'" value="'+part_from+'" style="height:25px;font-size: 12px;font-weight:bold;" /></td><td class="pl-1"><input type="text" class="form-control mb-1  inputboxesevents" id="event_name_'+val.event_Id+'" value="'+val.event_Name+'" style="height:25px;font-size: 12px;font-weight:bold;" /></td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="event_date_'+val.event_Id+'" value="'+date_create+'" placeholder="Select Date" style="height:25px;font-size: 12px;font-weight:bold;" /></td></tr>';
		 				$("#inboxesvalues>tbody").append(eventsboxes);
		 				$('#datepicker-'+values.event_Id).datepicker();
		 				$(".E0001").attr('disabled', 'disabled').css({"background":"#ccd0d4"});
		 				
		 			});
	 				}
	 			
	 		}); 
         }); */
     	$.ajax({
     	    url: localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0],
     	    type : "GET",
     	    dataType: 'json',
     	   headers: { 
     		  'Content-Type' : "application/json",
     		   'Authorization': localStorage.getItem('SavedToken'),
     		   },
     	    success:function( data ){
     	   	 ////alert(data);
             	$.each(data.bussinesPartnersDetails,function(key,val){
    	 			////alert(val.events);
    	 			
    	 			if(valuesbp == val.bp_Id)
    	 				{// //alert(val.events.length); 
    	 					$("#company_name").val(val.company_Name).css("font-weight","bold");
    	 					$("#inboxesvalues>tbody").empty();
    	 				$.each(val.events,function(keys,values){
    		 				var eventsboxes = '<tr><td class="p-1"><input type="radio" name="event" style="width:14px;" value="'+val.event_Id+'"/></td><td class="p-1" style="font-size: 10px;"></td><td class="p-1" style="font-size: 10px;"><input type="text" value="'+val.event_Id+'" style="height:25px;font-size: 12px;font-weight:bold;" /> </td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="partner_name_'+val.event_Id+'" value="'+part_from+'" style="height:25px;font-size: 12px;font-weight:bold;" /></td><td class="pl-1"><input type="text" class="form-control mb-1  inputboxesevents" id="event_name_'+val.event_Id+'" value="'+val.event_Name+'" style="height:25px;font-size: 12px;font-weight:bold;" /></td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="event_date_'+val.event_Id+'" value="'+date_create+'" placeholder="Select Date" style="height:25px;font-size: 12px;font-weight:bold;" /></td></tr>';
    		 				$("#inboxesvalues>tbody").append(eventsboxes);
    		 				$('#datepicker-'+values.event_Id).datepicker();
    		 				$(".E0001").attr('disabled', 'disabled').css({"background":"#ccd0d4"});
    		 				
    		 			});
    	 				}
    	 			
    	 		}); 
     	    }
     	});
         var events_is = $('#inboxesvalues tr:first').find('td:eq(1) div').attr("id");
     	$("#"+events_is).prop("checked", true)
        	
       
        }
        function saveasDraft()
        {
			var UserIds = $.session.get('UserId');        	
    		var UserId = UserIds;
    			var useridsplit = UserId.split('-');
    			useridsplit[0].toString();
    			useridsplit[0] + "";
    			useridsplit[1].toString();
    			useridsplit[1] + "";
        	$(".dataTables_empty").hide();
        	var internalshipment = $('#createShipment').find('input[name="internalshipment"]').val();
        	var Cust_Id = $('#createShipment').find('input[name="Cust_Id"]').val();
        	var bp_name = $('#createShipment').find('input[name="bp_name"]').val();
        	var route = $('#routes').val();
        	//var route_from = $('#createShipment').find('input[name="route_from"]').val();
        	var route_from = $('#route_from').val();
        /* 	var route_mode = $('#createShipment').find('input[name="route_mode"]').val();
        	var route_to = $('#createShipment').find('input[name="route_to"]').val();
        	var route_inco = $('#createShipment').find('input[name="route_inco"]').val(); */
        	var route_mode = $('#route_mode').val();
        	var route_to = $('#route_to').val();
        	var route_inco = $('#route_inco').val();
        	
        	var typeOfReferences = $('#typeOfReferences').val();
        	var shipment_number = $('#createShipment').find('input[name="shipment_number"]').val();
        	var comments = $('#createShipment').find('textarea[name="comments[]"]').val();
        	var goods = $('#goods').val();
        	var devices = $('#devices').val();
        	var routes = $('#routes').val();
        	var Exp_date = $('#createShipment').find('input[name="Exp_date"]').val();
/*         	var text = $('#createShipment').find('input[name="internalshipment"]').val();
        	var text = $('#createShipment').find('input[name="internalshipment"]').val(); */
        	var value=$("input:radio[name=event]:checked").val();
    		var partner = $("#partner_name_"+value).val();
        	var event = $("#event_name_"+value).val();
        	var datee = $("#event_date_"+value).val();
        	//var comments = $("#comments").val();
        	var error = document.getElementById("error");
        	var goodtype = goods.split(",");
        	var routevalues =  route_from+','+route_to+','+route_mode+','+route_inco;
        	
        	if(shipment_number ==""){
        		var text1 = "Enter Shipment Number";
        	error5.innerHTML= text1;
        	$("#shipment_number").focus().css("border","1px solid red");
        	return false;
        	}else{
        		$("#shipment_number").focus().css("border", "1px solid #CCC");
        	}
        	
        	
        	if(comments == ""){
				var text1 = "Enter Shipment Description";
				error5.innerHTML = text1;
				$("#comments").focus().css("border","1px solid red");
				return false;
		 	}else{
		 		$("#comments").css("border", "1px solid #CCC");
		 	}
        	
        	
        	
        	
        	
        	
        	/* if(shipment_number == ""){
				var text = "Enter Shipment Number";
				error.innerHTML = text;
				$("#shipment_number").focus().css("border","1px solid red");
				return false;
		 	}
        	if(typeOfReferences == ""){
				var text = "Select Reference";
				error.innerHTML = text;
				$("#typeOfReferences").focus().css("border","1px solid red");
				return false;
		 	}
        	if(routes == ""){
				var text = "Select Route";
				error.innerHTML = text;
				$("#routes").focus().css("border","1px solid red");
				return false;
		 	}
        	if(goods == ""){
				var text = "Select Goods";
				error.innerHTML = text;
				$("#goods").focus().css("border","1px solid red");
				return false;
		 	}
        	if(devices == ""){
				var text = "Select Device";
				error.innerHTML = text;
				$("#devices").focus().css("border","1px solid red");
				return false;
		 	}
        	if(Exp_date == ""){
				var text = "Enter Delivery Date";
				error.innerHTML = text;
				$("#expected_date").focus().css("border","1px solid red");
				return false;
		 	}
        	 */
        	//alert(comments);
        	/* alert("in first"+comments);
        	 var commentsarr=[comments]; */
        	var json_value = {
        			"internal_Shipment_Id" :shipment_number,
        			"customer_Id" : Cust_Id,
        			"shipment_Number" : internalshipment,
        			"typeOfReference" :typeOfReferences,
        			"comments" : comments,
        			"routeId" : route,
        			"routeFrom" : route_from,
        			"routeTo" : route_to,
        			"goodsId" : goodtype[0],
        			"goodsType" : goodtype[1],
        			"deviceId" : devices,
        			"estimatedDeliveryDate" : Exp_date,
        			"parnterFrom" : partner,
        			"partnerTo" : "",
        			"inco": route_inco,
        			"eventName" : event,
        			"routeInfo" : routevalues,
        			"mode":route_mode,
        			"selectEventId" : value,
        			"dateAndTime" : ""
        			
        		};
       // 	//alert(JSON.stringify(json_value));
      // var rowCount = $('#draftTable >tbody >tr>td').length;
      // //alert(rowCount)
        var url = localStorage.getItem("smaasip")+"/SCMXPert/saveDraft";
        	$.ajax({
		       	 type:"post",
				 url:url,
				 headers: { Accept : "application/json",
							'Content-Type': "application/json",
							'Authorization': localStorage.getItem('SavedToken')
					 		}, 
					 		
				 data: JSON.stringify(json_value),
        	    success: function(data) {
        	    	var adddraft = '<tr class="p-0 savedraft" style=" font-size:12px;font-weight:bold;" id="savedraft_'+shipment_number+'"><td><span><input type="checkbox" class="selectdraftclass" value="'+shipment_number+'" onclick="javascript:selectDraft(\''+shipment_number+'\')" name="selectdraftselect" style="width:12px;position: relative;top:4px;margin:5px;" id="'+shipment_number+'"/></span></td><td>'+comments+'</td><td>'+shipment_number+'</td><td>'+route_from+'</td><td>'+route_to+'</td><td>'+goodtype[1]+'</td><td>'+route_mode+'</td><td>'+route_inco+'</td><td><span><img src="./images/delete.png" onclick="javascript:deleteDraft(\''+shipment_number+'\');" alt="Delete Draft" style="width:12px;cursor: pointer;"/></span></td></tr>';
					
					$(".showviewdata").show().html('<div class="alert alert-success" role="alert">Shipment Successful Save In Draft</div>');
        	     	 $.when($(".showviewdata").fadeOut(1000)).done(function(){
        	     		//$("#draftTable tbody").prepend(adddraft);
        	    		//createshipmentlink();
        	    		$("#shipment_number").val('');
        	    		$("#typeOfReferences").val('');
        	    		$("#comments").val('');
        	    		$("#routes").val('');
        	    		$("#goods").val('');
        	    		
        	    		$("#devices").val('');
        	    		$("#expected_date").val('');
        	    		$("#shipment_number").val('');
        	    		$("#tableHeader").hide();
        	    		$("#inboxesvalues2").hide();
        	    		$("#route_from").val('');
        			 	$("#route_to").val('');
        			 	$("#route_mode").val('');
        			 	$("#route_inco").val('');
        			 	$("#temp").val('');
					 	$("#humdity").val('');
					 	$("#evidence").val('');
					 	draftList();
//document.location.reload();
        			 	
        	    	});
        	     	//$("#draftTable tbody").append(adddraft);
					//var rowCount = $('#draftTable >tbody >tr').length;
					/* if(rowCount == 0)
						{
						$("#draftTable>tbody").empty();
						$("#draftTable>tbody").append(adddraft);
						}else{
							$("#draftTable>tbody").append(adddraft);
						} 
					*/ 
        	    },
        	});  
        	
    
        	
        }
        
        function createShipment()
        {
        	var internalshipment = $('#createShipment').find('input[name="internalshipment"]').val();
        	var cust_name = $('#createShipment').find('input[name="Cust_Id"]').val();
        	var bp_name = $('#createShipment').find('input[name="bp_name"]').val();
        /* 	var route_from = $('#createShipment').find('input[name="route_from"]').val();
        	var route_mode = $('#createShipment').find('input[name="route_mode"]').val();
        	var route_to = $('#createShipment').find('input[name="route_to"]').val();
        	var route_inco = $('#createShipment').find('input[name="route_inco"]').val(); */
        	var route_from = $('#route_from').val();
        	var route_mode = $('#route_mode').val();
        	var route_to = $('#route_to').val();
        	var route_inco = $('#route_inco').val(); 
        	var temp = $('#createShipment').find('input[name="temp"]').val();
        	var rh = $('#createShipment').find('input[name="rH"]').val();
        	var typeOfReferences = $('#typeOfReferences').val();
        	var shipment_number = $('#createShipment').find('input[name="shipment_number"]').val();
        	var po_number = $('#createShipment').find('input[name="po_number"]').val();
        	var batch_id = $('#createShipment').find('input[name="batch_id"]').val();
        	var ndc_number = $('#createShipment').find('input[name="ndc_number"]').val();
        	var invoice_number = $('#createShipment').find('input[name="invoice_number"]').val();
        	var shipper_number = $('#createShipment').find('input[name="shipper_number"]').val();
        	var serial_number_of_goods = $('#createShipment').find('input[name="serial_number_of_goods"]').val();        	
        	var comments = $('#createShipment').find('textarea[name="comments[]"]').val();       	
        	var goods = $('#goods').val();
        	var val = $('#routes').val();
        	var devices = $('#devices').val();
        	
        	var Exp_date = $('#createShipment').find('input[name="Exp_date"]').val();
        	
        	var cmo_ref_number = $('#createShipment').find('input[name="cmo_ref_number"]').val();
        	var plant = $('#plantName').val();
        	
        	/* if(shipment_number == ""){
				var text = "Enter Shipment Number";
				error.innerHTML = text;
				
				$("#shipment_number").focus().css("border","1px solid red");
				return false;
		 	} */
  //      	if(invoice_number == ""){
//				var text = "Enter Delivery Number";
//				error.innerHTML = text;
				
//				$("#invoice_number").focus().css("border","1px solid red");
//				return false;
//		 	}
  //      	else{
//		 		$("#invoice_number").focus().css("border", "1px solid #CCC");
	//	 	}
        	if((invoice_number == "") && (cmo_ref_number == "")){
				var text = "Enter Delivery Number or CMO Reference Number";
				error.innerHTML = text;				
				$("#invoice_number,#cmo_ref_number").focus().css("border","1px solid red");
			//	$("#cmo_ref_number").focus().css("border","1px solid red");
				return false;
		 	}
        	 else{
		 		$("#invoice_number,#cmo_ref_number").focus().css("border", "1px solid #CCC");
		 	//	$("#cmo_ref_number").focus().css("border", "1px solid #CCC");
		 	} 	 	
		 	
        	if(typeOfReferences == ""){
				var text = "Select Reference";
				error.innerHTML = text;
				$("#typeOfReferences").focus().css("border","1px solid red");
				return false;
		 	}
        	
        	
        	
        	if(comments == ""){
				var text = "Enter Description";
				error.innerHTML = text;
				$("#comments").focus().css("border","1px solid red");
				return false;
		 	}else{
		 		$("#comments").focus().css("border", "1px solid #CCC");
		 	}
        	
        	if(val == ""){
				var text = "Select Route";
				error.innerHTML = text;
				$("#routes").focus().css("border","1px solid red");
				return false;
		 	}
        	
        	
        
        	if(goods == ""){
				var text = "Select Goods";
				error.innerHTML = text;
				$("#goods").focus().css("border","1px solid red");
				return false;
		 	}
        	/* if(devices == ""){
				var text = "Select Device";
				error.innerHTML = text;
				$("#devices").focus().css("border","1px solid red");
				return false;
		 	} */
        	if(Exp_date == ""){
				var text = "Enter Delivery Date";
				error.innerHTML = text;
				$("#expected_date").focus().css("border","1px solid red");
				return false;
		 	}
        	if(plant == ""){
				var text = "Select Plant";
				error.innerHTML = text;
				$("#plantName").focus().css("border","1px solid red");
				return false;
		 	}
        	
        	
        	var date =  new Date(Exp_date); 
        	date.setTime(date.getTime() + (330 * 60 * 1000));
        	var isoDate = date.toISOString();
/*         	var text = $('#createShipment').find('input[name="internalshipment"]').val();
        	var text = $('#createShipment').find('input[name="internalshipment"]').val(); */
        
        	////alert(val);
	       	var res = val.split(",");
       	  	var x = res[1];
       	    var y = res[2];
       	 	var valg = $('#goods').val();
     	////alert(val);
	       	var res = valg.split(",");
    	  	var goodsId = res[0];
    	  	var custgoodsId = res[2];
       	  	
        	 var table = $('#inboxesvalues2').tableToJSON();
////console.log(table);return false;
        	var value=$("input:radio[name=event]:checked").val();
		$('[type="checkbox"]:checked:first').prop("checked",true);
		var lsdf = [];
		$.each(table[0],(function(key,value){
		//	console.log(value);
	lsdf.push(value);
}));

//console.log(lsdf);

    		var partner = lsdf[3];
        	var event = lsdf[4];
        	var datee = $("#date_"+value).text();
               //	//console.log(table); return false;
        	////alert(JSON.stringify(table));
        	////console.log("shipper num "+shipper_number);
        	//return false;
        	/* var CommentsArr=[comments];
        	//commentsArr.push(comments);
        	alert(CommentsArr[0])
        	alert("in conments arr");
        	alert(comments); */
        	
        	var goodtype = goods.split(",");
        	var json_value = {        		     			
        			//		"shipment_Num":shipment_number,
        					"shipment_Num":invoice_number,
        					"customerId":cust_name,
        					"shipment_Number":internalshipment,        					
        					"internalShipmentId":internalshipment,
        					"typeOfReference":'Purchase Order',
							"partner":partner,
        					"event":event,
        					"comments":[comments],
        					"routeId":x,
        					"custRouteId":y,
        					"routeFrom":route_from,
        					"routeTo":route_to,
        					"goodsId":goodsId,
        					"custGoodId":custgoodsId,
        					"goodsType":res[1],
        					"parnterFrom":bp_name,
        					"deviceId":devices,
        					"allEvents":table,
        					'batch_Id':batch_id,
        					"po_Number":po_number,
        					"ndc_Number":ndc_number,
        				//	"invoice_Number":invoice_number,
        					"invoice_Number":shipment_number,
        					"shipper_Number":shipper_number,
        					"serial_Number_of_goods":serial_number_of_goods,
        					"incoTerms":route_inco,
        					"mode":route_mode,
        					"temp":temp,
        					"rH":rh,        					
        					"datee":isoDate,
        					"estimatedDeliveryDate":isoDate,
        					"cmo_Ref_Number":cmo_ref_number,
        					"plant":plant,
        					"secondDevice":"",
        					"thirdDevice":"",
        					"fourthDevice":"",
        					"fifthDevice":"",
        					"numberOfDevices":"",
        					"previousDelivery":"",
        					"previousInvoice":"",
        					"previousPlant":"",
        					"shipmentModel":"",
        					"evidence_URL":[],
        					"evidenceList":[]
        					};
        	//console.log(JSON.stringify(json_value));
         	// //alert(JSON.stringify(json_value));
        	 /* //console.log(JSON.stringify(json_value));
        	return false;   */
        	//return false;  
      // var rowCount = $('#draftTable >tbody >tr>td').length;
      // //alert(rowCount)
///     console.log(JSON.stringify(json_value));
///     return false;
       var url = localStorage.getItem("smaasip")+"/SCMXPert/createNewShipment";
   //    console.log(url);
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
        	    	//document.location.reload();
        	    	var correct = '<img src="./images/correct.gif" id="tickimg" style="width:65px;"/>';
        	    	//$(".showviewdata").show().html('<div class="alert alert-success" role="alert">Shipment Successful Created Move To Dashboard <a href="./Dashboard.jsp">Dashboard</a></div>');
        	    	$(".body_blur").html('<div class="alert alert-success" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;text-align:center;">'+correct+'Shipment Created Successfully Moving To Dashboard <a href="./Dashboard.jsp">Dashboard</a>.</div>').css({"background":"#000000c2"});
        	    	setTimeout(function (){

              		  // Something you want delayed.
              		  //$("#createShipment").hide();
        	    		//Dashboard();
        	    		//after submit
        	    		$.cookie("internalshipment",internalshipment);
        	    		window.location.href = 'Dashboard.jsp#CreateShipmentSuccess';

              		}, 5000); 
        	    /* 	deleteDraftfromcreate(shipment_number);
        	    	$.when($(".showviewdata").fadeOut(3000)).done(function(){
        	    		createshipmentlink()
        	    	}); */
        	    	
        	    	/* $("#notified").empty();
        	    	$("#notified").html('<div class="alert alert-success" role="alert">Successful Created</div>'); */
        	    	//$(".alert").hide("slow");
        	    
        	    	
        	    	/*    	
        	    	        	    	
					var adddraft = '<tr class="p-0" style=" font-size:12px;font-weight:bold;"><td>'+internalshipment+'</td><td>'+shipment_number+'</td><td>'+route_from+'</td><td>'+route_to+'</td><td>'+goods+'</td><td>'+route_inco+'</td><td><span class="bg-danger" style="margin-left:4px;width: 100px;padding: 5px;border-radius: 3px;color: #fff;font-weight: 600;" onclick="javascript:deleteDraft(\''+internalshipment+'\');">Delete Draft</span></td></tr>';
					$("#draftTable tbody").append(adddraft);
					//var rowCount = $('#draftTable >tbody >tr').length;
					 */
        	    },
        	});  
        	
        	
        	
        	
        }
/*         function checkparams(){
var UserIds = $.session.get('UserId');
        	
    		var UserId = UserIds;
    			var useridsplit = UserId.split('-');
    			useridsplit[0].toString();
    			useridsplit[0] + "";
    			useridsplit[1].toString();
    			useridsplit[1] + "";
        	$.ajax({
        	    url: localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0],
        	    type : "GET",
        	    dataType: 'json',
        	    headers: {
        	    	'Content-Type' : "application/json",
      	        	    'Authorization': localStorage.getItem('SavedToken'),
      	        	  }, 
        	    success:function(data){
        	    	//console.log(data);
        	    	$("#goods").empty();
        	    	$("#goods").html('<option value="">Select Goods</option>');
        	    	$("#routes").empty();
        	    	$("#routes").html('<option value="">Select Route</option>');
        	    	$("#devices").empty();
        	    	$("#devices").html('<option value="">Select Device</option>');
        	 		var routeslist = [];
        	 		 $("#internalshipment").val(data.internalShipmentId);
        		 		$.each(data.business_Partner_Id,function(keys,values){
        					////alert(values.from+','+values.to+','+values.primary_Mode_Of_Transport);
        					 var select_device_Id_items = '<option value="'+values+'">'+values+'</option>';
        					 routeslist.push(values);
        					 $("#event_partner_from,#selectvalues").append(select_device_Id_items);
        					 //device_Id_select.push(select_device_Id_items); 
        				});  
        		 		
        		 		$.each(data.goods,function(keys,values){
        					if(values.goods_Status == "Active"){
            				var select_goods_items = '<option value="'+values.goods_Id+','+values.goods_Item+'">'+values.goods_Item+'</option>';
            				$("#goods").append(select_goods_items);
        					}
        					
        					var optionValues =[];
                			$('#goods option').each(function(){
                			    if($.inArray(this.value, optionValues) >-1){
                   			       $(this).remove()
                			    }else{
                			       optionValues.push(this.value);
                			    }
                			 });
                			
                			var optionValues =[];
                   			$.each(data.route,function(keys,values){
                				////alert(values.from+','+values.to+','+values.primary_Mode_Of_Transport);
                				if(values.status == "Active"){
                				 var select_route_items = '<option value="'+values.businessId+','+values.route_Id+'">'+values.from+','+values.to+','+values.primary_Mode_Of_Transport+','+values.inco_Term+'</option>';
                				 $("#routes").append(select_route_items);
                				}
                				
                   			}); 
                   			$('#routes option').each(function(){
                			    if($.inArray(this.value, optionValues) >-1){
                			       $(this).remove()
                			    }else{
                			       optionValues.push(this.value);
                			    }
                			 });
                   			
                   			var optionValues =[];
                			$.each(data.typeOfReferences,function(keys,values){
                				
                				 var select_typeOfReferences_items = '<option value="'+values+'">'+values+'</option>';
                				 $("#typeOfReferences").append(select_typeOfReferences_items);
                				 
                			});   
                			$('#typeOfReferences option').each(function(){
                			    if($.inArray(this.value, optionValues) >-1){
                			       $(this).remove()
                			    }else{
                			       optionValues.push(this.value);
                			    }
                			 });
                			///////////////////
                				$.each(data.device_Id,function(keys,values){
                					//////
                					 var select_device_Id_items = '<option value="'+values+'">'+values+'</option>';
                    				 $("#devices").append(select_device_Id_items);
                    				 //////////
                				});  
                    			var optionValues =[];
                    			$('#devices option').each(function(){
                    			    if($.inArray(this.value, optionValues) >-1){
                    			       $(this).remove()
                    			    }else{
                    			       optionValues.push(this.value);
                    			    }
                    			 });
                    			
        					
        		 		});
        	    }
        	});
        } */
        function reset()
        {
        		    		createshipmentlink();
	    	
        	/* var route_from = $('#createShipment').find('input[name="route_from"]').val('');
        	var route_mode = $('#createShipment').find('input[name="route_mode"]').val('');
        	var route_to = $('#createShipment').find('input[name="route_to"]').val('');
        	var route_inco = $('#createShipment').find('input[name="route_inco"]').val('');
        	var typeOfReferences = $('#typeOfReferences').val('');
        	var shipment_number = $('#createShipment').find('input[name="shipment_number"]').val('');
        	var comments = $('#comments').val('');
        	var goods = $('#goods').val('');
        	var routes = $('#routes').val('');
        	var devices = $('#devices').val('');
        	var Exp_date = $('#createShipment').find('input[name="Exp_date"]').val('');
/*         	var text = $('#createShipment').find('input[name="internalshipment"]').val();
        	var text = $('#createShipment').find('input[name="internalshipment"]').val(); 
        	var value=$("input:radio[name=event]:checked").css("display","none");
        	$("#inboxesvalues>thead").hide();
        	$("#inboxesvalues>tbody").empty();
        	$("#tableheadercols").show(); */
    /* 		var partner = $("#partner_name_"+value).val();
        	var event = $("#event_name_"+value).val();
        	var datee = $("#event_date_"+value).val(); */
        }
        function refresh()
        {
        	 location.reload();
        }
        
        function deleteDraft(id)
        {
        	
            var url = localStorage.getItem("smaasip")+"/SCMXPert/deleteDraft/"+id;
        	$.ajax({
		       	 type:"post",
				 url:url,
				 headers: { Accept : "application/json",
							'Content-Type': "application/json",
							'Authorization': localStorage.getItem('SavedToken')
					 		}, 
				 
        	    success: function(data) {
        	    	draftList();
        	    	//$("#savedraft_"+id).hide();
        	    	/* /* $.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/getAllDrafts", function(data){
            			$(".dataTables_empty").hide();
    					$.each(data,function(key,val){
    						 var adddraft = '<tr class="p-0 savedraft" style=" font-size:12px;font-weight:bold;" id="savedraft_'+val.shipment_Number+'"><td>'+val.shipment_Number+'</td><td>'+val.comments+'</td><td>'+val.routeFrom+'</td><td>'+val.routeTo+'</td><td>'+val.goodsType+'</td><td>'+val.inco+'</td><td><span><input type="radio" val="'+val.internal_Shipment_Id+'" onclick="javascript:selectDraft(\''+val.internal_Shipment_Id+'\')" name="selectdraftselect" style="width:12px;position: relative;top:4px;margin-right:10px;"/></span><span><img src="./images/delete.png" onclick="javascript:deleteDraft(\''+val.internal_Shipment_Id+'\');" alt="Delete Draft" style="width:12px;cursor: pointer;"/></span></td></tr>';
    							$("#draftTable tbody").append(adddraft);
    							$(".showviewdata").show().html('<div class="alert alert-success" role="alert" style="margin:0px;">Delete Draft Successful</div>');
    							$(".showviewdata").fadeOut(3000);
    					});
            			/* var adddraft = '<tr class="p-0" style=" font-size:12px;font-weight:bold;"><td>'+internalshipment+'</td><td>'+shipment_number+'</td><td>'+route_from+'</td><td>'+route_to+'</td><td>'+goods+'</td><td>'+route_inco+'</td><td><span><input type="checkbox" style="width:15px;height:15px;"/></span><span><img src="./images/delete.png" onclick="javascript:deleteDraft(\''+internalshipment+'\');" alt="Delete Draft"/></span></td></tr>';
    					$("#draftTable tbody").append(adddraft);
            			
            		}); */
        	    },
        	}); 
        }
        function escapeHtml(unsafe)
        {
        	//console.log(unsafe)
  //      	if(typeof unsafe === "undefined" || typeof unsafe.replace === "undefined" || unsafe.length<1){
    //    		return unsafe
      //  	}
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
       /*  function deleteDraftfromcreate(id)
        {
        	
            var url = localStorage.getItem("smaasip")+"/SCMXPert/deleteDraft/"+id;
        	$.ajax({
		       	 type:"post",
				 url:url,
				 headers: { Accept : "application/json",
							'Content-Type': "application/json" 
					 		}, 
				 
        	    success: function(data) {
					$("#draftTable tbody").empty();
        	    	$.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/getAllDrafts", function(data){
            			$(".dataTables_empty").hide();
    					$.each(data,function(key,val){
    						 var adddraft = '<tr class="p-0 savedraft" style=" font-size:12px;font-weight:bold;" id="savedraft_'+val.internal_Shipment_Id+'"><td>'+val.internal_Shipment_Id+'</td><td>'+val.shipment_Number+'</td><td>'+val.routeFrom+'</td><td>'+val.routeTo+'</td><td>'+val.goodsType+'</td><td>'+val.inco+'</td><td><span><input type="radio" val="'+val.internal_Shipment_Id+'" onclick="javascript:selectDraft(\''+val.internal_Shipment_Id+'\')" name="selectdraftselect" style="width:12px;position: relative;top:4px;margin-right:10px;"/></span><span><img src="./images/delete.png" onclick="javascript:deleteDraft(\''+val.internal_Shipment_Id+'\');" alt="Delete Draft" style="width:12px;cursor: pointer;"/></span></td></tr>';
    							$("#draftTable tbody").append(adddraft);
    							
    					});
            			/* var adddraft = '<tr class="p-0" style=" font-size:12px;font-weight:bold;"><td>'+internalshipment+'</td><td>'+shipment_number+'</td><td>'+route_from+'</td><td>'+route_to+'</td><td>'+goods+'</td><td>'+route_inco+'</td><td><span><input type="checkbox" style="width:15px;height:15px;"/></span><span><img src="./images/delete.png" onclick="javascript:deleteDraft(\''+internalshipment+'\');" alt="Delete Draft"/></span></td></tr>';
    					$("#draftTable tbody").append(adddraft); 
            			
            		});
        	    },
        	}); 
        } */
        
        
     /*    function changeEXpDate(dateval)
        {
        	var part_from = $.cookie("BP_ID");
        	var eventsboxes = '<tr style="position:relative;bottom:0px;"><td class="p-1"><input type="radio" disabled="disabled" name="event" style="width:12px;width: 45px;text-align: center;" value="E0099"/></td><td class="p-1" style="font-size: 10px;"></td><td class="p-1" style="font-size: 10px;"><input type="text" value="E0099" style="height:25px;font-size: 12px;font-weight:bold;" /> </td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="partner_name_" value="'+part_from+'" style="height:25px;font-size: 12px;font-weight:bold;" /></td><td class="pl-1"><input type="text" class="form-control mb-1  inputboxesevents" id="event_name_E00099" value="Complete" style="height:25px;font-size: 12px;font-weight:bold;" /></td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="event_date_'+dateval+'" value="'+dateval+'" placeholder="Select Date" style="height:25px;font-size: 12px;font-weight:bold;" /></td></tr>';
				$("#inboxesvalues>tbody").append(eventsboxes);
        	
        } */
      </script>
      <!-- <script>
            
            var index;  // variable to set the selected row index
            function getSelectedRow()
            {
                var table = document.getElementById("inboxesvalues");
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                        // clear the selected from the previous selected row
                        // the first time index is undefined
                        if(typeof index !== "undefined"){
                            table.rows[index].classList.toggle("selected");
                        }
                       
                        index = this.rowIndex;
                        this.classList.toggle("selected");

                    };
                }
                    
            }
  

            getSelectedRow();
            
            
            function upNdown(direction)
            {
                var rows = document.getElementById("inboxesvalues").rows,
                    parent = rows[index].parentNode;
                 if(direction === "up")
                 {
                     if(index > 1){
                        parent.insertBefore(rows[index],rows[index - 1]);
                        // when the row go up the index will be equal to index - 1
                        index--;
                    }
                 }
                 
                 if(direction === "down")
                 {
                     if(index < rows.length -1){
                        parent.insertBefore(rows[index + 1],rows[index]);
                        // when the row go down the index will be equal to index + 1
                        index++;
                    }
                 }
            }
            
        </script> -->

<jsp:include page="./View/header.jsp" />

<!-- <div class="bodyblur"></div>
<div class="bodyblur1"></div>

<div id="data"></div>
<div class="container">
<button class="float-right btn btn-primary"><a href="Dashboard.jsp" style="color:#fff;font-weight:bold;text-decoration:none;">Back</a></button>
<div style="clear:both"></div>
<h1 class="p-1"></h1>
<h3 class="w-100 text-center">Create New Shipment</h3>
<div style="clear:both"></div>
<Select class="p-1 float-right">
	<option>Select Option</option>
	<option>Preview</option>
	<option>Save As Draft</option>
	<option>Delete Draft</option>
	<option>Save As Templete</option>
</Select>
<div style="clear:both"></div>
<div class="row m-0 p-0">





	<div class="col-sm-12 col-md-6 col-lg-6">
	

		<div class="form-group">
			<label class="font-weight-bold">Internal Shipmet ID</label>
			<input type="text" name="shipment" class="form-control" placeholder="Internal Shipmet ID" id="internalshipment"/>
		</div>
				<div class="form-group">
			<label class="font-weight-bold">Shipment Number </label>
			<input type="text" name="shipment" class="form-control float-left scaninputnumber" style="width:85%;float:left;" placeholder="Shipment Number" id="scaninputnumber"/>
			<button class="btn btn-color float-left" id="scanShipment" style="margin-left:1%;width:14%;" onclick="javascript:scanbtn();">Scan</button>
			<div id="scanboxview" style="width: 300px;height: 300px;position: absolute;margin: 9% 70%;z-index: 2;"><img src="images/L0UX.gif" style="width:100%;height:100%;"/></div>
			
			<div style="clear:both"></div>
		</div>
				<div class="form-group">
			<label class="font-weight-bold">Type of Reference </label>
					<Select class="p-1 form-control" id="selectways">
	<option>Select Option</option>
	<option>Road Ways</option>
	<option>Air Ways</option>
	<option>Sea Ways</option>
	
</Select>
		</div>
				<div class="form-group">
			<label class="font-weight-bold">Shipment Description </label>
			<textarea name="shipment" class="form-control" placeholder="Shipment Description" id="shipdesc" style="height: 37px;"></textarea>
		</div>
				<div class="form-group">
			<label class="font-weight-bold">BP Location </label>
					<Select class="p-1 form-control" id="selectbplocation">
	<option>Select Option</option>
	<option>Malvern</option>
	<option>Princeton</option>
	<option>Newark</option>
	<option>Hornell</option>
</Select>
		</div>
				<div class="form-group">
			<label class="font-weight-bold">Select Route </label>
			<div style="clear:both"></div>
			<input type="text" name="shipment" class="form-control float-left" style="width:80%;float:left;" placeholder="Shipment Number" id="selectlocation"/>
			<button class="btn btn-color float-left" id="scanShipment" style="margin-left:1%;width:19%;font-size:12px;height: 38px;" onclick="javascript:addlocation();">Add Location</button>
			<div id="locationboxview" style="width: 300px;height: 300px;position: absolute;margin: 9% 70%;z-index: 2;;"></div>
		</div>
	
	</div>
	<div class="col-sm-12 col-md-6 col-lg-6" >
			<div class="form-group">
			<label class="font-weight-bold">Select Goods Type </label>

			<Select class="p-1 form-control" id="goodstype">
	<option>Select Option</option>
	<option>Fruits</option>
	<option>vegetables</option>
	<option>Electronics</option>
	<option>pharmacy</option>
</Select>
		</div>
			<div class="form-group">
			<label class="font-weight-bold">Attache Device </label>
					<Select class="p-1 form-control">
	<option>Select Option</option>
	<option>1711210206</option>
	<option>1711210228</option>

</Select>
		</div>
			<div class="form-group">
			<label class="font-weight-bold">Device Level  Reference </label>
			<input type="text" name="shipment" class="form-control" placeholder="Device level  Reference"/>
		</div>
			<div class="form-group">
			<label class="font-weight-bold">Ship Date and Time </label>
			<input type="text" name="shipment" class="form-control datepicker" placeholder="Ship Date and time" />
		</div>
			<div class="form-group">
			<label class="font-weight-bold">Expected Date and Time </label>
			<input type="text" name="shipment" class="form-control datepicker" placeholder="Expected Date and time"/>
		</div>
			<div class="form-group">
			<label class="font-weight-bold">Shipment Status </label>
			<input type="text" name="shipment" class="form-control" placeholder="Shipment Status" value="Preparing"/>
		</div>
	</div>
	
</div></div>
<div class="w-100 text-center buttonsfamilay">
<button class="mr-3 btn" style="background:#868b90;color:#fff;font-weight:bold;" onclick="javascript:checkvalidatedata();">Create Shipment</button>
<button class="mr-3 btn" style="background:#868b90;color:#fff;font-weight:bold;">Cancel</button>
<button class="mr-3 btn" style="background:#868b90;color:#fff;font-weight:bold;">Reset</button>
</div>


<div id="backgroundBlur"></div> -->
<h2 style="text-align:center;margin:0px;"><img src="./images/Capture_scm_half_logo_1.png" style="width:50px;height:50px;"> Create New Shipment</h2>

<div class="container">
<div class="row" id="createShipment">
<div class="col-sm-12 col-md-12 col-lg-12 text-center">
<div class="row text-center">
<div class="col-sm-12 col-md-12 col-lg-12 mb-2" style="padding-right:0%;height: 30px;"><button class="bg-color btn-head float-right" id="backLink"><i class="fa fa-arrow-left" style="font-size:18px"></i></button></div>
<div id="error5" style=" width:100%; text-align: center"> </div>
<div id="error"></div>


		<div class="col-sm-12 col-md-6 col-lg-6 pt-0 pl-2 pr-0 pb-0 mb-2" >
	<div style="border-radius:3px;padding:1%;background:linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(242, 242, 242, 1) 0%, rgba(228, 228, 228, 1) 100%, rgba(255, 255, 255, 1) 100%);border:1px solid #000;">
		<div class="formfieldslist"><span class="rmov1 p-1 pl-3 font-weight-bold float-left text-left">Internal Shipment ID</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" placeholder="Shipment Id" style="height:25px;font-size: 12px;font-weight:bold;" name="internalshipment" id="internalshipment" disabled="disabled"/></span></div>
		<div class="formfieldslist"><span class="rmov1 p-1 pl-3 font-weight-bold float-left text-left">Customer Name</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:45%;"><input type="hidden" class="form-control" placeholder="Customer Name & (ID)" id="Cust_Id" name="Cust_Id" style="height:25px;font-size: 12px;font-weight:bold;" disabled="disabled"/><input type="text" class="form-control" placeholder="Customer Name & (ID)" id="Cust_Name" name="Cust_Name" style="height:25px;font-size: 12px;font-weight:bold;" disabled="disabled"/></span></div>
		<div class="formfieldslist"><span class="rmov1 p-1 pl-3 font-weight-bold float-left text-left">Partner Name</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:45%;"><input type="text" class="form-control" placeholder="Business Partner Name2 & (ID)" id="bp_name" name="bp_name" style="height:25px;font-size: 12px;font-weight:bold;" disabled="disabled"/></span></div>
		</div>
	</div>
	<div class="col-sm-12 col-md-6 col-lg-6 pt-0 pl-2 pr-0 pb-0 mb-2 text-center">
	<div style="border-radius:3px;padding:1%;background:linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(242, 242, 242, 1) 0%, rgba(228, 228, 228, 1) 100%, rgba(255, 255, 255, 1) 100%);border:1px solid #000;">
		<div class="formfieldslist">
			<span style="width:15%;height:30px;float:left;font-weight:600;font-size: 12px;" class="lineHeight30">Shipment :- </span><span style="width:60%;height:30px;float:left;padding-right:1%;"><input type="text" class="form-control" id="route_from" name="route_from" placeholder="Shipment From" disabled="disabled" style="background:#ccd0d4;font-weight:bold;height:25px;font-size: 12px;"></span><span style="width:25%;height:25px;float:left;"><input type="text" class="form-control" placeholder="Mode" id="route_mode" name="route_mode" disabled="disabled" style="background:#ccd0d4;font-weight:bold;height:25px;font-size: 12px;"></span><span style="clear:both;"></span>
		</div>
		<div class="formfieldslist">
			<span style="width:15%;height:30px;float:left;"></span><span style="width:60%;height:30px;float:left;padding-right:1%;"><input type="text" class="form-control" placeholder="Shipment to" id="route_to" name="route_to"  disabled="disabled" style="background:#ccd0d4;font-weight:bold;height:25px;font-size: 12px;"></span><span style="width:25%;height:30px;float:left;"><input type="text" class="form-control" placeholder="Inco" disabled="disabled" id="route_inco" name="route_inco" style="background:#ccd0d4;font-weight:bold;height:25px;font-size: 12px;"></span><span style="clear:both;"></span>
		</div>
		<div class="formfieldslist">
			<span style="width:15%;height:30px;float:left;font-weight:600;font-size: 12px;" class="lineHeight30">Parameters :- </span><span style="width:30%;height:30px;float:left;padding-right:1%;"><input type="text" class="form-control" name="temp" id="temp" placeholder="Temp from-to" disabled="disabled" style="background:#ccd0d4;font-weight:bold;height:25px;font-size: 12px;"></span><span style="width:30%;height:40px;float:left;padding-right:1%;"><input type="text" class="form-control" name="rH" id="humdity" placeholder="RH from - to" disabled="disabled" style="background:#ccd0d4;font-weight:600;height:25px;font-size: 12px;"></span><span style="width:25%;height:40px;float:left;"><input type="text" class="form-control" name="evidence" id="evidence" placeholder="Photo Evidence" disabled="disabled" style="background:#ccd0d4;font-weight:600;height:25px;font-size: 12px;"></span><span style="clear:both;"></span>
		</div>
		<!-- <div style="width: 100%;height: 45px;"><span class="w-47 p-1 pl-3 font-weight-bold float-left text-left" style="line-height: 30px;">Internal Shipment ID :</span><span class="w-50 float-left"><input type="text" class="form-control" placeholder="Shipment Id"/></span></div>
		<div style="width: 100%;height: 45px;"><span class="w-47 p-1 pl-3 font-weight-bold float-left text-left" style="line-height: 30px;">Customer Name :</span><span class="w-50 float-left"><input type="text" class="form-control" placeholder="Customer Name & (ID)"/></span></div>
		<div style="width: 100%;height: 45px;"><span class="w-47 p-1 pl-3 font-weight-bold float-left text-left" style="line-height: 30px;">Partner Name :</span><span class="w-50 float-left"><input type="text" class="form-control" placeholder="Business Partner  Name 2  & (ID)"/></span></div> -->
		</div>
	</div></div></div>
	<div class="col-sm-12 col-md-6 col-lg-6 pt-0 pl-2 pr-0 pb-2 text-center">
	<div style="padding:1%;border-radius:3px;width:100%;min-height:250px;border:1px solid #000;" onkeypress="return blockSpecialChar(event)">
		<!-- <div class="formfieldslist"><span class="w-47 p-1 pl-3 font-weight-bold float-left text-left lineHeight24">Shipment/Invoice Number</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><input type="text" class="form-control" placeholder="Shipment/Invoice Number" id="shipment_number" name="shipment_number" style="height:30px;padding-top:3px;padding-bottom:3px;font-size: 12px;" autocomplete="off"/></span><span class="" style="margin-top: 10px;line-height: 30px;margin-left: 3px;"><span class="bg-primary p-1" style="border-radius: 3px"><img src="./images/bar-code.png" style="width:18px;height:18px;margin:1px;"/></span></span></div> -->
		<div class="formfieldslist"><span class="rmov p-1 pl-3 font-weight-bold float-left text-left lineHeight24"><span style="color:red;">* </span>Delivery Number</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><input type="text" class="form-control" placeholder="Delivery Number" id="invoice_number" name="invoice_number" style="height:30px;padding-top:3px;padding-bottom:3px;font-size: 12px;" autocomplete="off"/></span><span class="" style="margin-top: 10px;line-height: 30px;margin-left: 3px;"></span></span></div>
		<div class="formfieldslist"><span class="rmov1 p-1 pl-3 font-weight-bold float-left text-left lineHeight24">CMO Reference Number</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><input type="text" class="form-control" placeholder="CMO Reference Number" id="cmo_ref_number" name="cmo_ref_number" style="height:30px;padding-top:3px;padding-bottom:3px;font-size: 12px;" autocomplete="off"/></span><span class="" style="margin-top: 10px;line-height: 30px;margin-left: 3px;"></span></span></div>
		<div class="formfieldslist"><span class="rmov1 p-1 pl-3 font-weight-bold float-left text-left lineHeight24">Container Number</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><input type="text" class="form-control" placeholder="Container Number" id="shipper_number" name="shipper_number" style="height:30px;padding-top:3px;padding-bottom:3px;font-size: 12px;" autocomplete="off"/></span><span class="" style="margin-top: 10px;line-height: 30px;margin-left: 3px;"></span></span></div>
		<div style="width: 100%;height: 60px;font-size: 12px;"><span class="rmov1 p-1 pl-3 font-weight-bold float-left text-left lineHeight24">Shipment Description</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><textarea class="form-control" id="comments" style="height:55px;font-size: 12px;padding-top: 3px;" name="comments[]" placeholder="Enter Your Description"></textarea></span><span></span></div>
		<div class="formfieldslist"><span class="rmov p-1 pl-3 font-weight-bold float-left text-left lineHeight24"><span style="color:red;">* </span>Route Details</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><select class="form-control select" id="routes" name="routes" onchange="javascript:SelectRouteerList(this.value);" style="height:30px;padding-bottom:3px;font-size: 12px;padding-top: 3px;"><option value="">Select Route</option></select></span><span class="ml-1"><span class="" style="margin-top: 10px;line-height: 30px;"> <span class="bg-primary" style="padding: 3px 10px;border-radius: 3px;color:#fff;font-weight:bold;font-size:12px;cursor:pointer;" title="Add Route" onclick="javascript:addRoute();">+</span></span></div>	
		<div class="formfieldslist"><span class="rmov p-1 pl-3 font-weight-bold float-left text-left lineHeight24"><span style="color:red;">* </span>Goods Type</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><select class="form-control select" id="goods" name="goods" onchange="javascript:SelectGoods(this.value);" style="height:30px;padding-bottom:3px;padding-top:3px;font-size: 12px;padding-top: 3px;"><option value="">Select Goods</option></select></span><span class="" style="margin-top: 10px;line-height: 30px;margin-left: 3px;"> <span class="bg-primary" style="padding: 3px 10px;border-radius: 3px;color:#fff;font-weight:bold;font-size:12px;cursor:pointer;" onclick="javascript:addGood();">+</span></span></div>	
		<div class="formfieldslist"><span class="rmov p-1 pl-3 font-weight-bold float-left text-left lineHeight24"><span style="color:red;">* </span>Device</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><select class="form-control select" name="devices" id="devices" style="height:30px;padding-bottom:3px;font-size: 12px;padding-top: 3px;"><option value="">Select Device</option></select></span><span class="" style="margin-top: 10px;line-height: 25px;margin-left: 3px;"><span class="bg-primary" style="padding: 3px 4px;border-radius: 3px"><img src="./images/bar-code.png" style="width:18px;height:18px;margin:1px;"/></span></span></div>
		<!-- <div class="formfieldslist"><span class="w-47 p-1 pl-3 font-weight-bold float-left text-left lineHeight24">Device</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><select class="form-control select" name="devices" id="devices" onclick="javascript:return checkparams()" style="height:30px;padding-bottom:3px;font-size: 12px;padding-top: 3px;"><option value="">Select Device</option></select></span><span class="" style="margin-top: 10px;line-height: 25px;margin-left: 3px;"><span class="bg-primary" style="padding: 3px 4px;border-radius: 3px"><img src="./images/bar-code.png" style="width:18px;height:18px;margin:1px;"/></span></span></div> -->	
		 <div class="formfieldslist"><span class="rmov p-1 pl-3 font-weight-bold float-left text-left lineHeight24"><span style="color:red;">* </span>Expected Delivery Date</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><input type="text" class="form-control" name="Exp_date" placeholder="Expected Delivery Date" style="background-color: white; height:30px;padding-bottom:3px;padding-top:3px;font-size: 12px;" id="expected_date" autocomplete="off"/></span><span></span></div>	
		 </div>
		<div class="col-sm-12 col-md-12 col-lg-12 pt-0 pl-0 pr-0 pb-2 mt-2 text-center">
	<div style="padding:1%;border-radius:3px;width:100%;min-height:214px;border:1px solid #000;" onkeypress="return blockSpecialChar(event)">
		<div class="formfieldslist"><span class="rmov p-1 pl-3 font-weight-bold float-left text-left lineHeight24"><span style="color:red;">* </span>Plant</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><select class="form-control select" name="plant" id="plantName" style="height:30px;padding-bottom:3px;font-size: 12px;padding-top: 3px;"><option value="">Select Plant</option></select></span><span class="" style="margin-top: 10px;line-height: 25px;margin-left: 3px;"><span class="bg-primary" style="padding: 3px 4px;border-radius: 3px"><img src="./images/bar-code.png" style="width:18px;height:18px;margin:1px;"/></span></span></div>
		<div class="formfieldslist"><span class="rmov p-1 pl-3 font-weight-bold float-left text-left lineHeight24"><span style="color:red;">* </span>PO Number</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><input type="text" class="form-control" placeholder="PO Number" id="po_number" name="po_number" style="height:30px;padding-top:3px;padding-bottom:3px;font-size: 12px;" autocomplete="off"/></span><span class="" style="margin-top: 10px;line-height: 30px;margin-left: 3px;"></span></span></div>
		<div class="formfieldslist"><span class="rmov p-1 pl-3 font-weight-bold float-left text-left lineHeight24"><span style="color:red;">* </span>Shipment/Invoice Number</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><input type="text" class="form-control" placeholder="Shipment / Invoice Number" id="shipment_number" name="shipment_number" style="height:30px;padding-top:3px;padding-bottom:3px;font-size: 12px;" autocomplete="off"/></span><span class="" style="margin-top: 10px;line-height: 30px;margin-left: 3px;"><span class="bg-primary p-1" style="border-radius: 3px"><img src="./images/bar-code.png" style="width:18px;height:18px;margin:1px;"/></span></span></div>
		<!-- <div class="formfieldslist"><span class="w-47 p-1 pl-3 font-weight-bold float-left text-left lineHeight24">Delivery Number</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><input type="text" class="form-control" placeholder="DeliveryNumber" id="invoice_number" name="invoice_number" style="height:30px;padding-top:3px;padding-bottom:3px;font-size: 12px;" autocomplete="off"/></span><span class="" style="margin-top: 10px;line-height: 30px;margin-left: 3px;"></span></span></div> -->
		<div class="formfieldslist"><span class="rmov p-1 pl-3 font-weight-bold float-left text-left lineHeight24"><span style="color:red;">* </span>NDC Number</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><input type="text" class="form-control" placeholder="NDC Number" id="ndc_number" name="ndc_number" style="height:30px;padding-top:3px;padding-bottom:3px;font-size: 12px;" autocomplete="off"/></span><span class="bg-primary" style="padding: 3px 10px;border-radius: 3px;color:#fff;font-weight:bold;font-size:12px;cursor:pointer;" onclick="javascript:addNDCNumber();">+</span></span></div>
		<div class="formfieldslist"><span class="rmov p-1 pl-3 font-weight-bold float-left text-left lineHeight24"><span style="color:red;">* </span>Batch Id</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><input type="text" class="form-control" placeholder="Batch Id" id="batch_id" name="batch_id" style="height:30px;padding-top:3px;padding-bottom:3px;font-size: 12px;" autocomplete="off"/></span><span class="" style="margin-top: 10px;line-height: 30px;margin-left: 3px;"><span class="bg-primary" style="padding: 3px 10px;border-radius: 3px;color:#fff;font-weight:bold;font-size:12px;cursor:pointer;" onclick="javascript:addBatchId();">+</span></span></div>
		<div class="formfieldslist"><span class="rmov1 p-1 pl-3 font-weight-bold float-left text-left lineHeight24">Serial Number of goods</span><span class="float-left spaceTextAlign">:</span><span class="float-left" style="width:40%;"><input type="text" class="form-control" placeholder="Serial Number of goods" id="serial_number_of_goods" name="serial_number_of_goods" style="height:30px;padding-top:3px;padding-bottom:3px;font-size: 12px;" autocomplete="off"/></span><span class="" style="margin-top: 10px;line-height: 30px;margin-left: 3px;"><span class="bg-primary" style="padding: 3px 10px;border-radius: 3px;color:#fff;font-weight:bold;font-size:12px;cursor:pointer;" onclick="javascript:addSerialNumberofgoods();">+</span></span></span></div>		
		</div></div>
		
	</div>
	
	<div class="col-sm-12 col-md-6 col-lg-6 pt-0 pl-2 pr-0 pb-2  text-center">
		<!-- <div class="" id="" style="padding:1%;border-radius:3px;width:100%;min-height:575px;border:1px solid #000;"> -->
		<!-- <div style="height: 530px;overflow-y: auto;"> -->
		<div class="" id="" style="padding:1%;border-radius:3px;width:100%;min-height:615px;border:1px solid #000;">
		<div style="height: 570px;overflow-y: auto;">
			<h3 style="text-align:center;" id="tableheadercols">Select Any Routes</h3>
			<table id="tableHeader">
				<thead style="font-size:12px;">
					<tr>
						<th style="padding: 0px 7px;"></th>
						<th style="font-size: 12px;padding: 0px 18px;">Event Id</th>
						<th style="font-size: 12px;padding: 0px 40px;">Partner Id</th>						
						<th style="font-size: 12px;padding: 0px 50px;">Partner Name</th>
						<th style="font-size: 12px;padding: 0px 74px;">Event</th>
						<th style="font-size: 12px;padding: 0px 4px;">Documents</th>
						<th style="font-size: 12px;padding: 0px 16px;">Event-Status</th>
					</tr>
				</thead>
			</table>
			
			<table class="" id="inboxesvalues2" style="border-collapse: inherit;">
				<thead style="display:none;">
					<tr>
						<th></th>
						<th>event_Id</th>
						<th>bp_Id</th>
						<th>d</th>
						<th>partner</th>
						<th>d</th>
						<th>event</th>
						<th>evidence</th>
						<th>event_Status</th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
			</div>
			<div class="w-100 mb-2"><span style="width:55%;height:40px;float:left;margin-left: 5%;padding-top:5px;">
			<!-- <div id="clock" class="light">
			<div class="display">
				<div class="weekdays"></div>
				<div class="ampm"></div>
				<div class="alarm"></div>
				<div class="digits"></div>
			</div>
		</div> -->
		<div id="sysdateandtime" style="font-family: monospace;font-size:17px;font-weight:600;"></div>
</span><span class="" style="width:35%;height:40px;float:left;padding-top:8px;"><img src="./images/up.png"  onclick="upNdownNew('up');" style="width:21px;margin-right:6%;" title="Move Event Up"><img src="./images/below.png" onclick="upNdownNew('down');" style="width:21px;margin-right:6%;" title="Move Event Down"><img src="./images/delete.png" onclick="javascript:deletee();" style="cursor:pointer;width:20px;margin-right:6%;" title="Delete Event"><img src="./images/synchronize.png" style="width:20px;margin-right:6%;" id="refreshiconcreateShipment" onclick="javascript:refreshicon();" title="Refresh"><img src="./images/plus-filled.png" style="width:20px;margin-right:6%;" onclick="javascript:dialogboxAddEvent();" class="AddButtonIcon" title="Add New Event"></span><span style="clear:both;"></span></div>
		</div>
	</div>
	<div class="col-sm-12 col-md-12 col-lg-12 text-center m-2">
	<div>
			<!-- <button class="btn btn-color m-1">Select Draft</button> -->
			<button class="bg-color btn-head" onclick="javascript:saveasDraft();">Save as Draft</button>
			<button class="bg-color btn-head" >Add Tag Info</button>
			<button class="bg-color btn-head" onclick="javascript:reset();">Reset</button>
			<a href="Dashboard.jsp"><button class="bg-color  btn-head" >Cancel Shipment</button></a>
			<!-- <button class="bg-color btn-head" onclick="javascript:refresh();">Refresh</button> -->
			<button class="bg-color btn-head" onclick="javascript:createShipment();">Create Shipment</button>
			
		</div>
		<div id="notified"></div>
	</div>
	<div class="col-sm-12 col-md-12 col-lg-12 text-center m-2" style="overflow-x:auto;padding:0px;">

		<table class="table table-striped table-bordered" id="draftTable" style="overflow-x:auto;">
			<thead>
				<tr class="p-0" style=" font-size:12px;">
				<th></th>
					<th>Template Name</th>
					<!-- <th>Shipment Number</th> -->
					<th>Invoice Number</th>
					<th>Ship from</th>
					<th>Ship to</th>
					<th>Goods Type</th>
					<th>Mode</th>
					<th>Inco Terms</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
			</tbody>
		</table>
	</div>
</div><div class="showviewdata"></div>
</div>

    
      <div class="AddEventBlock">
      	<h3 style="text-align:center;width:94%;float:left;padding-top:2%;">Add Partner Event</h3><span class="close" style="width: 2.7%;height: 25px;float: left;padding: 1% 3% 1% 0%;">X</span><span style="clear:both;"></span>
      	<div id="errorr"></div>
      	<input type="text" name="eventId" id="eventId" maxlength="6"  placeholder="Enter Event Id Like E0011" style="margin-top: 1rem; text-align: center;width: 60%;padding-top: 2%;margin: 0% 20%;height: 25px; padding-top: 2px; font-size: 12px; padding-bottom: 2px;font-weight: 600; border-radius: 4px; border: 1px solid #ced4da; margin-bottom: 4px;" />
      	<select class="form-control" id="selectvalues" style="margin-top:1rem;text-align: center;width: 60%;padding-top: 2%;margin: auto;height: 25px;padding-top: 2px;font-size: 12px;padding-bottom: 2px;font-weight: 600;" onchange="javascript:selectBpName(this.value);"><option value="">Select Partner</option></select>
      	<div style="width:100%;min-height:4px;text-align: center;" id="partnerName"></div>
      	<select class="form-control" id="eventslist" style="margin-top:1rem;text-align: center;width: 60%;padding-top: 2%;margin: auto;height: 25px;padding-top: 2px;font-size: 12px;padding-bottom: 2px;font-weight: 600;"><option value="">Select Event</option></select>
      	<div style="width:70%;margin:auto;text-align:center;margin-top: 2%;" ><button id="CancelEvent" class="bg-color margin-rl1 btn-head" >Cancel Event</button>
      	<button id="AddEvent" class="bg-color margin-rl1 btn-head"  onclick="javascript:addEvent();">Add Event</button></div>
      	
      	
      </div>
        
             <div class="addShipfromPop">
      	<h3 style="text-align:center;width:94%;float:left;padding-top:3%;">Add Shipment From</h3><span class="close" style="width: 2.7%;height: 50px;float: left;padding: 1% 3% 1% 0%;">X</span><span style="clear:both;"></span>
      	<div id="selecterror" style="text-align: center;color: red;margin-bottom: 6px;"></div>
      	<input type="text" name="shipFrom" id="shipFrom"  placeholder="Enter City Name" style="margin-top: 1rem; text-align: center;width: 60%;padding-top: 2%;margin:4% 20% 1% 20%;height: 30px; padding-top: 2px; font-size: 12px; padding-bottom: 2px;font-weight: 600; border-radius: 4px; border: 1px solid #ced4da;" />
      	<div id="showprelocationf"></div>
      	<div style="width:70%;margin:auto;text-align:center;margin-top: 2%;" ><button id="CancelEvent" class="bg-color margin-rl1 btn-head"  >Cancel</button>
      	<button id="AddEventfrom" class="bg-color margin-rl1 btn-head"  onclick="javascript:addShipFromNewCreateShipment();">Add Ship From</button></div>
      </div>
       <div class="addShipToPop">
      	<h3 style="text-align:center;width:94%;float:left;padding-top:3%;">Add Shipment To</h3><span class="close" style="width: 2.7%;height: 50px;float: left;padding: 1% 3% 1% 0%;">X</span><span style="clear:both;"></span>
      	<div id="selecterrorto" style="text-align: center;color: red;margin-bottom: 6px;"></div>
      	<input type="text" name="shipTo" id="shipTo"  placeholder="Enter City Name" style="margin-top: 1rem; text-align: center;width: 60%;padding-top: 2%;margin:4% 20% 1% 20%;height: 30px; padding-top: 2px; font-size: 12px; padding-bottom: 2px;font-weight: 600; border-radius: 4px; border: 1px solid #ced4da;" />
      	<div id="showprelocationt"></div>
      	<div style="width:70%;margin:auto;text-align:center;margin-top: 2%;" ><button id="CancelEvent" class="bg-color margin-rl1 btn-head"  >Cancel</button>
      	<button id="AddEventto" class="bg-color margin-rl1 btn-head"  onclick="javascript:addShipToNewCreateShipment();">Add Ship To</button></div>
      </div>
       <div class="addNDCToPop">
      	<h3 style="text-align:center;width:94%;float:left;padding-top:3%;">Add NDC Number</h3><span class="close" style="width: 2.7%;height: 50px;float: left;padding: 1% 3% 1% 0%;"></span><span style="clear:both;"></span>
      	<div id="selecterrorto" style="text-align: center;color: red;margin-bottom: 6px;"></div>
      	<input type="text" name="newNdcNumber" id="newNdcNumber"  placeholder="Enter NDC Number" style="margin-top: 1rem; text-align: center;width: 60%;padding-top: 2%;margin:4% 20% 1% 20%;height: 30px; padding-top: 2px; font-size: 12px; padding-bottom: 2px;font-weight: 600; border-radius: 4px; border: 1px solid #ced4da;" />
      	<!-- <div id="showprelocationt"></div> -->
      	<div style="width:70%;margin:auto;text-align:center;margin-top: 2%;" ><button id="CancelEvent" class="bg-color margin-rl1 btn-head"  >Cancel</button>
      	<button id="AddNDCNumber" class="bg-color margin-rl1 btn-head"  onclick="javascript:addNdcToNewCreateShipment();">Add NDC Number</button></div>
      </div>
      
        <div class="body_blur"></div>
        <div class="addBatchIdToPop">
      	<h3 style="text-align:center;width:94%;float:left;padding-top:3%;">Add Batch Id</h3><span class="close" style="width: 2.7%;height: 50px;float: left;padding: 1% 3% 1% 0%;"></span><span style="clear:both;"></span>
      	<div id="selecterrorto" style="text-align: center;color: red;margin-bottom: 6px;"></div>
      	<input type="text" name="newBatchId" id="newbatch_id"  placeholder="Enter Batch Id" style="margin-top: 1rem; text-align: center;width: 60%;padding-top: 2%;margin:4% 20% 1% 20%;height: 30px; padding-top: 2px; font-size: 12px; padding-bottom: 2px;font-weight: 600; border-radius: 4px; border: 1px solid #ced4da;" />
      	<!-- <div id="showprelocationt"></div> -->
      	<div style="width:70%;margin:auto;text-align:center;margin-top: 2%;" ><button id="CancelEvent" class="bg-color margin-rl1 btn-head"  >Cancel</button>
      	<button id="AddBatchId" class="bg-color margin-rl1 btn-head"  onclick="javascript:addBatchIdToNewCreateShipment();">Add Batch Id</button></div>
      </div>
        <div class="body_blur"></div>
         
        <div class="body_blur"></div>
        <div class="addSerialNumberofgoodsToPop">
      	<h3 style="text-align:center;width:94%;float:left;padding-top:3%;">Add Serial Number of goods</h3><span class="close" style="width: 2.7%;height: 50px;float: left;padding: 1% 3% 1% 0%;"></span><span style="clear:both;"></span>
      	<div id="selecterrorto" style="text-align: center;color: red;margin-bottom: 6px;"></div>
      	<input type="text" name="newserialnumberofgoods" id="newserial_number_of_goods"  placeholder="Enter Serial Number of goods" style="margin-top: 1rem; text-align: center;width: 60%;padding-top: 2%;margin:4% 20% 1% 20%;height: 30px; padding-top: 2px; font-size: 12px; padding-bottom: 2px;font-weight: 600; border-radius: 4px; border: 1px solid #ced4da;" />
      	<!-- <div id="showprelocationt"></div> -->
      	<div style="width:70%;margin:auto;text-align:center;margin-top: 2%;" ><button id="CancelEvent" class="bg-color margin-rl1 btn-head"  >Cancel</button>
      	<button id="AddSerialNumberofgoods" class="bg-color margin-rl1 btn-head"  onclick="javascript:addSerialNumberofgoodsToNewCreateShipment();">Add Serial Number of goods</button></div>
      </div>
        <div class="body_blur"></div>
             <!--  <script type="text/javascript">
new SlimSelect({
	  select: '#routes'
	})
new SlimSelect({
	  select: '#goods'
	})
new SlimSelect({
	  select: '#devices'
	})
</script> -->
        
</body>
</html>