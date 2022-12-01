import React,{useState} from "react";

function Task(){

    const[value,setValue]=useState(0);
    function Increase(){
        setValue(value+1);
    }
    function Decrease(){
        if(value===0){
            alert("limit reached")
        }
        else{
        setValue(value-1);
        }
        
    }
    return(
        <div className='w-screen h-screen flex justify-center items-center'>
        <div className="w-1/5 h-2/5  flex flex-col justify-center items-center bg-white p-2 rounded-lg border-2 border-gray">
            <div className="w-full h-full p-2 flex justify-center items-center">
                <h1 className="text-4xl font-medium ">{value}</h1>
            </div>
            <div className="flex justify-between w-full">
                <button className="bg-gray-500 p-2 text-2xl rounded-lg text-white  hover:bg-gray-600  active:bg-gray-700" onClick={()=>Increase()}>Increase</button>
                <button className="bg-gray-500 p-2 text-2xl rounded-lg text-white  hover:bg-gray-600  active:bg-gray-700" onClick={()=>Decrease()}>Decrease</button>
            </div>
        </div>
        </div>
    )
}
export default Task;