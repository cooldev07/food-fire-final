function Shimmer(){
    const newArray = Array.from({ length: 20 });

    return <div className="mt-20 flex justify-center items-center flex-wrap gap-4">
       {newArray.map((val,index)=>{
        return  <div key={index+20} className="relative w-[300px] h-[400px] flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <div className="animate-pulse h-60 bg-gray-300 rounded-xl"></div>
        <div className="mt-4 px-5 pb-5">
            <div className="animate-pulse h-6 w-3/4 bg-gray-300 mb-2"></div>
            <div className="animate-pulse h-4 w-1/2 bg-gray-300 mb-3"></div>
            <div className="animate-pulse h-4 w-1/3 bg-gray-300 mb-3"></div>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="animate-pulse h-6 w-6 bg-gray-300 rounded-full flex justify-center items-center mr-1"></div>
                    <div className="animate-pulse h-6 w-16 bg-gray-300 rounded mr-2"></div>
                    <div className="animate-pulse h-6 w-16 bg-gray-300 rounded"></div>
                </div>
            </div>
            <div className="animate-pulse h-4 w-1/2 bg-gray-300 mt-2"></div>
            <div className="animate-pulse h-4 w-1/3 bg-gray-300"></div>
        </div>
    </div>
       })}
       
       
    </div>
}

export default Shimmer;