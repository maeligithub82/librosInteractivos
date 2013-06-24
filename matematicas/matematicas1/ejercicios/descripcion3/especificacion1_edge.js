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
               text:"¡¡ Bien !! ¿Cómo lograste determinar el número de elementos sin realizar el modelo geométrico?<br><br><br><br>",
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
               text:"Con este razonamiento ¿Es posible determinar el número de elementos para la figura Nº 215?<br><br>",
               align:"center",
               font:['Fabada-regular',26,"rgba(255,255,255,1.00)","normal","none",""],
               textShadow:["rgba(0,0,0,0.65)",3,3,3],
               transform:[]
            }]
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
               text:"¡¡ No !!<br>",
               align:"center",
               font:['Fabada-regular',26,"rgba(255,255,255,1.00)","normal","none",""],
               textShadow:["rgba(0,0,0,0.65)",3,3,3],
               transform:[]
            }]
         },
         {
            id:'robot_error',
            display:'none',
            type:'rect',
            rect:['102px','306px','auto','auto','auto','auto']
         },
         {
            id:'Text',
            display:'none',
            type:'text',
            rect:['72px','-213px','761px','57px','auto','auto'],
            text:"Tips <br>Para Razonar:<br>",
            font:['Fabada-regular',26,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'tip1',
            display:'none',
            type:'text',
            rect:['101px','-140px','710px','57px','auto','auto'],
            text:"* La figura 1 es conformada por 1 elemento.<br>",
            font:['Fabada-regular',24,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'tip2',
            display:'none',
            type:'text',
            rect:['101px','-89px','710px','57px','auto','auto'],
            text:"*La figura 2 es conformada por 2 elementos.<br>",
            font:['Fabada-regular',24,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'tip3',
            display:'none',
            type:'text',
            rect:['101px','-38px','710px','57px','auto','auto'],
            text:"* ¿Qué operaciones me permiten obtener como resultado 1 y 2?<br>",
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
            id:'metopercion',
            display:'none',
            type:'text',
            rect:['-438px','-213px','761px','245px','auto','auto'],
            text:"Entonces<br>¿Cuántos elementos tiene la figura 215?<br><br>Realizamos operaciones<br><br>\t215 por 2 = 430<br>\t430 menos 1= 429<br>",
            font:['Fabada-regular',26,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'grupo6',
            display:'none',
            type:'group',
            rect:['277px','292px','499','211','auto','auto'],
            c:[
            {
               id:'globo6',
               type:'rect',
               rect:['62px','0px','373px','104px','auto','auto'],
               borderRadius:["31px 31px","31px 31px","31px 31px","31px 31px"],
               opacity:1,
               fill:["rgba(78,165,208,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'especificacion6',
               type:'text',
               rect:['40px','34px','402px','140px','auto','auto'],
               text:"R = 429 elementos<br>",
               align:"center",
               font:['Fabada-regular',30,"rgba(255,255,255,1.00)","normal","none",""],
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
            id:'robot_error',
            symbolName:'robot_error'
         }
         ]
      },
   states: {
      "Base State": {
         "${_metopercion}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '-712px'],
            ["style", "font-size", '26px'],
            ["style", "top", '67px'],
            ["style", "display", 'none'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "height", '245px'],
            ["subproperty", "textShadow.offsetV", '3px']
         ],
         "${_grupo3}": [
            ["style", "top", '222.22px'],
            ["style", "opacity", '0.993710994720459'],
            ["style", "left", '316.67px'],
            ["style", "display", 'none']
         ],
         "${_pizarron}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '860px']
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
         "${_robot}": [
            ["style", "top", '310.68px'],
            ["transform", "scaleY", '0.08519'],
            ["style", "height", '371px'],
            ["transform", "scaleX", '0.08519'],
            ["style", "display", 'none'],
            ["style", "left", '100.61px'],
            ["style", "width", '291.58511913733px']
         ],
         "${_grupo5}": [
            ["style", "top", '292.22px'],
            ["style", "opacity", '0'],
            ["style", "left", '316.67px'],
            ["style", "display", 'none']
         ],
         "${_grupo6}": [
            ["style", "top", '292.22px'],
            ["style", "opacity", '0'],
            ["style", "left", '646.65px'],
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
         "${_robot_error}": [
            ["style", "display", 'none'],
            ["style", "left", '102px'],
            ["style", "top", '306px']
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
         "${_globo6}": [
            ["color", "background-color", 'rgba(78,165,208,1)'],
            ["style", "border-top-left-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '372.6833190918px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '103.783203125px'],
            ["style", "left", '62px']
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
            ["subproperty", "textShadow.offsetV", '3px']
         ],
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
         "${_especificacion3}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["style", "opacity", '1'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["subproperty", "textShadow.offsetV", '3px'],
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
         duration: 43000,
         autoPlay: true,
         timeline: [
            { id: "eid1578", tween: [ "style", "${_pizarron}", "left", '-30px', { fromValue: '860px'}], position: 0, duration: 1500 },
            { id: "eid1580", tween: [ "style", "${_pizarron}", "left", '0px', { fromValue: '-30px'}], position: 1500, duration: 250 },
            { id: "eid2290", tween: [ "style", "${_tip2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2294", tween: [ "style", "${_tip2}", "display", 'block', { fromValue: 'none'}], position: 20663, duration: 0 },
            { id: "eid2289", tween: [ "style", "${_tip1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2293", tween: [ "style", "${_tip1}", "display", 'block', { fromValue: 'none'}], position: 20663, duration: 0 },
            { id: "eid2085", tween: [ "style", "${_grupo4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2084", tween: [ "style", "${_grupo4}", "display", 'block', { fromValue: 'none'}], position: 18750, duration: 0 },
            { id: "eid2263", tween: [ "style", "${_grupo4}", "display", 'none', { fromValue: 'block'}], position: 20663, duration: 0 },
            { id: "eid2165", tween: [ "style", "${_robot_error}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2166", tween: [ "style", "${_robot_error}", "display", 'block', { fromValue: 'none'}], position: 18750, duration: 0 },
            { id: "eid1742", tween: [ "style", "${_Group}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid1745", tween: [ "style", "${_Group}", "opacity", '0.9937106918239', { fromValue: '0'}], position: 2250, duration: 250 },
            { id: "eid2374", tween: [ "style", "${_tip3}", "top", '229px', { fromValue: '-38px'}], position: 21750, duration: 1500 },
            { id: "eid2375", tween: [ "style", "${_tip3}", "top", '222px', { fromValue: '229px'}], position: 23250, duration: 99 },
            { id: "eid1629", tween: [ "style", "${_robot}", "left", '104.6px', { fromValue: '100.61px'}], position: 2110, duration: 140 },
            { id: "eid1599", tween: [ "style", "${_robot}", "width", '291.58511913733px', { fromValue: '291.58511913733px'}], position: 1500, duration: 0 },
            { id: "eid1617", tween: [ "style", "${_robot}", "width", '291.58511913733px', { fromValue: '291.58511913733px'}], position: 2110, duration: 0 },
            { id: "eid2056", tween: [ "style", "${_grupo3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2058", tween: [ "style", "${_grupo3}", "display", 'block', { fromValue: 'none'}], position: 13994, duration: 0 },
            { id: "eid2083", tween: [ "style", "${_grupo3}", "display", 'none', { fromValue: 'block'}], position: 18750, duration: 0 },
            { id: "eid2298", tween: [ "style", "${_tip2}", "opacity", '0', { fromValue: '0'}], position: 20663, duration: 0 },
            { id: "eid2323", tween: [ "style", "${_tip2}", "opacity", '1', { fromValue: '0'}], position: 21422, duration: 1578 },
            { id: "eid1579", tween: [ "style", "${_pizarron}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1500 },
            { id: "eid2634", tween: [ "style", "${_metopercion}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2633", tween: [ "style", "${_metopercion}", "display", 'block', { fromValue: 'none'}], position: 33702, duration: 0 },
            { id: "eid2650", tween: [ "style", "${_metopercion}", "left", '68px', { fromValue: '-712px'}], position: 33702, duration: 748 },
            { id: "eid2504", tween: [ "style", "${_grupo5}", "opacity", '1', { fromValue: '0'}], position: 30000, duration: 500 },
            { id: "eid2699", tween: [ "style", "${_grupo6}", "left", '266.65px', { fromValue: '646.65px'}], position: 37500, duration: 500 },
            { id: "eid1620", tween: [ "transform", "${_robot}", "scaleY", '1.1455', { fromValue: '0.08519'}], position: 1500, duration: 610 },
            { id: "eid1628", tween: [ "transform", "${_robot}", "scaleY", '1.00143', { fromValue: '1.1455'}], position: 2110, duration: 140 },
            { id: "eid2291", tween: [ "style", "${_tip3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2295", tween: [ "style", "${_tip3}", "display", 'block', { fromValue: 'none'}], position: 20663, duration: 0 },
            { id: "eid2308", tween: [ "style", "${_tip1}", "top", '-140px', { fromValue: '-140px'}], position: 20663, duration: 0 },
            { id: "eid2314", tween: [ "style", "${_tip1}", "top", '150px', { fromValue: '-140px'}], position: 21082, duration: 1418 },
            { id: "eid2315", tween: [ "style", "${_tip1}", "top", '140px', { fromValue: '150px'}], position: 22500, duration: 144 },
            { id: "eid2499", tween: [ "style", "${_grupo5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2500", tween: [ "style", "${_grupo5}", "display", 'block', { fromValue: 'none'}], position: 30000, duration: 0 },
            { id: "eid1619", tween: [ "transform", "${_robot}", "scaleX", '1.1455', { fromValue: '0.08519'}], position: 1500, duration: 610 },
            { id: "eid1627", tween: [ "transform", "${_robot}", "scaleX", '1.00143', { fromValue: '1.1455'}], position: 2110, duration: 140 },
            { id: "eid2700", tween: [ "style", "${_grupo6}", "opacity", '1', { fromValue: '0'}], position: 37500, duration: 500 },
            { id: "eid2647", tween: [ "style", "${_metopercion}", "opacity", '1', { fromValue: '0'}], position: 33702, duration: 748 },
            { id: "eid1600", tween: [ "style", "${_robot}", "height", '371px', { fromValue: '371px'}], position: 1500, duration: 0 },
            { id: "eid1618", tween: [ "style", "${_robot}", "height", '371px', { fromValue: '371px'}], position: 2110, duration: 0 },
            { id: "eid2675", tween: [ "style", "${_grupo6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2676", tween: [ "style", "${_grupo6}", "display", 'block', { fromValue: 'none'}], position: 37500, duration: 0 },
            { id: "eid2299", tween: [ "style", "${_tip3}", "opacity", '0', { fromValue: '0'}], position: 20663, duration: 0 },
            { id: "eid2376", tween: [ "style", "${_tip3}", "opacity", '1', { fromValue: '0'}], position: 21750, duration: 1599 },
            { id: "eid1572", tween: [ "style", "${_pizarron}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1630", tween: [ "style", "${_robot}", "top", '306.92px', { fromValue: '310.68px'}], position: 2110, duration: 140 },
            { id: "eid1613", tween: [ "style", "${_robot}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1614", tween: [ "style", "${_robot}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid2139", tween: [ "style", "${_robot}", "display", 'none', { fromValue: 'block'}], position: 18750, duration: 0 },
            { id: "eid2088", tween: [ "style", "${_grupo4}", "left", '287.82px', { fromValue: '287.82px'}], position: 18750, duration: 0 },
            { id: "eid2321", tween: [ "style", "${_tip2}", "top", '193px', { fromValue: '-89px'}], position: 21422, duration: 1459 },
            { id: "eid2322", tween: [ "style", "${_tip2}", "top", '183px', { fromValue: '193px'}], position: 22881, duration: 119 },
            { id: "eid2305", tween: [ "style", "${_Text}", "top", '77px', { fromValue: '-213px'}], position: 20663, duration: 1337 },
            { id: "eid2306", tween: [ "style", "${_Text}", "top", '67px', { fromValue: '77px'}], position: 22000, duration: 155 },
            { id: "eid2296", tween: [ "style", "${_tip1}", "opacity", '0', { fromValue: '0'}], position: 20663, duration: 0 },
            { id: "eid2318", tween: [ "style", "${_tip1}", "opacity", '1', { fromValue: '0'}], position: 21082, duration: 1562 },
            { id: "eid2288", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2292", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 20663, duration: 0 },
            { id: "eid2307", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 20663, duration: 1492 },
            { id: "eid2089", tween: [ "style", "${_grupo4}", "top", '235.68px', { fromValue: '235.68px'}], position: 18750, duration: 0 },
            { id: "eid1989", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'block'}], position: 13994, duration: 0 }         ]
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
            { id: "eid2813", tween: [ "style", "${_brazo_izqrb}", "-moz-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2814", tween: [ "style", "${_brazo_izqrb}", "-ms-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2815", tween: [ "style", "${_brazo_izqrb}", "msTransformOrigin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2816", tween: [ "style", "${_brazo_izqrb}", "-o-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
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
            ["transform", "rotateZ", '1deg']
         ],
         "${_brazo_derrb}": [
            ["style", "top", '106.65px'],
            ["style", "left", '0px'],
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
            { id: "eid2817", tween: [ "style", "${_brazo_izqrb}", "-moz-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2818", tween: [ "style", "${_brazo_izqrb}", "-ms-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2819", tween: [ "style", "${_brazo_izqrb}", "msTransformOrigin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2820", tween: [ "style", "${_brazo_izqrb}", "-o-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
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
            { id: "eid1038", tween: [ "style", "${_body_rb}", "left", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid1040", tween: [ "style", "${_body_rb}", "left", '32.24px', { fromValue: '19.12px'}], position: 628, duration: 741 },
            { id: "eid1103", tween: [ "style", "${_brazo_derrb}", "top", '106.65px', { fromValue: '106.65px'}], position: 0, duration: 0 },
            { id: "eid1111", tween: [ "style", "${_brazo_derrb}", "top", '187.05px', { fromValue: '106.65px'}], position: 401, duration: 489 },
            { id: "eid1059", tween: [ "style", "${_grupo_cabz}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1069", tween: [ "style", "${_grupo_cabz}", "top", '63.14px', { fromValue: '0px'}], position: 500, duration: 390 },
            { id: "eid1072", tween: [ "style", "${_grupo_cabz}", "top", '138.12px', { fromValue: '63.14px'}], position: 890, duration: 479 },
            { id: "eid1077", tween: [ "style", "${_grupo_cabz}", "top", '135.97px', { fromValue: '138.12px'}], position: 1369, duration: 131 },
            { id: "eid842", tween: [ "style", "${_brazo_izqrb}", "top", '244.02px', { fromValue: '106.07px'}], position: 0, duration: 1000 },
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
