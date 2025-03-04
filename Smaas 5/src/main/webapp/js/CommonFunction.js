 $.getJSON('./config.json', function(data){
	// alert(data.AuthUrl);
	// alert(data.URL);
	 var AuthUrl = data.AuthUrl;
	 var smaasip = data.URL;
     var MailUrl = data.MailUrl;
	 localStorage.setItem("AuthUrl", AuthUrl);
	 localStorage.setItem("smaasip", smaasip);
     localStorage.setItem("MailUrl", MailUrl);
	//  console.log(localStorage.getItem("AuthUrl"));
	//  console.log(localStorage.getItem("smaasip"));
	//  console.log(localStorage.getItem("MailUrl"));
	});
function loginToDashboard()
{
	
	$("#login_container").hide();
	username = $("#username").val().trim();
	pwd = $("#password").val().trim();
loading = '<img src="./images/loadingLogin.gif" style="width:180px;"/>';
$(".login_container").empty();
$(".login_container").html(loading);

	if(username == '' || pwd == '')
	{
		$(".login_container").empty();
		$(".login_container").html('<button type="submit" class="btn login_btn" onclick="javascript:loginToDashboard()">Login</button><button type="button" class="btn login_btn" onclick="window.location.href=\'index.jsp\'">Cancel</button>');	
		$("#usertext1").css("padding-top","0px");
		var errordata = "Enter Login Details";
		$("#username").val('').focus();
		$("#password").val('');
		error.innerHTML = errordata;
		return false;
	}
	//var myKey = {"userid" : username, "password" : pwd}
	/*$.ajax({
	    url: localStorage.getItem("AuthUrl")+"/SCMXPert/LoginAuth",
	    "method": "POST",
		 "timeout": 0,
		 "headers": {
		 	"Content-Type": "application/json"
		  },
		"data": JSON.stringify({
    		"userid": username,
    		"password": pwd
  			}),
	    success: function(response) {
	        token = response.jwtToken;
			localStorage.setItem("SavedToken", 'Bearer ' + token);
	        //token_type = response.token_type;
	        //expiresIn = response.expires_in;
	      // alert(username);
	        $.ajax({
	     		url: localStorage.getItem("smaasip")+"/SCMXPert/userdetails/"+username,
	        	//"method": "GET",
		
			crossDomain : true,
	        	//dataType: "json",
	        	headers: {"accept": "application/json",
              "Access-Control-Allow-Origin":"*",
	        	    'Authorization': localStorage.getItem('SavedToken')
	        	  },
	        	success: function (data) {
	        		//alert(data);
	        		var userid = data.userid;
	        		 $.ajax({
	        			 url: localStorage.getItem("smaasip")+"/SCMXPert/getUser/"+userid,
	     	        	"method": "GET",
						//crossDomain : true,
	     	        	//dataType: "json",
	     	        	headers: {
	    	        	    'Authorization': localStorage.getItem('SavedToken')
	    	        	  },
	     	        	success: function (dataa) {
	     	        		$.each(dataa.roles,function(key,value){
	     	        			
	     	        			if(value.role == "SUPERADMIN")
	     	        				{
	     	        				
	     	        				$.ajax({
	     	  	        			 url: localStorage.getItem("smaasip")+"/SCMXPert/userTotaldetails/"+userid,
	     	  	     	        	type: "GET",
									//crossDomain : true,
	     	  	     	        	dataType: "json",
	     	  	     	        	headers: {
	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
	     	  	    	        	  },
	     	  	     	        	success: function (response) {
	     	  	     	        		
	     	  	     	        	var adminName = response.userName;
	     	  	     	        	var customer_Name = response.customer_Name;
	     	  	     	        $.session.set('CustomerName',customer_Name);
				   	     	  	   	$.session.set('UserName',adminName);
				   	     	  	   	$.session.set('UserId',userid);
				   	     	  	   	$.session.set('Token',token);
				   	     	  	   	$.session.set('Role',value.role);
				   	     	  	$.session.set('RolePermission',value.rolePermissions);
				   	     	  	Dashboard();
	     	  	     	        		     	  	     	        	}});
	     	        				}else if(value.role == "ADMIN"){	
	     	        					$.ajax({
	   	     	  	        			 url: localStorage.getItem("smaasip")+"/SCMXPert/userTotaldetails/"+userid,
	   	     	  	     	        	type: "GET",
	   	     	  	     	        	dataType: "json",
	   	     	  	     	        	headers: {
	   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
	   	     	  	    	        	  },
	   	     	  	     	        	success: function (response) {
	   	     	  	     	        	var customerName = response.customer_Name;
	   	     	  	     	        	var adminName = response.admin_Name;
					   	     	  	   	$.session.set('CustomerName',customerName);
					   	     	  	   	$.session.set('UserName',adminName);
					   	     	  	   	$.session.set('UserId',userid);
					   	     	  	   	$.session.set('Token',token);
					   	     	  	   	$.session.set('Role',value.role);
					   	     	  	$.session.set('RolePermission',value.rolePermissions);
					   	     	  	Dashboard();
	   	     	  	     	        	}});
	     	        				}else if(value.role == "FINANCE"){	
	     	        					$.ajax({
		   	     	  	        			 url: localStorage.getItem("smaasip")+"/SCMXPert/userTotaldetails/"+userid,
		   	     	  	     	        	type: "GET",
		   	     	  	     	        	dataType: "json",
		   	     	  	     	        	headers: {
		   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
		   	     	  	    	        	  },
		   	     	  	     	        	success: function (response) {
		   	     	  	     	        	var adminName = response.admin_Name;
		   	     	  	     	     var customerName = response.customer_Name;
		   	     	  	     	   	$.session.set('CustomerName',customerName);
						   	     	  	   	$.session.set('UserName',adminName);
						   	     	  	   	$.session.set('UserId',userid);
						   	     	  	   	$.session.set('Token',token);
						   	     	  	   	$.session.set('Role',value.role);
						   	     	  	   	$.session.set('RolePermission',value.rolePermissions);
						   	     	  	Dashboard();
		   	     	  	     	        	/*var customer_Id = dataa.customer_Id;
		   	    	     	        		var adminName = dataa.adminName;*/
		   	    	     	        		
		   	    	     	        		//window.location="https://127.0.0.1/SCMXPertdashboard/index.jsp.jsp?username="+username;
		   	    								/*setsession(username,adminName,customer_Id,userid,token,value.role);
		   	    	     	        		Dashboard();*/
		   	  /* remove here  	  	     	        	}});
		     	        				}else{
		     	        					$.ajax({
			   	     	  	        			 url: localStorage.getItem("smaasip")+"/SCMXPert/userTotaldetails/"+userid,
			   	     	  	     	        	type: "GET",
			   	     	  	     	        	dataType: "json",
			   	     	  	     	        	headers: {
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  },
			   	     	  	     	        	success: function (response) {
	
			   	     	  	     	        	var adminName = response.userName;
			   	     	  	     	        	var customerName = response.customer_Name;
							   	     	  	   	$.session.set('UserName',adminName);
							   	     	  	   	$.session.set('CustomerName',customerName);
							   	     	  	   	$.session.set('UserId',userid);
							   	     	  	   	$.session.set("CustId",response.customer_Id);
							   	     	  	   	$.session.set('Token',token);
							   	     	  	   	$.session.set('Role',value.role);
							   	     	  	   	$.session.set('RolePermission',value.rolePermissions);
							   	     	  	   	$.session.set('RoleList',dataa.listrole);
							   	     	  	Dashboard();*/
			   	     	  	     	        	/*var customer_Id = dataa.customer_Id;
			   	    	     	        		var adminName = dataa.adminName;*/
			   	    	     	        		
			   	    	     	        		//window.location="https://127.0.0.1/SCMXPertdashboard/index.jsp.jsp?username="+username;
			   	    								/*setsession(username,adminName,customer_Id,userid,token,value.role);
			   	    	     	        		Dashboard();*/
			   	     	/* remove here 	     	        	}});
		     	        				}
	     	        		});*/
	     	        		
	     	        		/*var username = dataa.userName;
	     	        		var customer_Id = dataa.customer_Id;
	     	        		var userid = dataa.userid;
	     	        		var adminName = dataa.adminName;
	     	        		var role = data.role;
	     	        		//window.location="https://127.0.0.1/SCMXPertdashboard/index.jsp.jsp?username="+username;
								setsession(username,adminName,customer_Id,userid,token,role);
	     	        		Dashboard();*/
		/* remove here    	        	}
	        		 });
	        	        }
	        	    });
	    },
	    error: function(errorThrown) {
	    	$(".login_container").empty();
			$(".login_container").html('<button type="submit" class="btn login_btn" onclick="javascript:loginToDashboard()">Login</button><button type="button" class="btn login_btn" onclick="window.location.href=\'index.jsp\'">Cancel</button>');
	    	$("#usertext1").css("padding-top","0px");
	        var errordata = "Your Credentials is Wrong..";
			error.innerHTML = errordata;
			$("#username").val('');
			$("#password").val('');
			return false;
	    }*/
//	});*/
	
	
	
	$.ajax({
	  async: true,
	  crossDomain: true,
	//    url: "https://www.smaas-lb.de:8087/oauth/token",
	  url: localStorage.getItem("AuthUrl")+"/oauth/token",
       withCredentials: true,
       dataType: "json",
	    "method": "POST",
		 "timeout": 0,
		/* "headers": {
		 	"Content-Type": "application/json"
		  },*/
      headers: {
	        "Content-Type": "application/x-www-form-urlencoded",
	        "Authorization": "Basic Y2xpZW50OnNlY3JldA==",
	      
	      },
		/*"data": JSON.stringify({
    		"userid": username,
    		"password": pwd
  			}),*/
	data: 'grant_type=password&username='+username+'&password='+pwd,
	    success: function(response) {
		 token = response.access_token;
	        token_type = response.token_type;
	        expiresIn = response.expires_in;
        localStorage.setItem("SavedToken", 'Bearer ' + token);
	 /*       token = response.jwtToken;
			localStorage.setItem("SavedToken", 'Bearer ' + token);*/
	        //token_type = response.token_type;
	        //expiresIn = response.expires_in;
	      // alert(username);
	        $.ajax({
	     		url: localStorage.getItem("smaasip")+"/SCMXPert/userdetails/"+username,
	        	//"method": "GET",
		
			crossDomain : true,
	        	//dataType: "json",
	        	headers: {"accept": "application/json",
              "Access-Control-Allow-Origin":"*",
	        	    'Authorization': localStorage.getItem('SavedToken')
	        	  },
	        	success: function (data) {
	        		//alert(data);
	        		var userid = data.userid;
	        		 $.ajax({
	        			 url: localStorage.getItem("smaasip")+"/SCMXPert/getUser/"+userid,
	     	        	"method": "GET",
						//crossDomain : true,
	     	        	//dataType: "json",
	     	        	headers: {
	    	        	    'Authorization': localStorage.getItem('SavedToken')
	    	        	  },
	     	        	success: function (dataa) {
	     	        		$.each(dataa.roles,function(key,value){
	     	        			
	     	        			if(value.role == "SUPERADMIN")
	     	        				{
	     	        				
	     	        				$.ajax({
	     	  	        			 url: localStorage.getItem("smaasip")+"/SCMXPert/userTotaldetails/"+userid,
	     	  	     	        	type: "GET",
									//crossDomain : true,
	     	  	     	        	dataType: "json",
	     	  	     	        	headers: {
	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
	     	  	    	        	  },
	     	  	     	        	success: function (response) {
	     	  	     	        		
	     	  	     	        	var adminName = response.userName;
	     	  	     	        	var customer_Name = response.customer_Name;
	     	  	     	        $.session.set('CustomerName',customer_Name);
				   	     	  	   	$.session.set('UserName',adminName);
				   	     	  	   	$.session.set('UserId',userid);
				   	     	  	   	$.session.set('Token',token);
				   	     	  	   	$.session.set('Role',value.role);
				   	     	  	$.session.set('RolePermission',value.rolePermissions);
				   	     	  	Dashboard();
	     	  	     	        		     	  	     	        	}});
	     	        				}else if(value.role == "ADMIN"){	
	     	        					$.ajax({
	   	     	  	        			 url: localStorage.getItem("smaasip")+"/SCMXPert/userTotaldetails/"+userid,
	   	     	  	     	        	type: "GET",
	   	     	  	     	        	dataType: "json",
	   	     	  	     	        	headers: {
	   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
	   	     	  	    	        	  },
	   	     	  	     	        	success: function (response) {
	   	     	  	     	        	var customerName = response.customer_Name;
	   	     	  	     	        	var adminName = response.admin_Name;
					   	     	  	   	$.session.set('CustomerName',customerName);
					   	     	  	   	$.session.set('UserName',adminName);
					   	     	  	   	$.session.set('UserId',userid);
					   	     	  	   	$.session.set('Token',token);
					   	     	  	   	$.session.set('Role',value.role);
					   	     	  	$.session.set('RolePermission',value.rolePermissions);
					   	     	  	Dashboard();
	   	     	  	     	        	}});
	     	        				}else if(value.role == "FINANCE"){	
	     	        					$.ajax({
		   	     	  	        			 url: localStorage.getItem("smaasip")+"/SCMXPert/userTotaldetails/"+userid,
		   	     	  	     	        	type: "GET",
		   	     	  	     	        	dataType: "json",
		   	     	  	     	        	headers: {
		   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
		   	     	  	    	        	  },
		   	     	  	     	        	success: function (response) {
		   	     	  	     	        	var adminName = response.admin_Name;
		   	     	  	     	     var customerName = response.customer_Name;
		   	     	  	     	   	$.session.set('CustomerName',customerName);
						   	     	  	   	$.session.set('UserName',adminName);
						   	     	  	   	$.session.set('UserId',userid);
						   	     	  	   	$.session.set('Token',token);
						   	     	  	   	$.session.set('Role',value.role);
						   	     	  	   	$.session.set('RolePermission',value.rolePermissions);
						   	     	  	Dashboard();
		   	     	  	     	        	/*var customer_Id = dataa.customer_Id;
		   	    	     	        		var adminName = dataa.adminName;*/
		   	    	     	        		
		   	    	     	        		//window.location="https://127.0.0.1/SCMXPertdashboard/index.jsp.jsp?username="+username;
		   	    								/*setsession(username,adminName,customer_Id,userid,token,value.role);
		   	    	     	        		Dashboard();*/
		   	     	  	     	        	}});
		     	        				}else{
		     	        					$.ajax({
			   	     	  	        			 url: localStorage.getItem("smaasip")+"/SCMXPert/userTotaldetails/"+userid,
			   	     	  	     	        	type: "GET",
			   	     	  	     	        	dataType: "json",
			   	     	  	     	        	headers: {
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  },
			   	     	  	     	        	success: function (response) {
	
			   	     	  	     	        	var adminName = response.userName;
			   	     	  	     	        	var customerName = response.customer_Name;
							   	     	  	   	$.session.set('UserName',adminName);
							   	     	  	   	$.session.set('CustomerName',customerName);
							   	     	  	   	$.session.set('UserId',userid);
							   	     	  	   	$.session.set("CustId",response.customer_Id);
							   	     	  	   	$.session.set('Token',token);
							   	     	  	   	$.session.set('Role',value.role);
							   	     	  	   	$.session.set('RolePermission',value.rolePermissions);
							   	     	  	   //	$.session.set('RoleList',dataa.listrole);
							   	     	  	    let roleList = [];
											    roleList.push(dataa.listrole);
												roleList.push(dataa.eventAccess);
												$.session.set('RoleList', roleList);
							   	     	  	Dashboard();
			   	     	  	     	        	/*var customer_Id = dataa.customer_Id;
			   	    	     	        		var adminName = dataa.adminName;*/
			   	    	     	        		
			   	    	     	        		//window.location="https://127.0.0.1/SCMXPertdashboard/index.jsp.jsp?username="+username;
			   	    								/*setsession(username,adminName,customer_Id,userid,token,value.role);
			   	    	     	        		Dashboard();*/
			   	     	  	     	        	}});
		     	        				}
	     	        		});
	     	        		
	     	        		/*var username = dataa.userName;
	     	        		var customer_Id = dataa.customer_Id;
	     	        		var userid = dataa.userid;
	     	        		var adminName = dataa.adminName;
	     	        		var role = data.role;
	     	        		//window.location="https://127.0.0.1/SCMXPertdashboard/index.jsp.jsp?username="+username;
								setsession(username,adminName,customer_Id,userid,token,role);
	     	        		Dashboard();*/
		     	        	}
	        		 });
	        	        }
	        	    });
	    },
	    error: function(errorThrown) {
	    	$(".login_container").empty();
			$(".login_container").html('<button type="submit" class="btn login_btn" onclick="javascript:loginToDashboard()">Login</button><button type="button" class="btn login_btn" onclick="window.location.href=\'index.jsp\'">Cancel</button>');
	    	$("#usertext1").css("padding-top","0px");
	        var errordata = "Your Credentials is Wrong..";
			error.innerHTML = errordata;
			$("#username").val('');
			$("#password").val('');
			return false;
	    }
	});
	
}

