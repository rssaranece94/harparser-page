import{e as Be,f as ze,g as Qe,l as Le,m as $e,n as Ue,o as Ke,p as Xe}from"./chunk-MVMZM3OU.js";import{C as Ve,X as W,l as Ne,v as Re,x as qe}from"./chunk-2VBF5RN6.js";import{c as re,d as se,g as N,h as R,j as le}from"./chunk-U7NE56R3.js";import{$ as D,$b as ke,A as he,Aa as be,Ab as Ie,B as P,Bb as Y,Eb as A,Fa as te,Gb as h,H as ge,Hb as ae,Ib as C,Kb as oe,Lb as Ae,Mb as G,Nb as J,Ob as Me,Pb as Se,Rb as p,S as ee,Sa as l,Sb as g,Ta as c,Tb as j,Va as ye,Xb as M,Yb as S,Z as B,Zb as Te,_b as Pe,ca as z,cb as Ce,fb as we,g as V,ga as I,gb as ne,ha as Q,hb as b,ia as f,ic as H,kc as w,l as T,lb as v,lc as Fe,n as ue,na as L,oa as k,ob as ie,oc as Oe,pa as F,pb as u,qa as xe,qb as Ee,rb as O,sa as fe,sc as je,ta as _e,tb as De,ub as y,vb as U,wb as K,wc as He,xa as $,xb as X,ya as ve,yb as s,za as _,zb as r}from"./chunk-OJ263Y7A.js";var dt=0,de=new D("CdkAccordion"),Ge=(()=>{let t=class t{constructor(){this._stateChanges=new T,this._openCloseAllActions=new T,this.id=`cdk-accordion-${dt++}`,this.multi=!1}openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}};t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=f({type:t,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",w]},exportAs:["cdkAccordion"],standalone:!0,features:[M([{provide:de,useExisting:t}]),b,L]});let i=t;return i})(),pt=0,Je=(()=>{let t=class t{get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let n=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,n)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}constructor(e,n,o){this.accordion=e,this._changeDetectorRef=n,this._expansionDispatcher=o,this._openCloseAllSubscription=V.EMPTY,this.closed=new _,this.opened=new _,this.destroyed=new _,this.expandedChange=new _,this.id=`cdk-accordion-child-${pt++}`,this._expanded=!1,this.disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=o.listen((d,m)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===m&&this.id!==d&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}};t.\u0275fac=function(n){return new(n||t)(c(de,12),c(H),c(W))},t.\u0275dir=f({type:t,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",w],disabled:[2,"disabled","disabled",w]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],standalone:!0,features:[M([{provide:de,useValue:void 0}]),b]});let i=t;return i})(),We=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=Q({type:t}),t.\u0275inj=B({});let i=t;return i})();var ut=["body"],ht=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],gt=["mat-expansion-panel-header","*","mat-action-row"];function xt(i,t){}var ft=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],_t=["mat-panel-title","mat-panel-description","*"];function vt(i,t){if(i&1&&(s(0,"span",1),xe(),s(1,"svg",2),Ie(2,"path",3),r()()),i&2){let a=h();u("@indicatorRotate",a._getExpandedState())}}var pe=new D("MAT_ACCORDION"),Ze="225ms cubic-bezier(0.4,0.0,0.2,1)",tt={indicatorRotate:re("indicatorRotate",[R("collapsed, void",N({transform:"rotate(0deg)"})),R("expanded",N({transform:"rotate(180deg)"})),le("expanded <=> collapsed, void => collapsed",se(Ze))]),bodyExpansion:re("bodyExpansion",[R("collapsed, void",N({height:"0px",visibility:"hidden"})),R("expanded",N({height:"*",visibility:""})),le("expanded <=> collapsed, void => collapsed",se(Ze))])},nt=new D("MAT_EXPANSION_PANEL"),bt=(()=>{let t=class t{constructor(e,n){this._template=e,this._expansionPanel=n}};t.\u0275fac=function(n){return new(n||t)(c(ye),c(nt,8))},t.\u0275dir=f({type:t,selectors:[["ng-template","matExpansionPanelContent",""]],standalone:!0});let i=t;return i})(),yt=0,it=new D("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),ce=(()=>{let t=class t extends Je{get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}constructor(e,n,o,d,m,x,q){super(e,n,o),this._viewContainerRef=d,this._animationMode=x,this._hideToggle=!1,this.afterExpand=new _,this.afterCollapse=new _,this._inputChanges=new T,this._headerId=`mat-expansion-panel-header-${yt++}`,this.accordion=e,this._document=m,this._animationsDisabled=x==="NoopAnimations",q&&(this.hideToggle=q.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(ee(null),P(()=>this.expanded&&!this._portal),ge(1)).subscribe(()=>{this._portal=new Be(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,n=this._body.nativeElement;return e===n||n.contains(e)}return!1}_animationStarted(e){!et(e)&&!this._animationsDisabled&&this._body&&this._body?.nativeElement.setAttribute("inert","")}_animationDone(e){et(e)||(e.toState==="expanded"?this.afterExpand.emit():e.toState==="collapsed"&&this.afterCollapse.emit(),!this._animationsDisabled&&this._body&&this._body.nativeElement.removeAttribute("inert"))}};t.\u0275fac=function(n){return new(n||t)(c(pe,12),c(H),c(W),c(Ce),c(je),c(te,8),c(it,8))},t.\u0275cmp=I({type:t,selectors:[["mat-expansion-panel"]],contentQueries:function(n,o,d){if(n&1&&oe(d,bt,5),n&2){let m;G(m=J())&&(o._lazyContent=m.first)}},viewQuery:function(n,o){if(n&1&&Ae(ut,5),n&2){let d;G(d=J())&&(o._body=d.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(n,o){n&2&&O("mat-expanded",o.expanded)("_mat-animation-noopable",o._animationsDisabled)("mat-expansion-panel-spacing",o._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",w],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],standalone:!0,features:[M([{provide:pe,useValue:void 0},{provide:nt,useExisting:t}]),b,ne,L,S],ngContentSelectors:gt,decls:7,vars:4,consts:[["body",""],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(n,o){if(n&1){let d=Y();ae(ht),C(0),s(1,"div",1,0),A("@bodyExpansion.start",function(x){return k(d),F(o._animationStarted(x))})("@bodyExpansion.done",function(x){return k(d),F(o._animationDone(x))}),s(3,"div",2),C(4,1),v(5,xt,0,0,"ng-template",3),r(),C(6,2),r()}n&2&&(l(),u("@bodyExpansion",o._getExpandedState())("id",o.id),ie("aria-labelledby",o._headerId),l(4),u("cdkPortalOutlet",o._portal))},dependencies:[ze],styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative;background:var(--mat-expansion-container-background-color);color:var(--mat-expansion-container-text-color);border-radius:var(--mat-expansion-container-shape)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape);border-top-left-radius:var(--mat-expansion-container-shape)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape);border-bottom-left-radius:var(--mat-expansion-container-shape)}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;font-family:var(--mat-expansion-container-text-font);font-size:var(--mat-expansion-container-text-size);font-weight:var(--mat-expansion-container-text-weight);line-height:var(--mat-expansion-container-text-line-height);letter-spacing:var(--mat-expansion-container-text-tracking)}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color)}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2,data:{animation:[tt.bodyExpansion]},changeDetection:0});let i=t;return i})();function et(i){return i.fromState==="void"}var me=(()=>{let t=class t{constructor(e,n,o,d,m,x,q){this.panel=e,this._element=n,this._focusMonitor=o,this._changeDetectorRef=d,this._animationMode=x,this._parentChangeSubscription=V.EMPTY,this.tabIndex=0;let st=e.accordion?e.accordion._stateChanges.pipe(P(E=>!!(E.hideToggle||E.togglePosition))):ue;this.tabIndex=parseInt(q||"")||0,this._parentChangeSubscription=he(e.opened,e.closed,st,e._inputChanges.pipe(P(E=>!!(E.hideToggle||E.disabled||E.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(P(()=>e._containsFocus())).subscribe(()=>o.focusVia(n,"program")),m&&(this.expandedHeight=m.expandedHeight,this.collapsedHeight=m.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Ne(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,n){e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}};t.\u0275fac=function(n){return new(n||t)(c(ce,1),c(ve),c(qe),c(H),c(it,8),c(te,8),_e("tabindex"))},t.\u0275cmp=I({type:t,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(n,o){n&1&&A("click",function(){return o._toggle()})("keydown",function(m){return o._keydown(m)}),n&2&&(ie("id",o.panel._headerId)("tabindex",o.disabled?-1:o.tabIndex)("aria-controls",o._getPanelId())("aria-expanded",o._isExpanded())("aria-disabled",o.panel.disabled),Ee("height",o._getHeaderHeight()),O("mat-expanded",o._isExpanded())("mat-expansion-toggle-indicator-after",o._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",o._getTogglePosition()==="before")("_mat-animation-noopable",o._animationMode==="NoopAnimations"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Fe(e)]},standalone:!0,features:[b,S],ngContentSelectors:_t,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(n,o){n&1&&(ae(ft),s(0,"span",0),C(1),C(2,1),C(3,2),r(),v(4,vt,3,1,"span",1)),n&2&&(O("mat-content-hide-toggle",!o._showToggle()),l(4),y(o._showToggle()?4:-1))},styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-expansion-header-collapsed-state-height);font-family:var(--mat-expansion-header-text-font);font-size:var(--mat-expansion-header-text-size);font-weight:var(--mat-expansion-header-text-weight);line-height:var(--mat-expansion-header-text-line-height);letter-spacing:var(--mat-expansion-header-text-tracking)}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color)}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color)}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color)}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color)}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color);display:inline-block;display:var(--mat-expansion-legacy-header-indicator-display, inline-block)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color);display:none;display:var(--mat-expansion-header-indicator-display, none)}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}'],encapsulation:2,data:{animation:[tt.indicatorRotate]},changeDetection:0});let i=t;return i})(),at=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=f({type:t,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"],standalone:!0});let i=t;return i})(),ot=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=f({type:t,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"],standalone:!0});let i=t;return i})(),Z=(()=>{let t=class t extends Ge{constructor(){super(...arguments),this._ownHeaders=new be,this.hideToggle=!1,this.displayMode="default",this.togglePosition="after"}ngAfterContentInit(){this._headers.changes.pipe(ee(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(n=>n.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new Re(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}};t.\u0275fac=(()=>{let e;return function(o){return(e||(e=fe(t)))(o||t)}})(),t.\u0275dir=f({type:t,selectors:[["mat-accordion"]],contentQueries:function(n,o,d){if(n&1&&oe(d,me,5),n&2){let m;G(m=J())&&(o._headers=m)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(n,o){n&2&&O("mat-accordion-multi",o.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",w],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],standalone:!0,features:[M([{provide:pe,useExisting:t}]),b,ne]});let i=t;return i})(),rt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=Q({type:t}),t.\u0275inj=B({imports:[Ve,We,Qe]});let i=t;return i})();var wt=()=>({});function Et(i,t){if(i&1&&(s(0,"div",11),p(1),r(),s(2,"div",12),p(3),r()),i&2){let a=t.$implicit;u("title",a.name),l(),g(a.name),l(),u("title",a.value),l(),g(a.value)}}function Dt(i,t){if(i&1&&(s(0,"pre",13),p(1),Pe(2,"json"),r()),i&2){let a,e=h(2).$implicit,n=h();l(),g(ke(2,1,n.jsonStringify((a=e==null||e.request==null||e.request.postData==null?null:e.request.postData.params)!==null&&a!==void 0?a:Te(3,wt))))}}function It(i,t){if(i&1&&(s(0,"pre",13),p(1),r()),i&2){let a=h(2).$implicit;l(),g(a==null||a.request==null||a.request.postData==null?null:a.request.postData.text)}}function At(i,t){if(i&1&&(s(0,"h5"),p(1,"Data"),r(),s(2,"div"),v(3,Dt,3,4,"pre",13)(4,It,2,1,"pre",13),r()),i&2){let a=h().$implicit;l(3),y(!(a==null||a.request==null||a.request.postData==null)&&a.request.postData.params?3:4)}}function Mt(i,t){if(i&1&&(s(0,"div",11),p(1),r(),s(2,"div",12),p(3),r()),i&2){let a=t.$implicit;u("title",a.name),l(),g(a.name),l(),u("title",a.value),l(),g(a.value)}}function St(i,t){if(i&1&&(s(0,"h5"),p(1,"Data"),r(),s(2,"div")(3,"pre",13),p(4),r()()),i&2){let a=h(2).$implicit,e=h();l(4),g(e.jsonStringify(a==null||a.response==null||a.response.content==null?null:a.response.content.text))}}function Tt(i,t){if(i&1&&v(0,St,5,1),i&2){let a=h().$implicit;y(!(a==null||a.response==null)&&a.response.content.size?0:-1)}}function Pt(i,t){if(i&1){let a=Y();s(0,"h5"),p(1,"Data"),r(),s(2,"p")(3,"a",14),A("click",function(){k(a);let n=h().$implicit,o=h();return F(o.showData(n==null||n.response==null||n.response.content==null?null:n.response.content.text))}),p(4,"View Data"),r()()}}function kt(i,t){if(i&1&&(s(0,"mat-expansion-panel")(1,"mat-expansion-panel-header")(2,"mat-panel-title",1)(3,"div",2)(4,"div",3),p(5),r(),s(6,"div",4),p(7),r(),s(8,"div",5),p(9),r()()(),s(10,"mat-panel-description",2)(11,"div",6),p(12),r()()(),s(13,"div",7)(14,"div",8)(15,"h4"),p(16,"Request"),r(),s(17,"h5"),p(18,"Headers"),r(),s(19,"div",9),K(20,Et,4,4,null,null,U),r(),v(22,At,5,1),r(),s(23,"div",10)(24,"h4"),p(25,"Response"),r(),s(26,"h5"),p(27,"Headers"),r(),s(28,"div",9),K(29,Mt,4,4,null,null,U),r(),v(31,Tt,1,1)(32,Pt,5,0),r()()()),i&2){let a=t.$implicit,e=h();l(4),De("status ",e.getCodeBasedColor(a==null||a.response==null?null:a.response.status),""),u("title",a==null||a.response==null?null:a.response.status),l(),j(" ",a==null||a.response==null?null:a.response.status," "),l(),u("title",a==null||a.request==null?null:a.request.method),l(),j(" ",a==null||a.request==null?null:a.request.method," "),l(),u("title",a==null||a.request==null?null:a.request.url),l(),j(" ",a==null||a.request==null?null:a.request.url," "),l(2),u("title",a==null?null:a.time),l(),j(" ",e.getTime(a==null?null:a.time)," "),l(8),X(a==null||a.request==null?null:a.request.headers),l(2),y(e.responseData()&&a._resourceType==="fetch"&&(!(a==null||a.request==null||a.request.postData==null)&&a.request.postData.text)?22:-1),l(7),X(a==null||a.response==null?null:a.response.headers),l(2),y(e.responseData()&&a._resourceType==="fetch"?31:e.responseData()&&a._resourceType!=="fetch"?32:-1)}}var En=(()=>{let t=class t{constructor(){this.responseData=$(!1),this.showDetails=$(!1),this.items=$([]),this.accordion=we.required(Z),this.customOverlay=z(Ue),Oe(()=>{this.showDetails()?this.accordion().openAll():this.accordion().closeAll()})}showData(e){this.customOverlay.open({component:Ft,data:{text:e},position:"center",options:{hasBackdrop:!0,panelClass:["popup"]}})}getString(e){return JSON.stringify(e,null,2)}getCodeBasedColor(e){if(typeof e=="number"){if(e===0)return"red";if(e>=100&&e<200)return"purple";if(e>=200&&e<300)return"green";if(e>=300&&e<400)return"lite-orange";if(e>=400&&e<500)return"orange";if(e>=500)return"red"}return"blue"}getTime(e=0){let n=Math.round(e*100)/100,o=n;if(n>6e4){let d=n/1e3/60%60;return Math.round(d*100)/100+" m"}else if(n>1e3){let d=n/1e3%60;return Math.round(d*100)/100+" s"}return o+" ms"}jsonStringify(e){return JSON.stringify(e,null,2)}getContentType(e,n){return e?.find(o=>o.name===n)?.value??""}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=I({type:t,selectors:[["app-record"]],viewQuery:function(n,o){n&1&&Me(o.accordion,Z,5),n&2&&Se()},inputs:{responseData:[1,"responseData"],showDetails:[1,"showDetails"],items:[1,"items"]},standalone:!0,features:[S],decls:3,vars:0,consts:[["multi",""],[1,"header"],[1,"head-grp"],[3,"title"],[1,"method",3,"title"],[1,"url",3,"title"],[1,"time",3,"title"],[1,"sub-header"],[1,"req-head"],[1,"sub-item"],[1,"res-head"],[1,"name",3,"title"],[1,"val",3,"title"],[1,"data-box"],[3,"click"]],template:function(n,o){n&1&&(s(0,"mat-accordion",0),K(1,kt,33,13,"mat-expansion-panel",null,U),r()),n&2&&(l(),X(o.items()))},dependencies:[Z,rt,ce,me,ot,at,He]});let i=t;return i})(),Ft=(()=>{let t=class t{constructor(){this.data=z($e),this.overlayRef=z(Le)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=I({type:t,selectors:[["app-response"]],standalone:!0,features:[S],decls:4,vars:1,consts:[[3,"click"],[1,"data-box"]],template:function(n,o){if(n&1&&(s(0,"mat-icon",0),A("click",function(){return o.overlayRef==null?null:o.overlayRef.close()}),p(1,"close"),r(),s(2,"pre",1),p(3),r()),n&2){let d;l(3),g((d=o.data==null?null:o.data.text)!==null&&d!==void 0?d:"")}},dependencies:[Xe,Ke],styles:["[_nghost-%COMP%]{width:100%;position:relative}.mat-icon[_ngcontent-%COMP%]{position:absolute;right:20px;top:10px;z-index:1;cursor:pointer}"]});let i=t;return i})();export{Ft as ContentViewComponent,En as RecordComponent};
