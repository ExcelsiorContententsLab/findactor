import{_ as N,ak as P,al as w,r as B,o as d,c,e,d as s,w as a,F as u,h as p,I as V,U as F,X as G,u as S,am as T,an as j,B as E,i as v,j as _,t as g,v as K,x as O,ao as q,m as H,n as J,C as Q,p as X,q as W,ap as Z}from"./index-be3e084a.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */const $={name:"production-audition-create",data(){return{locale:P,title:"",genre:"",productionName:"",director:"",role:"",gender:"",dateRange:[],ageRange:[10,50],heightRange:[140,180],weightRange:[30,200],inCharge:{name:""},genreList:[{text:"영화",id:"movie"},{text:"드라마",id:"drama"},{text:"OTT시리즈",id:"ott"},{text:"웹시리즈",id:"web"},{text:"광고",id:"ad"}],genderList:[{text:"남성",id:"male"},{text:"여성",id:"female"}],roleList:[{text:"주연",id:"1"},{text:"조연",id:"2"},{text:"단역",id:"3"}],MAP:[{id:"A",value:"영어"},{id:"B",value:"중국어"},{id:"C",value:"일본어"},{id:"D",value:"프랑스어"},{id:"E",value:"독일어"},{id:"F",value:"경상도 사투리"},{id:"G",value:"전라도 사투리"},{id:"H",value:"평양 사투리"},{id:"I",value:"강원도 사투리"},{id:"J",value:"제주도 사투리"},{id:"K",value:"스포츠댄스"},{id:"L",value:"발레"},{id:"M",value:"현대무용"},{id:"N",value:"한국무용"},{id:"O",value:"방송댄스"},{id:"P",value:"액션"},{id:"Q",value:"운전"}]}},methods:{handleClickCreateAudition(){const i={};i.title=this.title,i.genre=this.gender,i.productionName=this.productionName,i.director=this.director,i.role=this.role,i.gender=this.gender,i.ageRange=this.ageRange,i.heightRange=this.heightRange,i.weightRange=this.weightRange,i.inCharge=this.inCharge,i.startDate=w(this.dateRange[0]).format("YYYY.MM.DD (ddd)"),i.endDate=w(this.dateRange[1]).format("YYYY.MM.DD (ddd)"),i.applicantCnt=0,i.yesCnt=0,i.noCnt=1,this.$store.state.production.detail.auditionList.push(i),this.$router.push("/production")}}},l=i=>(K("data-v-aa0716d7"),i=i(),O(),i),ee={class:"audition-create container"},te={class:"audition-create__item"},oe=l(()=>e("div",{class:"title"}," 작품명 ",-1)),ne={class:"content"},ie={class:"audition-create__item"},se=l(()=>e("div",{class:"title"}," 장르 ",-1)),ae={class:"content content--border"},le={class:"audition-create__item"},de=l(()=>e("div",{class:"title"}," 제작사명 ",-1)),_e={class:"content"},re={class:"audition-create__item"},ce=l(()=>e("div",{class:"title"}," 감독명 ",-1)),ue={class:"content"},pe={class:"audition-create__item"},ve=l(()=>e("div",{class:"title"}," 성별 ",-1)),ge={class:"content content--border"},he={class:"audition-create__item"},me=l(()=>e("div",{class:"title"}," 역할 ",-1)),fe={class:"content content--border"},xe={class:"audition-create__item audition-create__item--flex"},Ce={class:"wrapper"},Re=l(()=>e("div",{class:"title"}," 나이 ",-1)),we={class:"content content--border",style:{width:"400px"}},ye={class:"wrapper"},ke=l(()=>e("div",{class:"title"}," 신장 ",-1)),be={class:"content content--border",style:{width:"400px"}},Ue={class:"wrapper"},Ye=l(()=>e("div",{class:"title"}," 체중 ",-1)),Le={class:"content content--border",style:{width:"400px"}},Me={class:"audition-create__item"},De=l(()=>e("div",{class:"title"}," 특기 ",-1)),ze={class:"content content--border content--bottom"},Ae={class:"content"},Ie={class:"audition-create__item"},Ne=l(()=>e("div",{class:"title"}," 일정 ",-1)),Pe={class:"content"},Be={class:"audition-create__item"},Ve=l(()=>e("div",{class:"title"}," 담당자 정보 ",-1)),Fe={class:"content content--flex"},Ge={class:"content__item"},Se=l(()=>e("span",{class:"label"}," 이름 ",-1)),Te={class:"content__item"},je=l(()=>e("span",{class:"label"}," 연락처 ",-1)),Ee={class:"content__item"},Ke=l(()=>e("span",{class:"label"}," 이메일 ",-1)),Oe={class:"audition-create__item"},qe=l(()=>e("div",{class:"title"}," 세부정부 ",-1)),He={class:"content"},Je={class:"footer"},Qe={class:"footer__wrapper"},Xe={class:"right"};function We(i,n,Ze,$e,o,y){const r=V,m=q,f=F,x=G,k=H,b=J,U=Q,Y=X,L=W,M=S,D=Z,z=T,A=j,C=E,R=B("RouterLink");return d(),c("div",ee,[e("div",te,[oe,e("div",ne,[s(r,{value:o.title,"onUpdate:value":n[0]||(n[0]=t=>o.title=t),placeholder:"작품명",size:"large"},null,8,["value"])])]),e("div",ie,[se,e("div",ae,[s(f,{value:o.genre,"onUpdate:value":n[1]||(n[1]=t=>o.genre=t),name:"radioGroup"},{default:a(()=>[(d(!0),c(u,null,p(o.genreList,t=>(d(),v(m,{key:t.id,value:t.id,class:"radio"},{default:a(()=>[_(g(t.text),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])])]),e("div",le,[de,e("div",_e,[s(r,{value:o.productionName,"onUpdate:value":n[2]||(n[2]=t=>o.productionName=t),placeholder:"제작사명을 입력해주세요",size:"large"},null,8,["value"])])]),e("div",re,[ce,e("div",ue,[s(r,{value:o.director,"onUpdate:value":n[3]||(n[3]=t=>o.director=t),placeholder:"감독명을 입력해주세요",size:"large"},null,8,["value"])])]),e("div",pe,[ve,e("div",ge,[s(f,{value:o.gender,"onUpdate:value":n[4]||(n[4]=t=>o.gender=t),name:"radioGroup"},{default:a(()=>[(d(!0),c(u,null,p(o.genderList,t=>(d(),v(m,{key:t.id,value:t.id,class:"radio"},{default:a(()=>[_(g(t.text),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])])]),e("div",he,[me,e("div",fe,[s(f,{value:o.role,"onUpdate:value":n[5]||(n[5]=t=>o.role=t),name:"radioGroup"},{default:a(()=>[(d(!0),c(u,null,p(o.roleList,t=>(d(),v(m,{key:t.id,value:t.id,class:"radio"},{default:a(()=>[_(g(t.text),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])])]),e("div",xe,[e("div",Ce,[Re,e("div",we,[s(x,{value:o.ageRange,"onUpdate:value":n[6]||(n[6]=t=>o.ageRange=t),range:"",min:15,max:100},null,8,["value"])])]),e("div",ye,[ke,e("div",be,[s(x,{value:o.heightRange,"onUpdate:value":n[7]||(n[7]=t=>o.heightRange=t),range:"",min:140,max:200},null,8,["value"])])]),e("div",Ue,[Ye,e("div",Le,[s(x,{value:o.weightRange,"onUpdate:value":n[8]||(n[8]=t=>o.weightRange=t),range:"",min:30,max:200},null,8,["value"])])])]),e("div",Me,[De,e("div",ze,[(d(!0),c(u,null,p(i.$store.state.profile.tags,(t,I)=>(d(),v(b,{key:I,title:o.MAP.find(h=>h.id===t).value},{default:a(()=>[s(k,{color:"#6044F8",style:{"font-size":"20px"},closable:"",onClose:h=>i.handleClose(t)},{default:a(()=>[_(g(o.MAP.find(h=>h.id===t).value),1)]),_:2},1032,["onClose"])]),_:2},1032,["title"]))),128))]),e("div",Ae,[s(M,{value:i.$store.state.profile.tags,"onUpdate:value":n[9]||(n[9]=t=>i.$store.state.profile.tags=t),style:{width:"100%"},onChange:i.handleCheckboxChange},{default:a(()=>[s(L,{gutter:[0,40]},{default:a(()=>[(d(!0),c(u,null,p(o.MAP,t=>(d(),v(Y,{key:t.id,span:5},{default:a(()=>[s(U,{value:t.id},{default:a(()=>[_(g(t.value),1)]),_:2},1032,["value"])]),_:2},1024))),128))]),_:1})]),_:1},8,["value","onChange"])])]),e("div",Ie,[Ne,e("div",Pe,[s(z,{direction:"vertical",size:12},{default:a(()=>[s(D,{value:o.dateRange,"onUpdate:value":n[10]||(n[10]=t=>o.dateRange=t),style:{width:"400px"},format:"YYYY/MM/DD (ddd)",locale:o.locale,size:"large"},null,8,["value","locale"])]),_:1})])]),e("div",Be,[Ve,e("div",Fe,[e("div",Ge,[Se,s(r,{value:o.inCharge.name,"onUpdate:value":n[11]||(n[11]=t=>o.inCharge.name=t),placeholder:"담당자 명",style:{width:"280px","margin-left":"20px"}},null,8,["value"])]),e("div",Te,[je,s(r,{value:o.inCharge.contact,"onUpdate:value":n[12]||(n[12]=t=>o.inCharge.contact=t),placeholder:"연락처",style:{width:"280px","margin-left":"20px"}},null,8,["value"])]),e("div",Ee,[Ke,s(r,{value:o.inCharge.email,"onUpdate:value":n[13]||(n[13]=t=>o.inCharge.email=t),placeholder:"이메일",style:{width:"280px","margin-left":"20px"}},null,8,["value"])])])]),e("div",Oe,[qe,e("div",He,[s(A,{modelValue:i.detailInfo,"onUpdate:modelValue":n[14]||(n[14]=t=>i.detailInfo=t),rows:4,placeholder:"세부정보를 입력해주세요",maxlength:6},null,8,["modelValue"])])]),e("div",Je,[e("div",Qe,[e("div",Xe,[s(R,{to:"/production/audition/manage"},{default:a(()=>[s(C,{size:"large"},{default:a(()=>[_(" 취소 ")]),_:1})]),_:1}),s(R,{to:"/production/audition/manage"},{default:a(()=>[s(C,{size:"large",style:{"margin-left":"12px"}},{default:a(()=>[_(" 임시저장 ")]),_:1})]),_:1}),e("a",null,[s(C,{type:"primary",size:"large",style:{"margin-left":"12px"},onClick:y.handleClickCreateAudition},{default:a(()=>[_(" 등록하기 ")]),_:1},8,["onClick"])])])])])])}const at=N($,[["render",We],["__scopeId","data-v-aa0716d7"]]);export{at as default};