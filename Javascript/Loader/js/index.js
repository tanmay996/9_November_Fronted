
var timeset;
function layout(){

    document.getElementById("loader").style="display:none";
    
   document.getElementById("layout").style="width:100%;height:100vh";
}
function loader(){

    timeset= setTimeout("layout()" , 1000);
}