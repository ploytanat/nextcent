import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import articleImg01 from "@/assets/img/article-01.svg";
import articleImg02 from "@/assets/img/article-02.svg";
import articleImg03 from "@/assets/img/article-03.svg";

const articles = [
  {
    image: articleImg01,
    title: "Creating Streamlined Safeguarding Processes with OneRen",
  },
  {
    image: articleImg02,
    title: "What are your safeguarding responsibilities and how can you manage them?",
  },
  {
    image: articleImg03,
    title: "Revamping the Membership Model with Triathlon Australia",
  },
];

export default function CommunityUpdates() {
  return (
    <section className="py-10 text-center">
      <div className="container mx-auto max-w-[1320px] p-5 md:p-10">
        <h3 className="text-[2.25rem] text-[#4D4D4D] font-semibold">
          Caring is the new marketing
        </h3>
        <p className="text-[#717171] mt-4 leading-relaxed">
          The Nexcent blog is the best place to read about the latest membership insights,<br />
          trends and more. See who's joining the community,<br />
          read about how our community are increasing their membership income and lot's more.​
        </p>

        <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {articles.map((article, i) => (
            <div key={i} className="relative">
              <Image src={article.image} alt={article.title} className="w-full h-auto" />
              <div className="absolute bg-[#f5f7fa] bottom-[-50px] left-1/2 -translate-x-1/2 w-[85%] rounded-xl shadow-lg px-10 py-5 ">
                <p className="text-[1.125rem] text-[#717171] font-semibold leading-snug">
                  {article.title}
                </p>
                <a href="#" className="text-[#4CAF4F] text-[1.125rem]  font-semibold flex justify-center items-center mt-2 hover:underline ">
                  Readmore <FaArrowRightLong className="ml-1 text-[1rem]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
