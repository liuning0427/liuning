var oMe = document.getElementById('me');
        var oLeft = document.getElementById('left');
        var aLi = oLeft.getElementsByTagName('li');
        var oAbm = document.getElementById('abm');
        oMe.onclick = function(){
            if(oAbm.style.display == 'none' || oAbm.style.display == ""){
                oAbm.style.display = 'block';
            }else if(oAbm.style.display == 'block'){
                oAbm.style.display = 'none';
            }
        }
        var oYoo = document.getElementById('yoo');
        var oYo = document.getElementById('yo');
        var aImg = oYo.getElementsByTagName('img');
        for(var i=0;i<aImg.length;i++){
            aImg[i].index = i;
            aImg[i].onmouseover = function(){
                for(var j=0;j<aImg.length;j++){
                    aImg[j].className = "";
                }
                this.className = 'zh';
            }
        }
        oYoo.onclick = function(){
            if(oYo.style.display == "" || oYo.style.display == "none"){
                oYo.style.display = "block";
            }else if(oYo.style.display == "block"){
                oYo.style.display = "none";
            }
        }
        var oEee = document.getElementById('eee');
        var aThree = oEee.getElementsByClassName('three');
        oEee.onclick = function(){
            
         }