import{_ as y,s as P,o as n,c as i,b as t,F as u,f as p,u as L,t as o,a as d,w as m,h as I,B as w,R as K,r as N,p as k,q as x,T,v as g,g as F,x as z}from"./index-d2d5afcf.js";import{_ as O}from"./AuditionItem-26220fa6.js";const Y={name:"ProductionItemOffer",props:["title","role","ageRange","productionName","prefer","isScrap","tags","index","dueDate","prefer","name","imgSrc","auditionList","type"],data(){return{ROLE_MAP:{1:"주연",2:"조연",3:"단역"},PREFER_MAP:[{id:"A",value:"영어"},{id:"B",value:"중국어"},{id:"C",value:"일본어"},{id:"D",value:"프랑스어"},{id:"E",value:"독일어"},{id:"F",value:"경상도 사투리"},{id:"G",value:"전라도 사투리"},{id:"G1",value:"충청도 사투리"},{id:"H",value:"평양 사투리"},{id:"I",value:"강원도 사투리"},{id:"J",value:"제주도 사투리"},{id:"K",value:"스포츠댄스"},{id:"L",value:"발레"},{id:"M",value:"현대무용"},{id:"N",value:"한국무용"},{id:"O",value:"방송댄스"},{id:"P",value:"액션"},{id:"Q",value:"운전"}]}},methods:{handleClickAddFavorite:function(){this.$emit("favorite",this.index)}},computed:{getDDay(){const e=P();return P.duration(P(this.dueDate,"YYYY-MM-DD").diff(e,"days"),"days").asDays()}}},q={class:"production-item production-item--offer"},G={class:"production-item__thumb"},V=["src"],H={class:"audition-item"},J={class:"audition-item__header"},Q={class:"audition-item__info"},U={class:"info"},j={class:"info"},W={class:"info"},X={class:"btn-group"},Z={class:"audition-item__sub-info"},tt={class:"info"},et={class:"info"};function st(e,h,s,b,f,a){var v;const r=w;return n(),i("div",q,[t("div",G,[t("img",{src:s.imgSrc},null,8,V)]),t("div",H,[t("div",J,[(n(!0),i(u,null,p(s.tags,(l,$)=>(n(),i("span",{class:L(["tag",{"tag--main":l.isMain}]),key:$},o(l.title),3))),128))]),t("div",Q,[t("span",U,o(s.title),1),t("span",j,o(f.ROLE_MAP[s.role]),1),t("span",W,o(`${s.ageRange[0]}-${s.ageRange[1]}`),1)]),t("div",X,[d(r,{class:"btn",size:"large"},{default:m(()=>[I("거절하기")]),_:1}),d(r,{class:"btn",size:"large",type:"primary"},{default:m(()=>[I("지원하기")]),_:1})]),t("div",Z,[t("span",tt,o(s.productionName),1),t("span",et,o((v=f.PREFER_MAP.find(l=>l.id===s.prefer))==null?void 0:v.value),1)]),t("span",{class:L(["flag",{"flag--urge":a.getDDay<=10}])}," 마감 D-"+o(a.getDDay),3)])])}const S=y(Y,[["render",st],["__scopeId","data-v-eb41a1ab"]]);const nt={name:"ProductionItem",props:["index","name","imgSrc","auditionList","type"],components:{RightOutlined:K}},it=e=>(k("data-v-80e45677"),e=e(),x(),e),ot={class:"production-item production-item--open"},at={class:"production-item__thumb"},ct=["src"],_t={class:"production-item__content"},dt={class:"name"},lt={class:"sub"},rt={class:"production-item__control"},ut=it(()=>t("p",{class:"label"},[t("span",{class:"label__text"},"열람일"),t("span",{class:"label__date"},"2022.12.30")],-1)),pt={class:"btn"};function mt(e,h,s,b,f,a){const r=N("RightOutlined");return n(),i("div",ot,[t("div",at,[t("img",{class:"thumb",src:s.imgSrc},null,8,ct)]),t("div",_t,[t("p",dt,o(s.name),1),t("p",lt,"진행중인 오디션 ("+o(s.auditionList.length)+")",1)]),t("div",rt,[ut,t("p",pt,[d(r)])])])}const D=y(nt,[["render",mt],["__scopeId","data-v-80e45677"]]);const ht={name:"ProductionItem",props:["index","name","imgSrc","auditionList","type"]},ft={class:"production-item"},vt={class:"production-item__thumb"},gt=["src"],yt={class:"production-item__content"},bt={class:"name"},$t={class:"sub"};function Pt(e,h,s,b,f,a){return n(),i("div",ft,[t("div",vt,[t("img",{class:"thumb",src:s.imgSrc},null,8,gt)]),t("div",yt,[t("p",bt,o(s.name),1),t("p",$t,"진행중인 오디션 ("+o(s.auditionList.length)+")",1)])])}const R=y(ht,[["render",Pt],["__scopeId","data-v-bc97aaef"]]);const Lt={name:"ProfileInterest",data(){return{openedProductionList:[]}},computed:{scrapList(){return this.$store.state.auditionList.filter(e=>e.isScrap)},myProductionList(){return this.$store.state.productionList.filter(e=>e.isLiked)},myOfferedProductionList(){return[{name:"한겨레영화아카데미",imgSrc:"/src/assets/production/han.png",isLiked:!0,auditionList:[{title:"좋은 소식",role:"2",ageRange:[23,29],productionName:"한겨레영화아카데미",prefer:"G1",isScrap:!0,dueDate:"2023-02-17",isOffered:!0,genre:"movie",gender:"1",applicantCnt:0,yesCnt:1,noCnt:1}]}]}},watch:{"$route.query":{immediate:!0,handler:function(e){this.activeKey=this.$route.query.type}}},methods:{handleTabClick(e){this.$router.replace("/profile/interest?type="+e)}},mounted(){console.log("mounted")},components:{AuditionItem:O,ProductionItem:R,ProductionItemOpen:D,ProductionItemOffer:S}},C=e=>(k("data-v-fd741860"),e=e(),x(),e),It={class:"profile-interest container"},kt=C(()=>t("div",{class:"container__title"}," 관심 제작사 리스트("+o(4)+") ",-1)),xt={class:"tab-panel tab-panel--production"},Ot={class:"production-list"},St={class:"container__title"},Dt={class:"tab-panel tab-panel--scrap"},Rt={class:"audition-list"},Ct={class:"container__title"},At={class:"tab-panel tab-panel--open"},Bt={class:"open-list"},Et=C(()=>t("div",{class:"container__title"}," 받은 제안("+o(1)+") ",-1)),Mt={class:"tab-panel tab-panel--open"},wt={class:"open-list"};function Kt(e,h,s,b,f,a){const r=R,v=O,l=z,$=D,A=S,B=T;return n(),i("div",It,[d(B,{activeKey:e.activeKey,"onUpdate:activeKey":h[0]||(h[0]=_=>e.activeKey=_),size:"large",tabBarStyle:{"font-weight":"700"},onTabClick:a.handleTabClick},{default:m(()=>[d(l,{key:"scrap",tab:"스크랩"},{default:m(()=>[kt,t("div",xt,[t("ul",Ot,[(n(!0),i(u,null,p(a.myProductionList,(_,c)=>(n(),i("li",{class:"production-list__item",key:c},[d(r,g(_,{index:c}),null,16,["index"])]))),128))])]),t("div",St," 스크랩한 공고("+o(a.scrapList.length)+") ",1),t("div",Dt,[t("ul",Rt,[(n(!0),i(u,null,p(a.scrapList,(_,c)=>(n(),i("li",{class:"audition-list__item",key:c},[d(v,g(_,{index:c}),null,16,["index"])]))),128))])])]),_:1}),d(l,{key:"open",tab:"열람","force-render":""},{default:m(()=>[t("div",Ct," 열람한 제작사 리스트("+o(a.scrapList.length)+") ",1),t("div",At,[t("ul",Bt,[(n(!0),i(u,null,p(a.myProductionList,(_,c)=>(n(),i("li",{class:"open-list__item",key:c},[d($,g(_,{index:c}),null,16,["index"])]))),128))])])]),_:1}),d(l,{key:"offer",tab:"받은 제안"},{default:m(()=>[Et,t("div",Mt,[t("ul",wt,[(n(!0),i(u,null,p(a.myOfferedProductionList,(_,c)=>(n(),i("li",{class:"open-list__item",key:c},[(n(!0),i(u,null,p(_.auditionList,(E,M)=>(n(),F(A,g({key:M},{..._,...E},{index:c}),null,16,["index"]))),128))]))),128))])])]),_:1})]),_:1},8,["activeKey","onTabClick"])])}const Ft=y(Lt,[["render",Kt],["__scopeId","data-v-fd741860"]]);export{Ft as default};
