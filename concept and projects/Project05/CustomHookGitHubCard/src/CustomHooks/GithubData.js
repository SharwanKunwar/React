import { useEffect, useState } from "react";

function useGithubData(userName){
    
    const [data, setData] = useState(null);

    useEffect(()=>{
        fetch(`http://api.github.com/users/${userName}`).then((response)=>{
            return response.json();
        }).then((response_data)=>{
            setData(response_data);
        })
    },[userName]);
    return data;
}
export default useGithubData;