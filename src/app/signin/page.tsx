"use client";
import Link from 'next/link';
import '@/styles/login.scss'
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import axios from 'axios'
import { useEffect, useState } from "react";

export default function SignIn() {
    const [changeValue, setChangeValue] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState<{ email: string }>({
        email: '',
    });
    const [token, setToken] = useState();


    const handleChangeValue = (e: any) => {
        setChangeValue({
            ...changeValue,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', changeValue);
            console.log(response);
            if (response.data.message) {
                alert(response.data.message);
                setToken(response.data.token);
                document.cookie = `jwt=${response.data.token}; path=/`;
                window.location.href = '/overview'
            }
        } catch (error) {
            setError(error.response.data.errors);
        }
    };


    useEffect(() => {

        if (error) {
            if (error.email == 'The email field is required.') {
                setError('')
                return alert('Tài khoản đăng nhập không được phép rỗng')
            }
            else if (error.email == 'The email field must not be greater than 255 characters.') {
                setError('')
                return alert('Tài khoản đăng nhập không được vượt quá 255 ký tự')
            }
            else if (error.password == 'The password field is required.') {
                setError('')
                return alert('Mật khẩu không được phép rỗng')
            }
            else if (error.password == 'The password field must be at least 2 characters.') {
                setError('')
                return alert('Mật khẩu không được phép nhỏ bé 2 ký tự')
            }
            alert(error);
            setError('');
            return;
        }
    }, [error])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8 w-full md:w-1/2">
                    <img src="https://openui.fly.dev/openui/48x48.svg?text=🟩🟦🟥" alt="Zoho Logo" className="mb-6" />
                    <h2 className="text-3xl font-semibold">Sign in</h2>
                    <p className="text-muted-foreground text-lg">to access People</p>
                    <input onChange={handleChangeValue} name='email' type="text" placeholder="Email address or mobile number" className="mt-6 p-3 border border-border rounded w-full" />
                    <input onChange={handleChangeValue} name='password' type="password" placeholder="Enter password" className="mt-6 p-3 border border-border rounded w-full" />
                    <button onClick={handleSubmit} className="mt-6 bg-primary text-primary-foreground p-3 rounded w-full">Next</button>
                    <div className="mt-6">
                        <p className="text-muted-foreground text-lg">Sign in using</p>
                        <div className="flex space-x-4 mt-3">
                            <img src="https://openui.fly.dev/openui/apple.svg" alt="Apple" className="w-12 h-12" />
                            <img src="https://openui.fly.dev/openui/google.svg" alt="Google" className="w-12 h-12" />
                            <img src="https://openui.fly.dev/openui/yahoo.svg" alt="Yahoo" className="w-12 h-12" />
                            <img src="https://openui.fly.dev/openui/facebook.svg" alt="Facebook" className="w-12 h-12" />
                            <img src="https://openui.fly.dev/openui/linkedin.svg" alt="LinkedIn" className="w-12 h-12" />
                            <img src="https://openui.fly.dev/openui/twitter.svg" alt="Twitter" className="w-12 h-12" />
                            <img src="https://openui.fly.dev/openui/microsoft.svg" alt="Microsoft" className="w-12 h-12" />
                        </div>
                    </div>
                    <p className="mt-6 text-muted-foreground text-lg">
                        Don't have a Zoho account?
                        <a href="#" className="text-primary">
                            Sign up now
                        </a>
                    </p>
                    <p className="mt-6 text-muted-foreground text-lg">
                        Don't have a Zoho account?
                        <a href="#" className="text-primary">
                            Sign up now
                        </a>
                    </p>
                    <p className="mt-6 text-muted-foreground text-lg">
                        Don't have a Zoho account?
                        <a href="#" className="text-primary">
                            Sign up now
                        </a>
                    </p>
                    <p className="mt-6 text-muted-foreground text-lg">
                        Don't have a Zoho account?
                        <a href="#" className="text-primary">
                            Sign up now
                        </a>
                    </p>
                    <p className="mt-6 text-muted-foreground text-lg">
                        Don't have a Zoho account?
                        <a href="#" className="text-primary">
                            Sign up now
                        </a>
                    </p>
                    <p className="mt-6 text-muted-foreground text-lg">
                        Don't have a Zoho account?
                        <a href="#" className="text-primary">
                            Sign up now
                        </a>
                    </p>
                    <p className="mt-6 text-muted-foreground text-lg">
                        Don't have a Zoho account?{' '}
                        <a href="#" className="text-primary">
                            Sign up now
                        </a>
                    </p>
                </div>
                <div className="hidden md:flex items-center justify-center bg-card w-full md:w-1/2 p-8">
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold">Passwordless sign-in</h3>
                        <p className="text-muted-foreground text-lg">Move away from risky passwords and experience one-tap access to Zoho. Download and install OneAuth.</p>
                        <a href="#" className="mt-6 bg-accent text-accent-foreground p-3 rounded">
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
            <footer className="mt-8 text-muted-foreground text-base">© 2024, Zoho Corporation Pvt. Ltd. All Rights Reserved.</footer>
        </div>



    )
}