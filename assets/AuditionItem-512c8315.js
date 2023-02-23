import{_ as D,H as E,J as T,o as a,c as u,e as t,i as h,w as l,j as r,t as i,d as m,F as p,h as y,B as P,K as w,L as M,m as B,n as O,v as F,x as V,M as G,N as A,y as k,g as I,z as C,O as K}from"./index-c2132c5d.js";/* empty css              *//* empty css              */const z={name:"AuditionDetail",props:["audition"],data(){return{genreList:[{text:"영화",id:"movie"},{text:"드라마",id:"drama"},{text:"OTT시리즈",id:"ott"},{text:"웹시리즈",id:"web"},{text:"광고",id:"ad"}],genderList:[{text:"남성",id:"male"},{text:"여성",id:"female"}],roleList:[{text:"주연",id:"1"},{text:"조연",id:"2"},{text:"단역",id:"3"}],SKILLS:[{id:"A",value:"영어"},{id:"B",value:"중국어"},{id:"C",value:"일본어"},{id:"D",value:"프랑스어"},{id:"E",value:"독일어"},{id:"F",value:"경상도 사투리"},{id:"G",value:"전라도 사투리"},{id:"H",value:"평양 사투리"},{id:"I",value:"강원도 사투리"},{id:"J",value:"제주도 사투리"},{id:"K",value:"스포츠댄스"},{id:"L",value:"발레"},{id:"M",value:"현대무용"},{id:"N",value:"한국무용"},{id:"O",value:"방송댄스"},{id:"P",value:"액션"},{id:"Q",value:"운전"}],isApplied:!1}},methods:{handleApply(){E({auditionTitle:this.audition.title}),this.isApplied=!0}},mounted(){T({auditionTitle:this.audition.title}).then(({data:c})=>{console.log({지원됨:c}),this.isApplied=c})}},d=c=>(F("data-v-4c60fb58"),c=c(),V(),c),Y={class:"apply-container"},H={class:"header"},J={class:"header__title"},j={class:"production-name item"},Q={class:"title-name item"},U={class:"audition-create__item"},q=d(()=>t("div",{class:"title"}," 장르 ",-1)),W={class:"content content--border"},X={class:"audition-create__item"},Z=d(()=>t("div",{class:"title"}," 감독명 ",-1)),$={class:"content"},tt={class:"audition-create__item"},et=d(()=>t("div",{class:"title"}," 성별 ",-1)),it={class:"content content--border"},at={class:"audition-create__item"},st=d(()=>t("div",{class:"title"}," 역할 ",-1)),nt={class:"content content--border"},dt={class:"audition-create__item"},ot=d(()=>t("div",{class:"title"}," 특기 ",-1)),lt={class:"content content--border content--bottom"},ct={class:"audition-create__item"},_t=d(()=>t("div",{class:"title"}," 나이 ",-1)),ut={class:"content"},rt={class:"audition-create__item"},vt=d(()=>t("div",{class:"title"}," 신장 ",-1)),ht={class:"content"},mt={class:"audition-create__item"},gt=d(()=>t("div",{class:"title"}," 체중 ",-1)),pt={class:"content"},ft={class:"audition-create__item"},yt=d(()=>t("div",{class:"title"}," 오디션 일정 ",-1)),xt={class:"content"},At={class:"audition-create__item"},kt=d(()=>t("div",{class:"title"}," 담당자 ",-1)),Ct={class:"content content--flex"},It={class:"content__item"},Dt=d(()=>t("span",{class:"label"}," 이름: ",-1)),bt={class:"content__item"},Rt=d(()=>t("span",{class:"label"}," 연락처: ",-1)),Lt={class:"content__item"},Nt=d(()=>t("span",{class:"label"}," 이메일: ",-1)),St={class:"audition-create__item"},Et=d(()=>t("div",{class:"title"}," 세부정보 ",-1)),Tt={class:"content information"};function Pt(c,v,e,R,o,_){const f=P,g=w,s=M,L=B,N=O;return a(),u(p,null,[t("div",Y,[o.isApplied?(a(),h(f,{key:1,type:"primary",size:"large",disabled:""},{default:l(()=>[r(" 지원됨 ")]),_:1})):(a(),h(f,{key:0,type:"primary",size:"large",onClick:_.handleApply},{default:l(()=>[r(" 지원하기 ")]),_:1},8,["onClick"]))]),t("div",H,[t("div",J,[t("span",j,i(e.audition.productionName),1),t("span",Q,"<"+i(e.audition.title)+">",1)])]),t("div",U,[q,t("div",W,[m(s,{value:e.audition.genre,name:"radioGroup"},{default:l(()=>[(a(!0),u(p,null,y(o.genreList,n=>(a(),h(g,{key:n.id,value:n.id,class:"radio"},{default:l(()=>[r(i(n.text),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])])]),t("div",X,[Z,t("div",$,i(e.audition.director),1)]),t("div",tt,[et,t("div",it,[m(s,{value:e.audition.gender,name:"radioGroup"},{default:l(()=>[(a(!0),u(p,null,y(o.genderList,n=>(a(),h(g,{key:n.id,value:n.id,class:"radio"},{default:l(()=>[r(i(n.text),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])])]),t("div",at,[st,t("div",nt,[m(s,{value:e.audition.role,name:"radioGroup"},{default:l(()=>[(a(!0),u(p,null,y(o.roleList,n=>(a(),h(g,{key:n.id,value:n.id,class:"radio"},{default:l(()=>[r(i(n.text),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])])]),t("div",dt,[ot,t("div",lt,[(a(!0),u(p,null,y(e.audition.prefer,(n,S)=>(a(),h(N,{key:S,title:o.SKILLS.find(x=>x.id===n).value},{default:l(()=>[m(L,{color:"#6044F8",style:{"font-size":"20px"}},{default:l(()=>[r(i(o.SKILLS.find(x=>x.id===n).value),1)]),_:2},1024)]),_:2},1032,["title"]))),128))])]),t("div",ct,[_t,t("div",ut,i(e.audition.ageRange[0])+" ~ "+i(e.audition.ageRange[1])+" 세 ",1)]),t("div",rt,[vt,t("div",ht,i(e.audition.heightRange[0])+" ~ "+i(e.audition.heightRange[1])+" cm ",1)]),t("div",mt,[gt,t("div",pt,i(e.audition.weightRange[0])+" ~ "+i(e.audition.weightRange[1])+" kg ",1)]),t("div",ft,[yt,t("div",xt,i(e.audition.startDate)+" ~ "+i(e.audition.endDate),1)]),t("div",At,[kt,t("div",Ct,[t("div",It,[Dt,r(" "+i(e.audition.inCharge.name),1)]),t("div",bt,[Rt,r(" "+i(e.audition.inCharge.contact),1)]),t("div",Lt,[Nt,r(" "+i(e.audition.inCharge.email),1)])])]),t("div",St,[Et,t("div",Tt,i(e.audition.detailInfo),1)])],64)}const b=D(z,[["render",Pt],["__scopeId","data-v-4c60fb58"]]);const wt="/assets/icon/diamond-true.svg",Mt="/assets/icon/diamond-false.svg",Bt={name:"AuditionItem",props:["id","title","role","ageRange","productionName","prefer","genre","isScrap","tags","index","dateRange","gender","onlyView","noBorder","audition"],components:{AuditionDetail:b},data(){return{ACTIVE_ICON:wt,INACTIVE_ICON:Mt,ROLE_MAP:{1:"주연",2:"조연",3:"단역"},PREFER_MAP:[{id:"A",value:"영어"},{id:"B",value:"중국어"},{id:"C",value:"일본어"},{id:"D",value:"프랑스어"},{id:"E",value:"독일어"},{id:"F",value:"경상도 사투리"},{id:"G",value:"전라도 사투리"},{id:"G1",value:"충청도 사투리"},{id:"H",value:"평양 사투리"},{id:"I",value:"강원도 사투리"},{id:"J",value:"제주도 사투리"},{id:"K",value:"스포츠댄스"},{id:"L",value:"발레"},{id:"M",value:"현대무용"},{id:"N",value:"한국무용"},{id:"O",value:"방송댄스"},{id:"P",value:"액션"},{id:"Q",value:"운전"}],GENRE_MAP:[{text:"전체",id:"all"},{text:"영화",id:"movie"},{text:"드라마",id:"drama"},{text:"OTT시리즈",id:"ott"},{text:"웹시리즈",id:"web"},{text:"광고",id:"ad"}],isScrapped:!0,isPopup:!1}},methods:{handleClickAddFavorite(){G(this.id),this.isScrapped=A(this.id),this.$emit("scrapToggled")},handleClickTitle(){this.isPopup=!0}},computed:{getDDay(){const c=k();return k.duration(k(this.dateRange[1],"YYYY-MM-DD").diff(c,"days"),"days").asDays()}},watch:{id(){this.isScrapped=A(this.id)}},mounted(){this.isScrapped=A(this.id)}},Ot={class:"audition-item__header"},Ft={class:"tag tag--main"},Vt={class:"tag"},Gt={class:"audition-item__info"},Kt={class:"info"},zt={class:"info"},Yt={class:"audition-item__sub-info"},Ht={class:"info"},Jt={key:0,class:"info"},jt=["src"];function Qt(c,v,e,R,o,_){const f=b,g=K;return a(),u("div",{class:C(["audition-item",{"audition-item--no-border":e.noBorder}])},[t("div",Ot,[t("span",Ft,i(o.GENRE_MAP.find(s=>s.id===e.genre).text),1),t("span",Vt,i(e.gender==="male"?"남자":"여자"),1)]),t("div",Gt,[t("span",{class:"info",id:"audition-title",onClick:v[0]||(v[0]=(...s)=>_.handleClickTitle&&_.handleClickTitle(...s))},i(e.title),1),t("span",Kt,i(o.ROLE_MAP[e.role]),1),t("span",zt,i(`${e.ageRange[0]}-${e.ageRange[1]}`)+" 세",1)]),t("div",Yt,[t("span",Ht,i(e.productionName),1),e.prefer?(a(),u("span",Jt,i(o.PREFER_MAP.filter(({id:s})=>e.prefer.includes(s)).map(s=>s.value).slice(0,3).join(", ")),1)):I("",!0)]),_.getDDay>=0?(a(),u("span",{key:0,class:C(["flag",{"flag--urge":_.getDDay<=10}])}," 마감 D-"+i(_.getDDay),3)):(a(),u("span",{key:1,class:C(["flag",{"flag--urge":_.getDDay<=10}])}," 마감됨 ",2)),e.onlyView?I("",!0):(a(),u("img",{key:2,class:"icon",src:o.isScrapped?this.ACTIVE_ICON:this.INACTIVE_ICON,onClick:v[1]||(v[1]=(...s)=>_.handleClickAddFavorite&&_.handleClickAddFavorite(...s))},null,8,jt)),m(g,{visible:o.isPopup,"onUpdate:visible":v[2]||(v[2]=s=>o.isPopup=s),title:"오디션 정보",width:"1200px",okButtonProps:{style:{display:"none"}},cancelText:"확인"},{default:l(()=>[m(f,{audition:e.audition},null,8,["audition"])]),_:1},8,["visible"])],2)}const Xt=D(Bt,[["render",Qt],["__scopeId","data-v-9a6a351c"]]);export{Xt as A};
