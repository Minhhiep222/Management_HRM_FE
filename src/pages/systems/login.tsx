"use client";
import Link from 'next/link';
import '@/styles/login.scss'
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useState, useEffect, use } from 'react';
import axios from 'axios'

const Login = () => {

     const [changeValue,setChangeValue] = useState({
          username: '',
          password: '',
          role: '',
     });
     const [error,setError] = useState();

     const handleChangeValue = (e) => {
          setChangeValue({
               ...changeValue,
               [e.target.name] : e.target.value,         
          })
     }
     
     const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', changeValue);
        
            if(response.data.message) {
               alert(response.data.message); 
               window.location.href = '/overview';
            }  
          } catch (error) {
               setError(error.response.data.errors);
          }
        };
       

    
     useEffect(() => {
          
        if(error) {
         if(error.username == 'The username field is required.') {
          setError('')
          return alert('Tài khoản đăng nhập không được phép rỗng')
         }
         else if(error.username == 'The username field must not be greater than 255 characters.') {
          setError('')
          return alert('Tài khoản đăng nhập không được vượt quá 255 ký tự')
         } 
         else if(error.password == 'The password field is required.') {
          setError('')
          return alert('Mật khẩu không được phép rỗng')
         } 
         else if(error.password == 'The password field must be at least 2 characters.') {
          setError('')
          return alert('Mật khẩu không được phép nhỏ bé 2 ký tự')
         } 
         else if(error.role == 'The role field is required.') {
          setError('')
          return alert('Chưa chọn quyền đăng nhập')
         } 
           alert(error);
           setError('');
           return;
        }
     },[error])   

       
     
          
   
      
     return (
          <div className='login-parent'>
               <div className='big-wrap'>
                    <div className='login-wrap1'>
                         <h1>Signin</h1>
                         <div className='parent-username'>
                              <input 
                              onChange={handleChangeValue}
                             className='input-username' placeholder='Enter Username' type="text" name="username" />
                        
                         </div>
                         <div className='parent-username'>
                              <input onChange={handleChangeValue}  className='input-password' placeholder='Enter Password' type="password" name="password" />
                         </div>
                         <div  className='parent-radio'>    
                              <div className='parent-rdEmployee'>
                                   <label htmlFor="">nhân viên</label>
                                   <input onClick={handleChangeValue} value={'nv'} type="radio" name="role" id="employee" />
                              </div>
                              <div className='parent-rdEmployee'>
                                   <label htmlFor="">Quản lý</label>
                                   <input onClick={handleChangeValue} type="radio" name="role" value={'ql'}  id="manager" />
                              </div>
                              <div className='parent-rdEmployee'>
                                   <label htmlFor="admin">Quản trị viên</label>
                                   <input onClick={handleChangeValue} type="radio" name="role" value={'qtv'} id="admin" />
                              </div>
                         </div>
                         <button onClick={handleSubmit} className='button-submit'>
                              Signin
                         </button>
                         <h3>Or signin with</h3>
                         <div className='parent-icon'>
                              <button className='icon-facebook'><i><FaFacebook /> </i></button>
                              <button className='icon-google'><i><FaGooglePlus /> </i></button>
                              <button className='icon-linkedin'><i><FaLinkedin /> </i></button>
                         </div>
                         <div className='parent-forgotpassword'>
                              <p>Forgot password?</p>
                              <Link href={'/submitEmail'} className='p-resetPass'>Reset password</Link>
                         </div>
                        
                    </div>
                    <div className='login-wrap2'>
                         <h1 className='title-login'>Welcome back!</h1>
                         <p className='descript-login'>Welcome back! we are so happy to have you here. it's greate to see you again. We hope you had a safe and enjoyable time away.</p>
                         <Link href={'/systems/register'} className='signup-parent'>
                              <p>No account yet?</p>
                              <p className='p-signup'>Signup</p>
                         </Link>
                    </div>
               </div>
          </div>
     );
}
export default Login;