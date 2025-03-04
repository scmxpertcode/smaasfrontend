 <script>
/*     var first = $(location).attr('pathname');
    first.indexOf(1);
    first.toLowerCase();
    first = first.split("/")[2]
    if(first == "RouteMaster.jsp")
    	{
	    	$("header>.row>.col-md-6>ul>li").removeClass("active");
			$("header>.row>.col-md-6>ul>li.setup").addClass("active");
    		$("#route").addClass("btn-head-active");
    	}
    if(first == "GoodsMaster.jsp")
	{
		$("header>.row>.col-md-6>ul>li").removeClass("active");
		$("header>.row>.col-md-6>ul>li.setup").addClass("active");
		$("#good_type").addClass("btn-head-active");
	}
    if(first == "Dashboard.jsp")
	{
		$("header>.row>.col-md-6>ul>li").removeClass("active");
		$("header>.row>.col-md-6>ul>li.shipment").addClass("active");
	} */
   // //alert(first);
       $(function(){
   		 
    $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            });
    });
    
    </script>

<!-- <script src="./js/All.js"></script>
<script src="./js/CommonFunction.js"></script> -->
 <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
<%-- <%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!-- <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "https://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

</body>
</html> -->

<header>
<div class="float-left" style="width:65%;">
  <a href="#" style="width:70px;height:65px;float:left;"><img src="./images/Capture_scm_half_logo_1.png" style="width: 50px;margin-left: 15px;margin-top: 7px;"/></a>
  
  	<div class="header-menu"> <a class="" href="Dashboard.jsp">Shipments</a></div>
  	<div class="header-menu"> <a class="" href="#">Devices</a></div>
  	<div class="header-menu"> <a class="" href="#">Alerts</a></div>
  	<div class="header-menu"> <a class="" href="#">Reports</a></div>
  	<div class="header-menu"> <a class="" href="RouteMaster.jsp">Setup</a></div>
  	<div style="clear:both;"></div>
 
</div>

<div class="float-left" style="width:35%;"> 

<span class="site-title"><a href="#" style="text-align: center;margin-right:0px;margin-left: -60px;float:left;">SCMXpert</a></span>

<div class="dropdown float-left mt-3" style="margin-left:7%;">
	<select id="bpi_idchange" class="form-control" style="float:left;width:45%;">
	<option value="BP0001">BP0001</option>
	<option value="BP0002">BP0002</option>
	<option value="BP0003">BP0003</option>
	</select>
	<select id="scmid" class="form-control" style="float:left;width:54%;margin-left:1%;">
	<option value="SCM0001">SCM0001</option>
	<option value="SCM0002">SCM0002</option>
	<option value="SCM0003">SCM0003</option>
	</select>
	<div style="clear:both;"></div>
  </div> 
</div>
<!-- 

 <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Shipments</a></li>
      <li><a href="#">Devices</a></li>
      <li><a href="#">Alerts</a></li>
      <li><a href="#">Reports</a></li>
      <li><a href="RouteMaster.jsp">Setup</a></li>
    </ul>
  </div>
