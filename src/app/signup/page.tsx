"use client";

import Link from 'next/link';
import '@/styles/register.scss'
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ChangeEvent, MouseEvent, use, useEffect, useState } from 'react';
import axios from 'axios';

export default function SignUp() {
    const [changeValue, setChangeValue] = useState(
        {
            email: '',
            username: '',
            password: '',
            role: '',
        }
    );
    const [errors, setErrors] = useState();
    const [departments, setDepartments] = useState([]);

    const handleSetChangeValue = (e: any) => {
        console.log(changeValue)
        setChangeValue({
            ...changeValue,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault();

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

        }
    }
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-background">
            <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-8">
                <blockquote className="text-lg italic text-center">
                    "Our employees all work from home, and they are able to check-in/check out instead of a time-card. We can just pull reports and payday is much easier."
                </blockquote>
                <p className="mt-4 font-semibold">Wendy Baldwin of ER4 Love.</p>
            </div>

            <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                <img src="https://openui.fly.dev/openui/48x48.svg?text=🟩🟦🟥" alt="Zoho Logo" className="mb-6" />
                <h2 className="text-3xl font-semibold">Start your 30-day free trial</h2>

                <form className="w-full mt-6">
                    <input onChange={handleSetChangeValue} name='username' type="text" placeholder="Name *" className="p-3 border border-border rounded w-full mb-4" required />
                    <input onChange={handleSetChangeValue} name='email' type="email" placeholder="Email *" className="p-3 border border-border rounded w-full mb-4" required />
                    <input onChange={handleSetChangeValue} name='password' type="password" placeholder="Password *" className="p-3 border border-border rounded w-full mb-4" required />
                    <p className="text-sm text-muted-foreground">Your undefined will be stored in the US undefined center.</p>
                    <div className="flex items-center mt-2">
                        <input type="checkbox" id="terms" className="mr-2" required />
                        <label htmlFor="terms" className="text-sm text-muted-foreground">I agree to the <a href="#" className="text-primary">Terms of Service</a> and <a href="#" className="text-primary">Privacy Policy</a>.</label>
                    </div>
                    <button onClick={handleSubmit} type="submit" className="mt-6 bg-red-500 text-white p-3 rounded w-full">FREE SIGN UP</button>
                </form>
                <div className="mt-6">
                    <p className="text-muted-foreground text-lg">or sign in using</p>
                    <div className="flex space-x-4 mt-3">
                        <img src="https://openui.fly.dev/openui/google.svg" alt="Google" className="w-12 h-12" />
                        <img src="https://openui.fly.dev/openui/linkedin.svg" alt="LinkedIn" className="w-12 h-12" />
                        <img src="https://openui.fly.dev/openui/microsoft.svg" alt="Microsoft" className="w-12 h-12" />
                    </div>
                </div>

                <p className="mt-6 text-muted-foreground text-lg">
                    Have a Zoho Account? <a href="#" className="text-primary">SIGN IN</a>
                </p>
            </div>
        </div>


    )
}