$(function() {

if($(document).width() > 1000)
{	
	$("#map").addClass("height400");
	
    	
}else if($(document).width() < 1000 && $(document).width() > 1500)
{
		//alert("hell");
	//alert($(document).height());
	$("#map").addClass("height400");
	$(".show_hide_icon ").trigger("click");
	$(".live_shipments").css({"height":"440px"});
	$("#bottom_map").css({"height":"140px","overflow-y":"hidden"});
    	
}
else if($(document).width() < 800 && $(document).width() > 600)
{	
		alert("hel");

	alert($(document).height());
	$("#map").addClass("height400");
    	
}
});