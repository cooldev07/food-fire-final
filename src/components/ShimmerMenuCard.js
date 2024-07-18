function ShimmerMenuCard() {
    const newArray = Array.from({ length: 20 });
    return (
      <div  
      key={crypto.randomUUID()}
      className=" m-y-[20px] m-auto w-[70%] gap-[10px] flex flex-col justify-center items-center">
         <div className=" px-3 py-4 pl-5 mt-12 flex flex-col gap-2 w-[100%] border rounded-xl bg-white shadow-xl dark:bg-neutral-700 text-left animate-pulse">
            <div className="h-8 w-2/3 bg-gray-300 rounded"></div>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="bg-green-600 mr-1 rounded-full h-6 w-6 flex justify-center items-center"></div>
                    <div className="h-6 w-16 bg-gray-300 rounded"></div>
                    <div className="h-6 w-6 bg-gray-300 rounded ml-2"></div>
                </div>
            </div>
            <div className="h-6 w-32 bg-gray-300 rounded"></div>
            <div className="h-6 w-24 bg-gray-300 rounded"></div>
            <div className="h-6 w-40 bg-gray-300 rounded mt-1"></div>
            <div className="h-6 w-52 bg-gray-300 rounded"></div>
        </div>
        {/* button */}
        <div className=" btn-container flex gap-2">
      <div className="focus:outline-none bg-gray-300 rounded-lg h-10 w-24 animate-pulse"></div>
      <div className="focus:outline-none bg-gray-300 rounded-lg h-10 w-24 animate-pulse"></div>
      <div className="focus:outline-none bg-gray-300 rounded-lg h-10 w-24 animate-pulse"></div>
    </div>
    {/*  */}
    {newArray.map(()=>{
        return(
            <div className="w-[100%] my-3 min-h-[220px] border-b pb-11 flex justify-between items-center py-[10px] px-[20px] mb-[10px] animate-pulse">
            <div className="flex flex-col gap-3 justify-around items-start w-[70%]">
              <div className="h-5 w-24 bg-gray-300 rounded"></div>
              <div className="h-6 w-32 bg-gray-300 rounded"></div>
              <div className="h-6 w-20 bg-gray-300 rounded"></div>
              <div className="h-6 w-28 bg-gray-300 rounded"></div>
              <div className="h-6 w-40 bg-gray-300 rounded"></div>
            </div>
            <div className="h-[150px] w-[150px] bg-gray-300 rounded-lg relative">
              <div className="absolute bottom-[-14px] left-1/2 transform -translate-x-1/2 bg-gray-300 h-8 w-24 rounded-md"></div>
            </div>
          </div>
        )
    })}
   
      </div>
    )
}

export default ShimmerMenuCard
