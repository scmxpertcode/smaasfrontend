$(document).ready(function(){
	var UserId = $.session.get('UserId');
	var useridsplit = UserId.split('-');
	useridsplit[0].toString();
	useridsplit[0] + "";
	useridsplit[1].toString();
	useridsplit[1] + "";
	////alert(useridsplit[1]);
	//getShipmentId(useridsplit[1]);
	$(".bodybackblur").show().css({"position":"fixed","z-index":"11","width":"100%","height":"100%","background":"rgb(0 0 0 / 92%)"});
	$("#loadingimg1").show().css({"position":"fixed","z-index":"12","left":"8vw"});
	setTimeout(function(){
	$(".bodybackblur,#loadingimg1").hide();
	},4000);
	
/*	var RouteGetRoute = localStorage.getItem("smaasip")+"/SCMXPert/getShipfromandto/"+useridsplit[0];
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
					$("#routes").append('<option value="'+data[i]+'">'+data[i]+'</option>');
				}
			
		}

});*/
	$("#routes").on("change",function(){
		if($(this).val() != ''){
			$("#return_location").val("Same Location");
		}else{
			$("#return_location").val("Device Release");
		}
		
	});
	var Role = $.session.get('Role');
	var RolePermission = $.session.get('RolePermission');
	if(Role == "SUPERADMIN"){
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
		
		//$(".showRolesList").css("margin-top","6%");
		$("#SPAD_Name > #user_SPAD_Name").text(UserName).show().addClass("");
	//	$(".sessionUsername").css({"width":"50%","float":"left","font-weight":"bold"});
	//	$(".userrole").css({"width":"50%","float":"left","font-weight":"bold"});
		//$(".sessionUsernameDisplay").css("width","50%");
		$("#SPAD_Name,#BP_Name").remove();
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
			$("#SPAD_Name,#BP_Name").remove();
			var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsList/"+UserId;
			//	$("#customer").hide();
			}
	$("#CancelEvent,.body_blur,.close,.closeEvidence ").on("click",function(){
		$(".body_blur,.AddEventBlock,#previewCompletedEvidence").hide();
		 $("body").css({"overflow":"auto"});
		 $("#showpopupImages,.body_blur,#carouselExampleIndicators").hide();
		 $('.carousel-item').removeClass("active");
		 $(".showpopupImages").css({"margin":"0%"});
		//$("body").css("overflow","auto");
	});
	$("#inboxesvalues>thead").hide();
	$("#inboxesvaluesshowhead>thead").show();
	$("#inboxesvaluesshowhead>tbody").hide();
});    	

