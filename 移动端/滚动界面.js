var iNow = 1;
$(document).on('swipeUp',function(){
    // console.log(1111);
    $('.page-'+ iNow).attr("class","page-"+ iNow +"moveToTop");
    $('.page-'+(iNow+1)).attr("class","page-"+(iNow+1)+" moveFromBottom"  );
})