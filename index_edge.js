/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'fondo',
            type:'image',
            rect:['0','0','1024px','700px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"fondo.jpg",'0px','0px']
         },
         {
            id:'icono_portal',
            type:'image',
            rect:['362px','474px','300px','148px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"icono_portal.jpg",'0px','0px']
         },
         {
            id:'icono_portal1',
            type:'image',
            rect:['517px','474px','454px','148px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"icono_portal1.png",'0px','0px']
         },
         {
            id:'mc_biolo1',
            type:'rect',
            rect:['362px','159px','auto','auto','auto','auto'],
            overflow:'hidden'
         },
         {
            id:'mc_espanol12',
            type:'rect',
            rect:['895','496','auto','auto','auto','auto']
         },
         {
            id:'espanol3',
            type:'image',
            rect:['200px','316px','150px','148px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"espanol3.png",'0px','0px']
         },
         {
            id:'taller1',
            type:'image',
            rect:['50px','474px','454px','148px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"taller1.png",'0px','0px']
         },
         {
            id:'quimica3',
            type:'image',
            rect:['510px','316px','150px','148px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"quimica3.png",'0px','0px']
         },
         {
            id:'mc_mate1',
            type:'rect',
            rect:['670px','159px','auto','auto','auto','auto']
         },
         {
            id:'mate3',
            type:'image',
            rect:['820px','316px','150px','148px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"mate3.png",'0px','0px']
         },
         {
            id:'mc_espanol2',
            type:'rect',
            rect:['50px','316px','auto','auto','auto','auto']
         },
         {
            id:'mc_fisica2',
            type:'rect',
            rect:['360px','315px','auto','auto','auto','auto']
         },
         {
            id:'mc_mate2',
            type:'rect',
            rect:['670px','316px','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'mc_fisica2',
            symbolName:'mc_fisica2'
         },
         {
            id:'mc_biolo1',
            symbolName:'mc_biolo1'
         },
         {
            id:'mc_mate1',
            symbolName:'mc_mate1'
         },
         {
            id:'mc_espanol12',
            symbolName:'mc_espanol1'
         },
         {
            id:'mc_mate2',
            symbolName:'mc_mate2'
         },
         {
            id:'mc_espanol2',
            symbolName:'mc_espanol2'
         }
         ]
      },
   states: {
      "Base State": {
         "${_mc_fisica2}": [
            ["style", "top", '315px'],
            ["style", "opacity", '0'],
            ["style", "left", '357px']
         ],
         "${_mc_espanol2}": [
            ["style", "top", '316px'],
            ["style", "opacity", '0'],
            ["style", "left", '47px']
         ],
         "${_taller1}": [
            ["style", "top", '474px'],
            ["style", "opacity", '0'],
            ["style", "left", '47px']
         ],
         "${_mate3}": [
            ["style", "top", '316px'],
            ["style", "opacity", '0'],
            ["style", "left", '817px']
         ],
         "${_icono_portal}": [
            ["style", "top", '474px'],
            ["style", "opacity", '0'],
            ["style", "left", '394px']
         ],
         "${_espanol3}": [
            ["style", "top", '316px'],
            ["style", "opacity", '0'],
            ["style", "left", '197px']
         ],
         "${_mc_mate2}": [
            ["style", "top", '316px'],
            ["style", "opacity", '0'],
            ["style", "left", '667px']
         ],
         "${_mc_mate1}": [
            ["style", "top", '159px'],
            ["style", "opacity", '0'],
            ["style", "left", '667px']
         ],
         "${_mc_biolo1}": [
            ["style", "top", '159px'],
            ["style", "opacity", '0'],
            ["style", "left", '359px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '700px'],
            ["style", "width", '1024px']
         ],
         "${_mc_espanol12}": [
            ["style", "top", '159px'],
            ["style", "opacity", '0'],
            ["style", "left", '47px']
         ],
         "${_icono_portal1}": [
            ["style", "top", '474px'],
            ["style", "opacity", '0'],
            ["style", "left", '514px']
         ],
         "${_quimica3}": [
            ["style", "top", '316px'],
            ["style", "opacity", '0'],
            ["style", "left", '507px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid333", tween: [ "style", "${_espanol3}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid335", tween: [ "style", "${_mc_biolo1}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid303", tween: [ "style", "${_mate3}", "left", '782px', { fromValue: '817px'}], position: 500, duration: 110 },
            { id: "eid292", tween: [ "style", "${_mate3}", "left", '820px', { fromValue: '782px'}], position: 610, duration: 390 },
            { id: "eid246", tween: [ "style", "${_mc_espanol12}", "top", '159px', { fromValue: '159px'}], position: 1000, duration: 0 },
            { id: "eid327", tween: [ "style", "${_mc_mate2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid294", tween: [ "style", "${_mc_mate2}", "left", '632px', { fromValue: '667px'}], position: 500, duration: 110 },
            { id: "eid283", tween: [ "style", "${_mc_mate2}", "left", '670px', { fromValue: '632px'}], position: 610, duration: 390 },
            { id: "eid302", tween: [ "style", "${_mc_biolo1}", "left", '324px', { fromValue: '359px'}], position: 500, duration: 110 },
            { id: "eid291", tween: [ "style", "${_mc_biolo1}", "left", '362px', { fromValue: '324px'}], position: 610, duration: 390 },
            { id: "eid295", tween: [ "style", "${_taller1}", "left", '12px', { fromValue: '47px'}], position: 500, duration: 110 },
            { id: "eid284", tween: [ "style", "${_taller1}", "left", '50px', { fromValue: '12px'}], position: 610, duration: 390 },
            { id: "eid298", tween: [ "style", "${_mc_espanol12}", "left", '12px', { fromValue: '47px'}], position: 500, duration: 110 },
            { id: "eid287", tween: [ "style", "${_mc_espanol12}", "left", '50px', { fromValue: '12px'}], position: 610, duration: 390 },
            { id: "eid296", tween: [ "style", "${_mc_espanol2}", "left", '12px', { fromValue: '47px'}], position: 500, duration: 110 },
            { id: "eid285", tween: [ "style", "${_mc_espanol2}", "left", '50px', { fromValue: '12px'}], position: 610, duration: 390 },
            { id: "eid304", tween: [ "style", "${_quimica3}", "left", '472px', { fromValue: '507px'}], position: 500, duration: 110 },
            { id: "eid293", tween: [ "style", "${_quimica3}", "left", '510px', { fromValue: '472px'}], position: 610, duration: 390 },
            { id: "eid336", tween: [ "style", "${_mate3}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid299", tween: [ "style", "${_icono_portal1}", "left", '479px', { fromValue: '514px'}], position: 500, duration: 110 },
            { id: "eid288", tween: [ "style", "${_icono_portal1}", "left", '517px', { fromValue: '479px'}], position: 610, duration: 390 },
            { id: "eid300", tween: [ "style", "${_espanol3}", "left", '162px', { fromValue: '197px'}], position: 500, duration: 110 },
            { id: "eid289", tween: [ "style", "${_espanol3}", "left", '200px', { fromValue: '162px'}], position: 610, duration: 390 },
            { id: "eid332", tween: [ "style", "${_icono_portal1}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid297", tween: [ "style", "${_mc_fisica2}", "left", '322px', { fromValue: '357px'}], position: 500, duration: 110 },
            { id: "eid286", tween: [ "style", "${_mc_fisica2}", "left", '360px', { fromValue: '322px'}], position: 610, duration: 390 },
            { id: "eid331", tween: [ "style", "${_mc_espanol12}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid334", tween: [ "style", "${_mc_mate1}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid328", tween: [ "style", "${_taller1}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid329", tween: [ "style", "${_mc_espanol2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid330", tween: [ "style", "${_mc_fisica2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid337", tween: [ "style", "${_quimica3}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid301", tween: [ "style", "${_mc_mate1}", "left", '632px', { fromValue: '667px'}], position: 500, duration: 110 },
            { id: "eid290", tween: [ "style", "${_mc_mate1}", "left", '670px', { fromValue: '632px'}], position: 610, duration: 390 }         ]
      }
   }
},
"mc_espanol1": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'espanol',
      type: 'image',
      rect: ['23px','0px','300px','148px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/espanol.png','0px','0px']
   },
   {
      id: 'espanol_u',
      type: 'image',
      rect: ['0','148px','300px','148px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/espanol_u.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_espanol}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_espanol_u}": [
            ["style", "top", '148px']
         ],
         "${symbolSelector}": [
            ["style", "height", '148px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '300px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 11000,
         autoPlay: true,
         timeline: [
            { id: "eid107", tween: [ "style", "${_espanol}", "top", '-149px', { fromValue: '0px'}], position: 7000, duration: 500 },
            { id: "eid114", tween: [ "style", "${_espanol_u}", "top", '-1px', { fromValue: '148px'}], position: 7000, duration: 500 }         ]
      }
   }
},
"mc_fisica2": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'fisica2',
      type: 'image',
      rect: ['23px','0px','300px','148px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/fisica2.png','0px','0px']
   },
   {
      id: 'fisica2_u',
      type: 'image',
      rect: ['0','0','300px','148px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/fisica2_u.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_fisica2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '150px']
         ],
         "${_fisica2_u}": [
            ["style", "top", '148px'],
            ["style", "width", '150px']
         ],
         "${symbolSelector}": [
            ["style", "height", '148px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '150px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 12000,
         autoPlay: true,
         timeline: [
            { id: "eid248", tween: [ "style", "${_fisica2_u}", "width", '150px', { fromValue: '150px'}], position: 1000, duration: 0 },
            { id: "eid120", tween: [ "style", "${_fisica2_u}", "top", '0px', { fromValue: '148px'}], position: 9000, duration: 500 },
            { id: "eid247", tween: [ "style", "${_fisica2}", "width", '150px', { fromValue: '150px'}], position: 1000, duration: 0 },
            { id: "eid117", tween: [ "style", "${_fisica2}", "top", '-148px', { fromValue: '0px'}], position: 9000, duration: 500 }         ]
      }
   }
},
"mc_mate1": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'mate1',
      type: 'image',
      rect: ['23px','0px','150px','148px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mate1.png','0px','0px']
   },
   {
      id: 'mate1_u',
      type: 'image',
      rect: ['0','0','150px','148px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mate1_u.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_mate1}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '300px']
         ],
         "${_mate1_u}": [
            ["style", "top", '148px'],
            ["style", "width", '300px']
         ],
         "${symbolSelector}": [
            ["style", "height", '148px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '300px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 18000,
         autoPlay: true,
         timeline: [
            { id: "eid249", tween: [ "style", "${_mate1}", "width", '300px', { fromValue: '300px'}], position: 1000, duration: 0 },
            { id: "eid250", tween: [ "style", "${_mate1_u}", "width", '300px', { fromValue: '300px'}], position: 1000, duration: 0 },
            { id: "eid126", tween: [ "style", "${_mate1_u}", "top", '0px', { fromValue: '148px'}], position: 13000, duration: 445 },
            { id: "eid123", tween: [ "style", "${_mate1}", "top", '-149px', { fromValue: '0px'}], position: 13000, duration: 445 }         ]
      }
   }
},
"mc_biolo1": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'biologia',
      type: 'image',
      rect: ['23px','0px','150px','148px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/biologia.png','0px','0px']
   },
   {
      id: 'biologia_u',
      type: 'image',
      rect: ['0','0','150px','148px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/biologia_u.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_biologia}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '300px']
         ],
         "${symbolSelector}": [
            ["style", "height", '148px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '300px']
         ],
         "${_biologia_u}": [
            ["style", "top", '148px'],
            ["style", "width", '300px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid99", tween: [ "style", "${_biologia}", "opacity", '1', { fromValue: '1'}], position: 500, duration: 0 },
            { id: "eid241", tween: [ "style", "${_biologia}", "width", '300px', { fromValue: '300px'}], position: 0, duration: 0 },
            { id: "eid129", tween: [ "style", "${_biologia}", "top", '-149px', { fromValue: '0px'}], position: 4000, duration: 500 },
            { id: "eid132", tween: [ "style", "${_biologia_u}", "top", '0px', { fromValue: '148px'}], position: 4000, duration: 500 },
            { id: "eid242", tween: [ "style", "${_biologia_u}", "width", '300px', { fromValue: '300px'}], position: 0, duration: 0 },
            { id: "eid65", tween: [ "style", "${_biologia}", "left", '0px', { fromValue: '0px'}], position: 500, duration: 0 }         ]
      }
   }
},
"mc_espanol2": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'espanol2',
      type: 'image',
      rect: ['23px','0px','150px','148px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/espanol2.png','0px','0px']
   },
   {
      id: 'espanol2_u',
      type: 'image',
      rect: ['0','0','150px','148px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/espanol2_u.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_espanol2_u}": [
            ["style", "top", '148px']
         ],
         "${_espanol2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '148px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '150px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 23000,
         autoPlay: true,
         timeline: [
            { id: "eid138", tween: [ "style", "${_espanol2_u}", "top", '0px', { fromValue: '148px'}], position: 20000, duration: 500 },
            { id: "eid135", tween: [ "style", "${_espanol2}", "top", '-148px', { fromValue: '0px'}], position: 20000, duration: 500 }         ]
      }
   }
},
"mc_mate2": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'mate2',
      type: 'image',
      rect: ['23px','0px','150px','148px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mate2.png','0px','0px']
   },
   {
      id: 'mate2_u',
      type: 'image',
      rect: ['0','0','150px','148px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mate2_u.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_mate2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_mate2_u}": [
            ["style", "top", '148px']
         ],
         "${symbolSelector}": [
            ["style", "height", '148px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '150px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9000,
         autoPlay: true,
         timeline: [
            { id: "eid144", tween: [ "style", "${_mate2_u}", "top", '0px', { fromValue: '148px'}], position: 6000, duration: 500 },
            { id: "eid141", tween: [ "style", "${_mate2}", "top", '-149px', { fromValue: '0px'}], position: 6000, duration: 500 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-24649434");
