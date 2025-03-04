 $(function() {
	 $('input[type=radio]:first').attr('checked', true);
	 var UserId = $.session.get('UserId');
	 var Role = $.session.get('Role');
	 $("#comments").css({"height":"70px"});
	 $(".body_blur").on("click",function(){
		 $(this).hide();
		 $("#carouselExampleIndicators").hide();
		 
	 });
	// $('.carousel').carousel()
	
	if(sessionStorage.getItem("hashShipmentNumber")!=null)
     {
        document.getElementById('updateEvent').disabled = true;
         
     }
		var RolePermission = $.session.get('RolePermission');
		var UserName = $.session.get('UserName');
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
			
			//$(".showRolesList").prepend('<div class="userrole"><span class="sessionUsernameDisplay">Customer</span><span style="float:left;width:3%;text-align:center;">:</span><span class="">MABE</span></div>').css("margin-top","6%");
			//$("#SPAD_Name > #user_SPAD_Name").text(UserName).show().addClass("");
		//	$(".sessionUsername").css({"width":"50%","float":"left","font-weight":"bold"});
		//	$(".userrole").css({"width":"50%","float":"left","font-weight":"bold"});
			//$(".sessionUsernameDisplay").css("width","50%");
			//$("#SPAD_Name,#BP_Name").remove();
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
				//$(".showRolesList").prepend('<div class="userrole"><span class="sessionUsernameDisplay">Customer</span><span style="float:left;width:3%;text-align:center;">:</span><span class="">MABE</span></div>').css("margin-top","6%");
				//$("#SPAD_Name > #user_SPAD_Name").text(UserName).show().addClass("");
			//	$(".sessionUsername").css({"width":"50%","float":"left","font-weight":"bold"});
			//	$(".userrole").css({"width":"50%","float":"left","font-weight":"bold"});
				//$(".sessionUsernameDisplay").css("width","50%");
				//$("#SPAD_Name,#BP_Name").remove();
				var url = localStorage.getItem("smaasip")+"/SCMXPert/getShipmentsList/"+UserId;
				//	$("#customer").hide();
				}
 	if(UserId == undefined)
		{
			
			shipmentIdCollect();

            function shipmentIdCollect()
            {
                var hashValue = window.location.hash;
                if (hashValue.startsWith("#")) 
                {
                    hashValue = hashValue.substring(1);
                    sessionStorage.setItem("hashShipmentNumber",hashValue);
                }
                
            }
 			window.location.href = "index.jsp";
 			
		}
 	
 	$('#convert-table').click( function() {
		  var table = $('#inboxesvalues').tableToJSON(); // Convert the table into a javascript object
		  //console.log(table);
		  ////alert(JSON.stringify(table));
		});
	$("#typeOfReferences").on("change",function(){
		var textval = $(this).val();
		if(textval != '')
			{
				$("#error").empty();
				$(this).focus().css("border","1px solid #ced4da");
			}
	});
	/*$('#EvidenceUploadFile').on('change', function() {
        imagesPreview(this, 'div.gallery');
    });*/
/*	var imagesPreview = function(input, placeToInsertImagePreview) {

        if (input.files) {
            var filesAmount = input.files.length;

            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = function(event) {
                alert(event.target.result);
                    $($.parseHTML('<img>')).attr('src', event.target.result).appendTo(placeToInsertImagePreview).css({"width":"120px","height":"auto","float":"left"});
                }

                reader.readAsDataURL(input.files[i]);
            }
        }

    };*/
	$("#inboxesvalues>thead").hide();
	$("#inboxesvaluesshowhead>thead").show();
	$("#inboxesvaluesshowhead>tbody").hide();
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
		          
		          newElement.appendTo("#gallery-"+vb);
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
		    	  	$("#gallery-"+vb).css({"overflow-x":"hidden","overflow-y":"hidden"});
		    	  	
		    	  }
		     var sdf =  $("#gallery-"+vb+"> .abcd").length;
		    // alert(sdf);
		      $.cookie("filesUpdateShipemtFiles-"+vb,classlist);		      
		      $.cookie("filesUpdateShipemtCount-"+vb,sdf);
		      $("#uplodimageslist").html(sdf+" files Uploaded");
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

	$(".eventNum").css("width","90px");
	$("#event_id_val").on("keypress",function(){
		$("#error").empty();
		$(this).focus().css("border","1px solid #ced4da");
	});
	$("#event_type_val").on("keypress",function(){
		$("#error").empty();
		$(this).focus().css("border","1px solid #ced4da");
	});
	$("#event_partner_from").on("keypress",function(){
		$("#error").empty();
		$(this).focus().css("border","1px solid #ced4da");
	});
	$("#event_reference").on("keypress",function(){
		$("#error").empty();
		$(this).focus().css("border","1px solid #ced4da");
	});
	$("#typeOfReferences1").on("change",function(){
		var textval = $(this).val();
		if(textval != '')
			{
				$("#error").empty();
				$(this).focus().css("border","1px solid #ced4da");
			}
	});

	 $("#bpi_idchange,#scmid").on("change",function(){
		$.removeCookie("cust_name", { path: '/' });
      $.removeCookie("bp_id", { path: '/' });
		 var bpval = $("#bpi_idchange").val();
		 var scmval = $("#scmid").val();
		 changebpid(scmval,bpval);
	 });
	 
	 /****** Event Update Function **********/
	$("#updateEvent").on("click",function(){
//	alert("hello aker");
		var value=$("input:radio[name=event]:checked").val();
		////alert(value);
///		var partner = $("#partner_"+value).text();
	  //var partner = $("#partner_name_"+value).val();
		
		var Role = $.session.get('Role');
		var UserIds = $.session.get('UserId');

		var UserId = UserIds;
		var useridsplit = UserId.split('-');
		useridsplit[0].toString();
		useridsplit[0] + "";
		useridsplit[1].toString();
		useridsplit[1] + "";	
				
		var partner = useridsplit[1];
		
		var UserName = $.session.get('UserName');
//		console.log("username");
//		console.log(UserName);		
  	    var event = $("#event_name_"+value).val();
  	    var datee = $("#event_date_"+value).val();
  	    var event_status = $("#event_status_"+value).text();
 // //alert(event_status);
  	    var evidence = $("#Evidence-"+value).text();
  	    var shipment_number = $("#shipment_id").val();
		var Event_Id = $("#event_id_val").val();
		var Event_Type = $("#event_type_val").val();
		
		var devices = $("#devices").val();
		
		if (devices == "other") {
			var otherDeviceId = document.getElementById('fixture-use-txt');
			devices = otherDeviceId.value;
			///alert("device id");
			///alert(deviceId);  	
		}
	
		var Partner_From = $("#event_partner_from").val();
		var Event_Reference = $("#event_reference").val();
		var Type_of_Reference1 = $("#typeOfReferences1").val();
		var Type_of_Reference = $("#typeOfReferences").val();
		var Event_Description = $("#event_description").val();
		var Evidence_Description = $("#evidence_description").val();
		var error = document.getElementById("error");
		var Evidence_For = $("#evidencefor").val();
		
		
		 var url = localStorage.getItem("smaasip")+"/SCMXPert/updateEventShip";
		 if(Type_of_Reference == ""){
				var text = "Select Reference";
				error.innerHTML = text;
				$("#typeOfReferences").focus().css("border","1px solid red");
				return false;
		 }
		 if(Event_Id == ""){
				var text = "Enter Event Id";
				error.innerHTML = text;
				$("#event_id_val").focus().css("border","1px solid red");
				return false;
	 	}
		 if(Event_Type == ""){
				var text = "Enter Event";
				error.innerHTML = text;
				$("#event_type_val").focus().css("border","1px solid red");
				return false;
		}
		 if(Partner_From == ""){
				var text = "Event Partner From";
				error.innerHTML = text;
				$("#event_partner_from").focus().css("border","1px solid red");
				return false;
	 	}        		 
		/* if(Event_Reference == ""){
				var text = "Event Reference Id";
				error.innerHTML = text;
				$("#event_reference").focus().css("border","1px solid red");
				return false;
	 	}*/
		/* if(Type_of_Reference1 == ""){
				var text = "Select Reference";
				error.innerHTML = text;
				$("#typeOfReferences1").focus().css("border","1px solid red");
				return false;
		 }*/
//		if(devices == ""){
//				var text = "Select Device";
//				error.innerHTML = text;
//				$("#devices").focus().css("border","1px solid red");
//				return false;
//		 	}
		// //console.log(JSON.stringify(update_json_data));return false;
		// //alert(JSON.stringify(update_json_data));return false;
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
		//	randomfilenames.push(fileidname+".png");
			 var imageData = value.replace('image/jpeg', 'image/octet-stream');
			 //alert(imageData);
			 //console.log({"imageBase64": imageData,"filename":fileidname,"shipment_id":shipment_number,"event_id":Event_Id});
			 var docformate = imageData.split(';');
			 var formatedoc = docformate[0].split('/');
			 
			 if(formatedoc[1] == "pdf"){
			 randomfilenames.push(fileidname+".pdf");
			 $.ajax({			 
    	        url: localStorage.getItem("smaasip")+'/SCMXPert/saveupdatePdf',
    	        data:{"imageBase64": imageData,"filename":fileidname,"shipment_id":shipment_number,"event_id":Event_Id},
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
    	        	//console.log(res);
    	           /* if(res.ret==0){
    	                //console.log("SUCCESS");
    	                $("#previewImage").prepend('<img src="./Shipment_Data/Graph/'+filename+'.pdf"/>');
    	            }else{
    	                //console.log("FAIL : " + res.msg);
    	            }*/
    	        }
    	    });
			 }else{
			 randomfilenames.push(fileidname+".png");
			 $.ajax({
    	        url: localStorage.getItem("smaasip")+'/SCMXPert/saveupdateImage',
    	        data:{"imageBase64": imageData,"filename":fileidname,"shipment_id":shipment_number,"event_id":Event_Id},
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
    	        	//console.log(res);
    	           /* if(res.ret==0){
    	                //console.log("SUCCESS");
    	                $("#previewImage").prepend('<img src="./Shipment_Data/Graph/'+filename+'.png"/>');
    	            }else{
    	                //console.log("FAIL : " + res.msg);
    	            }*/
    	        }
    	    });
			 }
			
		 });
		 }
		/// alert("hello");
		/// return false;
		 var update_json_data = {
					"shipment_Number" : shipment_number,
					"partner" : partner,
					"event" : event,
					"dateandTime" : datee,
					"eventId"  : Event_Id,
					"eventType" :Event_Type,
//					"partnerFrom" : Partner_From,			//Here Partner_From is the partner name attched along with Default Business Partner based on Route selected
					"partnerFrom" : UserName,				// UserName is the BPartner name who has loggeg in
					"eventReferenceNumber"  : Event_Reference,
		//			"typeOfReference" :Type_of_Reference1,
					"event_Description" : [Event_Description],   /// Prior to this Event_Description is assigned to the backend key "comments"
		//			"evidence_Description": Evidence_Description,
					"eventStatus":event_status,
					"evidence":evidence,
					"device_Id":devices
		//			"evidencelist":randomfilenames
			}; 
///		    console.log(JSON.stringify(update_json_data));		
///	        return false;
		 
		  $.ajax({
			 type:"post",
			 url:url,
			 headers: {
				                                    'Content-Type' : "application/json",
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken'),

			   	     	  	    	        	  },
			 data: JSON.stringify(update_json_data),
			 beforeSend: function() {
	             // $("#loading-image").show();
	             var loading = '<img src="./images/loading.gif" id="loadingimg"/>';
	             $(".body_blur").show().html(loading).css({"background":"#000000c2"});
	             $("#loadingimg").show();
	           },
			 success:function(response){
				 //console.log(response);
//	 return false; //return false;
//				 window.location.href = "Dashboard.jsp";
				 
				 
				 var correct = '<img src="./images/correct.gif" id="tickimg" style="width:65px;"/>'	;
					
					//var Idb = json_value.userId;
					
					/*$(".showviewdata1")
							.show()   
							.html('<div class="alert alert-success" role="alert" >Business Partner Created <strong> Successfully! </strong> and Your ID is ' + Idb	+ '  <a href="Dashboard.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">Move to Dashboard</a>.</div>');*/
					$(".body_blur").show().html('<div class="alert alert-success" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;text-align:center;">'+correct+'Shipment Event Updated <strong> Successfully!</strong> <a href="Dashboard.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">Moving to Dashboard</a>.</div>').css({"background":"#000000c2"});
				 $("#gallery").empty();
			$("#successalert").show();
      	var ship_id = $.cookie("shp_id");
      	$("#inboxesvalues>tbody").empty();
      	$.cookie("Updateinternalshipment",shipment_number);
		window.location.href = 'Dashboard.jsp#UpdateShipmentSuccess';
      	
      	
  	 	
				
				
			 }
		 }); 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		////alert(JSON.stringify(update_json_data));
	});
	$("#btnSubmit").on("click",function(){
		var value=$("input:radio[name=event]:checked").val();
			geteventvalueslist(value);
			
		});
	
	

	$("#delete_event").on("click",function(){
		window.location.href = "Dashboard.jsp";
	});
	
	
	$(".body_blur,.closeEvidence").on("click",function(){
 		$("#showpopupImages,.body_blur").hide();
 		$("#belowShowCompletedPreviceImages").empty();
 		$("body").css({"overflow":"auto"});
 	});
	
	
	var part_from = $.cookie("BP_ID");
	var SCM_id = $.session.get('UserId');
	var ship_id = $.cookie("shp_id");
	var ship_num = $.cookie("shipment_Num");
	var device_id = $.cookie("device_Id");
	var typeofreference = $.cookie("typeofreference");
	
	var plant = $.cookie("plant");	
	getData(ship_id);
	 	$("#shipment_id").val(ship_id);
	 	$("#shipment_number").val(ship_num);
	 	$("#connected_device").val(device_id);
//	    alert(device_id.length)
//	     alert(device_id)
//	     alert(plant);
	 	if($.trim(device_id).length > 0){
	 	$("#devices").append('<option value="'+device_id+'">'+device_id+'</option>').val(device_id).attr("disabled", true);
	 	}
	 	$("#typeOfReferences").val(typeofreference);
		var Role = $.session.get('Role');

				var UserIds = $.session.get('UserId');

		var UserId = UserIds;
			var useridsplit = UserId.split('-');
			useridsplit[0].toString();
			useridsplit[0] + "";
			useridsplit[1].toString();
			useridsplit[1] + "";
