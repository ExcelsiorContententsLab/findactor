import{_ as y,R as T,r as E,o as i,c as o,e as t,t as n,d as a,v as S,x as k,y as P,F as f,h as v,z as I,w as m,j as x,B as M,A as L,E as w,T as B,G as g,H as K}from"./index-46ced1bb.js";import{A as D}from"./AuditionItem-0e4778e3.js";/* empty css              *//* empty css              */const N={name:"ProductionItem",props:["index","name","imgSrc","auditionList","type"],components:{RightOutlined:T}},z=e=>(S("data-v-4b71bedd"),e=e(),k(),e),F={class:"production-item production-item--open"},q={class:"production-item__thumb"},G=["src"],Y={class:"production-item__content"},V={class:"name"},H={class:"sub"},j={class:"production-item__control"},J=z(()=>t("p",{class:"label"},[t("span",{class:"label__text"},"열람일"),t("span",{class:"label__date"},"2022.12.30")],-1)),Q={class:"btn"};function U(e,u,s,b,_,r){const p=E("RightOutlined");return i(),o("div",F,[t("div",q,[t("img",{class:"thumb",src:s.imgSrc},null,8,G)]),t("div",Y,[t("p",V,n(s.name),1),t("p",H,"진행중인 오디션 ("+n(s.auditionList.length)+")",1)]),t("div",j,[J,t("p",Q,[a(p)])])])}const R=y(N,[["render",U],["__scopeId","data-v-4b71bedd"]]);const W={name:"ProductionItem",props:["index","name","imgSrc","auditionList","type"]},X={class:"production-item"},Z={class:"production-item__thumb"},tt=["src"],et={class:"production-item__content"},st={class:"name"},nt={class:"sub"};function it(e,u,s,b,_,r){return i(),o("div",X,[t("div",Z,[t("img",{class:"thumb",src:s.imgSrc},null,8,tt)]),t("div",et,[t("p",st,n(s.name),1),t("p",nt,"진행중인 오디션 ("+n(s.auditionList.length)+")",1)])])}const O=y(W,[["render",it],["__scopeId","data-v-2c762e04"]]);const ot={name:"ProductionItemOffer",props:["title","role","ageRange","productionName","prefer","isScrap","tags","index","dueDate","prefer","name","imgSrc","auditionList","type"],data(){return{ROLE_MAP:{1:"주연",2:"조연",3:"단역"},PREFER_MAP:[{id:"A",value:"영어"},{id:"B",value:"중국어"},{id:"C",value:"일본어"},{id:"D",value:"프랑스어"},{id:"E",value:"독일어"},{id:"F",value:"경상도 사투리"},{id:"G",value:"전라도 사투리"},{id:"G1",value:"충청도 사투리"},{id:"H",value:"평양 사투리"},{id:"I",value:"강원도 사투리"},{id:"J",value:"제주도 사투리"},{id:"K",value:"스포츠댄스"},{id:"L",value:"발레"},{id:"M",value:"현대무용"},{id:"N",value:"한국무용"},{id:"O",value:"방송댄스"},{id:"P",value:"액션"},{id:"Q",value:"운전"}]}},methods:{handleClickAddFavorite(){this.$emit("favorite",this.index)}},computed:{getDDay(){const e=P();return P.duration(P(this.dueDate,"YYYY-MM-DD").diff(e,"days"),"days").asDays()}}},at={class:"production-item production-item--offer"},ct={class:"production-item__thumb"},dt=["src"],_t={class:"audition-item"},rt={class:"audition-item__header"},lt={class:"audition-item__info"},ut={class:"info"},pt={class:"info"},mt={class:"info"},ht={class:"btn-group"},ft={class:"audition-item__sub-info"},vt={class:"info"},gt={class:"info"};function yt(e,u,s,b,_,r){var h;const p=M;return i(),o("div",at,[t("div",ct,[t("img",{src:s.imgSrc},null,8,dt)]),t("div",_t,[t("div",rt,[(i(!0),o(f,null,v(s.tags,(l,$)=>(i(),o("span",{class:I(["tag",{"tag--main":l.isMain}]),key:$},n(l.title),3))),128))]),t("div",lt,[t("span",ut,n(s.title),1),t("span",pt,n(_.ROLE_MAP[s.role]),1),t("span",mt,n(`${s.ageRange[0]}-${s.ageRange[1]}`),1)]),t("div",ht,[a(p,{class:"btn",size:"large"},{default:m(()=>[x("거절하기")]),_:1}),a(p,{class:"btn",size:"large",type:"primary"},{default:m(()=>[x("지원하기")]),_:1})]),t("div",ft,[t("span",vt,n(s.productionName),1),t("span",gt,n((h=_.PREFER_MAP.find(l=>l.id===s.prefer))==null?void 0:h.value),1)]),t("span",{class:I(["flag",{"flag--urge":r.getDDay<=10}])}," 마감 D-"+n(r.getDDay),3)])])}const bt=y(ot,[["render",yt],["__scopeId","data-v-b49df83d"]]);const $t={name:"ProfileInterest",data(){return{openedProductionList:[],scraps:[],auditions:[]}},computed:{myProductionList(){return this.$store.state.productionList.filter(e=>e.isLiked)},myOfferedProductionList(){return[{name:"한겨레영화아카데미",imgSrc:"/assets/production/han.png",isLiked:!0,auditionList:[{title:"좋은 소식",role:"2",ageRange:[23,29],productionName:"한겨레영화아카데미",prefer:"G1",isScrap:!0,dueDate:"2023-02-17",isOffered:!0,genre:"movie",gender:"1",applicantCnt:0,yesCnt:1,noCnt:1}]}]}},watch:{"$route.query":{immediate:!0,handler(e){this.activeKey=this.$route.query.type}}},methods:{handleTabClick(e){this.$router.replace(`/profile/interest?type=${e}`)},handleScrapToggled(){L().then(e=>{this.scraps=e})}},mounted(){L().then(e=>{this.scraps=e})},created(){w({actorEmail:"zoonyfil@nate.com"}).then(({data:e})=>{this.auditions=e.map(({audition:u})=>u)})},components:{AuditionItem:D,ProductionItem:O,ProductionItemOpen:R,ProductionItemOffer:bt}},A=e=>(S("data-v-3533ff8b"),e=e(),k(),e),Pt={class:"profile-interest container"},It=A(()=>t("div",{class:"container__title"}," 관심 제작사 리스트("+n(4)+") ",-1)),xt={class:"tab-panel tab-panel--production"},Lt={class:"production-list"},St={class:"container__title"},kt={class:"tab-panel tab-panel--scrap"},Dt={class:"audition-list"},Rt={class:"container__title"},Ot={class:"tab-panel tab-panel--open"},At={class:"open-list"},Ct=A(()=>t("div",{class:"container__title"}," 받은 제안("+n(1)+") ",-1)),Tt={class:"tab-panel tab-panel--open"},Et={class:"open-list"};function Mt(e,u,s,b,_,r){const p=O,h=D,l=K,$=R,C=B;return i(),o("div",Pt,[a(C,{activeKey:e.activeKey,"onUpdate:activeKey":u[0]||(u[0]=c=>e.activeKey=c),size:"large",tabBarStyle:{"font-weight":"700"},onTabClick:r.handleTabClick},{default:m(()=>[a(l,{key:"scrap",tab:"스크랩"},{default:m(()=>[It,t("div",xt,[t("ul",Lt,[(i(!0),o(f,null,v(r.myProductionList,(c,d)=>(i(),o("li",{class:"production-list__item",key:d},[a(p,g(c,{index:d}),null,16,["index"])]))),128))])]),t("div",St," 스크랩한 공고("+n(_.scraps.length)+") ",1),t("div",kt,[t("ul",Dt,[(i(!0),o(f,null,v(_.scraps,(c,d)=>(i(),o("li",{class:"audition-list__item",key:d},[a(h,g(c,{index:d,onScrapToggled:r.handleScrapToggled}),null,16,["index","onScrapToggled"])]))),128))])])]),_:1}),a(l,{key:"open",tab:"열람","force-render":""},{default:m(()=>[t("div",Rt," 열람한 제작사 리스트("+n(_.scraps.length)+") ",1),t("div",Ot,[t("ul",At,[(i(!0),o(f,null,v(r.myProductionList,(c,d)=>(i(),o("li",{class:"open-list__item",key:d},[a($,g(c,{index:d}),null,16,["index"])]))),128))])])]),_:1}),a(l,{key:"offer",tab:"받은 제안"},{default:m(()=>[Ct,t("div",Tt,[t("ul",Et,[(i(!0),o(f,null,v(_.auditions,(c,d)=>(i(),o("li",{key:d},[a(h,g({index:e.index},c,{audition:c,"operation-type":"request"}),null,16,["index","audition"])]))),128))])])]),_:1})]),_:1},8,["activeKey","onTabClick"])])}const zt=y($t,[["render",Mt],["__scopeId","data-v-3533ff8b"]]);export{zt as default};
