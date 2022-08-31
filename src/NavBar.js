const NavBar = () => {
    return (
        <div className="container flex flex-wrap justify-between items-center mx-auto
                        h-28 p-2 border-2 border-teal-400">
            {/* This needs work, need a gap between the name and the buttons */}
            <a href="#" className="font-bold text-2xl">KEVIN TATOOLES</a>
            {/* <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button> */}
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
                        rounded-lg hover:bg-white hover:text-black
                        transition-all cursor-pointer">
            {text}
        </div>
    );
};

export default NavBar;