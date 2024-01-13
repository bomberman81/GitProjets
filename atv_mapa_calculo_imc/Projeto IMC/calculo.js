// Calcular o IMC

function calcularIMC() {
	var formulario = document.getElementById("formulario");

	var quilos = parseFloat(formulario.quilos.value);
	var altura = parseFloat(formulario.altura.value);

	var imc = quilos / (altura * altura);

	formulario.imc.value = imc.toFixed(2);
	
	var $rimc = document.getElementById("rimc");

	if(imc<18.5) {
		$rimc.innerHTML = "Seu IMC é " + imc.toFixed(2) + " " + " que indica: Baixo Peso.";
	} 
	else if(imc>=18.5 && imc<25) {
		$rimc.innerHTML = "Seu IMC é " + imc.toFixed(2) + " " +" que indica: Peso Ideal.";
	}
	else if(imc>=25 && imc<30) {
		$rimc.innerHTML = "Seu IMC é " + imc.toFixed(2) + " " +" que indica: SobrePeso.";
	}
	else if(imc>=30 && imc<35) {
		$rimc.innerHTML = "Seu IMC é " + imc.toFixed(2) + " " +" que indica: Obesidade Grau 1.";
	}
	else if(imc>=35 && imc<40) {
		$rimc.innerHTML = "Seu IMC é " + imc.toFixed(2) + " " +" que indica: Obesidade Grau 2.";
	}
	else if(imc>40) {
		$rimc.innerHTML = "Seu IMC é " + imc.toFixed(2) + " " +" que indica: Obesidade Grau 3.";
	}
}

