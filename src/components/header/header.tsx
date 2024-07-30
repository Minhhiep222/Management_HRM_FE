import globals from "@/styles/globals.module.scss";
import "@/app/globals.css"
import React, { memo } from 'react';
import styles from '@/styles/navbar.module.scss';
import '@/styles/globals.css';
import { FaList } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { RiSettingsLine } from "react-icons/ri";
function header() {
    return (

        <div className={globals["header"]}>
            <div className={styles['navbar-parent']}>
                <div className={styles['navbar-item']}>
                    <div className={styles['wrapItem1']}>
                        <h4>365...</h4>
                        <h2>365Construction</h2>
                        <i className={styles['icon1']}><FaList /></i>
                    </div>

                    <div className={styles['wrapItem2']}>
                        <i className={styles['icon2']}><IoChatbubblesOutline /></i>
                        <i className={styles['icon2']}><IoIosNotifications /></i>
                        <i className={styles['icon2']}><RiSettingsLine /></i>

                        <img className={styles['wrapImg']} src="/images/user.jpg" alt="" />

                        <i className={styles['icon2']}><IoSettingsOutline /></i>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default header;