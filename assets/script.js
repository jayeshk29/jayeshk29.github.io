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
 if (height <= 100) {
 	$(".footer").addClass("bounce");
 }
 if (height >=400){
 	$("#landing").fadeOut("slow");


 }

 if (height >=500){
 	 $(".about").fadeIn("slow");
 	 $("#aboutinfo").fadeIn("slow");

 }

  if (height >=1150){
 	 $(".blogtitle").fadeIn("slow");
 	 $("#blogdesc").fadeIn("slow");

 }

  if (height >=1450){
  	 $("#_contact").fadeIn("slow");
 	 $(".dispic").fadeIn("slow");

 }



  if (height < 400){
 	$("#landing").fadeIn();

 }

  if (height >=1050){
 	$("#aboutcontainer").fadeOut("slow");
 }

  if (height < 1050){
 	$("#aboutcontainer").fadeIn();
 	
 }

  if (height >=1550){
 	$("#blogcontainer").fadeOut("slow");
 }

  if (height < 1550){
 	$("#blogcontainer").fadeIn();
 	
 }



 console.log(height);
 });
	});
	