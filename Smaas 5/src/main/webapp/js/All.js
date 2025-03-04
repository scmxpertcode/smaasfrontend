$(function() {
	//alert($(window).width());

	
	/*if(window.location.hash == '#success')
	{
	    //show the notification
		////alert("success");
	}*/
	//alert($( window ).width());
	getAllBusinessPartner();
	var first = $(location).attr('pathname');
    first.indexOf(1);
    first.toLowerCase();
   // first = first.split("/")[2]
    first = first.split("/");
    first = first[first.length-1];
    if(first == "Dashboard.jsp")
	{
    	$(".Dashboard > a").addClass("activatemenueList");
	}
	if(first == "CreateShipment.jsp")
	{
    	$(".Dashboard > a").addClass("activatemenueList");
	}
	if(first == "CompleteShipment.jsp")
	{
    	$(".Dashboard > a").addClass("activatemenueList");
	}
	if(first == "UpdateShipmentEvent.jsp")
	{
    	$(".Dashboard > a").addClass("activatemenueList");
	}
    if(first == "RouteMaster.jsp")
	{
    	$(".setup > a").addClass("activatemenueList");
	}
    if(first == "GoodsMaster.jsp")
	{
    	$(".setup > a").addClass("activatemenueList");
	}
if(first == "CustomerMaster.jsp")
	{
    	$(".setup > a").addClass("activatemenueList");
	}
if(first == "BusinessPartner.jsp")
	{
    	$(".setup > a").addClass("activatemenueList");
	}
    if(first == "Available.jsp")
	{
    	$(".Device > a").addClass("activatemenueList");
	}
    if(first == "ReceiveDevices.jsp")
	{
    	$(".Device > a").addClass("activatemenueList");
	}
    if(first == "CreateDeviceTransfer.jsp")
	{
    	$(".Device > a").addClass("activatemenueList");
	}
    if(first == "InUse.jsp")
	{
    	$(".Device > a").addClass("activatemenueList");
	}
    if(first == "AlertMaster.jsp")
	{
    	$(".Alerts > a").addClass("activatemenueList");
	}
    if(first == "AlertDashboard.jsp")
	{
    	$(".Alerts > a").addClass("activatemenueList");
	}
    if(first == "AlertProfile.jsp")
	{
    	$(".Alerts > a").addClass("activatemenueList");
	}
	$("#backLink").click(function(event) {
	    event.preventDefault();
	    history.back(1);
	});
	$(".form-control").css({"height":"35px"});
	$("#AddressDesc,#comments,#evidence_description,#event_description,#goodsDesc,#transDesc,#destinationAddress,#completeshipmentDescripttion,#rescpDescript").css({"height":"55px"});
	$("#EmailMess,#smsmess").css({"height":"55px"})
	var UserId = $.session.get('UserId');
	var token = $.session.get('Token');
	var Role = $.session.get('Role');
	var RolePermission = $.session.get('RolePermission');
	var RoleList = $.session.get('RoleList');
	var useridsplit = UserId.split('-');
	useridsplit[0].toString();
	useridsplit[0] + "";
	useridsplit[1].toString();
	useridsplit[1] + "";
	var CustomerName = $.session.get('CustomerName');
	var UserName = $.session.get('UserName');

	////alert(CustomerName);//alert(UserName);
$("#Cust_Id").val(useridsplit[0]);
$("#Cust_Name").val(CustomerName);
$("#bp_name").val(UserName);

	if(Role == "SUPERADMIN"){
		$(".headermenu").show();
		$(".showRolesList > #SPAD_Name").prepend('<div class="userrole"><span class="sessionUsernameDisplay">Customer</span><span style="float:left;width:3%;text-align:center;">:</span><span id="user_SPAD_Name">'+escapeHtml( useridsplit[0] )+' - '+escapeHtml(CustomerName)+'</span></div>');
		$("#SPAD_Name > .sessionUsername >#user_SPAD_Name").text(useridsplit[1]+' - '+UserName).show().addClass("");
		$("#b_P_DIV").hide();
	}else if(Role == "ADMIN")
		{
		$(".headermenu").show();
		$(".CustomerMaster").hide();
		$(".showRolesList > #SPAD_Name").prepend('<div class="userrole"><span class="sessionUsernameDisplay">Customer</span><span style="float:left;width:3%;text-align:center;">:</span><span id="user_SPAD_Name">'+escapeHtml( useridsplit[0] )+' - '+escapeHtml(CustomerName)+'</span></div>');
		$("#SPAD_Name > .sessionUsername >#user_SPAD_Name").text(useridsplit[1]+' - '+UserName).show().addClass("");
		$("#b_P_DIV").hide();
		}else if(Role == "FINANCE")
		{
			$(".headermenu").show();
			$(".CustomerMaster").hide();
			$(".showRolesList > #SPAD_Name").prepend('<div class="userrole"><span class="sessionUsernameDisplay">Customer</span><span style="float:left;width:3%;text-align:center;">:</span><span id="user_SPAD_Name">'+escapeHtml( useridsplit[0] )+' - '+escapeHtml(CustomerName)+'</span></div>');
			$("#SPAD_Name > .sessionUsername >#user_SPAD_Name").text(useridsplit[1]+' - '+UserName).show().addClass("");
			$("#b_P_DIV").hide();
			}else{
				$(".headermenu").hide();
				var str = RoleList.split(",");
				$.each(str,function(key,value){
/*					var str1 = RolePermission.split(",");
					$.each(str1,function(key,val){
						if(val === value)
							{
								
								$("."+val).show();
							}
					});*/
								$("."+value).show();
					
				});
				$(".showRolesList > #SPAD_Name").prepend('<div class="userrole"><span class="sessionUsernameDisplay">Customer</span><span style="float:left;width:3%;text-align:center;">:</span><span id="user_SPAD_Name">'+escapeHtml( useridsplit[0] )+' - '+escapeHtml(CustomerName)+'</span></div>');
				$("#SPAD_Name > .sessionUsername >#user_SPAD_Name").text(useridsplit[1]+' - '+UserName).show().addClass("");
			}
	
	screenResize();
	$(window).resize(function() {

		screenResize();

		});
	$(document).keydown(function(event) {
	    if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
 
event.preventDefault();
// 107 Num Key  +
//109 Num Key  -
//173 Min Key  hyphen/underscor Hey
// 61 Plus key  +/=
 }
});

$(window).bind('mousewheel DOMMouseScroll', function (event) {
   if (event.ctrlKey == true) {
   //alert('disabling zooming'); 
   event.preventDefault();
   }
});
	  /*var first = $(location).attr('pathname');
	    first.indexOf(1);
	    first.toLowerCase();
	//    first = first.split("/")[2]
	      first = first.split("/");
          first = first[first.length-1];
	    if(first == "Dashboard.jsp")
	    	{
	    	}else{
	    		Dashboard();
			}
	    	}*/

/*	var filtered=arr.filter(function(item){
	    return item.type=="ar";         
	});*/
	 //getAllCountriesStates();
	//listOfLocations();
	 //getListOfBPIds();
	// $("#expected_date,#transferDate" ).datepicker({ minDate: 0});
	 /*$.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/getRoutes/", function(e) {
		    //console.log(e.ip);
		    //alert(e.ip);
		});*/
	/* var first = $(location).attr('pathname');*/
		//first.indexOf(0);
		//first.toLowerCase();
		//first = first.split("/");
	/*	//alert(first)*/
	 
	 var first = $(location).attr('pathname');
	    first.indexOf(1);
	    first.toLowerCase();
	   // first = first.split("/")[2]
          first = first.split("/");
          first = first[first.length-1];
	    if(first == "InUse.jsp"){
	    	InUsegetAllDevices();
	    }
	    if(first == "Available.jsp"){
	    	getAllDevices();
	    }
$("#CancelEvent,.body_blur,.close,#backgroundBlur,.closeevent").on("click",function(){
	$(".body_blur,.AddEventBlock,.addShipfromPop,.addShipToPop,#showtablelist,.showgeolist,.ShowGeofenceList,.ShowAlertMasterList,.AlertFormPage,.ShowAllRoutes,#showgoodlist,.addOriginpopup,.addDestcitypopup").hide();
	$("#shipFrom,#shipTo").val('');
	$("#previewCompletedEvidence").removeClass("previewListevents");
	$("#showpopupImages").removeClass("showpopupImages")
	$(".showprelocationf,.showprelocationt").empty();
	$("body").css("overflow","auto");
	$("#eventId,#selectvalues,#eventslist").val('');
	$("#partnerName").empty();
	$("#errorr").empty();
	$(".body_blur").css({"z-index":"1"});
	var first = $(location).attr('pathname');
    first.indexOf(1);
    first.toLowerCase();
   // first = first.split("/")[2]
    first = first.split("/");
    first = first[first.length-1];
    if(first == "CustomerMaster.jsp")
    	{
    	document.location.reload();
    	}
    /*if(first == "BusinessPartner.jsp")
	{
	document.location.reload();
	}*/
   /* if(first == "RouteMaster.jsp")
	{
	document.location.reload();
	}*/
   /* if(first == "GoodsMaster.jsp")
	{
	document.location.reload();
	}*/
    /*if(first == "UpdateShipmentEvent.jsp")
	{
	document.location.reload();
	}*/
	/*if(first == "CreateShipment.jsp")
	{
	document.location.reload();
	}*/
	/*if(first == "completeShipment.jsp")
	{
	document.location.reload();
	}*/
	
});
//$("#internalTransferId").val($.cookie("Internalid"));

var cust_id = $("#Cust_Id").val();
var bp_name = $("#bp_name").val();

var optionValues =[];
$('#goods option').each(function(){
    if($.inArray(this.value, optionValues) >-1){
    //	//alert(this);
       $(this).remove()
    }else{
       optionValues.push(this.value);
    }
 });


	var UserIds = $.session.get('UserId');

var UserId = UserIds;
	var useridsplit = UserId.split('-');
	useridsplit[0].toString();
	useridsplit[0] + "";
	useridsplit[1].toString();
	useridsplit[1] + "";
var RouteMasterGetRoute = localStorage.getItem("smaasip")+"/SCMXPert/getRoutes/"+useridsplit[0];
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
		$("#route_name_from").append('<option value="'+escapeHtml(value.from)+'">'+escapeHtml(value.from)+'</option>');
		$("#route_name_to").append('<option value="'+escapeHtml(value.to)+'">'+escapeHtml(value.to)+'</option>');
		$("#route_name_from").append('<option value="'+escapeHtml(value.to)+'">'+escapeHtml(value.to)+'</option>');
		$("#route_name_to").append('<option value="'+escapeHtml(value.from)+'">'+escapeHtml(value.from)+'</option>');
	});
	 $('#route_name_from option').each(function(){
		    if($.inArray(this.value, optionValuesfrom) >-1){
		       $(this).remove()
		    }else{
		       optionValuesfrom.push(this.value);
		    }
		 });
	 $('#route_name_to option').each(function(){
		    if($.inArray(this.value, optionValuesto) >-1){
		       $(this).remove()
		    }else{
		       optionValuesto.push(this.value);
		    }
		 });
	}
});