/*	$.getJSON( localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0], function( data ) { 	
	 	$.each(data.typeOfReferences,function(keys,values){
			////alert(values);
			////alert(values.from+','+values.to+','+values.primary_Mode_Of_Transport);
			 var select_typeOfReferences_items = '<option value="'+values+'">'+values+'</option>';
			 $("#typeOfReferences1").append(select_typeOfReferences_items);
			 //typeOfReferences_select.push(select_typeOfReferences_items); 
		});   
	});*/
			$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0],
    type : "GET",
    dataType: 'json',
	headers: {
		                                           
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  },
    success:function( data ){
 	 	$.each(data.typeOfReferences,function(keys,values){
			////alert(values);
			////alert(values.from+','+values.to+','+values.primary_Mode_Of_Transport);
			 var select_typeOfReferences_items = '<option value="'+escapeHtml(values)+'">'+escapeHtml(values)+'</option>';
			 $("#typeOfReferences1").append(select_typeOfReferences_items);
			 //typeOfReferences_select.push(select_typeOfReferences_items); 
		});   
	
	       $.each(data.evidenceFor,function(keys,values){
		//	alert(values);
			////alert(values.from+','+values.to+','+values.primary_Mode_Of_Transport);
			 var select_evidenceFor_items = '<option value="'+escapeHtml(values)+'">'+escapeHtml(values)+'</option>';
			 $("#evidencefor").append(select_evidenceFor_items);
			 //typeOfReferences_select.push(select_typeOfReferences_items); 
		});
	
	
	
		}
		});
	var Role = $.session.get('Role');

    var UserIds = $.session.get('UserId');
	
	var UserId = UserIds;
		var useridsplit = UserId.split('-');
		useridsplit[0].toString();
		useridsplit[0] + "";
		useridsplit[1].toString();
		useridsplit[1] + "";
/*	$.getJSON( localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0], function( data ) { 	
		var optionValuesfrom = [];
		var optionValuesto = [];
	 	$.each(data.business_Partner_Id,function(keys,values){
			////alert(values);
			////alert(values.from+','+values.to+','+values.primary_Mode_Of_Transport);
			 var event_partner_from = '<option value="'+values+'">'+values+'</option>';
			 $("#event_partner_from,#selectvalues").append(event_partner_from);
			 //typeOfReferences_select.push(select_typeOfReferences_items); 
		});   
	 	 $('#selectvalues option').each(function(){
			    if($.inArray(this.value, optionValuesfrom) >-1){
			       $(this).remove()
			    }else{
			       optionValuesfrom.push(this.value);
			    }
			 });
	 	 
		 $('#event_partner_from option').each(function(){
			    if($.inArray(this.value, optionValuesto) >-1){
			       $(this).remove()
			    }else{
			       optionValuesto.push(this.value);
			    }
			 });
	});*/
			$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0],
    type : "GET",
    dataType: 'json',
	headers: {
		                                            
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  },
    success:function( data ){
		var optionValuesfrom = [];
		var optionValuesto = [];
	 	$.each(data.business_Partner_Id,function(keys,values){
			////alert(values);
			////alert(values.from+','+values.to+','+values.primary_Mode_Of_Transport);
			 var event_partner_from = '<option value="'+escapeHtml(values)+'">'+escapeHtml(values)+'</option>';
			 $("#event_partner_from,#selectvalues").append(event_partner_from);
			 //typeOfReferences_select.push(select_typeOfReferences_items); 
		});   
	 	 $('#selectvalues option').each(function(){
			    if($.inArray(this.value, optionValuesfrom) >-1){
			       $(this).remove()
			    }else{
			       optionValuesfrom.push(this.value);
			    }
			 });
	 	 
		 $('#event_partner_from option').each(function(){
			    if($.inArray(this.value, optionValuesto) >-1){
			       $(this).remove()
			    }else{
			       optionValuesto.push(this.value);
			    }
			 });
	
		}
		});
		
		
var Role = $.session.get('Role');

			var UserIds = $.session.get('UserId');
	
	var UserId = UserIds;
		var useridsplit = UserId.split('-');
		useridsplit[0].toString();
		useridsplit[0] + "";
		useridsplit[1].toString();
		useridsplit[1] + "";		
		
		
// The following ajax code was previously used for rendering device ids to the dropdown in UpdateShipmentEvent page,
//	and now for the same functionality it is updated to availableDeviceIdsForPlant API.
/*     $.ajax({
    	    url: localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0],
    	    type : "GET",
    	    dataType: 'json',
    	    headers: {
    	    	'Content-Type' : "application/json",
  	        	    'Authorization': localStorage.getItem('SavedToken'),
  	        	  }, 
    	    success:function(data){
    	    
	$.each(data.device_Id,function(keys,values){
        					//////
        					 var select_device_Id_items = '<option value="'+escapeHtml(values).split(" ")[0]+'">'+escapeHtml(values)+'</option>';
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

}
 });*/


/*   
// The following code is used to get all the disabled inputs in this page.

   const disabledInputs = document.querySelectorAll('input:disabled, select:disabled, textarea:disabled'); 
   const values = Array.from(disabledInputs).map(input => ({
    name: input.name || input.id || 'Unnamed field', 
    value: input.value
    }));
   console.log(values);*/
    
     var connectedDevice = $.cookie("device_Id");
if (!connectedDevice) {
    
	 var autoSelectedPlant = $.cookie("plant");
	 // Clear existing options in the iotIds dropdown
	 const deviceIdsDropdown = $("#devices");

	 if (!autoSelectedPlant) {
		 deviceIdsDropdown.empty();
	//	 deviceIdsDropdown.append(new Option("--Select plant first--", ""));
		 return; // Exit early
	 }
	 // Display a loading spinner or text
	 const loadingElement = $('<div id="loading-spinner">Loading Device IDs...</div>');
	 $("#devices").before(loadingElement); // Add loading indicator above the devices dropdown

	 deviceIdsDropdown.prop("disabled", true);

	 // Automatically remove the loading element after 5 seconds
	 const timeout = setTimeout(() => {
		 $("#loading-spinner").remove();
		 deviceIdsDropdown.prop("disabled", false); // Re-enable the dropdown
	 }, 4000);

	 $.ajax({
		 url: localStorage.getItem("smaasip") + "/SCMXPert/availableDeviceIdsForPlant/"+autoSelectedPlant,
		 type: "GET",
		 //data: { plant: autoSelectedPlant },
		 dataType: "json",
		 headers: {
             'Content-Type' : "application/json",   
			 'Authorization': localStorage.getItem('SavedToken')
		 },
		 success: function(response) {

			 clearTimeout(timeout);
			 $("#loading-spinner").remove();

			 // Re-enable the dropdown
			 deviceIdsDropdown.prop("disabled", false);

			 deviceIdsDropdown.append(new Option("--Select Device--", ""));

			 // Populate with new iotIds
			 if (response.length > 0) {
				 $.each(response, function(keys, values) {
					 //////
					 var select_device_Id_items = '<option value="' + escapeHtml(values).split(" ")[0] + '">' + escapeHtml(values) + '</option>';
					 $("#devices").append(select_device_Id_items);
					 //////////
				 });
			 }
			 else {
				 deviceIdsDropdown.append(new Option("No Device IDs available", ""));
			 }
			 var selectOther = '<option value="other">Other</option>';
			 $("#devices").append(selectOther);

		 },
		 error: function(error) {
			 var cross = '<img src="./images/cross.gif" id="tickimg" style="width:65px;"/>';
			 $(".body_blur").show().html('<div class="alert alert-danger" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;"><div class="float-right" onclick="javascript:return closefunction();">X</div>' + cross + 'Failed to fetch <strong>Device IDs.</strong> Please try again. <a href="./UpdateShipmentEvent.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;"></a>.</div>').css({ "background": "#000000c2" });
			 setTimeout(function() {
				 location.reload();
			 }, 9000);
		 }
	 });
}

	 $("#devices").on("change", function() {
		 var textval = $(this).val();
		 if (textval != '') {
			 $("#error").empty();
			 $(this).focus().css("border", "1px solid #ced4da");
		 }
	 });
				
		
/*	$.getJSON( localStorage.getItem("smaasip")+"/SCMXPert/getAllTxns/"+ship_id, function( data ) { 
	//	//alert(data);
	 	$.each(data,function(keys,values){
			////alert(values.event_Name);
			////alert(values.from+','+values.to+','+values.primary_Mode_Of_Transport);
			 var event_partner_from = '<option value="'+values.event_Name+'">'+values.event_Name+'</option>';
			 $("#events_list_show").append(event_partner_from);
			 //typeOfReferences_select.push(select_typeOfReferences_items); 
		});   
	});*/
			$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getAllTxns/"+ship_id,
    type : "GET",
    dataType: 'json',
	headers: {
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  },
    success:function( data ){
	//	//alert(data);
	 	$.each(data,function(keys,values){
			////alert(values.event_Name);
			////alert(values.from+','+values.to+','+values.primary_Mode_Of_Transport);
			 var event_partner_from = '<option value="'+escapeHtml(values.event_Name)+'">'+escapeHtml(values.event_Name)+'</option>';
			 $("#events_list_show").append(event_partner_from);
			 //typeOfReferences_select.push(select_typeOfReferences_items); 
		});   
	
		}
		});
	 	
	 	
	 	
	 	//$("#bp_id_number").val(part_from);
/*	 	$.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/getAllTxns/"+ship_id,function(filters){
	 		//alert(ship_id);
	 		////alert(filters);
	 		var event_sNO = []; 
	 		//console.log(filters);
			$.each(filters,function(key,value){
				event_sNO.push(value.event_SNo);
				//partner_From.push(value.partner_From);
				//var part_no = value.partner_From;
				
				/* $.each(value,function(keyssssss,values){
					//alert(keyssssss);
				}); */
//			});
			
			
//			event_sNO.sort(function(a, b){return a-b});
//			for(i=0;i<event_sNO.length;i++)
//			{
//				var event_num = event_sNO[i];
//				$.each(filters,function(kew,val){
//					//console.log(val);
//		 					if(event_num == val.event_SNo)
//		 						{
		 						////alert(kew);
//		 						var status_length = val.event_Name.length;
			             	/* 	if(status_length > 15)
			             			{
			             				var font_size = "10";
			             			}else{
			             				var font_size = "12";
			             			 }*/
			             		//var val_data = '<div class=""><div><span>Altitude :- </span><span>'+val.altitude+'</span></div><div><span>Battery :- </span><span>'+val.bat+'</span></div><div><span>Distance :- </span><span>'+val.distance+'</span></div><div><span>Latitude :- </span><span>'+val.latitude+'</span></div><div><span>Longitude :- </span><span>'+val.longitude+'</span></div><div><span>Report Type :- </span><span>'+val.report_type+'</span></div><div><span>Sensor Id :- </span><span>'+val.sensor_id+'</span></div><div><span>Speed :- </span><span>'+val.speed+'</span></div><div><span>UTC TIME :- </span><span>'+val.utc+'</span></div><div><span>Internal Temperature :- </span><span>'+val.internal_temperature+'</span></div><div><span>Mode of Transport :- </span><span>'+val.mode_of_Transport+'</span></div><div><span>Message Number :- </span><span>'+val.message_Number+'</span></div><div><span>Temp Measurment :- </span><span>'+val.temp_Measurment+'</span></div><div><span>Shipment Id :- </span><span>'+val.shipment_Id+'</span></div><div><span>Shipment Num :- </span><span>'+val.shipment_Num+'</span></div><div><span>Device Id :- </span><span>'+val.device_Id+'</span></div><div><span>Event Name :- </span><span>'+val.event_Name+'</span></div><div><span>Event S.No :- </span><span>'+val.event_SNo+'</span></div></div>';
			             		//var val_data = val.altitude;
//			             		var key = kew+1;
//			             		if(val.event_Exec_Date){
//			             			var date_create = dateFormat(val.event_Exec_Date, "dd-mmm-yyyy");
//			             		}else{
//			             			var date_create = '';
//			             		}
			             		
			             		//var theDate = new Date( Date.parse(val.event_Exec_Date));
			               	//	var date_create = theDate.toLocaleDateString();
			             		/* if(val.event_Status == "Completed"){
			         
			             			var eventsboxes = '<tr><td class="p-1"></td><td class="" style="font-size: 10px;padding:1px;"><input type="text" class="mb-1 form-control" value="'+val.event_Id+'" style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 40px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;"   disabled="disabled"/> </td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="partner_name_'+val.event_Id+'" value="'+val.partner_From+'" style="text-align:center;height:25px;font-size: 12px;font-weight:bold;" disabled="disabled" /></td><td class="pl-1"><input type="text"  disabled="disabled" class="form-control mb-1  inputboxesevents" id="event_name_'+val.event_Id+'" value="'+val.event_Name+'" style="height:25px;font-size: 12px;font-weight:bold;" /></td><td class="pl-1"><input type="text" disabled="disabled" class="form-control mb-1 inputboxesevents" id="event_date_'+val.event_Id+'" value="'+date_create+'" placeholder="Select Date" style="height:25px;font-size: 12px;font-weight:bold;" /></td></tr>';
			             		}else{
			             			var eventsboxes = '<tr><td class="p-1"><input type="radio" name="event" style="width:14px;" value="'+val.event_Id+'"/></td><td class="" style="font-size: 10px;padding:1px;"><input type="text" class="mb-1 form-control" value="'+val.event_Id+'" style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 40px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;background: #e9ecef;"   disabled="disabled"/> </td><td class="pl-1"><input type="text"   disabled="disabled" class="form-control mb-1 inputboxesevents" id="partner_name_'+val.event_Id+'" value="'+val.partner_From+'" style="text-align:center;height:25px;font-size: 12px;font-weight:bold;" /></td><td class="pl-1"><input type="text"   disabled="disabled" class="form-control mb-1  inputboxesevents" id="event_name_'+val.event_Id+'" value="'+val.event_Name+'" style="height:25px;font-size: 12px;font-weight:bold;" /></td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents"  disabled="disabled" id="event_date_'+val.event_Id+'" value="'+date_create+'" placeholder="Select Date" style="height:25px;font-size: 12px;font-weight:bold;" /></td></tr>'; completedBackground
			             		} */
			             		//alert(val.event_Id);
//			               	if(val.event_Status == "Completed"){
//			               		if(val.evidenceList == null || val.evidenceList == "")
// 		 			        	 {
// 		 			        	 	var evidence = '<td class="pl-1"><div class="completedBackground eventStatus" id="evidence_list_'+val.event_Id+'" style="background:#965664;color:#fff;"><div>No Evidence</div></div></td>';
// 		 			        	 }else{
 		 			        		
 //		 			        		 var evidence = '<td class="pl-1"><div class="completedBackground eventStatus" id="evidence_list_'+val.event_Id+'" style="background:#965664;color:#fff;cursor:pointer;"><div onclick="javascript:return showEvidencePreview(\''+ship_id+'\',\''+val.event_Id+'\',\''+val.evidenceList+'\')"><img src="./images/eye.png" style="width:16px;height:16px;float:left;"/><span style="float:left;margin-left:2px;">Show Evidence</span></div></div></td>';
