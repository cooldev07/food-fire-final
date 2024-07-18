import React, { useEffect, useState } from 'react'
import MenuCard from './MenuCard';
import RestaurantAdress from './RestaurantAdress';
import ShimmerMenuCard from './ShimmerMenuCard';
import { useParams,useLocation } from 'react-router-dom';
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import useRestrauntMenu from '../utils/useRestrauntMenu';
import useOnlineStatus from '../utils/useOnlineStatus';
import { IoIosArrowDown } from "react-icons/io";
import toast, { Toaster } from 'react-hot-toast';
function Menu() {
const {resId}=useParams();
const { pathname } = useLocation();
const resInfo=useRestrauntMenu(resId);
const [restaurant,setRestaurant]=useState([]);
const  [restaurantName,setRestaurantName]=useState("");
const [recommentedDish,setRecommentedDish]=useState([]);
const [category,setCategory]=useState([]);
const [type,setType]=useState("");
const status=useOnlineStatus()
const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <IoIosArrowDown className='chevron'/>
      </>
    }
    className="item"
    buttonProps={{
      className: ({ isEnter }) =>
        `itemBtn ${isEnter && "itemBtnExpanded"}`,
    }}
    contentProps={{ className: "itemContent" }}
    panelProps={{ className: "itemPanel" }}
  />
);
useEffect(()=>{
  if(resInfo){
        setRestaurant(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        handleCategory(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        handleRecommented(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        setRestaurantName(resInfo?.data.cards[0]?.card?.card?.text);
  }
},[resInfo])
useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);

function handleCategory(restaurant){
let arr=restaurant?.filter((val)=>val?.card?.card?.title && val?.card?.card?.title !=="Recommended");
  setCategory([...arr])
}
function handleRecommented(res){
    let recomm=res?.find((val)=>val?.card?.card?.title==="Recommended");
    if(recomm){
      setRecommentedDish(recomm?.card?.card?.itemCards)

    }else{
      setRecommentedDish(res[5]?.card?.card?.itemCards)

    }
}
if(status===false){
  return <h1>Look like you are offline!!Please check you internet</h1>
}
if(recommentedDish?.length===0){
  return <ShimmerMenuCard/>
}

  return (
    <div className='dark:bg-gray-900 dark:text-white m-y-[20px] m-auto w-[70%] gap-[10px] flex flex-col justify-center items-center'>
      <RestaurantAdress restaurantAdress={resInfo}/>
      <div className='btn-container'>
      <button 
      onClick={(e)=>{
        toast.success('Filtered veg only')
        setType("VEG")}
      }
      className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>veg</button>
      <button
      onClick={(e)=>{
        toast.success('Filtered non-veg only')
        setType("NONVEG")
      }}
      className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>nongveg</button>
      <button 
      onClick={(e)=>{
        toast.success('Reseted!')
        setType("")
      }}
      className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>reset</button>
      </div>
      <Accordion
     >
      <AccordionItem

      key={crypto.randomUUID()}
      header={`Recommended`} 
      initialEntered
      >
  {recommentedDish?.map((val)=>{
    let a=val?.card?.info?.itemAttribute?.vegClassifier;
    if(type==""){
      return <MenuCard 
      key={crypto.randomUUID()}
      type={type}
      restaurantName={restaurantName}
      resInfo={resInfo}
      dish={val}/>
    }
if(a===type){
  return <MenuCard 
      key={crypto.randomUUID()}
      type={type}
      restaurantName={restaurantName}
      resInfo={resInfo}
      dish={val}/>
      
}
  }
    )}
      </AccordionItem >
        {category?.map((category)=>{
          let title=category?.card?.card?.title; 
          if(!category?.card?.card?.itemCards){
            return;
          }
          else{
          return <AccordionItem
             key={crypto.randomUUID()}
            header={title}
            >
            { category?.card?.card?.itemCards.map((val)=>{
        let a=val.card?.info?.itemAttribute?.vegClassifier;
    if(type==""){
       return <MenuCard 
        key={crypto.randomUUID()}
        type={type}
        restaurantName={restaurantName}
      resInfo={resInfo}

        dish={val}/>
    }
    if(a===type){
    return <MenuCard 
      key={crypto.randomUUID()}
      type={type}
      restaurantName={restaurantName}
      resInfo={resInfo}

      dish={val}/>
    }
          })
      }
      </AccordionItem>
      }
        })}
    </Accordion>
    </div>
  )
}

export default Menu
