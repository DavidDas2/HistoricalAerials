System.register(["jimu-core","jimu-for-builder","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/basic/list-tree","jimu-arcgis","jimu-core/react"],(function(e,t){var i={},a={},n={},s={},o={},l={},r={};return{setters:[function(e){i.Immutable=e.Immutable,i.React=e.React,i.classNames=e.classNames,i.css=e.css,i.defaultMessages=e.defaultMessages,i.hooks=e.hooks,i.jsx=e.jsx,i.moduleLoader=e.moduleLoader,i.polished=e.polished,i.urlUtils=e.urlUtils},function(e){a.builderAppSync=e.builderAppSync},function(e){n.Button=e.Button,n.Icon=e.Icon,n.Label=e.Label,n.Link=e.Link,n.NumericInput=e.NumericInput,n.Radio=e.Radio,n.Select=e.Select,n.Switch=e.Switch,n.Tooltip=e.Tooltip,n.defaultMessages=e.defaultMessages},function(e){s.MapWidgetSelector=e.MapWidgetSelector,s.SettingRow=e.SettingRow,s.SettingSection=e.SettingSection,s.SidePopper=e.SidePopper},function(e){o.List=e.List,o.TreeItemActionType=e.TreeItemActionType},function(e){l.JimuMapViewComponent=e.JimuMapViewComponent,l.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules},function(e){r.Fragment=e.Fragment}],execute:function(){e((()=>{var e={748:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 6.5c0 .527-.074 1.036-.212 1.518l.912.438a6.5 6.5 0 1 0-6.586 4.533l-.077-1.008A5.5 5.5 0 1 1 12 6.5Zm-9 0a3.501 3.501 0 0 0 2.88 3.445L5.8 8.901a2.501 2.501 0 1 1 3.194-2.224l.949.456A3.5 3.5 0 1 0 3 6.5ZM15.5 11l-5 1-3 4-1-9.5 9 4.5Zm-5.57.094-1.702 2.269-.542-5.152 4.76 2.38-2.517.503Z" clip-rule="evenodd"></path></svg>'},55339:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746L8.746 8Z"></path></svg>'},88866:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5Z"></path><path fill="#000" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z" clip-rule="evenodd"></path></svg>'},79964:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 2.125 14.334 14H1.667L8 2.125Zm-.882-.47a1 1 0 0 1 1.765 0l6.333 11.874A1 1 0 0 1 14.334 15H1.667a1 1 0 0 1-.882-1.47L7.118 1.653ZM8 4.874a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0L8.9 5.87a.905.905 0 0 0-.9-.995Zm1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clip-rule="evenodd"></path></svg>'},55182:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4IiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgMTA4IDcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHJlY3QgeD0iOCIgeT0iMjYiIHdpZHRoPSI5MiIgaGVpZ2h0PSIyMCIgZmlsbD0iIzI4MjgyOCIvPg0KPHJlY3QgeD0iMTIiIHk9IjMwIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSI2IiBmaWxsPSIjNkE2QTZBIi8+DQo8cmVjdCB4PSIzMyIgeT0iMzMiIHdpZHRoPSI0MiIgaGVpZ2h0PSI2IiBmaWxsPSIjNkE2QTZBIi8+DQo8cmVjdCB4PSI3OSIgeT0iMzAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEyIiBmaWxsPSIjNDQ0NDQ0Ii8+DQo8cmVjdCB4PSIyOCIgeT0iMzAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEyIiBmaWxsPSIjNDQ0NDQ0Ii8+DQo8cmVjdCB4PSI4NCIgeT0iMzAiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjYiIGZpbGw9IiM2QTZBNkEiLz4NCjwvc3ZnPg0K"},82649:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4IiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgMTA4IDcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHJlY3QgeD0iOCIgeT0iOCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjU2IiBmaWxsPSIjMjgyODI4Ii8+DQo8cmVjdCB4PSIxMyIgeT0iNDIiIHdpZHRoPSI4MSIgaGVpZ2h0PSIxIiBmaWxsPSIjNDQ0NDQ0Ii8+DQo8cmVjdCB4PSIyOSIgeT0iNTIiIHdpZHRoPSIxOCIgaGVpZ2h0PSIzIiBmaWxsPSIjNkE2QTZBIi8+DQo8cmVjdCB4PSIxMyIgeT0iNDgiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjYiIGZpbGw9IiM2QTZBNkEiLz4NCjxyZWN0IHg9IjEzIiB5PSIxNiIgd2lkdGg9IjYxIiBoZWlnaHQ9IjQiIGZpbGw9IiM2QTZBNkEiLz4NCjxyZWN0IHg9IjEzIiB5PSIyOCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQiIGZpbGw9IiM2QTZBNkEiLz4NCjxyZWN0IHg9IjgyIiB5PSI0OCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiByeD0iNiIgZmlsbD0iIzZBNkE2QSIvPg0KPC9zdmc+DQo="},26826:e=>{"use strict";e.exports=l},48891:e=>{"use strict";e.exports=i},51315:e=>{"use strict";e.exports=r},23137:e=>{"use strict";e.exports=a},30726:e=>{"use strict";e.exports=n},77756:e=>{"use strict";e.exports=s},59587:e=>{"use strict";e.exports=o}},t={};function c(i){var a=t[i];if(void 0!==a)return a.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,c),n.exports}c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var i in t)c.o(t,i)&&!c.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="";var d={};return c.p=window.jimuConfig.baseUrl,(()=>{"use strict";c.r(d),c.d(d,{__set_webpack_public_path__:()=>L,default:()=>P});var e,t,i,a=c(48891),n=c(23137),s=c(30726),o=c(77756);!function(e){e.xy="XY",e.yx="YX"}(e||(e={})),function(e){e.classic="CLASSIC",e.modern="MODERN"}(t||(t={})),function(e){e.metric="METRIC",e.imperial="IMPERIAL"}(i||(i={}));const l={selectMapWidget:"Select a Map widget",classic:"Classic",modern:"Modern",outputCoorSystem:"Output coordinate system",outputCoordinate:"Output coordinate system well-known ID ({wkid})",outputCoordinateHint:"Geographic coordinate systems and Projected coordinate systems are supported.",newCoordinate:"New coordinate system",configureCoordinate:"Configure coordinate system",displayOptions:"Display options",coordinateDecimal:"Number of decimal places for coordinates",altitudeDecimal:"Number of decimal places for altitude (3D)",showSeparators:"Show thousand separators",displayOrder:"Display order",loLaMode:"Longitude/Latitude (X, Y)",laLoMode:"Latitude/Longitude (Y, X)",datumTransformation:"Datum transformation ID ({wkid})",datumTransformationHint:"Geographic datum transformations are supported.",displayUnits:"Display units",elevationUnit:"Elevation unit (3D)",elevationHint:"Specify the unit for elevations for 3D scenes if available.",elevMeter:"Metric",elevMile:"Imperial",invalidWkidTips:"Please enter a valid coordinate system WKID.",invalidDatumWkidTips:"Please enter a valid datum transformation ID.",selectMapTips:"Select a map for further configurations."};var r=c(59587),m=c(55339),u=c.n(m),p=c(88866),g=c.n(p);const I=e=>{const t=window.SVG,{className:i}=e,n=function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(i[a[n]]=e[a[n]])}return i}(e,["className"]),s=(0,a.classNames)("jimu-icon jimu-icon-component",i);return t?a.React.createElement(t,Object.assign({className:s,src:g()},n)):a.React.createElement("svg",Object.assign({className:s},n))};var v=c(26826),x=c(79964),j=c.n(x);const y=e=>{const t=window.SVG,{className:i}=e,n=function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(i[a[n]]=e[a[n]])}return i}(e,["className"]),s=(0,a.classNames)("jimu-icon jimu-icon-component",i);return t?a.React.createElement(t,Object.assign({className:s,src:j()},n)):a.React.createElement("svg",Object.assign({className:s},n))};var S=c(51315);function f(e){return a.css`
    .system-config-panel {
      .wkid-link {
        cursor: pointer;
        color: ${e.colors.palette.primary[700]};
        padding: 3px 2px;
        font-size: ${a.polished.rem(12)};
        text-decoration: none;
        &:hover {
          color: ${e.colors.palette.primary[800]};
        }
      }
      .system-name {
        font-style: italic;
        font-size: 12px;
        color: ${e.colors.palette.dark[500]};
        margin-top: 5px;
        .invalid-tips {
          width: calc(100% - 20px);
          margin: 0 4px;
          color: ${e.colors.danger}
        }
      }
      .tip-text {
        margin: 8px 0;
      }
    }
  `}function w(e){return a.css`
    .empty-placeholder {
      display: flex;
      flex-flow: column;
      justify-content: center;
      height: calc(100% - 255px);
      overflow: hidden;
      .empty-placeholder-inner {
        padding: 0px 20px;
        flex-direction: column;
        align-items: center;
        display: flex;
        .empty-placeholder-text {
          color: ${e.colors.palette.dark[500]};
          font-size: ${a.polished.rem(14)};
          margin-top: 16px;
          text-align: center;
        }
        .empty-placeholder-icon {
          color: ${e.colors.palette.dark[200]};
        }
      }
    }
    .arrange-style-container {
      .arrange_container {
        margin-top: 10px;
        display: flex;
        .jimu-btn {
          padding: 0;
          background: ${e.colors.palette.light[200]};
          &.active {
            border: 2px solid ${e.colors.palette.primary[600]};
          }
        }
      }
    }
  `}const{useState:b,useEffect:N,useRef:h}=a.React,M=e=>{const{id:t,name:n,wkid:r,displayUnit:c,elevationUnit:d,datumWkid:m,datumName:u,datumWkid2:p,datumName2:g,mapInfo:x,mapInfo2:j,mapView:w,theme:M,wkidUtils:k,multiOptionsChange:T,onWkidChangeSave:C}=e,[D,O]=b(!1),[E,R]=b(!1),[P,L]=b(!1),[W,B]=b(r),[A,Z]=b(m),[H,G]=b(p),[Q,U]=b(!1),[V,z]=b(!1),[_,K]=b(!1),F=a.hooks.useTranslation(l,s.defaultMessages),J=F("outputCoordinateHint"),Y=F("datumTransformationHint"),$=F("displayUnits"),X=F("elevationUnit"),q=F("elevationHint"),ee=F("invalidWkidTips"),te=F("invalidDatumWkidTips"),ie=F("elevMeter"),ae=F("elevMile"),ne=F("default"),se=F("unitsInches"),oe=F("unitsLabelFeet"),le=F("unitsFoot_US"),re=F("unitsLabelYards"),ce=F("unitsLabelMiles"),de=F("unitsLabelNauticalMiles"),me=F("unitsMillimeters"),ue=F("unitsCentimeters"),pe=F("unitsLabelMeters"),ge=F("unitsLabelKilometers"),Ie=F("unitsDecimeters"),ve=F("unitsDecimalDegrees"),xe=F("unitsDegreesDecimalMinutes"),je=F("unitsDegreeMinutesSeconds"),ye=F("unitsMgrs"),Se=F("unitsUsng"),fe=h(null);N((()=>{D||(0,v.loadArcGISJSAPIModules)(["esri/geometry/SpatialReference"]).then((e=>{[fe.current]=e,O(!0)}))}),[]),N((()=>{B(r),Z(m),G(p),D&&we(r)}),[D,r,m,x,j]);const we=e=>{const t=null==x?void 0:x.wkid,i=null==j?void 0:j.wkid,a=fe.current,{isSameSpheroid:n}=k;if(e){const s=new a({wkid:e});if(t&&!i)n(s,new a({wkid:t}))?R(!1):R(!0);else if(t&&i){const e=new a({wkid:t}),o=new a({wkid:i}),l=n(e,o),r=n(e,s),c=n(o,s);l?r?(R(!1),L(!1)):(R(!0),L(!1)):!r&&c?(R(!0),L(!1)):!c&&r?(R(!1),L(!0)):(R(!0),L(!0))}}},be=(0,a.jsx)(s.Link,{className:"wkid-link jimu-outline-inside",icon:!0,to:"https://developers.arcgis.com/rest/services-reference/enterprise/using-spatial-references.htm",target:"_blank",title:"WKID","aria-label":"WKID"},"WKID"),Ne=(0,a.jsx)("div",{className:"w-100"},(0,a.jsx)("div",{className:"p-1 d-flex justify-content-between"},(0,a.jsx)("div",{className:"tip-text"},F("outputCoordinate",{wkid:be})),(0,a.jsx)(s.Tooltip,{title:J,showArrow:!0,placement:"left"},(0,a.jsx)(s.Button,{icon:!0,type:"tertiary",className:"d-inline jimu-outline-inside"},(0,a.jsx)(I,null))))),he=(0,a.jsx)("div",{className:"w-100"},(0,a.jsx)("div",{className:"p-1 d-flex justify-content-between"},(0,a.jsx)("div",{className:"tip-text"},X),(0,a.jsx)(s.Tooltip,{title:q,showArrow:!0,placement:"left"},(0,a.jsx)(s.Button,{icon:!0,type:"tertiary",className:"d-inline jimu-outline-inside"},(0,a.jsx)(I,null))))),Me=(0,a.jsx)("div",{className:"w-100"},(0,a.jsx)("div",{className:"p-1 d-flex justify-content-between"},(0,a.jsx)("div",{className:"tip-text"},F("datumTransformation",{wkid:be})),(0,a.jsx)(s.Tooltip,{title:Y,showArrow:!0,placement:"left"},(0,a.jsx)(s.Button,{icon:!0,type:"tertiary",className:"d-inline jimu-outline-inside"},(0,a.jsx)(I,null)))));return(0,a.jsx)("div",{className:"w-100 h-100",css:f(M)},(0,a.jsx)("div",{className:"w-100 h-100 system-config-panel"},(0,a.jsx)(o.SettingSection,{className:"pt-0"},(0,a.jsx)(o.SettingRow,{flow:"wrap",label:Ne,truncateLabel:!1},(0,a.jsx)(s.NumericInput,{size:"sm",className:"w-100",value:W,precision:0,min:0,onChange:e=>{const t=e.target.value;B(t)},onAcceptValue:e=>{if(!Q&&r===e)return;const{wkidLookup:i,isValidWkid:a}=k,n=""===e?r:e,s=a(n),o=i(n),l=null==o?void 0:o.name;t?s?(U(!1),we(n),B(n),T({wkid:n,name:l,crs:o,displayUnit:"",datumWkid:"",datumName:"",datumWkid2:"",datumName2:""})):U(!0):s?(U(!1),C(n,o)):U(!0)},showHandlers:!1,"aria-describedby":"output-system-name","aria-label":F("outputCoordinate",{wkid:"WKID"})})),(0,a.jsx)("div",{id:"output-system-name",className:"text-break system-name d-flex align-items-center"},Q?(0,a.jsx)(S.Fragment,null,(0,a.jsx)(y,{color:M.colors.danger}),(0,a.jsx)("div",{className:"invalid-tips"},ee)):n)),(0,a.jsx)(o.SettingSection,null,(0,a.jsx)(o.SettingRow,{flow:"wrap",label:$},(0,a.jsx)(s.Select,{size:"sm",value:c,onChange:e=>{const t=e.target.value;c!==t&&T({displayUnit:t})},"aria-label":$},(()=>{var e,t;const i=[(0,a.jsx)("option",{key:"Default",value:""},ne),(0,a.jsx)("option",{key:"INCHES",value:"INCHES"},se),(0,a.jsx)("option",{key:"FOOT",value:"FOOT"},oe),(0,a.jsx)("option",{key:"FOOT_US",value:"FOOT_US"},le),(0,a.jsx)("option",{key:"YARDS",value:"YARDS"},re),(0,a.jsx)("option",{key:"MILES",value:"MILES"},ce),(0,a.jsx)("option",{key:"NAUTICAL_MILES",value:"NAUTICAL_MILES"},de),(0,a.jsx)("option",{key:"MILLIMETERS",value:"MILLIMETERS"},me),(0,a.jsx)("option",{key:"CENTIMETERS",value:"CENTIMETERS"},ue),(0,a.jsx)("option",{key:"METER",value:"METER"},pe),(0,a.jsx)("option",{key:"KILOMETERS",value:"KILOMETERS"},ge),(0,a.jsx)("option",{key:"DECIMETERS",value:"DECIMETERS"},Ie),(0,a.jsx)("option",{key:"DECIMAL_DEGREES",value:"DECIMAL_DEGREES"},ve),(0,a.jsx)("option",{key:"DEGREES_DECIMAL_MINUTES",value:"DEGREES_DECIMAL_MINUTES"},xe),(0,a.jsx)("option",{key:"DEGREE_MINUTE_SECONDS",value:"DEGREE_MINUTE_SECONDS"},je),(0,a.jsx)("option",{key:"MGRS",value:"MGRS"},ye),(0,a.jsx)("option",{key:"USNG",value:"USNG"},Se)],n=[(0,a.jsx)("option",{key:"Default",value:""},ne)].concat(i.slice(12)),s=i.slice(0,12),o=parseInt(W),l=fe.current;if(!l)return i;const r=new l({wkid:o});return o===(null===(t=null===(e=null==w?void 0:w.view)||void 0===e?void 0:e.spatialReference)||void 0===t?void 0:t.wkid)?r.isWebMercator?i:4326===o||r.isGeographic?n:s:r.isGeographic?n:i})())),(0,a.jsx)(o.SettingRow,{flow:"wrap",label:he,truncateLabel:!1},(0,a.jsx)("div",{role:"radiogroup",className:"mb-3","aria-label":X},(0,a.jsx)(s.Label,{className:"d-flex align-items-center"},(0,a.jsx)(s.Radio,{style:{cursor:"pointer"},name:"displayOrderType",className:"mr-2",checked:d===i.metric,onChange:()=>{T({elevationUnit:i.metric})}}),ie),(0,a.jsx)(s.Label,{className:"d-flex align-items-center"},(0,a.jsx)(s.Radio,{style:{cursor:"pointer"},name:"displayOrderType",className:"mr-2",checked:d===i.imperial,onChange:()=>{T({elevationUnit:i.imperial})}}),ae)))),(E||P)&&(0,a.jsx)(o.SettingSection,null,(0,a.jsx)(o.SettingRow,{flow:"wrap",label:Me,truncateLabel:!1}),E&&(0,a.jsx)(S.Fragment,null,(0,a.jsx)(o.SettingRow,{flow:"wrap",className:"mt-3"},E&&P&&(0,a.jsx)("div",null,null==x?void 0:x.title),(0,a.jsx)(s.NumericInput,{size:"sm",className:"w-100",value:A,precision:0,min:0,onChange:e=>{Z(e.target.value)},onAcceptValue:e=>{if(m===e)return;const t=e,{isValidDatumWkid:i,getDatumSRLabel:a}=k;if(i(t)){z(!1);const e=a(t);T({datumWkid:t,datumName:e})}else z(!0),T({datumWkid:"",datumName:""})},showHandlers:!1,"aria-describedby":"datum-transformation-1","aria-label":F("datumTransformation",{wkid:"WKID"})})),(0,a.jsx)("div",{id:"datum-transformation-1",className:"text-break system-name d-flex align-items-center"},V?(0,a.jsx)(S.Fragment,null,(0,a.jsx)(y,{color:M.colors.danger}),(0,a.jsx)("div",{className:"invalid-tips"},te)):u)),P&&(0,a.jsx)(S.Fragment,null,(0,a.jsx)(o.SettingRow,{flow:"wrap",className:"mt-3"},E&&P&&(0,a.jsx)("div",null,null==j?void 0:j.title),(0,a.jsx)(s.NumericInput,{size:"sm",className:"w-100",value:H,precision:0,min:0,onChange:e=>{G(e.target.value)},onAcceptValue:e=>{if(m===e)return;const t=e,{isValidDatumWkid:i,getDatumSRLabel:a}=k;if(i(t)){K(!1);const e=a(t);T({datumWkid2:t,datumName2:e})}else K(!0),T({datumWkid2:"",datumName2:""})},showHandlers:!1,"aria-describedby":"datum-transformation-2","aria-label":F("datumTransformation",{wkid:"WKID"})})),(0,a.jsx)("div",{id:"datum-transformation-2",className:"text-break system-name d-flex align-items-center"},_?(0,a.jsx)(S.Fragment,null,(0,a.jsx)(y,{color:M.colors.danger}),(0,a.jsx)("div",{className:"invalid-tips"},te)):g)))))};var k=c(748),T=c.n(k);const C=e=>{const t=window.SVG,{className:i}=e,n=function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(i[a[n]]=e[a[n]])}return i}(e,["className"]),s=(0,a.classNames)("jimu-icon jimu-icon-component",i);return t?a.React.createElement(t,Object.assign({className:s,src:T()},n)):a.React.createElement("svg",Object.assign({className:s},n))},{useState:D,useEffect:O,useRef:E}=a.React,R={id:"",name:"",wkid:"",displayUnit:"",elevationUnit:i.metric,datumWkid:"",datumName:""},P=d=>{var m;const{id:p,theme:g,onSettingChange:I,config:x,useMapWidgetIds:j}=d,{coordinateSystem:y,showSeparators:f,coordinateDecimal:b,altitudeDecimal:N,displayOrder:h,widgetStyle:k,mapInfo:T,mapInfo2:P}=x,L=E(null),[W,B]=D(!1),[A,Z]=D(null),[H,G]=D(void 0),[Q,U]=D(void 0),[V,z]=D(!1),_=a.hooks.useTranslation(l,s.defaultMessages,a.defaultMessages),K=_("selectMapWidget"),F=_("classic"),J=_("modern"),Y=_("outputCoorSystem"),$=_("newCoordinate"),X=_("remove"),q=_("configureCoordinate"),ee=_("displayOptions"),te=_("coordinateDecimal"),ie=_("altitudeDecimal"),ae=_("showSeparators"),ne=_("displayOrder"),se=_("loLaMode"),oe=_("laLoMode"),le=_("selectMapTips"),re=_("style"),ce=E(void 0),de=E(null);O((()=>{(null==j?void 0:j.length)>0&&!V&&a.moduleLoader.loadModule("jimu-core/wkid").then((e=>{de.current=e,z(!0)}))}),[j]),O((()=>{j&&V&&me(Q)}),[V,Q,j]);const me=e=>{var t,i,a,n,s,o,l,r,c,d,m,u,p,g;if(!e)return;const I=Object.keys(e.jimuMapViews);if(I.length>0){const{getSRLabel:v,getCSUnit:x}=de.current,j=null===(i=null===(t=e.jimuMapViews)||void 0===t?void 0:t[I[0]])||void 0===i?void 0:i.view,y=null===(n=null===(a=e.jimuMapViews)||void 0===a?void 0:a[I[1]])||void 0===n?void 0:n.view,S=null===(s=null==j?void 0:j.spatialReference)||void 0===s?void 0:s.wkid,f=null===(o=null==y?void 0:y.spatialReference)||void 0===o?void 0:o.wkid,w=null===(r=null===(l=null==j?void 0:j.map)||void 0===l?void 0:l.portalItem)||void 0===r?void 0:r.id,b=null===(d=null===(c=null==y?void 0:y.map)||void 0===c?void 0:c.portalItem)||void 0===d?void 0:d.id;if(w===(null==T?void 0:T.id)&&b===(null==P?void 0:P.id))return;const N=null===(u=null===(m=null==j?void 0:j.map)||void 0===m?void 0:m.portalItem)||void 0===u?void 0:u.title,h=null===(g=null===(p=null==y?void 0:y.map)||void 0===p?void 0:p.portalItem)||void 0===g?void 0:g.title;ue({mapInfo:{id:w,title:N,wkid:S,label:v(S),csUnit:x(S)},mapInfo2:{id:b,title:h,wkid:f,label:v(f),csUnit:x(f)}})}},ue=e=>{if(y[ce.current]){const t=x.set("mapInfo",e.mapInfo).set("mapInfo2",e.mapInfo2);I({id:p,config:t})}},pe=()=>{B(!1),ce.current=void 0},ge=(e,t=!1)=>{((e,t=!1)=>{let i;i=t?L.current.getElementsByClassName("add-table-btn")[0]:L.current.getElementsByClassName("jimu-tree-item__body")[e],Z(i)})(e,t),e===ce.current?(B(!W),ce.current=void 0):(B(!0),ce.current=e)},Ie=(e,t,n)=>{var s;const o=(()=>{const e=y.length>0?(()=>{const e=y.map((e=>{var t;return null===(t=e.id)||void 0===t?void 0:t.split("-").reverse()[0]}));return e.length>0?Math.max.apply(null,e):0})():0;return`system-${e+1}`})(),l={id:o,name:null!==(s=null==t?void 0:t.name)&&void 0!==s?s:o,wkid:e,crs:t,displayUnit:"",elevationUnit:i.metric,datumWkid:"",datumName:""};let r;if(y[ce.current]){const e=y.asMutable({deep:!0});e.splice(ce.current,1,l),r=(0,a.Immutable)(e)}else r=y.concat([(0,a.Immutable)(l)]);ve("coordinateSystem",r)},ve=(e,t)=>{if(t===x[e])return;const i=x.set(e,t);I({id:p,config:i})},xe=e=>{e!==k&&ve("widgetStyle",e)},je=y.length,ye=(null==j?void 0:j.length)>0,Se={overrideItemBlockInfo:({itemBlockInfo:e},t)=>({name:r.TreeItemActionType.RenderOverrideItem,children:[{name:r.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:r.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:r.TreeItemActionType.RenderOverrideItemBody,children:[{name:r.TreeItemActionType.RenderOverrideItemMainLine,children:[{name:r.TreeItemActionType.RenderOverrideItemDragHandle},{name:r.TreeItemActionType.RenderOverrideItemIcon,autoCollapsed:!0},{name:r.TreeItemActionType.RenderOverrideItemTitle},{name:r.TreeItemActionType.RenderOverrideItemCommands}]}]}]}]}]})};return(0,a.jsx)("div",{className:"widget-setting-coordinates jimu-widget-setting",css:w(g)},(0,a.jsx)(o.SettingSection,{title:K},(0,a.jsx)(o.SettingRow,null,(0,a.jsx)(o.MapWidgetSelector,{onSelect:e=>{I({id:p,useMapWidgetIds:e})},useMapWidgetIds:j,"aria-label":K,"aria-describedby":"coordinates-blank-msg"}))),!ye&&(0,a.jsx)("div",{className:"empty-placeholder w-100"},(0,a.jsx)("div",{className:"empty-placeholder-inner"},(0,a.jsx)("div",{className:"empty-placeholder-icon"},(0,a.jsx)(C,{size:48})),(0,a.jsx)("div",{className:"empty-placeholder-text",id:"coordinates-blank-msg"},le))),ye&&(0,a.jsx)(S.Fragment,null,(0,a.jsx)(o.SettingSection,{className:"arrange-style-container",title:re,role:"group","aria-label":re},(0,a.jsx)(o.SettingRow,{className:"arrange_container"},(0,a.jsx)(s.Tooltip,{title:F,placement:"bottom"},(0,a.jsx)(s.Button,{onClick:()=>{xe(t.classic)},icon:!0,size:"sm",type:"tertiary",active:k===t.classic,"aria-pressed":k===t.classic},(0,a.jsx)(s.Icon,{autoFlip:!0,width:109,height:70,icon:c(55182)}))),(0,a.jsx)(s.Tooltip,{title:J,placement:"bottom"},(0,a.jsx)(s.Button,{onClick:()=>{xe(t.modern)},className:"ml-2",icon:!0,size:"sm",type:"tertiary",active:k===t.modern,"aria-pressed":k===t.modern},(0,a.jsx)(s.Icon,{autoFlip:!0,width:109,height:70,icon:c(82649)}))))),(0,a.jsx)(o.SettingSection,{title:Y,role:"group","aria-label":Y},(0,a.jsx)("div",{ref:L},(0,a.jsx)(o.SettingRow,null,(0,a.jsx)(s.Button,{className:"w-100 text-dark add-table-btn",type:"primary",onClick:()=>{ge(je,!0)},title:$},(0,a.jsx)("div",{className:"w-100 px-2 text-truncate"},$))),(0,a.jsx)(o.SettingRow,null,(0,a.jsx)("div",{className:"setting-ui-unit-list w-100"},!!je&&(0,a.jsx)(r.List,Object.assign({className:"setting-ui-unit-list-exsiting",itemsJson:Array.from(y).map(((e,t)=>({itemStateDetailContent:e,itemKey:`${t}`,itemStateTitle:e.name,itemStateChecked:t===ce.current,itemStateCommands:[{label:X,iconProps:()=>({icon:u(),size:12}),action:()=>{(e=>{ce.current===e&&pe();const t=x.coordinateSystem.asMutable({deep:!0});t.splice(e,1),ve("coordinateSystem",t),ce.current>e&&ce.current--,n.builderAppSync.publishChangeWidgetStatePropToApp({widgetId:p,propKey:"removeLayerFlag",value:!0})})(t)}}]}))),dndEnabled:!0,onUpdateItem:(e,t)=>{const{itemJsons:i}=t.props,[a,n]=i;((e,t)=>{const i=e.map((e=>e.itemStateDetailContent));ve("coordinateSystem",i)})(n,a.itemKey)},onClickItemBody:(e,t)=>{const{itemJsons:[i]}=t.props;ge(+i.itemKey)}},Se)),je===ce.current&&W&&(0,a.jsx)(r.List,Object.assign({className:"setting-ui-unit-list-new",itemsJson:[{name:"......"}].map(((e,t)=>({itemStateDetailContent:e,itemKey:`${ce.current}`,itemStateChecked:!0,itemStateTitle:e.name,itemStateCommands:[]}))),dndEnabled:!1,renderOverrideItemDetailToggle:()=>""},Se)))))),(0,a.jsx)(o.SettingSection,{title:ee,role:"group","aria-label":ee},(0,a.jsx)(o.SettingRow,{flow:"wrap",label:te},(0,a.jsx)(s.NumericInput,{size:"sm",value:b,precision:0,min:0,max:10,onChange:e=>{ve("coordinateDecimal",e)},"aria-label":te,className:"w-100"})),(0,a.jsx)(o.SettingRow,{flow:"wrap",label:ie},(0,a.jsx)(s.NumericInput,{size:"sm",value:N,precision:0,min:0,max:10,onChange:e=>{ve("altitudeDecimal",e)},"aria-label":ie,className:"w-100"})),(0,a.jsx)(o.SettingRow,{label:ae},(0,a.jsx)(s.Switch,{className:"can-x-switch",checked:f,"data-key":"showSeparators",onChange:e=>{ve("showSeparators",e.target.checked)},"aria-label":ae})),(0,a.jsx)(o.SettingRow,{flow:"wrap",label:ne},(0,a.jsx)("div",{role:"radiogroup",className:"mb-3","aria-label":ne},(0,a.jsx)(s.Label,{className:"d-flex align-items-center"},(0,a.jsx)(s.Radio,{style:{cursor:"pointer"},name:"displayOrderType",className:"mr-2",checked:h===e.xy,onChange:()=>{ve("displayOrder",e.xy)}}),se),(0,a.jsx)(s.Label,{className:"d-flex align-items-center"},(0,a.jsx)(s.Radio,{style:{cursor:"pointer"},name:"displayOrderType",className:"mr-2",checked:h===e.yx,onChange:()=>{ve("displayOrder",e.yx)}}),oe))))),(0,a.jsx)(v.JimuMapViewComponent,{useMapWidgetId:null==j?void 0:j[0],onActiveViewChange:e=>{G(e)},onViewGroupCreate:e=>{U(e)}}),(0,a.jsx)(o.SidePopper,{position:"right",title:q,isOpen:W&&!a.urlUtils.getAppIdPageIdFromUrl().pageId,toggle:pe,trigger:null==L?void 0:L.current,backToFocusNode:A},(0,a.jsx)(M,Object.assign({},null!==(m=y.asMutable({deep:!0})[ce.current])&&void 0!==m?m:R,{useMapWidgetIds:j,theme:g,multiOptionsChange:e=>{const t=y[ce.current];if(t){const i=x.setIn(["coordinateSystem",ce.current.toString()],Object.assign(Object.assign({},t),e));I({id:p,config:i})}},onWkidChangeSave:(e,t)=>{y.length===ce.current&&Ie(e,t)},onClose:pe,mapView:H,viewGroup:Q,wkidUtils:de.current,mapInfo:T,mapInfo2:P}))))};function L(e){c.p=e}})(),d})())}}}));