import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup=()=>{
    const navigate=useNavigate();
    const[firstname,setFirstname]=useState('');
    const[lastname,setLastname]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const [message,setMessage]=useState('');

    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
        if(!firstname || !lastname || !email || !password){
            setMessage("Fields Cannot be Empty !!");
        }
        const result=await axios.post('http://localhost:3000/api/signup',{firstname,lastname,email,password});
        if(result.data === "success"){
            navigate('/login');
        }else{
            console.log(result.data);
            setMessage(result.data);
        }
    }catch(err){
        console.log(err.message);
    }}

    return(
        <>
        <div className="flex justify-center items-center w-full h-screen bg-blue-100 bg-gradient-to-br from-red-400 via-green to-yellow-300">
            <div className="flex flex-col gap-2 justify-center items-center w-[30%] bg-white/20 backdrop-blur-xl ring-1 ring-white/40 rounded-xl ">
                <h1 className="text-2xl mt-1">Sign-up</h1>
                <form className="flex flex-col justify-center items-center w-full gap-3 py-3" onSubmit={handleSubmit}>
                    <div className="w-full px-10">
                        <h4 className="text-lg ml-2">Firstname :-</h4>
                        <input className="w-full h-8 border rounded-xl pl-2" type="text" placeholder="Enter firstname" name="firstname" onChange={(e)=>{setFirstname(e.target.value)}}/>
                    </div>
                    <div className="w-full px-10">
                        <h4 className="text-lg ml-2">Lastname :-</h4>
                        <input className="w-full h-8 border rounded-xl pl-2" type="text" placeholder="Enter lastname" name="lastname" onChange={(e)=>{setLastname(e.target.value)}}/>
                    </div>
                    <div className="w-full px-10">
                        <h4 className="text-lg ml-2">Email :-</h4>
                        <input className="w-full h-8 border rounded-xl pl-2" type="text" placeholder="Enter Email" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div className="w-full px-10">
                        <h4 className="text-lg ml-2">Password :-</h4>
                        <input className="w-full h-8 border rounded-xl pl-2" type="text" placeholder="Enter Password" name="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center">
                        {typeof message === 'string' && <p className="text-red-600">{message}</p>}
                        <button className="w-[30%] bg-blue-500 rounded-xl mx-35 h-8 active:bg-blue-400 my-1" type="submit">Sign-up</button>
                        <div className="w-full flex justify-center ">
                            <p>Have a account ?</p>
                            <Link to='/login' className="text-blue-900 ml-1">login</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Signup;