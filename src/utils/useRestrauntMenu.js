import { useState,useEffect } from "react";
import { MENU } from "./constants";
const useRestrauntMenu=function(resId){
    const [restaurant,setRestaurant]=useState(null);
    useEffect(()=>{
    fetchData()
    },[])


    async function fetchData(){
        const req=await fetch(MENU+resId);
        const r=await req.json()
        setRestaurant(r)
        console.log(r)
    }
return restaurant;
}
export default useRestrauntMenu;