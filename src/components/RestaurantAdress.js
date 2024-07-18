import { FaBicycle } from "react-icons/fa";

function RestaurantAdress({restaurantAdress}){
const res=restaurantAdress.data.cards[2].card.card.info;
const name=res.name;
const city=res.city;
const areaName=res.areaName;
const cuisines=res.cuisines.join(", ");
const deliveryTime=res.sla.deliveryTime;
const distance=res.sla.lastMileTravelString;
const deliveryFee=res.feeDetails.totalFee;
const rating=res.avgRating;
const totalMemberRated=res.totalRatingsString;
const costForTwo=res.costForTwoMessage;
console.log(rating,totalMemberRated,costForTwo)
console.log(res)
return <div className="px-3 py-4 pl-5 mt-12  flex flex-col gap-2 w-[100%]  border  rounded-xl bg-white shadow-xl dark:bg-gray-900 dark:text-white text-left" >
        <h1 className="font-extrabold text-2xl text-black dark:text-white capitalize">{name}</h1>
        <div className="flex flex-col gap-2">
            {/*  */}
            <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <div className="bg-green-600 mr-1 rounded-[50%] h-6 w-6 flex justify-center items-center">
            <svg aria-hidden="true" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            </div>
            <span className="rounded mr-2  px-15  text-sm font-semibold">{rating} ({totalMemberRated}) <span className="mb-[2px] mx-1 rounded-[50%] w-[5px] h-[5px] inline-flex justify-center items-center bg-gray-600"></span> {costForTwo}</span>
          </div>
        </div>
        <p className="font-bold text-orange-600" >{cuisines}</p>
        <p
        className="text-gray-600  dark:text-white"
        ><span className="text-black font-semibold  dark:text-white">Outlet  </span>{areaName}</p>
      
        <p className=" dark:text-white text-black font-semibold">{deliveryTime}-{deliveryTime+5}mins</p>
        <p className=" dark:text-white border-t-[1px] pt-1 text-gray-600 flex justify-start items-center" >
            <FaBicycle className="w-[24px] h-[24px] mr-1 "/>
            {distance} | ₹{deliveryFee/100} Delivery fee will apply</p>
        
</div>
        </div>
}
export default RestaurantAdress;