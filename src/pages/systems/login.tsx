import Link from 'next/link';
import '@/styles/login.scss'
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Login = () => {
     return (
          <div className='login-parent'>
               <div className='big-wrap'>
                    <div className='login-wrap1'>
                         <h1>Signin</h1>
                         <div className='parent-username'>
                              <input className='input-username' placeholder='Enter Username' type="text" name="" />
                         </div>
                         <div className='parent-username'>
                              <input className='input-password' placeholder='Enter Password' type="password" name="" />
                         </div>
                         <button className='button-submit'>
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