import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import {identifySoil} from "../utils/requestHelper";

function DropzoneComp({testName}) {
    const [files, filesSelected] = useState([]);
    const [previewImage, setPreviewImage] = useState("")
    const [isLoading, setLoadingState] = useState(false)
    const [identificationParam, setIdentificationParam] = useState("cotton")
    const onDrop = useCallback(acceptedFiles => {
        setPreviewImage(URL.createObjectURL(acceptedFiles[0]))
        filesSelected(acceptedFiles)
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop, multiple: false, accept: {
            'image/*': ['.jpeg', '.jpg', '.png'],
        },
    })

    console.log(files.length)
    return (
        <div>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {

                    files.length === 0 && <div
                        className="border border-2 cursor-pointer my-10 transition shadow-md transition duration-150 ease-in-out hover:-translate-y-1 rounded border-dashed border-gray-700 p-12 flex flex-col items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"/>
                            <path
                                d="M12 12.586l4.243 4.242-1.415 1.415L13 16.415V22h-2v-5.587l-1.828 1.83-1.415-1.415L12 12.586zM12 2a7.001 7.001 0 0 1 6.954 6.194 5.5 5.5 0 0 1-.953 10.784L18 17a6 6 0 0 0-11.996-.225L6 17v1.978a5.5 5.5 0 0 1-.954-10.784A7 7 0 0 1 12 2z"/>
                        </svg>
                        {!isDragActive ? <p>Drag n drop some files here, or click to select files</p> :
                            <p>Yes! Drop me here!</p>}
                    </div>}
            </div>
            {files.length !== 0 &&
                <div>
                    {files.map(file =>

                        <div className="my-10 text-center">
                            <p className="-mt-5 mb-10">We are all ready to scan the image!</p>
                            <div className="shadow rounded mx-auto">
                                <img className="object-fill h-48 w-96" src={previewImage} alt=""/>
                            </div>

                            <p className="text-center
                            ">{file.name}</p>
                        </div>)
                    }

                    <div className="flex justify-center items-center space-x-5">
                        <button
                            onClick={async () => {
                                setLoadingState(true)
                                try {
                                    let blob = await fetch(previewImage).then(r => r.blob());
                                    await identifySoil({image: blob, testName: testName})
                                } catch (e) {
                                    console.log(e)
                                }
                                setLoadingState(false)
                            }}
                            className="transition shadow-md transition duration-150 ease-in-out hover:-translate-y-1 w-fit mt-6 px-4 py-2 bg-violet-500 text-white rounded-md flex justify-center items-center">
                            {isLoading &&
                                <svg
                                    className="animate-spin transition duration-150 ease-in-out  -ml-1 mr-3 h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            stroke-width="4"></circle>
                                    <path className="opacity-75" fill="currentColor"
                                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            }
                            Scan the Soil
                        </button>
                        <button
                            onClick={() => {
                                location.reload()
                            }}
                            className="transition shadow-md transition duration-150 ease-in-out hover:-translate-y-1 w-fit mt-6 px-4 py-2 bg-white font-semibold
                            text-violet-800 rounded-md flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                 className="w-5 h-5 mr-2">
                                <path fill-rule="evenodd"
                                      d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                                      clip-rule="evenodd"/>
                            </svg>

                            Retry
                        </button>
                    </div>

                </div>}
        </div>)
}

export default DropzoneComp