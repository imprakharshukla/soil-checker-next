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
        {
            data[name.toLowerCase()].map((crop => {
                {
                    console.log(crop)
                }
                return (
                    <div>
                        <div className="flex items-center justify-center">
                            <li>
                                <button className={(vege[crop.toLowerCase()] ? " underline ": "") + " text-lg"} onClick={() => {
                                    if(vege[crop.toLowerCase()]) {
                                        setShowModal(true)
                                        setTextData({
                                            heading: crop,
                                            description: vege[crop.toLowerCase()]
                                        })
                                    }
                                }}>{crop}</button>
                            </li>
                        </div>
                    </div>
                )

            }))
        }
    </div>)
}