import{a4 as N,a5 as V,ac as T,a1 as B,a2 as E,a3 as F,_ as I,ae as G,r as b,o as r,c as f,e,d as s,w as a,j as u,F as w,h as x,i as y,E as D,t as _,g as j,a6 as O,B as q,aa as H,am as J,an as K,ao as Q,ap as W,I as X,ak as Y,al as Z,M as $,v as ee,x as se}from"./index-35247f7b.js";/* empty css              */import{u as ae}from"./context-18e4c599.js";const te="/assets/kakao_icon-346d609d.svg",ie="/assets/youtube_icon-07b5fc4a.svg";const oe={name:"ActorDetail",components:{Swiper:N,SwiperSlide:V,RouterLink:T},props:{status:{type:String,default:""}},data(){return{isAddMovieProfileVisible:!1,movieProfileDetail:{title:"",url:"",role:"",year:"",imgSrc:null},movieProfileList:[{imgSrc:"/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021},{imgSrc:"/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021},{imgSrc:"/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021},{imgSrc:"/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021},{imgSrc:"/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021},{imgSrc:"/assets/thumb1.jpg",title:"구르미 그린 달빛",role:"단역 가나단역",year:2021}],imageProfileList:[{imgSrc:"/assets/imageProfile/1.jpg",kind:"상업드라마",role:"단역 가나다역"},{imgSrc:"/assets/imageProfile/2.jpg",kind:"상업드라마",role:"단역 가나다역"},{imgSrc:"/assets/imageProfile/3.jpg",kind:"상업드라마",role:"단역 가나다역"},{imgSrc:"/assets/imageProfile/4.jpg",kind:"상업드라마",role:"단역 가나다역"},{imgSrc:"/assets/imageProfile/5.jpg",role:"단역 가나다역"},{imgSrc:"/assets/imageProfile/6.jpg",role:"단역 가나다역"},{imgSrc:"/assets/imageProfile/7.jpg",role:"단역 가나다역"},{imgSrc:"/assets/imageProfile/8.jpg",role:"단역 가나다역"}],filmoList:[{title:"강철비2 정상회담",year:"2020",kind:"상업드라마",role:"백두호 - 조타사역"},{title:"가장 보통의 연애",year:"2019",kind:"상업드라마",role:"이자카야 매니저 - 단역"},{title:"마약왕",year:"2018",kind:"상업드라마",role:"단역 - 다방 앞 의원 의사역"},{title:"밤의 문이 열린다",year:"2019",kind:"상업드라마",role:"조연 - 이민성역"}]}},setup(){return ae(),{success:()=>{G.success("임시저장 되었습니다.",2)},onSwiper:c=>{},onSlideChange:()=>{},modules:[B,E,F]}},computed:{isUpdate(){return this.status==="update"}},methods:{handleRemoveThumbCard(l){this.$store.state.profile.movieList.splice(l,1),this.$store.commit("saveLocal")},handleClickAddMovieProfile(){this.isAddMovieProfileVisible=!0},handleConfirmAddMovieProfile(){},handleInputMovieProfileDetailURL(l){const{value:o}=l.target,c=/(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm.exec(o);if(c){const t=c[3];this.movieProfileDetail.imgSrc=`https://img.youtube.com/vi/${t}/maxresdefault.jpg`}else this.movieProfileDetail.imgSrc=null}},mounted(){console.log(this.status)}},h=l=>(ee("data-v-8a39f503"),l=l(),se(),l),le={class:"actor-portfolio"},ne={class:"panel"},ce={class:"panel__title"},re=h(()=>e("span",{class:"title"}," 프로필 ",-1)),_e={class:"btn-group",style:{"margin-left":"auto"}},de=O('<div class="panel__content" data-v-8a39f503><div class="detail-info" data-v-8a39f503><div class="left" data-v-8a39f503><p class="name" data-v-8a39f503>이승찬</p><p class="info" data-v-8a39f503><span class="info__item" data-v-8a39f503>남자</span><span class="info__item" data-v-8a39f503>29세</span><span class="info__item" data-v-8a39f503>176cm</span><span class="info__item" data-v-8a39f503>72kg</span></p><p class="info2" data-v-8a39f503><span class="label" data-v-8a39f503>생년월일</span><span class="text" data-v-8a39f503>1994.11.04</span></p><p class="info2" data-v-8a39f503><span class="label" data-v-8a39f503>이메일</span><span class="text" data-v-8a39f503>zoonyfil@nate.com</span></p><p class="info2" data-v-8a39f503><span class="label" data-v-8a39f503>연락처</span><span class="text" data-v-8a39f503>010-6714-0130</span></p></div><div class="right" data-v-8a39f503><div class="info3" data-v-8a39f503><span class="label" data-v-8a39f503>특기</span><p class="info" data-v-8a39f503><span class="info__item" data-v-8a39f503>액션</span><span class="info__item" data-v-8a39f503>사투리연기</span><span class="info__item" data-v-8a39f503>운전</span></p></div><div class="info3" data-v-8a39f503><span class="label" data-v-8a39f503>SNS</span><p class="sns" data-v-8a39f503><img class="icon" src="'+te+'" data-v-8a39f503><span class="text" data-v-8a39f503>zoonyfil</span></p><p class="sns" data-v-8a39f503><img src="'+ie+'" data-v-8a39f503><span class="text" data-v-8a39f503>http://www.youtube.com/zoonyfil</span></p></div></div></div></div>',1),pe={class:"panel"},me=h(()=>e("div",{class:"panel__title"},[e("span",{class:"title"}," 영상 프로필 ")],-1)),ue={class:"panel__content"},fe={class:"panel"},ve=h(()=>e("div",{class:"panel__title"},[e("span",{class:"title"}," 이미지 프로필 ")],-1)),ge={class:"panel__content"},he={class:"panel"},be=h(()=>e("div",{class:"panel__title"},[e("span",{class:"title"}," 작품경력 ")],-1)),ye={class:"panel__content"},Se={class:"title"},Pe={class:"year"},ke={class:"kind"},we={class:"movie-profile-edit__thumb"},xe=["src"],De={key:0,class:"footer"},je={class:"footer__wrapper"},Ie={class:"right"};function Le(l,o,n,c,t,d){const p=q,L=H,S=b("swiper-slide"),P=b("swiper"),A=J,C=K,M=Q,R=W,v=X,m=Y,U=Z,z=$,k=b("RouterLink");return r(),f("div",le,[e("div",ne,[e("div",ce,[re,e("p",_e,[s(p,{type:"primary",size:"large"},{default:a(()=>[u("제안하기")]),_:1}),s(p,{size:"large",style:{"margin-left":"10px"}},{default:a(()=>[u("스크랩")]),_:1})])]),de]),e("div",pe,[me,e("div",ue,[s(P,{modules:c.modules,"slides-per-view":d.isUpdate?5:4,"space-between":20,navigation:""},{default:a(()=>[(r(!0),f(w,null,x(l.$store.state.profile.movieList,(i,g)=>(r(),y(S,{key:g},{default:a(()=>[s(L,D(i,{index:g,update:n.status==="update",onRemove:d.handleRemoveThumbCard}),null,16,["index","update","onRemove"])]),_:2},1024))),128))]),_:1},8,["modules","slides-per-view"])])]),e("div",fe,[ve,e("div",ge,[s(P,{modules:c.modules,"slides-per-view":"auto","space-between":10,navigation:"",class:"image-profile"},{default:a(()=>[(r(!0),f(w,null,x(t.imageProfileList,(i,g)=>(r(),y(S,{key:g},{default:a(()=>[s(A,D(i,{update:n.status==="update"}),null,16,["update"])]),_:2},1024))),128))]),_:1},8,["modules"])])]),e("div",he,[be,e("div",ye,[s(R,{"item-layout":"horizontal","data-source":t.filmoList},{renderItem:a(({item:i})=>[s(M,{class:"profile-filemo"},{default:a(()=>[s(C,{description:i.role},{title:a(()=>[e("span",Se,_(i.title),1),e("span",Pe," ("+_(i.year)+")",1),e("span",ke,_(i.kind),1)]),_:2},1032,["description"])]),_:2},1024)]),_:1},8,["data-source"])])]),s(z,{visible:t.isAddMovieProfileVisible,"onUpdate:visible":o[4]||(o[4]=i=>t.isAddMovieProfileVisible=i),title:"영상 프로필 추가",onOk:d.handleConfirmAddMovieProfile,cancelText:"취소",okText:"확인"},{default:a(()=>[s(U,{class:"movie-profile-edit","label-col":{style:{width:"100px"}},"wapper-col":{span:6},autocomplete:"off"},{default:a(()=>[s(m,{label:"영상 URL",rules:[{required:!0,message:"연기 영상은 필수 입력값 입니다."}]},{default:a(()=>[s(v,{value:t.movieProfileDetail.url,"onUpdate:value":o[0]||(o[0]=i=>t.movieProfileDetail.url=i),placeholder:"연기 영상 링크",onInput:d.handleInputMovieProfileDetailURL},null,8,["value","onInput"])]),_:1},8,["rules"]),t.movieProfileDetail.imgSrc?(r(),y(m,{key:0,label:"썸네일 이미지"},{default:a(()=>[e("div",we,[e("img",{class:"image",src:t.movieProfileDetail.imgSrc},null,8,xe)])]),_:1})):j("",!0),s(m,{label:"작품명"},{default:a(()=>[s(v,{value:t.movieProfileDetail.title,"onUpdate:value":o[1]||(o[1]=i=>t.movieProfileDetail.title=i),placeholder:"작품명"},null,8,["value"])]),_:1}),s(m,{label:"역할"},{default:a(()=>[s(v,{value:t.movieProfileDetail.role,"onUpdate:value":o[2]||(o[2]=i=>t.movieProfileDetail.role=i),placeholder:"역할"},null,8,["value"])]),_:1}),s(m,{label:"연도","wrapper-col":{span:8}},{default:a(()=>[s(v,{value:t.movieProfileDetail.year,"onUpdate:value":o[3]||(o[3]=i=>t.movieProfileDetail.year=i),placeholder:"작품 연도"},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["visible","onOk"]),d.isUpdate?(r(),f("div",De,[e("div",je,[e("div",Ie,[s(k,{to:"/"},{default:a(()=>[s(p,{size:"large"},{default:a(()=>[u(" 취소 ")]),_:1})]),_:1}),s(p,{size:"large",style:{"margin-left":"12px"},onClick:c.success},{default:a(()=>[u(" 임시저장 ")]),_:1},8,["onClick"]),s(k,{to:"/"},{default:a(()=>[s(p,{type:"primary",size:"large",style:{"margin-left":"12px"}},{default:a(()=>[u(" 등록하기 ")]),_:1})]),_:1})])])])):j("",!0)])}const He=I(oe,[["render",Le],["__scopeId","data-v-8a39f503"]]);const Ae={name:"actor-item",props:["index","name","gender","age","height","weight","imgSrc"],data(){return{GENDER_MAP:{male:"남자",female:"여자"}}}},Ce={class:"actor-item"},Me={class:"actor-item__thumb"},Re=["src"],Ue={class:"actor-item__content"},ze={class:"name"},Ne={class:"info"},Ve={class:"info__item"},Te={class:"info__item"},Be={class:"info__item"},Ee={class:"info__item"};function Fe(l,o,n,c,t,d){return r(),f("div",Ce,[e("div",Me,[e("img",{class:"thumb",src:n.imgSrc},null,8,Re)]),e("div",Ue,[e("p",ze,_(n.name),1),e("p",Ne,[e("span",Ve,_(t.GENDER_MAP[n.gender]),1),e("span",Te,_(n.age)+"세 ",1),e("span",Be,_(n.height)+"cm ",1),e("span",Ee,_(n.weight)+"kg ",1)])])])}const Je=I(Ae,[["render",Fe],["__scopeId","data-v-b2e801c3"]]);export{Je as _,He as a};
