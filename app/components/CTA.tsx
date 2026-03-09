import React from "react";
import { ArrowRight } from 'lucide-react';

export default function CTA(){
    return (
        <div className="h-96 w-screen items-center justify-center">

        
            <div className="flex items-center justify-center flex-col ">
                <h1 className="text-6xl  m-4">
                24 Wall Street
            </h1>
            <button className="flex items-center justify-between bg-white m-2 p-2 text-black rounded-4xl gap-2  "> <p className="bg-[#C9A24D] p-1 rounded-2xl"><ArrowRight /></p>Enquire Now</button>
            </div>
        </div>
    )
}