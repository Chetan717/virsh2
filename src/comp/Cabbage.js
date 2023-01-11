import React from 'react'
 import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Cabbage() {
  return (
    <>
    
    <div class="bg-white py-6 sm:py-8 relative lg:bottom-[450px] bottom-[250px] lg:left-[0px] left-[0px]">
         
            <div id="scrollspyHeading4" class="max-w-screen-2xl px-4 md:px-8 mx-auto">
              <h1   class=" name sm:text-3xl text-xl font-medium text-center title-font text-gray-900 mb-4 py-3 ">
                Fresh Cabbage{" "}
              </h1>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
                <a
          
                  class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                >
                  <img
                    src="https://images.pexels.com/photos/134877/pexels-photo-134877.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                    src="https://img3.exportersindia.com/product_images/bc-full/dir_37/1105907/ice-berg-lettuce-1479199045-2562478.jpeg"
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
                    src="https://oxfarm.co.ke/wp-content/uploads/2018/05/cabbage-farming.jpg"
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
                    src="https://static.libertyprim.com/files/offres/vend-chou-cabus-3722-1-thumbnail.jpg?1617871647"
                    loading="lazy"
                    alt="Photo by Lorenzo Herrera"
                    class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                  />

                  <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
                </a>
              </div>
            </div>
          </div>

          <section  class=" bg-white relative lg:bottom-[500px] bottom-[250px] text-gray-00 body-font lg:left-[0px] left-[0px]">
            <div class="container px-5 py-24 mx-auto">
              <div class="text-center mb-20">
                <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"></p>
              </div>
              <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 relative bottom-[150px] -mx-2">
                <div  class="p-2 sm:w-1/2 w-full">
                  <div class="bg-gray-100 rounded flex p-4 h-full items-center">
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
                    <p className="text-blue-500">Product</p>Fresh green Cabbage.
                    </span>
                  </div>
                </div>
                <div  class="p-2 sm:w-1/2 w-full">
                  <div   class="bg-gray-100 rounded flex p-4 h-full items-center">
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
                     <p  className="text-blue-500">size</p>  0.5kg to 1.5 k.g .
                    </span>
                  </div>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                  <div  class="bg-gray-100 rounded flex p-4 h-full items-center">
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
                    <p className="text-blue-500">Shape</p> Rounded.
                    </span>
                  </div>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                  <div   class="bg-gray-100 rounded flex p-4 h-full items-center">
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
                    <p className="text-blue-500">Price & Quantity</p> Minimum Order Quantity 50kg.
                    </span>
                  </div>
                </div>
                <div   class="p-2 sm:w-1/2 w-full">
                  <div     class="bg-gray-100 rounded flex p-4 h-full items-center">
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
                    <p className="text-blue-500">Supply Abolity</p>10,000 kg per Week .
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
    </>
  )
}
