/*! For license information please see 8723.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[8723],{8723:(t,a,i)=>{i.r(a),i.d(a,{calcite_flow:()=>r});var e=i(861),n=i(1338);const r=class{constructor(t){(0,e.r)(this,t),this.itemMutationObserver=(0,n.c)("mutation",(()=>this.updateFlowProps())),this.getFlowDirection=(t,a)=>t&&a>1||t>1?a<t?"retreating":"advancing":null,this.updateFlowProps=()=>{const{el:t,items:a}=this,i=Array.from(t.querySelectorAll("calcite-flow-item")).filter((a=>a.closest("calcite-flow")===t)),e=a.length,n=i.length,r=i[n-1],o=i[n-2];if(n&&r&&i.forEach((t=>{t.showBackButton=t===r&&n>1,t.hidden=t!==r})),o&&(o.menuOpen=!1),this.items=i,e!==n){const t=this.getFlowDirection(e,n);this.itemCount=n,this.flowDirection=t}},this.flowDirection=null,this.itemCount=0,this.items=[]}async back(){const{items:t}=this,a=t[t.length-1];if(a)return(a.beforeBack?a.beforeBack:()=>Promise.resolve()).call(a).then((()=>(a.remove(),a)))}connectedCallback(){this.itemMutationObserver?.observe(this.el,{childList:!0,subtree:!0}),this.updateFlowProps()}disconnectedCallback(){this.itemMutationObserver?.disconnect()}handleItemBackClick(){this.back()}render(){const{flowDirection:t}=this,a={frame:!0,"frame--advancing":"advancing"===t,"frame--retreating":"retreating"===t};return(0,e.h)("div",{class:a},(0,e.h)("slot",null))}get el(){return(0,e.a)(this)}};r.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}"},1338:(t,a,i)=>{function e(t,a,i){const e=function(t){class a extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,a){return this.observedEntry.push({target:t,options:a}),super.observe(t,a)}unobserve(t){const a=this.observedEntry.filter((a=>a.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),a.forEach((t=>this.observe(t.target,t.options)))}}return"intersection"===t?window.IntersectionObserver:"mutation"===t?a:window.ResizeObserver}(t);return new e(a,i)}i.d(a,{c:()=>e})}}]);