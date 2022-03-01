import React,{useState,useEffect} from 'react';
import { Validate } from './Validate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./Singup.module.css"
import {Link} from "react-router-dom"

  
const Signup = () => {


    const [data , setData]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        isAccepted:false,
    });
    const [errors,setErrors]=useState({});
    const [touched,setTouched]=useState({});
   

    useEffect(()=>{
        setErrors(Validate(data,"singup"))
       
    },[data])  

    const changHandeler=(event)=>{
        if (event.target.name==="isaccepted"){
            setData({...data,[event.target.name]:event.target.checked})
        }else{
            setData({...data,[event.target.name]:event.target.value})
        }
       
    }
    const focousHandeler=(event)=>{
        setTouched({ ...touched,[event.target.name]:true})
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        
        if (!Object.keys(errors).length){
            toast.success("success!!!")
        }else{
            toast.error("Error!!!")
            setTouched({
                name:true,
                email:true,
                password:true,
                confirmPassword:true,
                isAccepted:true
                
            })
        }
    }
   

    
    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formcontainer}>
               <h2 className={styles.header}>SignUp</h2>
                <div className={styles.formfield}>
                    <label>Name</label>
                    <input type="text" name="name" value={data.name} onChange={changHandeler}  onFocus={focousHandeler} className={(errors.name && touched.name) ? styles.uncompleted : styles.forminput }/>
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div className={styles.formfield}>
                    <label>Email</label>
                    <input type="text" name="email" value={data.email} onChange={changHandeler} onFocus={focousHandeler} className={(errors.name && touched.name) ? styles.uncompleted : styles.forminput }/>
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formfield}> 
                    <label>Password</label>
                    <input type="text" name="password" value={data.password} onChange={changHandeler} onFocus={focousHandeler} className={(errors.name && touched.name) ? styles.uncompleted : styles.forminput }/>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.formfield}>
                    <label>Confirm Password</label>
                    <input type="text" name="confirmPassword" value={data.confirmPassword} onChange={changHandeler} onFocus={focousHandeler} className={(errors.name && touched.name) ? styles.uncompleted : styles.forminput }/>
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div className={styles.formfield}>
                    <div className={styles.checkbox}>
                    <label>I accet terms of privacy policy</label>
                    <input type="checkbox" name="isaccepted" value={data.isAccepted} onChange={changHandeler} onFocus={focousHandeler} className={(errors.name && touched.name) ? styles.uncompleted : styles.forminput }/>
                    </div>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div className={styles.formbutton}>
                    <Link to="/login">Login</Link>
                    <button type='submit'>Sign Up</button>
                </div>
                
            </form>
            <ToastContainer />
        </div>
    );
};

export default Signup;