import React from "react";
// import { useNavigate } from 'react-router-dom';
import img1 from '../Images/iphone-12-green.jpg'
import img2 from '../Images/iphone-13-Blue-Price-in-Srilanka-Apple-Asia-1.jpg'
import img3 from '../Images/apple_iphone_14.jpg'
import img4 from '../Images/iPhone-15-Blue.jpg'
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { Link } from 'react-router-dom';



function Main() {
   
    return ( 
        <>
        <section class="md:h-[800px]">
        <NavBar/>
        <p class="mt-24 text-4xl font-bold text-center text-transparent bg-clip-text bg-blue-950 md:text-5xl">Mobile Phones</p>
        <div class="flex flex-col items-center justify-center gap-8 mt-8 md:flex-row md:gap-4 xl:gap-6 ">
          
            <div class="relative w-[250px] h-[320px] bg-pink-100 rounded-2xl">
                <p class="mt-4 font-bold text-center text-black">Iphone 12</p>
                <img class="w-[150px] h-[200px] mx-auto mt-4" src={img1} alt="iphone12"/>
                <Link class="absolute px-4 py-2 text-center text-black transform -translate-x-1/2 bg-pink-300 rounded bottom-4 left-1/2 hover:bg-purple-300 hover:text-black" to="/Iphone12">See More</Link>
                
            </div>
            
            <div class="relative w-[250px] h-[320px] bg-pink-100 rounded-2xl">
                <p class="mt-4 font-bold text-center text-black">Iphone 13</p>
                <img class="w-[150px] h-[200px] mx-auto mt-4" src={img2} alt="iphone13"/>
                <Link class="absolute px-4 py-2 text-center text-black transform -translate-x-1/2 bg-pink-300 rounded bottom-4 left-1/2 hover:bg-purple-300 hover:text-black" to="/Iphone13">See More</Link>
            </div>
            
            <div class="relative w-[250px] h-[320px] bg-pink-100 rounded-2xl">
                <p class="mt-4 font-bold text-center text-black">Iphone 14</p>
                <img class="w-[150px] h-[200px] mx-auto mt-4" src={img3} alt="iphone14"/>
                <Link class="absolute px-4 py-2 text-center text-black transform -translate-x-1/2 bg-pink-300 rounded bottom-4 left-1/2 hover:bg-purple-300 hover:text-black" to="/Iphone14">See More</Link>
            
            </div>
          
            <div class="relative w-[250px] h-[320px] bg-pink-100 rounded-2xl">
                <p class="mt-4 font-bold text-center text-black">Iphone 15</p>
                <img class="w-[150px] h-[200px] mx-auto mt-4" src={img4} alt="iphone15"/>
                <Link class="absolute px-4 py-2 text-center text-black transform -translate-x-1/2 bg-pink-300 rounded bottom-4 left-1/2 hover:bg-purple-300 hover:text-black" to="/Iphone15">See More</Link>
            </div>
        </div>
        <br/>
        
        
        </section>
        <br/>
        <br/>
        <Footer/> 
        </>
     );
}

export default Main;