function validateForm() {
    var x = document.forms["prenumenera"]["name"].value;
    if (x == null || x == "") {
        alert("Du har glömt fylla i namn");
        return false;
	}	
	
	var y = document.forms["prenumenera"]["email"].value;
	if (y == null || y == "") {
        alert("Du har glömt fylla i epost");
        return false;
	}
	
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(prenumenera.email.value))  
	{  
    return (true)  
	}  
    alert("Epostadressen är inte korrekt!")  
    return (false) 	
}

function externLink() {
	var x;
	if (confirm("Vill du verkligen lämna webbplatsen?") == true) {
        x =  window.location.href;
    } else {
        return false;
    }	
}

function bigPic() {
	imgBig = this.src.split(".")[0] + "_stor.jpg";	
	window.open(imgBig);
}
	
var contents = document.getElementsByClassName("menuContent");

var menu;

function menuFunction() {
  var ele = contents[menu.indexOf(this)];
  
  if (ele.style.display == "none" || ele.style.display == "") {
    ele.style.display = "block";
  } else {
    ele.style.display = "none";
  }
  
}

(function () {
var DEFAULT_CSS = 'stylesheet1.css',
    styleElement = document.getElementById('myStyleSheet');
    
document.addEventListener('DOMContentLoaded', function (e) {
    var currentCSS = localStorage.getItem('GetData') || DEFAULT_CSS;
	styleOption = document.getElementById("changeStyle");
    styleElement.href = currentCSS;
    styleOption.value = currentCSS;
    styleOption.addEventListener('change', changeStyleFunction);
});

function changeStyleFunction() {
    var newCSS = styleOption.value;
    localStorage.setItem('GetData', newCSS);
    styleElement.href = newCSS;
}
}());

function init(){
    var knapp = document.getElementById("premButton");
	
	var extern = document.getElementsByClassName("external");
	for(var i = 0; i < extern.length; i++) {
		{
			extern[i].onclick = externLink;
		}
	}
	
	var pic = document.getElementsByClassName("pics");
	for(var i = 0; i < pic.length; i++) {
		{
			pic[i].onclick = bigPic;
		}
	}
	
	menu = [].slice.call(document.querySelectorAll(".menuHeader"), 0);
	for (var i = 0; i < menu.length; i++) {
	menu[i].onclick = menuFunction;
	}

    knapp.onclick = validateForm;	
}

window.onload = init; 