import cartoon from "../assets/hero-cartoon.avif";
import movie from "../assets/hero-movies.jpg";
import anime from "../assets/hero-anime.avif";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./../App.css";
import { Trans } from "react-i18next";

function Hero() {

    return (
        <>
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper h-screen'
            >
                <SwiperSlide className='cartoon my-container mt-12 gap-4'>
                    <h2 className='font-bold bg-black leading-normal rounded-xl px-4 py-1 text-center'>
                        <Trans i18nKey='hero-cartoon-subtitle' />
                    </h2>
                    <h1 className='font-black uppercase stroke-black text-stroke-3 lg:w-7/12 text-center tracking-wide leading-tight'>
                        <Trans i18nKey='hero-cartoon-title' />
                    </h1>
                    <button className='btn uppercase text-black font-bold'>
                        <Trans i18nKey='hero-btn' />
                    </button>
                </SwiperSlide>
                <SwiperSlide className='movie flex justify-center items-center my-container mt-12 gap-4'>
                    <h2 className='font-bold bg-black leading-normal rounded-xl px-4 py-1 text-center'>
                        <Trans i18nKey='hero-movie-subtitle' />
                    </h2>
                    <h1 className='font-black uppercase stroke-black text-stroke-3 lg:w-3/5 text-center tracking-wide leading-tight'>
                        <Trans i18nKey='hero-movie-title' />
                    </h1>
                    <button className='btn uppercase text-black font-bold'>
                        <Trans i18nKey='hero-movie-btn' />
                    </button>
                </SwiperSlide>
                <SwiperSlide className='anime flex justify-center items-center my-container mt-12 gap-4'>
                    <h2 className='font-bold bg-black leading-normal uppercase rounded-xl px-4 py-1 text-center'>
                        <Trans i18nKey='hero-anime-subtitle' />
                    </h2>
                    <h1 className='font-black uppercase stroke-black text-stroke-3 lg:w-3/5 text-center tracking-wide leading-tight'>
                        <Trans i18nKey='hero-anime-title' />
                    </h1>
                    <button className='btn uppercase text-black font-bold'>
                        <Trans i18nKey='hero-anime-btn' />
                    </button>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Hero;
