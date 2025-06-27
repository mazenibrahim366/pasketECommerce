import React from 'react'
import image1 from "../../assets/blog-3.jpg.png"
import image2 from "../../assets/blog-5.jpg.png"
import image3 from "../../assets/blog-3.jpg (1).png"
import image4 from "../../assets/blog-5.jpg (1).png"
import image5 from "../../assets/blog-1.jpg.png"
import image6 from "../../assets/sidebar-banner.gif.png"
import arrow1 from "../../assets/Item → Link - Next page.svg"
import './Blog.css'
export default function Blog() {


  return (
    < >
   <div className="container m-auto flex gap-3 ">
 <div className="blog-content-right w-3/4">
  <div className="max-w-full   dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img className="rounded-t-lg" src={image1} alt />
    </a>
    <div className="p-5 text-left ">
    <p className='font-semibold  text-xs leading-[19.5px] uppercase tracking-[-0.1px] text-[#9B9BB4]' >
        Grocery
    </p>
        <h5 className="mb-2 text-2xl font-semibold leading-10 text-gray-900 dark:text-white">But I must explain to you how all this mistaken idea</h5>
     
      <p className="mb-3 font-normal text-[#202435] dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
<div className="flex gap-3">
    <p className='font-medium text-sm text-[#71778E] '>Jan 13 2025</p>
    <p className='font-medium text-sm text-[#202435] '>Sinan ISIK</p>
</div>
<p className='text-sm leading-7 text-[#202435] pt-5'>Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros laoreet libero,
vitae suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultrices,...</p>
    </div>
  </div>
  <div className="max-w-full  dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img className="rounded-t-lg" src={image2} alt />
    </a>
    <div className="p-5 text-left ">
    <p className='font-semibold  text-xs leading-[19.5px] uppercase tracking-[-0.1px] text-[#9B9BB4]' >
        Grocery
    </p>
        <h5 className="mb-2 text-2xl font-semibold leading-10 text-gray-900 dark:text-white">But I must explain to you how all this mistaken idea</h5>
     
      <p className="mb-3 font-normal text-[#202435] dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
<div className="flex gap-3">
    <p className='font-medium text-sm text-[#71778E] '>Jan 13 2025</p>
    <p className='font-medium text-sm text-[#202435] '>Sinan ISIK</p>
</div>
<p className='text-sm leading-7 text-[#202435] pt-5'>Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros laoreet libero,
vitae suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultrices,...</p>
    </div>
  </div>
    <div className="number-pag flex   justify-center  ">

<span className=" flex  items-center justify-center h-9 w-9  rounded-full bg-[#35AFA0]  text-white">1</span>
<span className=" flex  items-center justify-center h-9 w-9 rounded-full   ">2</span>
<span className=" flex  items-center justify-center h-9 w-9 rounded-full   "><img src={arrow1} alt="" /></span>



    </div>
    </div>


<div className="blog-left w-1/4  flex flex-col gap-6">

<div className=" recent-posts border border-[#EDEEF5] ">
    <h3 className='font-semibold text-start text-xs leading-[19.5px] uppercase tracking-[-0.1px] pb-5 text-[#202435]'>Recent Posts</h3>
<div className="flex flex-wrap gap-9 p-5">
<div className="flex img-posts1 relative ">
    <img src={image3} className='  w-14 h-14 rounded-[50%]' alt="" />
    <p className='  font-normal text-start ps-3 flex text-[#202435] dark:text-gray-400'>But I must explain to you how all this mistaken idea</p>

</div>
<div className=" flex img-posts2 relative">
   
    <img src={image4} className='   w-14 h-14 rounded-[50%]' alt="" />

  
    <p className='  font-normal text-start ps-3 flex text-[#202435] dark:text-gray-400'>The Problem With Typefaces on the Web</p>

</div>
<div className="flex img-posts3 relative">

    <img src={image5} className='   w-14 h-14 rounded-[50%]' alt="" />
    <p className='  font-normal text-start ps-3 flex text-[#202435] dark:text-gray-400'>English Breakfast Tea
With Tasty Donut
Desserts</p>

</div>
</div>
</div>
<div className=" social-media ">
    <h3 className='font-semibold text-start text-xs leading-[19.5px] uppercase tracking-[-0.1px] pb-5 text-[#202435]'>social-medi</h3>
<ul className='w-full '>
    <li className='flex items-center px-4 py-[10px] bg-[#3B5998] text-white w-full '>
<div className="w-7"><i className="fa-brands fa-facebook-f"></i></div>
<p className='ps-4 uppercase font-semibold  text-xs leading-[19.5px]  tracking-[-0.1px] text-white '>facebook</p>

    </li>
    <li className='flex items-center px-4 py-[10px] bg-[#CC2366] text-white w-full '>
<div className="w-7"><i className="fa-brands fa-instagram"></i></div>
    <p className='ps-4 uppercase font-semibold  text-xs leading-[19.5px]  tracking-[-0.1px] text-white'>instagram</p>
    </li>
    <li className='flex items-center px-4 py-[10px] bg-[#1DA1F2] text-white w-full '>
<div className="w-7"><i className="fa-brands fa-twitter"></i></div>
<p className='ps-4 uppercase font-semibold  text-xs leading-[19.5px]  tracking-[-0.1px] text-white'>twitter</p>
    </li>
    <li className='flex items-center px-4 py-[10px] bg-[#FF4500] text-white w-full '>

<div className="w-7"><i className="fa-brands fa-square-reddit"></i></div>
<p className='ps-4 uppercase font-semibold  text-xs leading-[19.5px]  tracking-[-0.1px] text-white'>reddit</p>
    </li>
    <li className='flex items-center px-4 py-[10px] bg-[#E60023] text-white w-full '>


        <div className="w-7"><i className="fa-brands fa-pinterest-p"></i></div>
<p className='ps-4 uppercase font-semibold  text-xs leading-[19.5px]  tracking-[-0.1px] text-white'>pintrest</p>
    </li>
</ul>

</div>
<div className="widget-banner">
    <h3 className='font-semibold text-start text-xs leading-[19.5px] uppercase tracking-[-0.1px] pb-5 text-[#202435]'>Widget Banner</h3>
<img src={image6} className='w-full' alt="" />

</div>

<div className="tags">
    <h3 className='font-semibold text-start text-xs leading-[19.5px] uppercase tracking-[-0.1px] pb-5 text-[#202435]'>tags</h3>
<ul className='flex flex-wrap gap-1' >

    <li className='py-[6px] px-[11px] border border-[#EDEEF5] ' >ecommerce</li>

    <li className='py-[6px] px-[11px] border border-[#EDEEF5] ' >food</li>

    <li className='py-[6px] px-[11px] border border-[#EDEEF5] ' >grocer</li>

    <li className='py-[6px] px-[11px] border border-[#EDEEF5] ' >klbtheme</li>

    <li className='py-[6px] px-[11px] border border-[#EDEEF5] ' >organic</li>

    <li className='py-[6px] px-[11px] border border-[#EDEEF5] ' >shop</li>

    <li className='py-[6px] px-[11px] border border-[#EDEEF5] ' >shopify</li>

    <li className='py-[6px] px-[11px] border border-[#EDEEF5] ' >store</li>

</ul>





</div>


  </div>


   </div>
    
    </>
  )
}
