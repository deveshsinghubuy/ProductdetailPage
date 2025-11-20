"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
const GrandTotal = (prop) => {

  const [isOn, setIsOn] = useState(false);
    
  return (
    <div className={` ${prop.visible ?"hidden xl:flex flex-col gap-5": "flex flex-col gap-5 xl:hidden"}`}>
        {/*pricing total */}
        <div className={`bg-white`}>
            <div className="flex flex-col gap-2 p-4 text-[13px]">
                <div className="flex items-center justify-between">
                    <p>Shipping Weight - Round Up :</p>
                    <span>1 Kg(s)</span>
                </div>
                <div className="flex items-center justify-between">
                    <p>Subtotal</p>
                    <span>INR 7,486.00</span>
                </div>
                <div className="flex items-center justify-between">
                    <p>Shipping & Handling</p>
                    <span>INR 7,486.00</span>
                </div>
                <div className="flex items-center justify-between">
                    <p>Customs/import Duties</p>
                    <span className='text-[#ff8f00] font-bold italic'>On Delivery</span>
                </div>
                <div className="flex items-center justify-between">
                    <p>TAX</p>
                    <span>INR 91.80</span>
                </div>
                <div className='flex items-start gap-2 border-t border-neutral-200 pt-3'>
                    <input className='mt-[1px]' type='checkbox' style={{accentColor: "green"}}></input>
                    <p className='text-[12px] text-[#666666]'>I agree that customs and import Duties & Taxes will be collected by the courier company at the time of delivery. <span className='underline hover:text-[#ffb100] cp'>For more information</span></p>
                </div>     
                <div className="flex items-center justify-between text-[#151515]">
                    <p>Please <span className='underline font-bold cp'>login</span> to use UCredit.</p>
                </div>
            </div>
            <div className="flex justify-between border-t font-medium border-neutral-200 items-center text-[15px] p-4">
                <p>Grand Total</p>
                <span>INR 7,486.00</span>
            </div>
        </div>
        {/* ubuy plus */}
        <div>
            <div className="flex bg-[#fdbf32] px-4 py-3 justify-between items-center">
                <div className="flex  gap-2">
                    <Image src="/cart/saving-crown.svg" alt="iamge" width={20} height={20}></Image>
                    <h4 className="text-[18px] font-bold text-white">UBUY PLUS</h4>
                    <div className=""><Image src="/cart/white-plus.png" alt="image" width={13} height={13}></Image></div>
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
    </div>
  )
}

export default GrandTotal
