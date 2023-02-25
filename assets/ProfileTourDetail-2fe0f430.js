import{d as a,a5 as D,_ as L,a6 as M,a7 as V,a8 as $,Y as E,Z as G,a9 as U,aa as Y,r,o as c,c as _,e as i,w as o,F as v,g as Z,ab as P,O as q,B as J,I as Q,ac as W,j as d,t as X,h as K,i as tt,G as et,a1 as at,ad as nt,ae as ot,af as st,v as lt,x as it}from"./index-7ee82bf4.js";/* empty css              */import{u as rt}from"./context-4c127902.js";import{A as C}from"./AuditionItem-cc9ec51d.js";import{R as dt}from"./ReloadOutlined-2df00a2f.js";/* empty css              */var ct={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M690 405h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 563.6 406.8 418.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"down-circle",theme:"outlined"};const pt=ct;function x(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},l=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(n).filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable}))),l.forEach(function(s){ut(t,s,n[s])})}return t}function ut(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=function(e,n){var l=x({},e,n.attrs);return a(D,x({},l,{icon:pt}),null)};b.displayName="DownCircleOutlined";b.inheritAttrs=!1;const _t=b;var mt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"}}]},name:"heart",theme:"filled"};const vt=mt;function k(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},l=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(n).filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable}))),l.forEach(function(s){bt(t,s,n[s])})}return t}function bt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=function(e,n){var l=k({},e,n.attrs);return a(D,k({},l,{icon:vt}),null)};f.displayName="HeartFilled";f.inheritAttrs=!1;const ft=f,gt="/assets/profile-6cef3e0c.jpeg",ht="/assets/offline-7b4b60ff.svg";const yt={name:"tour-detail",setup(){return rt(),{success:()=>{message.success("임시저장 되었습니다.",2)},onSwiper:l=>{console.log(l)},onSlideChange:()=>{console.log("slide change")},modules:[M,V,$]}},data(){return{visible:[],sort:"1",kind:"3",likeCnt:4}},methods:{handleButtonClick(){},handleMenuClick(){},handleClickSearchClear(){},handleClickOverlay(t){}},computed:{},components:{DownOutlined:E,SearchOutlined:G,AuditionItem:C,ReloadOutlined:dt,DownCircleOutlined:_t,HeartFilled:ft,Swiper:U,SwiperSlide:Y,AuditionItem:C}},Ot=t=>(lt("data-v-71452b19"),t=t(),it(),t),wt={class:"tour-detail"},St={class:"tour-detail__header"},Ct={class:"btn"},xt={class:"tour-detail__sub-header"},kt={class:"tour-detail__content container"},Dt={class:"header"},Pt=P('<div class="header__thumb" data-v-71452b19><img class="thumb" src="'+gt+'" data-v-71452b19></div><div class="header__title" data-v-71452b19><span class="production-name item" data-v-71452b19>엑셀시오르콘텐츠랩</span><span class="title-name item" data-v-71452b19>반드시 너와 함께 </span></div>',2),zt={class:"header__control"},Ft={class:"content"},jt={class:"btn-group"},Bt=Ot(()=>i("img",{src:ht},null,-1)),Ht=P('<div class="sub-title" data-v-71452b19> 작품 소개 </div><div class="article" data-v-71452b19> 어릴적 불의의 사고로 아버지를 잃은 여름은 무럭무럭 자라 어느덧 고등학생이 된다.<br data-v-71452b19><br data-v-71452b19> 매년 같이 여행을 다녀왔던 친구들과 이번에도 여행을 가기로 한다. </div><div class="sub-title" data-v-71452b19> 제작사 소개 </div><div class="article" data-v-71452b19> 숭실대학교 대학언론인 인터넷 방송국 씨즌넷에서 제작하는 단편영화에 출연하실 배우 1명을 모집합니다. <br data-v-71452b19><br data-v-71452b19> 해당 단편영화는 3월에 있을 숭실대학교 영상제에 상영되고, 인터넷 방송국 유튜브에 업로드될 예정입니다.<br data-v-71452b19><br data-v-71452b19><p style="margin-bottom:20px;" data-v-71452b19> &lt;모집 배역 캐릭터&gt; </p><p style="margin-bottom:10px;" data-v-71452b19> 이름: 권민수 (미정 </p><p style="margin-bottom:10px;" data-v-71452b19> 나이: 저승사자 역 (젊은 아버지 느낌) </p><p style="margin-bottom:10px;" data-v-71452b19> 성별: 남성 </p><p style="margin-bottom:10px;" data-v-71452b19> 역할: 주인공의 아버지로 주인공의 행복한 기억을 찾아주는 저승사자 역할 </p><p style="margin-bottom:20px;" data-v-71452b19> 착장: 정장 </p><p style="margin-bottom:20px;" data-v-71452b19>&lt;촬영 정보&gt;</p><p style="margin-bottom:10px;" data-v-71452b19> 장소: 인천 월미도, 숭실대학교 </p><p style="margin-bottom:10px;" data-v-71452b19> 촬영 날짜: 1/12, 1/15 (추가촬영 있을 수 있음) </p><p style="margin-bottom:20px;" data-v-71452b19> 페이: 12만원 (제작 여건 상 많은 페이를 드릴 수 없는 점 양해 바랍니다) </p><p style="margin-bottom:20px;" data-v-71452b19>&lt;지원양식&gt;</p><p style="margin-bottom:10px;" data-v-71452b19> 메일 주소: songsy9573@naver.com </p><p style="margin-bottom:10px;" data-v-71452b19> -이메일에 프로필과 포트폴리오(연기영상) 첨부 부탁드립니다. </p><p style="margin-bottom:10px;" data-v-71452b19> -연기영상(독백이나 출연영상)이 없는 경우 첨부된 대본을 이용해 자유롭게 연기하신 영상 부탁드립니다. </p><p style="margin-bottom:10px;" data-v-71452b19> 문의 사항은 이메일로 보내주시면 답변드리겠습니다. </p></div><div class="sub-title" data-v-71452b19> 제작사 필모그라피 </div>',5),Rt={class:"article"},It={class:"filmo-list"};function Nt(t,e,n,l,s,z){const m=at,g=r("DownCircleOutlined"),F=q,j=r("ReloadOutlined"),p=J,B=r("SearchOutlined"),H=Q,R=r("HeartFilled"),h=r("RouterLink"),y=nt,I=ot,O=r("DownOutlined"),w=W,N=st,A=r("SwiperSlide"),T=r("Swiper");return c(),_("div",wt,[i("div",St,[a(F,{value:s.kind,"onUpdate:value":e[0]||(e[0]=u=>s.kind=u),size:"large"},{default:o(()=>[a(m,{size:"large",value:"1"},{default:o(()=>[d("전체 프로필 투어")]),_:1}),a(m,{value:"2"},{default:o(()=>[d("오프라인 지원 "),a(g)]),_:1}),a(m,{value:"3"},{default:o(()=>[d("온라인 지원 "),a(g)]),_:1})]),_:1},8,["value"]),i("div",Ct,[a(p,{type:"dashed",onClick:z.handleClickSearchClear},{default:o(()=>[a(j,{class:"icon"}),d(" 검색 필터 초기화 ")]),_:1},8,["onClick"])]),a(H,{class:"item",size:"large",style:{width:"240px","margin-left":"auto"},placeholder:"검색"},{addonBefore:o(()=>[a(B)]),_:1})]),i("div",xt,[s.kind==="2"?(c(),_(v,{key:0},[],64)):s.kind==="3"?(c(),_(v,{key:1},[],64)):Z("",!0)]),i("div",kt,[i("div",Dt,[Pt,i("div",zt,[a(p,{type:"default",size:"large",shape:"round",onClick:e[1]||(e[1]=u=>s.likeCnt++)},{default:o(()=>[a(R),i("span",null,X(s.likeCnt),1)]),_:1})])]),i("div",Ft,[i("div",jt,[a(w,{class:"btn-group__item",placement:"bottom"},{overlay:o(()=>[a(I,{size:"large",style:{fontSize:"20px"}},{default:o(()=>[a(y,null,{default:o(()=>[a(h,{to:""},{default:o(()=>[d(" 바로 지원하기 ")]),_:1})]),_:1}),a(y,null,{default:o(()=>[a(h,{to:"/profile/update"},{default:o(()=>[d(" 프로필 수정하기 ")]),_:1})]),_:1})]),_:1})]),default:o(()=>[a(p,{size:"large"},{default:o(()=>[d(" 온라인 지원하기 "),a(O)]),_:1})]),_:1}),a(w,{class:"btn-group__item",placement:"bottom"},{overlay:o(()=>[Bt]),default:o(()=>[a(p,{size:"large"},{default:o(()=>[d(" 오프라인 지원하기 "),a(O)]),_:1})]),_:1})]),Ht,i("div",Rt,[i("div",It,[a(T,{modules:l.modules,"slides-per-view":5,"space-between":20,navigation:""},{default:o(()=>[(c(!0),_(v,null,K(t.$store.state.profile.movieList,(u,S)=>(c(),tt(A,{key:S},{default:o(()=>[a(N,et(u,{cardType:"filmo",index:S,update:t.status==="update",onRemove:t.handleRemoveThumbCard}),null,16,["index","update","onRemove"])]),_:2},1024))),128))]),_:1},8,["modules"])])])])])])}const Et=L(yt,[["render",Nt],["__scopeId","data-v-71452b19"]]);export{Et as default};
