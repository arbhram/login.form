import React,{useState} from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as yup from 'yup'
const Schema=yup.object().shape({
    firstName:yup.string().min(2,'**more than 2 items**').required('**First Name is required**'),
    lastName:yup.string().min(2,'**more than 2 items**').required('**Last Name is required**'),
    phoneNumber:yup.string().max(10,'**Invalid Number**').min(10,'**Invalid Number**').required('**Phone Number is required**'),
    email:yup.string().email('**invalid email**').min(12,'must be more than 12').required('**Email is necessary**'),
})

function ArrayDA(){
    const Submit = (value) => {
        // alert('ok');
        console.log(value)
        }
    const[value,setValue]=useState(
        [{
            name : "firstName",
            label: "First Name",
            type: "text",
            placeholder : "First Name"
        },{
            name : "lastName",
            label: "Last Name",
            type: "text",
            placeholder : "Last Name"
        },{
            name : "email",
            label : "Email",
            type: "email",
            placeholder: "Email",
        },{
            name: "password",
            label:"Password",
            type:"password",
            placeholder:"Password",

        },{
            name: "Cpassword",
            label:"Confirm Password",
            type:"password",
            placeholder:"Confirm Password",
        },{
            name: "phoneNumber",
            label:"Phone Number",
            type:"text",
            placeholder:"Phone Number",
        }]

        
    );
    return(
        <div className="w-screen h-fit flex justify-center items-center">
        <Formik 
                initialValues={{
                    firstName:'',
                    lastName:'',
                    phoneNumber:'',
                    email:''
                    
                }}
                validationSchema={Schema}
               onSubmit={values=>{
                // alert('ok');
                Submit(values);
                
               }}
            >
                
              
                {({handleSubmit})=>{
                    
                    return <Form className='w-3/5 h-6/7  border p-5 rounded-lg shadow-[0_35px_60px_-15px_rgba(128,128,128)]'>
                       
                                        <div className="w-full ">
                                            <p className='text-3xl font-medium'>Registration form</p>
                                        </div>
                                        
                                        <div className="w-full h-full grid lg:grid-cols-2  gap-5 mt-5 ">
                        {
                            value.map((val,i)=>{
                                return(
                                        
                                        <div className="w-full h-full flex flex-col gap-2">
                                        <label>{val.label}</label>
                                        <Field  className='border border-transparents  text-sm rounded-md p-5 ' type={val.type} name={val.name} placeholder={val.placeholder}/>
                                        <div className="w-full h-2">
                                        <ErrorMessage className="text-xs text-red-700 " name={val.name} component={'div'}  />
                                        </div> 
                                    </div> 
                                    
                                ) 
                                
                            })
                        }
                        </div>
                        <div className="flex flex-col lg:flex-row  justify-center gap-1 ">
                        <div className="w-full h-full flex-1 flex justify-center lg:justify-start items-center lg ">
                            <button className="bg-green-500 rounded-md p-3 font-sans text-white shadow hover:shadow-xl" onClick={()=>Submit()}>Sign Up</button>
                            </div>
                            <div className="flex-1 flex flex-col lg:flex-row  justify-end gap-1  items-center">
                            <p>Already have an account?</p>
                            <button className="bg-blue-500 rounded-md p-3 font-sans text-white">Log In</button>
                            </div>
                        </div>
                        
                        
                    </Form>
                }}
            </Formik>
            </div>
    )
}
export default ArrayDA;
    
