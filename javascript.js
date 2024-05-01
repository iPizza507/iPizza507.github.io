let si = document.getElementById("Si");
	si.addEventListener("click", function(e){
		alert("Gracias, sabia que aceptarias")
		thanksMessage.style.opacity = "1";
	}
);

let no = document.getElementById("No");
	no.addEventListener("mousemove", function(e){
	let x = Math.round(Math.random()*93);
	let y = Math.round(Math.random()*93);

	no.style.left = x+"%";
	no.style.top = y+"%";
	}
);
