import DropzoneComp from "../../components/dropzone";
import InfoComponent from "./info-component";
import Modal from "./model";
import { useState, useEffect } from "react";

export default function Soil() {
  const [type, setType] = useState("");

  const [response, setResponse] = useState({});

  useEffect(()=>{
    if(response.result){
      setType(response.result)
    }
  },[response])


  return (
    <div className="flex min-h-screen mx-auto items-center justify-center">
      <div className="flex-col justify-center items-center">
        <h1 className="text-5xl text-center text-black font-black">
          Soil Detection
        </h1>
        {!type &&<DropzoneComp testName={'soil'} setRespose={setResponse} />}
        {type && <InfoComponent name={type} />}
      </div>
    </div>
  );
}
