import{a3 as I,a4 as R,a9 as V,a0 as F,a1 as j,a2 as U,aa as Y,ab as B,ac as O,_ as y,r as b,o as d,c as r,e,d as o,w as c,t as _,g as T,F as S,h as A,i as N,E,j as h,J as z,B as P,ad as J,M as G,v as $,x as C,ae as H,af as K}from"./index-b9bcf367.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{u as Q}from"./context-3dc88127.js";const q={name:"production-info",components:{Swiper:I,SwiperSlide:R,RouterLink:V},props:{status:{type:String,default:""}},data(){return{selectedAudition:null,ROLE_MAP:{1:"주연",2:"조연",3:"단역"},isAuditionVisible:!1,movieProfileDetail:{title:"",url:"",role:"",year:"",imgSrc:null},movieProfileList:[{imgSrc:"/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021},{imgSrc:"/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021},{imgSrc:"/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021},{imgSrc:"/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021},{imgSrc:"/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021},{imgSrc:"/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021}],imageProfileList:[{imgSrc:"/assets/image1.png",kind:"상업드라마",role:"단역 가나다역"},{imgSrc:"/assets/image2.png",kind:"상업드라마",role:"단역 가나다역"},{imgSrc:"/assets/image3.png",kind:"상업드라마",role:"단역 가나다역"},{imgSrc:"/assets/image4.png",kind:"상업드라마",role:"단역 가나다역"},{imgSrc:"/assets/image5.png",role:"단역 가나다역"}],profile:{introduction:"",philmography:[]}}},setup(){return Q(),{success:()=>{O.success("임시저장 되었습니다.",2)},onSwiper:p=>{console.log(p)},onSlideChange:()=>{console.log("slide change")},modules:[F,j,U]}},computed:{isUpdate(){return this.status==="update"},productAuditions(){return Y()}},methods:{handleClickAddMovieProfile(){this.isAddMovieProfileVisible=!0},handleConfirmAddMovieProfile(){},handleRemoveThumbCard(s){this.$store.state.profile.movieList.splice(s,1),this.$store.commit("saveLocal")},handleInputMovieProfileDetailURL(s){const{value:n}=s.target,p=/(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm.exec(n);if(p){const a=p[3];this.movieProfileDetail.imgSrc=`https://img.youtube.com/vi/${a}/maxresdefault.jpg`}else this.movieProfileDetail.imgSrc=null},handleClickModifyAudition(s){this.selectedAudition=s,this.isAuditionVisible=!0},handleAuditionModifyOk(){this.isAuditionVisible=!1}},mounted(){console.log(this.status),this.profile=B()}},i=s=>($("data-v-9050f8c2"),s=s(),C(),s),W={class:"production-info container"},X={class:"panel"},Z={class:"panel__title"},ee=i(()=>e("span",{class:"title"}," 제작사 소개 ",-1)),se={key:0,class:"btn btn--right"},te=i(()=>e("span",{class:"text"}," 제작사 정보 수정 ",-1)),oe=i(()=>e("img",{class:"more__icon",src:H},null,-1)),ie=i(()=>e("span",{class:"text"},"추가하기",-1)),ne=[ie],ae={class:"panel__content"},le={class:"container",style:{"background-color":"#F6F4FF",color:"#878787","box-shadow":"none","font-weight":"400","font-size":"20px"}},ce={class:"panel"},de={class:"panel__title"},_e=i(()=>e("span",{class:"title"}," 제작사 필모그라피 ",-1)),re={key:0,class:"btn btn--right btn--fill"},pe=i(()=>e("span",{class:"text"},"추가하기",-1)),ue=[pe],he={class:"panel__content"},me={class:"panel"},ve=i(()=>e("div",{class:"panel__title"},[e("span",{class:"title"}," 진행중인 오디션 ")],-1)),fe={class:"panel__content"},ge={class:"audition-list"},be={class:"header"},ye={class:"date date--start"},xe=i(()=>e("span",{class:"label"},"게시일",-1)),ke={class:"text"},Se={class:"date date--end"},Ae=i(()=>e("span",{class:"label"},"마감일",-1)),Pe={class:"text"},$e={class:"btn"},Ce={class:"content"},we={class:"title"},Me={class:"role"},De={class:"info"},Le={class:"info__elem"},Ie=i(()=>e("span",{class:"label"},"지원자",-1)),Re={class:"count"},Ve={class:"info__elem"},Fe=i(()=>e("span",{class:"label"},"응답완료",-1)),je={class:"count"},Ue={class:"info__elem"},Ye=i(()=>e("span",{class:"label"},"미응답",-1)),Be={class:"count"},Oe={style:{display:"flex",gap:"30px"}},Te=i(()=>e("span",null,"오디션 등록일",-1)),Ne=i(()=>e("span",null,"오디션 마감일",-1)),Ee={style:{"text-align":"right"}};function ze(s,n,m,p,a,l){const v=b("RouterLink"),u=z,M=b("swiper-slide"),D=b("swiper"),x=P,k=J,L=G;return d(),r("div",W,[e("div",X,[e("div",Z,[ee,l.isUpdate?(d(),r("span",{key:1,class:"btn btn--right btn--fill",onClick:n[0]||(n[0]=(...t)=>l.handleClickAddMovieProfile&&l.handleClickAddMovieProfile(...t))},ne)):(d(),r("span",se,[o(v,{to:"/production/profile/update"},{default:c(()=>[te,oe]),_:1})]))]),e("div",ae,[e("div",le,_(a.profile.introduction),1)])]),e("div",ce,[e("div",de,[_e,l.isUpdate?(d(),r("span",re,ue)):T("",!0)]),e("div",he,[o(D,{modules:p.modules,"slides-per-view":l.isUpdate?5:4,"space-between":20,navigation:""},{default:c(()=>[(d(!0),r(S,null,A(a.profile.philmography,(t,g)=>(d(),N(M,{key:g},{default:c(()=>[o(u,E(t,{index:g,update:m.status==="update",cardType:"filmo",onRemove:l.handleRemoveThumbCard}),null,16,["index","update","onRemove"])]),_:2},1024))),128))]),_:1},8,["modules","slides-per-view"])])]),e("div",me,[ve,e("div",fe,[e("ul",ge,[(d(!0),r(S,null,A(l.productAuditions,(t,g)=>(d(),r("li",{key:g,class:"audition-list__elem"},[e("div",be,[e("p",ye,[xe,e("span",ke,_(t.startDate),1)]),e("p",Se,[Ae,e("span",Pe,_(t.endDate),1)])]),e("div",$e,[o(x,{size:"large",shape:"round",onClick:ms=>l.handleClickModifyAudition(t)},{default:c(()=>[h(" 오디션 수정 ")]),_:2},1032,["onClick"])]),e("div",Ce,[e("span",we,_(t.title),1),e("span",Me,_(a.ROLE_MAP[t.role]),1)]),e("div",De,[e("p",Le,[Ie,e("span",Re,"("+_(t.applicantCnt)+")",1)]),e("p",Ve,[Fe,e("span",je,"("+_(t.yesCnt)+")",1)]),e("p",Ue,[Ye,e("span",Be,"("+_(t.noCnt)+")",1)])])]))),128))])])]),o(L,{visible:a.isAuditionVisible,"onUpdate:visible":n[3]||(n[3]=t=>a.isAuditionVisible=t),title:"오디션 정보 수정",onOk:l.handleAuditionModifyOk,width:"1000px",cancelText:"취소",okText:"확인"},{default:c(()=>[e("div",Oe,[e("div",null,[Te,o(k,{value:a.selectedAudition.startDate,"onUpdate:value":n[1]||(n[1]=t=>a.selectedAudition.startDate=t),fullscreen:!1,valueFormat:"YYYY-MM-DD"},null,8,["value"])]),e("div",null,[Ne,o(k,{value:a.selectedAudition.endDate,"onUpdate:value":n[2]||(n[2]=t=>a.selectedAudition.endDate=t),fullscreen:!1,valueFormat:"YYYY-MM-DD"},null,8,["value"])])]),e("div",Ee,[o(x,{size:"large",type:"primary"},{default:c(()=>[h("오디션 조기마감 하기")]),_:1})])]),_:1},8,["visible","onOk"])])}const Je=y(q,[["render",ze],["__scopeId","data-v-9050f8c2"]]),Ge="/assets/notice-b854a4be.svg";const He={data(){return{MAP:[{id:"A",value:"영어"},{id:"B",value:"중국어"},{id:"C",value:"일본어"},{id:"D",value:"프랑스어"},{id:"E",value:"독일어"},{id:"F",value:"경상도 사투리"},{id:"G",value:"전라도 사투리"},{id:"H",value:"평양 사투리"},{id:"I",value:"강원도 사투리"},{id:"J",value:"제주도 사투리"},{id:"K",value:"스포츠댄스"},{id:"L",value:"발레"},{id:"M",value:"현대무용"},{id:"N",value:"한국무용"},{id:"O",value:"방송댄스"},{id:"P",value:"액션"},{id:"Q",value:"운전"}]}},computed:{}},f=s=>($("data-v-f2e1a8c8"),s=s(),C(),s),Ke={class:"production-profile"},Qe={class:"production-profile__wrapper"},qe={class:"box"},We=f(()=>e("div",{class:"image"},[e("img",{class:"avatar",src:K})],-1)),Xe={class:"name"},Ze={class:"box"},es={class:"info-list"},ss={class:"info-list__item"},ts=f(()=>e("span",{class:"label"},"스크랩",-1)),os={class:"info-list__item"},is=f(()=>e("span",{class:"label"},"프로필 박스",-1)),ns={class:"info-list__item"},as=f(()=>e("span",{class:"label"},"제안한 오디션",-1)),ls=f(()=>e("div",{class:"box"},[e("img",{src:Ge})],-1));function cs(s,n,m,p,a,l){const v=P,u=b("router-link");return d(),r("div",Ke,[e("div",Qe,[e("div",qe,[We,e("div",Xe,_(s.$store.state.production.detail.name),1),o(u,{to:"/production/audition/create"},{default:c(()=>[o(v,{shape:"round",size:"large"},{default:c(()=>[h(" 오디션 등록 ")]),_:1})]),_:1})]),e("div",Ze,[e("ul",es,[e("li",ss,[ts,o(u,{class:"text",tag:"span",to:"/profile/interest?type=scrap"},{default:c(()=>[h(" 7 ")]),_:1})]),e("li",os,[is,o(u,{class:"text",tag:"span",to:"/profile/interest?type=open"},{default:c(()=>[h(" 4 ")]),_:1})]),e("li",ns,[as,o(u,{class:"text",tag:"span",to:"/profile/interest?type=offer"},{default:c(()=>[h(" 1 ")]),_:1})])])]),ls])])}const w=y(He,[["render",cs],["__scopeId","data-v-f2e1a8c8"]]),ds={name:"production-main",data(){return{}},methods:{},mounted(){},components:{ProductionProfile:w}},_s={class:"layout-content__main"},rs={class:"content content--left"},ps={class:"content content--right"},us={class:"content__child"};function hs(s,n,m,p,a,l){const v=w,u=Je;return d(),r("div",_s,[e("div",rs,[o(v)]),e("div",ps,[e("div",us,[o(u)])])])}const ks=y(ds,[["render",hs]]);export{ks as default};
