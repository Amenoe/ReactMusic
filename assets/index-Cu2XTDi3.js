import{d as r,r as i,j as e,a as n,N as t,O as l}from"./index-btciW5Wo.js";const o=r.div`
  height: 34px;
  background-color: ${a=>a.theme.color.PRIMARY_COLOR};
  .nav {
    display: flex;
    margin-top: -5px;
    padding-left: 180px;

    &-item {
      height: 34px;
      a {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        padding: 0 13px;
        margin: 8px 17px 0;
        border-radius: 20px;
        color: #fff;

        &:hover,
        &.active {
          text-decoration: none;
          background-color: ${a=>a.theme.color.PRIMARY_COLOR_DARK};
        }
      }
    }
  }
`,d=()=>e.jsxs("div",{children:[e.jsx(o,{children:e.jsx("div",{className:"w1100",children:e.jsx("div",{className:"nav",children:n.map(a=>e.jsx("div",{className:"nav-item",children:e.jsx(t,{to:a.link,className:({isActive:s})=>s?"active":"",children:a.title})},a.title))})})}),e.jsx(i.Suspense,{fallback:e.jsx("div",{children:"loading..."}),children:e.jsx(l,{})})]}),x=i.memo(d);export{x as default};
