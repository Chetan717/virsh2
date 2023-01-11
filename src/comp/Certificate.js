import React from 'react'
import fir from "../img/fir.png";
import sec from "../img/sec.png";
import thir from "../img/thir.png";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Certificate() {
  return (
    <>
    
 
    <section class="text-gray-600 bg-white body-font relative lg:bottom-[700px] bottom-[500px] lg:left-[0px] left-[0px]">
  <div class="container px-5 py-24 mx-auto">
    <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Legal Certifications</h1>
    <div class="flex flex-wrap -m-4">
      <div data-aos="fade-up" class="p-4 md:w-1/2 w-full">
        <div class="h-full  p- rounded">
         
            <img alt="testimonial" src={fir} class="w-full h-full  flex-shrink-0 object-cover object-center"/>
           
        </div>
      </div>
      <div data-aos="fade-up" class="p-4 md:w-1/2 w-full">
        <div class="h-full  p- rounded">
         
            <img alt="testimonial" src={sec} class="w-full h-full  flex-shrink-0 object-cover object-center"/>
           
        </div>
      </div>
      <div data-aos="fade-up" class="p-4 md:w-1/2 w-full">
        <div class="h-full  p- rounded">
         
            <img alt="testimonial" src={thir} class="w-full h-full  flex-shrink-0 object-cover object-center"/>
           
        </div>
      </div>
    </div>
  </div>
</section>
   
    
    
    
    
    </>
  )
}
