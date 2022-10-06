
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import banner1 from '../../assets/imgs/barber-banner.jpg';
import banner2 from '../../assets/imgs/barber-banner2.jpg';
import banner3 from '../../assets/imgs/barber-banner3.jpg';
import styles from './BannerSwiper.module.scss';

export default function BannerSwiper() {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            navigation
            autoplay={{delay: 5000}}
            pagination={{ clickable: true }}
        >
            <SwiperSlide><img className={styles.banner} src={banner1} alt="Banner" /></SwiperSlide>
            <SwiperSlide><img className={styles.banner} src={banner2} alt="Banner" /></SwiperSlide>
            <SwiperSlide><img className={styles.banner} src={banner3} alt="Banner" /></SwiperSlide>
        </Swiper>
    );
};