import{_ as g,ao as u,an as T,W as x,o as i,c as a,d as o,w as l,T as S,S as q,e as p,F as _,h,G as y,t as k,H as D}from"./index-dba802dc.js";import{a as I,_ as A,b as K}from"./actors-0bbf7574.js";/* empty css              */import"./context-8ed966f2.js";const U={name:"ProductionProfileInterest",data(){return{requests:[],actors:{},isProfileDetailVisible:!1,selectedActor:{},scrappedActors:[],openAuditions:[]}},watch:{"$route.query":{immediate:!0,handler(){this.activeKey=this.$route.query.type}},requests(){this.requests.forEach(e=>{this.actors[e.auditionTitle]||(this.actors[e.auditionTitle]=[]);const s=I.find(({email:m})=>m===e.actorEmail);this.actors[e.auditionTitle].push(s)})}},methods:{handleTabClick(e){this.$router.replace(`/production/profile/interest?type=${e}`)},handleClickActor(e){this.selectedActor=e,this.isProfileDetailVisible=!0},handleUnscrap(){this.scrappedActors=u()},handleScrap(){this.scrappedActors=u()}},mounted(){T({productionName:"(주)엑셀시오르콘텐츠랩"}).then(e=>{this.requests=e}),this.scrappedActors=u(),x({productionName:"(주)엑셀시오르콘텐츠랩"}).then(e=>{this.openAuditions=e.filter(({isClosed:s})=>!s)})},components:{ActorItem:A}},V={class:"profile-interest container"},w={class:"actor-scrap"},B=["onClick"],N=["onClick"];function E(e,s,m,F,n,r){const f=A,d=D,v=S,C=K,P=q;return i(),a("div",V,[o(v,{activeKey:e.activeKey,"onUpdate:activeKey":s[0]||(s[0]=t=>e.activeKey=t),size:"large",tabBarStyle:{"font-weight":"700"},onTabClick:r.handleTabClick},{default:l(()=>[o(d,{key:"scrap",tab:"스크랩"},{default:l(()=>[p("div",w,[p("ul",null,[(i(!0),a(_,null,h(n.scrappedActors,(t,c)=>(i(),a("li",{class:"applicant__item",key:c,onClick:()=>r.handleClickActor(t)},[o(f,y(t,{index:c}),null,16,["index"])],8,B))),128))])])]),_:1}),o(d,{key:"open",tab:"열람",disabled:"","force-render":""}),o(d,{key:"offer",tab:"보낸 제안"},{default:l(()=>[(i(!0),a(_,null,h(Object.keys(this.actors),t=>(i(),a("div",{class:"audition-request",key:t},[p("h1",null,k(t)+" ("+k(n.actors[t].length)+")",1),p("ul",null,[(i(!0),a(_,null,h(n.actors[t],(c,b)=>(i(),a("li",{class:"applicant__item",key:b,onClick:()=>r.handleClickActor(c)},[o(f,y(c,{index:b}),null,16,["index"])],8,N))),128))])]))),128))]),_:1})]),_:1},8,["activeKey","onTabClick"]),o(P,{visible:n.isProfileDetailVisible,"onUpdate:visible":s[1]||(s[1]=t=>n.isProfileDetailVisible=t),title:"프로필 상세",width:"1200px",cancelText:"취소",okText:"확인"},{default:l(()=>[o(C,{actor:n.selectedActor,operationType:"request",openAuditions:n.openAuditions,onUnscrap:r.handleUnscrap,onScrap:r.handleScrap},null,8,["actor","openAuditions","onUnscrap","onScrap"])]),_:1},8,["visible"])])}const L=g(U,[["render",E],["__scopeId","data-v-d1b7a786"]]);export{L as default};