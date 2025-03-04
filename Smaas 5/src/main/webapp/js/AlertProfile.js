
$(function() {
	AlertProfile_livelist();
	GetAlertProfileDetails();
		//alertsList();
	$("#CancelEvent,.body_blur,.close,#backgroundBlur").on("click",function(){
		$(".ShowAlertList").hide();
		
	});
});

function AlertProfile_livelist(){
	
	$("#draftTableaa>tbody").empty();

 	var UserId = $.session.get('UserId');
	var Cust_Id = $.session.get('Cust_Id');
	var UserId = $.session.get('UserId');
	var useridsplit = UserId.split('-');
	useridsplit[0].toString();
	useridsplit[0] + "";
	useridsplit[1].toString();
	useridsplit[1] + "";
	var token = $.session.get('Token');
//	 var bpval = useridsplit[1];
//    var scmval = useridsplit[0];
 	
// if(Role == "SUPERADMIN"){
//	 
//	 var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsListAll"; }
 
 var url = localStorage.getItem("smaasip")+"/SCMXPert/getAlertsProfile/"+useridsplit[0];

	//console.log(url);
	////alert("hai jaisai");
	$.ajax({
		type : "GET",
		url : url,
		headers: {
		   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
		   	     	  	    	        	  },
		success : function(filter) {
			//console.log(filter);
			$("#draftTableaa>tbody").empty();
			var numval = 0
			$.each(filter,function(key,value){
				var seq = numval+1;
				var tabletr = "<tr><td style='height:20px'>"+escapeHtml(seq)+"</td><td>"+escapeHtml(value.alert_Profile)+"</td><td>"+escapeHtml(value.profile_Desc)+"</td><td>"+escapeHtml(value.route_Id)+"</td><td>"+escapeHtml(value.goods_Type)+"</td><td>"+escapeHtml(value.event_Name)+"</td><td>"+escapeHtml(value.geo_Fence)+"</td><td>"+escapeHtml(value.alert_Type)+"</td><td>"+escapeHtml(value.alert_Id)+"</td></tr>";
  				$('#draftTableaa>tbody').append(tabletr); 
  				numval++;
			}); 
			var rowCount = $('#draftTableaa tbody tr').length;
			var countLength = rowCount+1;
			$("#Alert_profile").val("ALTP0"+countLength);
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

function ShowAlertList(){
	////alert("hai jaisai");
	var Cust_Id = $("#Cust_Id").val();
	$(".body_blur").show();
	$(".ShowAlertList").fadeIn().css({"width":"80%","height":"65%","background":"#fff","top": "0px","position":"fixed","z-index":"9","margin":"8% -3%","overflow-y":"auto","border-radius":"5px"});
	$(".ShowAlertList").html("<div><h3 style='width:98%;margin:0px;text-align:center;padding-top:1%;float:left;'>Alert List</h3><div style='float:left;font-weight:bold;font-size:14px;padding-top:1%;margin-top:10px;width: 1.7%;height: 30px;' class='close' cursor:pointer onclick='javascript:return closerouteslist();'>X</div></div><table id='showallAlertList' class='table'><thead><tr><th>seq.</th><th>AlertProfile</th><th>Profile Description</th><th>Route id</th><th>Goods Type</th><th>Event Name</th><th>Geofence</th><th>Alert type</th><th>Alert Id</th><th>Action</th></tr></thead><tbody></tbody></table>")
	$("#showallAlertList").css({"font-size":"12px","font-weight":"bold"}); 
	    var UserId = $.session.get('UserId');
	
	 	//var UserIds = $.session.get('UserId');

	    var UserId = UserId;
	 	var useridsplit = UserId.split('-'); 	
	 	useridsplit[0].toString();
	 	useridsplit[0] + "";
	 	useridsplit[1].toString();
	 	useridsplit[1] + "";
	var GoodsMasterGetRoute = localStorage.getItem("smaasip")+"/SCMXPert/getAlertsProfile/"+useridsplit[0];  
	/*$.getJSON(GoodsMasterGetRoute,function(response){
		//console.log(response);
		
			var num = 0
		$.each(response,function(a,b){
			var numid = num+1;
			
			var tabletr="<tr id='ALTP_"+(num+1)+"'><td>"+numid+"</td><td  id='alertProfile_"+numid+"'>"+b.alert_Profile+"</td><td id='alertDesc_"+numid+"'>"+b.profile_Desc+"</td><td id='alertRoute_"+numid+"'>"+b.route_Id+"</td><td id='alertGood_"+numid+"'>"+b.goods_Type+"</td><td id='alertEvent_"+numid+"'>"+b.event_Name+"</td><td id='alertGeo_"+numid+"'>"+b.geo_Fence+"</td><td id='alertType_"+numid+"'>"+b.alert_Type+"</td><td id='alertId_"+numid+"'>"+b.alert_Id+"</td><td id='alertBtn_"+numid+"'><img src='./images/pencil.png' style='width:16px;height:16px; cursor:pointer' title='Edit' onclick='javascript:return edit//alert(\""+numid+"\")'/>&nbsp;&nbsp;&nbsp;&nbsp;<img src='./images/rubbish-bin (1).png' style='width:16px;height:16px; cursor:pointer' title='Delete' onclick='javascript:return deleteRouteItem(\""+useridsplit[0]+"\",\""+b.route_Id+"\");'/></td></tr>"
			$("#showallAlertList >tbody").append(tabletr);
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
			
			var tabletr="<tr id='ALTP_"+escapeHtml(num+1)+"'><td>"+escapeHtml(numid)+"</td><td  id='alertProfile_"+escapeHtml(numid)+"'>"+escapeHtml(b.alert_Profile)+"</td><td id='alertDesc_"+escapeHtml(numid)+"'>"+escapeHtml(b.profile_Desc)+"</td><td id='alertRoute_"+escapeHtml(numid)+"'>"+escapeHtml(b.route_Id)+"</td><td id='alertGood_"+escapeHtml(numid)+"'>"+escapeHtml(b.goods_Type)+"</td><td id='alertEvent_"+escapeHtml(numid)+"'>"+escapeHtml(b.event_Name)+"</td><td id='alertGeo_"+escapeHtml(numid)+"'>"+escapeHtml(b.geo_Fence)+"</td><td id='alertType_"+escapeHtml(numid)+"'>"+escapeHtml(b.alert_Type)+"</td><td id='alertId_"+escapeHtml(numid)+"'>"+escapeHtml(b.alert_Id)+"</td><td id='alertBtn_"+escapeHtml(numid)+"'><img src='./images/pencil.png' style='width:16px;height:16px; cursor:pointer' title='Edit' onclick='javascript:return edit//alert(\""+escapeHtml(numid)+"\")'/>&nbsp;&nbsp;&nbsp;&nbsp;<img src='./images/rubbish-bin (1).png' style='width:16px;height:16px; cursor:pointer' title='Delete' onclick='javascript:return deleteRouteItem(\""+escapeHtml(useridsplit[0])+"\",\""+escapeHtml(b.route_Id)+"\");'/></td></tr>"
			$("#showallAlertList >tbody").append(tabletr);
			num++;
		});
       
    },
});
}
function closerouteslist()
{
	//AllRoutes();
	$(".body_blur").hide();
	 $(".ShowAlertList").fadeOut().empty();
	
}
function CreateNewalert()
{
	$(".body_blur").show();
	$(".AlertFormPage").show();
}
function cancelAlertprofile()
{
	$(".body_blur").hide();
	$(".AlertFormPage").hide();
}


function editalert(val){
	
	$("#alertDesc_"+val).attr("contenteditable",true);
	$("#alertRoute_"+val).html('<select class="form-control" id="alertrouteval_'+escapeHtml(val)+'"><option value="">Select Route Id</option></select>');
	$("#alertGood_"+val).html('<select class="form-control" id="alertGoodval_'+escapeHtml(val)+'"><option value="">Select Good Type</option></select>');
	$("#alertEvent_"+val).html('<select class="form-control" id="alertEventval_'+escapeHtml(val)+'"><option value="">Select Event Id</option></select>');
	$("#alertGeo_"+val).html('<select class="form-control" id="alertGeoval_'+escapeHtml(val)+'"><option value="">Select Geofence</option></select>');
	$("#alertType_"+val).html('<select class="form-control" id="alertTypeListval_'+escapeHtml(val)+'"><option value="">Select Alert Type</option></select>');
	$("#alertId_"+val).html('<select class="form-control" id="AlertIdval_'+escapeHtml(val)+'"><option value="">Select Alert Id</option></select>');
	$("#alertBtn_"+val).html('<button class="btn btn-info" onclick="javascript:return SaveAlertProfile('+escapeHtml(val)+');" id="alertBtnSave">Save</button>'); 
	
	
	var UserId = $.session.get('UserId');
	var Cust_Id = $.session.get('Cust_Id');
	var UserId = $.session.get('UserId');
	var useridsplit = UserId.split('-');
	useridsplit[0].toString();
	useridsplit[0] + "";
	useridsplit[1].toString();
	useridsplit[1] + "";
	var token = $.session.get('Token');
	 var url = localStorage.getItem("smaasip")+"/SCMXPert/getAlertsProfileDDData/"+useridsplit[0];  
		//console.log(url);
		$.ajax({
			type : "GET",
			url : url,
			headers: {
		   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
		   	     	  	    	        	  },
			success : function(filter) {
				
				$.each(filter,function(key,value){
					var routeIdList = value.routeId;
					var Routeid = routeIdList.length;
					for(i=0;i<Routeid;i++)
						{						
							$("#alertrouteval_"+val).append('<option value="'+escapeHtml(routeIdList[i])+'">'+escapeHtml(routeIdList[i])+'</option>');
						}
					
					var goodlist = value.goodsType;
					var goodid = goodlist.length;
					for(i=0;i<goodid;i++){
						
						
						$("#alertGoodval_"+val).append('<option value="'+escapeHtml(goodlist[i])+'">'+escapeHtml(goodlist[i])+'</option>');
					}
					
					var eventlist = value.eventId;
					var eventid = eventlist.length;
					for(i=0;i<eventid;i++){
						$("#alertEventval_"+val).append('<option value="'+escapeHtml(eventlist[i])+'">'+escapeHtml(eventlist[i])+'</option>');
					}
					
					//var geofencelist = value.
					
					var alerttypelist = value.alertType;
					var alerttypeid = alerttypelist.length;
					for(i=0;i<alerttypeid;i++){
						//console.log(alerttypeid);
						$("#alertTypeListval_"+val).append('<option value="'+escapeHtml(alerttypelist[i])+'">'+escapeHtml(alerttypelist[i])+'</option>');
					}
					
					var alertidlist = value.alertId; 
					var alertiddup = alertidlist.length;
					for(i=0;i<alertiddup;i++){
						$("#AlertIdval_"+val).append('<option value="'+escapeHtml(alertidlist[i])+'">'+escapeHtml(alertidlist[i])+'</option>');
					}
					
	
			});
				var UserId = $.session.get('UserId');
				var useridsplit = UserId.split('-');
				useridsplit[0].toString();
				useridsplit[0] + "";
				useridsplit[1].toString();
				useridsplit[1] + "";
				var token = $.session.get('Token');
//				 var bpval = useridsplit[1];
//			    var scmval = useridsplit[0];
			 	
			// if(Role == "SUPERADMIN"){
//				 
//				 var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsListAll"; }
			 
			 var url = localStorage.getItem("smaasip")+"/SCMXPert/getAlertsProfile/"+useridsplit[0];		    
				//console.log(url);
				////alert("hai jaisai");
				$.ajax({
					type : "GET",
					url : url,
					headers: {
		   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
		   	     	  	    	        	  },
					success : function(filter) {
						$.each(filter,function(key,value){
							if(value.alert_Profile == "ALTP0"+val)
								{
								//console.log("ALTP0"+val);//console.log(value.alert_Profile);
								$("#alertrouteval_"+val).val(value.route_Id);
								$("#alertGoodval_"+val).val(value.goods_Type);
								$("#alertEventval_"+val).val(value.event_Name);
								$("#alertGeoval_"+val).val(value.geo_Fence);
								$("#alertTypeListval_"+val).val(value.alert_Type);
								$("#AlertIdval_"+val).val(value.alert_Id);
								}
						});
						//console.log(filter);
						}
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

function cancelUpadteList(){
	$(".body_blur").hide();
	$(".ShowEditList").fadeOut().empty();	
}
function DownloadAllAlerts(){
	
$("#draftTableaa").tableToCSV({  
    filename: 'AlertList'  
});
}

function createalert(){
	
	var AlertProfile = $("#Alert_profile").val();
	var AlertDesc = $("#event_description").val();
	var Alertrouteid= $("#Alert_route").val();
	var Alertgoodtype = $("#Alert_good").val();
	var Alerteventid = $("#Alert_event").val();
	var Alertgeofence = $("#Alert_geofence").val();
	var AlertType = $("#Alert_typeid").val();
	var Alertid = $("#Alert_id").val();
	var Cust_Id = $("#Cust_Id").val()
	
	var json_value = {
			"customer_Id":Cust_Id,
			"alert_Id":Alertid,
			"alert_Type":AlertType,
			"event_Name":Alerteventid,
			"goods_Type":Alertgoodtype,
			"geo_Fence":"",
			"route_Id":Alertrouteid,
			"profile_Desc":AlertDesc,
			"alert_Profile":AlertProfile
			
			};
			
var xfgfdsg = "["+JSON.stringify(json_value)+"]";
 var token = $.session.get('Token');
 //console.log(Token);

			var token = $.session.get('Token');
			var url = localStorage.getItem("smaasip")+"/SCMXPert/alertsProfile";			
			 $.ajax({  
				 type : "post",
					url : url,
					headers: {
		   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken'),
		   	     	  	    	        	    'Content-type': 'application/json'
		   	     	  	    	        	  },
					data : xfgfdsg,
					 dataType: "json",
					success : function(data) {
			            	////alert(data);
			            	//console.log(data);
			            	
			            	document.location.reload();
			            },
				 
			 });
	
}

function GetAlertProfileDetails(){
	
//	$("#draftTableaa>tbody").empty();

 	var UserId = $.session.get('UserId');
	var Cust_Id = $.session.get('Cust_Id');
	var UserId = $.session.get('UserId');
	var useridsplit = UserId.split('-');
	useridsplit[0].toString();
	useridsplit[0] + "";
	useridsplit[1].toString();
	useridsplit[1] + "";
	var token = $.session.get('Token');
//	 var bpval = useridsplit[1];
//    var scmval = useridsplit[0];
 	
// if(Role == "SUPERADMIN"){
//	 
//	 var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsListAll"; }
	
 var url = localStorage.getItem("smaasip")+"/SCMXPert/getAlertsProfileDDData/"+useridsplit[0]; 
	//console.log(url);
	////alert("hai jaisai");
	$.ajax({
		type : "GET",
		url : url,
		headers: {
		   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
		   	     	  	    	        	  },
		success : function(filter) {
			////console.log("nmhasdh"+filter);
//			$("#draftTableaa>tbody").empty();
			$.each(filter,function(key,value){
				var routeIdList = value.routeId;
				var Routeid = routeIdList.length;
				for(i=0;i<Routeid;i++)
					{						
						$("#Alert_route").append('<option value="'+escapeHtml(routeIdList[i])+'">'+escapeHtml(routeIdList[i])+'</option>');
					}
				
				var goodlist = value.goodsType;
				var goodid = goodlist.length;
				for(i=0;i<goodid;i++){
					
					
					$("#Alert_good").append('<option value="'+escapeHtml(goodlist[i])+'">'+escapeHtml(goodlist[i])+'</option>');
				}
				
				var eventlist = value.eventId;
				var eventid = eventlist.length;
				for(i=0;i<eventid;i++){
					$("#Alert_event").append('<option value="'+escapeHtml(eventlist[i])+'">'+escapeHtml(eventlist[i])+'</option>');
				}
				
				//var geofencelist = value.
				
				var alerttypelist = value.alertType;
				var alerttypeid = alerttypelist.length;
				for(i=0;i<alerttypeid;i++){
					////console.log(alerttypeid);
					////console.log("dskjhdfsgkjgh"+alerttypelist[i])
					$("#Alert_typeid").append('<option value="'+escapeHtml(alerttypelist[i])+'">'+escapeHtml(alerttypelist[i])+'</option>');
				}
				
				var alertidlist = value.alertId; 
				var alertiddup = alertidlist.length;
				for(i=0;i<alertiddup;i++){
					$("#Alert_id").append('<option value="'+escapeHtml(alertidlist[i])+'">'+escapeHtml(alertidlist[i])+'</option>');
				}
				
				
				/*
				$("#Alert_route").append('<option value="'+value.routeId+'">'+value.routeId+'</option>');
				$("#Alert_good").append('<option value="'+value.goodsType+'">'+value.goodsType+'</option>');
				$("#Alert_event").append('<option value="'+value.eventId+'">'+value.eventId+'</option>');
				$("#Alert_geofence").append('<option value="'+value.goodsType+'">'+value.goodsType+'</option>');
				$("#Alert_type").append('<option value="'+value.alertType+'">'+value.alertType+'</option>');
				$("#Alert_id").append('<option value="'+value.alertId+'">'+value.alertId+'</option>');*/
				
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

function SaveAlertProfile(val){
	
	var UserId = $.session.get('UserId');
	var Cust_Id = $.session.get('Cust_Id');
	var UserId = $.session.get('UserId');
	var useridsplit = UserId.split('-');
	useridsplit[0].toString();
	useridsplit[0] + "";
	useridsplit[1].toString();
	useridsplit[1] + "";
	var token = $.session.get('Token');

	
	
	var AlertDesc = $("#alertDesc_"+val).text();
    var Alertprofile = $("#alertProfile_"+val).text();
    //console.log(Alertprofile);
	var Alertrouteid= $("#alertrouteval_"+val).val();
	var Alertgoodtype = $("#alertGoodval_"+val).val();
	var Alerteventid = $("#alertEventval_"+val).val();
	var Alertgeofence = $("#alertGeoval_"+val).val();
	var AlertType = $("#alertTypeListval_"+val).val();
	var Alertid = $("#AlertIdval_"+val).val();
	var Cust_Id = $("#Cust_Id").val()
	
	var json_value = {
			"customer_Id":Cust_Id,
			"alert_Id":Alertid,
			"alert_Type":AlertType,
			"event_Id":Alerteventid,
			"goods_Type":Alertgoodtype,
			"geo_Fence":"",
			"route_Id":Alertrouteid,
			"profile_Desc":AlertDesc,
			"alert_Profile":Alertprofile
			};
	
	var xfgfdsg = "["+JSON.stringify(json_value)+"]";
	
	//console.log(JSON.stringify(json_value));
	//console.log(xfgfdsg);
	
	 var token = $.session.get('Token');
	 //console.log(Token);

				var token = $.session.get('Token');
				var url = localStorage.getItem("smaasip")+"/SCMXPert/updateAlertProfile";			
				//console.log(url);
				 $.ajax({  
					 type : "post",
						url : url,
						headers: {
		   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
		   	     	  	    	        	  },
						data : xfgfdsg,
						 dataType: "json",
						success : function(data) {
							
							$("#alertDesc_"+val).attr("contenteditable",false);
							$("#alertRoute_"+val).text(Alertrouteid);
							$("#alertGood_"+val).text(Alertgoodtype);
							$("#alertEvent_"+val).text(Alerteventid);
							$("#alertGeo_"+val).text(Alertgeofence);
							$("#alertType_"+val).text(AlertType);
							$("#alertId_"+val).text(Alertid);
							$("#alertBtn_"+val).html("<img src='./images/pencil.png' style='width:16px;height:16px; cursor:pointer' title='Edit' onclick='javascript:return edit//alert(\""+escapeHtml(val)+"\")'/>&nbsp;&nbsp;&nbsp;&nbsp;<img src='./images/rubbish-bin (1).png' style='width:16px;height:16px; cursor:pointer' title='Delete' onclick='javascript:return deleteRouteItem();'/>"); 
							
							
				            	//alert(data);
				            	//console.log(data);
				            	
				           	var alertid = '';
				         
				            	//console.log(data); 
				            	
				            	//document.location.reload();
				            },
					 
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
function uploadfile(){
	//alert("hai upload file");
}
