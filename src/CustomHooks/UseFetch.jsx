
import { useState,useEffect } from "react";

const useFetch = (url) => {

    const [displayData, setDisplayData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abort = new AbortController();
        setTimeout(()=>{fetch(url)
            .then((res) => {
            // console.log(res);
            if(!res.ok){   
            throw Error('Could not fetch the data for that response')
            }
            return res.json();
             })
            .then(data=>{
              setDisplayData(data)
              setLoading(false)
              setError(null)
              // console.log(data);
            }).catch(err=>{
                if(err.name ==="AbortError"){
                    console.log('cleanup');
                }
                else{
                    setLoading(false)
                    // console.log(err.message);
                    setError(err.message)
                }
                
            })
        
        }
            ,1000)

            return()=> abort.abort();
      },[url]);

    return {displayData,loading,error};
}
 
export default useFetch;
