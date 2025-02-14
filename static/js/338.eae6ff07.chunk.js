"use strict";(self.webpackChunkbyte_react_airbnb=self.webpackChunkbyte_react_airbnb||[]).push([[338],{6408:(n,e,t)=>{t.d(e,{A:()=>g});var i,r=t(5043),o=t(7528),l=t(5464);const a=l.Ay.div(i||(i=(0,o.A)(["\n    width: ",";\n    padding: 8px;\n    box-sizing: border-box;\n\n    .section-item-inner {\n        width: 100%;\n\n        .section-item-cover {\n            position: relative;\n            box-sizing: border-box;\n            padding: 100% 8px 0;  // \u8fd9\u4e2a\u65f6\u5019\u5c31\u521b\u5efa\u4e86\u4e00\u4e2a\u4e3a\u6b63\u65b9\u5f62\u7684\u5361\u7247\u4ee5\u53ca\u5bbd\u5ea6\n            border-radius: 4px;\n            overflow: hidden;\n            margin: 10px 0;\n            transition: all 0.5s ease;\n\n            img {\n                position: absolute;\n                left: 0;\n                top: 0;\n                width: 100%;\n                height: 100%;\n                text-align: center;\n            }\n\n            @media (max-width: 768px) {\n                .section-item-cover {\n                    box-shadow: 0 4px 8px 0 rgba(77, 76, 76, 0.15);\n                    transform: translate3d(0, 0, -5px);\n                }\n            }\n        }\n\n        .section-item-title {\n            color: ",";\n        }\n\n        .section-item-detail {\n            color: ",";\n            text-overflow: ellipsis;\n        }\n\n        .section-item-price {\n            color: ",";\n        }\n        \n        .section-item-rate {\n        }\n    }\n\n    &:hover {\n        cursor: pointer;\n\n        .section-item-cover {\n            box-shadow: 0 8px 8px 0 rgba(77, 76, 76, 0.2), \n                        0 20px 20px 0 rgba(77, 76, 76, 0.2);\n            transform: translate3d(0, 0 , 10px);\n        }\n    }\n\n    @media (max-width: 768px) {\n        width: 50%\n    }\n    \n    @media (max-width: 420px) {\n        width: 100%;\n    }\n"])),(n=>n.$avg),(n=>n.$ItemTextTitleColor),(n=>n.$ItemTextDetailColor),(n=>n.$ItemTextPriceColor));var s,d=t(1439);const c=l.Ay.div(s||(s=(0,o.A)(["\n    display: flex;\n    justify-content: space-around;\n    align-content: center;\n    \n    .ant-jzh-rate {\n        color: ","\n    }\n    \n    span {\n        text-align: center;\n    }\n"])),(n=>n.$ThemeColor));var x=t(5173),p=t.n(x),m=t(579);const u=(0,r.memo)((n=>{const{allowHalf:e,ThemeColor:t,rate:i,starNum:o}=n,[l,a]=(0,r.useState)(i);return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(c,{$ThemeColor:t||"yellow",children:[(0,m.jsx)(d.A,{allowHalf:e||!0,onChange:n=>a(n),value:null!==l?l:0,star:o||10,rootClassName:"ant-jzh-rate"}),null!==l?(0,m.jsx)("span",{children:2*l}):(0,m.jsx)("span",{children:0})]})})}));u.prototype={allowHalf:p().bool,ThemeColor:p().string,rate:p().number.isRequired,starNum:p().number};const v=u,g=(0,r.memo)((n=>{var e,t,i,r,o;const{item:l,avg:s}=n;return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(a,{$ItemTextTitleColor:(null===l||void 0===l||null===(e=l.title)||void 0===e?void 0:e.color)||"#46413e",$ItemTextDetailColor:(null===l||void 0===l||null===(t=l.detail)||void 0===t?void 0:t.color)||"#675e4e",$ItemTextPriceColor:(null===l||void 0===l||null===(i=l.price)||void 0===i?void 0:i.color)||"#be5555",$avg:s,children:(0,m.jsxs)("div",{className:"section-item-inner",children:[(0,m.jsx)("div",{className:"section-item-cover",children:(0,m.jsx)("a",{href:null===l||void 0===l||null===(r=l.imageList[0])||void 0===r?void 0:r.imageUrl,target:"_blank",rel:"noopener noreferrer",children:(0,m.jsx)("img",{src:null===l||void 0===l||null===(o=l.imageList[0])||void 0===o?void 0:o.imageUrl,alt:"\u56fe\u7247\u6b63\u5728\u52a0\u8f7d..."})})}),(0,m.jsx)("div",{className:"section-item-title",children:l.title}),(0,m.jsxs)("div",{className:"section-item-detail",children:[l.desc.slice(0,20),"..."]}),(0,m.jsxs)("div",{className:"section-item-price",children:["$",l.price,"/day"]}),(0,m.jsx)("div",{className:"section-item-rate",children:(0,m.jsx)(v,{allowHalf:!0,ThemeColor:"orange",rate:l.rate,starNum:10})})]})})})}))},9338:(n,e,t)=>{t.r(e),t.d(e,{default:()=>S});var i,r=t(5043),o=t(6727),l=t(3003),a=t(7528),s=t(5464);const d=s.Ay.div(i||(i=(0,a.A)(["\n\n"])));var c,x=t(5173),p=t.n(x),m=t(8139),u=t.n(m);const v=s.Ay.div(c||(c=(0,a.A)(["\n    display: flex;\n    align-items: center;\n    height: auto;\n    padding: 20px 16px 10px;\n    \n    margin-bottom: 20px;\n    background: #f4f8fa;\n\n    position: fixed;\n    z-index: 99;\n    left: 0;\n    right: 0;\n    top: 80px;\n\n    border-bottom: 1px solid #b2adad;\n\n    .entire-filter {\n        display: flex;\n        flex-shrink: 0;\n\n        .entire-filter-card {\n            margin: 0 4px 0 8px;\n            padding: 6px 12px;\n            border: 1px solid #dce0e0;\n            border-radius: 4px;\n            color: #484848;\n            cursor: pointer;\n\n            &.active {\n                background: #008489;\n                border: 1px solid #008499;\n                color: #ffffff;\n            }\n        }\n    }\n"])));var g=t(579);const h=(0,r.memo)((n=>{const{filterCards:e}=n,[t,i]=(0,r.useState)([]);return(0,g.jsx)(v,{children:(0,g.jsx)("div",{className:"entire-filter",children:e.slice(0,8).map(((n,e)=>(0,g.jsx)("div",{className:u()("entire-filter-card",{active:t.includes(null===n||void 0===n?void 0:n.card)}),onClick:()=>(n=>{const e=[...t];if(e.includes(n)){const t=e.indexOf(n);e.splice(t,1)}else e.push(n);i(e)})(null===n||void 0===n?void 0:n.card),children:n.card},null===n||void 0===n?void 0:n.id)))})})}));h.prototype={filterCards:p().array};const f=h;var b;const j=s.Ay.div(b||(b=(0,a.A)(["\n    //width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    margin-top: 70px;\n    padding: 20px 50px;\n"])));var w=t(6408);const y=(0,r.memo)((()=>{const{entireList:n}=(0,l.d4)((n=>({entireList:n.entire.entireList})),l.bN),[e,t]=(0,r.useState)("25%");return(0,r.useEffect)((()=>{const n=window.innerWidth;t(n>375?"25%":"50%")}),[]),(0,g.jsx)(j,{children:n.map((n=>(0,g.jsx)(w.A,{item:n,avg:e},n.id)))})}));var C,A=t(3727);const N=s.Ay.div(C||(C=(0,a.A)(["\n    .entire-pagination {\n        display: flex;\n        flex-flow: column nowrap;\n        justify-content: center;\n        align-items: center;\n        gap: 20px;\n    }\n"]))),T=(0,r.memo)((()=>{const{totalCount:n,currentPage:e,entireList:t}=(0,l.d4)((n=>({totalCount:n.entire.totalCount,currentPage:n.entire.currentPage,entireList:n.entire.entireList}))),i=e*t.length+1,r=(e+1)*t.length;return(0,g.jsx)(N,{children:(0,g.jsxs)("div",{className:"entire-pagination",children:[(0,g.jsx)(A.A,{align:"center",defaultPage:0,total:n,pageSizeOptions:[t.length],defaultPageSize:t.length,responsive:!0}),(0,g.jsxs)("div",{className:"entire-pagination-desc",children:["\u7b2c",i,"-",r,"\u6761/\u5171",n,"\u6761\u6570\u636e"]})]})})}));var L=t(8961),$=t(3151);function k(n){return{type:L.mu,entireList:n}}function z(n){return{type:L.WY,totalCount:n}}const P=function(n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;return async(t,i)=>{const r=i().entire.currentPage,o=await function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return $.A.get({url:"/entire/list",params:{page:n,pageSize:e}})}(r,e);if(o){const{entireList:n}=o.data;t(k(n)),t(z(null===n||void 0===n?void 0:n.length))}else{console.log("\u8bf7\u6c42\u5931\u8d25");t(k(n.slice(e*r,e*(r+1)))),t(z(null===n||void 0===n?void 0:n.length))}}},S=(0,r.memo)((()=>{const{state:n}=(0,o.zy)(),{filterCards:e,goodList:t}=n||{},i=(0,l.wA)(),[a,s]=(0,r.useState)([]),[c,x]=(0,r.useState)([]);return(0,r.useEffect)((()=>{s(e),x(t)}),[a,c,e,t]),(0,r.useEffect)((()=>{i(P(t))}),[i,e]),(0,g.jsxs)(d,{children:[(0,g.jsx)(f,{filterCards:a}),(0,g.jsx)(y,{}),(0,g.jsx)(T,{})]})}))}}]);
//# sourceMappingURL=338.eae6ff07.chunk.js.map