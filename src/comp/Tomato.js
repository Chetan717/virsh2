import React from 'react'
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Product() {
  return (
    <>
    
    
    <div  class="max-w-screen-2xl px-4 md:px-8 mx-auto relative top-[150px] lg:left-[0px] left-[0px]">
            <h1 class=" name sm:text-3xl text-2xl font-extrabold text-center title-font text-gray-900 mb-4 ">
              Our Products !{" "}
            </h1>
              <h1 class=" name sm:text-3xl text-xl font-medium text-center title-font text-gray-900 mb-4 py-3 ">
                Fresh Red Tomato{" "}
              </h1>
              <div  class="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
                <a
                   
                  class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                >
                  <img 
                    src="https://www.farmnewsindia.in/wp-content/uploads/2019/11/62560922_386819021944495_238205908507688960_o.jpg"
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                  />

                  <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
                </a>

                <a
       
                  class="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                >
                  <img  
                    src="https://www.knoell.com/sites/default/files/styles/knoell_news/public/content/images/knoell%20news_Decree%20No.%20248%20brings%20changes%20for%20food%20exporters%20to%20China.jpg?itok=MNFpzupr"
                    loading="lazy"
                    alt="Photo by Magicle"
                    class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                  />

                  <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
                </a>

                <a
     
                  class="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                >
                  <img  
                    src="http://en.ata.gov.al/wp-content/uploads/2022/06/domki.png"
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                  />

                  <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
                </a>

                <a
       
                  class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                >
                  <img   
                    src="https://static.wixstatic.com/media/0c9069_2ecda38032534361ae6fc5a28cd92c1e~mv2.jpg/v1/fill/w_640,h_648,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0c9069_2ecda38032534361ae6fc5a28cd92c1e~mv2.jpg"
                    loading="lazy"
                    alt="Photo by Lorenzo Herrera"
                    class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                  />

                  <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
                </a>
              </div>
       
          </div>

          <section class=" bg-white relative lg:top-[0px] top-[160px] text-gray-00 body-font lg:left-[0px] left-[0px]">
            <div class="container px-5 py-24 mx-auto">
              <div class="text-center mb-20">
                <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"></p>
              </div>
              <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 relative bottom-[150px] -mx-2">
                <div class="p-2 sm:w-1/2 w-full">
                  <div   data-aos="fade-up" class="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium">
                    <p className="text-blue-500">products</p> Fresh Red Tomato.
                    </span>
                  </div>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                  <div   data-aos="fade-up" class="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium">
                    <p className="text-blue-500">Packaging</p> 7kg Carton Box.
                    </span>
                  </div>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                  <div   data-aos="fade-up" class="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium">
                    <p className="text-blue-500">Size</p> Available 30-50 mm and 50 mm+.
                    </span>
                  </div>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                  <div   data-aos="fade-up" class="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium">
                    <p className="text-blue-500">Details</p> No mud, Mature/ fresh Tomato, hygiene products,
                      initially green color then changes to red.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
    
    
    
    
    </>
  )
}
