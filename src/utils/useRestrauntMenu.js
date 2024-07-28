import { useState,useEffect } from "react";
import { MENU } from "./constants";
const useRestrauntMenu=function(resId){
    const [restaurant,setRestaurant]=useState(null);
    useEffect(()=>{
    fetchData()
    },[])


    async function fetchData(){
        // const req=await fetch(MENU+resId);
        // const r=await req.json()
        // setRestaurant(r)
        // console.log(r)
             try {
            const res = await fetch("https://handler-cors.vercel.app/fetch", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            url: MENU+resId, //Replace 
            })
            });
            
            if (!res.ok) {
            throw new Error(`Error: ${res.status} ${res.statusText}`);
            }
            
            
            const raw = await res.json();
            setRestaurant(raw)
            console.log(raw); // see raw in console
            
            } 
            catch (error) {
            console.error("Error fetching data:", error);
            }
    }
return restaurant;
}
export default useRestrauntMenu;
