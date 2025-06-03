import styled from 'styled-components'
import wrapBg from '@/assets/img/wrap1.png'

export const RecommendWrapper = styled.div`
  > .content {
    display: flex;
    border: 1px solid ${(props) => props.theme.color.BORDER_COLOR_BASE};
    background-image: url(${wrapBg});
    min-height: 1200px;
    box-sizing: border-box;
    > .left {
      display: flex;
      flex-direction: column;
      row-gap: 35px;
      box-sizing: border-box;
      width: 729px;
      padding: 20px;
    }
    > .right {
      box-sizing: border-box;
      width: 250px;
      margin-left: 1px;
    }
  }
`