var part_from = $.cookie("BP_ID");
        	var SCM_id = $.cookie("SCM_id");
        	var ship_id = $.cookie("shp_id");
        	var ship_num = $.cookie("shipment_Num");
			var device_id = $.cookie("device_Id");
			var typeofreference = $.cookie("typeofreference");
    	 	window.onload = function(){
    	 		  var Role = $.session.get('Role');
    	    
    	    			var UserIds = $.session.get('UserId');

    	 		var UserId = UserIds;
    	 		var useridsplit = UserId.split('-');
    	 		useridsplit[0].toString();
    	 		useridsplit[0] + "";
    	 		useridsplit[1].toString();
    	 		useridsplit[1] + "";
    	 /*		$.getJSON( localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0], function( data ) {
    	        	$.each(data.route,function(keys,values){
    					 var select_route_items = '<option value="'+values.route_Id+'">'+values.from+','+values.to+'</option>';
    					// $("#routes").append(select_route_items);
    					 var select_returnroute_items = '<option value="'+values.route_Id+'">'+values.to+'</option>';
    					// $("#return_location").append(select_returnroute_items);
    				});
    	        	$.each(data.typeOfReferences,function(keys,values){
       				 var select_typeOfReferences_items = '<option value="'+values+'">'+values+'</option>';
       				 $("#typeOfReferences,#typeOfReferences1").append(select_typeOfReferences_items);
    	        	});   */
    	        	/*$.each(data.business_Partner_Id,function(keys,values){
       				 var event_partner_from = '<option value="'+values+'">'+values+'</option>';
       				 $("#event_partner_from,#selectvalues").append(event_partner_from);
    	        	});  */ 
    	 //       });
		$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0],
    type : "GET",
    dataType: 'json',
	headers: {
	        	    'Authorization': localStorage.getItem('SavedToken')
	        	  },
    success:function( data ){
  	$.each(data.route,function(keys,values){
    					 var select_route_items = '<option value="'+values.route_Id+'">'+values.from+','+values.to+'</option>';
    					// $("#routes").append(select_route_items);
    					 var select_returnroute_items = '<option value="'+values.route_Id+'">'+values.to+'</option>';
    					// $("#return_location").append(select_returnroute_items);
    				});
    	        	$.each(data.typeOfReferences,function(keys,values){
       				 var select_typeOfReferences_items = '<option value="'+values+'">'+values+'</option>';
       				 $("#typeOfReferences,#typeOfReferences1").append(select_typeOfReferences_items);
    	        	});  
}
 });
        	 	$("#shipment_id").val(ship_id);
        	 	$("#shipment_number").val(ship_num);
        	 	$("#connected_device").val(device_id);
        	 	$("#typeOfReferenceshide").val(typeofreference);
        	 	var shipment_id = $("#shipment_id").val();
        	 	var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsListByShipment_Id/"+shipment_id;
        	 	
        	/*	$.getJSON(url,function(response){
        			$.each(response,function(key,value){
        				////console.log(value.route_To);
        				$("#routes").append('<option value="'+value.route_To+'">'+value.route_To+'</option>');
        				$("#return_location").append('<option value="Same Location">'+value.route_To+'</option>');
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
        				////console.log(value.route_To);
        				$("#routes").append('<option value="'+value.route_To+'">'+value.route_To+'</option>');
        				$("#return_location").append('<option value="Same Location">'+value.route_To+'</option>');
        			});
}
});
        /*	 	$.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/getAllTxns/"+ship_id,function(filters){
        	 		var event_sNO = []; 
     				$.each(filters,function(key,value){
     					event_sNO.push(value.event_SNo);
     				});
     				
     				
     				event_sNO.sort(function(a, b){return a-b});
     				for(i=0;i<event_sNO.length;i++)
    					{
    						var event_num = event_sNO[i];
    		 				$.each(filters,function(kew,val){
    		 					
    		 		 					if(event_num == val.event_SNo)
    		 		 						{
    		 		 						var status_length = val.event_Name.length;
    		 		 						var theDate = new Date( Date.parse(val.event_Exec_Date));
    		 		 		             	var date_create = theDate.toLocaleDateString();
    		 			             		/*var theDate = new Date( Date.parse(val.event_Exec_Date));
     		 			               		var date_create = theDate.toLocaleDateString();*/
     		 			              /* 	if(val.event_Exec_Date){
    				             			var date_create = dateFormat(val.event_Exec_Date, "dd-mmm-yyyy");
    				             		}else{
    				             			var date_create = '';
    				             		}
    		 			             		var key = kew+1;
    		 			             		if(val.event_Status == "Completed"){
    		 		 			               	if(val.evidenceList == null || val.evidenceList == "")
    		 			 			        	 {
    		 			 			        	 	var evidence = '<td class="pl-1"><div class="completedBackground eventStatus" id="evidence_list_'+val.event_Id+'" style="background:#965664;color:#fff;width:75px;"><div>No Evidence</div></div></td>';
    		 			 			        	 }else{
    		 			 			        		
    		 			 			        		 var evidence = '<td class="pl-1"><div class="completedBackground eventStatus" id="evidence_list_'+val.event_Id+'" style="background:#965664;color:#fff;cursor:pointer;"><div onclick="javascript:return showEvidencePreview(\''+ship_id+'\',\''+val.event_Id+'\',\''+val.evidenceList+'\')"><img src="./images/eye.png" style="width:16px;height:16px;float:left;"/><span style="float:left;margin-left:2px;">Show Evidence</span></div></div></td>';
    		 			 			        	 } var eventsboxes = '<tr id="row_val_'+val.event_Id+'" class="completedBackground Event_class" style="height:30px;border-bottom: 4px solid #fff;"><td class="p-1"></td><td class="" style="font-size: 10px;padding:1px;"><div class="completedBackground eventNum" id="'+val.event_Id+'" style="width:75px;">'+val.event_Id+'</div></td><td class="pl-1"><div class="completedBackground eventName" id="event_name_'+val.event_Id+'">'+val.event_Name+'</div></td><td class="pl-1"><div class="eventBp" id="partner_'+val.event_Id+'" style="width:100px;">'+val.partner+'</div></td><td class="pl-1"><div class="completedBackground eventBp" id="partner_from_'+val.event_Id+'">'+val.partner_From+'</div></td><td class="pl-1"><div class="completedBackground eventDate" id="date_'+val.event_Id+'" style="width:100px;">'+date_create+'</div></td><td class="pl-1"><div class="completedBackground eventStatus" id="event_status_'+val.event_Id+'" style="width:100px;">'+val.event_Status+'</div></td>'+evidence+'</tr>';
    		 		 			             		}else{
    		 		 			             			var eventsboxes = '<tr id="row_val_'+val.event_Id+'" class="Event_class" style="height:30px;"><td class="p-1"><input type="radio" onclick="javascript:return geteventvalueslist(this.value);" name="event" style="width:14px;" value="'+val.event_Id+'" id="Radio_'+val.event_Id+'"/></td><td class="" style="font-size: 10px;padding:1px;"><div class="eventNum" id="'+val.event_Id+'" style="width:75px;">'+val.event_Id+'</div></td><td class="pl-1"><div class="eventName" id="event_name_'+val.event_Id+'">'+val.event_Name+'</div></td><td class="pl-1"><div class="eventBp" id="partner_'+val.event_Id+'" style="width:100px;">'+val.partner+'</div></td><td class="pl-1"><div class="eventBp" id="partner_from_'+val.event_Id+'">'+val.partner_From+'</div></td><td class="pl-1"><div class="eventDate" id="date_'+val.event_Id+'" style="width:100px;">'+date_create+'</div></td><td class="pl-1"><div class="eventStatus" id="event_status_'+val.event_Id+'" style="width:100px;">'+val.event_Status+'</div></td><td class="pl-1"><div id="Evidence-'+val.event_Id+'" class="PhotoEvidence" style="display:none;">'+val.evidence+'</div><div style="" id="date_'+val.event_Id+'"><label class="switch"><input class="switch-input" id="switch-input-'+val.event_Id+'" type="checkbox" onchange="javascript:return setPhotoEvidenceUpdate(\''+val.event_Id+'\');"/><span class="switch-label" data-on="Yes" data-off="No"></span><span class="switch-handle"></span></label></div></td></tr>';
    		 		 			             			
    		 				             		}
    		 		 			             		
    		 		 			             		////alert(eventsboxes);
    		 		 				 				$("#inboxesvalues>tbody").append(eventsboxes);
    		 		 				 				if(val.event_Status == "Completed"){
    		 						               		$(".eventNum").css("width","80px");
    		 						               	}else{
    		 						               		$(".eventNum").css("width","80px");
    		 						               	}*/
    		 				 				//$("#inboxesvalues>tbody").append(eventsboxes);
    	// 		 						} 
    	//	 		 				});
    	//	 				var events_is = $('#inboxesvalues tr:last').find('td:eq(1) div').attr("id");
    	//		        	$("#Radio_"+events_is).prop("checked", true);
    	//		        	geteventvalueslist(events_is)
    	//				}
       // 	 	});*/
		$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getAllTxns/"+ship_id,
    type : "GET",
    dataType: 'json',
	headers: {
	        	    'Authorization': localStorage.getItem('SavedToken')
	        	  },
    success:function(filters){
 var event_sNO = []; 
     				$.each(filters,function(key,value){
     					event_sNO.push(value.event_SNo);
     				});
     				
     				
     				event_sNO.sort(function(a, b){return a-b});
     				for(i=0;i<event_sNO.length;i++)
    					{
    						var event_num = event_sNO[i];
    		 				$.each(filters,function(kew,val){
    		 					
    		 		 					if(event_num == val.event_SNo)
    		 		 						{
    		 		 						var status_length = val.event_Name.length;
    		 		 						var theDate = new Date( Date.parse(val.event_Exec_Date));
    		 		 		             	var date_create = theDate.toLocaleDateString();
    		 			             		/*var theDate = new Date( Date.parse(val.event_Exec_Date));
     		 			               		var date_create = theDate.toLocaleDateString();*/
     		 			               	if(val.event_Exec_Date){
    				             			var date_create = dateFormat(val.event_Exec_Date, "dd-mmm-yyyy");
    				             		}else{
    				             			var date_create = '';
    				             		}
    		 			             		var key = kew+1;
    		 			             		if(val.event_Status == "Completed"){
    		 		 			               	if(val.evidenceList == null || val.evidenceList == "")
    		 			 			        	 {
    		 			 			        	 	var evidence = '<td class="pl-1"><div class="completedBackground eventStatus" id="evidence_list_'+escapeHtml(val.event_Id)+'" style="background:#965664;color:#fff;width:75px;"><div>No Evidence</div></div></td>';
    		 			 			        	 }else{
    		 			 			        		
    		 			 			        		 var evidence = '<td class="pl-1"><div class="completedBackground eventStatus" id="evidence_list_'+escapeHtml(val.event_Id)+'" style="background:#965664;color:#fff;cursor:pointer;"><div onclick="javascript:return showEvidencePreview(\''+escapeHtml(ship_id)+'\',\''+escapeHtml(val.event_Id)+'\',\''+escapeHtml(val.evidenceList)+'\')"><img src="./images/eye.png" style="width:16px;height:16px;float:left;"/><span style="float:left;margin-left:2px;">Show Evidence</span></div></div></td>';
    		 			 			        	 } var eventsboxes = '<tr id="row_val_'+escapeHtml(val.event_Id)+'" class="completedBackground Event_class" style="height:30px;border-bottom: 4px solid #fff;"><td class="p-1"></td><td class="" style="font-size: 10px;padding:1px;"><div class="completedBackground eventNum" id="'+escapeHtml(val.event_Id)+'" style="width:75px;">'+escapeHtml(val.event_Id)+'</div></td><td class="pl-1"><div class="completedBackground eventName" id="event_name_'+escapeHtml(val.event_Id)+'">'+escapeHtml(val.event_Name)+'</div></td><td class="pl-1"><div class="eventBp" id="partner_'+escapeHtml(val.event_Id)+'" style="width:100px;">'+escapeHtml(val.partner)+'</div></td><td class="pl-1"><div class="completedBackground eventBp" id="partner_from_'+escapeHtml(val.event_Id)+'">'+escapeHtml(val.partner_From)+'</div></td><td class="pl-1"><div class="completedBackground eventDate" id="date_'+escapeHtml(val.event_Id)+'" style="width:100px;">'+escapeHtml(date_create)+'</div></td><td class="pl-1"><div class="completedBackground eventStatus" id="event_status_'+escapeHtml(val.event_Id)+'" style="width:100px;">'+escapeHtml(val.event_Status)+'</div></td>'+escapeHtml(evidence)+'</tr>';
    		 		 			             		}else{
    		 		 			             			var eventsboxes = '<tr id="row_val_'+escapeHtml(val.event_Id)+'" class="Event_class" style="height:30px;"><td class="p-1"><input type="radio" onclick="javascript:return geteventvalueslist(this.value);" name="event" style="width:14px;" value="'+escapeHtml(val.event_Id)+'" id="Radio_'+escapeHtml(val.event_Id)+'"/></td><td class="" style="font-size: 10px;padding:1px;"><div class="eventNum" id="'+escapeHtml(val.event_Id)+'" style="width:75px;">'+escapeHtml(val.event_Id)+'</div></td><td class="pl-1"><div class="eventName" id="event_name_'+escapeHtml(val.event_Id)+'">'+escapeHtml(val.event_Name)+'</div></td><td class="pl-1"><div class="eventBp" id="partner_'+escapeHtml(val.event_Id)+'" style="width:100px;">'+escapeHtml(val.partner)+'</div></td><td class="pl-1"><div class="eventBp" id="partner_from_'+escapeHtml(val.event_Id)+'">'+escapeHtml(val.partner_From)+'</div></td><td class="pl-1"><div class="eventDate" id="date_'+escapeHtml(val.event_Id)+'" style="width:100px;">'+escapeHtml(date_create)+'</div></td><td class="pl-1"><div class="eventStatus" id="event_status_'+escapeHtml(val.event_Id)+'" style="width:100px;">'+escapeHtml(val.event_Status)+'</div></td><td class="pl-1"><div id="Evidence-'+escapeHtml(val.event_Id)+'" class="PhotoEvidence" style="display:none;">'+escapeHtml(val.evidence)+'</div><div style="" id="date_'+escapeHtml(val.event_Id)+'"><label class="switch"><input class="switch-input" id="switch-input-'+escapeHtml(val.event_Id)+'" type="checkbox" onchange="javascript:return setPhotoEvidenceUpdate(\''+escapeHtml(val.event_Id)+'\');"/><span class="switch-label" data-on="Yes" data-off="No"></span><span class="switch-handle"></span></label></div></td></tr>';
    		 		 			             			
    		 				             		}
    		 		 			             		
    		 		 			             		////alert(eventsboxes);
    		 		 				 				$("#inboxesvalues>tbody").append(eventsboxes);
    		 		 				 				if(val.event_Status == "Completed"){
    		 						               		$(".eventNum").css("width","80px");
    		 						               	}else{
    		 						               		$(".eventNum").css("width","80px");
    		 						               	}
    		 				 				//$("#inboxesvalues>tbody").append(eventsboxes);
    	 		 						} 
    		 		 				});
    		 				var events_is = $('#inboxesvalues tr:last').find('td:eq(1) div').attr("id");
    			        	$("#Radio_"+events_is).prop("checked", true);
    			        	geteventvalueslist(events_is)
    					}
	}
        	 	});

        	 	
        	 	
        	 if (window.File && window.FileList && window.FileReader) {
		  $("#EvidenceUploadFile").on('change', function() {
		      "use strict";
		      var vb = $('input[type="radio"]:checked').val();
		      //alert(vb);
		      // create an empty array for the files to reside.
		      window.filesToUpload = [];

		      if (this.files.length >= 1) {
		    	  $("#evidence_description").attr("disabled",false);
		        //$("[id^=previewImg]").remove();
		    	//  $(".gallery").hide();
		    	  $("#totalimageview").append("<div class='gallery' id='gallery-"+vb+"'></div>")
		        $.each(this.files, function(i, img) {
		        var tagname = getExtension(img.name);
		        //console.log(getExtension(img.name));
		        if(tagname == 'pdf' || tagname == 'docx'){
		        var reader = new FileReader(),
		            newElement = $("<div id='previewImg" + i + "' class='abcd'><embed /></div>"),
		            deleteBtn = $("<div class='delete' onClick='deletePreview(this, " + i + ")'>X</div>").prependTo(newElement),
		            preview = newElement.find("embed");
		          var readera = new FileReader(),
		          newElementPreview = $("<div id='previewImgshow" + i + "' class='carousel-item'><embed /></div>"),
		            previewz = newElementPreview.find("embed");
		        
		        }else{
		        var reader = new FileReader(),
		            newElement = $("<div id='previewImg" + i + "' class='abcd'><img /></div>"),
		            deleteBtn = $("<div class='delete' onClick='deletePreview(this, " + i + ")'>X</div>").prependTo(newElement),
		            preview = newElement.find("img");
		          var readera = new FileReader(),
		          newElementPreview = $("<div id='previewImgshow" + i + "' class='carousel-item'><img /></div>"),
		            previewz = newElementPreview.find("img");
		        
		        }
        			          reader.onloadend = function() {
        			            preview.attr("src", reader.result);
        			            preview.attr("alt", img.name);
        			            preview.attr("title", img.name);
        			            preview.attr("class", "imageNewpreview");
        			            preview.attr("id", "imageNewpreview-"+i);
        			            preview.attr("onclick", "imageNewpreview("+i+")");
        			          };
        			          readera.onloadend = function() {
        				            previewz.attr("src", reader.result);
        				            previewz.attr("alt", img.name);
        				            previewz.attr("title", img.name);
        				            previewz.attr("class", "imageNewpreviewshow");
        				            previewz.attr("id", "imageNewpreview-"+i);
        				          };

        			          try {
        			        	//  //console.log(document.getElementById("EvidenceUploadFile").files[i]);
        			            window.filesToUpload.push(document.getElementById("EvidenceUploadFile").files[i]);
        			          } catch (e) {
        			            //console.log(e.message);
        			          }

        			          if (img) {
        			            reader.readAsDataURL(img);
        			            readera.readAsDataURL(img);
        			          } else {
        			            preview.src = "";
        			          }
        			          
        			          newElement.appendTo("#gallery");
        			          newElementPreview.appendTo(".carousel-inner");
        			        });
        			      }
        			      var classlist = $(".abcd");
        			     // //alert(classlist.length);
        			      if(classlist.length == 1 || classlist.length == 2)
        			    	  {
        			    	  	$(".abcd").css({"width":"97%","height":"100%"});
        			    	  	$(".delete").css({"left":"95%"});
        			    	  	$("#gallery").css({"overflow-x":"hidden","overflow-y":"hidden"});
        			    	  }
        			      if(classlist.length == 3)
        			    	  {
        			    	  	$("#previewImg0").css({"width":"97%","height":"100%"});
        			    	  	$("#previewImg0 > .delete").css({"left":"200px"});
        			    	  	$("#previewImg1,#previewImg2").css({"width":"47.5%","height":"110px"});
        			    	  	$("#previewImg1 > .delete ,#previewImg2 > .delete").css({"left":"190px"});
        			    	  	$("#gallery").css({"overflow-x":"hidden","overflow-y":"hidden"});
        			    	  	
        			    	  }
        			     
        			      $("#uplodimageslist").html(classlist.length+" files Uploaded");
        			    });
        		   /* $("#EvidenceUploadFile").on("change", function(e) {
        		      var files = e.target.files,
        		        filesLength = files.length;
        		     
        		      //$("input[name=file]").val(names);
        		      for (var i = 0; i < filesLength; i++) {
        		        var f = files[i]
        		        var fileReader = new FileReader();
        		        fileReader.onload = (function(e) {
        		        	
        		          var file = e.target;

        		          $("<span class=\"pip\" style=\"width:110px;height:auto;float:left;\">" +
        		            "<span class=\"remove\" id=\"remove-"+i+"\">X</span><img id=\"evidenceimageload-"+i+"\" class=\"imageThumb\" src=\"" + e.target.result + "\" style=\"width:100px;height:auto;float:left;\"/>" +
        		            "<br/>" +
        		            "</span>").insertAfter("#gallery");
        		          $(".remove").click(function(){
        		            $(this).parent(".pip").remove();
        		            
        		          });
        		          
        		          // Old code here
        		          $("<img></img>", {
        		            class: "imageThumb",
        		            src: e.target.result,
        		            title: file.name + " | Click to remove"
        		          }).insertAfter("#files").click(function(){$(this).remove();});
        		          
        		        });
        		        fileReader.readAsDataURL(f);
        		      }
        		      var names = [];
        		      for (var i = 0; i < $(this).get(0).files.length; ++i) {
        		    	  ////alert($(this).get(0).files[i].name);
        		          names.push($(this).get(0).files[i].name);
        		         
        		      }
        		      getimagerule(names);
        		      ////alert(names);
        		    });*/
        		  } else {
        		    //alert("Your browser doesn't support to File API")
        		  }
        	 	setTimeout(function(){
        	 	saveGraph();
        	 	},1000)
    	 	}

