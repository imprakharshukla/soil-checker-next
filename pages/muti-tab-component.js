import React from "react";

export default function MultiTabComponent() {
    return (
        <div
            className="mx-auto flex space-x-4 justify-center items-center bg-gray-200 w-fit px-8 py-4 rounded-lg">
            <button onClick={() => {
                setIdentificationParam("cotton")
            }
            }
                    className={(identificationParam === 'cotton' ? " text-white bg-violet-500 " : " bg-gray-50 ") + "shadow px-3 rounded-md py-2 cursor-pointer"}>
                Cotton Plant
            </button>
            <button onClick={() => {
                setIdentificationParam("rice")
            }}
                    className={(identificationParam === 'rice' ? " text-white bg-violet-500 " : " bg-gray-50 ") + "shadow px-3 rounded-md py-2 cursor-pointer"}>
                Rice Plant
            </button>
            <button onClick={() => {
                setIdentificationParam("soil")
            }}
                    className={(identificationParam === 'soil' ? " text-white bg-violet-500 " : " bg-gray-50 ") + "shadow px-3 rounded-md py-2 cursor-pointer"}>
                Soil Type
            </button>
        </div>
    )
}