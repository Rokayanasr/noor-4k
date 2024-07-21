import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link } from "react-router-dom";

function Navi() {
    return (
        <>
            <Navbar fluid rounded>
                <NavbarBrand  href='https://flowbite-react.com'>
                    <img src='/favicon.svg' className='mr-3 h-6 sm:h-9' alt='Flowbite React Logo' />
                    <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>Flowbite React</span>
                </NavbarBrand>
                <NavbarToggle />
                <NavbarCollapse>
                    <NavbarLink href='#' active>
                        Home
                    </NavbarLink>
                    <NavbarLink  href='#'>
                        About
                    </NavbarLink>
                    <NavbarLink href='#'>Services</NavbarLink>
                    <NavbarLink href='#'>Pricing</NavbarLink>
                    <NavbarLink href='#'>Contact</NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </>
    );
}

export default Navi;
