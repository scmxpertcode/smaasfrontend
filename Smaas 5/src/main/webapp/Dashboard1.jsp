<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>SCMXpert Dashboard</title>
   <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="./css/global.css"/>
<!-- <link rel="stylesheet" href="./css/bootstrap.min.css"/>
<link rel="javascript" href="./js/jquery.min.js"/>
<link rel="javascript" href="./js/popper.min.js"/> -->
<!-- <link rel="javascript" href="./js/bootstrap.min.js"/> -->
<style>
btn btn-light dropdown-toggle{
 background:brown;
}
.delivered_shipments{display:none;}
@keyframes blink {
       0% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
       50% {
            -webkit-transform: scale(1.5);
            transform: scale(1.5);
        }
        100% {
          -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
 .alaram {
        transition: .3s ease-in;
        animation: blink 1s;
        animation-iteration-count: infinite;
    }
 #tablelist_data>tbody>tr{transition: transform .2s;postion:relative; /* Animation */}
 #tablelist_data>tbody>tr:hover{ transform: scale(1.3);background:blue;color:#fff;box-shadow: -5px 3px 30px #000;}
.live_shipments_list{transition: transform .2s;/* Animation */}
.live_shipments_list:hover{transform: scale(1.04);box-shadow: -5px 3px 30px #000;z-index: 1;position: relative;}
.header-menu{color:#fff;float:left;margin-top:1.9%;margin-left:1%;}
.header-menu a{color:#fff;font-weight:bold;}
.header-menu:hover{background:#fff;border-radius:5px 5px 0px 0px;}
.header-menu:hover a{color:#274a6f;}
.site-title{color: #ffffff;text-shadow: 0 4px 0 rgba(100,100,100,1), 0 8px 3px rgba(0,0,0,0.7);font-weight: 600;font-size: 38px;padding: 1%;font-weight: bold;}
.site-title a{text-decoration:none;color:#ffffff;}
.site-title:hover a{text-decoration:none;color:#ffffff;}
.hide_show_icon,.show_hide_icon{font-weight: bold;cursor:pointer;text-align:center;float:right;margin-top:1%;}
.hide_show_icon, .show_remaing{display:none;}
.showviewdata{display:none;width:80%;margin:2% 10%;background:#fff;border-radius:5px;z-index:2;position:absolute;height:90%;top:10px;bottom:10px;}
#backgroundBlur{background: #000000;opacity: .7;display: none;position: fixed;top: 0;left: 0;width: 100%;height: 100%;z-index: 1;}
.view_body_boder{width:95%;height:80%;border:1px solid #000;margin:auto;box-shadow:0px 0px 5px #000;}
.view_body_header{width:100%;height:30px;padding-top:1%;padding-right:3%;}
.nodes{width:55px;font-size:11px;font-weight:bold;border:1px solid #000;float:left;text-align:center;margin:1px;float:right;border-radius:3px 3px 0px 0px;}
</style>
</head>
<body oncopy="return false" onpaste="return false">
  <link href = "https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css" rel = "stylesheet"/>

      <script src = "https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
          <!-- Javascript -->
      <script>
         $(function() {
            $( "#datepicker-13" ).datepicker();
            $(".delivered").on("click",function(){
            	$(this).addClass("btn-primary").removeClass("btn-outline-info");
            	$('.live').addClass("btn-outline-info").removeClass("btn-primary");
            	$(".delivered_shipments").show();
            	$(".live_shipments").hide();
            });
            $(".live").on("click",function(){
            	$(this).addClass("btn-primary").removeClass("btn-outline-info");
            	$('.delivered').addClass("btn-outline-info").removeClass("btn-primary");
            	$(".live_shipments").show();
            	$(".delivered_shipments").hide();
            });
            $(".hide_show_icon").on("click",function(){
            	$(this).hide();
            	$(".show_remaing").hide();
            	$(".show_hide_icon,.show_hide_filter").show();
            });
            $(".show_hide_icon").on("click",function(){
            	$(this).hide();
            	$(".show_hide_filter").hide();
            	$(".hide_show_icon,.show_remaing").show();
            });
            $("#backgroundBlur,.close").on("click",function(){
            	$("#backgroundBlur").hide();
            	$(".showviewdata").hide();
            });

         });
         var jg = new jsGraphics("myCanvas");
         var img1 = document.getElementById("one");
         var img2 = document.getElementById("two");
         var img3 = document.getElementById("three");
         var img4 = document.getElementById("four");
         var img5 = document.getElementById("five");
         var img6 = document.getElementById("six");
         var img7 = document.getElementById("seven");
         var img8 = document.getElementById("eight");

        function drawLine() {
           
            jg.setColor("#0000FF");
            jg.setStroke(2);
            jg.drawLine(img1.offsetLeft + 20 , img1.offsetTop + 20, img2.offsetLeft + 20, img2.offsetTop + 20);
            jg.paint();
        }

        function clearLine() {
            jg.clear();
        }
        function showdatadialogbox(val)
        {
        	$('.showviewdata').show();
        	//$("body").css("overflow","hidden");
        	$("#backgroundBlur").show();
        }
      </script>
<header>
<div class="float-left" style="width:73%;">
  <a href="#" style="width:70px;height:65px;float:left;"><img src="./images/Capture_scm_half_logo_1.png" style="width: 50px;margin-left: 45px;margin-top: 7px;"/></a>
  
<!--   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> -->
  
  	<div class="p-2 pr-5 pl-5 header-menu" style="margin-left:5%;"> <a class="" href="#">Shipments</a></div>
  	<div class="p-2 pr-5 pl-5 header-menu"> <a class="" href="#">Devices</a></div>
  	<div class="p-2 pr-5 pl-5 header-menu"> <a class="" href="#">Alerts</a></div>
  	<div class="p-2 pr-5 pl-5 header-menu"> <a class="" href="#">Reports</a></div>
  	<div class="p-2 pr-5 pl-5 header-menu"> <a class="" href="#">Setup</a></div>
  	<div style="clear:both;"></div>
  
  
    <!-- <ul class="navbar-nav">
      <li class="nav-item m-1">
        <a class="p-2 pr-5 pl-5 active" href="#">Shipments</a>
      </li>
      <li class="nav-item m-1">
        <a class="p-2 pr-5 pl-5" href="#">Devices</a>
      </li>
      <li class="nav-item m-1">
        <a class="p-2 pr-5 pl-5" href="#">Alerts</a>
      </li>
      <li class="nav-item m-1">
        <a class="p-2 pr-5 pl-5" href="#">Reports</a>
      </li>
      <li class="nav-item m-1">
        <a class="p-2 pr-5 pl-5" href="#">Setup</a>
      </li>
    </ul> -->
    
  
</div>

<div class="w-25 float-left"> 

<span class="site-title"><a href="#" style="text-align: center;margin-right:0px;margin-left: -60px;float:left;">SCMXPERT</a></span>

<div class="dropdown float-left mt-3" style="margin-left:7%;">
    <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown"><img src="./images/user1.png" style="width:25px;height:25px;"/> User Proifle</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Profile View</a>
      <a class="dropdown-item" href="#">Settings</a>
      <a class="dropdown-item" href="#">Help</a>
      <a class="dropdown-item" href="#">Logout</a>
    </div>
  </div> 
</div>
 
</header>
<div style="clear:both;"></div>

<!-- <div class="row w-100 m-0">
	<div class="col-md-5 float-left pl-2 p-0">
	<div class="w-100 p-1"></div>
	<div style="">
	<div style="border-bottom:2px solid #000;"><span class="btn btn-primary live" style="border-radius:3px 0px 0px 0px;border:0px solid;">Live (10*)</span><span class="btn btn-outline-info delivered" id="delivered" style="border:0px solid;border-radius: 0px 3px 0px 0px;margin-left: 1px;">Delivered (10*)</span><span class="btn btn-outline-info float-right" style="border-radius:3px 3px 0px 0px;border:0px solid;"><a href="CreateShipment.jsp">Create Shipment</a></span></div>
	<div class="hide_show_icon btn-outline-dark" style="padding:1%;font-size:10px;border-radius:5px;">Show Filter</div>
	<div class="show_hide_icon btn-outline-dark" style="padding:1%;font-size:10px;border-radius:5px;">Hide Filter</div>
	<div style="clear:both;"></div>
	</div>
<div class="show_hide_filter" style="min-height:150px;">
	<div class="float-left p-1" style="width:20%;"> 
		<label class="cols-label">From :- </label>
		<input type="text" class="form-control" placeholder="Enter Your Location" style="font-size:12px;"/>
	</div>
	<div class="float-left p-1" style="width:20%;"> 
		<label class="cols-label">To:- </label>
		<input type="text" class="form-control" placeholder="Enter Your Location" style="font-size:12px;"/>
	</div>
	<div class="float-left p-1" style="width:20%;"> 
		<label class="cols-label">Goods :- </label>
		<select style="font-size:12px;width:100%;height:30px;">
			<option style="font-size:12px;">Select Any Goods</option>
			<option style="font-size:12px;">Goods One</option>
			<option style="font-size:12px;">Goods Two</option>
			<option style="font-size:12px;">Goods Three</option>
		</select>
	</div>
	<div class="float-left p-1" style="width:20%;"> 
		<label class="cols-label">Ship Date :- </label>
		<input type="text" class="form-control" id="datepicker-13" placeholder="Select Date" style="font-size:12px;"/>
	</div>
	<div class="float-left p-1" style="width:20%;"> 
		<label class="cols-label">Delivery Number :- </label>
		<input type="text" class="form-control" placeholder="Enter Your Location" style="font-size:12px;"/>
	</div>
	<div class="float-left p-1" style="width:20%;"> 
		<label class="cols-label">Reference :- </label>
		<input type="text" class="form-control" placeholder="Enter Your Location" style="font-size:12px;"/>
	</div>
	<div class="float-left p-1" style="width:20%;"> 
		<label class="cols-label">Device :- </label>
		<select style="font-size:12px;width:100%;height:30px;">
			<option style="font-size:12px;">Select Any Device</option>
			<option style="font-size:12px;">Device One</option>
			<option style="font-size:12px;">Device Two</option>
			<option style="font-size:12px;">Device Three</option>
		</select>
	</div>
	<div class="float-left p-1" style="width:20%;"> 
		<label class="cols-label">Dept / Type :- </label>
		<select style="font-size:12px;width:100%;height:30px;">
			<option style="font-size:12px;">Select Any Dept/Type</option>
			<option style="font-size:12px;">Dept/Type One</option>
			<option style="font-size:12px;">Dept/Type Two</option>
			<option style="font-size:12px;">Dept/Type Three</option>
		</select>
	</div>
	
	
	<div class="show_btn_search" style="float:left;padding-top:5%;">
	<button type="submit" class="p-1 text-light rounded bg-success m-1" style="font-size:12px;width:70px;">Search</button><button class="p-1 text-light rounded bg-danger m-1" style="font-size:14px;width:75px;">Reset</button>
	</div>
	<div class="clear:both;"></div>
	</div>
	<div class="live_shipments">
		<div class="w-100 p-1 m-1 live_shipments_list" onclick="javascript:showdatadialogbox('val1');" style="border:1px solid black;border-radius:3px;height:60px;cursor:pointer;" id="one"  onmouseenter="drawLine()" >
		<div class="col-md-4 float-left">
			<h6 class="m-0">0-15 TCTest</h6>
			<p style="font-size:10px;margin:0px;font-weight:600;">From :- Merck West Point,PA</p>
			<p style="font-size:10px;margin:0px;font-weight:600;">To :- MD, Logistics,IN</p>
		</div>
		<div class="col-md-7 float-left">
			<div class="col-md-6 float-left p-0">
				<p style="font-size:10px;margin:0px;font-weight:600;margin-top:0px;text-align:left;margin-left:10px;margin-right:30px;">Dec 5,2018 1:01AM</p>
			</div>
			
			<div class="col-md-6 float-left p-0">
				<p style="font-size:10px;margin:0px;font-weight:600;margin-top:0px;text-align: center;">Dec 25,2018 15:01PM</p>
			</div>
			<div class="clear:both;"></div>
		
			
		</div>
		<div class="col-md-1 float-left text-center p-0">
			<img src="./images/notification.png" style="width:16px;height:16px;margin-top:20px;float:left;">
		</div>
		<div style="clear:both"></div>
		<div class="text-center m-auto" style="width:60%;height: 10px;position: relative;bottom: 25px;">
		<div class="p-1" style="width: 12px;border-radius: 15px;background: #268fff;height: 12px; position: relative;left: 100px;bottom: 5.5px;z-index: 1;"></div>
			 <div class="progress margin-auto" style="margin-left: 100px;margin-right: 10px;position: relative;bottom: 15px;height: 0.5rem;">
    		<div class="progress-bar progress-bar-striped progress-bar-animated" style="width:40%;background-size: 0.5rem 0.8rem;background-color:#43b54380;background-image: linear-gradient(45deg,rgba(255, 255, 255, 0.82) 25%,#000000c7 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);"></div>
  		</div>
  		<div class="p-1" style="width: 12px;border-radius: 15px;background: #268fff;height: 12px;position: relative;left: 310px;bottom: 25.5px;z-index: 0;"></div>
  		<div style="font-size: 12px;font-weight: 600;height: 0px;position: relative;bottom: 25px;width: 100%;text-align: center;text-indent: 70px;">Status: Progress</div>
		</div>
		
		
		</div>
		<div class="w-100 p-1 m-1 live_shipments_list" onclick="javascript:showdatadialogbox('val1');" style="border:1px solid black;border-radius:3px;height:60px;">
		<div class="col-md-4 float-left">
			<h6 class="m-0">0-15 TCTest</h6>
			<p style="font-size:10px;margin:0px;font-weight:600;">From :- Merck West Point,PA</p>
			<p style="font-size:10px;margin:0px;font-weight:600;">To :- MD, Logistics,IN</p>
		</div>
		<div class="col-md-7 float-left">
			<div class="col-md-6 float-left p-0">
				<p style="font-size:10px;margin:0px;font-weight:600;margin-top:0px;text-align:left;margin-left:10px;margin-right:30px;">Nov 5,2018 3:01AM</p>
			</div>
			
			<div class="col-md-6 float-left p-0">
				<p style="font-size:10px;margin:0px;font-weight:600;margin-top:0px;text-align: center;">Nov 25,2018 21:01PM</p>
			</div>
			<div class="clear:both;"></div>
		
			
		</div>
		<div class="col-md-1 float-left text-center p-0">
			<img src="./images/alarm.png" class="alaram" style="width:16px;height:16px;margin-top:20px;float:left;">
		</div>
		<div style="clear:both"></div>
		<div class="text-center m-auto" style="width:60%;height: 10px;position: relative;bottom: 25px;">
		<div class="p-1" style="width: 12px;border-radius: 15px;background: #268fff;height: 12px; position: relative;left: 100px;bottom: 5.5px;z-index: 1;"></div>
			 <div class="progress margin-auto" style="margin-left: 100px;margin-right: 10px;position: relative;bottom: 15px;height: 0.5rem;">
    		<div class="progress-bar progress-bar-striped progress-bar-animated" style="width:70%;background-size: 0.5rem 0.8rem;background-color:#43b54380;background-image: linear-gradient(45deg,rgba(255, 255, 255, 0.82) 25%,#000000c7 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);"></div>
  		</div>
  		<div class="p-1" style="width: 12px;border-radius: 15px;background: #268fff;height: 12px;position: relative;left: 310px;bottom: 25.5px;z-index: 0;"></div>
  		<div style="font-size: 12px;font-weight: 600;height: 0px;position: relative;bottom: 25px;width: 100%;text-align: center;text-indent: 70px;">Status: Progress</div>
		</div>
		 
	</div>
			<div class="w-100 p-1 m-1 live_shipments_list" onclick="javascript:showdatadialogbox('val1');" style="border:1px solid black;border-radius:3px;height:60px;">
		<div class="col-md-4 float-left">
			<h6 class="m-0">0-15 TCTest</h6>
			<p style="font-size:10px;margin:0px;font-weight:600;">From :- Merck West Point,PA</p>
			<p style="font-size:10px;margin:0px;font-weight:600;">To :- MD, Logistics,IN</p>
		</div>
		<div class="col-md-7 float-left">
			<div class="col-md-6 float-left p-0">
				<p style="font-size:10px;margin:0px;font-weight:600;margin-top:0px;text-align:left;margin-right:30px;">Nov 5,2018 1:01AM</p>
			</div>
			
			<div class="col-md-6 float-left p-0">
				<p style="font-size:10px;margin:0px;font-weight:600;margin-top:0px;text-align: center;">Nov 15,2018 12:01PM</p>
			</div>
			<div class="clear:both;"></div>
		
			
		</div>
		<div class="col-md-1 float-left text-center p-0">
			<img src="./images/notification.png" style="width:16px;height:16px;margin-top:20px;float:left;">
		</div>
		<div style="clear:both"></div>
		<div class="text-center m-auto" style="width:60%;height: 10px;position: relative;bottom: 25px;">
		<div class="p-1" style="width: 12px;border-radius: 15px;background: #268fff;height: 12px; position: relative;left: 100px;bottom: 5.5px;z-index: 1;"></div>
			 <div class="progress margin-auto" style="margin-left: 100px;margin-right: 10px;position: relative;bottom: 15px;height: 0.5rem;">
    		<div class="progress-bar progress-bar-striped progress-bar-animated" style="width:50%;background-size: 0.5rem 0.8rem;background-color:#43b54380;background-image: linear-gradient(45deg,rgba(255, 255, 255, 0.82) 25%,#000000c7 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);"></div>
  		</div>
  		<div class="p-1" style="width: 12px;border-radius: 15px;background: #268fff;height: 12px;position: relative;left: 310px;bottom: 25.5px;z-index: 0;"></div>
  		<div style="font-size: 12px;font-weight: 600;height: 0px;position: relative;bottom: 25px;width: 100%;text-align: center;text-indent: 70px;">Status: Progress</div>
		</div>
		
		
		</div>
				<div class="w-100 p-1 m-1 live_shipments_list" onclick="javascript:showdatadialogbox('val1');" style="border:1px solid black;border-radius:3px;height:60px;">
		<div class="col-md-4 float-left">
			<h6 class="m-0">0-15 TCTest</h6>
			<p style="font-size:10px;margin:0px;font-weight:600;">From :- Merck West Point,PA</p>
			<p style="font-size:10px;margin:0px;font-weight:600;">To :- MD, Logistics,IN</p>
		</div>
		<div class="col-md-7 float-left">
			<div class="col-md-6 float-left p-0">
				<p style="font-size:10px;margin:0px;font-weight:600;margin-top:0px;text-align:left;margin-right:30px;">Nov 3,2018 1:01AM</p>
			</div>
			
			<div class="col-md-6 float-left p-0">
				<p style="font-size:10px;margin:0px;font-weight:600;margin-top:0px;text-align: center;">Nov 19,2018 1:01PM</p>
			</div>
			<div class="clear:both;"></div>
		
			
		</div>
		<div class="col-md-1 float-left text-center p-0">
			<img src="./images/notification.png" style="width:16px;height:16px;margin-top:20px;float:left;">
		</div>
		<div style="clear:both"></div>
		<div class="text-center m-auto" style="width:60%;height: 10px;position: relative;bottom: 25px;">
		<div class="p-1" style="width: 12px;border-radius: 15px;background: #268fff;height: 12px; position: relative;left: 100px;bottom: 5.5px;z-index: 1;"></div>
			 <div class="progress margin-auto" style="margin-left: 100px;margin-right: 10px;position: relative;bottom: 15px;height: 0.5rem;">
    		<div class="progress-bar progress-bar-striped progress-bar-animated" style="width:90%;background-size: 0.5rem 0.8rem;background-color:#43b54380;background-image: linear-gradient(45deg,rgba(255, 255, 255, 0.82) 25%,#000000c7 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);"></div>
  		</div>
  		<div class="p-1" style="width: 12px;border-radius: 15px;background: #268fff;height: 12px;position: relative;left: 310px;bottom: 25.5px;z-index: 0;"></div>
  		<div style="font-size: 12px;font-weight: 600;height: 0px;position: relative;bottom: 25px;width: 100%;text-align: center;text-indent: 70px;">Status: Progress</div>
		</div>
		
		
		</div>
		<div class="w-100 p-1 m-1 live_shipments_list" onclick="javascript:showdatadialogbox('val1');" style="border:1px solid black;border-radius:3px;height:60px;">
		<div class="col-md-4 float-left">
			<h6 class="m-0">0-15 TCTest</h6>
			<p style="font-size:10px;margin:0px;font-weight:600;">From :- Merck West Point,PA</p>
			<p style="font-size:10px;margin:0px;font-weight:600;">To :- MD, Logistics,IN</p>
		</div>
		<div class="col-md-7 float-left">
			<div class="col-md-6 float-left p-0">
				<p style="font-size:10px;margin:0px;font-weight:600;margin-top:0px;text-align:left;margin-right:30px;">Sep 5,2018 1:01AM</p>
			</div>
			
			<div class="col-md-6 float-left p-0">
				<p style="font-size:10px;margin:0px;font-weight:600;margin-top:0px;text-align: center;">Oct 3,2018 1:01PM</p>
			</div>
			<div class="clear:both;"></div>
		
			
		</div>
		<div class="col-md-1 float-left text-center p-0">
			<img src="./images/notification.png" style="width:16px;height:16px;margin-top:20px;float:left;">
		</div>
		<div style="clear:both"></div>
		<div class="text-center m-auto" style="width:60%;height: 10px;position: relative;bottom: 25px;">
		<div class="p-1" style="width: 12px;border-radius: 15px;background: #268fff;height: 12px; position: relative;left: 100px;bottom: 5.5px;z-index: 1;"></div>
			 <div class="progress margin-auto" style="margin-left: 100px;margin-right: 10px;position: relative;bottom: 15px;height: 0.5rem;">
    		<div class="progress-bar progress-bar-striped progress-bar-animated" style="width:30%;background-size: 0.5rem 0.8rem;background-color:#43b54380;background-image: linear-gradient(45deg,rgba(255, 255, 255, 0.82) 25%,#000000c7 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);"></div>
  		</div>
  		<div class="p-1" style="width: 12px;border-radius: 15px;background: #268fff;height: 12px;position: relative;left: 310px;bottom: 25.5px;z-index: 0;"></div>
  		<div style="font-size: 12px;font-weight: 600;height: 0px;position: relative;bottom: 25px;width: 100%;text-align: center;text-indent: 70px;">Status: Progress</div>
		</div>
		
		
		</div>
		<div class="show_remaing">
			<div class="w-100 p-1 m-1 live_shipments_list" onclick="javascript:showdatadialogbox('val1');" style="border:1px solid black;border-radius:3px;height:60px;">
		<div class="col-md-4 float-left">
			<h6 class="m-0">0-15 TCTest</h6>
			<p style="font-size:10px;margin:0px;font-weight:600;">From :- Merck West Point,PA</p>
			<p style="font-size:10px;margin:0px;font-weight:600;">To :- MD, Logistics,IN</p>
		</div>
		<div class="col-md-7 float-left">
			<div class="col-md-6 float-left p-0">
				<p style="font-size:10px;margin:0px;font-weight:600;margin-top:0px;text-align:left;margin-right:30px;">Nov 3,2018 1:01AM</p>
			</div>
			
			<div class="col-md-6 float-left p-0">
				<p style="font-size:10px;margin:0px;font-weight:600;margin-top:0px;text-align: center;">Nov 19,2018 1:01PM</p>
			</div>
			<div class="clear:both;"></div>
		
			
		</div>
		<div class="col-md-1 float-left text-center p-0">
			<img src="./images/notification.png" style="width:16px;height:16px;margin-top:20px;float:left;">
		</div>
		<div style="clear:both"></div>
		<div class="text-center m-auto" style="width:60%;height: 10px;position: relative;bottom: 25px;">
		<div class="p-1" style="width: 12px;border-radius: 15px;background: #268fff;height: 12px; position: relative;left: 100px;bottom: 5.5px;z-index: 1;"></div>
			 <div class="progress margin-auto" style="margin-left: 100px;margin-right: 10px;position: relative;bottom: 15px;height: 0.5rem;">
    		<div class="progress-bar progress-bar-striped progress-bar-animated" style="width:90%;background-size: 0.5rem 0.8rem;background-color:#43b54380;background-image: linear-gradient(45deg,rgba(255, 255, 255, 0.82) 25%,#000000c7 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);"></div>
  		</div>
  		<div class="p-1" style="width: 12px;border-radius: 15px;background: #268fff;height: 12px;position: relative;left: 310px;bottom: 25.5px;z-index: 0;"></div>
  		<div style="font-size: 12px;font-weight: 600;height: 0px;position: relative;bottom: 25px;width: 100%;text-align: center;text-indent: 70px;">Status: Progress</div>
		</div>
		
		
		</div>
	
		<div class="w-100 p-1 m-1 live_shipments_list" onclick="javascript:showdatadialogbox('val1');" style="border:1px solid black;border-radius:3px;height:60px;">
		<div class="col-md-4 float-left">
			<h6 class="m-0">0-15 TCTest</h6>
			<p style="font-size:10px;margin:0px;font-weight:600;">From :- Merck West Point,PA</p>
			<p style="font-size:10px;margin:0px;font-weight:600;">To :- MD, Logistics,IN</p>
		</div>
		<div class="col-md-7 float-left">
			<div class="col-md-6 float-left p-0">
				<p style="font-size:10px;margin:0px;font-weight:600;margin-top:0px;text-align:left;margin-right:30px;">Nov 3,2018 1:01AM</p>
			</div>
			
			<div class="col-md-6 float-left p-0">
				<p style="font-size:10px;margin:0px;font-weight:600;margin-top:0px;text-align: center;">Nov 19,2018 1:01PM</p>
			</div>
			<div class="clear:both;"></div>
		
			
		</div>
		<div class="col-md-1 float-left text-center p-0">
			<img src="./images/notification.png" style="width:16px;height:16px;margin-top:20px;float:left;">
		</div>
		<div style="clear:both"></div>
		<div class="text-center m-auto" style="width:60%;height: 10px;position: relative;bottom: 25px;">
		<div class="p-1" style="width: 12px;border-radius: 15px;background: #268fff;height: 12px; position: relative;left: 100px;bottom: 5.5px;z-index: 1;"></div>
			 <div class="progress margin-auto" style="margin-left: 100px;margin-right: 10px;position: relative;bottom: 15px;height: 0.5rem;">
    		<div class="progress-bar progress-bar-striped progress-bar-animated" style="width:90%;background-size: 0.5rem 0.8rem;background-color:#43b54380;background-image: linear-gradient(45deg,rgba(255, 255, 255, 0.82) 25%,#000000c7 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);"></div>
  		</div>
  		<div class="p-1" style="width: 12px;border-radius: 15px;background: #268fff;height: 12px;position: relative;left: 310px;bottom: 25.5px;z-index: 0;"></div>
  		<div style="font-size: 12px;font-weight: 600;height: 0px;position: relative;bottom: 25px;width: 100%;text-align: center;text-indent: 70px;">Status: Progress</div>
		</div>
		
		
		</div>
		
		</div>
	</div>
	<div class="delivered_shipments">
		<div class="w-100 p-1 m-1 live_shipments_list" style="border:1px solid black;border-radius:3px;height:60px;">
		<div class="col-md-4 float-left">
			<h6 class="m-0">0-15 TCTest</h6>
			<p style="font-size:10px;margin:0px;font-weight:600;">From :- Merck West Point,PA</p>
			<p style="font-size:10px;margin:0px;font-weight:600;">To :- MD, Logistics,IN</p>
		</div>
		<div class="col-md-7 float-left">
			<div class="col-md-6 float-left p-0">
				<p style="font-size:10px;margin:0px;font-weight:600;margin-top:0px;text-align:left;margin-left:10px;margin-right:30px;">Dec 5,2018 1:01PM</p>
			</div>
			
			<div class="col-md-6 float-left p-0">
				<p style="font-size:10px;margin:0px;font-weight:600;margin-top:0px;text-align: center;">Dec 5,2018 1:01PM</p>
			</div>
			<div class="clear:both;"></div>
		
			
		</div>
		<div class="col-md-1 float-left text-center p-0">
			<img src="./images/success.jpg" style="width:25px;height:18px;margin-top:20px;float:left;">
		</div>
		<div style="clear:both"></div>
		<div class="text-center m-auto" style="width:60%;height: 10px;position: relative;bottom: 25px;">
		<div class="p-1" style="width: 12px;border-radius: 15px;background: #268fff;height: 12px; position: relative;left: 100px;bottom: 5.5px;z-index: 1;"></div>
			 <div class="progress margin-auto" style="margin-left: 100px;margin-right: 10px;position: relative;bottom: 15px;height: 0.5rem;">
    		<div class="progress-bar progress-bar-striped progress-bar-animated" style="width:100%;background-size: 0.5rem 0.8rem;background-color:#43b54380;background-image: linear-gradient(45deg,rgba(255, 255, 255, 0.82) 25%,#000000c7 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);"></div>
  		</div>
  		<div class="p-1" style="width: 12px;border-radius: 15px;background: #268fff;height: 12px;position: relative;left: 310px;bottom: 25.5px;z-index: 0;"></div>
  		<div style="font-size: 12px;font-weight: 600;height: 0px;position: relative;bottom: 25px;width: 100%;text-align: center;text-indent: 70px;">Status: SuccessFully Delivered</div>
		</div>
		
		
		</div>
		<div class="w-100 p-1 m-1 live_shipments_list" style="border:1px solid black;border-radius:3px;height:60px;">
		<div class="col-md-4 float-left">
			<h6 class="m-0">0-15 TCTest</h6>
			<p style="font-size:10px;margin:0px;font-weight:600;">From :- Merck West Point,PA</p>
			<p style="font-size:10px;margin:0px;font-weight:600;">To :- MD, Logistics,IN</p>
		</div>
		<div class="col-md-7 float-left">
			<div class="col-md-6 float-left p-0">
				<p style="font-size:10px;margin:0px;font-weight:600;margin-top:0px;text-align:left;margin-left:10px;margin-right:30px;">Dec 5,2018 1:01PM</p>
			</div>
			
			<div class="col-md-6 float-left p-0">
				<p style="font-size:10px;margin:0px;font-weight:600;margin-top:0px;text-align: center;">Dec 5,2018 1:01PM</p>
			</div>
			<div class="clear:both;"></div>
		
			
		</div>
		<div class="col-md-1 float-left text-center p-0">
			<img src="./images/success.jpg" style="width:25px;height:18px;margin-top:20px;float:left;">
		</div>
		<div style="clear:both"></div>
		<div class="text-center m-auto" style="width:60%;height: 10px;position: relative;bottom: 25px;">
		<div class="p-1" style="width: 12px;border-radius: 15px;background: #268fff;height: 12px; position: relative;left: 100px;bottom: 5.5px;z-index: 1;"></div>
			 <div class="progress margin-auto" style="margin-left: 100px;margin-right: 10px;position: relative;bottom: 15px;height: 0.5rem;">
    		<div class="progress-bar progress-bar-striped progress-bar-animated" style="width:100%;background-size: 0.5rem 0.8rem;background-color:#43b54380;background-image: linear-gradient(45deg,rgba(255, 255, 255, 0.82) 25%,#000000c7 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);"></div>
  		</div>
  		<div class="p-1" style="width: 12px;border-radius: 15px;background: #268fff;height: 12px;position: relative;left: 310px;bottom: 25.5px;z-index: 0;"></div>
  		<div style="font-size: 12px;font-weight: 600;height: 0px;position: relative;bottom: 25px;width: 100%;text-align: center;text-indent: 70px;">Status: SuccessFully Delivered</div>
		</div>
		 
	</div>

	</div>
</div>
<div class="showviewdata">
<h3 style="width:96%;float:left;text-align:center;">Heading</h3><span class="close" style="margin:1%;width:2%;float:left;cursor:pointer;text-align: center;">X</span>
<div style="clear:both;"></div>
<div class="view_body_header">
<div class="device_id" style="float:left;">ID:- 122345679</div>
<div class="device_f_t" style="float:left;"> From:- sxjkcvhksj  To:- kjhsdbfvjsdfg</div>

	<div class="nodes">Maps</div>
	<div class="nodes">Explore</div>
	<div class="nodes">Messages</div>
	<div style="clear:both"></div>
</div>
<div class="view_body_boder"></div>





</div>

<div class="col-md-7 float-left p-2 pl-3">
	<img src="./images/maps.jpeg" style="width:100%;height:350px;" id="two">
	<table class="table table-sm table-bordered small mt-1 text-center" style="font-size:10.5px;" id="tablelist_data">
	<thead>
	<tr class="table-active">
		<th>Remarks</th>
		<th>CTR.No</th>
		<th>Time(UTC+0)</th>
		<th>Report Type</th>
		<th>Temp</th>
		<th>Battery</th>
		<th>Lat, Lon</th>
		<th>Locating Mode</th>
		<th>Add.*</th>
	</tr>
	</thead>
	<tbody>
		<tr>
			<td>New</td>
			<td>00001181</td>
			<td>2/5/2019 2:50:52 PM</td>
			<td>Routine</td>
			<td>18.8<sup style="font-size:8px;font-weight:bold;">0</sup>C</td>
			<td>96%</td>
			<td>32.06497, 34.78917</td>
			<td>LBS</td>
			<td>Hollow drive,chester pennsylvania</td>		
		</tr>
				<tr>
			<td>New</td>
			<td>00001182</td>
			<td>2/5/2019 2:49:52 PM</td>
			<td>Routine</td>
			<td>18.8<sup style="font-size:8px;font-weight:bold;">0</sup>C</td>
			<td>96%</td>
			<td>32.06497, 34.78917</td>
			<td>LBS</td>
			<td>Hollow drive,chester pennsylvania</td>		
		</tr>
				<tr>
			<td>New</td>
			<td>00001191</td>
			<td>2/5/2019 2:48:52 PM</td>
			<td>Routine</td>
			<td>18<sup style="font-size:8px;font-weight:bold;">0</sup>C</td>
			<td>94%</td>
			<td>32.06497, 34.78917</td>
			<td>LBS</td>
			<td>Hollow drive,chester pennsylvania</td>		
		</tr>
		<tr>
			<td>New</td>
			<td>00001171</td>
			<td>2/5/2019 2:47:52 PM</td>
			<td>Routine</td>
			<td>18.5<sup style="font-size:8px;font-weight:bold;">0</sup>C</td>
			<td>94%</td>
			<td>32.06497, 34.78917</td>
			<td>LBS</td>
			<td>Hollow drive,chester pennsylvania</td>		
		</tr>
		<tr>
			<td>New</td>
			<td>00001162</td>
			<td>2/5/2019 2:46:52 PM</td>
			<td>Routine</td>
			<td>18<sup style="font-size:8px;font-weight:bold;">0</sup>C</td>
			<td>92%</td>
			<td>32.06497, 34.78917</td>
			<td>LBS</td>
			<td>Hollow drive,chester pennsylvania</td>		
		</tr>
		<tr>
			<td>New</td>
			<td>00001161</td>
			<td>2/5/2019 2:46:51 PM</td>
			<td>Routine</td>
			<td>18.0<sup style="font-size:8px;font-weight:bold;">0</sup>C</td>
			<td>92%</td>
			<td>32.06497, 34.78917</td>
			<td>LBS</td>
			<td>Hollow drive,chester pennsylvania</td>		
		</tr>
	</tbody>
	</table>
</div>
</div>  -->

<iframe width="1350" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiNmFkM2ZlMWUtMTMxYS00ZWY2LWI3NTYtODgwZjgxOGUwZjc5IiwidCI6ImJlZmMxZjM4LWJkOTItNDI0Yy1hZjE5LTYwN2FmM2MxMDZhNiIsImMiOjJ9" frameborder="0" allowFullScreen="true"></iframe>

<div id="backgroundBlur"></div>
</body>
</html>