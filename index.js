let nombre

nombre = prompt("Ingrese nombre del paciente");

if ( nombre === NaN || "" || null	){
	prompt("ingrese correctamente el nombre");
} else{
	console.log("nombre del paciente es " + nombre);
}

let edad = prompt("ingrese edad de " + nombre);

while (edad != 1){
	edad = parseInt(prompt("ingrese la edad correctamente"));
	console.log("la edad del paciente es " + edad);	
		
}

let pesoBebe = pedirPeso

function pedirPeso() {
	pesoBebe = parseInt(prompt("ingrese peso"))
	console.log("el peso del bebe es " + pesoBebe + "kg")
}

for (i = 1; i <= 1; i++){
	pedirPeso()
}

if (pesoBebe == 15){
	document.write("Debes darle a " + nombre + " 30mg/12hrs o 2mL/12 hrs")
	console.log("Debes darle a " + nombre + " 30mg/12hrs o 2mL/12 hrs")
} else if(pesoBebe >= 16 && pesoBebe <= 23){
	document.write("Debes darle a " + nombre + " 45mg/12hrs o 3/12 hrs")
	console.log("Debes darle a " + nombre + " 45mg/12hrs o 3/12 hrs")
} else if(pesoBebe >= 24 && pesoBebe <= 40){
	document.write("Debes darle a " + nombre + " 60mg/12hrs o 4mL/12 hrs")
	console.log("Debes darle a " + nombre + " 60mg/12hrs o 4mL/12 hrs")
} else if(pesoBebe > 40){
	document.write("Debes darle a " + nombre + " 75mg/12hrs o 5mL/12 hrs")
	console.log("Debes darle a " + nombre + " 75mg/12hrs o 5mL/12 hrs")
} else{
	document.write("usted no ha ingresado el peso correctamente")
}