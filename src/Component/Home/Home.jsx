import reactLogo from '../../assets/av.png';
function Home() {
    return ( 
        <div className="h-screen bg-[#1ABC9C]">
            <div className="h-screen info flex justify-center items-center flex-col text-white">
                <img src={reactLogo} alt="home image" />
                <h2 className="font-bold uppercase text-2xl mt-5">start Framework</h2>
                <div className="star my-3 flex items-center">
                    <div className="line w-14 h-1 bg-white"></div>
                    <i class="fa-solid fa-star mx-2"></i>
                    <div className="line w-14 h-1 bg-white"></div>
                </div>
                <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
     );
}

export default Home;