
import React,{useState,useEffect} from "react";
import image_1 from "./aryan.jpg";
import image_2 from "./momo.jpg"
import image_4 from "./image_4.jpg"

function Imageslider(){
    const[data,setData]=useState([
        {
            image : image_2
        }
        ,{
            image : image_1,
        }
        ,{
            image : image_4,
        }
    ])
    const [index,setIndex]=useState(0)
    function Next(){
        // setIndex(index+1);
        if(index===data.length-1){
            setIndex(0);
        }
        else{
            setIndex(index+1); 
        }

    // alert('ok')

    }
    function Prev(){
        // console.log('object');
        // setIndex(index-1);
        if(index==0){
        setIndex(data.length-1)
        }
        else{
            setIndex(index-1)
        }
    }
    useEffect(() => {
        let interval=setTimeout(()=>{
            Next()
        },5000)
        return ()=>{}
    },[index])
    
    // setData(previous=>{
    //     return [...previous,{image:image_3}]
    // })
    // // setData([...data,{image:image_3}])
    return(
        <div className="flex justify-center items-center w-screen  p-20">
        <div className="w-full h-full border shadow-[0_35px_60px_-15px_rgba(128,128,128)] grid grid-cols-5 justify-center items-center p-5 gap-5 ">
            <div className="flex justify-end col-span-1 ">
                <button className="bg-violet-500 p-5 h-full rounded-lg text-white hover:bg-violet-600 active:bg-violet-700" onClick={()=>Prev()}>Prev</button>
            </div>
            <div className="
             overflow-hidden h-50 aspect-video col-span-3 rounded-lg border-2 border-gray-300 relative">
                {
                    data.map((val,i)=>{
                        if(i===index){
                            return <div style={{
                                position:"absolute",
                                top:"0",
                                contain:'',content:'',
                                left:"0",
                                height:"100%",
                                width:"100%",
                                backgroundImage:`url(${val.image})`,
                                // height:"550px", width:"550px",
                                backgroundSize:"100% 100%",
                                backgroundPosition:"center",
                                backgroundRepeat:"no-repeat",
                            }} className=' rounded-lg '></div>
                        }
                    })
                }
                
            </div>
            <div className="flex justify-start col-span-1 ">
                <button className="bg-violet-500 p-5 h-full rounded-lg text-white hover:bg-violet-600  active:bg-violet-700" onClick={()=>Next()}>Next</button>
            </div>
        </div>
        </div>
    )

}
export default Imageslider;