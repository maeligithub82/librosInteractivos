var s = function(id){
	return document.getElementById(id);
}
s('b').style.display = 'none';
s('b1').style.display = 'none';
s('b2').style.display = 'none';
s('b3').style.display = 'none';
s('b4').style.display = 'none';
s('b5').style.display = 'none';
s('b6').style.display = 'none';
s('b7').style.display = 'none';
s('b8').style.display = 'none';
s('b99').style.display = 'none';
s('b1010').style.display = 'none';
s('b1111').style.display = 'none';
s('b9').style.display = 'none';
s('b10').style.display = 'none';
s('b11').style.display = 'none';
s('b12').style.display = 'none';
s('b13').style.display = 'none';
s('b14').style.display = 'none';
s('c').style.display = 'none';
s('c1').style.display = 'none';
s('c2').style.display = 'none';
s('c3').style.display = 'none';
s('c4').style.display = 'none';
s('c5').style.display = 'none';
s('c6').style.display = 'none';
s('c7').style.display = 'none';
s('c8').style.display = 'none';
s('c99').style.display = 'none';
s('c1010').style.display = 'none';
s('c1111').style.display = 'none';
s('c9').style.display = 'none';
s('c10').style.display = 'none';
s('c11').style.display = 'none';
s('c12').style.display = 'none';
s('c13').style.display = 'none';
s('c14').style.display = 'none';
s('r1').focus();

function formulario(f){
	if(f.b.value == ''){
		apprise('Digita la respuesta');
		return false;
	}
	return true;
}

