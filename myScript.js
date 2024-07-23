function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }

function Sumas(){
    document.getElementById("suma").innerHTML = 5 + 5 
}


function basico(){
    let x = 6 ;
    document.getElementById("prueba").innerHTML = x
}

function matris(){
    const cars = ["nisan","audi"]

    cars[0] = "toyota"

    cars.push("mercedes")
    document.getElementById("cars").innerHTML = cars.join(" , "); 
}

matris();

