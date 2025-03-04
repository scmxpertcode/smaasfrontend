<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "https://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta charset="utf-8">
	<link rel="shortcut icon" href="./images/favicon.png" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='expires' content='0'>
<meta http-equiv='pragma' content='no-cache'>
    <meta name="description" content="#"/>
     <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/responsive.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="./js/All.js"></script>
    <script rel="javascript" src="./js/jquerysession.js"></script>
	<script src="./js/CommonFunction.js"></script>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-136841595-1"></script>
		<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'UA-136841595-1');
	</script>
   	<style>
		body{
			background-image:url("./images/banner_login.jpg");
			background-repeat: no-repeat;
			opacity: 2.5;
		}
		.user_card {
			width: 300px;
			top:40px;
			margin: 0 auto;
			position: relative;
			padding: 20px 20px 20px;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			-moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			border-radius: 5px;
			background: #f6f6f6;
			border-radius: 3px;
			box-shadow: 0 2px 2px rgba(10,16,20,.24), 0 0 2px rgba(10,16,20,.12);
			display: block;
			margin-left:550px;
			background-color: white;
			margin-top:170px;
			
		
		}
		.brand_logo_container {
			width: 170px;
			text-align: center;
			margin: 0 auto;
			border-radius: 50%;
			background: #60a3bc;
			padding: 10px;
		}
		.brand_logo {
			height: 150px;
			width: 150px;
			border-radius: 50%;
			border: 2px solid white;
		}
		.form_container {
			margin-top: 10px;
		}
		.login_btn {
			background: #c0392b !important;
			color: white !important;
			margin-top: 20px;
			font-weight: 500;
			padding: 4px 20px;
			font-size: 18px;
			margin-left: 8px;
			border-radius:10px 10px;
		}
		.login_btn:focus {
			box-shadow: none !important;
			outline: 0px !important;
		}
		.login_container {
			text-align: center;
		}
		
		.input-group{
			padding: 20px 0px 4px;
			width:100%;
		}
		.input-group-text {
			background: #c0392b !important;
			color: white !important;
			position: absolute;
			z-index: 999;
			padding: 9px 10px 10px;
			font-size: 20px;
			border: 0 !important;
			border-radius: 0.25rem 0 0 0.25rem !important;
		}
		.input_user,
		.input_pass:focus {
			box-shadow: none !important;
			outline: 0px !important;
		}
		.custom-checkbox .custom-control-input:checked~.custom-control-label::before {
			background-color: #c0392b !important;
		}
		.input-group input{
    		padding: 17px 40px;
		}
		.d-flex h4{
			text-align: center;
			color: #020202;
			font-weight: 600;
			font-size: 22px;
			margin-bottom: 25px;
		}
		a:link{
			color:blue;
		}
		ul{
			margin-top: 15px;
			padding-left: 2px;
			
		}
		#error{color:red;font-weight:bold;font-size:11px;text-align:center;}
		
	</style>
	<style id="mfesecure-ts-style" type="text/css">.trustedsite-body-noscroll{ overflow:hidden !important;}</style>
</head>
<body oncopy="return false" onpaste="return false">

<script>



</script>



	<header class="header home-page-four">
			<div class="top-bar">
					<div class="thm-container clearfix">
						
						<div class="contact-info pull-left"></div>
						<div class="moto center">
							<marquee behavior="alternate" scrolldelay="300" onmouseover="this.stop()" onmouseout="this.start()">SCMXpert is a division of Dhham LLC</marquee>
						</div>
						<div class="social-box pull-right">
							<br>
						</div>
					</div>
				</div>
	</header>
	<section class="login-form">
		<div class="container h-100">
			<div class="d-flex justify-content-center h-100">
					<div class="col-md-5 col-sm-5 col-xs-12">
				<div class="user_card">
					<div class="d-flex justify-content-center">
						
						<div  align="center">
							<a href="index.html" target="_blank"><img src="images/scm-logo.png" alt="Logo"></a>
						</div>
					</div>
					<div class="d-flex justify-content-center form_container">
							<div id="error"></div>
							<div class="input-group mb-3">
							
							<!-- <div class="input-group mb-3" id="usertext1">
								<div class="input-group-append">
									<span class="input-group-text"><i class="fa fa-user" aria-hidden="true"></i></span>
								</div>
								<input type="text" name="Email" id="forgotemail" class="form-control input_user" required placeholder="Enter Email Id">
							</div> -->
						<div class="input-group mb-2">
								<div class="input-group-append">
									<span class="input-group-text"><i class="fa fa-key" style="font-size: 16px;" aria-hidden="true"></i></span>
								</div>
								<input type="password" name="password" id="password" class="form-control input_pass" required placeholder="Enter New Password">
							</div>
							<div class="input-group mb-2">
								<div class="input-group-append">
									<span class="input-group-text"><i class="fa fa-key" style="font-size: 16px;" aria-hidden="true"></i></span>
								</div>
								<input type="password" name="Confirm password" id="con-password" class="form-control input_pass" required placeholder="Confirm New Password">
							</div>
						
					</div>
					<div class="d-flex justify-content-center mt-3 login_container">
						<button type="submit" class="btn login_btn" onclick="javascript:return changePassword();">Submit</button>
						<button type="button" class="btn login_btn" onclick="window.location.href='index.jsp'">Cancel</button>	
					</div>

			</div>
			
			
		</div>
		</div>
		</div>
		</section>
</body>
</html>