/*for finance person*/

function keycodecheckfinacnce1(event) {
	 var passwordval1 = $("#financePassword").val();
	 var c_passwordval1 = $("#financeCon-Password").val();
	 //console.log("awd"+passwordval1);
	 //console.log("awd"+passwordval1.length);
	 if(passwordval1 != '')
		 {
		 $("#showPasswordf").css({"opacity":"0.7"});
		 }if(passwordval1.length < 1){
			//console.log("awddxdd"+c_passwordval1);
			 $("#showPasswordf").css({"opacity":"0"});
		 }
		 if(event.keyCode == 8){
			 
		 }
		 
		 if(c_passwordval1 != '')
		 {
		 $("#showPasswordcv").css({"opacity":"0.7"});
		 }
		 /*
		 if(c_passwordval.length < 1){
			//console.log("awddxdd"+c_passwordval);
			 $("#showPasswordc").css({"opacity":"0"});
		 }
		*/ if(event.keyCode == 8){
			
		}
		 
	  var x = event.which || event.keyCode;
	  //console.log(x);
	  if(x == 13){
		  loginToDashboard();
	  }

	}


function keycodecheckBusiness2(event) {
	 var passwordval = $("#financePassword").val();
	 //var c_passwordval2 = $("#financeCon-Password").val();
	// //console.log("awd"+c_passwordval2);
	// //console.log("awd"+c_passwordval2.length);
	 if(passwordval != '')
		 {
		 $("#showPasswordf").css({"opacity":"0.7"});
		 }if(passwordval.length < 1){
			//console.log("awddxdd"+c_passwordval2);
			 $("#showPasswordf").css({"opacity":"0"});
		 }
		 if(event.keyCode == 8){
			 
		 }
		 
		 
		 if(event.keyCode == 8){
			 
		 }
		 
	  var x = event.which || event.keyCode;
	  //console.log(x);
	  if(x == 13){
		  loginToDashboard();
	  }

	}
function keycodecheckBusiness4(event) {
	 //var passwordval = $("#financePassword").val();
	 var c_passwordval2 = $("#financeCon-Password").val();
	// //console.log("awd"+c_passwordval2);
	// //console.log("awd"+c_passwordval2.length);
	 if(c_passwordval2 != '')
		 {
		 $("#showPasswordfc").css({"opacity":"0.7"});
		 }if(c_passwordval2.length < 1){
			//console.log("awddxdd"+c_passwordval2);
			 $("#showPasswordfc").css({"opacity":"0"});
		 }
		 if(event.keyCode == 8){
			 
		 }
		 
		 
		 if(event.keyCode == 8){
			 
		 }
		 
	  var x = event.which || event.keyCode;
	  //console.log(x);
	  if(x == 13){
		  loginToDashboard();
	  }

	}
function ShowPassword4() {
	  var x = document.getElementById("financePassword");
	  
	  if (x.type === "password") {
		  $("#financePassword").focus();
		  $("#showPasswordf").hide();
		  $("#hidePasswordf").show().css("opacity","1");
	    x.type = "text";
	  } else {
		  $("#financePassword").focus();
		  $("#hidePasswordf").hide();
		  $("#showPasswordf").show().css("opacity","1");
	    x.type = "password";
	  }
	  
	 
	}

function ShowPassword5() {
	/*  var x = document.getElementById("financeCon-Password");*/
	  
	  var y = document.getElementById("financeCon-Password");
		 if (y.type === "password") {
			  $("#financeCon-Password").focus();
			  $("#showPasswordfc").hide();
			  $("#hidePasswordfc").show().css("opacity","1");
		    y.type = "text";
		  } else {
			  $("#financeCon-Password").focus();
			  $("#hidePasswordfc").hide();
			  $("#showPasswordfc").show().css("opacity","1");
		    y.type = "password";
		  }

	  
	 
	}






  /*<for customermaster>*/
function keycodecheckfinacnce(event) {
	 var passwordval = $("#adminpassword").val();
	 var c_passwordval = $("#admincon-password").val();
	 //console.log("awd"+passwordval);
	 //console.log("awd"+passwordval.length);
	 if(passwordval != '')
		 {
		 $("#showPassword").css({"opacity":"0.7"});
		 }if(passwordval.length < 1){
			//console.log("awddxdd"+passwordval);
			 $("#showPassword").css({"opacity":"0"});
		 }
		 if(event.keyCode == 8){
			 
		 }
		 
		 if(c_passwordval != '')
		 {
		 $("#showPasswordc").css({"opacity":"0.7"});
		 }
		 /*
		 if(c_passwordval.length < 1){
			//console.log("awddxdd"+c_passwordval);
			 $("#showPasswordc").css({"opacity":"0"});
		 }
		*/ if(event.keyCode == 8){
			
		}
		 
	  var x = event.which || event.keyCode;
	  //console.log(x);
	  if(x == 13){
		  loginToDashboard();
	  }

	}


function keycodecheckBusiness1(event) {
	 var passwordval = $("#adminpassword").val();
	 var c_passwordval = $("#admincon-password").val();
	 //console.log("awd"+passwordval);
	 //console.log("awd"+passwordval.length);
	 if(passwordval != '')
		 {
		 $("#showPassword").css({"opacity":"0.7"});
		 }if(passwordval.length < 1){
			//console.log("awddxdd"+passwordval);
			 $("#showPassword").css({"opacity":"0"});
		 }
		 if(event.keyCode == 8){
			 
		 }
		 
		 if(c_passwordval != '')
		 {
		 $("#showPasswordc").css({"opacity":"0.7"});
		 }
		 
		 if(c_passwordval.length < 1){
			//console.log("awddxdd"+c_passwordval);
			 $("#showPasswordc").css({"opacity":"0"});
		 }
		 if(event.keyCode == 8){
			 
		 }
		 
	  var x = event.which || event.keyCode;
	  //console.log(x);
	  if(x == 13){
		  loginToDashboard();
	  }

	}
function keycodecheckBusiness3(event) {
	// var passwordval = $("#adminpassword").val();
	 var c_passwordval = $("#admincon-password").val();
	 ////console.log("awd"+passwordval);
	 ////console.log("awd"+passwordval.length);
	 if(c_passwordval  != '')
		 {
		 $("#showPasswordc").css({"opacity":"0.7"});
		 }if(c_passwordval.length < 1){
			//console.log("awddxdd"+passwordval);
			 $("#showPasswordc").css({"opacity":"0"});
		 }
		 if(event.keyCode == 8){
			 
		 }
		 
		 
		 if(event.keyCode == 8){
			 
		 }
		 
	  var x = event.which || event.keyCode;
	  //console.log(x);
	  if(x == 13){
		  loginToDashboard();
	  }

	}
function ShowPassword2() {
	  var x = document.getElementById("adminpassword");
	  
	  if (x.type === "password") {
		  $("#adminpassword").focus();
		  $("#showPassword").hide();
		  $("#hidePassword").show();
	    x.type = "text";
	  } else {
		  $("#adminpassword").focus();
		  $("#hidePassword").hide();
		  $("#showPassword").show();
	    x.type = "password";
	  }
	  
	 
	}

function ShowPassword3() {
	  var x = document.getElementById("admincon-password");
	  
	  if (x.type === "password") {
		  $("#admincon-password").focus();
		  $("#showPasswordc").hide();
		  $("#hidePasswordc").show();
	    x.type = "text";
	  } else {
		  $("#admincon-password").focus();
		  $("#hidePasswordc").hide();
		  $("#showPasswordc").show();
	    x.type = "password";
	  }
	  
	 
	}





/*for bussinesspartner*/

function ShowPassword() {
	  var x = document.getElementById("password");
	  
	  if (x.type === "password") {
		  $("#password").focus();
		  $("#showPassword").hide();
		  $("#hidePassword").show();
	    x.type = "text";
	  } else {
		  $("#password").focus();
		  $("#hidePassword").hide();
		  $("#showPassword").show();
	    x.type = "password";
	  }
	  
	 
	}


function ShowPassword1(){
	
	var y = document.getElementById("cs_password");
	 if (y.type === "password") {
		  $("#cs_password").focus();
		  $("#showPasswordc").hide();
		  $("#hidePasswordc").show();
	    y.type = "text";
	  } else {
		  $("#cs_password").focus();
		  $("#hidePasswordc").hide();
		  $("#showPasswordc").show();
	    y.type = "password";
	  }
	
}

function keycodecheck(event) {
	 var passwordval = $("#password").val();
	 var c_passwordval = $("#cs_password").val();
	 //console.log("awd"+passwordval);
	 //console.log("awd"+passwordval.length);
	 if(passwordval != '')
		 {
		 $("#showPassword").css({"opacity":"0.7"});
		 }if(passwordval.length < 1){
			//console.log("awddxdd"+passwordval);
			 $("#showPassword").css({"opacity":"0"});
		 }
		 if(event.keyCode == 8){
			 
		 }
		 
		 if(c_passwordval != '')
		 {
		 $("#showPasswordc").css({"opacity":"0.7"});
		 }
		 /*
		 if(c_passwordval.length < 1){
			//console.log("awddxdd"+c_passwordval);
			 $("#showPasswordc").css({"opacity":"0"});
		 }
		*/ if(event.keyCode == 8){
			
		}
		 
	  var x = event.which || event.keyCode;
	  //console.log(x);
	  if(x == 13){
		  loginToDashboard();
	  }

	}



function keycodecheckBusiness(event) {
	 var passwordval = $("#password").val();
	 var c_passwordval = $("#cs_password").val();
	 //console.log("awd"+passwordval);
	 //console.log("awd"+passwordval.length);
	 if(passwordval != '')
		 {
		 $("#showPassword").css({"opacity":"0.7"});
		 }if(passwordval.length < 1){
			//console.log("awddxdd"+passwordval);
			 $("#showPassword").css({"opacity":"0"});
		 }
		 if(event.keyCode == 8){
			 
		 }
		 
		 if(c_passwordval != '')
		 {
		 $("#showPasswordc").css({"opacity":"0.7"});
		 }
		 
		 if(c_passwordval.length < 1){
			//console.log("awddxdd"+c_passwordval);
			 $("#showPasswordc").css({"opacity":"0"});
		 }
		 if(event.keyCode == 8){
			 
		 }
		 
	  var x = event.which || event.keyCode;
	  //console.log(x);
	  if(x == 13){
		  loginToDashboard();
	  }

	}
function setsession(username,adminName,customer_Id,userid,token,role)
{
	$.session.set('UserName',username);
	$.session.set('CustomerName',adminName);
	$.session.set('Cust_Id',customer_Id);
	$.session.set('UserId',userid);
	$.session.set('Token',token);
	$.session.set('Role',role);
	

}
function logout()
{
//	//alert("hello");
	var UserName = $.session.get('UserName');
	var CustomerName = $.session.get('CustomerName');
	var Cust_Id = $.session.get('Cust_Id');
	var UserId = $.session.get('UserId');
	var token = $.session.get('Token');
	var Role = $.session.get('Role');
	var rolePermissions = $.session.set('RolePermission');
	$.session.remove('UserName',UserName);
	$.session.remove('CustomerName',CustomerName);
	$.session.remove('Cust_Id',Cust_Id);
	$.session.remove('UserId',UserId);
	$.session.remove('Token',token);
	$.session.remove('Role',Role);
	$.session.remove('RolePermission',rolePermissions);
	var cookies = $.cookie();
	for(var cookie in cookies) {
	   $.removeCookie(cookie);
	}
	  localStorage.clear();
	index();
}
function screenResize()
{
	if($(window).width() < 1500)
	{	
		if($(window).height() > 680)
			{
				$(".live_shipments").css("height","520px");
			}else if($(window).height() < 680)
		{
			$(".live_shipments").css("height","520px");
		}
	}	
}
/*function changebpid(scmid,bpid)
{
	$.cookie("SCM_id", scmid);
	$.cookie("BP_ID", bpid);
	 $.getJSON(localStorage.getItem("smaasip")+'/SCMXPert/getFiltersData/'+scmid, function(filter){
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
					$.each(value,function(keys,values){
						$.each(values,function(ke,val){
							 if(ke == "goods_Item"){
								var selectgoods = '<option value="'+val+'">'+val+'</option>';
								$("#selectgoods").append(selectgoods);
							} 
						});
					});
				}
			});
     });
  *//***   Get Data for Shipments through web services  ***  End***//*
	//liveshipments_list(scmid,bpid);

}*/