function validar_1(){
	var a = s('r1').value;
	var b = s('r2').value;
	var c = s('r3').value;
	var d = s('r4').value;
	var e = s('r5').value;
	var f = s('r6').value;
	var g = s('r7').value;
	var h = s('r8').value;
	var ii = s('r99').value;
	var jj = s('r1010').value;
	var kk = s('r1111').value;
	
	var i = s('r9').value;
	var j = s('r10').value;
	var k = s('r11').value;
	var l = s('r12').value;
	var m = s('r13').value;
	var n = s('r14').value;
	var o = s('r15').value;
	
	
	if((a == 'i')||(a == 'k')||(a == 'd')||(a == 'n')||(a == 'g')||(a == 'c')||(a == 'p')||(a == 'e')||(a == 'o')||(a == 'r')||(a == 'z')){
		s('b').style.display = 'block';
		s('r1').disabled = true;
	}else{
		s('c').style.display = 'block';
		s('r1').disabled = true;
		}
	
		
	
	if((b == 'i')||(b == 'k')||(b == 'd')||(b == 'n')||(b == 'g')||(b == 'c')||(b == 'p')||(b == 'e')||(b == 'o')||(b == 'r')||(b == 'z')){
		s('b1').style.display = 'block';
		s('r2').disabled = true;
	}else{
		s('c1').style.display = 'block';
		s('r2').disabled = true;
		}

	
	
		if((c == 'i')||(c == 'k')||(c == 'd')||(c == 'n')||(c == 'g')||(c == 'c')||(c == 'p')||(c == 'e')||(c == 'o')||(c == 'r')||(c == 'z')){
		s('b2').style.display = 'block';
		s('r3').disabled = true;
	}
	else{
		s('c2').style.display = 'block';
		s('r3').disabled = true;
		}
	
		if((d == 'i')||(d == 'k')||(d == 'd')||(d == 'n')||(d == 'g')||(d == 'c')||(d == 'p')||(d == 'e')||(d == 'o')||(d == 'r')||(d == 'z')){
		s('b3').style.display = 'block';
		s('r4').disabled = true;
	}else{
		s('c3').style.display = 'block';
		s('r4').disabled = true;
		}
	
	
		if((e == 'i')||(e == 'k')||(e == 'd')||(e == 'n')||(e == 'g')||(e == 'c')||(e == 'p')||(e == 'e')||(e == 'o')||(e == 'r')||(e == 'z')){
		s('b4').style.display = 'block';
		s('r5').disabled = true;
	}else{
		s('c4').style.display = 'block';
		s('r5').disabled = true;
		}
	
	
		if((f == 'i')||(f == 'k')||(f == 'd')||(f == 'n')||(f == 'g')||(f == 'c')||(f == 'p')||(f == 'e')||(f == 'o')||(f == 'r')||(f == 'z')){
		s('b5').style.display = 'block';
		s('r6').disabled = true;
	}else{
		s('c5').style.display = 'block';
		s('r6').disabled = true;
		}	
	
	
		if((g == 'i')||(g == 'k')||(g == 'd')||(g == 'n')||(g == 'g')||(g == 'c')||(g == 'p')||(g == 'e')||(g == 'o')||(g == 'r')||(g == 'z')){
		s('b6').style.display = 'block';
		s('r7').disabled = true;
	}else{
		s('c6').style.display = 'block';
		s('r7').disabled = true;
		}	
	
	
		if((h == 'i')||(h == 'k')||(h == 'd')||(h == 'n')||(h == 'g')||(h == 'c')||(h == 'p')||(h == 'e')||(h == 'o')||(h == 'r')||(h == 'z')){
		s('b7').style.display = 'block';
		s('r8').disabled = true;
	}else{
		s('c7').style.display = 'block';
		s('r8').disabled = true;
		}
		
	
	
		if((ii == 'i')||(ii == 'k')||(ii == 'd')||(ii == 'n')||(ii == 'g')||(ii == 'c')||(ii == 'p')||(ii == 'e')||(ii== 'o')||(ii == 'r')||(ii == 'z')){
		s('b99').style.display = 'block';
		s('r99').disabled = true;
	}else{
		s('c99').style.display = 'block';
		s('r99').disabled = true;
		}
		
		
		if((jj == 'i')||(jj == 'k')||(jj == 'd')||(jj == 'n')||(jj == 'g')||(jj == 'c')||(jj == 'p')||(jj == 'e')||(jj== 'o')||(jj == 'r')||(jj == 'z')){
		s('b1010').style.display = 'block';
		s('r1010').disabled = true;
	}else{
		s('c1010').style.display = 'block';
		s('r1010').disabled = true;
		}
		
		if((kk == 'i')||(kk == 'k')||(kk == 'd')||(kk == 'n')||(kk == 'g')||(kk == 'c')||(kk == 'p')||(kk == 'e')||(kk== 'o')||(kk == 'r')||(kk == 'z')){
		s('b1111').style.display = 'block';
		s('r1111').disabled = true;
	}else{
		s('c1111').style.display = 'block';
		s('r1111').disabled = true;
		}
		
		
		
	
	
	
	
	
		if((i == 'f')||(i == 'm')||(i == 'a')||(i == 'j')||(i == 'h')||(i == 'l')||(i == 'b')){
		s('b8').style.display = 'block';
		s('r9').disabled = true;
	}else{
		s('c8').style.display = 'block';
		s('r9').disabled = true;
		}
	
	
		if((j == 'f')||(j == 'm')||(j == 'a')||(j == 'j')||(j == 'h')||(j == 'l')||(j == 'b')){
		s('b9').style.display = 'block';
		s('r10').disabled = true;
	}else{
		s('c9').style.display = 'block';
		s('r10').disabled = true;
		}	
	
		if((k == 'f')||(k == 'm')||(k == 'a')||(k == 'j')||(k == 'h')||(k == 'l')||(k == 'b')){
		s('b10').style.display = 'block';
		s('r11').disabled = true;
	}else{
		s('c10').style.display = 'block';
		s('r11').disabled = true;
		}
	
		
		if((l == 'f')||(l == 'm')||(l == 'a')||(l == 'j')||(l == 'h')||(l == 'l')||(l == 'b')){
		s('b11').style.display = 'block';
		s('r12').disabled = true;
		}
	else{
		s('c11').style.display = 'block';
		s('r12').disabled = true;
		}
	
		if((m == 'f')||(m == 'm')||(m == 'a')||(m == 'j')||(m == 'h')||(m == 'l')||(m == 'b')){
		s('b12').style.display = 'block';
		s('r13').disabled = true;
	}else{
		s('c12').style.display = 'block';
		s('r13').disabled = true;
		}
	
	
		if((n == 'f')||(n == 'm')||(n == 'a')||(n == 'j')||(n == 'h')||(n == 'l')||(n == 'b')){
		s('b13').style.display = 'block';
		s('r14').disabled = true;
	}else{
		s('c13').style.display = 'block';
		s('r14').disabled = true;
		}
	
		
		if((o == 'f')||(o == 'm')||(o == 'a')||(o == 'j')||(o == 'h')||(o == 'l')||(o == 'b')){
		s('b14').style.display = 'block';
		s('r15').disabled = true;
	}else{
		s('c14').style.display = 'block';
		s('r15').disabled = true;
		}
			

		
		if ( (a=='')||(a == b || a == c || a == d || a == e || a == f || a == g || a == h || a == ii || a == jj || a == kk || a == i || a == j || a == k || a == l || a == m || a == n || a == o)||(b =='')||(b == a || b == c || b == d || b == e || b == f || b == g || b == h || b == ii || b == jj || b == kk || b == i || b == j || b == k || b == l || b == m || b == n || b == o )||(c =='')||(c == a || c == b || c == d || c == e || c == f || c == g || c == h || c == ii || c == jj || c == kk || c == i || c == j || c == k || c == l || c == m || c == n || c== o) ||(d =='') || (d == a || d == b || d == c || d == e || d == f || d == g || d == h || d == ii || d == jj || d == kk ||  d == i || d == j || d == k || d == l || d == m || d == n || d== o) ||(e =='') || (e == a || e == b || e == c || e == d|| e == f || e == g || e == h || e == ii || e == jj || e == kk || e == i || e == j || e == k || e == l || e == m || e == n || e== o)||(f =='') || (f == a || f == b || f == c || f == d|| f == e || f == g || f == h || f == ii || f == jj || f == kk || f == i || f == j || f == k || f == l || f == m || f == n || f== o) ||(f =='') ||(g == a || g == b || g == c || g == d|| g == e || g == f || g == h || g == ii || g == jj || g == kk || g == i || g == j || g == k || g == l || g == m || g == n || g==o) ||(h =='') || (h == e || h == f || h == g || h == ii || h == jj || h == kk || h == i || h == j || h == k || h == l || h == m || h == n || h== o ) ||(ii =='') || (ii == a || ii == b || ii == c || ii == d|| ii == e || ii == f || ii == g || ii == h || ii == jj || ii == kk || ii == i || ii == j || ii == k || ii == l || ii == m || ii == n || ii== o) ||(jj =='') || (jj == a || jj == b || jj == c || jj == d|| jj == e || jj == f || jj == g || jj == h || jj == ii || jj == kk || jj == i || jj == j || jj == k || jj == l || jj == m || jj == n || jj== o) ||(kk =='') || (kk == a || kk == b || kk == c || kk == d|| kk == e || kk == f || kk == g || kk == h || kk == ii || kk == jj || kk == i || kk == j || kk == k || kk == l || kk == m || kk == n || kk== o)  ||(i =='') || (i == a || i == b || i== c || i == d|| i == e || i == f || i == g || i == h || i == ii || i == jj || i == kk  || i == j || i == k || i == l || i == m || i == n || i== o ) ||(j =='') || (j== a || j == b || j== c || j == d|| j == e || j == f || j == g || j == h || j == ii || j == jj || j == kk || j == i || j == k || j == l || j == m || j == n || j== o) ||(k =='') || (k== a || k == b || k== c || k == d|| k == e || k == f || k == g || k == h || k == ii || k == jj || k == kk || k == i || k == j || k == l || k == m || k == n || k== o) ||(l =='') || (l== a || l == b || l== c || l == d|| l == e || l == f || l == g || l == h || l == ii || l == jj || l == kk  || l == i || l == j || l == k || l == m || l == n || l== o) ||(m =='') || (m== a || m == b || m== c || m == d|| m == e || m == f || m == g || m == h || m == ii || m == jj || m == kk  || m == i || m == j || m == k || m == l || m == n || m== o) ||(n =='') || (n== a || n == b || n== c || n == d|| n == e || n == f || n == g || n == h || n == ii || n == jj || n == kk  || n == i || n == j || n == k || n == l || n == m || n== o) ||(o =='') || (o== a || o == b || o== c || o == d|| o== e || o == f || o == g || o == h || o == ii || o == jj || o == kk  || o == i || o == j || o == k || o == l || o == m || o== n)){
			
			apprise('Recuerda NO debe haber CAMPOS VACIOS o RESPUESTAS DUPLICADAS');
			
					s('b').style.display = 'none';
					s('b1').style.display = 'none';
					s('b2').style.display = 'none';
					s('b3').style.display = 'none';
					s('b4').style.display = 'none';
					s('b5').style.display = 'none';
					s('b6').style.display = 'none';
					s('b7').style.display = 'none';
					s('b8').style.display = 'none';
					s('b99').style.display = 'none';
					s('b1010').style.display = 'none';
					s('b1111').style.display = 'none';
					s('b9').style.display = 'none';
					s('b10').style.display = 'none';
					s('b11').style.display = 'none';
					s('b12').style.display = 'none';
					s('b13').style.display = 'none';
					s('b14').style.display = 'none';
					
					s('c').style.display = 'none';
					s('c1').style.display = 'none';
					s('c2').style.display = 'none';
					s('c3').style.display = 'none';
					s('c4').style.display = 'none';
					s('c5').style.display = 'none';
					s('c6').style.display = 'none';
					s('c7').style.display = 'none';
					s('c8').style.display = 'none';
					s('c99').style.display = 'none';
					s('c1010').style.display = 'none';
					s('c1111').style.display = 'none';
					s('c9').style.display = 'none';
					s('c10').style.display = 'none';
					s('c11').style.display = 'none';
					s('c12').style.display = 'none';
					s('c13').style.display = 'none';
					s('c14').style.display = 'none';
					
					s('r1').disabled = false;
					s('r2').disabled = false;
					s('r3').disabled = false;
					s('r4').disabled = false;
					s('r5').disabled = false;
					s('r6').disabled = false;
					s('r7').disabled = false;
					s('r8').disabled = false;
					s('r99').disabled = false;
					s('r1010').disabled = false;
					s('r1111').disabled = false;
					s('r9').disabled = false;
					s('r10').disabled = false;
					s('r11').disabled = false;
					s('r12').disabled = false;
					s('r13').disabled = false;
					s('r14').disabled = false;
					s('r15').disabled = false;
			
			
		}
				
		   	
		return true;
	
}
function llenadoCompleto(){
		s('r1').disabled = false;
		s('r2').disabled = false;
		s('r3').disabled = false;
		s('r4').disabled = false;
		s('r5').disabled = false;
		s('r6').disabled = false;
		s('r7').disabled = false;
		s('r8').disabled = false;
		s('r99').disabled = false;
		s('r1010').disabled = false;
		s('r1111').disabled = false;
		s('r9').disabled = false;
		s('r10').disabled = false;
		s('r11').disabled = false;
		s('r12').disabled = false;
		s('r13').disabled = false;
		s('r14').disabled = false;
		s('r15').disabled = false;	
		s('b').style.display = 'none';
		s('b1').style.display = 'none';
		s('b2').style.display = 'none';
		s('b3').style.display = 'none';
		s('b4').style.display = 'none';
		s('b5').style.display = 'none';
		s('b6').style.display = 'none';
		s('b7').style.display = 'none';
		s('b8').style.display = 'none';
		s('b99').style.display = 'none';
		s('b1010').style.display = 'none';
		s('b1111').style.display = 'none';
		s('b9').style.display = 'none';
		s('b10').style.display = 'none';
		s('b11').style.display = 'none';
		s('b12').style.display = 'none';
		s('b13').style.display = 'none';
		s('b14').style.display = 'none';
		s('c').style.display = 'none';
		s('c1').style.display = 'none';
		s('c2').style.display = 'none';
		s('c3').style.display = 'none';
		s('c4').style.display = 'none';
		s('c5').style.display = 'none';
		s('c6').style.display = 'none';
		s('c7').style.display = 'none';
		s('c8').style.display = 'none';
		s('c99').style.display = 'none';
		s('c1010').style.display = 'none';
		s('c1111').style.display = 'none';
		s('c9').style.display = 'none';
		s('c10').style.display = 'none';
		s('c11').style.display = 'none';
		s('c12').style.display = 'none';
		s('c13').style.display = 'none';
		s('c14').style.display = 'none';
	}

