import React,{useState,useEffect} from 'react';
import { Validate } from './Validate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./Singup.module.css";
import {Link} from "react-router-dom";

  
const Login = () => {


    const [data , setData]=useState({
       
        email:"",
        password:"",
        
    });
    const [errors,setErrors]=useState({});
    const [touched,setTouched]=useState({});
   

    useEffect(()=>{
        setErrors(Validate(data,"Login"))
       
    },[data])  

    const changHandeler=(event)=>{
        
            setData({...data,[event.target.name]:event.target.value})
      
       
    }
    const focousHandeler=(event)=>{
        setTouched({ ...touched,[event.target.name]:true})
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        
        if (!Object.keys(errors).length){
            toast.success("success dari!!!")
        }else{
            toast.error("Error dari!!!")
            setTouched({
                email:true,
                password:true,
                
            })
        }
    }
   

    
    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formcontainer}>
               <h2 className={styles.header}>Login</h2>
            
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
               
                
                <div className={styles.formbutton}>
                <Link to="/signup">SignUp</Link>
                    <button type='submit'>Login</button>
                </div>
                
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;