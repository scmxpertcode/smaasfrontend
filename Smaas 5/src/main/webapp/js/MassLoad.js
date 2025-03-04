/*function dropdown()
{
    
  var x = document.getElementById("fileupload");
  if (x.style.display === "none") {
	x.style.display = "block";
   
  } else {
	x.style.display = "none";
	//x.style.display = "block"
  }
}*/

$(function() {
	var Role = $.session.get('Role');

	var UserIds = $.session.get('UserId');

	var UserId = UserIds;
	var useridsplit = UserId.split('-');
	useridsplit[0].toString();
	useridsplit[0] + "";
	useridsplit[1].toString();
	useridsplit[1] + "";

	
	 $.ajax({
//    url: localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0],
///   url: localStorage.getItem("smaasip")+"/SCMXPert/getDevicesWithBatteryPercentage/"+useridsplit[0],
      url: localStorage.getItem("smaasip")+"/SCMXPert/getAvailableDevicesWithPercentage/"+useridsplit[0],
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
			///   console.log(data.evidenceFor);
			///   console.log("times");
		//	alert(values);
			////alert(values.from+','+values.to+','+values.primary_Mode_Of_Transport);
			 var select_evidenceFor_items = '<option value="'+escapeHtml(values)+'">'+escapeHtml(values)+'</option>';			
			 $("#evidencefor").append(select_evidenceFor_items);
			 //typeOfReferences_select.push(select_typeOfReferences_items); 
		});
		//The below commented for each is previously used to show devies dropdown in massload(this one shows all devices in dropdown which have status as Available)
/*		$.each(data.device_Id,function(keys,values){
        					//////
        					 var select_device_Id_items = '<option value="'+escapeHtml(values).split(" ")[0]+'">'+escapeHtml(values)+'</option>';
            				 $("#devices").append(select_device_Id_items);			 
            				 //////////
        				});  
	             var selectOther = '<option value="other">Other</option>';
				 $("#devices").append(selectOther);	*/
		}
		});
	});
	
	
	 // Event listener for plant dropdown
    $("#plantName").change(function() {
		
        var selectedPlant = $(this).val();        
            // Clear existing options in the iotIds dropdown
        const deviceIdsDropdown = $("#devices");
        
        if (!selectedPlant) {
            deviceIdsDropdown.empty();
            deviceIdsDropdown.append(new Option("--Select plant first--", ""));
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
    
        deviceIdsDropdown.empty();

        // Fetch iotIds from the backend
        $.ajax({
            url: localStorage.getItem("smaasip")+"/SCMXPert/availableDeviceIdsForPlant/"+selectedPlant,
            type: "GET",
            //data: { plant: selectedPlant },
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
				
/*			    const loadingElement = $('<div id="loading-spinner">Loading Device IDs...</div>');
                $("#devices").before(loadingElement);
                 
                const timeout = setTimeout(() => {
                $("#loading-spinner").remove();
                }, 3000);
				
                // Clear existing options in iotIds dropdown
                const deviceIdsDropdown = $("#devices");
                deviceIdsDropdown.empty();*/
                
                deviceIdsDropdown.append(new Option("--Select Device--", ""));

                // Populate with new iotIds
               if (response.length > 0) {
                 $.each(response,function(keys,values){
        					//////
        					 var select_device_Id_items = '<option value="'+escapeHtml(values).split(" ")[0]+'">'+escapeHtml(values)+'</option>';
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
    });
      
/****** Upload Evidence (to AWS S3) Function **********/				
	
 $(document).ready(function() {
	   
    $('#submit-button').click(function() {
		
	  //var error = document.getElementById("errorselect");
	  //var invoiceNumber = $("#invoiceNumber").val();
	  //var nameofEvent = $("#nameofEvent").val();
	  //var eventStatus = $("#eventStatus").val();
	  //var devices = $("#devices").val();
	 ///var typeOfEvidence = $("#typeOfEvidence").val();
	 ///var evidenceFor = $("#evidenceFor").val();
	 ///var evidenceDescription = $("#evidenceDescription").val();
		
		var value=$("input:radio[name=event]:checked").val();     		
		//var partner = $("#partner_"+value).text();
		//var partner = $("#partner_name_"+value).val();
  	    //var event = $("#event_name_"+value).val();
  	    //var datee = $("#event_date_"+value).val();
  	    //var event_status = $("#event_status_"+value).text();
        // //alert(event_status);
  	    //var evidence = $("#Evidence-"+value).text();
  	    //var shipment_number = $("#shipment_id").val();
		//var Event_Id = $("#event_id_val").val();
		//var Event_Type = $("#event_type_val").val();
	    var devices = $("#devices").val();
		//var Partner_From = $("#event_partner_from").val();
		//var Event_Reference = $("#event_reference").val();
		var Type_of_Reference1 = $("#typeOfReferences1").val();
		var Type_of_Reference = $("#typeOfReferences").val();
		//var Event_Description = $("#event_description").val();
		var Evidence_Description = $("#evidence_description").val();
	    //var Evidence_Description = $('#evidence_description').find('textarea[name="evidencedesc[]"]').val();
		var error = document.getElementById("error");
	    //var Evidence_For = $("#evidencefor").val();
	    var Evidence_For = "Invoice";
	    //var shipment_or_invoiceNum= $("#shipment_number").val();
	    var shipment_or_invoiceNum= $("#delivery_num").val();
	    var invoiceNum = $("#invoiceNumForEvidence").val();
	    	    
	    var deliveryNum = $("#deliveryNum").val();	    
	    //var batch_id= $("#batch_id").val();
	    					
		var fileInput = document.getElementById('file-input');
		var fileName = $("#file-input").val().replace(/C:\\fakepath\\/i, '')
				
		if ((invoiceNum == "") && (deliveryNum == "")) {
			var text = "Enter Invocie Number or Delivery Number";
			error.innerHTML = text;
			$("#invoiceNumForEvidence,#deliveryNum").focus().css("border", "1px solid red");
			return false;
		}
		else if (invoiceNum !== "" && deliveryNum !== "") {
			var text = "Enter only one: either Invoice Number or Delivery Number";
			error.innerHTML = text;
			$("#invoiceNumForEvidence, #deliveryNum").focus().css("border", "1px solid red");
			return false;
		}
		else {
			$("#invoiceNumForEvidence,#deliveryNum").focus().css("border", "1px solid #CCC");
			error.innerHTML = "";
		} 
				
		if (fileInput.files.length === 0) {
			//alert("Select files to upload");
			var correct = '<img src="./images/cross.gif" id="tickimg" style="width:65px;"/>';
			$(".body_blur").show().html('<div class="alert alert-danger" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;"><div class="float-right" onclick="javascript:return closefunction();">X</div>' + correct + 'Select <strong>files</strong> to upload <a href="./UpdateShipmentEvent.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;"></a>.</div>').css({ "background": "#000000c2" });
			setTimeout(function() {
				location.reload();
			}, 7000);
			return false;
		}
								
/*		 if(evidenceDescription	 == ""){
				var text = "Enter Description";
				error.innerHTML = text;
				$("#evidenceDescription").focus().css("border","1px solid red");
				return false;
		 }*/
/*		 if(typeOfEvidence	 == ""){
				var text = "Select Type of Evidence";
				error.innerHTML = text;
				$("#typeOfEvidence").focus().css("border","1px solid red");
				return false;
		 }*/		 
		if (Type_of_Reference1 == "") {
			var text = "Select Type of Evidence";
			error.innerHTML = text;
			$("#typeOfReferences1").focus().css("border", "1px solid red");
			return false;
		}
		 if(Evidence_For	 == ""){
				var text = "Select Evidence For";
				error.innerHTML = text;
				$("#evidenceFor").focus().css("border","1px solid red");
				return false;
		 }
		 if($("#file-input").val() == ""){
				var text = "Select File";
				error.innerHTML = text;
				$("#file-input").focus().css("border","1px solid red");
				return false;
		 }

/*		console.log("invoiceNumber is "+invoiceNumber);
		console.log("nameofEvent is "+nameofEvent);
		console.log("eventStatus is "+eventStatus);
		console.log("evidenceDescription is "+evidenceDescription);
		console.log("devices is "+devices);
		console.log("typeOfEvidence is "+typeOfEvidence);
		console.log("evidenceFor is "+evidenceFor);
		console.log("fileInput is "+fileInput);
		console.log("fileName is "+fileName);*/
		
		var formData = new FormData();
		var files = $("#file-input").get(0).files;
		 for (var i = 0; i < files.length; i++) {
          formData.append("file", files[i]);        
        }
        formData.append("fileName", fileName);
        
         var randomfilenames = []
		 var uploadedfileurls = []
         randomfilenames.push(fileName);
/*        		 var update_json_data = {
					"invoiceNumber" : invoiceNumber,
					"nameofEvent" : nameofEvent,
					"eventStatus" : eventStatus,
					"evidenceDescription" : evidenceDescription,
					"devices"  : devices,
					"typeOfEvidence" :typeOfEvidence,
					"evidenceFor" : evidenceFor,
					"evidencelist":randomfilenames
					
			}; */
							
			 var update_json_data = {
					//"shipment_Number" : shipment_number,
					//"partner" : partner,
					//"event" : event,
					//"dateandTime" : datee,
					//"eventId"  : Event_Id,
					//"eventType" :Event_Type,
					//"partnerFrom" : Partner_From,
					//"eventReferenceNumber"  : Event_Reference,
					"typeOfReference" :Type_of_Reference1,
					//"event_Description" : Event_Description,
					"evidence_Description": Evidence_Description,
					//"eventStatus":event_status,
					//"evidence":evidence,
					"device_Id":devices,
					//"batch_Id":batch_id,
					"evidence_For" :Evidence_For,
					//"shipment_Num":shipment_or_invoiceNum,
					"invoice_Num":invoiceNum,
					"evidencelist":randomfilenames,
					"deliveryNumber":deliveryNum
			//		"evidenceURL":uploadedfileurls
					
			}; 
        
          formData.append("data", JSON.stringify(update_json_data));
    //      console.log(JSON.stringify(update_json_data));
	//	  return false; 	
		$.ajax({			 
    	        url: localStorage.getItem("smaasip")+'/SCMXPert/uploadEvidencefromMassLoad',   	   
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
    	        success: function(res, status, xhr){   	        
    	        $.each(res,function(key,value){
    	        });    	        
    	 var correct = '<img src="./images/correct.gif" id="tickimg" style="width:65px;"/>';			
		 $(".body_blur").show().html('<div class="alert alert-success" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;"><div class="float-right" onclick="javascript:return closefunction();">X</div>'+correct+'File uploaded <strong>successfully</strong> <a href="./UpdateShipmentEvent.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;"></a>.</div>').css({"background":"#000000c2"});
						                             								
	     setTimeout(function (){
                     location.reload();
              		}, 10000);    	           	            	 
    	        },
    	         error: function(xhr, status, error){
              },   	        
    	 });
	}); 				
});
/****** End of Upload Evidence (to AWS S3) Function **********/		

function limitSelection() {
    const dropdown = document.getElementById('devices');
    const selectedOptions = dropdown.selectedOptions;

    if (selectedOptions.length > 5) {
        // Deselect the last selected option
        selectedOptions[selectedOptions.length - 1].selected = false;
      ///  alert('You can select a maximum of 5 options');
		var error = '<img src="./images/cross.gif" id="tickimg" style="width:65px;"/>';
		$(".body_blur").show().html('<div id="autoCloseAlert" class="alert alert-danger" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;"><div class="float-right" onclick="javascript:return closefunctionforupdateevent();">X</div>' + error + 'You can select a maximum of <strong>5</strong> options <a href="./MassLoad.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;"></a>.</div>').css({ "background": "#000000c2" });
		setTimeout(function() {
			 // Close the alert after 8 seconds
			$("#autoCloseAlert").fadeOut(500, function() {
				$(".body_blur").fadeOut(500); // Fade out .body_blur with the same duration
			});
		}, 6000);		
    }
}
		
		
/****** Update Device_Id/Event Status Function **********/
	$("#submitParams").on("click",function(){		
		
		var invoiceNumber = $("#invoiceNumber").val();
		var eventName = $("#nameofEvent").val();
		var eventStatus = $("#eventStatus").val();
		var deviceId = $("#devices").val();		
		var numberOfDevices = 0;
		var deviceIdArray = [];
		var deliveryNumber = $("#deliveryNumber").val();
		
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
		
/*		if (invoiceNumber == "") {
			var text = "Enter Invoice Number";
			error.innerHTML = text;
			$("#invoiceNumber").focus().css("border", "1px solid red");
			return false;
		}*/		
		if ((invoiceNumber == "") && (deliveryNumber == "")) {
			var text = "Enter Invocie Number or Delivery Number";
			error.innerHTML = text;
			$("#invoiceNumber,#deliveryNumber").focus().css("border", "1px solid red");
			return false;
		}
		else if (invoiceNumber !== "" && deliveryNumber !== "") {
			var text = "Enter only one: either Invoice Number or Delivery Number";
			error.innerHTML = text;
			$("#invoiceNumber, #deliveryNumber").focus().css("border", "1px solid red");
			return false;
		}
		else {
			$("#invoiceNumber,#deliveryNumber").focus().css("border", "1px solid #CCC");
			error.innerHTML = "";
		} 	
				
		if((eventName == "") && (eventStatus == "") && (deviceId == "") && (invoiceNumber != "")){
			var text = "Enter Event Name and Event Status / Device Id";
			error.innerHTML = text;
			$("#nameofEvent,#eventStatus").focus().css("border", "1px solid red");
			return false;
		}
		else {
			$("#nameofEvent,#eventStatus").focus().css("border", "1px solid #CCC");
		}
/*		if (deviceId && !eventName && !eventStatus) {
			alert('You must fill either eveName and eveStatus or just id.');
			return false;
		}*/

		// Check if both eveName and eveStatus are filled and id is empty
/*		if (!deviceId && eventName && eventStatus) {
			alert('You must fill either eveName and eveStatus or just id.');
			return false; // Prevent form submission
		}*/
		
/*		if((eventName == "") && (eventStatus == "")){
			var text = "Enter Event Name and Event Status / Device Id";
			error.innerHTML = text;
			$("#nameofEvent,#eventStatus").focus().css("border", "1px solid red");
			return false;
		}
		else {
			$("#nameofEvent,#eventStatus").focus().css("border", "1px solid #CCC");
		}*/
/*		if(deviceId == ""){
			var text = "Enter Device Id";
			error.innerHTML = text;
			$("#deviceId").focus().css("border", "1px solid red");
			return false;
		}*/
	    
	    if(deviceId == "other"){
			  var otherDeviceId = document.getElementById('fixture-use-txt');
			  deviceId = otherDeviceId.value;
			  ///alert("device id");
			  ///alert(deviceId);  	
		}
/*		   var selectedOption = document.getElementById('devices');		    
	  		if (selectedOption.value === 'other') {	
				  	alert("inside 3");							 
         		selectedOption.value = this.value;
         		alert(selectedOption.value);
      		}*/
        deviceId = String(deviceId);
		deviceIdArray = deviceId.split(',');
        //console.log("deviceIdArray when the use hits the submit");
        //console.log(deviceIdArray);
		//var [device1, device2, device3] = deviceIdArray;
		//console.log(deviceId);
		numberOfDevices = deviceIdArray.length;
		//console.log(numberOfDevices);
		     
/*		if(deviceIdArray.length == 1){
			    deviceIdArray[1] = "";
				deviceIdArray[2] = "";
		  		deviceIdArray[3] = "";
		  		deviceIdArray[4] = "";
		}
		if(deviceIdArray.length == 2){
		  		deviceIdArray[2] = "";
		  		deviceIdArray[3] = "";
		  		deviceIdArray[4] = "";
		}
		if(deviceIdArray.length == 3){
		  		deviceIdArray[3] = "";
		  		deviceIdArray[4] = "";
		}
		if(deviceIdArray.length == 4){
		  		deviceIdArray[4] = "";
		}*/
		// Ensure the array has exactly 5 elements
while (deviceIdArray.length < 5) {
    deviceIdArray.push("");  // Fill missing devices with empty strings
}
	    //console.log("complete array");
        //console.log(deviceIdArray);
        //console.log("Lenght of the array");
        //console.log(deviceIdArray.length);
        
        var primaryDevice = deviceIdArray[0];
        var secondDevice = deviceIdArray[1];
        var thirdDevice = deviceIdArray[2];
        var fourthDevice = deviceIdArray[3];
        var fifthDevice = deviceIdArray[4];
       
		//console.log("Individual device Ids");
        //console.log(deviceId);
        //console.log(primaryDevice);  
        //console.log(secondDevice); 
		//console.log(thirdDevice);
		//console.log(fourthDevice);
		//console.log(fifthDevice);
		    	  
		var update_json_data = {
			"invoiceNumber": invoiceNumber,
			"deliveryNumber": deliveryNumber,
		//	"deviceId": deviceId,
			"deviceId":primaryDevice,
			"partner": partner,
			"partnerFrom": UserName,
			"eventName": eventName,
			"eventStatus": eventStatus,
			"secondDevice":secondDevice,
			"thirdDevice":thirdDevice,
			"fourthDevice":fourthDevice,
			"fifthDevice":fifthDevice,
			"numberOfDevices":numberOfDevices
		};
		
//		console.log(JSON.stringify(update_json_data));
//	    return false;
		
		$.ajax({
			type: 'post',
			url: localStorage.getItem("smaasip")+'/SCMXPert/updateDeviceandEventStatus',	
			dataType: 'json',
			headers: {
				'Content-Type' : "application/json",
				'Authorization': localStorage.getItem('SavedToken')
			},
			data: JSON.stringify(update_json_data),
			//data:{"invoiceNumber":invoiceNumber,"deliveryNumber":deliveryNumber, "deviceId":deviceId,"partner":partner,"partnerFrom":UserName,"eventName":eventName,"eventStatus":eventStatus},
			beforeSend: function() {
				// $("#loading-image").show(z);
				var loading = '<img src="./images/loading.gif" id="loadingimg"/>';
				$(".body_blur").show().html(loading).css({ "background": "#000000c2" });
				$("#loadingimg").show();
			},					
			success: function(response) {

				var correct = '<img src="./images/correct.gif" id="tickimg" style="width:65px;"/>';
				$(".body_blur").show().html('<div class="alert alert-success" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;"><div class="float-right" onclick="javascript:return closefunction();">X</div>' + correct + 'Updated Device/Event Status <strong>Successfully</strong> <a href="./MassLoad.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;"></a>.</div>').css({ "background": "#000000c2" });

				setTimeout(function() {
					location.reload();
				}, 6000);
							
		      if(response.Status == false){
						
				var error = '<img src="./images/cross.gif" id="tickimg" style="width:65px;"/>';
				$(".body_blur").show().html('<div class="alert alert-danger" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;"><div class="float-right" onclick="javascript:return closefunction();">X</div>' + error + 'Selected Event Status is not Initialized, so <strong>failed</strong> to update <a href="./MassLoad.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;"></a>.</div>').css({ "background": "#000000c2" });
				
					setTimeout(function() {
					location.reload();
				}, 9000);
														
			 }								
		    },
		    error: function(xhr, status, error) {				
				var error = '<img src="./images/cross.gif" id="tickimg" style="width:65px;"/>';
				$(".body_blur").show().html('<div class="alert alert-danger" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;"><div class="float-right" onclick="javascript:return closefunction();">X</div>' + error + 'Selected Event Status is not Initialized, so <strong>failed</strong> to update <a href="./MassLoad.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;"></a>.</div>').css({ "background": "#000000c2" });
			},

		});   //closing ajax
	});       //closing on click function


/****** End of Update Device_Id/Event Status Function **********/

/****** Use the Function addInvoiceNumber() for entering multiple Invoice Numbers 
  in Invoice input field of Mass Load page  **********/
function addInvoiceNumber(){
var newInvoiceNumNew = $("#invoiceNumber").val();
 if(NewndcNumNew == ''){
 $("#invoiceNumber").val(newInvoiceNumNew+',');
 }else{
 $("#invoiceNumber").val(newInvoiceNumNew+',');
 }
/*$(".addNDCToPop,.body_blur").show();*/
}


function dropdown1() {
	var x = document.getElementById("download");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
		//   x.style.display = "block"
	}
}


/*let actualBtn = document.getElementById('file-upload');
let fileChosen = document.getElementById('file-chosen');
actualBtn.addEventListener('change', function() {
	fileChosen.textContent = this.files[0].name;
})*/


$('#file-upload').change(function(file) {

	/*    var excelFile = document.getElementById('file-upload');
		var formData = new FormData();
		formData.append("data", JSON.stringify(formData));
		 for (var i = 0; i < excelFile.files.length; i++) {
		 var file = excelFile.files[i];
		 formData.append("excelFile", file);
	  }*/

	var file = document.getElementById('file-upload');
	var formData = new FormData();
	formData.append("file", JSON.stringify(formData));
	for (var i = 0; i < file.files.length; i++) {
		var fileExcel = file.files[i];
		formData.append("file", fileExcel);
	}

	/*     var formData = new FormData();
		 var uploadFiles = document.getElementById('file-upload').files;
		 this.formData.append("file", uploadFiles[0]);*/

	$('#draftTableaa>tbody').empty();
	$('#draftTableaa>tbody>td').css("padding","0px");
	
	
	var UserIds = $.session.get('UserId');
	var UserId = UserIds;
	var useridsplit = UserId.split('-');
	useridsplit[0].toString();
	useridsplit[0] + "";
	useridsplit[1].toString();
	useridsplit[1] + "";
	
	var partnerFrom = $.session.get("UserName");	// Partner Name
	var partnerId = useridsplit[1];					// Partner ID or User ID
		
	formData.append("partnerFrom", partnerFrom);
	formData.append("partnerId", partnerId);

//	return false;
	
	var url = localStorage.getItem("smaasip")+"/SCMXPert/excelfileupload";
//remove here	//console.log(file);
//remove here	//console.log(formData);
	$.ajax({
		url: url,
		type: 'POST',
		data: formData,
		dataType: 'json',
		contentType: false,
		processData: false,
		async: true,
		headers: {
			'Authorization': localStorage.getItem('SavedToken')
		},
		beforeSend: function() {
			var loading = '<img src="./images/loading.gif" id="loadingimg"/>';
			$(".body_blur").show().html(loading).css({ "background": "#000000c2" });
			$("#loadingimg").show();
		},
		success: function(response) {
			//   alert(data.success);
			//   alert("Uploaded successfully")
		//	alert(response);
		//	console.log(response);
	//		return false;
			var response_length = response.length;
//			console.log(response_length);
if(response_length == 0){				
			var correct = '<img src="./images/correct.gif" id="tickimg" style="width:65px;"/>';			
			$(".body_blur").show().html('<div class="alert alert-success" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;"><div class="float-right" onclick="javascript:return closefunction();">X</div>'+correct+'File Uploaded <strong>Successfully</strong>  <a href="./MassLoad.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">Moving to MassLoad Dashboard</a>.</div>').css({"background":"#000000c2"});
			setTimeout(function (){

              		  // Something you want delayed.
              		  //$("#createShipment").hide();
        	    		//Dashboard();
        	    		//after submit
        	  //  		$.cookie("internalshipment",internalshipment);
        	    		//window.location.href = 'MassLoad.jsp#FileUploadSuccess';
        	    	//window.reload();
                     location.reload();
              		}, 6000); 
			
}			
else{
       		  $('.errordiv').append('<button class="bg-color margin-rl1 btn-head" style="position:absolute; left:600px;line-height: 20px;margin-top: 22px;border-radius: 3px;font-weight:bold" id="btnExport">Download Error File</button>');
//			  $('.errordiv').append('<input style="position:absolute; left:600px;line-height: 20px;margin-top: 22px;border-radius: 3px;font-weight:bold" type="button" id="btnExport"/>');	
	//		console.log(response);				
			var correct = '<img src="./images/cross.gif" id="tickimg" style="width:65px;"/>';			
			$(".body_blur").show().html('<div class="alert alert-danger" role="alert" style="width: 60%;margin: auto;top: 45%;"><div class="float-right" onclick="javascript:return closefunction();">X</div>'+correct+'File has <strong>Invalid</strong> Data, Pls. upload the file again   <a href="./MassLoad.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;"> Moving to MassLoad Dashboard</a>.</div>').css({"background":"#000000c2"});
			$.each(response, function(key,val){
                       var tabletr = "<tr><td>"+escapeHtml(val.delivery_number)+"</td><td>"+escapeHtml(val.invoice_number)+"</td><td>"+escapeHtml(val.device_Id)+"</td><td>"+escapeHtml(val.event_name)+"</td><td>"+escapeHtml(val.event_status)+"</td></tr>";
      //               var tablehead = "<table style="font-size:12px;"><tr><tr><th>Delivery No.</th></tr><tr><th>Invoice No.</th></tr><tr><th>Device Id</th></tr><tr><th>Event Name</th></tr><tr><th>Event Status</th></tr></tr></table>";
     //                    $('#draftTableaa>tbody').append(tablehead);  
                       $('#draftTableaa>tbody').append(tabletr);                
                 //    $( "<p>Test</p>").insertAfter( ".errordiv" );
                 		                                 
			});	

/*        $("#btnExport").click(function () {
            $("#draftTableaa").table2excel({
                filename: "MassLoad-ErrorFile"
            });
        });*/
/*   var itemsFormatted = [];
   var itemListobj = {};
   var headers = {
      delivery_number: 'Delivery No.'.replace(/,/g, ''), // remove commas to avoid errors
      invoice_number: "Invoice No.",
      device_Id: "Device Id",
      event_name: "Event Name",
      event_status:"Event Status"
  };*/

//const itemsNotFormatted = response;
  // format the data
//  itemsNotFormatted.forEach((item) => {
  
  
  /*if(item.delivery_number != null || item.delivery_number != ""){
   itemsFormatted.push({
           delivery_number: item.delivery_number.replace(/,/g, ''),
    });
  }
    if(item.invoice_number != null || item.invoice_number != ""){
   itemsFormatted.push({
            invoice_number: item.invoice_number,
    });
  }
    if( item.device_Id != null ||  item.device_Id != ""){
   itemsFormatted.push({
            device_Id: item.device_Id,
    });
  }
    if(item.event_name != null || item.event_name != ""){
   itemsFormatted.push({
            event_name: item.event_name,
    });
  }
    if(item.event_status != null || item.event_status != ""){
   itemsFormatted.push({
            event_status: item.event_status
    });
  }*/
       
/*      itemsFormatted.push({
          delivery_number: item.delivery_number.replace(/,/g, ''), // remove commas to avoid errors,
          invoice_number: item.invoice_number,
          device_Id: item.device_Id,
          event_name: item.event_name,
          event_status: item.event_status
      });*/
      
//  });
  
 //  console.log(itemsFormatted);
 //  var fileTitle = 'MassLoad-error'; // or 'my-unique-title'

 // exportCSVFile(headers, itemsFormatted, fileTitle); // call the exportCSVFile() function to process the JSON and trigger the download
/*        $("#btnExport").click(function () {
            exportAsExcelFile(headers, itemsFormatted, fileTitle);
        });*/
        
         $("#btnExport").click(function () {
            $("#draftTableaa").table2excel({
                filename: "MassLoad_ErrorFile_" + new Date().toJSON().slice(0,10) 
            });
        });
        			
		setTimeout(function (){
             $(".body_blur").hide()
              		  // Something you want delayed.
              		  //$("#createShipment").hide();
        	    		//Dashboard();
        	    		//after submit
        	  //  		$.cookie("internalshipment",internalshipment);
        	    		//window.location.href = 'MassLoad.jsp#FileUploadSuccess';
        	    	//window.reload();
                   // location.reload();
              		}, 8000); 	
                              	             		
}	
									
		},
		error: function(data) {	
	//		alert("Failed to upload the file");			
			var correct = '<img src="./images/cross.gif" id="tickimg" style="width:65px;"/>';			
			$(".body_blur").show().html('<div class="alert alert-danger" role="alert" style="width: 60%;margin: auto;top: 45%;"><div class="float-right" onclick="javascript:return closefunction();">X</div>'+correct+'Failed to Upload, pls. upload <strong>Excel</strong> file<a href="./MassLoad.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">  Moving to MassLoad Dashboard</a>.</div>').css({"background":"#000000c2"});
			setTimeout(function (){

              		  // Something you want delayed.
              		  //$("#createShipment").hide();
        	    		//Dashboard();
        	    		//after submit
        	  //  		$.cookie("internalshipment",internalshipment);
        	    		//window.location.href = 'MassLoad.jsp#FileUploadSuccess';
        	    	//window.reload();
                    location.reload();
              		}, 6000); 
		}
	})
});

function closefunction()
{
	document.location.reload();
}
function closefunctionforupdateevent() {
    // Close the alert immediately when the "X" is clicked
    $("#autoCloseAlert").fadeOut(500);
    // Hide the body blur as well
    $(".body_blur").fadeOut(500);
    return false; // To prevent any default action
}


function dropdown() {
	var x = document.getElementById("uploadfile");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function getTemplate(id) {
	if (id == '') {
		document.location.reload();
	}
	else if (id == 'Delivery Number, Invoice Number, Device Number, Event Status') {
		$("#dids").show();
		$("#uploadfile").show();
		$("#dds").hide();
		$("#ds").hide();
	}
	else if (id == 'Delivery Number, Device Number, Event Status') {
		$("#dds").show();
		$("#uploadfile").show();
		$("#dids").hide();
		$("#ds").hide();

	}
	else if (id == 'Delivery Number, Event Status') {
		$("#ds").show();
		$("#uploadfile").show();
		$("#dids").hide();
		$("#dds").hide();

	}
	else {
		$("#ds").hide();
		$("#uploadfile").hide();
		$("#dids").hide();
		$("#dds").hide();
		document.location.reload();
	}

}

function getErrorFile(id) {
	if (id == '') {
		document.location.reload();
	}
	else if (id == 'Download Error File') {
		$("#errorFileId").show();
		$("#dids").hide();
		$("#dds").hide();
		$("#ds").hide();
		$("#uploadfile").hide();
	}

}


//var TableMarkUp='<table id="myModifiedTable"><thead><tr><td>Delivery_number</td><td>Invoice_number</td><td>Device_Id</td><td>Event_Name</td><td>Event_Status</td></tr></thead><tbody></tbody></table>';

/*var doc =	document.write("<table border=1;id=tableforExcel>");
	+document.write("<TR><TD>Delivery number</TD> <TD>Invoice number</TD> <TD>Device_Id</TD> <TD>Event_Name</TD> <TD>Event_Status</TD></TR>");
	+document.write("<TR><TD></TD> <TD> </TD> <TD></TD> <TD></TD> <TD></TD></TR>");
	+document.write("</table>");*/


/*function DownloadExcelDataList(){

	$("#tableforExcel").tableToCSV({
		filename: 'ExcelDataTemplate-1'
	});
}*/

function DownloadExcelDataList() {

/*	$("#tableforExcel").table2excel({
	//  exclude: ".noExport",
	//	name: "ExcelDataTemplate",
		filename: "MassLoadTemplate-1",
	});*/
	
	// Get the HTML table element
	    var table = document.getElementById("tableforExcel");
	    var table2 = document.getElementById("datainExcelSheet2");
    // Convert the table to a worksheet object 
        var worksheet = XLSX.utils.table_to_sheet(table);
        var worksheet2 = XLSX.utils.table_to_sheet(table2);
    // Create a new workbook 
        var workbook = XLSX.utils.book_new();
    // Add the worksheet to the workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.utils.book_append_sheet(workbook, worksheet2, "Sheet2");
    // Save the workbook as an xlsx file 
        XLSX.writeFile(workbook, "MassLoadTemplate-1.xlsx");
	
}


function DownloadExcelDataList2() {
	
/*		$("#tableforExcel2").table2excel({
	//  exclude: ".noExport",
	//	name: "ExcelDataTemplate",
		filename: "MassLoadTemplate-2",
	});*/
	
	// Get the HTML table element
	    var table = document.getElementById("tableforExcel2");
	    var table2 = document.getElementById("datainExcelSheet2");
    // Convert the table to a worksheet object 
        var worksheet = XLSX.utils.table_to_sheet(table);
        var worksheet2 = XLSX.utils.table_to_sheet(table2);
    // Create a new workbook 
        var workbook = XLSX.utils.book_new();
    // Add the worksheet to the workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.utils.book_append_sheet(workbook, worksheet2, "Sheet2");
    // Save the workbook as an xlsx file 
        XLSX.writeFile(workbook, "MassLoadTemplate-2.xlsx");
	
}


function DownloadExcelDataList3() {
	
/*		$("#tableforExcel3").table2excel({
	//  exclude: ".noExport",
	//	name: "ExcelDataTemplate",
		filename: "MassLoadTemplate-3",
	});*/
	
	// Get the HTML table element
	    var table = document.getElementById("tableforExcel3");
	    var table2 = document.getElementById("datainExcelSheet2");
    // Convert the table to a worksheet object 
        var worksheet = XLSX.utils.table_to_sheet(table);
        var worksheet2 = XLSX.utils.table_to_sheet(table2);
    // Create a new workbook 
        var workbook = XLSX.utils.book_new();
    // Add the worksheet to the workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.utils.book_append_sheet(workbook, worksheet2, "Sheet2");
    // Save the workbook as an xlsx file 
        XLSX.writeFile(workbook, "MassLoadTemplate-3.xlsx");
}


function ErrorFile() {
	
/*		$("#tableforErrorfile").table2excel({
		filename: "MassLoad-ErrorFile",
	});*/
	
	// Get the HTML table element
	    var table = document.getElementById("tableforErrorfile");
    // Convert the table to a worksheet object 
        var worksheet = XLSX.utils.table_to_sheet(table);
    // Create a new workbook 
        var workbook = XLSX.utils.book_new();
    // Add the worksheet to the workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    // Save the workbook as an xlsx file 
        XLSX.writeFile(workbook, "MassLoad-ErrorFile.xlsx");
	
}

/*function DownloadExcel() {
	$("#tableforExcel2").table2excel({
		//     exclude: ".noExport",
		name: "Data",
		filename: "Workbook",
	});
}*/

function convertToCSV(objArray) {
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


function exportAsExcelFile(headers, items, fileTitle) {
    if (headers) {
        items.unshift(headers);
    }

    // Convert Object to JSON
    var jsonObject = JSON.stringify(items);

    var csv = this.convertToCSV(jsonObject);

    var exportedFilenmae = fileTitle + '.csv' || 'export.csv';
    
    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}


function download(){
  var headers = {
      delivery_number: 'Delivery No.'.replace(/,/g, ''), // remove commas to avoid errors
      invoice_number: "Invoice No.",
      device_Id: "Device Id",
      event_name: "Event Name",
      event_status:"Event Status"
  };

  itemsNotFormatted = [
  
   {
          delivery_number: '123963',
          invoice_number: '77',
          device_Id: '78',
          event_name: '79',
          event_status: '4'
      },
      {
          delivery_number: '852364',
          invoice_number: '77',
          device_Id: '78',
          event_name: '79',
          event_status: '4'
      }
  
  ];
  
  }

//  itemsNotFormatted = response;
  

 



