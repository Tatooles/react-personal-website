import { useState } from "react";

const NavBar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            {/* This needs work, need a gap between the name and the buttons */}
            <a href="#" className="font-bold text-xl">KEVIN TATOOLES</a>

            <ul className="list-none md:flex hidden justify-end items-center flex-1">
                {/* Change this to a for loop so it's a bit cleaner */}
                <NavBarButton text="ABOUT"></NavBarButton>
                <NavBarButton text="EXPERIENCE"></NavBarButton>
                <NavBarButton text="PROJECTS"></NavBarButton>
                <NavBarButton text="EDUCATION"></NavBarButton>
                <NavBarButton text="CONTACT"></NavBarButton>
            </ul>
            {/* Mobile menu below */}
            <div className="md:hidden flex flex-1 justify-end items-center">
                <svg onClick={() => setToggle((prev) => !prev)} className={`fill-black ${toggle ? 'flex' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
                </svg>
                <svg onClick={() => setToggle((prev) => !prev)} className={`fill-black ${toggle ? 'hidden' : 'flex'}`} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
                </svg>

                <div className={`md:hidden ${toggle ? 'flex' : 'hidden'}
                                p-6 bg-black absolute top-20 right-0
                                mx-4 my-2 min-w-[140px] rounded-xl z-10`}>
                    <ul className="flex flex-1 flex-col items-center list-none">
                        <MobileMenuButton text="ABOUT"></MobileMenuButton>
                        <MobileMenuButton text="EXPERIENCE"></MobileMenuButton>
                        <MobileMenuButton text="PROJECTS"></MobileMenuButton>
                        <MobileMenuButton text="EDUCATION"></MobileMenuButton>
                        <MobileMenuButton text="CONTACT"></MobileMenuButton>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

interface ButtonProps {
    text: string;
}

const NavBarButton = ({ text }: ButtonProps) => {
    return (
        <li className={`border-black border-2 p-1 lg:p-2
                      bg-black text-white font-bold shadow-lg text-sm lg:text-lg
                        rounded-lg hover:bg-white hover:text-black
                        transition-all cursor-pointer ${text === 'CONTACT' ? 'mr-0' : 'lg:mr-8 mr-2'}`}>
            <a href="#">{text}</a>
        </li>
    );
};

const MobileMenuButton = ({ text }: ButtonProps) => {
    return (
        <li className="text-white p-2 font-bold justify-center items-center">
            <a href="#">{text}</a>
        </li>
    )
};

export default NavBar;