function limpiar(){
s('r1').value = "";
s('r1').disabled = false;
s('r2').value = "";
s('r2').disabled = false;
s('r3').value = "";
s('r3').disabled = false;
s('r4').value = "";
s('r4').disabled = false;
s('r5').value = "";
s('r5').disabled = false;
s('r6').value = "";
s('r6').disabled = false;
s('r7').value = "";
s('r7').disabled = false;
s('r8').value = "";
s('r8').disabled = false;

s('r99').value = "";
s('r99').disabled = false;
s('r1010').value = "";
s('r1010').disabled = false;
s('r1111').value = "";
s('r1111').disabled = false;


s('r9').value = "";
s('r9').disabled = false;
s('r10').value = "";
s('r10').disabled = false;
s('r11').value = "";
s('r11').disabled = false;
s('r12').value = "";
s('r12').disabled = false;
s('r13').value = "";
s('r13').disabled = false;
s('r14').value = "";
s('r14').disabled = false;
s('r15').value = "";
s('r15').disabled = false;
s('b').style.display = 'none';
s('b1').style.display = 'none';
s('b2').style.display = 'none';
s('b3').style.display = 'none';
s('b4').style.display = 'none';
s('b5').style.display = 'none';
s('b6').style.display = 'none';
s('b7').style.display = 'none';
s('b8').style.display = 'none';
s('b99').style.display = 'none';
s('b1010').style.display = 'none';
s('b1111').style.display = 'none';
s('b9').style.display = 'none';
s('b10').style.display = 'none';
s('b11').style.display = 'none';
s('b12').style.display = 'none';
s('b13').style.display = 'none';
s('b14').style.display = 'none';
s('c').style.display = 'none';
s('c1').style.display = 'none';
s('c2').style.display = 'none';
s('c3').style.display = 'none';
s('c4').style.display = 'none';
s('c5').style.display = 'none';
s('c6').style.display = 'none';
s('c7').style.display = 'none';
s('c8').style.display = 'none';
s('c99').style.display = 'none';
s('c1010').style.display = 'none';
s('c1111').style.display = 'none';
s('c9').style.display = 'none';
s('c10').style.display = 'none';
s('c11').style.display = 'none';
s('c12').style.display = 'none';
s('c13').style.display = 'none';
s('c14').style.display = 'none';
s('r1').focus();
	}

//función para que solo detecte minusculas
var keyDetect = function(e){
	if(e.keyCode < 97 || e.keyCode > 122){
		e.preventDefault();
	}
}

s('consultar').onclick = validar_1;
s('consultar').style.cursor = 'pointer';
s('limpiar').onclick = limpiar;
s('limpiar').style.cursor = 'pointer';
