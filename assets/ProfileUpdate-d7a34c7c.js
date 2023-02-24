import{_ as U,a6 as V,a7 as B,ac as b,al as R,ag as T,r as d,o as h,c as y,e as o,d as t,w as i,am as N,O as z,F,h as I,i as v,E as L,j as _,g as O,I as j,an as E,B as M,k as q,ao as G}from"./index-2dfea4ba.js";const H={name:"production-profile-update",components:{Swiper:V,SwiperSlide:B,ThumbCard:b},data(){return{isAddPhilmographyVisible:!1,introduction:"",philmography:[{title:"좋아서만든영화",url:"assets/movie/movie1.png",imgSrc:"/assets/production/detail/movie1.jpg",year:"2009"}],philmographyDetail:{title:"",year:"",imgSrc:"",posters:[]}}},methods:{handleClickAddPhilmography(){this.isAddPhilmographyVisible=!0},handleChangePoster(s){const{file:e}=s,{status:p,response:m}=e;if(p==="done"){const{message:n}=m;this.philmographyDetail.imgSrc=n}const{posters:l}=this.philmographyDetail;p==="done"&&l.length>1&&l.shift()},handleConfirmAddPhilmography(){const{title:s,imgSrc:e,year:p}=this.philmographyDetail;!s||!e||!p||(this.philmography=[...this.philmography,{...this.philmographyDetail}],this.isAddPhilmographyVisible=!1)},handleSubmit(){R({introduction:this.introduction,philmography:this.philmography})}},mounted(){const{philmography:s,introduction:e}=T();this.philmography=s,this.introduction=e}},J={class:"actor-portfolio container"},K={class:"panel"},Q=o("div",{class:"panel__title"},[o("span",{class:"title"}," 제작사 소개 ")],-1),W={class:"panel__content"},X={class:"panel"},Y={class:"panel__title"},Z=o("span",{class:"title philmography-title"}," 필모그라피 ",-1),$={class:"btn btn--right btn--fill"},ee={class:"panel__content"},te={class:"movie-profile-edit__thumb"},oe=["src"],ie={class:"footer"},le={class:"footer__wrapper"},ae={class:"right"};function se(s,e,p,m,l,n){const k=N,C=b,P=d("swiper-slide"),w=d("swiper"),u=j,r=E,D=d("a-icon"),c=M,x=q,S=G,A=z,g=d("RouterLink");return h(),y("div",J,[o("div",K,[Q,o("div",W,[t(k,{value:this.introduction,"onUpdate:value":e[0]||(e[0]=a=>this.introduction=a),rows:4,placeholder:"제작사 소개를 입력해주세요"},null,8,["value"])])]),o("div",X,[o("div",Y,[Z,o("span",$,[o("span",{class:"text btn-add",onClick:e[1]||(e[1]=(...a)=>n.handleClickAddPhilmography&&n.handleClickAddPhilmography(...a))}," 추가하기 ")])]),o("div",ee,[t(w,{modules:s.modules,"slides-per-view":5,"space-between":20,navigation:""},{default:i(()=>[(h(!0),y(F,null,I(this.philmography,(a,f)=>(h(),v(P,{key:f},{default:i(()=>[t(C,L(a,{index:f,update:s.status==="update",onRemove:s.handleRemovePhilmography}),null,16,["index","update","onRemove"])]),_:2},1024))),128))]),_:1},8,["modules"])])]),t(A,{visible:l.isAddPhilmographyVisible,"onUpdate:visible":e[5]||(e[5]=a=>l.isAddPhilmographyVisible=a),title:"영상 프로필 추가",onOk:n.handleConfirmAddPhilmography,cancelText:"취소",okText:"확인"},{default:i(()=>[t(S,{class:"movie-profile-edit","label-col":{style:{width:"100px"}},"wapper-col":{span:6},autocomplete:"off"},{default:i(()=>[t(r,{label:"작품명"},{default:i(()=>[t(u,{value:l.philmographyDetail.title,"onUpdate:value":e[2]||(e[2]=a=>l.philmographyDetail.title=a),placeholder:"작품명"},null,8,["value"])]),_:1}),t(r,{label:"연도","wrapper-col":{span:8}},{default:i(()=>[t(u,{value:l.philmographyDetail.year,"onUpdate:value":e[3]||(e[3]=a=>l.philmographyDetail.year=a),placeholder:"작품 연도"},null,8,["value"])]),_:1}),t(r,{label:"포스터"},{default:i(()=>[t(x,{name:"file","file-list":l.philmographyDetail.posters,"onUpdate:file-list":e[4]||(e[4]=a=>l.philmographyDetail.posters=a),action:"https://9shbrlwx14.execute-api.ap-northeast-1.amazonaws.com/default/uploadImage",onChange:n.handleChangePoster},{default:i(()=>[t(c,null,{default:i(()=>[t(D,{type:"upload"}),_(" Click to Upload ")]),_:1})]),_:1},8,["file-list","onChange"])]),_:1}),l.philmographyDetail.imgSrc?(h(),v(r,{key:0},{default:i(()=>[o("div",te,[o("img",{class:"image",src:l.philmographyDetail.imgSrc},null,8,oe)])]),_:1})):O("",!0)]),_:1})]),_:1},8,["visible","onOk"]),o("div",ie,[o("div",le,[o("div",ae,[t(g,{to:"/production"},{default:i(()=>[t(c,{size:"large"},{default:i(()=>[_(" 취소 ")]),_:1})]),_:1}),t(g,{to:"/production"},{default:i(()=>[t(c,{type:"primary",size:"large",style:{"margin-left":"12px"},onClick:n.handleSubmit},{default:i(()=>[_(" 등록하기 ")]),_:1},8,["onClick"])]),_:1})])])])])}const pe=U(H,[["render",se]]);export{pe as default};
