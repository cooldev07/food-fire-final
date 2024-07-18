import { Link } from "react-router-dom";
import { URL } from "../utils/constants";
function Card(props) {
    const {areaName,avgRating,costForTwo,cuisines,name,cloudinaryImageId,id}=props.restaurant.info;
    const {aggregatedDiscountInfoV3}=props.restaurant.info;
    const discount=aggregatedDiscountInfoV3?.header;
    const upto=aggregatedDiscountInfoV3?.subHeader;
    const {deliveryTime}=props.restaurant.info.sla;
  return (
    <Link 
    key={id}
    to={"/menu/"+id}>
    <div className="dark:bg-gray-900 dark:text-white hover:scale-90 transition-transform duration-300 relative w-[300px] h-[400px] flex  flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
        <img className="object-cover w-[100%] h-[100%]" src={` ${URL}${cloudinaryImageId}`} alt="product image" />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{discount=="ITEMS"?"":discount} {upto?`${ upto}`:""}</span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className=" dark:text-white text-xl tracking-tight font-extrabold text-slate-900">{name}</h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <div className="flex items-center justify-start">
            <div className="bg-green-600 mr-1 rounded-[50%] h-6 w-6 flex justify-center items-center">
            <svg aria-hidden="true" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            </div>
            <span className="rounded mr-2  px-15  text-sm font-semibold">{avgRating}</span>
            {/*  */}
            <span className=" rounded   px-2.5  text-sm font-bold">{deliveryTime}-{deliveryTime+5}mins</span>
          </div>
        </div>
    <p className="tracking-tight text-gray-500  dark:text-white font-medium">
        {cuisines.join(" ,")}
    </p>
    <p className="tracking-tight text-gray-500  dark:text-white font-medium">
        {areaName}
    </p>
      </div>
    </div>
    </Link>
  );
}




export default Card;