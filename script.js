var mode = document.getElementById("moon");

function tun(){
    var element = document.body;
    element.classList.toggle("kech");
    if(document.body.classList.contains("kech")){
       mode.src = "img/light.png"
    }else{
       mode.src = "img/night.png";
    }    
}

