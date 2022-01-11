jQuery(function($){
    $(".o-btn__sidemenu").on("click",function(){
        $(".sidebar").toggleClass("is-open");
        $(".o-test_menu").toggleClass("is-open");
    });

    $(".o-btn__sidemenuClose").on("click",function(){
        $(".sidebar").toggleClass("is-open");
    });
});