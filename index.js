$(document).ready(function() {

    $(".tab_content").hide(); 
    $("ul.tabs li:first").addClass("active").show(); 
    $(".tab_content:first").show(); 

    //On Click Event
    $("ul.tabs li").click(function() {

        $("ul.tabs li").removeClass("active"); 
        $(this).addClass("active"); 
        $(".tab_content").hide(); 

        var activeTab = $(this).find("span").attr("tab_name"); 
        $(activeTab).fadeIn(); 
        return false;
    });

});