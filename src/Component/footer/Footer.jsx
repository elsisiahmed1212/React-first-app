import React from "react";

function Footer() {
    return (


        <footer class="bg-[#536c85] text-white">
            <div class="w-full max-w-screen-xl mx-auto md:py-8">
                <div class="sm:flex sm:items-center py-10 sm:justify-between text-center">
                    <div className="one  md:w-1/3">
                        <h3 className="font-bold">LOCATION</h3>
                        <p className="my-3">2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className="tow md:my-0 my-10  md:w-1/3">
                        <h3 className="font-bold">AROUND THE WEB</h3>
                        <div className="icons my-3">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-twitter mx-4"></i>
                            <i class="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                    <div className="thrie md:w-1/3">
                        <h3 className="font-bold">AROUND THE WEB</h3>
                        <p className="my-3">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
            <div className=" p-3 text-center bg-[#2C3E50] text-white">
                <span class="text-sm sm:text-center"><a href="https://flowbite.com/" class="hover:underline"></a>Copyright © Your Website 2024</span>
            </div>
        </footer>


    );
}

export default Footer;