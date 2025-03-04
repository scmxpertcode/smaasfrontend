function CreateNewGeofencemaster(){
	
	////alert("hai saikiran");
	$(".body_blur").show();
	$(".showgeolist").show();
}


function cancelGeofenceMaster(){
	
	////alert("cancel Geofence")
	$(".body_blur").hide();
	$(".showgeolist").hide();
}


function cancelgeofence(){
	////alert("hai jaisai");
	$(".showgeolist").hide();
	$(".body_blur").hide();
}


function ShowGeofenceList(){
	////alert("Hai ShowGeofenceList");
	$(".body_blur").show();
	$(".ShowGeofenceList").fadeIn().css({"width":"65%","height":"70%","background":"#fff","top": "0px","position":"fixed","z-index":"9","margin":"10% 19%","overflow-y":"auto","border-radius":"5px"});
	$(".ShowGeofenceList").html("<div><h3 style='width:98%;margin:0px;text-align:center;padding-top:2%;float:left;'>Geo-Fence List</h3><div style='float:left;font-weight:bold;font-size:14px;padding-top:1%;margin-top:10px;width: 1.7%;height: 30px;' class='close' cursor:pointer onclick='javascript:return CancelGeofenceMasterList();'>X</div></div><table id='showallGeoList' class='table'><thead><tr><th>Geofence Id</th><th>Route Id</th><th>Longitude</th><th>Latitude</th><th>Radius</th><th>Units</th><th>Action</th></tr></thead><tbody></tbody></table>")
	$("#ShowGeofenceList").css({"font-size":"12px","font-weight":"bold"}); 
		
}

function CancelGeofenceMasterList(){
	
	$(".ShowGeofenceList").hide();
	$(".body_blur").hide();
	
}