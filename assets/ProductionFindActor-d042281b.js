import{_ as V,V as U,Y as z,Z as M,W as N,r as m,o,c as r,e as d,F as p,h as v,d as l,w as s,B as T,I as E,a0 as j,S as q,t as f,j as u,i as h,G as J,v as K,x as Q,a2 as W,C as Y,p as Z,q as X,u as $,a3 as ee,a4 as te}from"./index-46ced1bb.js";import{_ as R,a as ne}from"./ActorItem-3f688659.js";/* empty css              *//* empty css              *//* empty css              */import{A}from"./AuditionItem-0e4778e3.js";import{R as le}from"./ReloadOutlined-94e99364.js";import"./context-ff23fb79.js";/* empty css              *//* empty css              */const ie={name:"production-find-actor",setup(){return{ageRange:U([15,100])}},data(){return{selectedProfile:{},isProfileDetailVisible:!1,visible:[],sort:"1",selectedPrefer:[],filterList:[{text:"성별",id:"gender"},{text:"나이",id:"age"},{text:"신장",id:"height"},{text:"특기",id:"specialty"}],MAP:[{id:"A",value:"영어"},{id:"B",value:"중국어"},{id:"C",value:"일본어"},{id:"D",value:"프랑스어"},{id:"E",value:"독일어"},{id:"F",value:"경상도 사투리"},{id:"G",value:"전라도 사투리"},{id:"G1",value:"충청도 사투리"},{id:"H",value:"평양 사투리"},{id:"I",value:"강원도 사투리"},{id:"J",value:"제주도 사투리"},{id:"K",value:"스포츠댄스"},{id:"L",value:"발레"},{id:"M",value:"현대무용"},{id:"N",value:"한국무용"},{id:"O",value:"방송댄스"},{id:"P",value:"액션"},{id:"Q",value:"운전"}],selectedCurationList:[],selectedAgeRange:null,selectedHeightRange:null,selectedGender:null,openAuditions:[]}},methods:{handleClickProfileDetail(e){console.log(e),this.selectedProfile=e,this.isProfileDetailVisible=!0},handleButtonClick(){},handleMenuClick(){},handleToggleFavorite(e){this.$store.state.auditionList[e].isScrap=!this.$store.state.auditionList[e].isScrap},handleClickSearchClear(){this.selectedAgeRange=null,this.selectedGender=null,this.selectedHeightRange=null,this.selectedPrefer=[]},handleClickOverlay(e){},handleAgeRangeChange(e){this.selectedAgeRange=e},handleHeightRangeChange(e){this.selectedHeightRange=e},handleClickGenderChange(e){this.selectedGender=e}},computed:{computedCurationList(){const e=[];return this.selectedAgeRange&&e.push("age"),this.selectedGender&&e.push("gender"),this.selectedHeightRange&&e.push("height"),this.selectedPrefer.length>0&&e.push("specialty"),e},filteredActorList(){let e=this.$store.state.production.findActorList;return this.selectedGender&&(e=e.filter(t=>t.gender===this.selectedGender)),this.selectedAgeRange&&(e=e.filter(t=>parseInt(t.age)>=this.selectedAgeRange[0]&&parseInt(t.age)<=this.selectedAgeRange[1])),this.selectedHeightRange&&(e=e.filter(t=>parseInt(t.height)>=this.selectedHeightRange[0]&&parseInt(t.height)<=this.selectedHeightRange[1])),e}},components:{DownOutlined:z,SearchOutlined:M,AuditionItem:A,ReloadOutlined:le,AuditionItem:A,ActorItem:R},created(){N({productionName:"(주)엑셀시오르콘텐츠랩"}).then(e=>{this.openAuditions=e.filter(({isClosed:t})=>!t)})}},se=e=>(K("data-v-c76ac8bf"),e=e(),Q(),e),ae={class:"production-find-actor"},oe={class:"production-find-actor__header"},de={class:"search-group"},ce=["onClick"],re={class:"overlay__title"},ue={class:"overlay__content"},_e={class:"btn"},pe=se(()=>d("div",{class:"production-find-actor__sub-header"},null,-1)),he={class:"production-find-actor__content container"},ge={class:"header"},me={class:"applicant"},ve=["onClick"];function fe(e,t,Ce,C,a,c){const b=m("DownOutlined"),g=T,k=W,P=Y,G=Z,x=X,I=$,w=ee,O=m("ReloadOutlined"),S=m("SearchOutlined"),D=E,y=te,L=j,H=R,B=ne,F=q;return o(),r("div",ae,[d("div",oe,[d("ul",de,[(o(!0),r(p,null,v(a.filterList,(i,_)=>(o(),r("li",{class:"search-group__item",key:i.id},[l(w,{shape:"round",visible:a.visible[_],"onUpdate:visible":n=>a.visible[_]=n,type:c.computedCurationList.includes(i.id)?"primary":"default",size:"large",open:!0,placement:"bottom",trigger:["click"],arrow:"",onClick:n=>e.handleClickGenreGroup(i)},{icon:s(()=>[l(b)]),overlay:s(()=>[d("div",{class:"overlay",onClick:n=>c.handleClickOverlay(_)},[d("p",re,f(i.text+" 선택"),1),d("div",ue,[i.id==="gender"?(o(),r(p,{key:0},[l(g,{size:"large",class:"btn",type:a.selectedGender==="male"?"primary":"default",onClick:t[0]||(t[0]=n=>c.handleClickGenderChange("male"))},{default:s(()=>[u("남자")]),_:1},8,["type"]),l(g,{size:"large",class:"btn",type:a.selectedGender==="female"?"primary":"default",onClick:t[1]||(t[1]=n=>c.handleClickGenderChange("female"))},{default:s(()=>[u("여자")]),_:1},8,["type"])],64)):i.id==="age"?(o(),h(k,{key:1,value:C.ageRange,"onUpdate:value":t[2]||(t[2]=n=>C.ageRange=n),range:"",min:15,max:100,onChange:c.handleAgeRangeChange},null,8,["value","onChange"])):i.id==="height"?(o(),h(k,{key:2,value:e.heightRange,"onUpdate:value":t[3]||(t[3]=n=>e.heightRange=n),range:"",min:130,max:200,onChange:c.handleHeightRangeChange},null,8,["value","onChange"])):(o(),h(I,{key:3,value:a.selectedPrefer,"onUpdate:value":t[4]||(t[4]=n=>a.selectedPrefer=n),style:{width:"100%"},onChange:e.handleCheckboxChange},{default:s(()=>[l(x,{gutter:[0,20]},{default:s(()=>[(o(!0),r(p,null,v(a.MAP,n=>(o(),h(G,{key:n.id,span:10},{default:s(()=>[l(P,{value:n.id},{default:s(()=>[u(f(n.value),1)]),_:2},1032,["value"])]),_:2},1024))),128))]),_:1})]),_:1},8,["value","onChange"]))])],8,ce)]),default:s(()=>[u(f(i.text)+" ",1)]),_:2},1032,["visible","onUpdate:visible","type","onClick"])]))),128))]),d("div",_e,[l(g,{type:"dashed",onClick:c.handleClickSearchClear},{default:s(()=>[l(O,{class:"icon"}),u(" 검색 필터 초기화 ")]),_:1},8,["onClick"])]),l(D,{class:"item",size:"large",style:{width:"240px","margin-left":"auto"},placeholder:"검색"},{addonBefore:s(()=>[l(S)]),_:1})]),pe,d("div",he,[d("div",ge,[l(L,{value:a.sort,"onUpdate:value":t[5]||(t[5]=i=>a.sort=i),class:"sort",style:{width:"140px"},onFocus:e.focus,size:"large",onChange:e.handleChange},{default:s(()=>[l(y,{value:"1"},{default:s(()=>[u("인기순")]),_:1}),l(y,{value:"2"},{default:s(()=>[u("최신순")]),_:1})]),_:1},8,["value","onFocus","onChange"])]),d("ul",me,[(o(!0),r(p,null,v(c.filteredActorList,(i,_)=>(o(),r("li",{class:"applicant__item",key:_,onClick:n=>c.handleClickProfileDetail(i)},[l(H,J(i,{index:_}),null,16,["index"])],8,ve))),128))])]),l(F,{visible:a.isProfileDetailVisible,"onUpdate:visible":t[6]||(t[6]=i=>a.isProfileDetailVisible=i),title:"프로필 상세",width:"1200px",cancelText:"취소",okText:"확인"},{default:s(()=>[d("div",null,[l(B,{openAuditions:a.openAuditions},null,8,["openAuditions"])])]),_:1},8,["visible"])])}const Oe=V(ie,[["render",fe],["__scopeId","data-v-c76ac8bf"]]);export{Oe as default};
