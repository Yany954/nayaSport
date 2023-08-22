// import Swiper core and required modules
import { EffectCards, A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css'
import camiseta1 from '../../../assets/img/camiseta1.png';
import camiseta2 from '../../../assets/img/camiseta2.png';
import balonFutbol from '../../../assets/img/balon1.png';
import balonVoley from '../../../assets/img/balon2.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import RoundCard from '../RoundCard/RoundCard';




function SliderHome() {


  return (
    <Swiper

      className="mySwiper swiper"
      // install Swiper modules

      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectCards]}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}

      effect={'cube'}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,

      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}

    
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
  
    >

      <SwiperSlide className='swiper-slide swiper-slide1'>
        <img className='jjj' src={balonFutbol} />
      </SwiperSlide>
      <SwiperSlide className='swiper-slide swiper-slide2'>
        <img src={camiseta1} />
      </SwiperSlide >
      <SwiperSlide className='swiper-slide swiper-slide3'>
        <img src={balonVoley} />
      </SwiperSlide>
      <SwiperSlide className='swiper-slide swiper-slide4'>
        <img src={camiseta2} />
      </SwiperSlide>
    </Swiper>

  );
};

export default SliderHome;