// 		 			        	 }
//			               	var eventsboxes = '<tr id="row_val_'+val.event_Id+'" class="completedBackground Event_class" style="height:30px;border-bottom: 4px solid #fff;"><td class="p-1"></td><td class="" style="font-size: 10px;padding:1px;"><div class="completedBackground eventNum" id="'+val.event_Id+'" style="width:75px;">'+val.event_Id+'</div></td><td class="pl-1"><div class="completedBackground eventName" id="event_name_'+val.event_Id+'">'+val.event_Name+'</div></td><td class="pl-1"><div class="eventBp" id="partner_'+val.event_Id+'" style="width:100px;">'+val.partner+'</div></td><td class="pl-1"><div class="completedBackground eventBp" id="partner_from_'+val.event_Id+'">'+val.partner_From+'</div></td><td class="pl-1"><div class="completedBackground eventDate" id="date_'+val.event_Id+'" style="width:100px;">'+date_create+'</div></td><td class="pl-1"><div class="completedBackground eventStatus" id="event_status_'+val.event_Id+'" style="width:100px;">'+val.event_Status+'</div></td>'+evidence+'</tr>';
			             	
//			             		}else{
			             			
//			             			var eventsboxes = '<tr id="row_val_'+val.event_Id+'" class="Event_class" style="height:30px;"><td class="p-1"><input type="radio" onclick="javascript:return geteventvalueslist(this.value);" name="event" style="width:14px;" value="'+val.event_Id+'" id="Radio_'+val.event_Id+'"/></td><td class="" style="font-size: 10px;padding:1px;"><div class="eventNum" id="'+val.event_Id+'" style="width:75px;">'+val.event_Id+'</div></td><td class="pl-1"><div class="eventName" id="event_name_'+val.event_Id+'">'+val.event_Name+'</div></td><td class="pl-1"><div class="eventBp" id="partner_'+val.event_Id+'" style="width:100px;">'+val.partner+'</div></td><td class="pl-1"><div class="eventBp" id="partner_from_'+val.event_Id+'">'+val.partner_From+'</div></td><td class="pl-1"><div class="eventDate" id="date_'+val.event_Id+'" style="width:100px;">'+date_create+'</div></td><td class="pl-1"><div class="eventStatus" id="event_status_'+val.event_Id+'" style="width:100px;">'+val.event_Status+'</div></td><td class="pl-1"><div id="Evidence-'+val.event_Id+'" class="PhotoEvidence" style="display:none;">'+val.evidence+'</div><div style="" id="date_'+val.event_Id+'"><label class="switch"><input class="switch-input" id="switch-input-'+val.event_Id+'" type="checkbox" onchange="javascript:return setPhotoEvidenceUpdate(\''+val.event_Id+'\');"/><span class="switch-label" data-on="Yes" data-off="No"></span><span class="switch-handle"></span></label></div></td></tr>';
//		             		}
			               	
			              
			             		
			             		////alert(eventsboxes);
//				 				$("#inboxesvalues>tbody").append(eventsboxes);
				 				
//				 			 	if(val.event_Status == "Completed"){
//				               		$(".eventNum").css("width","75px");
//				               	}else{
//				               		$(".eventNum").css("width","75px");
//				               	}
//				 				$("#event_date_"+val.event_Id).datepicker();

				 				
		             				//var json_table = 
		                  			             						
//		 						}
//		 				 	if(val.evidence == "yes")
//	        	    		{
//	        	    			$("#switch-input-"+val.event_Id).attr('checked',true);
//	        	    		}else{
//	        	    			$("#switch-input-"+val.event_Id).attr('checked',false);
//	        	    		}
		 					////alert(tabletr);
//		 				});
				
				
//			}
			
//			var radioactive = $('input[type=radio]:first').attr('checked', true).val();
//			geteventvalueslist(radioactive);;
//			var events_is = $('#inboxesvalues tr:last').find('td:eq(1) div').attr("id");
//			//console.log(events_is);
	    	//$("#"+events_is).prop("checked", true);
//			$("#Radio_"+events_is).on("click",function(){
				////alert("he;ll");
