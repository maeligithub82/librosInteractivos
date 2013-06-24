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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
// Buscar el objeto JavaScript de símbolo de Edge Animate en un elemento que sea
// una instancia de símbolo. El objeto de símbolo puede usarse para invocar
// las funciones de símbolo como reproducir, detener, etc.
var anirobot_err_atras = sym.getSymbol("robot_error");

anirobot_err_atras.playReverse();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18750, function(sym, e) {
         // introducir código aquí
         
         // Buscar el objeto JavaScript de símbolo de Edge Animate en un elemento que sea
         // una instancia de símbolo. El objeto de símbolo puede usarse para invocar
         // las funciones de símbolo como reproducir, detener, etc.
         var aniroboterror = sym.getSymbol("robot_error");
         
         aniroboterror.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33500, function(sym, e) {
         
         
         // Ocultar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("grupo5").hide();
         sym.$("tip3").hide();
         sym.$("tip2").hide();
         sym.$("tip1").hide();
         sym.$("Text").hide();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 43000, function(sym, e) {
         // introducir código aquí
         // Ir a una nueva dirección URL en la ventana actual
         // (sustituya "_self" por un atributo de destino para una nueva ventana)
          window.location.href = "../descripcion4/especificacion1.html";

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

   //=========================================================
   
   //Edge symbol: 'robot_error'
   (function(symbolName) {   
   
   })("robot_error");
   //Edge symbol end:'robot_error'

})(jQuery, AdobeEdge, "EDGE-6620539");