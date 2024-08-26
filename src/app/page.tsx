
"use client"
import Login from '@/app/systems/login';
import Timer from '@/components/TimerComponent';
import Link from 'next/link';
export default function Home() {
    return (
        <div>
            {/* <Login /> */}
            <Timer></Timer>

            <Link href="/myspace/actionlist">My space</Link>
        </div>
    );
}
