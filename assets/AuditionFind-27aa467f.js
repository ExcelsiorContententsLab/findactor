import{_ as S}from"./AuditionItem-3e76d30b.js";import{_ as D,O as T,P as N,Q as A,S as V,U as j,r as L,o as r,c as h,e as g,d as l,w as s,V as M,F as C,h as y,g as E,J,B as Q,I as q,W,j as _,t as k,i as G,E as X,X as Y,Y as Z,C as $,p as ee,q as te,u as ne,Z as ie,$ as le}from"./index-35247f7b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{R as se}from"./ReloadOutlined-41ba2431.js";/* empty css              */function b(e,t){return Math.min(e[1],t[1])>=Math.max(e[0],t[0])}const ae={name:"audition-find",setup(){return{ageRange:T([15,100])}},data(){return{visible:[],sort:"1",kind:"1",heightRange:[130,200],SKILLS:[{id:"A",value:"영어"},{id:"B",value:"중국어"},{id:"C",value:"일본어"},{id:"D",value:"프랑스어"},{id:"E",value:"독일어"},{id:"F",value:"경상도 사투리"},{id:"G",value:"전라도 사투리"},{id:"G1",value:"충청도 사투리"},{id:"H",value:"평양 사투리"},{id:"I",value:"강원도 사투리"},{id:"J",value:"제주도 사투리"},{id:"K",value:"스포츠댄스"},{id:"L",value:"발레"},{id:"M",value:"현대무용"},{id:"N",value:"한국무용"},{id:"O",value:"방송댄스"},{id:"P",value:"액션"},{id:"Q",value:"운전"}],genreList:[{text:"전체",id:"all"},{text:"영화",id:"movie"},{text:"드라마",id:"drama"},{text:"OTT시리즈",id:"ott"},{text:"웹시리즈",id:"web"},{text:"광고",id:"ad"}],curatedList:[{text:"성별",id:"gender"},{text:"나이",id:"age"},{text:"신장",id:"height"},{text:"특기",id:"specialty"}],selectedGenreList:["all"],selectedCurationList:[],selectedAgeRange:null,selectedHeightRange:null,selectedGender:null,selectedPrefer:[],searchKeyword:"",auditions:[]}},methods:{handleButtonClick(){},handleMenuClick(){},handleToggleFavorite(e){const{auditionList:t}=this.$store.state,c=t[e];c.isScrap=!c.isScrap},handleClickGenreGroup(e){const{id:t}=e;if(t==="all"){this.selectedGenreList=["all"];return}this.selectedGenreList.includes("all")&&(this.selectedGenreList=this.selectedGenreList.filter(c=>c!=="all")),this.selectedGenreList=this.selectedGenreList.includes(t)?this.selectedGenreList.filter(c=>c!==t):[...this.selectedGenreList,t]},handleClickShowAll(){this.searchClear()},handleClickSearchClear(){this.searchClear()},searchClear(){this.selectedGenreList=["all"],this.kind="1",this.selectedAgeRange=null,this.selectedGender=null,this.selectedHeightRange=null,this.selectedPrefer=[],this.searchKeyword=""},handleClickOverlay(){},handleAgeRangeChange(e){this.selectedAgeRange=e},handleHeightRangeChange(e){this.selectedHeightRange=e},handleClickGenderChange(e){this.selectedGender=e},handleSearchText(){const{auditions:e}=this;this.filteredAuditionList=this.applyFilters({target:e,filters:[]})},applyFilters({target:e,filters:t}){if(t.length===0)return e;const{condition:c,filter:v}=t[0];return c?this.applyFilters({target:e.filter(v),filters:t.slice(1)}):this.applyFilters({target:e,filters:t.slice(1)})}},created(){N().then(e=>{this.auditions=e})},mounted(){},computed:{computedCurationList(){const e=[];return this.selectedAgeRange&&e.push("age"),this.selectedGender&&e.push("gender"),this.selectedHeightRange&&e.push("height"),this.selectedPrefer.length>0&&e.push("specialty"),e},filteredAuditionList(){const{auditions:e}=this;e.sort((a,u)=>{const R=A(a.dateRange[1]),f=A(u.dateRange[1]);return R.isAfter(f)?-1:1});const t=a=>a.prefer.some(u=>this.selectedPrefer.includes(u)),c=a=>{const u=Object.values(this.selectedAgeRange);return b(a.ageRange,u)},v=a=>{const u=Object.values(this.selectedHeightRange);return b(a.heightRange,u)},n=a=>a.gender===this.selectedGender,d=a=>this.selectedGenreList.includes("all")||this.selectedGenreList.includes(a.genre),m=({title:a,productionName:u})=>a.includes(this.searchKeyword)||u.includes(this.searchKeyword);return this.applyFilters({target:e,filters:[{condition:this.selectedPrefer.length>0,filter:t},{condition:this.selectedGender,filter:n},{condition:this.selectedAgeRange,filter:c},{condition:this.selectedHeightRange,filter:v},{condition:this.selectedGenreList.length>0,filter:d},{condition:this.searchKeyword,filter:m}]})}},components:{DownOutlined:V,SearchOutlined:j,AuditionItem:S,ReloadOutlined:se}},de={class:"audition-find"},oe={class:"audition-find__header"},re={class:"btn"},ce={class:"audition-find__sub-header"},ue={key:0,class:"search-group"},he={key:1,class:"search-group"},_e=["onClick"],ge={class:"overlay__title"},pe={class:"overlay__content"},ve={class:"audition-find__content container"},fe={class:"header"},me={class:"audition-list"};function Ce(e,t,c,v,n,d){const m=Y,a=L("DownOutlined"),u=J,R=L("ReloadOutlined"),f=Q,O=L("SearchOutlined"),F=q,x=Z,K=$,H=ee,P=te,B=ne,I=ie,w=le,U=W,z=S;return r(),h("div",de,[g("div",oe,[l(u,{value:n.kind,"onUpdate:value":t[0]||(t[0]=i=>n.kind=i),size:"large"},{default:s(()=>[l(m,{size:"large",value:"1",onClick:d.handleClickShowAll},{default:s(()=>[_(" 전체 오디션 ")]),_:1},8,["onClick"]),l(m,{value:"2"},{default:s(()=>[_("장르별 보기 "),l(a)]),_:1}),l(m,{value:"3"},{default:s(()=>[_("내게 맞는 오디션 찾기 "),l(a)]),_:1})]),_:1},8,["value"]),g("div",re,[l(f,{type:"dashed",onClick:d.handleClickSearchClear},{default:s(()=>[l(R,{class:"icon"}),_(" 검색 필터 초기화 ")]),_:1},8,["onClick"])]),l(F,{class:"item",size:"large",value:n.searchKeyword,"onUpdate:value":t[1]||(t[1]=i=>n.searchKeyword=i),onKeyup:M(d.handleSearchText,["enter"]),style:{width:"240px","margin-left":"auto"},placeholder:"검색"},{addonBefore:s(()=>[l(O)]),_:1},8,["value","onKeyup"])]),g("div",ce,[n.kind==="2"?(r(),h("ul",ue,[(r(!0),h(C,null,y(n.genreList,i=>(r(),h("li",{class:"search-group__item",key:i.id},[l(f,{shape:"round",type:n.selectedGenreList.includes(i.id)?"primary":"default",size:"large",onClick:p=>d.handleClickGenreGroup(i)},{default:s(()=>[_(k(i.text),1)]),_:2},1032,["type","onClick"])]))),128))])):n.kind==="3"?(r(),h("ul",he,[(r(!0),h(C,null,y(n.curatedList,(i,p)=>(r(),h("li",{class:"search-group__item",key:i.id},[l(I,{shape:"round",visible:n.visible[p],"onUpdate:visible":o=>n.visible[p]=o,type:d.computedCurationList.includes(i.id)?"primary":"default",size:"large",open:!0,placement:"bottom",trigger:["click"],arrow:"",onClick:o=>d.handleClickGenreGroup(i)},{icon:s(()=>[l(a)]),overlay:s(()=>[g("div",{class:"overlay",onClick:o=>d.handleClickOverlay(p)},[g("p",ge,k(i.text+" 선택"),1),g("div",pe,[i.id==="gender"?(r(),h(C,{key:0},[l(f,{size:"large",class:"btn",type:n.selectedGender==="male"?"primary":"default",onClick:t[2]||(t[2]=o=>d.handleClickGenderChange("male"))},{default:s(()=>[_(" 남자 ")]),_:1},8,["type"]),l(f,{size:"large",class:"btn",type:n.selectedGender==="female"?"primary":"default",onClick:t[3]||(t[3]=o=>d.handleClickGenderChange("female"))},{default:s(()=>[_(" 여자 ")]),_:1},8,["type"])],64)):i.id==="age"?(r(),G(x,{key:1,value:v.ageRange,"onUpdate:value":t[4]||(t[4]=o=>v.ageRange=o),range:"",min:15,max:100,onChange:d.handleAgeRangeChange},null,8,["value","onChange"])):i.id==="height"?(r(),G(x,{key:2,value:n.heightRange,"onUpdate:value":t[5]||(t[5]=o=>n.heightRange=o),range:"",min:130,max:200,onChange:d.handleHeightRangeChange},null,8,["value","onChange"])):(r(),G(B,{key:3,value:n.selectedPrefer,"onUpdate:value":t[6]||(t[6]=o=>n.selectedPrefer=o),style:{width:"100%"},onChange:e.handleCheckboxChange},{default:s(()=>[l(P,{gutter:[0,20]},{default:s(()=>[(r(!0),h(C,null,y(n.SKILLS,o=>(r(),G(H,{key:o.id,span:10},{default:s(()=>[l(K,{value:o.id},{default:s(()=>[_(k(o.value),1)]),_:2},1032,["value"])]),_:2},1024))),128))]),_:1})]),_:1},8,["value","onChange"]))])],8,_e)]),default:s(()=>[_(k(i.text)+" ",1)]),_:2},1032,["visible","onUpdate:visible","type","onClick"])]))),128))])):E("",!0)]),g("div",ve,[g("div",fe,[l(U,{value:n.sort,"onUpdate:value":t[7]||(t[7]=i=>n.sort=i),class:"sort",style:{width:"140px"},onFocus:e.focus,size:"large",onChange:e.handleChange},{default:s(()=>[l(w,{value:"1"},{default:s(()=>[_("마감일 순")]),_:1}),l(w,{value:"2"},{default:s(()=>[_("최신등록일 순")]),_:1})]),_:1},8,["value","onFocus","onChange"])]),g("ul",me,[(r(!0),h(C,null,y(d.filteredAuditionList,(i,p)=>(r(),h("li",{class:"audition-list__item",key:p},[l(z,X({index:p},i,{audition:i,onFavorite:d.handleToggleFavorite}),null,16,["index","audition","onFavorite"])]))),128))])])])}const be=D(ae,[["render",Ce],["__scopeId","data-v-7835522c"]]);export{be as default};
