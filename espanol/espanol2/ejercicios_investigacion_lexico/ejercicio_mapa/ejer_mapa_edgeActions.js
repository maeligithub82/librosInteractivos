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
      
      
      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.$("act_mex").hide();
         sym.$("act_guate").hide();
         sym.$("act_salva").hide();
         sym.$("act_honduras").hide();
         sym.$("act_nicaragua").hide();
         sym.$("act_costrica").hide();
         sym.$("act_panama").hide();
         sym.$("act_cuba").hide();
         sym.$("act_repdominica").hide();
         sym.$("act_puerico").hide();
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_act_mex}", "click", function(sym, e) {
         
         // Mostrar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("mexico").show();
         sym.$("txt_mexico").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_act_guate}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("guate").show();
         sym.$("txt_guate").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_act_salva}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("salvador").show();
         sym.$("txt_salvador").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_act_honduras}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("honduras").show();
         sym.$("txt_honduras").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_act_nicaragua}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("nicaragua").show();
         sym.$("txt_nicaragua").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_act_costrica}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("cost_rica").show();
         sym.$("txt_costarica").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_act_panama}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("panama").show();
         sym.$("txt_panama").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_act_cuba}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("cuba").show();
         sym.$("txt_cuba").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_act_repdominica}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("rep_dominica").show();
         sym.$("txt_repdominicana").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_act_puerico}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("puerto_rico").show();
         sym.$("txt_puertorico").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_closenortam_btn}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("zomout_nortamerica");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_act_venezuela}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("venezuela").show();
         sym.$("txt_venzuela").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_act_colombia}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("colombia").show();
         sym.$("txt_colombia").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_act_ecuador}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("ecuador").show();
         sym.$("txt_ecuador").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_act_peru}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("peru").show();
         sym.$("txt_peru").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_act_bolivia}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("bolivia").show();
         sym.$("txt_bolivia").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_act_chile}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("chile").show();
         sym.$("txt_chile").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_act_argentina}", "click", function(sym, e) {
         
         sym.$("argentina").show();
         sym.$("txt_argentina").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_act_uruguay}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("uruguay").show();
         sym.$("txt_uruguay").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_act_paraguay}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("paraguay").show();
         sym.$("txt_paraguay").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_closensuram_btn}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("zomoutsuramerica");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         
         sym.$("act_colombia").hide();
         sym.$("act_venezuela").hide();
         sym.$("act_ecuador").hide();
         sym.$("act_peru").hide();
         sym.$("act_bolivia").hide();
         sym.$("act_chile").hide();
         sym.$("act_uruguay").hide();
         sym.$("act_paraguay").hide();
         sym.$("act_argentina").hide();
         
         
         
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_act_espao}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("espaa").show();
         sym.$("txt_espaa").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5750, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6075, function(sym, e) {
         // introducir código aquí
         // Ocultar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("act_espao").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_act_guineaecua}", "click", function(sym, e) {
         sym.$("guinea_ecua").show();
         sym.$("txt_guinea").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_closeuropa}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-28102227");