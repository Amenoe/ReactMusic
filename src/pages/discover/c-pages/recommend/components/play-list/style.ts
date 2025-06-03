import styled from 'styled-components'
import recommendTopBg from '@/assets/img/recommend-top-bg.png'

export const PlayListWrapper = styled.div`
  .content {
    height: 472px;
    background: url(${recommendTopBg});
    margin-top: 20px;
    padding-left: 1px;
    display: flex;
  }

  .list {
    width: 230px;
    > .top {
      padding: 20px 0 0 19px;
    }
  }
`