</nav> -->
</header> --%>
 <style>
        btn btn-light dropdown-toggle {
            background: brown;
        }
        
        .delivered_shipments {
            display: none;
        }
        
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
        
        #tablelist_data>tbody>tr {
            transition: transform .2s;
            postion: relative;
            /* Animation */
        }
        
        #tablelist_data>tbody>tr:hover {
            transform: scale(1.1);
            background: blue;
            color: #fff;
            box-shadow: -5px 3px 30px #000;
        }
        
        .live_shipments_list {
            transition: transform .2s;
            /* Animation */
        }
        
        .live_shipments_list:hover {
            transform: scale(1.04);
            box-shadow: -5px 3px 30px #000;
            z-index: 1;
            position: relative;
        }
        
        .header-menu {
            color: #fff;
            float: left;
        }
        
        .header-menu a {
            color: #fff;
            font-weight: bold;
        }
        
        .header-menu:hover {
            background: #fff;
            border-radius: 5px 5px 0px 0px;
        }
        
        .header-menu:hover a {
            color: #274a6f;
        }
        
        .site-title {
            color: #ffffff;
            text-shadow: 0 4px 0 rgba(100, 100, 100, 1), 0 8px 3px rgba(0, 0, 0, 0.7);
            font-weight: 600;
            font-size: 38px;
            padding: 1%;
            font-weight: bold;
        }
        
        .site-title a {
            text-decoration: none;
            color: #ffffff;
        }
        
        .site-title:hover a {
            text-decoration: none;
            color: #ffffff;
        }
        
        .hide_show_icon,
        .show_hide_icon {
            font-weight: bold;
            cursor: pointer;
            text-align: center;
            float: right;
            margin-top: 1%;
        }
        
        .hide_show_icon,
        .show_remaing {
            display: none;
        }
        #backgroundBlur {
            background: #000000;
            opacity: .7;
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 999999999;
        }
        
        .view_body_boder {
            width: 95%;
            height: 80%;
            border: 1px solid #000;
            margin: auto;
            box-shadow: 0px 0px 5px #000;
        }
        
        .view_body_header {
            width: 100%;
            height: 30px;
            padding-top: 1%;
            padding-right: 3%;
        }
        
        .nodes {
            width: 55px;
            font-size: 11px;
            font-weight: bold;
            border: 1px solid #000;
            float: left;
            text-align: center;
            margin: 1px;
            float: right;
            border-radius: 3px 3px 0px 0px;
        }
        
        .createshipmentfont a:hover {
            color: #fff;
        }
        
        .width1 {
            width: 1%;
        }
        
        .width5 {
            width: 5%;
        }
        
        .width25 {
            width: 25%;
        }
        
        .width50 {
            width: 50%;
        }
        
        .width75 {
            width: 75%;
        }
        
        .width90 {
            width: 90%;
        }
        
        .width100 {
            width: 100%;
        }
        
        #tablelist_data_length {
            float: right;
        }
        
        table.dataTable thead>tr>th.sorting_asc,
        table.dataTable thead>tr>th.sorting_desc,
        table.dataTable thead>tr>th.sorting,
        table.dataTable thead>tr>td.sorting_asc,
        table.dataTable thead>tr>td.sorting_desc,
        table.dataTable thead>tr>td.sorting {
            padding-right: 20px;
        }
        
        #error_filter {
            color: red;
            font-weight: bold;
            font-size: 12px;
            width: 100%;
            text-align: center;
        }
        
        .delivery_charts {
            display: none;
        }
        
        body {
            overflow-x: hidden;
            overflow-y: auto;
        }
        
        .showlistcard {
            transform: scale(1.04);
            box-shadow: -5px 3px 30px #000;
            z-index: 1;
            position: relative;
        }
        
        #ui-datepicker-div {
            index: 9999;
        }
        
        .tab-pane>br {
            display: none;
        }
        
        #draftTableaa>thead>tr>th {
                padding: 5px;
    text-align: center;
    font-size: 12px;
        }
        
        #draftTableaa>tbody>tr>td {
                padding: 5px;
    text-align: center;
    font-size: 12px;
        }
        
        #draftTableaa_length {
            font-size: 12px;
            margin-top: 9px;
            display: none;
        }
        
        #draftTableaa_filter {
            font-size: 12px;
            margin-top: 9px;
            display: none;
        }
        
        .form-control-sm {
            height: 25px;
        }
        
        .custom-select-sm {
            height: 25px;
        }
        
        label {
            margin: 0px;
        }
        
        #draftTableaa_info {
            font-size: 12px;
        }
        
        #draftTableaa_paginate {
            font-size: 9px;
        }
        
        #draftTableaa>thead>tr>.sorting,
        .sorting_asc,
        .sorting_desc {
            background: none;
        }
        
        table.dataTable thead .sorting:before,
        table.dataTable thead .sorting_asc:before,
        table.dataTable thead .sorting_desc:before,
        table.dataTable thead .sorting_asc_disabled:before,
        table.dataTable thead .sorting_desc_disabled:before {
            content: none;
        }
        
        table.dataTable thead .sorting:after,
        table.dataTable thead .sorting_asc:after,
        table.dataTable thead .sorting_desc:after,
        table.dataTable thead .sorting_asc_disabled:after,
        table.dataTable thead .sorting_desc_disabled:after {
            content: none;
        }
        
        div::-webkit-scrollbar {
            width: 8px;
        }
        
        div::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            border-radius: 10px;
        }
        
        div::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
        }
        
        .shipment_name {
            width: 85%;
    border: 1px solid #000;
    padding: 1%;
    border-radius: 5px;
    margin-top: 1%;
        }
        
        #shipmentdatalistshow>tbody>tr:hover {
            background: lightgray;
            font-weight: bold;
            cursor: pointer;
        }
        
        #shipmentdatalistshow>thead>tr>th {
            padding: 4px;
            text-align: center;
        }
        
        #shipmentdatalistshow>tbody>tr>td {
            padding: 1px;
            text-align: center;
        }
        
        #shipmentdatalistshow_length {
            font-size: 12px;
            margin-top: 9px;
            display: none;
        }
        
        #shipmentdatalistshow_filter {
            font-size: 12px;
            margin-top: 9px;
            display: none;
        }
        
        .form-control-sm {
            height: 25px;
        }
        
        .custom-select-sm {
            height: 25px;
        }
        
        label {
            margin: 0px;
        }
        
        #shipmentdatalistshow_info {
            font-size: 12px;
        }
        
        #shipmentdatalistshow_paginate {
            font-size: 9px;
        }
        
        #shipmentdatalistshow>thead>tr>.sorting,
        .sorting_asc,
        .sorting_desc {
            background: none;
        }
        
        #draftTableaa>tbody>tr:hover {
            background: lightgray;
            font-weight: bold;
            cursor: pointer;
        }
        .dropdown-menu{width:11rem;}
        .sessionUsername{width: 100%;font-size: 12px;font-weight: 700;}
        .sessionUsernameDisplay{width: 17%;height: 20px;float: left;}
        .userrole{font-weight:bold;width:100%;font-size:12px;float:left;}
    </style>
    
    <header>
        <div class="row">
            
            <div class="col-md-5">
                <ul>
                    <li class="shipment Dashboard "><a href="Dashboard.jsp">Shipments</a></li>
                    <li class="dropdown Device"><a href="#" data-toggle="dropdown">Devices</a>
					          <ul class="dropdown-menu" style="border:0px solid;margin-top:15px;padding:0px 2px;">
					            <li class="bg-color btn-head w-100 headermenu DeviceConfigure DeviceManagement" style="border-radius:0px 5px  0px 0px;" id="inuse" onclick="javascript:inuse();">In Use Devices</li>
	                    		<li class="bg-color btn-head w-100 headermenu DeviceConfigure DeviceManagement" id="available"  onclick="javascript:Avaliable();">Available (Transfer Device)</li>
	                    		<li class="bg-color btn-head w-100 headermenu DeviceConfigure DeviceManagement" id="available"  onclick="javascript:Received();">Received Device</li>
	                    		<li class="bg-color btn-head w-100 headermenu DeviceConfigure DeviceManagement" id="configure" style="border-radius:0px 0px  5px 5px;" onclick="javascript:configdevices();">Configure</li>
					          </ul></li>
                    <li class="dropdown Alerts ">
					          <a href="#" data-toggle="dropdown">Alerts</a>
					          <ul class="dropdown-menu" style="border:0px solid;margin-top:15px;padding:0px 2px;">
					          <input type="hidden" id="token" >
					            <li class="bg-color btn-head w-100 headermenu AlertDashboard" style="border-radius:0px 5px  0px 0px;" id="customer" onclick="javascript:AlertDashboard();">Alert Dashboard</li>
	                    		<li class="bg-color btn-head w-100 AlertMaster headermenu" id="bp" onclick="javascript:AlertMaster();">Alert Master</li>
	                    		<li class="bg-color btn-head w-100 AlertProfile headermenu" id="route" onclick="javascript:AlertProfile();">Alert Profile</li>

	                    		
					          </ul>
       				 </li>
                    <li class="Reports "><a href="#">Reports</a></li>
                    <li class="dropdown setup ">
					          <a href="#" data-toggle="dropdown">Setup</a>
					          <ul class="dropdown-menu" style="border:0px solid;margin-top:15px;padding:0px 2px;">
					          <input type="hidden" id="token" >
					            <li class="bg-color btn-head w-100 headermenu CustomerMaster" style="border-radius:0px 5px  0px 0px;" id="customer" onclick="javascript:Customer();">Customer</li>
	                    		<li class="bg-color btn-head w-100 BusinessPartner headermenu" id="bp" onclick="javascript:BusinessPartner();">Business Partner</li>
	                    		<li class="bg-color btn-head w-100 RouteMaster headermenu" id="route" onclick="javascript:RouteMaster();">Route Master</li>
	                    		<li class="bg-color btn-head w-100 GoodsMaster headermenu" id="good_type" onclick="javascript:GoodsMaster();"style="border-radius:0px 0px  5px 5px;">Goods Master</li>
					          <li class="bg-color btn-head w-100 GoodsMaster headermenu" id="good_type" onclick="javascript:GeofenceMaster();"style="border-radius:0px 0px  5px 5px;">Geo-Fence Master</li>
					          </ul>
       				 </li>
                </ul>
            </div>
            <div class="col-md-4">
                <div class="dropdown showRolesList">
                <div  id="SPAD_Name">
                <div class="sessionUsername"><span class="sessionUsernameDisplay" >Login Name</span><span style="float:left;width:3%;text-align:center;">:</span><span id="user_SPAD_Name"></span><input type="hidden" value=""  id="scmid" /></div></div>
                	<!-- <div class="sessionUsername" id="AD_Name"><span class="sessionUsernameDisplay" >Customer Name</span><span style="float:left;width:3%;text-align:center;">:</span><span id="user_AD_Name"></span><input type="hidden" value=""  id="scmid" /></div>
                	<div class="sessionUsername" id="BP_Name"><span class="sessionUsernameDisplay" >Business Partner Name</span><span style="float:left;width:3%;text-align:center;">:</span><span id="bp_name_f"></span><input type="hidden" value="" id="bpi_idchange" /></div> -->
                    <!-- <select id="bpi_idchange" class="form-control" style="float:left;width:45%;">
                        <option value="BP0001">BP0001</option>
                        <option value="BP0002">BP0002</option>
                        <option value="BP0003">BP0003</option>
                    </select>
                    <select id="scmid" class="form-control">
                        <option value="SCM0001">SCM0001</option>
                        <option value="SCM0002">SCM0002</option>
                        <option value="SCM0003">SCM0003</option>
                    </select> -->
                </div>
            </div>
            <div class="col-md-3">
                <!-- <img src="./images/logout.png" style="float: left;margin-right: 20%; margin-top: 7%;" /> -->
                <button class="bg-color margin-rl1 btn-head" style="line-height: 20px;margin-top: 22px;border-radius: 3px;" onclick="javascript:logout();"><img src="./images/logout.png" style="width:15px;margin-right:5px;"/>Logout</button>
                <a href="https://127.0.0.1"><img src="./images/logo_scm.png" style="float: right;margin-top:10px;width: 190px;height: 45px;margin-right: 10px;"></a>
                
            </div>
        </div>
    </header>
   