//I used the following jQuery functions: 
//hide(), addClass(), removeClass(), css(), fadeIn()/fadeOut(), click() and scrollTop(). 

$(document).ready(function(){
$(".about").hide();
$(".abouttext").hide();
$("#aboutinfo").hide();
$("#blogdesc").hide();
$(".blogtitle").hide();
$(".dispic").hide();
$("#_contact").hide();
$(window).scroll(function () {
 var height = $(window).scrollTop();
 if (height >= 100) { // once we reach 1000px mark
    $(".footer").removeClass("bounce"); }
 if (height < 100) {
 	$(".footer").addClass("bounce");
 }

 if (height >=300){
 	$("#landing").fadeOut("slow");
 	$("body").css("background-color", "#ff8c00");


 }
  if (height < 300){
 	$("#landing").fadeIn();
 	$("body").css("background-color", "#00bfff");

 }

 if (height >= 400){
 	 $(".about").fadeIn("slow");
 	 $("#aboutinfo").fadeIn("slow");

 }

  if (height <= 800){
 	$("#aboutcontainer").fadeIn();
 	
 }

  if (height > 900){
 	$("#aboutcontainer").fadeOut("slow");
 	$("body").css("background-color", "#20b2aa");

 }


  if (height >=900){
 	 $(".blogtitle").fadeIn("slow");
 	 $("#blogdesc").fadeIn("slow");

 }

  if (height >=1450){
  	 $("#_contact").fadeIn("slow");
 	 $(".dispic").fadeIn("slow");


 }


if (height >=1550){
 	$("#blogcontainer").fadeOut("slow");
  	$("body").css("background-color", "black");

 }

  if (height < 1550){
 	$("#blogcontainer").fadeIn("slow");
 	
 }



 console.log(height);
 });
$('#uparrow').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
	});
	