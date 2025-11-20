"use client";
import { useState } from "react";
import {  MapPin, Info,  ChevronDown ,ChevronRight, Eye, EyeOff, X, Check  } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FaHome } from "react-icons/fa";
import Image from "next/image";
import PaymentsideBlock from "./PaymentsideBlock";
import GrandTotal from "./GrandTotal";
import {FaPencilAlt}  from "react-icons/fa";
const ShippingForm = () => {

const [shipAddress,setShipAddress] = useState("open")
const [shipMethod,setShipMethod] = useState("block")
const [paymentMethod,setPaymentMethod] = useState("block")
const [continueToPay,setContinueToPay] = useState("block")


const [state, setState] = useState("Please Select"); 
const [stOpen, setStOpen] = useState(false); 

const [addOpen, setAddOpen] = useState(false);
const [addressType, setAddressType]= useState("Home")

const [passBlocksOpen,setPassBlocksOpen] = useState(false)
const [showeye, setShowEye] = useState(false);
const [confirmShowEye, setConfirmShowEye] = useState(false);

const [selected,setSelected] = useState("express")
const [shippingOpen,setShippingOpen] = useState(false)
const [paymentOpen,setPaymentOpen] = useState(false)
const [paymentOption,setPaymentOption] = useState ("paypal")

const [fname, setFname] = useState("")
const [telNumber, setTelNumber] = useState("")
const [email, setEmail] = useState("")
const [zipCode, setZipCode] = useState("")
const [distric, setDistric] = useState("")
const [address, setAddress] = useState("")
const [locality, setLocality] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")

const [errors, setErrors] = useState({});

const[formOpenMobile, setFormOpenMobile] = useState(false)

const states =  [
    { id: 1, name: "Andhra Pradesh" },
    { id: 2, name: "Arunachal Pradesh" },
    { id: 3, name: "Assam" },
    { id: 4, name: "Bihar" },
    { id: 5, name: "Chhattisgarh" },
    { id: 6, name: "Goa" },
    { id: 7, name: "Gujarat" },
    { id: 8, name: "Haryana" },
    { id: 9, name: "Himachal Pradesh" },
    { id: 10, name: "Jharkhand" },
    { id: 11, name: "Karnataka" },
    { id: 12, name: "Kerala" },
    { id: 13, name: "Madhya Pradesh" },
    { id: 14, name: "Maharashtra" },
    { id: 15, name: "Manipur" },
    { id: 16, name: "Meghalaya" },
    { id: 17, name: "Mizoram" },
    { id: 18, name: "Nagaland" },
    { id: 19, name: "Odisha" },
    { id: 20, name: "Punjab" },
    { id: 21, name: "Rajasthan" },
    { id: 22, name: "Sikkim" },
    { id: 23, name: "Tamil Nadu" },
    { id: 24, name: "Telangana" },
    { id: 25, name: "Tripura" },
    { id: 26, name: "Uttar Pradesh" },
    { id: 27, name: "Uttarakhand" },
    { id: 28, name: "West Bengal" }
    ];
    const handelState = (value)=>{
        setState(value);
        setStOpen(false)
    }

     const handelshipMethod =()=>{
        setShipAddress("complete")
        setShipMethod("open")
    }
     const handelpaymentMethod =()=>{
        setShipMethod("complete")
        setPaymentMethod("open")
    }
     const handelcontinueToPay =()=>{
        setPaymentMethod("complete")
        setContinueToPay("open")
    }

    const handelFname = (e)=>{
         setFname(e.target.value)   
    }
    const handelTelNumber = (e)=>{
         setTelNumber(e.target.value)   
    }
    const handelEmail = (e)=>{
         setEmail(e.target.value)   
    }
    const handelZipCode = (e)=>{
         setZipCode(e.target.value)   
    }
    const handelDistric = (e)=>{
         setDistric(e.target.value)   
    }
    const handelAddress = (e)=>{
         setAddress(e.target.value)   
    }
    const handelLocality = (e)=>{
         setLocality(e.target.value)   
    }
    const handelPassword = (e)=>{
         setPassword(e.target.value)   
    }
    const handelConfirmPassword = (e)=>{
         setConfirmPassword(e.target.value)   
    }

    const handelForm = () => {
    
    const newErrors = {};

    if (!fname.trim()) newErrors.fname = "Please enter your full name.";
    else if (!/^[A-Za-z ]+$/.test(fname))
      newErrors.fname = "Name should contain only letters.";

    if (!telNumber.trim()) newErrors.telNumber = "Please enter phone number.";
    else if (!/^[6-9]\d{9}$/.test(telNumber))
      newErrors.telNumber = "Enter a valid 10-digit Indian mobile number.";

    if (!email.trim()) newErrors.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email address.";

    if (!password.trim()) newErrors.password = "Please enter your password.";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    if (!zipCode.trim()) newErrors.zipCode = "Please enter your ZIP code.";
    else if (!/^\d{6}$/.test(zipCode))
      newErrors.zipCode = "ZIP code must be 6 digits.";

    if (!distric.trim()) newErrors.distric = "Please enter your district.";
    if (!address.trim()) newErrors.address = "Please enter your address.";
    if (!locality.trim()) newErrors.locality = "Please enter your locality.";
    if (state === "Please Select") newErrors.state = "Please select your state.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTimeout(() => setErrors({}), 4000);
      return;
    }


    setErrors({});
    setFname("");
    setTelNumber("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setZipCode("");
    setDistric("");
    setAddress("");
    setLocality("");
    setState("Please Select");
    setAddressType("Home");

    alert("Details Saved successfully!");
  };

  return (
     <div className="flex justify-center bg-[#f5f6f7] pb-20">
            <div className="max-w-[2050px] w-full flex justify-center">
                <div className="flex flex-col items-center w-full gap-4 xl:gap-8 mt-10">
                    {/* breadcrumb bar top */}
                    <div className="bg-white xl:bg-transparent w-full xl:w-[87%] 2xl:w-[74%] px-7 md:px-20 lg:px-35 py-5 xl:p-0 flex  xl:justify-start items-center justify-between xl:gap-5 text-[14px]">
                        <div onClick={()=>setShipAddress("open")} className="sm:flex items-center gap-1 xl:gap-2 cp">
                            <div className={`mx-auto sm:m-0 w-7 h-7 xl:w-6 xl:h-6 rounded-full flex items-center justify-center shadow-md text-white ${shipAddress === "block" ? ("bg-[#ccc]") : shipAddress ==="open" ? "bg-[#ffb100]":"bg-[#188136]" }`}>
                                { shipAddress ==="complete" ? <Check className="w-4 h-4" strokeWidth={3}/> : 1}
                            </div>
                            <h3 className={`text-[12px] xl:text-[14px] font-medium ${shipAddress === "block" ? "text-[#ccc]" : shipAddress ==="open"? "text-black":"text-[#188136]" }`}><span className="hidden xl:inline">Shipping</span> Address</h3>
                        </div>

                        <div className={`hidden xl:block w-15 h-[1px] ${shipAddress === "complete" ? "bg-[#188136]" : "bg-[#ccc]"}`}></div>

                        <div onClick={handelshipMethod} className="sm:flex items-center gap-1 xl:gap-2 cp">
                            <div className={`mx-auto sm:m-0 w-7 h-7 xl:w-6 xl:h-6 rounded-full flex items-center justify-center shadow-md text-white ${shipMethod === "block" ? ("bg-[#ccc]") : shipMethod ==="open" ? "bg-[#ffb100]":"bg-[#188136]" }`}>
                                { shipMethod ==="complete" ? <Check className="w-4 h-4" strokeWidth={3}/> : 2}
                            </div>
                            <h3 className={`text-[12px] xl:text-[14px] font-medium ${shipMethod === "block" ? "text-[#ccc]" : shipMethod ==="open"? "text-black":"text-[#188136]" }`}>Shipping Method</h3>
                        </div>

                        <div className={`hidden xl:block w-15 h-[1px] ${shipMethod === "complete" ? "bg-[#188136]" : "bg-[#ccc]"}`}></div>


                        <div onClick={handelpaymentMethod} className="sm:flex items-center gap-1 xl:gap-2 cp">
                            <div className={`mx-auto sm:m-0 w-7 h-7 xl:w-6 xl:h-6 rounded-full flex items-center justify-center shadow-md text-white ${paymentMethod === "block" ? ("bg-[#ccc]") : paymentMethod ==="open" ? "bg-[#ffb100]":"bg-[#188136]" }`}>
                                { paymentMethod ==="complete" ? <Check className="w-4 h-4" strokeWidth={3}/> : 3}
                            </div>
                            <h3 className={`text-[12px] xl:text-[14px] font-medium ${paymentMethod === "block" ? "text-[#ccc]" : paymentMethod ==="open"? "text-black":"text-[#188136]" }`}>Payment <span className="hidden xl:inline">Method</span></h3>
                        </div>

                        <div className={`hidden xl:block w-15 h-[1px] ${paymentMethod === "complete" ? "bg-[#188136]" : "bg-[#ccc]"}`}></div>


                        <div onClick={handelcontinueToPay} className="hidden xl:flex items-center gap-1 xl:gap-2 cp">
                            {/* <div className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md text-white ${continueToPay === "block" ? ("bg-[#ccc]") : continueToPay ==="open" ? "bg-[#ffb100]":"bg-[#188136]" }`}>
                                { continueToPay ==="complete" ? <Check className="w-4 h-4" strokeWidth={3}/> : null}
                            </div> */}
                            <h3 className={`text-[12px] xl:text-[14px] font-medium ${continueToPay === "block" ? "text-[#ccc]" : continueToPay ==="open"? "text-black":"text-[#188136]" }`}>Continue To Pay</h3>
                        </div>
                    </div>
                    {/* bottom */}
                    <div className="flex flex-col xl:flex-row justify-center w-[95%] xl:w-[93%] 2xl:w-[80%] gap-5 xl:gap-10">
                        {/* left */}
                        <div className="xl:w-[60%] order-2 xl:order-1 flex flex-col gap-5">
                            {/* shipping Form for mobile */}
                            <div className="block xl:hidden relative border-t border-neutral-100">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-[12px] md:text-[16px]">Shipping Address</h3>
                                    <button onClick={()=>setFormOpenMobile(true)}  className="bg-amber-400 p-1 rounded-sm"><FaPencilAlt className='2xl:text-[16px] text-[12px] cursor-pointer' color="white" /></button>            
                                </div>
                                <div className="bg-white shadow-sm p-4 mt-2">
                                    <div className="flex gap-4 items-center cp">
                                        <div className="border-1 p-2 flex items-center border-neutral-200"><FontAwesomeIcon icon={faHome} style={{ color: "gray", fontSize: "22px" }} /></div>
                                         <div>
                                             <h4 className="text-[13px]">Your Name</h4>   
                                             <h4 className="text-[13px]">Address 45/123 sanganer Jaipur Rajasthan</h4>   
                                         </div>
                                    </div>            
                                </div>
                                {/* form */}
                                <div className={`fixed inset-0 w-full h-full bg-[#f5f6f7] z-50 transform transition-transform duration-400 ease-in-out ${formOpenMobile ? "translate-x-0" : "translate-x-full"}`}>
                                    {/* form div*/}
                                    <div className="flex flex-col h-full overflow-hidden">
                                        <div className="bg-white flex justify-between items-center py-3 px-4 border-b">
                                            <h2 className="text-[16px] font-medium">Shipping Address</h2>
                                            <button
                                            onClick={() => setFormOpenMobile(false)}
                                            className="rounded-full hover:bg-gray-100"
                                            >
                                            <X className="w-4 h-4 text-gray-700" />
                                            </button>
                                        </div>
                                     
                                        <div className="flex-1 overflow-y-auto py-2">
                                            <div className="bg-white md:mt-2 p-2 flex-col justify-center items-center">
                                                <div className="flex justify-center gap-2">
                                                    <MapPin fill="#fbb100" className="w-5 h-5 text-white" />
                                                    <h5 className="text-[14px] font-medium">India</h5>
                                                </div>
                                                <p className="text-[#73AC75] mt-2 md:mt-4 font-medium rounded-md p-2 text-[12px]">Name & address should be as per KYC documents. For more information, please click here</p>
                                            </div>
                                            <div className="bg-white pt-2 p-4 flex flex-col gap-6">
                                                <div className="relative flex flex-col text-[13px] gap-2">
                                                    <label className="">Full Name *</label>
                                                    <div className="bg-[#f5f6f7] border border-neutral-200 p-3 rounded-md">
                                                        <input type="text" className="w-full outline-none" value={fname} onChange={handelFname}></input>
                                                    </div>
                                                    {errors.fname && <p className="text-[12px] text-white rounded-md p-1 w-fit bg-red-500 text-sm transition-all duration-300 ease-in-out animate-fadeSlide absolute left-6 top-19 z-1">{errors.fname}</p>}
                                                </div>
                                                <div className="relative flex flex-col text-[13px] gap-2">
                                                    <label className="">Telephone/Mobile *</label>
                                                    <div  className="flex bg-[#f5f6f7] border outline-none border-neutral-200  rounded-md">
                                                        <span className="bg-white p-3 text-[13px] text-center content-center">+91</span>
                                                        <input type="text"  className="w-full outline-none p-3" value={telNumber} onChange={handelTelNumber}></input>
                                                    </div>
                                                    {errors.telNumber && <p className="text-[12px] text-white rounded-md p-1 w-fit bg-red-500 text-sm transition-all duration-300 ease-in-out animate-fadeSlide absolute left-6 top-19 z-1">{errors.telNumber}</p>}
                                                </div>
                                                <div className="relative flex flex-col text-[13px] gap-2">
                                                    <label className="">Email Address *</label>
                                                    <div className="bg-[#f5f6f7] border outline-none border-neutral-200 p-3 rounded-md">
                                                        <input type="email"  className="w-full outline-none" value={email} onChange={handelEmail} ></input> 
                                                    </div>
                                                    {errors.email && <p className="text-[12px] text-white rounded-md p-1 w-fit bg-red-500 text-sm transition-all duration-300 ease-in-out animate-fadeSlide absolute left-6 top-19 z-1">{errors.email}</p>}
                                                </div>
                                                <div className="relative flex flex-col text-[13px] gap-2">
                                                    <label className="">State *</label>
                                                    <div onClick={()=>setStOpen(!stOpen)} className="cp flex justify-between bg-[#f5f6f7] border outline-none border-neutral-200 p-3 rounded-md">
                                                        <h5>{state}</h5>
                                                        <ChevronDown className="w-4 h-4 text-gray-600" />
                                                    </div>
                                                    {errors.state && <p className="text-[12px] text-white rounded-md p-1 w-fit bg-red-500 text-sm transition-all duration-300 ease-in-out animate-fadeSlide absolute left-6 top-19 z-1">{errors.state}</p>}
                                                    { stOpen && ( <ul className="z-20 absolute w-full top-2/2 h-[600px] overflow-auto bg-white border-1 border-neutral-800">
                                                        {states.map((st,i)=>(
                                                            <li key={st.id} onClick={()=>handelState(st.name)} className="py-2 px-4 hover:bg-blue-500 hover:text-white">{st.name}</li>
                                                        ))}
                                                    </ul>)}   
                                                </div>
                                                <div className="relative flex flex-col text-[13px] gap-2">
                                                    <label className="">Zip/Postal Code *</label>
                                                    <div className="bg-[#f5f6f7] border outline-none border-neutral-200 p-3 rounded-md">
                                                        <input type="text"  className="w-full outline-none" value={zipCode} onChange={handelZipCode}></input>
                                                    </div>
                                                    {errors.zipCode && <p className="text-[12px] text-white rounded-md p-1 w-fit bg-red-500 text-sm transition-all duration-300 ease-in-out animate-fadeSlide absolute left-6 top-19 z-1">{errors.zipCode}</p>}
                                                </div>
                                                <div className="relative flex flex-col text-[13px] gap-2">
                                                    <label className="">District *</label>
                                                    <div className="bg-[#f5f6f7] border outline-none border-neutral-200 p-3 rounded-md">
                                                        <input type="text" className="w-full outline-none" value={distric} onChange={handelDistric}></input>
                                                    </div>
                                                    {errors.distric && <p className="text-[12px] text-white rounded-md p-1 w-fit bg-red-500 text-sm transition-all duration-300 ease-in-out animate-fadeSlide absolute left-6 top-19 z-1">{errors.distric}</p>}
                                                </div>
                                                <div className="relative flex flex-col text-[13px] gap-2">
                                                    <label className="">Flat / House No. /Floor / Building *</label>
                                                    <div className="bg-[#f5f6f7] border outline-none border-neutral-200 p-3 rounded-md">
                                                        <input type="text" className="w-full outline-none" value={address} onChange={handelAddress} ></input>
                                                    </div>
                                                    {errors.address && <p className="text-[12px] text-white rounded-md p-1 w-fit bg-red-500 text-sm transition-all duration-300 ease-in-out animate-fadeSlide absolute left-6 top-19 z-1">{errors.address}</p>}
                                                </div>
                                                <div className="relative flex flex-col text-[13px] gap-2">
                                                    <label className="">Colony /Street /Locality *</label>
                                                    <div className="bg-[#f5f6f7] border outline-none border-neutral-200 p-3 rounded-md">
                                                        <input type="text" className="w-full outline-none" value={locality} onChange={handelLocality}></input>
                                                    </div>
                                                    {errors.locality && <p className="text-[12px] text-white rounded-md p-1 w-fit bg-red-500 text-sm transition-all duration-300 ease-in-out animate-fadeSlide absolute left-6 top-19 z-1">{errors.locality}</p>}
                                                </div>
                                                <div className="relative flex text-[13px] flex-col gap-2">
                                                    <label className="">Address Type</label>
                                                    <div onClick={()=>setAddOpen(!addOpen)} className="flex p-3 justify-between items-center bg-[#f5f6f7] border outline-none border-neutral-200 rounded-md">
                                                        <h5>{addressType}</h5>
                                                        <ChevronDown className="w-4 h-4 text-gray-600" />
                                                        {addOpen && (<ul className="absolute w-full left-0 top-2/2 h-fit bg-white border-1 border-neutral-800">
                                                            <li onClick={()=>setAddressType("Home")}  className="py-2 px-4 hover:bg-blue-500 hover:text-white">Home</li>
                                                            <li onClick={()=>setAddressType("Office")} className="py-2 px-4 hover:bg-blue-500 hover:text-white">Office</li>
                                                        </ul>) }
                                                    </div>
                                                    {errors.state && <p className="text-[12px] text-white rounded-md p-1 w-fit bg-red-500 text-sm transition-all duration-300 ease-in-out animate-fadeSlide absolute left-6 top-19 z-1">{errors.state}</p>}
                                                </div>
                                                {passBlocksOpen && (<div className="relative flex flex-col text-[13px] gap-2">
                                                    <label className="">Password*</label>
                                                    <div className="flex bg-[#f5f6f7] border outline-none border-neutral-200 p-3 rounded-md">
                                                        <input type={showeye ?"text" : "password"} className="w-full outline-none" value={password} onChange={handelPassword} ></input>
                                                        <div className="flex justify-center cp" onClick={()=>setShowEye(!showeye)} >
                                                            {showeye ? <EyeOff size={18} /> : <Eye size={18} />}
                                                        </div>
                                                    </div>
                                                    {errors.password && <p className="text-[12px] text-white rounded-md p-1 w-fit bg-red-500 text-sm transition-all duration-300 ease-in-out animate-fadeSlide absolute left-6 top-19 z-1">{errors.password}</p>}
                                                </div>)}
                                                {passBlocksOpen && (<div className="relative flex flex-col text-[13px] gap-2">
                                                    <label className="">Confirm Password*</label>
                                                    <div className="flex bg-[#f5f6f7] border outline-none border-neutral-200 p-3 rounded-md">
                                                        <input type={confirmShowEye ?"text" : "password"} className="w-full outline-none" value={confirmPassword} onChange={handelConfirmPassword} ></input>
                                                        <div className="flex justify-center cp" onClick={()=>setConfirmShowEye(!confirmShowEye)} >
                                                            {confirmShowEye ? <EyeOff size={18} /> : <Eye size={18} />}
                                                        </div>
                                                    </div>
                                                    {errors.confirmPassword && (<p className="text-[12px] text-white rounded-md p-1 w-fit bg-red-500 text-sm transition-all duration-300 ease-in-out animate-fadeSlide absolute left-6 top-19 z-1">{errors.confirmPassword}</p>)}
                                                </div>)}
                                                <div className="flex items-center gap-3 mt-4"> 
                                                    <input className="cp" onClick={()=>setPassBlocksOpen(!passBlocksOpen)} type="checkbox"></input>
                                                    <h6 className="text-[13px] mt-[1px]">Create an account for later use.</h6>
                                                </div>
                                            </div> 
                                        </div>    
                                        {/* Fixed Button */}
                                        <div className="flex-shrink-0 bg-white border-t border-neutral-200 p-3 shadow-md">
                                                <button
                                                    onClick={handelForm}
                                                    className="bg-[#ffb100] w-full text-black text-[14px] py-3 rounded-md font-medium"
                                                >
                                                    Save Address & Continue
                                                </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* shipping Form for desktop*/}
                            <div className="py-2 hidden xl:block bg-white shadow-sm">
                                <div className="flex items-center justify-between mb-2 px-4 py-2">
                                    <h3 className="text-[15px]">Shipping Address</h3>
                                    <p className="text-[13px]">Existing customer?<span> login</span></p>
                                </div>
                                {shipAddress !== "complete" && (<div className="border-t border-neutral-100 p-4 flex flex-col gap-5">
                                    <div className="flex justify-between items-center">
                                        <p className="text-[#73AC75] border border-[#73AC75] font-medium rounded-md p-2 text-[12px]">Name & address should be as per KYC documents. For more information, please click here</p>
                                        <div className="flex items-center gap-2">
                                            <MapPin fill="#fbb100" className="w-5 h-5 text-white" />
                                            <h5 className="text-[16px]">India</h5>
                                        </div>
                                    </div>
                                    <div className="relative grid grid-cols-3 gap-x-5 gap-y-7">
                                        <div className="relative flex flex-col text-[13px] gap-2">
                                            <label className="">Full Name *</label>
                                            <div className="bg-[#f5f6f7] border border-neutral-200 p-3 rounded-md">
                                                <input type="text" className="w-full outline-none" value={fname} onChange={handelFname}></input>
                                            </div>
                                            {errors.fname && <p className="text-[12px] text-white rounded-md p-1 w-fit bg-red-500 text-sm transition-all duration-300 ease-in-out animate-fadeSlide absolute left-6 top-19 z-1">{errors.fname}</p>}
                                        </div>
                                        <div className="relative flex flex-col text-[13px] gap-2">
                                            <label className="">Telephone/Mobile *</label>
                                            <div  className="flex bg-[#f5f6f7] border outline-none border-neutral-200  rounded-md">
                                                <span className="bg-white p-3 text-[13px] text-center content-center">+91</span>
                                                <input type="text"  className="w-full outline-none p-3" value={telNumber} onChange={handelTelNumber}></input>
                                            </div>
                                            {errors.telNumber && <p className="text-[12px] text-white rounded-md p-1 w-fit bg-red-500 text-sm transition-all duration-300 ease-in-out animate-fadeSlide absolute left-6 top-19 z-1">{errors.telNumber}</p>}
                                        </div>
                                        <div className="relative flex flex-col text-[13px] gap-2">
                                            <label className="">Email Address *</label>
                                            <div className="bg-[#f5f6f7] border outline-none border-neutral-200 p-3 rounded-md">
                                                <input type="email"  className="w-full outline-none" value={email} onChange={handelEmail} ></input> 
                                            </div>
                                            {errors.email && <p className="text-[12px] text-white rounded-md p-1 w-fit bg-red-500 text-sm transition-all duration-300 ease-in-out animate-fadeSlide absolute left-6 top-19 z-1">{errors.email}</p>}
                                        </div>
                                        <div className="relative flex flex-col text-[13px] gap-2">
                                            <label className="">State *</label>
                                            <div onClick={()=>setStOpen(!stOpen)} className="cp flex justify-between bg-[#f5f6f7] border outline-none border-neutral-200 p-3 rounded-md">
                                                <h5>{state}</h5>
                                                <ChevronDown className="w-4 h-4 text-gray-600" />
                                            </div>
                                            {errors.state && <p className="text-[12px] text-white rounded-md p-1 w-fit bg-red-500 text-sm transition-all duration-300 ease-in-out animate-fadeSlide absolute left-6 top-19 z-1">{errors.state}</p>}
                                            { stOpen && ( <ul className="z-20 absolute w-full top-2/2 h-[600px] overflow-auto bg-white border-1 border-neutral-800">
                                                {states.map((st,i)=>(
                                                    <li key={st.id} onClick={()=>handelState(st.name)} className="py-2 px-4 hover:bg-blue-500 hover:text-white">{st.name}</li>
                                                ))}
                                            </ul>)}   
                                        </div>
                                        <div className="relative flex flex-col text-[13px] gap-2">
                                            <label className="">Zip/Postal Code *</label>
                                            <div className="bg-[#f5f6f7] border outline-none border-neutral-200 p-3 rounded-md">
                                                <input type="text"  className="w-full outline-none" value={zipCode} onChange={handelZipCode}></input>
                                            </div>
                                            {errors.zipCode && <p className="text-[12px] text-white rounded-md p-1 w-fit bg-red-500 text-sm transition-all duration-300 ease-in-out animate-fadeSlide absolute left-6 top-19 z-1">{errors.zipCode}</p>}
                                        </div>
                                        <div className="relative flex flex-col text-[13px] gap-2">
                                            <label className="">District *</label>
                                            <div className="bg-[#f5f6f7] border outline-none border-neutral-200 p-3 rounded-md">
                                                <input type="text" className="w-full outline-none" value={distric} onChange={handelDistric}></input>
                                            </div>
                                            {errors.distric && <p className="text-[12px] text-white rounded-md p-1 w-fit bg-red-500 text-sm transition-all duration-300 ease-in-out animate-fadeSlide absolute left-6 top-19 z-1">{errors.distric}</p>}
                                        </div>
                                        <div className="relative flex flex-col text-[13px] gap-2">
                                            <label className="">Flat / House No. /Floor / Building *</label>
                                            <div className="bg-[#f5f6f7] border outline-none border-neutral-200 p-3 rounded-md">
                                                <input type="text" className="w-full outline-none" value={address} onChange={handelAddress} ></input>
                                            </div>
                                            {errors.address && <p className="text-[12px] text-white rounded-md p-1 w-fit bg-red-500 text-sm transition-all duration-300 ease-in-out animate-fadeSlide absolute left-6 top-19 z-1">{errors.address}</p>}
                                        </div>
                                        <div className="relative flex flex-col text-[13px] gap-2">
                                            <label className="">Colony /Street /Locality *</label>
                                            <div className="bg-[#f5f6f7] border outline-none border-neutral-200 p-3 rounded-md">
                                                <input type="text" className="w-full outline-none" value={locality} onChange={handelLocality}></input>
                                            </div>
                                            {errors.locality && <p className="text-[12px] text-white rounded-md p-1 w-fit bg-red-500 text-sm transition-all duration-300 ease-in-out animate-fadeSlide absolute left-6 top-19 z-1">{errors.locality}</p>}
                                        </div>
                                        <div className="relative flex text-[13px] flex-col gap-2">
                                            <label className="">Address Type</label>
                                            <div onClick={()=>setAddOpen(!addOpen)} className="flex p-3 justify-between items-center bg-[#f5f6f7] border outline-none border-neutral-200 rounded-md">
                                                <h5>{addressType}</h5>
                                                <ChevronDown className="w-4 h-4 text-gray-600" />
                                                {addOpen && (<ul className="absolute w-full left-0 top-2/2 h-fit bg-white border-1 border-neutral-800">
                                                    <li onClick={()=>setAddressType("Home")}  className="py-2 px-4 hover:bg-blue-500 hover:text-white">Home</li>
                                                    <li onClick={()=>setAddressType("Office")} className="py-2 px-4 hover:bg-blue-500 hover:text-white">Office</li>
                                                </ul>) }
                                            </div>
                                            {errors.state && <p className="text-[12px] text-white rounded-md p-1 w-fit bg-red-500 text-sm transition-all duration-300 ease-in-out animate-fadeSlide absolute left-6 top-19 z-1">{errors.state}</p>}
                                        </div>
                                        {passBlocksOpen && (<div className="relative flex flex-col text-[13px] gap-2">
                                            <label className="">Password*</label>
                                            <div className="flex bg-[#f5f6f7] border outline-none border-neutral-200 p-3 rounded-md">
                                                <input type={showeye ?"text" : "password"} className="w-full outline-none" value={password} onChange={handelPassword} ></input>
                                                <div className="flex justify-center cp" onClick={()=>setShowEye(!showeye)} >
                                                    {showeye ? <EyeOff size={18} /> : <Eye size={18} />}
                                                </div>
                                            </div>
                                            {errors.password && <p className="text-[12px] text-white rounded-md p-1 w-fit bg-red-500 text-sm transition-all duration-300 ease-in-out animate-fadeSlide absolute left-6 top-19 z-1">{errors.password}</p>}
                                        </div>)}
                                        {passBlocksOpen && (<div className="relative flex flex-col text-[13px] gap-2">
                                            <label className="">Confirm Password*</label>
                                            <div className="flex bg-[#f5f6f7] border outline-none border-neutral-200 p-3 rounded-md">
                                                <input type={confirmShowEye ?"text" : "password"} className="w-full outline-none" value={confirmPassword} onChange={handelConfirmPassword} ></input>
                                                <div className="flex justify-center cp" onClick={()=>setConfirmShowEye(!confirmShowEye)} >
                                                    {confirmShowEye ? <EyeOff size={18} /> : <Eye size={18} />}
                                                </div>
                                            </div>
                                            {errors.confirmPassword && (<p className="text-[12px] text-white rounded-md p-1 w-fit bg-red-500 text-sm transition-all duration-300 ease-in-out animate-fadeSlide absolute left-6 top-19 z-1">{errors.confirmPassword}</p>)}
                                        </div>)}
                                    </div>
                                    <div className="flex items-center gap-3 mt-4"> 
                                            <input className="cp" onClick={()=>setPassBlocksOpen(!passBlocksOpen)} type="checkbox"></input>
                                            <h6 className="text-[13px] mt-[1px]">Create an account for later use.</h6>
                                    </div>
                                    <div>
                                        <button onClick={handelForm} className="bg-[#ffb100] text-black text-[14px] py-2 px-4 rounded-md cp">Save Address & Continue</button>
                                    </div>
                                </div>)}
                               {shipAddress === "complete" && (<div className="border-t border-neutral-100 p-4 flex flex-col gap-2">
                                    <h1 className="text-[13px]">Your Name</h1>
                                    <p className="text-[14px] text-neutral-700">Your address like 11/22 Jaipur, Rajasthan, India</p>
                                </div>)}
                            </div>
                            
                            {/* shipping Method */}
                            <div className={`${shipMethod==="block" ? "opacity-50 pointer-events-none cursor-not-allowed" : null }`}>
                                <div onClick={()=>setShippingOpen(!shippingOpen)} className="relative z-10 p-4 flex justify-between text-[12px] sm:text-[16px] font-medium bg-white shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <h3>Shipping Method</h3>
                                        <Info fill="#ababab" className="w-6 h-6 text-white" />
                                    </div>
                                    <div className={`transition-transform duration-300 ${shippingOpen ? "rotate-90" : ""}`}>
                                        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-neutral-400" />
                                    </div>       
                                </div>
                                {shippingOpen && (<div className="p-4 bg-white">
                                    <div onClick={()=>setSelected("express")} className="cp flex justify-between items-center">
                                        <div className="flex items-start gap-2">
                                            <div className="mt-0.5 w-4 h-4 border-1 rounded-full  border-amber-500 flex justify-center items-center">
                                                {selected === "express" && (<div className="w-2 h-2 rounded-full bg-amber-500"></div>)}
                                            </div>
                                            <label className="text-[13px]" >Express Shipping <br/>
                                                <p>(3-6 Business days)<br/>Customs delay might occur</p>
                                            </label>
                                        </div>  
                                        <span className="text-[13px]">INR 3,060.00</span> 
                                    </div>
                                    <div onClick={()=>setSelected("standard")} className="cp mt-4 flex justify-between items-center">
                                        <div className="flex items-start gap-2">
                                            <div className="mt-0.5 w-4 h-4 border-1 rounded-full  border-amber-500 flex justify-center items-center">
                                                 {selected === "standard" && (<div className="w-2 h-2 rounded-full bg-amber-500"></div>)}
                                            </div>
                                            <label className="text-[13px]" >Standard Shipping<br/>
                                                <p>(5-9 Business days)<br/>Customs delay might occur</p>
                                            </label>
                                        </div>  
                                        <span className="text-[13px]">INR 2,160.00</span> 
                                    </div>      
                                </div>)}
                            </div>            
                            {/* paymentMethod */}
                             <div className={`${paymentMethod==="block" ? "opacity-50 pointer-events-none cursor-not-allowed" : null }`}>
                                <div onClick={()=>setPaymentOpen(!paymentOpen)} className="relative z-10 p-4 flex justify-between text-[12px] sm:text-[16px] font-medium bg-white shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <h3>Payment Method</h3>
                                    </div>
                                    <div className={`transition-transform duration-300 ${paymentOpen ? "rotate-90" : ""}`}>
                                        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-neutral-400" />
                                    </div>       
                                </div>
                                {paymentOpen && (<div className="p-4 flex flex-col gap-5 bg-white">
                                    <div className="border-b pb-4 border-neutral-100">
                                        <div className="flex gap-3 items-center cp" onClick={()=>setPaymentOption("paypal")}>
                                            <div className="border-1 p-1.5 border-neutral-200"><Image src="/cart/paypal.svg" alt="image" width={22} height={22}></Image></div>
                                            <h4 className="text-[13px]">PayPal Express Checkout</h4>
                                            <div className="ml-auto mr-3 w-4 h-4 border-1 rounded-full  border-amber-500 flex justify-center items-center">
                                                    {paymentOption === "paypal" && (<div className="w-2 h-2  rounded-full bg-amber-500"></div>)}
                                            </div>   
                                        </div>
                                        { paymentOption === "paypal" && <div className="bg-[#f8f9fa] flex flex-col gap-2 p-4 mt-5 text-[12px]">
                                            <label className="text-[#ff0000] font-bold">* Important Note :-</label>
                                            <p>The amount will be deducted in USD.</p>
                                            <p>As you have selected the PayPal payment option, the customs duties & taxes checkbox has been marked by default.</p>
                                        </div>}
                                    </div>
                                    <div className="border-b pb-4 border-neutral-100">
                                        <div className="flex gap-3 items-center cp" onClick={()=>setPaymentOption("visa")}>
                                            <div className="border-1 p-1.5 border-neutral-200"><Image src="/cart/card.svg" alt="image" width={22} height={22}></Image></div>
                                            <h4 className="text-[13px]">Visa / MasterCard (local Cards)</h4>
                                            <div className="ml-auto mr-3 w-4 h-4 border-1 rounded-full  border-amber-500 flex justify-center items-center">
                                                    {paymentOption === "visa" && (<div className="w-2 h-2  rounded-full bg-amber-500"></div>)}
                                            </div>   
                                        </div>
                                        <div className="flex gap-2 mt-3">
                                            <Image src="/images/payment_methods-175368113152.png" alt="image" width={42} height={27}></Image>
                                            <Image src="/images/payment_methods-159049393275.png" alt="image" width={42} height={27}></Image>
                                            <Image src="/images/payment_methods-159049550294.png" alt="image" width={42} height={27}></Image>
                                        </div>
                                        { paymentOption === "visa" && <div className="bg-[#f8f9fa] flex flex-col gap-2 p-4 mt-5 text-[12px]">
                                            <div className="bg-white border-1 border-neutral-200 flex gap-2 items-center p-2">
                                                <input className="outline-none w-full" type="text" name="pan" placeholder="PAN Card*"></input>
                                                <Image src="/cart/question-circle-fill.svg" alt="iamge" width={16} height={16}></Image>
                                            </div>
                                        </div>}
                                    </div>        
                                    <div className="border-b pb-4 border-neutral-100">
                                        <div className="flex gap-3 items-center cp" onClick={()=>setPaymentOption("debitCard")}>
                                            <div className="border-1 p-1.5 border-neutral-200"><Image src="/cart/card.svg" alt="image" width={22} height={22}></Image></div>
                                            <h4 className="text-[13px]">Debit/Credit Card (International cards)</h4>
                                            <div className="ml-auto mr-3 w-4 h-4 border-1 rounded-full  border-amber-500 flex justify-center items-center">
                                                    {paymentOption === "debitCard" && (<div className="w-2 h-2  rounded-full bg-amber-500"></div>)}
                                            </div>   
                                        </div>
                                        <div className="flex gap-2 mt-3">
                                            <Image src="/images/payment_methods-175368113152.png" alt="image" width={42} height={27}></Image>
                                            <Image src="/images/payment_methods-159049393275.png" alt="image" width={42} height={27}></Image>
                                            <Image src="/images/payment_methods-159049550294.png" alt="image" width={42} height={27}></Image>
                                            <Image src="/images/payment_methods-162021036610.png" alt="image" width={42} height={27}></Image>
                                            <Image src="/images/payment_methods-159049393275.png" alt="image" width={42} height={27}></Image>
                                        </div>
                                        { paymentOption === "debitCard" && <div className="bg-[#f8f9fa] flex flex-col gap-2 p-4 mt-5 text-[13px]">
                                            <label className="text-[#ff0000] font-bold">* Important Note :-</label>
                                            <p>The amount will be deducted in USD.</p>
                                            <p>As you have selected the PayPal payment option, the customs duties & taxes checkbox has been marked by default.</p>
                                        </div>}
                                    </div>
                                    <div>
                                        <div className="flex gap-3 items-center cp" onClick={()=>setPaymentOption("upi")}>
                                            <div className="border-1 p-1.5 border-neutral-200"><Image src="/cart/alternative-methods-icon.svg" alt="image" width={22} height={22}></Image></div>
                                            <h4 className="text-[13px]">UPI</h4>
                                            <div className="ml-auto mr-3 w-4 h-4 border-1 rounded-full  border-amber-500 flex justify-center items-center">
                                                    {paymentOption === "upi" && (<div className="w-2 h-2  rounded-full bg-amber-500"></div>)}
                                            </div>   
                                        </div>
                                        { paymentOption === "upi" && <div className="bg-[#f8f9fa] flex flex-col gap-8 p-4 mt-5 text-[13px]">
                                            <div className="bg-white border-1 border-neutral-200 flex gap-2 items-center p-2">
                                                <input className="outline-none w-full" type="text" name="pan" placeholder="PAN Card*"></input>
                                                <Image src="/cart/question-circle-fill.svg" alt="iamge" width={16} height={16}></Image>
                                            </div>
                                            <div className="bg-white border-1 border-neutral-200 flex gap-2 items-center p-2 ">
                                                <input className="outline-none w-full" type="text" name="pan" placeholder="Enter Your UPI ID*"></input>
                                                <Image src="/cart/question-circle-fill.svg" alt="iamge" width={16} height={16}></Image>
                                            </div>
                                        </div>}
                                    </div>
                                </div>)}
                            </div>    
                            {/* payment total section for mobile not dekstop */}
                            <GrandTotal visible={false}></GrandTotal>
                            
                            {/* Secure Shopping/ Disclaimer     */}
                            <div>
                                <div className="flex justify-between p-2 xl:p-2 md:py-5 md:px-20 lg:px-30 mb-2">
                                    <div className="flex flex-col w-20 xl:w-auto xl:flex-row text-center items-center gap-2">
                                        <Image src="/cart/secure.svg" alt="iamge" width={25} height={25}></Image>
                                        <span className="text-[13px] text-neutral-700 font-bold">Secure Shopping</span>
                                    </div>
                                    <div className="flex order-3 xl:order-2 flex-col w-20 xl:w-auto xl:flex-row text-center items-center gap-2">
                                        <Image src="/cart/return.svg" alt="iamge" width={35} height={35}></Image>
                                        <span className="text-[13px] text-neutral-700 font-bold">Easy Returns</span>
                                    </div>
                                    <div className="flex order-2 xl:order-3 flex-col w-28 xl:w-auto xl:flex-row text-center items-center gap-2">
                                        <Image src="/cart/money-back.svg" alt="iamge" width={35} height={35}></Image>
                                        <span className="text-[13px] text-neutral-700 font-bold">100% Money Back Guarantee</span>
                                    </div>    
                                </div>

                                <div className="pt-2 md:pt-5 xl:pt-5 xl:border-t border-neutral-300 flex flex-col gap-8">   
                                    <div className="order-3 xl:order-1 px-4 xl:p-0 text-[14px]">
                                        <p><span className="hidden xl:inline">1. </span>Disclaimer - Your order ships from the US and will go through a formal customs clearance process. The customs authorities may request additional documents to release your shipment.</p>
                                        <p>If you need assistance, please contact our support team.</p>
                                    </div>
                                    <div className="order-2 xl:order-2 xl:flex justify-center gap-20">
                                        <div className="text-center">
                                            <h3 className="text-[14px] mb-3">Trust Ensured With</h3>
                                            <div className="flex justify-center">
                                                <div className="xl:border-r border-neutral-400 px-4 md:px-6 xl:px-4 box-border">
                                                    <Image src="/cart/pci-compliant.svg" alt="image" width={94} height={36}></Image>
                                                </div>
                                                <div className="px-4 md:px-6 xl:px-4">
                                                    <Image src="/cart/iso.svg" alt="image" width={132} height={37}></Image>
                                                </div> 
                                            </div>      
                                        </div>
                                        <div className=" mt-5 xl:mt-0 text-center">
                                            <h3 className="text-[14px] mb-3">Our Top Logistics Partners</h3>
                                            <div className="flex justify-center">
                                                <div className="border-r border-neutral-400 px-4 box-border">
                                                    <Image src="/cart/dhl.svg" alt="image" width={62} height={35}></Image>
                                                </div>
                                                <div className="px-4">
                                                    <Image src="/cart/fedex.svg" alt="image" width={62} height={35}></Image>
                                                </div>       
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 xl:order-3 px-4 xl:p-0 flex flex-col gap-2 items-center">
                                        <p className="text-[13px]">Copyright © 2025 Ubuy Co. All rights reserved.</p>
                                        <div className="flex gap-4 md:gap-2 text-center items-center text-[12px]">
                                            <h5 className="max-w-25 md:max-w-fit">Privacy Policy</h5>
                                            <span className="h-3 w-0.5 bg-neutral-400"></span>
                                            <h5 className="max-w-20 md:max-w-fit">Terms & Conditions</h5>
                                            <span className="h-3 w-0.5 bg-neutral-400"></span>
                                            <h5 className="max-w-25 md:max-w-fit">GDPR Terms & conditions</h5>
                                        </div>
                                    </div>                                 
                                </div>
                                
                            </div>
                        </div>
                        {/* right */}
                        <PaymentsideBlock></PaymentsideBlock>              
                    </div>    
                 </div>
            </div>
        </div>
  )
}

export default ShippingForm
