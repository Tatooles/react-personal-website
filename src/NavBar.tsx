import { useState } from "react";

const NavBar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <nav className="w-full flex py-6 justify-between items-center navbar">
                {/* This needs work, need a gap between the name and the buttons */}
                <a href="#" className="font-bold text-xl">KEVIN TATOOLES</a>

                <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                    {/* Change this to a for loop so it's a bit cleaner */}
                    <NavBarButton text="ABOUT"></NavBarButton>
                    <NavBarButton text="EXPERIENCE"></NavBarButton>
                    <NavBarButton text="PROJECTS"></NavBarButton>
                    <NavBarButton text="EDUCATION"></NavBarButton>
                    <NavBarButton text="CONTACT"></NavBarButton>
                </ul>
                <div className="sm:hidden col-span-6 flex justify-end">
                    <button onClick={() => setToggle(!toggle)} data-collapse-toggle="navbar-default" type="button" className="p-2 ml-3 text-sm text-black rounded-lg focus:ring-2 focus:ring-black" aria-controls="navbar-default" aria-expanded="false">
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="hidden sm:flex col-span-8 space-between justify-between">
                </div>
            </nav>
            <div className={`${toggle ? "flex-col" : "hidden"}`}>
                <MobileMenuButton text="ABOUT"></MobileMenuButton>
                <MobileMenuButton text="EXPERIENCE"></MobileMenuButton>
                <MobileMenuButton text="PROJECTS"></MobileMenuButton>
                <MobileMenuButton text="EDUCATION"></MobileMenuButton>
                <MobileMenuButton text="CONTACT"></MobileMenuButton>
            </div>
        </>
    );
};

interface ButtonProps {
    text: string;
}

const NavBarButton = ({ text }: ButtonProps) => {
    return (
        <li className={`border-black border-2 p-2
                      bg-black text-white font-bold shadow-lg text-lg
                        rounded-lg hover:bg-white hover:text-black
                        transition-all cursor-pointer`}>
            <a href="#">{text}</a>
        </li>
    );
};

const MobileMenuButton = ({ text }: ButtonProps) => {
    return (
        <a className="border-black border-b-2 p-2 font-bold justify-center items-center content-center">
            {text}
        </a>
    )
};

export default NavBar;