import{_ as $,r as v,o as a,c as d,a as e,w as t,b as u,d as M,e as V,F as g,f as h,g as y,h as p,t as b,i as j,D as A,I as F,j as N,k as S,C as D,l as E,m as R,n as q,B as G,p as H,q as J}from"./index-1fc9f5d9.js";/* empty css              *//* empty css              */const K={name:"ProfileUpdate",data(){return{inputVisible:!0,tags:[],inputValue:"",MAP:[{id:"A",value:"영어"},{id:"B",value:"중국어"},{id:"C",value:"일본어"},{id:"D",value:"프랑스어"},{id:"E",value:"독일어"},{id:"F",value:"경상도 사투리"},{id:"G",value:"전라도 사투리"},{id:"H",value:"평양 사투리"},{id:"I",value:"강원도 사투리"},{id:"J",value:"제주도 사투리"},{id:"K",value:"스포츠댄스"},{id:"L",value:"발레"},{id:"M",value:"현대무용"},{id:"N",value:"한국무용"},{id:"O",value:"방송댄스"},{id:"P",value:"액션"},{id:"Q",value:"운전"}],fileList:[{uid:"-1",name:"image.png",status:"done",url:"https://i.ibb.co/ZWjFgc7/02.jpg"},{uid:"-2",name:"image.png",status:"done",url:"https://i.ibb.co/m8Y25xz/03.jpg"},{uid:"-3",name:"image.png",status:"done",url:"https://i.ibb.co/p4y5Mp0/04.jpg"}]}},methods:{handleClose(o){this.tags=this.tags.filter(n=>n!==o),console.log(this.tags)},handleCheckboxChange(o){this.tags=o}}},O=o=>(H("data-v-e79c93f7"),o=o(),J(),o),Q={class:"profile-update container"},T={class:"clearfix"},W={key:0},Y=O(()=>u("div",{style:{"margin-top":"8px"}},"이미지 업로드",-1)),Z={class:"footer"},X={class:"footer__wrapper"},ee={class:"right"};function te(o,n,oe,se,l,f){const x=v("plus-outlined"),C=j,i=A,m=F,k=N,w=S,z=D,P=E,I=R,L=q,B=M,r=G,c=v("RouterLink");return a(),d("div",Q,[e(B,{bordered:"",size:"middle",column:4,labelStyle:{width:"200px"}},{default:t(()=>[e(i,{label:"프로필 이미지",style:{"font-size":"20px"},span:"4"},{default:t(()=>[u("div",T,[e(C,{"file-list":l.fileList,"onUpdate:file-list":n[0]||(n[0]=s=>l.fileList=s),action:"https://www.mocky.io/v2/5cc8019d300000980a055e76","list-type":"picture-card",onPreview:o.handlePreview},{default:t(()=>[l.fileList.length<8?(a(),d("div",W,[e(x),Y])):V("",!0)]),_:1},8,["file-list","onPreview"])])]),_:1}),e(i,{label:"신장",style:{"font-size":"20px"},span:"4"},{default:t(()=>[e(m,{value:o.$store.state.profile.height,"onUpdate:value":n[1]||(n[1]=s=>o.$store.state.profile.height=s),placeholder:"신장",style:{"font-size":"20px"}},null,8,["value"])]),_:1}),e(i,{label:"몸무게",style:{"font-size":"20px"},span:"4"},{default:t(()=>[e(m,{value:o.$store.state.profile.weight,"onUpdate:value":n[2]||(n[2]=s=>o.$store.state.profile.weight=s),placeholder:"몸무게",style:{"font-size":"20px"}},null,8,["value"])]),_:1}),e(i,{label:"특기",style:{"font-size":"20px"},span:"4"},{default:t(()=>[(a(!0),d(g,null,h(o.$store.state.profile.tags,(s,U)=>(a(),y(w,{key:U,title:l.MAP.find(_=>_.id===s).value},{default:t(()=>[e(k,{color:"#6044F8",style:{"font-size":"20px"},closable:"",onClose:_=>f.handleClose(s)},{default:t(()=>[p(b(l.MAP.find(_=>_.id===s).value),1)]),_:2},1032,["onClose"])]),_:2},1032,["title"]))),128))]),_:1}),e(i,{label:" ",style:{"font-size":"20px"},span:"4"},{default:t(()=>[e(L,{value:o.$store.state.profile.tags,"onUpdate:value":n[3]||(n[3]=s=>o.$store.state.profile.tags=s),style:{width:"100%"},onChange:f.handleCheckboxChange},{default:t(()=>[e(I,{gutter:[0,40]},{default:t(()=>[(a(!0),d(g,null,h(l.MAP,s=>(a(),y(P,{key:s.id,span:5},{default:t(()=>[e(z,{value:s.id},{default:t(()=>[p(b(s.value),1)]),_:2},1032,["value"])]),_:2},1024))),128))]),_:1})]),_:1},8,["value","onChange"])]),_:1})]),_:1}),u("div",Z,[u("div",X,[u("div",ee,[e(c,{to:"/"},{default:t(()=>[e(r,{size:"large"},{default:t(()=>[p(" 취소 ")]),_:1})]),_:1}),e(c,{to:"/"},{default:t(()=>[e(r,{size:"large",style:{"margin-left":"12px"}},{default:t(()=>[p(" 임시저장 ")]),_:1})]),_:1}),e(c,{to:"/"},{default:t(()=>[e(r,{type:"primary",size:"large",style:{"margin-left":"12px"}},{default:t(()=>[p(" 등록하기 ")]),_:1})]),_:1})])])])])}const ie=$(K,[["render",te],["__scopeId","data-v-e79c93f7"]]);export{ie as default};