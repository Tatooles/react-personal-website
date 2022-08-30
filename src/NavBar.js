const NavBar = () => {
    return (
        <div className="container flex flex-wrap justify-between items-center mx-auto
                        h-28 p-2 border-2 border-teal-400">
            {/* This needs work, need a gap between the name and the buttons */}
            <a href="#" className="font-bold text-2xl">KEVIN TATOOLES</a>
            <NavBarButton text="ABOUT"></NavBarButton>
            <NavBarButton text="EXPERIENCE"></NavBarButton>
            <NavBarButton text="PROJECTS"></NavBarButton>
            <NavBarButton text="EDUCATION"></NavBarButton>
            <NavBarButton text="CONTACT"></NavBarButton>
        </div>
    );
};

const NavBarButton = ({ text }) => {
    return (
        <div className="relative flex items-center justify-center p-5 border-black border-2
                      bg-black text-white font-bold shadow-lg
                        rounded-lg hover:bg-white hover:text-black">
            {text}
        </div>
    );
};

export default NavBar;