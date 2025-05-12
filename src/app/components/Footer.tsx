import { FaArrowRightLong } from "react-icons/fa6";
import Logo from '@/assets/img/logo-white.png'
import SocialLogo01 from '@/assets/img/instagram.svg'
import SocialLogo02 from '@/assets/img/Dribbble.svg'
import SocialLogo03 from '@/assets/img/twitter.svg'
import SocialLogo04 from '@/assets/img/youtube.svg'
import { IoPaperPlaneOutline } from "react-icons/io5";
import Image from "next/image";

const socialLogos = [
   SocialLogo01,
    SocialLogo02,
     SocialLogo03,
      SocialLogo04
]
export default function Footer() {
  return (
    <div>  
    <div className="p-10 bg-[#F5F7FA] text-center">
      <div className="container mx-auto ">
        <h1 className=" text-[4rem] text-[#263238] font-bold">Pellentesque suscipit <br /> fringilla libero eu.</h1>
        <a className='my-4 inline-flex  py-4 px-10 bg-[#4CAF4F] text-white rounded-[5px] items-center ' href='#' >Get a Demo <FaArrowRightLong className="ml-1"  /></a>
      </div>
    </div>
    <div className="bg-[#263238] p-10 text-white " >
      <div className="container mx-auto">
      <div className=" grid grid-cols-3">
        <div className="flex flex-col items-start text-[#F5F7FA] ">
          <Image  src={Logo} alt=""  className="mb-7"/>
          <p className="text-[0.875rem] font-extralight">Copyright © 2020 Nexcent ltd.</p>
          <p className="text-[0.875rem] font-extralight">All rights reserved</p>

          <div className="flex flex-row space-x-4 mt-18 ">

          {socialLogos.map((social, index) =>(
             <Image key={index} src={social} alt="" />
          ))}

          </div>
        </div>

        <div className="flex flex-row ">
          <div className="space-y-3 mr-20">
            <p className="text-[1.25rem] mb-4" >Company</p>
            <p className="text-[0.875rem] font-extralight">About us</p>
            <p className="text-[0.875rem] font-extralight" >Blog</p>
            <p className="text-[0.875rem] font-extralight" >Contact us</p>
            <p className="text-[0.875rem] font-extralight" >Pricing</p>
            <p className="text-[0.875rem] font-extralight" >Testimonials</p>
          </div>
          <div className="space-y-3">
            <p className="text-[1.25rem] mb-4" >Support</p>
            <p className="text-[0.875rem] font-extralight">Help center</p>
            <p className="text-[0.875rem] font-extralight" >Terms of service</p>
            <p className="text-[0.875rem] font-extralight" >Legal</p>
            <p className="text-[0.875rem] font-extralight" >Privacy policy</p>
            <p className="text-[0.875rem] font-extralight" >Status</p>
            </div>
        </div>
       
             <div className="flex flex-row text-start">
          <div className="space-y-3 mr-20 ">
            <p className="text-[1.25rem] mb-4" >Stay up to date</p>
            <form action=" " className="relative">
              <input type="text" className="bg-white/20 text-white text-[0.875rem] px-4 py-2 rounded-md" placeholder="Your email address"></input>
              <button className="absolute top-[10px] right-[10px] cursor-pointer"><IoPaperPlaneOutline /></button>
            </form>
       
          </div>
          
        </div>
        </div>
        </div>
      </div>
     </div>
  )
}