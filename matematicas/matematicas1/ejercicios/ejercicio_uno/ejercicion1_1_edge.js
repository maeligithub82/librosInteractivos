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
            id:'Text',
            display:'none',
            type:'text',
            rect:['71px','67px','761px','57px','auto','auto'],
            text:"1._Observa el comportamiento de las siguientes figuras:",
            font:['Fabada-regular',24,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'Text2',
            display:'none',
            type:'text',
            rect:['71px','315px','721px','69px','auto','auto'],
            text:"De acuerdo a la secuencia de imágenes selecciona la imagen que corresponde a la figura 4 de las opciones que se muestran a continuación ",
            align:"left",
            font:['Fabada-regular',20,"rgba(255,255,255,1)","normal","none","normal"],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'formas2',
            display:'none',
            type:'image',
            rect:['100px','158px','700px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"formas2.png",'0px','0px']
         },
         {
            id:'f1',
            display:'none',
            type:'image',
            rect:['47px','405px','230px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"f1.png",'0px','0px']
         },
         {
            id:'f2',
            display:'none',
            type:'image',
            rect:['307px','405px','260px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"f2.png",'0px','0px']
         },
         {
            id:'f3',
            display:'none',
            type:'image',
            rect:['596px','405px','260px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"f3.png",'0px','0px']
         },
         {
            id:'globo',
            display:'none',
            type:'rect',
            rect:['340px','539px','284px','126px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            boxShadow:["",0,0,0,0,"rgba(0,0,0,0)"]
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
            id:'Group',
            display:'none',
            type:'group',
            rect:['377','398','337','140','auto','auto'],
            c:[
            {
               id:'Text5',
               type:'text',
               rect:['0px','0px','337px','105px','auto','auto'],
               text:"La respuesta es correcta, para continuar presiona ",
               align:"center",
               font:['Fabada-regular',26,"rgba(255,255,255,1)","normal","none","normal"]
            },
            {
               id:'atras',
               type:'text',
               rect:['75px','103px','196px','37px','auto','auto'],
               text:"Siguiente",
               align:"center",
               font:['Fabada-regular',30,"rgba(255,255,255,1)","normal","underline","italic"],
               textShadow:["rgba(0,0,0,0.65)",3,3,3]
            }]
         },
         {
            id:'acierto1',
            display:'none',
            type:'group',
            rect:['377','398','337','140','auto','auto'],
            c:[
            {
               id:'txt_acierto',
               type:'text',
               rect:['0px','0px','337px','105px','auto','auto'],
               text:"Tu respuesta fue incorrecta para volver a intentar presiona <br>",
               align:"center",
               font:['Fabada-regular',26,"rgba(0,140,222,1.00)","normal","none","normal"]
            },
            {
               id:'siguiente',
               type:'text',
               rect:['236px','103px','196px','37px','auto','auto'],
               text:"Atrás",
               align:"center",
               font:['Fabada-regular',30,"rgba(255,138,0,1.00)","normal","underline","italic"],
               textShadow:["rgba(0,0,0,0.53)",2,2,3]
            }]
         },
         {
            id:'robot',
            display:'none',
            type:'rect',
            rect:['13','168','auto','auto','auto','auto']
         },
         {
            id:'robot_error',
            display:'none',
            type:'rect',
            rect:['47','441','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'robot',
            symbolName:'robot'
         },
         {
            id:'robot_error',
            symbolName:'robot_error'
         },
         {
            id:'caminar',
            symbolName:'caminar'
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
         "${_f2}": [
            ["style", "top", '405px'],
            ["style", "left", '-553px'],
            ["style", "display", 'none']
         ],
         "${_txt_play}": [
            ["style", "left", '265px'],
            ["style", "top", '239px']
         ],
         "${_Text2}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["style", "opacity", '0'],
            ["style", "display", 'none'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "font-size", '20px']
         ],
         "${_globo}": [
            ["style", "top", '393.09px'],
            ["transform", "scaleY", '1.12801'],
            ["style", "height", '141.85675614417px'],
            ["style", "display", 'none'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '288px'],
            ["style", "width", '346.89581298828px']
         ],
         "${_txt_acierto}": [
            ["style", "top", '0px'],
            ["style", "font-size", '26px'],
            ["style", "text-align", 'center'],
            ["style", "height", '105px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Fabada-regular'],
            ["style", "left", '0.02px'],
            ["style", "width", '337.38333129883px']
         ],
         "${_play2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0.66666666666667'],
            ["style", "left", '132.73px']
         ],
         "${_robot}": [
            ["style", "top", '-266.35px'],
            ["style", "left", '8.15px'],
            ["style", "display", 'none']
         ],
         "${_atras}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(59,59,59,1.00)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '75.02px'],
            ["style", "font-size", '30px'],
            ["style", "top", '103px'],
            ["style", "font-style", 'italic'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "text-decoration", 'underline']
         ],
         "${_mas_principal}": [
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "opacity", '0.5467130541801453'],
            ["style", "height", '696px'],
            ["style", "width", '900px']
         ],
         "${_f3}": [
            ["style", "top", '405px'],
            ["style", "left", '-264px'],
            ["style", "display", 'none']
         ],
         "${_Text5}": [
            ["style", "top", '0px'],
            ["style", "width", '337.38333129883px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(17,170,212,1.00)'],
            ["style", "height", '105px'],
            ["style", "font-family", 'Fabada-regular'],
            ["style", "left", '0.02px'],
            ["style", "font-size", '26px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '696px'],
            ["style", "width", '900px']
         ],
         "${_caminar}": [
            ["style", "display", 'none'],
            ["style", "top", '315px']
         ],
         "${_robot_error}": [
            ["style", "display", 'none'],
            ["style", "top", '414px']
         ],
         "${_Group}": [
            ["style", "display", 'none'],
            ["style", "left", '287px']
         ],
         "${_formas2}": [
            ["style", "top", '158px'],
            ["style", "left", '890px'],
            ["style", "display", 'none']
         ],
         "${_Text}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_mono_desenfoque2}": [
            ["style", "top", '320.5px'],
            ["transform", "rotateZ", '-90deg'],
            ["style", "display", 'block'],
            ["style", "opacity", '0.40880503144654'],
            ["style", "left", '993.12px']
         ],
         "${_acierto1}": [
            ["style", "display", 'none'],
            ["style", "left", '297px']
         ],
         "${_mono_desenfoque}": [
            ["style", "top", '322px'],
            ["style", "display", 'block'],
            ["style", "left", '997.07px'],
            ["transform", "rotateZ", '-90deg']
         ],
         "${_f1}": [
            ["style", "top", '405px'],
            ["style", "left", '-813px'],
            ["style", "display", 'none']
         ],
         "${_siguiente}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '2px'],
            ["color", "color", 'rgba(46,46,46,1.00)'],
            ["subproperty", "textShadow.offsetV", '2px'],
            ["style", "left", '61.55px'],
            ["style", "font-size", '30px'],
            ["style", "top", '102.99px'],
            ["style", "font-style", 'italic'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.53)'],
            ["style", "text-decoration", 'underline'],
            ["style", "display", 'block']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: false,
         labels: {
            "ejercicio1": 4750,
            "acierto1": 5000,
            "error1": 10000
         },
         timeline: [
            { id: "eid13", tween: [ "style", "${_f1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid149", tween: [ "style", "${_f1}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid191", tween: [ "style", "${_acierto1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid190", tween: [ "style", "${_acierto1}", "display", 'block', { fromValue: 'none'}], position: 8250, duration: 0 },
            { id: "eid145", tween: [ "style", "${_caminar}", "top", '-345px', { fromValue: '315px'}], position: 750, duration: 2500 },
            { id: "eid138", tween: [ "style", "${_mono_desenfoque2}", "opacity", '0.40880503144654', { fromValue: '0.40880503144654'}], position: 500, duration: 0 },
            { id: "eid637", tween: [ "color", "${_Text5}", "color", 'rgba(17,170,212,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(17,170,212,1.00)'}], position: 5000, duration: 0 },
            { id: "eid6", tween: [ "color", "${_globo}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 8250, duration: 0 },
            { id: "eid7", tween: [ "color", "${_globo}", "background-color", 'rgba(78,165,208,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 10000, duration: 0 },
            { id: "eid693", tween: [ "style", "${_siguiente}", "left", '61.55px', { fromValue: '61.55px'}], position: 10000, duration: 0 },
            { id: "eid14", tween: [ "style", "${_f2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid148", tween: [ "style", "${_f2}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid792", tween: [ "style", "${_robot_error}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
            { id: "eid164", tween: [ "style", "${_formas2}", "left", '50px', { fromValue: '890px'}], position: 3500, duration: 1093 },
            { id: "eid165", tween: [ "style", "${_formas2}", "left", '110px', { fromValue: '50px'}], position: 4593, duration: 157 },
            { id: "eid186", tween: [ "style", "${_globo}", "width", '346.89581298828px', { fromValue: '346.89581298828px'}], position: 10000, duration: 0 },
            { id: "eid141", tween: [ "style", "${_mono_desenfoque2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid185", tween: [ "style", "${_globo}", "top", '393.09px', { fromValue: '393.09px'}], position: 10000, duration: 0 },
            { id: "eid1198", tween: [ "style", "${_robot_error}", "top", '414px', { fromValue: '414px'}], position: 10000, duration: 0 },
            { id: "eid10", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid152", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid171", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 750 },
            { id: "eid184", tween: [ "style", "${_globo}", "height", '141.85675614417px', { fromValue: '141.85675614417px'}], position: 10000, duration: 0 },
            { id: "eid694", tween: [ "color", "${_siguiente}", "color", 'rgba(46,46,46,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(46,46,46,1.00)'}], position: 10000, duration: 0 },
            { id: "eid639", tween: [ "color", "${_atras}", "color", 'rgba(59,59,59,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(59,59,59,1.00)'}], position: 5000, duration: 0 },
            { id: "eid142", tween: [ "style", "${_mono_desenfoque}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid691", tween: [ "style", "${_siguiente}", "display", 'block', { fromValue: 'block'}], position: 10000, duration: 0 },
            { id: "eid158", tween: [ "style", "${_f2}", "left", '357px', { fromValue: '-553px'}], position: 3500, duration: 1093 },
            { id: "eid161", tween: [ "style", "${_f2}", "left", '307px', { fromValue: '357px'}], position: 4593, duration: 157 },
            { id: "eid9", tween: [ "style", "${_formas2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid150", tween: [ "style", "${_formas2}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid172", tween: [ "transform", "${_globo}", "scaleY", '1.12801', { fromValue: '1.12801'}], position: 10000, duration: 0 },
            { id: "eid139", tween: [ "style", "${_caminar}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid140", tween: [ "style", "${_caminar}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid146", tween: [ "style", "${_caminar}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0 },
            { id: "eid635", tween: [ "style", "${_Group}", "left", '287px', { fromValue: '287px'}], position: 5000, duration: 0 },
            { id: "eid160", tween: [ "style", "${_f3}", "left", '646px', { fromValue: '-264px'}], position: 3500, duration: 1093 },
            { id: "eid163", tween: [ "style", "${_f3}", "left", '596px', { fromValue: '646px'}], position: 4593, duration: 157 },
            { id: "eid168", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 750 },
            { id: "eid159", tween: [ "style", "${_f1}", "left", '97px', { fromValue: '-813px'}], position: 3500, duration: 1093 },
            { id: "eid162", tween: [ "style", "${_f1}", "left", '47px', { fromValue: '97px'}], position: 4593, duration: 157 },
            { id: "eid209", tween: [ "style", "${_robot}", "top", '403.65px', { fromValue: '-266.35px'}], position: 5000, duration: 3000, easing: "easeInOutBack" },
            { id: "eid204", tween: [ "style", "${_robot}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid206", tween: [ "style", "${_robot}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid791", tween: [ "style", "${_robot}", "display", 'none', { fromValue: 'block'}], position: 8098, duration: 0 },
            { id: "eid136", tween: [ "style", "${_mono_desenfoque2}", "left", '633.12px', { fromValue: '993.12px'}], position: 0, duration: 500 },
            { id: "eid12", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid151", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid15", tween: [ "style", "${_f3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid147", tween: [ "style", "${_f3}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid1", tween: [ "style", "${_globo}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid632", tween: [ "style", "${_globo}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid2", tween: [ "style", "${_globo}", "display", 'block', { fromValue: 'block'}], position: 8250, duration: 0 },
            { id: "eid485", tween: [ "style", "${_acierto1}", "left", '297px', { fromValue: '297px'}], position: 8250, duration: 0 },
            { id: "eid137", tween: [ "style", "${_mono_desenfoque}", "left", '637.07px', { fromValue: '997.07px'}], position: 0, duration: 500 },
            { id: "eid690", tween: [ "color", "${_txt_acierto}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 10000, duration: 0 },
            { id: "eid189", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid631", tween: [ "style", "${_Group}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid188", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 }         ]
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
            { id: "eid1571", tween: [ "style", "${_brazo_izqrb}", "-moz-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid1572", tween: [ "style", "${_brazo_izqrb}", "-ms-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid1573", tween: [ "style", "${_brazo_izqrb}", "msTransformOrigin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid1574", tween: [ "style", "${_brazo_izqrb}", "-o-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
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
            { id: "eid1575", tween: [ "style", "${_grupo_cabz}", "-moz-transform-origin", [160.14,147.44], { valueTemplate: '@@0@@% @@1@@%', fromValue: [160.14,147.44]}], position: 2500, duration: 0 },
            { id: "eid1576", tween: [ "style", "${_grupo_cabz}", "-ms-transform-origin", [160.14,147.44], { valueTemplate: '@@0@@% @@1@@%', fromValue: [160.14,147.44]}], position: 2500, duration: 0 },
            { id: "eid1577", tween: [ "style", "${_grupo_cabz}", "msTransformOrigin", [160.14,147.44], { valueTemplate: '@@0@@% @@1@@%', fromValue: [160.14,147.44]}], position: 2500, duration: 0 },
            { id: "eid1578", tween: [ "style", "${_grupo_cabz}", "-o-transform-origin", [160.14,147.44], { valueTemplate: '@@0@@% @@1@@%', fromValue: [160.14,147.44]}], position: 2500, duration: 0 },
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
},
"robot_error": {
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
            ["style", "left", '8px'],
            ["transform", "rotateZ", '0deg']
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
            ["transform", "rotateZ", '1deg']
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
         duration: 1500,
         autoPlay: false,
         timeline: [
            { id: "eid394", tween: [ "style", "${_brazo_izqrb}", "-webkit-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid1579", tween: [ "style", "${_brazo_izqrb}", "-moz-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid1580", tween: [ "style", "${_brazo_izqrb}", "-ms-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid1581", tween: [ "style", "${_brazo_izqrb}", "msTransformOrigin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid1582", tween: [ "style", "${_brazo_izqrb}", "-o-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid843", tween: [ "style", "${_brazo_izqrb}", "left", '171.15px', { fromValue: '159.15px'}], position: 0, duration: 1000 },
            { id: "eid1060", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid1070", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '-98deg', { fromValue: '0deg'}], position: 500, duration: 390 },
            { id: "eid1071", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '-162deg', { fromValue: '-98deg'}], position: 890, duration: 479 },
            { id: "eid1073", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '-207deg', { fromValue: '-162deg'}], position: 1369, duration: 131 },
            { id: "eid1104", tween: [ "transform", "${_brazo_derrb}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid1109", tween: [ "transform", "${_brazo_derrb}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 401, duration: 489 },
            { id: "eid896", tween: [ "transform", "${_brazo_izqrb}", "rotateZ", '-105deg', { fromValue: '1deg'}], position: 0, duration: 628 },
            { id: "eid897", tween: [ "transform", "${_brazo_izqrb}", "rotateZ", '-119deg', { fromValue: '-105deg'}], position: 628, duration: 197 },
            { id: "eid898", tween: [ "transform", "${_brazo_izqrb}", "rotateZ", '-90deg', { fromValue: '-119deg'}], position: 825, duration: 175 },
            { id: "eid900", tween: [ "transform", "${_brazo_izqrb}", "rotateZ", '-94deg', { fromValue: '-90deg'}], position: 1000, duration: 171 },
            { id: "eid902", tween: [ "transform", "${_brazo_izqrb}", "rotateZ", '-90deg', { fromValue: '-94deg'}], position: 1171, duration: 198 },
            { id: "eid1037", tween: [ "style", "${_body_rb}", "top", '92.65px', { fromValue: '92.65px'}], position: 0, duration: 0 },
            { id: "eid1039", tween: [ "style", "${_body_rb}", "top", '89.65px', { fromValue: '86.72px'}], position: 628, duration: 262 },
            { id: "eid1041", tween: [ "style", "${_body_rb}", "top", '123.32px', { fromValue: '89.65px'}], position: 890, duration: 479 },
            { id: "eid1058", tween: [ "style", "${_grupo_cabz}", "left", '13px', { fromValue: '13px'}], position: 0, duration: 0 },
            { id: "eid1068", tween: [ "style", "${_grupo_cabz}", "left", '-10.03px', { fromValue: '13px'}], position: 500, duration: 390 },
            { id: "eid1074", tween: [ "style", "${_grupo_cabz}", "left", '-20.02px', { fromValue: '-10.03px'}], position: 890, duration: 479 },
            { id: "eid1076", tween: [ "style", "${_grupo_cabz}", "left", '-24.65px', { fromValue: '-20.02px'}], position: 1369, duration: 131 },
            { id: "eid1102", tween: [ "style", "${_brazo_derrb}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1110", tween: [ "style", "${_brazo_derrb}", "left", '36.05px', { fromValue: '0px'}], position: 401, duration: 489 },
            { id: "eid842", tween: [ "style", "${_brazo_izqrb}", "top", '244.02px', { fromValue: '106.07px'}], position: 0, duration: 1000 },
            { id: "eid1103", tween: [ "style", "${_brazo_derrb}", "top", '106.65px', { fromValue: '106.65px'}], position: 0, duration: 0 },
            { id: "eid1111", tween: [ "style", "${_brazo_derrb}", "top", '187.05px', { fromValue: '106.65px'}], position: 401, duration: 489 },
            { id: "eid1059", tween: [ "style", "${_grupo_cabz}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1069", tween: [ "style", "${_grupo_cabz}", "top", '63.14px', { fromValue: '0px'}], position: 500, duration: 390 },
            { id: "eid1072", tween: [ "style", "${_grupo_cabz}", "top", '138.12px', { fromValue: '63.14px'}], position: 890, duration: 479 },
            { id: "eid1077", tween: [ "style", "${_grupo_cabz}", "top", '135.97px', { fromValue: '138.12px'}], position: 1369, duration: 131 },
            { id: "eid1038", tween: [ "style", "${_body_rb}", "left", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid1040", tween: [ "style", "${_body_rb}", "left", '32.24px', { fromValue: '19.12px'}], position: 628, duration: 741 },
            { id: "eid1031", tween: [ "transform", "${_body_rb}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid1033", tween: [ "transform", "${_body_rb}", "rotateZ", '3deg', { fromValue: '9deg'}], position: 628, duration: 122 },
            { id: "eid1034", tween: [ "transform", "${_body_rb}", "rotateZ", '7deg', { fromValue: '3deg'}], position: 750, duration: 75 },
            { id: "eid1035", tween: [ "transform", "${_body_rb}", "rotateZ", '-2deg', { fromValue: '7deg'}], position: 825, duration: 65 },
            { id: "eid1036", tween: [ "transform", "${_body_rb}", "rotateZ", '66deg', { fromValue: '-2deg'}], position: 890, duration: 479 },
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
