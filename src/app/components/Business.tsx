import Image from "next/image";
import icon04 from "@/assets/img/icon-04.png";
import icon05 from "@/assets/img/icon-05.png";
import icon06 from "@/assets/img/icon-06.png";
import icon07 from "@/assets/img/icon-07.png";

export default function Business() {
  return (
    <div className=" bg-[#F5F7FA] py-10  px-5 md:px-0">
      <div className="container mx-auto max-w-[1320px] p-10 grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
          <h1 className="font-bold text-[#4D4D4D] text-[2.25rem]  ">
            Helping a local <br />{" "}
            <span className="text-[#4CAF4F]">business reinvent itself</span>{" "}
          </h1>
          <p className="text-[#18191F]">
            We reached here with our hard work and dedication
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col md:flex-row items-center">
            <Image src={icon04} alt="" className="m-5" />
            <div>
              <h3 className="font-bold text-[#4D4D4D] text-[1.75rem]">
                2,245,341 <br />
              </h3>
              <p className=" font-normal text-[1rem] text-[#717171]">Members</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <Image src={icon05} alt="" className="m-5" />
            <div>
              <h3 className="font-bold text-[#4D4D4D] text-[1.75rem]">
              828,867 <br />
              </h3>
              <p className=" font-normal text-[1rem] text-[#717171]">Event Bookings</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <Image src={icon06} alt="" className="m-5" />
            <div>
              <h3 className="font-bold text-[#4D4D4D] text-[1.75rem]">
                1,926,436 <br />
              </h3>
              <p className=" font-normal text-[1rem] text-[#717171]">Payments</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <Image src={icon07} alt="" className="m-5" />
            <div>
              <h3 className="font-bold text-[#4D4D4D] text-[1.75rem]">
                2,245,341 <br />
              </h3>
              <p className=" font-normal text-[1rem] text-[#717171]">Members</p>
            </div>
          </div>
       
        </div>
      </div>
      <div></div>
    </div>
  );
}
