import kj from "./assets/kj.jpeg"


const About = () => (
    <section className="flex flex-col md:flex-row md:py-16 py-6">
        <div className="p-6">
            <img className="w-[100%] h-[100%] relative" src={kj} alt="Self Portrait" />
        </div>

        <div className="w-[50%] flex flex-col justify-center items-center px-6 sm:px-16">
            <h1 className="text-3xl">
                About
            </h1>
            <p className="text-lg">
            Hello, my name is Kevin Tatooles, welcome to my website! I am a young software developer looking to hone my skills through various projects.
            <br></br>
            Currently I am working on my sports stats Twitter bot - deployed here, and a totally new website created with NextJS.
            </p>
        </div>

    </section>
)

export default About;