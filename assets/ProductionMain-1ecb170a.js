import{a9 as I,aa as V,ah as R,a6 as j,a7 as F,a8 as U,W as Y,ai as B,aj as N,ak as O,_ as y,r as b,o as d,c as _,e,d as n,w as c,t as p,g as T,F as k,h as S,i as z,G as E,j as h,af as G,B as P,al as H,S as J,v as C,x as w,am as K,an as Q}from"./index-46ced1bb.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{u as W}from"./context-ff23fb79.js";const q={name:"production-info",components:{Swiper:I,SwiperSlide:V,RouterLink:R},props:{status:{type:String,default:""}},data(){return{selectedAudition:null,ROLE_MAP:{1:"주연",2:"조연",3:"단역"},isAuditionVisible:!1,movieProfileDetail:{title:"",url:"",role:"",year:"",imgSrc:null},movieProfileList:[{imgSrc:"/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021},{imgSrc:"/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021},{imgSrc:"/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021},{imgSrc:"/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021},{imgSrc:"/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021},{imgSrc:"/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021}],imageProfileList:[{imgSrc:"/assets/image1.png",kind:"상업드라마",role:"단역 가나다역"},{imgSrc:"/assets/image2.png",kind:"상업드라마",role:"단역 가나다역"},{imgSrc:"/assets/image3.png",kind:"상업드라마",role:"단역 가나다역"},{imgSrc:"/assets/image4.png",kind:"상업드라마",role:"단역 가나다역"},{imgSrc:"/assets/image5.png",role:"단역 가나다역"}],profile:{introduction:"",philmography:[]},productAuditions:[]}},setup(){return W(),{success:()=>{O.success("임시저장 되었습니다.",2)},onSwiper:r=>{console.log(r)},onSlideChange:()=>{console.log("slide change")},modules:[j,F,U]}},computed:{isUpdate(){return this.status==="update"}},created(){this.load()},methods:{load(){console.log(111),Y({productionName:"(주)엑셀시오르콘텐츠랩"}).then(t=>{this.productAuditions=t.filter(({isClosed:s})=>!s)})},handleClickAddMovieProfile(){this.isAddMovieProfileVisible=!0},handleConfirmAddMovieProfile(){},handleRemoveThumbCard(t){this.$store.state.profile.movieList.splice(t,1),this.$store.commit("saveLocal")},handleInputMovieProfileDetailURL(t){const{value:s}=t.target,r=/(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm.exec(s);if(r){const i=r[3];this.movieProfileDetail.imgSrc=`https://img.youtube.com/vi/${i}/maxresdefault.jpg`}else this.movieProfileDetail.imgSrc=null},handleClickModifyAudition(t){this.selectedAudition=t,this.isAuditionVisible=!0},handleAuditionModifyOk(){this.isAuditionVisible=!1},handleCloseAudition(t){B({auditionTitle:t}).then(()=>{this.isAuditionVisible=!1,this.load()})}},mounted(){console.log(this.status),this.profile=N()}},a=t=>(C("data-v-5f14ea4a"),t=t(),w(),t),X={class:"production-info container"},Z={class:"panel"},ee={class:"panel__title"},te=a(()=>e("span",{class:"title"}," 제작사 소개 ",-1)),se={key:0,class:"btn btn--right"},oe=a(()=>e("span",{class:"text"}," 제작사 정보 수정 ",-1)),ie=a(()=>e("img",{class:"more__icon",src:K},null,-1)),ne=a(()=>e("span",{class:"text"},"추가하기",-1)),ae=[ne],le={class:"panel__content"},ce={class:"container",style:{"background-color":"#F6F4FF",color:"#878787","box-shadow":"none","font-weight":"400","font-size":"20px"}},de={class:"panel"},_e={class:"panel__title"},re=a(()=>e("span",{class:"title"}," 제작사 필모그라피 ",-1)),ue={key:0,class:"btn btn--right btn--fill"},pe=a(()=>e("span",{class:"text"},"추가하기",-1)),he=[pe],me={class:"panel__content"},ve={class:"panel"},fe=a(()=>e("div",{class:"panel__title"},[e("span",{class:"title"}," 진행중인 오디션 ")],-1)),ge={class:"panel__content"},be={class:"audition-list"},ye={class:"header"},Ae={class:"date date--start"},xe=a(()=>e("span",{class:"label"},"게시일",-1)),ke={class:"text"},Se={class:"date date--end"},Pe=a(()=>e("span",{class:"label"},"마감일",-1)),Ce={class:"text"},we={class:"btn"},$e={class:"content"},Me={class:"title"},De={class:"role"},Le={class:"info"},Ie={class:"info__elem"},Ve=a(()=>e("span",{class:"label"},"지원자",-1)),Re={class:"count"},je={style:{display:"flex",gap:"30px"}},Fe=a(()=>e("span",null,"오디션 등록일",-1)),Ue=a(()=>e("span",null,"오디션 마감일",-1)),Ye={style:{"text-align":"right"}};function Be(t,s,m,r,i,l){const v=b("RouterLink"),u=G,M=b("swiper-slide"),D=b("swiper"),A=P,x=H,L=J;return d(),_("div",X,[e("div",Z,[e("div",ee,[te,l.isUpdate?(d(),_("span",{key:1,class:"btn btn--right btn--fill",onClick:s[0]||(s[0]=(...o)=>l.handleClickAddMovieProfile&&l.handleClickAddMovieProfile(...o))},ae)):(d(),_("span",se,[n(v,{to:"/production/profile/update"},{default:c(()=>[oe,ie]),_:1})]))]),e("div",le,[e("div",ce,p(i.profile.introduction),1)])]),e("div",de,[e("div",_e,[re,l.isUpdate?(d(),_("span",ue,he)):T("",!0)]),e("div",me,[n(D,{modules:r.modules,"slides-per-view":l.isUpdate?5:4,"space-between":20,navigation:""},{default:c(()=>[(d(!0),_(k,null,S(i.profile.philmography,(o,g)=>(d(),z(M,{key:g},{default:c(()=>[n(u,E(o,{index:g,update:m.status==="update",cardType:"filmo",onRemove:l.handleRemoveThumbCard}),null,16,["index","update","onRemove"])]),_:2},1024))),128))]),_:1},8,["modules","slides-per-view"])])]),e("div",ve,[fe,e("div",ge,[e("ul",be,[(d(!0),_(k,null,S(i.productAuditions,(o,g)=>(d(),_("li",{key:g,class:"audition-list__elem"},[e("div",ye,[e("p",Ae,[xe,e("span",ke,p(o.startDate),1)]),e("p",Se,[Pe,e("span",Ce,p(o.endDate),1)])]),e("div",we,[n(A,{size:"large",shape:"round",onClick:_t=>l.handleClickModifyAudition(o)},{default:c(()=>[h(" 오디션 수정 ")]),_:2},1032,["onClick"])]),e("div",$e,[e("span",Me,p(o.title),1),e("span",De,p(i.ROLE_MAP[o.role]),1)]),e("div",Le,[e("p",Ie,[Ve,e("span",Re,"( "+p(o.appliedAuditionees.length)+" )",1)])])]))),128))])])]),n(L,{visible:i.isAuditionVisible,"onUpdate:visible":s[4]||(s[4]=o=>i.isAuditionVisible=o),title:"오디션 정보 수정",onOk:l.handleAuditionModifyOk,width:"1000px",cancelText:"취소",okText:"확인"},{default:c(()=>[e("div",je,[e("div",null,[Fe,n(x,{value:i.selectedAudition.startDate,"onUpdate:value":s[1]||(s[1]=o=>i.selectedAudition.startDate=o),fullscreen:!1,valueFormat:"YYYY-MM-DD"},null,8,["value"])]),e("div",null,[Ue,n(x,{value:i.selectedAudition.endDate,"onUpdate:value":s[2]||(s[2]=o=>i.selectedAudition.endDate=o),fullscreen:!1,valueFormat:"YYYY-MM-DD"},null,8,["value"])])]),e("div",Ye,[n(A,{size:"large",type:"primary",onClick:s[3]||(s[3]=()=>l.handleCloseAudition(i.selectedAudition.title))},{default:c(()=>[h("오디션 조기마감 하기")]),_:1})])]),_:1},8,["visible","onOk"])])}const Ne=y(q,[["render",Be],["__scopeId","data-v-5f14ea4a"]]),Oe="/assets/notice-b854a4be.svg";const Te={data(){return{MAP:[{id:"A",value:"영어"},{id:"B",value:"중국어"},{id:"C",value:"일본어"},{id:"D",value:"프랑스어"},{id:"E",value:"독일어"},{id:"F",value:"경상도 사투리"},{id:"G",value:"전라도 사투리"},{id:"H",value:"평양 사투리"},{id:"I",value:"강원도 사투리"},{id:"J",value:"제주도 사투리"},{id:"K",value:"스포츠댄스"},{id:"L",value:"발레"},{id:"M",value:"현대무용"},{id:"N",value:"한국무용"},{id:"O",value:"방송댄스"},{id:"P",value:"액션"},{id:"Q",value:"운전"}]}},computed:{}},f=t=>(C("data-v-f2e1a8c8"),t=t(),w(),t),ze={class:"production-profile"},Ee={class:"production-profile__wrapper"},Ge={class:"box"},He=f(()=>e("div",{class:"image"},[e("img",{class:"avatar",src:Q})],-1)),Je={class:"name"},Ke={class:"box"},Qe={class:"info-list"},We={class:"info-list__item"},qe=f(()=>e("span",{class:"label"},"스크랩",-1)),Xe={class:"info-list__item"},Ze=f(()=>e("span",{class:"label"},"프로필 박스",-1)),et={class:"info-list__item"},tt=f(()=>e("span",{class:"label"},"제안한 오디션",-1)),st=f(()=>e("div",{class:"box"},[e("img",{src:Oe})],-1));function ot(t,s,m,r,i,l){const v=P,u=b("router-link");return d(),_("div",ze,[e("div",Ee,[e("div",Ge,[He,e("div",Je,p(t.$store.state.production.detail.name),1),n(u,{to:"/production/audition/create"},{default:c(()=>[n(v,{shape:"round",size:"large"},{default:c(()=>[h(" 오디션 등록 ")]),_:1})]),_:1})]),e("div",Ke,[e("ul",Qe,[e("li",We,[qe,n(u,{class:"text",tag:"span",to:"/profile/interest?type=scrap"},{default:c(()=>[h(" 7 ")]),_:1})]),e("li",Xe,[Ze,n(u,{class:"text",tag:"span",to:"/profile/interest?type=open"},{default:c(()=>[h(" 4 ")]),_:1})]),e("li",et,[tt,n(u,{class:"text",tag:"span",to:"/profile/interest?type=offer"},{default:c(()=>[h(" 1 ")]),_:1})])])]),st])])}const $=y(Te,[["render",ot],["__scopeId","data-v-f2e1a8c8"]]),it={name:"production-main",data(){return{}},methods:{},mounted(){},components:{ProductionProfile:$}},nt={class:"layout-content__main"},at={class:"content content--left"},lt={class:"content content--right"},ct={class:"content__child"};function dt(t,s,m,r,i,l){const v=$,u=Ne;return d(),_("div",nt,[e("div",at,[n(v)]),e("div",lt,[e("div",ct,[n(u)])])])}const ft=y(it,[["render",dt]]);export{ft as default};
