import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import "./../App.css";
import { Trans, useTranslation } from "react-i18next";
import bein from "./../assets/bein.png";
import mbc from "./../assets/mbc.png";
import ssc from "./../assets/ssc.png";
import shahid from "./../assets/shahid.png";
import hbo from "./../assets/hbo.svg";
import netflix from "./../assets/netflix.png";
import osn from "./../assets/osn.png";
import chooseUs from "./../assets/chooseUs.jpg";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import Whatsapp from "./Whatsapp";
import cookies from "js-cookie";
import i18n from "i18next";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";

function Hero() {
    const { t, i18n } = useTranslation();

    // Initialize language state from localStorage or default to 'en'
    const lng = localStorage.getItem("i18nextLng");
    const [language, setLanguage] = useState(lng);

    // Update the text direction on language change
    useEffect(() => {
        document.documentElement.dir = i18n.dir();
    }, [i18n.dir()]);

    // Change the language and update localStorage and i18n
    const changeLanguage = () => {
        const newLng = language === "ar" ? "en" : "ar";
        setLanguage(newLng);
        localStorage.setItem("i18next", newLng);
        i18n.changeLanguage(newLng);
    };

    // Swiper state and handler
    const [swiper, setSwiper] = useState(null);

    const handleSwiper = (swiperInstance) => {
        setSwiper(swiperInstance);
    };

    useEffect(() => {
        if (swiper) {
            swiper.update(); // Force Swiper to update on language change
        }
    }, [language, swiper]);

    // Marquee animation
    const marqueeRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const marquee = marqueeRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (marquee) {
                    if (entry.isIntersecting) {
                        setIsAnimating(true);
                    } else {
                        setIsAnimating(false);
                    }
                }
            },
            { threshold: 0.1 }
        );

        if (marquee) {
            observer.observe(marquee);
        }

        return () => {
            if (marquee) {
                observer.unobserve(marquee);
            }
        };
    }, [marqueeRef.current]);

    useEffect(() => {
        if (marqueeRef.current) {
            marqueeRef.current.style.animationPlayState = isAnimating ? "running" : "paused";
        }
    }, [isAnimating]);

    // Handle navbar scroll
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [navHidden, setNavHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll > lastScrollTop) {
                setNavHidden(true);
            } else {
                setNavHidden(false);
            }
            setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollTop]);
    return (
        <>
            <Navbar className={`md:py-3 py-4 md:px-20 px-4 bg-opacity-25 backdrop-blur-lg fixed z-20 shadow-lg ring-1 ring-black/5 w-full ${navHidden ? "hidden" : ""}`} rounded>
                <div className='flex items-center md:order-2 md:space-x-0 rtl:space-x-reverse'>
                    <NavbarToggle className='text-white hover:bg-transparent focus:bg-transparent' />
                    <button
                        onClick={changeLanguage}
                        type='button'
                        className='inline-flex items-center lg:text-xl text-sm text-black font-semibold bg-primary hover:bg-primaryHover outline outline-white outline-1 justify-center px-4 py-2 rounded-full cursor-pointer '
                    >
                        {lng === "ar" ? "English (UK)" : "العربية (KSA)"}
                    </button>
                </div>
                <NavbarBrand className='flex gap-2' href='#main'>
                    <img src={logo} className='h-28 md:h-24' alt='noor 4k Logo' />
                    <h3 className='lg:flex hidden font-semibold'>NOOR 4K</h3>
                </NavbarBrand>

                <NavbarCollapse className='uppercase'>
                    <ul className='md:flex md:flex-row flex-col gap-6'>
                        <a href='#main' className='nav-btn bg-primary text-black'>
                            {t("Home")}
                        </a>
                        <a href='#whyus' className='nav-btn text-white'>
                            {t("About Us")}
                        </a>
                        <a href='#contactus' className='nav-btn text-white'>
                            {t("Contact Us")}
                        </a>
                        <a href='#service' className='nav-btn text-white'>
                            {t("Services")}
                        </a>
                    </ul>
                </NavbarCollapse>
            </Navbar>

            <Whatsapp />

            <Swiper
                dir='rtl'
                id='main'
                key={language}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[Autoplay, Pagination]}
                onSwiper={handleSwiper}
                className='mySwiper'
            >
                <SwiperSlide key='cartoon' className='cartoon my-container gap-4'>
                    <h2 className='font-bold bg-black leading-normal rounded-xl px-4 py-1 text-center'>
                        <Trans i18nKey='hero-cartoon-subtitle' />
                    </h2>
                    <h1 className='font-black uppercase stroke-black text-stroke-3 lg:w-7/12 text-center tracking-wide leading-tight'>
                        <Trans i18nKey='hero-cartoon-title' />
                    </h1>
                    <a href='#service'>
                        <button className='btn uppercase text-black font-bold'>
                            <Trans i18nKey='hero-btn' />
                        </button>
                    </a>
                </SwiperSlide>
                <SwiperSlide key='movie' className='movie flex justify-center items-center my-container gap-4'>
                    <h2 className='font-bold bg-black leading-normal rounded-xl px-4 py-1 text-center'>
                        <Trans i18nKey='hero-movie-subtitle' />
                    </h2>
                    <h1 className='font-black uppercase stroke-black text-stroke-3 lg:w-3/5 text-center tracking-wide leading-tight'>
                        <Trans i18nKey='hero-movie-title' />
                    </h1>
                    <a href='#service'>
                        <button className='btn uppercase text-black font-bold'>
                            <Trans i18nKey='hero-movie-btn' />
                        </button>
                    </a>
                </SwiperSlide>
                <SwiperSlide key='anime' className='anime flex justify-center items-center my-container gap-4'>
                    <h2 className='font-bold bg-black leading-normal uppercase rounded-xl px-4 py-1 text-center'>
                        <Trans i18nKey='hero-anime-subtitle' />
                    </h2>
                    <h1 className='font-black uppercase stroke-black text-stroke-3 lg:w-3/5 text-center tracking-wide leading-tight'>
                        <Trans i18nKey='hero-anime-title' />
                    </h1>
                    <a href='#service'>
                        <button className='btn uppercase text-black font-bold'>
                            <Trans i18nKey='hero-anime-btn' />
                        </button>
                    </a>
                </SwiperSlide>
                <SwiperSlide className='sport flex justify-center items-center my-container gap-4'>
                    <h2 className='font-bold bg-black leading-normal uppercase rounded-xl px-4 py-1 text-center'>
                        <Trans i18nKey='hero-sport-subtitle' />
                    </h2>
                    <h1 className='font-black uppercase stroke-black text-stroke-3 lg:w-3/5 text-center tracking-wide leading-tight'>
                        <Trans i18nKey='hero-sport-title' />
                    </h1>
                    <a href='#service'>
                        <button className='btn uppercase text-black font-bold'>
                            <Trans i18nKey='hero-sport-btn' />
                        </button>
                    </a>
                </SwiperSlide>
                <SwiperSlide className='music flex justify-center items-center my-container gap-4'>
                    <h2 className='font-bold bg-black leading-normal uppercase rounded-xl px-4 py-1 text-center'>
                        <Trans i18nKey='hero-music-subtitle' />
                    </h2>
                    <h1 className='font-black uppercase stroke-black text-stroke-3 lg:w-3/5 text-center tracking-wide leading-tight'>
                        <Trans i18nKey='hero-music-title' />
                    </h1>
                    <a href='#service'>
                        <button className='btn uppercase text-black font-bold'>
                            <Trans i18nKey='hero-music-btn' />
                        </button>
                    </a>
                </SwiperSlide>
            </Swiper>

            <section className='bg-black my-container '>
                <div className='flex flex-col gap-12 justify-center items-center'>
                    <h2 className='tracking-wide uppercase text-center'>
                        <Trans i18nKey='try'></Trans>
                    </h2>
                    <div className='flex flex-col md:flex-row w-full md:h-52 justify-center gap-12 items-center'>
                        <div
                            data-aos='fade-up'
                            data-popover-placement='top'
                            data-popover-target='popover-default'
                            className='gap-6 sm:basis-1/3 w-full hover:border-[#93783e90] md:h-full card border border-[#55533340] rounded-xl p-8 flex flex-col items-center justify-center'
                        >
                            <svg className='fill-primary h-12 md:h-16' id='fi_15867239' enableBackground='new 0 0 100 100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
                                <path d='m49.9068451 25.7795715c-13.4143944 0-24.4067478 10.9923515-24.4067478 24.4067421s10.9923534 24.4067421 24.4067402 24.4067421 24.4067383-10.9923515 24.4067383-24.4067421c.0000152-13.4143905-10.9923363-24.4067421-24.4067307-24.4067421zm1.8631096 30.7413216-4.4037857 4.4037857c-.6547585.6547585-1.7163315.6547585-2.3710899 0l-8.6212616-8.6212616c-.6547585-.6547623-.6547585-1.7163353 0-2.3710938l3.2182388-3.2182388c.6547585-.6547585 1.7163315-.6547585 2.3710938 0l4.2174759 4.2174759 11.669979-11.5008468c.6561203-.6466103 1.7110252-.6427612 2.3624077.0086212l3.218174 3.2181778c.6581383.6581383.6542397 1.7263947-.0086861 2.379715zm-1.8631096-30.7413216c-13.4143944 0-24.4067478 10.9923515-24.4067478 24.4067421s10.9923534 24.4067421 24.4067402 24.4067421 24.4067383-10.9923515 24.4067383-24.4067421c.0000152-13.4143905-10.9923363-24.4067421-24.4067307-24.4067421zm1.8631096 30.7413216-4.4037857 4.4037857c-.6547585.6547585-1.7163315.6547585-2.3710899 0l-8.6212616-8.6212616c-.6547585-.6547623-.6547585-1.7163353 0-2.3710938l3.2182388-3.2182388c.6547585-.6547585 1.7163315-.6547585 2.3710938 0l4.2174759 4.2174759 11.669979-11.5008468c.6561203-.6466103 1.7110252-.6427612 2.3624077.0086212l3.218174 3.2181778c.6581383.6581383.6542397 1.7263947-.0086861 2.379715zm-1.8631096-30.7413216c-13.4143944 0-24.4067478 10.9923515-24.4067478 24.4067421s10.9923534 24.4067421 24.4067402 24.4067421 24.4067383-10.9923515 24.4067383-24.4067421c.0000152-13.4143905-10.9923363-24.4067421-24.4067307-24.4067421zm1.8631096 30.7413216-4.4037857 4.4037857c-.6547585.6547585-1.7163315.6547585-2.3710899 0l-8.6212616-8.6212616c-.6547585-.6547623-.6547585-1.7163353 0-2.3710938l3.2182388-3.2182388c.6547585-.6547585 1.7163315-.6547585 2.3710938 0l4.2174759 4.2174759 11.669979-11.5008468c.6561203-.6466103 1.7110252-.6427612 2.3624077.0086212l3.218174 3.2181778c.6581383.6581383.6542397 1.7263947-.0086861 2.379715zm41.7336616 1.8631096c-1.3041687-2.235733-.9315491-5.2167091.7452469-7.2661324l1.6768036-1.8631096c2.4220505-2.7946663 2.0494232-7.0798187-1.1178589-9.3155518l-2.0494232-1.3041801c-2.2357254-1.4904861-3.1672821-4.2851524-2.4220428-6.8935108l.7452469-2.4220409c1.1178589-3.5399094-1.3041763-7.2661304-5.0303955-7.8250656l-2.4220505-.3726158c-2.6083527-.3726234-4.6577759-2.4220428-5.216713-5.0303974l-.3726196-2.4220448c-.5589371-3.7262201-4.2851562-5.9619527-8.0113678-4.8440876l-2.4220428.745244c-2.6083603.7452431-5.4030228-.1863117-6.8935089-2.4220443l-1.4904861-2.0494218c-2.2357368-2.9809766-6.5208855-3.5399101-9.3155518-.9315553l-1.8631096 1.6767983c-2.0494194 1.8631105-4.8440857 2.2357321-7.2661324.9315553l-2.2357368-1.117867c-3.3535957-1.8631103-7.4524403-.3726215-8.7566185 3.1672878l-.9315548 2.2357321c-.9315548 2.4220438-3.5399132 4.0988417-6.148262 3.9125299l-2.0494251-.3726158c-3.7262211-.1863117-6.8935099 2.9809771-6.5208864 6.7071981l.1863079 2.4220409c.1863089 2.6083546-1.3041782 5.2167091-3.9125319 6.1482639l-2.235734.9315548c-3.5399084 1.4904861-4.8440871 5.5893326-2.9809771 8.7566185l1.3041787 2.0494194c1.3041787 2.235733.9315553 5.2167091-.7452435 7.2661324l-1.6767983 1.8631096c-2.4220419 2.7946663-2.049422 7.0798187 1.117867 9.3155518l2.0494218 1.3041763c2.2357335 1.49049 3.1672893 4.2851562 2.4220424 6.8935089l-.745244 2.4220428c-1.1178665 3.539917 1.3041792 7.2661362 5.0303955 7.8250656l2.4220419.3726273c2.6083565.3726196 4.6577759 2.4220428 5.2167072 5.0303955l.3726234 2.4220428c.5589314 3.7262192 4.2851524 5.9619522 8.0113735 4.8440857l2.4220428-.7452469c2.6083565-.7452469 5.403019.1863098 6.8935089 2.4220428l1.4904861 2.0494156c2.235733 2.9809723 6.5208855 3.539917 9.3155518.9315567l1.8631096-1.6768036c2.0494194-1.8631058 4.8440819-2.235733 7.2661324-.9315567l2.235733 1.1178665c3.3535995 1.8631058 7.4524384.3726196 8.7566223-3.1672897l.9315491-2.235733c.9315567-2.4220428 3.539917-4.0988464 6.1482697-3.912529l2.4220505.1863098c3.7262192.1863022 6.8935013-2.9809799 6.5208893-6.7071991l-.1863098-2.4220428c-.1863098-2.6083527 1.3041687-5.2167053 3.912529-6.148262l2.2357254-.9315567c3.5399094-1.4904861 4.8440857-5.5893288 2.9809723-8.7566147zm-43.5967712 23.1025696c-17.3269234 0-31.4865589-14.1596375-31.4865589-31.4865646s14.1596355-31.4865665 31.4865665-31.4865665 31.4865646 14.1596394 31.4865646 31.4865665c-.0000152 17.5132369-14.159645 31.4865646-31.4865722 31.4865646z' />
                            </svg>
                            <h4 className='text-primaryLight font-bold text-center'>
                                <Trans i18nKey='official-agent' />
                            </h4>
                        </div>

                        <div
                            data-aos='fade-down'
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
                            data-aos='fade-down'
                            data-popover-placement='bottom'
                            data-popover-target='popover2'
                            className='gap-6 sm:basis-1/3 hover:border-[#93783e90] w-full md:h-full card border border-[#55533340] rounded-xl p-8 flex flex-col items-center justify-center'
                        >
                            <svg
                                className='fill-primary h-12 md:h-16 md:w-16 w-12'
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
                            data-aos='fade-up'
                            data-popover-placement='bottom'
                            data-popover-target='popover3'
                            className='gap-6 sm:basis-1/3 hover:border-[#93783e90] w-full md:h-full card border border-[#55533340] rounded-xl p-8 flex flex-col items-center justify-center'
                        >
                            <svg
                                className='fill-primary h-12 md:h-16 w-12 md:w-16'
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
                    <div className='flex justify-center lg:justify-between gap-4 w-full items-center'>
                        <img className='h-10 md:h-14' src={shahid} alt='shahid' />
                        <img className='h-10 md:h-14' src={netflix} alt='netflix' />
                        <img className='h-10 md:h-14' src={bein} alt='bein' />
                        <img className='h-10 md:h-14' src={mbc} alt='mbc' />
                        <img className='h-10 md:h-14' src={ssc} alt='ssc' />
                        <img className='h-10 md:h-14' src={hbo} alt='hbo' />
                        <img className='h-10 md:h-14' src={shahid} alt='shahid' />
                        <img className='h-10 md:h-14' src={netflix} alt='netflix' />
                        <img className='h-10 md:h-14' src={bein} alt='bein' />
                        <img className='h-10 md:h-14' src={mbc} alt='mbc' />
                        <img className='h-10 md:h-14' src={ssc} alt='ssc' />
                        <img className='h-10 md:h-14' src={hbo} alt='hbo' />
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

            {/* channels */}

            <section id='service' className='my-container bg-black gap-10'>
                <div className='flex flex-col gap-2 text-center'>
                    <h2 className='font-black uppercase'>
                        <Trans i18nKey='countries-title'></Trans>
                    </h2>
                    <h4 className='capitalize tracking-wide'>
                        <Trans i18nKey='countries-subtitle'></Trans>
                    </h4>
                </div>
                <div data-aos='zoom-in' className='grid md:grid-cols-5 w-full justify-between sm:grid-cols-4 grid-cols-2 gap-8'>
                    {/* arabic */}
                    <div className='flex gap-3 items-center rounded-2xl justify-center card p-4'>
                        <svg className='h-14 w-14 fill-primary' height={512} viewBox='0 0 56 56' width={512} xmlns='http://www.w3.org/2000/svg'>
                            <g>
                                <path d='M23 55.932V44H11.883C14.15 50.7 18.25 55.354 23 55.932zM11.307 22A38.087 38.087 0 0010 32a38.738 38.738 0 001.278 10H23V27.206A18.9 18.9 0 0120.69 22zM9.813 44H3.229A24.122 24.122 0 0016.2 54.693 24.612 24.612 0 019.813 44zM8 32a40.233 40.233 0 011.245-10H2.192a23.911 23.911 0 000 20h7.041A40.292 40.292 0 018 32zM20.261 20a18.482 18.482 0 011.9-11.775C17.912 9.231 14.083 13.6 11.9 20zM16.128 9.318A23.779 23.779 0 003.217 20H9.8a24.259 24.259 0 016.328-10.682zM25 44v11.92c4.71-.577 8.824-5.181 11.1-11.92zM31.827 54.682A24.113 24.113 0 0044.771 44H38.2a24.474 24.474 0 01-6.373 10.682zM36.721 18.95a11.948 11.948 0 01-1.538-13.324 12 12 0 1014.461 16.91 11.947 11.947 0 01-12.923-3.586zM37.792 35.939A18.932 18.932 0 0125 29.8V42h11.709c.527-1.987.89-4.014 1.083-6.061zM43.048 12.232l-.226 1.381L43.936 13a1.338 1.338 0 011.3 0l1.115.614-.227-1.383c-.07-.43.068-.868.37-1.181l1-1.025-1.333-.2a1.353 1.353 0 01-1.022-.766l-.555-1.179-.554 1.178c-.192.41-.576.699-1.024.767l-1.332.2 1 1.022c.306.313.444.753.374 1.185zM38.778 42h7.031a23.816 23.816 0 002.119-8.238 18.86 18.86 0 01-8.118 2.2A39.161 39.161 0 0138.778 42z' />
                                <path d='M39 0c-9.389 0-17 7.611-17 17s7.611 17 17 17 17-7.611 17-17C55.99 7.615 48.385.01 39 0zm.071 9.148c.16-.484.578-.838 1.082-.915l2.214-.333.994-2.114a1.351 1.351 0 012.451 0l1 2.113 2.213.337a1.37 1.37 0 01.762 2.314l-1.633 1.671.387 2.364a1.363 1.363 0 01-.561 1.344c-.42.3-.977.33-1.428.079l-1.96-1.081-1.96 1.081a1.334 1.334 0 01-1.428-.079 1.362 1.362 0 01-.56-1.346l.385-2.362-1.632-1.67a1.373 1.373 0 01-.326-1.403zM48.1 27.64A14 14 0 1137.275 3.116a1 1 0 01.888 1.635 9.994 9.994 0 0012.808 14.977 1 1 0 011.477 1.131A13.911 13.911 0 0148.1 27.64z' />
                            </g>
                        </svg>

                        <h5>
                            <Trans i18nKey='arabic'></Trans>
                        </h5>
                    </div>
                    {/* iraq */}
                    <div className='flex gap-3 items-center rounded-2xl justify-center card p-4'>
                        <svg className='h-14' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg' id='fi_11948754'>
                            <g id='Layer_2' data-name='Layer 2'>
                                <g id='Flag_rectangle_copy_6' data-name='Flag_rectangle copy 6'>
                                    <g id='Iraq'>
                                        <path
                                            d='m507 341.33a742.7 742.7 0 0 1 -13 75.81c-8.17 34-42.81 68.67-76.83 76.83a735 735 0 0 1 -156.17 18.03h-10a735.26 735.26 0 0 1 -156.15-18c-34-8.15-68.64-42.8-76.83-76.83a742.7 742.7 0 0 1 -13.02-75.84 725 725 0 0 1 0-170.67 741.39 741.39 0 0 1 13-75.79c8.19-34 42.87-68.68 76.83-76.84a729.18 729.18 0 0 1 322.3 0c34 8.17 68.66 42.85 76.83 76.84a741.39 741.39 0 0 1 13 75.79 725 725 0 0 1 .04 170.67z'
                                            fill='#f2f2f2'
                                        />
                                        <path d='m507 341.33a742.7 742.7 0 0 1 -13 75.81c-8.17 34-42.81 68.67-76.83 76.83a735 735 0 0 1 -156.17 18.03h-10a735.26 735.26 0 0 1 -156.15-18c-34-8.15-68.64-42.8-76.83-76.83a742.7 742.7 0 0 1 -13.02-75.84z' />
                                        <path
                                            d='m507 170.66h-502a741.39 741.39 0 0 1 13-75.79c8.19-34 42.87-68.68 76.83-76.84a729.18 729.18 0 0 1 322.3 0c34 8.17 68.66 42.85 76.83 76.84a741.39 741.39 0 0 1 13.04 75.79z'
                                            fill='#cd1125'
                                        />
                                        <g fill='#017b3d'>
                                            <path d='m211 208.11 6.19 8.92a83 83 0 0 0 -7.62 6c-11 10.84-21.82 21.79-32.68 32.73-1.64 1.66-3.14 3.47-5.63 6.25h7.45c11.76-.18 23.52-.41 35.29-.51 3.14 0 5.26-.45 6-4.29s12.12-11.1 15.91-10.7c3 .31 13.4 9.51 13.45 12.43.18 11.87.07 23.74.07 35.93h-134.09c-5.11 13.56-15.34 18.29-25.34 14.94 2-1.36 3.61-2.48 5.24-3.51 8.13-5.08 10-8.58 7.56-17.89-1.57-6.05-4.48-11.76-6.88-17.85l12.74-6.7c.07 8.56 1.74 10.51 10.51 11.48a62.47 62.47 0 0 0 6.42.36c8.68.05 9.73.38 8.68-5.87a38.93 38.93 0 0 0 -1.92-5.88l11.7-8.24v18.36h93.44c0-4.23.22-8.28-.14-12.29a1.91 1.91 0 0 0 -.58-1 2.64 2.64 0 0 0 -4.35.84 2.41 2.41 0 0 0 -.1.43c-1.24 9-1.18 9-10.38 9q-28.84 0-57.7 0h-5.3c-1.11-8.82-.88-15.52 10.19-22 16-9.39 29-22.83 39.19-38.34a11.87 11.87 0 0 1 2.68-2.6z' />
                                            <path d='m375.18 216.58c-3.58 2.56-4.71 5.75-4.59 10.13.38 14 .34 28 .44 41.94 0 1.68-.16 3.36-.25 5.17h-7.53v-46.62c-10.71 7.77-10.71 7.77-10.7 18.69v16.69 11.18h-7.89v-31.21l-12.06 10.58c.34 3.65.59 6.4.88 9.36-2.5 0-4.22 0-6 0-5.26 0-9.33 2.32-11.34 7.19-3.35 8.13-3.24 16.56-1.94 24.94h67.3v-83.85c-2.36 2.23-4.15 4.23-6.32 5.81zm-44.11 58.06a1.55 1.55 0 0 1 -.65.12 2.16 2.16 0 0 1 -1.12-.48 2.2 2.2 0 0 1 0-3.53 1.7 1.7 0 0 1 .74-.31 2.16 2.16 0 0 1 .75.06 2.21 2.21 0 0 1 .28 4.14z' />
                                            <path d='m422 294.91h-29.82v-87.8l14.59 8.07c-5 5.91-2.9 13.23-3 20.16-.24 11.75-.05 23.51 0 35.26 0 5.46 2.16 6.72 6.86 3.94a54.43 54.43 0 0 0 4.38-3.27c2.29 7.92 4.56 15.51 6.99 23.64z' />
                                            <path d='m281.67 271.35c2.44 8 4.67 15.43 7.09 23.41h-29.66v-87.63l13.17 7.45c-.66 5.31-1.68 10-1.76 14.67-.24 13.51-.15 27-.06 40.54a30.15 30.15 0 0 0 1.11 5.71c2.47-.64 5-1.18 7.41-2 .83-.24 1.45-1.12 2.7-2.15z' />
                                            <path d='m362.27 212.59a.79.79 0 0 1 .46.79c-.14 2 .14 4.36-.9 5.62-1.24 1.49-4.22 2.81-6 2.37-3.81-1-6.9-.33-10.38 1.16-3.23 1.39-6.24.69-9-1.25a.8.8 0 0 1 .56-1.44c4.31.49 8.31-.06 11.67-3.6a2.66 2.66 0 0 1 2.56 0c4.86 3.42 7.77 1.33 9.89-3.22a.8.8 0 0 1 1.06-.4z' />
                                            <path d='m134.44 303.19a2.54 2.54 0 0 1 -.08 3.9c-1.36 1.08-2.36 1.91-3.36 1.91-1.3 0-3.75-2.65-3.54-3.66a6.09 6.09 0 0 1 3.93-3.93c.76-.21 1.74.64 3.05 1.78z' />
                                            <path d='m347.86 210.58c-.59-2.79-1.17-5.59-1.76-8.39a.86.86 0 0 1 1.26-.92c4.32 2.43 2.87 5.94 2.17 9.3a.84.84 0 0 1 -.67.67.84.84 0 0 1 -1-.66z' />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>

                        <h5>
                            <Trans i18nKey='iraq'></Trans>
                        </h5>
                    </div>
                    {/* english */}
                    <div className='flex gap-3 items-center rounded-2xl justify-center card p-4'>
                        <svg
                            className='h-14'
                            version='1.1'
                            id='fi_299688'
                            xmlns='http://www.w3.org/2000/svg'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0px'
                            y='0px'
                            viewBox='0 0 512 512'
                            style={{ enableBackground: "new 0 0 512 512" }}
                            xmlSpace='preserve'
                        >
                            <path
                                style={{ fill: "#41479B" }}
                                d='M400,512H112C50.144,512,0,461.856,0,400V112C0,50.144,50.144,0,112,0h288
	c61.856,0,112,50.144,112,112v288C512,461.856,461.856,512,400,512z'
                            />
                            <g>
                                <path
                                    style={{ fill: "#F5F5F5" }}
                                    d='M512,399.989v-24.587l-79.419-52.033H512v-26.948H296.421V512h26.947V348.46L494.3,460.45
		c6.054-9.425,10.728-19.82,13.75-30.896'
                                />
                                <path
                                    style={{ fill: "#F5F5F5" }}
                                    d='M7.531,440.443c2.728,7.04,6.142,13.738,10.168,20.007l170.932-111.99V512h26.947V296.421H0v26.948
		h79.419L0,375.402V400c0,4.306,0.252,8.553,0.725,12.733'
                                />
                                <path
                                    style={{ fill: "#F5F5F5" }}
                                    d='M0,115.807v20.791l79.419,52.034H0v26.947h215.579V0h-26.947v163.54L17.699,51.55
		C11.056,61.893,6.073,73.402,3.114,85.7'
                                />
                                <path
                                    style={{ fill: "#F5F5F5" }}
                                    d='M504.321,71.169c-2.702-6.899-6.068-13.466-10.021-19.62L323.368,163.54V0h-26.947v215.579H512
		v-26.947h-79.419L512,136.598V112c0-4.46-0.269-8.858-0.776-13.182'
                                />
                            </g>
                            <g>
                                <polygon
                                    style={{ fill: "#FF4B55" }}
                                    points='296.421,0 215.579,0 215.579,215.579 0,215.579 0,296.421 215.579,296.421 215.579,512 
		296.421,512 296.421,296.421 512,296.421 512,215.579 296.421,215.579 	'
                                />
                                <path
                                    style={{ fill: "#FF4B55" }}
                                    d='M138.395,323.369L0.725,412.733c1.094,9.663,3.414,18.953,6.807,27.71l180.359-117.075h-49.496
		L138.395,323.369L138.395,323.369z'
                                />
                                <path
                                    style={{ fill: "#FF4B55" }}
                                    d='M344.465,323.369l163.586,106.186C510.62,420.138,512,410.231,512,400v-0.011l-118.039-76.621
		L344.465,323.369L344.465,323.369z'
                                />
                                <path
                                    style={{ fill: "#FF4B55" }}
                                    d='M161.684,188.632L3.114,85.7C1.083,94.136,0,102.941,0,112v3.807l112.188,72.825L161.684,188.632
		L161.684,188.632z'
                                />
                                <path style={{ fill: "#FF4B55" }} d='M372.863,188.632l138.36-89.814c-1.131-9.644-3.481-18.914-6.902-27.648L323.368,188.632H372.863z' />
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

                        <h5>
                            <Trans i18nKey='english'></Trans>
                        </h5>
                    </div>
                    {/* american */}
                    <div className='flex gap-3 items-center rounded-2xl justify-center card p-4'>
                        <svg className='h-14' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 512 512' xmlSpace='preserve'>
                            <g fill='#f5f5f5'>
                                <path d='M0 118.15H512V157.53H0z' />
                                <path d='M485.264 39.385H26.736C17.028 50.773 9.557 64.126 5.013 78.77h501.974c-4.544-14.644-12.015-27.997-21.723-39.385z' />
                                <path d='M0 196.92H512V236.29999999999998H0z' />
                                <path d='M0 275.69H512V315.07H0z' />
                                <path d='M0 354.46H512V393.84H0z' />
                                <path d='M506.987 433.231H5.013c4.543 14.644 12.015 27.996 21.723 39.384h458.527c9.709-11.388 17.18-24.74 21.724-39.384z' />
                            </g>
                            <g fill='#ff4b55'>
                                <path d='M400 0H112C77.852 0 47.279 15.287 26.736 39.385h458.527C464.721 15.287 434.148 0 400 0z' />
                                <path d='M0 157.54H512V196.92H0z' />
                                <path d='M512 112c0-11.571-1.755-22.731-5.013-33.23H5.013C1.755 89.269 0 100.429 0 112v6.154h512V112z' />
                                <path d='M0 236.31H512V275.69H0z' />
                                <path d='M512 400v-6.154H0V400c0 11.571 1.755 22.731 5.013 33.231h501.974c3.258-10.5 5.013-21.66 5.013-33.231zM485.264 472.615H26.736C47.279 496.713 77.852 512 112 512h288c34.148 0 64.721-15.287 85.264-39.385z' />
                                <path d='M0 315.08H512V354.46H0z' />
                            </g>
                            <path d='M275.692 0H112C50.144 0 0 50.144 0 112v163.692h275.692V0z' fill='#41479b' />
                            <g fill='#f5f5f5'>
                                <path d='M29.745 43.063c-.262.829.681 1.515 1.389 1.009l5.463-3.904 5.463 3.904c.707.506 1.651-.18 1.389-1.009l-2.025-6.402 5.402-3.989c.699-.517.339-1.626-.531-1.633l-6.714-.052-1.146-3.436a112.521 112.521 0 00-8.23 7.952l1.567 1.158-2.027 6.402zM37.455 77.755l2.124 6.37 6.714.052c.869.007 1.23 1.116.531 1.633l-5.402 3.989 2.025 6.402c.262.829-.681 1.514-1.389 1.009l-5.463-3.905-5.463 3.905c-.707.506-1.651-.18-1.389-1.009l2.025-6.402-5.402-3.989c-.699-.516-.339-1.626.53-1.633l6.714-.052 2.124-6.37c.279-.825 1.446-.825 1.721 0zM37.455 136.688l2.124 6.37 6.714.052c.869.007 1.23 1.116.531 1.633l-5.402 3.989 2.025 6.402c.262.829-.681 1.514-1.389 1.009l-5.463-3.904-5.463 3.904c-.707.505-1.651-.18-1.389-1.009l2.025-6.402-5.402-3.989c-.699-.516-.339-1.626.53-1.633l6.714-.052 2.124-6.37c.279-.825 1.446-.825 1.721 0zM37.455 190.834l2.124 6.37 6.714.052c.869.007 1.23 1.116.531 1.633l-5.402 3.989 2.025 6.402c.262.829-.681 1.514-1.389 1.009l-5.463-3.905-5.463 3.905c-.707.505-1.651-.18-1.389-1.009l2.025-6.402-5.402-3.989c-.699-.516-.339-1.626.53-1.633l6.714-.052 2.124-6.37c.279-.825 1.446-.825 1.721 0zM37.455 240.106l2.124 6.37 6.714.052c.869.007 1.23 1.116.531 1.633l-5.402 3.989 2.025 6.402c.262.829-.681 1.514-1.389 1.009l-5.463-3.904-5.463 3.904c-.707.505-1.651-.18-1.389-1.009l2.025-6.402-5.402-3.989c-.699-.516-.339-1.626.53-1.633l6.714-.052 2.124-6.37c.279-.825 1.446-.825 1.721 0zM63.318 49.781l2.124 6.37 6.714.052c.869.007 1.23 1.116.531 1.632l-5.402 3.989 2.025 6.402c.262.829-.681 1.515-1.389 1.009L62.46 65.33l-5.463 3.905c-.707.506-1.651-.18-1.389-1.009l2.025-6.402-5.401-3.989c-.699-.516-.339-1.626.53-1.632l6.714-.052 2.124-6.37c.276-.825 1.443-.825 1.718 0zM63.318 108.714l2.124 6.37 6.714.052c.869.007 1.23 1.116.531 1.633l-5.402 3.989 2.025 6.402c.262.829-.681 1.515-1.389 1.009l-5.463-3.905-5.463 3.905c-.707.506-1.651-.18-1.389-1.009l2.025-6.402-5.401-3.989c-.699-.516-.339-1.626.53-1.633l6.714-.052 2.124-6.37c.278-.825 1.445-.825 1.72 0zM63.318 164.705l2.124 6.37 6.714.052c.869.007 1.23 1.116.531 1.633l-5.402 3.989 2.025 6.402c.262.829-.681 1.514-1.389 1.009l-5.463-3.905-5.463 3.905c-.707.506-1.651-.18-1.389-1.009l2.025-6.402-5.401-3.989c-.699-.516-.339-1.626.53-1.633l6.714-.052 2.124-6.37c.278-.824 1.445-.824 1.72 0zM63.318 214.987l2.124 6.37 6.714.052c.869.007 1.23 1.116.531 1.633l-5.402 3.989 2.025 6.402c.262.829-.681 1.515-1.389 1.009l-5.463-3.904-5.463 3.904c-.707.506-1.651-.18-1.389-1.009l2.025-6.402-5.401-3.989c-.699-.516-.339-1.626.53-1.633l6.714-.052 2.124-6.37c.278-.825 1.445-.825 1.72 0zM89.181 24.618l2.124 6.37 6.714.052c.869.007 1.23 1.116.531 1.632l-5.402 3.989 2.025 6.402c.262.829-.681 1.514-1.389 1.009l-5.463-3.905-5.463 3.905c-.707.506-1.651-.18-1.389-1.009l2.025-6.402-5.401-3.989c-.699-.516-.339-1.626.53-1.632l6.714-.052 2.124-6.37c.278-.824 1.445-.824 1.72 0zM89.181 77.755l2.124 6.37 6.714.052c.869.007 1.23 1.116.531 1.633l-5.402 3.989 2.025 6.402c.262.829-.681 1.514-1.389 1.009l-5.463-3.905-5.463 3.905c-.707.506-1.651-.18-1.389-1.009l2.025-6.402-5.401-3.989c-.699-.516-.339-1.626.53-1.633l6.714-.052 2.124-6.37c.278-.825 1.445-.825 1.72 0zM89.181 136.688l2.124 6.37 6.714.052c.869.007 1.23 1.116.531 1.633l-5.402 3.989 2.025 6.402c.262.829-.681 1.514-1.389 1.009l-5.463-3.904-5.463 3.904c-.707.505-1.651-.18-1.389-1.009l2.025-6.402-5.401-3.989c-.699-.516-.339-1.626.53-1.633l6.714-.052 2.124-6.37c.278-.825 1.445-.825 1.72 0zM89.181 190.834l2.124 6.37 6.714.052c.869.007 1.23 1.116.531 1.633l-5.402 3.989 2.025 6.402c.262.829-.681 1.514-1.389 1.009l-5.463-3.905-5.463 3.905c-.707.505-1.651-.18-1.389-1.009l2.025-6.402-5.401-3.989c-.699-.516-.339-1.626.53-1.633l6.714-.052 2.124-6.37c.278-.825 1.445-.825 1.72 0zM89.181 240.106l2.124 6.37 6.714.052c.869.007 1.23 1.116.531 1.633l-5.402 3.989 2.025 6.402c.262.829-.681 1.514-1.389 1.009l-5.463-3.904-5.463 3.904c-.707.505-1.651-.18-1.389-1.009l2.025-6.402-5.401-3.989c-.699-.516-.339-1.626.53-1.633l6.714-.052 2.124-6.37c.278-.825 1.445-.825 1.72 0zM115.044 49.781l2.124 6.37 6.714.052c.869.007 1.23 1.116.53 1.632l-5.401 3.989 2.025 6.402c.262.829-.681 1.515-1.389 1.009l-5.463-3.905-5.463 3.905c-.707.506-1.651-.18-1.389-1.009l2.025-6.402-5.402-3.989c-.699-.516-.339-1.626.531-1.632l6.714-.052 2.124-6.37c.279-.825 1.445-.825 1.72 0zM115.044 108.714l2.124 6.37 6.714.052c.869.007 1.23 1.116.53 1.633l-5.401 3.989 2.025 6.402c.262.829-.681 1.515-1.389 1.009l-5.463-3.905-5.463 3.905c-.707.506-1.651-.18-1.389-1.009l2.025-6.402-5.402-3.989c-.699-.516-.339-1.626.531-1.633l6.714-.052 2.124-6.37c.279-.825 1.445-.825 1.72 0zM115.044 164.705l2.124 6.37 6.714.052c.869.007 1.23 1.116.53 1.633l-5.401 3.989 2.025 6.402c.262.829-.681 1.514-1.389 1.009l-5.463-3.905-5.463 3.905c-.707.506-1.651-.18-1.389-1.009l2.025-6.402-5.402-3.989c-.699-.516-.339-1.626.531-1.633l6.714-.052 2.124-6.37c.279-.824 1.445-.824 1.72 0zM115.044 214.987l2.124 6.37 6.714.052c.869.007 1.23 1.116.53 1.633l-5.401 3.989 2.025 6.402c.262.829-.681 1.515-1.389 1.009l-5.463-3.904-5.463 3.904c-.707.506-1.651-.18-1.389-1.009l2.025-6.402-5.402-3.989c-.699-.516-.339-1.626.531-1.633l6.714-.052 2.124-6.37c.279-.825 1.445-.825 1.72 0zM140.907 24.618l2.124 6.37 6.714.052c.869.007 1.23 1.116.53 1.632l-5.401 3.989 2.025 6.402c.262.829-.681 1.514-1.389 1.009l-5.463-3.905-5.463 3.905c-.707.506-1.651-.18-1.389-1.009l2.025-6.402-5.401-3.989c-.699-.516-.339-1.626.531-1.632l6.714-.052 2.124-6.37c.278-.824 1.444-.824 1.719 0zM140.907 77.755l2.124 6.37 6.714.052c.869.007 1.23 1.116.53 1.633l-5.401 3.989L146.9 96.2c.262.829-.681 1.514-1.389 1.009l-5.463-3.905-5.463 3.905c-.707.506-1.651-.18-1.389-1.009l2.025-6.402-5.401-3.989c-.699-.516-.339-1.626.531-1.633l6.714-.052 2.124-6.37c.277-.824 1.443-.824 1.718.001zM140.907 136.688l2.124 6.37 6.714.052c.869.007 1.23 1.116.53 1.633l-5.401 3.989 2.025 6.402c.262.829-.681 1.514-1.389 1.009l-5.463-3.904-5.463 3.904c-.707.505-1.651-.18-1.389-1.009l2.025-6.402-5.401-3.989c-.699-.516-.339-1.626.531-1.633l6.714-.052 2.124-6.37c.278-.825 1.444-.825 1.719 0zM140.907 190.834l2.124 6.37 6.714.052c.869.007 1.23 1.116.53 1.633l-5.401 3.989 2.025 6.402c.262.829-.681 1.514-1.389 1.009l-5.463-3.905-5.463 3.905c-.707.505-1.651-.18-1.389-1.009l2.025-6.402-5.401-3.989c-.699-.516-.339-1.626.531-1.633l6.714-.052 2.124-6.37c.278-.825 1.444-.825 1.719 0zM140.907 240.106l2.124 6.37 6.714.052c.869.007 1.23 1.116.53 1.633l-5.401 3.989 2.025 6.402c.262.829-.681 1.514-1.389 1.009l-5.463-3.904-5.463 3.904c-.707.505-1.651-.18-1.389-1.009l2.025-6.402-5.401-3.989c-.699-.516-.339-1.626.531-1.633l6.714-.052 2.124-6.37c.278-.825 1.444-.825 1.719 0zM166.77 49.781l2.124 6.37 6.714.052c.869.007 1.23 1.116.53 1.632l-5.402 3.989 2.025 6.402c.262.829-.682 1.515-1.389 1.009l-5.463-3.905-5.463 3.905c-.707.506-1.651-.18-1.389-1.009l2.025-6.402-5.401-3.989c-.699-.516-.339-1.626.53-1.632l6.714-.052 2.124-6.37c.28-.825 1.446-.825 1.721 0zM166.77 108.714l2.124 6.37 6.714.052c.869.007 1.23 1.116.53 1.633l-5.402 3.989 2.025 6.402c.262.829-.682 1.515-1.389 1.009l-5.463-3.905-5.463 3.905c-.707.506-1.651-.18-1.389-1.009l2.025-6.402-5.401-3.989c-.699-.516-.339-1.626.53-1.633l6.714-.052 2.124-6.37c.28-.825 1.446-.825 1.721 0zM166.77 164.705l2.124 6.37 6.714.052c.869.007 1.23 1.116.53 1.633l-5.402 3.989 2.025 6.402c.262.829-.682 1.514-1.389 1.009l-5.463-3.905-5.463 3.905c-.707.506-1.651-.18-1.389-1.009l2.025-6.402-5.401-3.989c-.699-.516-.339-1.626.53-1.633l6.714-.052 2.124-6.37c.28-.824 1.446-.824 1.721 0zM166.77 214.987l2.124 6.37 6.714.052c.869.007 1.23 1.116.53 1.633l-5.402 3.989 2.025 6.402c.262.829-.682 1.515-1.389 1.009l-5.463-3.904-5.463 3.904c-.707.506-1.651-.18-1.389-1.009l2.025-6.402-5.401-3.989c-.699-.516-.339-1.626.53-1.633l6.714-.052 2.124-6.37c.28-.825 1.446-.825 1.721 0zM192.633 24.618l2.124 6.37 6.714.052c.869.007 1.23 1.116.53 1.632l-5.402 3.989 2.025 6.402c.262.829-.682 1.514-1.389 1.009l-5.463-3.905-5.463 3.905c-.707.506-1.651-.18-1.389-1.009l2.025-6.402-5.402-3.989c-.699-.516-.339-1.626.531-1.632l6.714-.052 2.124-6.37c.28-.824 1.446-.824 1.721 0zM192.633 77.755l2.124 6.37 6.714.052c.869.007 1.23 1.116.53 1.633l-5.402 3.989 2.025 6.402c.262.829-.682 1.514-1.389 1.009l-5.463-3.905-5.463 3.905c-.707.506-1.651-.18-1.389-1.009l2.025-6.402-5.402-3.989c-.699-.516-.339-1.626.531-1.633l6.714-.052 2.124-6.37c.28-.825 1.446-.825 1.721 0zM192.633 136.688l2.124 6.37 6.714.052c.869.007 1.23 1.116.53 1.633l-5.402 3.989 2.025 6.402c.262.829-.682 1.514-1.389 1.009l-5.463-3.904-5.463 3.904c-.707.505-1.651-.18-1.389-1.009l2.025-6.402-5.402-3.989c-.699-.516-.339-1.626.531-1.633l6.714-.052 2.124-6.37c.28-.825 1.446-.825 1.721 0zM192.633 190.834l2.124 6.37 6.714.052c.869.007 1.23 1.116.53 1.633l-5.402 3.989 2.025 6.402c.262.829-.682 1.514-1.389 1.009l-5.463-3.905-5.463 3.905c-.707.505-1.651-.18-1.389-1.009l2.025-6.402-5.402-3.989c-.699-.516-.339-1.626.531-1.633l6.714-.052 2.124-6.37c.28-.825 1.446-.825 1.721 0zM192.633 240.106l2.124 6.37 6.714.052c.869.007 1.23 1.116.53 1.633l-5.402 3.989 2.025 6.402c.262.829-.682 1.514-1.389 1.009l-5.463-3.904-5.463 3.904c-.707.505-1.651-.18-1.389-1.009l2.025-6.402-5.402-3.989c-.699-.516-.339-1.626.531-1.633l6.714-.052 2.124-6.37c.28-.825 1.446-.825 1.721 0zM218.496 49.781l2.124 6.37 6.715.052c.869.007 1.23 1.116.53 1.632l-5.402 3.989 2.025 6.402c.262.829-.682 1.515-1.389 1.009l-5.463-3.905-5.463 3.905c-.707.506-1.651-.18-1.389-1.009l2.025-6.402-5.402-3.989c-.699-.516-.339-1.626.53-1.632l6.715-.052 2.124-6.37c.279-.825 1.445-.825 1.72 0zM218.496 108.714l2.124 6.37 6.715.052c.869.007 1.23 1.116.53 1.633l-5.402 3.989 2.025 6.402c.262.829-.682 1.515-1.389 1.009l-5.463-3.905-5.463 3.905c-.707.506-1.651-.18-1.389-1.009l2.025-6.402-5.402-3.989c-.699-.516-.339-1.626.53-1.633l6.715-.052 2.124-6.37c.279-.825 1.445-.825 1.72 0zM218.496 164.705l2.124 6.37 6.715.052c.869.007 1.23 1.116.53 1.633l-5.402 3.989 2.025 6.402c.262.829-.682 1.514-1.389 1.009l-5.463-3.905-5.463 3.905c-.707.506-1.651-.18-1.389-1.009l2.025-6.402-5.402-3.989c-.699-.516-.339-1.626.53-1.633l6.715-.052 2.124-6.37c.279-.824 1.445-.824 1.72 0zM218.496 214.987l2.124 6.37 6.715.052c.869.007 1.23 1.116.53 1.633l-5.402 3.989 2.025 6.402c.262.829-.682 1.515-1.389 1.009l-5.463-3.904-5.463 3.904c-.707.506-1.651-.18-1.389-1.009l2.025-6.402-5.402-3.989c-.699-.516-.339-1.626.53-1.633l6.715-.052 2.124-6.37c.279-.825 1.445-.825 1.72 0zM244.359 24.618l2.124 6.37 6.714.052c.869.007 1.23 1.116.531 1.632l-5.402 3.989 2.025 6.402c.262.829-.682 1.514-1.389 1.009l-5.463-3.905-5.463 3.905c-.707.506-1.651-.18-1.389-1.009l2.025-6.402-5.402-3.989c-.699-.516-.339-1.626.53-1.632l6.714-.052 2.124-6.37c.28-.824 1.446-.824 1.721 0zM244.359 77.755l2.124 6.37 6.714.052c.869.007 1.23 1.116.531 1.633l-5.402 3.989 2.025 6.402c.262.829-.682 1.514-1.389 1.009l-5.463-3.905-5.463 3.905c-.707.506-1.651-.18-1.389-1.009l2.025-6.402-5.402-3.989c-.699-.516-.339-1.626.53-1.633l6.714-.052 2.124-6.37c.28-.825 1.446-.825 1.721 0zM244.359 136.688l2.124 6.37 6.714.052c.869.007 1.23 1.116.531 1.633l-5.402 3.989 2.025 6.402c.262.829-.682 1.514-1.389 1.009l-5.463-3.904-5.463 3.904c-.707.505-1.651-.18-1.389-1.009l2.025-6.402-5.402-3.989c-.699-.516-.339-1.626.53-1.633l6.714-.052 2.124-6.37c.28-.825 1.446-.825 1.721 0zM244.359 190.834l2.124 6.37 6.714.052c.869.007 1.23 1.116.531 1.633l-5.402 3.989 2.025 6.402c.262.829-.682 1.514-1.389 1.009l-5.463-3.905-5.463 3.905c-.707.505-1.651-.18-1.389-1.009l2.025-6.402-5.402-3.989c-.699-.516-.339-1.626.53-1.633l6.714-.052 2.124-6.37c.28-.825 1.446-.825 1.721 0zM244.359 240.106l2.124 6.37 6.714.052c.869.007 1.23 1.116.531 1.633l-5.402 3.989 2.025 6.402c.262.829-.682 1.514-1.389 1.009l-5.463-3.904-5.463 3.904c-.707.505-1.651-.18-1.389-1.009l2.025-6.402-5.402-3.989c-.699-.516-.339-1.626.53-1.633l6.714-.052 2.124-6.37c.28-.825 1.446-.825 1.721 0z' />
                            </g>
                        </svg>

                        <h5>
                            <Trans i18nKey='america'></Trans>
                        </h5>
                    </div>
                    {/* frensh */}
                    <div className='flex gap-3 items-center rounded-2xl justify-center card p-4'>
                        <svg className='h-14' id='fi_12499585' enableBackground='new 0 0 512 512' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='m48 504c-19.55 0-35.83-14.03-39.31-32.57-.45-2.41-.69-4.89-.69-7.43v-125.3333-134.8367-.0002-155.8298c0-2.54.24-5.02.7-7.43 3.47-18.54 19.75-32.57 39.3-32.57h125.3333v496z'
                                fill='#0052b4'
                            ></path>
                            <path
                                d='m471.43 503.3c-2.41.46-4.89.7-7.43.7h-125.3333v-496h125.3333c2.54 0 5.03.24 7.44.69 8.06 1.52 15.27 5.46 20.84 11.03 7.24 7.24 11.72 17.24 11.72 28.28v155.8298.0002 134.8367 125.3333c0 19.55-14.03 35.83-32.57 39.3z'
                                fill='#d80027'
                            ></path>
                            <path d='m256 504h-82.6667v-496h165.3334v496z' fill='#f0f0f0'></path>
                        </svg>
                        <h5>
                            <Trans i18nKey='french'></Trans>
                        </h5>
                    </div>
                    {/* spanish */}
                    <div className='flex gap-3 items-center rounded-2xl justify-center card p-4'>
                        <svg className='h-14' id='fi_13482017' viewBox='0 0 73.65 73.65' xmlns='http://www.w3.org/2000/svg' data-name='Layer 1'>
                            <g transform='translate(-263.67 -263.17)'>
                                <path d='m263.67 318.4v-36.8c0-4.5 73.66-4.5 73.66 0v36.8c0 4.5-73.66 4.5-73.66 0z' fill='#ffe600'></path>
                                <g fill='#f4002f'>
                                    <path d='m337.24 281.6h-73.48v-4.86a13.58 13.58 0 0 1 13.57-13.57h46.34a13.58 13.58 0 0 1 13.57 13.57z'></path>
                                    <path d='m263.76 318.4h73.48v4.86a13.58 13.58 0 0 1 -13.57 13.57h-46.34a13.58 13.58 0 0 1 -13.57-13.57z'></path>
                                    <path d='m275.84 294.61a1.71 1.71 0 0 0 -1.34-1.72 1.62 1.62 0 0 0 -1.87 1.63s0 .58.41.58h2.33a.48.48 0 0 0 .47-.49z'></path>
                                    <path d='m275.73 308.41v-11.41a.54.54 0 0 0 -.54-.55h-1.92a.54.54 0 0 0 -.53.55v11.38a1.49 1.49 0 0 0 -.82 1.34v.13a.29.29 0 0 0 .28.29h4.06a.28.28 0 0 0 .28-.29v-.13a1.5 1.5 0 0 0 -.81-1.31z'></path>
                                    <path d='m295.84 294.61a1.71 1.71 0 0 0 -1.34-1.72 1.63 1.63 0 0 0 -1.88 1.63s0 .58.42.58h2.33a.48.48 0 0 0 .47-.49z'></path>
                                    <path d='m295.72 308.41v-11.41a.53.53 0 0 0 -.53-.55h-1.92a.54.54 0 0 0 -.53.55v11.38a1.49 1.49 0 0 0 -.82 1.34v.13a.28.28 0 0 0 .28.29h4.06a.28.28 0 0 0 .28-.29v-.13a1.49 1.49 0 0 0 -.82-1.31z'></path>
                                    <path d='m289.74 295.17h-11a.58.58 0 0 0 -.59.58v8.09a6.35 6.35 0 0 0 6.09 6.16 6.34 6.34 0 0 0 6.09-6.16v-8.09a.58.58 0 0 0 -.59-.58z'></path>
                                    <path d='m288.54 289.06a1.62 1.62 0 0 0 -1.53.49 4.26 4.26 0 0 1 -4.17-.8 1.61 1.61 0 0 0 -1.39.8 1.7 1.7 0 0 0 -1.53-.49 1.62 1.62 0 0 0 -1.26 1.33 1.54 1.54 0 0 0 .89 1.6 1.26 1.26 0 0 1 .69 1.09v.24a.29.29 0 0 0 .29.28h7.38a.28.28 0 0 0 .29-.28v-.24a1.23 1.23 0 0 1 .68-1.09 1.54 1.54 0 0 0 .89-1.6 1.66 1.66 0 0 0 -1.23-1.33z'></path>
                                </g>
                            </g>
                        </svg>
                        <h5>
                            <Trans i18nKey='spanish'></Trans>
                        </h5>
                    </div>
                    {/* german */}
                    <div className='flex gap-3 items-center rounded-2xl justify-center card p-4'>
                        <svg className='h-14' id='fi_13481857' viewBox='0 0 73.65 73.65' xmlns='http://www.w3.org/2000/svg' data-name='Layer 1'>
                            <g transform='translate(-263.67 -263.17)'>
                                <path d='m263.67 312.58v-24.92c0-4.5 73.66-4.5 73.66 0v24.92c0 4.5-73.66 4.5-73.66 0z' fill='#f4002f' />
                                <path d='m263.67 312.58v10.68a13.58 13.58 0 0 0 13.57 13.57h46.52a13.58 13.58 0 0 0 13.57-13.57v-10.68z' fill='#ffe600' />
                                <path d='m323.76 263.17h-46.52a13.58 13.58 0 0 0 -13.57 13.57v10.92h73.66v-10.92a13.58 13.58 0 0 0 -13.57-13.57z' />
                            </g>
                        </svg>
                        <h5>
                            <Trans i18nKey='german'></Trans>
                        </h5>
                    </div>
                    {/* italian */}
                    <div className='flex gap-3 items-center rounded-2xl justify-center card p-4'>
                        <svg
                            className='h-14'
                            version='1.1'
                            id='fi_299935'
                            xmlns='http://www.w3.org/2000/svg'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0px'
                            y='0px'
                            viewBox='0 0 512 512'
                            style={{ enableBackground: "new 0 0 512 512" }}
                            xmlSpace='preserve'
                        >
                            <path style={{ fill: "#73AF00" }} d='M112,0C50.144,0,0,50.144,0,112v288c0,61.856,50.144,112,112,112h58.667V0H112z' />
                            <rect x='170.67' style={{ fill: "#F5F5F5" }} width='170.67' height={512} />
                            <path style={{ fill: "#FF4B55" }} d='M400,0h-58.667v512H400c61.856,0,112-50.144,112-112V112C512,50.144,461.856,0,400,0z' />
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
                        <h5>
                            <Trans i18nKey='italian'></Trans>
                        </h5>
                    </div>
                    {/* turkish */}
                    <div className='flex gap-3 items-center rounded-2xl justify-center card p-4'>
                        <svg className='h-14' id='fi_13481957' viewBox='0 0 73.65 73.65' xmlns='http://www.w3.org/2000/svg' data-name='Layer 1'>
                            <rect fill='#f4002f' height='73.65' rx='13.57' width='73.65' />
                            <g fill='#fff' transform='translate(-263.67 -263.17)'>
                                <path d='m306.39 298.74a1.1 1.1 0 0 0 .7 1.14l3.36 1.72-.28 3.83a1.09 1.09 0 0 0 1.9.86l2.73-2.68 3.51 1.45a1.15 1.15 0 0 0 1.27-.16 1.2 1.2 0 0 0 .14-1.37l-1.66-3.44 2.42-2.88a1.12 1.12 0 0 0 .21-1.31 1 1 0 0 0 -.43-.4 1.48 1.48 0 0 0 -.8-.1l-3.74.51-2.05-3.19a1.23 1.23 0 0 0 -1.13-.55 1.11 1.11 0 0 0 -.9 1l-.63 3.7-3.71 1a1.11 1.11 0 0 0 -.91.87z' />
                                <path d='m302.8 315.37a16 16 0 1 1 5.88-30.83.86.86 0 0 0 .82-1.49 21.05 21.05 0 1 0 0 32.71.86.86 0 0 0 -.84-1.48 16.11 16.11 0 0 1 -5.86 1.09z' />
                            </g>
                        </svg>
                        <h5>
                            <Trans i18nKey='turkish'></Trans>
                        </h5>
                    </div>
                    {/* dutsh */}
                    <div className='flex gap-3 items-center rounded-2xl justify-center card p-4'>
                        <svg className='h-14 w-14 rounded-2xl' height={480} viewBox='0 0 480 480.00001' width={480} xmlns='http://www.w3.org/2000/svg'>
                            <clipPath>
                                <ellipse cx={-514.286} cy={506.648} rx={260} ry={248.571} transform='matrix(.685 0 0 .716 705.099 116.389)' />
                            </clipPath>
                            <g fillRule='evenodd'>
                                <path d='M-13475.544 9747.119v479.998h-480v-479.998z' fill='#3b3c3d' transform='translate(0 -572.362) translate(13955.544 -9174.756)' />
                                <path d='M-13491.544 9763.117h-448v139.002h448z' fill='#ea6153' transform='translate(0 -572.362) translate(13955.544 -9174.756)' />
                                <path d='M-13491.544 10211.119h-448v-138.5h448z' fill='#3d6591' transform='translate(0 -572.362) translate(13955.544 -9174.756)' />
                                <path d='M-13491.544 10056.619h-448v-138.5h448z' fill='#fff' transform='translate(0 -572.362) translate(13955.544 -9174.756)' />
                            </g>
                        </svg>
                        <h5>
                            <Trans i18nKey='dutch'></Trans>
                        </h5>
                    </div>
                    {/* russian */}
                    <div className='flex gap-3 items-center rounded-2xl justify-center card p-4'>
                        <svg className='h-14' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 512 512' xmlSpace='preserve'>
                            <path d='M407.818.276H104.182C45.974 4.291 0 52.773 0 112v58.759h512V112C512 52.773 466.025 4.291 407.818.276z' fill='#f5f5f5' />
                            <path d='M0 400c0 59.228 45.975 107.71 104.183 111.724h303.634C466.025 507.71 512 459.228 512 400v-58.759H0V400z' fill='#ff4b55' />
                            <path fill='#41479b' d='M0 170.76H512V341.24H0z' />
                        </svg>
                        <h5>
                            <Trans i18nKey='russian'></Trans>
                        </h5>
                    </div>
                    {/* australia */}
                    <div className='flex gap-3 items-center rounded-2xl justify-center card p-4'>
                        <svg className='h-14' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 512 512' xmlSpace='preserve'>
                            <path
                                d='M400 0H112C50.144 0 0 50.144 0 112v288c0 61.856 50.144 112 112 112h288c61.856 0 112-50.144 112-112V112C512 50.144 461.856 0 400 0z'
                                fill='#41479b'
                            />
                            <g fill='#f5f5f5'>
                                <path d='M130.415 337.445l8.482 28 27.18-10.827c2.319-.924 4.427 1.721 3.011 3.776l-16.603 24.089 25.411 14.5c2.168 1.237 1.415 4.534-1.075 4.708l-29.185 2.038 4.507 28.907c.384 2.466-2.663 3.934-4.351 2.095L128 413.184l-19.79 21.547c-1.688 1.838-4.736.371-4.351-2.095l4.507-28.907-29.186-2.039c-2.49-.174-3.242-3.471-1.075-4.708l25.411-14.5-16.603-24.089c-1.416-2.055.692-4.699 3.011-3.776l27.179 10.827 8.482-28c.724-2.388 4.106-2.388 4.83.001zM385.434 86.875l4.143 13.678 13.277-5.289c1.133-.451 2.163.84 1.471 1.844l-8.11 11.767 12.413 7.083c1.059.604.691 2.215-.525 2.3l-14.257.996 2.202 14.121c.188 1.205-1.301 1.921-2.125 1.024l-9.667-10.526-9.667 10.526c-.825.898-2.313.181-2.125-1.024l2.202-14.121-14.257-.996c-1.216-.085-1.584-1.696-.525-2.3l12.413-7.083-8.11-11.767c-.692-1.004.338-2.295 1.471-1.844l13.277 5.289 4.143-13.678c.351-1.167 2.003-1.167 2.356 0zM293.05 212.234l4.143 13.678 13.277-5.289c1.133-.451 2.163.84 1.471 1.844l-8.11 11.767 12.413 7.083c1.059.604.691 2.215-.525 2.3l-14.257.996 2.202 14.121c.188 1.205-1.301 1.922-2.125 1.024l-9.667-10.526-9.667 10.526c-.825.898-2.313.181-2.125-1.024l2.202-14.121-14.257-.996c-1.216-.085-1.584-1.696-.525-2.3l12.413-7.083-8.11-11.767c-.692-1.004.338-2.296 1.471-1.844l13.277 5.289 4.143-13.678c.35-1.167 2.002-1.167 2.356 0zM472.837 146.913l4.143 13.678 13.277-5.289c1.133-.451 2.163.84 1.471 1.844l-8.11 11.767 12.413 7.083c1.059.604.691 2.215-.525 2.3l-14.257.996 2.202 14.121c.188 1.205-1.301 1.922-2.125 1.023l-9.667-10.525-9.667 10.525c-.825.898-2.313.181-2.125-1.023l2.202-14.121-14.257-.996c-1.216-.085-1.584-1.696-.525-2.3l12.413-7.083-8.11-11.767c-.692-1.004.338-2.296 1.471-1.844l13.277 5.289 4.143-13.678c.35-1.166 2.002-1.166 2.356 0zM385.434 368.074l4.143 13.678 13.277-5.289c1.133-.451 2.163.84 1.471 1.844l-8.11 11.767 12.413 7.083c1.059.604.691 2.215-.525 2.3l-14.257.996 2.202 14.121c.188 1.205-1.301 1.922-2.125 1.024l-9.667-10.525-9.667 10.525c-.825.898-2.313.181-2.125-1.024l2.202-14.121-14.257-.996c-1.216-.085-1.584-1.696-.525-2.3l12.413-7.083-8.11-11.767c-.692-1.004.338-2.296 1.471-1.844l13.277 5.289 4.143-13.678c.351-1.167 2.003-1.167 2.356 0zM417.489 246.969l-3.326 9.974-10.513.081c-1.361.011-1.926 1.748-.831 2.556l8.458 6.246-3.171 10.024c-.41 1.298 1.067 2.371 2.174 1.58l8.553-6.114 8.553 6.114c1.107.792 2.585-.282 2.174-1.58l-3.171-10.024 8.458-6.246c1.095-.809.531-2.546-.831-2.556l-10.514-.081-3.326-9.974c-.43-1.292-2.257-1.292-2.687 0z' />
                            </g>
                            <g fill='#41479b'>
                                <path d='M94.316 1.395C67.937 5.579 44.627 18.971 27.779 38.177L94.316 81.77V1.395zM7.021 72.899a111.172 111.172 0 00-5.627 21.417H39.71L7.021 72.899z' />
                                <path d='M0 161.684L0 187.701 39.71 161.684z' />
                                <path d='M256 19.977L256 0 161.684 0 161.684 81.77z' />
                                <path d='M256 187.701L256 161.684 216.29 161.684z' />
                                <path d='M161.684 256L256 256 256 236.023 161.684 174.23z' />
                                <path d='M256 94.316L256 68.299 216.29 94.316z' />
                                <path d='M94.316 174.23L0 236.023 0 256 94.316 256z' />
                            </g>
                            <g fill='#f5f5f5'>
                                <path d='M148.21 256L161.684 256 161.684 174.23 256 236.023 256 216.059 172.232 161.684 196.98 161.684 256 199.995 256 187.701 216.29 161.684 256 161.684 256 148.21 148.21 148.21z' />
                                <path d='M94.316 256L107.789 256 107.789 148.21 0 148.21 0 161.684 39.71 161.684 0 187.701 0 206.602 69.197 161.684 93.945 161.684 0 222.666 0 236.023 94.316 174.23z' />
                                <path d='M107.789.087c-4.566.169-9.063.608-13.474 1.308V81.77L27.779 38.177a112.427 112.427 0 00-10.872 14.637l63.935 41.502H56.094L10.461 64.694c-1.251 2.68-2.4 5.415-3.44 8.205L39.71 94.316H1.394c-.7 4.411-1.139 8.907-1.308 13.474h107.703V.087z' />
                                <path d='M256 107.79L256 94.316 216.29 94.316 256 68.299 256 49.157 186.432 94.316 161.684 94.316 256 33.092 256 19.977 161.684 81.77 161.684 0 148.21 0 148.21 107.79z' />
                            </g>
                            <g fill='#ff4b55'>
                                <path d='M107.789 256h40.421V148.21H256v-40.42H148.21V0H112c-1.411 0-2.813.035-4.211.087V107.79H.087A113.114 113.114 0 000 112v36.21h107.789V256z' />
                                <path d='M69.197 161.684L0 206.602 0 222.666 93.945 161.684z' />
                                <path d='M172.232 161.684L256 216.059 256 199.995 196.98 161.684z' />
                                <path d='M80.842 94.316L16.907 52.814a111.708 111.708 0 00-6.447 11.88l45.634 29.622h24.748z' />
                                <path d='M186.432 94.316L256 49.157 256 33.092 161.684 94.316z' />
                            </g>
                        </svg>
                        <h5>
                            <Trans i18nKey='australia'></Trans>
                        </h5>
                    </div>

                    {/* canadian */}
                    <div className='flex gap-3 items-center rounded-2xl justify-center card p-4'>
                        <svg
                            className='h-14'
                            clipRule='evenodd'
                            fillRule='evenodd'
                            strokeLinejoin='round'
                            strokeMiterlimit={1.414}
                            viewBox='0 0 512 512'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M416.946-63.998c70.984.33 131.095 47.093 151.564 111.485l.226.718C573.456 63.3 576 79.354 576 96v46.222h-.383v227.556h-.382V416c0 87.795-70.781 159.169-158.289 159.993z'
                                fill='#ff2b06'
                                transform='matrix(.781 0 0 .781 -1414.31 -1174.47) translate(1882 1575)'
                            />
                            <path
                                d='M416.946 575.993c-.506.005-1.012.007-1.52.007H96.612V-64h319.579l.755.002zm0 0l.488-.006zm.544-.006h-.03l.467-.007zm.516-.008l-.033.001.449-.008zm.514-.009l-.033.001.433-.009zm.515-.01H419l.42-.01zm.514-.013l-.037.001.409-.011zm.513-.013l-.038.001.399-.012zm.513-.016l-.039.001.389-.013zm.513-.017l-.041.001.382-.014zm.512-.019l-.042.002.374-.015zm.512-.02l-.043.001.367-.015zm.512-.022l-.045.002.361-.017zm.511-.024l-.046.002.356-.017zm.51-.025l-.047.002.351-.018zm.511-.027l-.049.003.346-.019zm.509-.028l-.05.003.342-.02zm.51-.03l-.052.003.338-.021zm.509-.032l-.053.004.334-.022zm.508-.033l-.054.004.331-.023zm.508-.035l-.055.004.327-.023zm.508-.036l-.057.004.325-.024zm.507-.038l-.058.005.322-.025zm.507-.039l-.059.004.318-.025zm.506-.041l-.06.005.316-.027zm.506-.043l-.062.005.314-.027zm.506-.044l-.064.005.312-.028zm.505-.046l-.065.006.309-.029zm.504-.047l-.066.006.307-.03zm.504-.049l-.067.006.305-.03zm.504-.051l-.069.007.304-.031zm.503-.052l-.07.007.302-.032zm.503-.054l-.071.008.299-.033zm.502-.055l-.073.008.299-.033zm.502-.056l-.074.008.296-.034zm.501-.059l-.075.009.295-.035zm.501-.06l-.076.01.293-.036zm.501-.061l-.078.01.292-.037zm.499-.063l-.079.01.291-.037zm.5-.064l-.081.01.29-.038zm.499-.066l-.082.01.288-.038zm.498-.068l-.083.011.287-.039zm.498-.069l-.084.012.285-.041zm.498-.071l-.086.013.284-.041zm.497-.072l-.087.013.283-.042zm.496-.073l-.088.013.282-.043zm.496-.076l-.089.014.281-.043zm.496-.076l-.091.014.28-.044zm.495-.079l-.092.015.279-.045zm.494-.079l-.093.015.278-.046zm.494-.082l-.094.016.277-.046zm.494-.082l-.096.016.276-.047zm.493-.085l-.097.017.275-.048zm.492-.085l-.098.017.274-.049zm.492-.088l-.099.018.273-.049zm.492-.089l-.101.019.272-.05zm.491-.09l-.103.019.272-.051zm.49-.092l-.103.02.27-.052zm.49-.093l-.105.02.27-.052zm.489-.095l-.106.021.27-.053zm.489-.096l-.107.021.268-.053zm.488-.098l-.108.022.268-.054zm.488-.099l-.109.022.266-.055zm.487-.101l-.11.023.266-.055zm.487-.102l-.112.023.265-.056zm.486-.104l-.113.024.264-.057zm.486-.105l-.115.025.264-.058zm.485-.107l-.116.026.263-.059zm.484-.108l-.117.026.263-.059zm.484-.109l-.118.026.262-.059zm.484-.111l-.12.027.261-.06zm.482-.113l-.12.028.26-.061zm.483-.114l-.122.029.26-.062zm.481-.115l-.122.029.259-.062zm.481-.117l-.124.03.259-.063zm.481-.119l-.125.031.258-.064zm.48-.119l-.126.031.257-.064zm.479-.122l-.127.033.257-.066zm.479-.122l-.128.033.256-.066zm.479-.124l-.13.033.255-.066zm.477-.126l-.131.034.255-.067zm.477-.127l-.132.035.254-.068zm.477-.129l-.133.036.253-.068zm.476-.129l-.135.036.253-.069zm.475-.132l-.135.038.252-.07zm.475-.132l-.137.038.252-.071zm.474-.135l-.138.039.252-.071zm.474-.135l-.139.04.25-.073zm.473-.137l-.14.04.25-.073zm.472-.139l-.141.042.249-.074zm.472-.14l-.142.043.249-.075zm.471-.141l-.143.043.248-.075zm.471-.143l-.145.044.248-.075zm.47-.144l-.146.045.247-.076zm.469-.145l-.147.045.247-.077zm.469-.147l-.148.046.246-.077zm.468-.148l-.149.047.245-.078zm.467-.15l-.15.048.245-.079zm.467-.151l-.151.049.245-.08zm.466-.153l-.152.05.244-.08zm.466-.154l-.153.051.243-.081zm9.176-3.366l-.392.156.45-.18zm.903-.366l-.393.159.448-.182zm.9-.372l-.394.163.447-.185zm.898-.377l-.395.166.445-.188zm.894-.383l-.395.169.443-.189zm.892-.387l-.396.172.441-.192zm.889-.393l-.396.175.438-.194zm.887-.399l-.398.179.437-.196zm.883-.403l-.397.182.433-.199zm.881-.409l-.398.185.431-.2zm.877-.413l-.398.187.429-.202zm.875-.419l-.398.19.426-.204zm.872-.425l-.398.194.423-.206zm.869-.429l-.397.196.419-.207zm.865-.434l-.395.198.416-.208zm.863-.44l-.393.201.411-.21zm.86-.444l-.391.202.406-.21zm.857-.45l-.387.203.399-.209zm.854-.454l-.381.202.391-.208zm.85-.46l-.37.2.378-.204zm.848-.464l-.352.192.357-.195zm.844-.47l-.306.17.309-.171zm.842-.474l-.087.048.087-.048.039-.023zm.838-.48l-.003.002.293-.17zm.835-.484l-.005.003.339-.2zm.832-.489l-.008.004.359-.214zm.828-.494l-.009.005.368-.223zm.825-.499l-.011.007.374-.229zm.823-.504l-.015.008.378-.234zm.818-.509l-.016.01.38-.238zm.816-.513l-.019.012.381-.243zm.812-.518l-.021.013.382-.246zm.809-.523l-.023.015.382-.25zm.806-.528l-.026.017.382-.253zm.802-.532l-.028.018.382-.256zm.799-.537l-.03.02.381-.259zm.795-.542l-.032.022.38-.262zm.792-.546l-.034.023.379-.264zm.789-.551l-.036.025.378-.267zm.785-.556l-.038.027.377-.27zm.781-.56l-.04.029.376-.273zm.778-.565l-.042.031.375-.275zm.775-.569l-.044.033.373-.278zm.771-.574l-.046.035.372-.28zm.767-.578l-.048.036.371-.282zm.764-.583l-.05.038.369-.285zm.76-.587l-.052.04.368-.287zm.757-.592l-.054.042.366-.29zm.753-.596l-.056.044.365-.292zm.749-.601l-.058.046.364-.294zm.746-.605l-.06.048.362-.296zm.742-.609l-.062.05.36-.299zm.738-.614l-.063.052.358-.301zm.734-.618l-.065.054.357-.303zm.731-.623l-.067.057.356-.306zm.727-.626l-.069.058.354-.307zm.723-.631l-.07.061.352-.31zm.719-.636l-.072.064.351-.313zm.716-.639l-.074.065.349-.314zm.711-.644l-.075.068.347-.317zm.708-.648l-.077.07.345-.318zm.704-.652l-.079.073.344-.321zm.699-.656l-.079.075.341-.323zm.696-.661l-.081.078.34-.325zm.692-.664l-.082.079.337-.327zm.688-.669l-.084.082.336-.329zm.684-.672l-.085.084.334-.331zm.68-.677l-.087.087.332-.334zm.676-.681l-.088.089.33-.335zm.672-.685l-.09.092.328-.338zm.668-.689l-.091.095.326-.34zm.664-.692l-.093.096.324-.341zm.659-.697l-.094.099.323-.343zm.656-.701l-.096.102.321-.346zm.651-.704l-.097.104.319-.348zm.647-.709l-.098.107.317-.349zm.643-.712l-.099.109.315-.351zm.639-.717l-.1.113.312-.354zm.634-.72l-.101.115.31-.355zm.63-.724l-.102.118.309-.357zm.626-.728l-.103.121.306-.359zm.622-.731l-.105.123.305-.361zm.617-.735l-.105.125.302-.363zm.613-.74l-.106.129.3-.365zm.609-.742l-.108.131.299-.367zm.604-.747l-.108.134.296-.368zm.6-.75l-.109.137.294-.371zm.596-.754l-.111.14.292-.372zm.591-.757l-.111.142.289-.374zm.586-.761l-.112.145.288-.376zm.582-.765l-.112.148.285-.378zm.578-.769l-.114.152.284-.38zm.573-.771l-.114.154.281-.382zm.569-.776l-.115.157.279-.383zm.564-.779l-.116.16.277-.385zm.559-.782l-.116.163.274-.387zm.555-.786l-.117.166.272-.389zm.551-.79l-.118.169.27-.39zm.545-.793l-.118.172.268-.392zm.541-.796l-.119.175.266-.394zm.537-.8l-.12.178.263-.395zm.531-.803l-.12.181.261-.397zm.527-.806l-.12.184.259-.399zm.522-.81l-.12.187.256-.4zm.518-.813l-.121.19.254-.402zm.513-.817l-.122.193.252-.403zm.507-.82l-.121.197.249-.406zm.504-.823l-.122.2.247-.407zm.498-.826l-.122.203.244-.409zm.493-.83l-.122.206.242-.41zm.489-.832l-.123.209.24-.412zm.484-.836l-.123.212.237-.413zm.478-.84l-.122.216.235-.415zm.474-.842l-.123.219.233-.417zm.469-.845l-.123.221.23-.417zm.464-.849l-.123.225.228-.419zm.459-.851l-.123.228.226-.421zm.454-.855l-.123.231.223-.422zm.449-.858l-.123.235.221-.424zm.444-.861l-.123.238.218-.425zm.439-.864l-.123.242.216-.427zm.434-.866l-.123.244.213-.428zm.428-.87l-.122.248.211-.43zm.424-.873l-.122.251.208-.431zm.418-.876l-.121.255.205-.433zm.414-.878l-.122.258.203-.435zm.408-.882l-.121.261.2-.435zm.403-.884l-.121.264.198-.437zm.397-.888l-.12.268.195-.438zm.393-.89l-.12.272.193-.44zm.387-.893l-.119.275.19-.441zm.382-.895l-.119.278.188-.443zm.377-.899l-.118.282.184-.444zm.371-.901l-.118.285.183-.445zm.366-.904l-.117.288.18-.446zm.36-.907l-.116.292.177-.448zm.356-.909l-.116.295.211-.543zm2.799-7.837l-.031.096.075-.23zm.153-.467l-.032.098.074-.231zm.15-.467l-.031.099.074-.231zm.15-.468l-.032.1.073-.231zm.148-.469l-.032.102.073-.231zm.147-.469l-.033.103.072-.231zm.145-.47l-.032.105.071-.232zm-625.227-.262l.081.264zm625.371-.208l-.033.106.071-.232zm-625.616-.601l.109.363zm625.758.13l-.032.107.07-.232zm.141-.472l-.032.109.069-.233zm-626.141-.473l.138.467zm626.281.001l-.033.11.069-.233zm-626.526-.841l.173.595zm626.664.368l-.032.112.067-.234zm.137-.474l-.033.114.068-.234zM-64 369.778V416c0 13.187 1.597 26.004 4.607 38.266l.166.668-.122-.491-.044-.177A160.353 160.353 0 01-64 416zm633.169 90.001l-.033.115.066-.234zm.134-.475l-.033.117.065-.235zm.132-.475l-.033.118.065-.235zm.131-.476l-.033.12.065-.235zm.13-.476l-.033.121.064-.236zm.128-.477l-.033.122.063-.235zm.127-.478l-.033.124.062-.236zm.125-.478l-.032.125.061-.236zm.124-.479l-.032.127.06-.236zm.123-.479l-.033.128.06-.237zm.121-.48l-.033.13.06-.237zm.12-.481l-.033.132.059-.238zm.118-.481l-.033.133.058-.238zm.117-.482l-.033.135.057-.238zm.115-.482l-.033.136.057-.238zm.114-.483l-.033.138.056-.239zm.112-.483l-.032.139.055-.239zm.111-.484l-.032.141.054-.239zm.109-.484l-.032.142.054-.239zm.108-.486l-.032.144.053-.239zm.107-.485l-.032.145.052-.24zm.105-.486l-.032.147.052-.24zm.103-.487l-.031.149.051-.241zm.102-.487l-.031.15.05-.241zm.101-.488l-.031.152.049-.241zm.099-.488l-.031.153.049-.241zm.098-.489l-.031.155.048-.242zm.096-.489l-.031.156.047-.242zm.094-.49l-.03.157.046-.241zm.094-.491l-.031.16.046-.242zm.091-.491l-.03.161.045-.242zm.09-.491l-.029.162.044-.242zm.089-.492l-.029.164.043-.243zm.087-.493l-.029.166.043-.243zm.086-.493l-.029.167.042-.243zm.084-.493l-.029.168.042-.243zm.083-.494l-.029.17.041-.244zm.081-.495l-.028.172.04-.244zm.08-.495l-.028.173.039-.244zm.078-.495l-.028.174.038-.244zm.076-.496l-.027.176.038-.245zm.075-.497l-.027.178.037-.245zm.074-.497l-.027.179.036-.244zm.072-.498l-.026.181.035-.245zm.07-.498l-.025.183.034-.245zm.069-.498l-.025.184.034-.245zm.068-.499l-.025.186.033-.246zm.066-.5l-.025.188.032-.246zm.064-.5l-.024.189.031-.246zm.063-.5l-.024.19.031-.246zm.061-.501l-.023.192.03-.246zm.06-.501l-.023.193.029-.247zm.058-.502l-.023.195.029-.247zm.057-.503l-.022.197.027-.247zm.055-.502l-.022.198.027-.247zm.053-.504l-.021.2.026-.247zm.052-.503l-.021.201.026-.248zm.051-.505l-.021.203.025-.247zm.048-.504l-.019.204.024-.248zm.048-.505l-.019.205.023-.247zm.045-.506l-.018.207.022-.248zm.045-.506l-.019.209.022-.248zm.042-.506l-.017.21.02-.248zm.041-.507l-.017.211.02-.248zm.04-.508l-.017.213.019-.248zm.037-.507l-.016.214.019-.248zm.037-.509l-.016.216.018-.248zm.034-.508l-.014.217.016-.248zm.033-.509l-.014.218.016-.248zm.032-.51l-.014.22.016-.248zm.03-.51l-.013.221.014-.247zm.028-.51l-.012.222.013-.247zm.027-.511l-.012.224.013-.247zm.025-.511l-.011.224.012-.246zm.023-.512l-.01.226.011-.246zm.022-.512l-.009.227.01-.246zm.021-.512l-.009.227.009-.245zm.018-.513l-.008.228.009-.244zm.017-.513l-.007.229.008-.244zm.016-.514l-.007.229.007-.242zm.014-.514l-.007.229.007-.241zm.012-.515l-.006.229.006-.239zm.01-.515l-.004.229.005-.237zm.009-.515l-.003.226.004-.233zm.008-.515l-.003.222.003-.228zm.006-.517l-.003.217.003-.221zm.004-.516l-.002.203.002-.206zm.002-.517l-.001.171.001-.172zm-4.007-359.451l.166.668A160.353 160.353 0 01576 96v46.222V96c0-13.187-1.597-26.004-4.607-38.266l-.044-.176zm-1.632-6.02l.173.595zm-.21-.712l.138.467zm-.213-.711l.109.363zm-.216-.71l.08.264zm-.689-2.183v.001l-.082-.251zm-.246-.755l.001.003-.1-.301zm-.25-.753l.001.004-.108-.322zm-.253-.751l.001.005-.114-.333zm-.258-.75l.003.006-.119-.339zm-.26-.748l.003.008-.122-.345zm-.264-.747l.003.009-.125-.347zm-.268-.745l.003.011-.127-.349zm-.272-.743l.005.012-.13-.351zm-.275-.741l.005.013-.132-.352zm-.278-.74l.005.015-.135-.353zm-.282-.738l.006.016-.137-.353zm-.286-.736l.007.017-.139-.353zm-.289-.734l.007.018-.141-.353zm-.293-.733l.008.02-.143-.354zm-.296-.731l.009.021-.146-.353zm-.299-.729l.009.022-.147-.353zm-.303-.727l.009.023-.149-.353zm-.307-.725l.01.024-.151-.353zm-.31-.724l.011.026-.153-.353zm-.313-.722l.011.027-.155-.352zm-.317-.719l.012.028-.157-.352zm-.321-.719l.013.03-.158-.351zm-.323-.716l.013.031-.16-.351zm-.328-.714l.015.032-.162-.35zm-.33-.712l.015.032-.164-.349zm-.334-.711l.016.034-.166-.349zm-.337-.709l.016.035-.167-.348zm-.341-.706l.017.036-.169-.348zm-.344-.705l.018.037-.171-.347zm-.347-.703l.019.039-.173-.347zm-.351-.701l.02.04-.175-.346zm-.354-.699l.021.041-.177-.345zm-.357-.697l.021.042-.178-.344zm-.361-.695l.022.043-.18-.343zm-.364-.693l.023.044-.182-.342zm-.367-.691l.024.046-.184-.342zm-.371-.689l.025.047-.185-.342zm-.373-.687l.025.048-.187-.341zm-.377-.685l.026.049-.188-.34zm-.381-.683l.028.05-.191-.339zm-.383-.68l.029.05-.193-.338zm-.387-.679l.03.052-.194-.338zm-.39-.677l.031.053-.196-.337zm-.393-.675l.032.055-.198-.336zm-.396-.672l.033.055-.2-.335zm-.399-.67l.033.056-.201-.335zm-.403-.669l.034.057-.202-.333zm-.406-.666l.036.058-.205-.332zm-.409-.664l.037.059-.206-.332zm-.412-.662l.038.06-.208-.331zm-.415-.66l.039.062-.21-.331zm-.418-.657l.04.062-.212-.329zm-.422-.656l.041.064-.213-.329zm-.424-.653l.042.064-.215-.327zm-.428-.651l.043.065-.216-.327zm-.43-.649l.044.067-.218-.327zm-.434-.646l.045.067-.22-.325zm-.437-.645l.047.069-.222-.325zm-.439-.642l.047.07-.223-.324zm-.443-.64l.048.071-.225-.323zm-.446-.637l.05.071-.227-.322zm-.449-.636l.051.073-.229-.322zm-.452-.633l.052.073-.23-.32zm-.455-.63l.054.074-.232-.32zm-.457-.629l.054.075-.234-.319zm-.461-.626l.056.076-.236-.318zm-.464-.624l.057.077-.237-.317zm-.467-.621l.059.077-.239-.316zm-.469-.62l.059.079-.241-.315zm-.473-.616l.061.079-.243-.314zm-.475-.615l.062.081-.244-.314zm-.479-.612l.064.081-.246-.312zm-.481-.609l.065.082-.248-.312zm-.484-.608l.066.083-.25-.31zm-.487-.605l.067.084-.251-.31zm-.49-.602l.069.085-.253-.309zm-.493-.6l.07.085-.254-.308zm-.495-.598l.071.087-.256-.307zm-.499-.595l.073.087-.258-.306zm-.501-.593l.074.089-.26-.306zm-.504-.59l.076.089-.262-.304zm-.507-.587l.077.089-.263-.303zm-.51-.586l.079.091-.265-.303zm-.512-.582l.08.091-.267-.302zm-.515-.581l.081.092-.269-.3zm-.518-.577l.083.092-.271-.299zm-.521-.576l.085.094-.273-.299zm-.524-.572l.087.094-.275-.298zm-.526-.57l.088.095-.276-.297zm-.529-.568l.09.096-.278-.296zm-.531-.565l.09.097-.279-.295zm-.535-.562l.093.097-.282-.294zm-.537-.56l.094.098-.283-.293zm-.539-.557l.095.099-.285-.293zm-.543-.555l.097.1-.286-.292zm-.545-.552l.099.101-.288-.291zm-.547-.549l.1.101-.29-.289zm-.551-.547l.102.102-.292-.288zm-.553-.544l.104.103-.294-.288zm-.555-.541l.105.103-.295-.286zm-.558-.539l.107.104-.298-.285zm-.561-.536l.109.105-.3-.285zm-.563-.533l.11.105-.301-.283zm-.566-.53l.112.105-.303-.282zm-.569-.528l.114.106-.305-.282zm-.571-.525l.116.106-.307-.28zm-.573-.523l.117.108-.308-.28zm-.576-.519l.119.108-.31-.279zm-.579-.517l.121.108-.312-.277zm-.581-.514l.123.109-.314-.277zm-.584-.512l.125.11-.316-.275zm-.586-.508l.127.11-.318-.274zm-.589-.506l.129.111-.32-.273zm-.591-.503l.131.112-.322-.273zm-.593-.5l.133.112-.324-.271zm-.596-.497l.135.112-.326-.27zm-.599-.494l.137.112-.327-.269zm-.6-.492l.138.113-.329-.268zm-.604-.489l.141.114-.331-.267zm-.605-.486l.142.115-.333-.266zm-.608-.482l.144.114-.335-.264zm-.611-.481l.147.116-.337-.264zm-.613-.477l.149.116-.339-.263zm-.615-.474l.151.116-.341-.261zm-.617-.471l.153.116-.344-.26zm-.62-.468l.155.117-.345-.26zm-.622-.466l.157.118-.347-.259zm-.625-.462l.159.118-.349-.258zm-.627-.46l.161.118-.351-.255zm-.629-.456l.163.118-.353-.254zm-.631-.454l.165.119-.355-.253zm-.634-.45l.168.119-.357-.252zm-.636-.448l.17.12-.359-.251zm-.638-.444l.172.12-.361-.25zm-.641-.442l.175.121-.364-.249zm-.643-.438l.177.121-.365-.248zm-.645-.435l.179.12-.367-.246zm-.647-.433l.182.121-.37-.245zm-.649-.429l.183.122-.371-.245zm-.652-.426l.186.122-.373-.243zm-.654-.423l.189.122-.376-.242zm-.656-.42l.191.122-.378-.24zm-.658-.417l.193.123-.38-.24zm-.66-.414l.195.123-.382-.238zm-.663-.41l.198.123-.384-.237zm-.664-.408l.2.123-.386-.235zm-.667-.404l.203.123-.388-.234zm-.669-.401l.206.123-.391-.233zm-.671-.398l.208.124-.392-.232zm-.673-.395l.211.124-.395-.23zm-.675-.391l.213.124-.397-.229zm-.677-.388l.216.123-.4-.227zm-.68-.386l.219.124-.402-.226zm-.681-.381l.221.124-.403-.226zm-.683-.379l.224.124-.406-.224zm-.686-.375l.227.124-.408-.223zm-.687-.373l.229.125-.41-.222zm-.69-.368l.232.124-.412-.22zm-.691-.366l.235.124-.415-.218zm-.693-.362l.237.124-.417-.217zm-.696-.359l.24.124-.419-.216zm-.697-.356l.243.124-.422-.214zm-.7-.352l.246.124-.424-.213zm-.701-.349l.249.123-.427-.211zm-.703-.346l.252.124-.429-.21zm-.705-.342l.254.123-.431-.208zm-.707-.339l.257.123-.433-.207zm-.709-.336l.26.123-.436-.205zm-.711-.332l.263.123-.438-.204zm-.713-.329l.267.123-.441-.202zm-.715-.325l.27.122-.443-.2zm-.716-.322l.273.122-.446-.199zm-.718-.319l.275.122-.448-.197zm-.721-.315l.279.122-.451-.196zm-.722-.312l.282.122-.453-.195zm-.724-.308l.286.122-.456-.193zm-.725-.305l.288.122-.458-.192zm-.728-.301l.292.121-.461-.19zm-.729-.298l.295.121-.464-.188zm-.731-.294l.298.12-.466-.186zm-.733-.291l.301.12-.468-.185zm-.735-.287l.305.119-.471-.183zm-.736-.284l.308.119-.474-.182zm-.738-.28l.312.118-.477-.179zm-.74-.276l.315.117-.479-.178zm-.741-.274l.318.118-.482-.177zm-.744-.269l.322.117-.484-.175zm-.745-.266l.326.116-.487-.173zm-.746-.262l.329.115-.49-.171zm-.749-.259l.333.115-.493-.169zm-.75-.255l.337.114-.496-.167zm-.751-.252l.34.114-.499-.166zm-.754-.247l.344.113-.501-.164zm-.755-.245l.348.113-.504-.162zm-.756-.24l.351.112-.507-.161zm-.758-.237l.355.111-.51-.158zm-.76-.233l.359.11-.513-.157zm-.762-.23l.363.11-.516-.155zm-.763-.225l.367.108-.519-.153zm-.764-.223l.371.108-.522-.151zm-.766-.218l.375.107-.525-.149zm-.768-.215l.379.106-.528-.147zm-.769-.211l.383.106-.531-.145zm-.771-.207l.388.104-.535-.142zm-.772-.203l.392.103-.538-.141zm-.774-.2l.396.102-.541-.138zm-.775-.196l.4.102-.544-.137zm-.777-.192l.405.1-.548-.134zm-.778-.188l.409.099-.551-.133zm-.78-.184l.414.097-.555-.13zm-.781-.181l.418.097-.558-.129zm-.783-.177l.423.096-.562-.126zm-.784-.173l.428.095-.566-.124zm-.785-.169l.432.093-.569-.122zm-.787-.165l.437.092-.573-.12zm-.789-.162l.442.091-.576-.117zm-.79-.157l.448.089-.581-.115zm-.791-.154l.452.088-.584-.112zm-.792-.149l.457.086-.588-.11zm-.794-.146l.462.085-.592-.108zm-.795-.142l.467.084-.596-.106zm-.797-.138l.473.082-.6-.103zm-.798-.134l.479.081-.605-.101zm-.799-.13l.484.079-.609-.098zm-.801-.126l.49.077-.613-.096zm-.802-.122l.496.076-.618-.094zm-.803-.118l.502.074-.622-.091zm-.804-.114l.507.072-.627-.088zm-.806-.11l.514.07-.632-.086zm-.807-.106l.52.068-.637-.083zm-.808-.102l.526.066-.641-.08zm-.81-.098l.533.064-.647-.077zm-.81-.094l.539.063-.652-.075zm-.812-.09l.546.061-.657-.073zm-.813-.086l.553.059-.663-.07zm-.815-.081l.561.056-.669-.067zm-.815-.078l.567.054-.674-.063zm-.817-.073l.575.051-.681-.06zm-.818-.07l.583.05-.687-.058zm-.819-.065l.591.047-.694-.055zm-.82-.061l.599.045-.7-.052zm-.821-.057l.607.042-.707-.049zm-.823-.053l.617.04-.715-.046zm-.823-.049l.625.037-.722-.042zm-.825-.044l.635.034-.73-.039zm-.826-.04l.645.031-.739-.035zm-.827-.037l.655.029-.747-.032zm-.828-.031l.666.025-.756-.028zm-.829-.028l.677.023-.766-.026zm-.83-.024l.688.02-.775-.022zm-.831-.019l.7.016-.786-.017zm-.832-.015l.712.013-.796-.014zm-.833-.01l.725.009-.808-.01zm-.835-.007l.74.006-.82-.006z'
                                fill='#fff'
                                transform='matrix(.781 0 0 .781 -1414.31 -1174.47) translate(1882 1575)'
                            />
                            <path
                                d='M96.612-64v640h-.803c-10.827 0-21.404-1.08-31.629-3.14l-.855-.174C6.597 560.94-39.174 519.049-56.509 464.513l-.227-.718C-61.456 448.7-64 432.646-64 416v-46.222h.383V142.222h.382V96c0-77.195 54.722-141.696 127.415-156.704l.982-.2A160.08 160.08 0 0196.574-64z'
                                fill='#ff2b06'
                                transform='matrix(.781 0 0 .781 -1414.31 -1174.47) translate(1882 1575)'
                            />
                            <g>
                                <path
                                    d='M1595.53 1411.58c.65-3.73 2.46-43.68 2.47-54.34 0-9.64-1.24-11.89-6.58-11.92-1.6-.01-14.74 1.63-29.18 3.65s-26.51 3.42-26.82 3.11c-.31-.3.37-3.68 1.51-7.51 2.38-8 2.57-12 .66-14.51-1.71-2.25-58.78-48.67-59.53-48.41-.31.1-.67-.15-.81-.57-.14-.41-.02-.74.26-.73 1.18.02 13.05-6.37 13.73-7.4 1.49-2.27.64-7.5-3.73-23.12-4.82-17.19-5.29-20.01-3.17-19.2.73.28 8.57 2.01 17.41 3.84 15.87 3.28 16.12 3.3 18.19 1.41 1.16-1.04 3.04-4.97 4.18-8.73 1.14-3.75 2.39-6.82 2.78-6.82s6.54 6.57 13.66 14.6c7.11 8.02 13.7 15 14.62 15.5 2.86 1.54 6.68 1.03 7.79-1.03 1.78-3.34 1.18-8.49-4.48-38.33-3.04-15.97-5.34-29.22-5.11-29.45s4.05 1.42 8.49 3.65c9.23 4.64 12.87 5.06 15.85 1.81 1.14-1.23 6.44-10.46 11.79-20.5 5.35-10.03 10.07-18.25 10.49-18.25s5.14 8.22 10.49 18.25c5.35 10.04 10.66 19.27 11.79 20.5 2.98 3.25 6.62 2.83 15.85-1.81 4.44-2.23 8.26-3.88 8.48-3.66s-2.07 13.41-5.09 29.31c-5.64 29.68-6.28 35.13-4.48 38.48 1.1 2.06 4.92 2.57 7.78 1.03.92-.5 7.51-7.48 14.62-15.5 7.12-8.03 13.27-14.6 13.66-14.6s1.64 3.07 2.78 6.82c1.14 3.76 3.02 7.69 4.18 8.73 2.07 1.89 2.32 1.87 18.19-1.41 8.84-1.83 16.68-3.56 17.41-3.84 2.12-.81 1.65 2.01-3.17 19.2-4.37 15.62-5.22 20.85-3.72 23.12.67 1.03 12.54 7.42 13.72 7.4.28-.01.4.32.26.73-.14.42-.5.67-.81.57-.75-.26-57.82 46.16-59.53 48.41-1.91 2.51-1.72 6.51.66 14.51 1.14 3.83 1.81 7.21 1.5 7.53-.32.31-12.39-1.09-26.82-3.11-14.44-2.03-27.49-3.68-29-3.67s-3.7.96-4.85 2.12c-2.08 2.07-2.1 2.48-1.43 32.75.38 16.85.91 31.43 1.17 32.39.42 1.49-.2 1.75-4.05 1.75-4.4 0-4.52-.08-4.06-2.75zm3.47-265.31c0-.58.45-.78 1-.44s1 .82 1 1.06-.45.44-1 .44-1-.47-1-1.06z'
                                    fill='#ff2b06'
                                    transform='matrix(.781 0 0 .781 -1414.31 -1174.47) translate(538 556)'
                                />
                            </g>
                        </svg>
                        <h5>
                            <Trans i18nKey='canadian'></Trans>
                        </h5>
                    </div>
                    {/* world wide */}
                    <div className='flex gap-3 items-center rounded-2xl justify-center card p-4'>
                        <svg className='h-14 w-14 fill-primary' height={512} viewBox='0 0 32 32' width={512} xmlns='http://www.w3.org/2000/svg'>
                            <path d='M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0z' />
                            <path
                                d='M13.266 2.796c-.132-.178-.391-.304-.66-.378-.434-.119-.894-.098-.884.075-.428 0-.608.167-.616.392-.017.456.683 1.15 1.511 1.177 1.236.04.87-.97.649-1.266z'
                                fill='#fff'
                            />
                            <path d='M3.535 9.638a14.049 14.049 0 011.866-2.769' fill='#2e90d3' />
                            <path
                                d='M24.207 4.668l-.037-.026c-.188-.136-.38-.267-.575-.394l-.089-.057a14.14 14.14 0 00-.556-.336l-.105-.06a14.274 14.274 0 00-.586-.312l-.083-.043c-.459-.227-.932-.43-1.417-.606l-.031-.01c-.221-.08-.446-.154-.672-.222l-.201-.057a14.698 14.698 0 00-.776-.198 12.56 12.56 0 00-.484-.1l-.28-.05c-.16-.027-.322-.05-.484-.071-.093-.012-.186-.025-.28-.036-.174-.019-.35-.034-.527-.046-.082-.006-.163-.014-.245-.019a12.564 12.564 0 00-1.652.005c-.248.096-.695.332-.478.725.293.531 1.089 1.266.293 1.388s-1.257.653-1.969.653-2.514-.735-2.597-.204c-.084.531-1.843 1.47-2.262 1.429s-.628.735-1.76.735c-.298 0-.628.046-.953.113a14.049 14.049 0 00-1.866 2.769c.172.053.369.069.598.017 1.09-.245 2.514-1.715 3.519-.98s1.592 1.062 1.508 2.45-.335 3.103 1.173 3.838.587 1.47 1.76 1.96 2.765.735 3.184 1.062 1.173 1.062 1.173 1.062-1.089 1.225-.67 1.878 2.43.98 2.262 2.613-1.418 4.422-1.418 4.993-.062 1.404-.062 1.404 1.927-.735 2.346-1.552 2.15-3.13 2.653-3.375 2.011-1.225 2.514-2.205 2.346-2.123.503-2.613-2.011-2.042-3.435-2.123c-1.424-.082-1.047-.367-2.011-.327s-1.592.49-2.011.572-.964-.082-1.047-.49-.503-1.021-.796-.898c-.293.122.419-.735 0-.817s-.832.572-1.275.572-.485-1.674-.485-1.674 2.514-.286 2.639 0c.126.286.754.939.964.612s-.419-1.184-.293-1.388 2.933-2.001 3.016-2.736 1.592-.653 1.508-1.552-.922-.653-1.047-1.143c-.126-.49-.67-1.021-1.089-.531a.652.652 0 01-.327.199c.178-.197.299-.386.285-.485-.042-.286 1.215-.98 1.466-1.307s-1.592-1.388-2.304-1.633a3.468 3.468 0 00-1.117-.176c-.03-.479.004-.948.279-1.171.503-.408.964.694 1.341.694s1.718.041 2.011.449.838.98.838 1.347.503 2.817 1.676 2.572 1.215-.98 1.76-1.143 1.089.449 2.137.204c0 0-.08-.182-.276-.484a14.205 14.205 0 00-2.778-2.665zM17.33 5.94l-.008-.08c.153.06.304.109.427.121.419.041.587 1.021-.251 1.633-.629.459-.335.974-.01 1.282-.189.281-.403.585-.702.556-.419-.041-1.257-.49-1.508-.857s.503-1.388 1.005-1.715c.503-.328 1.089-.328 1.047-.94z'
                                fill='#fff'
                            />
                            <path
                                d='M19.854 2.544l.201.057-.201-.057zM17.551 2.088c.094.01.187.023.28.036-.094-.013-.187-.026-.28-.036zM19.078 2.345c.086.019.171.038.256.059-.085-.021-.171-.04-.256-.059zM23.505 4.191l.089.057a6.904 6.904 0 00-.089-.057zM24.17 4.642l.037.026-.037-.026zM20.727 2.823l.031.01-.031-.01zM16.779 2.023c.082.005.163.013.245.019-.082-.006-.163-.015-.245-.019zM18.315 2.195zM22.175 3.44l.083.043a1.303 1.303 0 00-.083-.043zM22.845 3.794l.105.06-.105-.06zM24.207 4.668zM20.758 2.834zM16 2zM22.95 3.855zM23.595 4.248zM16 2zM22.259 3.482zM17.83 2.124zM20.055 2.601zM17.024 2.042zM18.594 2.245zM19.334 2.404z'
                                fill='#0ba4e0'
                            />
                        </svg>
                        <h5>
                            <Trans i18nKey='worldwide'></Trans>
                        </h5>
                    </div>
                </div>
            </section>

            {/* features */}
            <section id='manhagna' data-aos='zoom-in' className='my-container bg-black bg-opacity-50 rounded-xl feature shadow-lg shadow-[#22152d13]'>
                <div className='flex gap-8 bg-black md:p-14 p-8 rounded-xl flex-col justify-center items-center w-full h-fit'>
                    <h2 className='text-center uppercase font-black leading-relaxed'>
                        <Trans i18nKey='what_distinguishes_us'></Trans>
                    </h2>
                    <h4 className='text-center leading-8 capitalize tracking-wide lg:pb-0 pb-4 font-semibold'>
                        <Trans i18nKey='since_our_first_launch'></Trans>
                    </h4>
                    <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 w-full flex-col lg:flex-row justify-between items-center text-center gap-8'>
                        <div data-aos='fade-up' data-aos-duration='1300' className='p-8 w-full gap-6 card flex-col flex justify-center items-center rounded-xl h-full'>
                            <div className='w-16 h-16 flex items-center justify-center rounded-full p-3 bg-primary manhagna-card'>
                                <svg className=' w-14 fill-black' xmlns='http://www.w3.org/2000/svg' id='fi_17303531' data-name='Layer 1' viewBox='0 0 64 64'>
                                    <path d='M31,51.6369a27.29986,27.29986,0,0,1-11.99152-2.76074V63.07574L31,57.38129l11.99152,5.69445V48.87616A27.29986,27.29986,0,0,1,31,51.6369Z' />
                                    <path d='M31,.7002A23.46835,23.46835,0,1,0,54.46832,24.16852,23.4683,23.4683,0,0,0,31,.7002Zm8.8902,36.21173L31,32.238l-8.8902,4.67389,1.69788-9.89942-7.19232-7.0108,9.93951-1.44428L31,9.55066l4.44513,9.00677,9.93951,1.44428-7.19232,7.0108Z' />
                                </svg>
                            </div>
                            <h4>
                                <Trans i18nKey='high_quality'></Trans>
                            </h4>
                        </div>
                        <div data-aos-duration='1300' data-aos='fade-down' className='p-8 w-full gap-6 card flex-col flex justify-center items-center rounded-xl h-full'>
                            <div className='w-16 h-16 flex items-center justify-center rounded-full p-3 bg-primary manhagna-card'>
                                <svg className=' w-14 fill-black' id='fi_3489339' enableBackground='new 0 0 20 20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                                    <g fill='rgb(0,0,0)'>
                                        <path d='m9 0h2v3h-2z' />
                                        <path d='m5.2 1.1h3v2h-3z' transform='matrix(.383 .924 -.924 .383 6.149 -4.907)' />
                                        <path d='m2.5 3h3v2h-3z' transform='matrix(.707 .707 -.707 .707 3.99 -1.652)' />
                                        <path d='m.6 5.7h3v2h-3z' transform='matrix(.924 .383 -.383 .924 2.746 -.308)' />
                                        <path d='m0 9h3v2h-3z' />
                                        <path d='m.6 12.3h3v2h-3z' transform='matrix(.924 -.383 .383 .924 -4.909 1.831)' />
                                        <path d='m2.5 15h3v2h-3z' transform='matrix(.707 -.707 .707 .707 -10.153 7.511)' />
                                        <path d='m5.7 16.4h2v3h-2z' transform='matrix(-.924 -.383 .383 -.924 6.148 36.93)' />
                                        <path d='m9 17h2v3h-2z' />
                                        <path d='m11.8 16.9h3v2h-3z' transform='matrix(-.383 -.924 .924 -.383 1.83 36.929)' />
                                        <path d='m14.5 15h3v2h-3z' transform='matrix(-.707 -.707 .707 -.707 16.009 38.652)' />
                                        <path d='m16.4 12.3h3v2h-3z' transform='matrix(-.924 -.383 .383 -.924 29.276 32.328)' />
                                        <path d='m17 9h3v2h-3z' />
                                        <path d='m12.3.6h2v3h-2z' transform='matrix(.924 .383 -.383 .924 1.831 -4.909)' />
                                    </g>
                                </svg>
                            </div>
                            <h4>
                                <Trans i18nKey='no_buffering'></Trans>
                            </h4>
                        </div>
                        <div data-aos-duration='1300' data-aos='fade-up' className='p-8 w-full gap-6 card flex-col flex justify-center items-center rounded-xl h-full'>
                            <div className='w-16 h-16 flex items-center justify-center rounded-full p-3 bg-primary manhagna-card'>
                                <svg
                                    className=' w-14 fill-black'
                                    version='1.1'
                                    id='fi_71576'
                                    xmlns='http://www.w3.org/2000/svg'
                                    xmlnsXlink='http://www.w3.org/1999/xlink'
                                    x='0px'
                                    y='0px'
                                    viewBox='0 0 380 380'
                                    style={{ enableBackground: "new 0 0 380 380" }}
                                    xmlSpace='preserve'
                                >
                                    <g>
                                        <path
                                            d='M68.335,42.365h271.429v106.723h25.784V18.325c0-3.538-2.868-6.407-6.407-6.407H48.958c-3.538,0-6.407,2.869-6.407,6.407
		v99.65h25.784V42.365z'
                                        />
                                        <path
                                            d='M171.443,135.486H6.408c-3.541,0-6.408,2.868-6.408,6.408v219.78c0,3.538,2.867,6.407,6.408,6.407h165.035
		c3.539,0,6.408-2.869,6.408-6.407v-219.78C177.852,138.355,174.982,135.486,171.443,135.486z M88.926,356.227
		c-3.892,0-7.049-3.154-7.049-7.048c0-3.893,3.156-7.048,7.049-7.048c3.893,0,7.047,3.155,7.047,7.048
		C95.973,353.072,92.818,356.227,88.926,356.227z M153.525,326.095H24.324V167.863h129.201V326.095z'
                                        />
                                        <rect x='194.018' y='251.783' width='60.244' height='34.692' />
                                        <path
                                            d='M194.018,244.514h60.244v-40.06h-60.244V244.514z M204.049,218.563c3.896,0,7.05,3.157,7.05,7.049
		c0,3.893-3.154,7.049-7.05,7.049c-3.893,0-7.048-3.156-7.048-7.049C197.001,221.72,200.156,218.563,204.049,218.563z'
                                        />
                                        <path
                                            d='M374.574,163.912h-98.719c-2.998,0-5.426,2.428-5.426,5.424v186.052c0,2.995,2.428,5.423,5.426,5.423h98.719
		c2.998,0,5.426-2.428,5.426-5.423V169.336C380,166.34,377.572,163.912,374.574,163.912z M325.215,350.775
		c-3.297,0-5.967-2.67-5.967-5.964c0-3.298,2.67-5.968,5.967-5.968c3.295,0,5.967,2.67,5.967,5.968
		C331.182,348.105,328.51,350.775,325.215,350.775z M360.5,324.833h-70.57v-133.08h70.57V324.833z'
                                        />
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
                            </div>
                            <h4>
                                <Trans i18nKey='supports_all_devices'></Trans>
                            </h4>
                        </div>
                        <div data-aos-duration='1300' data-aos='fade-down' className='p-8 w-full gap-6 card flex-col flex justify-center items-center rounded-xl h-full'>
                            <div className='w-16 h-16 flex items-center justify-center rounded-full p-3 bg-primary manhagna-card'>
                                <svg className=' w-14 fill-black' id='fi_3468577' enableBackground='new 0 0 512 512' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
                                    <g>
                                        <path d='m509.397 219.393c-.855-5.967-5.2-10.843-11.03-12.376l-25.494-6.709c-5.247-20.488-13.348-40.015-24.168-58.254l13.302-22.81c3.035-5.206 2.661-11.722-.95-16.546-7.274-9.718-15.361-19.045-24.038-27.725-8.657-8.66-17.986-16.748-27.726-24.042-4.824-3.612-11.341-3.987-16.549-.948l-22.806 13.304c-18.239-10.822-37.766-18.923-58.253-24.17l-6.709-25.493c-1.534-5.829-6.407-10.174-12.374-11.031-24.066-3.457-49.139-3.457-73.205 0-5.967.856-10.84 5.201-12.374 11.031l-6.709 25.493c-20.487 5.246-40.012 13.347-58.253 24.17l-22.806-13.304c-5.206-3.037-11.725-2.662-16.549.948-9.739 7.293-19.068 15.381-27.727 24.042-8.676 8.679-16.763 18.006-24.037 27.724-3.611 4.824-3.985 11.34-.95 16.546l13.302 22.81c-10.821 18.241-18.922 37.767-24.168 58.254l-25.494 6.709c-5.83 1.533-10.175 6.409-11.03 12.376-1.726 12.039-2.602 24.353-2.602 36.602s.876 24.563 2.603 36.601c.855 5.967 5.2 10.843 11.03 12.376l25.494 6.709c5.247 20.488 13.348 40.015 24.168 58.254l-13.302 22.81c-3.035 5.206-2.661 11.722.95 16.546 7.274 9.718 15.361 19.045 24.038 27.725 8.657 8.66 17.986 16.748 27.726 24.042 4.824 3.611 11.341 3.987 16.549.948l22.806-13.304c18.239 10.822 37.766 18.923 58.253 24.169l6.709 25.493c1.534 5.829 6.407 10.174 12.374 11.031 12.033 1.73 24.348 2.606 36.602 2.606s24.569-.876 36.603-2.604c5.967-.857 10.84-5.201 12.374-11.031l6.709-25.493c20.487-5.246 40.012-13.347 58.253-24.169l22.806 13.304c5.208 3.039 11.726 2.664 16.549-.948 9.739-7.293 19.068-15.381 27.727-24.042 8.676-8.679 16.763-18.006 24.037-27.724 3.611-4.824 3.985-11.34.95-16.546l-13.302-22.81c10.821-18.241 18.922-37.766 24.168-58.254l25.494-6.709c5.83-1.533 10.175-6.409 11.03-12.376 1.727-12.038 2.603-24.352 2.603-36.601s-.877-24.566-2.604-36.604zm-253.397 196.207c-88.004 0-159.6-71.596-159.6-159.6s71.596-159.6 159.6-159.6 159.6 71.596 159.6 159.6-71.596 159.6-159.6 159.6z'></path>
                                        <path d='m256 126.4c-71.462 0-129.6 58.138-129.6 129.6s58.138 129.6 129.6 129.6 129.6-58.138 129.6-129.6-58.138-129.6-129.6-129.6zm74.873 108.073-80.333 80.334c-2.813 2.813-6.628 4.394-10.606 4.394s-7.794-1.58-10.606-4.394l-40.168-40.167c-5.858-5.857-5.858-15.355 0-21.213 5.857-5.857 15.355-5.857 21.213 0l29.561 29.561 69.727-69.728c5.857-5.857 15.355-5.857 21.213 0 5.857 5.857 5.857 15.355-.001 21.213z'></path>
                                    </g>
                                </svg>
                            </div>
                            <h4>
                                <Trans i18nKey='easy_installation'></Trans>
                            </h4>
                        </div>
                        <div data-aos-duration='1300' data-aos='fade-up' className='p-8 w-full gap-6 card flex-col flex justify-center items-center rounded-xl h-full'>
                            <div className='w-16 h-16 flex items-center justify-center rounded-full p-3 bg-primary manhagna-card'>
                                <svg className=' w-14 fill-black' xmlns='http://www.w3.org/2000/svg' id='fi_9023799' viewBox='0 0 64 64' width={512} height={512}>
                                    <path d='M34,28A11,11,0,1,0,23,17,11.013,11.013,0,0,0,34,28ZM30,14a4,4,0,0,1,3-3.858V9a1,1,0,0,1,2,0v1.142A4,4,0,0,1,38,14a1,1,0,0,1-2,0,1.993,1.993,0,0,0-1-1.722v3.864a3.981,3.981,0,0,1,0,7.716V25a1,1,0,0,1-2,0V23.858A4,4,0,0,1,30,20a1,1,0,0,1,2,0,1.993,1.993,0,0,0,1,1.722V17.858A4,4,0,0,1,30,14Z' />
                                    <path d='M36,20a1.993,1.993,0,0,0-1-1.722v3.444A1.993,1.993,0,0,0,36,20Z' />
                                    <path d='M30.5,33.634V37H28a1,1,0,0,0-.707,1.707l6,6a1,1,0,0,0,1.414,0l6-6A1,1,0,0,0,40,37H37.5V33.634a17,17,0,1,0-7,0ZM34,4A13,13,0,1,1,21,17,13.015,13.015,0,0,1,34,4Z' />
                                    <path d='M33,12.278a1.983,1.983,0,0,0,0,3.444Z' />
                                    <rect x={1} y={45} width={14} height={19} rx={1} />
                                    <path d='M47.258,47.215A4.969,4.969,0,0,1,49.028,51c0,.158-.007.315-.021.47l6.3-6.625a2.609,2.609,0,0,0-4.47-1.393Z' />
                                    <path d='M58.423,44.475l-9.488,9.972A5,5,0,0,1,45.313,56H33.028a1,1,0,1,1,0-2h11a3,3,0,0,0,0-6h-11.7l-.252-.168a11.085,11.085,0,0,0-12.1,0L19.726,48H17V61h2.7a12.859,12.859,0,0,0,6.9,2H46.943a9,9,0,0,0,7.291-3.724L62.5,47.86a2.654,2.654,0,0,0-4.073-3.385Z' />
                                </svg>
                            </div>
                            <h4>
                                <Trans i18nKey='affordable_price'></Trans>
                            </h4>
                        </div>
                        <div data-aos-duration='1300' data-aos='fade-down' className='p-8 w-full gap-6 card flex-col flex justify-center items-center rounded-xl h-full'>
                            <div className='w-16 h-16 flex items-center justify-center rounded-full p-3 bg-primary manhagna-card'>
                                <svg className=' w-14 fill-black' id='fi_6012476' enableBackground='new 0 0 512 512' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        clipRule='evenodd'
                                        d='m259.142 74.929 16.122 42.464c.485 1.277 1.613 2.096 2.977 2.163l45.367 2.211c1.421.069 2.591.964 3.031 2.317.439 1.353.019 2.765-1.09 3.656l-35.403 28.455c-1.064.855-1.495 2.182-1.137 3.499l11.916 43.83c.373 1.373-.116 2.762-1.267 3.598s-2.623.872-3.814.093l-38.003-24.877c-1.142-.748-2.537-.748-3.679 0l-38.002 24.877c-1.19.779-2.663.743-3.813-.093-1.151-.836-1.64-2.226-1.267-3.598l11.916-43.83c.358-1.317-.073-2.644-1.137-3.499l-35.403-28.455c-1.109-.891-1.53-2.303-1.09-3.656.439-1.353 1.61-2.247 3.031-2.317l45.367-2.211c1.364-.066 2.492-.886 2.976-2.163l16.122-42.464c.505-1.33 1.717-2.166 3.14-2.166s2.635.836 3.14 2.166zm-87.864-13.359 28.376 25.551c3.279 2.951 8.33 2.685 11.281-.594s2.685-8.33-.594-11.281l-28.376-25.551c-3.279-2.951-8.33-2.685-11.281.594s-2.686 8.33.594 11.281zm158.76-11.875-28.542 25.7c-3.279 2.951-3.545 8.002-.594 11.281s8.002 3.545 11.281.594l28.542-25.7c3.279-2.951 3.545-8.002.594-11.281-2.952-3.279-8.002-3.545-11.281-.594zm-66.036-6.649c0 4.418-3.582 8-8 8s-8-3.582-8-8v-29.359c0-4.418 3.582-8 8-8s8 3.582 8 8zm-8 189.838c30.999 0 56.129 25.13 56.129 56.128 0 30.999-25.13 56.129-56.129 56.129s-56.128-25.13-56.128-56.129 25.129-56.128 56.128-56.128zm110.372 221.324c-5.96-55.692-53.099-99.067-110.372-99.067-57.274 0-104.413 43.375-110.373 99.068v22.438c0 16.34 13.327 29.667 29.667 29.667h161.411c16.34 0 29.667-13.327 29.667-29.667zm57.376-180.564c23.191 0 41.991 18.801 41.991 41.991 0 23.191-18.8 41.991-41.991 41.991s-41.991-18.8-41.991-41.991c-.001-23.19 18.799-41.991 41.991-41.991zm-335.496 0c23.191 0 41.991 18.801 41.991 41.991 0 23.191-18.8 41.991-41.991 41.991s-41.991-18.8-41.991-41.991c0-23.19 18.8-41.991 41.991-41.991zm-.001 95.199c24.472 0 46.471 10.584 61.671 27.424-10.727 16.242-17.84 35.143-20.132 55.629h-102.754c-6.227 0-11.585-2.707-15.28-7.719s-4.696-10.931-2.854-16.88c10.485-33.859 42.046-58.454 79.349-58.454zm335.496 0c37.305 0 68.865 24.595 79.349 58.454 1.842 5.949.841 11.867-2.854 16.88s-9.052 7.719-15.28 7.719h-102.754c-2.292-20.486-9.406-39.386-20.132-55.629 15.201-16.84 37.2-27.424 61.671-27.424zm-341.8-293.914 16.122 42.464c.485 1.277 1.613 2.096 2.977 2.163l45.367 2.211c1.421.069 2.591.964 3.031 2.317.439 1.353.019 2.765-1.09 3.656l-35.403 28.455c-1.064.855-1.495 2.182-1.137 3.499l11.916 43.83c.373 1.373-.116 2.762-1.267 3.598s-2.623.872-3.814.093l-38.003-24.877c-1.142-.748-2.537-.748-3.679 0l-38.002 24.877c-1.19.779-2.663.743-3.813-.093-1.151-.836-1.64-2.226-1.267-3.598l11.916-43.83c.358-1.317-.073-2.644-1.137-3.499l-35.403-28.456c-1.109-.891-1.53-2.303-1.09-3.656.439-1.353 1.61-2.247 3.031-2.317l45.367-2.211c1.364-.066 2.492-.886 2.976-2.163l16.123-42.463c.505-1.33 1.717-2.166 3.14-2.166s2.634.836 3.139 2.166zm353.856 0 16.122 42.464c.485 1.277 1.613 2.096 2.977 2.163l45.367 2.211c1.421.069 2.591.964 3.031 2.317.439 1.353.019 2.765-1.09 3.656l-35.403 28.455c-1.064.855-1.495 2.182-1.137 3.499l11.916 43.83c.373 1.373-.116 2.762-1.266 3.598-1.151.836-2.623.872-3.814.093l-38.003-24.877c-1.142-.748-2.537-.748-3.679 0l-38.002 24.877c-1.19.779-2.663.743-3.814-.093s-1.64-2.226-1.267-3.598l11.916-43.83c.358-1.317-.073-2.644-1.137-3.499l-35.403-28.455c-1.109-.891-1.53-2.303-1.09-3.656.439-1.353 1.61-2.247 3.031-2.317l45.367-2.211c1.364-.066 2.492-.886 2.976-2.163l16.122-42.464c.505-1.33 1.717-2.166 3.14-2.166s2.635.836 3.14 2.166z'
                                        fillRule='evenodd'
                                    />
                                </svg>
                            </div>
                            <h4>
                                <Trans i18nKey='satisfied_customers'></Trans>
                            </h4>
                        </div>
                        <div data-aos-duration='1300' data-aos='fade-up' className='p-8 w-full gap-6 card flex-col flex justify-center items-center rounded-xl h-full'>
                            <div className='w-16 h-16 flex items-center justify-center rounded-full p-3 bg-primary manhagna-card'>
                                <svg className=' w-14 fill-black' id='fi_16821907' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' data-name='Layer 1'>
                                    <path d='m18.18 4.56-5.79-2.48c-.25-.11-.54-.11-.79 0l-5.79 2.48c-1.1.47-1.82 1.56-1.82 2.76v4.83c0 2.73 1.33 5.32 3.55 6.91l3.86 2.76c.17.12.38.19.58.19s.41-.06.58-.19l3.86-2.76c2.23-1.59 3.55-4.17 3.55-6.91v-4.83c0-1.2-.71-2.28-1.82-2.76zm-2.47 6.15-4 4c-.2.2-.45.29-.71.29s-.51-.1-.71-.29l-2-2c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l1.29 1.29 3.29-3.29c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41z' />
                                </svg>
                            </div>
                            <h4>
                                <Trans i18nKey='full_warranty'></Trans>
                            </h4>
                        </div>
                        <div data-aos-duration='1300' data-aos='fade-down' className='p-8 w-full gap-6 card flex-col flex justify-center items-center rounded-xl h-full'>
                            <div className='w-16 h-16 flex items-center justify-center rounded-full p-3 bg-primary manhagna-card'>
                                <svg className=' w-14 fill-black' viewBox='1 -8 511.99963 511' xmlns='http://www.w3.org/2000/svg' id='fi_1441147'>
                                    <path d='m507.605469 342.292969-48.511719-48.515625-100.355469 100.355468c-17.914062 17.914063-40.398437 29.59375-64.820312 33.964844l63.941406 63.941406c5.855469 5.859376 15.355469 5.859376 21.210937 0 0 0 128.535157-128.53125 128.535157-128.53125 5.859375-5.859374 5.859375-15.359374 0-21.214843zm0 0' />
                                    <path d='m439.332031 271.113281c16.910157-16.90625 16.914063-44.417969.023438-61.335937-.019531-.019532-.039063-.039063-.058594-.058594-4.179687-4.175781-9.0625-7.394531-14.378906-9.546875 4.609375-11.660156 5.582031-31.378906-9.6875-46.652344-.039063-.039062-.078125-.082031-.121094-.121093-4.160156-4.132813-9.011719-7.320313-14.292969-9.460938 4.609375-11.652344 5.585938-31.375-9.675781-46.640625-.011719-.011719-.019531-.019531-.027344-.027344-4.183593-4.183593-9.070312-7.410156-14.394531-9.5625 4.609375-11.660156 5.582031-31.382812-9.6875-46.65625-.003906 0-.003906-.003906-.007812-.003906-.003907-.003906-.007813-.007813-.011719-.011719-16.917969-16.917968-44.441407-16.917968-61.359375 0l-28.441406 28.4375 14.542968 14.542969c24.234375 24.234375 24.234375 63.664063.003906 87.898437-8.15625 8.152344-18.175781 13.753907-29.097656 16.421876-2.613281 10.648437-8.066406 20.742187-16.375 29.046874-8.144531 8.144532-18.148437 13.742188-29.058594 16.414063-2.667968 10.90625-8.269531 20.914063-16.410156 29.054687-8.144531 8.144532-18.148437 13.742188-29.058594 16.414063-2.667968 10.90625-8.269531 20.914063-16.410156 29.058594-11.738281 11.734375-27.347656 18.203125-43.949218 18.203125-16.601563 0-32.210938-6.464844-43.949219-18.207032l-14.542969-14.542968-48.511719 48.515625c-5.859375 5.859375-5.859375 15.355469 0 21.214843l128.53125 128.53125c5.859375 5.859376 15.355469 5.855469 21.214844 0l92.007813-92.003906h25.921874c24.726563 0 47.972657-9.632812 65.457032-27.113281zm0 0' />
                                    <path d='m88.664062 287.109375c12.554688 12.558594 32.914063 12.558594 45.46875 0 12.558594-12.554687 12.558594-32.910156 0-45.46875 12.558594 12.558594 32.914063 12.558594 45.472657 0 12.554687-12.554687 12.554687-32.914063 0-45.46875 12.554687 12.554687 32.914062 12.554687 45.46875 0 12.554687-12.554687 12.554687-32.914063 0-45.46875 12.554687 12.554687 32.914062 12.554687 45.46875 0 12.558593-12.558594 12.558593-32.914063 0-45.472656l-64.109375-64.109375c-12.554688-12.554688-32.914063-12.554688-45.46875 0-12.554688 12.554687-12.554688 32.914062 0 45.46875l8.03125 8.035156c-12.554688-12.558594-32.914063-12.558594-45.46875 0-12.554688 12.554688-12.554688 32.914062 0 45.46875l16.066406 16.066406c-12.554688-12.554687-32.914062-12.554687-45.46875 0-12.558594 12.554688-12.558594 32.914063 0 45.46875l16.066406 16.070313c-12.558594-12.558594-32.914062-12.558594-45.472656 0-12.554688 12.554687-12.554688 32.910156 0 45.46875zm0 0' />
                                    <path d='m284.4375 19.820312c2.21875-2.21875 4.566406-4.257812 7.007812-6.152343l-8.773437-8.773438c-4.5625-4.566406-11.542969-5.695312-17.3125-2.8125l-37.023437 18.511719 27.664062 27.667969zm0 0' />
                                </svg>
                            </div>
                            <h4>
                                <Trans i18nKey='support_services'></Trans>
                            </h4>
                        </div>
                        <div data-aos-duration='1300' data-aos='fade-up' className='p-8 w-full gap-6 card flex-col flex justify-center items-center rounded-xl h-full'>
                            <div className='w-16 h-16 flex items-center justify-center rounded-full p-3 bg-primary manhagna-card'>
                                <svg className=' w-14 fill-black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                    <clipPath id='a'>
                                        <path d='M0 0h24v24H0z' />
                                    </clipPath>
                                    <g clipPath='url(#a)'>
                                        <path
                                            d='M16.95 10.23l-5.66 5.66a.996.996 0 01-1.41 0l-2.83-2.83a.996.996 0 111.41-1.41l2.12 2.12 4.95-4.95a.996.996 0 011.41 0c.4.39.4 1.02.01 1.41zM4 12c0-2.33 1.02-4.42 2.62-5.88l1.53 1.53A.5.5 0 009 7.29V3c0-.28-.22-.5-.5-.5H4.21c-.45 0-.67.54-.35.85L5.2 4.7C3.24 6.52 2 9.11 2 12c0 4.75 3.32 8.73 7.76 9.75.63.14 1.24-.33 1.24-.98 0-.47-.33-.87-.79-.98C6.66 18.98 4 15.8 4 12zm18 0c0-4.75-3.32-8.73-7.76-9.75-.63-.14-1.24.33-1.24.98 0 .47.33.87.79.98C17.34 5.02 20 8.2 20 12c0 2.33-1.02 4.42-2.62 5.88l-1.53-1.53a.5.5 0 00-.85.36V21c0 .28.22.5.5.5h4.29c.45 0 .67-.54.35-.85L18.8 19.3c1.96-1.82 3.2-4.41 3.2-7.3z'
                                            fill='#000'
                                        />
                                    </g>{" "}
                                </svg>
                            </div>
                            <h4>
                                <Trans i18nKey='daily_update'></Trans>
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* why chose us */}
            <section className='my-container bg-black'>
                <div id='whyus' className='flex flex-col lg:flex-row justify-center h-full w-full items-center gap-8 '>
                    <h2 className='flex md:hidden text-center uppercase md:text-start md:justify-start items-center justify-center md:items-start w-full font-black leading-relaxed'>
                        <Trans i18nKey='why_choose_us'></Trans>
                    </h2>
                    <div data-aos='fade-left' className='basis-1/2 flex flex-col gap-8 justify-center order-3 items-center md:items-start'>
                        <h2 className='md:flex hidden text-center uppercase md:text-start md:justify-start items-center justify-center md:items-start w-full font-black leading-relaxed'>
                            <Trans i18nKey='why_choose_us'></Trans>
                        </h2>
                        <div className='flex flex-col gap-4'>
                            <h4 className='text-justify text-white'>
                                <strong className='text-primary'>
                                    <Trans i18nKey='img_quality'></Trans> {""}
                                </strong>
                                <Trans i18nKey='img_quality_paragraph'></Trans>
                            </h4>
                            <h4 className='text-justify text-white'>
                                <strong className='text-primary'>
                                    <Trans i18nKey='after_sale'></Trans> {""}
                                </strong>
                                <Trans i18nKey='after_sale_paragraph'></Trans>
                            </h4>
                            <h4 className='text-justify text-white'>
                                <strong className='text-primary'>
                                    <Trans i18nKey='customer_support'></Trans> {""}
                                </strong>
                                <Trans i18nKey='customer_support_paragraph'></Trans>
                            </h4>
                            {/* <h4 className='text-justify text-white'>
                            <Trans i18nKey='dont_miss'></Trans>
                        </h4> */}
                        </div>
                        <a href='#contactus'>
                            <button className='btn'>
                                <Trans i18nKey='dont_miss_btn'></Trans>
                            </button>
                        </a>
                    </div>
                    <div data-aos='fade-right' className='basis-1/2 h-full order-2 lg:order-last'>
                        <img loading='lazy' className='w-fit h-full rounded-xl' src={chooseUs} alt='' />
                    </div>
                </div>
            </section>

            <section className='my-container bg-black'>
                <div className='flex lg:flex-row flex-col w-full justify-between items-center gap-8'>
                    <div id='contactus' data-aos='fade-right' className='basis-1/2 flex flex-col gap-4 md:text-justify text-center'>
                        <h2 className='uppercase text-white font-black'>
                            <Trans i18nKey='touch'></Trans>
                        </h2>
                        <h4>
                            <Trans i18nKey='contact'></Trans>
                        </h4>
                    </div>

                    <div data-aos='fade-left' className='flex text-center w-full basis-1/2 md:flex-row flex-col gap-4'>
                        <div className='gap-2 hover:border-[#93783e90] border border-[#3e3d393f] flex flex-col items-center justify-center rounded-xl md:w-72 w-full card py-10 px-8'>
                            <svg className='h-14 w-14 fill-primary' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M2.617 15.832l6.44 2.187 15.291-9.348c.222-.135.449.166.258.342L13.03 19.668l-.43 5.965a.494.494 0 00.838.388l3.564-3.505 6.516 4.932c.702.532 1.719.157 1.908-.703l4.537-20.6c.259-1.175-.893-2.167-2.016-1.737L2.585 14.12c-.796.305-.774 1.438.032 1.712z' />
                            </svg>
                            <h4 className='text-white tracking-wide'>
                                <Trans i18nKey='telegram'></Trans>
                            </h4>
                            <h4 className='text-white tracking-wide'>+1-647-706-7229</h4>
                        </div>
                        <div className='gap-2 hover:border-[#93783e90] border border-[#3e3d393f] flex flex-col items-center justify-center rounded-xl md:w-72 w-full card py-10 px-8'>
                            <svg className='h-14 w-14 fill-primary' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' data-name='Layer 3'>
                                <path d='M29.393 23.36c-.874-.733-6-3.979-6.852-3.83-.4.071-.706.412-1.525 1.389a11.687 11.687 0 01-1.244 1.347 10.757 10.757 0 01-2.374-.88 14.7 14.7 0 01-6.784-6.786 10.757 10.757 0 01-.88-2.374 11.687 11.687 0 011.347-1.244c.976-.819 1.318-1.123 1.389-1.525.149-.854-3.1-5.978-3.83-6.852C8.334 2.243 8.056 2 7.7 2 6.668 2 2 7.772 2 8.52c0 .061.1 6.07 7.689 13.791C17.41 29.9 23.419 30 23.48 30c.748 0 6.52-4.668 6.52-5.7 0-.356-.243-.634-.607-.94zM23 15h2a8.009 8.009 0 00-8-8v2a6.006 6.006 0 016 6z' />
                                <path d='M28 15h2A13.015 13.015 0 0017 2v2a11.013 11.013 0 0111 11z' />
                            </svg>
                            <h4 className='text-white tracking-wide'>
                                <Trans i18nKey='phone'></Trans>
                            </h4>
                            <h4 className='text-white tracking-wide'>001-6477067229</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex items- md:py-16 pt-10 md:px-20 px-4 center justify-center bg-black'>
                <img src={logo} alt='logo-footer' className='h-36' />
            </section>
        </>
    );
}

export default Hero;
