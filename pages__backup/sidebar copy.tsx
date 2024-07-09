"use client";
import styles from '../styles/sidebar.module.scss';
import { FaUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa";
import { GrOverview } from "react-icons/gr";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import Link from 'next/link';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const SideBar = () => {

  const router = useRouter();
  const { pathname } = router;
  const lastSegment = pathname.split('/').pop();
  // console.log(lastSegment);

  const [CheckNoneRadio, setCheckNoneRadio] = useState(false);

  const [routerWeb, setRouterWeb] = useState(lastSegment);
  const [routerWeb2, setRouterWeb2] = useState(lastSegment);
  console.log(routerWeb);

  const handleCheckNoneRadio = () => {
    setCheckNoneRadio(!CheckNoneRadio);
    setRouterWeb2(lastSegment);
    setRouterWeb("null")
    // if (routerWeb === 'profile' || routerWeb === 'family' || routerWeb === 'birthday' || routerWeb === 'listEmployee') {
    //      setRouterWeb2("null")
    // }
  };
  const handleCheckNoneRadio2 = () => {
    setRouterWeb2(lastSegment);
  };

  console.log(CheckNoneRadio);

  useEffect(() => {
    if (routerWeb === 'profile' || routerWeb === 'family' || routerWeb === 'birthday' || routerWeb === 'listEmployee') {
      setCheckNoneRadio(!CheckNoneRadio);
    }
  }, [routerWeb]);
  return (
    <div>
      <div className={styles['sidebar-parent']}>
        <div className={styles['img-parent']}>
          <h4>Nguyễn Thành Đạt</h4>
          <div className={styles['parent-icon']}>
            <i className={styles['iconTop']}><FaUser /></i>
            <i className={styles['iconTop']}><IoSettingsOutline /></i>
            <i className={styles['iconTop']}><FaPowerOff /></i>
          </div>
        </div>
        {/* khi truyen tham so vao can phai dung arrow function  */}
        <Link href={"/overview"} className={`${styles['overView']} ${routerWeb === 'overview' ? styles['backGroundChange'] : ''}`}>
          <i className={styles['iconOverView']}><GrOverview /></i>
          <p>Trang tổng quan</p>
        </Link>

        <Link href={""}
          onClick={handleCheckNoneRadio}
          className={`${styles.overView} ${CheckNoneRadio === true || routerWeb === 'family' || routerWeb === 'birthday' || routerWeb === 'listEmployee' || routerWeb === 'profile' ? styles['backGroundChange'] : styles['backGroundDefault']}`}
        >
          <i className={styles['iconEmployee']}><FaUser /></i>
          <p>Nhân viên</p>
          <i className={styles['iDropEmployee']}><RiArrowDropDownLine /></i>
        </Link>
        <div className={`${styles['radioEmployee']} ${CheckNoneRadio === true || routerWeb === 'family' || routerWeb === 'birthday' || routerWeb === 'listEmployee' || routerWeb === 'profile' ? styles['block'] : styles['none']}`}>
          <div className={`${styles.itemRadio}`}>
            <input checked={routerWeb2 === 'profile'} value={"profile"} type="radio" id="profile" name="employeeGroup" />
            <Link onClick={handleCheckNoneRadio2} className={`${styles['label-text']} ${routerWeb2 === 'profile' ? styles['itemRadioChange'] : styles['itemRadioDefault']}`} href={'/profile'}>
              Hồ sơ nhân viên
            </Link>
          </div>
          <div className={`${styles.itemRadio}`}>
            <input checked={routerWeb2 === 'listEmployee'} value={"listEmployee"} type="radio" id="employeeList" name="employeeGroup" />
            <Link onClick={handleCheckNoneRadio2} className={`${styles['label-text']} ${routerWeb2 === 'listEmployee' ? styles['itemRadioChange'] : styles['itemRadioDefault']}`} href={'/listEmployee'}>
              Danh sách nhân viên
            </Link>
          </div>
          <div className={`${styles.itemRadio}`}>
            <input checked={routerWeb2 === 'family'} value={"family"} type="radio" id="familyInfo" name="employeeGroup" />
            <Link onClick={handleCheckNoneRadio2} className={`${styles['label-text']} ${routerWeb2 === 'family' ? styles['itemRadioChange'] : styles['itemRadioDefault']}`} href={'/family'}>
              Thông tin gia đình
            </Link>
          </div>
          <div className={`${styles.itemRadio}`}>
            <input checked={routerWeb2 === 'birthday'} value={"birthday"} type="radio" id="birthdayReminder" name="employeeGroup" />
            <Link onClick={handleCheckNoneRadio2} className={`${styles['label-text']} ${routerWeb2 === 'birthday' ? styles['itemRadioChange'] : styles['itemRadioDefault']}`} href={'/birthday'}>
              Nhắc nhở sinh nhật
            </Link>
          </div>
        </div>
        <Link href={"/system"} className={`${styles['overView']} ${routerWeb === 'system' ? styles['backGroundChange'] : ''}`}>
          <i className={styles['iconOverView']}><IoSettingsOutline /></i>
          <p>Hệ Thống</p>
        </Link>
        <Link href={""} className={styles['overView']}>
          <i className={styles['iconOverView']}><CiLogout /></i>
          <p>Đăng Xuất</p>
        </Link>
      </div>
    </div>
  );
}
export default SideBar