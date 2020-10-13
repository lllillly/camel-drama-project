import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./css/styles.css";

class MainSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="MainSlider">
        <Slider className="MainSlider__dramaImages" {...settings}>
          <div>
            <img
              src={
                "https://pds.joins.com/news/component/htmlphoto_mmdata/201912/16/65a99dd7-2aa4-4236-8efb-7736c5eff7a2.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/ko/thumb/0/0a/%EC%8A%A4%EC%B9%B4%EC%9D%B4%EC%BA%90%EC%8A%AC_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/375px-%EC%8A%A4%EC%B9%B4%EC%9D%B4%EC%BA%90%EC%8A%AC_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://w.namu.la/s/45e2f638700e712634d0e8badc03e554135c6f1a468e56d3265262293c2e086995c7f71c41a413d362f4ccbc46f7e7a54dd2a98ccd706482681399568f2b24f9fda1265e89f489f0b6a8b45f8ae6d4d25e52d14c734a37702f12f88fd4be014ae51d3d08b654db801c2bc68faa910388"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/ko/f/f4/%EB%93%9C%EB%9D%BC%EB%A7%88_%EC%9D%B4%ED%83%9C%EC%9B%90_%ED%81%B4%EB%9D%BC%EC%93%B0_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://images.chosun.com/resizer/x4VDzJqoAIwuteW9fq6Cx1p4n7s=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/H3WPIBRCJQUKC5SXAGAOZAOI5E.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://ww.namu.la/s/70acb969f9f35ae6e42458216d916b08b7718fc9288be8c0415de6c7c2101a298983559bb63e540c6c351cf1b4615103154224332edc5de7d2379b64069f3f12cd718d887c9ce03316cc770c757d0e020455e68fae302429abeec44bbe0986ec11785e341917f9710c3d582b19d537c8"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://w.namu.la/s/56921d8ebe7b1212b03f4aed8396dbc1f75e54faf48b7b0beb1a551962222faa872cdac42fc8704f8be4680e14d61edce8a872b9c0d2a021daee3204e6398b3e0700ae54f4e10da2e065904765691617fb74778c0e11eba9f1e544472d697735120b1c04cf57beaa5a879ee43abf56dd"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://w.namu.la/s/4a94d1e4123551e1b1994d30f91b1b893f5945a282f705f1b7084743a91904a02b653f057ec578ca1615a402883c405a6eda47a29c7611ea919fec371de2c25014c5745d0841ccfedba16f34d483e8f3937e113b9187d33f289411e98f06030f629e330eea80b35740b66066c9fb3994"
              }
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default MainSlider;
