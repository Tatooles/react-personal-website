import { useState } from "react";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
        <div className="mx-auto grid grid-cols-12 content-center
                        h-28 p-2 border-2 border-teal-400">
            {/* This needs work, need a gap between the name and the buttons */}
            <div className="md:col-span-4 col-span-6 flex justify-start items-center">
            <a href="#" className="font-bold text-xl sm:text-2xl">KEVIN TATOOLES</a>
            </div>
            <div className="md:hidden col-span-6 flex justify-end">
                <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" className="p-2 ml-3 text-sm text-black rounded-lg focus:ring-2 focus:ring-black" aria-controls="navbar-default" aria-expanded="false">
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <div className="hidden md:flex col-span-8 space-between justify-between">
                <NavBarButton text="ABOUT"></NavBarButton>
                <NavBarButton text="EXPERIENCE"></NavBarButton>
                <NavBarButton text="PROJECTS"></NavBarButton>
                <NavBarButton text="EDUCATION"></NavBarButton>
                <NavBarButton text="CONTACT"></NavBarButton>
            </div>
        </div>
        {menuOpen &&
        <div>this is the menu</div>
        }
        </>
    );
};

const NavBarButton = ({ text }) => {
    return (
        <div className="relative items-center justify-center p-2 lg:p-4 border-black border-2
                      bg-black text-white font-bold shadow-lg text-xs md:text-md lg:text-lg
                        rounded-lg hover:bg-white hover:text-black
                        transition-all cursor-pointer">
            {text}
        </div>
    );
};

export default NavBar;