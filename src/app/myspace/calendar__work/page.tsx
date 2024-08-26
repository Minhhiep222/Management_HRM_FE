"use client";

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '@/styles/custom-calendar.css';
import styles from "@/styles/control.module.scss";

const CalendarPage = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (date: any) => {
        setDate(date);
    };

    return (
        <div style={{ padding: '20px 20px 0 20px' }} className={styles["container__my-space"]}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
                <Calendar
                    onChange={onChange}
                    value={date}
                />
            </div>

        </div>

    );
};

export default CalendarPage;
