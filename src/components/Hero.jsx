import cartoon from "../assets/hero-cartoon.avif";
import movie from "../assets/hero-movies.jpg";
import anime from "../assets/hero-anime.avif";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./../App.css";

function Hero() {
    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className='mySwiper h-screen'>
                <SwiperSlide className='cartoon flex justify-center items-center my-container mt-12 gap-4'>
                    <h2 className='font-bold bg-black leading-normal rounded-xl px-4 py-1 text-center'>مع تجربة استثنائيـة لا تقـاوم</h2>
                    <h1 className='font-black stroke-black text-stroke-3 w-6/12 text-center tracking-wide leading-tight'>
                        حيــاة امنــة لطفلـك
                        <br></br>
                        علي قنوات NOOR 4K
                    </h1>
                    <button className='btn text-black font-bold'>اعرف اكثر</button>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={movie} alt='movie' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={anime} alt='anime' />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Hero;
