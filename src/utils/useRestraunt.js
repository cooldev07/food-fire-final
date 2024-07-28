import { useEffect, useState } from "react";
import { LISTOFRESTAURANT } from "./constants";

const useRestraunt=function(){
    const [resList,setResList]=useState(null)
    useEffect(()=>{
fetchData();
    },[])
    async function fetchData(){
//     const req=await fetch(LISTOFRESTAURANT)
// const json=await req.json();
// setResList(json)
     try {
        const res = await fetch("https://handler-cors.vercel.app/fetch", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        url: LISTOFRESTAURANT, //Replace 
        })
        });
        
        if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        
        
        const raw = await res.json();
        setResList(raw)
        console.log(raw); // see raw in console
        
        } 
        catch (error) {
        console.error("Error fetching data:", error);
        }
 
}
return resList
}
export default useRestraunt;
