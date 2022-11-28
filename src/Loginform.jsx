import React from "react";
// import './form.css';
import {AiOutlineMail} from 'react-icons/ai'
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as yup from 'yup'
import image from "./aryan.jpg"
const Schema=yup.object().shape({
    firstName:yup.string().min(2,'**more than 2 items**').required('**First Name is required**'),
    lastName:yup.string().min(2,'**more than 2 items**').required('**Last Name is required**'),
    phoneNumber:yup.string().max(10,'**Invalid Number**').min(10,'**Invalid Number**').required('**Phone Number is required**'),
    email:yup.string().email('**invalid email**').min(12,'must be more than 12').required('**Email is necessary**'),
})
function Loginform(){
    const Submit = (value) => {
        // alert('ok');
        console.log(value)
        }
    return(
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
                     return <Form onSubmit={handleSubmit}>
                        <div className="w-screen h-screen flex  items-center justify-center">
            <div className="w-10/12 h-6/7 grid grid-cols-7     shadow-[0_35px_60px_-15px_rgba(128,128,128)] bg-gray-100 rounded-lg">
                        <div className="col-span-3   flex flex-col justify-center items-center p-0">
                            <img src={image} className='h-full w-full rounded-lg' />
                        </div>
                        <div className="col-span-4 p-5 ">
                         <div className=" h-10 text-3xl font-medium flex align-center border border-transparent">
                            <h1>Registration Form</h1>
                        </div>
                    <div>
                        <div className="grid grid-cols-2  gap-5 text-s font-small mt-10 font-sans "  >
                     <div className="flex flex-col gap-2">
                         <label htmlFor="First Name">First Name : </label>
                         <Field type='text' className='border border-transparents  text-s rounded-md p-1 ' name='firstName' id='firstName'/>
                         <ErrorMessage className="text-xs text-red-700" name="firstName" component={'div'}/>    
                     </div>
                     <div className="flex flex-col gap-1">
                         <label htmlFor="Last_Name">Last Name :</label>
                         <Field type='text' className='border border-transparents text-s rounded-md p-1' name='lastName' id='lastName'  />
                         <ErrorMessage className="text-xs text-red-700" name="lastName" component={'div'}  />    
                     </div>
                     <div className="flex flex-col gap-1">
                         <label htmlFor="email">Email :</label>
                         <Field type='email' className='border border-transparents text-s rounded-md p-1' name='email' id='email'  />
                         <ErrorMessage className="text-xs text-red-700" name="email" component={'div'}  />    
                     </div>
                     <div className="flex flex-col gap-1">
                         <label htmlFor="Phone Number">Phone Number :</label>
                         <Field type='text' className="border border-transparents focus:border-red  text-s rounded-md p-1" name='phoneNumber' id='phoneNumber'/>
                         <ErrorMessage className="text-xs text-red-700" name="phoneNumber" component={'div'}  />    
                     </div>
                     <div className="flex flex-col gap-1" >
                        <label>Gender</label>
                        <Field as='Select' className='border-b border-transparents p-2 rounded-md  text-black' >
                            <option>Select Gender</option>
                            <option value={'male'}>Male</option>
                            <option value={'female'}>Female</option>
                            <option value={'others'}>Others</option>
                            <option value={'prefer Not to say'}>Prefer Not to say</option>
                        </Field>
                     </div>
                     <div className="flex flex-col gap-1">
                         <label htmlFor="password">Password :</label>
                         <Field type='password' className="border border-transparent focus:border-red  text-s rounded-md p-1" name='password' id='password'   />
                         <ErrorMessage className="text-xs text-red-700" name="last Name" component={'p'}  />    
                     </div>
                     <div className="flex flex-col gap-1">
                         <label htmlFor="password">Confirm Password :</label>
                         <Field type='password' className="border border-transparents focus:border-red  text-s rounded-md p-1" name='Cpassword' id='password'   />
                         <ErrorMessage className="text-xs text-red-700" name="last Name" component={'p'}  />    
                     </div>
                     <div className="flex flex-col gap-1">
                         <label htmlFor="querries">Any Querries :</label>
                         <Field type='text' className="border border-transparents focus:border-red  text-s rounded-md p-1" name='querries' id='querries'   />
                         <ErrorMessage className="text-xs text-red-700" name="last Name" component={'p'}  />    
                     </div>
                     <div className="w-full  flex justify-start items-center p-2">
                        <button className="bg-green-500 rounded-md p-3 font-sans text-white shadow hover:shadow-xl" onClick={Submit}>Sign in</button>
                     </div>
                     <div className="w-full flex justify-end  items-center gap-1.5 font-sans text-sm">
                        <p>Have an account?</p>
                        <button className="bg-blue-500 rounded-md p-3 font-sans text-white">Login</button>
                     </div>
                     </div>
                     </div>
                     </div>
                     </div>
                     </div>
                 </Form>
                }}
            </Formik>
            
       
    )

}
export default Loginform;
