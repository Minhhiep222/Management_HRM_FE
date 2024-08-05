// pages/calendar.js
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '@/styles/custom-calendar.css';
import SideBar from '@/components/side-bar/side-bar';
import HeaderMySpace from '@/components/header/header__myspace';
import Header from "@/components/header/header";
import NavBarMySpace from "@/components/navbar/navbar_myspace";
import SideBarMySpace from "@/components/side-bar/side-bar__my-space";
import styles from "@/styles/control.module.scss";
import grid from "@/styles/globals.module.scss";
const CalendarPage = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (date: any) => {
        setDate(date);
    };

    return (
        <main>
            <Header />
            <div className={styles["session"]}>
                <div className={grid["grid"]}>
                    <div className={grid["grid__row"]}>
                        <div className={grid["grid__column-2__sidebar"]}>
                            <SideBar />
                        </div>
                        <div className={grid["grid__column-10"]}>
                            {<HeaderMySpace />}
                            <div style={{ padding: '20px 20px 0 20px' }} className={styles["container__my-space"]}>

                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
                                    <Calendar
                                        onChange={onChange}
                                        value={date}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>

    );
};

export default CalendarPage;