/*var GoodsMasterGetRoute = localStorage.getItem("smaasip")+"/SCMXPert/getGoods/"+cust_id;
$("#goods_id_vaal").on("change",function(){
	var Good_id = $("#goods_id_val").val();	
	GoodDetailsWithId(Good_id,GoodsMasterGetRoute);
	//alert(Good_id);
});*/

	var UserIds = $.session.get('UserId');

var UserId = UserIds;
	var useridsplit = UserId.split('-');
	useridsplit[0].toString();
	useridsplit[0] + "";
	useridsplit[1].toString();
	useridsplit[1] + "";
/*$.ajax({
	url: localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0],
	type: "GET",
	dataType: "json",
	headers: {
	    'Authorization': localStorage.getItem('SavedToken')
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
			var select_device_Id_items = '<option value="'+value+'">'+value+'</option>';
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
});*/
//getRouteDEtails(RouteMasterGetRoute);
$("#route_name_from").keydown(function(){
	$(".showprelocationf").html('');
	var value = $(this).val();
	if(value.length > 1){
	var expression = new RegExp(value,"i");
	/*$.getJSON(RouteMasterGetRoute,function(data){
		$.each(data,function(key,value){
			if(value.from.search(expression) != -1)
				{
					$(".showprelocationf").append("<li style='list-style-type: none;text-indent: 10px;font-weight: 600;margin: 2px;background: #965664b8;color: #fff;padding: 2px 0px;border-radius: 2px'>"+value.from+"</li>")
				}
		});
	});*/
		$.ajax({
    url: RouteMasterGetRoute,
    type : "GET",
    dataType: 'json',
	headers: {
	        	    'Authorization': localStorage.getItem('SavedToken')
	        	  },
    success:function(data){
   // //console.log(data);
		$.each(data,function(key,value){
			if(value.from.search(expression) != -1)
				{
					$(".showprelocationf").append("<li style='list-style-type: none;text-indent: 10px;font-weight: 600;margin: 2px;background: #965664b8;color: #fff;padding: 2px 0px;border-radius: 2px'>"+escapeHtml(value.from)+"</li>")
				}
		});
		
       
    },
});
	}else{
		$(".showprelocationf").html('');
		}
});

	
	//var exists = false; 
	/*$('#route_name_from  option').each(function(){
		//alert(this.value);
	  if (this.value == yourValue) {
		  //alert(this.value);
	    //exists = true;
	  }
	});*/
	/*	var opt = value_data;
		if ($('#route_name_from option:contains('+ opt +')').length) {
		   //alert('This option exists')
		}*/
	
/*$("#shipTo").keydown(function(){
	//$(".showprelocationf").html('');
	var value_data = $(this).val();
	if(value_data.length > 1){
		$(".showprelocationt").html('');
	var expression = new RegExp(value_data,"i");
	$.getJSON(RouteMasterGetRoute,function(data){
		$.each(data,function(key,value){
		//	//alert(value.to);
			if(value.to.search(expression) != -1)
			//if(value.from == value_data)
				{
					$(".showprelocationt").append("<li style='list-style-type: none;text-indent: 10px;font-weight: 600;margin: 2px;background: #965664b8;color: #fff;padding: 2px 0px;border-radius: 2px'>"+value.to+"</li>")
				}
		});
	});
	}else{
		$(".showprelocationt").html('');
		}
});*/

 });
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