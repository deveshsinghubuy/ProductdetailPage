"use client"

import React from 'react'
import { useRef, useState, useEffect } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css"
import Image from 'next/image'
import { FaWhatsapp, FaFacebookF,FaInfoCircle, FaTwitter, FaHeart,FaCheck, FaStar, FaStarHalfAlt, FaRegStar,FaPencilAlt  } from "react-icons/fa";
import Productcontent from '../component/Productcontent';
import { Autoplay } from 'swiper/modules';

const Product = () => {
    // hover magnify effect
    const containerRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [bgImage, setBgImage] = useState("/images/productImage.jpg");

    const handleMouseMove = (e) => {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        containerRef.current.style.backgroundPosition = `${x}% ${y}%`;
    };

    const subProducts = [
        { key: 1, image: "/images/productImage.jpg" },
        { key: 2, image: "/images/description-img-3.jpg" },
        { key: 3, image: "/images/description-img-4.jpg" },
        { key: 4, image: "/images/description-img-5.jpg" },
        { key: 5, image: "/images/productImage.jpg" },
        { key: 6, image: "/images/description-img-5.jpg" },
    ];
    //liked toggle
    const iconStyle = "text-2xl m-2 cursor-pointer hover:text-blue-500 transition-colors";
    const [liked, setLiked] = useState(false);
     const toggleLike = () => {
        setLiked(!liked);
    };

    const slides = [
        { src: "/images/dss.svg", text: "PCI DSS Compliance" },
        { src: "/images/dss.svg", text: "ISO Certified" },
        { src: "/images/dss.svg", text: "Data Encryption" },
        { src: "/images/dss.svg", text: "Secure Payment" },
        { src: "/images/dss.svg", text: "Privacy Protection" },
        { src: "/images/dss.svg", text: "Data Encryption" },
        { src: "/images/dss.svg", text: "Privacy Protection" },
        { src: "/images/dss.svg", text: "Secure Payment" },
        { src: "/images/dss.svg", text: "ISO Certified" },
        { src: "/images/dss.svg", text: "Privacy Protection" },
    ];
    
   const [number, setNumber] = useState(1);
    

  return (
    <div className='flex justify-center'>
        <div className='max-w-[2050px] w-full flex justify-center '>
            <div className='w-full flex flex-col xl:flex-row gap-15 2xl:gap-15 xl:gap-10 my-10 2xl:px-20 xl:px-7 px-5'>
                
                {/* left */}
                <div className='w-full xl:w-[72%] '>
                    {/* hero section */}
                    <div className='flex flex-col xl:flex-row gap-5 2xl:gap-14 xl:gap-10  relative'>
                        {/* product */}
                        <div className='relative'>
                            <div className='flex sticky top-10 flex-col gap-10 2xl:py-5 xl:py-3 py-3 '> 
                                <div className='flex flex-col gap-5 border-1 border-neutral-200 shadow p-5 rounded-xl' >
                                    <div className='flex justify-end items-center'>
                                        <button onClick={toggleLike} className="cursor-pointer 2xl:text-2xl xl:text-lg focus:outline-none rounded-full p-1 2xl:p-2  bg-white shadow-md transition-colors">
                                            <FaHeart size={16} className={`transition-colors  ${liked ? "text-red-500" : "text-gray-200"}`} />
                                        </button>
                                    </div>
                                    <div className="flex justify-center 2xl:px-20 xl:px-10 px-2">
                                        <div
                                            ref={containerRef}
                                            onMouseEnter={() => setIsHovering(true)}
                                            onMouseLeave={() => {
                                            setIsHovering(false);
                                            containerRef.current.style.backgroundPosition = "center";
                                            }}
                                            onMouseMove={handleMouseMove}
                                            className="relative 2xl:w-[400px] 2xl:h-[400px] xl:w-[300px] xl:h-[300px] overflow-hidden cursor-crosshair"
                                            style={{
                                            backgroundImage:`url(${bgImage})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: isHovering ? "200%" : "100%",
                                            backgroundPosition: "center",
                                            transition: "background-size 0.25s ease-out, background-position 0s linear",
                                            
                                            }}
                                        >
                                            <Image
                                            src="/images/productImage.jpg"
                                            alt="image"
                                            width={400}
                                            height={400}
                                            className="pointer-events-none select-none opacity-0"
                                            />
                                        </div>
                                    </div>
                                    <div className='flex gap-10 justify-center items-center 2xl:my-5 xl:my-2'>
                                        <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                                            <FaWhatsapp className={iconStyle} style={{ color: "#25D366" }} />
                                        </a>
                                        <a href="https://facebook.com/your-page" target="_blank" rel="noopener noreferrer">
                                            <FaFacebookF className={iconStyle} style={{ color: "#3b5998" }} />
                                        </a>
                                        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                                            <FaTwitter className={iconStyle} style={{ color: "#1DA1F2" }} />
                                        </a>
                                    </div>
                                </div>     
                                <div className="relative 2xl:w-[600px] xl:w-[470px] w-full">
                                <Swiper
                                    modules={[Navigation]}
                                    navigation={{
                                    prevEl: ".custom-prev",
                                    nextEl: ".custom-next",
                                    }}
                                    breakpoints={{
                                        300:{
                                            slidesPerView:3,
                                            spaceBetween:28
                                        },
                                        1020:{
                                            slidesPerView:4,
                                            spaceBetween:20
                                        },
                                        1440:{
                                            slidesPerView:5,
                                            spaceBetween:25
                                        }
                                     }
                                    }
                                    className="mySwiper w-full"
                                >
                                    {subProducts.map((item) => (
                                    <SwiperSlide key={item.key} style={{ width: 'auto' }}>
                                        <div
                                            className="p-3 xl:p-4 2xl:p-3 lg:px-18 md:px-15 rounded-md cursor-pointer border border-neutral-300 custom-w-product w-[110px] md:w-full xl:w-[100px]"
                                            onClick={() => setBgImage(item.image)}
                                        >
                                            <Image
                                            src={item.image}
                                            alt="image"
                                            width={70}
                                            height={60}
                                            className="w-full h-auto"
                                            />
                                        </div>
                                    </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* buttons */}
                                <div className='cursor-pointer content-center z-1 custom-prev bg-white border border-neutral-300 shadow rounded-full w-8 h-8 absolute -left-5 xl:-left-4 2xl:-left-5 top-1/2 transform -translate-y-1/2'><Image src="/images/left-arrow.png"  className='mx-auto' alt='image' width={13} height={13} ></Image></div>
                                <div className=' cursor-pointer content-center z-1 custom-next bg-white border border-neutral-300 shadow rounded-full w-8 h-8 absolute -right-5 xl:-right-4 2xl:-right-5 top-1/2 transform -translate-y-1/2'><Image src="/images/right-arrow.png" className='mx-auto' alt='image' width={13} height={13}></Image></div>
                                </div>
                                <div className='hidden xl:block'>
                                    <p className='text-[15px] font-semibold italic w-[90%]'>Bust odor and smell irresistible for 48 hours with our Body Spray Deodorant</p>
                                </div>
                            </div>
                        </div> 
                        
                        {/* cotent */}
                        <div className='xl:w-[47%]'>
                            <div className='flex flex-col 2xl:gap-4 gap-3'>
                                <div className='block xl:hidden 2xl:text-[14px] xl:text-[12px] text-[12px] font-medium'>Item #:<span> 79956169</span></div>
                                <a  className="hidden xl:inline 2xl:text-[16px] xl:text-[14px]" href="https://your-link.com" target="_blank" rel="noopener noreferrer">AXIE</a>
                                <h1 className='2xl:text-[22px] text-[20px] font-bold'>AXE Apollo Body Spray Deodorant for Long-Lasting Odor Protection, Sage & Cedarwood Deodorant for Men Formulated Without Aluminum 4oz 4 Count</h1>
                                <p className=''><strong className='text-[#198975] 2xl:text-[17px] xl:text-[15px]'>89%</strong> <span className="italic text-[12px]"> of respondents would recommend this to a friend</span></p>
                                <div className='hidden xl:block 2xl:text-[14px] xl:text-[12px] font-semibold'>Item #:<span> 79956169</span></div>
                                <div className='hidden xl:flex gap-2 items-center'>
                                    <h3 className='xl:text-[24px] font-extrabold'>INR 2261</h3>
                                    <del className='2xl:text-[14px] xl:text-[12px] text-red-500'>INR 2999</del>
                                    <span className="bg-[#aaa] p-[1px] rounded-full">
                                        <FaInfoCircle fill="white" className="cursor-pointer 2xl:text-[15px] xl:text-[12px]" />
                                    </span>
                                    <p className='2xl:text-[16px] xl:text-[14px]'>You Save : 11%</p>
                                </div>
                                <div className='hidden xl:flex items-center gap-3'>
                                    <div className='flex gap-1 items-center'>
                                        <FaStar className="text-yellow-500 2xl:text-[20px] xl:text-[16px]" />
                                        <FaStar className="text-yellow-500 2xl:text-[20px] xl:text-[16px]" />
                                        <FaStar className="text-yellow-500 2xl:text-[20px] xl:text-[16px]" />
                                        <FaStar className="text-yellow-500 2xl:text-[20px] xl:text-[16px]" />
                                        <FaStarHalfAlt className="text-yellow-500 2xl:text-[20px] xl:text-[15px]" />
                                    </div>
                                    <p className='xl:text-[14px]'>4.7 rating</p>      
                                    <button className='flex items-center gap-2'>
                                        <FaPencilAlt className='2xl:text-[16px] xl:text-[14px] cursor-pointer' color="#333" />
                                        <p className='xl:text-[14px] cursor-pointer'>Write a review</p>
                                    </button>
                                </div>
                                <p className='hidden xl:block italic 2xl:text-[14px] xl:text-[13px] text-[#666]'>10K+ bought</p>
                                <div className='flex flex-col xl:flex-row gap-4 xl:justify-between text-[#151515] font-semibold'>
                                    {/* for mobile */}
                                    <div className='flex xl:hidden gap-2 items-center'>  
                                        <h3 className='text-[20px] 2xl:text-[24px] xl:text-[20px] font-extrabold'>INR 2261</h3>
                                        <span className="bg-[#aaa] p-[1px] rounded-full">
                                            <FaInfoCircle fill="white" className="cursor-pointer 2xl:text-[15px] xl:text-[12px]" />
                                        </span>
                                    </div>
                                     {/* for mobile */}
                                    <div className='flex xl:hidden gap-3 items-center text-[14px] 2xl:text-[16px]'>
                                        <h2>QTY :</h2>
                                        <div className='flex gap-5 2xl:gap-5 xl:gap-3 items-center border-2 border-neutral-300 px-3 2xl:px-3 xl:px-2 py-1 rounded-md'>
                                            <button className='cursor-pointer font-bold text-[20px]' onClick={()=>{number>1 ? setNumber(number-1) : undefined}}>-</button>
                                            <input  value={number} onChange={e => setNumber(number)} className="w-5 text-center " />
                                            <button className='cursor-pointer font-bold text-[20px]' onClick={()=>{number>4 ? undefined : setNumber(number+1)}} >+</button>
                                        </div>
                                    </div>
                                     {/* for desktop */}
                                    <div className='xl:text-[14px] text-[13px] flex items-center'><label>Availability :</label><span className='text-[#198754] font-medium px-1'>In stock</span><FaCheck className="ms-1 text-green-600 2xl:text-md xl:text-sm"/></div>
                                    <div className='flex gap-2 xl:text-[14px] text-[13px] font-semibold'><Image src="/images/us.svg" alt='image' width={20} height={20}></Image><span>Imported from USA store</span></div>
                                     {/* for mobile */}
                                    <p className='inline xl:hidden text-[12px] 2xl:text-[13px] xl:text-[12px] text-[#198975] font-semibold'>Order now and get it around Friday, October 24</p>
                                    <h5 className='xl:hidden text-[12px] text-[#666] font-medium'>Secured transaction</h5>    
                                    <div className='block xl:hidden'>
                                        <h3 className='text-[14px] font-medium'>Our Top Logistics Partners</h3>
                                        <div className='flex gap-3 mt-2'>
                                            <Image src="/cart/fedex.svg" alt='image' width={60} height={40}></Image>
                                            <Image src="/cart/dhl.svg" alt='image' width={60} height={40}></Image>
                                        </div>
                                    </div>

                                </div>
                                <div className='text-[12px] lg:text-[14px] 2xl:text-[16px] xl:text-[14px] border-1 border-neutral-200 px-5 py-3 2xl:px-7 xl:px-5 xl:py-3 pb-4 mt-4 rounded-xl font-medium'>
                                    <button className='flex items-center 2xl:mb-5 xl:mb-3 mb-3 gap-1'><p className='flex items-center gap-1 font-extrabold'>Scent<span>:</span></p><strong>Apollo (Sage and Cedarwood)</strong></button>
                                    <button className='border-1 px-3 py-2  text-[#666]  border-[#ffb100] rounded-sm'>Apollo (Sage and Cedarwood)</button>
                                </div>
                                <div className='text-[12px] lg:text-[14px] xl:text-[14px] 2xl:text-[16px] border-1 border-neutral-200 px-5 py-3 2xl:px-7 xl:px-5 xl:py-3 pb-4 rounded-xl'>
                                    <button className='flex items-center 2xl:mb-5 xl:mb-3 mb-3 gap-1'><p className='flex items-center gap-1  font-extrabold'>Size<span>:</span></p><strong>4 Ounce (Pack of 4)</strong></button>
                                    <button className='border-1 px-3 py-2  text-[#666] border-[#ffb100] rounded-sm'>4 Ounce (Pack of 4)</button>
                                </div>
                                <div className='flex gap-5'>
                                    <div className='pt-1'>
                                    <Image className='2xl:w-15 xl:w-10' src="/images/truck.svg" alt='image' width={48} height={46}></Image>
                                    </div>
                                    <div>
                                        <p className='text-[12px] 2xl:text-[14px] xl:text-[12px] mb-4'>Add additional items worth <span className='text-[#ffb100]'>INR 9439.2</span> to get <span className='text-[#ffb100]'>Fast Shipping</span> at standard shipping price.</p>
                                        <div className="w-full bg-gray-200 rounded-full h-1.5 2xl:h-1.5 xl:h-1  overflow-hidden">
                                            <div className="bg-[#ffb100] h-full transition-all duration-300" style={{ width: `20%` }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2 border border-neutral-200 rounded-md'>
                                    <div className='relative flex items-center border-b border-neutral-200 py-6'>
                                    <Swiper
                                        modules={[Autoplay, Navigation]}
                                        slidesPerView={5}
                                        loop={true}
                                        spaceBetween={20}
                                        grabCursor={true}
                                        navigation={{
                                            prevEl:".custom-2-prev",
                                            nextEl:".custom-2-next",
                                        }}
                                        autoplay={{
                                            delay:2000,
                                            disableOnInteraction:false,
                                        }}
                                        className="mySwiper"
                                        >
                                        {slides.map((item, i) => (
                                            <SwiperSlide key={i}>
                                            <div className="flex flex-col items-center justify-center text-center">
                                                <Image src={item.src} alt={item.text} width={30} height={30} />
                                                <h5 className="text-[12px] text-[#666] mt-1">{item.text}</h5>
                                            </div>
                                            </SwiperSlide>
                                        ))}
                                        </Swiper>
                                        {/* button */}
                                        <div className='custom-2-prev cursor-pointer content-center z-1 bg-white border border-neutral-300 shadow rounded-full w-7 h-7 absolute -left-5 top-1/3 transform -translate-y-1/3'><Image src="/images/left-arrow.png"  className='mx-auto pr-[1px]' alt='image' width={11} height={11} ></Image></div>
                                        <div className='custom-2-next cursor-pointer content-center z-1 bg-white border border-neutral-300 shadow rounded-full w-7 h-7 absolute -right-5 top-1/3 transform -translate-y-1/3'><Image src="/images/right-arrow.png" className='mx-auto pl-[1px]' alt='image' width={11} height={11}></Image></div>
                                    </div>
                                    <div>
                                        <div className='flex gap-2 xl:justify-between p-2 xl:p-5 overflow-x-scroll 2xl:overflow-x-visible'>
                                            <Image src="/images/payment_methods-175367948814.png" alt='image' width={61} height={40}></Image>
                                            <Image src="/images/payment_methods-175369014491.png" alt='image' width={61} height={40}></Image>
                                            <Image src="/images/payment_methods-175368113152.png" alt='image' width={61} height={40}></Image>
                                            <Image src="/images/payment_methods-175367948814.png" alt='image' width={61} height={40}></Image>
                                            <Image src="/images/payment_methods-175367948814.png" alt='image' width={61} height={40}></Image>
                                            <Image src="/images/payment_methods-175368113152.png" alt='image' width={61} height={40}></Image>
                                            <Image src="/images/payment_methods-175369014491.png" alt='image' width={61} height={40}></Image>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-[14px]'>Ships from Ubuy, Sold by : <span className='cursor-pointer underline decoration-black hover:text-[#ffb100] hover:decoration-[#ffb100] underline-offset-4  font-semibold'> A 2 Z STORE</span></p>
                                    <p className='text-[13px]'>Note: Step Down Voltage Transformer required for using electronics products of US store (110-120). Recommended power converters <a href="#" className='underline hover:text-[#ffb100] hover:decoration-[#ffb100]  font-semibold'>Buy Now</a></p>
                                </div>
                                 <div className='block xl:hidden border-t border-neutral-200 pt-2'>
                                    <p className='text-[12px] font-medium italic w-[90%]'>Bust odor and smell irresistible for 48 hours with our Body Spray Deodorant</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* description section */}
                    <Productcontent></Productcontent>
                </div>
                 {/* right */}
                {/* sticky */}
                <div className="hidden xl:block relative w-[28%]">
                    <div className="sticky top-10 2xl:h-[610px] xl:h-[530px] h-[410px] shadow-xl border border-neutral-100 p-8 2xl:p-8 xl:p-6 rounded-md overflow-y-auto custom-scrollbar">
                        <div>
                        <div className='flex flex-col gap-3'>
                            <span className='flex gap-2'>
                            <h2 className='text-[24px] 2xl:text-[24px] xl:text-[20px] font-extrabold'>INR 2261</h2>
                            <del className='text-red-600 text-[16px] 2xl:text-[16px] xl:text-[14px] pt-[3px]'>INR 2536</del>
                            </span>
                            <p className='text-[13px] 2xl:text-[13px] xl:text-[12px] text-[#198975] font-semibold'>Order now and get it around Friday, October 24</p>
                            <div className='text-[13px] 2xl:text-[16px] xl:text-[14px] flex gap-3 items-center'>
                                <h2>QTY :</h2>
                                <div className='flex gap-5 2xl:gap-5 xl:gap-3 items-center border border-neutral-500 px-3 2xl:px-3 xl:px-2 py-1 rounded-md'>
                                    <button className='cursor-pointer font-bold' onClick={()=>{number>1 ? setNumber(number-1) : undefined}}>-</button>
                                    <input  value={number} onChange={e => setNumber(number)} className="w-5 text-center " />
                                    <button className='cursor-pointer font-bold' onClick={()=>{number>4 ? undefined : setNumber(number+1)}} >+</button>
                                </div>
                            </div>
                            <p className='italic text-[#dc3545] text-[12px]  2xl:text-[16px] xl:text-[12px] font-semibold'>Only 5 items left in stock.</p>
                            <button className='text-[12px] 2xl:text-[16px] xl:text-[14px] py-4 2xl:py-4 xl:py-3 cursor-pointer text-white bg-black hover:text-black hover:bg-[#ffb100] rounded-md'>ADD TO CART</button>
                            <button className='text-[12px] 2xl:text-[16px] xl:text-[14px] py-4 2xl:py-4 xl:py-3 cursor-pointer text-black bg-[#ffb100] rounded-md'>BUY NOW</button>
                            <h5 className='text-[14px] text-[#666] font-medium'>Secured transaction</h5>    
                            <div>
                                <h3 className='text-[14px] font-semibold'>Our Top Logistics Partners</h3>
                                <div className='flex gap-3 mt-2'>
                                    <Image src="/cart/fedex.svg" alt='image' width={70} height={40}></Image>
                                    <Image src="/cart/dhl.svg" alt='image' width={70} height={40}></Image>
                                </div>
                            </div>
                            <p className='text-[13px] text-[#198975] font-semibold'>Fastest cross-border delivery</p>
                            <div>
                                <h3 className='text-[16px] 2xl:text-[16px] xl:text-[14px]'>Features & Benefits</h3>
                                <ul className='p-5 h-[200px] text-[14px] 2xl:text-[14px] xl:text-[12px] list-disc overflow-y-auto custom-scrollbar'>
                                    <li>AXE Apollo Body Spray Deodorant for men keeps you smelling awesome all day, every day</li>
                                    <li>Fights odor and leaves you smelling irresistible day and night</li>
                                    <li>Sage and cedarwood fragrance keeps you totally fresh and 100% ready</li>
                                    <li>Dedicated to providing the best tools for an irresistible fragrance</li>
                                    <li>All packaging to be recyclable or include recycled materials by 2025</li>
                                    <li>Part of the attraction game with body spray, shower gels, antiperspirants, and deodorants</li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product