function getbp_id(valuesbp)
{
	$("#refreshiconRoute").attr("onclick","");
	$('#inboxesvalues>tbody').empty();
	var Role = $.session.get('Role');

		var UserIds = $.session.get('UserId');

	  var UserId = UserIds;
		var useridsplit = UserId.split('-');
		useridsplit[0].toString();
		useridsplit[0] + "";
		useridsplit[1].toString();
		useridsplit[1] + "";


						$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getBusinessdropdown/"+useridsplit[0],
    type : "GET",
    dataType: 'json',
	headers: {
	        	    'Authorization': localStorage.getItem('SavedToken')
	        	  },
    success:function(data){
   $.each(data,function(key,val){

				  
							$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getEventBpid/"+useridsplit[0]+"/"+val,
    type : "GET",
    dataType: 'json',
	headers: {
	        	    'Authorization': localStorage.getItem('SavedToken')
	        	  },
    success:function(response){
 	////console.log(response.length);
					
					
					
					var appendSelectBPID = [];
					var appendSelectBPName = [];
					$.each(response,function(key1,value){
						appendSelectBPID.push('<option value="'+escapeHtml(value.bp_Id)+'">'+escapeHtml(value.bp_Id)+'</option>');
						appendSelectBPName.push('<option value="'+escapeHtml(value.partner_Name)+'">'+escapeHtml(value.partner_Name)+'</option>');
					});
					var selectboxBPID =  '<select style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="businessPartId_'+key+'" onchange="javascript:return changeBusinessPartnerEvent(\''+key+'\',\''+val+'\',this.value);">'+appendSelectBPID+'</select>';
					var selectboxBPName = '<select style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 180px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="businessPartName_'+key+'" onchange="javascript:return changeBusinessPartnerEventByName(\''+key+'\',\''+val+'\',this.value);">'+appendSelectBPName+'</select>';
					////console.log(selectboxBPID);
					////console.log(selectboxBPID);
					var eventsboxes = '<tr id="row_val_'+key+'" class="Event_class"><td class="p-1" style="display: block;"><input type="checkbox" name="event" value="'+key+'" style="width:14px;margin-top: 3px;"/></td><td class="" style="font-size: 10px;padding:1px;"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 50px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="EventID_'+key+'"></div></td><td class="pl-1" style="display:none;"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;display:none;" id="EventBusinessPartnerId_'+key+'"></div></td><td>'+selectboxBPID+'</td><td class="pl-1" style="display:none;"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 180px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;display:none;" id="EventBusinessPartNerName_'+key+'"></div></td><td>'+selectboxBPName+'</td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 150px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="EventName">'+val+'</div></td><td class="pl-1"><div id="Evidence-'+key+'" class="PhotoEvidence" style="display:none;">No</div><div style="" id="date_'+key+'"><label class="switch"><input class="switch-input" id="switch-input-'+key+'" type="checkbox" onchange="javascript:return setPhotoEvidence(\''+key+'\');"/><span class="switch-label" data-on="Yes" data-off="No"></span><span class="switch-handle"></span></label></div></td></tr>';
					
					$('#inboxesvalues>tbody').append(eventsboxes).delay(500).queue(function (next) {
					   // $(this).append(eventsboxes);
					    next();
					    changeBusinessPartnerEvent(key,val,$("#businessPartId_"+key).val());
						selectBusinessPartId($("#businessPartId_"+key).val(),val,key);
					});
					
					//$("#kldlfkjlkdfg>tbody").append(eventsboxes);
					
					
					
					
					
				
					}
				});
				 
				    key++;
			});
			var mylist = $('#inboxesvalues>tbody');
			
			var listitems = mylist.children('tr').get();
			listitems.sort(function(a, b) {
			    var compA = $(a).attr('id').toUpperCase();
			    var compB = $(b).attr('id').toUpperCase();
			    return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
			})
			$.each(listitems, function(idx, itm) {
			    mylist.append(itm);
			});
			$("#refreshiconRoute").attr("onclick","javascript:return refreshroute();");
			/*var sorted = $('#inboxesvalues tbody tr').sort(function(a, b) {
				  var a = $(a).find('td:first').text(), b = $(b).find('td:first').text();
				  return a.localeCompare(b, false, {numeric: true})
				});*/
				}
		});
		
		
		setTimeout(()=>
    {
        var table = $("#inboxesvalues tbody");
        var rows = table.find("tr").get();
        rows.sort(function(a, b) 
        {
            var aValue = $(a).find("td:eq(1) div").text().trim();
            var bValue = $(b).find("td:eq(1) div").text().trim();
            return aValue.localeCompare(bValue); // Use localeCompare for string comparison
         });
            table.append(rows);
    }, 7000);
		
	
}
function refreshroute(){
	var UserId = $.session.get('UserId');
	
	var useridsplit = UserId.split('-');
	useridsplit[0].toString();
	useridsplit[0] + "";
	useridsplit[1].toString();
	useridsplit[1] + "";
	getbp_id(useridsplit[1]);
}
function changeBusinessPartnerEvent(key,eventName,val)
{
//console.log(key,eventName,val);	
var UserIds = $.session.get('UserId');

var UserId = UserIds;
	var useridsplit = UserId.split('-');
	useridsplit[0].toString();
	useridsplit[0] + "";
	useridsplit[1].toString();
	useridsplit[1] + "";
	/*	$.getJSON( localStorage.getItem("smaasip")+"/SCMXPert/getEventBpid/"+useridsplit[0]+"/"+eventName, function( response ) {
			$.each(response,function(key1,value){
				if(value.bp_Id == val && value.event_Name == eventName)
					{
					////alert(key);
					
						$("#EventID_"+key).text(value.event_Id);
						$("#EventBusinessPartnerId_"+key).text(val);
					}
				if(value.bp_Id == val && value.event_Name == eventName)
				{
				////alert(key);
				
					$("#businessPartName_"+key).val(value.partner_Name);
					$("#EventBusinessPartNerName_"+key).text(value.partner_Name);
				}
			});*/
					$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getEventBpid/"+useridsplit[0]+"/"+eventName,
    type : "GET",
    dataType: 'json',
headers: {
	        	    'Authorization': localStorage.getItem('SavedToken')
	        	  },
    success:function( response ){
  $.each(response,function(key1,value){
				if(value.bp_Id == val && value.event_Name == eventName)
					{
					////alert(key);
					
						$("#EventID_"+key).text(value.event_Id);
						$("#EventBusinessPartnerId_"+key).text(val);
					}
				if(value.bp_Id == val && value.event_Name == eventName)
				{
				////alert(key);
				
					$("#businessPartName_"+key).val(value.partner_Name);
					$("#EventBusinessPartNerName_"+key).text(value.partner_Name);
				}
			});
			/*//console.log(response.bp_Id);businessPartName_7
			var appendSelectBPID = [];
			var appendSelectBPName = [];
			$.each(response.bp_Id,function(key1,val){
				appendSelectBPID.push('<option value="'+val+'">'+val+'</option>');
				////console.log(val);
			});
			$.each(response.partner_Name,function(key,val){
				appendSelectBPName.push('<option value="'+val+'">'+val+'</option>');
				////console.log(val);
			});
			for(i=0;i<data.length;i++)
				{
				var selectboxBPID = '<select style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="businessPartId_'+key+'">'+appendSelectBPID+'</select>';
				var selectboxBPName = '<select style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 180px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="businessPartName_'+key+'">'+appendSelectBPName+'</select>';
				var eventsboxes = '<tr id="row_val_" class="Event_class"><td class="p-1" style="display: block;"><input type="checkbox" name="event" style="width:14px;margin-top: 3px;"/></td><td class="" style="font-size: 10px;padding:1px;"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 50px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="EventID_"></div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;display:none;" id="ajsdhkasd"></div>'+selectboxBPID+'</td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 180px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;display:none;" id="event_name_"></div>'+selectboxBPName+'</td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 150px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="EventName">'+value+'</div></td><td class="pl-1"><div id="Evidence-" class="PhotoEvidence" style="display:none;"></div><div style="" id="date_"><label class="switch"><input class="switch-input" id="switch-input-" type="checkbox" onchange="javascript:return setPhotoEvidence();"/><span class="switch-label" data-on="Yes" data-off="No"></span><span class="switch-handle"></span></label></div></td></tr>';
				$("#inboxesvalues>tbody").append(eventsboxes);
				}
			////alert($("#businessPartId_"+key).val());
			selectBusinessPartId($("#businessPartId_"+key).val(),value);*/
			
			//var jsdkjf= $("#dfahkjk").val();
			}
		});
}
function changeBusinessUpdatePartnerEvent(key,eventName,val)
{
//alert(key,eventName,val);	
var UserIds = $.session.get('UserId');

var UserId = UserIds;
	var useridsplit = UserId.split('-');
	useridsplit[0].toString();
	useridsplit[0] + "";
	useridsplit[1].toString();
	useridsplit[1] + "";
	/*	$.getJSON( localStorage.getItem("smaasip")+"/SCMXPert/getEventBpid/"+useridsplit[0]+"/"+eventName, function( response ) {
			$.each(response,function(key1,value){
				if(value.bp_Id == val && value.event_Name == eventName)
					{
					////alert(key);
					
						$("#EventIDU_"+key).text(value.event_Id);
						$("#EventBusinessPartnerIdU_"+key).text(val);
					}
				if(value.bp_Id == val && value.event_Name == eventName)
				{
				////alert(key);
				
					$("#businessPartNameU_"+key).val(value.partner_Name);
					$("#EventBusinessPartNerNameU_"+key).text(value.partner_Name);
				}
			});*/
					$.ajax({
    url:  localStorage.getItem("smaasip")+"/SCMXPert/getEventBpid/"+useridsplit[0]+"/"+eventName,
    type : "GET",
    dataType: 'json',
	headers: {
	        	    'Authorization': localStorage.getItem('SavedToken')
	        	  },
    success:function( response ){
   $.each(response,function(key1,value){
				if(value.bp_Id == val && value.event_Name == eventName)
					{
					////alert(key);
					
						$("#EventIDU_"+key).text(value.event_Id);
						$("#EventBusinessPartnerIdU_"+key).text(val);
					}
				if(value.bp_Id == val && value.event_Name == eventName)
				{
				////alert(key);
				
					$("#businessPartNameU_"+key).val(value.partner_Name);
					$("#EventBusinessPartNerNameU_"+key).text(value.partner_Name);
				}
			});
			/*//console.log(response.bp_Id);businessPartName_7
			var appendSelectBPID = [];
			var appendSelectBPName = [];
			$.each(response.bp_Id,function(key1,val){
				appendSelectBPID.push('<option value="'+val+'">'+val+'</option>');
				////console.log(val);
			});
			$.each(response.partner_Name,function(key,val){
				appendSelectBPName.push('<option value="'+val+'">'+val+'</option>');
				////console.log(val);
			});
			for(i=0;i<data.length;i++)
				{
				var selectboxBPID = '<select style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="businessPartId_'+key+'">'+appendSelectBPID+'</select>';
				var selectboxBPName = '<select style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 180px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="businessPartName_'+key+'">'+appendSelectBPName+'</select>';
				var eventsboxes = '<tr id="row_val_" class="Event_class"><td class="p-1" style="display: block;"><input type="checkbox" name="event" style="width:14px;margin-top: 3px;"/></td><td class="" style="font-size: 10px;padding:1px;"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 50px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="EventID_"></div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;display:none;" id="ajsdhkasd"></div>'+selectboxBPID+'</td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 180px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;display:none;" id="event_name_"></div>'+selectboxBPName+'</td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 150px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="EventName">'+value+'</div></td><td class="pl-1"><div id="Evidence-" class="PhotoEvidence" style="display:none;"></div><div style="" id="date_"><label class="switch"><input class="switch-input" id="switch-input-" type="checkbox" onchange="javascript:return setPhotoEvidence();"/><span class="switch-label" data-on="Yes" data-off="No"></span><span class="switch-handle"></span></label></div></td></tr>';
				$("#inboxesvalues>tbody").append(eventsboxes);
				}
			////alert($("#businessPartId_"+key).val());
			selectBusinessPartId($("#businessPartId_"+key).val(),value);*/
			
			//var jsdkjf= $("#dfahkjk").val();
			}
		});
}
function changeBusinessPartnerUpdatedEventByName(key,eventName,val)
{
/*//alert(key,eventName,val);*/	
var UserIds = $.session.get('UserId');

var UserId = UserIds;
	var useridsplit = UserId.split('-');
	useridsplit[0].toString();
	useridsplit[0] + "";
	useridsplit[1].toString();
	useridsplit[1] + "";
	/*	$.getJSON( localStorage.getItem("smaasip")+"/SCMXPert/getEventBpid/"+useridsplit[0]+"/"+eventName, function( response ) {
			$.each(response,function(key1,value){
				if(value.partner_Name == val && value.event_Name == eventName)
					{
					////alert(key);
					//alert(value.event_Id);
						$("#EventIDU_"+key).text(value.event_Id);
						$("#EventBusinessPartnerIdU_"+key).text(value.bp_Id);
						
					}
				if(value.partner_Name == val && value.event_Name == eventName)
				{
				////alert(key);
				
					$("#businessPartIdU_"+key).val(value.bp_Id);
					$("#EventBusinessPartNerNameU_"+key).text(value.partner_Name);
				}
			});*/
					$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getEventBpid/"+useridsplit[0]+"/"+eventName,
    type : "GET",
    dataType: 'json',
	headers: {
	        	    'Authorization': localStorage.getItem('SavedToken')
	        	  },
    success:function( response ){
  	$.each(response,function(key1,value){
				if(value.partner_Name == val && value.event_Name == eventName)
					{
					////alert(key);
					//alert(value.event_Id);
						$("#EventIDU_"+key).text(value.event_Id);
						$("#EventBusinessPartnerIdU_"+key).text(value.bp_Id);
						
					}
				if(value.partner_Name == val && value.event_Name == eventName)
				{
				////alert(key);
				
					$("#businessPartIdU_"+key).val(value.bp_Id);
					$("#EventBusinessPartNerNameU_"+key).text(value.partner_Name);
				}
			});
			/*//console.log(response.bp_Id);businessPartName_7
			var appendSelectBPID = [];
			var appendSelectBPName = [];
			$.each(response.bp_Id,function(key1,val){
				appendSelectBPID.push('<option value="'+val+'">'+val+'</option>');
				////console.log(val);
			});
			$.each(response.partner_Name,function(key,val){
				appendSelectBPName.push('<option value="'+val+'">'+val+'</option>');
				////console.log(val);
			});
			for(i=0;i<data.length;i++)
				{
				var selectboxBPID = '<select style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="businessPartId_'+key+'">'+appendSelectBPID+'</select>';
				var selectboxBPName = '<select style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 180px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="businessPartName_'+key+'">'+appendSelectBPName+'</select>';
				var eventsboxes = '<tr id="row_val_" class="Event_class"><td class="p-1" style="display: block;"><input type="checkbox" name="event" style="width:14px;margin-top: 3px;"/></td><td class="" style="font-size: 10px;padding:1px;"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 50px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="EventID_"></div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;display:none;" id="ajsdhkasd"></div>'+selectboxBPID+'</td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 180px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;display:none;" id="event_name_"></div>'+selectboxBPName+'</td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 150px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="EventName">'+value+'</div></td><td class="pl-1"><div id="Evidence-" class="PhotoEvidence" style="display:none;"></div><div style="" id="date_"><label class="switch"><input class="switch-input" id="switch-input-" type="checkbox" onchange="javascript:return setPhotoEvidence();"/><span class="switch-label" data-on="Yes" data-off="No"></span><span class="switch-handle"></span></label></div></td></tr>';
				$("#inboxesvalues>tbody").append(eventsboxes);
				}
			////alert($("#businessPartId_"+key).val());
			selectBusinessPartId($("#businessPartId_"+key).val(),value);*/
			
			//var jsdkjf= $("#dfahkjk").val();
			}
		});
}
function changeBusinessPartnerEventByName(key,eventName,val)
{
//console.log(key,eventName,val);	
var UserIds = $.session.get('UserId');

var UserId = UserIds;
	var useridsplit = UserId.split('-');
	useridsplit[0].toString();
	useridsplit[0] + "";
	useridsplit[1].toString();
	useridsplit[1] + "";
	/*	$.getJSON( localStorage.getItem("smaasip")+"/SCMXPert/getEventBpid/"+useridsplit[0]+"/"+eventName, function( response ) {
			$.each(response,function(key1,value){
				if(value.partner_Name == val && value.event_Name == eventName)
					{
					////alert(key);
					
						$("#EventID_"+key).text(value.event_Id);
						$("#EventBusinessPartnerId_"+key).text(value.bp_Id);
					}
				if(value.partner_Name == val && value.event_Name == eventName)
				{
				////alert(key);
				
					$("#businessPartId_"+key).val(value.bp_Id);
					$("#EventBusinessPartNerName_"+key).text(value.partner_Name);
				}
			});*/
					$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getEventBpid/"+useridsplit[0]+"/"+eventName,
    type : "GET",
    dataType: 'json',
	headers: {
	        	    'Authorization': localStorage.getItem('SavedToken')
	        	  },
    success:function( response ){
  	$.each(response,function(key1,value){
				if(value.partner_Name == val && value.event_Name == eventName)
					{
					////alert(key);
					
						$("#EventID_"+key).text(value.event_Id);
						$("#EventBusinessPartnerId_"+key).text(value.bp_Id);
					}
				if(value.partner_Name == val && value.event_Name == eventName)
				{
				////alert(key);
				
					$("#businessPartId_"+key).val(value.bp_Id);
					$("#EventBusinessPartNerName_"+key).text(value.partner_Name);
				}
			});
			/*//console.log(response.bp_Id);businessPartName_7
			var appendSelectBPID = [];
			var appendSelectBPName = [];
			$.each(response.bp_Id,function(key1,val){
				appendSelectBPID.push('<option value="'+val+'">'+val+'</option>');
				////console.log(val);
			});
			$.each(response.partner_Name,function(key,val){
				appendSelectBPName.push('<option value="'+val+'">'+val+'</option>');
				////console.log(val);
			});
			for(i=0;i<data.length;i++)
				{
				var selectboxBPID = '<select style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="businessPartId_'+key+'">'+appendSelectBPID+'</select>';
				var selectboxBPName = '<select style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 180px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="businessPartName_'+key+'">'+appendSelectBPName+'</select>';
				var eventsboxes = '<tr id="row_val_" class="Event_class"><td class="p-1" style="display: block;"><input type="checkbox" name="event" style="width:14px;margin-top: 3px;"/></td><td class="" style="font-size: 10px;padding:1px;"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 50px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="EventID_"></div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;display:none;" id="ajsdhkasd"></div>'+selectboxBPID+'</td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 180px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;display:none;" id="event_name_"></div>'+selectboxBPName+'</td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 150px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="EventName">'+value+'</div></td><td class="pl-1"><div id="Evidence-" class="PhotoEvidence" style="display:none;"></div><div style="" id="date_"><label class="switch"><input class="switch-input" id="switch-input-" type="checkbox" onchange="javascript:return setPhotoEvidence();"/><span class="switch-label" data-on="Yes" data-off="No"></span><span class="switch-handle"></span></label></div></td></tr>';
				$("#inboxesvalues>tbody").append(eventsboxes);
				}
			////alert($("#businessPartId_"+key).val());
			selectBusinessPartId($("#businessPartId_"+key).val(),value);*/
			
			//var jsdkjf= $("#dfahkjk").val();
			}
		});
}
function selectBusinessUpdatePartId(bpId,eventName,key)
{
//alert(bpId);
	/*//alert(bpId+","+eventName);*/

		////alert(data.length);
	var UserIds = $.session.get('UserId');

	  var UserId = UserIds;
		var useridsplit = UserId.split('-');
		useridsplit[0].toString();
		useridsplit[0] + "";
		useridsplit[1].toString();
		useridsplit[1] + "";
		/*	$.getJSON( localStorage.getItem("smaasip")+"/SCMXPert/getEventBpid/"+useridsplit[0]+"/"+eventName, function( response ) {
				//console.log(response);
				$.each(response,function(key1,value){
					//alert(value.bp_Id);
					if(value.bp_Id == bpId && value.event_Name == eventName)
						{
						////alert(key);
						
							//$("#EventIDU_"+key).text(value.event_Id);
							$("#businessPartNameU_"+key).val(value.partner_Name);
							$("#EventBusinessPartnerIdU_"+key).text(value.bp_Id)
							$("#EventBusinessPartNerNameU_"+key).text(value.partner_Name);
						}*/
					/*if(value.bp_Id == bpId && value.event_Name == eventName)
					{
					////alert(key);
					
						$("#EventIDU_"+key).text(value.event_Id);
						$("#EventBusinessPartnerIdU_"+key).val(value.bp_Id)
						$("#EventBusinessPartNerNameU"+key).val(value.partner_Name);
					}*/
		//		});
						$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getEventBpid/"+useridsplit[0]+"/"+eventName,
    type : "GET",
    dataType: 'json',
	headers: {
	        	    'Authorization': localStorage.getItem('SavedToken')
	        	  },
    success:function( response ){
   	//console.log(response);
				$.each(response,function(key1,value){
					//alert(value.bp_Id);
					if(value.bp_Id == bpId && value.event_Name == eventName)
						{
						////alert(key);
						
							//$("#EventIDU_"+key).text(value.event_Id);
							$("#businessPartNameU_"+key).val(value.partner_Name);
							$("#EventBusinessPartnerIdU_"+key).text(value.bp_Id)
							$("#EventBusinessPartNerNameU_"+key).text(value.partner_Name);
						}
		});
				/*//console.log(response.bp_Id);
				var appendSelectBPID = [];
				var appendSelectBPName = [];
				$.each(response.bp_Id,function(key1,val){
					appendSelectBPID.push('<option value="'+val+'">'+val+'</option>');
					////console.log(val);
				});
				$.each(response.partner_Name,function(key,val){
					appendSelectBPName.push('<option value="'+val+'">'+val+'</option>');
					////console.log(val);
				});
				for(i=0;i<data.length;i++)
					{
					var selectboxBPID = '<select style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="businessPartId_'+key+'">'+appendSelectBPID+'</select>';
					var selectboxBPName = '<select style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 180px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="businessPartName_'+key+'">'+appendSelectBPName+'</select>';
					var eventsboxes = '<tr id="row_val_" class="Event_class"><td class="p-1" style="display: block;"><input type="checkbox" name="event" style="width:14px;margin-top: 3px;"/></td><td class="" style="font-size: 10px;padding:1px;"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 50px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="EventID_"></div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;display:none;" id="ajsdhkasd"></div>'+selectboxBPID+'</td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 180px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;display:none;" id="event_name_"></div>'+selectboxBPName+'</td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 150px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="EventName">'+value+'</div></td><td class="pl-1"><div id="Evidence-" class="PhotoEvidence" style="display:none;"></div><div style="" id="date_"><label class="switch"><input class="switch-input" id="switch-input-" type="checkbox" onchange="javascript:return setPhotoEvidence();"/><span class="switch-label" data-on="Yes" data-off="No"></span><span class="switch-handle"></span></label></div></td></tr>';
					$("#inboxesvalues>tbody").append(eventsboxes);
					}
				////alert($("#businessPartId_"+key).val());
				selectBusinessPartId($("#businessPartId_"+key).val(),value);*/
				
				//var jsdkjf= $("#dfahkjk").val();
				}
			});
			
	
		

}
function selectBusinessPartId(bpId,eventName,key)
{
	////alert(bpId+","+eventName);

		////alert(data.length);
	var UserIds = $.session.get('UserId');

	  var UserId = UserIds;
		var useridsplit = UserId.split('-');
		useridsplit[0].toString();
		useridsplit[0] + "";
		useridsplit[1].toString();
		useridsplit[1] + "";
		/*	$.getJSON( localStorage.getItem("smaasip")+"/SCMXPert/getEventBpid/"+useridsplit[0]+"/"+eventName, function( response ) {
				$.each(response,function(key1,value){
					if(value.bp_Id == bpId && value.event_Name == eventName)
						{
						////alert(key);
						
							$("#EventID_"+key).text(value.event_Id);
						}
				});*/
						$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getEventBpid/"+useridsplit[0]+"/"+eventName,
    type : "GET",
    dataType: 'json',
	headers: {
	        	    'Authorization': localStorage.getItem('SavedToken')
	        	  },
    success:function( response ){
   	$.each(response,function(key1,value){
					if(value.bp_Id == bpId && value.event_Name == eventName)
						{
						////alert(key);
						
							$("#EventID_"+key).text(value.event_Id);
						}
				});
				/*//console.log(response.bp_Id);
				var appendSelectBPID = [];
				var appendSelectBPName = [];
				$.each(response.bp_Id,function(key1,val){
					appendSelectBPID.push('<option value="'+val+'">'+val+'</option>');
					////console.log(val);
				});
				$.each(response.partner_Name,function(key,val){
					appendSelectBPName.push('<option value="'+val+'">'+val+'</option>');
					////console.log(val);
				});
				for(i=0;i<data.length;i++)
					{
					var selectboxBPID = '<select style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="businessPartId_'+key+'">'+appendSelectBPID+'</select>';
					var selectboxBPName = '<select style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 180px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="businessPartName_'+key+'">'+appendSelectBPName+'</select>';
					var eventsboxes = '<tr id="row_val_" class="Event_class"><td class="p-1" style="display: block;"><input type="checkbox" name="event" style="width:14px;margin-top: 3px;"/></td><td class="" style="font-size: 10px;padding:1px;"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 50px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="EventID_"></div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;display:none;" id="ajsdhkasd"></div>'+selectboxBPID+'</td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 180px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;display:none;" id="event_name_"></div>'+selectboxBPName+'</td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 150px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="EventName">'+value+'</div></td><td class="pl-1"><div id="Evidence-" class="PhotoEvidence" style="display:none;"></div><div style="" id="date_"><label class="switch"><input class="switch-input" id="switch-input-" type="checkbox" onchange="javascript:return setPhotoEvidence();"/><span class="switch-label" data-on="Yes" data-off="No"></span><span class="switch-handle"></span></label></div></td></tr>';
					$("#inboxesvalues>tbody").append(eventsboxes);
					}
				////alert($("#businessPartId_"+key).val());
				selectBusinessPartId($("#businessPartId_"+key).val(),value);*/
				
				//var jsdkjf= $("#dfahkjk").val();
			}	
			});
			
	
		

}
function fn(text, count, insertDots){
    return text.slice(0, count) + (((text.length > count) && insertDots) ? "..." : "");
}
function setPhotoEvidenceUpdate(id)
{
	////alert(id)
	var lskdf = $("input[type='radio']:checked").val();
if(id == lskdf){
	 var isChecked = $("#switch-input-"+id).is(':checked');
	    var selectedData;
	    var $switchLabel = $('.switch-label');
	    if(isChecked) {
	    	var sdf = $("#gallery-"+id+"> .abcd").length;
	    	//var sdf = $.cookie("filesUpdateShipemtCount-"+event);
			var sdfiles = $.cookie("filesUpdateShipemtFiles-"+event);
	      selectedData = $switchLabel.attr('data-on');
	      $("#Evidence-"+id).text("yes");
	      $("#gallery-"+id).show();
	      $("#EvidenceUploadFile").prop('disabled', false);
	      $("#uplodimageslist").css({"background":"#6c757d","color":"#fff"}).text(sdf+" Files Uploaded");
	      
	      
	    } else {
	      selectedData = $switchLabel.attr('data-off');
	      $("#Evidence-"+id).text("No");
	   
	      $("#EvidenceUploadFile").prop('disabled', true);	
	      $(".gallery").hide();
	      $("#uplodimageslist").css({"background":"#fff","color":"#000"}).text("0 Files Uploaded");
	    }
}else{
	
	if($("#switch-input-"+id).prop("checked") == false)
	{
		////alert(this);
		$("#switch-input-"+id).prop("checked",true);
	}else if($("#switch-input-"+id).prop("checked") == true)
	{
		
		$("#switch-input-"+id).prop("checked",false);
	}
	//$("#switch-input-"+id).prop("checked",false);
}
	
	

}
function setPhotoEvidence(id)
{
	////alert(id)
	 var isChecked = $("#switch-input-"+id).is(':checked');
	    var selectedData;
	    var $switchLabel = $('.switch-label');
	    if(isChecked) {
	      selectedData = $switchLabel.attr('data-on');
	      $("#Evidence-"+id).text("yes");
	    } else {
	      selectedData = $switchLabel.attr('data-off');
	      $("#Evidence-"+id).text("No");

	    }

}

