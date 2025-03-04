 $(function() {
	 var UserId = $.session.get('UserId');
	 	if(UserId == undefined)
			{
	 			window.location.href = "index.jsp";
			}
			var jk ="null"
			escapeHtml(jk)
	 	var UserName = $.session.get('UserName');
		var CustomerName = $.session.get('CustomerName');
			var Cust_Id = $("#Cust_Id").val();
		var UserId = $.session.get('UserId');
		var Role = $.session.get('Role');
		var RolePermission = $.session.get('RolePermission');
		var useridsplit = UserId.split('-');
		useridsplit[0].toString();
		useridsplit[0] + "";
		useridsplit[1].toString();
		useridsplit[1] + "";
		$("#customer_Name").text(CustomerName);
		$("#cust_name").val(CustomerName);
		$("#bp_name_f").text(UserName);
		$("#bp_name").val(UserName);
		$("#scmid,#Cust_Id").val(useridsplit[0]);
		$("#bpi_idchange").val(UserId);
	 getAllGoods();
	 AllGoods();
	 //var Cust_Id = $("#Cust_Id").val();
	 goodsIdIncrement(useridsplit[0]);
	 var GoodsMasterGetRoute = localStorage.getItem("smaasip")+"/SCMXPert/getGoods/"+useridsplit[0];
/*	 $("#goods_id_vaal").on("change",function(){
	 	var Good_id = $(this).val();	
	 	GoodDetailsWithId(Good_id,GoodsMasterGetRoute,Cust_Id);
	 	 
	 });*/
	 
	 
$(".body_blur1").on("click",function(){
		 
		 kaja();
	 })
	 
	 
	 
	 $("#CancelEvent,.close").on("click",function(){
		 $("#goodstypevalue").val('');
		 $("#AddGoods").attr("disabled",false).css("background","#894151e3");
		
	 });
	 $(".body_blur").on("click",function(){
		 $(".body_blur").hide();
		 $(".showallGoods").fadeOut().empty();
	 });
	 var RouteMasterGetGood = localStorage.getItem("smaasip")+"/SCMXPert/getGoods/"+useridsplit[0];
	 $("#goodstypevalue").keydown(function(){
			//$(".showprelocationf").html('');
		 
			var value_data = $(this).val();
			
			if(value_data.length >= 2){
			
				$(".showpreGoods").empty();
				//$("#AddGoods").attr("disabled",false).css("background","#894151e3");
			var expression = new RegExp(value_data,"i");
		
	/*		$.getJSON(RouteMasterGetGood,function(data){
				$.each(data,function(key,value){
					////alert(value.goods_Item);
//					//alert(value.from);
					if(value.goods_Item.search(expression) != -1)
					//if(value.goods_Item == value_data)
						{
						////alert(value.goods_Item)
						//$("#AddGoods").attr("disabled",true).css("background","gray");
							$(".showpreGoods").append("<div style='width:60%;text-indent: 10px;font-weight: 600;margin: auto;margin-top:2px;background: #965664b8;color: #fff;padding: 2px 0px;border-radius: 2px'>"+value.goods_Item+"</div>")
						}else{
					//$("#AddGoods").attr("disabled",false).css("background","#894151e3");
						}
				});
			});*/
					$.ajax({
    url: RouteMasterGetGood,
    type : "GET",
    dataType: 'json',
	headers: {
		   	     	   'Authorization': localStorage.getItem('SavedToken')
		   	     	  	   },
    success:function(data){
 	$.each(data,function(key,value){
					////alert(value.goods_Item);
//					//alert(value.from);
					if(value.goods_Item.search(expression) != -1)
					//if(value.goods_Item == value_data)
						{
						////alert(value.goods_Item)
						//$("#AddGoods").attr("disabled",true).css("background","gray");
							$(".showpreGoods").append("<div style='width:60%;text-indent: 10px;font-weight: 600;margin: auto;margin-top:2px;background: #965664b8;color: #fff;padding: 2px 0px;border-radius: 2px'>"+value.goods_Item+"</div>")
						}else{
					//$("#AddGoods").attr("disabled",false).css("background","#894151e3");
						}
				});
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
			}else{
				
				$(".showpreGoods").empty();
				$("#AddGoods").attr("disabled",false).css("background","#894151e3");
				}
		});
 });
 
function addGoodsType()
{
	$(".AddEventBlock,.body_blur").show();
}

function goodsIdIncrement(Cust_Id)
{
	/*$.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/getIncrementedGoodsId/"+Cust_Id,function(response){
		$("#GoodNumber").val(response.incrementedid).css("font-weight","bold").attr("disabled","disabled");
	});*/
			$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getIncrementedGoodsId/"+Cust_Id,
    type : "GET",
    dataType: 'json',
	headers: {
		   	     	   'Authorization': localStorage.getItem('SavedToken')
		   	     	  	   },
    success:function(response){
  	$("#GoodNumber").val(response.incrementedid).css("font-weight","bold").attr("disabled","disabled");
	}
		});	
}
function getAllGoods()
{
	var Cust_Id = $("#Cust_Id").val();
$("#items").empty();
	$("#items").append('<option value="">Create New Good</option>');
/*	$.getJSON(localStorage.getItem("smaasip")+"/SCMXPert/getGoods/"+Cust_Id,function(response){
		$.each(response,function(key,value){
			var Goods = '<option value="'+value.goods_Item+'">'+value.goods_Item+'</option>';
			$("#items").append(Goods);
			$("#goods_id_vaal").append(Goods);
			/*var goods_Status = '<option value="'+value.goods_Status+'">'+value.goods_Status+'</option>';
			$("#Status").append(goods_Status);*/
//		});
		
//	});*/
			$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getGoods/"+Cust_Id,
    type : "GET",
    dataType: 'json',
	headers: {
		   	     	   'Authorization': localStorage.getItem('SavedToken')
		   	     	  	   },
    success:function(response){
	$.each(response,function(key,value){

			//var Goods = '<option value="'+value.goods_Item+'">'+value.goods_Item+'</option>';
			var Goods = $('<option value=""></option>');
			Goods.attr('value',value.goods_Item);
			Goods.text(value.goods_Item);
			

			$("#items").append(Goods);
			$("#goods_id_vaal").append(Goods);
			/*var goods_Status = '<option value="'+value.goods_Status+'">'+value.goods_Status+'</option>';
			$("#Status").append(goods_Status);*/
		});
		
	}
		
		});
}
function SelectGood(goodItem)
{
		var Cust_Id = $("#Cust_Id").val();
	var UserId = $.session.get('UserId');
	if(goodItem == ''){
		location.reload(true);
	}else{
	var GoodsMasterGetRoute = localStorage.getItem("smaasip")+"/SCMXPert/getGoods/"+Cust_Id;
	GoodDetailsWithId(goodItem,GoodsMasterGetRoute,Cust_Id);
	}
}
function addGoodsNew()
{
	//var goodstype = cap($("#goodstypevalue").val());
	var goodstype = $("#goodstypevalue").val();
	if(goodstype == '')
		{
		var txt = "Please Enter Goods Item";
		error.innerHTML = txt;
		return false;
		}else{
	var optionValues =[];
	var error = document.getElementById("selecterror");
	var dropdownvalues = [];
	$("#items option").each(function(){
		
		var values = $(this).attr('value');
		dropdownvalues.push(values);
	});
	var droper = dropdownvalues.filter(function(item){
		return item == goodstype;
	});
	if(droper != '')
		{
			var txt = "This Item is already Exits";
			error.innerHTML = txt;
			return false;
		}
	if(droper == '')
		{
			$("#items").append('<option value="'+escapeHtml(goodstype)+'">'+escapeHtml(goodstype)+'</option>');
			$("#items").val(goodstype);
			$(".body_blur").fadeOut();
			$(".AddEventBlock").hide();
			$("#goodstypevalue").val('');
		}
	
	 $('#items option').each(function(){
		    if($.inArray(this.value, optionValues) >-1){
		       $(this).remove()
		    }else{
		       optionValues.push(this.value);
		    }
		 });
	 var UserId = $.session.get('UserId');
		goodsIdIncrement(UserId);
		$("#createGoods").show();
		$("#updateGoods").hide();
		var goodStatus = $("#Status").val('Active');
		var goodDesc = $("#goodsDesc").val('');
		var tempFrom = $("#tempFrom").val('');
		var tempTo = $("#tempTo").val('');
		var humdFrom = $("#humFrom").val('');
		var humdTo = $("#humTo").val('');
		var shockFrom = $("#shockFrom").val('');
		var shockTo = $("#shockTo").val('');
		var tiltFrom = $("#tiltFrom").val('');
		var tiltTo = $("#tiltTo").val('');
		var smellFrom =  $("#smellFrom").val('');
		var smellTo =  $("#smellTo").val('');
		var cust_good_id =  $("#cust_good_id").val('');
		var sensorSelect =  $("#sensorSelect").val('');
		var pressureSelect =  $("#pressureSelect").val('');
		var hazardousSelect =  $("#hazardousSelect").val('');
		var evidenceSelect =  $("#evidenceSelect").val('');
		var tempUnits =  $("#tempUnits").val('');
		var humiUnits =  $("#humiUnits").val('');
		var shockUnits =  $("#shockUnits").val('');
		var tiltUnits =  $("#tiltUnits").val('');
		var smellUnits =  $("#smellUnits").val('');
		var sensorSelect =  $("#sensorSelect").val('');
		var pressureSelect =  $("#pressureSelect").val('');
		var hazardousSelect =  $("#hazardousSelect").val('');
		var evidenceSelect =  $("#evidenceSelect").val('');
		}
}

