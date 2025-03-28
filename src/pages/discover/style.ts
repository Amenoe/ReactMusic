import styled from 'styled-components'

export const NavWapper = styled.div`
  height: 34px;
  background-color: ${(props) => props.theme.color.PRIMARY_COLOR};
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
          background-color: ${(props) => props.theme.color.PRIMARY_COLOR_DARK};
        }
      }
    }
  }
`
