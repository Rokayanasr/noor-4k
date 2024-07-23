import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./../App.css";
import { Trans } from "react-i18next";
import bein from "./../assets/bein.png";
import mbc from "./../assets/mbc.png";
import ssc from "./../assets/ssc.png";
import shahid from "./../assets/shahid.png";
import hbo from "./../assets/hbo.svg";
import netflix from "./../assets/netflix.png";
import osn from "./../assets/osn.png";
import { useEffect, useRef, useState } from "react";

function Hero() {
    const marqueeRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (marqueeRef.current) {
                    if (entry.isIntersecting) {
                        setIsAnimating(true);
                    } else {
                        setIsAnimating(false);
                    }
                }
            },
            { threshold: 0.3 }
        );

        if (marqueeRef.current) {
            observer.observe(marqueeRef.current);
            console.log("observing");
        }

        return () => {
            if (marqueeRef.current) {
                observer.unobserve(marqueeRef.current);
                console.log("stopped observing");
            }
        };
    }, []);

    useEffect(() => {
        if (marqueeRef.current) {
            marqueeRef.current.style.animationPlayState = isAnimating ? "running" : "paused";
        }
       
    }, [isAnimating]);

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

            <section className='bg-black my-container '>
                <div className='flex flex-col md:flex-row w-full md:h-52 justify-center gap-12 items-center'>
                    <div
                        data-popover-placement='top'
                        data-popover-target='popover-default'
                        className='gap-6 outline w-72 md:h-full card outline-primary rounded-xl p-8 flex flex-col items-center justify-center'
                    >
                        <svg className='fill-primary h-12 md:h-16' id='fi_15867239' enableBackground='new 0 0 100 100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
                            <path d='m49.9068451 25.7795715c-13.4143944 0-24.4067478 10.9923515-24.4067478 24.4067421s10.9923534 24.4067421 24.4067402 24.4067421 24.4067383-10.9923515 24.4067383-24.4067421c.0000152-13.4143905-10.9923363-24.4067421-24.4067307-24.4067421zm1.8631096 30.7413216-4.4037857 4.4037857c-.6547585.6547585-1.7163315.6547585-2.3710899 0l-8.6212616-8.6212616c-.6547585-.6547623-.6547585-1.7163353 0-2.3710938l3.2182388-3.2182388c.6547585-.6547585 1.7163315-.6547585 2.3710938 0l4.2174759 4.2174759 11.669979-11.5008468c.6561203-.6466103 1.7110252-.6427612 2.3624077.0086212l3.218174 3.2181778c.6581383.6581383.6542397 1.7263947-.0086861 2.379715zm-1.8631096-30.7413216c-13.4143944 0-24.4067478 10.9923515-24.4067478 24.4067421s10.9923534 24.4067421 24.4067402 24.4067421 24.4067383-10.9923515 24.4067383-24.4067421c.0000152-13.4143905-10.9923363-24.4067421-24.4067307-24.4067421zm1.8631096 30.7413216-4.4037857 4.4037857c-.6547585.6547585-1.7163315.6547585-2.3710899 0l-8.6212616-8.6212616c-.6547585-.6547623-.6547585-1.7163353 0-2.3710938l3.2182388-3.2182388c.6547585-.6547585 1.7163315-.6547585 2.3710938 0l4.2174759 4.2174759 11.669979-11.5008468c.6561203-.6466103 1.7110252-.6427612 2.3624077.0086212l3.218174 3.2181778c.6581383.6581383.6542397 1.7263947-.0086861 2.379715zm-1.8631096-30.7413216c-13.4143944 0-24.4067478 10.9923515-24.4067478 24.4067421s10.9923534 24.4067421 24.4067402 24.4067421 24.4067383-10.9923515 24.4067383-24.4067421c.0000152-13.4143905-10.9923363-24.4067421-24.4067307-24.4067421zm1.8631096 30.7413216-4.4037857 4.4037857c-.6547585.6547585-1.7163315.6547585-2.3710899 0l-8.6212616-8.6212616c-.6547585-.6547623-.6547585-1.7163353 0-2.3710938l3.2182388-3.2182388c.6547585-.6547585 1.7163315-.6547585 2.3710938 0l4.2174759 4.2174759 11.669979-11.5008468c.6561203-.6466103 1.7110252-.6427612 2.3624077.0086212l3.218174 3.2181778c.6581383.6581383.6542397 1.7263947-.0086861 2.379715zm41.7336616 1.8631096c-1.3041687-2.235733-.9315491-5.2167091.7452469-7.2661324l1.6768036-1.8631096c2.4220505-2.7946663 2.0494232-7.0798187-1.1178589-9.3155518l-2.0494232-1.3041801c-2.2357254-1.4904861-3.1672821-4.2851524-2.4220428-6.8935108l.7452469-2.4220409c1.1178589-3.5399094-1.3041763-7.2661304-5.0303955-7.8250656l-2.4220505-.3726158c-2.6083527-.3726234-4.6577759-2.4220428-5.216713-5.0303974l-.3726196-2.4220448c-.5589371-3.7262201-4.2851562-5.9619527-8.0113678-4.8440876l-2.4220428.745244c-2.6083603.7452431-5.4030228-.1863117-6.8935089-2.4220443l-1.4904861-2.0494218c-2.2357368-2.9809766-6.5208855-3.5399101-9.3155518-.9315553l-1.8631096 1.6767983c-2.0494194 1.8631105-4.8440857 2.2357321-7.2661324.9315553l-2.2357368-1.117867c-3.3535957-1.8631103-7.4524403-.3726215-8.7566185 3.1672878l-.9315548 2.2357321c-.9315548 2.4220438-3.5399132 4.0988417-6.148262 3.9125299l-2.0494251-.3726158c-3.7262211-.1863117-6.8935099 2.9809771-6.5208864 6.7071981l.1863079 2.4220409c.1863089 2.6083546-1.3041782 5.2167091-3.9125319 6.1482639l-2.235734.9315548c-3.5399084 1.4904861-4.8440871 5.5893326-2.9809771 8.7566185l1.3041787 2.0494194c1.3041787 2.235733.9315553 5.2167091-.7452435 7.2661324l-1.6767983 1.8631096c-2.4220419 2.7946663-2.049422 7.0798187 1.117867 9.3155518l2.0494218 1.3041763c2.2357335 1.49049 3.1672893 4.2851562 2.4220424 6.8935089l-.745244 2.4220428c-1.1178665 3.539917 1.3041792 7.2661362 5.0303955 7.8250656l2.4220419.3726273c2.6083565.3726196 4.6577759 2.4220428 5.2167072 5.0303955l.3726234 2.4220428c.5589314 3.7262192 4.2851524 5.9619522 8.0113735 4.8440857l2.4220428-.7452469c2.6083565-.7452469 5.403019.1863098 6.8935089 2.4220428l1.4904861 2.0494156c2.235733 2.9809723 6.5208855 3.539917 9.3155518.9315567l1.8631096-1.6768036c2.0494194-1.8631058 4.8440819-2.235733 7.2661324-.9315567l2.235733 1.1178665c3.3535995 1.8631058 7.4524384.3726196 8.7566223-3.1672897l.9315491-2.235733c.9315567-2.4220428 3.539917-4.0988464 6.1482697-3.912529l2.4220505.1863098c3.7262192.1863022 6.8935013-2.9809799 6.5208893-6.7071991l-.1863098-2.4220428c-.1863098-2.6083527 1.3041687-5.2167053 3.912529-6.148262l2.2357254-.9315567c3.5399094-1.4904861 4.8440857-5.5893288 2.9809723-8.7566147zm-43.5967712 23.1025696c-17.3269234 0-31.4865589-14.1596375-31.4865589-31.4865646s14.1596355-31.4865665 31.4865665-31.4865665 31.4865646 14.1596394 31.4865646 31.4865665c-.0000152 17.5132369-14.159645 31.4865646-31.4865722 31.4865646z' />
                        </svg>
                        <h4 className='text-primaryLight font-bold text-center'>
                            <Trans i18nKey='official-agent' />
                        </h4>
                    </div>

                    <div
                        data-popover
                        id='popover-default'
                        role='tooltip'
                        className='absolute z-10 invisible inline-block w-64 text-sm transition-opacity duration-200 bg-yellow-400 backdrop-blur-lg bg-opacity-5 border border-gray-200 rounded-lg shadow-sm opacity-0'
                    >
                        <div className='p-4'>
                            <p className='md:w-52 w-full text-primaryLight text-center leading-8 tracking-wide'>
                                <Trans i18nKey='official-agent-paragraph' />
                            </p>
                        </div>
                        <div data-popper-arrow></div>
                    </div>
                    <div
                        data-popover-placement='bottom'
                        data-popover-target='popover2'
                        className='gap-6 outline w-72 md:h-full card outline-primary rounded-xl p-8 flex flex-col items-center justify-center'
                    >
                        <svg
                            className='fill-primary h-12 md:h-16'
                            id='fi_10839364'
                            enableBackground='new 0 0 100 100'
                            height='512'
                            viewBox='0 0 100 100'
                            width='512'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path d='m5.9 45.6c2-19 16-34.4 34.2-38.5l-3.1-2.6c-1-.9-1.1-2.5-.2-3.5.8-.9 2.2-1.1 3.3-.4l7.3 5.8c.5.4.8 1 .9 1.7s-.1 1.4-.5 1.9l-5.8 7.3c-.5.6-1.2 1-2 .9-1.4 0-2.5-1.1-2.5-2.5 0-.6.2-1.2.5-1.6l1.4-1.7c-15.3 4.3-26.7 17.5-28.5 33.7-.1 1.3-1.2 2.2-2.5 2.2h-.2c-1.4-.1-2.4-1.3-2.3-2.7zm39.9 43.5c-16.3-1.7-29.5-13.3-33.7-28.7l2 1.6c1.1.9 2.7.7 3.5-.4.9-1.1.7-2.7-.4-3.5l-7.3-5.9c-.5-.4-1.2-.6-1.8-.5-.7.1-1.3.4-1.7.9l-5.8 7.3c-.4.4-.5 1-.5 1.6-.1 1.4 1 2.5 2.4 2.5.8 0 1.5-.3 2-.9l2.4-3c4.2 18.2 19.5 32 38.5 34h.2c1.4.1 2.6-1 2.6-2.4.1-1.3-1-2.5-2.4-2.6zm45.8-37.1c-1.4-.1-2.6.9-2.8 2.2-1.7 16.2-13.2 29.4-28.5 33.7l1.7-2.1c.9-1.1.7-2.7-.4-3.5-1.1-.9-2.7-.7-3.5.4l-5.5 6.9c-.7.5-1.1 1.3-1 2.1 0 1 .7 1.8 1.5 2.2l6.8 5.5c.4.3 1 .5 1.6.5.8 0 1.5-.3 1.9-.9.9-1.1.7-2.7-.4-3.5l-2.9-2.3c18-4.3 31.7-19.6 33.7-38.4.2-1.5-.8-2.7-2.2-2.8zm7.5-14.5c-1.1-.9-2.7-.7-3.5.4l-2.5 3.1c-4-18.5-19.4-32.7-38.6-34.8-1.4-.2-2.7.8-2.8 2.2s.9 2.6 2.2 2.8c16.5 1.8 29.9 13.6 33.9 29.3l-1.9-1.6c-1.1-.9-2.7-.7-3.5.4s-.7 2.7.4 3.5l7.3 5.8c.4.3 1 .5 1.6.5.8 0 1.5-.3 2-.9l5.8-7.3c.8-1 .7-2.6-.4-3.4zm-49.1 38.6c-14.5 0-26.3-11.8-26.3-26.3s11.8-26.3 26.3-26.3 26.3 11.8 26.3 26.3c0 14.6-11.8 26.3-26.3 26.3zm8.3-20.5c0-4.6-3.7-8.3-8.3-8.3-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-3.7-2.3-6.9-5.8-8v-.4c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5v.4c-3.5 1.1-5.9 4.4-5.9 8.1.1 4.6 3.8 8.3 8.4 8.2 1.7.1 3 1.4 3.1 3.1.1 1.8-1.3 3.4-3.1 3.5-1.8 0-3.3-1.5-3.3-3.3 0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5c0 3.6 2.4 6.8 5.8 7.9v.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5v-.5c3.5-1.1 5.8-4.3 5.8-7.9z'></path>
                        </svg>
                        <h4 className='text-primaryLight font-bold text-center'>
                            <Trans i18nKey='subscribtion' />
                        </h4>
                    </div>
                    <div
                        data-popover
                        id='popover2'
                        role='tooltip'
                        className='absolute z-10 invisible inline-block w-64 text-sm transition-opacity duration-200 bg-yellow-400 backdrop-blur-lg bg-opacity-5 border border-gray-200 rounded-lg shadow-sm opacity-0'
                    >
                        <div className='p-4'>
                            <p className='md:w-52 w-full text-primaryLight text-center leading-8 tracking-wide'>
                                <Trans i18nKey='subscribtion-paragraph' />
                            </p>
                        </div>
                        <div data-popper-arrow></div>
                    </div>
                    <div
                        data-popover-placement='bottom'
                        data-popover-target='popover3'
                        className='gap-6 outline w-72 md:h-full card outline-primary rounded-xl p-8 flex flex-col items-center justify-center'
                    >
                        <svg
                            className='fill-primary h-12 md:h-16'
                            version='1.1'
                            id='fi_726559'
                            xmlns='http://www.w3.org/2000/svg'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0px'
                            y='0px'
                            viewBox='0 0 512 512'
                            style={{ enableBackground: "new 0 0 512 512" }}
                            xmlSpace='preserve'
                        >
                            <g>
                                <g>
                                    <path d='M224,159.992v-32H32c-17.632,0-32,14.368-32,32v64h230.752C226.304,204.44,224,183.384,224,159.992z' />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path
                                        d='M510.688,287.992c-21.824,33.632-55.104,62.24-102.784,89.632c-7.328,4.192-15.584,6.368-23.904,6.368
			s-16.576-2.176-23.808-6.304c-47.68-27.456-80.96-56.096-102.816-89.696H0v160c0,17.664,14.368,32,32,32h448
			c17.664,0,32-14.336,32-32v-160H510.688z M144,383.992H80c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h64
			c8.832,0,16,7.168,16,16C160,376.824,152.832,383.992,144,383.992z'
                                    />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path
                                        d='M502.304,81.304l-112-48c-4.064-1.728-8.576-1.728-12.64,0l-112,48C259.808,83.8,256,89.592,256,95.992v64
			c0,88.032,32.544,139.488,120.032,189.888c2.464,1.408,5.216,2.112,7.968,2.112s5.504-0.704,7.968-2.112
			C479.456,299.608,512,248.152,512,159.992v-64C512,89.592,508.192,83.8,502.304,81.304z M444.512,154.008l-64,80
			c-3.072,3.776-7.68,5.984-12.512,5.984c-0.224,0-0.48,0-0.672,0c-5.088-0.224-9.792-2.848-12.64-7.104l-32-48
			c-4.896-7.36-2.912-17.28,4.448-22.176c7.296-4.864,17.248-2.944,22.176,4.448l19.872,29.792l50.304-62.912
			c5.536-6.88,15.616-7.968,22.496-2.496C448.896,137.016,449.984,147.096,444.512,154.008z'
                                    />
                                </g>
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                        </svg>

                        <h4 className='text-primaryLight font-bold text-center'>
                            <Trans i18nKey='payment' />
                        </h4>
                    </div>

                    <div
                        data-popover
                        id='popover3'
                        role='tooltip'
                        className='absolute z-10 invisible inline-block w-64 text-sm transition-opacity duration-200 bg-yellow-400 backdrop-blur-lg bg-opacity-5 border border-gray-200 rounded-lg shadow-sm opacity-0'
                    >
                        <div className='p-4'>
                            <p className='md:w-52 w-full text-primaryLight text-center leading-8 tracking-wide'>
                                <Trans i18nKey='payment-paragraph' />
                            </p>
                        </div>
                        <div data-popper-arrow></div>
                    </div>
                </div>
            </section>

            <section className='my-container quote bg-black bg-opacity-60'>
                <div className='flex flex-col w-full h-full gap-8 rounded-xl text-center justify-center items-center'>
                    <div className='flex flex-col gap-8'>
                        <div className='flex justify-center gap-4 items-center'>
                            <svg
                                className='fill-primary h-10 w-10'
                                id='fi_2502208'
                                enableBackground='new 0 0 512 512'
                                height='512'
                                viewBox='0 0 512 512'
                                width='512'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <g>
                                    <path d='m467 90h-174.787l64.393-64.393c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-79.393 79.393-79.393-79.394c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l64.393 64.394h-174.787c-24.813 0-45 20.187-45 45v302c0 24.813 20.187 45 45 45h45v15c0 8.284 6.716 15 15 15s15-6.716 15-15v-15h272v15c0 8.284 6.716 15 15 15s15-6.716 15-15v-15h45c24.813 0 45-20.187 45-45v-302c0-24.813-20.186-45-45-45zm15 347c0 8.271-6.729 15-15 15h-422c-8.271 0-15-6.729-15-15v-302c0-8.271 6.729-15 15-15h422c8.271 0 15 6.729 15 15z'></path>
                                    <path d='m377 150h-302c-8.284 0-15 6.716-15 15v242c0 8.284 6.716 15 15 15h302c8.284 0 15-6.716 15-15v-242c0-8.284-6.716-15-15-15zm-15 242h-272v-212h272z'></path>
                                    <circle cx='437' cy='195' r='15'></circle>
                                    <circle cx='437' cy='255' r='15'></circle>
                                    <path d='m437 300c-8.284 0-15 6.716-15 15v62c0 8.284 6.716 15 15 15s15-6.716 15-15v-62c0-8.284-6.716-15-15-15z'></path>
                                </g>
                            </svg>

                            <h2 className='text-primaryLight font-black'>
                                <Trans i18nKey='subscription-title' />
                            </h2>

                            <svg
                                className='fill-primary h-10 w-10'
                                id='fi_2502208'
                                enableBackground='new 0 0 512 512'
                                height='512'
                                viewBox='0 0 512 512'
                                width='512'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <g>
                                    <path d='m467 90h-174.787l64.393-64.393c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-79.393 79.393-79.393-79.394c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l64.393 64.394h-174.787c-24.813 0-45 20.187-45 45v302c0 24.813 20.187 45 45 45h45v15c0 8.284 6.716 15 15 15s15-6.716 15-15v-15h272v15c0 8.284 6.716 15 15 15s15-6.716 15-15v-15h45c24.813 0 45-20.187 45-45v-302c0-24.813-20.186-45-45-45zm15 347c0 8.271-6.729 15-15 15h-422c-8.271 0-15-6.729-15-15v-302c0-8.271 6.729-15 15-15h422c8.271 0 15 6.729 15 15z'></path>
                                    <path d='m377 150h-302c-8.284 0-15 6.716-15 15v242c0 8.284 6.716 15 15 15h302c8.284 0 15-6.716 15-15v-242c0-8.284-6.716-15-15-15zm-15 242h-272v-212h272z'></path>
                                    <circle cx='437' cy='195' r='15'></circle>
                                    <circle cx='437' cy='255' r='15'></circle>
                                    <path d='m437 300c-8.284 0-15 6.716-15 15v62c0 8.284 6.716 15 15 15s15-6.716 15-15v-62c0-8.284-6.716-15-15-15z'></path>
                                </g>
                            </svg>
                        </div>

                        <div className='h-1 w-full bg-primary rounded-full color-change-2x'></div>
                    </div>

                    <h4>
                        <Trans i18nKey='subscription-paragraph' />
                    </h4>
                </div>
            </section>

            <section className='bg-black my-container wrapper'>
                <div ref={marqueeRef} className='marquee flex gap-4'>
                    <div className='flex justify-between gap-4 w-full items-center'>
                        <img className='h-10 md:h-14' src={shahid} alt='shahid' />
                        <img className='h-10 md:h-14' src={netflix} alt='netflix' />
                        <img className='h-10 md:h-14' src={bein} alt='bein' />
                        <img className='h-10 md:h-14' src={mbc} alt='mbc' />
                        <img className='h-10 md:h-14' src={ssc} alt='ssc' />
                        <img className='h-10 md:h-14' src={hbo} alt='hbo' />
                    </div>
                    <div className='md:flex hidden justify-between gap-4 w-full items-center'>
                        <img className='h-14' src={osn} alt='osn' />
                        <img className='h-14' src={shahid} alt='shahid' />
                        <img className='h-14' src={netflix} alt='netflix' />
                        <img className='h-14' src={bein} alt='bein' />
                        <img className='h-14' src={mbc} alt='mbc' />
                        <img className='h-14' src={ssc} alt='ssc' />
                        <img className='h-14' src={hbo} alt='hbo' />
                    </div>
                    <div className='md:flex hidden justify-between gap-4 w-full items-center'>
                        <img className='h-14' src={osn} alt='osn' />
                        <img className='h-14' src={shahid} alt='shahid' />
                        <img className='h-14' src={netflix} alt='netflix' />
                        <img className='h-14' src={bein} alt='bein' />
                        <img className='h-14' src={mbc} alt='mbc' />
                        <img className='h-14' src={ssc} alt='ssc' />
                        <img className='h-14' src={hbo} alt='hbo' />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