//				MovetoCompletedShipment();
//			});
			
			
//	 	});*/
			$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getAllTxns/"+ship_id,
    type : "GET",
    dataType: 'json',
	headers: {
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  },
    success:function(filters){
		//alert(ship_id);
	 		////alert(filters);
	 		//console.log(filters);
	/// 		var event_sNO = []; 
	 		//console.log(filters);
///			$.each(filters,function(key,value){
///				event_sNO.push(value.event_SNo);
				//partner_From.push(value.partner_From);
				//var part_no = value.partner_From;
				
				/* $.each(value,function(keyssssss,values){
					//alert(keyssssss);
				}); */
///			});
		
			
///			event_sNO.sort(function(a, b){return a-b});
///			for(i=0;i<event_sNO.length;i++)
///			{
///				var event_num = event_sNO[i];
				$.each(filters,function(kew,val){
					//console.log(val);
	///	 					if(event_num == val.event_SNo)
	///	 						{
		 						////alert(kew);
		 						var status_length = val.event_Name.length;
			             	/* 	if(status_length > 15)
			             			{
			             				var font_size = "10";
			             			}else{
			             				var font_size = "12";
			             			 }*/
			             		//var val_data = '<div class=""><div><span>Altitude :- </span><span>'+val.altitude+'</span></div><div><span>Battery :- </span><span>'+val.bat+'</span></div><div><span>Distance :- </span><span>'+val.distance+'</span></div><div><span>Latitude :- </span><span>'+val.latitude+'</span></div><div><span>Longitude :- </span><span>'+val.longitude+'</span></div><div><span>Report Type :- </span><span>'+val.report_type+'</span></div><div><span>Sensor Id :- </span><span>'+val.sensor_id+'</span></div><div><span>Speed :- </span><span>'+val.speed+'</span></div><div><span>UTC TIME :- </span><span>'+val.utc+'</span></div><div><span>Internal Temperature :- </span><span>'+val.internal_temperature+'</span></div><div><span>Mode of Transport :- </span><span>'+val.mode_of_Transport+'</span></div><div><span>Message Number :- </span><span>'+val.message_Number+'</span></div><div><span>Temp Measurment :- </span><span>'+val.temp_Measurment+'</span></div><div><span>Shipment Id :- </span><span>'+val.shipment_Id+'</span></div><div><span>Shipment Num :- </span><span>'+val.shipment_Num+'</span></div><div><span>Device Id :- </span><span>'+val.device_Id+'</span></div><div><span>Event Name :- </span><span>'+val.event_Name+'</span></div><div><span>Event S.No :- </span><span>'+val.event_SNo+'</span></div></div>';
			             		//var val_data = val.altitude;
			             		var key = kew+1;
			             		if(val.event_Exec_Date){
			             			var date_create = dateFormat(val.event_Exec_Date, "dd-mmm-yyyy");
			             		}else{
			             			var date_create = '';
			             		}
			             		
			             		//var theDate = new Date( Date.parse(val.event_Exec_Date));
			               	//	var date_create = theDate.toLocaleDateString();
			             		/* if(val.event_Status == "Completed"){
			         
			             			var eventsboxes = '<tr><td class="p-1"></td><td class="" style="font-size: 10px;padding:1px;"><input type="text" class="mb-1 form-control" value="'+val.event_Id+'" style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 40px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;"   disabled="disabled"/> </td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="partner_name_'+val.event_Id+'" value="'+val.partner_From+'" style="text-align:center;height:25px;font-size: 12px;font-weight:bold;" disabled="disabled" /></td><td class="pl-1"><input type="text"  disabled="disabled" class="form-control mb-1  inputboxesevents" id="event_name_'+val.event_Id+'" value="'+val.event_Name+'" style="height:25px;font-size: 12px;font-weight:bold;" /></td><td class="pl-1"><input type="text" disabled="disabled" class="form-control mb-1 inputboxesevents" id="event_date_'+val.event_Id+'" value="'+date_create+'" placeholder="Select Date" style="height:25px;font-size: 12px;font-weight:bold;" /></td></tr>';
			             		}else{
			             			var eventsboxes = '<tr><td class="p-1"><input type="radio" name="event" style="width:14px;" value="'+val.event_Id+'"/></td><td class="" style="font-size: 10px;padding:1px;"><input type="text" class="mb-1 form-control" value="'+val.event_Id+'" style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 40px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;background: #e9ecef;"   disabled="disabled"/> </td><td class="pl-1"><input type="text"   disabled="disabled" class="form-control mb-1 inputboxesevents" id="partner_name_'+val.event_Id+'" value="'+val.partner_From+'" style="text-align:center;height:25px;font-size: 12px;font-weight:bold;" /></td><td class="pl-1"><input type="text"   disabled="disabled" class="form-control mb-1  inputboxesevents" id="event_name_'+val.event_Id+'" value="'+val.event_Name+'" style="height:25px;font-size: 12px;font-weight:bold;" /></td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents"  disabled="disabled" id="event_date_'+val.event_Id+'" value="'+date_create+'" placeholder="Select Date" style="height:25px;font-size: 12px;font-weight:bold;" /></td></tr>'; completedBackground
			             		} */
			             		//alert(val.event_Id);
			               	if(val.event_Status == "Completed"){
			               		if(val.evidenceList == null || val.evidenceList == "")
 		 			        	 {
 		 			        	 	var evidence = '<td class="pl-1"><div class="completedBackground eventStatus" id="evidence_list_'+escapeHtml(val.event_Id)+'" style="background:#965664;color:#fff;"><div>No Evidence</div></div></td>';
 		 			        	 }else{
 		 			        		
 		 			        		 var evidence = '<td class="pl-1"><div class="completedBackground eventStatus" id="evidence_list_'+escapeHtml(val.event_Id)+'" style="background:#965664;color:#fff;cursor:pointer;"><div onclick="javascript:return showEvidencePreview(\''+escapeHtml(ship_id)+'\',\''+escapeHtml(val.event_Id)+'\',\''+escapeHtml(val.evidenceList)+'\')"><img src="./images/eye.png" style="width:16px;height:16px;float:left;"/><span style="float:left;margin-left:2px;">Show Evidence</span></div></div></td>';
 		 			        	 }
			               	var eventsboxes = '<tr id="row_val_'+escapeHtml(val.event_Id)+'" class="completedBackground Event_class" style="height:30px;border-bottom: 4px solid #fff;"><td class="p-1"></td><td class="" style="font-size: 10px;padding:1px;"><div class="completedBackground eventNum" id="'+escapeHtml(val.event_Id)+'" style="width:75px;">'+escapeHtml(val.event_Id)+'</div></td><td class="pl-1"><div class="completedBackground eventName" id="event_name_'+escapeHtml(val.event_Id)+'">'+escapeHtml(val.event_Name)+'</div></td><td class="pl-1"><div class="eventBp" id="partner_'+escapeHtml(val.event_Id)+'" style="width:100px;">'+escapeHtml(val.partner)+'</div></td><td class="pl-1"><div class="completedBackground eventBp" id="partner_from_'+escapeHtml(val.event_Id)+'">'+escapeHtml(val.partner_From)+'</div></td><td class="pl-1"><div class="completedBackground eventDate" id="date_'+escapeHtml(val.event_Id)+'" style="width:100px;">'+escapeHtml(date_create)+'</div></td><td class="pl-1"><div class="completedBackground eventStatus" id="event_status_'+escapeHtml(val.event_Id)+'" style="width:100px;">'+escapeHtml(val.event_Status)+'</div></td>'+escapeHtml(evidence)+'</tr>';
			             	
			             		}else{
			             			
			             			//var eventsboxes = '<tr id="row_val_'+escapeHtml(val.event_Id)+'" class="Event_class" style="height:30px;"><td class="p-1"><input type="radio" onclick="javascript:return geteventvalueslist(this.value);" name="event" style="width:14px;" value="'+escapeHtml(val.event_Id)+'" id="Radio_'+escapeHtml(val.event_Id)+'"/></td><td class="" style="font-size: 10px;padding:1px;"><div class="eventNum" id="'+escapeHtml(val.event_Id)+'" style="width:75px;">'+escapeHtml(val.event_Id)+'</div></td><td class="pl-1"><div class="eventName" id="event_name_'+escapeHtml(val.event_Id)+'">'+escapeHtml(val.event_Name)+'</div></td><td class="pl-1"><div class="eventBp" id="partner_'+escapeHtml(val.event_Id)+'" style="width:100px;">'+escapeHtml(val.partner)+'</div></td><td class="pl-1"><div class="eventBp" id="partner_from_'+escapeHtml(val.event_Id)+'">'+escapeHtml(val.partner_From)+'</div></td><td class="pl-1"><div class="eventDate" id="date_'+escapeHtml(val.event_Id)+'" style="width:100px;">'+escapeHtml(date_create)+'</div></td><td class="pl-1"><div class="eventStatus" id="event_status_'+escapeHtml(val.event_Id)+'" style="width:100px;">'+escapeHtml(val.event_Status)+'</div></td><td class="pl-1"><div id="Evidence-'+escapeHtml(val.event_Id)+'" class="PhotoEvidence" style="display:none;">'+escapeHtml(val.evidence)+'</div><div style="" id="date_'+escapeHtml(val.event_Id)+'"><label class="switch"><input class="switch-input" id="switch-input-'+escapeHtml(val.event_Id)+'" type="checkbox" onchange="javascript:return setPhotoEvidenceUpdate(\''+escapeHtml(val.event_Id)+'\');"/><span class="switch-label" data-on="Yes" data-off="No"></span><span class="switch-handle"></span></label></div></td></tr>';
		             	
		             	if(sessionStorage.getItem("Role") == "SUPERADMIN" || sessionStorage.getItem("Role") == "ADMIN")
{
  var eventsboxes = '<tr id="row_val_' + escapeHtml(val.event_Id) + '" class="Event_class" style="height:30px;"><td class="p-1"><input type="radio" onclick="javascript:return geteventvalueslist(this.value);" name="event" style="width:14px;" value="' + escapeHtml(val.event_Id) + '" id="Radio_' + escapeHtml(val.event_Id) + '"/></td><td class="" style="font-size: 10px;padding:1px;"><div class="eventNum" id="' + escapeHtml(val.event_Id) + '" style="width:75px;">' + escapeHtml(val.event_Id) + '</div></td><td class="pl-1"><div class="eventName" id="event_name_' + escapeHtml(val.event_Id) + '">' + escapeHtml(val.event_Name) + '</div></td><td class="pl-1"><div class="eventBp" id="partner_' + escapeHtml(val.event_Id) + '" style="width:100px;">' + escapeHtml(val.partner) + '</div></td><td class="pl-1"><div class="eventBp" id="partner_from_' + escapeHtml(val.event_Id) + '">' + escapeHtml(val.partner_From) + '</div></td><td class="pl-1"><div class="eventDate" id="date_' + escapeHtml(val.event_Id) + '" style="width:100px;">' + escapeHtml(date_create) + '</div></td><td class="pl-1"><div class="eventStatus" id="event_status_' + escapeHtml(val.event_Id) + '" style="width:100px;">' + escapeHtml(val.event_Status) + '</div></td><td class="pl-1"><div id="Evidence-' + escapeHtml(val.event_Id) + '" class="PhotoEvidence" style="display:none;">' + escapeHtml(val.evidence) + '</div><div style="" id="date_' + escapeHtml(val.event_Id) + '"><label class="switch"><input class="switch-input" id="switch-input-' + escapeHtml(val.event_Id) + '" type="checkbox" onchange="javascript:return setPhotoEvidenceUpdate(\'' + escapeHtml(val.event_Id) + '\');"/><span class="switch-label" data-on="Yes" data-off="No"></span><span class="switch-handle"></span></label></div></td></tr>';                                
}
else
{
  let accessEvents = sessionStorage.getItem("RoleList");

  if(!accessEvents.includes(val.event_Name))
  {
    var eventsboxes = '<tr id="row_val_' + escapeHtml(val.event_Id) + '" class="completedBackground Event_class" style="height:30px;"><td class="p-1"></td><td class="" style="font-size: 10px;padding:1px;"><div class="eventNum" id="' + escapeHtml(val.event_Id) + '" style="width:75px;">' + escapeHtml(val.event_Id) + '</div></td><td class="pl-1"><div class="eventName" id="event_name_' + escapeHtml(val.event_Id) + '">' + escapeHtml(val.event_Name) + '</div></td><td class="pl-1"><div class="eventBp" id="partner_' + escapeHtml(val.event_Id) + '" style="width:100px;">' + escapeHtml(val.partner) + '</div></td><td class="pl-1"><div class="eventBp" id="partner_from_' + escapeHtml(val.event_Id) + '">' + escapeHtml(val.partner_From) + '</div></td><td class="pl-1"><div class="eventDate" id="date_' + escapeHtml(val.event_Id) + '" style="width:100px;">' + escapeHtml(date_create) + '</div></td><td class="pl-1"><div class="eventStatus" id="event_status_' + escapeHtml(val.event_Id) + '" style="width:100px;">' + escapeHtml(val.event_Status) + '</div></td><td class="pl-1"><div id="Evidence-' + escapeHtml(val.event_Id) + '" class="PhotoEvidence" style="display:none;">' + escapeHtml(val.evidence) + '</div><div style="" id="date_' + escapeHtml(val.event_Id) + '"><label class="switch"><input class="switch-input" id="switch-input-' + escapeHtml(val.event_Id) + '" type="checkbox" onchange="javascript:return setPhotoEvidenceUpdate(\'' + escapeHtml(val.event_Id) + '\');"/><span class="switch-label" data-on="Yes" data-off="No"></span><span class="switch-handle"></span></label></div></td></tr>';
  }
  else
  {
    var eventsboxes = '<tr id="row_val_' + escapeHtml(val.event_Id) + '" class="Event_class" style="height:30px;"><td class="p-1"><input type="radio" onclick="javascript:return geteventvalueslist(this.value);" name="event" style="width:14px;" value="' + escapeHtml(val.event_Id) + '" id="Radio_' + escapeHtml(val.event_Id) + '"/></td><td class="" style="font-size: 10px;padding:1px;"><div class="eventNum" id="' + escapeHtml(val.event_Id) + '" style="width:75px;">' + escapeHtml(val.event_Id) + '</div></td><td class="pl-1"><div class="eventName" id="event_name_' + escapeHtml(val.event_Id) + '">' + escapeHtml(val.event_Name) + '</div></td><td class="pl-1"><div class="eventBp" id="partner_' + escapeHtml(val.event_Id) + '" style="width:100px;">' + escapeHtml(val.partner) + '</div></td><td class="pl-1"><div class="eventBp" id="partner_from_' + escapeHtml(val.event_Id) + '">' + escapeHtml(val.partner_From) + '</div></td><td class="pl-1"><div class="eventDate" id="date_' + escapeHtml(val.event_Id) + '" style="width:100px;">' + escapeHtml(date_create) + '</div></td><td class="pl-1"><div class="eventStatus" id="event_status_' + escapeHtml(val.event_Id) + '" style="width:100px;">' + escapeHtml(val.event_Status) + '</div></td><td class="pl-1"><div id="Evidence-' + escapeHtml(val.event_Id) + '" class="PhotoEvidence" style="display:none;">' + escapeHtml(val.evidence) + '</div><div style="" id="date_' + escapeHtml(val.event_Id) + '"><label class="switch"><input class="switch-input" id="switch-input-' + escapeHtml(val.event_Id) + '" type="checkbox" onchange="javascript:return setPhotoEvidenceUpdate(\'' + escapeHtml(val.event_Id) + '\');"/><span class="switch-label" data-on="Yes" data-off="No"></span><span class="switch-handle"></span></label></div></td></tr>';
  }
}
		             		}
		             		
			               	
			              
			             		
			             		////alert(eventsboxes);
				 				$("#inboxesvalues>tbody").append(eventsboxes);
				 				
				 			 	if(val.event_Status == "Completed"){
				               		$(".eventNum").css("width","75px");
				               	}else{
				               		$(".eventNum").css("width","75px");
				               	}
				 				$("#event_date_"+val.event_Id).datepicker();

				 				
		             				//var json_table = 
		                  			             						
		 ///						}
		 				 	if(val.evidence == "yes")
	        	    		{
	        	    			$("#switch-input-"+val.event_Id).attr('checked',true);
	        	    		}else{
	        	    			$("#switch-input-"+val.event_Id).attr('checked',false);
	        	    		}
		 				////	alert(tabletr);
		 				///     alert(val.event_Name);
		 					if(val.event_Name == "Upload Documents" || val.event_Name == "Additional Documents" || val.event_Name == "FDA may proceed"){
								 $("#switch-input-"+val.event_Id).attr('checked',true);
							 }
							 
							 
							 		 							 					
		 				});
				
				
	///		}
			
			var radioactive = $('input[type=radio]:first').attr('checked', true).val();
			var events_isch = $('#inboxesvalues tbody>tr:first').find('td:eq(1) div').attr("id");
			if(radioactive == events_isch){
			
			$("#devices").attr("disabled",true);
			}
			geteventvalueslist(radioactive);;
			var events_is = $('#inboxesvalues tr:last').find('td:eq(1) div').attr("id");
			//console.log(events_is);
	    	//$("#"+events_is).prop("checked", true);
			$("#Radio_"+events_is).on("click",function(){
				////alert("he;ll");
				MovetoCompletedShipment();
			});
			
			
	 
		}
		});
	 	
	 	
	 	
	 	
	 	
	 	
	 	
	 	
	 	
	 	
  	$('#draftTable').DataTable();

	
	
	
	    	/* $.ajax( {
	    		type:'Get',
	    		crossDomain: true,
	    		url:'https://127.0.0.1:8090/Allcustomerdetails',
	    		 dataType: 'json',
	    	        /* headers: {
	    	          'Api-Appid': '********',
	    	          'Api-Key': '*******',
	    	          'Access-Control-Allow-Origin': '*'
	    	        }, 
	    		success:function(data) {
	    		 //console.log(data);
	    		 
	    		}

	    		}); */
	    	var randnumber = getRandom(10);
	    	$("#internalshipment").val(randnumber);
	    	$('.datepicker').datepicker();

	    	$(".bodyblur,.bodyblur1").on("click",function(){
	    		 $("#scanboxview,#locationboxview").hide();
	    	    $(this).hide();
	    	});
	    	setTimeout(function(){
	    	
	    	    $("#scanboxview").hide();
	    	    $(".bodyblur").hide();
	    	}, 5000);
	    	$("#scaninputnumber").on("click",function(){
	    		$(this).css({"border":"1px solid #00000030","color":"#000"});
	    	});
	    	$("#CancelEvent,.body_blur,.close").on("click",function(){
	    		$(".body_blur,.AddEventBlock").hide();
	    		$("body").css("overflow","auto");
	    	});
 	
 });
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
		 var imageview = '<div class="abcd"><img src="./Shipment_Data/'+shipment_id+'/'+event_id+'/'+value+'" style="top:2px;width:96%;left:3px;"/></div>';
		 ////alert(imageview);
		 imaviewcompleted.push(imageview);
		 imgLinks.push("https://127.0.0.1/Shipment_Data/"+shipment_id+"/"+event_id+"/"+value);
		 //imageview.appendTo("#previewCompletedEvidence");
		 //$("#previewCompletedEvidence").append(imageview);
		
	 });
	 //console.log(imgLinks);
	 $("#downloadImages").on("click",function(){
		 var nombre = shipment_id+'-'+event_id;
		 compressed_img(imgLinks,nombre);
	 });
	 
	 attr("onclick","javascript:return downloadAll("+imgLinks+");");
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

 function getimagerule(names)
 {
	 $.each(names,function(key,value){
	    	var title =  $("#evidenceimageload-"+key).attr("src");
	    	//console.log(title);
	      });
 }
 
 function getRandom(length) {
 	return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
 	}

 function reset()
 {
 	var Event_Id = $("#event_id_val").val("");
		var Event_Type = $("#event_type_val").val("");
		var Partner_From = $("#event_partner_from").val("");
		var Event_Reference = $("#event_reference").val("");
		var Type_of_Reference = $("#typeOfReferences1").val("Select Type Reference");
		var Event_Description = $("#event_description").val("");
		var Evidence_Description = $("#evidence_description").val("");
		var Devices = $("#devices").val("Select Device");	
 }   
 function geteventvalueslist(event)
 {
 	var part_from = $("#partner_from_"+event).text();
 	var event_name = $("#event_name_"+event).text();
 	var evidence = $("#Evidence-"+event).text();
 	//alert(evidence);
 	//var event_date = $("#event_date_"+event).val();       
 	$("#event_id_val").val(event);
 	$("#event_type_val").val(event_name);
 	$("#event_partner_from").val(part_from);
 	$(".gallery").hide();
 	var sdf = $("#gallery-"+event+"> .abcd").length;
 	
 //	alert(szdf);
 	//var sdf = $.cookie("filesUpdateShipemtCount-"+event);
		var sdfiles = $.cookie("filesUpdateShipemtFiles-"+event);
 	if(evidence == "yes")
 		{
 			
 			$("#gallery-"+event).show();
 			if(sdf != undefined){
 			$("#uplodimageslist").text(sdf+" files Uploaded");
 			}else{
 				$("#uplodimageslist").text("0 files Uploaded");
 			}
 		 	$("#uplodimageslist").removeClass("btn-outline-secondary").addClass("btn-secondary");
 		 	//console.log(sdfiles);
 			$("#EvidenceUploadFile").attr("disabled",false).val(sdfiles);
 		}
 	if(evidence == "No")
 		{
 		$("#uplodimageslist").text("0 files Uploaded").removeClass("btn-secondary");
 			$("#EvidenceUploadFile").attr("disabled",true).val('');
 		}
 	
 }
