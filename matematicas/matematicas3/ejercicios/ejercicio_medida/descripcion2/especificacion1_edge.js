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
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'pizarron',
            type:'image',
            rect:['0','0','900px','700px','auto','auto'],
            fill:["rgba(0,0,0,0)","../img/pizarron.png",'0px','0px']
         },
         {
            id:'especificacion',
            type:'text',
            rect:['-639px','61px','744px','271px','auto','auto'],
            text:"¡¡ Bien !!<br>Ahora realizaremos la demostración geométrica de Pitágoras.<br><br>1.- Traza nuevamente el triángulo rectángulo cuyos catetos miden 3 y 5 cm. respectivamente. <br><br>",
            align:"left",
            font:['Fabada',26,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3],
            transform:[]
         },
         {
            id:'triangulo_cuadra',
            display:'none',
            type:'image',
            rect:['261px','154px','378px','432px','auto','auto'],
            fill:["rgba(0,0,0,0)","../img/triangulo_cuadra.png",'0px','0px']
         },
         {
            id:'tria_eje_2',
            display:'none',
            type:'image',
            rect:['278px','294px','420px','280px','auto','auto'],
            fill:["rgba(0,0,0,0)","../img/tria_eje_2.png",'0px','0px']
         },
         {
            id:'robot',
            display:'none',
            type:'rect',
            rect:['23px','271px','auto','auto','auto','auto']
         },
         {
            id:'robot_sor',
            display:'none',
            type:'rect',
            rect:['44px','357px','auto','auto','auto','auto']
         },
         {
            id:'especificacion2',
            display:'none',
            type:'text',
            rect:['-639px','71px','744px','119px','auto','auto'],
            text:"2.- Ahora tracemos un cuadrado en cada cateto e hipotenusa , como se muestra a continuación.<br>",
            align:"left",
            font:['Fabada',26,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3],
            transform:[]
         }],
         symbolInstances: [
         {
            id:'robot',
            symbolName:'robot'
         },
         {
            id:'robot_sor',
            symbolName:'robot_sor'
         }
         ]
      },
   states: {
      "Base State": {
         "${_especificacion}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["style", "line-height", '37px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '-639.25px'],
            ["style", "width", '744.34997558594px'],
            ["style", "top", '70.8px'],
            ["style", "font-size", '26px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'block'],
            ["style", "height", '271.38079833984px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["transform", "scaleX", '1'],
            ["subproperty", "textShadow.offsetV", '3px']
         ],
         "${_tria_eje_2}": [
            ["style", "top", '293.55px'],
            ["style", "opacity", '0.075471698113208'],
            ["style", "left", '277.57px'],
            ["style", "display", 'none']
         ],
         "${_especificacion2}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '1'],
            ["style", "left", '80.75px'],
            ["style", "width", '744.34997558594px'],
            ["style", "top", '70.8px'],
            ["transform", "scaleX", '1'],
            ["style", "text-align", 'left'],
            ["style", "height", '118.90768432617px'],
            ["style", "display", 'none'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "font-size", '26px'],
            ["style", "line-height", '37px']
         ],
         "${_robot}": [
            ["style", "top", '340.67px'],
            ["transform", "scaleY", '0.08519'],
            ["style", "display", 'none'],
            ["style", "height", '371px'],
            ["transform", "scaleX", '0.08519'],
            ["style", "left", '43.57px'],
            ["style", "width", '291.58511913733px']
         ],
         "${_robot_sor}": [
            ["style", "top", '357px'],
            ["style", "left", '44px'],
            ["style", "display", 'none']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '696px'],
            ["style", "width", '900px']
         ],
         "${_pizarron}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '860px']
         ],
         "${_triangulo_cuadra}": [
            ["style", "top", '154.1px'],
            ["style", "opacity", '0'],
            ["style", "left", '261px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 41000,
         autoPlay: true,
         timeline: [
            { id: "eid2283", tween: [ "style", "${_triangulo_cuadra}", "opacity", '1', { fromValue: '0'}], position: 12000, duration: 356 },
            { id: "eid1579", tween: [ "style", "${_pizarron}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1500 },
            { id: "eid2539", tween: [ "style", "${_robot_sor}", "top", '346px', { fromValue: '357px'}], position: 12356, duration: 771, easing: "easeInOutCubic" },
            { id: "eid2540", tween: [ "style", "${_robot_sor}", "top", '368px', { fromValue: '346px'}], position: 13127, duration: 873, easing: "easeInOutCubic" },
            { id: "eid2541", tween: [ "style", "${_robot_sor}", "top", '347px', { fromValue: '368px'}], position: 14000, duration: 750, easing: "easeInOutCubic" },
            { id: "eid2542", tween: [ "style", "${_robot_sor}", "top", '368px', { fromValue: '347px'}], position: 14750, duration: 829, easing: "easeInOutCubic" },
            { id: "eid2543", tween: [ "style", "${_robot_sor}", "top", '346px', { fromValue: '368px'}], position: 15579, duration: 791, easing: "easeInOutCubic" },
            { id: "eid2544", tween: [ "style", "${_robot_sor}", "top", '368px', { fromValue: '346px'}], position: 16370, duration: 880, easing: "easeInOutCubic" },
            { id: "eid2545", tween: [ "style", "${_robot_sor}", "top", '346px', { fromValue: '368px'}], position: 17250, duration: 900, easing: "easeInOutCubic" },
            { id: "eid2546", tween: [ "style", "${_robot_sor}", "top", '367px', { fromValue: '346px'}], position: 18150, duration: 850, easing: "easeInOutCubic" },
            { id: "eid2547", tween: [ "style", "${_robot_sor}", "top", '346px', { fromValue: '367px'}], position: 19000, duration: 939, easing: "easeInOutCubic" },
            { id: "eid2548", tween: [ "style", "${_robot_sor}", "top", '366px', { fromValue: '346px'}], position: 19939, duration: 907, easing: "easeInOutCubic" },
            { id: "eid2549", tween: [ "style", "${_robot_sor}", "top", '346px', { fromValue: '366px'}], position: 20846, duration: 969, easing: "easeInOutCubic" },
            { id: "eid2550", tween: [ "style", "${_robot_sor}", "top", '369px', { fromValue: '346px'}], position: 21815, duration: 811, easing: "easeInOutCubic" },
            { id: "eid2559", tween: [ "style", "${_robot_sor}", "top", '346px', { fromValue: '369px'}], position: 22626, duration: 946, easing: "easeInOutCubic" },
            { id: "eid2560", tween: [ "style", "${_robot_sor}", "top", '367px', { fromValue: '346px'}], position: 23572, duration: 855, easing: "easeInOutCubic" },
            { id: "eid2561", tween: [ "style", "${_robot_sor}", "top", '349px', { fromValue: '367px'}], position: 24427, duration: 960, easing: "easeInOutCubic" },
            { id: "eid2562", tween: [ "style", "${_robot_sor}", "top", '366px', { fromValue: '349px'}], position: 25387, duration: 863, easing: "easeInOutCubic" },
            { id: "eid2563", tween: [ "style", "${_robot_sor}", "top", '347px', { fromValue: '366px'}], position: 26250, duration: 812, easing: "easeInOutCubic" },
            { id: "eid2564", tween: [ "style", "${_robot_sor}", "top", '365px', { fromValue: '347px'}], position: 27062, duration: 938, easing: "easeInOutCubic" },
            { id: "eid2565", tween: [ "style", "${_robot_sor}", "top", '348px', { fromValue: '365px'}], position: 28000, duration: 877, easing: "easeInOutCubic" },
            { id: "eid2566", tween: [ "style", "${_robot_sor}", "top", '367px', { fromValue: '348px'}], position: 28877, duration: 873, easing: "easeInOutCubic" },
            { id: "eid2567", tween: [ "style", "${_robot_sor}", "top", '348px', { fromValue: '367px'}], position: 29750, duration: 1000, easing: "easeInOutCubic" },
            { id: "eid2568", tween: [ "style", "${_robot_sor}", "top", '367px', { fromValue: '348px'}], position: 30750, duration: 832, easing: "easeInOutCubic" },
            { id: "eid2569", tween: [ "style", "${_robot_sor}", "top", '349px', { fromValue: '367px'}], position: 31582, duration: 918, easing: "easeInOutCubic" },
            { id: "eid2570", tween: [ "style", "${_robot_sor}", "top", '369px', { fromValue: '349px'}], position: 32500, duration: 750, easing: "easeInOutCubic" },
            { id: "eid2571", tween: [ "style", "${_robot_sor}", "top", '348px', { fromValue: '369px'}], position: 33250, duration: 675, easing: "easeInOutCubic" },
            { id: "eid2572", tween: [ "style", "${_robot_sor}", "top", '368px', { fromValue: '348px'}], position: 33925, duration: 825, easing: "easeInOutCubic" },
            { id: "eid2573", tween: [ "style", "${_robot_sor}", "top", '347px', { fromValue: '368px'}], position: 34750, duration: 894, easing: "easeInOutCubic" },
            { id: "eid2574", tween: [ "style", "${_robot_sor}", "top", '367px', { fromValue: '347px'}], position: 35644, duration: 856, easing: "easeInOutCubic" },
            { id: "eid2575", tween: [ "style", "${_robot_sor}", "top", '347px', { fromValue: '367px'}], position: 36500, duration: 819, easing: "easeInOutCubic" },
            { id: "eid2576", tween: [ "style", "${_robot_sor}", "top", '368px', { fromValue: '347px'}], position: 37319, duration: 847, easing: "easeInOutCubic" },
            { id: "eid2577", tween: [ "style", "${_robot_sor}", "top", '347px', { fromValue: '368px'}], position: 38166, duration: 924, easing: "easeInOutCubic" },
            { id: "eid2578", tween: [ "style", "${_robot_sor}", "top", '367px', { fromValue: '347px'}], position: 39090, duration: 910, easing: "easeInOutCubic" },
            { id: "eid2579", tween: [ "style", "${_robot_sor}", "top", '356px', { fromValue: '367px'}], position: 40000, duration: 1000, easing: "easeInOutCubic" },
            { id: "eid1992", tween: [ "style", "${_tria_eje_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1993", tween: [ "style", "${_tria_eje_2}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid2250", tween: [ "style", "${_tria_eje_2}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
            { id: "eid1620", tween: [ "transform", "${_robot}", "scaleY", '1.1455', { fromValue: '0.08519'}], position: 1500, duration: 610 },
            { id: "eid1628", tween: [ "transform", "${_robot}", "scaleY", '1.00143', { fromValue: '1.1455'}], position: 2110, duration: 140 },
            { id: "eid2253", tween: [ "style", "${_especificacion2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2251", tween: [ "style", "${_especificacion2}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
            { id: "eid2039", tween: [ "style", "${_robot_sor}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2038", tween: [ "style", "${_robot_sor}", "display", 'block', { fromValue: 'none'}], position: 12356, duration: 0 },
            { id: "eid1619", tween: [ "transform", "${_robot}", "scaleX", '1.1455', { fromValue: '0.08519'}], position: 1500, duration: 610 },
            { id: "eid1627", tween: [ "transform", "${_robot}", "scaleX", '1.00143', { fromValue: '1.1455'}], position: 2110, duration: 140 },
            { id: "eid1600", tween: [ "style", "${_robot}", "height", '371px', { fromValue: '371px'}], position: 1500, duration: 0 },
            { id: "eid1618", tween: [ "style", "${_robot}", "height", '371px', { fromValue: '371px'}], position: 2110, duration: 0 },
            { id: "eid1629", tween: [ "style", "${_robot}", "left", '44.6px', { fromValue: '43.57px'}], position: 2110, duration: 140 },
            { id: "eid1572", tween: [ "style", "${_pizarron}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1630", tween: [ "style", "${_robot}", "top", '306.92px', { fromValue: '340.67px'}], position: 2110, duration: 140 },
            { id: "eid2436", tween: [ "style", "${_robot}", "top", '379.92px', { fromValue: '306.92px'}], position: 2250, duration: 750, easing: "easeInOutCubic" },
            { id: "eid2437", tween: [ "style", "${_robot}", "top", '339.92px', { fromValue: '379.92px'}], position: 3000, duration: 874, easing: "easeInOutCubic" },
            { id: "eid2438", tween: [ "style", "${_robot}", "top", '373.92px', { fromValue: '339.92px'}], position: 3874, duration: 707, easing: "easeInOutCubic" },
            { id: "eid2439", tween: [ "style", "${_robot}", "top", '343.92px', { fromValue: '373.92px'}], position: 4581, duration: 669, easing: "easeInOutCubic" },
            { id: "eid2440", tween: [ "style", "${_robot}", "top", '370.92px', { fromValue: '343.92px'}], position: 5250, duration: 750, easing: "easeInOutCubic" },
            { id: "eid2505", tween: [ "style", "${_robot}", "top", '342.92px', { fromValue: '370.92px'}], position: 6000, duration: 750, easing: "easeInOutCubic" },
            { id: "eid2506", tween: [ "style", "${_robot}", "top", '369.92px', { fromValue: '342.92px'}], position: 6750, duration: 885, easing: "easeInOutCubic" },
            { id: "eid2507", tween: [ "style", "${_robot}", "top", '343.92px', { fromValue: '369.92px'}], position: 7635, duration: 733, easing: "easeInOutCubic" },
            { id: "eid2508", tween: [ "style", "${_robot}", "top", '369.92px', { fromValue: '343.92px'}], position: 8368, duration: 742, easing: "easeInOutCubic" },
            { id: "eid2509", tween: [ "style", "${_robot}", "top", '344.92px', { fromValue: '369.92px'}], position: 9110, duration: 776, easing: "easeInOutCubic" },
            { id: "eid2510", tween: [ "style", "${_robot}", "top", '365.92px', { fromValue: '344.92px'}], position: 9886, duration: 681, easing: "easeInOutCubic" },
            { id: "eid2535", tween: [ "style", "${_robot}", "top", '342.92px', { fromValue: '365.92px'}], position: 10567, duration: 815, easing: "easeInOutCubic" },
            { id: "eid2536", tween: [ "style", "${_robot}", "top", '368.92px', { fromValue: '342.92px'}], position: 11382, duration: 618, easing: "easeInOutCubic" },
            { id: "eid2537", tween: [ "style", "${_robot}", "top", '355.92px', { fromValue: '368.92px'}], position: 12000, duration: 250, easing: "easeInOutCubic" },
            { id: "eid1599", tween: [ "style", "${_robot}", "width", '291.58511913733px', { fromValue: '291.58511913733px'}], position: 1500, duration: 0 },
            { id: "eid1617", tween: [ "style", "${_robot}", "width", '291.58511913733px', { fromValue: '291.58511913733px'}], position: 2110, duration: 0 },
            { id: "eid1613", tween: [ "style", "${_robot}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1614", tween: [ "style", "${_robot}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid2037", tween: [ "style", "${_robot}", "display", 'none', { fromValue: 'block'}], position: 12356, duration: 0 },
            { id: "eid2279", tween: [ "style", "${_triangulo_cuadra}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2278", tween: [ "style", "${_triangulo_cuadra}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
            { id: "eid1578", tween: [ "style", "${_pizarron}", "left", '-30px', { fromValue: '860px'}], position: 0, duration: 1500 },
            { id: "eid1580", tween: [ "style", "${_pizarron}", "left", '0px', { fromValue: '-30px'}], position: 1500, duration: 250 },
            { id: "eid2003", tween: [ "style", "${_tria_eje_2}", "opacity", '1', { fromValue: '0.07547199726104736'}], position: 5000, duration: 500 },
            { id: "eid2252", tween: [ "style", "${_especificacion}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
            { id: "eid1984", tween: [ "style", "${_especificacion}", "left", '80.75px', { fromValue: '-639.25px'}], position: 2000, duration: 500 },
            { id: "eid1979", tween: [ "style", "${_especificacion}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid1985", tween: [ "style", "${_especificacion}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 }         ]
      }
   }
},
"robot": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'body_rb',
      type: 'image',
      rect: ['8px','93px','200px','172px','auto','auto'],
      fill: ['rgba(0,0,0,0)','../img/body_rb.png','0px','0px']
   },
   {
      id: 'brazo_derrb',
      type: 'image',
      rect: ['0px','107px','43px','120px','auto','auto'],
      fill: ['rgba(0,0,0,0)','../img/brazo_derrb.png','0px','0px']
   },
   {
      id: 'brazo_izqrb',
      type: 'image',
      rect: ['159px','106px','43px','118px','auto','auto'],
      fill: ['rgba(0,0,0,0)','../img/brazo_izqrb.png','0px','0px']
   },
   {
      rect: ['13','0','58','45','auto','auto'],
      id: 'grupo_cabz',
      type: 'group',
      transform: [{1:0,0:0},['0deg']],
      c: [
      {
         id: 'cab_rob',
         type: 'image',
         rect: ['18px','0px','144px','110px','auto','auto'],
         fill: ['rgba(0,0,0,0)','../img/cab_rob.png','0px','0px']
      },
      {
         id: 'rostro',
         type: 'rect',
         rect: ['46px','43px','auto','auto','auto','auto']
      }]
   }],
   symbolInstances: [
   {
      id: 'rostro',
      symbolName: 'rostro'
   }   ]
   },
   states: {
      "Base State": {
         "${_body_rb}": [
            ["style", "top", '92.65px'],
            ["style", "left", '8px']
         ],
         "${_cab_rob}": [
            ["style", "left", '18.45px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '371px'],
            ["style", "width", '291.58511913733px']
         ],
         "${_rostro}": [
            ["style", "top", '40.49px'],
            ["style", "left", '46.45px']
         ],
         "${_grupo_cabz}": [
            ["style", "-webkit-transform-origin", [160.14,147.44], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [160.14,147.44],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [160.14,147.44],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [160.14,147.44],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [160.14,147.44],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '13px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_brazo_izqrb}": [
            ["style", "-webkit-transform-origin", [32.21,12.66], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [32.21,12.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [32.21,12.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [32.21,12.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [32.21,12.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '106.07px'],
            ["style", "left", '159.15px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_brazo_derrb}": [
            ["style", "top", '106.65px'],
            ["style", "left", '0px'],
            ["style", "-webkit-transform-origin", [67.33,20.08], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [67.33,20.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [67.33,20.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [67.33,20.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [67.33,20.08],{valueTemplate:'@@0@@% @@1@@%'}]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6000,
         autoPlay: false,
         timeline: [
            { id: "eid394", tween: [ "style", "${_brazo_izqrb}", "-webkit-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2628", tween: [ "style", "${_brazo_izqrb}", "-moz-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2629", tween: [ "style", "${_brazo_izqrb}", "-ms-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2630", tween: [ "style", "${_brazo_izqrb}", "msTransformOrigin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2631", tween: [ "style", "${_brazo_izqrb}", "-o-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid395", tween: [ "style", "${_brazo_izqrb}", "left", '159.15px', { fromValue: '159.15px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid1818", tween: [ "style", "${_grupo_cabz}", "top", '-7.1px', { fromValue: '0px'}], position: 4064, duration: 272 },
            { id: "eid1821", tween: [ "style", "${_grupo_cabz}", "top", '-15.61px', { fromValue: '-7.1px'}], position: 4336, duration: 248 },
            { id: "eid1826", tween: [ "style", "${_grupo_cabz}", "top", '-21.29px', { fromValue: '-15.61px'}], position: 4584, duration: 236 },
            { id: "eid1829", tween: [ "style", "${_grupo_cabz}", "top", '-14.12px', { fromValue: '-21.29px'}], position: 4820, duration: 180 },
            { id: "eid1830", tween: [ "style", "${_grupo_cabz}", "top", '-114.1px', { fromValue: '-14.12px'}], position: 5000, duration: 250 },
            { id: "eid1836", tween: [ "style", "${_grupo_cabz}", "top", '14.57px', { fromValue: '-114.1px'}], position: 5250, duration: 500 },
            { id: "eid1837", tween: [ "style", "${_grupo_cabz}", "top", '0.28px', { fromValue: '14.57px'}], position: 5750, duration: 250 },
            { id: "eid396", tween: [ "style", "${_brazo_izqrb}", "top", '106.07px', { fromValue: '106.07px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid1813", tween: [ "style", "${_brazo_izqrb}", "top", '120.25px', { fromValue: '106.07px'}], position: 4584, duration: 416 },
            { id: "eid1840", tween: [ "style", "${_brazo_izqrb}", "top", '108.79px', { fromValue: '120.25px'}], position: 5000, duration: 250 },
            { id: "eid1819", tween: [ "style", "${_grupo_cabz}", "left", '18.68px', { fromValue: '13px'}], position: 4064, duration: 272 },
            { id: "eid1820", tween: [ "style", "${_grupo_cabz}", "left", '35.79px', { fromValue: '18.68px'}], position: 4336, duration: 248 },
            { id: "eid1825", tween: [ "style", "${_grupo_cabz}", "left", '105.56px', { fromValue: '35.79px'}], position: 4584, duration: 236 },
            { id: "eid1828", tween: [ "style", "${_grupo_cabz}", "left", '119.73px', { fromValue: '105.56px'}], position: 4820, duration: 180 },
            { id: "eid1833", tween: [ "style", "${_grupo_cabz}", "left", '76.83px', { fromValue: '119.73px'}], position: 5000, duration: 500 },
            { id: "eid1835", tween: [ "style", "${_grupo_cabz}", "left", '19.63px', { fromValue: '76.83px'}], position: 5500, duration: 250 },
            { id: "eid1838", tween: [ "style", "${_grupo_cabz}", "left", '15.29px', { fromValue: '19.63px'}], position: 5750, duration: 250 },
            { id: "eid1812", tween: [ "transform", "${_brazo_izqrb}", "rotateZ", '-86deg', { fromValue: '0deg'}], position: 4584, duration: 416 },
            { id: "eid1839", tween: [ "transform", "${_brazo_izqrb}", "rotateZ", '-1deg', { fromValue: '-86deg'}], position: 5000, duration: 250 },
            { id: "eid1805", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '-9deg', { fromValue: '0deg'}], position: 0, duration: 750 },
            { id: "eid1806", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '8deg', { fromValue: '-9deg'}], position: 750, duration: 500 },
            { id: "eid1817", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '32deg', { fromValue: '8deg'}], position: 4064, duration: 272 },
            { id: "eid1822", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '53deg', { fromValue: '32deg'}], position: 4336, duration: 248 },
            { id: "eid1824", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '108deg', { fromValue: '53deg'}], position: 4584, duration: 236 },
            { id: "eid1827", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '130deg', { fromValue: '108deg'}], position: 4820, duration: 180 },
            { id: "eid1831", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '281deg', { fromValue: '130deg'}], position: 5000, duration: 250 },
            { id: "eid1832", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '322deg', { fromValue: '281deg'}], position: 5250, duration: 250 },
            { id: "eid1834", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '360deg', { fromValue: '322deg'}], position: 5500, duration: 250 },
            { id: "eid420", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rostro}', [] ], ""], position: 0 }         ]
      }
   }
},
"rostro": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'boca_rb',
      type: 'image',
      rect: ['23px','45px','42px','18px','auto','auto'],
      fill: ['rgba(0,0,0,0)','../img/boca_rb.png','0px','0px']
   },
   {
      id: 'ojo_rb',
      type: 'image',
      rect: ['0px','0px','27px','35px','auto','auto'],
      fill: ['rgba(0,0,0,0)','../img/ojo_rb.png','0px','0px']
   },
   {
      id: 'ojo_rbCopy',
      type: 'image',
      rect: ['60px','0px','27px','35px','auto','auto'],
      fill: ['rgba(0,0,0,0)','../img/ojo_rb.png','0px','0px']
   },
   {
      rect: ['0','0','86','35','auto','auto'],
      id: 'Group',
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['0px','0px','27px','35px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'ojo_cerrado',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(230,231,232,1.00)']
      },
      {
         rect: ['59px','0px','27px','35px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'ojo_cerradoCopy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(230,231,232,1.00)']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_ojo_rbCopy}": [
            ["style", "top", '0.01px'],
            ["style", "left", '60px']
         ],
         "${_ojo_rb}": [
            ["style", "top", '0.01px'],
            ["style", "left", '0px']
         ],
         "${_ojo_cerrado}": [
            ["color", "background-color", 'rgba(230,231,232,1.00)']
         ],
         "${_Group}": [
            ["style", "display", 'none']
         ],
         "${_ojo_cerradoCopy}": [
            ["style", "left", '59px'],
            ["color", "background-color", 'rgba(230,231,232,1.00)']
         ],
         "${_boca_rb}": [
            ["style", "top", '44.05px'],
            ["transform", "rotateZ", '-360deg'],
            ["style", "height", '13.546569824219px'],
            ["style", "left", '22.85px'],
            ["style", "width", '42px']
         ],
         "${symbolSelector}": [
            ["style", "height", '62.616668701172px'],
            ["style", "width", '87px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4937.1456385598,
         autoPlay: false,
         timeline: [
            { id: "eid334", tween: [ "style", "${_boca_rb}", "height", '13.546569824219px', { fromValue: '13.546569824219px'}], position: 155, duration: 0, easing: "easeOutBack" },
            { id: "eid337", tween: [ "style", "${_boca_rb}", "height", '18.950013442561px', { fromValue: '13.546569824219px'}], position: 286, duration: 0 },
            { id: "eid342", tween: [ "style", "${_boca_rb}", "height", '21.379138946533px', { fromValue: '18.950013442561px'}], position: 416, duration: 0 },
            { id: "eid346", tween: [ "style", "${_boca_rb}", "height", '11.245206832886px', { fromValue: '21.379138946533px'}], position: 601, duration: 0 },
            { id: "eid350", tween: [ "style", "${_boca_rb}", "height", '16.901363372803px', { fromValue: '11.245206832886px'}], position: 827, duration: 0 },
            { id: "eid354", tween: [ "style", "${_boca_rb}", "height", '8.3916931152344px', { fromValue: '16.901363372803px'}], position: 1028, duration: 0 },
            { id: "eid357", tween: [ "style", "${_boca_rb}", "height", '17.083326084894px', { fromValue: '8.3916931152344px'}], position: 1145, duration: 0 },
            { id: "eid362", tween: [ "style", "${_boca_rb}", "height", '13.422246932983px', { fromValue: '17.083326084894px'}], position: 1391, duration: 0 },
            { id: "eid366", tween: [ "style", "${_boca_rb}", "height", '20.600013640245px', { fromValue: '13.422246932983px'}], position: 1604, duration: 0 },
            { id: "eid370", tween: [ "style", "${_boca_rb}", "height", '11.667317390442px', { fromValue: '20.600013640245px'}], position: 1776, duration: 0 },
            { id: "eid373", tween: [ "style", "${_boca_rb}", "height", '18.250011861083px', { fromValue: '11.667317390442px'}], position: 2051, duration: 0 },
            { id: "eid377", tween: [ "style", "${_boca_rb}", "height", '12.986846923828px', { fromValue: '18.250011861083px'}], position: 2290, duration: 0 },
            { id: "eid381", tween: [ "style", "${_boca_rb}", "height", '18.866664623925px', { fromValue: '12.986846923828px'}], position: 2541, duration: 0 },
            { id: "eid383", tween: [ "style", "${_boca_rb}", "height", '15.802748680115px', { fromValue: '18.866664623925px'}], position: 2750, duration: 0 },
            { id: "eid250", tween: [ "style", "${_boca_rb}", "height", '13.766666412354px', { fromValue: '15.802748680115px'}], position: 3000, duration: 0 },
            { id: "eid313", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid316", tween: [ "style", "${_Group}", "display", 'block', { fromValue: 'none'}], position: 601, duration: 0, easing: "easeOutBack" },
            { id: "eid317", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'block'}], position: 679, duration: 0, easing: "easeOutBack" },
            { id: "eid320", tween: [ "style", "${_Group}", "display", 'block', { fromValue: 'none'}], position: 1391, duration: 0, easing: "easeOutBack" },
            { id: "eid321", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0, easing: "easeOutBack" },
            { id: "eid322", tween: [ "style", "${_Group}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0, easing: "easeOutBack" },
            { id: "eid323", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'block'}], position: 2358, duration: 0, easing: "easeOutBack" },
            { id: "eid876", tween: [ "transform", "${_boca_rb}", "rotateZ", '-360deg', { fromValue: '-360deg'}], position: 0, duration: 0 },
            { id: "eid256", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 0, duration: 0, easing: "easeInOutBack" },
            { id: "eid332", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 155, duration: 0, easing: "easeOutBack" },
            { id: "eid335", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 416, duration: 0, easing: "easeOutBack" },
            { id: "eid340", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 601, duration: 0, easing: "easeOutBack" },
            { id: "eid344", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 827, duration: 0, easing: "easeOutBack" },
            { id: "eid348", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 1028, duration: 0, easing: "easeOutBack" },
            { id: "eid352", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 1145, duration: 0, easing: "easeOutBack" },
            { id: "eid355", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 1391, duration: 0, easing: "easeOutBack" },
            { id: "eid360", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 1604, duration: 0, easing: "easeOutBack" },
            { id: "eid364", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 1776, duration: 0, easing: "easeOutBack" },
            { id: "eid368", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 2051, duration: 0, easing: "easeOutBack" },
            { id: "eid371", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 2290, duration: 0, easing: "easeOutBack" },
            { id: "eid375", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 2541, duration: 0, easing: "easeOutBack" },
            { id: "eid379", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 2750, duration: 0, easing: "easeOutBack" },
            { id: "eid330", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 3000, duration: 0, easing: "easeOutBack" },
            { id: "eid325", tween: [ "style", "${_boca_rb}", "top", '44.05px', { fromValue: '44.05px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid338", tween: [ "style", "${_boca_rb}", "top", '44.05px', { fromValue: '44.05px'}], position: 155, duration: 0 },
            { id: "eid339", tween: [ "style", "${_boca_rb}", "top", '41.63px', { fromValue: '44.05px'}], position: 416, duration: 0 },
            { id: "eid343", tween: [ "style", "${_boca_rb}", "top", '51.5px', { fromValue: '41.63px'}], position: 601, duration: 0 },
            { id: "eid347", tween: [ "style", "${_boca_rb}", "top", '44.92px', { fromValue: '51.5px'}], position: 827, duration: 0 },
            { id: "eid351", tween: [ "style", "${_boca_rb}", "top", '51.43px', { fromValue: '44.92px'}], position: 1028, duration: 0 },
            { id: "eid359", tween: [ "style", "${_boca_rb}", "top", '43.6px', { fromValue: '51.43px'}], position: 1145, duration: 0 },
            { id: "eid358", tween: [ "style", "${_boca_rb}", "top", '46.52px', { fromValue: '43.6px'}], position: 1391, duration: 0 },
            { id: "eid252", tween: [ "style", "${_boca_rb}", "top", '42.4px', { fromValue: '46.52px'}], position: 1604, duration: 0 },
            { id: "eid367", tween: [ "style", "${_boca_rb}", "top", '47.03px', { fromValue: '42.4px'}], position: 1776, duration: 0 },
            { id: "eid378", tween: [ "style", "${_boca_rb}", "top", '44.37px', { fromValue: '47.03px'}], position: 2051, duration: 0 },
            { id: "eid374", tween: [ "style", "${_boca_rb}", "top", '49.17px', { fromValue: '44.37px'}], position: 2290, duration: 0 },
            { id: "eid384", tween: [ "style", "${_boca_rb}", "top", '44.87px', { fromValue: '49.17px'}], position: 2415, duration: 0 },
            { id: "eid385", tween: [ "style", "${_boca_rb}", "top", '43.85px', { fromValue: '44.87px'}], position: 2541, duration: 0 },
            { id: "eid382", tween: [ "style", "${_boca_rb}", "top", '47.2px', { fromValue: '43.85px'}], position: 2750, duration: 0 },
            { id: "eid251", tween: [ "style", "${_boca_rb}", "top", '44.05px', { fromValue: '47.2px'}], position: 3000, duration: 0 }         ]
      }
   }
},
"robot_sor": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'body_rb',
      type: 'image',
      rect: ['8px','93px','200px','172px','auto','auto'],
      fill: ['rgba(0,0,0,0)','../img/body_rb.png','0px','0px']
   },
   {
      id: 'brazo_derrb',
      type: 'image',
      rect: ['0px','107px','43px','120px','auto','auto'],
      fill: ['rgba(0,0,0,0)','../img/brazo_derrb.png','0px','0px']
   },
   {
      id: 'brazo_izqrb',
      type: 'image',
      rect: ['159px','106px','43px','118px','auto','auto'],
      fill: ['rgba(0,0,0,0)','../img/brazo_izqrb.png','0px','0px']
   },
   {
      rect: ['13','0','58','45','auto','auto'],
      id: 'grupo_cabz',
      type: 'group',
      transform: [{},['0deg']],
      c: [
      {
         id: 'cab_rob',
         type: 'image',
         rect: ['18px','0px','144px','110px','auto','auto'],
         fill: ['rgba(0,0,0,0)','../img/cab_rob.png','0px','0px']
      },
      {
         id: 'rostro',
         type: 'rect',
         rect: ['46px','43px','auto','auto','auto','auto']
      }]
   }],
   symbolInstances: [
   {
      id: 'rostro',
      symbolName: 'rostro'
   }   ]
   },
   states: {
      "Base State": {
         "${_body_rb}": [
            ["style", "top", '92.65px'],
            ["style", "left", '8px']
         ],
         "${_cab_rob}": [
            ["style", "left", '18.45px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '371px'],
            ["style", "width", '291.58511913733px']
         ],
         "${_rostro}": [
            ["style", "top", '40.49px'],
            ["style", "left", '46.45px']
         ],
         "${_brazo_derrb}": [
            ["style", "top", '106.65px'],
            ["style", "left", '0px'],
            ["style", "-webkit-transform-origin", [67.33,20.08], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [67.33,20.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [67.33,20.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [67.33,20.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [67.33,20.08],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_brazo_izqrb}": [
            ["style", "top", '106.07px'],
            ["style", "-webkit-transform-origin", [32.21,12.66], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [32.21,12.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [32.21,12.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [32.21,12.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [32.21,12.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '159.15px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_grupo_cabz}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [160.14,147.44], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [160.14,147.44],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [160.14,147.44],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [160.14,147.44],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [160.14,147.44],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '13px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6000,
         autoPlay: false,
         timeline: [
            { id: "eid394", tween: [ "style", "${_brazo_izqrb}", "-webkit-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2632", tween: [ "style", "${_brazo_izqrb}", "-moz-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2633", tween: [ "style", "${_brazo_izqrb}", "-ms-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2634", tween: [ "style", "${_brazo_izqrb}", "msTransformOrigin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2635", tween: [ "style", "${_brazo_izqrb}", "-o-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid395", tween: [ "style", "${_brazo_izqrb}", "left", '159.15px', { fromValue: '159.15px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid1805", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '-9deg', { fromValue: '0deg'}], position: 0, duration: 750 },
            { id: "eid1806", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '8deg', { fromValue: '-9deg'}], position: 750, duration: 500 },
            { id: "eid1817", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '32deg', { fromValue: '8deg'}], position: 4064, duration: 272 },
            { id: "eid1822", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '53deg', { fromValue: '32deg'}], position: 4336, duration: 248 },
            { id: "eid1824", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '108deg', { fromValue: '53deg'}], position: 4584, duration: 236 },
            { id: "eid1827", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '130deg', { fromValue: '108deg'}], position: 4820, duration: 180 },
            { id: "eid1831", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '281deg', { fromValue: '130deg'}], position: 5000, duration: 250 },
            { id: "eid1832", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '322deg', { fromValue: '281deg'}], position: 5250, duration: 250 },
            { id: "eid1834", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '360deg', { fromValue: '322deg'}], position: 5500, duration: 250 },
            { id: "eid396", tween: [ "style", "${_brazo_izqrb}", "top", '106.07px', { fromValue: '106.07px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid1813", tween: [ "style", "${_brazo_izqrb}", "top", '120.25px', { fromValue: '106.07px'}], position: 4584, duration: 416 },
            { id: "eid1840", tween: [ "style", "${_brazo_izqrb}", "top", '108.79px', { fromValue: '120.25px'}], position: 5000, duration: 250 },
            { id: "eid1819", tween: [ "style", "${_grupo_cabz}", "left", '18.68px', { fromValue: '13px'}], position: 4064, duration: 272 },
            { id: "eid1820", tween: [ "style", "${_grupo_cabz}", "left", '35.79px', { fromValue: '18.68px'}], position: 4336, duration: 248 },
            { id: "eid1825", tween: [ "style", "${_grupo_cabz}", "left", '105.56px', { fromValue: '35.79px'}], position: 4584, duration: 236 },
            { id: "eid1828", tween: [ "style", "${_grupo_cabz}", "left", '119.73px', { fromValue: '105.56px'}], position: 4820, duration: 180 },
            { id: "eid1833", tween: [ "style", "${_grupo_cabz}", "left", '76.83px', { fromValue: '119.73px'}], position: 5000, duration: 500 },
            { id: "eid1835", tween: [ "style", "${_grupo_cabz}", "left", '19.63px', { fromValue: '76.83px'}], position: 5500, duration: 250 },
            { id: "eid1838", tween: [ "style", "${_grupo_cabz}", "left", '15.29px', { fromValue: '19.63px'}], position: 5750, duration: 250 },
            { id: "eid1812", tween: [ "transform", "${_brazo_izqrb}", "rotateZ", '-86deg', { fromValue: '0deg'}], position: 4584, duration: 416 },
            { id: "eid1839", tween: [ "transform", "${_brazo_izqrb}", "rotateZ", '-1deg', { fromValue: '-86deg'}], position: 5000, duration: 250 },
            { id: "eid1818", tween: [ "style", "${_grupo_cabz}", "top", '-7.1px', { fromValue: '0px'}], position: 4064, duration: 272 },
            { id: "eid1821", tween: [ "style", "${_grupo_cabz}", "top", '-15.61px', { fromValue: '-7.1px'}], position: 4336, duration: 248 },
            { id: "eid1826", tween: [ "style", "${_grupo_cabz}", "top", '-21.29px', { fromValue: '-15.61px'}], position: 4584, duration: 236 },
            { id: "eid1829", tween: [ "style", "${_grupo_cabz}", "top", '-14.12px', { fromValue: '-21.29px'}], position: 4820, duration: 180 },
            { id: "eid1830", tween: [ "style", "${_grupo_cabz}", "top", '-114.1px', { fromValue: '-14.12px'}], position: 5000, duration: 250 },
            { id: "eid1836", tween: [ "style", "${_grupo_cabz}", "top", '14.57px', { fromValue: '-114.1px'}], position: 5250, duration: 500 },
            { id: "eid1837", tween: [ "style", "${_grupo_cabz}", "top", '0.28px', { fromValue: '14.57px'}], position: 5750, duration: 250 },
            { id: "eid420", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rostro}', [] ], ""], position: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-6620539");