function CompleteShipment()
{
 
	var value=$("input:radio[name=event]:checked").val();
	//alert(value);
	var partner = $("#partner_"+value).text();
	var deviceId = $("#connected_device").val();

//	var Role = $.session.get('Role');
/*	var UserIds = $.session.get('UserId');

	var UserId = UserIds;
	var useridsplit = UserId.split('-');
	useridsplit[0].toString();
	useridsplit[0] + "";
	useridsplit[1].toString();
	useridsplit[1] + "";*/

//	var partner = useridsplit[1];					// Saving actual Partner ID who has logged-in.

//	var UserName = $.session.get('UserName');		// Saving actual Partner Name who has logged-in.

	var event = $("#event_type_val").val();
	var datee = $("#event_date_"+value).val();
	var shipment_number = $("#shipment_id").val();
	var shipmentNum = $("#shipment_number").val();
	var Event_Id = $("#event_id_val").val();
	var Event_Type = $("#event_type_val").val();
	var Partner_From = $("#event_partner_from").val();
	var connected_device = $("#connected_device").val();
	var Event_Reference = $("#event_reference").val();
	var routes = $("#routes").val();
	var Type_of_Reference = $("#typeOfReferences1").val();
	var Event_Description = $("#event_description").val();
	var device_return_location = $("#return_location").val();
	var evidence = $("#Evidence-"+value).text();
	var graphImg = $("#chartImage").attr("src");
	/*var grpaimg = graImg.split(',');
	var graphImg = grpaimg[1];*/
//	alert(evidence);
	var error = document.getElementById("error");
	var imgs = $("#EvidenceUploadFile").val();
	 if(imgs > 0 || imgs != ''){
		 
		// //alert(imgs);
	 var fileslist = [];
	 $(".imageNewpreview").each(function(){
 	   var file = $(this).attr('src');
	   fileslist.push(file);
	});
	 var randomfilenames = []
	 $.each(fileslist,function(key,value){
	//	//alert(value); 
		var fileidname = makeid(6);
		randomfilenames.push(fileidname+".png");
		 var imageData = value.replace('image/jpeg', 'image/octet-stream');
		$.ajax({
	        url:localStorage.getItem("smaasip")+'/SCMXPert/saveupdateImage',
	        data:{imageBase64: imageData,filename:fileidname,shipment_id:shipment_number,event_id:Event_Id},
	        type: 'post',
	        dataType: 'json',
			headers: {
	        	    'Authorization': localStorage.getItem('SavedToken')
	        	  },
	        timeout: 10000,
	        async: false,
	        error: function(){
	        	////alert(fileidname);//alert(imageData);
	            //console.log("WOOPS");
	        },
	        success: function(res){
	        	//alert(res);
	           /* if(res.ret==0){
	                //console.log("SUCCESS");
	                $("#previewImage").prepend('<img src="./Shipment_Data/Graph/'+filename+'.png"/>');
	            }else{
	                //console.log("FAIL : " + res.msg);
	            }*/
	        }
	    });
	 });}

	 if(Event_Id == ""){
			var text = "Select Event";
			error.innerHTML = text;
			$("#event_id_val").focus().css("border","1px solid red");
			return false;
	 	}else{
	 		$("#event_id_val").focus().css("border","1px solid #ced4da");
	 	}
	 if(Event_Type == ""){
			var text = "Select Event";
			error.innerHTML = text;
			$("#event_type_val").focus().css("border","1px solid red");
			return false;
	 	}else{
	 		$("#event_id_val").focus().css("border","1px solid #ced4da");
	 	}
	 if(Partner_From == ""){
			var text = "Select Any Partner";
			error.innerHTML = text;
			$("#event_partner_from").focus().css("border","1px solid red");
			return false;
	 	}else{
	 		$("#event_id_val").focus().css("border","1px solid #ced4da");
	 	}
	/* if(Event_Reference == ""){
			var text = "Enter Receiving Refernece Number";
			error.innerHTML = text;
			$("#event_reference").focus().css("border","1px solid red");
			return false;
	 	}else{
	 		$("#event_reference").focus().css("border","1px solid #ced4da");
	 	}*/
	 	//alert(graphImg);
	 var update_json_data = {
				"shipment_Number" : shipment_number,
				"shipmentNum" : shipmentNum,
				"partner" : partner,
				"event" : event,
				"dateandTime"    : datee,
				"eventId"  : Event_Id,
				"eventType" : Event_Type,
				"partnerFrom" : Partner_From,
				"conenctedDevice" : deviceId,
//				"partnerFrom" : UserName,	
				"partnerTo" : Partner_From,
				"receivingReferenceNumber"  : Event_Reference,
				"typeOfReference" : Type_of_Reference,
				"comments" : [Event_Description],
				"deviceReturnLocation" : device_return_location,
				"evidence":evidence,
				"graphImage":graphImg,
				"evidenceList":randomfilenames,
				"conenctedDevice":connected_device
	}; 
	 //console.log(JSON.stringify(update_json_data));
	/* if(routes == ""){
			var text = "Select Any Route";
			error.innerHTML = text;
			$("#routes").focus().css("border","1px solid red");
			return false;
	 	}else{
		 		$("#event_id_val").focus().css("border","1px solid #ced4da");
		 	}
	 if(Event_Reference == ""){
			var text = "Enter Reference Id";
			error.innerHTML = text;
			$("#event_reference").focus().css("border","1px solid red");
			return false;
	 	}else{
	 		$("#event_id_val").focus().css("border","1px solid #ced4da");
	 	}
	 if(Type_of_Reference == ""){
			var text = "Select Reference Type";
			error.innerHTML = text;
			$("#typeOfReferences1").focus().css("border","1px solid red");
			return false;
	 	}else{
	 		$("#event_id_val").focus().css("border","1px solid #ced4da");
	 	}
	 if(device_return_location == ""){
			var text = "Select Reference Type";
			error.innerHTML = text;
			$("#return_location").focus().css("border","1px solid red");
			return false;
	 	}else{
	 		$("#event_id_val").focus().css("border","1px solid #ced4da");
	 	}*/
///	 console.log(JSON.stringify(update_json_data));
///	 return false;
	 var url = localStorage.getItem("smaasip")+"/SCMXPert/completeNewShipment";
	//console.log(update_json_data);//return false;
	 $.ajax({
		 type:"post",
		 url:url,
		 headers: {
			                                        'Content-Type' : "application/json",
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  }, 
		beforeSend: function() {
			             // $("#loading-image").show();
			             var loading = '<img src="./images/loading.gif" id="loadingimg"/>';
			             $(".body_blur").show().html(loading).css({"background":"#000000c2"});
			             $("#loadingimg").show();
			           },
		 data: JSON.stringify(update_json_data),
		 success:function(response){
///			console.log(response);
///			return false;
		if(response.Status != false){
			 var correct = '<img src="./images/correct.gif" id="tickimg" style="width:65px;"/>';
 	    	//$(".showviewdata").show().html('<div class="alert alert-success" role="alert">Shipment Successful Completed Move To Dashboard <a href="./Dashboard.jsp">Dashboard</a></div>');
 	    	$(".body_blur").html('<div class="alert alert-success" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;"><div class="close" onclick="javascript:return evenclose();">X</div>'+correct+'Shipment Successfuliy Completed Move To Dashboard <a href="./Dashboard.jsp">Dashboard</a>.</div>').css({"background":"#000000c2"});
setTimeout(function (){
$.cookie("Completeinternalshipment",shipment_number);
//return false;
 	    	window.location.href = "Dashboard.jsp#CompleteShipmentSuccess";
	}, 4000); 
}
		if(response.Status == false){						
				var error = '<img src="./images/cross.gif" id="tickimg" style="width:65px;"/>';
				$(".body_blur").show().html('<div class="alert alert-danger" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;"><div class="float-right" onclick="javascript:return closefunction();">X</div>' + error + 'Mismatch in Data Points so <strong>created</strong> Raise Exception event <a href="./Dashboard.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;"></a>.</div>').css({ "background": "#000000c2" });
				
					setTimeout(function() {
					//location.reload();
					window.location.href = "Dashboard.jsp#CompleteShipmentFailed";
				}, 9000);
														
			 }	

		 }
	 });
}

