import Link from 'next/link';
import '../styles/submitCode.scss'
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Register = () => {
     return (
          <div className='login-parent'>
               <div className='big-wrap'>
                    <div className='login-wrap1'>
                         <h1>Verify your account</h1>
                         <div className='parent-username'>
                              <input className='input-username' placeholder='Enter auth code' type="text" name="" />
                         </div>
                         <button className='button-submit'>
                              Submit
                         </button>
                         <h3>Or signin with</h3>
                         <div className='parent-icon'>
                              <button className='icon-facebook'><i><FaFacebook /> </i></button>
                              <button className='icon-google'><i><FaGooglePlus /> </i></button>
                              <button className='icon-linkedin'><i><FaLinkedin /> </i></button>
                         </div>

                    </div>
                    <div className='login-wrap2'>
                         <h1 className='title-login'>Dive into the Community with Us!</h1>
                         <p className='descript-login'>Welcome to the password reset page! For security purposes, please sign in to manage your account and update your password.</p>
                         <Link href={'/'} className='signup-parent'>
                              <p>No account yet?</p>
                              <p className='p-signup'>Signup</p>
                         </Link>
                    </div>
               </div>
          </div>
     );
}
export default Register;