"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import GrandTotal from './GrandTotal';
import { ChevronRight } from "lucide-react";


const PaymentsideBlock = () => {

  const [quantity,setQuantity] = useState(1)
  const [reviewOpen, setreviewOpen] = useState(false)

  return (
        <div className="flex flex-col order-1 xl:order-2 gap-5 xl:w-[30%]">

        {/* product iamge & detail */}
            <div className="bg-white">
                {/* oreder review div for mobile */}
                <div className='p-4 xl:hidden border-b border-neutral-200'>
                    <div className='flex items-center justify-between text-[13px]'>
                        <h4>1 item</h4>
                        <div onClick={()=>setreviewOpen(!reviewOpen)} className='flex gap-1 items-center'>
                            <button>Order Review</button>
                            <div className={`transition-transform duration-300 ${reviewOpen ? "rotate-90" : ""}`}>
                                <ChevronRight className="w-4 h-4 text-neutral-700" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 flex gap-4 items-center cp">
                        <div className="border-1 p-3 border-neutral-200"><Image src="/cart/productcart.jpg" alt="image" width={38} height={38}></Image></div>
                        <h4 className="text-[13px]">Lemme Sleep Gummies with 5mg Melatonin</h4>   
                    </div>
                </div>
                {/* product */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${reviewOpen ? "max-h-[400px]" : "max-h-0"} xl:max-h-[400px]`} >
                    <div className="flex justify-center py-4">
                        <div className="flex gap-2 items-center">
                            <Image src="/images/us.svg" alt="image" width={26} height={16}></Image>
                            <h4>US</h4>
                            <div className="flex items-center before:content-['••••••'] md:before:content-['••••••••••••••••••••••••'] lg:before:content-['•••••••••••••••••••••••••••••••••••••'] xl:before:content-['••••••'] before:tracking-[3px] before:text-[#ffb100] md:after:content-['••••••••••••••••••••••••'] lg:after:content-['•••••••••••••••••••••••••••••••••••••'] after:content-['••••••'] xl:after:content-['••••••'] after:text-neutral-400 after:tracking-[3px] after:ml-1">
                                <Image src="/cart/aeroplane.svg" alt="image" width={24} height={22}></Image>
                            </div>
                            <Image src="/cart/india.png" alt="image" width={26} height={16}></Image>
                            <h4>India</h4>
                        </div>
                    </div>

                    <div className="flex gap-6 xl:justify-between p-4 border-b xl:border-y border-neutral-200">
                        <div className="rounded-md px-4 md:px-8 lg:px-14 xl:px-6 py-4 shadow-lg h-fit">
                            <div className="flex justify-center">
                            <Image className='md:w-25 xl:w-auto' src="/cart/productcart.jpg" alt="iamge" width={47} height={50}></Image>
                            </div>
                            <div className='mt-4 mx-auto flex w-18 box-border px-2 items-center justify-between border border-neutral-400 rounded-md'>
                                <button className='cp' onClick={quantity > 1 ? ()=>setQuantity(quantity-1) : null}>-</button>
                                <h4>{quantity}</h4>
                                <button className='cp' onClick={quantity < 3 ? ()=>setQuantity(quantity+1) : null}>+</button>
                            </div>
                        </div>
                        <div className="xl:w-65 text-[10px] sm:text-[13px] text-[#464646] font-medium flex flex-col gap-1">
                            <p className=" mb-2" >Lemme Sleep Gummies with 5mg Melatonin, Elderberry, Magnesium, L-Theanine, Chamo... </p>
                            <p>Color :<span> White | Black</span></p>
                            <p>Size :<span> Small</span></p>
                            <p>Brand :<span> Lemme</span></p>
                            <p>Package Weight :<span> 0.45 Kg/Qt</span></p>
                            <p>Unit Price :<span> INR 3,743.00</span></p>
                            <p>Total Price :<span className="text-[12px] sm:text-[15px] font-semibold"> INR 7,486.00</span></p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-4 text-[13px]">
                        <p>Shipping Charges <span>(1 Item 2 Qty)</span></p>
                        <p>INR</p>
                    </div>
                </div>
            </div>
            {/* payment total section*/}
            <GrandTotal visible={true}></GrandTotal>
        </div>
    )
}

export default PaymentsideBlock
