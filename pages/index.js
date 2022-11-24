import { ToastContainer, toast } from 'react-toastify';
import {useState} from "react";
import {useRouter} from "next/router";

import { VscGraphLine } from 'react-icons/vsc'
import { RiPlantFill, RiBarChart2Fill } from 'react-icons/ri'
import { GiPlantWatering } from 'react-icons/gi'

export default function Home() {
    const router = useRouter()
    return (
        <div className="flex min-h-screen mx-auto items-center justify-center">
            <div className="flex-col justify-center items-center">

                <img src={"/logo.png"} className="max-w-sm mx-auto"/>

                <h1 className="font-bold text-3xl my-4 mx-auto w-fit uppercase">Select an option to continue</h1>

                <div className="grid grid-cols-2 gap-5">
                    <div className="p-5 bg-violet-500 text-white rounded-lg flex justify-center items-center cursor-pointer hover:shadow-md hover:bg-violet-600">
                        <VscGraphLine className="text-2xl mx-2"/>
                        Monitor Your Plant
                    </div>
                    <div className="p-5 bg-violet-500 text-white rounded-lg flex justify-center items-center cursor-pointer hover:shadow-md hover:bg-violet-600"
                    onClick={()=>{router.push('/diseases')}}>
                            <RiPlantFill className="text-2xl mx-2"/>
                            Detect Diseases
                    </div>
                    <div className="p-5 bg-violet-500 text-white rounded-lg flex justify-center items-center cursor-pointer hover:shadow-md hover:bg-violet-600"
                    onClick={()=>{router.push('/soil')}}>
                            <GiPlantWatering className="text-2xl mx-2"/>
                            Soil Check
                    </div>
                    <div className="p-5 bg-violet-500 text-white rounded-lg flex justify-center items-center cursor-pointer hover:shadow-md hover:bg-violet-600">
                            <RiBarChart2Fill className="text-2xl mx-2"/>
                            Nutrition Info
                    </div>
                </div>
            </div>
        </div>
    )
}
