import{_ as b,J as L,K as N,L as P,M as w,o as a,c as o,d as v,w as d,j as _,g as f,i as p,e,t as i,F as y,h as k,B as M,N as j,O as z,m as B,n as O,v as F,x as V,P as G,Q as x,y as C,z as R,S as K}from"./index-e70b490c.js";/* empty css              *//* empty css              */const Y={name:"AuditionDetail",props:["audition","operationType"],data(){return{genreList:[{text:"영화",id:"movie"},{text:"드라마",id:"drama"},{text:"OTT시리즈",id:"ott"},{text:"웹시리즈",id:"web"},{text:"광고",id:"ad"}],genderList:[{text:"남성",id:"male"},{text:"여성",id:"female"}],roleList:[{text:"주연",id:"1"},{text:"조연",id:"2"},{text:"단역",id:"3"}],SKILLS:[{id:"A",value:"영어"},{id:"B",value:"중국어"},{id:"C",value:"일본어"},{id:"D",value:"프랑스어"},{id:"E",value:"독일어"},{id:"F",value:"경상도 사투리"},{id:"G",value:"전라도 사투리"},{id:"H",value:"평양 사투리"},{id:"I",value:"강원도 사투리"},{id:"J",value:"제주도 사투리"},{id:"K",value:"스포츠댄스"},{id:"L",value:"발레"},{id:"M",value:"현대무용"},{id:"N",value:"한국무용"},{id:"O",value:"방송댄스"},{id:"P",value:"액션"},{id:"Q",value:"운전"}],isApplied:!1,isRejected:!1}},methods:{handleApply(){L({auditionTitle:this.audition.title}),this.isApplied=!0},handleReject(){N({auditionTitle:this.audition.title,actorEmail:"zoonyfil@nate.com"}),this.isRejected=!0}},mounted(){P({auditionTitle:this.audition.title}).then(({data:u})=>{console.log({지원됨:u}),this.isApplied=u}),w({auditionTitle:this.audition.title,actorEmail:"zoonyfil@nate.com"}).then(({data:u})=>{this.isRejected=u})}},c=u=>(F("data-v-440236e2"),u=u(),V(),u),q={key:0},J={key:0,class:"apply-container"},Q={key:1,class:"apply-container"},H={key:2,class:"apply-container"},U={key:1,class:"apply-container"},W={class:"header"},X={class:"header__title"},Z={class:"production-name item"},$={class:"title-name item"},ee={class:"audition-create__item"},te=c(()=>e("div",{class:"title"}," 장르 ",-1)),ie={class:"content content--border"},ae={class:"audition-create__item"},se=c(()=>e("div",{class:"title"}," 감독명 ",-1)),ne={class:"content"},de={class:"audition-create__item"},oe=c(()=>e("div",{class:"title"}," 성별 ",-1)),le={class:"content content--border"},ce={class:"audition-create__item"},_e=c(()=>e("div",{class:"title"}," 역할 ",-1)),ue={class:"content content--border"},re={class:"audition-create__item"},ve=c(()=>e("div",{class:"title"}," 특기 ",-1)),he={class:"content content--border content--bottom"},me={class:"audition-create__item"},pe=c(()=>e("div",{class:"title"}," 나이 ",-1)),ge={class:"content"},ye={class:"audition-create__item"},fe=c(()=>e("div",{class:"title"}," 신장 ",-1)),ke={class:"content"},Ae={class:"audition-create__item"},xe=c(()=>e("div",{class:"title"}," 체중 ",-1)),Ce={class:"content"},Re={class:"audition-create__item"},be=c(()=>e("div",{class:"title"}," 오디션 일정 ",-1)),Ie={class:"content"},De={class:"audition-create__item"},Te=c(()=>e("div",{class:"title"}," 담당자 ",-1)),Ee={class:"content content--flex"},Se={class:"content__item"},Le=c(()=>e("span",{class:"label"}," 이름: ",-1)),Ne={class:"content__item"},Pe=c(()=>e("span",{class:"label"}," 연락처: ",-1)),we={class:"content__item"},Me=c(()=>e("span",{class:"label"}," 이메일: ",-1)),je={class:"audition-create__item"},ze=c(()=>e("div",{class:"title"}," 세부정보 ",-1)),Be={class:"content information"};function Oe(u,m,t,D,s,r){const h=M,g=j,n=z,T=B,E=O;return a(),o(y,null,[t.operationType==="request"?(a(),o("div",q,[!s.isApplied&&!s.isRejected?(a(),o("div",J,[v(h,{type:"primary",size:"large",onClick:r.handleApply},{default:d(()=>[_(" 지원하기 ")]),_:1},8,["onClick"]),v(h,{type:"primary",size:"large",onClick:r.handleReject},{default:d(()=>[_(" 거절하기 ")]),_:1},8,["onClick"])])):f("",!0),s.isRejected?(a(),o("div",Q,[v(h,{type:"primary",size:"large",disabled:""},{default:d(()=>[_(" 거절함 ")]),_:1})])):f("",!0),s.isApplied?(a(),o("div",H,[v(h,{type:"primary",size:"large",disabled:""},{default:d(()=>[_(" 지원됨 ")]),_:1})])):f("",!0)])):(a(),o("div",U,[s.isApplied?(a(),p(h,{key:1,type:"primary",size:"large",disabled:""},{default:d(()=>[_(" 지원됨 ")]),_:1})):(a(),p(h,{key:0,type:"primary",size:"large",onClick:r.handleApply},{default:d(()=>[_(" 지원하기 ")]),_:1},8,["onClick"]))])),e("div",W,[e("div",X,[e("span",Z,i(t.audition.productionName),1),e("span",$,"<"+i(t.audition.title)+">",1)])]),e("div",ee,[te,e("div",ie,[v(n,{value:t.audition.genre,name:"radioGroup"},{default:d(()=>[(a(!0),o(y,null,k(s.genreList,l=>(a(),p(g,{key:l.id,value:l.id,class:"radio"},{default:d(()=>[_(i(l.text),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])])]),e("div",ae,[se,e("div",ne,i(t.audition.director),1)]),e("div",de,[oe,e("div",le,[v(n,{value:t.audition.gender,name:"radioGroup"},{default:d(()=>[(a(!0),o(y,null,k(s.genderList,l=>(a(),p(g,{key:l.id,value:l.id,class:"radio"},{default:d(()=>[_(i(l.text),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])])]),e("div",ce,[_e,e("div",ue,[v(n,{value:t.audition.role,name:"radioGroup"},{default:d(()=>[(a(!0),o(y,null,k(s.roleList,l=>(a(),p(g,{key:l.id,value:l.id,class:"radio"},{default:d(()=>[_(i(l.text),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])])]),e("div",re,[ve,e("div",he,[(a(!0),o(y,null,k(t.audition.prefer,(l,S)=>(a(),p(E,{key:S,title:s.SKILLS.find(A=>A.id===l).value},{default:d(()=>[v(T,{color:"#6044F8",style:{"font-size":"20px"}},{default:d(()=>[_(i(s.SKILLS.find(A=>A.id===l).value),1)]),_:2},1024)]),_:2},1032,["title"]))),128))])]),e("div",me,[pe,e("div",ge,i(t.audition.ageRange[0])+" ~ "+i(t.audition.ageRange[1])+" 세 ",1)]),e("div",ye,[fe,e("div",ke,i(t.audition.heightRange[0])+" ~ "+i(t.audition.heightRange[1])+" cm ",1)]),e("div",Ae,[xe,e("div",Ce,i(t.audition.weightRange[0])+" ~ "+i(t.audition.weightRange[1])+" kg ",1)]),e("div",Re,[be,e("div",Ie,i(t.audition.startDate)+" ~ "+i(t.audition.endDate),1)]),e("div",De,[Te,e("div",Ee,[e("div",Se,[Le,_(" "+i(t.audition.inCharge.name),1)]),e("div",Ne,[Pe,_(" "+i(t.audition.inCharge.contact),1)]),e("div",we,[Me,_(" "+i(t.audition.inCharge.email),1)])])]),e("div",je,[ze,e("div",Be,i(t.audition.detailInfo),1)])],64)}const I=b(Y,[["render",Oe],["__scopeId","data-v-440236e2"]]);const Fe="/assets/icon/diamond-true.svg",Ve="/assets/icon/diamond-false.svg",Ge={name:"AuditionItem",props:["id","title","role","ageRange","productionName","prefer","genre","isScrap","tags","index","dateRange","gender","onlyView","noBorder","audition","operationType"],components:{AuditionDetail:I},data(){return{ACTIVE_ICON:Fe,INACTIVE_ICON:Ve,ROLE_MAP:{1:"주연",2:"조연",3:"단역"},PREFER_MAP:[{id:"A",value:"영어"},{id:"B",value:"중국어"},{id:"C",value:"일본어"},{id:"D",value:"프랑스어"},{id:"E",value:"독일어"},{id:"F",value:"경상도 사투리"},{id:"G",value:"전라도 사투리"},{id:"G1",value:"충청도 사투리"},{id:"H",value:"평양 사투리"},{id:"I",value:"강원도 사투리"},{id:"J",value:"제주도 사투리"},{id:"K",value:"스포츠댄스"},{id:"L",value:"발레"},{id:"M",value:"현대무용"},{id:"N",value:"한국무용"},{id:"O",value:"방송댄스"},{id:"P",value:"액션"},{id:"Q",value:"운전"}],GENRE_MAP:[{text:"전체",id:"all"},{text:"영화",id:"movie"},{text:"드라마",id:"drama"},{text:"OTT시리즈",id:"ott"},{text:"웹시리즈",id:"web"},{text:"광고",id:"ad"}],isScrapped:!0,isPopup:!1}},methods:{handleClickAddFavorite(){G(this.id),this.isScrapped=x(this.id),this.$emit("scrapToggled")},handleClickTitle(){this.isPopup=!0}},computed:{getDDay(){const u=C();return C.duration(C(this.dateRange[1],"YYYY-MM-DD").diff(u,"days"),"days").asDays()}},watch:{id(){this.isScrapped=x(this.id)}},mounted(){this.isScrapped=x(this.id)}},Ke={class:"audition-item__header"},Ye={class:"tag tag--main"},qe={class:"tag"},Je={class:"audition-item__info"},Qe={class:"info"},He={class:"info"},Ue={class:"audition-item__sub-info"},We={class:"info"},Xe={key:0,class:"info"},Ze=["src"];function $e(u,m,t,D,s,r){const h=I,g=K;return a(),o("div",{class:R(["audition-item",{"audition-item--no-border":t.noBorder}])},[e("div",Ke,[e("span",Ye,i(s.GENRE_MAP.find(n=>n.id===t.genre).text),1),e("span",qe,i(t.gender==="male"?"남자":"여자"),1)]),e("div",Je,[e("span",{class:"info",id:"audition-title",onClick:m[0]||(m[0]=(...n)=>r.handleClickTitle&&r.handleClickTitle(...n))},i(t.title),1),e("span",Qe,i(s.ROLE_MAP[t.role]),1),e("span",He,i(`${t.ageRange[0]}-${t.ageRange[1]}`)+" 세",1)]),e("div",Ue,[e("span",We,i(t.productionName),1),t.prefer?(a(),o("span",Xe,i(s.PREFER_MAP.filter(({id:n})=>t.prefer.includes(n)).map(n=>n.value).slice(0,3).join(", ")),1)):f("",!0)]),r.getDDay>=0?(a(),o("span",{key:0,class:R(["flag",{"flag--urge":r.getDDay<=10}])}," 마감 D-"+i(r.getDDay),3)):(a(),o("span",{key:1,class:R(["flag",{"flag--urge":r.getDDay<=10}])}," 마감됨 ",2)),!t.onlyView&&t.operationType!=="request"?(a(),o("img",{key:2,class:"icon",src:s.isScrapped?this.ACTIVE_ICON:this.INACTIVE_ICON,onClick:m[1]||(m[1]=(...n)=>r.handleClickAddFavorite&&r.handleClickAddFavorite(...n))},null,8,Ze)):f("",!0),v(g,{visible:s.isPopup,"onUpdate:visible":m[2]||(m[2]=n=>s.isPopup=n),title:"오디션 정보",width:"1200px",okButtonProps:{style:{display:"none"}},cancelText:"확인"},{default:d(()=>[v(h,{audition:t.audition,"operation-type":t.operationType},null,8,["audition","operation-type"])]),_:1},8,["visible"])],2)}const at=b(Ge,[["render",$e],["__scopeId","data-v-1b33bb08"]]);export{at as A};
