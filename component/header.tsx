"use client";
import { useEffect, useState } from "react";

export default function header() {

    return (
        <div className="bg-[#1A1A1A] text-black rounded-[50] w-300 h-20 absolute top-5 left-0 right-0 mx-auto flex items-center justify-center">
            <p className="absolute text-[#FF3B30] drop-shadow-[0_0_10px_rgba(255,59,48,0.5)] font-bold left-16 text-2xl">Hoàng Bảo</p>
            <div className="flex space-x-4 absolute right-12 text-xl text-white">
                <p className="cursor-pointer h-15 mx-3 w-15 flex items-center justify-center bg-[#2A2A2E] border border-[#3A3A40] rounded-3xl">{"</>"}</p>
                <p className="cursor-pointer p-3 mx-3 flex items-center justify-center  rounded-3xl backdrop-blur-md transition
                    hover:bg-[#3F3F46]
                    hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]">HOME</p>
                <p className="cursor-pointerp-3 mx-3 flex items-center justify-center  rounded-3xl   backdrop-blur-md
                    transition
                    hover:bg-[#3F3F46]
                    hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]">ABOUT</p>
                <p className="cursor-pointer p-3 mx-3 flex items-center justify-center  rounded-3xl   backdrop-blur-md
                    transition
                    hover:bg-[#3F3F46]
                    hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]">PROJECT</p>
                <p className="cursor-pointer p-3 mx-3 flex items-center justify-center  rounded-3xl   backdrop-blur-md
                    transition
                    hover:bg-[#3F3F46]
                    hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]">SKILL</p>
                <p className="cursor-pointer p-3 mx-3 flex items-center justify-center  rounded-3xl   backdrop-blur-md
                    transition
                    hover:bg-[#3F3F46]
                    hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]">EXPERIENCE</p>
                <p className="cursor-pointer p-3 mx-3 flex items-center justify-center  rounded-3xl   backdrop-blur-md
                    transition
                    hover:bg-[#3F3F46]
                    hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]">CONTRACT</p>
            </div>

        </div>
    );
}