function upNdown(val)
{
	var value=$("input:radio[name=event]:checked").val();
	if(val == "up"){
		$("#row_val_"+value).insertBefore($("#row_val_"+value).prev()); 
	}
	if(val == "down"){
		$("#row_val_"+value).insertAfter($("#row_val_"+value).next()); 
	}
}

function upNdownNew(val)
{
	
	//var value=$("input:checkbox[name=event[]]:checked").val();
	var favorite = [];
	$. each($("input[name='event']:checked"), function(){
	favorite. push($(this). val());
	});
	//console.log(favorite);
	//console.log(favorite[0]);
	if(val == "up"){
		for(i=0;i<favorite.length;i++)
			{
			$("#row_val_"+favorite[i]).insertBefore($("#row_val_"+favorite[i]).prev());
			}
		
		//$("#row_val_"+favorite[0]).insertBefore($("#row_val_"+favorite[0]).prev()); 
	}
	if(val == "down"){
		favorite.reverse()
		for(i=0;i<favorite.length;i++)
			{
			$("#row_val_"+favorite[i]).insertAfter($("#row_val_"+favorite[i]).next());
			}
		//$("#row_val_"+value).insertAfter($("#row_val_"+value).next()); 
	}
	var first = $(location).attr('pathname');
	first.indexOf(1);
	first.toLowerCase();
	//first = first.split("/")[2]
	first = first.split("/");
    first = first[first.length-1];
	if(first == "CreateShipment.jsp" )
	{
	$('#inboxesvalues2>tbody tr td:last-child').text('Queued').css({"padding":"1% 1%","font-size":"12px","font-weight":"bold"});
	$('#inboxesvalues2>tbody tr:first td:last-child').text('Initialized').css({"padding":"1% 1%","font-size":"12px","font-weight":"bold"});
	//$('#inboxesvalues2>tbody tr:first td:last-child').text('Completed').css({"padding":"1% 1%","font-size":"12px","font-weight":"bold"});
	//$('#inboxesvalues2>tbody tr:eq(1) td:last-child').text('Initialized').css({"padding":"1% 1%","font-size":"12px","font-weight":"bold"});
	}
}
function refreshicon()
{
	 var first = $(location).attr('pathname');
	    first.indexOf(1);
	    first.toLowerCase();
	 //   first = first.split("/")[2]
        first = first.split("/");
        first = first[first.length-1];
	    if(first == "RouteMaster.jsp")
	    	{
	    		var bp_name = $("#bp_name").val();
	    		getbp_id(bp_name);
	    	}
	    if(first == "CreateShipment.jsp"){
	    	var val = $('#routes').val();
	    	var res = val.split(",");
	    	 getbp_id(res[0]);
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
	    /*	  $.getJSON( localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0], function( data ) {
	     			$.each(data.route,function(keys,values){
	    				 if(x == values.route_Id)
	    					 {
	    					 	$("#route_from").val(values.from).css("font-weight","bold");
	    					 	$("#route_to").val(values.to).css("font-weight","bold");
	    					 	$("#route_mode").val(values.primary_Mode_Of_Transport).css("font-weight","bold");
	    					 	$("#route_inco").val(values.inco_Term).css("font-weight","bold");
	    					 }
	     			});*/
		$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0],
    type : "GET",
    dataType: 'json',
	headers: {
	        	    'Authorization': localStorage.getItem('SavedToken')
	        	  },
    success:function( data ){
 $.each(data.route,function(keys,values){
	    				 if(x == values.route_Id)
	    					 {
	    					 	$("#route_from").val(values.from).css("font-weight","bold");
	    					 	$("#route_to").val(values.to).css("font-weight","bold");
	    					 	$("#route_mode").val(values.primary_Mode_Of_Transport).css("font-weight","bold");
	    					 	$("#route_inco").val(values.inco_Term).css("font-weight","bold");
	    					 }
	     			});
}
	     		});
	    	  $("#inboxesvalues>thead>tr>th").show();
	    	  $("#tableheadercols").hide();
	    	 var sysdateime = $("#sysdateandtime").val();
	    	$("#event_date_E0001").val(sysdateime);
	    }	
}

