(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         var anirobot = sym.getSymbol("robot");
         
         anirobot.play();

      });
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41000, function(sym, e) {
         window.location.href = "../descripcion3/especificacion1.html";

      });
       Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12356, function(sym, e) {
         var anirobot_sor = sym.getSymbol("robot_sor");
         anirobot_sor.play();
      });

   })("stage");
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4937, function(sym, e) {
         
         sym.play("ciclo1");
         

      });
   })("rostro");
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         var anirobot = sym.getSymbol("robot");
         
          anirobot.stop();

      });
   })("robot");
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         var anirobot = sym.getSymbol("robot");
         
          anirobot.stop();

      });
      })("robot_sor");
})(jQuery, AdobeEdge, "EDGE-6620539");
