import{_ as S,W as C,r as w,o,c as s,d as l,w as u,T as I,S as K,e as r,F as d,h as _,i as N,j as p,t as m,G as g,g as h,a1 as j,O as z,H as U,B as O,v as q,x as F}from"./index-a74e9591.js";import{a as R,_ as P,b as x}from"./actors-3a8c6e36.js";/* empty css              *//* empty css              */import"./context-92e41c19.js";const E={name:"production-audition-manage",data(){return{openedProductionList:[],subMenu:"applicant",isProfileDetailVisible:!1,selectedProfile:{},auditions:[],closedAuditions:[],currentAudition:null,actors:R}},computed:{scrapList(){return this.$store.state.auditionList.filter(i=>i.isScrap)},myProductionList(){return this.$store.state.productionList.filter(i=>i.isLiked)},myOfferedProductionList(){return this.$store.state.productionList.filter(n=>n.auditionList.filter(A=>A.isOffered))}},watch:{"$route.query":{immediate:!0,handler(i){this.activeKey=this.$route.query.type}}},methods:{handleTabClick(i){this.$router.replace(`/production/audition/manage?type=${i}`)},handleClickProfileDetail(i){this.selectedProfile=i,this.isProfileDetailVisible=!0},handleManageApplicant(){C({productionName:"(주)엑셀시오르콘텐츠랩"}).then(i=>{this.auditions=i.filter(({isClosed:n})=>!n),this.closedAuditions=i.filter(({isClosed:n})=>n),this.isProfileDetailVisible=!1,this.currentAudition=this.auditions.find(({title:n})=>n===this.currentAudition.title)})}},mounted(){C({productionName:"(주)엑셀시오르콘텐츠랩"}).then(i=>{this.auditions=i.filter(({isClosed:n})=>!n),this.closedAuditions=i.filter(({isClosed:n})=>n),this.isProfileDetailVisible=!1})},components:{ActorItem:P,ActorDetail:x}},D=i=>(q("data-v-6b39c033"),i=i(),F(),i),G={class:"production-audition-manage container"},H=D(()=>r("div",{class:"container__title"}," 진행중인 오디션 ",-1)),W={style:{"margin-bottom":"20px"}},J={key:0},Q=D(()=>r("div",{class:"container__title",style:{"margin-bottom":"20px"}}," 지원자 관리 ",-1)),X={style:{"margin-bottom":"20px"}},Y={class:"tab-panel"},Z={key:0,class:"applicant"},$=["onClick"],ee={key:1,class:"applicant"},te=["onClick"],ie={key:2,class:"applicant"},ne=["onClick"],oe={key:3,class:"applicant"},se=["onClick"];function le(i,n,A,ue,t,c){const f=j,k=z,b=P,y=U,L=I,M=x,T=K,V=O,B=w("RouterLink");return o(),s("div",G,[l(L,{activeKey:i.activeKey,"onUpdate:activeKey":n[2]||(n[2]=e=>i.activeKey=e),size:"large",tabBarStyle:{"font-weight":"700"},onTabClick:c.handleTabClick},{default:u(()=>[l(y,{key:"ongoing",tab:`진행중인 오디션 (${t.auditions.length})`},{default:u(()=>[H,r("div",W,[l(k,{value:t.currentAudition,"onUpdate:value":n[0]||(n[0]=e=>t.currentAudition=e),"button-style":"solid",size:"large"},{default:u(()=>[(o(!0),s(d,null,_(t.auditions,e=>(o(),N(f,{value:e,key:e.title},{default:u(()=>[p(m(e.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),t.currentAudition?(o(),s("div",J,[Q,r("div",X,[l(k,{value:t.subMenu,"onUpdate:value":n[1]||(n[1]=e=>t.subMenu=e),"button-style":"solid",size:"large"},{default:u(()=>[l(f,{value:"applicant"},{default:u(()=>[p(" 지원자 ("+m(t.currentAudition.appliedAuditionees.length)+") ",1)]),_:1}),l(f,{value:"passed"},{default:u(()=>[p(" 프로필합격 ("+m(t.currentAudition.passedAuditionees.length)+") ",1)]),_:1}),l(f,{value:"rejected"},{default:u(()=>[p(" 불합격 ("+m(t.currentAudition.rejectedAuditionees.length)+") ",1)]),_:1}),l(f,{value:"pending"},{default:u(()=>[p(" 보류 ("+m(t.currentAudition.pendingAuditionees.length)+") ",1)]),_:1})]),_:1},8,["value"])]),r("div",Y,[t.subMenu==="applicant"?(o(),s("ul",Z,[(o(!0),s(d,null,_(t.currentAudition.appliedAuditionees,(e,a)=>(o(),s("li",{class:"applicant__item",key:a,onClick:v=>c.handleClickProfileDetail(e)},[l(b,g(e,{index:a}),null,16,["index"])],8,$))),128))])):h("",!0),t.subMenu==="passed"?(o(),s("ul",ee,[(o(!0),s(d,null,_(t.currentAudition.passedAuditionees,(e,a)=>(o(),s("li",{class:"applicant__item",key:a,onClick:v=>c.handleClickProfileDetail(e)},[l(b,g(e,{index:a}),null,16,["index"])],8,te))),128))])):h("",!0),t.subMenu==="rejected"?(o(),s("ul",ie,[(o(!0),s(d,null,_(t.currentAudition.rejectedAuditionees,(e,a)=>(o(),s("li",{class:"applicant__item",key:a,onClick:v=>c.handleClickProfileDetail(e)},[l(b,g(e,{index:a}),null,16,["index"])],8,ne))),128))])):h("",!0),t.subMenu==="pending"?(o(),s("ul",oe,[(o(!0),s(d,null,_(t.currentAudition.pendingAuditionees,(e,a)=>(o(),s("li",{class:"applicant__item",key:a,onClick:v=>c.handleClickProfileDetail(e)},[l(b,g(e,{index:a}),null,16,["index"])],8,se))),128))])):h("",!0)])])):h("",!0)]),_:1},8,["tab"]),l(y,{key:"closed",tab:`마감된 오디션 (${t.closedAuditions.length})`,"force-render":""},{default:u(()=>[r("ul",null,[(o(!0),s(d,null,_(t.closedAuditions,e=>(o(),s("li",{key:e.title,class:"closed-audition"}," - "+m(e.title),1))),128))])]),_:1},8,["tab"])]),_:1},8,["activeKey","onTabClick"]),l(T,{visible:t.isProfileDetailVisible,"onUpdate:visible":n[3]||(n[3]=e=>t.isProfileDetailVisible=e),title:"프로필 상세",width:"1200px",cancelText:"취소",okText:"확인"},{default:u(()=>[r("div",null,[l(M,{operationType:"manage",audition:t.currentAudition,onManageApplicant:c.handleManageApplicant,actor:t.actors[1]},null,8,["audition","onManageApplicant","actor"])])]),_:1},8,["visible"]),l(B,{class:"btn",to:"/production/audition/create"},{default:u(()=>[l(V,{type:"primary",size:"large"},{default:u(()=>[p("오디션 등록")]),_:1})]),_:1})])}const pe=S(E,[["render",le],["__scopeId","data-v-6b39c033"]]);export{pe as default};