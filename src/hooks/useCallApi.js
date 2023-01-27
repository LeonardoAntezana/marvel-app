import axios from "axios";
import { useEffect, useState } from "react";

export const useCallApi = param => {
    const [data, setData] = useState('')
    
    const getData = async () => {
      try{
        let res = await axios(param)
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

    return {data, setAxiosData}
  }
  