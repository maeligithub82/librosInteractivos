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
            id:'pizarron',
            type:'image',
            rect:['0','0','900px','700px','auto','auto'],
            fill:["rgba(0,0,0,0)","../img/pizarron.png",'0px','0px']
         },
         {
            id:'grafica',
            display:'none',
            type:'image',
            rect:['69px','52px','762px','559px','auto','auto'],
            fill:["rgba(0,0,0,0)","../img/grafica.png",'0px','0px']
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
            id:'mascara_link',
            display:'none',
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
            id:'mono_desenfoque',
            type:'image',
            rect:['957px','322px','271px','452px','auto','auto'],
            fill:["rgba(0,0,0,0)","../img/mono_desenfoque.png",'0px','0px'],
            transform:[[],['-90']]
         },
         {
            id:'mono_desenfoque2',
            type:'image',
            rect:['953px','321px','271px','452px','auto','auto'],
            opacity:1,
            fill:["rgba(0,0,0,0)","../img/mono_desenfoque2.png",'0px','0px'],
            transform:[[],['-90']]
         },
         {
            id:'tria_eje_1',
            display:'none',
            type:'image',
            rect:['362px','271px','283px','180px','auto','auto'],
            fill:["rgba(0,0,0,0)","../img/tria_eje_1.png",'0px','0px']
         },
         {
            id:'txt_actividad1',
            display:'none',
            type:'text',
            rect:['-439px','64px','761px','175px','auto','auto'],
            text:"Actividad<br><br>Traza en tu cuaderno un triángulo rectángulo A B C, cuyos catetos midan 3 y 5 cm respectivamente , como el que se muestra:<br>",
            align:"left",
            font:['Fabada-regular',20,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'txt_actividad2',
            display:'none',
            type:'text',
            rect:['-439px','39px','574px','67px','auto','auto'],
            text:"<br>2.- Obtenemos el cuadrado de ambos catetos:<br>",
            align:"left",
            font:['Fabada-regular',20,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'btn_sig',
            display:'none',
            type:'image',
            rect:['809px','311px','42px','35px','auto','auto'],
            fill:["rgba(0,0,0,0)","../img/btn_sig.png",'0px','0px']
         },
         {
            id:'btn_sig1',
            display:'none',
            type:'image',
            rect:['809px','311px','42px','35px','auto','auto'],
            fill:["rgba(0,0,0,0)","../img/btn_sig.png",'0px','0px']
         },
         {
            id:'btn_sig2',
            display:'none',
            type:'image',
            rect:['809px','311px','42px','35px','auto','auto'],
            fill:["rgba(0,0,0,0)","../img/btn_sig.png",'0px','0px']
         },
         {
            id:'btn_sig3',
            display:'none',
            type:'image',
            rect:['809px','311px','42px','35px','auto','auto'],
            fill:["rgba(0,0,0,0)","../img/btn_sig.png",'0px','0px']
         },
         {
            id:'caminar',
            display:'none',
            type:'rect',
            rect:['453','315','auto','auto','auto','auto']
         },
         {
            id:'robot',
            display:'none',
            type:'rect',
            rect:['-18px','436px','auto','auto','auto','auto'],
            transform:[[],[],[],['0.823','0.823']]
         },
         {
            id:'Group2',
            display:'none',
            type:'group',
            rect:['63','91px','331','157','auto','auto'],
            c:[
            {
               id:'Group',
               display:'none',
               type:'group',
               rect:['37px','0px','76','83','auto','auto'],
               c:[
               {
                  id:'Text',
                  display:'none',
                  type:'text',
                  rect:['0px','0px','76px','35px','auto','auto'],
                  text:"3",
                  font:['Fabada-regular',35,"rgba(255,255,255,1.00)","normal","none",""]
               },
               {
                  id:'TextCopy',
                  display:'none',
                  type:'text',
                  rect:['0px','48px','76px','35px','auto','auto'],
                  text:"4",
                  font:['Fabada-regular',35,"rgba(255,255,255,1.00)","normal","none",""]
               },
               {
                  id:'Rectangle',
                  display:'none',
                  type:'rect',
                  rect:['17px','39px','42px','6px','auto','auto'],
                  fill:["rgba(255,252,252,1.00)"],
                  stroke:[0,"rgba(0,0,0,1)","none"]
               }]
            },
            {
               id:'num_deno',
               display:'none',
               type:'image',
               rect:['0px','16px','331px','141px','auto','auto'],
               fill:["rgba(0,0,0,0)","../img/num_deno.png",'0px','0px']
            }]
         },
         {
            id:'Text2',
            display:'none',
            type:'text',
            rect:['346px','106px','400px','63px','auto','auto'],
            text:":Indica las partes que se toman de la unidad y/o entero",
            align:"center",
            font:['Fabada-regular',22,"rgba(255,255,255,1)","normal","none","normal"],
            textShadow:["rgba(0,0,0,0.65)",3,3,2]
         },
         {
            id:'Text2Copy',
            display:'none',
            type:'text',
            rect:['202px','224px','400px','63px','auto','auto'],
            text:":Indica las partes que se toman de un entero",
            align:"center",
            font:['Fabada-regular',22,"rgba(255,255,255,1)","normal","none","normal"],
            textShadow:["rgba(0,0,0,0.65)",3,3,2]
         },
         {
            id:'Group4',
            display:'none',
            type:'group',
            rect:['147','304','556','273','auto','auto'],
            c:[
            {
               id:'globo',
               display:'none',
               type:'image',
               rect:['0px','0px','556px','273px','auto','auto'],
               fill:["rgba(0,0,0,0)","../img/globo.png",'0px','0px']
            },
            {
               id:'Text3',
               display:'none',
               type:'text',
               rect:['80px','45px','412px','164px','auto','auto'],
               text:"Recuerda: Numerador y Denominador, ahora ya los conoces, desde hoy ya no puedes decir el número de arriba ¡No! Recuerda se llama NUMERADOR. ¡No! El número de abajo, se llama DENOMINADOR.<br>",
               align:"center",
               font:['Fabada-regular',19,"rgba(255,255,255,1)","normal","underline","normal"]
            }]
         },
         {
            id:'Group6',
            display:'none',
            type:'group',
            rect:['94','63','31','68','auto','auto'],
            c:[
            {
               id:'Text5',
               display:'none',
               type:'text',
               rect:['9px','0px','auto','auto','auto','auto'],
               text:"3",
               align:"center",
               font:['Fabada-regular',26,"rgba(255,255,255,1)","normal","none","normal"]
            },
            {
               id:'Text5Copy',
               display:'none',
               type:'text',
               rect:['9px','37px','auto','auto','auto','auto'],
               text:"4",
               align:"center",
               font:['Fabada-regular',26,"rgba(255,255,255,1)","normal","none","normal"]
            },
            {
               id:'Rectangle3',
               display:'none',
               type:'rect',
               rect:['0px','31px','31px','4px','auto','auto'],
               fill:["rgba(255,252,252,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            }]
         },
         {
            id:'Text6',
            display:'none',
            type:'text',
            rect:['150px','72px','659px','73px','auto','auto'],
            text:"El Denominador es 4 indica que el entero se tiene que dividir en 4 partes iguales<br>",
            align:"justify",
            font:['Fabada-regular',20,"rgba(255,255,255,1)","normal","none","normal"],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'Text6Copy',
            display:'none',
            type:'text',
            rect:['150px','352px','659px','73px','auto','auto'],
            text:"El numerador es 3, lo que indica que se toman 3 partes iguales del entero antes dividido.<br>",
            align:"justify",
            font:['Fabada-regular',20,"rgba(255,255,255,1)","normal","none","normal"],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'cuadro',
            display:'none',
            type:'image',
            rect:['335px','132px','206px','206px','auto','auto'],
            fill:["rgba(0,0,0,0)","../img/cuadro.png",'0px','0px']
         },
         {
            id:'cuadro2',
            display:'none',
            type:'image',
            rect:['335px','417px','206px','206px','auto','auto'],
            fill:["rgba(0,0,0,0)","../img/cuadro2.png",'0px','0px']
         },
         {
            id:'Text6Copy3',
            display:'none',
            type:'text',
            rect:['71px','71px','296px','39px','auto','auto'],
            text:"Representa gráficamente <br>",
            align:"justify",
            font:['Fabada-regular',20,"rgba(255,255,255,1)","normal","none","normal"],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'Text8',
            display:'none',
            type:'text',
            rect:['71px','125px','725px','39px','auto','auto'],
            text:"Cuando no se puede satisfacer el numerador con un entero, puedes usar más, por ejemplo:<br>",
            align:"justify",
            font:['Fabada-regular',18,"rgba(255,255,255,1)","normal","none","normal"],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'Text8Copy',
            display:'none',
            type:'text',
            rect:['121px','182px','388px','36px','auto','auto'],
            text:"1.- Dividimos el entero en 3 partes iguales:<br>",
            align:"justify",
            font:['Fabada-regular',18,"rgba(255,255,255,1)","normal","none","normal"],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'Text8Copy2',
            display:'none',
            type:'text',
            rect:['121px','242px','388px','36px','auto','auto'],
            text:"2.- Tenemos que tomar 8 partes.<br>",
            align:"justify",
            font:['Fabada-regular',18,"rgba(255,255,255,1)","normal","none","normal"],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'Text8Copy3',
            display:'none',
            type:'text',
            rect:['121px','280px','388px','68px','auto','auto'],
            text:"3.-Como no es suficiente dibujamos un entero más dividido en 3 partes.<br>",
            align:"justify",
            font:['Fabada-regular',18,"rgba(255,255,255,1)","normal","none","normal"],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'Text8Copy4',
            display:'none',
            type:'text',
            rect:['121px','341px','388px','36px','auto','auto'],
            text:"4.- Aún no tenemos 8 partes iguales por lo tanto necesitamos un entero más.<br>",
            align:"justify",
            font:['Fabada-regular',18,"rgba(255,255,255,1)","normal","none","normal"],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'Text8Copy5',
            display:'none',
            type:'text',
            rect:['121px','426px','388px','36px','auto','auto'],
            text:"5.- Ahora sí se pueden tomar 8 partes.<br>",
            align:"justify",
            font:['Fabada-regular',18,"rgba(255,255,255,1)","normal","none","normal"],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'Group7',
            display:'none',
            type:'group',
            rect:['169','358','267','131','auto','auto'],
            c:[
            {
               id:'globo2',
               display:'none',
               type:'image',
               rect:['0px','0px','267px','131px','auto','auto'],
               fill:["rgba(0,0,0,0)","../img/globo.png",'0px','0px']
            },
            {
               id:'Text7',
               display:'none',
               type:'text',
               rect:['48px','28px','180px','39px','auto','auto'],
               text:"Ahora llego tú turno<br>",
               align:"justify",
               font:['Fabada-regular',20,"rgba(255,255,255,1)","normal","none","normal"]
            }]
         },
         {
            id:'Group8',
            display:'none',
            type:'group',
            rect:['318px','63px','29','54','auto','auto'],
            c:[
            {
               id:'Text9',
               display:'none',
               type:'text',
               rect:['10px','0px','auto','25px','auto','auto'],
               text:"8",
               align:"justify",
               font:['Fabada-regular',20,"rgba(255,255,255,1)","normal","none","normal"]
            },
            {
               id:'Text9Copy',
               display:'none',
               type:'text',
               rect:['10px','29px','auto','25px','auto','auto'],
               text:"3",
               align:"justify",
               font:['Fabada-regular',20,"rgba(255,255,255,1)","normal","none","normal"]
            },
            {
               id:'Rectangle4',
               display:'none',
               type:'rect',
               rect:['0px','23px','29px','4px','auto','auto'],
               fill:["rgba(255,252,252,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            }]
         },
         {
            id:'Group11',
            display:'none',
            type:'group',
            rect:['78px','252px','556','273','auto','auto'],
            c:[
            {
               id:'globo4',
               display:'none',
               type:'image',
               rect:['0px','0px','556px','273px','auto','auto'],
               fill:["rgba(0,0,0,0)","../img/globo.png",'0px','0px']
            },
            {
               id:'Text11',
               display:'none',
               type:'text',
               rect:['59px','60px','440px','113px','auto','auto'],
               text:"Recuerda el denominador indica las partes iguales en que se divide el entero… en este caso es 3 y tienes que tomar 8 ¿?<br>",
               align:"center",
               font:['Fabada-regular',20,"rgba(255,255,255,1)","normal","none","normal"]
            }]
         },
         {
            id:'cuadro3',
            display:'none',
            type:'image',
            rect:['576px','158px','134px','134px','auto','auto'],
            fill:["rgba(0,0,0,0)","../img/cuadro3.png",'0px','0px']
         },
         {
            id:'cuadro3Copy',
            display:'none',
            type:'image',
            rect:['576px','298px','134px','134px','auto','auto'],
            fill:["rgba(0,0,0,0)","../img/cuadro3.png",'0px','0px']
         },
         {
            id:'cuadro3Copy2',
            display:'none',
            type:'image',
            rect:['576px','438px','134px','134px','auto','auto'],
            fill:["rgba(0,0,0,0)","../img/cuadro3.png",'0px','0px']
         },
         {
            id:'recfinal',
            display:'none',
            type:'image',
            rect:['577px','159px','134px','414px','auto','auto'],
            fill:["rgba(0,0,0,0)","../img/recfinal.png",'0px','0px']
         },
         {
            id:'btn_cocient',
            display:'none',
            type:'rect',
            rect:['285px','212px','82px','21px','auto','auto'],
            opacity:0.33962263916648,
            fill:["rgba(205,130,64,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'link',
            display:'none',
            type:'image',
            rect:['265px','249px','416px','280px','auto','auto'],
            fill:["rgba(0,0,0,0)","../img/link.png",'0px','0px']
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
         "${_Group7}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_btn_cocient}": [
            ["style", "top", '212px'],
            ["style", "height", '21px'],
            ["style", "opacity", '0.33962263916648'],
            ["style", "display", 'none'],
            ["color", "background-color", 'rgba(205,130,64,1.00)']
         ],
         "${_cuadro3}": [
            ["style", "top", '158px'],
            ["style", "display", 'none'],
            ["style", "height", '134px'],
            ["style", "opacity", '0'],
            ["style", "left", '576px'],
            ["style", "width", '134px']
         ],
         "${_btn_sig2}": [
            ["style", "top", '311px'],
            ["style", "left", '809px'],
            ["style", "display", 'none']
         ],
         "${_Rectangle}": [
            ["style", "top", '39px'],
            ["style", "height", '6px'],
            ["color", "background-color", 'rgba(255,252,252,1.00)'],
            ["style", "left", '17px'],
            ["style", "display", 'none']
         ],
         "${_Text2}": [
            ["subproperty", "textShadow.blur", '2px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '486px'],
            ["style", "font-size", '22px'],
            ["style", "top", '106px'],
            ["style", "height", '63px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_Text8}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '171px'],
            ["style", "font-size", '18px'],
            ["style", "top", '125px'],
            ["style", "text-align", 'justify'],
            ["style", "height", '39px'],
            ["style", "display", 'none'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "opacity", '0'],
            ["style", "width", '725px']
         ],
         "${_Text3Copy3}": [
            ["style", "top", '163px'],
            ["style", "font-size", '14px'],
            ["style", "left", '84px'],
            ["style", "width", '21px']
         ],
         "${_num_deno}": [
            ["style", "top", '16px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_Text9Copy}": [
            ["style", "top", '29px'],
            ["style", "display", 'none'],
            ["style", "left", '10px'],
            ["style", "height", '25px']
         ],
         "${_btn_sig1}": [
            ["style", "top", '311px'],
            ["style", "left", '809px'],
            ["style", "display", 'none']
         ],
         "${_Group6}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '60px']
         ],
         "${_txt_actividad1}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '-539px'],
            ["style", "font-size", '20px'],
            ["style", "top", '64px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["style", "height", '175px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "line-height", '27px'],
            ["style", "opacity", '0']
         ],
         "${_cuadro3Copy2}": [
            ["style", "top", '438px'],
            ["style", "display", 'none'],
            ["style", "height", '134px'],
            ["style", "opacity", '0'],
            ["style", "left", '576px'],
            ["style", "width", '134px']
         ],
         "${_Rectangle4}": [
            ["style", "height", '4px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "top", '23px']
         ],
         "${_Text8Copy2}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '191px'],
            ["style", "font-size", '18px'],
            ["style", "top", '242px'],
            ["style", "text-align", 'justify'],
            ["style", "display", 'none'],
            ["style", "height", '36px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "opacity", '0'],
            ["style", "width", '388px']
         ],
         "${_grafica}": [
            ["style", "top", '52px'],
            ["style", "opacity", '0.20754716981132'],
            ["style", "left", '399px'],
            ["style", "display", 'none']
         ],
         "${_cuadro3Copy}": [
            ["style", "top", '298px'],
            ["style", "display", 'none'],
            ["style", "height", '134px'],
            ["style", "opacity", '0'],
            ["style", "left", '576px'],
            ["style", "width", '134px']
         ],
         "${_mas_principal}": [
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "opacity", '0.5467130541801453'],
            ["style", "height", '696px'],
            ["style", "width", '900px']
         ],
         "${_Text6Copy}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '240px'],
            ["style", "font-size", '20px'],
            ["style", "top", '352px'],
            ["style", "text-align", 'justify'],
            ["style", "display", 'none'],
            ["style", "height", '73px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "opacity", '0'],
            ["style", "width", '659px']
         ],
         "${_btn_sig}": [
            ["style", "top", '311px'],
            ["style", "left", '809px'],
            ["style", "display", 'none']
         ],
         "${_Text5Copy}": [
            ["style", "display", 'none'],
            ["style", "top", '37px'],
            ["style", "left", '9px'],
            ["style", "font-size", '26px']
         ],
         "${_mascara_link}": [
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "height", '696px'],
            ["style", "opacity", '0.5467130541801453'],
            ["style", "display", 'none'],
            ["style", "width", '900px']
         ],
         "${_mono_desenfoque2}": [
            ["style", "top", '321px'],
            ["transform", "rotateZ", '-90deg'],
            ["style", "display", 'block'],
            ["style", "opacity", '0.40880503144654'],
            ["style", "left", '993px']
         ],
         "${_Group11}": [
            ["style", "top", '252px'],
            ["style", "opacity", '0'],
            ["style", "left", '78px'],
            ["style", "display", 'none']
         ],
         "${_Rectangle3}": [
            ["style", "top", '31px'],
            ["style", "display", 'none'],
            ["style", "height", '4px'],
            ["style", "left", '0px'],
            ["style", "width", '31px']
         ],
         "${_Text8Copy}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '211px'],
            ["style", "font-size", '18px'],
            ["style", "top", '182px'],
            ["style", "text-align", 'justify'],
            ["style", "width", '388px'],
            ["style", "height", '36px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "opacity", '0'],
            ["style", "display", 'none']
         ],
         "${_Group4}": [
            ["style", "top", '304px'],
            ["style", "display", 'none'],
            ["style", "height", '273px'],
            ["style", "opacity", '0'],
            ["style", "left", '147px'],
            ["style", "width", '556px']
         ],
         "${_caminar}": [
            ["style", "display", 'none'],
            ["style", "top", '315px']
         ],
         "${_Text9}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "left", '10px'],
            ["style", "height", '25px']
         ],
         "${_cuadro2}": [
            ["style", "top", '417px'],
            ["style", "opacity", '0'],
            ["style", "left", '335px'],
            ["style", "display", 'none']
         ],
         "${_globo}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_cuadro}": [
            ["style", "top", '132px'],
            ["style", "opacity", '0'],
            ["style", "left", '335px'],
            ["style", "display", 'none']
         ],
         "${_Text8Copy4}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '191px'],
            ["style", "font-size", '18px'],
            ["style", "top", '341px'],
            ["style", "text-align", 'justify'],
            ["style", "height", '36px'],
            ["style", "display", 'none'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "opacity", '0'],
            ["style", "width", '388px']
         ],
         "${_Text7}": [
            ["style", "height", '39px'],
            ["style", "display", 'none'],
            ["style", "left", '48px'],
            ["style", "top", '28px']
         ],
         "${_Group8}": [
            ["style", "top", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '418px'],
            ["style", "display", 'none']
         ],
         "${_Text3}": [
            ["style", "top", '45px'],
            ["style", "font-size", '19px'],
            ["style", "text-decoration", 'none'],
            ["style", "height", '164px'],
            ["style", "display", 'none'],
            ["style", "left", '80px'],
            ["style", "width", '412px']
         ],
         "${_TextCopy}": [
            ["style", "top", '48px'],
            ["style", "width", '76px'],
            ["style", "display", 'none'],
            ["style", "height", '35px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "font-size", '35px']
         ],
         "${_Text5}": [
            ["style", "display", 'none'],
            ["style", "top", '0px'],
            ["style", "left", '9px'],
            ["style", "font-size", '26px']
         ],
         "${_Text6Copy3}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '71px'],
            ["style", "font-size", '20px'],
            ["style", "top", '71px'],
            ["style", "text-align", 'justify'],
            ["style", "width", '296px'],
            ["style", "display", 'none'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "opacity", '0'],
            ["style", "height", '39px']
         ],
         "${_tria_eje_1}": [
            ["style", "top", '412px'],
            ["style", "display", 'none'],
            ["style", "height", '9px'],
            ["style", "opacity", '1'],
            ["style", "left", '541px'],
            ["style", "width", '14px']
         ],
         "${_txt_play}": [
            ["style", "left", '265px'],
            ["style", "top", '239px']
         ],
         "${_iniciar}": [
            ["style", "top", '133px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", 'Fabada-regular'],
            ["style", "left", '0px'],
            ["style", "font-size", '35px']
         ],
         "${_robot}": [
            ["style", "top", '-266px'],
            ["transform", "scaleY", '0.8233'],
            ["transform", "scaleX", '0.8233'],
            ["style", "height", '371px'],
            ["style", "display", 'none'],
            ["style", "left", '-18px'],
            ["style", "width", '292px']
         ],
         "${_Text2Copy}": [
            ["subproperty", "textShadow.blur", '2px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '342px'],
            ["style", "font-size", '22px'],
            ["style", "top", '224px'],
            ["style", "height", '63px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_play2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0.66666666666667'],
            ["style", "left", '133px']
         ],
         "${_recfinal}": [
            ["style", "top", '159px'],
            ["style", "left", '577px'],
            ["style", "display", 'none']
         ],
         "${_globo4}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_btn_sig3}": [
            ["style", "top", '311px'],
            ["style", "left", '809px'],
            ["style", "display", 'none']
         ],
         "${_Text11}": [
            ["style", "top", '60px'],
            ["style", "height", '113px'],
            ["style", "display", 'none'],
            ["style", "left", '59px'],
            ["style", "width", '440px']
         ],
         "${_txt_actividad2}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '-479px'],
            ["style", "font-size", '20px'],
            ["style", "top", '39px'],
            ["style", "opacity", '0'],
            ["style", "text-align", 'left'],
            ["style", "line-height", '27px'],
            ["style", "display", 'none'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "height", '67px'],
            ["style", "width", '574px']
         ],
         "${_Text8Copy3}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '191px'],
            ["style", "font-size", '18px'],
            ["style", "top", '280px'],
            ["style", "text-align", 'justify'],
            ["style", "width", '388px'],
            ["style", "display", 'none'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "opacity", '0'],
            ["style", "height", '68px']
         ],
         "${_Group}": [
            ["style", "top", '0px'],
            ["style", "left", '37px'],
            ["style", "display", 'none']
         ],
         "${_Text3Copy2}": [
            ["style", "top", '171px'],
            ["style", "width", '21px'],
            ["style", "left", '71px'],
            ["style", "font-size", '20px']
         ],
         "${_Group2}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '-217px']
         ],
         "${_Text8Copy5}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '191px'],
            ["style", "font-size", '18px'],
            ["style", "top", '426px'],
            ["style", "text-align", 'justify'],
            ["style", "width", '388px'],
            ["style", "height", '36px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "opacity", '0'],
            ["style", "display", 'none']
         ],
         "${_Text6}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '220px'],
            ["style", "font-size", '20px'],
            ["style", "top", '72px'],
            ["style", "text-align", 'justify'],
            ["style", "display", 'none'],
            ["style", "height", '73px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "opacity", '0'],
            ["style", "width", '659px']
         ],
         "${_link}": [
            ["style", "top", '249px'],
            ["style", "left", '265px'],
            ["style", "display", 'none']
         ],
         "${_Text}": [
            ["style", "top", '0px'],
            ["style", "font-size", '35px'],
            ["style", "display", 'none'],
            ["style", "height", '35px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '76px']
         ],
         "${_Text3Copy}": [
            ["style", "top", '175px'],
            ["style", "width", '21px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '696px'],
            ["style", "width", '900px']
         ],
         "${_mono_desenfoque}": [
            ["style", "top", '322px'],
            ["style", "display", 'block'],
            ["style", "left", '997px'],
            ["transform", "rotateZ", '-90deg']
         ],
         "${_globo2}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '131px'],
            ["style", "left", '0px'],
            ["style", "width", '267px']
         ],
         "${_Text6Copy2}": [
            ["style", "top", '72px'],
            ["style", "font-size", '20px'],
            ["style", "height", '73px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "left", '150px'],
            ["style", "width", '659px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 78500,
         autoPlay: false,
         labels: {
            "espec_1": 9250,
            "espec_2": 18500,
            "espec_3": 34871,
            "fin": 74750
         },
         timeline: [
            { id: "eid136", tween: [ "style", "${_mono_desenfoque2}", "left", '633px', { fromValue: '993px'}], position: 0, duration: 500 },
            { id: "eid137", tween: [ "style", "${_mono_desenfoque}", "left", '637px', { fromValue: '997px'}], position: 0, duration: 500 },
            { id: "eid4001", tween: [ "style", "${_Rectangle3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4128", tween: [ "style", "${_Rectangle3}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3767", tween: [ "style", "${_Text8Copy4}", "left", '121px', { fromValue: '191px'}], position: 67932, duration: 1000, easing: "easeInOutBack" },
            { id: "eid3134", tween: [ "style", "${_grafica}", "opacity", '1', { fromValue: '0.20754699409008026'}], position: 3529, duration: 721 },
            { id: "eid3289", tween: [ "style", "${_grafica}", "opacity", '0', { fromValue: '1'}], position: 9250, duration: 750 },
            { id: "eid3990", tween: [ "style", "${_Text8Copy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4117", tween: [ "style", "${_Text8Copy4}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid141", tween: [ "style", "${_mono_desenfoque2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid3773", tween: [ "style", "${_Text8Copy2}", "opacity", '1', { fromValue: '0'}], position: 59265, duration: 1000, easing: "easeInOutBack" },
            { id: "eid4014", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4141", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid4009", tween: [ "style", "${_Group2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4136", tween: [ "style", "${_Group2}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3587", tween: [ "style", "${_Group2}", "display", 'none', { fromValue: 'block'}], position: 19321, duration: 0, easing: "easeInOutBack" },
            { id: "eid4008", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4135", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3588", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 19321, duration: 0, easing: "easeInOutBack" },
            { id: "eid3749", tween: [ "style", "${_Text8}", "opacity", '1', { fromValue: '0'}], position: 52500, duration: 1082, easing: "easeInOutBack" },
            { id: "eid3591", tween: [ "style", "${_btn_sig1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutBack" },
            { id: "eid3590", tween: [ "style", "${_btn_sig1}", "display", 'block', { fromValue: 'none'}], position: 9250, duration: 0, easing: "easeInOutBack" },
            { id: "eid3668", tween: [ "style", "${_btn_sig1}", "display", 'none', { fromValue: 'block'}], position: 19321, duration: 0, easing: "easeInOutBack" },
            { id: "eid3981", tween: [ "style", "${_globo4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4108", tween: [ "style", "${_globo4}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3994", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4121", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3985", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4112", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3978", tween: [ "style", "${_cuadro3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4105", tween: [ "style", "${_cuadro3}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3924", tween: [ "style", "${_cuadro3}", "display", 'none', { fromValue: 'block'}], position: 74368, duration: 0, easing: "easeInOutBack" },
            { id: "eid3750", tween: [ "style", "${_Text8}", "left", '71px', { fromValue: '171px'}], position: 52500, duration: 1082, easing: "easeInOutBack" },
            { id: "eid2363", tween: [ "style", "${_tria_eje_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid3765", tween: [ "style", "${_Text8Copy2}", "left", '121px', { fromValue: '191px'}], position: 59265, duration: 1000, easing: "easeInOutBack" },
            { id: "eid2500", tween: [ "style", "${_btn_sig}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2499", tween: [ "style", "${_btn_sig}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid3589", tween: [ "style", "${_btn_sig}", "display", 'none', { fromValue: 'block'}], position: 9250, duration: 0, easing: "easeInOutBack" },
            { id: "eid3975", tween: [ "style", "${_btn_sig3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid3928", tween: [ "style", "${_btn_sig3}", "display", 'none', { fromValue: 'none'}], position: 147, duration: 0, easing: "easeInOutBack" },
            { id: "eid3929", tween: [ "style", "${_btn_sig3}", "display", 'block', { fromValue: 'none'}], position: 34871, duration: 0, easing: "easeInOutBack" },
            { id: "eid3982", tween: [ "style", "${_Group8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4109", tween: [ "style", "${_Group8}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3987", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4114", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid204", tween: [ "style", "${_robot}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid206", tween: [ "style", "${_robot}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
            { id: "eid3620", tween: [ "style", "${_Group6}", "opacity", '1', { fromValue: '0'}], position: 19663, duration: 837, easing: "easeInOutBack" },
            { id: "eid3682", tween: [ "style", "${_Group6}", "opacity", '0', { fromValue: '1'}], position: 33871, duration: 1000, easing: "easeInOutBack" },
            { id: "eid3653", tween: [ "style", "${_Text6Copy}", "left", '150px', { fromValue: '240px'}], position: 27366, duration: 884, easing: "easeInOutBack" },
            { id: "eid139", tween: [ "style", "${_caminar}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid140", tween: [ "style", "${_caminar}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid146", tween: [ "style", "${_caminar}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0 },
            { id: "eid4006", tween: [ "style", "${_globo}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4133", tween: [ "style", "${_globo}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3998", tween: [ "style", "${_Text6Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4125", tween: [ "style", "${_Text6Copy}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3687", tween: [ "style", "${_Text6Copy}", "display", 'none', { fromValue: 'block'}], position: 34871, duration: 0, easing: "easeInOutBack" },
            { id: "eid3776", tween: [ "style", "${_Text8Copy5}", "opacity", '1', { fromValue: '0'}], position: 72615, duration: 1000, easing: "easeInOutBack" },
            { id: "eid3635", tween: [ "style", "${_Text6}", "left", '150px', { fromValue: '220px'}], position: 20500, duration: 827, easing: "easeInOutBack" },
            { id: "eid3939", tween: [ "style", "${_btn_cocient}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutBack" },
            { id: "eid3938", tween: [ "style", "${_btn_cocient}", "display", 'block', { fromValue: 'none'}], position: 4750, duration: 0, easing: "easeInOutBack" },
            { id: "eid3940", tween: [ "style", "${_btn_cocient}", "display", 'none', { fromValue: 'block'}], position: 9250, duration: 0, easing: "easeInOutBack" },
            { id: "eid3564", tween: [ "style", "${_Group4}", "opacity", '1', { fromValue: '0'}], position: 16841, duration: 750, easing: "easeInOutBack" },
            { id: "eid3581", tween: [ "style", "${_Group4}", "opacity", '0', { fromValue: '1'}], position: 18500, duration: 821, easing: "easeInOutBack" },
            { id: "eid3983", tween: [ "style", "${_Rectangle4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4110", tween: [ "style", "${_Rectangle4}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3979", tween: [ "style", "${_Group11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4106", tween: [ "style", "${_Group11}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3744", tween: [ "style", "${_Group11}", "display", 'none', { fromValue: 'block'}], position: 52568, duration: 0, easing: "easeInOutBack" },
            { id: "eid3977", tween: [ "style", "${_cuadro3Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4104", tween: [ "style", "${_cuadro3Copy}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3923", tween: [ "style", "${_cuadro3Copy}", "display", 'none', { fromValue: 'block'}], position: 74368, duration: 0, easing: "easeInOutBack" },
            { id: "eid3790", tween: [ "style", "${_cuadro3Copy2}", "opacity", '1', { fromValue: '0.000000'}], position: 72000, duration: 750, easing: "easeInOutBack" },
            { id: "eid138", tween: [ "style", "${_mono_desenfoque2}", "opacity", '0.40880503144654', { fromValue: '0.40880503144654'}], position: 500, duration: 0 },
            { id: "eid3127", tween: [ "style", "${_grafica}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid3126", tween: [ "style", "${_grafica}", "display", 'block', { fromValue: 'none'}], position: 3529, duration: 0 },
            { id: "eid3458", tween: [ "style", "${_grafica}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0, easing: "easeInOutBack" },
            { id: "eid3763", tween: [ "style", "${_Text8Copy}", "opacity", '1', { fromValue: '0'}], position: 55847, duration: 602, easing: "easeInOutBack" },
            { id: "eid3766", tween: [ "style", "${_Text8Copy3}", "left", '121px', { fromValue: '191px'}], position: 62500, duration: 1000, easing: "easeInOutBack" },
            { id: "eid3786", tween: [ "style", "${_cuadro3Copy}", "opacity", '1', { fromValue: '0.000000'}], position: 66250, duration: 634, easing: "easeInOutBack" },
            { id: "eid3991", tween: [ "style", "${_Text8Copy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4118", tween: [ "style", "${_Text8Copy3}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3774", tween: [ "style", "${_Text8Copy3}", "opacity", '1', { fromValue: '0'}], position: 62500, duration: 1000, easing: "easeInOutBack" },
            { id: "eid3988", tween: [ "style", "${_globo2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4115", tween: [ "style", "${_globo2}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid209", tween: [ "style", "${_robot}", "top", '436px', { fromValue: '-266px'}], position: 10000, duration: 3000, easing: "easeInOutBack" },
            { id: "eid3053", tween: [ "style", "${_robot}", "top", '-334px', { fromValue: '436px'}], position: 76750, duration: 1750, easing: "easeInOutBack" },
            { id: "eid3708", tween: [ "style", "${_Group7}", "opacity", '1', { fromValue: '0'}], position: 35160, duration: 675, easing: "easeInOutBack" },
            { id: "eid3721", tween: [ "style", "${_Group7}", "opacity", '0', { fromValue: '1'}], position: 38000, duration: 500, easing: "easeInOutBack" },
            { id: "eid2372", tween: [ "style", "${_txt_actividad1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2763", tween: [ "style", "${_txt_actividad2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutBack" },
            { id: "eid3504", tween: [ "style", "${_Group2}", "opacity", '1', { fromValue: '0'}], position: 10000, duration: 750, easing: "easeInOutBack" },
            { id: "eid3584", tween: [ "style", "${_Group2}", "opacity", '0', { fromValue: '1'}], position: 18500, duration: 821, easing: "easeInOutBack" },
            { id: "eid3718", tween: [ "style", "${_Group8}", "left", '368px', { fromValue: '418px'}], position: 37318, duration: 682, easing: "easeInOutBack" },
            { id: "eid3768", tween: [ "style", "${_Text8Copy5}", "left", '121px', { fromValue: '191px'}], position: 72615, duration: 1000, easing: "easeInOutBack" },
            { id: "eid3711", tween: [ "style", "${_Text6Copy3}", "opacity", '1', { fromValue: '0'}], position: 36500, duration: 716, easing: "easeInOutBack" },
            { id: "eid3717", tween: [ "style", "${_Group8}", "opacity", '1', { fromValue: '0'}], position: 37318, duration: 682, easing: "easeInOutBack" },
            { id: "eid3997", tween: [ "style", "${_cuadro}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4124", tween: [ "style", "${_cuadro}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3686", tween: [ "style", "${_cuadro}", "display", 'none', { fromValue: 'block'}], position: 34871, duration: 0, easing: "easeInOutBack" },
            { id: "eid3621", tween: [ "style", "${_Group6}", "left", '94px', { fromValue: '60px'}], position: 19663, duration: 837, easing: "easeInOutBack" },
            { id: "eid3775", tween: [ "style", "${_Text8Copy4}", "opacity", '1', { fromValue: '0'}], position: 67932, duration: 1000, easing: "easeInOutBack" },
            { id: "eid3779", tween: [ "style", "${_cuadro3}", "opacity", '1', { fromValue: '0'}], position: 57631, duration: 631, easing: "easeInOutBack" },
            { id: "eid4012", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4139", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3639", tween: [ "style", "${_cuadro}", "opacity", '1', { fromValue: '0'}], position: 25000, duration: 1000, easing: "easeInOutBack" },
            { id: "eid3684", tween: [ "style", "${_cuadro}", "opacity", '0', { fromValue: '1'}], position: 33871, duration: 1000, easing: "easeInOutBack" },
            { id: "eid3514", tween: [ "style", "${_Text2Copy}", "left", '215px', { fromValue: '342px'}], position: 10648, duration: 750, easing: "easeInOutBack" },
            { id: "eid3926", tween: [ "style", "${_recfinal}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutBack" },
            { id: "eid3925", tween: [ "style", "${_recfinal}", "display", 'block', { fromValue: 'none'}], position: 74368, duration: 0, easing: "easeInOutBack" },
            { id: "eid4000", tween: [ "style", "${_Group6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4127", tween: [ "style", "${_Group6}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3689", tween: [ "style", "${_Group6}", "display", 'none', { fromValue: 'block'}], position: 34871, duration: 0, easing: "easeInOutBack" },
            { id: "eid3941", tween: [ "style", "${_link}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutBack" },
            { id: "eid3515", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 10648, duration: 750, easing: "easeInOutBack" },
            { id: "eid3582", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 18500, duration: 821, easing: "easeInOutBack" },
            { id: "eid4013", tween: [ "style", "${_TextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4140", tween: [ "style", "${_TextCopy}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid145", tween: [ "style", "${_caminar}", "top", '-345px', { fromValue: '315px'}], position: 750, duration: 2500 },
            { id: "eid4002", tween: [ "style", "${_Text5Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4129", tween: [ "style", "${_Text5Copy}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3132", tween: [ "style", "${_grafica}", "left", '69px', { fromValue: '399px'}], position: 3529, duration: 721 },
            { id: "eid3288", tween: [ "style", "${_grafica}", "left", '-201px', { fromValue: '69px'}], position: 9250, duration: 750 },
            { id: "eid3652", tween: [ "style", "${_Text6Copy}", "opacity", '1', { fromValue: '0'}], position: 27366, duration: 884, easing: "easeInOutBack" },
            { id: "eid3683", tween: [ "style", "${_Text6Copy}", "opacity", '0', { fromValue: '1'}], position: 33871, duration: 1000, easing: "easeInOutBack" },
            { id: "eid3740", tween: [ "style", "${_Group11}", "opacity", '1', { fromValue: '0'}], position: 42000, duration: 750, easing: "easeInOutBack" },
            { id: "eid3743", tween: [ "style", "${_Group11}", "opacity", '0', { fromValue: '1'}], position: 51818, duration: 750, easing: "easeInOutBack" },
            { id: "eid3989", tween: [ "style", "${_Text8Copy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4116", tween: [ "style", "${_Text8Copy5}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid142", tween: [ "style", "${_mono_desenfoque}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid3996", tween: [ "style", "${_cuadro2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4123", tween: [ "style", "${_cuadro2}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3685", tween: [ "style", "${_cuadro2}", "display", 'none', { fromValue: 'block'}], position: 34871, duration: 0, easing: "easeInOutBack" },
            { id: "eid3999", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4126", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3688", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 34871, duration: 0, easing: "easeInOutBack" },
            { id: "eid3984", tween: [ "style", "${_Text9Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4111", tween: [ "style", "${_Text9Copy}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3992", tween: [ "style", "${_Text8Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4119", tween: [ "style", "${_Text8Copy2}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid4007", tween: [ "style", "${_Text2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4134", tween: [ "style", "${_Text2Copy}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3586", tween: [ "style", "${_Text2Copy}", "display", 'none', { fromValue: 'block'}], position: 19321, duration: 0, easing: "easeInOutBack" },
            { id: "eid3980", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4107", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3986", tween: [ "style", "${_Group7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4113", tween: [ "style", "${_Group7}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3722", tween: [ "style", "${_Group7}", "display", 'none', { fromValue: 'block'}], position: 38500, duration: 0, easing: "easeInOutBack" },
            { id: "eid3966", tween: [ "style", "${_mascara_link}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutBack" },
            { id: "eid4010", tween: [ "style", "${_num_deno}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4137", tween: [ "style", "${_num_deno}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3976", tween: [ "style", "${_cuadro3Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4103", tween: [ "style", "${_cuadro3Copy2}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3922", tween: [ "style", "${_cuadro3Copy2}", "display", 'none', { fromValue: 'block'}], position: 74368, duration: 0, easing: "easeInOutBack" },
            { id: "eid4005", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4132", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3764", tween: [ "style", "${_Text8Copy}", "left", '121px', { fromValue: '211px'}], position: 55847, duration: 602, easing: "easeInOutBack" },
            { id: "eid3516", tween: [ "style", "${_Text2Copy}", "opacity", '1', { fromValue: '0'}], position: 10648, duration: 750, easing: "easeInOutBack" },
            { id: "eid3583", tween: [ "style", "${_Text2Copy}", "opacity", '0', { fromValue: '1'}], position: 18500, duration: 821, easing: "easeInOutBack" },
            { id: "eid3993", tween: [ "style", "${_Text8Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4120", tween: [ "style", "${_Text8Copy}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid4003", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4130", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3669", tween: [ "style", "${_btn_sig2}", "display", 'block', { fromValue: 'none'}], position: 19321, duration: 0, easing: "easeInOutBack" },
            { id: "eid3927", tween: [ "style", "${_btn_sig2}", "display", 'none', { fromValue: 'block'}], position: 34871, duration: 0, easing: "easeInOutBack" },
            { id: "eid3656", tween: [ "style", "${_cuadro2}", "opacity", '1', { fromValue: '0'}], position: 32250, duration: 886, easing: "easeInOutBack" },
            { id: "eid3681", tween: [ "style", "${_cuadro2}", "opacity", '0', { fromValue: '1'}], position: 33871, duration: 1000, easing: "easeInOutBack" },
            { id: "eid3503", tween: [ "style", "${_Group2}", "left", '63px', { fromValue: '-217px'}], position: 10000, duration: 750, easing: "easeInOutBack" },
            { id: "eid3513", tween: [ "style", "${_Text2}", "left", '358px', { fromValue: '486px'}], position: 10648, duration: 750, easing: "easeInOutBack" },
            { id: "eid3995", tween: [ "style", "${_Text6Copy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4122", tween: [ "style", "${_Text6Copy3}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3636", tween: [ "style", "${_Text6}", "opacity", '1', { fromValue: '0'}], position: 20500, duration: 827, easing: "easeInOutBack" },
            { id: "eid3680", tween: [ "style", "${_Text6}", "opacity", '0', { fromValue: '1'}], position: 33871, duration: 1000, easing: "easeInOutBack" },
            { id: "eid4004", tween: [ "style", "${_Group4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4131", tween: [ "style", "${_Group4}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid3585", tween: [ "style", "${_Group4}", "display", 'none', { fromValue: 'block'}], position: 19321, duration: 0, easing: "easeInOutBack" },
            { id: "eid4011", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4138", tween: [ "style", "${_Group}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 }         ]
      }
   }
},
"caminar": {
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
      transform: [],
      rect: ['68px','99px','379px','282px','auto','auto'],
      id: 'contenedor',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,0.00)'],
      c: [
      {
         rect: ['258px','-425px','2048px','2700px','auto','auto'],
         id: 'caminar2',
         transform: [[0,0],['-90deg']],
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
            ["style", "height", '282px'],
            ["style", "top", '99px'],
            ["style", "left", '68px'],
            ["style", "width", '379px']
         ],
         "${_caminar2}": [
            ["style", "top", '-425px'],
            ["style", "left", '258px'],
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
            { id: "eid53", tween: [ "style", "${_caminar2}", "top", '-425px', { fromValue: '-425px'}], position: 0, duration: 0 },
            { id: "eid55", tween: [ "style", "${_caminar2}", "top", '-760px', { fromValue: '-425px'}], position: 83, duration: 0 },
            { id: "eid57", tween: [ "style", "${_caminar2}", "top", '-1101px', { fromValue: '-760px'}], position: 172, duration: 0 },
            { id: "eid59", tween: [ "style", "${_caminar2}", "top", '-1432px', { fromValue: '-1101px'}], position: 250, duration: 0 },
            { id: "eid121", tween: [ "style", "${_caminar2}", "top", '-1747px', { fromValue: '-1432px'}], position: 336, duration: 0 },
            { id: "eid65", tween: [ "style", "${_caminar2}", "top", '-2062px', { fromValue: '-1747px'}], position: 416, duration: 0 },
            { id: "eid69", tween: [ "style", "${_caminar2}", "top", '-422px', { fromValue: '-2062px'}], position: 500, duration: 0 },
            { id: "eid72", tween: [ "style", "${_caminar2}", "top", '-762px', { fromValue: '-422px'}], position: 588, duration: 0 },
            { id: "eid74", tween: [ "style", "${_caminar2}", "top", '-1093px', { fromValue: '-762px'}], position: 674, duration: 0 },
            { id: "eid76", tween: [ "style", "${_caminar2}", "top", '-1423px', { fromValue: '-1093px'}], position: 750, duration: 0 },
            { id: "eid78", tween: [ "style", "${_caminar2}", "top", '-1727px', { fromValue: '-1423px'}], position: 823, duration: 0 },
            { id: "eid82", tween: [ "style", "${_caminar2}", "top", '-2031px', { fromValue: '-1727px'}], position: 903, duration: 0 },
            { id: "eid85", tween: [ "style", "${_caminar2}", "top", '-429px', { fromValue: '-2031px'}], position: 1000, duration: 0 },
            { id: "eid87", tween: [ "style", "${_caminar2}", "top", '-727px', { fromValue: '-429px'}], position: 1077, duration: 0 },
            { id: "eid89", tween: [ "style", "${_caminar2}", "top", '-1045px', { fromValue: '-727px'}], position: 1163, duration: 0 },
            { id: "eid91", tween: [ "style", "${_caminar2}", "top", '-1357px', { fromValue: '-1045px'}], position: 1250, duration: 0 },
            { id: "eid93", tween: [ "style", "${_caminar2}", "top", '-1678px', { fromValue: '-1357px'}], position: 1336, duration: 0 },
            { id: "eid99", tween: [ "style", "${_caminar2}", "top", '-2008px', { fromValue: '-1678px'}], position: 1413, duration: 0 },
            { id: "eid104", tween: [ "style", "${_caminar2}", "top", '-413px', { fromValue: '-2008px'}], position: 1500, duration: 0 },
            { id: "eid106", tween: [ "style", "${_caminar2}", "top", '-753px', { fromValue: '-413px'}], position: 1578, duration: 0 },
            { id: "eid108", tween: [ "style", "${_caminar2}", "top", '-1073px', { fromValue: '-753px'}], position: 1664, duration: 0 },
            { id: "eid110", tween: [ "style", "${_caminar2}", "top", '-1400px', { fromValue: '-1073px'}], position: 1750, duration: 0 },
            { id: "eid112", tween: [ "style", "${_caminar2}", "top", '-1730px', { fromValue: '-1400px'}], position: 1839, duration: 0 },
            { id: "eid116", tween: [ "style", "${_caminar2}", "top", '-2050px', { fromValue: '-1730px'}], position: 1926, duration: 0 },
            { id: "eid120", tween: [ "style", "${_caminar2}", "top", '-431px', { fromValue: '-2050px'}], position: 2000, duration: 0 },
            { id: "eid66", tween: [ "style", "${_caminar2}", "left", '258px', { fromValue: '258px'}], position: 416, duration: 0 },
            { id: "eid70", tween: [ "style", "${_caminar2}", "left", '-278px', { fromValue: '258px'}], position: 500, duration: 0 },
            { id: "eid122", tween: [ "style", "${_caminar2}", "left", '-274px', { fromValue: '-278px'}], position: 588, duration: 0 },
            { id: "eid83", tween: [ "style", "${_caminar2}", "left", '-274px', { fromValue: '-274px'}], position: 903, duration: 0 },
            { id: "eid123", tween: [ "style", "${_caminar2}", "left", '-807px', { fromValue: '-274px'}], position: 1000, duration: 0 },
            { id: "eid100", tween: [ "style", "${_caminar2}", "left", '-807px', { fromValue: '-807px'}], position: 1413, duration: 0 },
            { id: "eid124", tween: [ "style", "${_caminar2}", "left", '-1314px', { fromValue: '-807px'}], position: 1500, duration: 0 },
            { id: "eid117", tween: [ "style", "${_caminar2}", "left", '-1314px', { fromValue: '-1314px'}], position: 1926, duration: 0 },
            { id: "eid125", tween: [ "style", "${_caminar2}", "left", '-1824px', { fromValue: '-1314px'}], position: 2000, duration: 0 }         ]
      }
   }
},
"robot": {
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
            ["style", "top", '93px'],
            ["style", "left", '8px']
         ],
         "${_cab_rob}": [
            ["style", "left", '18px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '371px'],
            ["style", "width", '292px']
         ],
         "${_rostro}": [
            ["style", "top", '40px'],
            ["style", "left", '46px']
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
            ["style", "top", '106px'],
            ["style", "left", '159px'],
            ["transform", "rotateZ", '1deg']
         ],
         "${_brazo_derrb}": [
            ["style", "top", '107px'],
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
            { id: "eid4255", tween: [ "style", "${_brazo_izqrb}", "-moz-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid4256", tween: [ "style", "${_brazo_izqrb}", "-ms-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid4257", tween: [ "style", "${_brazo_izqrb}", "msTransformOrigin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid4258", tween: [ "style", "${_brazo_izqrb}", "-o-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid395", tween: [ "style", "${_brazo_izqrb}", "left", '159px', { fromValue: '159px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid396", tween: [ "style", "${_brazo_izqrb}", "top", '106px', { fromValue: '106px'}], position: 0, duration: 0, easing: "easeOutBack" },
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
            { id: "eid4259", tween: [ "style", "${_grupo_cabz}", "-moz-transform-origin", [160.14,147.44], { valueTemplate: '@@0@@% @@1@@%', fromValue: [160.14,147.44]}], position: 2500, duration: 0 },
            { id: "eid4260", tween: [ "style", "${_grupo_cabz}", "-ms-transform-origin", [160.14,147.44], { valueTemplate: '@@0@@% @@1@@%', fromValue: [160.14,147.44]}], position: 2500, duration: 0 },
            { id: "eid4261", tween: [ "style", "${_grupo_cabz}", "msTransformOrigin", [160.14,147.44], { valueTemplate: '@@0@@% @@1@@%', fromValue: [160.14,147.44]}], position: 2500, duration: 0 },
            { id: "eid4262", tween: [ "style", "${_grupo_cabz}", "-o-transform-origin", [160.14,147.44], { valueTemplate: '@@0@@% @@1@@%', fromValue: [160.14,147.44]}], position: 2500, duration: 0 },
            { id: "eid420", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rostro}', [] ], ""], position: 0 }         ]
      }
   }
},
"rostro": {
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
            ["style", "top", '0px'],
            ["style", "left", '60px']
         ],
         "${_Group}": [
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '63px'],
            ["style", "width", '87px']
         ],
         "${_ojo_rb}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_ojo_cerradoCopy}": [
            ["style", "left", '59px'],
            ["color", "background-color", 'rgba(230,231,232,1.00)']
         ],
         "${_boca_rb}": [
            ["style", "top", '44px'],
            ["transform", "rotateZ", '-360deg'],
            ["style", "height", '14px'],
            ["style", "left", '23px'],
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
            { id: "eid334", tween: [ "style", "${_boca_rb}", "height", '14px', { fromValue: '14px'}], position: 155, duration: 0, easing: "easeOutBack" },
            { id: "eid337", tween: [ "style", "${_boca_rb}", "height", '19px', { fromValue: '14px'}], position: 286, duration: 0 },
            { id: "eid342", tween: [ "style", "${_boca_rb}", "height", '21px', { fromValue: '19px'}], position: 416, duration: 0 },
            { id: "eid346", tween: [ "style", "${_boca_rb}", "height", '11px', { fromValue: '21px'}], position: 601, duration: 0 },
            { id: "eid350", tween: [ "style", "${_boca_rb}", "height", '17px', { fromValue: '11px'}], position: 827, duration: 0 },
            { id: "eid354", tween: [ "style", "${_boca_rb}", "height", '8px', { fromValue: '17px'}], position: 1028, duration: 0 },
            { id: "eid357", tween: [ "style", "${_boca_rb}", "height", '17px', { fromValue: '8px'}], position: 1145, duration: 0 },
            { id: "eid362", tween: [ "style", "${_boca_rb}", "height", '13px', { fromValue: '17px'}], position: 1391, duration: 0 },
            { id: "eid366", tween: [ "style", "${_boca_rb}", "height", '21px', { fromValue: '13px'}], position: 1604, duration: 0 },
            { id: "eid370", tween: [ "style", "${_boca_rb}", "height", '12px', { fromValue: '21px'}], position: 1776, duration: 0 },
            { id: "eid373", tween: [ "style", "${_boca_rb}", "height", '18px', { fromValue: '12px'}], position: 2051, duration: 0 },
            { id: "eid377", tween: [ "style", "${_boca_rb}", "height", '13px', { fromValue: '18px'}], position: 2290, duration: 0 },
            { id: "eid381", tween: [ "style", "${_boca_rb}", "height", '19px', { fromValue: '13px'}], position: 2541, duration: 0 },
            { id: "eid383", tween: [ "style", "${_boca_rb}", "height", '16px', { fromValue: '19px'}], position: 2750, duration: 0 },
            { id: "eid250", tween: [ "style", "${_boca_rb}", "height", '14px', { fromValue: '16px'}], position: 3000, duration: 0 },
            { id: "eid325", tween: [ "style", "${_boca_rb}", "top", '44px', { fromValue: '44px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid338", tween: [ "style", "${_boca_rb}", "top", '44px', { fromValue: '44px'}], position: 155, duration: 0 },
            { id: "eid339", tween: [ "style", "${_boca_rb}", "top", '42px', { fromValue: '44px'}], position: 416, duration: 0 },
            { id: "eid343", tween: [ "style", "${_boca_rb}", "top", '52px', { fromValue: '42px'}], position: 601, duration: 0 },
            { id: "eid347", tween: [ "style", "${_boca_rb}", "top", '45px', { fromValue: '52px'}], position: 827, duration: 0 },
            { id: "eid351", tween: [ "style", "${_boca_rb}", "top", '51px', { fromValue: '45px'}], position: 1028, duration: 0 },
            { id: "eid359", tween: [ "style", "${_boca_rb}", "top", '44px', { fromValue: '51px'}], position: 1145, duration: 0 },
            { id: "eid358", tween: [ "style", "${_boca_rb}", "top", '47px', { fromValue: '44px'}], position: 1391, duration: 0 },
            { id: "eid252", tween: [ "style", "${_boca_rb}", "top", '42px', { fromValue: '47px'}], position: 1604, duration: 0 },
            { id: "eid367", tween: [ "style", "${_boca_rb}", "top", '47px', { fromValue: '42px'}], position: 1776, duration: 0 },
            { id: "eid378", tween: [ "style", "${_boca_rb}", "top", '44px', { fromValue: '47px'}], position: 2051, duration: 0 },
            { id: "eid374", tween: [ "style", "${_boca_rb}", "top", '49px', { fromValue: '44px'}], position: 2290, duration: 0 },
            { id: "eid384", tween: [ "style", "${_boca_rb}", "top", '45px', { fromValue: '49px'}], position: 2415, duration: 0 },
            { id: "eid385", tween: [ "style", "${_boca_rb}", "top", '44px', { fromValue: '45px'}], position: 2541, duration: 0 },
            { id: "eid382", tween: [ "style", "${_boca_rb}", "top", '47px', { fromValue: '44px'}], position: 2750, duration: 0 },
            { id: "eid251", tween: [ "style", "${_boca_rb}", "top", '44px', { fromValue: '47px'}], position: 3000, duration: 0 },
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
})(jQuery, AdobeEdge, "EDGE-6620540");
