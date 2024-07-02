import Link from 'next/link';
import '../styles/register.scss'
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Register = () => {
    return (
      <div className='login-parent'>
        <div className='big-wrap'>
        <div className='login-wrap2'>
           <h1 className='title-login'>Come join us!</h1>
           <p className='descript-login'>We are so excited to have you here. If you haven't already create an account to get access to exclusive offers, rewards, and discounts.</p>
           <Link href={'/'} className='signup-parent'>
                <p>No account yet?</p>
                <p  className='p-signup'>Signup</p>
            </Link>
        </div>
        <div className='login-wrap1'>
           <h1>Signup</h1>
           <div className='parent-username'>
                <input className='input-username' placeholder='Enter Fullname' type="text" name="" />
           </div>
           <div className='parent-username'>
                <input className='input-username' placeholder='Enter Email' type="text" name="" />
           </div>
           <div className='parent-username'>
                <input className='input-username' placeholder='Enter Username' type="text" name="" />
           </div>
           <div className='parent-username'>
                <input className='input-password' placeholder='Enter Password' type="password" name="" />
           </div>
           <button className='button-submit'>
                Signup
           </button>
           <h3>Or signin with</h3>
           <div className='parent-icon'>
           <button className='icon-facebook'><i><FaFacebook/> </i></button>
           <button className='icon-google'><i><FaGooglePlus/> </i></button>
            <button className='icon-linkedin'><i><FaLinkedin/> </i></button>
           </div>

        </div>
        </div>
      </div>
    );
}
export default Register;