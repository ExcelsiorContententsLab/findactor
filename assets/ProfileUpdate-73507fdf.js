import{_ as B,s as F,a as j,l as K,b as N,r as g,o as i,c as _,d as e,w as a,e as p,f as V,g as D,F as h,h as x,i as b,j as c,t as y,k as E,D as M,I as R,m as q,n as G,C as H,p as J,q as O,u as Q,B as T,v as W,x as Y}from"./index-be3e084a.js";/* empty css              *//* empty css              */const Z={name:"ProfileUpdate",data(){return{inputVisible:!0,tags:[],SKILLS:[{id:"A",value:"영어"},{id:"B",value:"중국어"},{id:"C",value:"일본어"},{id:"D",value:"프랑스어"},{id:"E",value:"독일어"},{id:"F",value:"경상도 사투리"},{id:"G",value:"전라도 사투리"},{id:"H",value:"평양 사투리"},{id:"I",value:"강원도 사투리"},{id:"J",value:"제주도 사투리"},{id:"K",value:"스포츠댄스"},{id:"L",value:"발레"},{id:"M",value:"현대무용"},{id:"N",value:"한국무용"},{id:"O",value:"방송댄스"},{id:"P",value:"액션"},{id:"Q",value:"운전"}],avatarImages:[{uid:"-1",name:"image.png",status:"done",url:"https://i.ibb.co/ZWjFgc7/02.jpg"},{uid:"-2",name:"image.png",status:"done",url:"https://i.ibb.co/m8Y25xz/03.jpg"},{uid:"-3",name:"image.png",status:"done",url:"https://i.ibb.co/p4y5Mp0/04.jpg"}],profile:{name:"",email:"",age:"",height:"",weight:"",genre:"",gender:"",tags:[]},email:"testactor120@gmail.com",avatars:[]}},methods:{handleClose(l){this.tags=this.tags.filter(t=>t!==l)},handleCheckboxChange(l){this.tags=l},handleChangeFile(l){const{file:t}=l,{status:u}=t;u==="done"&&this.handleUploadComplete(t)},handleUploadComplete(l){const{response:t}=l,{message:u}=t;this.avatars=[...this.avatars,{imgSrc:u}]},handleSubmit(){F(this.profile),j(this.avatars)}},mounted(){this.profile=K(),this.avatars=N(),this.avatarImages=this.avatars.map(({imgSrc:l},t)=>({id:t,url:l,status:"done"}))}},X=l=>(W("data-v-e6fe5445"),l=l(),Y(),l),$={class:"profile-update container"},ee={class:"clearfix"},te={key:0},ae=X(()=>p("div",{style:{"margin-top":"8px"}},"이미지 업로드",-1)),oe={class:"footer"},le={class:"footer__wrapper"},se={class:"right"};function ne(l,t,u,ie,s,r){const C=g("plus-outlined"),I=E,n=M,m=R,k=q,S=G,w=H,z=J,L=O,U=Q,P=V,f=T,v=g("RouterLink");return i(),_("div",$,[e(P,{bordered:"",size:"middle",column:4,labelStyle:{width:"200px"}},{default:a(()=>[e(n,{label:"프로필 이미지",style:{"font-size":"20px"},span:"4"},{default:a(()=>[p("div",ee,[e(I,{"file-list":s.avatarImages,"onUpdate:file-list":t[0]||(t[0]=o=>s.avatarImages=o),action:"https://9shbrlwx14.execute-api.ap-northeast-1.amazonaws.com/default/uploadImage","list-type":"picture-card",onPreview:l.handlePreview,onChange:r.handleChangeFile},{default:a(()=>[s.avatarImages.length<8?(i(),_("div",te,[e(C),ae])):D("",!0)]),_:1},8,["file-list","onPreview","onChange"])])]),_:1}),e(n,{label:"신장",style:{"font-size":"20px"},span:"4"},{default:a(()=>[e(m,{value:s.profile.height,"onUpdate:value":t[1]||(t[1]=o=>s.profile.height=o),placeholder:"신장",style:{"font-size":"20px"}},null,8,["value"])]),_:1}),e(n,{label:"몸무게",style:{"font-size":"20px"},span:"4"},{default:a(()=>[e(m,{value:s.profile.weight,"onUpdate:value":t[2]||(t[2]=o=>s.profile.weight=o),placeholder:"몸무게",style:{"font-size":"20px"}},null,8,["value"])]),_:1}),e(n,{label:"e-mail",style:{"font-size":"20px"},span:"4"},{default:a(()=>[e(m,{value:s.profile.email,"onUpdate:value":t[3]||(t[3]=o=>s.profile.email=o),placeholder:"e-mail",style:{"font-size":"20px"}},null,8,["value"])]),_:1}),e(n,{label:"특기",style:{"font-size":"20px"},span:"4"},{default:a(()=>[(i(!0),_(h,null,x(s.profile.tags,(o,A)=>(i(),b(S,{key:A,title:s.SKILLS.find(d=>d.id===o).value},{default:a(()=>[e(k,{color:"#6044F8",style:{"font-size":"20px"},closable:"",onClose:d=>r.handleClose(o)},{default:a(()=>[c(y(s.SKILLS.find(d=>d.id===o).value),1)]),_:2},1032,["onClose"])]),_:2},1032,["title"]))),128))]),_:1}),e(n,{label:" ",style:{"font-size":"20px"},span:"4"},{default:a(()=>[e(U,{value:s.profile.tags,"onUpdate:value":t[4]||(t[4]=o=>s.profile.tags=o),style:{width:"100%"},onChange:r.handleCheckboxChange},{default:a(()=>[e(L,{gutter:[0,40]},{default:a(()=>[(i(!0),_(h,null,x(s.SKILLS,o=>(i(),b(z,{key:o.id,span:5},{default:a(()=>[e(w,{value:o.id},{default:a(()=>[c(y(o.value),1)]),_:2},1032,["value"])]),_:2},1024))),128))]),_:1})]),_:1},8,["value","onChange"])]),_:1})]),_:1}),p("div",oe,[p("div",le,[p("div",se,[e(v,{to:"/"},{default:a(()=>[e(f,{size:"large"},{default:a(()=>[c(" 취소 ")]),_:1})]),_:1}),e(v,{to:"/actor"},{default:a(()=>[e(f,{type:"primary",size:"large",style:{"margin-left":"12px"},onClick:r.handleSubmit},{default:a(()=>[c(" 등록하기 ")]),_:1},8,["onClick"])]),_:1})])])])])}const de=B(Z,[["render",ne],["__scopeId","data-v-e6fe5445"]]);export{de as default};
