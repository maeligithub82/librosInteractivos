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
            id:'Group',
            type:'group',
            rect:['317px','222px','499','211','auto','auto'],
            c:[
            {
               id:'globo',
               type:'rect',
               rect:['0px','0px','499px','211px','auto','auto'],
               borderRadius:["31px 31px","31px 31px","31px 31px","31px 31px"],
               opacity:1,
               fill:["rgba(78,165,208,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'especificacion',
               type:'text',
               rect:['14px','30px','458px','140px','auto','auto'],
               text:"¡Bien ! Entonces si la figura la llamamos “n”<br><br><br><br>",
               align:"center",
               font:['Fabada-regular',26,"rgba(255,255,255,1.00)","normal","none",""],
               textShadow:["rgba(0,0,0,0.65)",3,3,3],
               transform:[]
            }]
         },
         {
            id:'robot',
            display:'none',
            type:'rect',
            rect:['23px','271px','auto','auto','auto','auto']
         },
         {
            id:'grupo2',
            display:'none',
            type:'group',
            rect:['317px','222px','499','211','auto','auto'],
            c:[
            {
               id:'globo2',
               type:'rect',
               rect:['0px','0px','499px','211px','auto','auto'],
               borderRadius:["31px 31px","31px 31px","31px 31px","31px 31px"],
               opacity:1,
               fill:["rgba(78,165,208,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'especificacion2',
               type:'text',
               rect:['14px','30px','458px','140px','auto','auto'],
               text:"¡¡ Exacto !!  “n” por 2<br><br>",
               align:"center",
               font:['Fabada-regular',26,"rgba(255,255,255,1.00)","normal","none",""],
               textShadow:["rgba(0,0,0,0.65)",3,3,3],
               transform:[]
            }]
         },
         {
            id:'grupo3',
            display:'none',
            type:'group',
            rect:['317px','222px','499','211','auto','auto'],
            c:[
            {
               id:'globo3',
               type:'rect',
               rect:['0px','0px','499px','211px','auto','auto'],
               borderRadius:["31px 31px","31px 31px","31px 31px","31px 31px"],
               opacity:1,
               fill:["rgba(78,165,208,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'especificacion3',
               type:'text',
               rect:['14px','30px','458px','140px','auto','auto'],
               text:"Recuerda: Una sucesión es un conjunto de figuras o números ordenados que conservan un mismo patrón.<br><br>",
               align:"center",
               font:['Fabada-regular',26,"rgba(255,255,255,1.00)","normal","none",""],
               textShadow:["rgba(0,0,0,0.65)",3,3,3],
               transform:[]
            }]
         }],
         symbolInstances: [
         {
            id:'robot',
            symbolName:'robot'
         }
         ]
      },
   states: {
      "Base State": {
         "${_especificacion2}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '1'],
            ["style", "left", '14.08px'],
            ["style", "width", '458.35757446289px'],
            ["style", "top", '29.58px'],
            ["transform", "scaleX", '1'],
            ["style", "text-align", 'center'],
            ["style", "height", '140.23333740234px'],
            ["style", "display", 'block'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "font-size", '26px'],
            ["style", "line-height", '37px']
         ],
         "${_globo2}": [
            ["color", "background-color", 'rgba(78,165,208,1)'],
            ["style", "border-top-left-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '498.6833190918px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '210.60153198242px'],
            ["style", "left", '0px']
         ],
         "${_pizarron}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '860px']
         ],
         "${_grupo2}": [
            ["style", "top", '222.22px'],
            ["style", "opacity", '0.993711'],
            ["style", "left", '316.67px'],
            ["style", "display", 'none']
         ],
         "${_Group}": [
            ["style", "top", '222.22px'],
            ["style", "opacity", '0'],
            ["style", "left", '316.67px'],
            ["style", "display", 'block']
         ],
         "${_globo}": [
            ["color", "background-color", 'rgba(78,165,208,1.00)'],
            ["style", "border-top-left-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '498.6833190918px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '210.60153198242px'],
            ["style", "left", '0px']
         ],
         "${_especificacion3}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["style", "line-height", '37px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '14.08px'],
            ["style", "width", '458.35757446289px'],
            ["style", "top", '29.58px'],
            ["style", "font-size", '26px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'block'],
            ["style", "height", '140.23333740234px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1']
         ],
         "${_robot}": [
            ["style", "top", '310.68px'],
            ["transform", "scaleY", '0.08519'],
            ["transform", "scaleX", '0.08519'],
            ["style", "height", '371px'],
            ["style", "display", 'none'],
            ["style", "left", '100.61px'],
            ["style", "width", '291.58511913733px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '696px'],
            ["style", "width", '900px']
         ],
         "${_especificacion}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["style", "line-height", '37px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '1'],
            ["style", "left", '14.08px'],
            ["style", "width", '458.35757446289px'],
            ["style", "top", '29.58px'],
            ["style", "font-size", '26px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'block'],
            ["style", "height", '140.23333740234px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["transform", "scaleX", '1'],
            ["subproperty", "textShadow.offsetV", '3px']
         ],
         "${_globo3}": [
            ["color", "background-color", 'rgba(78,165,208,1)'],
            ["style", "border-top-left-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '498.6833190918px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '210.60153198242px'],
            ["style", "left", '0px']
         ],
         "${_grupo3}": [
            ["style", "top", '222.22px'],
            ["style", "opacity", '0.993710994720459'],
            ["style", "left", '316.67px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 19000,
         autoPlay: true,
         timeline: [
            { id: "eid1995", tween: [ "style", "${_grupo2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1994", tween: [ "style", "${_grupo2}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid2057", tween: [ "style", "${_grupo2}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0 },
            { id: "eid1578", tween: [ "style", "${_pizarron}", "left", '-30px', { fromValue: '860px'}], position: 0, duration: 1500 },
            { id: "eid1580", tween: [ "style", "${_pizarron}", "left", '0px', { fromValue: '-30px'}], position: 1500, duration: 250 },
            { id: "eid1579", tween: [ "style", "${_pizarron}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1500 },
            { id: "eid1629", tween: [ "style", "${_robot}", "left", '104.6px', { fromValue: '100.61px'}], position: 2110, duration: 140 },
            { id: "eid1572", tween: [ "style", "${_pizarron}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1630", tween: [ "style", "${_robot}", "top", '306.92px', { fromValue: '310.68px'}], position: 2110, duration: 140 },
            { id: "eid1599", tween: [ "style", "${_robot}", "width", '291.58511913733px', { fromValue: '291.58511913733px'}], position: 1500, duration: 0 },
            { id: "eid1617", tween: [ "style", "${_robot}", "width", '291.58511913733px', { fromValue: '291.58511913733px'}], position: 2110, duration: 0 },
            { id: "eid1989", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
            { id: "eid1600", tween: [ "style", "${_robot}", "height", '371px', { fromValue: '371px'}], position: 1500, duration: 0 },
            { id: "eid1618", tween: [ "style", "${_robot}", "height", '371px', { fromValue: '371px'}], position: 2110, duration: 0 },
            { id: "eid1620", tween: [ "transform", "${_robot}", "scaleY", '1.1455', { fromValue: '0.08519'}], position: 1500, duration: 610 },
            { id: "eid1628", tween: [ "transform", "${_robot}", "scaleY", '1.00143', { fromValue: '1.1455'}], position: 2110, duration: 140 },
            { id: "eid2056", tween: [ "style", "${_grupo3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2058", tween: [ "style", "${_grupo3}", "display", 'block', { fromValue: 'none'}], position: 10500, duration: 0 },
            { id: "eid1613", tween: [ "style", "${_robot}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1614", tween: [ "style", "${_robot}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid1742", tween: [ "style", "${_Group}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid1745", tween: [ "style", "${_Group}", "opacity", '0.9937106918239', { fromValue: '0'}], position: 2250, duration: 250 },
            { id: "eid1619", tween: [ "transform", "${_robot}", "scaleX", '1.1455', { fromValue: '0.08519'}], position: 1500, duration: 610 },
            { id: "eid1627", tween: [ "transform", "${_robot}", "scaleX", '1.00143', { fromValue: '1.1455'}], position: 2110, duration: 140 }         ]
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
            { id: "eid2079", tween: [ "style", "${_brazo_izqrb}", "-moz-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2080", tween: [ "style", "${_brazo_izqrb}", "-ms-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2081", tween: [ "style", "${_brazo_izqrb}", "msTransformOrigin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2082", tween: [ "style", "${_brazo_izqrb}", "-o-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
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
            { id: "eid876", tween: [ "transform", "${_boca_rb}", "rotateZ", '-360deg', { fromValue: '-360deg'}], position: 0, duration: 0 },
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
            { id: "eid313", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid316", tween: [ "style", "${_Group}", "display", 'block', { fromValue: 'none'}], position: 601, duration: 0, easing: "easeOutBack" },
            { id: "eid317", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'block'}], position: 679, duration: 0, easing: "easeOutBack" },
            { id: "eid320", tween: [ "style", "${_Group}", "display", 'block', { fromValue: 'none'}], position: 1391, duration: 0, easing: "easeOutBack" },
            { id: "eid321", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0, easing: "easeOutBack" },
            { id: "eid322", tween: [ "style", "${_Group}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0, easing: "easeOutBack" },
            { id: "eid323", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'block'}], position: 2358, duration: 0, easing: "easeOutBack" }         ]
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
