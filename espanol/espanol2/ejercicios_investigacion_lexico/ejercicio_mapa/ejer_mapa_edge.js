/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['Armata']='<link href=\'http://fonts.googleapis.com/css?family=Armata\' rel=\'stylesheet\' type=\'text/css\'>';


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
            id:'mapa',
            type:'image',
            rect:['0px','0px','1297px','595px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"mapa.png",'0px','0px']
         },
         {
            id:'act_uruguay',
            type:'ellipse',
            rect:['347px','387px','25px','36px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['-39deg']]
         },
         {
            id:'uruguay',
            display:'none',
            type:'image',
            rect:['349px','389px','24px','24px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"uruguay.png",'0px','0px'],
            transform:[[],[],[],['1.61','1.61']]
         },
         {
            id:'act_chile',
            type:'rect',
            rect:['253px','337px','17px','176px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['-6deg'],[],['1.231','1.213']]
         },
         {
            id:'argentina',
            display:'none',
            type:'image',
            rect:['278px','364px','65px','138px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"argentina.png",'0px','0px'],
            transform:[[],[],[],['1.719','1.719']]
         },
         {
            id:'act_argentina',
            type:'rect',
            rect:['273px','342px','68px','167px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['-9deg']]
         },
         {
            id:'chile',
            display:'none',
            type:'image',
            rect:['255px','343px','51px','160px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"chile.png",'0px','0px'],
            transform:[[],[],[],['1.701','1.701']]
         },
         {
            id:'bolivia',
            display:'none',
            type:'image',
            rect:['261px','245px','52px','59px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bolivia.png",'0px','0px'],
            transform:[[],[],[],['1.668','1.668']]
         },
         {
            id:'act_bolivia',
            type:'ellipse',
            rect:['250px','235px','55px','86px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['-9deg']]
         },
         {
            id:'act_peru',
            type:'rect',
            rect:['174px','176px','55px','96px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['-31deg'],[],['0.818']]
         },
         {
            id:'peru',
            display:'none',
            type:'image',
            rect:['174px','180px','56px','83px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"peru.png",'0px','0px'],
            transform:[[],[],[],['1.698','1.698']]
         },
         {
            id:'ecuador',
            display:'none',
            type:'image',
            rect:['166px','147px','27px','30px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ecuador.png",'0px','0px'],
            transform:[[],[],[],['1.667','1.667']]
         },
         {
            id:'act_ecuador',
            type:'rect',
            rect:['160px','143px','25px','36px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['39deg']]
         },
         {
            id:'colombia',
            display:'none',
            type:'image',
            rect:['187px','80px','51px','77px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"colombia.png",'0px','0px'],
            transform:[[],[],[],['1.7','1.7']]
         },
         {
            id:'act_colombia',
            type:'ellipse',
            rect:['184px','85px','55px','72px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['-16deg'],[],['1','1.198']]
         },
         {
            id:'venezuela',
            display:'none',
            type:'image',
            rect:['234px','74px','56px','52px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"venezuela.png",'0px','0px'],
            transform:[[],[],[],['1.658','1.658']]
         },
         {
            id:'act_venezuela',
            type:'ellipse',
            rect:['229px','64px','75px','51px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['28deg'],[],['1','0.872']]
         },
         {
            id:'act_puerico',
            type:'rect',
            rect:['471px','500px','10px','8px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'puerto_rico',
            display:'none',
            type:'image',
            rect:['469px','501px','13px','9px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"puerto_rico.png",'0px','0px']
         },
         {
            id:'act_panama',
            type:'rect',
            rect:['362px','572px','33px','16px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'txt_colombia',
            display:'none',
            type:'image',
            rect:['216px','136px','244px','13px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"txt_colombia.png",'0px','0px']
         },
         {
            id:'act_nicaragua',
            type:'rect',
            rect:['330px','543px','25px','16px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'nicaragua',
            display:'none',
            type:'image',
            rect:['325px','532px','32px','34px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"nicaragua.png",'0px','0px']
         },
         {
            id:'act_honduras',
            type:'rect',
            rect:['322px','526px','20px','13px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'honduras',
            display:'none',
            type:'image',
            rect:['315px','522px','42px','25px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"honduras.png",'0px','0px']
         },
         {
            id:'act_mex',
            type:'rect',
            rect:['173px','405px','119px','121px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],[],[],['1','0.904']]
         },
         {
            id:'mexico',
            display:'none',
            type:'image',
            rect:['150px','395px','188px','141px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"mexico.png",'0px','0px']
         },
         {
            id:'act_guate',
            type:'rect',
            rect:['296px','518px','17px','18px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],[],[],['1','0.904']]
         },
         {
            id:'guate',
            display:'none',
            type:'image',
            rect:['291px','505px','31px','38px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"guate.png",'0px','0px']
         },
         {
            id:'act_paraguay',
            type:'ellipse',
            rect:['305px','314px','55px','23px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['36deg']]
         },
         {
            id:'paraguay',
            display:'none',
            type:'image',
            rect:['311px','309px','37px','39px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"paraguay.png",'0px','0px'],
            transform:[[],[],[],['1.694','1.694']]
         },
         {
            id:'act_salva',
            type:'rect',
            rect:['312px','535px','10px','8px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'salvador',
            display:'none',
            type:'image',
            rect:['309px','533px','15px','13px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"salvador.png",'0px','0px']
         },
         {
            id:'act_costrica',
            type:'rect',
            rect:['337px','564px','17px','16px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'cost_rica',
            display:'none',
            type:'image',
            rect:['334px','561px','23px','23px','auto','auto'],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"cost_rica.png",'0px','0px']
         },
         {
            id:'panama',
            display:'none',
            type:'image',
            rect:['353px','572px','47px','20px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"panama.png",'0px','0px']
         },
         {
            id:'act_cuba',
            type:'rect',
            rect:['357px','471px','67px','16px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['16deg'],[],['0.816']]
         },
         {
            id:'cuba',
            display:'none',
            type:'image',
            rect:['354px','467px','77px','27px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"cuba.png",'0px','0px']
         },
         {
            id:'act_repdominica',
            type:'rect',
            rect:['444px','494px','17px','12px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'rep_dominica',
            display:'none',
            type:'image',
            rect:['444px','493px','22px','15px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"rep_dominica.png",'0px','0px']
         },
         {
            id:'closenortam_btn',
            display:'none',
            type:'text',
            rect:['595px','311px','109px','22','undefined','undefined'],
            text:"Cerrar x",
            align:"right",
            font:['Armata',22,"rgba(255,148,0,1.00)","normal","none",""],
            textShadow:["rgba(78,78,78,0.65)",3,3,3],
            transform:[]
         },
         {
            id:'closensuram_btn',
            display:'none',
            type:'text',
            rect:['595px','311px','109px','22','undefined','undefined'],
            text:"Cerrar x",
            align:"right",
            font:['Armata',22,"rgba(255,148,0,1.00)","normal","none",""],
            textShadow:["rgba(78,78,78,0.65)",3,3,3],
            transform:[]
         },
         {
            id:'closeuropa',
            type:'text',
            rect:['595px','311px','109px','22','undefined','undefined'],
            text:"Cerrar x",
            align:"right",
            font:['Armata',22,"rgba(255,148,0,1.00)","normal","none",""],
            textShadow:["rgba(78,78,78,0.65)",3,3,3],
            transform:[]
         },
         {
            id:'act_espao',
            display:'none',
            type:'rect',
            rect:['287px','181px','47px','42px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'act_guineaecua',
            type:'rect',
            rect:['395px','500px','17px','8px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'guinea_ecua',
            display:'none',
            type:'image',
            rect:['397px','500px','10px','7px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"guinea_ecua.png",'0px','0px']
         },
         {
            id:'espaa',
            display:'none',
            type:'image',
            rect:['276px','177px','81px','59px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"espana.png",'0px','0px']
         },
         {
            id:'txt_mexico',
            display:'none',
            type:'image',
            rect:['109px','472px','114px','13px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"txt_mexico.png",'0px','0px']
         },
         {
            id:'txt_cuba',
            display:'none',
            type:'image',
            rect:['386px','467px','103px','13px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"txt_cuba.png",'0px','0px']
         },
         {
            id:'txt_repdominicana',
            display:'none',
            type:'image',
            rect:['452px','468px','149px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"txt_repdominicana.png",'0px','0px']
         },
         {
            id:'txt_puertorico',
            display:'none',
            type:'image',
            rect:['421px','502px','86px','43px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"txt_puertorico.png",'0px','0px']
         },
         {
            id:'txt_guate',
            display:'none',
            type:'image',
            rect:['162px','524px','142px','13px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"txt_guate.png",'0px','0px']
         },
         {
            id:'txt_salvador',
            display:'none',
            type:'image',
            rect:['160px','537px','159px','24px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"txt_salvador.png",'0px','0px']
         },
         {
            id:'txt_honduras',
            display:'none',
            type:'image',
            rect:['178px','525px','151px','51px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"txt_honduras.png",'0px','0px']
         },
         {
            id:'txt_nicaragua',
            display:'none',
            type:'image',
            rect:['329px','507px','74px','54px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"txt_nicaragua.png",'0px','0px']
         },
         {
            id:'txt_costarica',
            display:'none',
            type:'image',
            rect:['230px','568px','118px','24px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"txt_costarica.png",'0px','0px']
         },
         {
            id:'txt_panama',
            display:'none',
            type:'image',
            rect:['355px','544px','60px','44px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"txt_panama.png",'0px','0px']
         },
         {
            id:'txt_venzuela',
            display:'none',
            type:'image',
            rect:['263px','75px','152px','25px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"txt_venzuela.png",'0px','0px']
         },
         {
            id:'txt_ecuador',
            display:'none',
            type:'image',
            rect:['171px','160px','155px','13px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"txt_ecuador.png",'0px','0px']
         },
         {
            id:'txt_peru',
            display:'none',
            type:'image',
            rect:['100px','219px','96px','13px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"txt_peru.png",'0px','0px']
         },
         {
            id:'txt_bolivia',
            display:'none',
            type:'image',
            rect:['139px','280px','139px','13px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"txt_bolivia.png",'0px','0px']
         },
         {
            id:'txt_paraguay',
            display:'none',
            type:'image',
            rect:['310px','303px','135px','16px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"txt_paraguay.png",'0px','0px']
         },
         {
            id:'txt_chile',
            display:'none',
            type:'image',
            rect:['164px','440px','97px','13px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"txt_chile.png",'0px','0px']
         },
         {
            id:'txt_uruguay',
            display:'none',
            type:'image',
            rect:['360px','400px','127px','16px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"txt_uruguay.png",'0px','0px']
         },
         {
            id:'txt_argentina',
            display:'none',
            type:'image',
            rect:['290px','470px','135px','16px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"txt_argentina.png",'0px','0px']
         },
         {
            id:'txt_espaa',
            display:'none',
            type:'image',
            rect:['140px','190px','161px','16px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"txt_espana.png",'0px','0px']
         },
         {
            id:'txt_guinea',
            display:'none',
            type:'image',
            rect:['217px','491px','186px','32px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"txt_guinea.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_act_uruguay}": [
            ["style", "top", '386.9px'],
            ["style", "opacity", '0'],
            ["style", "left", '347px'],
            ["transform", "rotateZ", '-39deg']
         ],
         "${_act_ecuador}": [
            ["style", "opacity", '0'],
            ["style", "left", '159.55px'],
            ["transform", "rotateZ", '39deg']
         ],
         "${_txt_venzuela}": [
            ["style", "top", '75px'],
            ["style", "display", 'none'],
            ["style", "height", '25px'],
            ["style", "left", '263px'],
            ["style", "width", '152px']
         ],
         "${_txt_panama}": [
            ["style", "top", '544px'],
            ["style", "display", 'none'],
            ["style", "height", '44px'],
            ["style", "left", '355px'],
            ["style", "width", '60px']
         ],
         "${_act_panama}": [
            ["style", "opacity", '0']
         ],
         "${_txt_salvador}": [
            ["style", "top", '535px'],
            ["style", "display", 'none'],
            ["style", "height", '24px'],
            ["style", "left", '160px'],
            ["style", "width", '159px']
         ],
         "${_act_venezuela}": [
            ["style", "top", '63.62px'],
            ["transform", "scaleY", '0.87166'],
            ["transform", "rotateZ", '28deg'],
            ["style", "opacity", '0'],
            ["style", "left", '228.6px']
         ],
         "${_act_mex}": [
            ["style", "top", '405.02px'],
            ["transform", "scaleY", '0.90384'],
            ["style", "display", 'block'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "clip", 0, {valueTemplate:'auto'} ],
            ["style", "left", '173.07px']
         ],
         "${_txt_costarica}": [
            ["style", "top", '568px'],
            ["style", "display", 'none'],
            ["style", "height", '24px'],
            ["style", "left", '230px'],
            ["style", "width", '118px']
         ],
         "${_act_guate}": [
            ["style", "top", '518.15px'],
            ["transform", "scaleY", '0.90384'],
            ["transform", "scaleX", '1'],
            ["style", "height", '17.735882782099px'],
            ["style", "opacity", '0'],
            ["style", "left", '295.53px'],
            ["style", "width", '16.826351165771px']
         ],
         "${_act_repdominica}": [
            ["style", "height", '12px'],
            ["style", "opacity", '0']
         ],
         "${_txt_guate}": [
            ["style", "top", '524px'],
            ["style", "display", 'none'],
            ["style", "height", '13px'],
            ["style", "left", '162px'],
            ["style", "width", '142px']
         ],
         "${_txt_puertorico}": [
            ["style", "top", '502px'],
            ["style", "display", 'none'],
            ["style", "height", '43px'],
            ["style", "left", '421px'],
            ["style", "width", '86px']
         ],
         "${_closensuram_btn}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,148,0,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '595.22px'],
            ["style", "font-size", '22px'],
            ["style", "top", '311px'],
            ["style", "width", '108.5px'],
            ["style", "text-align", 'right'],
            ["subproperty", "textShadow.color", 'rgba(78,78,78,0.648438)'],
            ["style", "height", '22px'],
            ["style", "font-family", 'Armata'],
            ["style", "display", 'none'],
            ["subproperty", "textShadow.offsetV", '3px']
         ],
         "${_txt_repdominicana}": [
            ["style", "top", '468px'],
            ["style", "display", 'none'],
            ["style", "height", '36px'],
            ["style", "left", '452px'],
            ["style", "width", '149px']
         ],
         "${_uruguay}": [
            ["style", "top", '389px'],
            ["transform", "scaleY", '1.60965'],
            ["transform", "scaleX", '1.60965'],
            ["style", "display", 'none'],
            ["style", "height", '24px'],
            ["style", "left", '349px'],
            ["style", "width", '24px']
         ],
         "${_guinea_ecua}": [
            ["style", "top", '499.75px'],
            ["style", "height", '7.2500152587891px'],
            ["style", "display", 'none'],
            ["style", "left", '397.33px'],
            ["style", "width", '9.6666870117188px']
         ],
         "${_act_nicaragua}": [
            ["style", "left", '330px'],
            ["style", "opacity", '0']
         ],
         "${_act_peru}": [
            ["style", "top", '176.08px'],
            ["transform", "rotateZ", '-31deg'],
            ["transform", "scaleX", '0.81814'],
            ["style", "opacity", '0'],
            ["style", "left", '174.48px']
         ],
         "${_cost_rica}": [
            ["style", "top", '561px'],
            ["style", "display", 'none'],
            ["style", "height", '23px'],
            ["style", "opacity", '1'],
            ["style", "left", '334px'],
            ["style", "width", '23px']
         ],
         "${_nicaragua}": [
            ["style", "top", '532px'],
            ["style", "height", '33.858063728579px'],
            ["style", "display", 'none'],
            ["style", "left", '325px'],
            ["style", "width", '32px']
         ],
         "${_venezuela}": [
            ["style", "top", '74px'],
            ["transform", "scaleY", '1.65789'],
            ["transform", "scaleX", '1.65789'],
            ["style", "height", '52px'],
            ["style", "display", 'none'],
            ["style", "left", '234px'],
            ["style", "width", '56px']
         ],
         "${_mexico}": [
            ["style", "top", '393.57px'],
            ["style", "height", '141.30236816406px'],
            ["style", "display", 'none'],
            ["style", "left", '149.88px'],
            ["style", "width", '187.8287576815px']
         ],
         "${_txt_argentina}": [
            ["style", "top", '470px'],
            ["style", "display", 'none'],
            ["style", "height", '16px'],
            ["style", "left", '290px'],
            ["style", "width", '135px']
         ],
         "${_act_bolivia}": [
            ["style", "top", '234.77px'],
            ["style", "opacity", '0'],
            ["style", "left", '250.39px'],
            ["transform", "rotateZ", '-9deg']
         ],
         "${_act_argentina}": [
            ["style", "top", '342.29px'],
            ["transform", "rotateZ", '-9deg'],
            ["style", "opacity", '0'],
            ["style", "left", '273.32px'],
            ["style", "width", '68.049981368215px']
         ],
         "${_act_costrica}": [
            ["style", "top", '564px'],
            ["style", "opacity", '0'],
            ["style", "left", '337px']
         ],
         "${_txt_uruguay}": [
            ["style", "top", '400px'],
            ["style", "display", 'none'],
            ["style", "height", '16px'],
            ["style", "left", '360px'],
            ["style", "width", '127px']
         ],
         "${_mapa}": [
            ["style", "top", '92.37px'],
            ["style", "height", '370.63691712884px'],
            ["style", "left", '1px'],
            ["style", "width", '807.75px']
         ],
         "${_puerto_rico}": [
            ["style", "top", '501px'],
            ["style", "height", '9px'],
            ["style", "display", 'none'],
            ["style", "left", '469px'],
            ["style", "width", '12.8px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '800px'],
            ["style", "height", '595px'],
            ["style", "overflow", 'hidden']
         ],
         "${_txt_honduras}": [
            ["style", "top", '525px'],
            ["style", "display", 'none'],
            ["style", "height", '51px'],
            ["style", "left", '178px'],
            ["style", "width", '151px']
         ],
         "${_act_guineaecua}": [
            ["style", "opacity", '0']
         ],
         "${_txt_cuba}": [
            ["style", "top", '467px'],
            ["style", "display", 'none'],
            ["style", "height", '13px'],
            ["style", "left", '386px'],
            ["style", "width", '103px']
         ],
         "${_closeuropa}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,148,0,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '595.22px'],
            ["style", "font-size", '22px'],
            ["style", "top", '311px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "text-align", 'right'],
            ["style", "display", 'block'],
            ["style", "height", '22px'],
            ["subproperty", "textShadow.color", 'rgba(78,78,78,0.648438)'],
            ["style", "font-family", 'Armata'],
            ["style", "width", '108.5px']
         ],
         "${_cuba}": [
            ["style", "top", '467px'],
            ["style", "height", '27px'],
            ["style", "display", 'none'],
            ["style", "left", '354px'],
            ["style", "width", '77.399997253418px']
         ],
         "${_ecuador}": [
            ["style", "top", '147.47px'],
            ["transform", "scaleY", '1.66658'],
            ["transform", "scaleX", '1.66658'],
            ["style", "display", 'none'],
            ["style", "height", '30px'],
            ["style", "left", '166px'],
            ["style", "width", '27px']
         ],
         "${_paraguay}": [
            ["style", "top", '309px'],
            ["transform", "scaleY", '1.69392'],
            ["transform", "scaleX", '1.69392'],
            ["style", "display", 'none'],
            ["style", "height", '39px'],
            ["style", "left", '311px'],
            ["style", "width", '37px']
         ],
         "${_act_cuba}": [
            ["style", "top", '471.23px'],
            ["transform", "scaleX", '0.816'],
            ["transform", "rotateZ", '16deg'],
            ["style", "height", '16.028096229858px'],
            ["style", "opacity", '0'],
            ["style", "left", '356.97px'],
            ["style", "width", '67.139808654785px']
         ],
         "${_txt_bolivia}": [
            ["style", "top", '280px'],
            ["style", "display", 'none'],
            ["style", "height", '13px'],
            ["style", "left", '139px'],
            ["style", "width", '139px']
         ],
         "${_colombia}": [
            ["style", "top", '80px'],
            ["transform", "scaleY", '1.7005'],
            ["transform", "scaleX", '1.7005'],
            ["style", "display", 'none'],
            ["style", "height", '77px'],
            ["style", "left", '187px'],
            ["style", "width", '51px']
         ],
         "${_act_salva}": [
            ["style", "height", '8px'],
            ["style", "opacity", '0'],
            ["style", "width", '10px']
         ],
         "${_argentina}": [
            ["style", "top", '364px'],
            ["transform", "scaleY", '1.71885'],
            ["transform", "scaleX", '1.71885'],
            ["style", "display", 'none'],
            ["style", "height", '138px'],
            ["style", "left", '278px'],
            ["style", "width", '65px']
         ],
         "${_espaa}": [
            ["style", "top", '177px'],
            ["style", "height", '59px'],
            ["style", "display", 'none'],
            ["style", "left", '276px'],
            ["style", "width", '80.924690246582px']
         ],
         "${_peru}": [
            ["style", "top", '179.95px'],
            ["transform", "scaleY", '1.69753'],
            ["transform", "scaleX", '1.69753'],
            ["style", "display", 'none'],
            ["style", "height", '83px'],
            ["style", "left", '174.47px'],
            ["style", "width", '56px']
         ],
         "${_txt_guinea}": [
            ["style", "top", '491px'],
            ["style", "display", 'none'],
            ["style", "height", '32px'],
            ["style", "left", '217px'],
            ["style", "width", '186px']
         ],
         "${_closenortam_btn}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,148,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '595.22px'],
            ["style", "font-size", '22px'],
            ["style", "top", '311px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "text-align", 'right'],
            ["subproperty", "textShadow.color", 'rgba(78,78,78,0.65)'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Armata'],
            ["style", "height", '22px'],
            ["style", "width", '108.5px']
         ],
         "${_txt_espaa}": [
            ["style", "top", '190px'],
            ["style", "display", 'none'],
            ["style", "height", '16px'],
            ["style", "left", '140px'],
            ["style", "width", '161px']
         ],
         "${_honduras}": [
            ["style", "top", '565px'],
            ["style", "display", 'none'],
            ["style", "height", '25.188484128538px'],
            ["style", "left", '315px'],
            ["style", "width", '41.992286682129px']
         ],
         "${_act_colombia}": [
            ["style", "top", '85.37px'],
            ["transform", "scaleY", '1.19764'],
            ["transform", "rotateZ", '-16deg'],
            ["style", "opacity", '0'],
            ["style", "left", '183.82px']
         ],
         "${_panama}": [
            ["style", "top", '572px'],
            ["style", "height", '20px'],
            ["style", "display", 'none'],
            ["style", "left", '353px'],
            ["style", "width", '47.245615908974px']
         ],
         "${_act_espao}": [
            ["style", "top", '180.69px'],
            ["style", "display", 'none'],
            ["style", "height", '41.957458496094px'],
            ["style", "opacity", '0'],
            ["style", "left", '287.45px'],
            ["style", "width", '47.042602539062px']
         ],
         "${_rep_dominica}": [
            ["style", "top", '493px'],
            ["style", "height", '15px'],
            ["style", "display", 'none'],
            ["style", "left", '444px'],
            ["style", "width", '21.666666666667px']
         ],
         "${_bolivia}": [
            ["style", "top", '244.6px'],
            ["transform", "scaleY", '1.6678'],
            ["transform", "scaleX", '1.6678'],
            ["style", "display", 'none'],
            ["style", "height", '59px'],
            ["style", "left", '261px'],
            ["style", "width", '52px']
         ],
         "${_txt_paraguay}": [
            ["style", "top", '303px'],
            ["style", "display", 'none'],
            ["style", "height", '16px'],
            ["style", "left", '310px'],
            ["style", "width", '135px']
         ],
         "${_txt_chile}": [
            ["style", "top", '440px'],
            ["style", "display", 'none'],
            ["style", "height", '13px'],
            ["style", "left", '164px'],
            ["style", "width", '97px']
         ],
         "${_txt_mexico}": [
            ["style", "top", '472px'],
            ["style", "display", 'none'],
            ["style", "height", '13px'],
            ["style", "left", '109px'],
            ["style", "width", '114px']
         ],
         "${_txt_peru}": [
            ["style", "top", '219px'],
            ["style", "display", 'none'],
            ["style", "height", '13px'],
            ["style", "left", '100px'],
            ["style", "width", '96px']
         ],
         "${_txt_ecuador}": [
            ["style", "top", '160px'],
            ["style", "display", 'none'],
            ["style", "height", '13px'],
            ["style", "left", '171px'],
            ["style", "width", '155px']
         ],
         "${_txt_colombia}": [
            ["style", "top", '136px'],
            ["style", "display", 'none'],
            ["style", "height", '13px'],
            ["style", "left", '216px'],
            ["style", "width", '244px']
         ],
         "${_act_chile}": [
            ["style", "top", '337.45px'],
            ["transform", "scaleY", '1.21311'],
            ["transform", "rotateZ", '-6deg'],
            ["transform", "scaleX", '1.23093'],
            ["style", "opacity", '0'],
            ["style", "left", '253.14px']
         ],
         "${_salvador}": [
            ["style", "top", '533px'],
            ["style", "height", '13px'],
            ["style", "display", 'none'],
            ["style", "left", '309px'],
            ["style", "width", '15px']
         ],
         "${_txt_nicaragua}": [
            ["style", "top", '507px'],
            ["style", "display", 'none'],
            ["style", "height", '54px'],
            ["style", "left", '329px'],
            ["style", "width", '74px']
         ],
         "${_act_puerico}": [
            ["style", "opacity", '0']
         ],
         "${_act_paraguay}": [
            ["style", "opacity", '0'],
            ["style", "left", '305.4px'],
            ["transform", "rotateZ", '36deg']
         ],
         "${_chile}": [
            ["style", "top", '343px'],
            ["transform", "scaleY", '1.7005'],
            ["transform", "scaleX", '1.7005'],
            ["style", "display", 'none'],
            ["style", "height", '160px'],
            ["style", "left", '255px'],
            ["style", "width", '51px']
         ],
         "${_guate}": [
            ["style", "top", '504.93px'],
            ["style", "height", '38.328573270731px'],
            ["style", "display", 'none'],
            ["style", "left", '291px'],
            ["style", "width", '31.371675491333px']
         ],
         "${_act_honduras}": [
            ["style", "top", '526.02px'],
            ["style", "height", '12.983293571728px'],
            ["style", "opacity", '0'],
            ["style", "left", '322px'],
            ["style", "width", '19.983333587646px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6750,
         autoPlay: true,
         labels: {
            "nort_amer": 750,
            "zomout_nortamerica": 1750,
            "suramerica": 2500,
            "zomoutsuramerica": 3750,
            "europa": 5000,
            "zomout_europa": 6075
         },
         timeline: [
            { id: "eid561", tween: [ "style", "${_txt_puertorico}", "height", '16.5px', { fromValue: '43px'}], position: 1750, duration: 500 },
            { id: "eid153", tween: [ "style", "${_guate}", "width", '31.371675491333px', { fromValue: '31.371675491333px'}], position: 1500, duration: 0 },
            { id: "eid168", tween: [ "style", "${_guate}", "width", '11.433333470271px', { fromValue: '31.371675491333px'}], position: 1750, duration: 500 },
            { id: "eid683", tween: [ "style", "${_txt_colombia}", "height", '5.7666668891907px', { fromValue: '13px'}], position: 3750, duration: 500 },
            { id: "eid100", tween: [ "style", "${_rep_dominica}", "height", '15px', { fromValue: '15px'}], position: 1500, duration: 0 },
            { id: "eid192", tween: [ "style", "${_rep_dominica}", "height", '5px', { fromValue: '15px'}], position: 1750, duration: 500 },
            { id: "eid304", tween: [ "style", "${_bolivia}", "height", '21.585321981053px', { fromValue: '59px'}], position: 3750, duration: 500 },
            { id: "eid66", tween: [ "style", "${_mexico}", "top", '393.57px', { fromValue: '393.57px'}], position: 1500, duration: 0 },
            { id: "eid147", tween: [ "style", "${_mexico}", "top", '217.03px', { fromValue: '393.57px'}], position: 1750, duration: 500 },
            { id: "eid610", tween: [ "style", "${_txt_honduras}", "top", '263px', { fromValue: '525px'}], position: 1750, duration: 500 },
            { id: "eid91", tween: [ "style", "${_panama}", "width", '47.245615908974px', { fromValue: '47.245615908974px'}], position: 1500, duration: 0 },
            { id: "eid189", tween: [ "style", "${_panama}", "width", '17px', { fromValue: '47.245615908974px'}], position: 1750, duration: 500 },
            { id: "eid65", tween: [ "style", "${_mexico}", "left", '149.88px', { fromValue: '149.88px'}], position: 1500, duration: 0 },
            { id: "eid146", tween: [ "style", "${_mexico}", "left", '54px', { fromValue: '149.88px'}], position: 1750, duration: 500 },
            { id: "eid821", tween: [ "style", "${_txt_espaa}", "width", '64.083335876465px', { fromValue: '161px'}], position: 6075, duration: 675 },
            { id: "eid5", tween: [ "style", "${_mapa}", "height", '1063.3364868164px', { fromValue: '370.63691712884px'}], position: 750, duration: 750 },
            { id: "eid63", tween: [ "style", "${_mapa}", "height", '371px', { fromValue: '1063.3364868164px'}], position: 1750, duration: 500 },
            { id: "eid235", tween: [ "style", "${_mapa}", "height", '1063px', { fromValue: '371px'}], position: 2500, duration: 750 },
            { id: "eid267", tween: [ "style", "${_mapa}", "height", '371px', { fromValue: '1063px'}], position: 3750, duration: 500 },
            { id: "eid420", tween: [ "style", "${_mapa}", "height", '1063px', { fromValue: '371px'}], position: 5000, duration: 750 },
            { id: "eid440", tween: [ "style", "${_mapa}", "height", '371px', { fromValue: '1063px'}], position: 6075, duration: 675 },
            { id: "eid80", tween: [ "style", "${_honduras}", "height", '25.188484128538px', { fromValue: '25.188484128538px'}], position: 1500, duration: 0 },
            { id: "eid172", tween: [ "style", "${_honduras}", "height", '9px', { fromValue: '25.188484128538px'}], position: 1750, duration: 500 },
            { id: "eid729", tween: [ "style", "${_txt_peru}", "height", '5.2875527485967px', { fromValue: '13px'}], position: 3750, duration: 500 },
            { id: "eid103", tween: [ "style", "${_puerto_rico}", "width", '12.8px', { fromValue: '12.8px'}], position: 1500, duration: 0 },
            { id: "eid197", tween: [ "style", "${_puerto_rico}", "width", '4.2499998807907px', { fromValue: '12.8px'}], position: 1750, duration: 500 },
            { id: "eid427", tween: [ "style", "${_act_espao}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid426", tween: [ "style", "${_act_espao}", "display", 'block', { fromValue: 'none'}], position: 5750, duration: 0 },
            { id: "eid368", tween: [ "style", "${_colombia}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid345", tween: [ "style", "${_colombia}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
            { id: "eid400", tween: [ "style", "${_colombia}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid488", tween: [ "style", "${_colombia}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid650", tween: [ "style", "${_txt_costarica}", "height", '11.290507280424px', { fromValue: '24px'}], position: 1750, duration: 500 },
            { id: "eid341", tween: [ "style", "${_uruguay}", "top", '389.82px', { fromValue: '389px'}], position: 3750, duration: 500 },
            { id: "eid50", tween: [ "style", "${_rep_dominica}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid213", tween: [ "style", "${_rep_dominica}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid244", tween: [ "style", "${_rep_dominica}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid380", tween: [ "style", "${_rep_dominica}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid395", tween: [ "style", "${_rep_dominica}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid473", tween: [ "style", "${_rep_dominica}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid278", tween: [ "style", "${_colombia}", "left", '139.1px', { fromValue: '187px'}], position: 3750, duration: 500 },
            { id: "eid94", tween: [ "style", "${_cuba}", "top", '467px', { fromValue: '467px'}], position: 1500, duration: 0 },
            { id: "eid175", tween: [ "style", "${_cuba}", "top", '243.12px', { fromValue: '467px'}], position: 1750, duration: 500 },
            { id: "eid648", tween: [ "style", "${_txt_costarica}", "left", '68.47px', { fromValue: '230px'}], position: 1750, duration: 500 },
            { id: "eid526", tween: [ "style", "${_txt_cuba}", "width", '44.9977px', { fromValue: '103px'}], position: 1750, duration: 500 },
            { id: "eid428", tween: [ "style", "${_guinea_ecua}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid453", tween: [ "style", "${_guinea_ecua}", "display", 'block', { fromValue: 'none'}], position: 6075, duration: 0 },
            { id: "eid586", tween: [ "style", "${_txt_salvador}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid585", tween: [ "style", "${_txt_salvador}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid595", tween: [ "style", "${_txt_salvador}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid596", tween: [ "style", "${_txt_salvador}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid597", tween: [ "style", "${_txt_salvador}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid598", tween: [ "style", "${_txt_salvador}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid42", tween: [ "style", "${_guate}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid218", tween: [ "style", "${_guate}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid237", tween: [ "style", "${_guate}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid385", tween: [ "style", "${_guate}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid391", tween: [ "style", "${_guate}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid482", tween: [ "style", "${_guate}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid151", tween: [ "style", "${_guate}", "top", '504.93px', { fromValue: '504.93px'}], position: 1500, duration: 0 },
            { id: "eid167", tween: [ "style", "${_guate}", "top", '256px', { fromValue: '504.93px'}], position: 1750, duration: 500 },
            { id: "eid333", tween: [ "style", "${_paraguay}", "top", '361.7px', { fromValue: '309px'}], position: 3750, duration: 500 },
            { id: "eid317", tween: [ "style", "${_chile}", "top", '374.97px', { fromValue: '343px'}], position: 3750, duration: 500 },
            { id: "eid714", tween: [ "style", "${_txt_ecuador}", "height", '5.6985184481884px', { fromValue: '13px'}], position: 3750, duration: 500 },
            { id: "eid207", tween: [ "style", "${_closenortam_btn}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid202", tween: [ "style", "${_closenortam_btn}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid211", tween: [ "style", "${_closenortam_btn}", "display", 'block', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid212", tween: [ "style", "${_closenortam_btn}", "display", 'none', { fromValue: 'block'}], position: 1940, duration: 0 },
            { id: "eid377", tween: [ "style", "${_closenortam_btn}", "display", 'none', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid198", tween: [ "style", "${_honduras}", "top", '522px', { fromValue: '565px'}], position: 0, duration: 1500 },
            { id: "eid171", tween: [ "style", "${_honduras}", "top", '262px', { fromValue: '522px'}], position: 1750, duration: 500 },
            { id: "eid281", tween: [ "style", "${_venezuela}", "top", '280px', { fromValue: '74px'}], position: 3750, duration: 500 },
            { id: "eid340", tween: [ "style", "${_uruguay}", "height", '9.3187960115553px', { fromValue: '24px'}], position: 3750, duration: 500 },
            { id: "eid758", tween: [ "style", "${_txt_paraguay}", "top", '362.67px', { fromValue: '303px'}], position: 3750, duration: 500 },
            { id: "eid46", tween: [ "style", "${_cost_rica}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid216", tween: [ "style", "${_cost_rica}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid242", tween: [ "style", "${_cost_rica}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid383", tween: [ "style", "${_cost_rica}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid398", tween: [ "style", "${_cost_rica}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid479", tween: [ "style", "${_cost_rica}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid277", tween: [ "style", "${_colombia}", "top", '282.4px', { fromValue: '80px'}], position: 3750, duration: 500 },
            { id: "eid45", tween: [ "style", "${_nicaragua}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid221", tween: [ "style", "${_nicaragua}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid240", tween: [ "style", "${_nicaragua}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid388", tween: [ "style", "${_nicaragua}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid397", tween: [ "style", "${_nicaragua}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid485", tween: [ "style", "${_nicaragua}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid99", tween: [ "style", "${_rep_dominica}", "width", '21.666666666667px', { fromValue: '21.666666666667px'}], position: 1500, duration: 0 },
            { id: "eid193", tween: [ "style", "${_rep_dominica}", "width", '7.2083330154419px', { fromValue: '21.666666666667px'}], position: 1750, duration: 500 },
            { id: "eid580", tween: [ "style", "${_txt_guate}", "width", '64.098516421843px', { fromValue: '142px'}], position: 1750, duration: 500 },
            { id: "eid48", tween: [ "style", "${_panama}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid215", tween: [ "style", "${_panama}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid241", tween: [ "style", "${_panama}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid382", tween: [ "style", "${_panama}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid399", tween: [ "style", "${_panama}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid478", tween: [ "style", "${_panama}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid560", tween: [ "style", "${_txt_puertorico}", "top", '255px', { fromValue: '502px'}], position: 1750, duration: 500 },
            { id: "eid697", tween: [ "style", "${_txt_venzuela}", "top", '279.47px', { fromValue: '75px'}], position: 3750, duration: 500 },
            { id: "eid462", tween: [ "style", "${_guinea_ecua}", "top", '299.75px', { fromValue: '499.75px'}], position: 6075, duration: 675 },
            { id: "eid361", tween: [ "style", "${_paraguay}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid358", tween: [ "style", "${_paraguay}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
            { id: "eid405", tween: [ "style", "${_paraguay}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid481", tween: [ "style", "${_paraguay}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid591", tween: [ "style", "${_txt_salvador}", "left", '43.97px', { fromValue: '160px'}], position: 1750, duration: 500 },
            { id: "eid19", tween: [ "style", "${_mapa}", "left", '0px', { fromValue: '1px'}], position: 750, duration: 750 },
            { id: "eid60", tween: [ "style", "${_mapa}", "left", '1px', { fromValue: '0px'}], position: 1750, duration: 500 },
            { id: "eid232", tween: [ "style", "${_mapa}", "left", '-210px', { fromValue: '1px'}], position: 2500, duration: 750 },
            { id: "eid264", tween: [ "style", "${_mapa}", "left", '1px', { fromValue: '-210px'}], position: 3750, duration: 500 },
            { id: "eid417", tween: [ "style", "${_mapa}", "left", '-618px', { fromValue: '1px'}], position: 5000, duration: 750 },
            { id: "eid437", tween: [ "style", "${_mapa}", "left", '1px', { fromValue: '-618px'}], position: 6075, duration: 675 },
            { id: "eid307", tween: [ "style", "${_bolivia}", "width", '19.024351576521px', { fromValue: '52px'}], position: 3750, duration: 500 },
            { id: "eid84", tween: [ "style", "${_nicaragua}", "height", '33.858063728579px', { fromValue: '33.858063728579px'}], position: 1500, duration: 0 },
            { id: "eid180", tween: [ "style", "${_nicaragua}", "height", '12.094322438737px', { fromValue: '33.858063728579px'}], position: 1750, duration: 500 },
            { id: "eid68", tween: [ "style", "${_mexico}", "height", '141.30236816406px', { fromValue: '141.30236816406px'}], position: 1500, duration: 0 },
            { id: "eid148", tween: [ "style", "${_mexico}", "height", '49.239793250949px', { fromValue: '141.30236816406px'}], position: 1750, duration: 500 },
            { id: "eid450", tween: [ "style", "${_espaa}", "top", '188px', { fromValue: '177px'}], position: 6075, duration: 675 },
            { id: "eid326", tween: [ "style", "${_argentina}", "left", '170.82px', { fromValue: '278px'}], position: 3750, duration: 500 },
            { id: "eid609", tween: [ "style", "${_txt_honduras}", "height", '22px', { fromValue: '51px'}], position: 1750, duration: 500 },
            { id: "eid525", tween: [ "style", "${_txt_cuba}", "height", '5.6724373853493px', { fromValue: '13px'}], position: 1750, duration: 500 },
            { id: "eid305", tween: [ "style", "${_bolivia}", "top", '338.21px', { fromValue: '244.6px'}], position: 3750, duration: 500 },
            { id: "eid803", tween: [ "style", "${_txt_argentina}", "left", '180px', { fromValue: '290px'}], position: 3750, duration: 500 },
            { id: "eid611", tween: [ "style", "${_txt_honduras}", "left", '51.87px', { fromValue: '178px'}], position: 1750, duration: 500 },
            { id: "eid276", tween: [ "style", "${_colombia}", "height", '27.050867391944px', { fromValue: '77px'}], position: 3750, duration: 500 },
            { id: "eid327", tween: [ "style", "${_argentina}", "width", '22.724659408654px', { fromValue: '65px'}], position: 3750, duration: 500 },
            { id: "eid681", tween: [ "style", "${_txt_colombia}", "left", '148.55px', { fromValue: '216px'}], position: 3750, duration: 500 },
            { id: "eid44", tween: [ "style", "${_honduras}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid220", tween: [ "style", "${_honduras}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid239", tween: [ "style", "${_honduras}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid387", tween: [ "style", "${_honduras}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid392", tween: [ "style", "${_honduras}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid484", tween: [ "style", "${_honduras}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid451", tween: [ "style", "${_espaa}", "width", '27.420289412789px', { fromValue: '80.924690246582px'}], position: 6075, duration: 675 },
            { id: "eid651", tween: [ "style", "${_txt_costarica}", "width", '55.515563964844px', { fromValue: '118px'}], position: 1750, duration: 500 },
            { id: "eid834", tween: [ "style", "${_txt_guinea}", "width", '70.234373152256px', { fromValue: '186px'}], position: 6075, duration: 675 },
            { id: "eid832", tween: [ "style", "${_txt_guinea}", "top", '297px', { fromValue: '491px'}], position: 6075, duration: 675 },
            { id: "eid763", tween: [ "style", "${_txt_chile}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
            { id: "eid777", tween: [ "style", "${_txt_chile}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid778", tween: [ "style", "${_txt_chile}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid291", tween: [ "style", "${_ecuador}", "width", '9.1768215456699px', { fromValue: '27px'}], position: 3750, duration: 500 },
            { id: "eid744", tween: [ "style", "${_txt_bolivia}", "height", '5.1906474820144px', { fromValue: '13px'}], position: 3750, duration: 500 },
            { id: "eid93", tween: [ "style", "${_cuba}", "left", '354px', { fromValue: '354px'}], position: 1500, duration: 0 },
            { id: "eid174", tween: [ "style", "${_cuba}", "left", '125px', { fromValue: '354px'}], position: 1750, duration: 500 },
            { id: "eid779", tween: [ "style", "${_txt_uruguay}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
            { id: "eid780", tween: [ "style", "${_txt_uruguay}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid781", tween: [ "style", "${_txt_uruguay}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid715", tween: [ "style", "${_txt_ecuador}", "width", '68.033332824707px', { fromValue: '155px'}], position: 3750, duration: 500 },
            { id: "eid831", tween: [ "style", "${_txt_guinea}", "left", '286.77px', { fromValue: '217px'}], position: 6075, duration: 675 },
            { id: "eid822", tween: [ "style", "${_txt_guinea}", "display", 'block', { fromValue: 'none'}], position: 6075, duration: 0 },
            { id: "eid562", tween: [ "style", "${_txt_puertorico}", "width", '33px', { fromValue: '86px'}], position: 1750, duration: 500 },
            { id: "eid819", tween: [ "style", "${_txt_espaa}", "top", '191.62px', { fromValue: '190px'}], position: 6075, duration: 675 },
            { id: "eid820", tween: [ "style", "${_txt_espaa}", "left", '259.9px', { fromValue: '140px'}], position: 6075, duration: 675 },
            { id: "eid718", tween: [ "style", "${_txt_peru}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
            { id: "eid731", tween: [ "style", "${_txt_peru}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid732", tween: [ "style", "${_txt_peru}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid495", tween: [ "style", "${_txt_mexico}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid496", tween: [ "style", "${_txt_mexico}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid509", tween: [ "style", "${_txt_mexico}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid510", tween: [ "style", "${_txt_mexico}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid511", tween: [ "style", "${_txt_mexico}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid512", tween: [ "style", "${_txt_mexico}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid809", tween: [ "style", "${_txt_espaa}", "display", 'block', { fromValue: 'none'}], position: 6075, duration: 0 },
            { id: "eid318", tween: [ "style", "${_chile}", "left", '163.02px', { fromValue: '255px'}], position: 3750, duration: 500 },
            { id: "eid805", tween: [ "style", "${_txt_argentina}", "height", '5.3268730311922px', { fromValue: '16px'}], position: 3750, duration: 500 },
            { id: "eid806", tween: [ "style", "${_txt_argentina}", "width", '44.9977px', { fromValue: '135px'}], position: 3750, duration: 500 },
            { id: "eid97", tween: [ "style", "${_rep_dominica}", "left", '444px', { fromValue: '444px'}], position: 1500, duration: 0 },
            { id: "eid190", tween: [ "style", "${_rep_dominica}", "left", '155.95px', { fromValue: '444px'}], position: 1750, duration: 500 },
            { id: "eid682", tween: [ "style", "${_txt_colombia}", "top", '301.22px', { fromValue: '136px'}], position: 3750, duration: 500 },
            { id: "eid150", tween: [ "style", "${_guate}", "left", '291px', { fromValue: '291px'}], position: 1500, duration: 0 },
            { id: "eid166", tween: [ "style", "${_guate}", "left", '102.62px', { fromValue: '291px'}], position: 1750, duration: 500 },
            { id: "eid804", tween: [ "style", "${_txt_argentina}", "top", '421.68px', { fromValue: '470px'}], position: 3750, duration: 500 },
            { id: "eid101", tween: [ "style", "${_puerto_rico}", "left", '469px', { fromValue: '469px'}], position: 1500, duration: 0 },
            { id: "eid194", tween: [ "style", "${_puerto_rico}", "left", '165px', { fromValue: '469px'}], position: 1750, duration: 500 },
            { id: "eid833", tween: [ "style", "${_txt_guinea}", "height", '12.083333015442px', { fromValue: '32px'}], position: 6075, duration: 675 },
            { id: "eid514", tween: [ "style", "${_txt_cuba}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid513", tween: [ "style", "${_txt_cuba}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid527", tween: [ "style", "${_txt_cuba}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid528", tween: [ "style", "${_txt_cuba}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid529", tween: [ "style", "${_txt_cuba}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid530", tween: [ "style", "${_txt_cuba}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid559", tween: [ "style", "${_txt_puertorico}", "left", '147px', { fromValue: '421px'}], position: 1750, duration: 500 },
            { id: "eid794", tween: [ "style", "${_txt_argentina}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
            { id: "eid807", tween: [ "style", "${_txt_argentina}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid808", tween: [ "style", "${_txt_argentina}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid792", tween: [ "style", "${_txt_uruguay}", "height", '5.6690015748031px', { fromValue: '16px'}], position: 3750, duration: 500 },
            { id: "eid85", tween: [ "style", "${_cost_rica}", "left", '334px', { fromValue: '334px'}], position: 1500, duration: 0 },
            { id: "eid182", tween: [ "style", "${_cost_rica}", "left", '118px', { fromValue: '334px'}], position: 1750, duration: 500 },
            { id: "eid793", tween: [ "style", "${_txt_uruguay}", "width", '44.9977px', { fromValue: '127px'}], position: 3750, duration: 500 },
            { id: "eid79", tween: [ "style", "${_honduras}", "width", '41.992286682129px', { fromValue: '41.992286682129px'}], position: 1500, duration: 0 },
            { id: "eid173", tween: [ "style", "${_honduras}", "width", '15.024549824363px', { fromValue: '41.992286682129px'}], position: 1750, duration: 500 },
            { id: "eid594", tween: [ "style", "${_txt_salvador}", "width", '68.033332824707px', { fromValue: '159px'}], position: 1750, duration: 500 },
            { id: "eid524", tween: [ "style", "${_txt_cuba}", "top", '241.33px', { fromValue: '467px'}], position: 1750, duration: 500 },
            { id: "eid81", tween: [ "style", "${_nicaragua}", "left", '325px', { fromValue: '325px'}], position: 1500, duration: 0 },
            { id: "eid178", tween: [ "style", "${_nicaragua}", "left", '115px', { fromValue: '325px'}], position: 1750, duration: 500 },
            { id: "eid206", tween: [ "style", "${_closenortam_btn}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 250 },
            { id: "eid210", tween: [ "style", "${_closenortam_btn}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 190 },
            { id: "eid104", tween: [ "style", "${_puerto_rico}", "height", '9px', { fromValue: '9px'}], position: 1500, duration: 0 },
            { id: "eid196", tween: [ "style", "${_puerto_rico}", "height", '3px', { fromValue: '9px'}], position: 1750, duration: 500 },
            { id: "eid791", tween: [ "style", "${_txt_uruguay}", "top", '393.32px', { fromValue: '400px'}], position: 3750, duration: 500 },
            { id: "eid790", tween: [ "style", "${_txt_uruguay}", "left", '200px', { fromValue: '360px'}], position: 3750, duration: 500 },
            { id: "eid775", tween: [ "style", "${_txt_chile}", "height", '4.4575329677962px', { fromValue: '13px'}], position: 3750, duration: 500 },
            { id: "eid688", tween: [ "style", "${_txt_venzuela}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid687", tween: [ "style", "${_txt_venzuela}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
            { id: "eid701", tween: [ "style", "${_txt_venzuela}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid702", tween: [ "style", "${_txt_venzuela}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid152", tween: [ "style", "${_guate}", "height", '38.328573270731px', { fromValue: '38.328573270731px'}], position: 1500, duration: 0 },
            { id: "eid169", tween: [ "style", "${_guate}", "height", '14px', { fromValue: '38.328573270731px'}], position: 1750, duration: 500 },
            { id: "eid774", tween: [ "style", "${_txt_chile}", "top", '397.53px', { fromValue: '440px'}], position: 3750, duration: 500 },
            { id: "eid600", tween: [ "style", "${_txt_honduras}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid599", tween: [ "style", "${_txt_honduras}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid613", tween: [ "style", "${_txt_honduras}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid614", tween: [ "style", "${_txt_honduras}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid615", tween: [ "style", "${_txt_honduras}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid616", tween: [ "style", "${_txt_honduras}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid506", tween: [ "style", "${_txt_mexico}", "top", '248.77px', { fromValue: '472px'}], position: 1750, duration: 500 },
            { id: "eid366", tween: [ "style", "${_peru}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid350", tween: [ "style", "${_peru}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
            { id: "eid403", tween: [ "style", "${_peru}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid490", tween: [ "style", "${_peru}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid544", tween: [ "style", "${_txt_repdominicana}", "width", '65.433334350586px', { fromValue: '149px'}], position: 1750, duration: 500 },
            { id: "eid730", tween: [ "style", "${_txt_peru}", "width", '39.046543374252px', { fromValue: '96px'}], position: 3750, duration: 500 },
            { id: "eid90", tween: [ "style", "${_panama}", "top", '572px', { fromValue: '572px'}], position: 1500, duration: 0 },
            { id: "eid187", tween: [ "style", "${_panama}", "top", '279px', { fromValue: '572px'}], position: 1750, duration: 500 },
            { id: "eid759", tween: [ "style", "${_txt_paraguay}", "height", '5.3330607407407px', { fromValue: '16px'}], position: 3750, duration: 500 },
            { id: "eid760", tween: [ "style", "${_txt_paraguay}", "width", '44.9977px', { fromValue: '135px'}], position: 3750, duration: 500 },
            { id: "eid92", tween: [ "style", "${_panama}", "height", '20px', { fromValue: '20px'}], position: 1500, duration: 0 },
            { id: "eid188", tween: [ "style", "${_panama}", "height", '7.19230815278px', { fromValue: '20px'}], position: 1750, duration: 500 },
            { id: "eid505", tween: [ "style", "${_txt_mexico}", "left", '28.23px', { fromValue: '109px'}], position: 1750, duration: 500 },
            { id: "eid18", tween: [ "style", "${_mapa}", "top", '34.72px', { fromValue: '92.37px'}], position: 750, duration: 750 },
            { id: "eid61", tween: [ "style", "${_mapa}", "top", '92px', { fromValue: '34.72px'}], position: 1750, duration: 500 },
            { id: "eid233", tween: [ "style", "${_mapa}", "top", '-465px', { fromValue: '92px'}], position: 2500, duration: 750 },
            { id: "eid265", tween: [ "style", "${_mapa}", "top", '92px', { fromValue: '-465px'}], position: 3750, duration: 500 },
            { id: "eid418", tween: [ "style", "${_mapa}", "top", '-97px', { fromValue: '92px'}], position: 5000, duration: 750 },
            { id: "eid438", tween: [ "style", "${_mapa}", "top", '92px', { fromValue: '-97px'}], position: 6075, duration: 675 },
            { id: "eid297", tween: [ "style", "${_peru}", "top", '316.77px', { fromValue: '179.95px'}], position: 3750, duration: 500 },
            { id: "eid39", tween: [ "style", "${_mexico}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid219", tween: [ "style", "${_mexico}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid236", tween: [ "style", "${_mexico}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid386", tween: [ "style", "${_mexico}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid390", tween: [ "style", "${_mexico}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid483", tween: [ "style", "${_mexico}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid67", tween: [ "style", "${_mexico}", "width", '187.8287576815px', { fromValue: '187.8287576815px'}], position: 1500, duration: 0 },
            { id: "eid149", tween: [ "style", "${_mexico}", "width", '65.439559936523px', { fromValue: '187.8287576815px'}], position: 1750, duration: 500 },
            { id: "eid748", tween: [ "style", "${_txt_paraguay}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
            { id: "eid761", tween: [ "style", "${_txt_paraguay}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid762", tween: [ "style", "${_txt_paraguay}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid299", tween: [ "style", "${_peru}", "width", '19.663188155254px', { fromValue: '56px'}], position: 3750, duration: 500 },
            { id: "eid592", tween: [ "style", "${_txt_salvador}", "top", '267.82px', { fromValue: '535px'}], position: 1750, duration: 500 },
            { id: "eid8", tween: [ "style", "${_mapa}", "width", '2317.3338120065px', { fromValue: '807.75px'}], position: 750, duration: 750 },
            { id: "eid62", tween: [ "style", "${_mapa}", "width", '808px', { fromValue: '2317.3338120065px'}], position: 1750, duration: 500 },
            { id: "eid234", tween: [ "style", "${_mapa}", "width", '2317px', { fromValue: '808px'}], position: 2500, duration: 750 },
            { id: "eid266", tween: [ "style", "${_mapa}", "width", '808px', { fromValue: '2317px'}], position: 3750, duration: 500 },
            { id: "eid419", tween: [ "style", "${_mapa}", "width", '2317px', { fromValue: '808px'}], position: 5000, duration: 750 },
            { id: "eid439", tween: [ "style", "${_mapa}", "width", '808px', { fromValue: '2317px'}], position: 6075, duration: 675 },
            { id: "eid818", tween: [ "style", "${_txt_espaa}", "height", '6.3685302734375px', { fromValue: '16px'}], position: 6075, duration: 675 },
            { id: "eid76", tween: [ "style", "${_salvador}", "height", '13px', { fromValue: '13px'}], position: 1500, duration: 0 },
            { id: "eid156", tween: [ "style", "${_salvador}", "height", '6px', { fromValue: '13px'}], position: 1750, duration: 500 },
            { id: "eid319", tween: [ "style", "${_chile}", "width", '17.609923350237px', { fromValue: '51px'}], position: 3750, duration: 500 },
            { id: "eid742", tween: [ "style", "${_txt_bolivia}", "left", '114.5px', { fromValue: '139px'}], position: 3750, duration: 500 },
            { id: "eid743", tween: [ "style", "${_txt_bolivia}", "top", '351.82px', { fromValue: '280px'}], position: 3750, duration: 500 },
            { id: "eid86", tween: [ "style", "${_cost_rica}", "top", '561px', { fromValue: '561px'}], position: 1500, duration: 0 },
            { id: "eid183", tween: [ "style", "${_cost_rica}", "top", '276.22px', { fromValue: '561px'}], position: 1750, duration: 500 },
            { id: "eid764", tween: [ "style", "${_act_mex}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0 },
            { id: "eid727", tween: [ "style", "${_txt_peru}", "top", '333.72px', { fromValue: '219px'}], position: 3750, duration: 500 },
            { id: "eid684", tween: [ "style", "${_txt_colombia}", "width", '108.5px', { fromValue: '244px'}], position: 3750, duration: 500 },
            { id: "eid472", tween: [ "style", "${_closeuropa}", "display", 'none', { fromValue: 'block'}], position: 6330, duration: 0 },
            { id: "eid700", tween: [ "style", "${_txt_venzuela}", "width", '64.083335876465px', { fromValue: '152px'}], position: 3750, duration: 500 },
            { id: "eid325", tween: [ "style", "${_argentina}", "top", '381.87px', { fromValue: '364px'}], position: 3750, duration: 500 },
            { id: "eid713", tween: [ "style", "${_txt_ecuador}", "left", '132px', { fromValue: '171px'}], position: 3750, duration: 500 },
            { id: "eid83", tween: [ "style", "${_nicaragua}", "width", '32px', { fromValue: '32px'}], position: 1500, duration: 0 },
            { id: "eid181", tween: [ "style", "${_nicaragua}", "width", '11.433333396912px', { fromValue: '32px'}], position: 1750, duration: 500 },
            { id: "eid699", tween: [ "style", "${_txt_venzuela}", "height", '10.540022348103px', { fromValue: '25px'}], position: 3750, duration: 500 },
            { id: "eid363", tween: [ "style", "${_argentina}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid356", tween: [ "style", "${_argentina}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
            { id: "eid407", tween: [ "style", "${_argentina}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid493", tween: [ "style", "${_argentina}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid712", tween: [ "style", "${_txt_ecuador}", "top", '310.67px', { fromValue: '160px'}], position: 3750, duration: 500 },
            { id: "eid367", tween: [ "style", "${_ecuador}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid348", tween: [ "style", "${_ecuador}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
            { id: "eid402", tween: [ "style", "${_ecuador}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid489", tween: [ "style", "${_ecuador}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid369", tween: [ "style", "${_venezuela}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid247", tween: [ "style", "${_venezuela}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
            { id: "eid401", tween: [ "style", "${_venezuela}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid487", tween: [ "style", "${_venezuela}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid370", tween: [ "style", "${_closensuram_btn}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid421", tween: [ "style", "${_closensuram_btn}", "display", 'none', { fromValue: 'block'}], position: 4250, duration: 0 },
            { id: "eid698", tween: [ "style", "${_txt_venzuela}", "left", '170px', { fromValue: '263px'}], position: 3750, duration: 500 },
            { id: "eid776", tween: [ "style", "${_txt_chile}", "width", '33.378851789188px', { fromValue: '97px'}], position: 3750, duration: 500 },
            { id: "eid449", tween: [ "style", "${_espaa}", "height", '20px', { fromValue: '59px'}], position: 6075, duration: 675 },
            { id: "eid728", tween: [ "style", "${_txt_peru}", "left", '106.97px', { fromValue: '100px'}], position: 3750, duration: 500 },
            { id: "eid550", tween: [ "style", "${_txt_puertorico}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid549", tween: [ "style", "${_txt_puertorico}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid563", tween: [ "style", "${_txt_puertorico}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid564", tween: [ "style", "${_txt_puertorico}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid565", tween: [ "style", "${_txt_puertorico}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid566", tween: [ "style", "${_txt_puertorico}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid531", tween: [ "style", "${_txt_repdominicana}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid532", tween: [ "style", "${_txt_repdominicana}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid545", tween: [ "style", "${_txt_repdominicana}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid546", tween: [ "style", "${_txt_repdominicana}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid547", tween: [ "style", "${_txt_repdominicana}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid548", tween: [ "style", "${_txt_repdominicana}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid773", tween: [ "style", "${_txt_chile}", "left", '130.6px', { fromValue: '164px'}], position: 3750, duration: 500 },
            { id: "eid665", tween: [ "style", "${_txt_panama}", "width", '20.92581px', { fromValue: '60px'}], position: 1750, duration: 500 },
            { id: "eid663", tween: [ "style", "${_txt_panama}", "top", '269.65px', { fromValue: '544px'}], position: 1750, duration: 500 },
            { id: "eid51", tween: [ "style", "${_puerto_rico}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid222", tween: [ "style", "${_puerto_rico}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid245", tween: [ "style", "${_puerto_rico}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid389", tween: [ "style", "${_puerto_rico}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid396", tween: [ "style", "${_puerto_rico}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid486", tween: [ "style", "${_puerto_rico}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid364", tween: [ "style", "${_chile}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid354", tween: [ "style", "${_chile}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
            { id: "eid406", tween: [ "style", "${_chile}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid492", tween: [ "style", "${_chile}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid662", tween: [ "style", "${_txt_panama}", "left", '125px', { fromValue: '355px'}], position: 1750, duration: 500 },
            { id: "eid578", tween: [ "style", "${_txt_guate}", "top", '260.92px', { fromValue: '524px'}], position: 1750, duration: 500 },
            { id: "eid289", tween: [ "style", "${_ecuador}", "top", '305.62px', { fromValue: '147.47px'}], position: 3750, duration: 500 },
            { id: "eid649", tween: [ "style", "${_txt_costarica}", "top", '281px', { fromValue: '568px'}], position: 1750, duration: 500 },
            { id: "eid290", tween: [ "style", "${_ecuador}", "left", '132.13px', { fromValue: '166px'}], position: 3750, duration: 500 },
            { id: "eid636", tween: [ "style", "${_txt_costarica}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid635", tween: [ "style", "${_txt_costarica}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid645", tween: [ "style", "${_txt_costarica}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid646", tween: [ "style", "${_txt_costarica}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid647", tween: [ "style", "${_txt_costarica}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid670", tween: [ "style", "${_txt_costarica}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid629", tween: [ "style", "${_txt_nicaragua}", "height", '20.791072041344px', { fromValue: '54px'}], position: 1750, duration: 500 },
            { id: "eid43", tween: [ "style", "${_salvador}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid217", tween: [ "style", "${_salvador}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid238", tween: [ "style", "${_salvador}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid384", tween: [ "style", "${_salvador}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid393", tween: [ "style", "${_salvador}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid480", tween: [ "style", "${_salvador}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid664", tween: [ "style", "${_txt_panama}", "height", '15.345594532171px', { fromValue: '44px'}], position: 1750, duration: 500 },
            { id: "eid628", tween: [ "style", "${_txt_nicaragua}", "top", '256.82px', { fromValue: '507px'}], position: 1750, duration: 500 },
            { id: "eid627", tween: [ "style", "${_txt_nicaragua}", "left", '116px', { fromValue: '329px'}], position: 1750, duration: 500 },
            { id: "eid618", tween: [ "style", "${_txt_nicaragua}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid617", tween: [ "style", "${_txt_nicaragua}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid631", tween: [ "style", "${_txt_nicaragua}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid632", tween: [ "style", "${_txt_nicaragua}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid633", tween: [ "style", "${_txt_nicaragua}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid634", tween: [ "style", "${_txt_nicaragua}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid612", tween: [ "style", "${_txt_honduras}", "width", '65.133331298828px', { fromValue: '151px'}], position: 1750, duration: 500 },
            { id: "eid73", tween: [ "style", "${_salvador}", "left", '309px', { fromValue: '309px'}], position: 1500, duration: 0 },
            { id: "eid154", tween: [ "style", "${_salvador}", "left", '108px', { fromValue: '309px'}], position: 1750, duration: 500 },
            { id: "eid579", tween: [ "style", "${_txt_guate}", "height", '5.8465619087219px', { fromValue: '13px'}], position: 1750, duration: 500 },
            { id: "eid577", tween: [ "style", "${_txt_guate}", "left", '44.12px', { fromValue: '162px'}], position: 1750, duration: 500 },
            { id: "eid280", tween: [ "style", "${_venezuela}", "height", '18.698466122602px', { fromValue: '52px'}], position: 3750, duration: 500 },
            { id: "eid342", tween: [ "style", "${_uruguay}", "left", '195.82px', { fromValue: '349px'}], position: 3750, duration: 500 },
            { id: "eid568", tween: [ "style", "${_txt_guate}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid567", tween: [ "style", "${_txt_guate}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid581", tween: [ "style", "${_txt_guate}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid582", tween: [ "style", "${_txt_guate}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid583", tween: [ "style", "${_txt_guate}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid584", tween: [ "style", "${_txt_guate}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid745", tween: [ "style", "${_txt_bolivia}", "width", '55.5px', { fromValue: '139px'}], position: 3750, duration: 500 },
            { id: "eid87", tween: [ "style", "${_cost_rica}", "width", '23px', { fromValue: '23px'}], position: 1500, duration: 0 },
            { id: "eid185", tween: [ "style", "${_cost_rica}", "width", '8px', { fromValue: '23px'}], position: 1750, duration: 500 },
            { id: "eid543", tween: [ "style", "${_txt_repdominicana}", "height", '15.77670450366px', { fromValue: '36px'}], position: 1750, duration: 500 },
            { id: "eid95", tween: [ "style", "${_cuba}", "width", '77.399997253418px', { fromValue: '77.399997253418px'}], position: 1500, duration: 0 },
            { id: "eid177", tween: [ "style", "${_cuba}", "width", '25px', { fromValue: '77.399997253418px'}], position: 1750, duration: 500 },
            { id: "eid324", tween: [ "style", "${_argentina}", "height", '48.288099601478px', { fromValue: '138px'}], position: 3750, duration: 500 },
            { id: "eid542", tween: [ "style", "${_txt_repdominicana}", "top", '241.22px', { fromValue: '468px'}], position: 1750, duration: 500 },
            { id: "eid541", tween: [ "style", "${_txt_repdominicana}", "left", '157.67px', { fromValue: '452px'}], position: 1750, duration: 500 },
            { id: "eid465", tween: [ "style", "${_guinea_ecua}", "width", '6px', { fromValue: '9.6666870117188px'}], position: 6075, duration: 675 },
            { id: "eid507", tween: [ "style", "${_txt_mexico}", "height", '6.2373414444715px', { fromValue: '13px'}], position: 1750, duration: 500 },
            { id: "eid672", tween: [ "style", "${_txt_colombia}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid671", tween: [ "style", "${_txt_colombia}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
            { id: "eid685", tween: [ "style", "${_txt_colombia}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid686", tween: [ "style", "${_txt_colombia}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid74", tween: [ "style", "${_salvador}", "top", '533px', { fromValue: '533px'}], position: 1500, duration: 0 },
            { id: "eid155", tween: [ "style", "${_salvador}", "top", '265px', { fromValue: '533px'}], position: 1750, duration: 500 },
            { id: "eid653", tween: [ "style", "${_txt_panama}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid652", tween: [ "style", "${_txt_panama}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid666", tween: [ "style", "${_txt_panama}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid667", tween: [ "style", "${_txt_panama}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid668", tween: [ "style", "${_txt_panama}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid669", tween: [ "style", "${_txt_panama}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid102", tween: [ "style", "${_puerto_rico}", "top", '501px', { fromValue: '501px'}], position: 1500, duration: 0 },
            { id: "eid195", tween: [ "style", "${_puerto_rico}", "top", '255px', { fromValue: '501px'}], position: 1750, duration: 500 },
            { id: "eid703", tween: [ "style", "${_txt_ecuador}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
            { id: "eid716", tween: [ "style", "${_txt_ecuador}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid717", tween: [ "style", "${_txt_ecuador}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid82", tween: [ "style", "${_nicaragua}", "top", '532px', { fromValue: '532px'}], position: 1500, duration: 0 },
            { id: "eid179", tween: [ "style", "${_nicaragua}", "top", '266px', { fromValue: '532px'}], position: 1750, duration: 500 },
            { id: "eid334", tween: [ "style", "${_paraguay}", "left", '182.67px', { fromValue: '311px'}], position: 3750, duration: 500 },
            { id: "eid757", tween: [ "style", "${_txt_paraguay}", "left", '185px', { fromValue: '310px'}], position: 3750, duration: 500 },
            { id: "eid282", tween: [ "style", "${_venezuela}", "left", '155.27px', { fromValue: '234px'}], position: 3750, duration: 500 },
            { id: "eid523", tween: [ "style", "${_txt_cuba}", "left", '132px', { fromValue: '386px'}], position: 1750, duration: 500 },
            { id: "eid75", tween: [ "style", "${_salvador}", "width", '15px', { fromValue: '15px'}], position: 1500, duration: 0 },
            { id: "eid157", tween: [ "style", "${_salvador}", "width", '6.9142856597901px', { fromValue: '15px'}], position: 1750, duration: 500 },
            { id: "eid508", tween: [ "style", "${_txt_mexico}", "width", '54.780798339844px', { fromValue: '114px'}], position: 1750, duration: 500 },
            { id: "eid283", tween: [ "style", "${_venezuela}", "width", '20.135567880817px', { fromValue: '56px'}], position: 3750, duration: 500 },
            { id: "eid288", tween: [ "style", "${_ecuador}", "height", '10.200530427582px', { fromValue: '30px'}], position: 3750, duration: 500 },
            { id: "eid279", tween: [ "style", "${_colombia}", "width", '17.897949843176px', { fromValue: '51px'}], position: 3750, duration: 500 },
            { id: "eid468", tween: [ "style", "${_closeuropa}", "opacity", '1', { fromValue: '0'}], position: 5450, duration: 300 },
            { id: "eid471", tween: [ "style", "${_closeuropa}", "opacity", '0', { fromValue: '1'}], position: 6075, duration: 255 },
            { id: "eid630", tween: [ "style", "${_txt_nicaragua}", "width", '28.511478424072px', { fromValue: '74px'}], position: 1750, duration: 500 },
            { id: "eid89", tween: [ "style", "${_panama}", "left", '353px', { fromValue: '353px'}], position: 1500, duration: 0 },
            { id: "eid186", tween: [ "style", "${_panama}", "left", '124px', { fromValue: '353px'}], position: 1750, duration: 500 },
            { id: "eid593", tween: [ "style", "${_txt_salvador}", "height", '10.235237364225px', { fromValue: '24px'}], position: 1750, duration: 500 },
            { id: "eid733", tween: [ "style", "${_txt_bolivia}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
            { id: "eid746", tween: [ "style", "${_txt_bolivia}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid747", tween: [ "style", "${_txt_bolivia}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid316", tween: [ "style", "${_chile}", "height", '55.277859453102px', { fromValue: '160px'}], position: 3750, duration: 500 },
            { id: "eid373", tween: [ "style", "${_closensuram_btn}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 250 },
            { id: "eid376", tween: [ "style", "${_closensuram_btn}", "opacity", '0.025157232704402', { fromValue: '1'}], position: 3750, duration: 250 },
            { id: "eid343", tween: [ "style", "${_uruguay}", "width", '9.3187960115553px', { fromValue: '24px'}], position: 3750, duration: 500 },
            { id: "eid306", tween: [ "style", "${_bolivia}", "left", '165.35px', { fromValue: '261px'}], position: 3750, duration: 500 },
            { id: "eid88", tween: [ "style", "${_cost_rica}", "height", '23px', { fromValue: '23px'}], position: 1500, duration: 0 },
            { id: "eid184", tween: [ "style", "${_cost_rica}", "height", '8px', { fromValue: '23px'}], position: 1750, duration: 500 },
            { id: "eid98", tween: [ "style", "${_rep_dominica}", "top", '493px', { fromValue: '493px'}], position: 1500, duration: 0 },
            { id: "eid191", tween: [ "style", "${_rep_dominica}", "top", '252px', { fromValue: '493px'}], position: 1750, duration: 500 },
            { id: "eid475", tween: [ "style", "${_rep_dominica}", "top", '252px', { fromValue: '252px'}], position: 6750, duration: 0 },
            { id: "eid332", tween: [ "style", "${_paraguay}", "height", '13.577972985737px', { fromValue: '39px'}], position: 3750, duration: 500 },
            { id: "eid464", tween: [ "style", "${_guinea_ecua}", "height", '3.6666870117188px', { fromValue: '7.2500152587891px'}], position: 6075, duration: 675 },
            { id: "eid77", tween: [ "style", "${_honduras}", "left", '315px', { fromValue: '315px'}], position: 1500, duration: 0 },
            { id: "eid170", tween: [ "style", "${_honduras}", "left", '111px', { fromValue: '315px'}], position: 1750, duration: 500 },
            { id: "eid296", tween: [ "style", "${_peru}", "left", '134.45px', { fromValue: '174.47px'}], position: 3750, duration: 500 },
            { id: "eid452", tween: [ "style", "${_espaa}", "left", '313px', { fromValue: '276px'}], position: 6075, duration: 675 },
            { id: "eid463", tween: [ "style", "${_guinea_ecua}", "left", '354.32px', { fromValue: '397.33px'}], position: 6075, duration: 675 },
            { id: "eid425", tween: [ "style", "${_espaa}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid422", tween: [ "style", "${_espaa}", "display", 'block', { fromValue: 'none'}], position: 6075, duration: 0 },
            { id: "eid298", tween: [ "style", "${_peru}", "height", '29.141853654324px', { fromValue: '83px'}], position: 3750, duration: 500 },
            { id: "eid49", tween: [ "style", "${_cuba}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid214", tween: [ "style", "${_cuba}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid243", tween: [ "style", "${_cuba}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid381", tween: [ "style", "${_cuba}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid394", tween: [ "style", "${_cuba}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid477", tween: [ "style", "${_cuba}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid96", tween: [ "style", "${_cuba}", "height", '27px', { fromValue: '27px'}], position: 1500, duration: 0 },
            { id: "eid176", tween: [ "style", "${_cuba}", "height", '8.722808758302px', { fromValue: '27px'}], position: 1750, duration: 500 },
            { id: "eid362", tween: [ "style", "${_uruguay}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid359", tween: [ "style", "${_uruguay}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
            { id: "eid408", tween: [ "style", "${_uruguay}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid494", tween: [ "style", "${_uruguay}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid335", tween: [ "style", "${_paraguay}", "width", '12.865638267083px', { fromValue: '37px'}], position: 3750, duration: 500 },
            { id: "eid365", tween: [ "style", "${_bolivia}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid352", tween: [ "style", "${_bolivia}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
            { id: "eid404", tween: [ "style", "${_bolivia}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid491", tween: [ "style", "${_bolivia}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-28102227");
