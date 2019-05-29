window.onload = function(){
    var op5 = document.getElementById('nav1-5');
    op5.onmouseover = function(){
        document.getElementById('nav1-5-1').style.visibility = 'visible';
        document.getElementById('one').style.backgroundColor = '#f3cecd';
    }
    op5.onmouseout = function(){
        document.getElementById('nav1-5-1').style.visibility = 'hidden';
        document.getElementById('one').style.backgroundColor = '#c16b77';
    }

}


    function init(){
        setInterval("changeImg()",1500);
     }
    var i=1;
    function changeImg(){
        i++;
        document.getElementById("lunbo").src="./images/L"+i+".jpg";
        if(i==5){
            i=1;
        }
    }