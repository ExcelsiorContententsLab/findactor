import{_ as k,o as d,c as _,e as t,d as h,w as c,j as u,t as i,F as g,h as f,i as p,B as b,H as P,J as T,m as w,n as M,v as B,x as F,K as O,L as A,y as C,g as D,z as I,M as V}from"./index-2315a639.js";/* empty css              *//* empty css              */const G={name:"AuditionDetail",props:["audition"],data(){return{genreList:[{text:"영화",id:"movie"},{text:"드라마",id:"drama"},{text:"OTT시리즈",id:"ott"},{text:"웹시리즈",id:"web"},{text:"광고",id:"ad"}],genderList:[{text:"남성",id:"male"},{text:"여성",id:"female"}],roleList:[{text:"주연",id:"1"},{text:"조연",id:"2"},{text:"단역",id:"3"}],SKILLS:[{id:"A",value:"영어"},{id:"B",value:"중국어"},{id:"C",value:"일본어"},{id:"D",value:"프랑스어"},{id:"E",value:"독일어"},{id:"F",value:"경상도 사투리"},{id:"G",value:"전라도 사투리"},{id:"H",value:"평양 사투리"},{id:"I",value:"강원도 사투리"},{id:"J",value:"제주도 사투리"},{id:"K",value:"스포츠댄스"},{id:"L",value:"발레"},{id:"M",value:"현대무용"},{id:"N",value:"한국무용"},{id:"O",value:"방송댄스"},{id:"P",value:"액션"},{id:"Q",value:"운전"}]}},methods:{},mounted(){}},n=r=>(B("data-v-d623773d"),r=r(),F(),r),K={class:"apply-container"},z={class:"header"},Y={class:"header__title"},H={class:"production-name item"},J={class:"title-name item"},j={class:"audition-create__item"},Q=n(()=>t("div",{class:"title"}," 장르 ",-1)),U={class:"content content--border"},q={class:"audition-create__item"},W=n(()=>t("div",{class:"title"}," 감독명 ",-1)),X={class:"content"},Z={class:"audition-create__item"},$=n(()=>t("div",{class:"title"}," 성별 ",-1)),tt={class:"content content--border"},et={class:"audition-create__item"},it=n(()=>t("div",{class:"title"}," 역할 ",-1)),at={class:"content content--border"},st={class:"audition-create__item"},dt=n(()=>t("div",{class:"title"}," 특기 ",-1)),nt={class:"content content--border content--bottom"},ot={class:"audition-create__item"},ct=n(()=>t("div",{class:"title"}," 나이 ",-1)),_t={class:"content"},lt={class:"audition-create__item"},ut=n(()=>t("div",{class:"title"}," 신장 ",-1)),rt={class:"content"},vt={class:"audition-create__item"},ht=n(()=>t("div",{class:"title"}," 체중 ",-1)),mt={class:"content"},gt={class:"audition-create__item"},ft=n(()=>t("div",{class:"title"}," 오디션 일정 ",-1)),pt={class:"content"},xt={class:"audition-create__item"},yt=n(()=>t("div",{class:"title"}," 담당자 ",-1)),At={class:"content content--flex"},Ct={class:"content__item"},It=n(()=>t("span",{class:"label"}," 이름: ",-1)),Dt={class:"content__item"},kt=n(()=>t("span",{class:"label"}," 연락처: ",-1)),Rt={class:"content__item"},Lt=n(()=>t("span",{class:"label"}," 이메일: ",-1)),St={class:"audition-create__item"},Et=n(()=>t("div",{class:"title"}," 세부정보 ",-1)),Nt={class:"content information"};function bt(r,v,e,L,o,l){const x=b,m=P,a=T,S=w,E=M;return d(),_(g,null,[t("div",K,[h(x,{type:"primary",size:"large"},{default:c(()=>[u(" 지원하기 ")]),_:1})]),t("div",z,[t("div",Y,[t("span",H,i(e.audition.productionName),1),t("span",J,"<"+i(e.audition.title)+">",1)])]),t("div",j,[Q,t("div",U,[h(a,{value:e.audition.genre,name:"radioGroup"},{default:c(()=>[(d(!0),_(g,null,f(o.genreList,s=>(d(),p(m,{key:s.id,value:s.id,class:"radio"},{default:c(()=>[u(i(s.text),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])])]),t("div",q,[W,t("div",X,i(e.audition.director),1)]),t("div",Z,[$,t("div",tt,[h(a,{value:e.audition.gender,name:"radioGroup"},{default:c(()=>[(d(!0),_(g,null,f(o.genderList,s=>(d(),p(m,{key:s.id,value:s.id,class:"radio"},{default:c(()=>[u(i(s.text),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])])]),t("div",et,[it,t("div",at,[h(a,{value:e.audition.role,name:"radioGroup"},{default:c(()=>[(d(!0),_(g,null,f(o.roleList,s=>(d(),p(m,{key:s.id,value:s.id,class:"radio"},{default:c(()=>[u(i(s.text),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])])]),t("div",st,[dt,t("div",nt,[(d(!0),_(g,null,f(e.audition.prefer,(s,N)=>(d(),p(E,{key:N,title:o.SKILLS.find(y=>y.id===s).value},{default:c(()=>[h(S,{color:"#6044F8",style:{"font-size":"20px"}},{default:c(()=>[u(i(o.SKILLS.find(y=>y.id===s).value),1)]),_:2},1024)]),_:2},1032,["title"]))),128))])]),t("div",ot,[ct,t("div",_t,i(e.audition.ageRange[0])+" ~ "+i(e.audition.ageRange[1])+" 세 ",1)]),t("div",lt,[ut,t("div",rt,i(e.audition.heightRange[0])+" ~ "+i(e.audition.heightRange[1])+" cm ",1)]),t("div",vt,[ht,t("div",mt,i(e.audition.weightRange[0])+" ~ "+i(e.audition.weightRange[1])+" kg ",1)]),t("div",gt,[ft,t("div",pt,i(e.audition.startDate)+" ~ "+i(e.audition.endDate),1)]),t("div",xt,[yt,t("div",At,[t("div",Ct,[It,u(" "+i(e.audition.inCharge.name),1)]),t("div",Dt,[kt,u(" "+i(e.audition.inCharge.contact),1)]),t("div",Rt,[Lt,u(" "+i(e.audition.inCharge.email),1)])])]),t("div",St,[Et,t("div",Nt,i(e.audition.detailInfo),1)])],64)}const R=k(G,[["render",bt],["__scopeId","data-v-d623773d"]]);const Pt="/assets/icon/diamond-true.svg",Tt="/assets/icon/diamond-false.svg",wt={name:"AuditionItem",props:["id","title","role","ageRange","productionName","prefer","genre","isScrap","tags","index","dateRange","gender","onlyView","noBorder","audition"],components:{AuditionDetail:R},data(){return{ACTIVE_ICON:Pt,INACTIVE_ICON:Tt,ROLE_MAP:{1:"주연",2:"조연",3:"단역"},PREFER_MAP:[{id:"A",value:"영어"},{id:"B",value:"중국어"},{id:"C",value:"일본어"},{id:"D",value:"프랑스어"},{id:"E",value:"독일어"},{id:"F",value:"경상도 사투리"},{id:"G",value:"전라도 사투리"},{id:"G1",value:"충청도 사투리"},{id:"H",value:"평양 사투리"},{id:"I",value:"강원도 사투리"},{id:"J",value:"제주도 사투리"},{id:"K",value:"스포츠댄스"},{id:"L",value:"발레"},{id:"M",value:"현대무용"},{id:"N",value:"한국무용"},{id:"O",value:"방송댄스"},{id:"P",value:"액션"},{id:"Q",value:"운전"}],GENRE_MAP:[{text:"전체",id:"all"},{text:"영화",id:"movie"},{text:"드라마",id:"drama"},{text:"OTT시리즈",id:"ott"},{text:"웹시리즈",id:"web"},{text:"광고",id:"ad"}],isScrapped:!0,isPopup:!1}},methods:{handleClickAddFavorite(){O(this.id),this.isScrapped=A(this.id),this.$emit("scrapToggled")},handleClickTitle(){this.isPopup=!0}},computed:{getDDay(){const r=C();return C.duration(C(this.dateRange[1],"YYYY-MM-DD").diff(r,"days"),"days").asDays()}},watch:{id(){this.isScrapped=A(this.id)}},mounted(){this.isScrapped=A(this.id)}},Mt={class:"audition-item__header"},Bt={class:"tag tag--main"},Ft={class:"tag"},Ot={class:"audition-item__info"},Vt={class:"info"},Gt={class:"info"},Kt={class:"audition-item__sub-info"},zt={class:"info"},Yt={key:0,class:"info"},Ht=["src"];function Jt(r,v,e,L,o,l){const x=R,m=V;return d(),_("div",{class:I(["audition-item",{"audition-item--no-border":e.noBorder}])},[t("div",Mt,[t("span",Bt,i(o.GENRE_MAP.find(a=>a.id===e.genre).text),1),t("span",Ft,i(e.gender==="male"?"남자":"여자"),1)]),t("div",Ot,[t("span",{class:"info",id:"audition-title",onClick:v[0]||(v[0]=(...a)=>l.handleClickTitle&&l.handleClickTitle(...a))},i(e.title),1),t("span",Vt,i(o.ROLE_MAP[e.role]),1),t("span",Gt,i(`${e.ageRange[0]}-${e.ageRange[1]}`)+" 세",1)]),t("div",Kt,[t("span",zt,i(e.productionName),1),e.prefer?(d(),_("span",Yt,i(o.PREFER_MAP.filter(({id:a})=>e.prefer.includes(a)).map(a=>a.value).slice(0,3).join(", ")),1)):D("",!0)]),l.getDDay>=0?(d(),_("span",{key:0,class:I(["flag",{"flag--urge":l.getDDay<=10}])}," 마감 D-"+i(l.getDDay),3)):(d(),_("span",{key:1,class:I(["flag",{"flag--urge":l.getDDay<=10}])}," 마감됨 ",2)),e.onlyView?D("",!0):(d(),_("img",{key:2,class:"icon",src:o.isScrapped?this.ACTIVE_ICON:this.INACTIVE_ICON,onClick:v[1]||(v[1]=(...a)=>l.handleClickAddFavorite&&l.handleClickAddFavorite(...a))},null,8,Ht)),h(m,{visible:o.isPopup,"onUpdate:visible":v[2]||(v[2]=a=>o.isPopup=a),title:"오디션 정보",width:"1200px",okButtonProps:{style:{display:"none"}},cancelText:"확인"},{default:c(()=>[h(x,{audition:e.audition},null,8,["audition"])]),_:1},8,["visible"])],2)}const qt=k(wt,[["render",Jt],["__scopeId","data-v-9a6a351c"]]);export{qt as A};