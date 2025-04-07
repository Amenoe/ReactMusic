import{d as p,r as x,j as t}from"./index-btciW5Wo.js";const d=p.div`
  width: 100%;
  .top-content {
    height: 33px;
    padding: 0 10px 0 34px;
    background-position: -225px -156px;
    border-bottom: 2px solid #c10d0c;
  }

  .left {
    .title {
      float: left;
      font-size: 20px;
      font-weight: normal;
      line-height: 28px;
      color: #333;

      &:hover {
        text-decoration: none;
      }
    }
    /* 热门推荐的tab */
    .tab {
      float: left;
      color: #666;
      margin: 9px 0 0 20px;
      .item {
        line-height: 14px;

        &:last-child {
          .line {
            display: none;
          }
        }
      }
    }
    /* 二级标题 */
    .sub {
      float: left;
      color: #666;
      margin: 9px 0 0 20px;
    }
  }

  .right {
    float: right;
    margin-top: 9px;
    > a {
      color: #666;
    }

    > i {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      vertical-align: middle;
      background-position: 0 -240px;
    }
  }
`,h=e=>{const{title:l}=e,{leftSlot:o,rightSlot:r,keyWord:s=[],moreText:a="更多",moreLink:n="/",titleLink:c=""}=e;return t.jsx(d,{children:t.jsxs("div",{className:"top-content sprite_02",children:[t.jsxs("div",{className:"left",children:[t.jsx("a",{className:"title",href:c,children:l}),o??t.jsx("div",{className:"tab",children:s.map(i=>t.jsxs("span",{className:"item",children:[t.jsx("a",{children:i}),t.jsx("span",{className:"line",children:"|"})]},i))})]}),t.jsx("div",{className:"right",children:r??t.jsxs(t.Fragment,{children:[t.jsx("a",{href:n,children:a}),t.jsx("i",{className:"cor sprite_02"})]})})]})})},g=x.memo(h);export{g as A};
