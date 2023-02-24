import{_ as V,Q as U,V as z,W as M,r as m,o,c,e as d,F as h,h as v,d as l,w as s,B as N,I as T,Y as E,O as Q,t as f,j as u,i as p,E as j,v as q,x as J,$ as K,C as W,p as Y,q as X,u as Z,a0 as $,a1 as ee}from"./index-d5d80172.js";import{_ as b,a as te}from"./ActorItem-d76a2a6a.js";/* empty css              *//* empty css              *//* empty css              */import{A as R}from"./AuditionItem-3c678551.js";import{R as ne}from"./ReloadOutlined-e5f05bec.js";import"./context-4ca44b53.js";/* empty css              *//* empty css              */const le={name:"production-find-actor",setup(){return{ageRange:U([15,100])}},data(){return{selectedProfile:{},isProfileDetailVisible:!1,visible:[],sort:"1",selectedPrefer:[],filterList:[{text:"성별",id:"gender"},{text:"나이",id:"age"},{text:"신장",id:"height"},{text:"특기",id:"specialty"}],MAP:[{id:"A",value:"영어"},{id:"B",value:"중국어"},{id:"C",value:"일본어"},{id:"D",value:"프랑스어"},{id:"E",value:"독일어"},{id:"F",value:"경상도 사투리"},{id:"G",value:"전라도 사투리"},{id:"G1",value:"충청도 사투리"},{id:"H",value:"평양 사투리"},{id:"I",value:"강원도 사투리"},{id:"J",value:"제주도 사투리"},{id:"K",value:"스포츠댄스"},{id:"L",value:"발레"},{id:"M",value:"현대무용"},{id:"N",value:"한국무용"},{id:"O",value:"방송댄스"},{id:"P",value:"액션"},{id:"Q",value:"운전"}],selectedCurationList:[],selectedAgeRange:null,selectedHeightRange:null,selectedGender:null}},methods:{handleClickProfileDetail(e){console.log(e),this.selectedProfile=e,this.isProfileDetailVisible=!0},handleButtonClick(){},handleMenuClick(){},handleToggleFavorite(e){this.$store.state.auditionList[e].isScrap=!this.$store.state.auditionList[e].isScrap},handleClickSearchClear(){this.selectedAgeRange=null,this.selectedGender=null,this.selectedHeightRange=null,this.selectedPrefer=[]},handleClickOverlay(e){},handleAgeRangeChange(e){this.selectedAgeRange=e},handleHeightRangeChange(e){this.selectedHeightRange=e},handleClickGenderChange(e){this.selectedGender=e}},computed:{computedCurationList(){const e=[];return this.selectedAgeRange&&e.push("age"),this.selectedGender&&e.push("gender"),this.selectedHeightRange&&e.push("height"),this.selectedPrefer.length>0&&e.push("specialty"),e},filteredActorList(){let e=this.$store.state.production.findActorList;return this.selectedGender&&(e=e.filter(t=>t.gender===this.selectedGender)),this.selectedAgeRange&&(e=e.filter(t=>parseInt(t.age)>=this.selectedAgeRange[0]&&parseInt(t.age)<=this.selectedAgeRange[1])),this.selectedHeightRange&&(e=e.filter(t=>parseInt(t.height)>=this.selectedHeightRange[0]&&parseInt(t.height)<=this.selectedHeightRange[1])),e}},components:{DownOutlined:z,SearchOutlined:M,AuditionItem:R,ReloadOutlined:ne,AuditionItem:R,ActorItem:b}},ie=e=>(q("data-v-366c4d22"),e=e(),J(),e),se={class:"production-find-actor"},ae={class:"production-find-actor__header"},oe={class:"search-group"},de=["onClick"],re={class:"overlay__title"},ce={class:"overlay__content"},ue={class:"btn"},_e=ie(()=>d("div",{class:"production-find-actor__sub-header"},null,-1)),he={class:"production-find-actor__content container"},pe={class:"header"},ge={class:"applicant"},me=["onClick"];function ve(e,t,fe,C,a,r){const A=m("DownOutlined"),g=N,k=K,P=W,x=Y,G=X,I=Z,O=$,w=m("ReloadOutlined"),D=m("SearchOutlined"),L=T,y=ee,S=E,H=b,B=te,F=Q;return o(),c("div",se,[d("div",ae,[d("ul",oe,[(o(!0),c(h,null,v(a.filterList,(i,_)=>(o(),c("li",{class:"search-group__item",key:i.id},[l(O,{shape:"round",visible:a.visible[_],"onUpdate:visible":n=>a.visible[_]=n,type:r.computedCurationList.includes(i.id)?"primary":"default",size:"large",open:!0,placement:"bottom",trigger:["click"],arrow:"",onClick:n=>e.handleClickGenreGroup(i)},{icon:s(()=>[l(A)]),overlay:s(()=>[d("div",{class:"overlay",onClick:n=>r.handleClickOverlay(_)},[d("p",re,f(i.text+" 선택"),1),d("div",ce,[i.id==="gender"?(o(),c(h,{key:0},[l(g,{size:"large",class:"btn",type:a.selectedGender==="male"?"primary":"default",onClick:t[0]||(t[0]=n=>r.handleClickGenderChange("male"))},{default:s(()=>[u("남자")]),_:1},8,["type"]),l(g,{size:"large",class:"btn",type:a.selectedGender==="female"?"primary":"default",onClick:t[1]||(t[1]=n=>r.handleClickGenderChange("female"))},{default:s(()=>[u("여자")]),_:1},8,["type"])],64)):i.id==="age"?(o(),p(k,{key:1,value:C.ageRange,"onUpdate:value":t[2]||(t[2]=n=>C.ageRange=n),range:"",min:15,max:100,onChange:r.handleAgeRangeChange},null,8,["value","onChange"])):i.id==="height"?(o(),p(k,{key:2,value:e.heightRange,"onUpdate:value":t[3]||(t[3]=n=>e.heightRange=n),range:"",min:130,max:200,onChange:r.handleHeightRangeChange},null,8,["value","onChange"])):(o(),p(I,{key:3,value:a.selectedPrefer,"onUpdate:value":t[4]||(t[4]=n=>a.selectedPrefer=n),style:{width:"100%"},onChange:e.handleCheckboxChange},{default:s(()=>[l(G,{gutter:[0,20]},{default:s(()=>[(o(!0),c(h,null,v(a.MAP,n=>(o(),p(x,{key:n.id,span:10},{default:s(()=>[l(P,{value:n.id},{default:s(()=>[u(f(n.value),1)]),_:2},1032,["value"])]),_:2},1024))),128))]),_:1})]),_:1},8,["value","onChange"]))])],8,de)]),default:s(()=>[u(f(i.text)+" ",1)]),_:2},1032,["visible","onUpdate:visible","type","onClick"])]))),128))]),d("div",ue,[l(g,{type:"dashed",onClick:r.handleClickSearchClear},{default:s(()=>[l(w,{class:"icon"}),u(" 검색 필터 초기화 ")]),_:1},8,["onClick"])]),l(L,{class:"item",size:"large",style:{width:"240px","margin-left":"auto"},placeholder:"검색"},{addonBefore:s(()=>[l(D)]),_:1})]),_e,d("div",he,[d("div",pe,[l(S,{value:a.sort,"onUpdate:value":t[5]||(t[5]=i=>a.sort=i),class:"sort",style:{width:"140px"},onFocus:e.focus,size:"large",onChange:e.handleChange},{default:s(()=>[l(y,{value:"1"},{default:s(()=>[u("인기순")]),_:1}),l(y,{value:"2"},{default:s(()=>[u("최신순")]),_:1})]),_:1},8,["value","onFocus","onChange"])]),d("ul",ge,[(o(!0),c(h,null,v(r.filteredActorList,(i,_)=>(o(),c("li",{class:"applicant__item",key:_,onClick:n=>r.handleClickProfileDetail(i)},[l(H,j(i,{index:_}),null,16,["index"])],8,me))),128))])]),l(F,{visible:a.isProfileDetailVisible,"onUpdate:visible":t[6]||(t[6]=i=>a.isProfileDetailVisible=i),title:"프로필 상세",width:"1200px",cancelText:"취소",okText:"확인"},{default:s(()=>[d("div",null,[l(B)])]),_:1},8,["visible"])])}const Oe=V(le,[["render",ve],["__scopeId","data-v-366c4d22"]]);export{Oe as default};
