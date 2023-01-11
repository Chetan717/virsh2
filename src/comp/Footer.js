import React from 'react'
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Footer() {
    useEffect(()=>{
        AOS.init({duration:1500});
        },[])

  return (
    <>






    
    <footer data-aos="fade-up" class="bg-white pt-4 pb-10 sm:py-10 relative lg:bottom-[700px] bottom-[500px] lg:py-12 lg:left-[0px] ">

    
    <div class="flex flex-col items-center border-t pt-6 relative bottom-[20px] ">
  
    

    
  <div class="flex gap-4">
    <a href="https://instagram.com/virendrahandore?igshid=NDk5N2NlZjQ=" target="_blank" class="text-red-400  hover:text-red-500 active:text-red-600 transition duration-100">
      <svg class="w-10 h-10" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    </a>

    <a target="_blank" class="text-blue-400 lg:text-xl py-1 hover:text-blur-500 active:text-blue-600 transition duration-100">
    shbrothers19@gmail.com
    </a>

    <a href="https://www.linkedin.com/in/s-h-brothers-978647261" target="_blank" class="text-blue-400 hover:text-blue-500 active:text-vlue-600  transition duration-100">
      <svg class="w-10 h-10" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    </a>

    
  </div>

</div>


      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto relative lg:left-[100px]">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:grid-rows-2 border-t gap-12 lg:gap-8 pt-10 lg:pt-12">
          <div class="col-span-full lg:col-span-1 lg:row-span-2">
         
            <div class="lg:-mt-2 mb-4">
              <a href="/" class="inline-flex items-center text-black-800 text-xl md:text-2xl font-bold gap-2" aria-label="logo">
                
      
                <img
              src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/40C057/external-gear-smart-farm-vitaliy-gorbachev-fill-vitaly-gorbachev.png"
              class="navbar-brand w-12 h-12 relative left-[70px] "
    
            ></img>
            <span className="name text-[17px] font-bold relative left-[70px] font-noto-sans ">
              Sh Brothers
            </span>
              </a>
            </div>
            
    
            <p class="text-gray-500 text-sm">© 2022 - Present Sh Brothers. All rights reserved.</p>
          </div>
    
    
          <div>
            <div class="text-gray-800 font-bold tracking-widest uppercase mb-4">Products</div>
    
            <nav class="flex flex-col gap-4">
              <div>
                <a  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Red Tomato</a>
              </div>
    
              <div>
                <a  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Red Onion</a>
              </div>
    
              <div>
                <a  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Green cabbage</a>
              </div>
    
            
            </nav>
          </div>
      
    
          
         
       
    
         
          <div>
            <div class="text-gray-800 font-bold tracking-widest uppercase mb-4">Support</div>
    
            <nav class="flex flex-col gap-4">
              <div>
                <a  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">+91-8767279358</a>
              </div>
    
              <div>
                <a  class="text-gray-500 text-xs hover:text-indigo-500 active:text-indigo-600 transition duration-100">shbrothers19@Gmail.com</a>
              </div>
    
              
            </nav>
          </div>
        
    
          
         
        </div>
      </div>
    </footer>
    
    
    


    
    
    
    
    
    
    </>
  )
}
