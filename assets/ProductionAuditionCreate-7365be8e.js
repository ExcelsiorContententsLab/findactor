import{_ as P,aq as B,Q as b,ar as N,as as F,r as G,o as l,c,e,d as n,w as a,F as r,h as v,I as S,J as j,Y as T,u as V,at as q,aj as E,B as H,i as p,j as _,t as h,v as J,x as K,H as O,m as Q,n as W,C as X,p as Z,q as $,au as ee}from"./index-35247f7b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */const te={name:"production-audition-create",data(){return{locale:B,auditionDetail:{title:"",genre:"",productionName:"",director:"",role:"",gender:"",detailInfo:"",dateRange:[],ageRange:[10,50],heightRange:[140,180],weightRange:[30,200],inCharge:{name:""},prefer:[]},genreList:[{text:"영화",id:"movie"},{text:"드라마",id:"drama"},{text:"OTT시리즈",id:"ott"},{text:"웹시리즈",id:"web"},{text:"광고",id:"ad"}],genderList:[{text:"남성",id:"male"},{text:"여성",id:"female"}],roleList:[{text:"주연",id:"1"},{text:"조연",id:"2"},{text:"단역",id:"3"}],MAP:[{id:"A",value:"영어"},{id:"B",value:"중국어"},{id:"C",value:"일본어"},{id:"D",value:"프랑스어"},{id:"E",value:"독일어"},{id:"F",value:"경상도 사투리"},{id:"G",value:"전라도 사투리"},{id:"H",value:"평양 사투리"},{id:"I",value:"강원도 사투리"},{id:"J",value:"제주도 사투리"},{id:"K",value:"스포츠댄스"},{id:"L",value:"발레"},{id:"M",value:"현대무용"},{id:"N",value:"한국무용"},{id:"O",value:"방송댄스"},{id:"P",value:"액션"},{id:"Q",value:"운전"}],tags:[]}},methods:{handleCheckboxChange(d){this.tags=d},handleClickCreateAudition(){const d={...this.auditionDetail,startDate:b(this.auditionDetail.dateRange[0]).format("YYYY.MM.DD (ddd)"),endDate:b(this.auditionDetail.dateRange[1]).format("YYYY.MM.DD (ddd)"),prefer:this.tags};N.post("https://findactor.shop/auditions",d).then(()=>{F(d),this.$router.push("/production")})}}},s=d=>(J("data-v-bbfe89f6"),d=d(),K(),d),ie={class:"audition-create container"},oe={class:"audition-create__item"},ne=s(()=>e("div",{class:"title"}," 작품명 ",-1)),ae={class:"content"},se={class:"audition-create__item"},le=s(()=>e("div",{class:"title"}," 장르 ",-1)),de={class:"content content--border"},_e={class:"audition-create__item"},ue=s(()=>e("div",{class:"title"}," 제작사명 ",-1)),ce={class:"content"},re={class:"audition-create__item"},ve=s(()=>e("div",{class:"title"}," 감독명 ",-1)),pe={class:"content"},he={class:"audition-create__item"},ge=s(()=>e("div",{class:"title"}," 성별 ",-1)),me={class:"content content--border"},fe={class:"audition-create__item"},xe=s(()=>e("div",{class:"title"}," 역할 ",-1)),De={class:"content content--border"},Ce={class:"audition-create__item audition-create__item--flex"},be={class:"wrapper"},ke=s(()=>e("div",{class:"title"}," 나이 ",-1)),we={class:"content content--border",style:{width:"400px"}},ye={class:"wrapper"},Re=s(()=>e("div",{class:"title"}," 신장 ",-1)),Ue={class:"content content--border",style:{width:"400px"}},Ye={class:"wrapper"},Me=s(()=>e("div",{class:"title"}," 체중 ",-1)),Ae={class:"content content--border",style:{width:"400px"}},Ie={class:"audition-create__item"},Le=s(()=>e("div",{class:"title"}," 특기 ",-1)),ze={class:"content content--border content--bottom"},Pe={class:"content"},Be={class:"audition-create__item"},Ne=s(()=>e("div",{class:"title"}," 일정 ",-1)),Fe={class:"content"},Ge={class:"audition-create__item"},Se=s(()=>e("div",{class:"title"}," 담당자 정보 ",-1)),je={class:"content content--flex"},Te={class:"content__item"},Ve=s(()=>e("span",{class:"label"}," 이름 ",-1)),qe={class:"content__item"},Ee=s(()=>e("span",{class:"label"}," 연락처 ",-1)),He={class:"content__item"},Je=s(()=>e("span",{class:"label"}," 이메일 ",-1)),Ke={class:"audition-create__item"},Oe=s(()=>e("div",{class:"title"}," 세부정보 ",-1)),Qe={class:"content"},We={class:"footer"},Xe={class:"footer__wrapper"},Ze={class:"right"};function $e(d,o,et,tt,i,D){const u=S,m=O,f=j,x=T,k=Q,w=W,y=X,R=Z,U=$,Y=V,M=ee,A=q,I=E,C=H,L=G("RouterLink");return l(),c("div",ie,[e("div",oe,[ne,e("div",ae,[n(u,{value:i.auditionDetail.title,"onUpdate:value":o[0]||(o[0]=t=>i.auditionDetail.title=t),placeholder:"작품명",size:"large"},null,8,["value"])])]),e("div",se,[le,e("div",de,[n(f,{value:i.auditionDetail.genre,"onUpdate:value":o[1]||(o[1]=t=>i.auditionDetail.genre=t),name:"radioGroup"},{default:a(()=>[(l(!0),c(r,null,v(i.genreList,t=>(l(),p(m,{key:t.id,value:t.id,class:"radio"},{default:a(()=>[_(h(t.text),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])])]),e("div",_e,[ue,e("div",ce,[n(u,{value:i.auditionDetail.productionName,"onUpdate:value":o[2]||(o[2]=t=>i.auditionDetail.productionName=t),placeholder:"제작사명을 입력해주세요",size:"large"},null,8,["value"])])]),e("div",re,[ve,e("div",pe,[n(u,{value:i.auditionDetail.director,"onUpdate:value":o[3]||(o[3]=t=>i.auditionDetail.director=t),placeholder:"감독명을 입력해주세요",size:"large"},null,8,["value"])])]),e("div",he,[ge,e("div",me,[n(f,{value:i.auditionDetail.gender,"onUpdate:value":o[4]||(o[4]=t=>i.auditionDetail.gender=t),name:"radioGroup"},{default:a(()=>[(l(!0),c(r,null,v(i.genderList,t=>(l(),p(m,{key:t.id,value:t.id,class:"radio"},{default:a(()=>[_(h(t.text),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])])]),e("div",fe,[xe,e("div",De,[n(f,{value:i.auditionDetail.role,"onUpdate:value":o[5]||(o[5]=t=>i.auditionDetail.role=t),name:"radioGroup"},{default:a(()=>[(l(!0),c(r,null,v(i.roleList,t=>(l(),p(m,{key:t.id,value:t.id,class:"radio"},{default:a(()=>[_(h(t.text),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])])]),e("div",Ce,[e("div",be,[ke,e("div",we,[n(x,{value:i.auditionDetail.ageRange,"onUpdate:value":o[6]||(o[6]=t=>i.auditionDetail.ageRange=t),range:"",min:15,max:100},null,8,["value"])])]),e("div",ye,[Re,e("div",Ue,[n(x,{value:i.auditionDetail.heightRange,"onUpdate:value":o[7]||(o[7]=t=>i.auditionDetail.heightRange=t),range:"",min:140,max:200},null,8,["value"])])]),e("div",Ye,[Me,e("div",Ae,[n(x,{value:i.auditionDetail.weightRange,"onUpdate:value":o[8]||(o[8]=t=>i.auditionDetail.weightRange=t),range:"",min:30,max:200},null,8,["value"])])])]),e("div",Ie,[Le,e("div",ze,[(l(!0),c(r,null,v(this.tags,(t,z)=>(l(),p(w,{key:z,title:i.MAP.find(g=>g.id===t).value},{default:a(()=>[n(k,{color:"#6044F8",style:{"font-size":"20px"},closable:"",onClose:g=>d.handleClose(t)},{default:a(()=>[_(h(i.MAP.find(g=>g.id===t).value),1)]),_:2},1032,["onClose"])]),_:2},1032,["title"]))),128))]),e("div",Pe,[n(Y,{value:this.tags,"onUpdate:value":o[9]||(o[9]=t=>this.tags=t),style:{width:"100%"},onChange:D.handleCheckboxChange},{default:a(()=>[n(U,{gutter:[0,40]},{default:a(()=>[(l(!0),c(r,null,v(i.MAP,t=>(l(),p(R,{key:t.id,span:5},{default:a(()=>[n(y,{value:t.id},{default:a(()=>[_(h(t.value),1)]),_:2},1032,["value"])]),_:2},1024))),128))]),_:1})]),_:1},8,["value","onChange"])])]),e("div",Be,[Ne,e("div",Fe,[n(A,{direction:"vertical",size:12},{default:a(()=>[n(M,{value:i.auditionDetail.dateRange,"onUpdate:value":o[10]||(o[10]=t=>i.auditionDetail.dateRange=t),style:{width:"400px"},format:"YYYY/MM/DD (ddd)",locale:i.locale,size:"large"},null,8,["value","locale"])]),_:1})])]),e("div",Ge,[Se,e("div",je,[e("div",Te,[Ve,n(u,{value:i.auditionDetail.inCharge.name,"onUpdate:value":o[11]||(o[11]=t=>i.auditionDetail.inCharge.name=t),placeholder:"담당자 명",style:{width:"280px","margin-left":"20px"}},null,8,["value"])]),e("div",qe,[Ee,n(u,{value:i.auditionDetail.inCharge.contact,"onUpdate:value":o[12]||(o[12]=t=>i.auditionDetail.inCharge.contact=t),placeholder:"연락처",style:{width:"280px","margin-left":"20px"}},null,8,["value"])]),e("div",He,[Je,n(u,{value:i.auditionDetail.inCharge.email,"onUpdate:value":o[13]||(o[13]=t=>i.auditionDetail.inCharge.email=t),placeholder:"이메일",style:{width:"280px","margin-left":"20px"}},null,8,["value"])])])]),e("div",Ke,[Oe,e("div",Qe,[n(I,{value:i.auditionDetail.detailInfo,"onUpdate:value":o[14]||(o[14]=t=>i.auditionDetail.detailInfo=t),rows:4,placeholder:"세부정보를 입력해주세요"},null,8,["value"])])]),e("div",We,[e("div",Xe,[e("div",Ze,[n(L,{to:"/production"},{default:a(()=>[n(C,{size:"large"},{default:a(()=>[_(" 취소 ")]),_:1})]),_:1}),e("a",null,[n(C,{type:"primary",size:"large",style:{"margin-left":"12px"},onClick:D.handleClickCreateAudition},{default:a(()=>[_(" 등록하기 ")]),_:1},8,["onClick"])])])])])])}const dt=P(te,[["render",$e],["__scopeId","data-v-bbfe89f6"]]);export{dt as default};