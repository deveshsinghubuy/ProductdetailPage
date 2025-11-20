"use client"
import React from 'react'
import Image from 'next/image'
import {  ChevronRight,ChevronUp, ChevronLeft, ChevronDown,Heart   } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ViewCartPage = () => {
  const [isOn, setIsOn] = useState(false);

    const cartItems = [
  {
    id: 1,
    brand: "SEIKO",
    name: "SEIKO Men's SRPL15 Prospex Watch",
    price: "INR48,322.00",
    img: "/cart/productcart.jpg",
    deliveryDate: "Wednesday, November 19",
  },
  {
    id: 2,
    brand: "CITIZEN",
    name: "CITIZEN Eco-Drive Titanium Watch",
    price: "INR35,999.00",
    img: "/cart/productcart.jpg",
    deliveryDate: "Thursday, November 20",
  },
  {
    id: 3,
    brand: "CASIO",
    name: "CASIO G-Shock GA-2100 Series Watch",
    price: "INR12,499.00",
    img: "/cart/productcart.jpg",
    deliveryDate: "Friday, November 21",
  },
];

  const [value, setValue] = useState(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const increase = (id) =>
    setValue((prev) => ({
      ...prev,
      [id]: prev[id] < 3 ? prev[id] + 1 : prev[id],
    }));

  const decrease = (id) =>
    setValue((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : prev[id],
    }));



  return (
    <div className='flex justify-center my-2'>
      <div className='max-w-[2050px] w-full flex justify-center'>
        <div className='w-full'>
          <div className='text-[13px] w-full flex gap-2 px-5 xl:px-10 2xl:px-15 items-center border-b border-neutral-200 pb-1'>
            <ChevronLeft className='w-5 h-5'></ChevronLeft>
            <p>Continue Shopping</p>
          </div>
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-4 xl:gap-8 px-5 xl:px-10 2xl:px-15 py-3 w-full'>
              {/* left panel shopping cart */}
              <div className='w-full'>
                  <div className='flex flex-col gap-3 md:flex-row md:justify-between items-center'>
                      <h2 className='text-[20px] font-bold'>Shopping Cart <span className='text-[16px] font-medium'>(3 items)</span></h2>
                      <p className='text-[14px] font-open-sans py-2 px-4 rounded-md font-bold bg-[#efefef] focus:bg-[#ffb100]'>Updated Shopping Cart</p>
                  </div>
                    {/* bottom */}
                  <div className='mt-8 lg:mt-10'>
                    {/* us to india */}
                    <div className="flex py-2 px-3 rounded-t-xl border border-neutral-200 justify-between md:gap-20 lg:gap-25 items-center bg-[#F8F8F8] w-full md:w-fit">
                        <div className='flex gap-2 text-[12px]'>
                          <Image className='w-4.5 md:w-6' src="/images/us.svg" alt="image" width={26} height={16}></Image>
                          <div>
                            <h4 className='text-[#999]'>From</h4>
                            <h4 className='md:text-[14px] font-bold'>US</h4>
                            <h4>Store</h4>
                          </div>
                        </div>
                        <div className="flex items-center before:content-['•••••••••'] md:before:content-['••••••••••••'] before:tracking-[3px] before:text-[#ffb100] after:content-['•••••••••'] md:after:content-['••••••••••••'] after:text-neutral-400 after:tracking-[3px] after:ml-1">
                            <Image src="/cart/aeroplane.svg" alt="image" width={24} height={22}></Image>
                        </div>
                        <div className='flex gap-2 items-center text-[12px]'>
                          <div>
                            <Image className='w-4.5 md:w-6' src="/cart/india.png" alt="image" width={26} height={16}></Image>
                          </div>
                          <div>
                            <h4 className='text-[#999]'>To</h4>
                            <h4 className='md:text-[14px] font-bold mb-3.5'>India</h4>
                          </div>
                        </div>
                    </div>
                    {/* product  */}
                    <div className='space-y-4'>
                        { cartItems.map((item) =>( 
                          <div key={item.id} className='pb-4 border border-neutral-200 rounded-md font-open-sans'>
                            <div className='px-5 py-3 border-b border-neutral-200'>
                              <p className='text-[14px]'><span className='font-bold'>Est. delivery : </span>{item.deliveryDate}</p>
                            </div>
                            {/* product images and details  */}
                            <div className='relative flex flex-col md:flex-row gap-5 md:gap-12 p-4 md:px-6'>
                              <button className="absolute top-2 right-2 border border-neutral-300 p-1 rounded-full md:hidden bg-white cursor-pointer">
                                <Heart className="w-4 h-4 hover:fill-red-500 fill-[#6c757d] focus:fill-red-500 text-white " />
                              </button>
                              <div className='flex gap-5 md:gap-12'>
                                  <div className='mt-4 lg:mt-0 px-3 lg:px-4 order-2 md:order-1 w-[35%]'><Image src={item.img} alt='image' width={140} height={140}></Image></div>
                                  <div className='mt-2 lg:mt-0 text-[14px] order-1 md:order-2'>
                                    <h4 className='text-[#6c757d] font-medium'>{item.brand}</h4>
                                    <p className='lg:text-[16px] mb-3'>{item.name}</p>
                                    <a className='hidden md:flex font-medium items-center gap-2'>
                                      <button className=" bg-white cursor-pointer">
                                        <Heart className="w-4 h-4 hover:fill-red-500 fill-[#6c757d] focus:fill-red-500 text-white " />
                                      </button>
                                      <strong className='text-[#6c757d]'>Add to Wishlist</strong>
                                    </a>
                                  </div>
                              </div>
                              
                              <div className='flex justify-between md:justify-start md:flex-col items-center md:gap-3 lg:gap-3 md:ml-auto lg:mr-10'>
                                  <span className='font-bold text-[14px] lg:text-[16px]'>{item.price}</span>
                                  <span className="px-2 flex gap-2 lg:gap-0 border border-neutral-200 rounded-md shadow-sm">
                                    <input type="number" min={1} max={3} value={value[item.id]} readOnly className="md:py-1 text-center text-[13px] lg:text-[15px] focus:outline-none bg-white appearance-none"/>
                                    <div className='flex flex-col md:py-1 pl-1 border-l border-neutral-200'>
                                        <button onClick={() => increase(item.id)} className="hover:bg-neutral-100">
                                          <ChevronUp className="w-3 h-3 text-neutral-700" />
                                        </button>
                                        <button onClick={() => decrease(item.id)} className=" border-t border-neutral-200 hover:bg-neutral-100">
                                          <ChevronDown className="w-3 h-3 text-neutral-700" />
                                        </button>
                                    </div>
                                  </span>
                                <a className='flex gap-2 items-center cursor-pointer text-[14px]'><Image src="/images/trash.png" alt="image" width={15} height={8}></Image><h4>Remove</h4></a>
                              </div>
                            </div>

                            <div className='px-4 md:p-0 md:left-57 lg:left-1/3 xl:left-61 2xl:left-2/10 w-fit relative flex items-center gap-4 text-[14px]'>
                                <strong className=''>U-Care Warranty :</strong>
                                <div className='flex cursor-pointer justify-center py-1 px-5 bg-[#ffb100] font-bold rounded-md'>
                                  <button>Select a Plan</button>
                                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-neutral-800" />
                                </div>
                            </div>
                          </div>))}
                    </div> 
                  </div>
              </div>

              {/* right panel */}
              <div className='w-full lg:w-[40%] xl:w-[37%] 2xl:w-[33%] flex flex-col gap-5 relative'>
                {/* ubuy plus */}
                <div className='shadow-sm border border-neutral-100 rounded-xl overflow-hidden'>
                    <div className="flex bg-[#fdbf32] px-4 py-3 justify-between items-center">
                        <div className="flex lg:flex-col xl:flex-row gap-2">
                          <div className='flex gap-2'>
                            <Image src="/cart/saving-crown.svg" alt="iamge" width={20} height={20}></Image>
                            <h4 className="text-[14px] md:text-[20px] lg:text-[12px] xl:text-[16px] 2xl:text-[20px] font-bold text-white">UBUY PLUS</h4>
                            <div className=""><Image src="/cart/white-plus.png" alt="image" width={13} height={13}></Image></div>
                          </div>
                          <p className="text-[12px] content-center">(7 Days free trial)</p>
                        </div>
                        <div onClick={() => setIsOn(!isOn)} className={`relative w-9 h-4 rounded-full cp transition-colors duration-300 ${isOn ? "bg-green-500" : "bg-gray-400"}`}>
                            <div className={`absolute -top-[2.5px]  w-5 h-5 rounded-full bg-white shadow-md transition-all duration-300 ${
                                    isOn ? "translate-x-4" : "translate-x-0"}`}>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-4 flex flex-col gap-2 bg-white">
                        <div className="flex items-center gap-2">
                            <Image src="/cart/saving-money-circle.svg" alt="image" width={24} height={24}></Image>
                            <p className="text-[12px]">Get 10% cashback on every order</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src="/cart/saving-delivery.svg" alt="image" width={24} height={24}></Image>
                            <p className="text-[12px]">Get express shipping at the rate of standard shipping</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src="/cart/saving-money-circle.svg" alt="image" width={24} height={24}></Image>
                            <p className="text-[12px]">Get free basic warranty plan on eligible items.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src="/cart/wallet.svg" alt="image" width={24} height={24}></Image>
                            <p className="text-[12px]">The membership renewal fee is INR 18000, and you will be automatically billed after the 7-day free trial <span className="text-[#ffb100] cp">T&C apply.</span></p>
                        </div>
                        <button className="text-[12px] text-[#ffb100] w-fit cp">Read More</button>
                    </div>
                </div>
                {/* stiky */}
                <div className='sticky top-5 shadow-xl border border-neutral-50 rounded-2xl p-4 font-open-sans'>
                  <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2 text-[13px] md:text-[14px] lg:text-[12px] xl:text-[14px]'>
                      <h2 className='text-[18px] xl:text-[20px] font-bold'>Order Summary</h2>
                      <p className='flex justify-between'><span className='font-bold'>Subtotal:</span><span className='text-[#6c757d] font-semibold'>INR107,169.00</span></p>
                      <p className='flex justify-between'><span className='font-bold'>Shipping Fee:</span><span className='text-[#6c757d] font-semibold'>Calculating at checkout</span></p>
                      <div className='w-full py-2 px-4 flex items-center justify-center gap-1 bg-[#ffb100] rounded-md font-bold'>
                        <FontAwesomeIcon icon={faLock} className="w-5 h-5" />
                        <button >Proceed to Checkout</button>
                      </div>
                    </div>
                    <div className='flex flex-col gap-2 text-[13px] md:text-[14px] lg:text-[12px] xl:text-[14px] border-b border-neutral-200 pb-5'>
                      <h2 className='text-[16px] font-bold'>Discount Codes</h2>
                      <p>Enter your coupon code if you have one.</p>
                      <input  className='py-1 px-3 border border-neutral-300 rounded-sm outline-none' type='text'></input>
                      <button className='mt-1 py-2 px-4 bg-[#ffb100] rounded-md w-fit font-bold'>Apply Coupon</button>
                    </div>
                    <div className='flex items-center justify-center gap-2  border border-neutral-300 cursor-pointer p-2'>
                      <Image src="/images/Pdf-File.svg" alt="image" width={20} height={20}></Image>
                      <button className='text-[13px] md:text-[14px] font-semibold'>Download Cart to PDF</button> 
                      <Image src="/images/Download.svg" alt="image" width={20} height={20}></Image>
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

export default ViewCartPage
