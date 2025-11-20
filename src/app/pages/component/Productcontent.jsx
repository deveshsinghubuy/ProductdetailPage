import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faThumbsUp, faThumbsDown  } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


const Productcontent = () => {

  const questions = [
    {   
        id:1,
        question:"What are the key ingredients in AXE Apollo Body Spray Deodorant?",
        answer:"AXE Apollo Body Spray features a unique blend of sage and cedarwood, which are known for their refreshing and invigorating scents. These natural ingredients contribute to a long-lasting fragrance while providing odor protection throughout the day. This formulation is designed without aluminum, making it a safer choice for users who prefer an aluminum-free deodorant. The scent profile is perfect for daily wear, making it suitable for various occasions, from casual outings to formal events."
    },
    { 
        id:2,
        question:"Is AXE Apollo Body Spray suitable for sensitive skin?",
        answer:"AXE Apollo Body Spray is designed with a formula that minimizes harsh chemicals, focusing on a balance between effectiveness and skin-friendliness. While many users find it gentle enough for everyday use, it’s always best to perform a patch test on a small area of skin, especially for individuals with particularly sensitive skin. Using this deodorant can help you stay fresh and confident, while the absence of aluminum makes it a thoughtful choice for those with sensitivities."
    },
    { 
        id:3,
        question:"How long does the fragrance of AXE Apollo Body Spray last?",
        answer:"The AXE Apollo Body Spray is formulated for long-lasting odor protection, with its fragrance designed to stay with you throughout the day. The combination of sage and cedarwood offers an appealing scent that can withstand daily activities and stressors. It is suitable for morning application, and you can count on it to keep you feeling fresh even during workouts or long meetings, making it ideal for those with active lifestyles."
    },
    { 
        id:4,
        question:"Can AXE Apollo Body Spray be used on clothing?",
        answer:"While AXE Apollo Body Spray is intended for use on the body, it’s advisable to avoid direct application on clothing as it may leave marks or stains due to the spray's alcohol content. Instead, apply it directly to your skin, allowing the fragrance to meld with your natural body chemistry. This approach ensures that you maximize the scent's effectiveness, providing a personal and appealing aroma without risking damage to garments."
    },
    { 
        id:5,
        question:"What is the scent profile of AXE Apollo Body Spray?",
        answer:"AXE Apollo Body Spray offers a distinct scent profile featuring notes of sage and cedarwood. This combination is fresh and earthy, designed to appeal to men who enjoy a rugged yet sophisticated aroma. The scent is not overly overpowering, making it versatile for both everyday wear and special occasions. Apply it during your morning routine and enjoy the sophisticated fragrance as a confidence booster particularly during social gatherings."
    },
    { 
        id:6,
        question:"How should I apply AXE Apollo Body Spray for the best results?",
        answer:"To achieve the best results with AXE Apollo Body Spray, hold the can about six inches from your body and spray it on pulse points such as the chest, neck, and wrists. This method allows the fragrance to activate as it reacts with your body heat, enhancing its overall scent. For an all-day fresh feeling, apply it after showering and before dressing, ensuring that your skin absorbs the aroma effectively."
    },
    { 
        id:7,
        question:"Is AXE Apollo Body Spray vegan-friendly?",
        answer:"AXE Apollo Body Spray is generally considered vegan-friendly as it does not contain any animal-derived ingredients. It focuses on using essential oils and other synthetic fragrances for scent without compromising its commitment to performance. This makes it a suitable option for those looking to adopt cruelty-free cosmetic products while still enjoying a long-lasting and refreshing deodorant."
    },
    { 
        id:8,
        question:"What is the purpose of using AXE Apollo Body Spray compared to antiperspirants?",
        answer:" AXE Apollo Body Spray serves primarily as a deodorant, providing long-lasting fragrance and odor protection without blocking sweat glands like antiperspirants do. It is perfect for individuals looking for a lighter option that keeps them smelling fresh without the heavy feel associated with traditional antiperspirants. This product is ideal for those who prefer to allow natural perspiration while ensuring odor control, especially during light physical activities."
    },
    { 
        id:9,
        question:"Can I use AXE Apollo Body Spray daily?",
        answer:"Absolutely! AXE Apollo Body Spray is formulated for daily use and designed to provide fresh fragrance and odor protection throughout the day. Its lightweight formula makes it suitable for frequent application without causing irritation or discomfort. Whether you're heading to work, the gym, or social events, you can confidently incorporate this body spray into your daily grooming routine to maintain a pleasant scent."
    },
    { 
        id:10,
        question:"Where can I buy AXE Apollo Body Spray Deodorant for Long-Lasting Odor Protection in India?",
        answer:" You can purchase AXE Apollo Body Spray Deodorant for Long-Lasting Odor Protection, Sage & Cedarwood, in a pack of 4 through Ubuy. Ubuy offers a convenient shopping experience with various options for this product, ensuring that it’s readily available for customers in India. This makes it easy to stock up on your favorite deodorant and enjoy the benefits of its invigorating scent and reliable odor protection."
    },
  ] 

  const topSelling = [
    { id:1, img:"/images/description-img-3.jpg", title:"AXE Apollo Body Spray", brand:"AXE" },
    { id:2, img:"/images/description-img-4.jpg", title:"Axe Body Spray Apollo Deodorant Body Spray 3 Pack", brand:"AXE" },
    { id:3, img:"/images/description-img-3.jpg", title:"AXE Apollo Deodorant Body Spray For Men, Sage & Cedarwood 48H Odor Protection Aluminum Free Body Spray Deodorant 5.1 oz", brand:"AXE" },
    { id:4, img:"/images/description-img-5.jpg", title:"AXE Apollo Deodorant Spray for Men Sage & Cedarwood, 5.1 oz", brand:"AXE" },
    { id:5, img:"/images/description-img-4.jpg", title:"AXE Antiperspirant Deodorant Stick Apollo 48 Hour Sweat and Odor Protection for Long Lasting Freshness, Sage & Cedarwood Mens Deodorant 2.7 oz", brand:"AXE" },
    { id:6, img:"/images/description-img-3.jpg", title:"Axe Deodorant Stick, Apollo 3 oz", brand:"AXE" },
    { id:7, img:"/images/description-img-5.jpg", title:"AXE Apollo Body Spray", brand:"AXE" },
    { id:8, img:"/images/description-img-3.jpg", title:"Axe Deodorant Stick, Apollo 3 oz", brand:"AXE" },

  ]

  const relatedBrands = [
    { id:1, name:"AXE" },
    { id:2, name:"NIVEA" },
    { id:3, name:"Dove" },
    { id:4, name:"Old Spice" },
    { id:5, name:"Gillette" },
    { id:6, name:"Rexona" },
    { id:7, name:"Puma" },
    { id:8, name:"Short" },
    { id:9, name:"DNA Motoring" },
    { id:10, name:"MTECH USA" },
    { id:11, name:"DNA Motoring" },
    { id:12, name:"Motoring Catch" },
    { id:13, name:"Sharukh Dove" },
    { id:14, name:"Salaman Khan" },
    { id:15, name:"NIVEA Aamir" },

  ]
  return (
    <div className='my-10 flex flex-col gap-8'>
         {/* feature & benifits, its appear only for mobile*/}
         <div className=' xl:hidden flex flex-col gap-4 md:gap-5 xl:gap-7'>
            <h2 className='text-[14px] md:text-[16px] xl:text-[20px] font-semibold border-b-2 border-neutral-300 pb-2 relative after:content-[" "] after:absolute after:left-0 after:top-[28px] md:after:top-[31px] xl:after:top-[37px] after:w-40 after:h-[4px] after:rounded-2xl after:bg-[#ffb100]'>Features & Benifits</h2>
            <ul className='space-y-2 text-[14px]'>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:-top-2 before:text-black before:text-[24px]">AXE Apollo Body Spray Deodorant for men keeps you smelling awesome all day, every day.</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:-top-2 before:text-black before:text-[24px]">Fights odor and leaves you smelling irresistible day and night</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:-top-2 before:text-black before:text-[24px]">Sage and cedarwood fragrance keeps you totally fresh and 100% ready</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:-top-2 before:text-black before:text-[24px]">Dedicated to providing the best tools for an irresistible fragrance</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:-top-2 before:text-black before:text-[24px]">All packaging to be recyclable or include recycled materials by 2025</li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:-top-2 before:text-black before:text-[24px]">Part of the attraction game with body spray, shower gels, antiperspirants, and deodorants</li>
            </ul>
         </div>
        
        {/* stands out */}
        <div className='flex flex-col gap-7'>
            <h2 className='text-[14px] md:text-[16px] xl:text-[20px] font-semibold border-b-2 border-neutral-300 pb-2 relative after:content-[" "] after:absolute after:left-0 after:top-[28px] md:after:top-[31px] xl:after:top-[37px] after:w-40 after:h-[4px] after:rounded-2xl after:bg-[#ffb100]'>What Stands Out</h2>
            <div className='flex flex-col lg:flex-row gap-5'>
                <div className='border border-neutral-200 rounded-2xl p-4 xl:p-6 shadow-[0_0_6px_0_rgba(156,163,175,0.4)]'>
                    <h3 className='text-[14px] md:text-[16px] font-semibold'>Long-Lasting Protection</h3>
                    <p className='text-[12px] md:text-[14px] mt-1'>AXE Apollo guarantees all-day freshness with its advanced formula, effectively neutralizing odors and keeping you confident from morning to night.</p>
                </div>
                <div className='border border-neutral-200 rounded-2xl p-4 xl:p-6 shadow-[0_0_6px_0_rgba(156,163,175,0.4)]'>
                    <h3 className='text-[14px] md:text-[16px] font-semibold'>Long-Lasting Protection</h3>
                    <p className='text-[12px] md:text-[14px] mt-1'>AXE Apollo guarantees all-day freshness with its advanced formula, effectively neutralizing odors and keeping you confident from morning to night.</p>
                </div>
                <div className='border border-neutral-200 rounded-2xl p-4 xl:p-6 shadow-[0_0_6px_0_rgba(156,163,175,0.4)]'>
                    <h3 className='text-[14px] md:text-[16px] font-semibold'>Long-Lasting Protection</h3>
                    <p className='text-[12px] md:text-[14px] mt-1'>AXE Apollo guarantees all-day freshness with its advanced formula, effectively neutralizing odors and keeping you confident from morning to night.</p>
                </div>
            </div>
         </div>
         {/* product-details */}
         <div className='flex flex-col gap-4 md:gap-5 xl:gap-7'>
            <h2 className='text-[14px] md:text-[16px] xl:text-[20px] font-semibold border-b-2 border-neutral-300 pb-2 relative after:content-[" "] after:absolute after:left-0 after:top-[28px] md:after:top-[31px] xl:after:top-[37px] after:w-40 after:h-[4px] after:rounded-2xl after:bg-[#ffb100]'>Product Details</h2>
            <ul className=' flex flex-col gap-4'>
                <li className='flex gap-3 items-start xl:items-center'><Image className='mt-1' src="/images/ubuy-icon.svg" alt='image' width={15} height={15}></Image><h5 className='text-[12px] xl:text-[14px]'>All NEW and upgraded AXE Apollo Men’s Body Spray Deodorant, 4 oz.</h5></li>
                <li className='flex gap-3 items-start xl:items-center'><Image className='mt-1' src="/images/ubuy-icon.svg" alt='image' width={15} height={15}></Image><h5 className='text-[12px] xl:text-[14px]'>Bust odor and smell irresistible for 48 hours with our Body Spray Deodorant</h5></li>
                <li className='flex gap-3 items-start xl:items-center'><Image className='mt-1' src="/images/ubuy-icon.svg" alt='image' width={15} height={15}></Image><h5 className='text-[12px] xl:text-[14px]'>An irresistible-smelling deodorant for men. An iconic combo of fresh sage and cedarwood with an aluminum-free formula for long-lasting odor protection.</h5></li>
                <li className='flex gap-3 items-start xl:items-center'><Image className='mt-1' src="/images/ubuy-icon.svg" alt='image' width={15} height={15}></Image><h5 className='text-[12px] xl:text-[14px]'>Shake, twist, and spray this body spray deodorant across your chest.</h5></li>
                <li className='flex gap-3 items-start xl:items-center'><Image className='mt-1' src="/images/ubuy-icon.svg" alt='image' width={15} height={15}></Image><h5 className='text-[12px] xl:text-[14px]'>This AXE Body Spray Deodorant comes in a new can design with infinitely recyclable metal.</h5></li>
                <li className='flex gap-3 items-start xl:items-center'><Image className='mt-1' src="/images/ubuy-icon.svg" alt='image' width={15} height={15}></Image><h5 className='text-[12px] xl:text-[14px]'>Loving this AXE Apollo Body Spray. Check out AXE Apollo Antiperspirant Men's Deodorant, AXE Apollo Men's Deodorant stick, AXE Apollo Body Wash, and AXE Apollo 2-in-1 Shampoo plusConditioner.</h5></li>
            </ul>
            
            <table className='table-fixed min-w-full border border-gray-300 text-[14px] font-semibold text-left'>
                <colgroup>
                    <col className="w-1/2" />
                    <col className="w-1/2" />
                </colgroup>
                <tbody>
                    <tr>
                        <td className='border border-neutral-300  p-4 bg-[#f7f7f7]'>Brand</td>
                        <td className='border border-neutral-300  p-4 bg-[#f7f7f7]'>AXE</td>
                    </tr>
                    <tr>
                        <td className='border border-neutral-300  p-4 '>Item Form</td>
                        <td className='border border-neutral-300  p-4 '>Spray</td>
                    </tr>
                    <tr>
                        <td className='border border-neutral-300  p-4 bg-[#f7f7f7]'>Scent</td>
                        <td className='border border-neutral-300  p-4 bg-[#f7f7f7]'>Apollo (Sage and Cedarwood)</td>
                    </tr>
                    <tr>
                        <td className='border border-neutral-300  p-4 '>Material Type Free</td>
                        <td className='border border-neutral-300  p-4 '>Aluminum Free</td>
                    </tr>
                    <tr>
                        <td className='border border-neutral-300  p-4 bg-[#f7f7f7]'>Special Feature</td>
                        <td className='border border-neutral-300  p-4 bg-[#f7f7f7]'>Long Lasting</td>
                    </tr>
                    <tr>
                        <td className='border border-neutral-300  p-4 '>Product Dimensions</td>
                        <td className='border border-neutral-300  p-4 '>9.19 x 6.13 x 3.56 inches (23.3 x 15.6 x 9 cm); 15.84 ounces (449.06 grams)</td>
                    </tr>
                    <tr>
                        <td className='border border-neutral-300 p-4 bg-[#f7f7f7]'>Country of Origin</td>
                        <td className='border border-neutral-300 p-4 bg-[#f7f7f7]'>This item will be import from US</td>
                    </tr>
                    <tr>
                        <td className='border border-neutral-300  p-4 '>Date First Available</td>
                        <td className='border border-neutral-300  p-4 '>April 01, 2021</td>
                    </tr>
                    <tr>
                        <td className='border border-neutral-300  p-4 bg-[#f7f7f7]'>What is in the box	</td>
                        <td className='border border-neutral-300  p-4 bg-[#f7f7f7]'>AXE Apollo Body Spray... For more details, please check description/product details</td>
                    </tr>
                </tbody>
            </table>
         </div>
         {/* important-info */}
         <div className='flex flex-col gap-7'>
            <h2 className='text-[14px] md:text-[16px] xl:text-[20px] font-semibold border-b-2 border-neutral-300 pb-2 relative after:content-[" "] after:absolute after:left-0 after:top-[28px] md:after:top-[31px] xl:after:top-[37px] after:w-40 after:h-[4px] after:rounded-2xl after:bg-[#ffb100]'>Important information</h2>
            <div className='flex flex-col gap-2 text-[14px]'>
                <h4 className='font-semibold'>Ingredients</h4>
                <p>Alcohol DenatHydrofluorocarbon 152AButaneIsobutanePropaneFragrance (Parfum)</p>
                <h4 className='font-semibold'>Directions</h4>
                <p>Shake, twist and spray deodorant across your chest.</p>
            </div>
         </div>
           {/* should buy */}
         <div className='flex flex-col gap-3 md:gap-5 xl:gap-7'>
            <h2 className='text-[14px] md:text-[16px] xl:text-[20px] font-semibold border-b-2 border-neutral-300 pb-2 relative after:content-[" "] after:absolute after:left-0 after:top-[28px] md:after:top-[31px] xl:after:top-[37px] 2xl:after:top-[36px]  after:w-40 after:h-[4px] after:rounded-2xl after:bg-[#ffb100]'>Who Should Buy?</h2>
            <div className='flex flex-wrap lg:flex-nowrap gap-3 xl:gap-5'>
                <div className='flex flex-col lg:flex-row gap-3 xl:gap-6 items-start xl:ml-3 2xl:ml-10'>
                    <Image className='w-10 xl:w-auto' src="/images/check.svg" alt='iamges' width={55} height={55}></Image>
                    <div className='flex flex-col gap-3 text-[12px] xl:text-[16px]'>
                        <div>
                            <h4 className='font-semibold'>Active Lifestyles</h4>
                            <p className='text-[12px] xl:text-[14px]'>Ideal for individuals who engage in sports or gym activities and need long-lasting odor protection.</p>
                        </div>
                        <div>
                            <h4 className='font-semibold'>Daily Freshness</h4>
                            <p className='text-[12px] xl:text-[14px]'>Perfect for everyday use, ensuring a pleasantly fresh scent throughout the day without aluminum.</p>
                        </div>
                        <div>
                            <h4 className='font-semibold'>Natural Ingredient Seekers</h4>
                            <p className='text-[12px] xl:text-[14px]'>Suitable for users looking for body spray options free from aluminum and synthetic chemicals.</p>
                        </div>
                    </div>
                </div>
              
                <div className='flex flex-col lg:flex-row gap-3 xl:gap-6 items-start xl:ml-3 2xl:ml-10'>
                    <Image className='w-10 xl:w-auto' src="/images/cancel.svg" alt='iamges' width={55} height={55}></Image>
                    <div className='flex flex-col gap-3 text-[12px] xl:text-[16px]'>
                        <div>
                            <h4 className='font-semibold'>Sensitive Skin</h4>
                            <p className='text-[12px] xl:text-[14px]'>People with sensitive skin might experience irritation from certain fragrance ingredients despite being aluminum-free.</p>
                        </div>
                        <div>
                            <h4 className='font-semibold'>Strong Odor Preference</h4>
                            <p className='text-[12px] xl:text-[14px]'>Not ideal for those who prefer stronger or more pungent scents, as this is subtler and more refreshing.</p>
                        </div>
                        <div>
                            <h4 className='font-semibold'>Travel Restrictions</h4>
                            <p className='text-[12px] xl:text-[14px]'>The 4-ounce size may exceed liquid limits for carry-on luggage when traveling by air.</p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
         {/* Product description */}
         <div className='flex flex-col gap-3 md:gap-5 xl:gap-7'>
            <h2 className='text-[14px] md:text-[16px] xl:text-[20px] font-semibold border-b-2 border-neutral-300 pb-2 relative after:content-[" "] after:absolute after:left-0 after:top-[28px] md:after:top-[31px] xl:after:top-[37px] 2xl:after:top-[36px] after:w-40 after:h-[4px] after:rounded-2xl after:bg-[#ffb100]'>Product Description</h2>
            <div className='text-[14px] flex flex-col gap-5 h-[750px] overflow-y-auto'>
                <p className='xl:text-[14px] font-medium font-sans border-b pb-4 leading-4'>Take staying fresh to the next level. Live that daily fresh life. You never know what’s just around the corner, so you need a men's deodorant that’s going to keep you smelling awesome all day, every day. With its odor protection technology, AXE Apollo Body Spray Deodorant for men has got you covered. Always on point, the sage and cedarwood fragrance keeps you totally fresh and 100% ready. Smell Irresistible Our revolutionary technology men's body spray deodorant fights, leaving you smelling irresistible day and night. So that no matter what comes your way, you’re ready. Fresher you, cleaner planet. By 2025, AXE aims for all our packaging to be recyclable or to include recycled materials. At AXE, we believe that one of the keys to attraction is an irresistible fragrance. That’s why we’re dedicated to giving you all the best tools to make sure that whenever an opportunity comes your way, you can smell your absolute best. From our body spray deodorant to our shower gels, our antiperspirants to our deodorants, we’re doing everything we can to make sure no one gets left out of the attraction game. Smell Irresistible all Day. That's the Axe Effect.</p>

                <h2 className='font-semibold'>From the manufacturer</h2>
                
                <div><Image className='mx-auto' src="/images/description-img-1.jpg" alt='image' width={960} height={593}></Image></div>
                <div><Image className='mx-auto' src="/images/description-img-2.jpg" alt='image' width={960} height={593}></Image></div>
                
                <div className='flex flex-wrap justify-between gap-y-3 xl:gap-6.5 lg:mx-3 xl:mx-auto mb-3'>
                    <div className='max-custom max-w-[125px] lg:max-w-[170px] xl:max-w-[200px]  2xl:max-w-[220px] w-full'>
                        <div><Image src="/images/description-img-3.jpg" alt='image' width={220} height={220}></Image></div>
                        <p className='mt-2 leading-4'>AXE BODY SPRAYS ARE MADE WITH INFINITELY CANS</p>
                    </div>
                    <div className='max-custom max-w-[125px] lg:max-w-[170px] xl:max-w-[200px] 2xl:max-w-[220px] w-full'>
                        <div><Image src="/images/description-img-4.jpg" alt='image' width={220} height={220}></Image></div>
                        <p className='mt-2 leading-4'>LOVING THIS BODY SPRAY? CHECK OUT THIS SCENT IN OTHER AXE PRODUCTS INCLUDING DEODORANT STICK AND BODY WASH.</p>
                    </div>            
                    <div className='max-custom max-w-[125px] lg:max-w-[170px] xl:max-w-[200px] 2xl:max-w-[220px] w-full'>
                        <div><Image src="/images/description-img-5.jpg" alt='image' width={220} height={220}></Image></div>
                        <p className='mt-2 leading-4'>OUR FIRST DUAL-ACTION BODY SPRAY WITH ZINC TECHNOLOGY. BUST ODOR AND SMELL IRRESISTIBLE.</p>
                    </div>
                    <div className='max-custom max-w-[125px] lg:max-w-[170px] xl:max-w-[200px] 2xl:max-w-[220px] w-full'>
                        <div><Image src="/images/description-img-6.jpg" alt='image' width={220} height={220}></Image></div>
                        <p className='mt-2 leading-4'>SPRAY ACROSS THE CHEST TO SMELL IRRESISTIBLE FOR 48 HOURS.</p>
                    </div>
                </div>

                <div><Image className='mx-auto' src="/images/description-img-7.jpg" alt='image' width={960} height={593}></Image></div>
            </div>

            <p className='text-[14px] mt-10 xl:mt-15'>Product Dimensions : <span>9.19 x 6.13 x 3.56 inches (23.3 x 15.6 x 9 cm); 15.84 ounces (449.06 grams)</span> , product weight : <span>449.06 grams</span></p>
         </div>
         {/* have any query */}
         <div className='flex gap-4 mt-7 2xl:mt-15 w-fit bg-[#fff6e0] rounded-lg text-[14px] px-4 py-3'>
            <FontAwesomeIcon icon={faComments} className='text-[18px] text-[#ffb100]' />
            <h4>Have any Query?</h4>
            <button className='underline font-semibold cursor-pointer'>Chat with us</button>
         </div>
         {/* related search */}
         <div className='flex flex-col gap-3 md:gap-5 xl:gap-7 mb-3 xl:mb-5'>
            <h2 className='text-[14px] md:text-[16px] xl:text-[20px] font-semibold border-b-2 border-neutral-300 pb-2 relative after:content-[" "] after:absolute after:left-0 after:top-[28px] md:after:top-[31px] xl:after:top-[37px] after:w-40 after:h-[4px] after:rounded-2xl after:bg-[#ffb100]'>Related Searches</h2>
            <div className='flex flex-wrap gap-5 text-[#666] text-[14px] font-semibold'>
                <button className='cursor-pointer border border-[#999] px-3.5 py-1.5 rounded-3xl'>Body Sprays</button>
                <button className='cursor-pointer border border-[#999] px-3.5 py-1.5 rounded-3xl'>AXE</button>
                <button className='cursor-pointer border border-[#999] px-3.5 py-1.5 rounded-3xl'>AXE Apollo Deodorant</button>
            </div>
         </div>
         {/* customer question & answers */}
         <div className='flex flex-col gap-4 md:gap-5 xl:gap-7'>
            <h2 className='text-[14px] md:text-[16px] xl:text-[20px] font-semibold border-b-2 border-neutral-300 pb-2 relative after:content-[" "] after:absolute after:left-0 after:top-[28px] md:after:top-[31px] xl:after:top-[37px] after:w-40 after:h-[4px] after:rounded-2xl after:bg-[#ffb100]'>Customer Questions & Answers</h2>
            <ul className='flex flex-col gap-6'>
                {questions.map((qes)=>(
                <li key={qes.id} className='flex flex-col gap-2 text-[14px] border-b border-neutral-200 pb-4 last:border-0'>
                    <span>
                        <strong>Question : </strong>
                        <strong>{qes.question}</strong>
                    </span>
                    <span className='leading-5'><strong>Answer : </strong>{qes.answer}</span>
                </li>
                ))

                }
                
            </ul>
         </div>
         {/* Editorial Review */}
         <div className='flex flex-col gap-4 md:gap-5 xl:gap-7'>
            <h2 className='text-[14px] md:text-[16px] xl:text-[20px] font-semibold border-b-2 border-neutral-300 pb-2 relative after:content-[" "] after:absolute after:left-0 after:top-[28px] md:after:top-[31px] xl:after:top-[37px] after:w-40 after:h-[4px] after:rounded-2xl after:bg-[#ffb100]'>AXE Body Sprays Editorial Review</h2>
            <div className='flex gap-7 md:gap-10 xl:mx-6 md:py-7 md:px-4 xl:py-10 xl:px-6 overflow-x-scroll'>
                <div className='flex-shrink-0'><Image src="/images/review-img.jpg" alt='image' width={154} height={154}></Image></div>
                <div className='flex-shrink-0'><Image src="/images/review-img.jpg" alt='image' width={154} height={154}></Image></div>
                <div className='flex-shrink-0'><Image src="/images/review-img.jpg" alt='image' width={154} height={154}></Image></div>
                <div className='flex-shrink-0'><Image src="/images/review-img.jpg" alt='image' width={154} height={154}></Image></div>
                <div className='flex-shrink-0'><Image src="/images/review-img.jpg" alt='image' width={154} height={154}></Image></div>
                <div className='flex-shrink-0'><Image src="/images/review-img.jpg" alt='image' width={154} height={154}></Image></div>
                <div className='flex-shrink-0'><Image src="/images/review-img.jpg" alt='image' width={154} height={154}></Image></div>
                <div className='flex-shrink-0'><Image src="/images/review-img.jpg" alt='image' width={154} height={154}></Image></div>
            </div>
            <p className='text-[13px] xl:text-[14px]'>The AXE Apollo Body Spray Deodorant has received mixed reception from customers. Some enjoy the scent, describing it as "grate" and "his fave" for their grandson, while others find it to be "a defect product" or with a "scent [that] fades away fast." There is confusion about the product being a deodorant or body spray, with customer service explaining that it is a spray deodorant. Another customer has also pinpointed inConsistencies in the product description, stating that it was labeled as a deodorant but is categorized as body wash. Overall, the product is acknowledged for its good price and scent, but customer experiences with the effectiveness of the spray and the accuracy of the product description vary.</p>
         </div>
         {/* reviews & rating */}
         <div className='flex flex-col gap-4 md:gap-5 xl:gap-7'>
            <h2 className='text-[14px] md:text-[16px] xl:text-[20px] font-semibold border-b-2 border-neutral-300 pb-2 relative after:content-[" "] after:absolute after:left-0 after:top-[28px] md:after:top-[31px] xl:after:top-[37px] after:w-40 after:h-[4px] after:rounded-2xl after:bg-[#ffb100]'>Customer Reviews & Ratings</h2>
            <div className="bg-white flex flex-col lg:flex-row gap-6 xl:gap-8">   
                <div className="flex-1">
                    <h3 className="text-[14px] mb-4"><strong>3155</strong> customers ratings</h3>
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-4 text-[14px] font-semibold">
                            <div>5 Star</div>
                            <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-[#198754] rounded-full" style={{ width: '65%' }}></div>
                            </div>
                            <div>65%</div>
                        </div>
                        <div className="flex items-center gap-4 text-[14px] font-semibold">
                            <div>4 Star</div>
                            <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-[#198754] rounded-full" style={{ width: '20%' }}></div>
                            </div>
                            <div>20%</div>
                        </div>
                        <div className="flex items-center gap-4 text-[14px] font-semibold">
                            <div>3 Star</div>
                            <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-[#198754] rounded-full" style={{ width: '10%' }}></div>
                            </div>
                            <div>10%</div>
                        </div>
                        <div className="flex items-center gap-4 text-[14px] font-semibold">
                            <div>2 Star</div>
                            <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-[#198754] rounded-full" style={{ width: '3%' }}></div>
                            </div>
                            <div>3%</div>
                        </div>
                        <div className="flex items-center gap-4 text-[14px] font-semibold">
                            <div>1 Star</div>
                            <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-[#198754] rounded-full" style={{ width: '2%' }}></div>
                            </div>
                            <div>2%</div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 lg:pl-5 xl:pl-20">
                    <h3 className="text-[16px] xl:text-[18px] font-semibold mb-2 xl:mb-4 text-green-600">Pros</h3>
                    <div className="flex flex-col gap-2">
                        <span className='text-[14px]  xl:text-[20px] flex items-center gap-4'><FontAwesomeIcon icon={faThumbsUp} className=" text-green-500"/> <h4 >Good Price</h4>
                        </span>
                        <span className='text-[14px]  xl:text-[20px] flex items-center gap-4'><FontAwesomeIcon icon={faThumbsUp} className=" text-green-500"/> <h4 >Pleasant scent</h4>
                        </span>
                    </div>
                </div>

                <div className="flex-1">
                    <h3 className="text-[18px] font-semibold mb-2 xl:mb-4 text-red-600">Cons</h3>
                    <div className="flex flex-col gap-2">
                       <span className='text-[14px]  xl:text-[20px] flex gap-3'><FontAwesomeIcon icon={faThumbsDown} className=" text-red-500 mt-1"/><h4 >Confusion between deodorant and body spray</h4>
                        </span>
                        </div>
                </div>

            </div>
         </div>
         {/* write a review */}
         <div className='flex flex-col gap-2 xl:gap-5'>
            <h2 className='text-[14px] md:text-[16px] xl:text-[20px] font-semibold border-b-2 border-neutral-300 pb-2 relative after:content-[" "] after:absolute after:left-0 after:top-[28px] md:after:top-[31px] xl:after:top-[37px] after:w-40 after:h-[4px] after:rounded-2xl after:bg-[#ffb100]'>Review this product</h2>
            <p className='text-[14px] mt-4 text-[#666666]'>Share your thoughts with other customers</p>
            <button className='bg-[#ffb100] xl:mt-2 rounded-lg w-fit px-15 py-3 text-[14px] font-semibold cursor-pointer'>Write a review</button>
         </div>
         {/* product video */}
         <div className='flex flex-col gap-4'>
            <h2 className='text-[14px] md:text-[16px] xl:text-[20px] font-semibold border-b-2 border-neutral-300 pb-2 relative after:content-[" "] after:absolute after:left-0 after:top-[28px] md:after:top-[31px] xl:after:top-[37px] after:w-40 after:h-[4px] after:rounded-2xl after:bg-[#ffb100]'>Product Video</h2>        
            <div className='flex overflow-x-scroll gap-4 xl:mx-2'> 
                <video className='flex-shrink-0 w-[200px] h-auto my-2 rounded-lg'  controls src="blob:https://www.ubuy.co.in/9e8e5abc-7778-4771-a654-4b8c0b87d56e"></video>
                <video className='flex-shrink-0 w-[200px] h-auto my-2 rounded-lg'  controls src="blob:https://www.ubuy.co.in/9e8e5abc-7778-4771-a654-4b8c0b87d56e"></video>
                <video className='flex-shrink-0 w-[200px] h-auto my-2 rounded-lg'  controls src="blob:https://www.ubuy.co.in/9e8e5abc-7778-4771-a654-4b8c0b87d56e"></video>
                <video className='flex-shrink-0 w-[200px] h-auto my-2 rounded-lg'  controls src="blob:https://www.ubuy.co.in/9e8e5abc-7778-4771-a654-4b8c0b87d56e"></video>
                <video className='flex-shrink-0 w-[200px] h-auto my-2 rounded-lg'  controls src="blob:https://www.ubuy.co.in/9e8e5abc-7778-4771-a654-4b8c0b87d56e"></video>
                <video className='flex-shrink-0 w-[200px] h-auto my-2 rounded-lg'  controls src="blob:https://www.ubuy.co.in/9e8e5abc-7778-4771-a654-4b8c0b87d56e"></video>
                <video className='flex-shrink-0 w-[200px] h-auto my-2 rounded-lg'  controls src="blob:https://www.ubuy.co.in/9e8e5abc-7778-4771-a654-4b8c0b87d56e"></video>
                <video className='flex-shrink-0 w-[200px] h-auto my-2 rounded-lg'  controls src="blob:https://www.ubuy.co.in/9e8e5abc-7778-4771-a654-4b8c0b87d56e"></video>
            </div> 
         </div> 
         {/* Related Brands */}
         <div className='flex flex-col gap-5'>
            <h2 className='text-[14px] md:text-[16px] xl:text-[20px] font-semibold border-b-2 border-neutral-300 pb-2 relative after:content-[" "] after:absolute after:left-0 after:top-[28px] md:after:top-[31px] xl:after:top-[37px] after:w-40 after:h-[4px] after:rounded-2xl after:bg-[#ffb100]'>Related Brands</h2>
            <Swiper
                slidesPerView="auto"
                spaceBetween={10}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}                
                modules={[Autoplay]}
                className='w-full overflow-x-auto'
                >
                    {relatedBrands.map((brand)=>(
                        <SwiperSlide key={brand.id} style={{ width: 'fit-content' }}>
                            <button className="border border-[#999] text-[14px] xl:text-[16px] px-4 py-1.5 rounded-3xl">
                            {brand.name}
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
         </div>       
         {/* Top selling AXE */}
         <div className='flex flex-col gap-5'>
            <h2 className='text-[14px] md:text-[16px] xl:text-[20px] font-semibold border-b-2 border-neutral-300 pb-2 relative after:content-[" "] after:absolute after:left-0 after:top-[28px] md:after:top-[31px] xl:after:top-[37px] 2xl:after:top-[36px] after:w-40 after:h-[4px] after:rounded-2xl after:bg-[#ffb100]'>
                Top Selling AXE
            </h2>

            <table className='w-full 2xl:w-[85%] shadow-xl'>
                
                <thead className='w-full table-header-group'>
                    <tr className='bg-[#e5e5e5]'>
                        <th className='hidden xl:table-cell px-4 py-2 text-[14px] font-semibold text-center'>Product Image</th>
                        <th className='hidden xl:table-cell px-4 py-2 text-[14px] font-semibold text-left w-fit'>Product Name</th>
                        <th className='hidden xl:table-cell px-4 py-2 text-[14px] font-semibold text-left'>Brand</th>
                        <th className='hidden xl:table-cell'></th>

                        {/* for mobiel responsive */}
                        <th className='table-cell xl:hidden px-4 py-2 lg:py-4 text-[14px] lg:text-[16px] font-semibold text-center'>Product Image</th>
                        <th className='table-cell xl:hidden px-4 py-2 lg:py-4 text-[14px] lg:text-[16px] font-semibold text-left'>Product Details</th>
                    </tr>
                </thead>

                <colgroup>
                    <col className='w-[40%] md:w-[20%] xl:w-[15%]' />
                    <col className='w-full xl:w-[65%]' />
                    <col className='w-full xl:w-[10%]' />
                    <col className='w-full xl:w-[8%]' />
                </colgroup>

                <tbody className=''>
                    {topSelling.map((item) => (

                        <tr key={item.id} className='border-b border-neutral-300 bg-[#f6f6f6] hover:bg-[#fff6e5]'>
                            
                        <td className='px-4 py-3 align-top xl:align-middle'>
                            <Image className='mx-auto' src={item.img} alt='image' width={60} height={60}/>
                        </td>

                        <td className='hidden xl:table-cell px-4 py-3 text-[14px] w-fit hover:text-[#ffb100] hover:underline'>{item.title}</td>
                        <td className='hidden xl:table-cell px-4 py-3 text-[12px] font-semibold'>{item.brand}</td>
                        <td className='hidden xl:table-cell px-2'>
                            <button className='bg-[#ffb100] cursor-pointer px-4 py-1 font-semibold text-[13px] rounded-sm'>VISIT</button>
                        </td>

                            {/* for mobile reponsive */}
                        <td className='table-cell xl:hidden px-4 py-3 text-left'>
                            <div className='flex flex-col gap-1'>
                            <p className='text-[13px] font-semibold hover:text-[#ffb100] hover:underline'>{item.title}</p>
                            <p className='text-[12px] font-medium'>{item.brand}</p>
                            <button className='bg-[#ffb100] cursor-pointer px-4 py-1 font-semibold text-[12px] rounded-sm w-fit'>VISIT</button>
                            </div>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Productcontent
   