function createGoods()
{
	var Cust_Id = $("#Cust_Id").val();
	var GoodNumber = $("#GoodNumber").val();
	var goodItem = $("#NewGoodsItem").val();
	var goodStatus = $("#Status").val();
	var goodDesc = $("#goodsDesc").val();
	var tempFrom = $("#tempFrom").val();
	var tempTo = $("#tempTo").val();
	var humdFrom = $("#humFrom").val();
	var humdTo = $("#humTo").val();
	var shockFrom = $("#shockFrom").val();
	var shockTo = $("#shockTo").val();
	var tiltFrom = $("#tiltFrom").val();
	var tiltTo = $("#tiltTo").val();
	var smellFrom =  $("#smellFrom").val();
	var smellTo =  $("#smellTo").val();
	var cust_good_id =  $("#cust_good_id").val();
	var tempUnits =  $("#tempUnits").val();
	var humiUnits =  $("#humiUnits").val();
	var shockUnits =  $("#shockUnits").val();
	var tiltUnits =  $("#tiltUnits").val();
	var smellUnits =  $("#smellUnits").val();
	var sensorSelect =  $("#sensorSelect").val();
	var pressureSelect =  $("#pressureSelect").val();
	var hazardousSelect =  $("#hazardousSelect").val();
	var evidenceSelect =  $("#evidenceSelect").val();
	
	
	/*-----------  validation ----------*/
	
	if (goodItem == "") {
		$("#NewGoodsItem").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#NewGoodsItem").focus().css("border", "1px solid #CCC");
	}
	
	/*if (tempFrom == "") {
		$("#tempFrom").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#tempFrom").focus().css("border", "1px solid #CCC");
	}
	
	if (tempTo == "") {
		$("#tempTo").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#tempTo").focus().css("border", "1px solid #CCC");
	}
	
	if (humdFrom == "") {
		$("#humFrom").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#humFrom").focus().css("border", "1px solid #CCC");
	}
	
	if (humdTo == "") {
		$("#humTo").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#humTo").focus().css("border", "1px solid #CCC");
	}
	
	if (shockFrom == "") {
		$("#shockFrom").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#shockFrom").focus().css("border", "1px solid #CCC");
	}
	
	
	if (shockTo == "") {
		$("#shockTo").focus().css("border", "1px solid red");
		return false;
	} else {
		$("#shockTo").focus().css("border", "1px solid #CCC");
	}
	*/
	
//	if(NewGoodsItem == ""){
//		$("#NewGoodsItem").focus().css("border", "1px solid red");
//		return false;
//	}else {
//		$("#NewGoodsItem").focus().css("border", "1px solid #CCC")
//	}
	
	
	
	var goodsData = {
			"customerId":Cust_Id,
	        "description": goodDesc,
	        "goods_Id": GoodNumber,
	        "goods_Item":goodItem ,
	        "goodsTypeStatus": goodStatus,
	        "temperatureFrom": tempFrom,
	        "temperatureTo": tempTo,
	        "humidityFrom":humdFrom,
	        "humidityTo":humdTo,
	        "shockFrom":shockFrom,
	        "shockTo":shockTo ,
	        "tiltFrom": tiltFrom,
	        "tiltTo": tiltTo,
	        "smellFrom": smellFrom,
	        "smellTo": smellTo,
	        "custGoodId":cust_good_id,
	        "control_Params": '',
	        "tempUnits":tempUnits,
	        "humiUnits":humiUnits,
	        "shockUnits":shockUnits,
	        "tiltUnits":tiltUnits,
	        "smellUnits":smellUnits,
	        "sensorSelect":sensorSelect,
	        "pressureSelect":pressureSelect,
	        "hazardousSelect":hazardousSelect,
	        "evidenceSelect":evidenceSelect
	};

	var url = localStorage.getItem("smaasip")+"/SCMXPert/addNewGood";
	$.ajax({
       	 type:"post",
		 url:url,
		 headers: { Accept : "application/json",
					'Content-Type': "application/json",
					'Authorization': localStorage.getItem('SavedToken') 
			 		},
		 data: JSON.stringify(goodsData),
		 beforeSend: function() {
             // $("#loading-image").show();
             var loading = '<img src="./images/loading.gif" id="loadingimg"/>';
             $(".body_blur1").show().html(loading).css({"background":"#000000c2"});
             $("#loadingimg").show();
           },
	    success: function(data) {
var correct = '<img src="./images/correct.gif" id="tickimg" style="width:65px;"/>';
			
			//var Idb = json_value.userId;
			
			/*$(".showviewdata1")
					.show()   
					.html('<div class="alert alert-success" role="alert" >Business Partner Created <strong> Successfully! </strong> and Your ID is ' + Idb	+ '  <a href="Dashboard.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">Move to Dashboard</a>.</div>');*/
			$(".body_blur1").show().html('<div class="alert alert-success" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;"><div class="close">X</div>'+correct+'Goods Created <strong>Successfully!</strong> <a href="Dashboard.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">Move to Dashboard</a>.</div>').css({"background":"#000000c2"});
	/*    		var Cust_Id = $("#Cust_Id").val();
	    	$(".showviewdata").show().html('<div class="alert alert-success" role="alert" style="margin:0px;">Goods Successful Created</div>');
	     	var UserId = $.session.get('UserId');
   	    	var GoodsMasterGetRoute = localStorage.getItem("smaasip")+"/SCMXPert/getGoods/"+Cust_Id;   		
   		 	var Good_id = "";	
   		
   			$("#goods_id_vaal").val('');
   			goodsIdIncrement(UserId);
   			$("#Status").val("Active");
   		 	GoodDetailsWithId(Good_id,GoodsMasterGetRoute,Cust_Id);*/
	    },
	}); 
}
function GoodDetailsWithId(Good_id,GoodsMasterGetRoute,Cust_Id)
{
	if(Good_id != ''){
	//	//alert(GoodsMasterGetRoute);
		$("#NewGoodsItemNameBox").hide();
	/*	$.getJSON(GoodsMasterGetRoute,function(response){
			//console.log(response);
			$.each(response,function(a,b){
				
				if(b.goods_Item == Good_id)
					{
					$("#createGoods").hide();
					$("#updateGoods").show();
					var GoodNumber = $("#GoodNumber").val(b.goods_Id);
					var goodItem = $("#items").val(b.goods_Item);
					var goodStatus = $("#Status").val(b.goods_Status);
					var goodDesc = $("#goodsDesc").val(b.description);
					var tempFrom = $("#tempFrom").val(b.temperature_From);
					var tempTo = $("#tempTo").val(b.temperature_To);
					var humdFrom = $("#humFrom").val(b.humidity_From);
					var humdTo = $("#humTo").val(b.humidity_To);
					var shockFrom = $("#shockFrom").val(b.shock_From);
					var shockTo = $("#shockTo").val(b.shock_To);
					var tiltFrom = $("#tiltFrom").val(b.tilt_From);
					var tiltTo = $("#tiltTo").val(b.tilt_To);
					var smellFrom =  $("#smellFrom").val(b.smell_From);
					var smellTo =  $("#smellTo").val(b.smell_To);
					var cust_good_id =  $("#cust_good_id").val(b.custGoodId);
					var tempUnits =  $("#tempUnits").val(b.tempUnits);
					var humiUnits =  $("#humiUnits").val(b.humiUnits);
					var shockUnits =  $("#shockUnits").val(b.shockUnits);
					var tiltUnits =  $("#tiltUnits").val(b.tiltUnits);
					var smellUnits =  $("#smellUnits").val(b.smellUnits);
					var sensorSelect =  $("#sensorSelect").val(b.sensorSelect);
					var pressureSelect =  $("#pressureSelect").val(b.pressureSelect);
					var hazardousSelect =  $("#hazardousSelect").val(b.hazardousSelect);
					var evidenceSelect =  $("#evidenceSelect").val(b.evidenceSelect);
					}

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
 		//console.log(response);
			$.each(response,function(a,b){
				
				if(b.goods_Item == Good_id)
					{
					$("#createGoods").hide();
					$("#updateGoods").show();
					var GoodNumber = $("#GoodNumber").val(b.goods_Id);
					var goodItem = $("#items").val(b.goods_Item);
					var goodStatus = $("#Status").val(b.goods_Status);
					var goodDesc = $("#goodsDesc").val(b.description);
					var tempFrom = $("#tempFrom").val(b.temperature_From);
					var tempTo = $("#tempTo").val(b.temperature_To);
					var humdFrom = $("#humFrom").val(b.humidity_From);
					var humdTo = $("#humTo").val(b.humidity_To);
					var shockFrom = $("#shockFrom").val(b.shock_From);
					var shockTo = $("#shockTo").val(b.shock_To);
					var tiltFrom = $("#tiltFrom").val(b.tilt_From);
					var tiltTo = $("#tiltTo").val(b.tilt_To);
					var smellFrom =  $("#smellFrom").val(b.smell_From);
					var smellTo =  $("#smellTo").val(b.smell_To);
					var cust_good_id =  $("#cust_good_id").val(b.custGoodId);
					var tempUnits =  $("#tempUnits").val(b.tempUnits);
					var humiUnits =  $("#humiUnits").val(b.humiUnits);
					var shockUnits =  $("#shockUnits").val(b.shockUnits);
					var tiltUnits =  $("#tiltUnits").val(b.tiltUnits);
					var smellUnits =  $("#smellUnits").val(b.smellUnits);
					var sensorSelect =  $("#sensorSelect").val(b.sensorSelect);
					var pressureSelect =  $("#pressureSelect").val(b.pressureSelect);
					var hazardousSelect =  $("#hazardousSelect").val(b.hazardousSelect);
					var evidenceSelect =  $("#evidenceSelect").val(b.evidenceSelect);
					}

			});
		}
		
		});
	}else{
		goodsIdIncrement(Cust_Id);
		//$("#NewGoodsItemNameBox").show();
		$("#createGoods").show();
		$("#updateGoods").hide();
		var GoodNumber = $("#GoodNumber").val('');
		var goodItem = $("#items").val('');
		var goodStatus = $("#Status").val('Active');
		var goodDesc = $("#goodsDesc").val('');
		var tempFrom = $("#tempFrom").val('');
		var tempTo = $("#tempTo").val('');
		var humdFrom = $("#humFrom").val('');
		var humdTo = $("#humTo").val('');
		var shockFrom = $("#shockFrom").val('');
		var shockTo = $("#shockTo").val('');
		var tiltFrom = $("#tiltFrom").val('');
		var tiltTo = $("#tiltTo").val('');
		var smellFrom =  $("#smellFrom").val('');
		var smellTo =  $("#smellTo").val('');
		var cust_good_id =  $("#cust_good_id").val('');
		var sensorSelect =  $("#sensorSelect").val('');
		var pressureSelect =  $("#pressureSelect").val('');
		var hazardousSelect =  $("#hazardousSelect").val('');
		var evidenceSelect =  $("#evidenceSelect").val('');
		var tempUnits =  $("#tempUnits").val('');
		var humiUnits =  $("#humiUnits").val('');
		var shockUnits =  $("#shockUnits").val('');
		var tiltUnits =  $("#tiltUnits").val('');
		var smellUnits =  $("#smellUnits").val('');
		var sensorSelect =  $("#sensorSelect").val('');
		var pressureSelect =  $("#pressureSelect").val('');
		var hazardousSelect =  $("#hazardousSelect").val('');
		var evidenceSelect =  $("#evidenceSelect").val('');
		
		$(".showviewdata").fadeOut(5000);
	}

}
function UpdateGoods()
{
	var token = $.session.get('Token');
	var Cust_Id = $("#Cust_Id").val();
	var bp_name = $("#bp_name").val();
	var GoodNumber = $("#GoodNumber").val();
	var goodItem = $("#items").val();
	var goodStatus = $("#Status").val();
	var goodDesc = $("#goodsDesc").val();
	var tempFrom = $("#tempFrom").val();
	var tempTo = $("#tempTo").val();
	var humdFrom = $("#humFrom").val();
	var humdTo = $("#humTo").val();
	var shockFrom = $("#shockFrom").val();
	var shockTo = $("#shockTo").val();
	var tiltFrom = $("#tiltFrom").val();
	var tiltTo = $("#tiltTo").val();
	var smellFrom =  $("#smellFrom").val();
	var smellTo =  $("#smellTo").val();
	var cust_good_id =  $("#cust_good_id").val();
	var tempUnits =  $("#tempUnits").val();
	var humiUnits =  $("#humiUnits").val();
	var shockUnits =  $("#shockUnits").val();
	var tiltUnits =  $("#tiltUnits").val();
	var smellUnits =  $("#smellUnits").val();
	var sensorSelect =  $("#sensorSelect").val();
	var pressureSelect =  $("#pressureSelect").val();
	var hazardousSelect =  $("#hazardousSelect").val();
	var evidenceSelect =  $("#evidenceSelect").val();
	var goodsData = {
			
	        "description": goodDesc,
	        "businessId":bp_name,
	        "goods_Id": GoodNumber,
	        "goods_Item":goodItem ,
	        "goodsTypeStatus": goodStatus,        
	        "temperatureFrom": tempFrom,
	        "temperatureTo": tempTo,
	        "humidityFrom":humdFrom,
	        "humidityTo":humdTo,
	        "shockFrom":shockFrom,
	        "shockTo":shockTo ,
	        "tiltFrom": tiltFrom,
	        "tiltTo": tiltTo,
	        "smellFrom": smellFrom,
	        "smellTo": smellTo,
	        "custGoodId":cust_good_id,
	        "control_Params": '',
	        "tempUnits":tempUnits,
	        "humiUnits":humiUnits,
	        "shockUnits":shockUnits,
	        "tiltUnits":tiltUnits,
	        "smellUnits":smellUnits,
	        "sensorSelect":sensorSelect,
	        "pressureSelect":pressureSelect,
	        "hazardousSelect":hazardousSelect,
	        "evidenceSelect":evidenceSelect
	        
	};
	
	/*//alert(JSON.stringify(goodsData));//console.log(JSON.stringify(goodsData));
	return false;*/
	var url = localStorage.getItem("smaasip")+"/SCMXPert/updateGood";
	$.ajax({
       	 type:"post",
		 url:url,
		 headers: { Accept : "application/json",
					'Content-Type': "application/json" ,
					'Authorization': localStorage.getItem('SavedToken')
			 		}, 
		 data: JSON.stringify(goodsData),
		 beforeSend: function() {
             // $("#loading-image").show();
             var loading = '<img src="./images/loading.gif" id="loadingimg"/>';
             $(".body_blur1").show().html(loading).css({"background":"#000000c2"});
             $("#loadingimg").show();
           },
	    success: function(data) {
var correct = '<img src="./images/correct.gif" id="tickimg" style="width:65px;"/>';
			
			//var Idb = json_value.userId;
			
			/*$(".showviewdata1")
					.show()   
					.html('<div class="alert alert-success" role="alert" >Business Partner Created <strong> Successfully! </strong> and Your ID is ' + Idb	+ '  <a href="Dashboard.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">Move to Dashboard</a>.</div>');*/
			$(".body_blur1").show().html('<div class="alert alert-success" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;"><div class="close">X</div>'+correct+'Goods Updated <strong>Successfully!</strong> <a href="Dashboard.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">Move to Dashboard</a>.</div>').css({"background":"#000000c2"});
	    	
   	    	/*$(".showviewdata").show().html('<div class="alert alert-success" role="alert" style="margin:0px;">Goods Successful Updated</div>');
   	    	var UserId = $.session.get('UserId');
   	    		var Cust_Id = $("#Cust_Id").val();
   	    	var GoodsMasterGetRoute = localStorage.getItem("smaasip")+"/SCMXPert/getGoods/"+Cust_Id;   		
   		 	var Good_id = "";	
   			
   			$("#goods_id_vaal").val('');
   			goodsIdIncrement(UserId);
   			$("#Status").val("Active");
   		 	GoodDetailsWithId(Good_id,GoodsMasterGetRoute,Cust_Id);*/
   		 	 
 

	    },
	}); 
}
function ShowAllGoods()
{
	$(".body_blur").fadeIn();
	$(".showallGoods").fadeIn().css({"width":"98%","height":"80%","background":"#fff","top": "0px","position":"fixed","z-index":"9","margin":"5% 1%","border-radius":"5px"});
	$(".showallGoods").html("<div style='width:100%;'><h3 style='width:98%;margin:0px;text-align:center;padding-top:1%;float:left;'>Goods Items List</h3><div style='float:left;font-weight:bold;font-size:14px;padding-top:1%;margin-top:10px;width: 1.7%;height: 30px;' class='close' onclick='javascript:return closegoodslist();'>X</div></div></div><div style='max-height:80%;overflow-y:auto;width:100%;border-bottom:1px solid #0000004f;' ><table id='showallGoodsList' class='table' style='width: 98%;margin: 1%;'><thead><tr style='background: #894151'><th>S.No</th><th>Goods Id</th><th>Goods Item</th><th>Customer Goods Id</th><th>Description</th><th>Temp. From - To</th><th>Humidity From - To</th><th>Shock From - To</th><th>Tilt From - To</th><th>Sensor</th><th>Hazardous</th><th>Pressure</th><th>Status</th><th>Action</th></tr></thead><tbody></tbody></table></div><div style='width: 370px;margin: auto;margin-top: 0.9%;margin-bottom: 2%;'><button class='bg-color margin-rl1 btn-head' style='margin-right: 12%;height:30px;width:130px;' onclick='javascript:return closegoodslist();'>Close</button><button class='bg-color margin-rl1 btn-head' style='width:130px;height:30px;' onclick='javascript:DownloadAllGoods();'>Download to Csv</button></div>");
	
	$("#showallGoodsList").css({"font-size":"12px","font-weight":"bold"});
	var UserId = $.session.get('UserId');
		var Cust_Id = $("#Cust_Id").val();
	var GoodsMasterGetRoute = localStorage.getItem("smaasip")+"/SCMXPert/getGoods/"+Cust_Id;   
/*	$.getJSON(GoodsMasterGetRoute,function(response){
		//console.log(response);
		
			var num = 0
		$.each(response,function(a,b){
			var tabletr="<tr id='hidedata_"+b.goods_Id+"'><td>"+(num+1)+"</td><td>"+b.goods_Id+"</td><td>"+b.goods_Item+"</td><td>"+b.custGoodId+"</td><td>"+b.description+"</td><td>"+b.temperature_From+" "+b.tempUnits+"-"+b.temperature_To+" "+b.tempUnits+"</td><td>"+b.humidity_From+" "+b.humiUnits+"-"+b.humidity_To+" "+b.humiUnits+"</td><td>"+b.shock_From+" "+b.shockUnits+"-"+b.shock_To+" "+b.shockUnits+"</td><td>"+b.tilt_From+" "+b.tiltUnits+"-"+b.tilt_To+" "+b.tiltUnits+"</td><td>"+b.sensorSelect+"</td><td>"+b.hazardousSelect+"</td><td>"+b.pressureSelect+"</td><td>"+b.goods_Status+"</td><td><img src='./images/pencil.png' style='width:16px;height:16px;' title='Edit' onclick='javascript:return editGood(\""+b.goods_Item+"\")'/>&nbsp;<img src='./images/rubbish-bin (1).png' style='width:16px;height:16px;' title='Delete' onclick='javascript:return deleteGoodItem(\""+b.goods_Id+"\");'/></td></tr>"
			$("#showallGoodsList >tbody").append(tabletr);
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
 		//console.log(response);
		
			var num = 0
		$.each(response,function(a,b){
			var tabletr="<tr id='hidedata_"+escapeHtml(b.goods_Id)+"'><td>"+escapeHtml(num+1)+"</td><td>"+escapeHtml(b.goods_Id)+"</td><td>"+escapeHtml(b.goods_Item)+"</td><td>"+escapeHtml(b.custGoodId)+"</td><td>"+escapeHtml(b.description)+"</td><td>"+escapeHtml(b.temperature_From)+" "+escapeHtml(b.tempUnits)+"-"+escapeHtml(b.temperature_To)+" "+escapeHtml(b.tempUnits)+"</td><td>"+escapeHtml(b.humidity_From)+" "+escapeHtml(b.humiUnits)+"-"+escapeHtml(b.humidity_To)+" "+escapeHtml(b.humiUnits)+"</td><td>"+escapeHtml(b.shock_From)+" "+escapeHtml(b.shockUnits)+"-"+escapeHtml(b.shock_To)+" "+escapeHtml(b.shockUnits)+"</td><td>"+escapeHtml(b.tilt_From)+" "+escapeHtml(b.tiltUnits)+"-"+escapeHtml(b.tilt_To)+" "+escapeHtml(b.tiltUnits)+"</td><td>"+escapeHtml(b.sensorSelect)+"</td><td>"+escapeHtml(b.hazardousSelect)+"</td><td>"+escapeHtml(b.pressureSelect)+"</td><td>"+escapeHtml(b.goods_Status)+"</td><td><img src='./images/pencil.png' style='width:16px;height:16px;' title='Edit' onclick='javascript:return editGood(\""+escapeHtml(b.goods_Item)+"\")'/>&nbsp;<img src='./images/rubbish-bin (1).png' style='width:16px;height:16px;' title='Delete' onclick='javascript:return deleteGoodItem(\""+escapeHtml(b.goods_Id)+"\");'/></td></tr>"
			$("#showallGoodsList >tbody").append(tabletr);
			num++;
		});
		
		}
		});
	$("#showallGoodsList").css({"max-height":"80%","overflow-y":"auto"});
	
}
function closegoodslist()
{
	 AllGoods();
	getAllGoods();
	$(".body_blur").hide();
	 $(".showallGoods").fadeOut().empty();
	
}
function DownloadAllGoods()
{
	//$("#showallGoodsList").css({"font-size":"12px","font-weight":"bold"});
/*	$(".showallGoods").fadeIn().css({"width":"95%","height":"80%","background":"#fff","top": "0px","position":"fixed","z-index":"9","margin":"5% 2%","overflow-y":"auto","border-radius":"5px"});
	$(".showallGoods").html("<div><h3 style='width:98%;margin:0px;text-align:center;padding-top:1%;float:left;'>Goods Items List</h3><div style='float:left;font-weight:bold;font-size:14px;padding-top:1%;margin-top:10px;width: 1.7%;height: 30px;' class='close' onclick='javascript:return closegoodslist();'>X</div></div><table id='showallGoodsList' class='table'><thead><tr><th>S.No</th><th>Goods Id</th><th>Goods Item</th><th>Customer GoodId</th><th>Description</th><th>Temp. From - To</th><th>Humidity From - To</th><th>Shock From - To</th><th>Tilt From - To</th><th>Sensor</th><th>Hazardous</th><th>Pressure</th><th>Status</th></tr></thead><tbody></tbody></table>")
	var UserId = $.session.get('UserId');
	var GoodsMasterGetRoute = localStorage.getItem("smaasip")+"/SCMXPert/getGoods/"+UserId;   
	$.getJSON(GoodsMasterGetRoute,function(response){
		//console.log(response);
		
			var num = 0
		$.each(response,function(a,b){
			var tabletr="<tr><td>"+(num+1)+"</td><td>"+b.goods_Id+"</td><td>"+b.goods_Item+"</td><td>"+b.custGoodId+"</td><td>"+b.description+"</td><td>"+b.temperature_From+" "+b.tempUnits+"-"+b.temperature_To+" "+b.tempUnits+"</td><td>"+b.humidity_From+" "+b.humiUnits+"-"+b.humidity_To+" "+b.humiUnits+"</td><td>"+b.shock_From+" "+b.shockUnits+"-"+b.shock_To+" "+b.shockUnits+"</td><td>"+b.tilt_From+" "+b.tiltUnits+"-"+b.tilt_To+" "+b.tiltUnits+"</td><td>"+b.sensorSelect+"</td><td>"+b.hazardousSelect+"</td><td>"+b.pressureSelect+"</td><td>"+b.goods_Status+"</td></tr>"
			$("#showallGoodsList >tbody").append(tabletr);
			num++;
		});
		});*/
	$("#showallGoodsList").tableToCSV({  
        filename: 'GoodsList'  
    });
}

function AllGoods()
{
	//$("#showallGoodsList").css({"font-size":"12px","font-weight":"bold"});
	
	$(".showallGoods").html("<div><h3 style='width:98%;margin:0px;text-align:center;padding-top:1%;float:left;'>Goods Items List</h3><div style='float:left;font-weight:bold;font-size:14px;padding-top:1%;margin-top:10px;width: 1.7%;height: 30px;' class='close' onclick='javascript:return closegoodslist();'>X</div></div><table id='showallGoodsList' class='table'><thead><tr><th>S.No</th><th>Goods Id</th><th>Goods Item</th><th>Customer GoodId</th><th>Description</th><th>Temp. From - To</th><th>Humidity From - To</th><th>Shock From - To</th><th>Tilt From - To</th><th>Sensor</th><th>Hazardous</th><th>Pressure</th><th>Status</th></tr></thead><tbody></tbody></table>")
	var UserId = $.session.get('UserId');
		var Cust_Id = $("#Cust_Id").val();
	var GoodsMasterGetRoute = localStorage.getItem("smaasip")+"/SCMXPert/getGoods/"+Cust_Id;   
/*	$.getJSON(GoodsMasterGetRoute,function(response){
		//console.log(response);
		
			var num = 0
		$.each(response,function(a,b){
			var tabletr="<tr><td>"+(num+1)+"</td><td>"+b.goods_Id+"</td><td>"+b.goods_Item+"</td><td>"+b.custGoodId+"</td><td>"+b.description+"</td><td>"+b.temperature_From+" "+b.tempUnits+"-"+b.temperature_To+" "+b.tempUnits+"</td><td>"+b.humidity_From+" "+b.humiUnits+"-"+b.humidity_To+" "+b.humiUnits+"</td><td>"+b.shock_From+" "+b.shockUnits+"-"+b.shock_To+" "+b.shockUnits+"</td><td>"+b.tilt_From+" "+b.tiltUnits+"-"+b.tilt_To+" "+b.tiltUnits+"</td><td>"+b.sensorSelect+"</td><td>"+b.hazardousSelect+"</td><td>"+b.pressureSelect+"</td><td>"+b.goods_Status+"</td></tr>"
			$("#showallGoodsList >tbody").append(tabletr);
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
  	//console.log(response);
		
			var num = 0
		$.each(response,function(a,b){
			var tabletr="<tr><td>"+escapeHtml(num+1)+"</td><td>"+escapeHtml(b.goods_Id)+"</td><td>"+escapeHtml(b.goods_Item)+"</td><td>"+escapeHtml(b.custGoodId)+"</td><td>"+escapeHtml(b.description)+"</td><td>"+escapeHtml(b.temperature_From)+" "+escapeHtml(b.tempUnits)+"-"+escapeHtml(b.temperature_To)+" "+escapeHtml(b.tempUnits)+"</td><td>"+escapeHtml(b.humidity_From)+" "+escapeHtml(b.humiUnits)+"-"+escapeHtml(b.humidity_To)+" "+escapeHtml(b.humiUnits)+"</td><td>"+escapeHtml(b.shock_From)+" "+escapeHtml(b.shockUnits)+"-"+escapeHtml(b.shock_To)+" "+escapeHtml(b.shockUnits)+"</td><td>"+escapeHtml(b.tilt_From)+" "+escapeHtml(b.tiltUnits)+"-"+escapeHtml(b.tilt_To)+" "+escapeHtml(b.tiltUnits)+"</td><td>"+escapeHtml(b.sensorSelect)+"</td><td>"+escapeHtml(b.hazardousSelect)+"</td><td>"+escapeHtml(b.pressureSelect)+"</td><td>"+escapeHtml(b.goods_Status)+"</td></tr>"
			$("#showallGoodsList >tbody").append(tabletr);
			num++;
		});
		}
		});
		
		
	/*$("#showallGoodsList").tableToCSV({  
        filename: 'GoodsList'  
    });*/
}
function editGood(goodItem)
{
	SelectGood(goodItem);
	$(".body_blur").hide();
	 $(".showallGoods").fadeOut().empty();
	
}

function kaja(){
	
	document.location.reload();
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

function deleteGoodItem(goods_Id)
{
	var token = $.session.get('Token');
	var UserName = $.session.get('UserName');
	var CustomerName = $.session.get('CustomerName');
		var Cust_Id = $("#Cust_Id").val();
	var UserId = $.session.get('UserId');
	var Role = $.session.get('Role');
	var RolePermission = $.session.get('RolePermission');
	var useridsplit = UserId.split('-');
	useridsplit[0].toString();
	useridsplit[0] + "";
	useridsplit[1].toString();
	useridsplit[1] + "";
	
	
	////console.log(useridsplit[0]+","+goods_Id);
	////alert(useridsplit[0]);
	var url = localStorage.getItem("smaasip")+"/SCMXPert/deleteGood/"+useridsplit[0]+"/"+goods_Id;
	//console.log("saikiran::::::::"+url);
//	return false;
	$.ajax({
      	 type:"GET",
		 url:url,
		 headers: { Accept : "application/json",
				'Content-Type': "application/json" ,
				'Authorization': localStorage.getItem('SavedToken')
			 		}, 
	    success: function(data) {
         //console.log(data);
	    	$("#hidedata_"+goods_Id).hide();
	    }
	});
	
};