import Swiper from "react-id-swiper";

const HeroSlider = ({ sliderData, spaceBottomClass }) => {
  const params = {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav"></button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav"></button>
    )
  };
  return (
    <div
      className={`hero-slider-three ${spaceBottomClass ? spaceBottomClass : ""
        }`}
    >
      <div className="hero-slider-three__wrapper">
        <Swiper {...params}>
          {sliderData &&
            sliderData.map((single, i) => {
              return (
                <div
                  className="hero-slider-three__slide bg-img"
                  style={{ backgroundImage: `url(${single.bgImage})` }}
                  key={i}
                >
                </div>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;
