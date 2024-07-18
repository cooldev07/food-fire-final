import { useEffect, useState } from "react";
import { LISTOFRESTAURANT } from "./constants";

const useRestraunt=function(){
    const [resList,setResList]=useState(null)
    useEffect(()=>{
fetchData();
    },[])
    async function fetchData(){
    const req=await fetch(LISTOFRESTAURANT)
const json=await req.json();
setResList(json)
}
return resList
}
export default useRestraunt;