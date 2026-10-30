// JavaScript Document

//Cambiar colores y CSS link;

function colorBlue() {
var link = document.getElementById('CSS-main');
link.setAttribute('href', 'CSS/blue.css');
	localStorage.href = 'CSS/blue.css';
	alert("Cambiaste la Guía de Biomagnetismo a tonos Azul");
	location.reload();
	
}

function colorVerde() {
var link = document.getElementById('CSS-main');
link.setAttribute('href', 'CSS/verde.css');
	localStorage.href = 'CSS/verde.css';
	alert("Cambiaste la Guía de Biomagnetismo a tonos Verde");
	location.reload();
	
	
}

function colorRojo() {
var link = document.getElementById('CSS-main');
link.setAttribute('href', 'CSS/rojo.css');
	localStorage.href = 'CSS/rojo.css';
	alert("Cambiaste la Guía de Biomagnetismo a tonos de Siena");
	location.reload();
	
}

function colorPurple() {
var link = document.getElementById('CSS-main');
link.setAttribute('href', 'CSS/purple.css');
	localStorage.href = 'CSS/purple.css';
	alert("Cambiaste la Guía de Biomagnetismo a tonos de Púrpura");
	location.reload();
	
}

function colorMetal() {
var link = document.getElementById('CSS-main');
link.setAttribute('href', 'CSS/metal.css');
	localStorage.href = 'CSS/metal.css';
	alert("Cambiaste la Guía de Biomagnetismo a tonos Metal");
	location.reload();
	
}

//Cambiar la nueva CSS al cargar cada página

function nuevoCss(){	
		var css;
		css = localStorage.href;
		
		if (css) { 			
	document.getElementById("CSS-main").setAttribute('href', css);     			
}
}

//Crear Cookies

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}