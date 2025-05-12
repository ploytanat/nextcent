import Image from "next/image"
import Img02 from "@/assets/img/img-02.png"
export default function Calender() {
  return (
     <div className=" py-10 ">
        <div className="container mx-auto max-w-[1320px] p-10 grid grid-cols-1 md:grid-cols-2">
            <div>
                <Image src={Img02} alt="" />
            </div>
         <div>
            <h2 className=" font-bold text-[2.25rem] text-[#4D4D4D] mt-4 md:mt-0">How to design your site footer like we did </h2>
            <p className="text-[#717171] mt-4">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
            <a className="mt-8 inline-flex bg-[#4CAF4F]  rounded-md text-white py-4 px-10">Learn More</a>
            
         </div>
        </div>
        
    </div>
  )
}