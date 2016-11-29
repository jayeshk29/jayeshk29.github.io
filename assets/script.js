$(document).ready(function(){

$(window).scroll(function () {
 var height = $(window).scrollTop();
 if (height >= 100) { // once we reach 1000px mark
    $(".footer").removeClass("bounce"); }
 if (height <= 100) {
 	$(".footer").addClass("bounce");
 }
 console.log(height);
 // or do whatever you want here
 });
	
	// Question 4


	// IMPLEMENT "SHOW MODAL" WHEN "CLICK ON LOGIN BUTTON FROM MAIN PAGE" HERE

	// IMPLEMENT "HIDE MODAL" WHEN "CLICK ON SUBMIT BUTTON FROM MODAL BOX" HERE

	// IMPLEMENT "HIDE MODAL" WHEN "CLICK ON CANCEL BUTTON FROM MODAL BOX" HERE
	
	
	// Question 5
	// IMPLEMENT "HIDE MODAL" WHEN "CLICK ON MODAL OVERLAY" HERE
	
});