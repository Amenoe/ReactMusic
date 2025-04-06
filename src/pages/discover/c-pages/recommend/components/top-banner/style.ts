import styled from 'styled-components'
import download from '@/assets/img/download.png'
import banner_sprite from '@/assets/img/banner_sprite.png'

const topBannerhHeight = '285px'

interface IBannerWrapperProps {
  bgimage: string
}

export const BannerWrapper = styled.div<IBannerWrapperProps>`
  background: url(${(props) => props.bgimage}) center center / 6000px;
  transition: background-image 1s ease;
  .banner {
    height: ${topBannerhHeight};
    display: flex;
    position: relative;
  }
`
export const BannerLeftWrapper = styled.div`
  position: relative;
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: ${topBannerhHeight};
    .image {
      width: 100%;
      height: ${topBannerhHeight};
    }
  }
`
export const BannerRightWrapper = styled.div`
  width: 254px;
  height: ${topBannerhHeight};
  background: url(${download}) no-repeat 0 0;
  position: relative;

  .download {
    .btn {
      display: block;
      width: 215px;
      height: 56px;
      margin: 186px 0 0 19px;
      background: url(${download}) no-repeat;
      background-position: 0 9999px;
      text-indent: -9999px;

      &:hover {
        background-position: 0 -290px;
        text-decoration: none;
      }
    }
    > p {
      margin: 10px auto;
      text-align: center;
      color: #8d8d8d;
    }
  }
  .shadow {
    position: absolute;
    top: 0;
    left: -20px;
    height: ${topBannerhHeight};
    width: 20px;
  }
  .shadowr {
    position: absolute;
    top: 0;
    right: -20px;
    height: ${topBannerhHeight};
    width: 20px;
  }
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 63px;
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${banner_sprite});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    &:nth-child(1) {
      left: -68px;
      background-position: 0 -360px;
    }
    &:nth-child(2) {
      right: -68px;
      background-position: 0 -508px;
    }
  }
`
