import { useEffect,useState } from "react"

const useOnlineStatus=function(){
    const [status,setStatus]=useState(true);
    useEffect(()=>{
        window.addEventListener("online",function(e){
            setStatus(true)
        })
        window.addEventListener("offline",function(e){
            setStatus(false)
        })
    },[])
    
    return status;
}
export default useOnlineStatus;