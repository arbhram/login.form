import React from "react";
// import './form.css';
import {AiOutlineMail} from 'react-icons/ai'
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as yup from 'yup'
const Schema=yup.object().shape({
    username:yup.string().min(6,'**more than 6 items**').required('**Username is required**'),
    email:yup.string().email('**invalid email**').min(12,'must be more than 12').required('**Email is necessary**'),
})
function Project(){
    const Submit = () => {
        alert('ok');
        }
    return(
        <div className="w-screen h-screen flex align-center justify-center">
            <div className="w-1/4 h-1/2 flex flex-col p-5 gap-1.5 border border-black">
            <Formik
                initialValues={{
                    username:'',
                    email:''
                }}
                validationSchema={Schema}
               onSubmit={values=>{
                // alert('ok');
                Submit();
                console.log(values)
               }}
            >
                {({handleSubmit})=>{
                     return <Form onSubmit={handleSubmit}>

                         <div className=" text-3xl font-medium">
                            <h1>Log In</h1>
                        </div>
                    <div className="flex flex-col gap-1.5 h-2/3">
                     <div className="username">
                         <label htmlFor="username">Username: </label>
                         <Field type='text' className='text-xl' name='username' id='username'  />
                         
                         <ErrorMessage className="text-xl" name="username" component={'h1'}  />
                         
                     </div>
                    <div className="email">
                        {/* <AiOutlineMail /> */}
                        <label>Email: </label>
                        <Field type='email' className='' name='email'/>
                        <ErrorMessage name="email" component={'h1'}/>
                    </div>
                    </div>
                    <div className="button">
                     <button type='submit'>Log in</button>
                    </div>
                 </Form>
                }}
            </Formik>
            </div>
        </div>
    )

}
export default Project;