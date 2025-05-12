import clientImgLogo01 from '@/assets/img/clients/client-01.png'
import clientImgLogo02 from '@/assets/img/clients/client-02.png'
import clientImgLogo03 from '@/assets/img/clients/client-03.png'
import clientImgLogo04 from '@/assets/img/clients/client-04.png'
import clientImgLogo05 from '@/assets/img/clients/client-05.png'
import clientImgLogo06 from '@/assets/img/clients/client-06.png'
import TimImg from '@/assets/img/tim-smith.png'
import { time } from 'console'
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image'
const clientImgLogo = [
        clientImgLogo01,
        clientImgLogo02,
        clientImgLogo03,
        clientImgLogo04,
        clientImgLogo05,
        clientImgLogo06,
]

export default function Customers() {
  return (
    <div className='bg-[#F5F7FA] py-10'>
        <div className='container mx-auto max-w-[1320px] p-10 grid grid-cols-1 md:grid-cols-2 '>
            <div>
                <Image src={TimImg} alt=''  />
            </div>
            <div>
                <div className='my-4 md:my-0'>
                <p className='text-[#717171]'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <h4 className='text-[#4CAF4F] text-[1.25rem] font-semibold my-4'>Tim Smith</h4>
                <p className='text-[#89939E]'>British Dragon Boat Racing Association</p>
                </div>
               <ul className="flex flex-col md:flex-row items-center my-4 justify-between gap-4">
                        {clientImgLogo.map((client, index) => (
                            <li key={index}>
                            <Image src={client} alt="" className="" />
                            </li>
                        ))}

                        <li>
                            <a
                            href="#"
                            className="text-[#4CAF4F] font-semibold text-[1.25rem] flex items-center"
                            >
                            Meet all customers <FaArrowRightLong className="ml-1 text-[1rem]" />
                            </a>
                        </li>
                        </ul>

            </div>
        </div>

    </div>
  )
}