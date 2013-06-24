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
      
      
      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // introducir código aquí
         
         // Buscar el objeto JavaScript de símbolo de Edge Animate en un elemento que sea
         // una instancia de símbolo. El objeto de símbolo puede usarse para invocar
         // las funciones de símbolo como reproducir, detener, etc.
         var anirobot = sym.getSymbol("robot");
         
         anirobot.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16000, function(sym, e) {
         // introducir código aquí
         
         // Ir a una nueva dirección URL en la ventana actual
         // (sustituya "_self" por un atributo de destino para una nueva ventana)
         window.location.href = "../ejercicios_inter/preguntas2.htm";

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'rostro'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4937, function(sym, e) {
         
         sym.play("ciclo1");
         

      });
      //Edge binding end

   })("rostro");
   //Edge symbol end:'rostro'

   //=========================================================
   
   //Edge symbol: 'robot'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         // introducir código aquí
         
         // Buscar el objeto JavaScript de símbolo de Edge Animate en un elemento que sea
         // una instancia de símbolo. El objeto de símbolo puede usarse para invocar
         // las funciones de símbolo como reproducir, detener, etc.
         var anirobot = sym.getSymbol("robot");
         
          anirobot.stop();

      });
      //Edge binding end

   })("robot");
   //Edge symbol end:'robot'

})(jQuery, AdobeEdge, "EDGE-6620539");