/* function scanbtn()
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
 }*/
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
	$(".body_blur").css({"z-index":"2"});
 	$("body").css("overflow","hidden");
 	$(".body_blur,.AddEventBlock").show();
 	
 	var selector = '#' + 'inboxesvalues' + ' tbody tr:has(td:first-child input:checked)';
    var selectedCheckbox = $(selector);
    
    var table = $('#inboxesvalues').tableToJSON(); // Convert the table into a javascript object
    var tabforEventId = JSON.stringify(table);
    ///console.log(JSON.stringify(table));  
	var divText = $(selectedCheckbox).find('td:eq(1) div').text();
	var divTextSplit = divText.split("E");
	var intValue = parseInt(divTextSplit[1], 10) + 5;
	var otherValue = parseInt(divTextSplit[1], 10) + 6;
	///console.log(intValue);
	
    if(!tabforEventId.includes(intValue) && otherValue){
	  	$("#eventId").val(`E00${intValue}`);
	    $('#eventId').prop('disabled', true);
	}
	else{
	 	$("#eventId").val(`E00${otherValue}`);
	    $('#eventId').prop('disabled', true);
	}
       	
 }
 /*function selectBpName(valee)
 {
 	var SCM_id = $("#scmid").val();
	var Role = $.session.get('Role');

			var UserIds = $.session.get('UserId');

	var UserId = UserIds;
		var useridsplit = UserId.split('-');
		useridsplit[0].toString();
		useridsplit[0] + "";
		useridsplit[1].toString();
		useridsplit[1] + "";
 	$('#eventslist').empty();
 	$('#eventslist').append('<option value="">Select Event</option>');
 	$.getJSON( localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0], function(data) {
 		$.each(data.bussinesPartnersDetails,function(key,value){
 			$.each(value,function(keye,val){
 				if(valee == val)
 					{
 						$.each(value.events,function(keys,vales){
 							
 							 var select_device_Id_items = '<option value="'+vales.event_Status+'">'+vales.event_Status+'</option>';
 		    				 $("#eventslist").append(select_device_Id_items);
 						});
 					}
 			});
 		});
 	});
 }*/
 function addEventupdate()
 {
	 
	 	var selectbp0 = $("#selectvalues").val();
	 	var selectbp1 = selectbp0.split('-');
	 	var partner=selectbp1[0];

	 	var selectbp = selectbp1[1];
	 	var selectevents = $("#eventslist").val();
	 	var eventid = $("#eventId").val();
		var error = document.getElementById("EventError");
	 	 if(eventid == ""){
			 //alert(eventId);
				var text = "Enter Event Id";
				error.innerHTML = text;
				$("#eventId").focus().css("border","1px solid red");
				return false;
		 }else {
			$("#eventId").focus().css("border", "1px solid #CCC");
		}
		 if(selectbp == ""){
				var text = "Select BP Id";
				error.innerHTML = text;
				$("#selectvalues").focus().css("border","1px solid red");
				return false;
	 }else {
			$("#selectvalues").focus().css("border", "1px solid #CCC");
		}
		 if(selectevents == ""){
				var text = "Select Event List";
				error.innerHTML = text;
				$("#eventslist").focus().css("border","1px solid red");
				return false;
	 }else {
			$("#eventslist").focus().css("border", "1px solid #CCC");
		}
		 
		 
	

		var UserIds = $.session.get('UserId');

		var UserId = UserIds;
			var useridsplit = UserId.split('-');
			useridsplit[0].toString();
			useridsplit[0] + "";
			useridsplit[1].toString();
			useridsplit[1] + "";
 	var ship_id = $("#shipment_id").val();
 	var ship_num = $("#shipment_number").val();
 	var device_id = $("#connected_device").val();
 	var part_from = $.cookie("BP_ID");
 	//var SCM_id = useridsplit[1]; //// is giving A02
 	var SCM_id = useridsplit[0];  //// gives S004
 	var comments = $("#comments").val();
    var mode_of_transport = $("#mode_trans").val();
 	var date =  new Date(); 
 	date.setTime(date.getTime() + (330  * 60 * 1000));
 	var isoDate = date.toISOString();
 	var events_is = $('#inboxesvalues tr:last').find('td:eq(1) div').attr("id");
		var events_length = $('#inboxesvalues>tbody .Event_class').length;
		var radiovalue=$("input:radio[name=event]:checked").val();
	
	/*	if (eventId == "") {
			$("#eventId").focus().css("border", "1px solid red");
			return false;
		} else {
			$("#eventId").focus().css("border", "1px solid #CCC");
		}*/
	
	
		$("#"+radiovalue).prop("checked", false);
		var createEventJsonData = {
			"customerId" : SCM_id,
			"shipment_Number" : ship_id,
			"shipment_Num" : ship_num,
			"mode":mode_of_transport,
			"comments" : [comments],
			"deviceId" : device_id,
			"estimatedDeliveryDate" : "",
			"parnterFrom" : selectbp,
			"eventName" : selectevents,
			"event_Id" : eventid,
			"dateAndTime" : isoDate,
			"evidenceList":[],
			"evidence_URL":[],
			"partner":partner 
			};
		////alert(JSON.stringify(createEventJsonData));
		///console.log("createEventJsonData in addUpdateNewEvent");
///		console.log(createEventJsonData);
///		return false;
		 var url = localStorage.getItem("smaasip")+"/SCMXPert/addUpdateNewEvent";
		 
		 //var error = document.getElementById("selecterror");
		 
		 
		 
		 
	  $.ajax({
		 type:"post",
		 url:url,
		 headers: {
			                                        'Content-Type' : "application/json",
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken'),
			   	     	  	    	        	  },
					beforeSend: function() {
			             // $("#loading-image").show();
			             var loading = '<img src="./images/loading.gif" id="loadingimg"/>';
			             $(".body_blur").show().html(loading).css({"background":"#000000c2"});
			             $("#loadingimg").show();
			             $(".AddEventBlock").hide();
			      	              
			           },
		 data: JSON.stringify(createEventJsonData),
		 success:function(response){
			// //alert(response);
	        	var ship_id = $.cookie("shp_id");
	        	$("#inboxesvalues>tbody").empty();
   /*  	 	$.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/getAllTxns/"+ship_id,function(filters){
     	 		////alert(filters);
     	 		var event_sNO = []; 
  				$.each(filters,function(key,value){
  					event_sNO.push(value.event_SNo);
  					//partner_From.push(value.partner_From);
  					//var part_no = value.partner_From;
  					
  					/* $.each(value,function(keyssssss,values){
  						//alert(keyssssss);
  					}); */
 // 				});
  				
  				
 // 				event_sNO.sort(function(a, b){return a-b});
//  				for(i=0;i<event_sNO.length;i++)
//					{
 // 					var event_num = event_sNO[i];
//		 				$.each(filters,function(kew,val){
		 					
//		 		 					if(event_num == val.event_SNo)
//		 		 						{
		 		 						////alert(kew);
//		 		 						var status_length = val.event_Name.length;
		 			             	/* 	if(status_length > 15)
		 			             			{
		 			             				var font_size = "10";
		 			             			}else{
		 			             				var font_size = "12";
		 			             			 }*/
		 			             		//var val_data = '<div class=""><div><span>Altitude :- </span><span>'+val.altitude+'</span></div><div><span>Battery :- </span><span>'+val.bat+'</span></div><div><span>Distance :- </span><span>'+val.distance+'</span></div><div><span>Latitude :- </span><span>'+val.latitude+'</span></div><div><span>Longitude :- </span><span>'+val.longitude+'</span></div><div><span>Report Type :- </span><span>'+val.report_type+'</span></div><div><span>Sensor Id :- </span><span>'+val.sensor_id+'</span></div><div><span>Speed :- </span><span>'+val.speed+'</span></div><div><span>UTC TIME :- </span><span>'+val.utc+'</span></div><div><span>Internal Temperature :- </span><span>'+val.internal_temperature+'</span></div><div><span>Mode of Transport :- </span><span>'+val.mode_of_Transport+'</span></div><div><span>Message Number :- </span><span>'+val.message_Number+'</span></div><div><span>Temp Measurment :- </span><span>'+val.temp_Measurment+'</span></div><div><span>Shipment Id :- </span><span>'+val.shipment_Id+'</span></div><div><span>Shipment Num :- </span><span>'+val.shipment_Num+'</span></div><div><span>Device Id :- </span><span>'+val.device_Id+'</span></div><div><span>Event Name :- </span><span>'+val.event_Name+'</span></div><div><span>Event S.No :- </span><span>'+val.event_SNo+'</span></div></div>';
		 			             		//var val_data = val.altitude;
//		 			             		var key = kew+1;
		 			             		/*var theDate = new Date( Date.parse(val.event_Exec_Date));
		 			               		var date_create = theDate.toLocaleDateString();*/
		 			               		
//		 			               	if(val.event_Exec_Date){
//				             			var date_create = dateFormat(val.event_Exec_Date, "dd-mmm-yyyy");
//				             		}else{
//				             			var date_create = '';
//				             		}
		 			             		/* if(val.event_Status == "Completed"){
		 			         
		 			             			var eventsboxes = '<tr><td class="p-1"></td><td class="" style="font-size: 10px;padding:1px;"><input type="text" class="mb-1 form-control" value="'+val.event_Id+'" style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 40px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;"   disabled="disabled"/> </td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="partner_name_'+val.event_Id+'" value="'+val.partner_From+'" style="text-align:center;height:25px;font-size: 12px;font-weight:bold;" disabled="disabled" /></td><td class="pl-1"><input type="text"  disabled="disabled" class="form-control mb-1  inputboxesevents" id="event_name_'+val.event_Id+'" value="'+val.event_Name+'" style="height:25px;font-size: 12px;font-weight:bold;" /></td><td class="pl-1"><input type="text" disabled="disabled" class="form-control mb-1 inputboxesevents" id="event_date_'+val.event_Id+'" value="'+date_create+'" placeholder="Select Date" style="height:25px;font-size: 12px;font-weight:bold;" /></td></tr>';
		 			             		}else{
		 			             			var eventsboxes = '<tr><td class="p-1"><input type="radio" name="event" style="width:14px;" value="'+val.event_Id+'"/></td><td class="" style="font-size: 10px;padding:1px;"><input type="text" class="mb-1 form-control" value="'+val.event_Id+'" style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 40px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;background: #e9ecef;"   disabled="disabled"/> </td><td class="pl-1"><input type="text"   disabled="disabled" class="form-control mb-1 inputboxesevents" id="partner_name_'+val.event_Id+'" value="'+val.partner_From+'" style="text-align:center;height:25px;font-size: 12px;font-weight:bold;" /></td><td class="pl-1"><input type="text"   disabled="disabled" class="form-control mb-1  inputboxesevents" id="event_name_'+val.event_Id+'" value="'+val.event_Name+'" style="height:25px;font-size: 12px;font-weight:bold;" /></td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents"  disabled="disabled" id="event_date_'+val.event_Id+'" value="'+date_create+'" placeholder="Select Date" style="height:25px;font-size: 12px;font-weight:bold;" /></td></tr>';
		 			             		} */
//		 			               	if(val.event_Status == "Completed"){
//		 			               	if(val.evidenceList == null || val.evidenceList == "")
//	 		 			        	 {
//	 		 			        	 	var evidence = '<td class="pl-1"><div class="completedBackground eventStatus" id="evidence_list_'+val.event_Id+'" style="background:#965664;color:#fff;"><div >No Evidence</div></div></td>';
//	 		 			        	 }else{
	 		 			        		
//	 		 			        		 var evidence = '<td class="pl-1"><div class="completedBackground eventStatus" id="evidence_list_'+val.event_Id+'" style="background:#965664;color:#fff;cursor:pointer;"><div onclick="javascript:return showEvidencePreview(\''+ship_id+'\',\''+val.event_Id+'\',\''+val.evidenceList+'\')"><img src="./images/eye.png" style="width:16px;height:16px;float:left;"/><span style="float:left;margin-left:2px;">Show Evidence</span></div></div></td>';
//	 		 			        	 }
//		 			               	var eventsboxes = '<tr id="row_val_'+val.event_Id+'" class="completedBackground Event_class" style="height:30px;border-bottom: 4px solid #fff;"><td class="p-1"></td><td class="" style="font-size: 10px;padding:1px;"><div class="completedBackground eventNum" id="'+val.event_Id+'">'+val.event_Id+'</div></td><td class="pl-1"><div class="completedBackground eventBp" id="partner_from_'+val.event_Id+'">'+val.partner_From+'</div></td><td class="pl-1"><div class="completedBackground eventName" id="event_name_'+val.event_Id+'">'+val.event_Name+'</div></td><td class="pl-1"><div class="completedBackground eventDate" id="date_'+val.event_Id+'">'+date_create+'</div></td><td class="pl-1"><div class="completedBackground eventStatus" id="event_status_'+val.event_Id+'">'+val.event_Status+'</div></td>'+evidence+'</tr>';
//		 			             		}else{
//		 			             			var eventsboxes = '<tr id="row_val_'+val.event_Id+'" class="Event_class" style="height:30px;"><td class="p-1"><input type="radio" onclick="javascript:return geteventvalueslist(this.value);" name="event" style="width:14px;" value="'+val.event_Id+'" id="Radio_'+val.event_Id+'"/></td><td class="" style="font-size: 10px;padding:1px;"><div class="eventNum" id="'+val.event_Id+'">'+val.event_Id+'</div></td><td class="pl-1"><div class="eventName" id="event_name_'+val.event_Id+'">'+val.event_Name+'</div></td><td class="pl-1"><div class="eventBp" id="partner_from_'+val.event_Id+'">'+val.partner_From+'</div></td><td class="pl-1"><div class="eventDate" id="date_'+val.event_Id+'">'+date_create+'</div></td><td class="pl-1"><div class="eventStatus" id="event_status_'+val.event_Id+'">'+val.event_Status+'</div></td><td class="pl-1"><div id="Evidence-'+val.event_Id+'" class="PhotoEvidence" style="display:none;">'+val.evidence+'</div><div style="" id="date_'+val.event_Id+'"><label class="switch"><input class="switch-input" id="switch-input-'+val.event_Id+'" type="checkbox" onchange="javascript:return setPhotoEvidence(\''+val.event_Id+'\');"/><span class="switch-label" data-on="Yes" data-off="No"></span><span class="switch-handle"></span></label></div></td></tr>';
		 			             			
//	 			             		}
		 			             		
		 			             		////alert(eventsboxes);
//		 				 				$("#inboxesvalues>tbody").append(eventsboxes);
//		 				 				if(val.event_Status == "Completed"){
//						               		$(".eventNum").css("width","90px");
//						               	}else{
//						               		$(".eventNum").css("width","90px");
//						               	}
//		 				 				$("#event_date_"+val.event_Id).datepicker();

		 				 				
		 		             				//var json_table = 
		 		                  			             						
//		 		 						} 
		 		 					////alert(tabletr);
//		 		 				});
						
						//reset();
//		 				$(".body_blur").empty();
//		 				$(".body_blur,.AddEventBlock").hide();
//		 				$("#selectvalues,#eventslist,#eventId").val('');
//		 				$("#partnerName").empty();
		 			 	
//		 				 $("body").css({"overflow-y":"auto"});
//					}
  				
//     	 	});*/
		$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getAllTxns/"+ship_id,
    type : "GET",
    dataType: 'json',
	headers: {
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  },
    success:function(filters){
 		////alert(filters);
  ///   	 		var event_sNO = []; 
  ///				$.each(filters,function(key,value){
  ///					event_sNO.push(value.event_SNo);
  					//partner_From.push(value.partner_From);
  					//var part_no = value.partner_From;
  					
  					/* $.each(value,function(keyssssss,values){
  						//alert(keyssssss);
  					}); */
  ///				});
  				
  				
 /// 				event_sNO.sort(function(a, b){return a-b});
  	///			for(i=0;i<event_sNO.length;i++)
	///				{
  					var event_num = event_sNO[i];
		 				$.each(filters,function(kew,val){
		 					
		 	///	 					if(event_num == val.event_SNo)
		 	///	 						{
		 		 						////alert(kew);
		 		 						var status_length = val.event_Name.length;
		 			             	/* 	if(status_length > 15)
		 			             			{
		 			             				var font_size = "10";
		 			             			}else{
		 			             				var font_size = "12";
		 			             			 }*/
		 			             		//var val_data = '<div class=""><div><span>Altitude :- </span><span>'+val.altitude+'</span></div><div><span>Battery :- </span><span>'+val.bat+'</span></div><div><span>Distance :- </span><span>'+val.distance+'</span></div><div><span>Latitude :- </span><span>'+val.latitude+'</span></div><div><span>Longitude :- </span><span>'+val.longitude+'</span></div><div><span>Report Type :- </span><span>'+val.report_type+'</span></div><div><span>Sensor Id :- </span><span>'+val.sensor_id+'</span></div><div><span>Speed :- </span><span>'+val.speed+'</span></div><div><span>UTC TIME :- </span><span>'+val.utc+'</span></div><div><span>Internal Temperature :- </span><span>'+val.internal_temperature+'</span></div><div><span>Mode of Transport :- </span><span>'+val.mode_of_Transport+'</span></div><div><span>Message Number :- </span><span>'+val.message_Number+'</span></div><div><span>Temp Measurment :- </span><span>'+val.temp_Measurment+'</span></div><div><span>Shipment Id :- </span><span>'+val.shipment_Id+'</span></div><div><span>Shipment Num :- </span><span>'+val.shipment_Num+'</span></div><div><span>Device Id :- </span><span>'+val.device_Id+'</span></div><div><span>Event Name :- </span><span>'+val.event_Name+'</span></div><div><span>Event S.No :- </span><span>'+val.event_SNo+'</span></div></div>';
		 			             		//var val_data = val.altitude;
		 			             		var key = kew+1;
		 			             		/*var theDate = new Date( Date.parse(val.event_Exec_Date));
		 			               		var date_create = theDate.toLocaleDateString();*/
		 			               		
		 			               	if(val.event_Exec_Date){
				             			var date_create = dateFormat(val.event_Exec_Date, "dd-mmm-yyyy");
				             		}else{
				             			var date_create = '';
				             		}
		 			             		/* if(val.event_Status == "Completed"){
		 			         
		 			             			var eventsboxes = '<tr><td class="p-1"></td><td class="" style="font-size: 10px;padding:1px;"><input type="text" class="mb-1 form-control" value="'+val.event_Id+'" style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 40px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;"   disabled="disabled"/> </td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="partner_name_'+val.event_Id+'" value="'+val.partner_From+'" style="text-align:center;height:25px;font-size: 12px;font-weight:bold;" disabled="disabled" /></td><td class="pl-1"><input type="text"  disabled="disabled" class="form-control mb-1  inputboxesevents" id="event_name_'+val.event_Id+'" value="'+val.event_Name+'" style="height:25px;font-size: 12px;font-weight:bold;" /></td><td class="pl-1"><input type="text" disabled="disabled" class="form-control mb-1 inputboxesevents" id="event_date_'+val.event_Id+'" value="'+date_create+'" placeholder="Select Date" style="height:25px;font-size: 12px;font-weight:bold;" /></td></tr>';
		 			             		}else{
		 			             			var eventsboxes = '<tr><td class="p-1"><input type="radio" name="event" style="width:14px;" value="'+val.event_Id+'"/></td><td class="" style="font-size: 10px;padding:1px;"><input type="text" class="mb-1 form-control" value="'+val.event_Id+'" style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 40px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;background: #e9ecef;"   disabled="disabled"/> </td><td class="pl-1"><input type="text"   disabled="disabled" class="form-control mb-1 inputboxesevents" id="partner_name_'+val.event_Id+'" value="'+val.partner_From+'" style="text-align:center;height:25px;font-size: 12px;font-weight:bold;" /></td><td class="pl-1"><input type="text"   disabled="disabled" class="form-control mb-1  inputboxesevents" id="event_name_'+val.event_Id+'" value="'+val.event_Name+'" style="height:25px;font-size: 12px;font-weight:bold;" /></td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents"  disabled="disabled" id="event_date_'+val.event_Id+'" value="'+date_create+'" placeholder="Select Date" style="height:25px;font-size: 12px;font-weight:bold;" /></td></tr>';
		 			             		} */
		 			               	if(val.event_Status == "Completed"){
		 			               	if(val.evidenceList == null || val.evidenceList == "")
	 		 			        	 {
	 		 			        	 	var evidence = '<td class="pl-1"><div class="completedBackground eventStatus" id="evidence_list_'+escapeHtml(val.event_Id)+'" style="background:#965664;color:#fff;"><div >No Evidence</div></div></td>';
	 		 			        	 }else{
	 		 			        		
	 		 			        		 var evidence = '<td class="pl-1"><div class="completedBackground eventStatus" id="evidence_list_'+escapeHtml(val.event_Id)+'" style="background:#965664;color:#fff;cursor:pointer;"><div onclick="javascript:return showEvidencePreview(\''+escapeHtml(ship_id)+'\',\''+escapeHtml(val.event_Id)+'\',\''+escapeHtml(val.evidenceList)+'\')"><img src="./images/eye.png" style="width:16px;height:16px;float:left;"/><span style="float:left;margin-left:2px;">Show Evidence</span></div></div></td>';
	 		 			        	 }
		 			               	var eventsboxes = '<tr id="row_val_'+escapeHtml(val.event_Id)+'" class="completedBackground Event_class" style="height:30px;border-bottom: 4px solid #fff;"><td class="p-1"></td><td class="" style="font-size: 10px;padding:1px;"><div class="completedBackground eventNum" id="'+escapeHtml(val.event_Id)+'">'+escapeHtml(val.event_Id)+'</div></td><td class="pl-1"><div class="completedBackground eventBp" id="partner_from_'+escapeHtml(val.event_Id)+'">'+escapeHtml(val.partner_From)+'</div></td><td class="pl-1"><div class="completedBackground eventName" id="event_name_'+escapeHtml(val.event_Id)+'">'+escapeHtml(val.event_Name)+'</div></td><td class="pl-1"><div class="completedBackground eventDate" id="date_'+escapeHtml(val.event_Id)+'">'+escapeHtml(date_create)+'</div></td><td class="pl-1"><div class="completedBackground eventStatus" id="event_status_'+escapeHtml(val.event_Id)+'">'+escapeHtml(val.event_Status)+'</div></td>'+escapeHtml(evidence)+'</tr>';
		 			             		}else{
		 			             			var eventsboxes = '<tr id="row_val_'+escapeHtml(val.event_Id)+'" class="Event_class" style="height:30px;"><td class="p-1"><input type="radio" onclick="javascript:return geteventvalueslist(this.value);" name="event" style="width:14px;" value="'+escapeHtml(val.event_Id)+'" id="Radio_'+escapeHtml(val.event_Id)+'"/></td><td class="" style="font-size: 10px;padding:1px;"><div class="eventNum" id="'+escapeHtml(val.event_Id)+'">'+escapeHtml(val.event_Id)+'</div></td><td class="pl-1"><div class="eventName" id="event_name_'+escapeHtml(val.event_Id)+'">'+escapeHtml(val.event_Name)+'</div></td><td class="pl-1"><div class="eventBp" id="partner_from_'+escapeHtml(val.event_Id)+'">'+escapeHtml(val.partner_From)+'</div></td><td class="pl-1"><div class="eventDate" id="date_'+escapeHtml(val.event_Id)+'">'+escapeHtml(date_create)+'</div></td><td class="pl-1"><div class="eventStatus" id="event_status_'+escapeHtml(val.event_Id)+'">'+escapeHtml(val.event_Status)+'</div></td><td class="pl-1"><div id="Evidence-'+escapeHtml(val.event_Id)+'" class="PhotoEvidence" style="display:none;">'+escapeHtml(val.evidence)+'</div><div style="" id="date_'+escapeHtml(val.event_Id)+'"><label class="switch"><input class="switch-input" id="switch-input-'+escapeHtml(val.event_Id)+'" type="checkbox" onchange="javascript:return setPhotoEvidence(\''+escapeHtml(val.event_Id)+'\');"/><span class="switch-label" data-on="Yes" data-off="No"></span><span class="switch-handle"></span></label></div></td></tr>';
		 			             			
	 			             		}
		 			             		
		 			             		////alert(eventsboxes);
		 				 				$("#inboxesvalues>tbody").append(eventsboxes);
		 				 				if(val.event_Status == "Completed"){
						               		$(".eventNum").css("width","90px");
						               	}else{
						               		$(".eventNum").css("width","90px");
						               	}
		 				 				$("#event_date_"+val.event_Id).datepicker();

		 				 				
		 		             				//var json_table = 
		 		                  			             						
		 	///	 						} 
		 		 					////alert(tabletr);
		 		 				});
						
						//reset();
		 				$(".body_blur").empty();
		 				$(".body_blur,.AddEventBlock").hide();
		 				$("#selectvalues,#eventslist,#eventId").val('');
		 				$("#partnerName").empty();
		 			 	
		 				 $("body").css({"overflow-y":"auto"});
	///				}
  				
     	 	
		}
		});
		
		  var correct = '<img src="./images/correct.gif" id="tickimg" style="width:65px;"/>';			
		 $(".body_blur").show().html('<div class="alert alert-success" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;"><div class="float-right" onclick="javascript:return closefunction();">X</div>'+correct+'Event added <strong>Successfully</strong> <a href="./UpdateShipmentEvent.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;"></a>.</div>').css({"background":"#000000c2"});
						                             								
	     setTimeout(function (){

              		  // Something you want delayed.              		         	    		       	    		        	 
        	    	//window.location.href = 'UpdateShipmentEvent.jsp#FileUploadSuccess';
        	    	//window.reload();
                     location.reload();
              		}, 10000);
		
		
			 }
		 });

