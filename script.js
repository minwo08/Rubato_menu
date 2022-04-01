$(",main-menu > li").mouseover(function(){
          $(this).children(".sub").stop().sildeDown();
//     $(".sub").stop().slideDown();
});
$(".main-menu > li").mouseleave(function(){

           $(this).children(".sub").stop().slideUp();
//      $(".sub").stop().slideUp           
});