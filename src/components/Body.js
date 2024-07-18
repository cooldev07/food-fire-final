import Card from "./Card";
import useRestraunt from "../utils/useRestraunt";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
function Body(){
    const resList=useRestraunt();
    const [listOfRestaurant,setListOfRestaurant]=useState([]);
    const [filterList,setFilterList]=useState([]);
    const [searchRestaurant,setSearchRestaurant]=useState("")
    const status=useOnlineStatus()
    useEffect(()=>{
        let a=resList?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        console.log(a)
        setListOfRestaurant(a)
        setFilterList(a)
    },[resList])
    useEffect(()=>{
        if(searchRestaurant==="" || searchRestaurant===" "){
            setFilterList(listOfRestaurant)
        }else{
        const arr=filterList.filter((val)=>{
            if(val.info.name.toLowerCase().startsWith(searchRestaurant)){
                return val;
            }
        })
        setFilterList(arr)
    }
    },[searchRestaurant])
   
if(status===false){
    return <h1>look like you are offline</h1>
}
    return (filterList?.length===0 && searchRestaurant==="")?
            (<Shimmer/>):
            
            (<div className="body dark:bg-gray-900 dark:text-white">
         <div className="w-full dark:bg-gray-900 flex justify-center gap-4 items-center mt-4 flex-wrap sm:flex-row">
         <input
         className="w-[220px] border border-gray-800 text-gray-900 bg-gray-100 hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-500 dark:border-gray-600"
                type="text" 
                value={searchRestaurant}
                onChange={(e)=>{
                    setSearchRestaurant(e.target.value.trim().toLowerCase())
                
                }}
                />
            <button
                  className="w-[auto] text-white bg-gray-800 hover:bg-gray-900  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={()=>{
                const filteredList=filterList.filter((res)=>res.info.avgRating>4.5);
                setFilterList((c)=>filteredList);
            }}
            >Ratings 4.5+</button>
                   <button
 className="w-[auto] text-white bg-gray-800 hover:bg-gray-900  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={()=>{setFilterList([...listOfRestaurant])}}
        >Reset</button>
       
            </div>
        <div className="min-h-[100vh] flex justify-center items-center flex-wrap gap-4 dark:bg-gray-900">
        {filterList?.map((val,i)=>
            {
                
            return <Card restaurant={val} key={i+22}/>
            }
        )}
        {filterList?.length===0 && searchRestaurant !==""&& `we cant find ${searchRestaurant}`}
        </div>
        </div> )
}
export default Body;

