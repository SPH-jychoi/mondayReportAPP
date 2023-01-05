import axios from "axios";
import *  as GlobalContext from "../constant/GlobalContext"

const getResponse = async(query)=>{
    let res = await axios(GlobalContext.RequestUrl,{
     headers: {
       'Content-Type': 'application/json',
       'Authorization' : GlobalContext.APItoken
      },
      method:`post`,
      data:{
       query : query
     },
   })

   return res.data
}

export {getResponse}