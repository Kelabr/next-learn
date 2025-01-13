'use client'

import Image from "next/image"
import React, {useRef} from "react"

export default function Menu(){

    const ref = useRef(null)

    function handlesShowMenu(){
        if(ref.current){
            ref.current.classList.toggle('max-h-64')
        } 
    }

    return(
        <>
            <nav className=" flex justify-end p-3 ">
                <ul className=" w-full justify-between hidden sm:inline-flex sm:px-10 ">
                    <li className="hover:bg-slate-400 w-14 flex justify-center p-1 rounded-md duration-300">Home</li>
                    <li className="hover:bg-slate-400 w-24 flex justify-center p-1 rounded-md duration-300">Description</li>
                    <li className="hover:bg-slate-400 w-14 flex justify-center p-1 rounded-md duration-300">Footer</li>
                </ul>
                <Image
                onClick={handlesShowMenu}
                className="sm:hidden"
                src="/hamburger.png"
                width={30}
                height={30}
                alt="Icone do menu"
                />
            </nav>
            <ul ref={ref} className=" overflow-hidden max-h-0 flex-col items-end pl-4  transition-all duration-700 ease-in-out bg-slate-700 sm:hidden ">
                <li className="hover:bg-slate-400 w-14 flex justify-center p-2 mt-3 rounded-md duration-300 ">Home</li>
                <li className="hover:bg-slate-400 w-24 flex justify-center p-2 rounded-md duration-300 ">Description</li>
                <li className="hover:bg-slate-400 w-14 flex justify-center p-2 mb-3 rounded-md duration-300">Footer</li>
            </ul>
        </>

    )
}
