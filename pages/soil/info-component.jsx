import data from '../../data.json'
import vege from '../../vege-info.json'
import Modal from "./model";
import {useState} from "react";

export default function InfoComponent({name}) {
    const [textData, setTextData] = useState({heading: "", description: ""})
    const [showModal, setShowModal] = useState(false)
    return (<div className="text-center mx-auto">
        <h1 className="font-bold text-3xl my-3">We have scanned your image!</h1>
        <Modal showModal={showModal} setShowModal={setShowModal} heading={textData.heading}
               description={textData.description}/>
        <p>The soil we have detected is <strong className="font-bold">{name}</strong></p>
        <div className="grid grid-cols-3 items-center justify-center gap-5 mt-5">  
        {
            data[name.toLowerCase()].map(((crop,index) => {
         
                return (
                    <span key={index} className={(vege[crop.toLowerCase()] ? "bg-green-400 hover:bg-green-500 cursor-pointer ": "bg-green-50 cursor-not-allowed ") + "text-lg col-span-1 py-3 rounded-lg capitalize"} onClick={() => {
                        if(vege[crop.toLowerCase()]) {
                            setShowModal(true)
                            setTextData({
                                heading: crop,
                                description: vege[crop.toLowerCase()]
                            })
                        }
                    }}>{crop}</span>
                )
                
            }))
        }
        </div>
    </div>)
}