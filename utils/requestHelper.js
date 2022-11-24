import axios from "axios";

export const identifySoil = async ({image, testName}) => {
    let formData = new FormData();

    formData.append("image", image)
    formData.append('testName', testName)


    console.log({formData})
    try {
        const res = await axios.post(
            "http://localhost:5000/detect",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        console.log({res: res.data.result})
        return Promise.resolve(res.data)
    } catch (e) {
        console.log(e)
        return Promise.reject(e)
    }


}