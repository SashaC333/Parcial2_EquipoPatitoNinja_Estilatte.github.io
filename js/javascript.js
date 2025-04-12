function funcionNav(){
    var x = document.getElementById("mytopnav");
    if (x.className === "topnav"){
        x.className += " responsive";
    } else{
        x.className = "topnav";
    }
}
function funcionModo(){
    var x = document.getElementById("modo");
	if(x.className === "claro"){
		x.className += " oscuro";
	}else{
		x.className = "claro";
	}
}