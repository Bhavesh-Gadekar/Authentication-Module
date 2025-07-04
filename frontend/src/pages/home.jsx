import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// axios.defaults.withCredentials=true;
const Home=()=>{
    const navigate=useNavigate();
    const handleOnclick=()=>{
        axios.post("http://localhost:3000/api/logout",{},{withCredentials:true})
        .then(result=> {
            if(result.data === "success"){
                console.log("Logged-Out Successfully !!");
                navigate('/login');
            }
        })
        .catch(err=>err.message)
    }
    
    axios.defaults.withCredentials=true;
    useEffect(()=>{
        axios.get("http://localhost:3000/home")
    .then(response =>{ 
        if(response.data === "Notoken"){
            navigate('/login');
        }
        console.log(response.data)})
    .catch(error => console.log(error));
    },[])

    return(
        <>
        <h1>Home here </h1>
        <button className="w-25 bg-blue-500 rounded-xl mx-35 h-8 active:bg-blue-400" onClick={handleOnclick} type="submit">logout</button>
        </>
    )
}

export default Home;