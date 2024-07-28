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
          fetch(`https://api.allorigins.win/get?url=${encodeURIComponent("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.01420&lng=76.99410&restaurantId="+resId)}`)
        .then(response => {
            if (response.ok) return response.json()
            throw new Error('Network response was not ok.')
        })
        .then(data => {
            const jsonObject = JSON.parse(data.contents);
            console.log(jsonObject);
            setRestaurant(jsonObject)
        }).catch(error => console.error('Error:', error));
    }
return restaurant;
}
export default useRestrauntMenu;
