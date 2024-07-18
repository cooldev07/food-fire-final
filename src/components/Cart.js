import { DISH_IMAGE } from "../utils/constants";
import EmptyCart from "./EmptyCart";
import { IoTriangle } from "react-icons/io5";
import { BiFoodTag } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart,removeItem,placeOrder} from "../utils/cartSlice"
import toast, { Toaster } from 'react-hot-toast';
function Cart(){
    // redux
    const dispatch=useDispatch()
const cartItem=useSelector((store)=>store.cart.items);
const order=useSelector((store)=>store.cart.order)
    const totalArr=cartItem.map((val)=>{
        console.log(val)
        let a=val.dish?.price?val?.dish?.price :val.dish?.defaultPrice;
        return a/100;
        
    })
    const total=totalArr.length>0?totalArr.reduce((acc,val)=>acc+val):"";
if(cartItem.length==0){
    return <EmptyCart/>
}
   const restaurantName=cartItem[0].restaurantName;
   const deliveryTime=cartItem[0].resInfo.data.cards[2].card.card.info.sla.deliveryTime;
   const deliveryFee=cartItem[0].resInfo.data.cards[2].card.card.info.feeDetails.amount/100;
    return <div className="dark:text-white dark:bg-gray-900 mt-2 flex justify-center flex-col items-center ">
            <h1 className="font-bold text-4xl mb-4 sm:w-[60%] w-[80%]">Cart</h1>
        <div className="sm:w-[60%] w-[80%]">
            <h1 className="font-semibold text-3xl ">{restaurantName}</h1>
            <div className="flex flex-col pt-3 justify-center items-start w-full">
                {cartItem.map((val)=>{
                    return <Dishes key={crypto.randomUUID()} val={val}/>
                })}
            </div>
     <div className="mb-8 p-2 dark:text-white dark:bg-gray-900 text-gray-800 font-medium mt-4 border border-gray-400 flex flex-col gap-4 rounded-lg shadow-lg">
            <h2 className="text-2xl">Bill Deatails</h2>
            <h5>item Total total:₹{total.toFixed(2)}</h5>
            <h5>deliveryFee: ₹{deliveryFee.toFixed(2)}</h5>
                <h5>Platform charge:₹{(5).toFixed(2)}</h5>
                <h5>GST:₹{(total*0.18).toFixed(2)}</h5>
                <h2>TO PAY:₹{total+deliveryFee+5+(total*0.18)}</h2>
            <button
            onClick={(e)=>{
                console.log("checked out")
                dispatch(placeOrder(cartItem));
                dispatch(clearCart())
                toast.success('Successfully order placed!')
                console.log(cartItem)

            }}
            className="w-[80%] m-auto p-10 text-white bg-gray-800 hover:bg-gray-900  font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >Check out</button>
        </div>
    </div>
    </div>
}

function Dishes({val}){
    const dishName=val.dish.name;
    const price=val.dish.defaultPrice?val.dish.defaultPrice:val.dish.price;
    const type=val.dish.itemAttribute.vegClassifier;
    const imageId=val.dish.imageId;
    console.log(val)
    const dispatch=useDispatch()
function handleRemove(id){
    toast.success('Removed from cart')
    console.log(id)
    dispatch(removeItem(id));
    }
    return <div className="max-h-[220px] dark:text-white dark:bg-gray-900   p-5 flex w-full flex-col justify-between items-center">
        <div className="dark:text-white  flex w-full justify-around items-center">
        <div className="w-[150px] h-[150px] rounded-lg">
            <img 
            className="object-cover w-[150px] h-[150px] rounded-lg"
            src={DISH_IMAGE+imageId} alt=""/>
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
        <div className="flex justify-between items-center gap-2">
        <span>{type=="NONVEG"?<IoTriangle className="
            border-[2px] rounded-sm border-red-600 
            text-red-600 w-[20px] h-[20px]"/>:
            <BiFoodTag className="text-green-600 w-[20px] h-[20px]" />}</span>
             {dishName}</div>
        <p>₹{(price/100).toFixed(2)}</p>
        </div>
        </div>
        <div className="self-end mt-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
           <button
           onClick={(e)=>{
            handleRemove(val.dishId)
           }}
           >remove</button> 
        </div>
            </div>
}
export default Cart;