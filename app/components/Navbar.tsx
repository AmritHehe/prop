
import Image from "next/image";
import { Data } from "../libs/data";
const Links = [
    {
        title : 'Overview',
        href : '#'
    },
    {
        title : 'Amenites',
        href : '#'
    },
    {
        title : 'Plan and price',
        href : '#'
    },
    {
        title : 'Gallery',
        href : '#'
    }, 
    {
        title : 'Location',
        href : '#'
    }

]

export default function Navbar(){
    return (
        <div className="w-screen h-25 bg-neutral-400 flex items-center justify-center">
            <div className="flex items-center justify-between w-7xl">
                <div className="bg-white font-sans flex italic gap-2 overflow-hidden text-black p-2">
                <Image src={Data.topLeftLogo1} height={40} width={100} alt="GeetaImage" />
                <Image src={Data.topLeftLogo2} height={50} width={100} alt="24WallStreet" />
            </div>
            <div className="mr-28">
                {Links.map((x , i ) => (
                    <a href={x.href} key={i} className="bg-transparent text-white p-3">
                        {x.title}
                    </a>
                ))}
            </div>
            <div className=" font-sans italic text-black p-2">
               <Image src={Data.topRightLogo} height={50} width={90} alt="MyPropertyFact" />
            </div>
            </div>
        </div>
    )
}