import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import logo from "../assets/logo.png";
import "../App.css";
import i18n from "i18next";
import { useEffect, useState } from "react";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Navi() {
    
    const { t } = useTranslation();

    const lng = cookies.get("i18next");
    const [language, setLanguage] = useState(lng);

    const changeLanguage = () => {
        const newLng = language === "ar" ? "en" : "ar";
        setLanguage(newLng);
        cookies.set("i18next", newLng);
        i18n.changeLanguage(newLng);
    };
    useEffect(() => {
        window.document.dir = i18n.dir();
    }, [language]);
    return (
        <>
            <Navbar className='md:py-0.5 py-4 md:px-24 px-6 bg-opacity-25 backdrop-blur-lg fixed z-20 shadow-lg ring-1 ring-black/5 w-full' rounded>
                <NavbarBrand href='#home'>
                    <img src={logo} className='h-6 sm:h-32' alt='noor 4k Logo' />
                    <span className='self-center whitespace-nowrap lg:text-3xl text-xl font-semibold text-white'>NOOR 4K</span>
                </NavbarBrand>
                <div className='flex items-center md:order-2 md:space-x-0 rtl:space-x-reverse'>
                    <button
                        onClick={changeLanguage}
                        type='button'
                        className='inline-flex items-center lg:text-xl text-sm text-white bg-primary hover:bg-primaryHover outline outline-white outline-1 font-medium justify-center px-4 py-2 text-base rounded-full cursor-pointer '
                    >
                        {lng === "ar" ? "English (UK)" : "العربية (KSA)"}
                    </button>
                    <NavbarToggle className='text-white hover:bg-transparent focus:bg-transparent' />
                </div>
                <NavbarCollapse className='uppercase'>
                    <ul className="md:flex md:flex-row flex-col gap-6">
                        <a className='nav-btn bg-primary'>{t("Home")}</a>
                        <a className='nav-btn'>{t("About Us")}</a>
                        <a className='nav-btn'>{t("Contact Us")}</a>
                        <a className='nav-btn'>{t("Services")}</a>
                    </ul>
                </NavbarCollapse>
            </Navbar>
        </>
    );
}

export default Navi;
