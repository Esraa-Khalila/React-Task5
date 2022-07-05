import {useState  , createContext} from 'react';
import React, { useContext } from 'react';
import  {context}  from "./Conte";
function Custome(em, pa){
const [email , setEmail] = useState("araa2@gmail.com");
const [pass , setpass] = useState("araa12345");
   const {Flag} = useContext(context);
console.log(Flag);
const Handlechange = () =>{
    if(em ==email && pa ==pass)
   {
    return  window.alert('Login is success');
   
   
   }else{
    window.alert('Login is danger');
   }
}
return(
   [email ,pass ,  Handlechange]
   )
}
export default Custome ;