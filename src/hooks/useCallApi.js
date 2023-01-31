import axios from "axios";
import { useEffect, useState } from "react";

export const useCallApi = param => {
    const [data, setData] = useState('')
    const [isPending, setIsPending] = useState(false)
    
    const getData = async () => {
      try{
        setIsPending(true)
        let res = await axios(param)
        setIsPending(false)
        setData(res.data.data.results)
      }
      catch{
        console.log('error')
      }
    }  
    useEffect(() => {
      getData()
    },[param])

    const setAxiosData = async () => {
        try{
          let res = await axios(url)
          setData(res.data.data.results)
        }
        catch{
        }
      }

    return {data, isPending, setAxiosData}
  }
  