function deletee()
{
	var favorite = [];
	$. each($("input[name='event']:checked"), function(){
	favorite. push($(this). val());
	});
		for(i=0;i<favorite.length;i++)
			{
			$("#row_val_"+favorite[i]).remove();
			}
}
function deleteeRoute()
{
	
	var favorite = [];
	$. each($("input[name='event']:checked"), function(){
	favorite. push($(this). val());
	});
		for(i=0;i<favorite.length;i++)
			{
			$("#row_val_"+favorite[i]).remove();
			}
		
	
	/*var value=$("input:radio[name=event]:checked").val();
	$("#row_val_"+value).remove();*/
}
function dialogboxAddEvent()
{
	var lengthoftr = $("#inboxesvalues2 >tbody tr").length;
	var first = $(location).attr('pathname');
	first.indexOf(1);
	first.toLowerCase();
	//first = first.split("/")[2]
	first = first.split("/");
    first = first[first.length-1];
	if(first == "RouteMaster.jsp"){
		if($("#event_id_val").val() != ''){
		if(lengthoftr > 0 ){
		$("body").css("overflow","hidden");
    	$(".body_blur,.AddEventBlock").show();	
		}}else{
			$("body").css("overflow","hidden");
	    	$(".body_blur,.AddEventBlock").show();	
		}
	}else if(first == "CreateShipment.jsp"){
		if(lengthoftr > 0 ){
			$("body").css("overflow","hidden");
	    	$(".body_blur,.AddEventBlock").show();	
		}else{
			alert("Please Select Atleast One Route")
		}
			
	}
	
	       	
}
function selectBpName(valeea)
{
//	//alert(valee);
	var valeeSting = valeea.split('-');
	var valee = valeeSting[0];
	
	var Role = $.session.get('Role');

		var UserIds = $.session.get('UserId');
	
	$('#eventslist').empty();
	$('#eventslist').append('<option value="">Select Event</option>');
	  var UserId = UserIds;
		var useridsplit = UserId.split('-');
		useridsplit[0].toString();
		useridsplit[0] + "";
		useridsplit[1].toString();
		useridsplit[1] + "";
/*	$.getJSON( localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0], function(data) {
		$.each(data.bussinesPartnersDetails,function(key,value){
			$.each(value,function(keye,val){
				if(valee == val)
					{////alert(valee);
						$("#partnerName").html('<input type="text" value="'+value.company_Name+'" disabled id="companyNameevents" style="width: 60%;margin:1%;padding: 1% 2%;border: 1px solid black;border-radius: 3px;font-size: 12px;font-weight: bold;" />');
					}
			});
		});
	});*/
			$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0],
    type : "GET",
    dataType: 'json',
	headers: {
	        	    'Authorization': localStorage.getItem('SavedToken')
	        	  },
    success:function(data){
  	$.each(data.bussinesPartnersDetails,function(key,value){
			$.each(value,function(keye,val){
				if(valee == val)
					{////alert(valee);
						$("#partnerName").html('<input type="text" value="'+escapeHtml(value.company_Name)+'" disabled id="companyNameevents" style="width: 60%;margin:1%;padding: 1% 2%;border: 1px solid black;border-radius: 3px;font-size: 12px;font-weight: bold;" />');
					}
			});
		});
		}
	});
	/*	$.getJSON( localStorage.getItem("smaasip")+"/SCMXPert/getBusinessdropdown/"+useridsplit[0], function( data ) {
			////alert(data.length);
			//var evets
			$.each(data,function(key,val){
				 var select_device_Id_items = '<option value="'+val+'">'+val+'</option>';
				 $("#eventslist").append(select_device_Id_items);
			});*/
					$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getBusinessdropdown/"+useridsplit[0],
    type : "GET",
    dataType: 'json',
	headers: {
	        	    'Authorization': localStorage.getItem('SavedToken')
	        	  },
    success:function( data ){
  	$.each(data,function(key,val){
				 var select_device_Id_items = '<option value="'+escapeHtml(val)+'">'+escapeHtml(val)+'</option>';
				 $("#eventslist").append(select_device_Id_items);
			});
			}
		});
}
function addEvent()
{
	var first = $(location).attr('pathname');
	first.indexOf(1);
	first.toLowerCase();
	//first = first.split("/")[2]
	first = first.split("/");
    first = first[first.length-1];
	if(first == "RouteMaster.jsp"){
		var selectb = $("#selectvalues").val();
		var selectp = selectb.split('-');
		var selectbp = selectp[0];
			
		var selectevents = $("#eventslist").val();
		var eventid = $("#eventId").val();
		var eventPartnerName = $("#companyNameevents").val();
		var error = document.getElementById("errorr");
		if(selectbp =="" || selectevents =="" || eventid == ""){
			error.innerHTML = "Please Enter All Details";
			return false;
		}
		var events_is = $('#inboxesvalues tr:last').find('td:eq(1) div').attr("id");
			var events_length = $('#inboxesvalues>tbody .Event_class').length;
			var radiovalue=$("input:radio[name=event]:checked").val();
			$("#"+radiovalue).prop("checked", false);
	/*       		var length_events = events_length+1
			var eventNewId = "E000"+length_events; */
			
	         		
			
			//var evetntable = '<tr id="row_val_'+value+'"><td class="p-1"><input type="radio" name="event" style="width:14px;" value="'+value+'"/></td><td class="" style="font-size: 10px;padding:1px;"><input type="text" class="mb-1 form-control" value="'+value+'" style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 50px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;"  /> </td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="partner_name_'+value+'" value="'+partner+'" style="text-align:center;height:25px;font-size: 12px;font-weight:bold;"/></td><td class="pl-1"><input type="text" class="form-control mb-1  inputboxesevents" id="event_name_'+value+'" value="'+event+'" style="height:25px;font-size: 12px;font-weight:bold;"/></td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="event_date__copy'+value+'" value="" placeholder="Select Date" style="height:25px;font-size: 12px;font-weight:bold;"/></td></tr>';
			var eventsboxes = '<tr id="row_val_'+escapeHtml(eventid)+'" class="Event_class"><td class="p-1" style="display: block;"><input type="checkbox" name="event" style="width:14px;" value="'+eventid+'" id="'+escapeHtml(eventid)+'"/></td><td class="" style="font-size: 10px;padding:1px;"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 50px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="'+escapeHtml(eventid)+'">'+escapeHtml(eventid)+'</div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="partner_from_'+escapeHtml(eventid)+'">'+escapeHtml(selectbp)+'</div></td><td style="display:none;"></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 180px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="event_name_'+escapeHtml(eventid)+'">'+escapeHtml(eventPartnerName)+'</div></td><td style="display:none;"></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 150px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="date_'+escapeHtml(eventid)+'">'+escapeHtml(selectevents)+'</div></td><td class="pl-1"><div id="Evidence-'+escapeHtml(eventid)+'" class="PhotoEvidence" style="display:none;"></div><div style="" id="date_'+escapeHtml(eventid)+'"><label class="switch"><input class="switch-input" id="switch-input-'+escapeHtml(eventid)+'" type="checkbox" onchange="javascript:return setPhotoEvidence(\''+escapeHtml(eventid)+'\');"/><span class="switch-label" data-on="Yes" data-off="No"></span><span class="switch-handle"></span></label></div></td></tr>';
	 	// $("#inboxesvalues>tbody").append(eventsboxes);
	 	 $("#inboxesvalues2>tbody").append(eventsboxes);
	 	 //$("#date_"+eventNewId).datepicker();
	 	$("#"+eventid).prop("checked", true);
	 	var div = document.getElementById(eventid);
	 	
	 	$("body").css("overflow","auto");
		$(".body_blur,.AddEventBlock").hide();
		$("#selectvalues,#eventslist,#eventId").val('');
		$("#partnerName").empty();
		
	}else if(first == "CreateShipment.jsp"){
		var selectb = $("#selectvalues").val();
		var selectp = selectb.split('-');
		var selectbp = selectp[0];
			
		var selectevents = $("#eventslist").val();
		var eventid = $("#eventId").val();
		var eventPartnerName = $("#companyNameevents").val();
		var error = document.getElementById("errorr");
		if(selectbp =="" || selectevents =="" || eventid == ""){
			error.innerHTML = "Please Enter All Details";
			return false;
		}
		//var events_is = $('#inboxesvalues2 tr:last').find('td:eq(1) div').attr("id");
			var events_length = $('#inboxesvalues2>tbody .Event_class').length;
			/*var radiovalue=$("input[name=event]:checked").val();
			$("#"+radiovalue).prop("checked", false);*/
	/*       		var length_events = events_length+1
			var eventNewId = "E000"+length_events; */
			
	         		
			
			//var evetntable = '<tr id="row_val_'+value+'"><td class="p-1"><input type="radio" name="event" style="width:14px;" value="'+value+'"/></td><td class="" style="font-size: 10px;padding:1px;"><input type="text" class="mb-1 form-control" value="'+value+'" style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 50px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;"  /> </td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="partner_name_'+value+'" value="'+partner+'" style="text-align:center;height:25px;font-size: 12px;font-weight:bold;"/></td><td class="pl-1"><input type="text" class="form-control mb-1  inputboxesevents" id="event_name_'+value+'" value="'+event+'" style="height:25px;font-size: 12px;font-weight:bold;"/></td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="event_date__copy'+value+'" value="" placeholder="Select Date" style="height:25px;font-size: 12px;font-weight:bold;"/></td></tr>';
			var eventsboxes = '<tr id="row_val_'+escapeHtml(selectbp)+'" class="Event_class"><td class="p-1" style="display: block;"><input type="checkbox" name="event" style="width:14px;" value="'+escapeHtml(selectbp)+'" id="'+escapeHtml(selectbp)+'"/></td><td class="" style="font-size: 10px;padding:1px;"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 50px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="'+escapeHtml(selectbp)+'">'+escapeHtml(eventid)+'</div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="partner_from_'+escapeHtml(selectbp)+'">'+escapeHtml(selectbp)+'</div></td><td style="display:none;"></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 180px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="event_name_'+escapeHtml(selectbp)+'">'+escapeHtml(eventPartnerName)+'</div></td><td style="display:none;"></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 150px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="date_'+escapeHtml(selectbp)+'">'+escapeHtml(selectevents)+'</div></td><td class="pl-1"><div id="Evidence-'+escapeHtml(eventid)+'" class="PhotoEvidence" style="display:none;"></div><div style="" id="date_'+escapeHtml(selectbp)+'"><label class="switch"><input class="switch-input" id="switch-input-'+escapeHtml(selectbp)+'" type="checkbox" onchange="javascript:return setPhotoEvidence(\''+escapeHtml(selectbp)+'\');"/><span class="switch-label" data-on="Yes" data-off="No"></span><span class="switch-handle"></span></label></div></td><td style="padding: 1%; font-size: 12px; font-weight: bold;">Queued</td></tr>';
	 	 $("#inboxesvalues2>tbody").append(eventsboxes);
	 	 //$("#date_"+eventNewId).datepicker();
	 	$("#"+eventid).prop("checked", true);
	 	var div = document.getElementById(eventid);
	 	
	 	$("body").css("overflow","auto");
		$(".body_blur,.AddEventBlock").hide();
		$("#selectvalues,#eventslist,#eventId").val('');
		$("#partnerName").empty();
		
	}else{
		var selectbp = $("#selectvalues").val();
		var selectevents = $("#eventslist").val();
		var eventid = $("#eventId").val();
		var events_is = $('#inboxesvalues tr:last').find('td:eq(1) div').attr("id");
			var events_length = $('#inboxesvalues>tbody .Event_class').length;
			/*var radiovalue=$("input:radio[name=event]:checked").val();
			$("#"+radiovalue).prop("checked", false);*/
	/*       		var length_events = events_length+1
			var eventNewId = "E000"+length_events; */
			
	         		
			
			//var evetntable = '<tr id="row_val_'+value+'"><td class="p-1"><input type="radio" name="event" style="width:14px;" value="'+value+'"/></td><td class="" style="font-size: 10px;padding:1px;"><input type="text" class="mb-1 form-control" value="'+value+'" style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 50px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;"  /> </td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="partner_name_'+value+'" value="'+partner+'" style="text-align:center;height:25px;font-size: 12px;font-weight:bold;"/></td><td class="pl-1"><input type="text" class="form-control mb-1  inputboxesevents" id="event_name_'+value+'" value="'+event+'" style="height:25px;font-size: 12px;font-weight:bold;"/></td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="event_date__copy'+value+'" value="" placeholder="Select Date" style="height:25px;font-size: 12px;font-weight:bold;"/></td></tr>';
			var eventsboxes = '<tr id="row_val_'+escapeHtml(eventid)+'" class="Event_class"><td class="p-1" style="display: block;"><input type="checkbox" name="event" style="width:14px;" value="'+escapeHtml(eventid)+'" id="'+escapeHtml(eventid)+'"/></td><td class="" style="font-size: 10px;padding:1px;"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 50px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="'+escapeHtml(eventid)+'">'+escapeHtml(eventid)+'</div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="partner_from_'+escapeHtml(eventid)+'">'+escapeHtml(selectbp)+'</div></td><td style="display:none;"></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 180px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="event_name_'+escapeHtml(eventid)+'">'+escapeHtml(eventPartnerName)+'</div></td><td style="display:none;"></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 150px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="date_'+escapeHtml(eventid)+'">'+escapeHtml(selectevents)+'</div></td><td class="pl-1"><div id="Evidence-'+escapeHtml(eventid)+'" class="PhotoEvidence" style="display:none;"></div><div style="" id="date_'+escapeHtml(eventid)+'"><label class="switch"><input class="switch-input" id="switch-input-'+escapeHtml(eventid)+'" type="checkbox" onchange="javascript:return setPhotoEvidence(\''+escapeHtml(eventid)+'\');"/><span class="switch-label" data-on="Yes" data-off="No"></span><span class="switch-handle"></span></label></div></td></tr>';
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
	
	
	
}

function addEventNewRoute()
{
var first = $(location).attr('pathname');
	first.indexOf(1);
	first.toLowerCase();
	//first = first.split("/")[2]
	first = first.split("/");
    first = first[first.length-1];
	if(first == "RouteMaster.jsp"){
		var selectb = $("#selectvalues").val();
		var selectp = selectb.split('-');
		var selectbp = selectp[0];
			
		var selectevents = $("#eventslist").val();
		var eventid = $("#eventId").val();
		var eventPartnerName = $("#companyNameevents").val();
		var error = document.getElementById("errorr");
		if(selectbp =="" || selectevents =="" || eventid == ""){
			error.innerHTML = "Please Enter All Details";
			return false;
		}
		var events_is = $('#inboxesvalues tr:last').find('td:eq(1) div').attr("id");
			var events_length = $('#inboxesvalues>tbody .Event_class').length;
			var radiovalue=$("input:radio[name=event]:checked").val();
			$("#"+radiovalue).prop("checked", false);
	/*       		var length_events = events_length+1
			var eventNewId = "E000"+length_events; */
			
	         		
			
			//var evetntable = '<tr id="row_val_'+value+'"><td class="p-1"><input type="radio" name="event" style="width:14px;" value="'+value+'"/></td><td class="" style="font-size: 10px;padding:1px;"><input type="text" class="mb-1 form-control" value="'+value+'" style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 50px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;"  /> </td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="partner_name_'+value+'" value="'+partner+'" style="text-align:center;height:25px;font-size: 12px;font-weight:bold;"/></td><td class="pl-1"><input type="text" class="form-control mb-1  inputboxesevents" id="event_name_'+value+'" value="'+event+'" style="height:25px;font-size: 12px;font-weight:bold;"/></td><td class="pl-1"><input type="text" class="form-control mb-1 inputboxesevents" id="event_date__copy'+value+'" value="" placeholder="Select Date" style="height:25px;font-size: 12px;font-weight:bold;"/></td></tr>';
			var eventsboxes = '<tr id="row_val_'+escapeHtml(eventid)+'" class="Event_class"><td class="p-1" style="display: block;"><input type="checkbox" name="event" style="width:14px;" value="'+escapeHtml(eventid)+'" id="'+escapeHtml(eventid)+'"/></td><td class="" style="font-size: 10px;padding:1px;"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 50px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="'+escapeHtml(eventid)+'">'+escapeHtml(eventid)+'</div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="partner_from_'+escapeHtml(eventid)+'">'+escapeHtml(selectbp)+'</div></td><td style="display:none;"></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 180px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="event_name_'+escapeHtml(eventid)+'">'+escapeHtml(eventPartnerName)+'</div></td><td style="display:none;"></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 150px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="date_'+escapeHtml(eventid)+'">'+escapeHtml(selectevents)+'</div></td><td class="pl-1"><div id="Evidence-'+escapeHtml(eventid)+'" class="PhotoEvidence" style="display:none;"></div><div style="" id="date_'+escapeHtml(eventid)+'"><label class="switch"><input class="switch-input" id="switch-input-'+escapeHtml(eventid)+'" type="checkbox" onchange="javascript:return setPhotoEvidence(\''+escapeHtml(eventid)+'\');"/><span class="switch-label" data-on="Yes" data-off="No"></span><span class="switch-handle"></span></label></div></td></tr>';
	 	 $("#inboxesvalues2>tbody").append(eventsboxes);
	 	$("#partnerName").empty();
	 	// $("#inboxesvalues2>tbody").append(eventsboxes);
	 	 //$("#date_"+eventNewId).datepicker();
	 	$("#"+eventid).prop("checked", true);
	 	var div = document.getElementById(eventid);
	 	
	 	$("body").css("overflow","auto");
		$(".body_blur,.AddEventBlock").hide();
		$("#selectvalues,#eventslist,#eventId").val('');
		
		//$("#companyNameevents").empty();
	}
}
function getAllBusinessPartner() {
	var UserId = $.session.get('UserId');
	var useridsplit = UserId.split('-');
	useridsplit[0].toString();
	useridsplit[0] + "";
	useridsplit[1].toString();
	useridsplit[1] + "";

	var token = $.session.get('Token');
	$.ajax({
		url : localStorage.getItem("smaasip")+'/SCMXPert/getAllBusinessPartner/'+useridsplit[0],
		"method": "GET",
  "timeout": 0,
	crossDomain : true,
	        	//dataType: "json",
	        	headers: {Accept : "application/json",
					'Content-Type' : "application/json",
		   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
		   	     	  	    	        	  },
		success : function(filter) {
/*			$.each(filter,
					function(key, value) {
				////alert(value);
						$("#listBusinessPartner,#selectvalues,#event_partner_from").append(
								'<option value="' + escapeHtml( value ) + '">' + escapeHtml( value )
										+ '</option>');
					});*/
			if (sessionStorage.getItem("Role") == "BUSINESSPARTNER") {
				let businessPartnerId = sessionStorage.getItem("UserId").split("-")[1];
				$.each(filter, function(key, value) {
					if (value.includes(businessPartnerId)) {
						$("#listBusinessPartner,#selectvalues,#event_partner_from").append('<option value="' + escapeHtml(value) + '">' + escapeHtml(value) + '</option>');
					}
				});
			}
			else {
				$.each(filter, function(key, value) {
					$("#listBusinessPartner,#selectvalues,#event_partner_from").append('<option value="' + escapeHtml(value) + '">' + escapeHtml(value) + '</option>');
				});
			}
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
function index(){
	var session = $.session.get('UserId');
	if(session == undefined)
		{

			window.location.href = "index.jsp";
		}
}
/*function Dashboard(){
	var UserId = $.session.get('UserId');
	if(UserId != '')
		{
			window.location.href = "Dashboard.jsp";
			
		}	
}*/

function Dashboard(){
    var UserId = $.session.get('UserId');
    if(UserId != '')
        {
            if(sessionStorage.getItem("hashShipmentNumber")!=null)
            {
                $.ajax(
                    {
                        url: `${localStorage.getItem("smaasip")}/SCMXPert/getPartnerAndShipmentNumAndTypeOfReferenceAndDeviceId/${sessionStorage.getItem("hashShipmentNumber")}`,
                        "method": "GET",
                        dataType: "json",
                        headers: 
                        {
                            'Authorization': localStorage.getItem('SavedToken')
                        },
                        success: function(response)                      
                        {
                            let shipment_Num = response.shipment_Num;
                            let device_Id = response.device_Id;
                            let type_Of_Reference = response.type_Of_Reference;
                                                                                       
                            document.cookie = `shp_id=${sessionStorage.getItem("hashShipmentNumber")}`;
                            document.cookie = `shipment_Num=${shipment_Num}`;
                            document.cookie = `device_Id=${device_Id}`;
                            document.cookie = `typeofreference=${type_Of_Reference}`;

                            window.location.href = "UpdateShipmentEvent.jsp";
                            
                        },
                        
                        error: function (xhr, status, error) {
                            $(".login_container").empty();
                            $(".login_container").html('<button type="submit" class="btn login_btn" onclick="javascript:loginToDashboard()">Login</button><button type="button" class="btn login_btn" onclick="window.location.href=\'index.jsp\'">Cancel</button>');
                            $("#usertext1").css("padding-top","0px");
                            $("#error").text("Invalid Shipment Id!")
                            $("#username").val('');
                            $("#password").val('');
                            return false;
                           
                        }
                    })
            }
            else{
            window.location.href = "Dashboard.jsp";
            }
            
        }
    
}


function AlertMaster(){
	var UserId = $.session.get('UserId');
	if(UserId != '')
		{
			window.location.href = "AlertMaster.jsp";
			
		}
}
function AlertDashboard(){
	var UserId = $.session.get('UserId');
	if(UserId != '')
		{
			window.location.href = "AlertDashboard.jsp";
			
		}
}
function AlertProfile(){
	var UserId = $.session.get('UserId');
	if(UserId != '')
		{
			window.location.href = "AlertProfile.jsp";
			
		}
}


function GeofenceMaster(){
	var UserId = $.session.get('UserId');
	if(UserId != '')
		{
			window.location.href = "GeofenceMaster.jsp";
			
		}
}



function fogotPassword(){

			window.location.href = "ForgotPassword.jsp";

	
}
function forgotsendEmail(){
	if($("#forgotemail").val() == ''){
		var error = "Enter Your Email Address";
		$("#errorForgotEail").text(error);
		setTimeout(function(){
			$("#errorForgotEail").text('');
		},4000);
		return false;
	}
	var json_value = {"email":$("#forgotemail").val()};
	var url = localStorage.getItem("smaasip")+"/SCMXPert/Forgot";
	$.ajax({
		 type:"post",
		 url:url,
		 headers: { Accept : "application/json",
					'Content-Type': "application/json" ,
					'Authorization': localStorage.getItem('SavedToken')
			 		}, 
			 		 beforeSend: function() {
			             // $("#loading-image").show();
			             var loading = '<img src="./images/loading.gif" id="loadingimg" style="margin-top:10rem;"/>';
			             $(".body_blur").show().html(loading).css({"background":"#000000c2","position":" fixed","width":" 100%","height":" 100%","z-index":" 99999999","text-align":" center"});
			             $("#loadingimg").show();
			           },
		 data: JSON.stringify(json_value),
		success:function(response){
			////alert("Email Submit Successful");
			 var correct = '<img src="./images/correct.gif" id="tickimg" style="width:65px;"/>';
				
				//var Idb = json_value.userId;
				
				/*$(".showviewdata1")
						.show()   
						.html('<div class="alert alert-success" role="alert" >Business Partner Created <strong> Successfully! </strong> and Your ID is ' + Idb	+ '  <a href="Dashboard.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">Move to Dashboard</a>.</div>');*/
				$(".body_blur").show().html('<div class="alert alert-success" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;text-align:center;">Password Reset link has been sent to your email <strong> Successfully!</strong> Completed</div>').css({"background":"#000000c2"});
				setTimeout(function (){

         		  // Something you want delayed.
         		  //$("#createShipment").hide();
   	    		//Dashboard();
   	    		//after submit
					window.location.href = 'index.jsp';

         		}, 4000); 
		},error: function(xhr, status, error) {
		//	console.log(xhr.responseJSON.status);
			var error = "Invalid Email Address";
			$("#errorForgotEail").text(error);
			$("#forgotemail").css({"border":"1px solid red","color":"red"});
			setTimeout(function(){
				$(".body_blur").hide().empty();
			},2000)
			setTimeout(function(){
				$("#errorForgotEail").text('');
				$("#forgotemail").css({"border":"1px solid #0000004d","color":"#000"});
			},6000)
  /*var err = eval("(" + xhr.responseText + ")");
  alert(err.Message);*/

}
	});
}
function changePassword()
{var first = window.location.href;
var url = new URL(first);
var token = url.searchParams.get("token");
var password = $("#password").val();
/*//alert(c);
first.indexOf(1);
first.toLowerCase();
//alert(first);
first = first.split("?")[3];
	//alert(first);*/
	//return false;
	var json_value = {"resettoken":token,"password":password};
	var url = localStorage.getItem("smaasip")+"/SCMXPert/reset";
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
		success:function(response){
			 var correct = '<img src="./images/correct.gif" id="tickimg" style="width:65px;"/>';
				
				//var Idb = json_value.userId;
				
				/*$(".showviewdata1")
						.show()   
						.html('<div class="alert alert-success" role="alert" >Business Partner Created <strong> Successfully! </strong> and Your ID is ' + Idb	+ '  <a href="Dashboard.jsp" class="alert-link text-primary" style="text-decoration-line: underline;text-decoration-style: solid;">Move to Dashboard</a>.</div>');*/
				$(".body_blur").show().html('<div class="alert alert-success" role="alert" style="background:#fcfefc;width: 60%;margin: auto;top: 45%;text-align:center;">Password Changed <strong> Successfully!</strong> Completed</div>').css({"background":"#000000c2"});
				setTimeout(function (){

            		  // Something you want delayed.
            		  //$("#createShipment").hide();
      	    		//Dashboard();
      	    		//after submit
					window.location.href = 'index.jsp';

            		}, 4000); 
	
		}
	});
}
function GoodsMaster(){
	var UserId = $.session.get('UserId');
	if(UserId != '')
		{
			window.location.href = "GoodsMaster.jsp";
			
		}
}
function RouteMaster()
{
	var UserId = $.session.get('UserId');
	if(UserId != '')
		{
			window.location.href = "RouteMaster.jsp";
			
		}
}
function inuse()
{
	var UserId = $.session.get('UserId');
	if(UserId != '')
		{
			window.location.href = "InUse.jsp";
			
		}
}
function Avaliable()
{
	var UserId = $.session.get('UserId');
	if(UserId != '')
		{
			window.location.href = "Available.jsp";
			
		}
}
function configdevices()
{
	var UserId = $.session.get('UserId');
	if(UserId != '')
		{
			window.location.href = "CreateDeviceTransfer.jsp";
			
		}
}
function Received()
{
	var UserId = $.session.get('UserId');
	if(UserId != '')
		{
			window.location.href = "ReceiveDevices.jsp";
			
		}
}
function BusinessPartner()
{
	var UserId = $.session.get('UserId');
	if(UserId != '')
		{
			window.location.href = "BusinessPartner.jsp";
			
		}
}
function Customer()
{
	var UserId = $.session.get('UserId');
	if(UserId != '')
		{
			window.location.href = "CustomerMaster.jsp";
			
		}
}
function CompleteShipmentpage()
{
	var UserId = $.session.get('UserId');
	if(UserId != '')
		{
			window.location.href = "CompleteShipment.jsp";
			
		}
}
function createshipmentlink()
{
	 window.location.href = "CreateShipment.jsp";
}
function getAllCountriesStates()
{
	var url = localStorage.getItem("smaasip")+"/SCMXPert/getAllCountriesStates";
	/*$.getJSON(url,function(response){
		$.each(response,function(key,value){
			$.each(value,function(k1,v1){
				$.each(v1,function(k2,v2){
					$.each(v2.states,function(k3,v3){
						////console.log("State :- "+v3.stateName+", Country :- "+v2.countryName);
						$.each(v3.cities,function(k4,v4){
							var ship_from = v4+"   "+v2.countryName;
							$("#event_from").append('<option value="'+ship_from+'">'+ship_from+'</option>');
							$("#event_to").append('<option value="'+ship_from+'">'+ship_from+'</option>');
						});
					});
				});
			});
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
			$.each(value,function(k1,v1){
				$.each(v1,function(k2,v2){
					$.each(v2.states,function(k3,v3){
						////console.log("State :- "+v3.stateName+", Country :- "+v2.countryName);
						$.each(v3.cities,function(k4,v4){
							var ship_from = v4+"   "+v2.countryName;
							$("#event_from").append('<option value="'+escapeHtml( ship_from )+'">'+escapeHtml( ship_from )+'</option>');
							$("#event_to").append('<option value="'+escapeHtml( ship_from )+'">'+escapeHtml( ship_from )+'</option>');
						});
					});
				});
			});
		});
		}
		});
}

/*function getListOfBPIds()
{
	var Role = $.session.get('Role');

		var UserIds = $.session.get('UserId');
		////alert(UserIds)
		 var UserId = UserIds;
			var useridsplit = UserId.split('-');
			useridsplit[0].toString();
			useridsplit[0] + "";
			useridsplit[1].toString();
			useridsplit[1] + "";
		$.getJSON( localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0], function( data ) { 	
		 	$.each(data.businessPartner,function(keys,values){
				 var event_partner_from = '<option value="'+values.bp_Id+'">'+values.bp_Id+'</option>';
				 $("#event_partner_from,#selectvalues").append(event_partner_from);
			});   
		});	

	 
}*/
/*function getListOfBPIds()
{
	var Role = $.session.get('Role');

		var UserIds = $.session.get('UserId');
		////alert(UserIds)
		 var UserId = UserIds;
			var useridsplit = UserId.split('-');
			useridsplit[0].toString();
			useridsplit[0] + "";
			useridsplit[1].toString();
			useridsplit[1] + "";
		$.getJSON( localStorage.getItem("smaasip")+"/SCMXPert/getDDData/"+useridsplit[0], function( data ) { 	
		 	$.each(data.businessPartner,function(keys,values){
				 var event_partner_from = '<option value="'+values.bp_Id+'">'+values.bp_Id+'</option>';
				 $("#event_partner_from,#selectvalues").append(event_partner_from);
			});   
		});	

	 
} */


/* maps */
function mapOnLoad(data,name){
	//$('#showmap').empty();
 	$('.showmap').empty();
	 $.cookie("ShipmentsList",JSON.stringify(data));
	/*if(data !=''){
	 	$(".showmap").html('<div id="map" style="width:100%;height:450px;z-index:1;"></div>');
	     L.mapquest.key = 'hNGkuW6RQrAmAPmQ6MKrUr0iJKrzgQwM';
		  L.mapquest.geocoding().geocode(data, createMap);
	}else{
		 $(".showmap > div").remove();
		$(".showmap").html('<div id="map" style="width:100%;height:450px;z-index:1;"></div>');
		L.mapquest.key = 'hNGkuW6RQrAmAPmQ6MKrUr0iJKrzgQwM';
		var map = L.mapquest.map('map', {
	          center: [37.7749, -122.4194],
	          layers: L.mapquest.tileLayer('map'),
	          zoom: 12
	        });
	        map.addControl(L.mapquest.control());
	}*/
	/*$.get(location.protocol + '//nominatim.openstreetmap.org/search?format=json&q='+address, function(data){
	       //console.log(data);
	    });*/
	 
	 $(".showmap").html('<div id="map" class="height400"></div>').show();
	        var map = L.map('map').setView([0,0], 2);
	        mapLink = 
	            '<a href="https://openstreetmap.org">OpenStreetMap</a>';
	        L.tileLayer(
	            'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	            attribution: '&copy; ' + mapLink + ' Contributors',
	            Zoom:1,
	            minZoom:1,
	            maxZoom: 19,
	            }).addTo(map);
	       // var newstr = '[' + data.join(', ') + ']';
	  	//  //console.log(newstr);
	//        alert(data);	        
//alert(data.length);
	    	var token = $.session.get('Token');
	  for (var i = 0; i < data.length; i++) {
		  //console.log(data[i]);
		  
		  var url = localStorage.getItem("smaasip")+"/SCMXPert/getWayInfo/"+data[i];
		  
		  $.ajax({
				url:url,
				type : "GET",
				dataType : "json",
				headers: {
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  },
				success : function(filter) {
					if(filter != ''){
						
					
					//console.log(filter);
					 var directionslist = filter;
					  // alert(directionslist.length-1);
					   var datalistpoints = directionslist[directionslist.length-1];
					    var geojsonMarkerOptions = {
								radius: 5,
								fillColor: "#007bff",
								color: "#000",
								weight: 1,
								opacity: 1,
								fillOpacity: 1
								};
					   var yourData = getInfoFrom(datalistpoints).join(" <br>");
					  ////console.log(yourData);
					  // var sdfsd = uniquewaypoints(res);
					   var waypoinstsplit = datalistpoints["wayPoints"];
					   //console.log(waypoinstsplit);
					   var wayspalit = waypoinstsplit.split(",");
					   //console.log(wayspalit[0])
					   //console.log(wayspalit[1])
					  // var rrose2 = new L.Rrose({ autoPan: false }).setContent('This Is OK');
					   new L.marker([wayspalit[0],wayspalit[1]], geojsonMarkerOptions).addTo(map).bindPopup(yourData);
					   /*var datasplit = data[i].split(",");
						//  //console.log(data[i][0],data[i][1])
					   marker = new L.marker([datasplit[0],datasplit[1]]).addTo(map);*/
					}
					}
				});

		  /*var datasplit = data[i].split(",");
		//  //console.log(data[i][0],data[i][1])
	   marker = new L.marker([datasplit[0],datasplit[1]]).addTo(map);*/
	  }
    
}


  function createMap(error, response) {
  // Initialize the Map
  var map = L.mapquest.map('map', {
    layers: L.mapquest.tileLayer('map'),
    center: [0, 0],
    zoom: 12
  });

  // Generate the feature group containing markers from the geocoded locations
  var featureGroup = generateMarkersFeatureGroup(response);

  // Add markers to the map and zoom to the features
  featureGroup.addTo(map);
  map.fitBounds(featureGroup.getBounds());
}

function generateMarkersFeatureGroup(response) {
  var group = [];
  for (var i = 0; i < response.results.length; i++) {
    var location = response.results[i].locations[0];
    var locationLatLng = location.latLng;

    // Create a marker for each location
    var marker = L.marker(locationLatLng, {icon: L.mapquest.icons.marker({
		    primaryColor: '#18b85a',
		    secondaryColor: '#18b85a',
		    shadow: true,
		    size: 'sm'
		  })})
      .bindPopup(location.adminArea5 + ', ' + location.adminArea3);

    group.push(marker);
  }
  return L.featureGroup(group);
} 
function mapDashboardPointsRoute(shipment_id)
{
	//alert(shipment_id);
	//var getWayPoints =  unique(waypoints)
	var token = $.session.get('Token');
	
	var url = localStorage.getItem("smaasip")+"/SCMXPert/getWayInfo/"+shipment_id;
/*	$.getJSON(url,function(filter){
		//console.log(filter);
	});
	*/
	
	$.ajax({
		url:url,
		type : "GET",
		dataType : "json",
		headers: {
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  },
		success : function(filter) {
			
			//console.log(filter);
			var sdfsd = uniquewaypoints(filter);
		//	   //console.log("sdfsafsdfsdf"+sdfsd);
			$("#showmap > #map").remove();
			$("#showmap > div").remove();
			$("#showmap").html('<div id="map" style="width:100%;height:570px;z-index:1;"></div>');
			 var map = L.map('map', {
			   //    layers: MQ.mapLayer(),
			       center: [0,0],
			       zoom: 12
			   });
			/*mapLink ='<a href="https://openstreetmap.org">OpenStreetMap</a>';
				 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; ' + mapLink + ' Contributors', zoom: 12}).addTo(map);
			   var dir = MQ.routing.directions();*/
			   
			 /*  //console.log(getWayPoints);
			   dir.route({
			       locations: getWayPoints });*/
			   
			   var directionslist = filter;
			  // alert(directionslist.length-1);
			   var datalistpoints = directionslist[directionslist.length-1];
			  /* $.each(directionslist,function(key,value){
			   	var cldsknmf = new Array(new Array(JSON.stringify(value))+','+new Array(value.wayPoints));
			   datalistpoints.push(cldsknmf);
			   });*/
			   ////console.log(new Array(datalistpoints));
			   //var yourData;
			   //var akdsndlkaj = [];
			  
				   
				   //alert(datalistpoints);
			/*	   //console.log(datalistpoints);
				  
			   	var res = eval("[" + datalistpoints + "]");
			   	alert(res);
			    return false;*/
			  // 	var lskdfjm = new Array(res);
			  // 	//console.log(lskdfjm[0][0]);
			  // var custom_icon = L.icon({iconUrl: 'https://assets.mapquestapi.com/icon/v2/via-lg.png'});
			  // //console.log("hello");
			   ////console.log(datalistpoints["wayPoints"]);
			    var geojsonMarkerOptions = {
						radius: 5,
						fillColor: "#007bff",
						color: "#000",
						weight: 1,
						opacity: 1,
						fillOpacity: 1
						};
			   var yourData = getInfoFrom(datalistpoints).join(" <br>");
			  ////console.log(yourData);
			  // var sdfsd = uniquewaypoints(res);
			   var waypoinstsplit = datalistpoints["wayPoints"];
			   //console.log(waypoinstsplit);
			   var wayspalit = waypoinstsplit.split(",");
			   //console.log(wayspalit[0])
			   //console.log(wayspalit[1])
			  // var rrose2 = new L.Rrose({ autoPan: false }).setContent('This Is OK');
			   L.circleMarker(["13.651405","79.438095"], geojsonMarkerOptions).addTo(map).bindPopup(yourData);
			   
			   }
		
	});
}


function mapPointsRoute(waypoints,shipment_id)
{
	//alert(shipment_id);
	var getWayPoints =  unique(waypoints)
	var token = $.session.get('Token');
	var url = localStorage.getItem("smaasip")+"/SCMXPert/getWayInfo/"+shipment_id;
/*	$.getJSON(url,function(filter){
		//console.log(filter);
	});
	*/
	
	$.ajax({
		url:url,
		type : "GET",
		dataType : "json",
		headers: {
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  },
		success : function(filter) {
			
			//console.log(filter);
			var sdfsd = uniquewaypoints(filter);
			   //console.log("sdfsafsdfsdf"+sdfsd);
			//$("#showmap > #map").remove();
			//$("#showmap > div").remove();
			$(".showmap").empty();
			//return false; 
			$("#showmap").html('<div id="map" style="width:100%;height:570px;z-index:1;"></div>');
			 var map = L.map('map', {
			   //    layers: MQ.mapLayer(),
			       center: [0,0],
			       zoom: 12
			   });
			mapLink ='<a href="https://openstreetmap.org">OpenStreetMap</a>';
				 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 25,attribution: '&copy; ' + mapLink + ' Contributors', zoom: 12}).addTo(map);
			   var dir = MQ.routing.directions();
			   
			   //console.log(getWayPoints);
			   dir.route({
			       locations: getWayPoints });
			   
			   var directionslist = filter;
			   var datalistpoints = [];
			   $.each(directionslist,function(key,value){
			   	var cldsknmf = new Array(new Array(JSON.stringify(value))+','+new Array(value.wayPoints));
			   datalistpoints.push(cldsknmf);
			   });
			   ////console.log(new Array(datalistpoints));
			   //var yourData;
			   var akdsndlkaj = [];
			   custom_icon = L.icon({
                   iconUrl: 'https://assets.mapquestapi.com/icon/v2/circle-start-sm.png',
                   iconSize: [16, 16],
                   iconAnchor: [10, 10],
                   popupAnchor: [0, 0]
               });
	             custom_iconcurrent = L.icon({
                   iconUrl: 'https://media.giphy.com/media/loxsoG9TeJ5mtSoABj/giphy.gif',
                   iconSize: [16, 16],
                   iconAnchor: [10, 10],
                   popupAnchor: [0, 0]
               });
	        
			   for(i=0;i<datalistpoints.length;i++)
			   {

				   
				   
			   	var res = eval("[" + datalistpoints[i] + "]");
			   	var lskdfjm = new Array(res);
			   	var res1 = eval("[" + datalistpoints[0] + "]");
			   	var lskdfjm1 = new Array(res1);
			   	var res2 = eval("[" + datalistpoints[datalistpoints.length-1] + "]");
			   	var lskdfjm2 = new Array(res2);
			   	//console.log(lskdfjm[0][0]);
			   	//console.log(lskdfjm1[0][0]);
			   	//console.log(lskdfjm2[0][0]);
			  // var custom_icon = L.icon({iconUrl: 'https://assets.mapquestapi.com/icon/v2/via-lg.png'});
			    var geojsonMarkerOptions = {
						radius: 5,
						fillColor: "#007bff",
						color: "#000",
						weight: 1,
						opacity: 1,
						fillOpacity: 1
						};
	
			   var yourData = getInfoFrom(lskdfjm[0][0]).join(" <br>");
			   var yourData1 = getInfoFrom(lskdfjm1[0][0]).join(" <br>");
			   var yourData2 = getInfoFrom(lskdfjm2[0][0]).join(" <br>");
			   //console.log(yourData);
			   var sdfsd = uniquewaypoints(res);
			   //console.log("sdfsafsdfsdf"+sdfsd);
			   akdsndlkaj.push([res[1],res[2]]);
			  // var rrose2 = new L.Rrose({ autoPan: false }).setContent('This Is OK');
			   L.circleMarker([res[1],res[2]], geojsonMarkerOptions).addTo(map).bindPopup(yourData);
			   L.marker([res1[1],res1[2]], {icon: custom_icon}).addTo(map).bindPopup(yourData1);
               L.marker([res2[1],res2[2]], {icon: custom_iconcurrent}).addTo(map).bindPopup(yourData2);
			   }
			   
			  // alert(akdsndlkaj);
			   var polyline = L.polyline(akdsndlkaj, {color: 'red'}).addTo(map);
				// zoom the map to the polyline
				map.fitBounds(polyline.getBounds());

			   ////console.log("akljl"+yourData);
			   ////console.log(yourData);
			  
			   
			  // //console.log($.parseJSON(getWayPoints));
			   /*var result = getWayPoints.map(x => Object.values(x));
			   //console.log(result);  */
	        

                 
//	             alert(getWayPoints[0][0]);
//	             alert(getWayPoints[0][1]);
//	             var axis = getWayPoints[0];
//	             var axiscurrent = getWayPoints[getWayPoints.length-1];
//	             var sdmfl = axis.split(",");
//	             var sdmf2 = axiscurrent.split(",");
///*	             alert(sdmfl[0]);
//	             alert(sdmfl[1]);*/
//                L.marker([sdmfl[0],sdmfl[1]], {icon: custom_icon}).addTo(map);
//                L.marker([sdmf2[0],sdmf2[1]], {icon: custom_iconcurrent}).addTo(map);
			   var polyline = L.polyline(getWayPoints, {color: '#820f1f'}).addTo(map);
			// zoom the map to the polyline
			/*   custom_icon = L.icon({
                   iconUrl: 'https://assets.mapquestapi.com/icon/v2/circle-start-sm.png',
                   iconSize: [20, 29],
                   iconAnchor: [10, 29],
                   popupAnchor: [0, -29]
               });*/
/*//console.log(uniquewaypoints(getWayPoints));
               marker = L.marker(getWayPoints[0], {icon: custom_icon}).addTo(map);*/
			map.fitBounds(polyline.getBounds());
			   
			   
				                /* CustomRouteLayer = MQ.Routing.RouteLayer.extend({
				 				
				 				
				                     createStartMarker: function (location, stopNumber) {
				 					
				                         var custom_icon;
				                         var marker;
				 						//alert(location.latLng);

				                         custom_icon = L.icon({
				                             iconUrl: 'https://assets.mapquestapi.com/icon/v2/circle-start-sm.png',
				                             iconSize: [20, 29],
				                             iconAnchor: [10, 29],
				                             popupAnchor: [0, -29]
				                         });

				                         marker = L.marker(location.latLng, {icon: custom_icon}).addTo(map);

				                         return marker;
				                     },
				 					createStopMarker: function (location, stopNumber) {
				 					
				 				//console.log(location.latLng)
				                         var custom_icon;
				                         var marker;
				                         custom_icon = L.icon({
				                             iconUrl: ' ',
				                             iconSize: [1, 1]
				 					
				 			
				 			
				                         });
				                         marker = L.marker(location.latLng, {icon: custom_icon}).addTo(map);
				 				                        return marker;
				                     },
				                     createEndMarker: function (location, stopNumber) {
				                         var custom_icon;
				                         var marker;

				                         custom_icon = L.icon({
				                             iconUrl: 'https://media.giphy.com/media/loxsoG9TeJ5mtSoABj/giphy.gif',
				                             iconSize: [20, 29],
				                             iconAnchor: [10, 29],
				                             popupAnchor: [0, -29]
				                         });

				                         marker = L.marker(location.latLng, {icon: custom_icon}).addTo(map);

				                         return marker;
				                     }
				                 });

				                 map.addLayer(new CustomRouteLayer({
				                     directions: dir,
				                     fitBounds: true,
				 					     ribbonOptions: {
				     draggable: false,
				     ribbonDisplay: { color: '#820f1f', opacity: 0.58 }
				   
				                } }));
				                 $(".leaflet-popup ").removeAttr("style");*/
				                 
		}
		
		
	});
	
	
   	
  //  L.mapquest.key = 'hNGkuW6RQrAmAPmQ6MKrUr0iJKrzgQwM';
    
 /*  var getWayPoints =  unique(getPointsWays);
   var waywlngth = getWayPoints.length;*/
  /* alert(getWayPoints[0]);
   alert(getWayPoints[waywlngth-1]);
   //console.log(getWayPoints);*/
   /* var map = L.mapquest.map('map', {
        center: [0,0],
        layers: L.mapquest.tileLayer('map'),
        zoom: 13
      });
    L.mapquest.directions().route({
      start: '"'+getWayPoints[0]+'"',
      end: '"'+getWayPoints[waywlngth-1]+'"',
      waypoints: getWayPoints
    });*/
    
   /* L.mapquest.textMarker([45, -120], {
    	  text: 'Coffee Shop',
    	  subtext: 'Iconic coffeehouse chain',
    	  position: 'right',
    	  type: 'marker',
    	  icon: {
    	    primaryColor: '#333333',
    	    secondaryColor: '#333333',
    	    size: 'sm'
    	  }
    	}).addTo(map);*/
   /* var markerSize = {'sm': [28, 35], 'md': [35, 44], 'lg': [42, 53]};
    var markerAnchor = {'sm': [14, 35], 'md': [17, 44], 'lg': [21, 53]};
    var markerPopupAnchor = {'sm': [1, -35], 'md': [1, -44], 'lg': [2, -53]};
    var smallMarker = L.icon({
        iconUrl: 'https://assets.mapquestapi.com/icon/v2/marker-sm.png',
        iconRetinaUrl: 'https://assets.mapquestapi.com/icon/v2/marker-sm@2x.png',
        iconSize: markerSize.sm,
        iconAnchor: markerAnchor.sm,
        popupAnchor: markerPopupAnchor.sm
      });*/
  

}

function getInfoFrom(object) {
	   var popupFood = [];
	   for (var key in object) {
		   
		   var stringLine = '';
	     if (object.hasOwnProperty(key)) {
//	    	 alert(key);
	    	 if(key =="wayPoints")
	    		 {
	    		 	//alert(object[key]);
	    		  stringLine ='<b>Lat-Long :- </b><span style="color:#820f1f;font-weight:bold;">'+object[key]+'</span>';
	    		 }
	    	 if(key =="address")
		 {
		 	//alert(object[key]);
		  stringLine ='<b>Address :- </b><span style="color:#820f1f;font-weight:bold;">'+object[key]+'</span>';
		 }
	    	 if(key =="shipment_Num")
		 {
		 	//alert(object[key]);
	//	  stringLine ='<b>Shipment Number :- </b><span style="color:#820f1f;font-weight:bold;">'+object[key]+'</span>';
		  stringLine ='<b>Delivery Number :- </b><span style="color:#820f1f;font-weight:bold;">'+object[key]+'</span>';
		 }
	    	 if(key =="device_Id")
		 {
		 	//alert(object[key]);
		  stringLine ='<b>Device :- </b><span style="color:#820f1f;font-weight:bold;">'+object[key]+'</span>';
		 }
	    	 if(key =="sensorUTC")
		 {
		 	//alert(object[key]);
		  stringLine ='<b>Date & Time :- </b><span style="color:#820f1f;font-weight:bold;">'+dateFormat(object[key], "dd-mmm-yyyy HH:MM Z")+'</span>';
		 }
	      // var stringLine = key + " : " + object[key];
	       popupFood.push(stringLine);
	     }
	   }
	   return popupFood;
	 }



function unique(getPointsWays) {
	////console.log("waypoinst:- "+getPointsWays);
    var result = [];
    $.each(getPointsWays, function(i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
}
function uniquewaypoints(getPointsWays) {
	////console.log("waypoinst:- "+getPointsWays[1]);
    var result = [];
    $.each(getPointsWays, function(i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
}
function cap(str) {
    return str.replace(/([a-z])/, function (match, value) {
        return value.toUpperCase();
    })
}

function exportTableToCSV(filename) {
    var csv = [];
    var rows = document.querySelectorAll("table tr");
   
    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");
        
        for (var j = 0; j < cols.length; j++) 
            row.push(cols[j].innerText);
        
        csv.push(row.join(","));        
    }

    // Download CSV file
    downloadCSV(csv.join("\n"), filename);
}
function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV file
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Hide download link
    downloadLink.style.display = "none";

    // Add the link to DOM
    document.body.appendChild(downloadLink);

    // Click download link
    downloadLink.click();
}
function makeid(length) {
	   var result           = '';
	   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	   var charactersLength = characters.length;
	   for ( var i = 0; i < length; i++ ) {
	      result += characters.charAt(Math.floor(Math.random() * charactersLength));
	   }
	   return result;
	}

function downloadAll(urls) {
	////alert(urls);
	  var link = document.createElement('img');

	  link.setAttribute('download', null);
	  link.style.display = 'none';

	  document.body.appendChild(link);

	  for (var i = 0; i < urls.length; i++) {
		 
	    link.setAttribute('src', urls[i]);
	    
	    link.click();
	  }
//console.log(link);
	  document.body.removeChild(link);
	}

function compressed_img(urls,nombre) {
	  var zip = new JSZip();
	  var count = 0;
	  var name = nombre+".zip";
	  urls.forEach(function(url){
	  //console.log(url);
	    JSZipUtils.getBinaryContent(url, function (err, data) {
	    //console.log("hello");
	    //console.log(err);
	      if(err) {
	         throw err; 
	      }
	       zip.file(url, data,  {binary:true});
	       count++;
	       if (count == urls.length) {
	         zip.generateAsync({type:'blob'}).then(function(content) {
	            saveAs(content, name);
	         });
	       }
	      });
	  });
	}


function selectRoute(Route_id)
{
	 var UserId = $.session.get('UserId');
	 var Role = $.session.get('Role');

	 	var UserIds = $.session.get('UserId');

	 var UserId = UserIds;
	 	var useridsplit = UserId.split('-');
	 	useridsplit[0].toString();
	 	useridsplit[0] + "";
	 	useridsplit[1].toString();
	 	useridsplit[1] + "";
	//alert(useridsplit[0])
	 var RouteMasterGetRoute = localStorage.getItem("smaasip")+"/SCMXPert/getRoutes/"+useridsplit[0];
//console.log(RouteMasterGetRoute)

		RouteDetailsWithId(Route_id,RouteMasterGetRoute);
}


function RouteDetailsWithId(Route_id,RouteMasterGetRoute)
{
$("#refreshiconcreateShipment").attr("onclick","return selectRoute('"+escapeHtml(Route_id)+"')");
	var Role = $.session.get('Role');

	var UserIds = $.session.get('UserId');

  var UserId = UserIds;
	var useridsplit = UserId.split('-');
	useridsplit[0].toString();
	useridsplit[0] + "";
	useridsplit[1].toString();
	useridsplit[1] + "";
	/*$.getJSON( localStorage.getItem("smaasip")+"/SCMXPert/getBusinessdropdown/"+useridsplit[0], function( data ) {}).abort();*/
			$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getBusinessdropdown/"+useridsplit[0],
    type : "GET",
    dataType: 'json',
	headers: {
			   	     	  	    	        	    'Authorization': localStorage.getItem('SavedToken')
			   	     	  	    	        	  },
    success:function( data ){
  }
}).abort();
	if(Route_id != ''){
		//alert(Route_id);
	/*	$.getJSON(RouteMasterGetRoute,function(response){
			$.each(response,function(a,b){
				if(b.route_Id == Route_id)
					{
					$("#inboxesvalues>tbody").empty().hide();
					$("#inboxesvalues2>tbody").empty();
					$("#createEvent").hide();
					$("#updateEvent").show();
					$("#event_id_val").val(Route_id);
						$("#event_type_val").val(b.route_Id);
						$("#route_name_from,#route_from").val(b.from);
						$("#route_name_to,#route_to").val(b.to);
						$("#event_pri_mode,#route_mode").val(b.primary_Mode_Of_Transport);
						$("#event_inco,#route_inco").val(b.inco_Term);
						var val = b.std_Duration;
						var res = val.split(" ");
						$("#event_std_dur").val(res[0]);
						$("#days_months").val(res[1]);	
						$("#event_status").val(b.status);
						$("#event_description").val(b.description);
						$("#cust_route_id").val(b.custRouteId);
						var UserIds = $.session.get('UserId');

						 var UserId = UserIds;
						 	var useridsplit = UserId.split('-');
						 	useridsplit[0].toString();
						 	useridsplit[0] + "";
						 	useridsplit[1].toString();
						 	useridsplit[1] + "";
						$.each(b.default_Business_Partners_and_Events,function(key,values){
							//alert(values.event_Name);
							//alert(values.event_Id)
							   setTimeout(function() {*/
										$.ajax({
    url: RouteMasterGetRoute,
    type : "GET",
    dataType: 'json',
	headers: {
	        	    'Authorization': localStorage.getItem('SavedToken')
	        	  },
    success:function(response){
	//console.log(response)
 	$.each(response,function(a,b){
				if(b.route_Id == Route_id)
					{
					$("#inboxesvalues>tbody").empty().hide();
					$("#inboxesvalues2>tbody").empty();
					$("#createEvent").hide();
					$("#updateEvent").show();
					$("#event_id_val").val(Route_id);
						$("#event_type_val").val(b.route_Id);
						$("#route_name_from,#route_from").val(b.from);
						$("#route_name_to,#route_to").val(b.to);
						$("#event_pri_mode,#route_mode").val(b.primary_Mode_Of_Transport);
						$("#event_inco,#route_inco").val(b.inco_Term);
						var val = b.std_Duration;
						var res = val.split(" ");
						$("#event_std_dur").val(res[0]);
						$("#days_months").val(res[1]);	
						$("#event_status").val(b.status);
						$("#event_description").val(b.description);
						$("#cust_route_id").val(b.custRouteId);
						var UserIds = $.session.get('UserId');

						 var UserId = UserIds;
					//alert(UserId)
						 	var useridsplit = UserId.split('-');
						 	useridsplit[0].toString();
						 	useridsplit[0] + "";
						 	useridsplit[1].toString();
						 	useridsplit[1] + "";
						$.each(b.default_Business_Partners_and_Events,function(key,values){
						//	alert(values.event_Name);
						//	alert(values.event_Id)
							   setTimeout(function() {
						/*	$.getJSON( localStorage.getItem("smaasip")+"/SCMXPert/getEventBpid/"+useridsplit[0]+"/"+values.event_Name, function( response ) {
								//alert(response);
								var first = $(location).attr('pathname');
								first.indexOf(1);
								first.toLowerCase();
								first = first.split("/")[2]
								////console.log(response.length);
								var appendSelectBPID = [];
								var appendSelectBPName = [];
								$.each(response,function(key1,value){
									appendSelectBPID.push('<option value="'+value.bp_Id+'">'+value.bp_Id+'</option>');
									appendSelectBPName.push('<option value="'+value.partner_Name+'">'+value.partner_Name+'</option>');
								});
								var selectboxBPID =  '<select style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="businessPartIdU_'+key+'" onchange="javascript:return changeBusinessUpdatePartnerEvent(\''+key+'\',\''+values.event_Name+'\',this.value);">'+appendSelectBPID+'</select>';
								var selectboxBPName = '<select style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 180px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="businessPartNameU_'+key+'" onchange="javascript:return changeBusinessPartnerUpdatedEventByName(\''+key+'\',\''+values.event_Name+'\',this.value);">'+appendSelectBPName+'</select>';
								////console.log(selectboxBPID);
								////console.log(selectboxBPID);
								var eventsboxes = '<tr id="row_val_'+key+'" class="Event_class"><td class="p-1" style="display: block;"><input type="checkbox" name="event" value="'+key+'" style="width:14px;margin-top: 3px;"/></td><td class="" style="font-size: 10px;padding:1px;"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 50px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="EventIDU_'+key+'">'+values.event_Id+'</div></td><td class="pl-1" style="display:none;"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;display:none;" id="EventBusinessPartnerIdU_'+key+'"></div></td><td>'+selectboxBPID+'</td><td class="pl-1" style="display:none;"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 180px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;display:none;" id="EventBusinessPartNerNameU_'+key+'"></div></td><td>'+selectboxBPName+'</td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 150px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="EventName">'+values.event_Name+'</div></td><td class="pl-1"><div id="Evidence-'+key+'" class="PhotoEvidence" style="display:none;">'+values.photo_Evidence+'</div><div style="" id="date_'+key+'"><label class="switch"><input class="switch-input" id="switch-input-'+key+'" type="checkbox" onchange="javascript:return setPhotoEvidence(\''+key+'\');"/><span class="switch-label" data-on="Yes" data-off="No"></span><span class="switch-handle"></span></label></div></td><td></td></tr>';
								////alert(values.bp_Id);
								
								//$("#inboxesvalues2>tbody").append(eventsboxes);
								$("#tableHeader,#inboxesvalues2").show();
								
								if(first == "CreateShipment.jsp" || first == "RouteMaster.jsp"){
									$('#inboxesvalues2>tbody').append(eventsboxes).delay(300).queue(function (next) {
										   // $(this).append(eventsboxes);
										$("#businessPartIdU_"+key).val(values.bp_Id);
										var bp_lisdkfd = $("#businessPartIdU_"+key).val();
										//alert("hello "+bp_lisdkfd)
										    next();
										//changeBusinessPartnerUpdatedEventByName(key,values.event_Name,bp_lisdkfd);
										    selectBusinessUpdatePartId(bp_lisdkfd,values.event_Name,key);
										});
								}
								*/
								
								/*changeBusinessPartnerEvent(key,values.event_Name,$("#businessPartId_"+key).val());
								selectBusinessPartId($("#businessPartId_"+key).val(),values.event_Name,key);*/
								/*var appendSelectBPID = [];
								var appendSelectBPName = [];
								$.each(response.bp_Id,function(key1,val){
									appendSelectBPID.push('<option value="'+val+'">'+val+'</option>');
									////console.log(val);
								});
								$.each(response.partner_Name,function(key,val){
									appendSelectBPName.push('<option value="'+val+'">'+val+'</option>');
									////console.log(val);
								});
								for(i=0;i<data.length;i++)
									{
									var selectboxBPID = '<select style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="businessPartId_'+key+'">'+appendSelectBPID+'</select>';
									var selectboxBPName = '<select style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 180px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="businessPartName_'+key+'">'+appendSelectBPName+'</select>';
									var eventsboxes = '<tr id="row_val_" class="Event_class"><td class="p-1" style="display: block;"><input type="checkbox" name="event" style="width:14px;margin-top: 3px;"/></td><td class="" style="font-size: 10px;padding:1px;"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 50px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;"  id="EventID_'+key+'"></div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;display:none;" id="ajsdhkasd"></div>'+selectboxBPID+'</td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 180px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;display:none;" id="event_name_"></div>'+selectboxBPName+'</td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 150px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="EventName">'+value+'</div></td><td class="pl-1"><div id="Evidence-" class="PhotoEvidence" style="display:none;"></div><div style="" id="date_"><label class="switch"><input class="switch-input" id="switch-input-" type="checkbox" onchange="javascript:return setPhotoEvidence();"/><span class="switch-label" data-on="Yes" data-off="No"></span><span class="switch-handle"></span></label></div></td></tr>';
									$("#inboxesvalues>tbody").append(eventsboxes);*/
								/*	}*/
								////alert($("#businessPartId_"+key).val());
								//selectBusinessPartId($("#businessPartId_"+key).val(),value);
								
								//var jsdkjf= $("#dfahkjk").val();
								////alert(key);
							//	//alert($("#businessPartId_"+key).val());
					/*	if(values.photo_Evidence == "yes")
		        	    		{
		        	    		//alert("#switch-input-"+key);
		        	    			$("#switch-input-"+key).prop('checked',true);
		        	    		}else{
		        	    			$("#switch-input-"+key).prop('checked',false);
		        	    		}
								
								if(first == "CreateShipment.jsp" )
									{
									$('#inboxesvalues2>tbody tr td:last-child').text('Queued').css({"padding":"1% 1%","font-size":"12px","font-weight":"bold"});
									$('#inboxesvalues2>tbody tr:first td:last-child').text('Initialized').css({"padding":"1% 1%","font-size":"12px","font-weight":"bold"});
									}
								
								//$("#inboxesvalues2>tbody").closest('table').children('tr:first').children('tr:last').text("hello");
							});
							
							
							   }, key * 500)
							    key++;
							  
							   $("#businessPartIdU_"+key).val(values.bp_Id)*/
							
							/*var dskjdslkfg = $("#businessPartIdU_"+key).val();
							 //console.log("sdlkjfnh"+dskjdslkfg);*/
							 
							 
							 
							
							
							
							   
							
							
							
		             	    	/*var eventsboxes = '<tr id="row_val_'+values.event_Id+'" class="Event_class"><td class="p-1" style="display: block;"><input type="radio" name="event" style="width:14px;" value="'+values.event_Id+'" id="'+values.event_Id+'"/></td><td class="" style="font-size: 10px;padding:1px;"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 50px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="'+values.event_Id+'">'+values.event_Id+'</div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="partner_from_'+values.event_Id+'">'+values.bp_Id+'</div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 180px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="event_name_'+values.event_Id+'">'+values.bp_Name+'</div></td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 150px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="date_'+values.event_Id+'">'+values.event_Name+'</div></td><td class="pl-1"><div id="Evidence-'+values.event_Id+'" class="PhotoEvidence" style="display:none;">'+values.photo_Evidence+'</div><div style="" id="date_'+values.event_Id+'"><label class="switch"><input class="switch-input" id="switch-input-'+values.event_Id+'" type="checkbox" onchange="javascript:return setPhotoEvidence(\''+values.event_Id+'\');"/><span class="switch-label" data-on="Yes" data-off="No"></span><span class="switch-handle"></span></label></div></td></tr>';
		             	    	$("#inboxesvalues>tbody").append(eventsboxes);*/
		             	    	
			//			});
						/*var sorted = $('#inboxesvalues tbody tr').sort(function(a, b) {
							  var a = $(a).find('td:first').text(), b = $(b).find('td:first').text();
							  return a.localeCompare(b, false, {numeric: true})
							});*/
						
	//				}
	//		});
	//	});
				$.ajax({
    url: localStorage.getItem("smaasip")+"/SCMXPert/getEventBpid/"+useridsplit[0]+"/"+values.event_Name,
    type : "GET",
    dataType: 'json',
	headers: {
	        	    'Authorization': localStorage.getItem('SavedToken')
	        	  },
    success:function( response ){
 	//alert(response);
								var first = $(location).attr('pathname');
								first.indexOf(1);
								first.toLowerCase();
								//first = first.split("/")[2]
								//first = first.split("/")[1]
								 first = first.split("/");
                                 first = first[first.length-1];
								////console.log(response.length);
								var appendSelectBPID = [];
								var appendSelectBPName = [];
								$.each(response,function(key1,value){
									appendSelectBPID.push('<option value="'+escapeHtml( value.bp_Id )+'">'+escapeHtml( value.bp_Id )+'</option>');
									appendSelectBPName.push('<option value="'+escapeHtml( value.partner_Name )+'">'+escapeHtml( value.partner_Name )+'</option>');
								});
								var selectboxBPID =  '<select style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="businessPartIdU_'+key+'" onchange="javascript:return changeBusinessUpdatePartnerEvent(\''+key+'\',\''+escapeHtml(values.event_Name)+'\',this.value);">'+appendSelectBPID+'</select>';
								var selectboxBPName = '<select style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 180px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="businessPartNameU_'+key+'" onchange="javascript:return changeBusinessPartnerUpdatedEventByName(\''+key+'\',\''+escapeHtml(values.event_Name)+'\',this.value);">'+appendSelectBPName+'</select>';
								////console.log(selectboxBPID);
								////console.log(selectboxBPID);
								var eventsboxes = '<tr id="row_val_'+key+'" class="Event_class"><td class="p-1" style="display: block;"><input type="checkbox" name="event" value="'+key+'" style="width:14px;margin-top: 3px;"/></td><td class="" style="font-size: 10px;padding:1px;"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 50px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="EventIDU_'+key+'">'+escapeHtml(values.event_Id)+'</div></td><td class="pl-1" style="display:none;"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 90px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;display:none;" id="EventBusinessPartnerIdU_'+key+'"></div></td><td>'+selectboxBPID+'</td><td class="pl-1" style="display:none;"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 180px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;display:none;" id="EventBusinessPartNerNameU_'+key+'"></div></td><td>'+selectboxBPName+'</td><td class="pl-1"><div style="text-align: center;height: 25px;font-size: 10px;font-weight: bold;width: 150px;padding: 5px;border-radius: 3px;border: 1px solid #ced4da;" id="EventName">'+escapeHtml(values.event_Name)+'</div></td><td class="pl-1"><div id="Evidence-'+key+'" class="PhotoEvidence" style="display:none;">'+escapeHtml(values.photo_Evidence)+'</div><div style="" id="date_'+key+'"><label class="switch"><input class="switch-input" id="switch-input-'+key+'" type="checkbox" onchange="javascript:return setPhotoEvidence(\''+key+'\');"/><span class="switch-label" data-on="Yes" data-off="No"></span><span class="switch-handle"></span></label></div></td><td></td></tr>';
								////alert(values.bp_Id);
								
								//$("#inboxesvalues2>tbody").append(eventsboxes);
								$("#tableHeader,#inboxesvalues2").show();
								
								if(first == "CreateShipment.jsp" || first == "RouteMaster.jsp"){
									$('#inboxesvalues2>tbody').append(eventsboxes).delay(300).queue(function (next) {
										   // $(this).append(eventsboxes);
										$("#businessPartIdU_"+key).val(values.bp_Id);
										var bp_lisdkfd = $("#businessPartIdU_"+key).val();
										//alert("hello "+bp_lisdkfd)
										    next();
										//changeBusinessPartnerUpdatedEventByName(key,values.event_Name,bp_lisdkfd);
										    selectBusinessUpdatePartId(bp_lisdkfd,values.event_Name,key);
										});
								}
								if(values.photo_Evidence == "yes")
		        	    		{
		        	    		//alert("#switch-input-"+key);
		        	    			$("#switch-input-"+key).prop('checked',true);
		        	    		}else{
		        	    			$("#switch-input-"+key).prop('checked',false);
		        	    		}
								
								if(first == "CreateShipment.jsp")
									{
									$('#inboxesvalues2>tbody tr td:last-child').text('Queued').css({"padding":"1% 1%","font-size":"12px","font-weight":"bold"});
									$('#inboxesvalues2>tbody tr:first td:last-child').text('Initialized').css({"padding":"1% 1%","font-size":"12px","font-weight":"bold"});
									//$('#inboxesvalues2>tbody tr:first td:last-child').text('Completed').css({"padding":"1% 1%","font-size":"12px","font-weight":"bold"});
									//$('#inboxesvalues2>tbody tr:eq(1) td:last-child').text('Initialized').css({"padding":"1% 1%","font-size":"12px","font-weight":"bold"});
									}
								
								//$("#inboxesvalues2>tbody").closest('table').children('tr:first').children('tr:last').text("hello");
								}
							});
							
							
							   }, key * 500)
							    key++;
							  
							   $("#businessPartIdU_"+key).val(values.bp_Id)
				});
							}
			});
			}
		});
				
		
/*		$.getJSON(RouteMasterGetRoute,function(response){
			$.each(response,function(a,b){
				if(b.route_Id == Route_id)
				{
					   
					$.each(b.default_Business_Partners_and_Events,function(key,values){
						////console.log(values);
						setTimeout(function() {
						$("#businessPartIdU_"+key).val(values.bp_Id);
						//alert(key);
						var bp_ID = $("#businessPartIdU_"+key).val();
						//alert(bp_ID);
						selectBusinessPartId(bp_ID,values.event_Name,key);
						}, key * 1000)
					    key++;
					});
					   
					
				}
			});
			
		});*/
	}else{
		document.location.reload();
		var Cust_Id = $("#Cust_Id").val();
		
		getRouteId(Cust_Id)
		$("#event_id_val").val(Route_id);
		$("#createEvent").show();
		$("#updateEvent").hide();
		$("#event_type_val").val('');
		$("#route_name_from").val('');
		$("#route_name_to").val('');
		$("#event_pri_mode").val('');
		$("#event_inco").val('');
		$("#event_std_dur").val('');
		$("#event_description").val('');
		$("#cust_route_id").val('');
	}

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
