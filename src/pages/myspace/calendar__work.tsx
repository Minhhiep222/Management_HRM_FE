// pages/calendar.js
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '@/styles/custom-calendar.css';

const CalendarPage = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (date: any) => {
        setDate(date);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
            <Calendar
                onChange={onChange}
                value={date}
            />
        </div>
    );
};

export default CalendarPage;