function geteventvalueslist(event)
{
	var part_from = $("#partner_from_"+event).text();
	var event_name = $("#event_name_"+event).text();
	var event_date = $("#event_date_"+event).text();
	$("#event_id_val").val(event);
	$("#event_type_val").val(event_name);
	$("#event_partner_from").val(part_from);
	
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
function dialogboxAddEvent()
{
	$("body").css("overflow","hidden");
	$(".body_blur,.AddEventBlock").show();       	
}
function moveDown()
{
	var value=$("input:radio[name=event]:checked").val();
	geteventvalueslist(value);
}
function reset()
{
	$("#event_id_val").val("");
	$("#event_type_val").val("");
	$("#event_partner_from").val("");
	$("#event_reference").val("");
	$("#typeOfReferences1").val("Select Type Reference");
	$("#event_description").val("");
	$("#return_location").val("Select Location");
	$("#routes").val("Select Location");
}
function CancelReceipt()
{
	window.location.href = "Dashboard.jsp";
}
function addEvent()
{
	var selectbp = $("#selectvalues").val();
	var selectevents = $("#eventslist").val();
	var eventid = $("#eventId").val();
	var events_is = $('#inboxesvalues tr:last').find('td:eq(1) div').attr("id");
		var events_length = $('#inboxesvalues>tbody .Event_class').length;
		var radiovalue=$("input:radio[name=event]:checked").val();
		$("#"+radiovalue).prop("checked", false);
/*       		var length_events = events_length+1
		var eventNewId = "E000"+length_events; */
		
         		
		
		//var evetntable = '<tr id="row_val_'+value+'"><td class="p-1"><input type="radio" name="event" style="width:14px;" value="'+value+'"/></td><td class="" style="font-size: 10px;padding:1px;"><input type="text" class="mb-1 form-control" value="'+value+'" style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 50px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;"  /> </td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="partner_name_'+value+'" value="'+partner+'" style="text-align:center;height:25px;font-size: 12px;font-weight:bold;"/></td><td class="pl-1"><input type="text" class="form-control mb-1  inputboxesevents" id="event_name_'+value+'" value="'+event+'" style="height:25px;font-size: 12px;font-weight:bold;"/></td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="event_date__copy'+value+'" value="" placeholder="Select Date" style="height:25px;font-size: 12px;font-weight:bold;"/></td></tr>';
		var eventsboxes = '<tr id="row_val_'+eventid+'" class="Event_class"><td class="p-1"><input type="radio" name="event" style="width:14px;" value="'+eventid+'" id="'+eventid+'"/></td><td class="" style="font-size: 10px;padding:1px;"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 40px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;">'+eventid+'</div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 70px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="partner_from_'+eventid+'">'+selectbp+'</div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 160px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="event_name_'+eventid+'" >'+selectevents+'</div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 100px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="date_'+eventid+'" ></div></td><td class="pl-1"><div class="eventStatus" id="event_status_'+eventid+'"></div></td></tr>';
 	 $("#inboxesvalues>tbody").append(eventsboxes);
 	 //$("#date_"+eventNewId).datepicker();
 	$("#"+eventid).prop("checked", true);
 	var div = document.getElementById(eventid);
 	setTimeout(function() {
 	    div.focus();
 	}, 0);
 	$("body").css("overflow","auto");
	$(".body_blur,.AddEventBlock").hide();
	$("#selectvalues,#eventslist,#eventId").val('');
	
}

function evenclose()
{
	window.location.href = "Dashboard.jsp";
}
function showEvidencePreview(shipment_id,event_id,list)
{
	 $("#showpopupImages,.body_blur").show();
	 $("body").css({"overflow":"hidden"});
	 $("#previewCompletedEvidence").addClass("previewListevents");
	 $("#previewCompletedEvidence >img").css({"width":"120px"});
	 $("#previewCompletedEvidence").show();
	 
	 var imageslist = list.split(",");
	// //alert(imageslist);
	 ////console.log(imageslist);
	 var imaviewcompleted = [];
	 var imgLinks = [];
	 $.each(imageslist,function(key,value){
		 var imageview = '<div class="abcd"><img src="./Shipment_Data/'+shipment_id+'/'+escapeHtml(event_id)+'/'+value+'" style="top:2px;width:96%;left:3px;"/></div>';
		 ////alert(imageview);
		 imaviewcompleted.push(imageview);
		 imgLinks.push("./Shipment_Data/"+shipment_id+"/"+escapeHtml(event_id)+"/"+value);
		 //imageview.appendTo("#previewCompletedEvidence");
		 //$("#previewCompletedEvidence").append(imageview);
	 });
	 //console.log(imgLinks);
	 $("#downloadImages").on("click",function(){
		 var nombre = shipment_id+'-'+event_id;
		 compressed_img(imgLinks,nombre);
	 });
	 
	 //attr("onclick","javascript:return downloadAll("+imgLinks+");");
	 $("#belowShowCompletedPreviceImages").css({"width":"90%","height":"80%","margin":"5%","overflow-y":"auto","border":"1px solid #000","border-radius":"5px"});;
	 $("#previewCompletedEvidence > #belowShowCompletedPreviceImages").html(imaviewcompleted);
}

function closePreview()
{
	 $("body").css({"overflow":"auto"});
	 $("#showpopupImages,.body_blur,#carouselExampleIndicators").hide();
	 $('.carousel-item').removeClass("active");
	 $(".showpopupImages").css({"margin":"0%"});
}
function imageNewpreview(id)
{
	 $(".body_blur").show();
	 $("#previewCompletedEvidence").hide();
	 $("#carouselExampleIndicators").show();
	 $("#showpopupImages").fadeIn().css({"margin":"2% 10%"}).addClass("showpopupImages");
	 $("body").css({"overflow":"hidden"});
	 $("#previewImgshow"+id).addClass("active");
	 $(".carousel-inner").css({"overflow-y":"auto","height":"600px","top":"5%"});
}
function deletePreview(ele, i) {
	 $("#previewImgshow"+i).remove();
    "use strict";
    try {
      $(ele).parent().remove();
      window.filesToUpload.splice(i, 1);
      var clas = $(".abcd");
      var fileslist =[]
      $(".imageNewpreview").each(function(){
   	   var file = $(this).attr('title');
   	  //var filelist = $(file).attr('title');
   	   fileslist.push(file);
   	   
   	});
      var classlist = $(".abcd");
	     // //alert(classlist.length);
	      $("#uplodimageslist").html(classlist.length +" files Uploaded");
      ////alert(fileslist);
      $("input[name='evidence[]']").val("helo.png");
     // $('#EvidenceUploadFile').trigger('change');
      $("#EvidenceUploadFile").val("helo.png");
   /*   $("#EvidenceUploadFile").on("change",function(){
   	   //alert("hello");
   	  
   	   ////alert(fileslist);
   	   $.each(fileslist,function(key,value){
   		   //alert(value);
   		   //$("#EvidenceUploadFile").append(value);
   	   });
      });*/
     
     // //alert($(".imageNewpreview").attr("id"));
    } catch (e) {
      //console.log(e.message);
    }
  }
  
  
  function saveGraph() {
  //alert("hello");
  	var dataPoints_temp = [];
 	var dataPoints_humi = [];
 	var device_Idpoints = [];
 	var shipment_Idpoints = [];
 	var shipment_Id= $("#shipment_id").val();
 	var temp = $.cookie("setTemp_"+shipment_Id);
 	
 	
 	//   https://www.smaas.live:8080/SCMXPert/getDeviceDataTemp/T00000005"
	///	$.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/getDeviceDataTemp/"+shipment_Id,function(filterspoints){
			/////console.log(temp);//console.log(filterspoints);return false;*/
 //	$.each(filterspoints, function(key, value){
 //	//console.log("each condition");
 //	//console.log(value);
 	//		var theDate = new Date( Date.parse(value.utc));
 	//		//console.log(value.utc);
 		//	//console.log(theDate);
 	//      	var date_create = theDate.toLocaleString();
 	      	/*var sdf = value.utc
 	      	sdf.sort(function(a,b){
 	      	  // Turn your strings into dates, and then subtract them
 	      	  // to get a value that is either negative, positive, or zero.
 	      	  return new Date(b.date) - new Date(a.date);
 	      	});*/
 	      	/*Temparature and address*/
 	      	/*//console.log(new Date(theDate)+","+parseFloat(value.internal_Temperature)+","+value.device_Id);*/
 	//      	dataPoints_temp.push({x: value.utc, y: parseFloat(value.internal_Temperature)});
 	      	//dataPoints_humi.push({x: value.utc, y: parseFloat(value.humidity)});
 	 //     	dataPoints_humi.push({x: value.utc, y: value.address});
 	      	
 		       
 	//	       device_Idpoints.push(value.device_Id);
 	//	      shipment_Idpoints.push(value.shipment_Num);
 		        
 		   
 	
 	// });
 	// });*/
		$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getDeviceDataTemp/"+shipment_Id,
    type : "GET",
    dataType: 'json',
	headers: {
		                                        'Content-Type' : "application/json",
		   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
		   	     	  	    	        	  },

    success:function(filterspoints){
  	$.each(filterspoints, function(key, value){
 	//console.log("each condition");
 	//console.log(value);
 			var theDate = new Date( Date.parse(value.utc));
 			//console.log(value.utc);
 			//console.log(theDate);
 	      	var date_create = theDate.toLocaleString();
	dataPoints_temp.push({x: value.utc, y: parseFloat(value.internal_Temperature)});
 	      	//dataPoints_humi.push({x: value.utc, y: parseFloat(value.humidity)});
 	      	dataPoints_humi.push({x: value.utc, y: value.address});
 	      	
 		       
 		       device_Idpoints.push(value.device_Id);
 		      shipment_Idpoints.push(value.shipment_Num);
});
}
});

 	 
 	 setTimeout(function(){ getgraph(dataPoints_temp,dataPoints_humi,device_Idpoints[0],shipment_Idpoints[0],temp);},6000);
 	 }
 	 
 	 
 	  function getgraph(dataPoints_temp,dataPoints_humi,device_id,shipment_num,temp) {
	 
	 var tempvalue = temp.split("-");
	 
	var lower =parseInt(tempvalue[0])
	
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
					content += "<strong><text>Time-Date</text> : "+convert(e.entries[0].dataPoint.x)+"</strong>";
					content += "<br/>";
					content += "<strong><text style='color:red;'>Device-Id</text> : "+device_id+" </strong>";
					content += "<br/>";
					content += "<strong><text style='color:#945564;'>Shipment-Number</text> : "+shipment_num+"</strong> ";
					content += "<br/>";
					content += "<strong><text style='color:#ff0000;'>Threshold</text> : "+temp+"</strong> ";
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
	    /*document.getElementById("exportChart").addEventListener("click",function(){
    	chart.exportChart({format: "jpg"});
    });*/
    
document.getElementById('chartContainer').style.display = 'none';

setTimeout(function(){
var base64Image = chart.canvas.toDataURL();
document.getElementById('chartImage').src = base64Image;
document.getElementById('chartImage').style.display = 'none';
/*alert(base64Image);
//console.log(base64Image)*/
},6000)

	    
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
 function getTimeZone() {
	    return /\((.*)\)/.exec(new Date().toString())[1];
	}
function getExtension(filename) {
    return filename.split('.').pop().toLowerCase();
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