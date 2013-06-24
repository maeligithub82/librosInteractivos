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
            id:'introduccion',
            type:'text',
            rect:['71px','-97px','761px','100px','auto','auto'],
            text:"5.-Compara las diferencias y semejanzas en el vocabulario que se usa en distintos países hispanohablantes.<br>",
            align:"left",
            font:['Fabada-regular',20,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'especificacion',
            type:'text',
            rect:['71px','290px','761px','47px','auto','auto'],
            text:"6.-Comentar la respuesta con base en la clave de respuestas<br>",
            align:"left",
            font:['Fabada-regular',20,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'especificacion2',
            type:'text',
            rect:['71px','371px','761px','47px','auto','auto'],
            opacity:1,
            text:"7.-Localicen y señalicen en el mapa los países en donde se habla el español. (Se sugiere colorear los países señalados)<br>",
            align:"left",
            font:['Fabada-regular',20,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'especificacion3',
            type:'text',
            rect:['71px','371px','761px','47px','auto','auto'],
            opacity:1,
            text:"5.-Compara las diferencias y semejanzas en el vocabulario que se usa en distintos países hispanohablantes.<br>",
            align:"left",
            font:['Fabada-regular',20,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'mas_principal',
            type:'rect',
            rect:['0px','0px','900px','696px','auto','auto'],
            opacity:0.54671303093808,
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'txt_play',
            type:'group',
            rect:['265px','239px','400','217','auto','auto'],
            c:[
            {
               id:'play2',
               type:'image',
               rect:['133px','0px','100px','100px','auto','auto'],
               opacity:0.66666666666667,
               fill:["rgba(0,0,0,0)","../img/play.png",'0px','0px']
            },
            {
               id:'iniciar',
               type:'text',
               rect:['0px','133px','400px','84px','auto','auto'],
               text:"Da clic para iniciar<br>",
               align:"center",
               font:['Fabada-regular',35,"rgba(255,255,255,1.00)","normal","none",""]
            }]
         },
         {
            id:'caminar',
            display:'none',
            type:'rect',
            rect:['453','315','auto','auto','auto','auto']
         },
         {
            id:'mono_desenfoque',
            type:'image',
            rect:['957px','322px','271px','452px','auto','auto'],
            fill:["rgba(0,0,0,0)","../img/mono_desenfoque.png",'0px','0px'],
            transform:[[],['-90deg']]
         },
         {
            id:'mono_desenfoque2',
            type:'image',
            rect:['953px','321px','271px','452px','auto','auto'],
            opacity:1,
            fill:["rgba(0,0,0,0)","../img/mono_desenfoque2.png",'0px','0px'],
            transform:[[],['-90deg']]
         },
         {
            id:'robot',
            display:'none',
            type:'rect',
            rect:['13','168','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'caminar',
            symbolName:'caminar'
         },
         {
            id:'robot',
            symbolName:'robot'
         }
         ]
      },
   states: {
      "Base State": {
         "${_iniciar}": [
            ["style", "top", '133px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", 'Fabada-regular'],
            ["style", "left", '0.02px'],
            ["style", "font-size", '35px']
         ],
         "${_especificacion2}": [
            ["style", "line-height", '27px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '71px'],
            ["style", "font-size", '20px'],
            ["style", "top", '-56px'],
            ["style", "text-align", 'left'],
            ["subproperty", "textShadow.blur", '3px'],
            ["style", "display", 'block'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "opacity", '0'],
            ["style", "height", '46.649993896484px']
         ],
         "${_txt_play}": [
            ["style", "left", '265px'],
            ["style", "top", '239px']
         ],
         "${_mono_desenfoque}": [
            ["style", "top", '322px'],
            ["style", "display", 'block'],
            ["style", "left", '997.07px'],
            ["transform", "rotateZ", '-90deg']
         ],
         "${_especificacion}": [
            ["style", "line-height", '27px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '71px'],
            ["style", "font-size", '20px'],
            ["style", "top", '-40px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'block'],
            ["style", "height", '46.649993896484px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "opacity", '0'],
            ["subproperty", "textShadow.blur", '3px']
         ],
         "${_mono_desenfoque2}": [
            ["style", "top", '320.5px'],
            ["transform", "rotateZ", '-90deg'],
            ["style", "display", 'block'],
            ["style", "opacity", '0.40880503144654'],
            ["style", "left", '993.12px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '696px'],
            ["style", "width", '900px']
         ],
         "${_especificacion2Copy}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '71px'],
            ["style", "font-size", '20px'],
            ["style", "top", '330px'],
            ["style", "height", '46.649993896484px'],
            ["style", "display", 'block'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "opacity", '1'],
            ["style", "line-height", 'normal']
         ],
         "${_especificacion3}": [
            ["style", "line-height", '27px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '71px'],
            ["style", "font-size", '20px'],
            ["style", "top", '69px'],
            ["style", "text-align", 'left'],
            ["style", "height", '131.07779312134px'],
            ["style", "display", 'block'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "opacity", '0'],
            ["subproperty", "textShadow.blur", '3px']
         ],
         "${_robot}": [
            ["style", "top", '-266.35px'],
            ["style", "left", '8.15px'],
            ["style", "display", 'none']
         ],
         "${_caminar}": [
            ["style", "display", 'none'],
            ["style", "top", '315px']
         ],
         "${_play2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0.66666666666667'],
            ["style", "left", '132.73px']
         ],
         "${_introduccion}": [
            ["style", "line-height", '27px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '71px'],
            ["style", "font-size", '20px'],
            ["style", "top", '-97px'],
            ["style", "text-align", 'left'],
            ["style", "height", '69.983245849609px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["subproperty", "textShadow.blur", '3px'],
            ["style", "opacity", '0']
         ],
         "${_mas_principal}": [
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "opacity", '0.5467130541801453'],
            ["style", "height", '696px'],
            ["style", "width", '900px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 27000,
         autoPlay: false,
         timeline: [
            { id: "eid136", tween: [ "style", "${_mono_desenfoque2}", "left", '633.12px', { fromValue: '993.12px'}], position: 0, duration: 500 },
            { id: "eid145", tween: [ "style", "${_caminar}", "top", '-345px', { fromValue: '315px'}], position: 750, duration: 2500 },
            { id: "eid2652", tween: [ "style", "${_especificacion2}", "opacity", '1', { fromValue: '0'}], position: 5140, duration: 1110 },
            { id: "eid2854", tween: [ "style", "${_especificacion2}", "opacity", '0', { fromValue: '1'}], position: 26250, duration: 750 },
            { id: "eid142", tween: [ "style", "${_mono_desenfoque}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid2646", tween: [ "style", "${_especificacion}", "opacity", '1', { fromValue: '0'}], position: 4407, duration: 933 },
            { id: "eid2849", tween: [ "style", "${_especificacion}", "opacity", '0', { fromValue: '1'}], position: 26250, duration: 750 },
            { id: "eid2632", tween: [ "style", "${_especificacion2}", "top", '-2.02px', { fromValue: '-56px'}], position: 5140, duration: 200 },
            { id: "eid2890", tween: [ "style", "${_especificacion2}", "top", '254px', { fromValue: '-2.02px'}], position: 5340, duration: 910 },
            { id: "eid2653", tween: [ "style", "${_especificacion2}", "top", '226px', { fromValue: '254px'}], position: 6250, duration: 181 },
            { id: "eid141", tween: [ "style", "${_mono_desenfoque2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid2887", tween: [ "style", "${_introduccion}", "height", '69.983245849609px', { fromValue: '69.983245849609px'}], position: 9188, duration: 0 },
            { id: "eid2647", tween: [ "style", "${_especificacion}", "top", '189px', { fromValue: '-40px'}], position: 4407, duration: 933 },
            { id: "eid2889", tween: [ "style", "${_especificacion}", "top", '175px', { fromValue: '189px'}], position: 5340, duration: 160 },
            { id: "eid2720", tween: [ "style", "${_robot}", "top", '403.62px', { fromValue: '-266.35px'}], position: 4750, duration: 5250, easing: "easeInOutElastic" },
            { id: "eid204", tween: [ "style", "${_robot}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid206", tween: [ "style", "${_robot}", "display", 'block', { fromValue: 'none'}], position: 4674, duration: 0 },
            { id: "eid137", tween: [ "style", "${_mono_desenfoque}", "left", '637.07px', { fromValue: '997.07px'}], position: 0, duration: 500 },
            { id: "eid1854", tween: [ "style", "${_introduccion}", "top", '125px', { fromValue: '-97px'}], position: 3750, duration: 924 },
            { id: "eid1865", tween: [ "style", "${_introduccion}", "top", '101px', { fromValue: '125px'}], position: 4674, duration: 76 },
            { id: "eid1874", tween: [ "style", "${_introduccion}", "opacity", '1', { fromValue: '0'}], position: 3750, duration: 1000 },
            { id: "eid2155", tween: [ "style", "${_introduccion}", "opacity", '0', { fromValue: '1'}], position: 26250, duration: 750 },
            { id: "eid138", tween: [ "style", "${_mono_desenfoque2}", "opacity", '0.40880503144654', { fromValue: '0.40880503144654'}], position: 500, duration: 0 },
            { id: "eid139", tween: [ "style", "${_caminar}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid140", tween: [ "style", "${_caminar}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid146", tween: [ "style", "${_caminar}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0 }         ]
      }
   }
},
"caminar": {
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
      transform: {},
      rect: ['68px','99px','379px','282px','auto','auto'],
      id: 'contenedor',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,0.00)'],
      c: [
      {
         rect: ['258px','-425px','2048px','2700px','auto','auto'],
         id: 'caminar2',
         transform: [{1:0,0:0},['-90deg']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','../img/caminar2.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_contenedor}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '281.74997243574px'],
            ["style", "top", '98.92px'],
            ["style", "left", '68.48px'],
            ["style", "width", '379.35000610352px']
         ],
         "${_caminar2}": [
            ["style", "top", '-424.92px'],
            ["style", "left", '257.52px'],
            ["transform", "rotateZ", '-90deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '2048px'],
            ["style", "width", '2700px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: false,
         labels: {
            "ciclo1": 588
         },
         timeline: [
            { id: "eid53", tween: [ "style", "${_caminar2}", "top", '-424.92px', { fromValue: '-424.92px'}], position: 0, duration: 0 },
            { id: "eid55", tween: [ "style", "${_caminar2}", "top", '-759.9px', { fromValue: '-424.92px'}], position: 83, duration: 0 },
            { id: "eid57", tween: [ "style", "${_caminar2}", "top", '-1100.9px', { fromValue: '-759.9px'}], position: 172, duration: 0 },
            { id: "eid59", tween: [ "style", "${_caminar2}", "top", '-1431.9px', { fromValue: '-1100.9px'}], position: 250, duration: 0 },
            { id: "eid121", tween: [ "style", "${_caminar2}", "top", '-1746.9px', { fromValue: '-1431.9px'}], position: 336, duration: 0 },
            { id: "eid65", tween: [ "style", "${_caminar2}", "top", '-2061.88px', { fromValue: '-1746.9px'}], position: 416, duration: 0 },
            { id: "eid69", tween: [ "style", "${_caminar2}", "top", '-421.82px', { fromValue: '-2061.88px'}], position: 500, duration: 0 },
            { id: "eid72", tween: [ "style", "${_caminar2}", "top", '-761.82px', { fromValue: '-421.82px'}], position: 588, duration: 0 },
            { id: "eid74", tween: [ "style", "${_caminar2}", "top", '-1092.82px', { fromValue: '-761.82px'}], position: 674, duration: 0 },
            { id: "eid76", tween: [ "style", "${_caminar2}", "top", '-1422.82px', { fromValue: '-1092.82px'}], position: 750, duration: 0 },
            { id: "eid78", tween: [ "style", "${_caminar2}", "top", '-1726.82px', { fromValue: '-1422.82px'}], position: 823, duration: 0 },
            { id: "eid82", tween: [ "style", "${_caminar2}", "top", '-2030.82px', { fromValue: '-1726.82px'}], position: 903, duration: 0 },
            { id: "eid85", tween: [ "style", "${_caminar2}", "top", '-428.82px', { fromValue: '-2030.82px'}], position: 1000, duration: 0 },
            { id: "eid87", tween: [ "style", "${_caminar2}", "top", '-726.82px', { fromValue: '-428.82px'}], position: 1077, duration: 0 },
            { id: "eid89", tween: [ "style", "${_caminar2}", "top", '-1044.82px', { fromValue: '-726.82px'}], position: 1163, duration: 0 },
            { id: "eid91", tween: [ "style", "${_caminar2}", "top", '-1356.82px', { fromValue: '-1044.82px'}], position: 1250, duration: 0 },
            { id: "eid93", tween: [ "style", "${_caminar2}", "top", '-1677.82px', { fromValue: '-1356.82px'}], position: 1336, duration: 0 },
            { id: "eid99", tween: [ "style", "${_caminar2}", "top", '-2007.82px', { fromValue: '-1677.82px'}], position: 1413, duration: 0 },
            { id: "eid104", tween: [ "style", "${_caminar2}", "top", '-412.82px', { fromValue: '-2007.82px'}], position: 1500, duration: 0 },
            { id: "eid106", tween: [ "style", "${_caminar2}", "top", '-752.82px', { fromValue: '-412.82px'}], position: 1578, duration: 0 },
            { id: "eid108", tween: [ "style", "${_caminar2}", "top", '-1072.82px', { fromValue: '-752.82px'}], position: 1664, duration: 0 },
            { id: "eid110", tween: [ "style", "${_caminar2}", "top", '-1399.82px', { fromValue: '-1072.82px'}], position: 1750, duration: 0 },
            { id: "eid112", tween: [ "style", "${_caminar2}", "top", '-1729.82px', { fromValue: '-1399.82px'}], position: 1839, duration: 0 },
            { id: "eid116", tween: [ "style", "${_caminar2}", "top", '-2049.82px', { fromValue: '-1729.82px'}], position: 1926, duration: 0 },
            { id: "eid120", tween: [ "style", "${_caminar2}", "top", '-430.82px', { fromValue: '-2049.82px'}], position: 2000, duration: 0 },
            { id: "eid66", tween: [ "style", "${_caminar2}", "left", '257.52px', { fromValue: '257.52px'}], position: 416, duration: 0 },
            { id: "eid70", tween: [ "style", "${_caminar2}", "left", '-278.42px', { fromValue: '257.52px'}], position: 500, duration: 0 },
            { id: "eid122", tween: [ "style", "${_caminar2}", "left", '-274.42px', { fromValue: '-278.42px'}], position: 588, duration: 0 },
            { id: "eid83", tween: [ "style", "${_caminar2}", "left", '-274.42px', { fromValue: '-274.42px'}], position: 903, duration: 0 },
            { id: "eid123", tween: [ "style", "${_caminar2}", "left", '-807.4px', { fromValue: '-274.42px'}], position: 1000, duration: 0 },
            { id: "eid100", tween: [ "style", "${_caminar2}", "left", '-807.4px', { fromValue: '-807.4px'}], position: 1413, duration: 0 },
            { id: "eid124", tween: [ "style", "${_caminar2}", "left", '-1314.4px', { fromValue: '-807.4px'}], position: 1500, duration: 0 },
            { id: "eid117", tween: [ "style", "${_caminar2}", "left", '-1314.4px', { fromValue: '-1314.4px'}], position: 1926, duration: 0 },
            { id: "eid125", tween: [ "style", "${_caminar2}", "left", '-1824.4px', { fromValue: '-1314.4px'}], position: 2000, duration: 0 }         ]
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
      id: 'grupo_cabz',
      type: 'group',
      rect: ['13','0','58','45','auto','auto'],
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
            ["transform", "rotateZ", '1deg']
         ],
         "${_brazo_derrb}": [
            ["style", "top", '106.65px'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2750,
         autoPlay: false,
         timeline: [
            { id: "eid394", tween: [ "style", "${_brazo_izqrb}", "-webkit-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2910", tween: [ "style", "${_brazo_izqrb}", "-moz-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2911", tween: [ "style", "${_brazo_izqrb}", "-ms-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2912", tween: [ "style", "${_brazo_izqrb}", "msTransformOrigin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2913", tween: [ "style", "${_brazo_izqrb}", "-o-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid395", tween: [ "style", "${_brazo_izqrb}", "left", '159.15px', { fromValue: '159.15px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid396", tween: [ "style", "${_brazo_izqrb}", "top", '106.07px', { fromValue: '106.07px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid369", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 2250, duration: 250 },
            { id: "eid372", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 2500, duration: 250 },
            { id: "eid896", tween: [ "transform", "${_brazo_izqrb}", "rotateZ", '-157deg', { fromValue: '1deg'}], position: 0, duration: 628 },
            { id: "eid897", tween: [ "transform", "${_brazo_izqrb}", "rotateZ", '-119deg', { fromValue: '-157deg'}], position: 628, duration: 197 },
            { id: "eid898", tween: [ "transform", "${_brazo_izqrb}", "rotateZ", '-154deg', { fromValue: '-119deg'}], position: 825, duration: 175 },
            { id: "eid900", tween: [ "transform", "${_brazo_izqrb}", "rotateZ", '-122deg', { fromValue: '-154deg'}], position: 1000, duration: 250 },
            { id: "eid902", tween: [ "transform", "${_brazo_izqrb}", "rotateZ", '-157deg', { fromValue: '-122deg'}], position: 1250, duration: 250 },
            { id: "eid904", tween: [ "transform", "${_brazo_izqrb}", "rotateZ", '-126deg', { fromValue: '-157deg'}], position: 1500, duration: 250 },
            { id: "eid349", tween: [ "transform", "${_brazo_izqrb}", "rotateZ", '0deg', { fromValue: '-126deg'}], position: 1750, duration: 250 },
            { id: "eid365", tween: [ "style", "${_grupo_cabz}", "-webkit-transform-origin", [160.14,147.44], { valueTemplate: '@@0@@% @@1@@%', fromValue: [160.14,147.44]}], position: 2500, duration: 0 },
            { id: "eid2914", tween: [ "style", "${_grupo_cabz}", "-moz-transform-origin", [160.14,147.44], { valueTemplate: '@@0@@% @@1@@%', fromValue: [160.14,147.44]}], position: 2500, duration: 0 },
            { id: "eid2915", tween: [ "style", "${_grupo_cabz}", "-ms-transform-origin", [160.14,147.44], { valueTemplate: '@@0@@% @@1@@%', fromValue: [160.14,147.44]}], position: 2500, duration: 0 },
            { id: "eid2916", tween: [ "style", "${_grupo_cabz}", "msTransformOrigin", [160.14,147.44], { valueTemplate: '@@0@@% @@1@@%', fromValue: [160.14,147.44]}], position: 2500, duration: 0 },
            { id: "eid2917", tween: [ "style", "${_grupo_cabz}", "-o-transform-origin", [160.14,147.44], { valueTemplate: '@@0@@% @@1@@%', fromValue: [160.14,147.44]}], position: 2500, duration: 0 },
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
         "${_Group}": [
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '62.616668701172px'],
            ["style", "width", '87px']
         ],
         "${_ojo_rb}": [
            ["style", "top", '0.01px'],
            ["style", "left", '0px']
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
         "${_ojo_cerrado}": [
            ["color", "background-color", 'rgba(230,231,232,1.00)']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: false,
         labels: {
            "ciclo1": 87
         },
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
            { id: "eid251", tween: [ "style", "${_boca_rb}", "top", '44.05px', { fromValue: '47.2px'}], position: 3000, duration: 0 },
            { id: "eid313", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid316", tween: [ "style", "${_Group}", "display", 'block', { fromValue: 'none'}], position: 601, duration: 0, easing: "easeOutBack" },
            { id: "eid317", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'block'}], position: 679, duration: 0, easing: "easeOutBack" },
            { id: "eid320", tween: [ "style", "${_Group}", "display", 'block', { fromValue: 'none'}], position: 1391, duration: 0, easing: "easeOutBack" },
            { id: "eid321", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0, easing: "easeOutBack" },
            { id: "eid322", tween: [ "style", "${_Group}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0, easing: "easeOutBack" },
            { id: "eid323", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'block'}], position: 2358, duration: 0, easing: "easeOutBack" },
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
            { id: "eid876", tween: [ "transform", "${_boca_rb}", "rotateZ", '-360deg', { fromValue: '-360deg'}], position: 0, duration: 0 }         ]
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
