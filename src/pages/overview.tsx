"use client";
import '../styles/globals.css';
import styles from '@/styles/overview.module.scss';
import grid from '@/styles/globals.module.scss';
import { FaUser } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { GiFamilyHouse } from "react-icons/gi";
import { FaBirthdayCake } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from 'react';
import Link from 'next/link';
import SideBar from '@/components/side-bar/side-bar';

const overView = () => {
    const [percent, setPercent] = useState(40);   
    return (
        <> 
            <div>
                <div className={grid["grid"]}>
                    <div className={grid["grid__row"]}>
                        <div className={grid["grid__column-12"]}>
                            <div className={styles['overView-parent']}>
                                <div className={styles['titile-overView']}>
                                    <h2>Chào mừng trở lại, Nguyễn Thành Đạt !</h2>
                                    <h4>Hôm nay là Monday, 27 April 2020</h4>
                                </div>

                                <div className={styles['overView-line1']}>
                                    {/* item */}
                                    <Link href={'/listEmployee'} className={styles['overView-Employee']}>
                                        <h3>NHÂN VIÊN</h3>
                                        <h2>4</h2>
                                        <div className={styles['overView-icon']}>
                                            <i ><FaUser /></i>
                                        </div>
                                        <div className={styles['group-text']}>
                                            <div className={styles['group-textOn']}>
                                                Hoạt động <span>4</span>
                                            </div>
                                            <div className={styles['group-textOff']}>
                                                Không hoạt động <span>4</span>
                                            </div>
                                        </div>
                                    </Link>
                                    {/* -- */}
                                    <Link href={'/profile'} className={styles['overView-Profile']}>
                                        <h3>Quản lý</h3>
                                        <h2>Hồ sơ</h2>
                                        <div className={styles['overView-icon']}>
                                            <i ><CiViewList /></i>
                                        </div>
                                        <h4>Xem chi tiết</h4>
                                    </Link>

                                    {/* -- */}
                                    <Link href={'/family'} className={styles['overView-family']}>
                                        <h3>Thông tin</h3>
                                        <h2>Gia đình</h2>
                                        <div className={styles['overView-icon']}>
                                            <i ><GiFamilyHouse /></i>
                                        </div>
                                        <h4>Xem chi tiết</h4>
                                    </Link>

                                    {/* -- */}
                                    <Link href={'/birthday'} className={styles['overView-birthday']}>
                                        <h3>Nhắc nhở</h3>
                                        <h2>Sinh nhật</h2>
                                        <div className={styles['overView-icon']}>
                                            <i ><FaBirthdayCake /></i>
                                        </div>
                                        <h4>Xem chi tiết</h4>
                                    </Link>

                                </div>


                                <div className={styles['overView-line2']}>
                                    <Link href={'/system'} className={styles['overView-setting']}>
                                        <h3>Cài đặt</h3>
                                        <h2>Hệ thống</h2>
                                        <div className={styles['overView-icon']}>
                                            <i ><IoSettingsOutline /></i>
                                        </div>
                                        <h4>Xem chi tiết</h4>
                                    </Link>


                                </div>
                            </div>
                        </div>

                        <div className={grid["grid__column-6"]}>
                            <div className={styles['parent-progess']}>
                                <h3 className={styles['titile-progess']}>Nhân viên phòng ban</h3>
                                <div className={styles['parentBox1']}>
                                    <div className={styles['box1-progess']}>
                                    </div >
                                    <div className={styles['box1-title']}>
                                        Ban giám đốc <span>(2)</span>
                                    </div>
                                </div>

                                <div className={styles['parentBox1']}>
                                    <div className={styles['box1-progessz']}>
                                    </div >
                                    <div className={styles['box1-title']}>
                                        Ban chỉ huy  <span>(3)</span>
                                    </div>
                                </div>

                                <div className={styles['skill']}>
                                    <div className={styles['outer']}>
                                        <div className={styles['inner']}>
                                            <div id={styles['number']}>
                                                Thống Kê
                                            </div>
                                        </div>
                                    </div>

                                    <svg className={styles['sgv']} xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                        <defs>
                                            <linearGradient id="GradientColor">
                                                <stop offset="0%" stopColor="#e91e63" />
                                                <stop offset="100%" stopColor="#673ab7" />
                                            </linearGradient>
                                        </defs>
                                        <circle style={{
                                            strokeDasharray: 472,
                                            strokeDashoffset: 472 - (472 * percent) / 100,
                                        }} className={styles['cirlce']} cx="80" cy="80" r="70" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className={grid["grid__column-6"]}>
                            <div className={styles['parent-progess2']}>
                                <h3 className={styles['titile-progess']}>Chức vụ nhân viên</h3>
                                <div className={styles['parentBox1']}>
                                    <div className={styles['box1-progess']}>
                                    </div >
                                    <div className={styles['box1-title']}>
                                        QA - QC <span>(2)</span>
                                    </div>
                                </div>

                                <div className={styles['parentBox1']}>
                                    <div className={styles['box1-progessz']}>
                                    </div >
                                    <div className={styles['box1-title']}>
                                        Chỉ huy trưởng  <span>(3)</span>
                                    </div>
                                </div>

                                <div className={styles['skill']}>
                                    <div className={styles['outer']}>
                                        <div className={styles['inner']}>
                                            <div id={styles['number']}>
                                                Thống Kê
                                            </div>
                                        </div>
                                    </div>

                                    <svg className={styles['sgv']} xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                        <defs>
                                            <linearGradient id="GradientColor">
                                                <stop offset="0%" stopColor="#e91e63" />
                                                <stop offset="100%" stopColor="#673ab7" />
                                            </linearGradient>
                                        </defs>
                                        <circle style={{
                                            strokeDasharray: 472,
                                            strokeDashoffset: 472 - (472 * percent) / 100,
                                        }} className={styles['cirlce']} cx="80" cy="80" r="70" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </div >

        </>
    );
}
export default overView

