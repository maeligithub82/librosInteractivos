/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindElementAction(compId, symbolName, "${_f2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // reproducir la línea de tiempo en la posición determinada (ms o etiqueta)
         sym.play("error1");
         
         // Ocultar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("f1").hide();
         sym.$("f2").hide();
         sym.$("f3").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_f1}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // reproducir la línea de tiempo en la posición determinada (ms o etiqueta)
         sym.play("acierto1");
         
         // Ocultar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("f2").hide();
         sym.$("f3").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_txt_play}", "click", function(sym, e) {
         // Ocultar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("mas_principal").hide();
         
         sym.$("txt_play").hide();
         
         
         
         sym.play();
         // Buscar el objeto JavaScript de símbolo de Edge Animate en un elemento que sea
         // una instancia de símbolo. El objeto de símbolo puede usarse para invocar
         // las funciones de símbolo como reproducir, detener, etc.
         var monito = sym.getSymbol("caminar");
         
         monito.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mas_principal}", "click", function(sym, e) {
         // Ocultar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("mas_principal").hide();
         
         sym.$("txt_play").hide();
         
         
         
         sym.play();
         // Buscar el objeto JavaScript de símbolo de Edge Animate en un elemento que sea
         // una instancia de símbolo. El objeto de símbolo puede usarse para invocar
         // las funciones de símbolo como reproducir, detener, etc.
         var monito = sym.getSymbol("caminar");
         
         monito.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // introducir código aquí
         
         sym.stop();
         
         var rudi = sym.getSymbol("robot_error");
         
         rudi.play();
         
         // Buscar el objeto JavaScript de símbolo de Edge Animate en un elemento que sea
         // una instancia de símbolo. El objeto de símbolo puede usarse para invocar
         // las funciones de símbolo como reproducir, detener, etc.
         var cara = sym.getSymbol("rostro");
         
         cara.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_f3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("error1");
         
         sym.$("f1").hide();
         sym.$("f2").hide();
         sym.$("f3").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_atras}", "click", function(sym, e) {
         // Ir a una nueva dirección URL en la ventana actual
         // (sustituya "_self" por un atributo de destino para una nueva ventana)
         window.location.href = "../ejercicios_inter/preguntas.htm"; // se especifica la url de la pagina que se va a cargar a continuacion
         
         sym.play("ejercicio1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_siguiente}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.stop();
         
         var rudi = sym.getSymbol("robot");
         
         rudi.play();
         
         // Buscar el objeto JavaScript de símbolo de Edge Animate en un elemento que sea
         // una instancia de símbolo. El objeto de símbolo puede usarse para invocar
         // las funciones de símbolo como reproducir, detener, etc.
         var cara = sym.getSymbol("rostro");
         
         cara.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_acierto1}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // reproducir la línea de tiempo en la posición determinada (ms o etiqueta)
         sym.play("ejercicio1");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'caminar'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // introducir código aquí
         // reproducir la línea de tiempo en la posición determinada (ms o etiqueta)
         sym.play("ciclo1");

      });
      //Edge binding end

   })("caminar");
   //Edge symbol end:'caminar'

   //=========================================================
   
   //Edge symbol: 'rostro'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         
         sym.play("ciclo1");
         

      });
      //Edge binding end

   })("rostro");
   //Edge symbol end:'rostro'

   //=========================================================
   
   //Edge symbol: 'robot'
   (function(symbolName) {   
   
   })("robot");
   //Edge symbol end:'robot'

   //=========================================================
   
   //Edge symbol: 'robot_1'
   (function(symbolName) {   
   
      })("robot_error");
   //Edge symbol end:'robot_error'

})(jQuery, AdobeEdge, "EDGE-6620539");