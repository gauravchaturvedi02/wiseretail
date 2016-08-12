$(document).ready(function() {
	// Start writing your custom functions here.
	// All the necessary pluigns are already loaded.




});
function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('mobile').value == ""|| document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('form').submit();
alert("Form Submitted Successfully...");
}
}
//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}



jQuery(window).scroll(function() {
 if (jQuery(this).scrollTop() > 200){  
    jQuery('.top.logo-bg').addClass("sticky");
  }
  else{
    jQuery('.top.logo-bg').removeClass("sticky");
  }
});
 <!--Fix header-->
 



 
       jQuery(window).scroll(function(){
            if (jQuery(this).scrollTop() > 100) {
                jQuery('.scroll-top').fadeIn();
            } else {
                jQuery('.scroll-top').fadeOut();
            }
        });
 
        jQuery('.scroll-top').click(function(){
            jQuery("html, body").animate({ scrollTop: 0 }, 900);
            return false;
        });