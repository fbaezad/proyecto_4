//########################################
//	 			Variables			 	//
//########################################

var operadora;
var operadorb;
var operacion;
var resul;

//########################################
//		Variables desde el innerHTML	//
//########################################

function calculadora (){
	var display = document.getElementById('display')
	var cero = document.getElementById('0')
	var uno = document.getElementById('1')
	var dos = document.getElementById('2')
	var tres = document.getElementById('3')
	var cuatro = document.getElementById('4')
	var cinco = document.getElementById('5')
	var seis = document.getElementById('6')
	var siete = document.getElementById('7')
	var ocho = document.getElementById('8')
	var nueve = document.getElementById('9')
	var on = document.getElementById('on')
	var sign = document.getElementById('sign')
	var raiz = document.getElementById('raiz')
	var dividido = document.getElementById('dividido')
	var por = document.getElementById('por')
	var menos = document.getElementById('menos')
	var punto = document.getElementById('punto')
	var igual = document.getElementById('igual')
	var mas = document.getElementById('mas')

//########################################
//		Intruducir digitos en display 	//
//########################################

	cero.addEventListener('click', function(){
		if(display.innerHTML === '0'){
			display.innerHTML = '0';
		}
		else if(display){
			display.innerHTML += '0';
			display.innerHTML = display.innerHTML.substring(0,8);
		}
	})

	cero.addEventListener('mousedown',function(){
		cero.setAttribute('style','transform:scale(0.90,0.90)')
	})

	cero.addEventListener('mouseup',function(){
		cero.setAttribute('style','transform:scale(1,1)')
	})

	uno.addEventListener('click', function(){
		if (display.innerHTML == '0'){
			display.innerHTML = 0 + 1;
		}
		else{
			display.innerHTML += '1';
			display.innerHTML = display.innerHTML.substring(0,8);
		}
	})

	uno.addEventListener('mousedown',function(){
		uno.setAttribute('style','transform:scale(0.90,0.90)')
	})

	uno.addEventListener('mouseup',function(){
		uno.setAttribute('style','transform:scale(1,1)')
	})

	dos.addEventListener('click', function(){
		if (display.innerHTML == '0'){
			display.innerHTML = 0 + 2;
		}
		else{
			display.innerHTML += '2';
			display.innerHTML = display.innerHTML.substring(0,8);
		}
	})

	dos.addEventListener('mousedown',function(){
		dos.setAttribute('style','transform:scale(0.90,0.90)')
	})

	dos.addEventListener('mouseup',function(){
		dos.setAttribute('style','transform:scale(1,1)')
	})

	tres.addEventListener('click', function(){
		if (display.innerHTML == '0'){
			display.innerHTML = 0 + 3;
		}
		else{
			display.innerHTML += '3';
			display.innerHTML = display.innerHTML.substring(0,8);
		}
	})

	tres.addEventListener('mousedown',function(){
		tres.setAttribute('style','transform:scale(0.90,0.90)')
	})

	tres.addEventListener('mouseup',function(){
		tres.setAttribute('style','transform:scale(1,1)')
	})

	cuatro.addEventListener('click', function(){
		if (display.innerHTML == '0'){
			display.innerHTML = 0 + 4;
		}
		else{
			display.innerHTML += '4';
			display.innerHTML = display.innerHTML.substring(0,8);
		}
	})

	cuatro.addEventListener('mousedown',function(){
		cuatro.setAttribute('style','transform:scale(0.90,0.90)')
	})

	cuatro.addEventListener('mouseup',function(){
		cuatro.setAttribute('style','transform:scale(1,1)')
	})

	cinco.addEventListener('click', function(){
		if (display.innerHTML == '0'){
			display.innerHTML = 0 + 5;
		}
		else{
			display.innerHTML += '5';
			display.innerHTML = display.innerHTML.substring(0,8);
		}
	})

	cinco.addEventListener('mousedown',function(){
		cinco.setAttribute('style','transform:scale(0.90,0.90)')
	})

	cinco.addEventListener('mouseup',function(){
		cinco.setAttribute('style','transform:scale(1,1)')
	})

	seis.addEventListener('click', function(){
		if (display.innerHTML == '0'){
			display.innerHTML = 0 + 6;
		}
		else{
			display.innerHTML += '6';
			display.innerHTML = display.innerHTML.substring(0,8);
		}
	})

	seis.addEventListener('mousedown',function(){
		seis.setAttribute('style','transform:scale(0.90,0.90)')
	})

	seis.addEventListener('mouseup',function(){
		seis.setAttribute('style','transform:scale(1,1)')
	})

	siete.addEventListener('click', function(){
		if (display.innerHTML == '0'){
			display.innerHTML = 0 + 7;
		}
		else{
			display.innerHTML += '7';
			display.innerHTML = display.innerHTML.substring(0,8);
		}
	})

	siete.addEventListener('mousedown',function(){
		siete.setAttribute('style','transform:scale(0.90,0.90)')
	})

	siete.addEventListener('mouseup',function(){
		siete.setAttribute('style','transform:scale(1,1)')
	})

	ocho.addEventListener('click', function(){
		if (display.innerHTML == '0'){
			display.innerHTML = 0 + 8;
		}
		else{
			display.innerHTML += '8';
			display.innerHTML = display.innerHTML.substring(0,8);
		}
	})

	ocho.addEventListener('mousedown',function(){
		ocho.setAttribute('style','transform:scale(0.90,0.90)')
	})

	ocho.addEventListener('mouseup',function(){
		ocho.setAttribute('style','transform:scale(1,1)')
	})

	nueve.addEventListener('click', function(){
		if (display.innerHTML == '0'){
			display.innerHTML = 0 + 9;
		}
		else{
			display.innerHTML += '9';
			display.innerHTML = display.innerHTML.substring(0,8);
		}
	})

	nueve.addEventListener('mousedown',function(){
		nueve.setAttribute('style','transform:scale(0.90,0.90)')
	})

	nueve.addEventListener('mouseup',function(){
		nueve.setAttribute('style','transform:scale(1,1)')
	})

	on.addEventListener('click', function(){
		delete display.innerHTML;
		display.innerHTML = '0';
	})

	on.addEventListener('mousedown',function(){
		on.setAttribute('style','transform:scale(0.90,0.90)')
	})

	on.addEventListener('mouseup',function(){
		on.setAttribute('style','transform:scale(1,1)')
	})

	//########################################
	//	Tipos de operaciones Aritméticas	//
	//########################################

	sign.addEventListener('click', function(){
		var num = display.innerHTML;
		var unary = -num;
		if(sign != num){
			display.innerHTML = unary;
		}
	})

	sign.addEventListener('mousedown',function(){
		sign.setAttribute('style','transform:scale(0.90,0.90)')
	})

	sign.addEventListener('mouseup',function(){
		sign.setAttribute('style','transform:scale(1,1)')
	})

	raiz.addEventListener('click', function(){
	display.innerHTML += 'raiz';
	})

	raiz.addEventListener('mousedown',function(){
		raiz.setAttribute('style','transform:scale(0.90,0.90)')
	})

	raiz.addEventListener('mouseup',function(){
		raiz.setAttribute('style','transform:scale(1,1)')
	})

	dividido.addEventListener('click', function(){
		operadora = display.innerHTML;
		operacion = '/';
		limpiar();
	})

	dividido.addEventListener('mousedown',function(){
		dividido.setAttribute('style','transform:scale(0.90,0.90)')
	})

	dividido.addEventListener('mouseup',function(){
		dividido.setAttribute('style','transform:scale(1,1)')
	})

	por.addEventListener('click', function(){
		operadora = display.innerHTML;
		operacion = '*';
		limpiar();
	})

	por.addEventListener('mousedown',function(){
		por.setAttribute('style','transform:scale(0.90,0.90)')
	})

	por.addEventListener('mouseup',function(){
		por.setAttribute('style','transform:scale(1,1)')
	})

	menos.addEventListener('click', function(){
		operadora = display.innerHTML;
		operacion = '-';
		limpiar();
	})

	menos.addEventListener('mousedown',function(){
		menos.setAttribute('style','transform:scale(0.90,0.90)')
	})

	menos.addEventListener('mouseup',function(){
		menos.setAttribute('style','transform:scale(1,1)')
	})

	punto.addEventListener('click', function(){
		var str = display.innerHTML;
		var n = str.indexOf('.');

		if(n == -1){
			display.innerHTML = str + '.';
		}

	});

	punto.addEventListener('mousedown',function(){
		punto.setAttribute('style','transform:scale(0.90,0.90)')
	})

	punto.addEventListener('mouseup',function(){
		punto.setAttribute('style','transform:scale(1,1)')
	})

	mas.addEventListener('click', function(){
		operadora = display.innerHTML;
		operacion = '+';
		limpiar();
	})

	mas.addEventListener('mousedown',function(){
		mas.setAttribute('style','transform:scale(0.90,0.90)')
	})

	mas.addEventListener('mouseup',function(){
		mas.setAttribute('style','transform:scale(1,1)')
	})

	igual.addEventListener('click', function(){
		resolver();
	})

	igual.addEventListener('mousedown',function(){
		igual.setAttribute('style','transform:scale(0.90,0.90)')
	})

	igual.addEventListener('mouseup',function(){
		igual.setAttribute('style','transform:scale(1,1)')
	})

	function limpiar(){
		display.innerHTML = ' ';
	}

	//########################################
	// 			Operación Aritmetica 		//
	//########################################

	function resolver(){	
		
		if(resul > 0 ){
			operadora = display.innerHTML;
		}
		else{
			operadorb = display.innerHTML;
		}

		switch(operacion){
			case '+':
				resul = parseFloat(operadora) + parseFloat(operadorb);
				break;

			case '-':
				resul = parseFloat(operadora) - parseFloat(operadorb);
				break;

			case '*':
				resul = parseFloat(operadora) * parseFloat(operadorb);
				break;

			case '/':
				resul = parseFloat(operadora) / parseFloat(operadorb);
				break;
		}

		display.innerHTML = resul;
		display.innerHTML = display.innerHTML.substring(0,8);
	}

}

calculadora();
