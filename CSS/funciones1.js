// JavaScript Document
/*Bloquear copiar textos*/
document.onkeydown=function() { 
if (window.event) {
if((window.event.keyCode >= 117) && (window.event.keyCode <= 123))
{
//Bloquear Backspace
//Bloquear Teclas Fxx (excepto F1)
window.event.cancelBubble = true;

window.event.returnValue = false;
return false;
}
}

if(event.altLeft) {
if((window.event.keyCode == 37) || (window.event.keyCode == 39)) {
//Bloquear Alt + Cursor Izq/Der.
return false;
}
}



//alert(window.event.keyCode);
return true;

}

/*function queryBlue() {
document.querySelector("link[href='CSS2.css']").href = "CSS02blue.css";
}	

function disableselect(e){
return false
}
function reEnable(){
return true
}
document.onselectstart=new Function ("return false")
if (window.sidebar){
document.onmousedown=disableselect
document.onclick=reEnable
} */

clabHack=0;
//document.oncontextmenu = function(){return false} 
 function right(e) {if (navigator.appName == 'Netscape'){
 if (e.which == 3 || e.which == 2){alert("Aqui no puedes utilizar el botón izquierdo del mouse...");
 for(i=0;i!=clabHack;i++)alert("Ya te lo habia advertido, ahora te penalizaré con \n                 "+(clabHack-i)+"\n              clicks !!!...");
 clabHack+=10;
 alert("La proxima vez que lo hagas será peor !!!");  return false;}}
 if (navigator.appName == 'Microsoft Internet Explorer'){
 if (event.button == 2 || event.button == 3){
 alert("Aqui no puedes utilizar el botón derecho del mouse...");
 for(i=0;i!=clabHack;i++)alert("Ya te lo habia advertido, ahora te penalizaré con \n                 "+(clabHack-i)+"\n              clicks !!!...");
 clabHack+=10;
 alert("La proxima vez que lo hagas será peor !!! ");
 return false;}}  return true;}  document.onmousedown = left;
 if (document.layers) window.captureEvents(Event.MOUSEDOWN);
 window.onmousedown=left; 

function myFunction2() {
    var x = document.getElementById('myDIV2');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}



/*Mostrar Menu lateral*/

$(".submenu").click(function(){
  $(this).children("ul").slideToggle();
})

$("ul").click(function(ev){
  ev.stopPropagation();
})



<!--
    function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }

	
		

function show_menu(id) {
       document.getElementById(id).style.display='block';	
    }
function hide_menu(id) {
       document.getElementById(id).style.display='none';
	document.getElementById(id).style.transitionDelay = "1000";
    }

//div de pacientes cortina

function toggle_height(id) {
       var e = document.getElementById(id);
       if(e.style.height == '0%')
          e.style.height = '90%';
       else
          e.style.height = '0%';
    }

//Abrir/cerrar temas laterales

function openTemas() {
  document.getElementById("mastemas").style.height = "auto";
  document.getElementById("mastemas").style.display = "block"; 
}

function closeTemas() {
  document.getElementById("mastemas").style.height = "0";
  document.getElementById("mastemas").style.display = "none";
	}

//div de pacientes cambio de altura

document.querySelector('#button').addEventListener('click', function() {
  document.querySelector('.text').classList.toggle('max');
});


function ocultar(){
	document.getElementById('uno').style.display='none';
}
function mostrar(){
	document.getElementById('uno').style.display='block';
}

function ocultarPares(){
	document.getElementById('pares').style.display='none';
}
function mostrarPares(){
	document.getElementById('pares').style.display='block';
}

function masPares(){
	document.getElementById('par2').style.display='block';
}

/*function disabletext(e){
return false
}
function reEnable(){
return true
}
document.onselectstart=new Function ("return false")
if (window.sidebar){
document.onmousedown=disabletext
document.onclick=reEnable
}*/






// *** SWITCH ESTILOS ***
