import{_ as U,G as V,H as z,S as M,r as m,o,c as r,b as d,F as h,f as v,a as l,w as s,B as N,I as T,L as E,a7 as q,t as f,h as u,g,x as J,p as K,q as Q,N as j,C as W,l as X,m as Y,n as Z,O as $,P as ee}from"./index-c9698b35.js";import{_ as b,a as te}from"./ActorItem-ce9af842.js";/* empty css              *//* empty css              *//* empty css              */import{_ as R}from"./AuditionItem-c6bba5f4.js";import{R as ne}from"./ReloadOutlined-e3e14d38.js";import"./context-ad98b43d.js";const le={name:"production-find-actor",setup(){return{ageRange:V([15,100])}},data(){return{selectedProfile:{},isProfileDetailVisible:!1,visible:[],sort:"1",selectedPrefer:[],filterList:[{text:"성별",id:"gender"},{text:"나이",id:"age"},{text:"신장",id:"height"},{text:"특기",id:"specialty"}],MAP:[{id:"A",value:"영어"},{id:"B",value:"중국어"},{id:"C",value:"일본어"},{id:"D",value:"프랑스어"},{id:"E",value:"독일어"},{id:"F",value:"경상도 사투리"},{id:"G",value:"전라도 사투리"},{id:"G1",value:"충청도 사투리"},{id:"H",value:"평양 사투리"},{id:"I",value:"강원도 사투리"},{id:"J",value:"제주도 사투리"},{id:"K",value:"스포츠댄스"},{id:"L",value:"발레"},{id:"M",value:"현대무용"},{id:"N",value:"한국무용"},{id:"O",value:"방송댄스"},{id:"P",value:"액션"},{id:"Q",value:"운전"}],selectedCurationList:[],selectedAgeRange:null,selectedHeightRange:null,selectedGender:null}},methods:{handleClickProfileDetail(e){console.log(e),this.selectedProfile=e,this.isProfileDetailVisible=!0},handleButtonClick(){},handleMenuClick(){},handleToggleFavorite(e){this.$store.state.auditionList[e].isScrap=!this.$store.state.auditionList[e].isScrap},handleClickSearchClear(){this.selectedAgeRange=null,this.selectedGender=null,this.selectedHeightRange=null,this.selectedPrefer=[]},handleClickOverlay(e){},handleAgeRangeChange(e){this.selectedAgeRange=e},handleHeightRangeChange(e){this.selectedHeightRange=e},handleClickGenderChange(e){this.selectedGender=e}},computed:{computedCurationList(){const e=[];return this.selectedAgeRange&&e.push("age"),this.selectedGender&&e.push("gender"),this.selectedHeightRange&&e.push("height"),this.selectedPrefer.length>0&&e.push("specialty"),e},filteredActorList(){let e=this.$store.state.production.findActorList;return this.selectedGender&&(e=e.filter(t=>t.gender===this.selectedGender)),this.selectedAgeRange&&(e=e.filter(t=>parseInt(t.age)>=this.selectedAgeRange[0]&&parseInt(t.age)<=this.selectedAgeRange[1])),this.selectedHeightRange&&(e=e.filter(t=>parseInt(t.height)>=this.selectedHeightRange[0]&&parseInt(t.height)<=this.selectedHeightRange[1])),e}},components:{DownOutlined:z,SearchOutlined:M,AuditionItem:R,ReloadOutlined:ne,AuditionItem:R,ActorItem:b}},ie=e=>(K("data-v-366c4d22"),e=e(),Q(),e),se={class:"production-find-actor"},ae={class:"production-find-actor__header"},oe={class:"search-group"},de=["onClick"],ce={class:"overlay__title"},re={class:"overlay__content"},ue={class:"btn"},_e=ie(()=>d("div",{class:"production-find-actor__sub-header"},null,-1)),he={class:"production-find-actor__content container"},ge={class:"header"},pe={class:"applicant"},me=["onClick"];function ve(e,t,fe,C,a,c){const A=m("DownOutlined"),p=N,k=j,P=W,G=X,x=Y,I=Z,O=$,w=m("ReloadOutlined"),L=m("SearchOutlined"),S=T,y=ee,D=E,H=b,B=te,F=q;return o(),r("div",se,[d("div",ae,[d("ul",oe,[(o(!0),r(h,null,v(a.filterList,(i,_)=>(o(),r("li",{class:"search-group__item",key:i.id},[l(O,{shape:"round",visible:a.visible[_],"onUpdate:visible":n=>a.visible[_]=n,type:c.computedCurationList.includes(i.id)?"primary":"default",size:"large",open:!0,placement:"bottom",trigger:["click"],arrow:"",onClick:n=>e.handleClickGenreGroup(i)},{icon:s(()=>[l(A)]),overlay:s(()=>[d("div",{class:"overlay",onClick:n=>c.handleClickOverlay(_)},[d("p",ce,f(i.text+" 선택"),1),d("div",re,[i.id==="gender"?(o(),r(h,{key:0},[l(p,{size:"large",class:"btn",type:a.selectedGender==="male"?"primary":"default",onClick:t[0]||(t[0]=n=>c.handleClickGenderChange("male"))},{default:s(()=>[u("남자")]),_:1},8,["type"]),l(p,{size:"large",class:"btn",type:a.selectedGender==="female"?"primary":"default",onClick:t[1]||(t[1]=n=>c.handleClickGenderChange("female"))},{default:s(()=>[u("여자")]),_:1},8,["type"])],64)):i.id==="age"?(o(),g(k,{key:1,value:C.ageRange,"onUpdate:value":t[2]||(t[2]=n=>C.ageRange=n),range:"",min:15,max:100,onChange:c.handleAgeRangeChange},null,8,["value","onChange"])):i.id==="height"?(o(),g(k,{key:2,value:e.heightRange,"onUpdate:value":t[3]||(t[3]=n=>e.heightRange=n),range:"",min:130,max:200,onChange:c.handleHeightRangeChange},null,8,["value","onChange"])):(o(),g(I,{key:3,value:a.selectedPrefer,"onUpdate:value":t[4]||(t[4]=n=>a.selectedPrefer=n),style:{width:"100%"},onChange:e.handleCheckboxChange},{default:s(()=>[l(x,{gutter:[0,20]},{default:s(()=>[(o(!0),r(h,null,v(a.MAP,n=>(o(),g(G,{key:n.id,span:10},{default:s(()=>[l(P,{value:n.id},{default:s(()=>[u(f(n.value),1)]),_:2},1032,["value"])]),_:2},1024))),128))]),_:1})]),_:1},8,["value","onChange"]))])],8,de)]),default:s(()=>[u(f(i.text)+" ",1)]),_:2},1032,["visible","onUpdate:visible","type","onClick"])]))),128))]),d("div",ue,[l(p,{type:"dashed",onClick:c.handleClickSearchClear},{default:s(()=>[l(w,{class:"icon"}),u(" 검색 필터 초기화 ")]),_:1},8,["onClick"])]),l(S,{class:"item",size:"large",style:{width:"240px","margin-left":"auto"},placeholder:"검색"},{addonBefore:s(()=>[l(L)]),_:1})]),_e,d("div",he,[d("div",ge,[l(D,{value:a.sort,"onUpdate:value":t[5]||(t[5]=i=>a.sort=i),class:"sort",style:{width:"140px"},onFocus:e.focus,size:"large",onChange:e.handleChange},{default:s(()=>[l(y,{value:"1"},{default:s(()=>[u("인기순")]),_:1}),l(y,{value:"2"},{default:s(()=>[u("최신순")]),_:1})]),_:1},8,["value","onFocus","onChange"])]),d("ul",pe,[(o(!0),r(h,null,v(c.filteredActorList,(i,_)=>(o(),r("li",{class:"applicant__item",key:_,onClick:n=>c.handleClickProfileDetail(i)},[l(H,J(i,{index:_}),null,16,["index"])],8,me))),128))])]),l(F,{visible:a.isProfileDetailVisible,"onUpdate:visible":t[6]||(t[6]=i=>a.isProfileDetailVisible=i),title:"프로필 상세",width:"1200px",cancelText:"취소",okText:"확인"},{default:s(()=>[d("div",null,[l(B)])]),_:1},8,["visible"])])}const xe=U(le,[["render",ve],["__scopeId","data-v-366c4d22"]]);export{xe as default};
