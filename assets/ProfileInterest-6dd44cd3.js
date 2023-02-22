import{_ as y,y as P,o as n,c as o,e,F as p,h as m,z as I,t as i,d,w as h,j as L,B as w,R as K,r as N,v as x,x as S,A as k,T as F,E as g,i as z,G}from"./index-b9bcf367.js";import{_ as O}from"./AuditionItem-915cf089.js";const Y={name:"ProductionItemOffer",props:["title","role","ageRange","productionName","prefer","isScrap","tags","index","dueDate","prefer","name","imgSrc","auditionList","type"],data(){return{ROLE_MAP:{1:"주연",2:"조연",3:"단역"},PREFER_MAP:[{id:"A",value:"영어"},{id:"B",value:"중국어"},{id:"C",value:"일본어"},{id:"D",value:"프랑스어"},{id:"E",value:"독일어"},{id:"F",value:"경상도 사투리"},{id:"G",value:"전라도 사투리"},{id:"G1",value:"충청도 사투리"},{id:"H",value:"평양 사투리"},{id:"I",value:"강원도 사투리"},{id:"J",value:"제주도 사투리"},{id:"K",value:"스포츠댄스"},{id:"L",value:"발레"},{id:"M",value:"현대무용"},{id:"N",value:"한국무용"},{id:"O",value:"방송댄스"},{id:"P",value:"액션"},{id:"Q",value:"운전"}]}},methods:{handleClickAddFavorite(){this.$emit("favorite",this.index)}},computed:{getDDay(){const t=P();return P.duration(P(this.dueDate,"YYYY-MM-DD").diff(t,"days"),"days").asDays()}}},V={class:"production-item production-item--offer"},q={class:"production-item__thumb"},j=["src"],H={class:"audition-item"},J={class:"audition-item__header"},Q={class:"audition-item__info"},U={class:"info"},W={class:"info"},X={class:"info"},Z={class:"btn-group"},ee={class:"audition-item__sub-info"},te={class:"info"},se={class:"info"};function ne(t,f,s,b,l,c){var v;const u=w;return n(),o("div",V,[e("div",q,[e("img",{src:s.imgSrc},null,8,j)]),e("div",H,[e("div",J,[(n(!0),o(p,null,m(s.tags,(r,$)=>(n(),o("span",{class:I(["tag",{"tag--main":r.isMain}]),key:$},i(r.title),3))),128))]),e("div",Q,[e("span",U,i(s.title),1),e("span",W,i(l.ROLE_MAP[s.role]),1),e("span",X,i(`${s.ageRange[0]}-${s.ageRange[1]}`),1)]),e("div",Z,[d(u,{class:"btn",size:"large"},{default:h(()=>[L("거절하기")]),_:1}),d(u,{class:"btn",size:"large",type:"primary"},{default:h(()=>[L("지원하기")]),_:1})]),e("div",ee,[e("span",te,i(s.productionName),1),e("span",se,i((v=l.PREFER_MAP.find(r=>r.id===s.prefer))==null?void 0:v.value),1)]),e("span",{class:I(["flag",{"flag--urge":c.getDDay<=10}])}," 마감 D-"+i(c.getDDay),3)])])}const D=y(Y,[["render",ne],["__scopeId","data-v-b49df83d"]]);const oe={name:"ProductionItem",props:["index","name","imgSrc","auditionList","type"],components:{RightOutlined:K}},ie=t=>(x("data-v-4b71bedd"),t=t(),S(),t),ae={class:"production-item production-item--open"},ce={class:"production-item__thumb"},_e=["src"],de={class:"production-item__content"},le={class:"name"},re={class:"sub"},ue={class:"production-item__control"},pe=ie(()=>e("p",{class:"label"},[e("span",{class:"label__text"},"열람일"),e("span",{class:"label__date"},"2022.12.30")],-1)),me={class:"btn"};function he(t,f,s,b,l,c){const u=N("RightOutlined");return n(),o("div",ae,[e("div",ce,[e("img",{class:"thumb",src:s.imgSrc},null,8,_e)]),e("div",de,[e("p",le,i(s.name),1),e("p",re,"진행중인 오디션 ("+i(s.auditionList.length)+")",1)]),e("div",ue,[pe,e("p",me,[d(u)])])])}const R=y(oe,[["render",he],["__scopeId","data-v-4b71bedd"]]);const fe={name:"ProductionItem",props:["index","name","imgSrc","auditionList","type"]},ve={class:"production-item"},ge={class:"production-item__thumb"},ye=["src"],be={class:"production-item__content"},$e={class:"name"},Pe={class:"sub"};function Ie(t,f,s,b,l,c){return n(),o("div",ve,[e("div",ge,[e("img",{class:"thumb",src:s.imgSrc},null,8,ye)]),e("div",be,[e("p",$e,i(s.name),1),e("p",Pe,"진행중인 오디션 ("+i(s.auditionList.length)+")",1)])])}const C=y(fe,[["render",Ie],["__scopeId","data-v-2c762e04"]]);const Le={name:"ProfileInterest",data(){return{openedProductionList:[],scraps:[]}},computed:{myProductionList(){return this.$store.state.productionList.filter(t=>t.isLiked)},myOfferedProductionList(){return[{name:"한겨레영화아카데미",imgSrc:"/assets/production/han.png",isLiked:!0,auditionList:[{title:"좋은 소식",role:"2",ageRange:[23,29],productionName:"한겨레영화아카데미",prefer:"G1",isScrap:!0,dueDate:"2023-02-17",isOffered:!0,genre:"movie",gender:"1",applicantCnt:0,yesCnt:1,noCnt:1}]}]}},watch:{"$route.query":{immediate:!0,handler(t){this.activeKey=this.$route.query.type}}},methods:{handleTabClick(t){this.$router.replace(`/profile/interest?type=${t}`)},handleScrapToggled(){this.scraps=k()}},mounted(){this.scraps=k()},components:{AuditionItem:O,ProductionItem:C,ProductionItemOpen:R,ProductionItemOffer:D}},A=t=>(x("data-v-ec8c56b0"),t=t(),S(),t),ke={class:"profile-interest container"},xe=A(()=>e("div",{class:"container__title"}," 관심 제작사 리스트("+i(4)+") ",-1)),Se={class:"tab-panel tab-panel--production"},Oe={class:"production-list"},De={class:"container__title"},Re={class:"tab-panel tab-panel--scrap"},Ce={class:"audition-list"},Ae={class:"container__title"},Te={class:"tab-panel tab-panel--open"},Ee={class:"open-list"},Be=A(()=>e("div",{class:"container__title"}," 받은 제안("+i(1)+") ",-1)),Me={class:"tab-panel tab-panel--open"},we={class:"open-list"};function Ke(t,f,s,b,l,c){const u=C,v=O,r=G,$=R,T=D,E=F;return n(),o("div",ke,[d(E,{activeKey:t.activeKey,"onUpdate:activeKey":f[0]||(f[0]=_=>t.activeKey=_),size:"large",tabBarStyle:{"font-weight":"700"},onTabClick:c.handleTabClick},{default:h(()=>[d(r,{key:"scrap",tab:"스크랩"},{default:h(()=>[xe,e("div",Se,[e("ul",Oe,[(n(!0),o(p,null,m(c.myProductionList,(_,a)=>(n(),o("li",{class:"production-list__item",key:a},[d(u,g(_,{index:a}),null,16,["index"])]))),128))])]),e("div",De," 스크랩한 공고("+i(l.scraps.length)+") ",1),e("div",Re,[e("ul",Ce,[(n(!0),o(p,null,m(l.scraps,(_,a)=>(n(),o("li",{class:"audition-list__item",key:a},[d(v,g(_,{index:a,onScrapToggled:c.handleScrapToggled}),null,16,["index","onScrapToggled"])]))),128))])])]),_:1}),d(r,{key:"open",tab:"열람","force-render":""},{default:h(()=>[e("div",Ae," 열람한 제작사 리스트("+i(l.scraps.length)+") ",1),e("div",Te,[e("ul",Ee,[(n(!0),o(p,null,m(c.myProductionList,(_,a)=>(n(),o("li",{class:"open-list__item",key:a},[d($,g(_,{index:a}),null,16,["index"])]))),128))])])]),_:1}),d(r,{key:"offer",tab:"받은 제안"},{default:h(()=>[Be,e("div",Me,[e("ul",we,[(n(!0),o(p,null,m(c.myOfferedProductionList,(_,a)=>(n(),o("li",{class:"open-list__item",key:a},[(n(!0),o(p,null,m(_.auditionList,(B,M)=>(n(),z(T,g({key:M},{..._,...B},{index:a}),null,16,["index"]))),128))]))),128))])])]),_:1})]),_:1},8,["activeKey","onTabClick"])])}const ze=y(Le,[["render",Ke],["__scopeId","data-v-ec8c56b0"]]);export{ze as default};
