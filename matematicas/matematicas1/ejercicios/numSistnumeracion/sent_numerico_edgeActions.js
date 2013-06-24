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
         sym.$("mas_principal").hide();
         sym.$("txt_play").hide();
         sym.play();
         var monito = sym.getSymbol("caminar");
         monito.play();
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         // introducir código aquí// Buscar el objeto JavaScript de símbolo de Edge Animate en un elemento que sea
         // una instancia de símbolo. El objeto de símbolo puede usarse para invocar
         // las funciones de símbolo como reproducir, detener, etc.
         var anirobot = sym.getSymbol("robot");
         
         anirobot.play();
         

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${_btn_sig}", "click", function(sym, e) {
         // reproducir la línea de tiempo en la posición determinada (ms o etiqueta)
         sym.play("espec_1");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         // sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery
         var sig = sym.$("btn_sig");
         
         // reproducir la línea de tiempo en la posición determinada (ms o etiqueta)
         sig.play("espec_1");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_sig1}", "click", function(sym, e) {
         // reproducir la línea de tiempo en la posición determinada (ms o etiqueta)
         sym.play("espec_2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33675, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_sig2}", "click", function(sym, e) {
         // reproducir la línea de tiempo en la posición determinada (ms o etiqueta)
         sym.play("espec_3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_sig3}", "click", function(sym, e) {
         // reproducir la línea de tiempo en la posición determinada (ms o etiqueta)
         sym.play("fin");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 74368, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 78500, function(sym, e) {
         
         window.location.href = "eje_numfracionarios/ejercicio1.html";

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_cocient}", "click", function(sym, e) {
         sym.$("link").show();
         sym.$("mascara_link").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mascara_link}", "click", function(sym, e) {
         
         sym.$("mascara_link").hide();
         sym.$("link").hide();

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

})(jQuery, AdobeEdge, "EDGE-6620540");
