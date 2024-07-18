import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addUserName } from "../utils/loginSlice"
function Login() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState({username:"",password:""})
    const navigate=useNavigate()
    const dispatch=useDispatch()

function handleSubmit(e){
    e.preventDefault();
    setError((c)=>{
      return {username:"",password:""}
    });
    if(username.length==0 ){
        setError((c)=>{
          return {...c,username:"username is required!"}
        })
        return
    }
    if(username.length<4){
      setError((c)=>{
        return {...c,username:"username must be minimun of 3characters!"}
      })
      return
    }
    if(password.length===0){
        setError((c)=>{
          return {...c,username:"password is required!"}
        })
        return
    }
        navigate("/");
        console.log("loggedIn")
        dispatch(addUserName(username))
        setError({})
}

    return (
        <div className="dark:text-white  dark:bg-gray-900 flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="dark:text-white  dark:bg-gray-900 flex flex-col justify-center items-center gap-4 p-6 border border-gray-300 shadow-lg bg-white rounded-lg"
      >
        <label className="text-gray-700 dark:text-white font-medium">Username:</label>
        <input
          className="border dark:bg-gray-900 border-gray-300 rounded-md p-2 w-64"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {error.username && <p className="text-red-500 text-sm">{error.username}</p>}
        
        <label className="dark:text-white text-gray-700 font-medium">Password:</label>
        <input
          className="border  dark:bg-gray-900 border-gray-300 rounded-md p-2 w-64"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.password && <p className="text-red-500 text-sm">{error.password}</p>}
        
        <button
          className="w-full text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          type="submit"
        >
          Confirm
        </button>
      </form>
    </div>
    )
}

export default Login
