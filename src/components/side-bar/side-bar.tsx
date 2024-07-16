"use client";

import styles from '@/styles/sidebar.module.scss';
import { FaUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa";
import { GrOverview } from "react-icons/gr";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';


import Cookies from 'js-cookie'

const SideBar = () => {

    const router = useRouter();

    const { pathname } = router;
    const lastSegment = pathname.split('/').pop();


    const [CheckNoneRadio, setCheckNoneRadio] = useState(false);
    const [checkcolorEPlo, setCheckcolorEPl] = useState(false);
    const [routerWeb, setRouterWeb] = useState(lastSegment);
    const [routerWeb2, setRouterWeb2] = useState(lastSegment);
    const [checkColorOver, setCheckColorOver] = useState(false);
    const [checkColorSystem, setCheckColorSystem] = useState(false);
    const [checkColorMySpace, setCheckColorMySpace] = useState(false);
    const [checkColorGroupSpace, setCheckColorGroupSpace] = useState(false);


    //  const getUser = async () => {
    //     const myCookies = document.cookie 
    //     console.log(myCookies);
    //     const headers = {
    //         "Authorization": `Bearer ${myCookies}`
    //     };
    //     const response = await axios.get("http://127.0.0.1:8000/api/setSidebar", { headers });
    //     console.log(response.data.value);
    //  }
    
    //  const fetchData = async () => {
    //     // const myCookies = document.cookie 
    //     //     console.log(myCookies);
    //     const headers = {
    //         "Authorization": "Bearer 49|vDmM2mYBZJTCwFSwPnD6dvIZQvD7OFIBPxa5X3lJbfed53e1"
    //     };
    
    //     try {
    //         const response = await axios.get("http://127.0.0.1:8000/api/setSidebar", { headers });
    //         console.log("User data:", response.data);
    //     } catch (error) {
    //         console.error("Error fetching department data:", error);
    //     }
    // };
//     const fetchData = async () => {
//         const myCookies = document.cookie ;
//         const newCookie = myCookies.substring(4);
//        console.log('mycookie:',newCookie);
   
//        const headers = {
//            "Authorization": `Bearer ${newCookie}`
//        };
   
//        try {
//         const response = await axios.get("http://127.0.0.1:8000/api/setSidebar", { headers });
//         console.log("User data:", response.data);
//        } catch (error) {
//            console.error("Error fetching department data:", error);
//        }
//    };

//    useEffect(() => {
//     fetchData()
//  })

    // const handleLogout = () => {
    //     const myCookies = document.cookie ;
    //     const newCookie = myCookies.substring(4);
    //     cookies().delete("jwt")
    //     window.location.href = '/'
    // }

   
    function handleLogout() {
        const myCookies = document.cookie ;
        console.log(myCookies);
        document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location.href = '/'
    }
    const handleCheckNoneRadio = () => {
        setCheckNoneRadio(!CheckNoneRadio);
        setRouterWeb2(lastSegment);
        setCheckColorOver(false);
        setCheckColorSystem(false);
        setCheckColorMySpace(false)
        setRouterWeb("null")
        // if (routerWeb2 === 'profile' || routerWeb === 'family' || routerWeb === 'birthday' || routerWeb === 'listEmployee') {
        //      setRouterWeb2("null")
        // }
    };
    //khi them 1 nut moi -> 
    //tao 1 state giong checkColorSystem
    //tao 1 ham giong voi  const handleSetCheckColorOver =() -> doi dong dau tien thanh state vua tao
    // trong handleCheckNoneRadio -> set cai state vua tao la false

    const handleSetCheckColorMyspace = () => {
        setCheckColorMySpace(true)
        setCheckColorOver(false);
        setCheckcolorEPl(false);
        setCheckNoneRadio(false);
        setCheckColorGroupSpace(false)
    }
    const handleSetCheckColorGroupSpace = () => {
        setCheckColorGroupSpace(true)
        setCheckColorMySpace(false)
        setCheckColorOver(false);
        setCheckcolorEPl(false);
        setCheckNoneRadio(false);
    }

    const handleSetCheckColorOver = () => {
        setCheckColorOver(true);
        setCheckcolorEPl(false);
        setCheckNoneRadio(false);
        setCheckColorMySpace(false)
        setCheckColorGroupSpace(false)
    }
    const handleSetCheckColorSystem = () => {
        setCheckColorSystem(true);
        setCheckcolorEPl(false);
        setCheckNoneRadio(false);
        setCheckColorMySpace(false)
        setCheckColorGroupSpace(false)
    }
    //
    const handlecheckcolorEPl = () => {
        setCheckcolorEPl(true);
    }
    const handleCheckNoneRadio2 = () => {
        setRouterWeb2(lastSegment);
    };

    useEffect(() => {


    }, [])



    useEffect(() => {
        if (routerWeb === 'profile' || routerWeb === 'family' || routerWeb === 'birthday' || routerWeb === 'listEmployee') {
            setCheckNoneRadio(!CheckNoneRadio);
        }
    }, [routerWeb]);


   


    return (
        <div className={styles["side__bar"]}>
            <div className={styles['img-parent']}>
                <h4>Nguyễn Thành Đạt</h4>
                <div className={styles['parent-icon']}>
                    <i className={styles['iconTop']}><FaUser /></i>
                    <i className={styles['iconTop']}><IoSettingsOutline /></i>
                    <i className={styles['iconTop']}><FaPowerOff /></i>
                </div>
            </div>
            {/* khi truyen tham so vao can phai dung arrow function  */}
            <Link href={"/overview"} onClick={() => {
                handleSetCheckColorOver();
            }} className={`${styles['overView']} ${checkColorOver === true || routerWeb === 'overview' ? styles['backGroundChange'] : ''}`}>
                <i className={styles['iconOverView']}><GrOverview /></i>
                <p>Trang tổng quan</p>
            </Link>

            <Link href={""}
                onClick={() => {
                    handleCheckNoneRadio();
                    handlecheckcolorEPl();
                }}
                className={`${styles.overView} ${checkcolorEPlo === true || routerWeb === 'family' || routerWeb === 'birthday' || routerWeb === 'listEmployee' || routerWeb === 'profile' ? styles['backGroundChange'] : styles['backGroundDefault']}`}
            >
                <i className={styles['iconEmployee']}><FaUser /></i>
                <p>Nhân viên</p>
                <i className={styles['iDropEmployee']}><RiArrowDropDownLine /></i>
            </Link>
            <div className={`${styles['radioEmployee']} ${CheckNoneRadio === true || routerWeb === 'family' || routerWeb === 'birthday' || routerWeb === 'listEmployee' || routerWeb === 'profile' ? styles['block'] : styles['none']}`}>
                <div className={`${styles.itemRadio}`}>
                    <input defaultChecked={routerWeb2 === 'profile'} value={"profile"} type="radio" id="profile" name="employeeGroup" />
                    <Link onClick={handleCheckNoneRadio2} className={`${styles['label-text']} ${routerWeb2 === 'profile' ? styles['itemRadioChange'] : styles['itemRadioDefault']}`} href={'/user/profile'}>
                        Hồ sơ nhân viên
                    </Link>
                </div>
                <div className={`${styles.itemRadio}`}>
                    <input defaultChecked={routerWeb2 === 'listEmployee'} value={"listEmployee"} type="radio" id="employeeList" name="employeeGroup" />
                    <Link onClick={handleCheckNoneRadio2} className={`${styles['label-text']} ${routerWeb2 === 'listEmployee' ? styles['itemRadioChange'] : styles['itemRadioDefault']}`} href={'/listEmployee'}>
                        Danh sách nhân viên
                    </Link>
                </div>
                <div className={`${styles.itemRadio}`}>
                    <input defaultChecked={routerWeb2 === 'family'} value={"family"} type="radio" id="familyInfo" name="employeeGroup" />
                    <Link onClick={handleCheckNoneRadio2} className={`${styles['label-text']} ${routerWeb2 === 'family' ? styles['itemRadioChange'] : styles['itemRadioDefault']}`} href={'/family'}>
                        Thông tin gia đình
                    </Link>
                </div>
                <div className={`${styles.itemRadio}`}>
                    <input defaultChecked={routerWeb2 === 'birthday'} value={"birthday"} type="radio" id="birthdayReminder" name="employeeGroup" />
                    <Link onClick={handleCheckNoneRadio2} className={`${styles['label-text']} ${routerWeb2 === 'birthday' ? styles['itemRadioChange'] : styles['itemRadioDefault']}`} href={'/birthday'}>
                        Nhắc nhở sinh nhật
                    </Link>
                </div>
            </div>
            <Link onClick={() => {
                handleSetCheckColorSystem()
            }} href={"/system"} className={`${styles['overView']} ${checkColorSystem === true || routerWeb === 'system' ? styles['backGroundChange'] : ''}`}>
                <i className={styles['iconOverView']}><IoSettingsOutline /></i>
                <p>Hệ Thống</p>
            </Link>

            <Link onClick={() => {
                handleSetCheckColorMyspace()
            }} href={"/myspace/actionlist"} className={`${styles['overView']} ${checkColorMySpace === true || routerWeb === 'actionlist' ? styles['backGroundChange'] : ''}`}>
                <i className={styles['iconOverView']}><IoSettingsOutline /></i>
                <p>My Space</p>
            </Link>

            <Link onClick={() => {
                handleSetCheckColorGroupSpace()
            }} href={"/groupspace/list_member"} className={`${styles['overView']} ${checkColorMySpace === true || routerWeb === 'list_member' ? styles['backGroundChange'] : ''}`}>
                <i className={styles['iconOverView']}><IoSettingsOutline /></i>
                <p>Group Space</p>
            </Link>

            <Link onClick={() => {
                handleSetCheckColorGroupSpace()
            }} href={"/manager/listemployees"} className={`${styles['overView']} ${checkColorMySpace === true || routerWeb === 'list_member' ? styles['backGroundChange'] : ''}`}>
                <i className={styles['iconOverView']}><IoSettingsOutline /></i>
                <p>Manager</p>
            </Link>




            <button onClick={handleLogout} className={styles['overView']}>
                <i className={styles['iconOverView']}><CiLogout /></i>
                <p>Đăng Xuất</p>
            </button>
        </div>
    );
}
export default SideBar