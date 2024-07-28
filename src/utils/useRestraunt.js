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
        const req = fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01420&lng=76.99410&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')}`)
  .then(response => {
    if (response.ok) return response.json();
    throw new Error('Network response was not ok.');
  })
  .then(data => {
    const jsonObject = JSON.parse(data.contents);
    console.log(jsonObject);
    setResList(jsonObject)
    // Now jsonObject is a JavaScript object
  })
  .catch(error => console.error('Error:', error));
}
return resList
}
export default useRestraunt;
