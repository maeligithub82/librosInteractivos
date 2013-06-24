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
            rect:['-639px','61px','744px','140px','auto','auto'],
            text:"Ahora con la regla mide la hipotenusa del triángulo que trazamos al inicio de la actividad;<br><br>",
            align:"left",
            font:['Fabada',26,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3],
            transform:[]
         },
         {
            id:'nube2',
            display:'none',
            type:'image',
            rect:['130px','49px','742px','466px','auto','auto'],
            fill:["rgba(0,0,0,0)","../img/nube22.png",'0px','0px']
         },
         {
            id:'robot',
            display:'none',
            type:'rect',
            rect:['23px','271px','auto','auto','auto','auto']
         },
         {
            id:'tria_eje_2',
            display:'none',
            type:'image',
            rect:['298px','184px','420px','280px','auto','auto'],
            fill:["rgba(0,0,0,0)","../img/tria_eje_2.png",'0px','0px']
         },
         {
            id:'robot_sor',
            display:'none',
            type:'rect',
            rect:['44px','357px','auto','auto','auto','auto']
         },
         {
            id:'Ellipse',
            display:'none',
            type:'ellipse',
            rect:['250px','483px','10px','9px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Ellipse2',
            display:'none',
            type:'ellipse',
            rect:['270px','492px','23px','19px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(255,255,255,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Group',
            display:'none',
            type:'group',
            rect:['281','443','432','221','auto','auto'],
            c:[
            {
               id:'nube_chica',
               type:'image',
               rect:['17px','23px','370px','160px','auto','auto'],
               fill:["rgba(0,0,0,0)","../img/nube_chica.png",'0px','0px']
            },
            {
               id:'especificacionCopy',
               type:'text',
               rect:['45px','81px','387px','140px','auto','auto'],
               text:"¡Oh!  Es el mismo número<br><br><br>",
               align:"left",
               font:['Verdana, Geneva, sans-serif',24,"rgba(0,0,0,1.00)","normal","none",""],
               textShadow:["rgba(0,0,0,0.65)",3,3,3],
               transform:[]
            }]
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
         "${_tria_eje_2}": [
            ["style", "top", '183.57px'],
            ["style", "opacity", '0.075471698113208'],
            ["style", "left", '297.58px'],
            ["style", "display", 'none']
         ],
         "${_Ellipse2}": [
            ["style", "display", 'none']
         ],
         "${_nube_chica}": [
            ["style", "left", '17px'],
            ["style", "top", '23px']
         ],
         "${_pizarron}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '860px']
         ],
         "${_Group}": [
            ["style", "display", 'none']
         ],
         "${_especificacion}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '-639.25px'],
            ["style", "width", '744.35000610352px'],
            ["style", "top", '70.8px'],
            ["transform", "scaleX", '1'],
            ["style", "text-align", 'left'],
            ["style", "height", '140.23333740234px'],
            ["style", "display", 'block'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "font-size", '26px'],
            ["style", "line-height", '37px']
         ],
         "${_Ellipse}": [
            ["style", "top", '483.48px'],
            ["style", "display", 'none'],
            ["style", "height", '8.7835083007813px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '250.13px'],
            ["style", "width", '10.430416107178px']
         ],
         "${_robot}": [
            ["style", "top", '340.67px'],
            ["transform", "scaleY", '0.08519'],
            ["style", "height", '371px'],
            ["style", "display", 'none'],
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
            ["style", "width", '900px'],
            ["style", "height", '696px'],
            ["style", "overflow", 'hidden']
         ],
         "${_especificacionCopy}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["style", "line-height", '37px'],
            ["style", "font-size", '24px'],
            ["transform", "scaleX", '1'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '45px'],
            ["style", "width", '386.97277832031px'],
            ["style", "top", '80.65px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "text-align", 'left'],
            ["style", "display", 'block'],
            ["style", "height", '140.23333740234px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '1']
         ],
         "${_nube2}": [
            ["style", "top", '49.18px'],
            ["style", "opacity", '0'],
            ["style", "left", '129.51px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 46000,
         autoPlay: true,
         timeline: [
            { id: "eid1578", tween: [ "style", "${_pizarron}", "left", '-30px', { fromValue: '860px'}], position: 0, duration: 1500 },
            { id: "eid1580", tween: [ "style", "${_pizarron}", "left", '0px', { fromValue: '-30px'}], position: 1500, duration: 250 },
            { id: "eid1579", tween: [ "style", "${_pizarron}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1500 },
            { id: "eid2177", tween: [ "style", "${_nube2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2172", tween: [ "style", "${_nube2}", "display", 'block', { fromValue: 'none'}], position: 25174, duration: 0 },
            { id: "eid1992", tween: [ "style", "${_tria_eje_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1993", tween: [ "style", "${_tria_eje_2}", "display", 'block', { fromValue: 'none'}], position: 20500, duration: 0 },
            { id: "eid2152", tween: [ "style", "${_tria_eje_2}", "display", 'none', { fromValue: 'block'}], position: 25000, duration: 0 },
            { id: "eid1620", tween: [ "transform", "${_robot}", "scaleY", '1.1455', { fromValue: '0.08519'}], position: 1500, duration: 610 },
            { id: "eid1628", tween: [ "transform", "${_robot}", "scaleY", '1.00143', { fromValue: '1.1455'}], position: 2110, duration: 140 },
            { id: "eid2039", tween: [ "style", "${_robot_sor}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2038", tween: [ "style", "${_robot_sor}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
            { id: "eid1619", tween: [ "transform", "${_robot}", "scaleX", '1.1455', { fromValue: '0.08519'}], position: 1500, duration: 610 },
            { id: "eid1627", tween: [ "transform", "${_robot}", "scaleX", '1.00143', { fromValue: '1.1455'}], position: 2110, duration: 140 },
            { id: "eid2106", tween: [ "style", "${_Ellipse2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2105", tween: [ "style", "${_Ellipse2}", "display", 'block', { fromValue: 'none'}], position: 21431, duration: 0 },
            { id: "eid2154", tween: [ "style", "${_Ellipse2}", "display", 'none', { fromValue: 'block'}], position: 25000, duration: 0 },
            { id: "eid1600", tween: [ "style", "${_robot}", "height", '371px', { fromValue: '371px'}], position: 1500, duration: 0 },
            { id: "eid1618", tween: [ "style", "${_robot}", "height", '371px', { fromValue: '371px'}], position: 2110, duration: 0 },
            { id: "eid1629", tween: [ "style", "${_robot}", "left", '44.6px', { fromValue: '43.57px'}], position: 2110, duration: 140 },
            { id: "eid1572", tween: [ "style", "${_pizarron}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1630", tween: [ "style", "${_robot}", "top", '356.92px', { fromValue: '340.67px'}], position: 2110, duration: 140 },
            { id: "eid1613", tween: [ "style", "${_robot}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1614", tween: [ "style", "${_robot}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid2037", tween: [ "style", "${_robot}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
            { id: "eid1979", tween: [ "style", "${_especificacion}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid1985", tween: [ "style", "${_especificacion}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid2107", tween: [ "style", "${_Ellipse}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2104", tween: [ "style", "${_Ellipse}", "display", 'block', { fromValue: 'none'}], position: 21250, duration: 0 },
            { id: "eid2155", tween: [ "style", "${_Ellipse}", "display", 'none', { fromValue: 'block'}], position: 25000, duration: 0 },
            { id: "eid2176", tween: [ "style", "${_nube2}", "opacity", '1', { fromValue: '0'}], position: 25174, duration: 576 },
            { id: "eid1599", tween: [ "style", "${_robot}", "width", '291.58511913733px', { fromValue: '291.58511913733px'}], position: 1500, duration: 0 },
            { id: "eid1617", tween: [ "style", "${_robot}", "width", '291.58511913733px', { fromValue: '291.58511913733px'}], position: 2110, duration: 0 },
            { id: "eid2003", tween: [ "style", "${_tria_eje_2}", "opacity", '1', { fromValue: '0.07547199726104736'}], position: 20500, duration: 500 },
            { id: "eid2151", tween: [ "style", "${_especificacion}", "display", 'none', { fromValue: 'block'}], position: 25000, duration: 0 },
            { id: "eid1984", tween: [ "style", "${_especificacion}", "left", '80.75px', { fromValue: '-639.25px'}], position: 2000, duration: 500 },
            { id: "eid2141", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2140", tween: [ "style", "${_Group}", "display", 'block', { fromValue: 'none'}], position: 21500, duration: 0 },
            { id: "eid2153", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'block'}], position: 25000, duration: 0 }         ]
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
            ["style", "-webkit-transform-origin", [67.33,20.08], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [67.33,20.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [67.33,20.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [67.33,20.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [67.33,20.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
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
         duration: 11000,
         autoPlay: false,
         timeline: [
            { id: "eid394", tween: [ "style", "${_brazo_izqrb}", "-webkit-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2383", tween: [ "style", "${_brazo_izqrb}", "-moz-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2384", tween: [ "style", "${_brazo_izqrb}", "-ms-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2385", tween: [ "style", "${_brazo_izqrb}", "msTransformOrigin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2386", tween: [ "style", "${_brazo_izqrb}", "-o-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid395", tween: [ "style", "${_brazo_izqrb}", "left", '159.15px', { fromValue: '159.15px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid396", tween: [ "style", "${_brazo_izqrb}", "top", '106.07px', { fromValue: '106.07px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid1813", tween: [ "style", "${_brazo_izqrb}", "top", '120.25px', { fromValue: '106.07px'}], position: 4584, duration: 416 },
            { id: "eid1840", tween: [ "style", "${_brazo_izqrb}", "top", '108.79px', { fromValue: '120.25px'}], position: 5000, duration: 250 },
            { id: "eid2293", tween: [ "transform", "${_brazo_derrb}", "rotateZ", '182deg', { fromValue: '0deg'}], position: 9000, duration: 363 },
            { id: "eid2302", tween: [ "transform", "${_brazo_derrb}", "rotateZ", '188deg', { fromValue: '182deg'}], position: 9363, duration: 217 },
            { id: "eid2311", tween: [ "transform", "${_brazo_derrb}", "rotateZ", '189deg', { fromValue: '188deg'}], position: 9580, duration: 560 },
            { id: "eid2348", tween: [ "transform", "${_brazo_derrb}", "rotateZ", '0deg', { fromValue: '189deg'}], position: 10407, duration: 271 },
            { id: "eid1812", tween: [ "transform", "${_brazo_izqrb}", "rotateZ", '-86deg', { fromValue: '0deg'}], position: 4584, duration: 416 },
            { id: "eid1839", tween: [ "transform", "${_brazo_izqrb}", "rotateZ", '-1deg', { fromValue: '-86deg'}], position: 5000, duration: 250 },
            { id: "eid1819", tween: [ "style", "${_grupo_cabz}", "left", '18.68px', { fromValue: '13px'}], position: 4064, duration: 272 },
            { id: "eid1820", tween: [ "style", "${_grupo_cabz}", "left", '35.79px', { fromValue: '18.68px'}], position: 4336, duration: 248 },
            { id: "eid1825", tween: [ "style", "${_grupo_cabz}", "left", '105.56px', { fromValue: '35.79px'}], position: 4584, duration: 236 },
            { id: "eid1828", tween: [ "style", "${_grupo_cabz}", "left", '119.73px', { fromValue: '105.56px'}], position: 4820, duration: 180 },
            { id: "eid1833", tween: [ "style", "${_grupo_cabz}", "left", '76.83px', { fromValue: '119.73px'}], position: 5000, duration: 500 },
            { id: "eid1835", tween: [ "style", "${_grupo_cabz}", "left", '19.63px', { fromValue: '76.83px'}], position: 5500, duration: 250 },
            { id: "eid1838", tween: [ "style", "${_grupo_cabz}", "left", '15.29px', { fromValue: '19.63px'}], position: 5750, duration: 250 },
            { id: "eid2306", tween: [ "style", "${_grupo_cabz}", "left", '20.28px', { fromValue: '15.29px'}], position: 9363, duration: 217 },
            { id: "eid2308", tween: [ "style", "${_grupo_cabz}", "left", '13.27px', { fromValue: '20.28px'}], position: 9580, duration: 278 },
            { id: "eid2313", tween: [ "style", "${_grupo_cabz}", "left", '22.27px', { fromValue: '13.27px'}], position: 9857, duration: 282 },
            { id: "eid2343", tween: [ "style", "${_grupo_cabz}", "left", '13.27px', { fromValue: '22.27px'}], position: 10140, duration: 267 },
            { id: "eid1818", tween: [ "style", "${_grupo_cabz}", "top", '-7.1px', { fromValue: '0px'}], position: 4064, duration: 272 },
            { id: "eid1821", tween: [ "style", "${_grupo_cabz}", "top", '-15.61px', { fromValue: '-7.1px'}], position: 4336, duration: 248 },
            { id: "eid1826", tween: [ "style", "${_grupo_cabz}", "top", '-21.29px', { fromValue: '-15.61px'}], position: 4584, duration: 236 },
            { id: "eid1829", tween: [ "style", "${_grupo_cabz}", "top", '-14.12px', { fromValue: '-21.29px'}], position: 4820, duration: 180 },
            { id: "eid1830", tween: [ "style", "${_grupo_cabz}", "top", '-114.1px', { fromValue: '-14.12px'}], position: 5000, duration: 250 },
            { id: "eid1836", tween: [ "style", "${_grupo_cabz}", "top", '14.57px', { fromValue: '-114.1px'}], position: 5250, duration: 500 },
            { id: "eid1837", tween: [ "style", "${_grupo_cabz}", "top", '0.28px', { fromValue: '14.57px'}], position: 5750, duration: 250 },
            { id: "eid2314", tween: [ "style", "${_grupo_cabz}", "top", '-2.45px', { fromValue: '0.28px'}], position: 9363, duration: 217 },
            { id: "eid2323", tween: [ "style", "${_grupo_cabz}", "top", '1.27px', { fromValue: '-2.45px'}], position: 9580, duration: 560 },
            { id: "eid2344", tween: [ "style", "${_grupo_cabz}", "top", '3.27px', { fromValue: '1.27px'}], position: 10140, duration: 267 },
            { id: "eid2295", tween: [ "style", "${_brazo_derrb}", "top", '105.15px', { fromValue: '106.65px'}], position: 9000, duration: 363 },
            { id: "eid2303", tween: [ "style", "${_brazo_derrb}", "top", '92.15px', { fromValue: '105.15px'}], position: 9363, duration: 217 },
            { id: "eid2304", tween: [ "style", "${_brazo_derrb}", "top", '105.15px', { fromValue: '92.15px'}], position: 9580, duration: 278 },
            { id: "eid2309", tween: [ "style", "${_brazo_derrb}", "top", '87.15px', { fromValue: '105.15px'}], position: 9857, duration: 282 },
            { id: "eid2341", tween: [ "style", "${_brazo_derrb}", "top", '106.15px', { fromValue: '87.15px'}], position: 10140, duration: 267 },
            { id: "eid2350", tween: [ "style", "${_brazo_derrb}", "top", '107.15px', { fromValue: '106.15px'}], position: 10407, duration: 271 },
            { id: "eid2294", tween: [ "style", "${_brazo_derrb}", "left", '-15.32px', { fromValue: '0px'}], position: 9000, duration: 363 },
            { id: "eid2305", tween: [ "style", "${_brazo_derrb}", "left", '-14.75px', { fromValue: '-15.32px'}], position: 9363, duration: 217 },
            { id: "eid2324", tween: [ "style", "${_brazo_derrb}", "left", '-16.32px', { fromValue: '-14.75px'}], position: 9580, duration: 277 },
            { id: "eid2310", tween: [ "style", "${_brazo_derrb}", "left", '-13.32px', { fromValue: '-16.32px'}], position: 9857, duration: 282 },
            { id: "eid2349", tween: [ "style", "${_brazo_derrb}", "left", '5.65px', { fromValue: '-13.32px'}], position: 10407, duration: 271 },
            { id: "eid1805", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '-9deg', { fromValue: '0deg'}], position: 0, duration: 750 },
            { id: "eid1806", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '8deg', { fromValue: '-9deg'}], position: 750, duration: 500 },
            { id: "eid1817", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '32deg', { fromValue: '8deg'}], position: 4064, duration: 272 },
            { id: "eid1822", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '53deg', { fromValue: '32deg'}], position: 4336, duration: 248 },
            { id: "eid1824", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '108deg', { fromValue: '53deg'}], position: 4584, duration: 236 },
            { id: "eid1827", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '130deg', { fromValue: '108deg'}], position: 4820, duration: 180 },
            { id: "eid1831", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '281deg', { fromValue: '130deg'}], position: 5000, duration: 250 },
            { id: "eid1832", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '322deg', { fromValue: '281deg'}], position: 5250, duration: 250 },
            { id: "eid1834", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '360deg', { fromValue: '322deg'}], position: 5500, duration: 250 },
            { id: "eid2301", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '367deg', { fromValue: '360deg'}], position: 9363, duration: 217 },
            { id: "eid2307", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '360deg', { fromValue: '367deg'}], position: 9580, duration: 278 },
            { id: "eid2312", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '367deg', { fromValue: '360deg'}], position: 9857, duration: 282 },
            { id: "eid2342", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '360deg', { fromValue: '367deg'}], position: 10140, duration: 267 },
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
      type: 'group',
      display: 'none',
      id: 'Group',
      rect: ['0','0','86','35','auto','auto'],
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
         "${symbolSelector}": [
            ["style", "height", '62.616668701172px'],
            ["style", "width", '87px']
         ],
         "${_ojo_cerrado}": [
            ["color", "background-color", 'rgba(230,231,232,1.00)']
         ],
         "${_boca_rb}": [
            ["style", "top", '44.05px'],
            ["transform", "rotateZ", '-360deg'],
            ["style", "height", '13.546569824219px'],
            ["style", "left", '22.85px'],
            ["style", "width", '42px']
         ],
         "${_ojo_cerradoCopy}": [
            ["style", "left", '59px'],
            ["color", "background-color", 'rgba(230,231,232,1.00)']
         ],
         "${_ojo_rb}": [
            ["style", "top", '0.01px'],
            ["style", "left", '0px']
         ],
         "${_Group}": [
            ["style", "display", 'none']
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
      type: 'group',
      id: 'grupo_cabz',
      rect: ['13','0','58','45','auto','auto'],
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
            { id: "eid2387", tween: [ "style", "${_brazo_izqrb}", "-moz-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2388", tween: [ "style", "${_brazo_izqrb}", "-ms-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2389", tween: [ "style", "${_brazo_izqrb}", "msTransformOrigin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2390", tween: [ "style", "${_brazo_izqrb}", "-o-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
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
