import { DISH_IMAGE } from "../utils/constants";
import { FaStar } from "react-icons/fa6";
import { IoTriangle } from "react-icons/io5";
import { BiFoodTag } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import toast, { Toaster } from 'react-hot-toast';
function MenuCard({dish,type,restaurantName,resInfo}) {
    const details=dish.card.info;
    const {ratings}=details;
    const dispatch=useDispatch()
    const notify = function(res){
        console.log(res.dish.name)
        toast.success(`${res.dish.name} added`,{
            duration: 1000,
        });
    } 
    function handleAddDishes(restroInfo){
        dispatch(addItem(restroInfo));
        notify(restroInfo)
    }
    return (
        <div className=" dark:text-white my-3 min-h-[220px] border-b pb-11  flex justify-between items-center py-[10px] px-[20px] mb-[10px]">
            <div className=" dark:text-white flex flex-col gap-3 justify-around items-start w-[70%]">
            <p >{details.itemAttribute?.vegClassifier=="NONVEG"?<IoTriangle className="
            border-[2px] rounded-sm border-red-600 
            text-red-600 w-[20px] h-[20px]"/>:
            <BiFoodTag className="text-green-600 w-[20px] h-[20px]" />}</p>
            <h2
            className="font-bold text-gray-700 text-lg  dark:text-white"
            >{details.name}</h2>
            <h3 className="font-semibold">₹{details.price/100 || details.defaultPrice/100}</h3>
           {ratings?.aggregatedRating?.rating && <div
            className="text-green-600 font-semibold flex justify-center items-center"
            ><FaStar className="mr-1"/>{details.ratings.aggregatedRating.rating}
            <span className="tracking-tight  dark:text-white text-gray-500 font-medium">
               {ratings.aggregatedRating.ratingCountV2?`(${ratings.aggregatedRating.ratingCountV2})`:""}
                </span></div>}
            <p className=" dark:text-white tracking-tight text-gray-500 font-medium">{details.description}</p>
            {/*  */}
            </div>
            <div className="h-[150px] w-[150px] relative">
           {details.imageId&& <img
            className="w-[150px] h-[150px] rounded-lg"
            src={DISH_IMAGE+details.imageId} alt="hello"/>}
              <button
            className="
            font-bold
            absolute bottom-[-14px] left-1/2 transform -translate-x-1/2 bg-white text-green-500 px-4 py-2 rounded-md shadow-md hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 
            focus:ring-opacity-5 transition-all duration-300"
            onClick={(e)=>{
               handleAddDishes({dish:dish.card.info,resInfo:resInfo,restaurantName:restaurantName,dishId:dish.card.info.id})
       
            }}
            >ADD</button>
            </div>
            
        </div>
    )
} 

export default MenuCard
