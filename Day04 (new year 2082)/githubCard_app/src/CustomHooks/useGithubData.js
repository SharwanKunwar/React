import { useEffect, useState } from "react"


const useGithubData = (userName) =>{
    const [data, setData] = useState({});
    

    
        useEffect(()=>{
            fetch(`http://api.quotable.io/random`).then((response)=>{
                return response.json();
            }).then((response_data)=>{
                console.log("resposnse_data")
                // console.log(response_data);
                // setData(response_data);
            }).catch((error)=>{
                console.log(error);
            });
        })
    // console.log(data)
    return data;

}

export default useGithubData;