// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import RoundCard from '../Globals/RoundCard/RoundCard';


export default () => {

  const [screen, setScreen] = useState(window.innerWidth)


  function nSlidesFx() {
    let nSlides;
    window.screen.width > 1000 ? nSlides = 3 : nSlides = 1;
    setScreen(nSlides);
  }

useEffect(() => {
    nSlidesFx();
}, [screen])

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={screen}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >

      <SwiperSlide><RoundCard /></SwiperSlide>
      <SwiperSlide><RoundCard /></SwiperSlide>
      <SwiperSlide><RoundCard /></SwiperSlide>
      <SwiperSlide><RoundCard /></SwiperSlide>
      <SwiperSlide><RoundCard /></SwiperSlide>
      <SwiperSlide><RoundCard /></SwiperSlide>
      <SwiperSlide><RoundCard /></SwiperSlide>
      <SwiperSlide><RoundCard /></SwiperSlide>
      <SwiperSlide><RoundCard /></SwiperSlide>
      <SwiperSlide><RoundCard /></SwiperSlide>
      <SwiperSlide><RoundCard /></SwiperSlide>
      <SwiperSlide><RoundCard /></SwiperSlide>
    </Swiper>
  );
};