/*       		var length_events = events_length+1
		var eventNewId = "E000"+length_events; */
		
          		
		
		//var evetntable = '<tr id="row_val_'+value+'"><td class="p-1"><input type="radio" name="event" style="width:14px;" value="'+value+'"/></td><td class="" style="font-size: 10px;padding:1px;"><input type="text" class="mb-1 form-control" value="'+value+'" style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 50px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;"  /> </td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="partner_name_'+value+'" value="'+partner+'" style="text-align:center;height:25px;font-size: 12px;font-weight:bold;"/></td><td class="pl-1"><input type="text" class="form-control mb-1  inputboxesevents" id="event_name_'+value+'" value="'+event+'" style="height:25px;font-size: 12px;font-weight:bold;"/></td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="event_date__copy'+value+'" value="" placeholder="Select Date" style="height:25px;font-size: 12px;font-weight:bold;"/></td></tr>';
		//var eventsboxes = '<tr id="row_val_'+eventid+'" class="Event_class"><td class="p-1"><input type="radio" name="event" style="width:14px;" value="'+eventid+'" id="'+eventid+'"/></td><td class="" style="font-size: 10px;padding:1px;"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 40px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;">'+eventid+'</div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 70px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="partner_from_'+eventid+'">'+selectbp+'</div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 160px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="event_name_'+eventid+'" >'+selectevents+'</div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 100px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="date_'+eventid+'" ></div></td><td class="pl-1"><div class="eventStatus" id="event_status_'+eventid+'"></div></td></tr>';
  	 //$("#inboxesvalues>tbody").append(eventsboxes);
  	 //$("#date_"+eventNewId).datepicker();
  /* 	$("#"+eventid).prop("checked", true);
  	var div = document.getElementById(eventid);
  	setTimeout(function() {
  	    div.focus();
  	}, 0);
  	$("body").css("overflow","auto");
 	$(".body_blur,.AddEventBlock").hide();
 	$("#selectvalues,#eventslist,#eventId").val(''); */
 	
 }
