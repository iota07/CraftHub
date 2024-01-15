import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TitleH1 from "../Logo/TitleH1";
import Avatar from "../Profile/Avatar";
import { GrHomeRounded } from "react-icons/gr";
import { LuSearch } from "react-icons/lu";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";

const LaptopNavbar = () => {
    return (
        <nav className='navbarContainer fixed top-0 left-0 right-0 flex w-full p-1 bg-yellow border border-b-blue border-opacity-50'>
            <Link to="/home" className='navbarLeft flex-1 w-1/3" '><TitleH1 title="CraftHub" /></Link>
            <Link to="/about" className='navbarCenter flex-1 w-5/12'>About</Link>
            <Link to="/profile" className='navbarRight flex-1 w-2/5 flex justify-end items-center pr-2'><Avatar /></Link>
        </nav>
    );
};

const MobileNavbar = () => {
    return (
        <nav className='navbarContainer fixed bottom-0 left-0 right-0 flex w-full justify-center items-center p-1 text-blue bg-yellow border border-t-blue border-opacity-50'>
            <Link to="/home" className='w-1/5 h-10 flex justify-center items-center'>
                <GrHomeRounded />
            </Link>
            <Link to="/search" className='w-1/5 h-10 flex justify-center items-center'>
                <LuSearch />
            </Link>
            <Link to="/post" className='w-1/5 h-10 flex justify-center items-center'>
                <TbSquareRoundedPlus />
            </Link>
            <Link to="/about" className='w-1/5 h-10 flex justify-center items-center'>
                <IoChatbubbleEllipsesOutline />
            </Link>
            <Link to="/profile" className='w-1/5 h-10 flex justify-center items-center'>
                <HiOutlineUser />
            </Link>
        </nav>
    );
}

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const isMobileSize = window.matchMedia('(max-width: 768px)').matches;
            setIsMobile(isMobileSize);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },
    {});

    return (
        <div className={`navbar ${isMobile ? 'mobile-navbar' : 'laptop-navbar'}`}>
            {isMobile ? <MobileNavbar /> : <LaptopNavbar />}
        </div>
    );
}

export default Navbar;