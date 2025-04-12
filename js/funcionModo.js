function funcionModo(){
    var x = document.getElementById("modo");
	if(x.className === "claro"){
		x.className += "oscuro";
	}else{
		x.className = "claro";
	}
}