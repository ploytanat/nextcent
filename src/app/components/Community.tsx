import icon01 from "@/assets/img/icon-01.png"
import icon02 from "@/assets/img/icon-02.png"
import icon03 from "@/assets/img/icon-03.png"
import Image from "next/image"
export default function Community() {
  return (
    <div className="container mx-auto max-w-[1320px] p-10 text-center">
        <div>
            <h2 className="text-[2.25rem] text-[#4D4D4D] font-semibold">Manage your entire community <br /> in a single system</h2>
            <p className="text-[1rem] text-[#717171] mb-5">Who is Nextcent suitable for?</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[100px] m-10 md:m-0 ">
                <div className=" shadow-lg p-8 rounded-lg">
                    <Image src={icon01} alt="" className="mx-auto" />
                    <h3 className="font-bold text-[#4D4D4D] text-[1.75rem] my-3 ">Membership<br/>Organisations</h3>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className=" shadow-lg p-8 rounded-lg">
                    <Image src={icon02} alt="" className="mx-auto"/>
                    <h3 className="font-bold text-[#4D4D4D] text-[1.75rem] my-3">National<br/>Associations</h3>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className=" shadow-lg p-8 rounded-lg">
                    <Image src={icon03} alt=""  className="mx-auto"/>
                    <h3 className="font-bold text-[#4D4D4D] text-[1.75rem] my-3">Clubs And  <br/> Groups</h3>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>
        </div>
    </div>
  )
}