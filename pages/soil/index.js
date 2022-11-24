import DropzoneComp from "../dropzone";
import InfoComponent from "./info-component";
import Modal from "./model";
import {useState} from "react";


export default function Soil() {

    const [type, setType] = useState("")

    return (<div className="flex min-h-screen mx-auto items-center justify-center">
        <div className="flex-col justify-center items-center">
            <h1 className="text-5xl text-center text-black font-black">Soil Detection</h1>
            { type.length >0 &&
                <DropzoneComp />
            }
            { type &&
                <InfoComponent
                    name={type}/>
            }
        </div>
    </div>)
}