import DropzoneComp from "../../components/dropzone";
import InfoComponent from "./info-component";
import Modal from "./model";
import { useState } from "react";

export default function Soil() {
  const [type, setType] = useState("");

  const [response, setResponse] = useState({});

  return (
    <div className="flex min-h-screen mx-auto items-center justify-center">
      <div className="flex-col justify-center items-center">
        <h1 className="text-5xl text-center text-black font-black">
          Soil Detection
        </h1>
        <DropzoneComp testName={'soil'} setRespose={setResponse} />
        <h1 className="text-5xl text-center text-black font-black">
            {response.result}
        </h1>
        {type && <InfoComponent name={type} />}
      </div>
    </div>
  );
}
