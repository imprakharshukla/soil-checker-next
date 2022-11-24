import DropzoneComp from "../../components/dropzone";
import { ToastContainer, toast } from 'react-toastify';
import {useState} from "react";


import { GiCottonFlower, GiPlantRoots } from 'react-icons/gi'

export default function Home() {
    const [crop,setCrop] = useState('')
    const [response,setResponse] = useState({})
    return (
      <div className="flex min-h-screen mx-auto items-center justify-center">
        <div className="flex-col justify-center items-center">
          {crop === "" && (
            <>
              <h1 className="font-bold text-3xl my-4 mx-auto w-fit uppercase">
                Select an option to Crop
              </h1>

              <div className="grid grid-cols-2 gap-5">
                <div
                  className="p-5 bg-violet-500 text-white rounded-lg flex justify-center items-center cursor-pointer hover:shadow-md hover:bg-violet-600"
                  onClick={() => {
                    setCrop("cotton");
                  }}
                >
                  <GiCottonFlower className="text-2xl mx-2" />
                  Cotton
                </div>
                <div
                  className="p-5 bg-violet-500 text-white rounded-lg flex justify-center items-center cursor-pointer hover:shadow-md hover:bg-violet-600"
                  onClick={() => {
                    setCrop("rice");
                  }}
                >
                  <GiPlantRoots className="text-2xl mx-2" />
                  Rice
                </div>
              </div>
            </>
          )}
          {crop != "" && (
            <>
              <h1 className="font-bold text-3xl my-4 mx-auto w-fit uppercase">
                You Selected {crop} please{" "}
              </h1>
              <DropzoneComp testName={crop} setRespose={setResponse} />
              <h1 className="font-bold text-3xl my-4 mx-auto w-fit uppercase">
                {response.result}{" "}
              </h1>
            </>
          )}
        </div>
      </div>
    );
}
