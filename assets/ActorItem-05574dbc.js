import{U as V,V as z,a0 as T,N as B,O as E,P as F,Q as O,_ as I,a1 as q,r as b,o as d,c as v,b as e,a as s,w as t,h as u,F as w,f as x,g as y,v as D,t as r,e as j,W as G,B as Q,$ as W,a6 as H,a7 as J,a8 as K,a9 as X,I as Y,aa as Z,ab as $,a3 as ee,p as se,q as te}from"./index-377d658f.js";const ae="/findactor/assets/kakao_icon-346d609d.svg",oe="/findactor/assets/youtube_icon-07b5fc4a.svg";const ie={name:"ActorDetail",components:{Swiper:V,SwiperSlide:z,RouterLink:T},props:{status:{type:String,default:""}},data(){return{isAddMovieProfileVisible:!1,movieProfileDetail:{title:"",url:"",role:"",year:"",imgSrc:null},movieProfileList:[{imgSrc:"/src/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021},{imgSrc:"/src/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021},{imgSrc:"/src/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021},{imgSrc:"/src/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021},{imgSrc:"/src/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021},{imgSrc:"/src/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021}],imageProfileList:[{imgSrc:"/src/assets/imageProfile/1.jpg",kind:"상업드라마",role:"단역 가나다역"},{imgSrc:"/src/assets/imageProfile/2.jpg",kind:"상업드라마",role:"단역 가나다역"},{imgSrc:"/src/assets/imageProfile/3.jpg",kind:"상업드라마",role:"단역 가나다역"},{imgSrc:"/src/assets/imageProfile/4.jpg",kind:"상업드라마",role:"단역 가나다역"},{imgSrc:"/src/assets/imageProfile/5.jpg",role:"단역 가나다역"},{imgSrc:"/src/assets/imageProfile/6.jpg",role:"단역 가나다역"},{imgSrc:"/src/assets/imageProfile/7.jpg",role:"단역 가나다역"},{imgSrc:"/src/assets/imageProfile/8.jpg",role:"단역 가나다역"}],filmoList:[{title:"강철비2 정상회담",year:"2020",kind:"상업드라마",role:"백두호 - 조타사역"},{title:"가장 보통의 연애",year:"2019",kind:"상업드라마",role:"이자카야 매니저 - 단역"},{title:"마약왕",year:"2018",kind:"상업드라마",role:"단역 - 다방 앞 의원 의사역"},{title:"밤의 문이 열린다",year:"2019",kind:"상업드라마",role:"조연 - 이민성역"}]}},setup(){return B(),{success:()=>{q.success("임시저장 되었습니다.",2)},onSwiper:c=>{console.log(c)},onSlideChange:()=>{console.log("slide change")},modules:[E,F,O]}},computed:{isUpdate(){return this.status==="update"}},methods:{handleRemoveThumbCard(l){this.$store.state.profile.movieList.splice(l,1),this.$store.commit("saveLocal")},handleClickAddMovieProfile(){this.isAddMovieProfileVisible=!0},handleConfirmAddMovieProfile(){},handleInputMovieProfileDetailURL(l){const i=l.target.value,c=/(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm.exec(i);if(c){const a=c[3];this.movieProfileDetail.imgSrc=`https://img.youtube.com/vi/${a}/maxresdefault.jpg`}else this.movieProfileDetail.imgSrc=null}},mounted(){console.log(this.status)}},h=l=>(se("data-v-7d9176cd"),l=l(),te(),l),le={class:"actor-portfolio"},ne={class:"panel"},ce={class:"panel__title"},de=h(()=>e("span",{class:"title"}," 프로필 ",-1)),re={class:"btn-group",style:{"margin-left":"auto"}},_e=G('<div class="panel__content" data-v-7d9176cd><div class="detail-info" data-v-7d9176cd><div class="left" data-v-7d9176cd><p class="name" data-v-7d9176cd>이승찬</p><p class="info" data-v-7d9176cd><span class="info__item" data-v-7d9176cd>남자</span><span class="info__item" data-v-7d9176cd>29세</span><span class="info__item" data-v-7d9176cd>176cm</span><span class="info__item" data-v-7d9176cd>72kg</span></p><p class="info2" data-v-7d9176cd><span class="label" data-v-7d9176cd>생년월일</span><span class="text" data-v-7d9176cd>1994.11.04</span></p><p class="info2" data-v-7d9176cd><span class="label" data-v-7d9176cd>이메일</span><span class="text" data-v-7d9176cd>zoonyfil@nate.com</span></p><p class="info2" data-v-7d9176cd><span class="label" data-v-7d9176cd>연락처</span><span class="text" data-v-7d9176cd>010-6714-0130</span></p></div><div class="right" data-v-7d9176cd><div class="info3" data-v-7d9176cd><span class="label" data-v-7d9176cd>특기</span><p class="info" data-v-7d9176cd><span class="info__item" data-v-7d9176cd>액션</span><span class="info__item" data-v-7d9176cd>사투리연기</span><span class="info__item" data-v-7d9176cd>운전</span></p></div><div class="info3" data-v-7d9176cd><span class="label" data-v-7d9176cd>SNS</span><p class="sns" data-v-7d9176cd><img class="icon" src="'+ae+'" data-v-7d9176cd><span class="text" data-v-7d9176cd>zoonyfil</span></p><p class="sns" data-v-7d9176cd><img src="'+oe+'" data-v-7d9176cd><span class="text" data-v-7d9176cd>http://www.youtube.com/zoonyfil</span></p></div></div></div></div>',1),pe={class:"panel"},me=h(()=>e("div",{class:"panel__title"},[e("span",{class:"title"}," 영상 프로필 ")],-1)),ue={class:"panel__content"},ve={class:"panel"},fe=h(()=>e("div",{class:"panel__title"},[e("span",{class:"title"}," 이미지 프로필 ")],-1)),ge={class:"panel__content"},he={class:"panel"},be=h(()=>e("div",{class:"panel__title"},[e("span",{class:"title"}," 작품경력 ")],-1)),ye={class:"panel__content"},Se={class:"title"},Pe={class:"year"},ke={class:"kind"},we={class:"movie-profile-edit__thumb"},xe=["src"],De={key:0,class:"footer"},je={class:"footer__wrapper"},Ie={class:"right"};function Le(l,i,n,c,a,_){const p=Q,L=W,S=b("swiper-slide"),P=b("swiper"),A=H,C=J,M=K,R=X,f=Y,m=Z,U=$,N=ee,k=b("RouterLink");return d(),v("div",le,[e("div",ne,[e("div",ce,[de,e("p",re,[s(p,{type:"primary",size:"large"},{default:t(()=>[u("제안하기")]),_:1}),s(p,{size:"large",style:{"margin-left":"10px"}},{default:t(()=>[u("스크랩")]),_:1})])]),_e]),e("div",pe,[me,e("div",ue,[s(P,{modules:c.modules,"slides-per-view":_.isUpdate?5:4,"space-between":20,navigation:""},{default:t(()=>[(d(!0),v(w,null,x(l.$store.state.profile.movieList,(o,g)=>(d(),y(S,{key:g},{default:t(()=>[s(L,D(o,{index:g,update:n.status==="update",onRemove:_.handleRemoveThumbCard}),null,16,["index","update","onRemove"])]),_:2},1024))),128))]),_:1},8,["modules","slides-per-view"])])]),e("div",ve,[fe,e("div",ge,[s(P,{modules:c.modules,"slides-per-view":"auto","space-between":10,navigation:"",class:"image-profile"},{default:t(()=>[(d(!0),v(w,null,x(a.imageProfileList,(o,g)=>(d(),y(S,{key:g},{default:t(()=>[s(A,D(o,{update:n.status==="update"}),null,16,["update"])]),_:2},1024))),128))]),_:1},8,["modules"])])]),e("div",he,[be,e("div",ye,[s(R,{"item-layout":"horizontal","data-source":a.filmoList},{renderItem:t(({item:o})=>[s(M,{class:"profile-filemo"},{default:t(()=>[s(C,{description:o.role},{title:t(()=>[e("span",Se,r(o.title),1),e("span",Pe," ("+r(o.year)+")",1),e("span",ke,r(o.kind),1)]),_:2},1032,["description"])]),_:2},1024)]),_:1},8,["data-source"])])]),s(N,{visible:a.isAddMovieProfileVisible,"onUpdate:visible":i[4]||(i[4]=o=>a.isAddMovieProfileVisible=o),title:"영상 프로필 추가",onOk:_.handleConfirmAddMovieProfile,cancelText:"취소",okText:"확인"},{default:t(()=>[s(U,{class:"movie-profile-edit","label-col":{style:{width:"100px"}},"wapper-col":{span:6},autocomplete:"off"},{default:t(()=>[s(m,{label:"영상 URL",rules:[{required:!0,message:"연기 영상은 필수 입력값 입니다."}]},{default:t(()=>[s(f,{value:a.movieProfileDetail.url,"onUpdate:value":i[0]||(i[0]=o=>a.movieProfileDetail.url=o),placeholder:"연기 영상 링크",onInput:_.handleInputMovieProfileDetailURL},null,8,["value","onInput"])]),_:1},8,["rules"]),a.movieProfileDetail.imgSrc?(d(),y(m,{key:0,label:"썸네일 이미지"},{default:t(()=>[e("div",we,[e("img",{class:"image",src:a.movieProfileDetail.imgSrc},null,8,xe)])]),_:1})):j("",!0),s(m,{label:"작품명"},{default:t(()=>[s(f,{value:a.movieProfileDetail.title,"onUpdate:value":i[1]||(i[1]=o=>a.movieProfileDetail.title=o),placeholder:"작품명"},null,8,["value"])]),_:1}),s(m,{label:"역할"},{default:t(()=>[s(f,{value:a.movieProfileDetail.role,"onUpdate:value":i[2]||(i[2]=o=>a.movieProfileDetail.role=o),placeholder:"역할"},null,8,["value"])]),_:1}),s(m,{label:"연도","wrapper-col":{span:8}},{default:t(()=>[s(f,{value:a.movieProfileDetail.year,"onUpdate:value":i[3]||(i[3]=o=>a.movieProfileDetail.year=o),placeholder:"작품 연도"},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["visible","onOk"]),_.isUpdate?(d(),v("div",De,[e("div",je,[e("div",Ie,[s(k,{to:"/"},{default:t(()=>[s(p,{size:"large"},{default:t(()=>[u(" 취소 ")]),_:1})]),_:1}),s(p,{size:"large",style:{"margin-left":"12px"},onClick:c.success},{default:t(()=>[u(" 임시저장 ")]),_:1},8,["onClick"]),s(k,{to:"/"},{default:t(()=>[s(p,{type:"primary",size:"large",style:{"margin-left":"12px"}},{default:t(()=>[u(" 등록하기 ")]),_:1})]),_:1})])])])):j("",!0)])}const qe=I(ie,[["render",Le],["__scopeId","data-v-7d9176cd"]]);const Ae={name:"actor-item",props:["index","name","gender","age","height","weight","imgSrc"],data(){return{GENDER_MAP:{male:"남자",female:"여자"}}}},Ce={class:"actor-item"},Me={class:"actor-item__thumb"},Re=["src"],Ue={class:"actor-item__content"},Ne={class:"name"},Ve={class:"info"},ze={class:"info__item"},Te={class:"info__item"},Be={class:"info__item"},Ee={class:"info__item"};function Fe(l,i,n,c,a,_){return d(),v("div",Ce,[e("div",Me,[e("img",{class:"thumb",src:n.imgSrc},null,8,Re)]),e("div",Ue,[e("p",Ne,r(n.name),1),e("p",Ve,[e("span",ze,r(a.GENDER_MAP[n.gender]),1),e("span",Te,r(n.age)+"세 ",1),e("span",Be,r(n.height)+"cm ",1),e("span",Ee,r(n.weight)+"kg ",1)])])])}const Ge=I(Ae,[["render",Fe],["__scopeId","data-v-fa277ae7"]]);export{Ge as _,qe as a};
