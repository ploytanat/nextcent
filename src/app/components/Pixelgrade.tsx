import Img01 from "@/assets/img/img-01.png"
import Image from "next/image"
export default function Pixelgrade() {
  return (
    <div className=" py-10 ">
        <div className="container mx-auto max-w-[1320px] p-10 grid grid-cols-1 md:grid-cols-2">
            <div>
                <Image src={Img01} alt="" />
            </div>
         <div>
            <h2 className=" font-bold text-[2.25rem] text-[#4D4D4D] mt-4 md:mt-0">The unseen of spending three years at Pixelgrade </h2>
            <p className="text-[#717171] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <a className="mt-8 inline-flex bg-[#4CAF4F]  rounded-md text-white py-4 px-10">Learn More</a>
            
         </div>
        </div>
        
    </div>
  )
}