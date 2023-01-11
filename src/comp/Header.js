import React from "react";
import Slide from "./Slide";
import "../App.css";
import warehouse from "../img/warehouse.png";
import qua from "../img/qua.png";
import packaging from "../img/packaging.png";
import Tomato from './Tomato';
import Cabbage from "./Cabbage";
import Onion  from './Onion'
import Certificate from "./Certificate";
import Footer from "./Footer";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
  export default function Header() {
    useEffect(()=>{
      AOS.init({duration:800});
      },[])
      
  return (
    <>
      <Slide />

      <section data-aos="fade-up" className="bg-white relative  lg:m-0 m-2 lg:left-[0px] left-[0px] lg:top-[100px] top-[100px]">
        <div
     id="About"
          class="bg-white py-6 relative   sm:py-8 lg:py-12"
        >
          <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <div class="mb-10 md:mb-16">
              <h2 data-aos="fade-up"  class=" name text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                Welcome To Sh Brothers
              </h2>

              <p  data-aos="fade-up"  class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
                Sh Brothers Export is one of the leading fresh vegetable export
                company from India.
              </p>
            </div>

            <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-12  xl:gap-16">
              <div data-aos="fade-up" class="flex flex-col items-center">
                <div  class="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center  text-white rounded-lg md:rounded-xl  mb-6">
                  <img className="w-16 h-16" src={warehouse} />
                </div>

                <h3 class=" text-lg md:text-xl font-semibold text-center mb-2">
                  Infrastucture
                </h3>

                <p class="text-gray-500 text-center mb-2">
                  We operate through our modern pack house / cold storage
                  facility for grapes, onion grading center & modern packing
                  facility for Vegetable in Nashik (India) with Best Hygienic
                  conditions.
                </p>
              </div>

              <div data-aos="fade-up"  class="flex flex-col items-center">
                <div class="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center  text-white rounded-lg md:rounded-xl  mb-6">
                  <img className="w-16 h-16" src={qua} />
                </div>

                <h3 class="text-lg md:text-xl font-semibold text-center mb-2">
                  Quality Assurance{" "}
                </h3>
                <p class="text-gray-500 text-center mb-2">
                  Being quality conscious organization ,all our produce from
                  associated growers are closely monitored in various growth
                  stages till packaging, the produce can be tested in APEDA
                  recognized laboratories as per customer’s need.
                </p>
              </div>

              <div data-aos="fade-up"  class="flex flex-col items-center">
                <div class="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-white rounded-lg md:rounded-xl  mb-6">
                  <img className="w-16 h-16" src={packaging} />
                </div>

                <h3 class="text-lg md:text-xl font-semibold text-center mb-2">
                  Packing
                </h3>
                <p class="text-gray-500 text-center mb-2">
                  {" "}
                  Sh Brothers Export Packing is carried out in APEDA Approved
                  pack house in hygienic packaging material to suit end users
                  requirements for export as well as domestic market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

<Tomato/>
<Onion/>
<Cabbage/>
<Certificate/>
<Footer/>

      <nav data-aos="fade-down" class="navbar fixed bg-white w-full h-[70px]  lg:rounded-full rounded-[10px] shadow-xl  top-[0px] py- mb-3">
        <img 
          src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/40C057/external-gear-smart-farm-vitaliy-gorbachev-fill-vitaly-gorbachev.png"
          class="navbar-brand w-12 h-12 relative lg:left-[70px] left-[5px] "
        ></img>
        <span data-aos="fade-right"  className="name text-[17px] font-bold relative lg:right-[230px] right-[25px] sm:right-[120px] font-noto-sans ">
          Sh Brothers
        </span>

        <ul class="nav nav-pills relative lg:left-[150px]">
          <li class="nav-item">
            <a class="  nav-link lg:block hidden text-black font-bold text-[15px]">Home</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-black lg:block hidden font-bold lg:text-[15px] text-[13px]"
            href="#About"
            >
              About us
            </a>
          </li>
        
        </ul>
        <button data-aos="fade-left"  class="bg-[#24DAB6]  hover:rounded-[15px] shadow-xl text-white font-bold lg:py-2 py-1 px-2 relative lg:left-[-10px] left-[-10px]  rounded-full">
          +91-8767279358
        </button>
      
      </nav>
    </>
  );
}
