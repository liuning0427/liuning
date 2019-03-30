var oBox = document.getElementById('box');
var aClick = oBox.getElementsByClassName('click');
var aLi = oBox.getElementsByTagName('li');
for(var i=0;i<aLi.length;i++){
    aLi[i].index = i;
    aLi[i].onclick = function(){
        for(var j=0;j<aLi.length;j++){
            aLi[j].className = "";
        }
        this.className = "click";
    }
}
var iNow = 1;
$(document).on("swipeLeft",function(){
    // console.log(111);
    $('.page-'+iNow).attr("class","page-"+iNow+"moveToLeft");
    $('.page-'+(iNow+1)).attr("class","page-"+(iNow+1)+" moveToRight");
    setTimeout(function(){
        $('.page-'+(iNow+1)).children().removeClass('hide');
        $('.page-'+iNow).children().addClass('hide');
        iNow++;
    },600);
})
