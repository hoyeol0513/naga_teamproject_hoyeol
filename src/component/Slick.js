// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/Slick.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Slick() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg" alt="고양이" /></SwiperSlide>
        <SwiperSlide><img src="http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg" alt="고양이" /></SwiperSlide>
        <SwiperSlide><img src="http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg" alt="고양이" /></SwiperSlide>
        <SwiperSlide><img src="http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg" alt="고양이" /></SwiperSlide>
        <SwiperSlide><img src="http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg" alt="고양이" /></SwiperSlide>
        <SwiperSlide><img src="http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg" alt="고양이" /></SwiperSlide>
        <SwiperSlide><img src="http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg" alt="고양이" /></SwiperSlide>
        <SwiperSlide><img src="http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg" alt="고양이" /></SwiperSlide>
        <SwiperSlide><img src="http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg" alt="고양이" /></SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slick;