//var slideIndex = 1;
 //showSlides(slideIndex);

 function plusSlides(n) {
   showSlides(slideIndex += n);
 }

 function currentSlide(n) {
   showSlides(slideIndex = n);
 }

 function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("dot");
   if (n > slides.length) {slideIndex = 1}    
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
   }
   for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";  
   dots[slideIndex-1].className += " active";
 }
 
 function getAllTxnsEvent(ship_id)
 {
/*	 $.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/getAllTxns/"+ship_id,function(filters){
	 		////alert(filters);
	 		var event_sNO = []; 
				$.each(filters,function(key,value){
					event_sNO.push(value.event_SNo);
					//partner_From.push(value.partner_From);
					//var part_no = value.partner_From;
					
					/* $.each(value,function(keyssssss,values){
						//alert(keyssssss);
					}); */
//				});
				
				
//				event_sNO.sort(function(a, b){return a-b});
//				for(i=0;i<event_sNO.length;i++)
//				{
//					var event_num = event_sNO[i];
//	 				$.each(filters,function(kew,val){
	 					
//	 		 					if(event_num == val.event_SNo)
//	 		 						{
	 		 						////alert(kew);
//	 		 						var status_length = val.event_Name.length;
	 			             	/* 	if(status_length > 15)
	 			             			{
	 			             				var font_size = "10";
	 			             			}else{
	 			             				var font_size = "12";
	 			             			 }*/
	 			             		//var val_data = '<div class=""><div><span>Altitude :- </span><span>'+val.altitude+'</span></div><div><span>Battery :- </span><span>'+val.bat+'</span></div><div><span>Distance :- </span><span>'+val.distance+'</span></div><div><span>Latitude :- </span><span>'+val.latitude+'</span></div><div><span>Longitude :- </span><span>'+val.longitude+'</span></div><div><span>Report Type :- </span><span>'+val.report_type+'</span></div><div><span>Sensor Id :- </span><span>'+val.sensor_id+'</span></div><div><span>Speed :- </span><span>'+val.speed+'</span></div><div><span>UTC TIME :- </span><span>'+val.utc+'</span></div><div><span>Internal Temperature :- </span><span>'+val.internal_temperature+'</span></div><div><span>Mode of Transport :- </span><span>'+val.mode_of_Transport+'</span></div><div><span>Message Number :- </span><span>'+val.message_Number+'</span></div><div><span>Temp Measurment :- </span><span>'+val.temp_Measurment+'</span></div><div><span>Shipment Id :- </span><span>'+val.shipment_Id+'</span></div><div><span>Shipment Num :- </span><span>'+val.shipment_Num+'</span></div><div><span>Device Id :- </span><span>'+val.device_Id+'</span></div><div><span>Event Name :- </span><span>'+val.event_Name+'</span></div><div><span>Event S.No :- </span><span>'+val.event_SNo+'</span></div></div>';
	 			             		//var val_data = val.altitude;
//	 			             		var key = kew+1;
//	 			             		var theDate = new Date( Date.parse(val.event_Exec_Date));
//	 			               		var date_create = theDate.toLocaleDateString();
	 			             		/* if(val.event_Status == "Completed"){
	 			         
	 			             			var eventsboxes = '<tr><td class="p-1"></td><td class="" style="font-size: 10px;padding:1px;"><input type="text" class="mb-1 form-control" value="'+val.event_Id+'" style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 40px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;"   disabled="disabled"/> </td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="partner_name_'+val.event_Id+'" value="'+val.partner_From+'" style="text-align:center;height:25px;font-size: 12px;font-weight:bold;" disabled="disabled" /></td><td class="pl-1"><input type="text"  disabled="disabled" class="form-control mb-1  inputboxesevents" id="event_name_'+val.event_Id+'" value="'+val.event_Name+'" style="height:25px;font-size: 12px;font-weight:bold;" /></td><td class="pl-1"><input type="text" disabled="disabled" class="form-control mb-1 inputboxesevents" id="event_date_'+val.event_Id+'" value="'+date_create+'" placeholder="Select Date" style="height:25px;font-size: 12px;font-weight:bold;" /></td></tr>';
	 			             		}else{
	 			             			var eventsboxes = '<tr><td class="p-1"><input type="radio" name="event" style="width:14px;" value="'+val.event_Id+'"/></td><td class="" style="font-size: 10px;padding:1px;"><input type="text" class="mb-1 form-control" value="'+val.event_Id+'" style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 40px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;background: #e9ecef;"   disabled="disabled"/> </td><td class="pl-1"><input type="text"   disabled="disabled" class="form-control mb-1 inputboxesevents" id="partner_name_'+val.event_Id+'" value="'+val.partner_From+'" style="text-align:center;height:25px;font-size: 12px;font-weight:bold;" /></td><td class="pl-1"><input type="text"   disabled="disabled" class="form-control mb-1  inputboxesevents" id="event_name_'+val.event_Id+'" value="'+val.event_Name+'" style="height:25px;font-size: 12px;font-weight:bold;" /></td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents"  disabled="disabled" id="event_date_'+val.event_Id+'" value="'+date_create+'" placeholder="Select Date" style="height:25px;font-size: 12px;font-weight:bold;" /></td></tr>';
	 			             		} */
//	 			               	if(val.event_Status == "Completed"){
//	 			               	if(val.evidenceList == null || val.evidenceList == "")
//		 			        	 {
//		 			        	 	var evidence = '<td class="pl-1"><div class="completedBackground eventStatus" id="evidence_list_'+val.event_Id+'" style="background:#965664;color:#fff;"><div>No Evidence</div></div></td>';
//		 			        	 }else{
		 			        		
//		 			        		 var evidence = '<td class="pl-1"><div class="completedBackground eventStatus" id="evidence_list_'+val.event_Id+'" style="background:#965664;color:#fff;cursor:pointer;"><div onclick="javascript:return showEvidencePreview(\''+ship_id+'\',\''+val.event_Id+'\',\''+val.evidenceList+'\')"><img src="./images/eye.png" style="width:16px;height:16px;float:left;"/><span style="float:left;margin-left:2px;">Show Evidence</span></div></div></td>';
//		 			        	 } eventsboxes = '<tr id="row_val_'+val.event_Id+'" class="completedBackground Event_class" style="height:30px;border-bottom: 4px solid #fff;"><td class="p-1"></td><td class="" style="font-size: 10px;padding:1px;"><div class="completedBackground eventNum" id="'+val.event_Id+'">'+val.event_Id+'</div></td><td class="pl-1"><div class="completedBackground eventBp" id="partner_from_'+val.event_Id+'">'+val.partner_From+'</div></td><td class="pl-1"><div class="completedBackground eventName" id="event_name_'+val.event_Id+'">'+val.event_Name+'</div></td><td class="pl-1"><div class="completedBackground eventDate" id="date_'+val.event_Id+'">'+date_create+'</div></td><td class="pl-1"><div class="completedBackground eventStatus" id="event_status_'+val.event_Id+'">'+val.event_Status+'</div></td>'+evidence+'</tr>';
//	 			             		}else{
//	 			             			var eventsboxes = '<tr id="row_val_'+val.event_Id+'" class="Event_class" style="height:30px;"><td class="p-1"><input type="radio" onclick="javascript:return geteventvalueslist(this.value);" name="event" style="width:14px;" value="'+val.event_Id+'" id="'+val.event_Id+'"/></td><td class="" style="font-size: 10px;padding:1px;"><div class="eventNum" id="'+val.event_Id+'">'+val.event_Id+'</div></td><td class="pl-1"><div class="eventBp" id="partner_from_'+val.event_Id+'">'+val.partner_From+'</div></td><td class="pl-1"><div class="eventName" id="event_name_'+val.event_Id+'">'+val.event_Name+'</div></td><td class="pl-1"><div class="eventDate" id="date_'+val.event_Id+'">'+date_create+'</div></td><td class="pl-1"><div class="eventStatus" id="event_status_'+val.event_Id+'">'+val.event_Status+'</div></td></tr>';
	 			             			
//			             		}
	 			             		
	 			             		////alert(eventsboxes);
//	 				 				$("#inboxesvalues>tbody").append(eventsboxes);
//	 				 				if(val.event_Status == "Completed"){
//					               		$(".eventNum").css("width","90px");
//					               	}else{
//					               		$(".eventNum").css("width","90px");
//					               	}
//	 				 				$("#event_date_"+val.event_Id).datepicker();

	 				 				
	 		             				//var json_table = 
	 		                  			             						
//	 		 						} 
	 		 					////alert(tabletr);
//	 		 				});
					
//					reset();
//				}
				
//	 	});*/
			$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getAllTxns/"+ship_id,
    type : "GET",
    dataType: 'json',
	headers: {
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  },
    success:function(filters){
 		////alert(filters);
	 		var event_sNO = []; 
				$.each(filters,function(key,value){
					event_sNO.push(value.event_SNo);
					//partner_From.push(value.partner_From);
					//var part_no = value.partner_From;
					
					/* $.each(value,function(keyssssss,values){
						//alert(keyssssss);
					}); */
				});
				
				
				event_sNO.sort(function(a, b){return a-b});
				for(i=0;i<event_sNO.length;i++)
				{
					var event_num = event_sNO[i];
	 				$.each(filters,function(kew,val){
	 					
	 		 					if(event_num == val.event_SNo)
	 		 						{
	 		 						////alert(kew);
	 		 						var status_length = val.event_Name.length;
	 			             	/* 	if(status_length > 15)
	 			             			{
	 			             				var font_size = "10";
	 			             			}else{
	 			             				var font_size = "12";
	 			             			 }*/
	 			             		//var val_data = '<div class=""><div><span>Altitude :- </span><span>'+val.altitude+'</span></div><div><span>Battery :- </span><span>'+val.bat+'</span></div><div><span>Distance :- </span><span>'+val.distance+'</span></div><div><span>Latitude :- </span><span>'+val.latitude+'</span></div><div><span>Longitude :- </span><span>'+val.longitude+'</span></div><div><span>Report Type :- </span><span>'+val.report_type+'</span></div><div><span>Sensor Id :- </span><span>'+val.sensor_id+'</span></div><div><span>Speed :- </span><span>'+val.speed+'</span></div><div><span>UTC TIME :- </span><span>'+val.utc+'</span></div><div><span>Internal Temperature :- </span><span>'+val.internal_temperature+'</span></div><div><span>Mode of Transport :- </span><span>'+val.mode_of_Transport+'</span></div><div><span>Message Number :- </span><span>'+val.message_Number+'</span></div><div><span>Temp Measurment :- </span><span>'+val.temp_Measurment+'</span></div><div><span>Shipment Id :- </span><span>'+val.shipment_Id+'</span></div><div><span>Shipment Num :- </span><span>'+val.shipment_Num+'</span></div><div><span>Device Id :- </span><span>'+val.device_Id+'</span></div><div><span>Event Name :- </span><span>'+val.event_Name+'</span></div><div><span>Event S.No :- </span><span>'+val.event_SNo+'</span></div></div>';
	 			             		//var val_data = val.altitude;
	 			             		var key = kew+1;
	 			             		var theDate = new Date( Date.parse(val.event_Exec_Date));
	 			               		var date_create = theDate.toLocaleDateString();
	 			             		/* if(val.event_Status == "Completed"){
	 			         
	 			             			var eventsboxes = '<tr><td class="p-1"></td><td class="" style="font-size: 10px;padding:1px;"><input type="text" class="mb-1 form-control" value="'+val.event_Id+'" style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 40px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;"   disabled="disabled"/> </td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="partner_name_'+val.event_Id+'" value="'+val.partner_From+'" style="text-align:center;height:25px;font-size: 12px;font-weight:bold;" disabled="disabled" /></td><td class="pl-1"><input type="text"  disabled="disabled" class="form-control mb-1  inputboxesevents" id="event_name_'+val.event_Id+'" value="'+val.event_Name+'" style="height:25px;font-size: 12px;font-weight:bold;" /></td><td class="pl-1"><input type="text" disabled="disabled" class="form-control mb-1 inputboxesevents" id="event_date_'+val.event_Id+'" value="'+date_create+'" placeholder="Select Date" style="height:25px;font-size: 12px;font-weight:bold;" /></td></tr>';
	 			             		}else{
	 			             			var eventsboxes = '<tr><td class="p-1"><input type="radio" name="event" style="width:14px;" value="'+val.event_Id+'"/></td><td class="" style="font-size: 10px;padding:1px;"><input type="text" class="mb-1 form-control" value="'+val.event_Id+'" style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 40px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;background: #e9ecef;"   disabled="disabled"/> </td><td class="pl-1"><input type="text"   disabled="disabled" class="form-control mb-1 inputboxesevents" id="partner_name_'+val.event_Id+'" value="'+val.partner_From+'" style="text-align:center;height:25px;font-size: 12px;font-weight:bold;" /></td><td class="pl-1"><input type="text"   disabled="disabled" class="form-control mb-1  inputboxesevents" id="event_name_'+val.event_Id+'" value="'+val.event_Name+'" style="height:25px;font-size: 12px;font-weight:bold;" /></td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents"  disabled="disabled" id="event_date_'+val.event_Id+'" value="'+date_create+'" placeholder="Select Date" style="height:25px;font-size: 12px;font-weight:bold;" /></td></tr>';
	 			             		} */
	 			               	if(val.event_Status == "Completed"){
	 			               	if(val.evidenceList == null || val.evidenceList == "")
		 			        	 {
		 			        	 	var evidence = '<td class="pl-1"><div class="completedBackground eventStatus" id="evidence_list_'+escapeHtml(val.event_Id)+'" style="background:#965664;color:#fff;"><div>No Evidence</div></div></td>';
		 			        	 }else{
		 			        		
		 			        		 var evidence = '<td class="pl-1"><div class="completedBackground eventStatus" id="evidence_list_'+escapeHtml(val.event_Id)+'" style="background:#965664;color:#fff;cursor:pointer;"><div onclick="javascript:return showEvidencePreview(\''+escapeHtml(ship_id)+'\',\''+escapeHtml(val.event_Id)+'\',\''+escapeHtml(val.evidenceList)+'\')"><img src="./images/eye.png" style="width:16px;height:16px;float:left;"/><span style="float:left;margin-left:2px;">Show Evidence</span></div></div></td>';
		 			        	 } eventsboxes = '<tr id="row_val_'+escapeHtml(val.event_Id)+'" class="completedBackground Event_class" style="height:30px;border-bottom: 4px solid #fff;"><td class="p-1"></td><td class="" style="font-size: 10px;padding:1px;"><div class="completedBackground eventNum" id="'+escapeHtml(val.event_Id)+'">'+escapeHtml(val.event_Id)+'</div></td><td class="pl-1"><div class="completedBackground eventBp" id="partner_from_'+escapeHtml(val.event_Id)+'">'+escapeHtml(val.partner_From)+'</div></td><td class="pl-1"><div class="completedBackground eventName" id="event_name_'+escapeHtml(val.event_Id)+'">'+escapeHtml(val.event_Name)+'</div></td><td class="pl-1"><div class="completedBackground eventDate" id="date_'+escapeHtml(val.event_Id)+'">'+escapeHtml(date_create)+'</div></td><td class="pl-1"><div class="completedBackground eventStatus" id="event_status_'+escapeHtml(val.event_Id)+'">'+escapeHtml(val.event_Status)+'</div></td>'+escapeHtml(evidence)+'</tr>';
	 			             		}else{
	 			             			var eventsboxes = '<tr id="row_val_'+escapeHtml(val.event_Id)+'" class="Event_class" style="height:30px;"><td class="p-1"><input type="radio" onclick="javascript:return geteventvalueslist(this.value);" name="event" style="width:14px;" value="'+escapeHtml(val.event_Id)+'" id="'+escapeHtml(val.event_Id)+'"/></td><td class="" style="font-size: 10px;padding:1px;"><div class="eventNum" id="'+escapeHtml(val.event_Id)+'">'+escapeHtml(val.event_Id)+'</div></td><td class="pl-1"><div class="eventBp" id="partner_from_'+escapeHtml(val.event_Id)+'">'+escapeHtml(val.partner_From)+'</div></td><td class="pl-1"><div class="eventName" id="event_name_'+escapeHtml(val.event_Id)+'">'+escapeHtml(val.event_Name)+'</div></td><td class="pl-1"><div class="eventDate" id="date_'+escapeHtml(val.event_Id)+'">'+escapeHtml(date_create)+'</div></td><td class="pl-1"><div class="eventStatus" id="event_status_'+escapeHtml(val.event_Id)+'">'+escapeHtml(val.event_Status)+'</div></td></tr>';
	 			             			
			             		}
	 			             		
	 			             		////alert(eventsboxes);
	 				 				$("#inboxesvalues>tbody").append(eventsboxes);
	 				 				if(val.event_Status == "Completed"){
					               		$(".eventNum").css("width","90px");
					               	}else{
					               		$(".eventNum").css("width","90px");
					               	}
	 				 				$("#event_date_"+val.event_Id).datepicker();

	 				 				
	 		             				//var json_table = 
	 		                  			             						
	 		 						} 
	 		 					////alert(tabletr);
	 		 				});
					
					reset();
				}
				
	 
		}
		});
 }
 function MovetoCompletedShipment()
 {
	 var popupbox = ' <div class="completedShipmentPop"><h3 style="text-align:center;width:94%;float:left;padding-top:3%;">Move To Complete Shipment</h3><span class="close" style="width: 2.7%;height: 50px;float: left;padding: 1% 3% 1% 0%;" onclick="javascript:return closeEvent();">X</span><span style="clear:both;"></span><div id="selecterror" style="text-align: center;color: red;margin-bottom: 6px;"></div><div style="width:70%;margin:auto;text-align:center;margin-top: 2%;" ><button id="CancelEvent" class="bg-color margin-rl1 btn-head"  onclick="javascript:return closeEvent();">Cancel</button><button id="AddEventfrom" class="bg-color margin-rl1 btn-head"  onclick="javascript:CompleteShipmentpage();">Move To Complete Shipment Page</button></div></div>';
	 $("#showPopupCompleteshipment").html(popupbox);
	 $(".body_blur").show();
	 $("#showPopupCompleteshipment").show();
	 
 }
 function closeEvent()
 {
document.location.reload();
	 $(".body_blur").hide().css({"z-index":"1"});
	 $("#showPopupCompleteshipment").hide();
	 
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
         $.each(data,function(key,value){
             //console.log("data below");
             //console.log(data);
             //console.log("data");
             //console.log(data);

             $("#delivery_num").val(value.invoice_Number);
             $("#batch_id").val(value.batch_Id);
             $("#mode_trans").val(value.mode_of_Transport);
             
             $("#fromPlant").val(value.plant);
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
            var tabledata = '<tr id="uploadevidencedata" style=" font-size:12px;"><td><input type="checkbox"/></td><td>'+escapeHtml(value.docId[index])+'</td><td>'+escapeHtml(value.shipment_Id)+'</td><td>'+escapeHtml(value.docCreatedDate[index])+'</td><td>'+escapeHtml(value.typeOfReference[index])+'</td><td>'+escapeHtml(value.evidence_For[index])+'</td><td>'+escapeHtml(value.evidence_Description[index])+'</td><td>'+escapeHtml(value.invoice_Number)+'</td><td>'+escapeHtml(value.shipment_Num)+'</td><td>'+escapeHtml(value.material_number)+'</td><td>'+escapeHtml(value.batch_Id)+'</td><td>'+"<a href='" + url_value + "'>" + Names[index] + "</a>"+'</td><td><input type="button" value="Delete" class="bg-color margin-rl1 btn-head"; onclick="GetSelected()"/></td></tr>';             
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
         //     return false;
              //       }); ///3rd loop
                //     }); ///2nd loop
                 });  
         }                               
          });
 }
 })
 }
 
