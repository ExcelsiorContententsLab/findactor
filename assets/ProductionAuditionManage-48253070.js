import{_ as T,av as $,r as x,o as c,c as u,d as e,w as o,T as I,M as w,e as a,t as M,E as f,j as s,F as V,h as B,X as K,J as S,G as z,B as N,v as U,x as q}from"./index-ea4a12d1.js";import{_ as v,a as b}from"./ActorItem-86564b15.js";/* empty css              */import{_ as g}from"./AuditionItem-c37d5dc4.js";/* empty css              */import"./context-5cddb524.js";/* empty css              */const E={name:"production-audition-manage",data(){return{openedProductionList:[],subMenu:"a",isProfileDetailVisible:!1,selectedProfile:{}}},computed:{scrapList(){return this.$store.state.auditionList.filter(t=>t.isScrap)},myProductionList(){return this.$store.state.productionList.filter(t=>t.isLiked)},myOfferedProductionList(){return this.$store.state.productionList.filter(i=>i.auditionList.filter(d=>d.isOffered))}},watch:{"$route.query":{immediate:!0,handler(t){this.activeKey=this.$route.query.type}}},methods:{handleTabClick(t){this.$router.replace(`/production/audition/manage?type=${t}`)},handleClickProfileDetail(t){this.selectedProfile=t,this.isProfileDetailVisible=!0}},mounted(){},components:{AuditionItem:g,ActorItem:v,ActorProfile:$,ActorDetail:b}},F=t=>(U("data-v-9a00a4e9"),t=t(),q(),t),O={class:"production-audition-manage container"},R={class:"container__title"},j={class:"tab-panel"},G={style:{"margin-bottom":"20px"}},J=F(()=>a("div",{class:"container__title",style:{"margin-bottom":"20px"}}," 지원자 ",-1)),X={class:"tab-panel"},H={class:"applicant"},Q=["onClick"];function W(t,i,d,Y,l,_){const h=g,r=K,y=S,k=v,p=z,L=I,P=b,A=w,C=N,D=x("RouterLink");return c(),u("div",O,[e(L,{activeKey:t.activeKey,"onUpdate:activeKey":i[1]||(i[1]=n=>t.activeKey=n),size:"large",tabBarStyle:{"font-weight":"700"},onTabClick:_.handleTabClick},{default:o(()=>[e(p,{key:"ongoing",tab:"진행중인 오디션"},{default:o(()=>[a("div",R," 진행중인 오디션("+M(t.$store.state.production.detail.auditionList.length)+") ",1),a("div",j,[e(h,f(t.$store.state.production.detail.auditionList[0],{"only-view":!0,"no-border":!0}),null,16)]),a("div",G,[e(y,{value:l.subMenu,"onUpdate:value":i[0]||(i[0]=n=>l.subMenu=n),"button-style":"solid",size:"large"},{default:o(()=>[e(r,{value:"a"},{default:o(()=>[s("지원자 16")]),_:1}),e(r,{value:"b"},{default:o(()=>[s("프로필합격 6")]),_:1}),e(r,{value:"c"},{default:o(()=>[s("불합격 5")]),_:1}),e(r,{value:"d"},{default:o(()=>[s("보류 0")]),_:1}),e(r,{value:"e"},{default:o(()=>[s("미확인 5")]),_:1})]),_:1},8,["value"])]),J,a("div",X,[a("ul",H,[(c(!0),u(V,null,B(t.$store.state.production.findActorList,(n,m)=>(c(),u("li",{class:"applicant__item",key:m,onClick:Z=>_.handleClickProfileDetail(n)},[e(k,f(n,{index:m}),null,16,["index"])],8,Q))),128))])])]),_:1}),e(p,{key:"closed",tab:"마감된 오디션","force-render":""})]),_:1},8,["activeKey","onTabClick"]),e(A,{visible:l.isProfileDetailVisible,"onUpdate:visible":i[2]||(i[2]=n=>l.isProfileDetailVisible=n),title:"프로필 상세",width:"1200px",cancelText:"취소",okText:"확인"},{default:o(()=>[a("div",null,[e(P)])]),_:1},8,["visible"]),e(D,{class:"btn",to:"/production/audition/create"},{default:o(()=>[e(C,{type:"primary",size:"large"},{default:o(()=>[s("오디션 등록")]),_:1})]),_:1})])}const rt=T(E,[["render",W],["__scopeId","data-v-9a00a4e9"]]);export{rt as default};
