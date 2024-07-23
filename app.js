
// Esto es un comentario en JavaScript
console.log("hola, sp");

document.getElementById('miBoton').addEventListener('click',function(){
    alert('has hecho click');
})

document.getElementById('hora').addEventListener('click', function(){
    document.getElementById('fecha').innerHTML = new Date();
});

document.getElementById('mensaje').innerHTML = "holaaaaaa"

document.getElementById('encender').addEventListener('click', function(){
    document.getElementById('imagen').src='prender.gif'
})

document.getElementById('apagar').addEventListener('click', function(){
    document.getElementById('imagen').src='apagar.gif'
})

document.getElementById('agrandar').addEventListener('click', function(){
    document.getElementById('texto').style.fontSize='35px'
})

document.getElementById("cars").innerHTML = cars.join(" , "); 
