import { Link } from "react-router-dom";
function EmptyCart(){
    return <div className="dark:text-white h-screen dark:bg-gray-900 flex flex-col justify-center items-center">
        <div className="w-[340px] h-[340px]">
            <img
            className="object-contain"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="ima"/>
        </div>
        <h2 className="mt-1 text-gray-700 font-bold text-2xl">Your cart is empty</h2>
        <p className="mt-1 font-medium text-xl text-gray-500 " >You can go to home page to view more restaurants</p>
      <Link to="/">
       <button
        className="mt-2 w-[320px] h-[50px]  bg-gray-800 text-white
        font-bold uppercase text-xl
        "
        >see restaurants near You</button>
        </Link> 
    </div>
}
export default EmptyCart;