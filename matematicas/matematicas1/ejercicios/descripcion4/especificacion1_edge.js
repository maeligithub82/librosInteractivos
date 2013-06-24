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
               text:"¿Ahora ya se puede obtener los elementos de cualquier figura?<br><br><br><br>",
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
            id:'grupo4',
            display:'none',
            type:'group',
            rect:['317px','222px','499','211','auto','auto'],
            c:[
            {
               id:'globo4',
               type:'rect',
               rect:['-71px','33px','499px','211px','auto','auto'],
               borderRadius:["31px 31px","31px 31px","31px 31px","31px 31px"],
               opacity:1,
               fill:["rgba(78,165,208,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               transform:[[],[],[],['0.56','0.612']]
            },
            {
               id:'especificacion4',
               type:'text',
               rect:['-51px','112px','458px','140px','auto','auto'],
               text:"¡¡ Si !!<br>",
               align:"center",
               font:['Fabada-regular',26,"rgba(255,255,255,1.00)","normal","none",""],
               textShadow:["rgba(0,0,0,0.65)",3,3,3],
               transform:[]
            }]
         },
         {
            id:'Text',
            display:'none',
            type:'text',
            rect:['72px','-213px','761px','57px','auto','auto'],
            text:"Por lo tanto:",
            font:['Fabada-regular',26,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'tip1',
            display:'none',
            type:'text',
            rect:['101px','-140px','710px','57px','auto','auto'],
            text:"* La figura 50 tiene:  99  elementos<br>",
            font:['Fabada-regular',24,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'tip2',
            display:'none',
            type:'text',
            rect:['101px','-89px','710px','57px','auto','auto'],
            text:"*La figura 310 tiene:  619  elementos<br><br>",
            font:['Fabada-regular',24,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'tip3',
            display:'none',
            type:'text',
            rect:['101px','-38px','710px','57px','auto','auto'],
            text:"* La figura 2013 tiene:  4025  elementos<br>",
            font:['Fabada-regular',24,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'grupo5',
            display:'none',
            type:'group',
            rect:['317px','292px','499','211','auto','auto'],
            c:[
            {
               id:'globo5',
               type:'rect',
               rect:['62px','0px','373px','157px','auto','auto'],
               borderRadius:["31px 31px","31px 31px","31px 31px","31px 31px"],
               opacity:1,
               fill:["rgba(78,165,208,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'especificacion5',
               type:'text',
               rect:['40px','34px','402px','140px','auto','auto'],
               text:"¡¡ Bien multiplicamos por 2 y restamos 1 !!<br><br>",
               align:"center",
               font:['Fabada-regular',26,"rgba(255,255,255,1.00)","normal","none",""],
               textShadow:["rgba(0,0,0,0.65)",3,3,3],
               transform:[]
            }]
         },
         {
            id:'grupo6',
            display:'none',
            type:'group',
            rect:['277px','272px','499','211','auto','auto'],
            c:[
            {
               id:'globo6',
               type:'rect',
               rect:['150px','21px','183px','71px','auto','auto'],
               borderRadius:["31px 31px","31px 31px","31px 31px","31px 31px"],
               opacity:1,
               fill:["rgba(78,165,208,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'especificacion6',
               type:'text',
               rect:['40px','34px','402px','140px','auto','auto'],
               text:"2n - 1",
               align:"center",
               font:['Fabada-regular',30,"rgba(255,255,255,1.00)","normal","none",""],
               textShadow:["rgba(0,0,0,0.65)",3,3,3],
               transform:[]
            }]
         },
         {
            id:'grupo7',
            display:'none',
            type:'group',
            rect:['317px','222px','499','211','auto','auto'],
            c:[
            {
               id:'globo7',
               type:'rect',
               rect:['0px','0px','499px','211px','auto','auto'],
               borderRadius:["31px 31px","31px 31px","31px 31px","31px 31px"],
               opacity:1,
               fill:["rgba(78,165,208,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'especificacion7',
               type:'text',
               rect:['14px','30px','458px','140px','auto','auto'],
               text:"Solo tenemos que multiplicar por 2 y restar 1",
               align:"center",
               font:['Fabada-regular',26,"rgba(255,255,255,1.00)","normal","none",""],
               textShadow:["rgba(0,0,0,0.65)",3,3,3],
               transform:[]
            }]
         },
         {
            id:'especificacionfin',
            display:'none',
            type:'text',
            rect:['72px','-213px','761px','57px','auto','auto'],
            text:"¡¡ Bien !!<br>Si la figura la llamamos “n” <br><br>¿Cuántos elementos tiene?<br><br>R = 2 por “n” menos 1<br><br>Algebraicamente se expresa como:<br>",
            font:['Fabada-regular',26,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'robot_acierto',
            display:'none',
            type:'rect',
            rect:['75px','366px','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'robot',
            symbolName:'robot'
         },
         {
            id:'robot_acierto',
            symbolName:'robot_acierto'
         }
         ]
      },
   states: {
      "Base State": {
         "${_tip3}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '101px'],
            ["style", "width", '709.99992290296px'],
            ["style", "top", '-38px'],
            ["style", "display", 'none'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "opacity", '0']
         ],
         "${_tip1}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '101px'],
            ["style", "width", '709.68432617187px'],
            ["style", "top", '-140px'],
            ["style", "display", 'none'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "text-decoration", 'none'],
            ["subproperty", "textShadow.offsetV", '3px']
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
         "${_robot_acierto}": [
            ["style", "top", '366px'],
            ["style", "left", '75px'],
            ["style", "display", 'none']
         ],
         "${_grupo5}": [
            ["style", "top", '292.22px'],
            ["style", "opacity", '0'],
            ["style", "left", '316.67px'],
            ["style", "display", 'none']
         ],
         "${_grupo6}": [
            ["style", "top", '272.22px'],
            ["style", "opacity", '0'],
            ["style", "left", '696.65px'],
            ["style", "display", 'none']
         ],
         "${_grupo7}": [
            ["style", "top", '222.22px'],
            ["style", "opacity", '0.993710994720459'],
            ["style", "left", '316.67px'],
            ["style", "display", 'none']
         ],
         "${_especificacion5}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["style", "line-height", '37px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '1'],
            ["style", "left", '40.07px'],
            ["style", "width", '402.35000610352px'],
            ["style", "top", '33.57px'],
            ["style", "font-size", '26px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'block'],
            ["style", "height", '140.23333740234px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["transform", "scaleX", '1'],
            ["subproperty", "textShadow.offsetV", '3px']
         ],
         "${_grupo4}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0.993710994720459'],
            ["style", "left", '287.82px'],
            ["style", "top", '235.68px']
         ],
         "${_globo5}": [
            ["color", "background-color", 'rgba(78,165,208,1)'],
            ["style", "border-top-left-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '372.6833190918px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '156.60000610352px'],
            ["style", "left", '62px']
         ],
         "${_robot}": [
            ["style", "top", '310.68px'],
            ["transform", "scaleY", '0.08519'],
            ["style", "height", '371px'],
            ["transform", "scaleX", '0.08519'],
            ["style", "display", 'none'],
            ["style", "left", '100.61px'],
            ["style", "width", '291.58511913733px']
         ],
         "${_especificacion7}": [
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
         "${_especificacionfin}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '72px'],
            ["style", "font-size", '26px'],
            ["style", "top", '67px'],
            ["style", "display", 'none'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["subproperty", "textShadow.offsetV", '3px']
         ],
         "${_globo7}": [
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
         "${_globo6}": [
            ["color", "background-color", 'rgba(78,165,208,1)'],
            ["style", "border-top-left-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '183.15771484375px'],
            ["style", "top", '21.07px'],
            ["style", "border-bottom-left-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '71.116668701172px'],
            ["style", "left", '150.43px']
         ],
         "${_Group}": [
            ["style", "top", '222.22px'],
            ["style", "opacity", '0'],
            ["style", "left", '316.67px'],
            ["style", "display", 'block']
         ],
         "${_especificacion}": [
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
         "${_Text}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '72px'],
            ["style", "font-size", '26px'],
            ["style", "top", '-213px'],
            ["style", "display", 'none'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["subproperty", "textShadow.offsetV", '3px']
         ],
         "${_globo4}": [
            ["color", "background-color", 'rgba(78,165,208,1)'],
            ["style", "border-top-left-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '0.56038'],
            ["style", "border-top-right-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '498.6833190918px'],
            ["style", "top", '32.69px'],
            ["style", "border-bottom-left-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '0.61238'],
            ["style", "height", '210.60153198242px'],
            ["style", "left", '-71.15px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '900px'],
            ["style", "height", '696px'],
            ["style", "overflow", 'hidden']
         ],
         "${_especificacion6}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '1'],
            ["style", "left", '40.07px'],
            ["style", "width", '402.35000610352px'],
            ["style", "top", '33.57px'],
            ["transform", "scaleX", '1'],
            ["style", "text-align", 'center'],
            ["style", "height", '140.23333740234px'],
            ["style", "display", 'block'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "font-size", '30px'],
            ["style", "line-height", '37px']
         ],
         "${_tip2}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '101px'],
            ["style", "width", '709.68334960938px'],
            ["style", "top", '-89px'],
            ["style", "display", 'none'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "opacity", '0']
         ],
         "${_especificacion4}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["style", "line-height", '37px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '1'],
            ["style", "left", '-50.82px'],
            ["style", "width", '458.35757446289px'],
            ["style", "top", '112.33px'],
            ["style", "font-size", '26px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'block'],
            ["style", "height", '140.23333740234px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["transform", "scaleX", '1'],
            ["subproperty", "textShadow.offsetV", '3px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 35500,
         autoPlay: true,
         timeline: [
            { id: "eid1578", tween: [ "style", "${_pizarron}", "left", '-30px', { fromValue: '860px'}], position: 0, duration: 1500 },
            { id: "eid1580", tween: [ "style", "${_pizarron}", "left", '0px', { fromValue: '-30px'}], position: 1500, duration: 250 },
            { id: "eid2290", tween: [ "style", "${_tip2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2294", tween: [ "style", "${_tip2}", "display", 'block', { fromValue: 'none'}], position: 20913, duration: 0 },
            { id: "eid2289", tween: [ "style", "${_tip1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2293", tween: [ "style", "${_tip1}", "display", 'block', { fromValue: 'none'}], position: 20913, duration: 0 },
            { id: "eid2085", tween: [ "style", "${_grupo4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2084", tween: [ "style", "${_grupo4}", "display", 'block', { fromValue: 'none'}], position: 13994, duration: 0 },
            { id: "eid2263", tween: [ "style", "${_grupo4}", "display", 'none', { fromValue: 'block'}], position: 16250, duration: 0 },
            { id: "eid2307", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 20913, duration: 1492 },
            { id: "eid1742", tween: [ "style", "${_Group}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid1745", tween: [ "style", "${_Group}", "opacity", '0.9937106918239', { fromValue: '0'}], position: 2250, duration: 250 },
            { id: "eid2291", tween: [ "style", "${_tip3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2295", tween: [ "style", "${_tip3}", "display", 'block', { fromValue: 'none'}], position: 20913, duration: 0 },
            { id: "eid1629", tween: [ "style", "${_robot}", "left", '74.6px', { fromValue: '100.61px'}], position: 2110, duration: 140 },
            { id: "eid1599", tween: [ "style", "${_robot}", "width", '291.58511913733px', { fromValue: '291.58511913733px'}], position: 1500, duration: 0 },
            { id: "eid1617", tween: [ "style", "${_robot}", "width", '291.58511913733px', { fromValue: '291.58511913733px'}], position: 2110, duration: 0 },
            { id: "eid2766", tween: [ "style", "${_grupo7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2765", tween: [ "style", "${_grupo7}", "display", 'block', { fromValue: 'none'}], position: 16250, duration: 0 },
            { id: "eid2783", tween: [ "style", "${_grupo7}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
            { id: "eid2296", tween: [ "style", "${_tip1}", "opacity", '0', { fromValue: '0'}], position: 20913, duration: 0 },
            { id: "eid2318", tween: [ "style", "${_tip1}", "opacity", '1', { fromValue: '0'}], position: 21332, duration: 1562 },
            { id: "eid2298", tween: [ "style", "${_tip2}", "opacity", '0', { fromValue: '0'}], position: 20913, duration: 0 },
            { id: "eid2323", tween: [ "style", "${_tip2}", "opacity", '1', { fromValue: '0'}], position: 21672, duration: 1578 },
            { id: "eid2821", tween: [ "style", "${_especificacionfin}", "opacity", '1', { fromValue: '0'}], position: 30920, duration: 604 },
            { id: "eid1989", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'block'}], position: 13994, duration: 0 },
            { id: "eid1620", tween: [ "transform", "${_robot}", "scaleY", '1.1455', { fromValue: '0.08519'}], position: 1500, duration: 610 },
            { id: "eid1628", tween: [ "transform", "${_robot}", "scaleY", '1.00143', { fromValue: '1.1455'}], position: 2110, duration: 140 },
            { id: "eid2699", tween: [ "style", "${_grupo6}", "left", '436.65px', { fromValue: '696.65px'}], position: 35000, duration: 500 },
            { id: "eid2308", tween: [ "style", "${_tip1}", "top", '-140px', { fromValue: '-140px'}], position: 20913, duration: 0 },
            { id: "eid2314", tween: [ "style", "${_tip1}", "top", '150px', { fromValue: '-140px'}], position: 21332, duration: 1418 },
            { id: "eid2315", tween: [ "style", "${_tip1}", "top", '140px', { fromValue: '150px'}], position: 22750, duration: 144 },
            { id: "eid2499", tween: [ "style", "${_grupo5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1619", tween: [ "transform", "${_robot}", "scaleX", '1.1455', { fromValue: '0.08519'}], position: 1500, duration: 610 },
            { id: "eid1627", tween: [ "transform", "${_robot}", "scaleX", '1.00143', { fromValue: '1.1455'}], position: 2110, duration: 140 },
            { id: "eid2299", tween: [ "style", "${_tip3}", "opacity", '0', { fromValue: '0'}], position: 20913, duration: 0 },
            { id: "eid2376", tween: [ "style", "${_tip3}", "opacity", '1', { fromValue: '0'}], position: 22000, duration: 1599 },
            { id: "eid2675", tween: [ "style", "${_grupo6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2676", tween: [ "style", "${_grupo6}", "display", 'block', { fromValue: 'none'}], position: 35000, duration: 0 },
            { id: "eid1600", tween: [ "style", "${_robot}", "height", '371px', { fromValue: '371px'}], position: 1500, duration: 0 },
            { id: "eid1618", tween: [ "style", "${_robot}", "height", '371px', { fromValue: '371px'}], position: 2110, duration: 0 },
            { id: "eid1579", tween: [ "style", "${_pizarron}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1500 },
            { id: "eid2321", tween: [ "style", "${_tip2}", "top", '193px', { fromValue: '-89px'}], position: 21672, duration: 1459 },
            { id: "eid2322", tween: [ "style", "${_tip2}", "top", '183px', { fromValue: '193px'}], position: 23131, duration: 119 },
            { id: "eid1572", tween: [ "style", "${_pizarron}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1630", tween: [ "style", "${_robot}", "top", '366.92px', { fromValue: '310.68px'}], position: 2110, duration: 140 },
            { id: "eid1613", tween: [ "style", "${_robot}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1614", tween: [ "style", "${_robot}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid2139", tween: [ "style", "${_robot}", "display", 'none', { fromValue: 'block'}], position: 13994, duration: 0 },
            { id: "eid2088", tween: [ "style", "${_grupo4}", "left", '287.82px', { fromValue: '287.82px'}], position: 13994, duration: 0 },
            { id: "eid2305", tween: [ "style", "${_Text}", "top", '77px', { fromValue: '-213px'}], position: 20913, duration: 1337 },
            { id: "eid2306", tween: [ "style", "${_Text}", "top", '67px', { fromValue: '77px'}], position: 22250, duration: 155 },
            { id: "eid2374", tween: [ "style", "${_tip3}", "top", '229px', { fromValue: '-38px'}], position: 22000, duration: 1500 },
            { id: "eid2375", tween: [ "style", "${_tip3}", "top", '222px', { fromValue: '229px'}], position: 23500, duration: 99 },
            { id: "eid2855", tween: [ "style", "${_robot_acierto}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2854", tween: [ "style", "${_robot_acierto}", "display", 'block', { fromValue: 'none'}], position: 13994, duration: 0 },
            { id: "eid2288", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2292", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 20913, duration: 0 },
            { id: "eid2700", tween: [ "style", "${_grupo6}", "opacity", '1', { fromValue: '0'}], position: 35000, duration: 500 },
            { id: "eid2089", tween: [ "style", "${_grupo4}", "top", '235.68px', { fromValue: '235.68px'}], position: 13994, duration: 0 },
            { id: "eid2817", tween: [ "style", "${_especificacionfin}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2816", tween: [ "style", "${_especificacionfin}", "display", 'block', { fromValue: 'none'}], position: 30920, duration: 0 }         ]
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
            { id: "eid3059", tween: [ "style", "${_brazo_izqrb}", "-moz-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid3060", tween: [ "style", "${_brazo_izqrb}", "-ms-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid3061", tween: [ "style", "${_brazo_izqrb}", "msTransformOrigin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid3062", tween: [ "style", "${_brazo_izqrb}", "-o-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
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
"robot_acierto": {
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
      transform: [{1:0,0:0},['0deg']],
      id: 'brazo_izqrb',
      type: 'image',
      rect: ['159px','106px','43px','118px','auto','auto'],
      fill: ['rgba(0,0,0,0)','../img/brazo_izqrb.png','0px','0px']
   },
   {
      type: 'group',
      id: 'grupo_cabz',
      rect: ['13','0','58','45','auto','auto'],
      transform: [{1:0,0:0},['0deg'],{},['1','0.857']],
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
            ["transform", "scaleY", '0.93654'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '45px'],
            ["style", "top", '0px'],
            ["style", "left", '13px'],
            ["style", "width", '58px']
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
         duration: 13994,
         autoPlay: false,
         timeline: [
            { id: "eid2859", tween: [ "style", "${_grupo_cabz}", "width", '58px', { fromValue: '58px'}], position: 0, duration: 0 },
            { id: "eid2862", tween: [ "style", "${_grupo_cabz}", "width", '58px', { fromValue: '58px'}], position: 101, duration: 0 },
            { id: "eid2857", tween: [ "style", "${_grupo_cabz}", "left", '13px', { fromValue: '13px'}], position: 0, duration: 0 },
            { id: "eid2860", tween: [ "style", "${_grupo_cabz}", "left", '13px', { fromValue: '13px'}], position: 101, duration: 0 },
            { id: "eid395", tween: [ "style", "${_brazo_izqrb}", "left", '159.15px', { fromValue: '159.15px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2864", tween: [ "style", "${_grupo_cabz}", "top", '9px', { fromValue: '0px'}], position: 0, duration: 101 },
            { id: "eid2866", tween: [ "style", "${_grupo_cabz}", "top", '-1px', { fromValue: '9px'}], position: 101, duration: 102 },
            { id: "eid2867", tween: [ "style", "${_grupo_cabz}", "top", '9px', { fromValue: '-1px'}], position: 204, duration: 97 },
            { id: "eid2868", tween: [ "style", "${_grupo_cabz}", "top", '-1px', { fromValue: '9px'}], position: 300, duration: 108 },
            { id: "eid2869", tween: [ "style", "${_grupo_cabz}", "top", '9px', { fromValue: '-1px'}], position: 409, duration: 91 },
            { id: "eid2870", tween: [ "style", "${_grupo_cabz}", "top", '-1px', { fromValue: '9px'}], position: 500, duration: 101 },
            { id: "eid2871", tween: [ "style", "${_grupo_cabz}", "top", '-51px', { fromValue: '-1px'}], position: 601, duration: 200 },
            { id: "eid2872", tween: [ "style", "${_grupo_cabz}", "top", '-1px', { fromValue: '-51px'}], position: 801, duration: 56 },
            { id: "eid396", tween: [ "style", "${_brazo_izqrb}", "top", '106.07px', { fromValue: '106.07px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2906", tween: [ "transform", "${_grupo_cabz}", "scaleY", '1.08012', { fromValue: '0.93654'}], position: 857, duration: 13137 },
            { id: "eid2858", tween: [ "style", "${_grupo_cabz}", "height", '45px', { fromValue: '45px'}], position: 0, duration: 0 },
            { id: "eid2863", tween: [ "style", "${_grupo_cabz}", "height", '45px', { fromValue: '45px'}], position: 101, duration: 0 },
            { id: "eid394", tween: [ "style", "${_brazo_izqrb}", "-webkit-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid3063", tween: [ "style", "${_brazo_izqrb}", "-moz-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid3064", tween: [ "style", "${_brazo_izqrb}", "-ms-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid3065", tween: [ "style", "${_brazo_izqrb}", "msTransformOrigin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid3066", tween: [ "style", "${_brazo_izqrb}", "-o-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
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
