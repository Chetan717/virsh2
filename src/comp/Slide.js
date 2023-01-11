import React from 'react'
import cab from '../img/cab.jpg'
import on from '../img/on.jpg'
import tom from '../img/tom.jpg'
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Slide() {
  return (
    <>
    

    <div id="carouselExampleInterval" class="flex justify-items-center carousel slide relative lg:w-[1100px]  rounded-[30px] shadow-xl top-[90px] lg:left-[140px] left-[0px] " data-bs-ride="carousel">
  <div  data-aos="fade-up" class="carousel-inner ">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src={tom} class="object-cover d-block lg:w-full lg:h-[500px] rounded-[30px]  " alt=""/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={on} class="d-block lg:w-full lg:h-[500px] h-[230px] rounded-[30px]" alt=""/>
    </div>
    <div class="carousel-item">
      <img src={cab} class="d-block lg:w-full lg:h-[500px] rounded-[30px]" alt=""/>
    </div>
  </div>
  <button  data-aos="fade-left" class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button  data-aos="fade-right" class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    
    </>
  )
}
