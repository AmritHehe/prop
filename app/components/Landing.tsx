
import Image from "next/image";
import { Data } from "../libs/data";
import CTA from "./CTA";
export default function Landing(){
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center relative">
             <CTA />
            <div className="absolute flex h-screen w-screen items-end justify-start">
               
                <div className=" w-xs h-sm mb-30 ml-10 m-5 p-2 backdrop-blur-xs border border-0.5 border-neutral-500 ">
                    <p> Pimpri Chinchwad, Pune, Maharashtra
                    </p>
                    <p> ₹ 1.31 Cr* Onwards
                    </p>
                    <p>
                        Offices, Shops
                    </p>
                    <p>
                        RERA: P 52100077499
                    </p>
                </div>
            </div>
            <div className="absolute inset-0 -z-20">
                <Image src={Data.backgroundImage} className="overflow-auto  object-cover opacity-45"   alt="GeetaImage" fill  />

            </div>
        </div>
    )
}