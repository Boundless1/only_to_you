/**
 * 打字效果 byaei
 */
 function typewrite()
 {
     let str="To 聪聪：<--真的不容易，终于来到了这个页面。前面种种，总给我一种送你满是情话的贺卡一般的感觉，粗略的统计了一下，前面的26段话一半儿来源百度知乎，一半儿都是我在发牢骚，哎，不扯了不扯了。现在，终于可以好好说说心里话了。<--先来说说你给我的感觉吧，乐观开朗，极擅言谈的一个小姑娘，而这种性格，是我可望而不可及的。而我呢，不善交流，给人一种不好相处的感觉。但是，我感觉我好像有些变了，脸上多了笑容，也变的逐渐会分享。其实在我的眼里，你在任何时候，任何地方，都会闪闪发光！我始终不会忘记，你会记得我说过的一些话，也了解我的口味；而我也会记得，你喜欢阳光，喜欢星空，喜欢推理悬疑，喜欢吃喝玩儿乐等等等等，而我也想过，或送你一颗星，又或送你一本书，再或者是一本插画集，但是，最终选择了这个方案，或许，这就是一个理工男孩儿的浪漫吧。（PS:虽然框架来源于B站，但是，我做了一些改动。）另外，我很多个第一次在你的身上实现，第一次游戏开麦，第一次对着你抱着吉他唱歌（PS:虽然很烂，但是也算！），第一次的当众演出，当然，也包括第一次的表白…好了，该说的就先这么多吧，这里的这句话我觉得特别好——我愿意为你，写满整个世界的情诗，因为我喜欢你，因为…我也想给你哪怕一点点的浪漫，因为当代码不止是代码的时候，它就有了新的意义。<--那么，郭聪聪同学，我想要带你玩儿遍祖国的大好河山，陪你去体验不同地方的特色美食，和你一同努力进步，我还想要与你共同实现更多的第一次……我们，在一起吧？";//利用<作为换行符 -作为空格
     let strp="";
     let i=0;
     function print1()
     {
         if(str[i]=='<')
         {
             document.getElementById("box1").innerHTML=strp+"<br>"+'|';
             strp+="<br>";
         }
         else
         if(str[i]=='-')
         {
             document.getElementById("box1").innerHTML=strp+'&nbsp&nbsp&nbsp';
             strp+="&nbsp&nbsp&nbsp";
         }
         else
         {
             strp+=str[i];
             if(i==str.length-1)
                document.getElementById("box1").innerHTML=strp;
             else
                document.getElementById("box1").innerHTML=strp+'|';
         }
         i++;
     }
     function print2()
     {
         setTimeout(()=>{document.getElementById("box1").innerHTML=strp+'&nbsp';},100);
         setTimeout(()=>{document.getElementById("box1").innerHTML=strp+'|';},630);
     }
     let printid=setInterval(() => {
         print1();
         let x = document.createElement("audio");
         x.setAttribute("src", "./video/ka.mp3");
         x.setAttribute("autoplay", "autoplay");
         if(i==str.length)
            clearInterval(printid);
         if(i==str.length-3){
             let btn_1=document.getElementById("btn_1");
             let btn_2=document.getElementById("btn_2");
             let btn__1=document.getElementById("btn__1");
             let btn__2=document.getElementById("btn__2");
             btn_1.style.opacity=1;
             btn__1.style.opacity=1;
             btn__1.style.zIndex=10;
             btn_1.style.transition="1.5s";
             btn__1.style.transition="1.5s";
             btn_2.style.opacity=1;
             btn__2.style.opacity=1;
             btn__2.style.zIndex=10;
             btn_2.style.transition="1.5s";
             btn__2.style.transition="1.5s";

             document.querySelector('#btn__1').onclick = function(){
//             let sea=document.getElementById("sea");
             let box1=document.getElementById("box1");
             let box2=document.getElementById("box2");
             btn_1.style.opacity=0;
             btn__1.style.opacity=0;
             btn_1.style.transition="1.5s";
             btn__1.style.transition="1.5s";
             btn_2.style.opacity=0;
             btn__2.style.opacity=0;
             btn_2.style.transition="1.5s";
             btn__2.style.transition="1.5s";
             str="什么？！？！？！？！？<真的？？？我没有在做梦吧？！？！？！？<哈<哈哈<哈哈哈<哈哈哈哈<哈哈哈哈哈<哈哈哈哈哈哈<哈哈哈哈哈哈哈<我太开心了！！！！！<啊啊啊啊啊啊啊啊啊啊啊";
             box2.style.zIndex=8;
             box2.style.opacity=1;
             show(str, 'box2');
             }
             document.querySelector('#btn__2').onclick = function(){
             let box1=document.getElementById("box1");
             let box2=document.getElementById("box2");
             btn_1.style.opacity=0;
             btn__1.style.opacity=0;
             btn_1.style.transition="1.5s";
             btn__1.style.transition="1.5s";
             btn_2.style.opacity=0;
             btn__2.style.opacity=0;
             btn_2.style.transition="1.5s";
             btn__2.style.transition="1.5s";
             str="<<怎么样？<我这网页做的效果还可以吧~<别多想，别多想，我只是展示一下我的成果<很抱歉，给你带来就困扰<";
             box2.style.zIndex=8;
             box2.style.opacity=1;
             show(str, 'box2');
             }
         }
     },90);

//     setTimeout(() => {
//         id=setInterval(print2,1060);//注意setInterval内部直接写函数的时候是直接写函数名不加括号的。
//     },(str.length-1)*90);
     //0.53秒闪一次
 }
 

 function show(str, pos)
 {
     let strp="";
     let i=0;

     function print1()
     {
         if(str[i]=='<')
         {
             document.getElementById(pos).innerHTML=strp+"<br>"+'|';
             strp+="<br>";
         }
         else
         if(str[i]=='-')
         {
             document.getElementById(pos).innerHTML=strp+'&nbsp&nbsp&nbsp';
             strp+="&nbsp&nbsp&nbsp";
         }
         else
         {
             strp+=str[i];
             if(i==str.length-1)
                document.getElementById(pos).innerHTML=strp;
             else
                document.getElementById(pos).innerHTML=strp+'|';
         }
         i++;
     }

     let printid=setInterval(() => {
         print1();
         if(i==str.length)
            clearInterval(printid);
     },90);
 }



