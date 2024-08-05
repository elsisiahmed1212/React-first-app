import reactLogo from '../../assets/p.png';
import reactLogo2 from '../../assets/p2.png';
import reactLogo3 from '../../assets/p3.png';
function Portfolio() {
    return (  
        <div className="flex items-center justify-center flex-col my-4">
        <h2 className="font-bold uppercase text-2xl">portfolio component</h2>
        <div className="star my-3 flex items-center ">
            <div className="line w-14 h-1 bg-black"></div>
            <i class="fa-solid fa-star mx-2"></i>
            <div className="line w-14 h-1 bg-black"></div>
        </div>

        <div className="container">
            <div className="row mb-44 mt-10">
                <div className="item rounded-md overflow-hidden cursor-pointer">
                    <div className="group  image-contaner relative">
                        <img src={reactLogo} alt="item image" />
                        <div className="inner group-hover:opacity-75 transition-none opacity-0 flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 bg-[#1ABC9C]">
                            <i class="fa-solid fa-plus text-4xl text-white"></i>
                        </div>
                    </div>
                </div>
                <div className="item rounded-md overflow-hidden cursor-pointer">
                    <div className="group  image-contaner relative">
                        <img src={reactLogo2} alt="item image" />
                        <div className="inner group-hover:opacity-75 transition-none opacity-0 flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 bg-[#1ABC9C]">
                            <i class="fa-solid fa-plus text-4xl text-white"></i>
                        </div>
                    </div>
                </div>
                <div className="item rounded-md overflow-hidden cursor-pointer">
                    <div className="group  image-contaner relative">
                        <img src={reactLogo3} alt="item image" />
                        <div className="inner group-hover:opacity-75 transition-none opacity-0 flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 bg-[#1ABC9C]">
                            <i class="fa-solid fa-plus text-4xl text-white"></i>
                        </div>
                    </div>
                </div>
                <div className="item rounded-md overflow-hidden cursor-pointer">
                    <div className="group  image-contaner relative">
                        <img src={reactLogo3} alt="item image" />
                        <div className="inner group-hover:opacity-75 transition-none opacity-0 flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 bg-[#1ABC9C]">
                            <i class="fa-solid fa-plus text-4xl text-white"></i>
                        </div>
                    </div>
                </div>
                <div className="item rounded-md overflow-hidden cursor-pointer">
                    <div className="group  image-contaner relative">
                        <img src={reactLogo2} alt="item image" />
                        <div className="inner group-hover:opacity-75 transition-none opacity-0 flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 bg-[#1ABC9C]">
                            <i class="fa-solid fa-plus text-4xl text-white"></i>
                        </div>
                    </div>
                </div>
                <div className="item rounded-md overflow-hidden cursor-pointer">
                    <div className="group  image-contaner relative">
                        <img src={reactLogo} alt="item image" />
                        <div className="inner group-hover:opacity-75 transition-none opacity-0 flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 bg-[#1ABC9C]">
                            <i class="fa-solid fa-plus text-4xl text-white"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
}

export default Portfolio;