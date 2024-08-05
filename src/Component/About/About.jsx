function About() {
    return (  
        <div className="h-screen bg-[#1ABC9C]">
        <div className="h-screen info flex justify-center items-center flex-col text-white">
            <h2 className="font-bold uppercase text-2xl">about component</h2>
            <div className="star my-3 flex items-center">
                <div className="line w-14 h-1 bg-white"></div>
                <i class="fa-solid fa-star mx-2"></i>
                <div className="line w-14 h-1 bg-white"></div>
            </div>
            <div className="info flex justify-center gap-6 flex-wrap md:p-0 p-10">
                <div className="first md:w-1/4 w-full">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="first md:w-1/4 w-full md:mt-0 mt-10">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default About;