let clickb=false;//判断播放按钮是否已经按过了，如果已经按过了才可以执行键盘事件
 
 function funclick()
 {
     let x = document.createElement("audio");
     x.setAttribute("src", "./video/55.mp3");
     x.setAttribute("autoplay","autoplay");
     let yinyan=document.getElementById("yinyan");
     yinyan.setAttribute("style","opacity:0");
     setTimeout(function(){
         document.getElementById("fronclick").style.zIndex=-300;
         document.getElementById("box").style.opacity=1;
     },1500);//让播放按钮消失了
     //yinyan.style.opacity=0;
     clickb=true;
 }


 
 
 let k={
     a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7,i:8,j:9,k:10,l:11,m:12,n:13,o:14,p:15,q:16,r:17,s:18,t:19,u:20,v:21,w:22,x:23,y:24,z:25,
     A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25
 } 
 let a=[
     {name:"A",yin:1, str:"<br><br>这是我第一次有这种感觉(✿◡‿◡)，<br><br>喜欢你的感觉…<br><br>总之，和你待在一起很开心…"},
     {name:"B" ,yin:2, str:"<br><br>谢谢你，让我慢慢懂得，慢慢改变，<br><br>非常开心在大学时光能够遇见你，认识你，<br><br>而我也变的越来越喜欢你， <br><br>So，我决定，莽一把！"},
     {name:"C" ,yin:6, str:"<br><br>Courage，勇气 <br><br>确实，将这个网页分享给你，<br><br>我究竟是鼓足了多大的勇气。"},
     {name:"D" ,yin:4, str:"<br><br>OMG！怎么才到第四个…<br><br>我滴天儿啊！！！<br><br>我承认，我不太适合说这种小情话，太难了😭…"},
     {name:"E" ,yin:5, str:"<br><br>行吧，想不到还有什么解决办法，就😏… <br><br>先送你一堆这个吧~<br><br>💗🧡💛💚青💙💜🤎🤍💖💓<br><br>（PS:怎么没有青色的心呢！！！）"},
     {name:"F" ,yin:6, str:"<br><br>哦？我好像有主意了(●ˇ∀ˇ●)<br><br>我决定，打开<br><br><a href=https://www.baidu.com/ target=_blank>百度一下，你就知道</a>~~，哈哈哈！"},
     {name:"G" ,yin:9, str:"<br>以下内容皆源自百度…<br><br><br>山川河流，不及你眼眸<br><br>春夏秋冬，不如你左右"},
     {name:"H" ,yin:4, str:"<br><br>我要你知道，这个世界上有一个人会永远地等着你， <br></br>不管在什么时候，不管你在什么地方，<br></br>反正你知道，总会有这样一个人。"},
     {name:"I" ,yin:9, str:"<br><br><br><br>缘分来得早或迟都没有关系，<br><br>遇见你就是我最好的时光。"},
     {name:"J" ,yin:10, str:"<br><br>如果可以和你在一起，<br><br>我宁愿让天空所有的星光全部陨落，<br><br>因为你的眼睛，<br><br>是我生命汇总最亮的光芒。"},
     {name:"K" ,yin:11, str:"<br><br>诶呀妈呀，，，<br><br>太肉麻了…<br><br>不行不行，换一种方式吧！！<br></br>（PS:怎么着也得把26个字母凑齐不是？😂）"},
     {name:"L" ,yin:12, str:"<br><br>🤭🤭🤭🤭🤭<br><br>是不是感觉风格突然之间好了不少？<br><br>适当更改更改风格也挺好的~"},
     {name:"M" ,yin:13, str:"<br><br>行吧，我承认，好难写啊，<br></br>我到底在干什么啊？！？<br><br>我不是在表白嘛？怎么总是发牢骚…"},
     {name:"N" ,yin:2, str:"<br>咳咳，回归正题！<br><br>聪聪，在浏览了诸多表白方法之后，<br><br>我最终选择采用这种方式，<br><br>我想，既然咱这码代码的水平，何不尝试尝试呢？ (～￣▽￣)～"},
     {name:"O" ,yin:8, str:" <br><br>于是乎，最终呈现出这么一个效果…<br><br>其实吧，我觉得还凑活👻👻👻<br><br>起码看上去还挺高大上的~~~<br><br>哈哈哈哈哈哈"},
     {name:"P" ,yin:16, str:" <br>OKOK，真的开始了：<br><br>先说一说我对于喜欢的理解吧，<br><br>和你在一起的时候，我很开心；收到你的消息的时候，我很开心；和你打游戏的时候，我也很开心。<br><br>而我，也会时不时的想到你~<br><br>我想，这就是喜欢吧。"},
     {name:"Q" ,yin:17, str:"<br><br>我想要把身边的奇闻趣事分享给你，<br><br>会和你吐槽一些悲惨经历，<br><br>我变的逐渐开始喜欢分享！"},
     {name:"R" ,yin:18, str:" <br><br>每一次，在我身上发生的一些事儿，<br><br>我第一个想到的就是说给你听。<br><br>有的时候甚至会没话找话…"},
     {name:"S" ,yin:3, str:"<br><br>确实，我觉得，我是很怂，<br><br>面对面的话我想我都不知道我已经在说什么了吧。<br><br>（PS:虽然现在我也不知道我在说什么…）"},
     {name:"T" ,yin:20, str:"<br><br>算了，<br><br>接下来，分享一些我觉得很美的句子吧~<br><br>(PS:毕竟后面还有重头戏，前面把话说完了后面不就没得说了🤣🤣🤣)"},
     {name:"U" ,yin:9, str:"<br><br>生命里，<br><br>最舍不得的那一页，<br><br>总是藏得最深。"},
     {name:"V" ,yin:22, str:"<br><br>欢乐总是太短，<br><br>寂寞总是很长。<br><br>我原想收获一缕春风，<br><br>你却给了我整个春天！"},
     {name:"W" ,yin:2, str:"<br><br>我在黄昏上写一封书信，<br><br>带着落日的余辉和银河的浪漫，<br><br>寄给你，<br><br>寄给温柔本身。"},
     {name:"X" ,yin:1, str:"<br><br>像是百花撞了春风，<br><br>见万物时，<br><br>万物是杯弓，<br><br>见你时，<br><br>你是惊鸿。"},
     {name:"Y" ,yin:25, str:"<br><br>我可以错过黄昏的末班车，<br><br>可以错过四月的樱花季，<br><br>可以错过凛冽的太阳雨，<br><br>可以错过很多，<br><br>唯独不想错过你。"},
     {name:"Z" ,yin:26, str:"<br><br>所念皆星河，<br><br>星河皆是你，<br><br>所爱隔山海，<br><br>山海皆可平！"}
 ];
 let b=["linear-gradient(25deg, #526fbf, #8c98d0, #bfc3e0, #f0f0f0)",//a
 "linear-gradient(30deg, #88a0ff, #b6bedd, #d6deb9, #eeff91)",//b
 "linear-gradient(35deg, #e473a3, #d294aa, #bbb0b1, #9ccab8)",//c
 "linear-gradient(40deg, #7b7bd4, #759cbc, #62bca2, #30db85)",//d
 "linear-gradient(45deg, #8fd647, #a0d187, #a8ccbf, #a8c7f7)",//e
 "linear-gradient(50deg, #00a08c, #7db19d, #c1c0af, #ffcec1)",//f
 "linear-gradient(55deg, #45E6FF, #75D9E9, #7FBFE0, #44BEFF)",//g
 "linear-gradient(60deg, #CDFF44, #E2EDC2, #F4FFA0, #DBF515)",//h
 "linear-gradient(65deg, #FFD312, #F1E6B7, #F0A682, #FF7F3F)",//i
 "linear-gradient(70deg, #EE818B, #ECB6BB, #FBBBD4, #F2619A)",//j
 "linear-gradient(75deg, #FB2DCF, #DAA1CE, #E2BFE9, #CB46E8)",//k
 "linear-gradient(80deg, #A03DF0, #BC9ED3, #966FFB, #5825D9)",//l
 "linear-gradient(85deg, #3349FA, #8892E2, #6594EC, #4282F9)",//m
 "linear-gradient(90deg, #429EF9, #8ABFF3, #A2DEF2, #2DC9FF)",//n
 "linear-gradient(95deg, #98F7FF, #DBF3F5, #AEE5E1, #33F7E9)",//o
 "linear-gradient(100deg, #28F09E, #ACF9DA, #8AE7B3, #1AF37A)",//p
 "linear-gradient(105deg, #14F51F, #BDF2BF, #B5D99D, #7FE53B)",//q
 "linear-gradient(110deg, #B6EE30, #E8F2D0, #E7F199, #DEF628)",//r
 "linear-gradient(115deg, #FFEF08, #FFFCCE, #ECD5A2, #FEBE2F)",//s
 "linear-gradient(120deg, #FF8844, #E9CEBE, #E7CBE5, #F39FEE)",//t
 "linear-gradient(125deg, #5EE7D4, #D8ECE9, #F0F29B, #F5FA37)",//u
 "linear-gradient(130deg, #FC4667, #DEC2C7, #F1AB57, #F6911A)",//v
 "linear-gradient(135deg, #FF4C9D, #FF4C9D, #F9D1E3, #EDE5E8)",//w
 "linear-gradient(140deg, #D142E4, #D142E4, #D9C8DB, #DA5CEA)",//x
 "linear-gradient(145deg, #54C992, #C4E3D4, #ECFCF5, #71F2B6)",//y
 "linear-gradient(150deg, #21ECFC, #B6F6FB, #9DC9CD, #35CAD6)"];//z
 let s='a';
 let records=0;//记录我已经输入过了，防止出现多个打字function byaei
 
 /* k字典， a声音＋引言，b颜色 */
 /*键盘事件*/
 function fl(e)
 {
     if(clickb==true)
     {
        let key =e.key;
        if((key<='z'&&key>='a')||(key<='Z'&&key>='A'))//避免大小写的错误
        {
             let p=a[k[key]];
             s=s+p.name;
             let x = document.createElement("audio");
             x.setAttribute("src", `./video/${p.yin}.mp3`);  //播放对应的音乐
             x.setAttribute("autoplay","autoplay");
             let box=document.getElementById("box");
             let boxl=document.getElementById("boxl");
             let boxr=document.getElementById("boxr");
             let boxup=document.getElementById("boxup");
             let bac=document.getElementById("bac");

             bac.style.opacity=0;
             box.style.transition="0.5s";
             box.style.opacity=0;
             boxup.style.opacity=0;

             if((s.indexOf("A")!=-1&&s.indexOf("B")!=-1&&s.indexOf("C")!=-1&&s.indexOf("D")!=-1&&s.indexOf("E")!=-1&&s.indexOf("F")!=-1&&s.indexOf("G")!=-1&&s.indexOf("H")!=-1&&s.indexOf("I")!=-1&&s.indexOf("J")!=-1&&s.indexOf("K")!=-1&&s.indexOf("L")!=-1&&s.indexOf("M")!=-1&&s.indexOf("N")!=-1&&s.indexOf("O")!=-1&&s.indexOf("P")!=-1&&s.indexOf("Q")!=-1&&s.indexOf("R")!=-1&&s.indexOf("S")!=-1&&s.indexOf("T")!=-1&&s.indexOf("U")!=-1&&s.indexOf("V")!=-1&&s.indexOf("W")!=-1&&s.indexOf("X")!=-1&&s.indexOf("Y")!=-1&&s.indexOf("Z")!=-1)||(s.indexOf("a")!=-1&&s.indexOf("b")!=-1&&s.indexOf("c")!=-1&&s.indexOf("d")!=-1&&s.indexOf("e")!=-1&&s.indexOf("f")!=-1&&s.indexOf("g")!=-1&&s.indexOf("h")!=-1&&s.indexOf("i")!=-1&&s.indexOf("j")!=-1&&s.indexOf("k")!=-1&&s.indexOf("l")!=-1&&s.indexOf("m")!=-1&&s.indexOf("n")!=-1&&s.indexOf("o")!=-1&&s.indexOf("p")!=-1&&s.indexOf("q")!=-1&&s.indexOf("r")!=-1&&s.indexOf("s")!=-1&&s.indexOf("t")!=-1&&s.indexOf("u")!=-1&&s.indexOf("v")!=-1&&s.indexOf("w")!=-1&&s.indexOf("x")!=-1&&s.indexOf("y")!=-1&&s.indexOf("z")!=-1))
             {
                  setTimeout(function()
                  {
                  boxl.innerHTML=`${p.name}`;
                  boxr.innerHTML=`${p.str}`;
                  console.log(b[k[key]]);
                  bac.style.background=`${b[k[key]]}`;
                  box.style.opacity=1;
                  boxup.style.opacity=1;
                  bac.style.opacity=1;
                  },500);

             }
             else
             {
                 if(key=='l'||key=='L')
                 {
                     setTimeout(function()
                     {
                     boxl.innerHTML=`${p.name}`;
                     console.log(b[k[key]]);
                     bac.style.background=`${b[k[key]]}`;
                     box.style.opacity=1;
                     // boxup.style.opacity=1;
                     bac.style.opacity=1;
                     let string=`${p.str}`;
                     string=string.replace(/<br>/g,"<");
                     show(string, 'boxr');
                     },500);
                     boxr.innerHTML="";
                 }
                 else
                 {
                     setTimeout(function()
                     {
                     boxl.innerHTML=`${p.name}`;
                     boxr.innerHTML=`${p.str}`;
                     console.log(b[k[key]]);
                     bac.style.background=`${b[k[key]]}`;
                     box.style.opacity=1;
                     // boxup.style.opacity=1;
                     bac.style.opacity=1;
                     },500);
                 }
             }
             if(s.indexOf("WOXIANGDUINISHUOGCCWXHN")!=-1&&records==0)
             {
                 setTimeout(function()
                 {
                     records=1;
                     bac.style.opacity=0;
                     box.style.opacity=0;
                     boxup.style.opacity=0;
                     bac.style.opacity=0;
                     let box1=document.getElementById("box1");
                     box1.style.zIndex=7;//7
                     box1.style.opacity=1;

                     let music=document.createElement("audio");
                     x.setAttribute("src", `./video/snjxh.mp3`);
                     x.setAttribute("autoplay","autoplay");
                     // x.setAttribute("loop","loop");
                 },750);
                 setTimeout(typewrite,3000);//进行打字
             }
        }
     }  
 }


 
 
 window.onkeyup=fl;
