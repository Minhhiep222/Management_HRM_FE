"use client";

import Link from 'next/link';
import '@/styles/register.scss'
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ChangeEvent, MouseEvent, use, useEffect, useState } from 'react';
import axios from 'axios';

const Register = () => {

     const [changeValue, setChangeValue] = useState(
          {

               email: '',
               username: '',
               password: '',
               role: 'nv',
          }
     );
     const [errors, setErrors] = useState();
     const [departments, setDepartments] = useState([]);

     const handleSetChangeValue = (e: any) => {
          console.log(changeValue);
          setChangeValue({
               ...changeValue,
               [e.target.name]: e.target.value,
          })
     }
     const handleSubmit = async (e) => {
          e.preventDefault();

          //     const DOB = `${changeValue.year}/${changeValue.month}/${changeValue.day}`;
          //     const address = `${changeValue.district}/${changeValue.city}/${changeValue.country}`;
          const newObj = {
               email: changeValue.email,
               username: changeValue.username,
               password: changeValue.password,
               role: 'nv',
          }
          try {
               const response = await axios.post('http://127.0.0.1:8000/api/register', newObj);
               console.log("value submit", newObj);
               alert(response.data.message);
          } catch (error) {
               setErrors(error.response.data.errors);
               console.log(error.response.data.errors);
          }
     }
     // console.log("value submit",changeValue);

     useEffect(() => {
          {
               if (errors.password == "The password field is required.") {
                    setErrors("");
                    return alert('Mật khẩu không được phép rỗng');
               }
               else if (errors.username == "The username field is required.") {
                    setErrors("");
                    return alert('Tên tài khoản không được phép rỗng');
               }
               else if (errors.role == "The role field is required.") {
                    setErrors("");
                    return alert('Mật khẩu không được phép rỗng');
               }
               else {
                    // console.log(changeValue);
                    // console.log(errors);
                    alert(errors)
               }
          }
     }, [errors]);

     return (
          <div className='login-parent'>
               <div className='big-wrap'>
                    <div className='login-wrap2'>
                         <h1 className='title-login'>Come join us!</h1>
                         <p className='descript-login'>We are so excited to have you here. If you haven't already create an account to get access to exclusive offers, rewards, and discounts.</p>
                         <Link href={'/'} className='signup-parent'>
                              <p>No account yet?</p>
                              <p className='p-signup'>Signup</p>
                         </Link>
                    </div>
                    <div className='login-wrap1'>
                         <form action="">
                              <h1>Signup</h1>
                              <div className='parent-username'>
                                   <input onChange={handleSetChangeValue} className='input-username' placeholder='Enter Fullname' type="text" name="fullName" />
                              </div>

                              <div className='parent-DOB'>
                                   <input onChange={handleSetChangeValue} className='input-Day' placeholder='Enter Day' type="text" name="day" />
                                   <input onChange={handleSetChangeValue} className='input-Month' placeholder='Enter Month' type="text" name="month" />
                                   <input onChange={handleSetChangeValue} className='input-Year' placeholder='Enter Year' type="text" name="year" />
                              </div>

                              <div className='parent-phone'>
                                   <input onChange={handleSetChangeValue} className='input-phone' placeholder='Enter Phone' type="text" name="phone" />
                                   <div className={'custom-select'}>
                                        <select className="custom" name="department_id" onChange={handleSetChangeValue}>
                                             <option disabled selected hidden>Phòng ban</option>
                                             {
                                                  departments.map((department, index) => (
                                                       <option className="department_id" value={department.id}>{department.departments_name}</option>
                                                  ))
                                             }

                                        </select>
                                   </div>
                              </div>
                              <div className='parent-username'>
                                   <input onChange={handleSetChangeValue} className='input-username' placeholder='Enter Email' type="text" name="email" />
                              </div>
                              <div className='parent-DOB'>
                                   <input onChange={handleSetChangeValue} className='input-Day' placeholder='Enter District' type="text" name="district" />
                                   <input onChange={handleSetChangeValue} className='input-Month' placeholder='Enter City' type="text" name="city" />
                                   <input onChange={handleSetChangeValue} className='input-Year' placeholder='Enter Country' type="text" name="country" />
                              </div>
                              <div className='parent-username'>
                                   <input onChange={handleSetChangeValue} className='input-username' placeholder='Enter Username' type="text" name="username" />
                              </div>
                              <div className='parent-username'>
                                   <input onChange={handleSetChangeValue} className='input-username' placeholder='Enter Password' type="password" name="password" />
                              </div>

                              <div className='parent-radio'>
                                   <div className='parent-employee'>
                                        <label htmlFor="employee">Nhân viên</label>
                                        <input onChange={handleSetChangeValue} className='input-employee' id='employee' placeholder='Enter Password' value='nv' type="radio" name="role" />
                                   </div>

                                   <div className='parent-employee'>
                                        <label htmlFor="manager">Quản Lý</label>
                                        <input onChange={handleSetChangeValue} className='input-employee' id='manager' placeholder='Enter Password' value='ql' type="radio" name="role" />
                                   </div>

                                   {/* {
                                   departments.map(department => {
                                        
                                   })
                              }
           */}
                              </div>


                              <button onClick={handleSubmit} className='button-submit'>
                                   Signup
                              </button>

                         </form>

                         {/* <h3>Or signin with</h3>
                         <div className='parent-icon'>
                              <button className='icon-facebook'><i><FaFacebook /> </i></button>
                              <button className='icon-google'><i><FaGooglePlus /> </i></button>
                              <button className='icon-linkedin'><i><FaLinkedin /> </i></button>
                         </div> */}

                    </div >
               </div >
          </div >




     );
}
export default Register;