function closefunction()
{
	document.location.reload();
}
function GetSelected(){
  
         //Reference of the Table.
         var grid = document.getElementById("uploadevidencedata");
         //Reference of the CheckBoxes in Table.
         var checkBoxes = grid.getElementsByTagName("INPUT");        
         var shipment_number = $("#shipment_id").val();
    ///  var shipment_or_invoiceNum= $("#shipment_number").val(); ///is a Delivery Number from UI.
         var deliveryNumber = $("#shipment_number").val();
         var invoiceNumber = $("#delivery_num").val();
               
 //       var message = ""; 
 //       var descMessage = ""; 
 //       var typeOfEvidenceMesg = ""; 
 //       var docid = "";
        
//        var Textmessages = "";
//        var messagesss = "";
          var fileNametext = [];
		  var docid = [];		  
		  var typeofEvidencee = [];
		  var des = [];  
		  var shipment_id = [];
		  var evidenceFor = [];
		  var docCreatedDate = [];
	//    var evidenceDescription = [];
		 
		 		         
        //Loop through the CheckBoxes.
        for (var i = 0; i < checkBoxes.length; i++) {
//      alert(checkBoxes.length);
            if (checkBoxes[i].checked) {
                var row = checkBoxes[i].parentNode.parentNode;
/*              message += row.cells[1].innerHTML;
                message += "   " + row.cells[2].innerHTML;   */
         ///       docid += row.cells[2].innerHTML;
         ///       typeOfEvidenceMesg += "   " +row.cells[5].innerHTML;
         ///       descMessage += "   " + row.cells[7].innerHTML;
         ///       message += "   " + row.cells[11].innerHTML;
         ///       message += "\n";
                
                 docid = row.cells[1].innerText;
                 shipment_id = row.cells[2].innerText;
                 typeofEvidencee = row.cells[4].innerText;  
                 des = row.cells[6].innerText;  
                 fileNametext = row.cells[11].innerText;
                 evidenceFor  = row.cells[5].innerText;
                 docCreatedDate = row.cells[3].innerText;     
            //    var evidenceTypetext = $(typeOfEvidenceMesg).text();
            //    var descText = $(descMessage).text();
            //    var fileNametext = $(message).text();
            //    var docidsss = $(docid).text();
            }            
        }
        //Display selected Row data in Alert Box.
        
    //    alert("text message === fileName    "+fileNametext);
 //       alert("typeOfEvidenceMesg        "+typeOfEvidenceMesg);  
 //       alert("descMessage        "+descMessage);  
    ///     alert("docid     ");
 		/// alert(docid);

/// 		 alert("typeofEvidence  ");
 ///		 alert(typeofEvidencee);   
 		                   
/// 		 alert("fileNametext  ");
 ///		 alert(fileNametext);  
 		 
 ///		  alert("evidence for  ");
 ///		 alert(evidenceFor); 
 		 
 ///		  alert("dates   ");
 	///	   alert(docCreatedDate);    
 		 
 ///		   alert("desc   ");
 ///		 alert(des);                         
            
    ///  var urlofEvidence = $(message).attr("href");
         var urlofEvidence = $(fileNametext).attr("href");
        //alert("urlofEvidence        "+urlofEvidence);        
        if(fileNametext == null || fileNametext == ""){        
//     alert("Please select checkBox to Delete");       
       var correct = '<img src="./images/cross.gif" id="tickimg" style="width:65px;"/>';			
	   $(".body_blur").show().html('<div class="alert alert-danger" role="alert" style="width: 60%;margin: auto;top: 45%;"><div class="float-right" onclick="javascript:return closefunction();">X</div>'+correct+'Select <strong>CheckBox</strong> to delete the File <a href="./UpdateShipmentEvent.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;"></a>.</div>').css({"background":"#000000c2"});       
         setTimeout(function (){
           $(".body_blur").hide()
              		  // Something you want delayed.             		        	    		       	    		       	 
        	    	//window.location.href = 'UpdateShipmentEvent.jsp#FileUploadSuccess';
        	    	//window.reload();
                    location.reload();
              		}, 10000);             		              		             		             
        }
         else if(!fileNametext == null || !fileNametext == "" || fileNametext.length>0){       
            //alert("CheckBox is selected");
            //alert(fileNametext);
            //alert("Length   "+fileNametext.length);
            //alert(row.cells[3].innerHTML);
            //alert("ajax");
///    var fileName = [];		     
///	fileName = fileNametext;
	
///	var evidenceDescription = []; 
	//evidenceDescription = descText;
///	evidenceDescription = des;
	
///	var typeofEvidence = [];
	//typeofEvidence = evidenceTypetext;
///	typeofEvidence = typeofEvidencee;
	
///	var docsIds = [];
///	docsIds = docid;
	    //alert("fileName");
		//alert(fileName);
	//    alert("shipmentNum");
	//	alert(shipment_or_invoiceNum);
	    //alert("evidenceUrl");
	    //alert(urlofEvidence);
/*	    var deleteEvidenceJsonData = {
			"evidenceList" : fileNametext,
			"docId" : docid,
			"shipment_Num" : shipment_or_invoiceNum	
			};*/
	    	 	    
	///    cosole.log("json data");
	///    cosole.log(deleteEvidenceJsonData);
	///	return false;				    
	var url = localStorage.getItem("smaasip")+'/SCMXPert/deleteEvidencefromS3';
		$.ajax({
		url: url,
	//	data:{"fileName":fileNametext,"docId":docid,"shipmentNum": shipment_or_invoiceNum,"typeOfEvidence":typeofEvidencee,"evidenceDescription":des},
///	    data:{"fileName":fileNametext,"docId":docid,"shipmentNum": shipment_or_invoiceNum,"typeOfEvidence":typeofEvidencee,"evidenceFor":evidenceFor,"docsCreatedDate":docCreatedDate,"evidenceDescription":des},
        data:{"fileName":fileNametext,"docId":docid,"shipmentNum":deliveryNumber,"invoiceNumber":invoiceNumber},
   ///  data:{"fileName":fileNametext,"shipmentNum":shipment_or_invoiceNum,"evidenceUrl": urlofEvidence},
    //  data: JSON.stringify(deleteEvidenceJsonData),
	//  data:{"fileName":fileName,"shipmentNum": shipment_or_invoiceNum,"evidenceUrl":urlofEvidence},
	//	type: 'GET',	
	    type: 'POST',		
	/// type: 'DELETE',
	//	dataType: 'json',
		dataType: 'text',	
		headers: {
			'Authorization': localStorage.getItem('SavedToken')
		},
		success: function(response) {              
            //alert('success :  user logged in');
            //alert("success");
            //alert(response);            
         var correct = '<img src="./images/correct.gif" id="tickimg" style="width:65px;"/>';			
		 $(".body_blur").show().html('<div class="alert alert-success" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;"><div class="float-right" onclick="javascript:return closefunction();">X</div>'+correct+'File is Deleted <strong>Successfully</strong> from S3<a href="./UpdateShipmentEvent.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;"></a>.</div>').css({"background":"#000000c2"});						                             								
	     setTimeout(function (){
              		  // Something you want delayed.              		         	    		       	    		        	 
        	    	//window.location.href = 'UpdateShipmentEvent.jsp#FileUploadSuccess';
        	    	//window.reload();
                     location.reload();
              		}, 7000);
},
		error: function(xhr, status, error){
                    //alert("Error!" + xhr.status);
            var correct = '<img src="./images/cross.gif" id="tickimg" style="width:65px;"/>';			
			$(".body_blur").show().html('<div class="alert alert-danger" role="alert" style="width: 60%;margin: auto;top: 45%;"><div class="float-right" onclick="javascript:return closefunction();">X</div>'+correct+'Failed to <strong>Delete</strong> file<a href="./UpdateShipmentEvent.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">  </a>.</div>').css({"background":"#000000c2"});
						                             								
	        setTimeout(function (){           		            		         	    		       	    		        	        	    	        	    	
                     location.reload();
              		}, 7000);
    },				
		});				     
      }              
    }

  /****** Evidence Upload (to AWS S3) Function **********/

   $(document).ready(function() {
   
    $('#submit-button').click(function() {
    
        //alert("success in evdnce");
        //  console.log('Selected file:', $('#file-input')[0].files[0]);
        // Handle submission with the selected file here  
        var fileInput = document.getElementById('file-input');
        if(fileInput.files.length === 0){
		//alert("Select files to upload");
		 var correct = '<img src="./images/cross.gif" id="tickimg" style="width:65px;"/>';
		 $(".body_blur").show().html('<div class="alert alert-danger" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;"><div class="float-right" onclick="javascript:return closefunction();">X</div>'+correct+'Select <strong>files</strong> to upload <a href="./UpdateShipmentEvent.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;"></a>.</div>').css({"background":"#000000c2"});
		 setTimeout(function() {
			  location.reload();
			   }, 7000);
			    return false;
			    }
        
           
        var value=$("input:radio[name=event]:checked").val();     		
		var partner = $("#partner_"+value).text();
		//var partner = $("#partner_name_"+value).val();
  	    var event = $("#event_name_"+value).val();
  	    var datee = $("#event_date_"+value).val();
  	    var event_status = $("#event_status_"+value).text();
        // //alert(event_status);
  	    var evidence = $("#Evidence-"+value).text();
  	    var shipment_number = $("#shipment_id").val();
		var Event_Id = $("#event_id_val").val();
		var Event_Type = $("#event_type_val").val();
	    var devices = $("#devices").val();
		var Partner_From = $("#event_partner_from").val();
		var Event_Reference = $("#event_reference").val();
		var Type_of_Reference1 = $("#typeOfReferences1").val();
		var Type_of_Reference = $("#typeOfReferences").val();
		var Event_Description = $("#event_description").val();
		var Evidence_Description = $("#evidence_description").val();
		//var Evidence_Description = $('#evidence_description').find('textarea[name="evidencedesc[]"]').val();
		var error = document.getElementById("error");
	    var Evidence_For = $("#evidencefor").val();
	    //var shipment_or_invoiceNum= $("#shipment_number").val();
	    var shipment_or_invoiceNum= $("#delivery_num").val();
	    
	    var batch_id= $("#batch_id").val();
	    
	    if(Type_of_Reference1 == ""){
				var text = "Select Type of Evidence";
				error.innerHTML = text;
				$("#typeOfReferences1").focus().css("border","1px solid red");
				return false;
		 }
		if(Evidence_For == ""){
				var text = "Select Evidence For";
				error.innerHTML = text;
				$("#evidencefor").focus().css("border","1px solid red");
				return false;
		 }		         
        var fileName = $("#file-input").val().replace(/C:\\fakepath\\/i, '')
//        alert("fileName");
//        alert(fileName);
//        var fileSelect = document.getElementById('file-input');
//        var totalFiles = fileSelect.files;        
        var formData = new FormData();
        var files = $("#file-input").get(0).files;
        for (var i = 0; i < files.length; i++) {
          formData.append("file", files[i]);        
        }
        formData.append("fileName", fileName);
        //console.log(" length of files total::::::::::");
        //console.log(files.length);             
      	//console.log("formData");
//	    console.log(formData);
//		alert(formData);                           
        //console.log("formData out of for loop");
	    //console.log(formData);	    				        
         var randomfilenames = []
		 var uploadedfileurls = []
         randomfilenames.push(fileName);
//       alert("randomfilenames");
//       alert(randomfilenames);        
        		 var update_json_data = {
					"shipment_Number" : shipment_number,
					"partner" : partner,
					"event" : event,
					"dateandTime" : datee,
					"eventId"  : Event_Id,
					"eventType" :Event_Type,
					"partnerFrom" : Partner_From,
					"eventReferenceNumber"  : Event_Reference,
					"typeOfReference" :Type_of_Reference1,
					"event_Description" : Event_Description,
					"evidence_Description": Evidence_Description,
					"eventStatus":event_status,
					"evidence":evidence,
					"device_Id":devices,
					"batch_Id":batch_id,
					"evidence_For" :Evidence_For,
					"shipment_Num":shipment_or_invoiceNum,
					"evidencelist":randomfilenames
			//		"evidenceURL":uploadedfileurls
					
			}; 
        
          formData.append("data", JSON.stringify(update_json_data));
///       console.log("json data in evidence upload to s3 api");
///          console.log(JSON.stringify(update_json_data));
///		  return false;        
          $.ajax({			 
    	        url: localStorage.getItem("smaasip")+'/SCMXPert/uploadEvidencetoS3',   	   
 //             data: {"fileName":fileidname,"file": formData},
                data: formData,
    	        type: 'post',
    	        dataType: 'json',
                mimeType: "multipart/form-data",
    	        processData: false,
                contentType: false,
				headers: {
			   	     	  	   'Authorization': localStorage.getItem('SavedToken')
			   	     	    },
    	        timeout: 10000,
   	            async: false,
    	       /* error: function(e){
    	        	////alert(fileidname);//alert(imageData);
    	            console.log(e);
    	            alert(fileidname);   	       
    	            alert(formData);

    	            console.log("error in uploadEvidencetoS3");
    	        },*/
    	        success: function(res, status, xhr){   	        
    	        $.each(res,function(key,value){
   // 	        uploadedfileurls.push(value);    	        
    	        });    	        
   // 	        console.log("uploadedfileurls");
   // 	        console.log(uploadedfileurls);    	        
//    	        alert("Success!" + xhr.status);
//    	        alert(res);
 //  	        uploadedfileurls.push(res);
    	        //console.log(res);
    	        //console.log("success");
//    	        	alert("success");
    	           /* if(res.ret==0){
    	                //console.log("SUCCESS");
    	                $("#previewImage").prepend('<img src="./Shipment_Data/Graph/'+filename+'.pdf"/>');
    	            }else{
    	                //console.log("FAIL : " + res.msg);
    	            }*/    	               	            
    	 var correct = '<img src="./images/correct.gif" id="tickimg" style="width:65px;"/>';			
		 $(".body_blur").show().html('<div class="alert alert-success" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;"><div class="float-right" onclick="javascript:return closefunction();">X</div>'+correct+'File uploaded <strong>successfully</strong> <a href="./UpdateShipmentEvent.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;"></a>.</div>').css({"background":"#000000c2"});
						                             								
	     setTimeout(function (){
              		  // Something you want delayed.              		         	    		       	    		        	 
        	    	//window.location.href = 'UpdateShipmentEvent.jsp#FileUploadSuccess';
        	    	//window.reload();
                     location.reload();
              		}, 10000); 	           	            	 
    	        },
    	         error: function(xhr, status, error){
                    //alert("Error!" + xhr.status);
    },   	        
    	    });             
    });
  });