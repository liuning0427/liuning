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