import{W as V,X as F,a3 as R,Q as U,U as T,V as O,a4 as Y,_ as k,r as y,o as _,c as r,b as e,a as t,w as i,e as S,F as $,f as A,g as j,x as z,t as m,h as l,a1 as B,B as C,a5 as N,a6 as E,p as P,q as w,a7 as Q,a8 as q}from"./index-9d880702.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{u as G}from"./context-610f1d0b.js";const H={name:"production-info",components:{Swiper:V,SwiperSlide:F,RouterLink:R},props:{status:{type:String,default:""}},data(){return{selectedAudition:null,ROLE_MAP:{1:"주연",2:"조연",3:"단역"},isAuditionVisible:!1,movieProfileDetail:{title:"",url:"",role:"",year:"",imgSrc:null},movieProfileList:[{imgSrc:"/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021},{imgSrc:"/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021},{imgSrc:"/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021},{imgSrc:"/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021},{imgSrc:"/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021},{imgSrc:"/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021}],imageProfileList:[{imgSrc:"/assets/image1.png",kind:"상업드라마",role:"단역 가나다역"},{imgSrc:"/assets/image2.png",kind:"상업드라마",role:"단역 가나다역"},{imgSrc:"/assets/image3.png",kind:"상업드라마",role:"단역 가나다역"},{imgSrc:"/assets/image4.png",kind:"상업드라마",role:"단역 가나다역"},{imgSrc:"/assets/image5.png",role:"단역 가나다역"}]}},setup(){return G(),{success:()=>{Y.success("임시저장 되었습니다.",2)},onSwiper:p=>{console.log(p)},onSlideChange:()=>{console.log("slide change")},modules:[U,T,O]}},computed:{isUpdate(){return this.status==="update"}},methods:{handleClickAddMovieProfile(){this.isAddMovieProfileVisible=!0},handleConfirmAddMovieProfile(){},handleRemoveThumbCard(s){this.$store.state.profile.movieList.splice(s,1),this.$store.commit("saveLocal")},handleInputMovieProfileDetailURL(s){const{value:a}=s.target,p=/(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm.exec(a);if(p){const c=p[3];this.movieProfileDetail.imgSrc=`https://img.youtube.com/vi/${c}/maxresdefault.jpg`}else this.movieProfileDetail.imgSrc=null},handleClickModifyAudition(s){this.selectedAudition=s,this.isAuditionVisible=!0},handleAuditionModifyOk(){this.isAuditionVisible=!1}},mounted(){console.log(this.status)}},n=s=>(P("data-v-cc06b186"),s=s(),w(),s),J={class:"production-info container"},K={class:"panel"},W={class:"panel__title"},X=n(()=>e("span",{class:"title"}," 제작사 소개 ",-1)),Z={key:0,class:"btn btn--right"},ee=n(()=>e("span",{class:"text"}," 제작사 정보 수정 ",-1)),se=n(()=>e("img",{class:"more__icon",src:Q},null,-1)),te=n(()=>e("span",{class:"text"},"추가하기",-1)),oe=[te],ie=n(()=>e("div",{class:"panel__content"},[e("div",{class:"container",style:{"background-color":"#F6F4FF",color:"#878787","box-shadow":"none","font-weight":"400","font-size":"20px"}},[l(" 남들과는 다르게, 누구보다 높이, 한국형 판타지 전문 제작사 (주)엑셀시오르콘텐츠랩입니다."),e("br"),e("br"),l(" 현재 OTT시리즈 <반드시 너와 함께 내일 아침 떠오르는 찬란한 태양을 보고 싶다> 프리프로덕션 진행 중입니다."),e("br"),e("br"),l(" 이외에 영화 <Cross Fire>를 기획개발 중 입니다. ")])],-1)),ne={class:"panel"},ae={class:"panel__title"},le=n(()=>e("span",{class:"title"}," 제작사 필모그라피 ",-1)),ce={key:0,class:"btn btn--right btn--fill"},de=n(()=>e("span",{class:"text"},"추가하기",-1)),_e=[de],re={class:"panel__content"},pe={class:"panel"},ue=n(()=>e("div",{class:"panel__title"},[e("span",{class:"title"}," 진행중인 오디션 ")],-1)),me={class:"panel__content"},he={class:"audition-list"},ve={class:"header"},fe={class:"date date--start"},ge=n(()=>e("span",{class:"label"},"게시일",-1)),be={class:"text"},ye={class:"date date--end"},ke=n(()=>e("span",{class:"label"},"마감일",-1)),xe={class:"text"},Se={class:"btn"},$e={class:"content"},Ae={class:"title"},Ce={class:"role"},Pe={class:"info"},we={class:"info__elem"},Me=n(()=>e("span",{class:"label"},"지원자",-1)),De={class:"count"},Le={class:"info__elem"},Ie=n(()=>e("span",{class:"label"},"응답완료",-1)),Ve={class:"count"},Fe={class:"info__elem"},Re=n(()=>e("span",{class:"label"},"미응답",-1)),Ue={class:"count"},Te={style:{display:"flex",gap:"30px"}},Oe=n(()=>e("span",null,"오디션 등록일",-1)),Ye=n(()=>e("span",null,"오디션 마감일",-1)),je={style:{"text-align":"right"}},ze={key:0,class:"footer"},Be={class:"footer__wrapper"},Ne={class:"right"};function Ee(s,a,v,p,c,d){const h=y("RouterLink"),u=B,D=y("swiper-slide"),L=y("swiper"),f=C,x=N,I=E;return _(),r("div",J,[e("div",K,[e("div",W,[X,d.isUpdate?(_(),r("span",{key:1,class:"btn btn--right btn--fill",onClick:a[0]||(a[0]=(...o)=>d.handleClickAddMovieProfile&&d.handleClickAddMovieProfile(...o))},oe)):(_(),r("span",Z,[t(h,{to:"/portfolio/update"},{default:i(()=>[ee,se]),_:1})]))]),ie]),e("div",ne,[e("div",ae,[le,d.isUpdate?(_(),r("span",ce,_e)):S("",!0)]),e("div",re,[t(L,{modules:p.modules,"slides-per-view":d.isUpdate?5:4,"space-between":20,navigation:""},{default:i(()=>[(_(!0),r($,null,A(s.$store.state.production.detail.movieList,(o,b)=>(_(),j(D,{key:b},{default:i(()=>[t(u,z(o,{index:b,update:v.status==="update",cardType:"filmo",onRemove:d.handleRemoveThumbCard}),null,16,["index","update","onRemove"])]),_:2},1024))),128))]),_:1},8,["modules","slides-per-view"])])]),e("div",pe,[ue,e("div",me,[e("ul",he,[(_(!0),r($,null,A(s.$store.state.production.detail.auditionList,(o,b)=>(_(),r("li",{key:b,class:"audition-list__elem"},[e("div",ve,[e("p",fe,[ge,e("span",be,m(o.startDate),1)]),e("p",ye,[ke,e("span",xe,m(o.endDate),1)])]),e("div",Se,[t(f,{size:"large",shape:"round",onClick:hs=>d.handleClickModifyAudition(o)},{default:i(()=>[l("오디션 수정")]),_:2},1032,["onClick"])]),e("div",$e,[e("span",Ae,m(o.title),1),e("span",Ce,m(c.ROLE_MAP[o.role]),1)]),e("div",Pe,[e("p",we,[Me,e("span",De,"("+m(o.applicantCnt)+")",1)]),e("p",Le,[Ie,e("span",Ve,"("+m(o.yesCnt)+")",1)]),e("p",Fe,[Re,e("span",Ue,"("+m(o.noCnt)+")",1)])])]))),128))])])]),t(I,{visible:c.isAuditionVisible,"onUpdate:visible":a[3]||(a[3]=o=>c.isAuditionVisible=o),title:"오디션 정보 수정",onOk:d.handleAuditionModifyOk,width:"1000px",cancelText:"취소",okText:"확인"},{default:i(()=>[e("div",Te,[e("div",null,[Oe,t(x,{value:c.selectedAudition.startDate,"onUpdate:value":a[1]||(a[1]=o=>c.selectedAudition.startDate=o),fullscreen:!1,valueFormat:"YYYY-MM-DD"},null,8,["value"])]),e("div",null,[Ye,t(x,{value:c.selectedAudition.endDate,"onUpdate:value":a[2]||(a[2]=o=>c.selectedAudition.endDate=o),fullscreen:!1,valueFormat:"YYYY-MM-DD"},null,8,["value"])])]),e("div",je,[t(f,{size:"large",type:"primary"},{default:i(()=>[l("오디션 조기마감 하기")]),_:1})])]),_:1},8,["visible","onOk"]),d.isUpdate?(_(),r("div",ze,[e("div",Be,[e("div",Ne,[t(h,{to:"/"},{default:i(()=>[t(f,{size:"large"},{default:i(()=>[l(" 취소 ")]),_:1})]),_:1}),t(f,{size:"large",style:{"margin-left":"12px"},onClick:p.success},{default:i(()=>[l(" 임시저장 ")]),_:1},8,["onClick"]),t(h,{to:"/"},{default:i(()=>[t(f,{type:"primary",size:"large",style:{"margin-left":"12px"}},{default:i(()=>[l(" 등록하기 ")]),_:1})]),_:1})])])])):S("",!0)])}const Qe=k(H,[["render",Ee],["__scopeId","data-v-cc06b186"]]),qe="/assets/notice-b854a4be.svg";const Ge={data(){return{MAP:[{id:"A",value:"영어"},{id:"B",value:"중국어"},{id:"C",value:"일본어"},{id:"D",value:"프랑스어"},{id:"E",value:"독일어"},{id:"F",value:"경상도 사투리"},{id:"G",value:"전라도 사투리"},{id:"H",value:"평양 사투리"},{id:"I",value:"강원도 사투리"},{id:"J",value:"제주도 사투리"},{id:"K",value:"스포츠댄스"},{id:"L",value:"발레"},{id:"M",value:"현대무용"},{id:"N",value:"한국무용"},{id:"O",value:"방송댄스"},{id:"P",value:"액션"},{id:"Q",value:"운전"}]}},computed:{}},g=s=>(P("data-v-f2e1a8c8"),s=s(),w(),s),He={class:"production-profile"},Je={class:"production-profile__wrapper"},Ke={class:"box"},We=g(()=>e("div",{class:"image"},[e("img",{class:"avatar",src:q})],-1)),Xe={class:"name"},Ze={class:"box"},es={class:"info-list"},ss={class:"info-list__item"},ts=g(()=>e("span",{class:"label"},"스크랩",-1)),os={class:"info-list__item"},is=g(()=>e("span",{class:"label"},"프로필 박스",-1)),ns={class:"info-list__item"},as=g(()=>e("span",{class:"label"},"제안한 오디션",-1)),ls=g(()=>e("div",{class:"box"},[e("img",{src:qe})],-1));function cs(s,a,v,p,c,d){const h=C,u=y("router-link");return _(),r("div",He,[e("div",Je,[e("div",Ke,[We,e("div",Xe,m(s.$store.state.production.detail.name),1),t(u,{to:"/production/audition/create"},{default:i(()=>[t(h,{shape:"round",size:"large"},{default:i(()=>[l(" 오디션 등록 ")]),_:1})]),_:1})]),e("div",Ze,[e("ul",es,[e("li",ss,[ts,t(u,{class:"text",tag:"span",to:"/profile/interest?type=scrap"},{default:i(()=>[l(" 7 ")]),_:1})]),e("li",os,[is,t(u,{class:"text",tag:"span",to:"/profile/interest?type=open"},{default:i(()=>[l(" 4 ")]),_:1})]),e("li",ns,[as,t(u,{class:"text",tag:"span",to:"/profile/interest?type=offer"},{default:i(()=>[l(" 1 ")]),_:1})])])]),ls])])}const M=k(Ge,[["render",cs],["__scopeId","data-v-f2e1a8c8"]]),ds={name:"production-main",data(){return{}},methods:{},mounted(){},components:{ProductionProfile:M}},_s={class:"layout-content__main"},rs={class:"content content--left"},ps={class:"content content--right"},us={class:"content__child"};function ms(s,a,v,p,c,d){const h=M,u=Qe;return _(),r("div",_s,[e("div",rs,[t(h)]),e("div",ps,[e("div",us,[t(u)])])])}const xs=k(ds,[["render",ms]]);export{xs as default};
