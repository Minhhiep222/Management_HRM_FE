import styles from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import "@/app/globals.css";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import classNames from "classnames";
import Link from "next/link";
import { memo, useEffect, useRef, useState } from "react";
import Employee from "../Employee";
import axios from "axios";
import DataList from "@/pages/api/datalist";

function SideBarMySpace() {
    const {
        employees, handleGetUser,
    } = DataList();
    const [employee, setSelectEmployee] = useState<any>([]);
    const checkInref = useRef<HTMLButtonElement>(null);
    const checkOutRef = useRef<HTMLButtonElement>(null);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [interval, setEvent] = useState(true)
    const [id, setId] = useState()
    const timerID = useRef<number | null>(null);
    const [checkCreate, setCheckCreate] = useState(false);

    const handleGetUserByID = async (id: any) => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/employees/" + id);
            setSelectEmployee(result.data.employee);
        } catch (e) {
            console.log("Something wrong !");
        }
    }


    const handleCountingTime = (check: boolean, idWork: any) => {
        //lấy ngày tháng hiện tại
        const date = new Date(Date.now());

        const end = 17;

        if (check) {
            if (timerID.current === null) {
                timerID.current = window.setInterval(() => {
                    setSecond(prevSecond => {
                        const newSecond = prevSecond + 1;
                        if (newSecond === 60) {
                            setMinute(prevMinute => {
                                const newMinute = prevMinute + 1;
                                if (newMinute === 60) {
                                    setHour(prevHour => prevHour + 1)
                                    return 0;
                                }
                                return newMinute;
                            });
                            return 0;
                        }
                        if (date.getHours() === end) {
                            handleCheckOut();
                            handleReset();
                            setHour(0), setMinute(0), setSecond(0);
                            return 0;
                        }
                        return newSecond;
                    });
                }, 1000);
                console.log("Interval started");
            }
        } else {
            handleReset();
        }
    }


    //hàm xử lý khi người dùng quên checkout
    const handleReset = () => {
        if (timerID.current !== null) {
            clearInterval(timerID.current);
            timerID.current = null;
            console.log("Interval cleared");
        }
    }

    const handleCheckIn = async () => {
        //xử lý lấy ngày tháng hiện tại
        const timestamp = Date.now();
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const start = `${year}-${month}-${day}`;

        const newObj = {
            employeeID: 1,
            start_date: start,
            end_date: start,
            hour_work: hour
        }

        try {
            if (!checkCreate) {
                const result = await axios.post("http://127.0.0.1:8000/api/workdailies", newObj);
                setId(result.data.id)
                if (result.status == 200) {
                    handleCountingTime(true, id);
                    setCheckCreate(true)
                    console.log("thêm thành công")
                    checkInref.current?.classList.remove(styles["btn__active"]);
                    checkOutRef.current?.classList.add(styles["btn__active"]);
                }
            } else {
                handleCountingTime(true, id);
                checkInref.current?.classList.remove(styles["btn__active"]);
                checkOutRef.current?.classList.add(styles["btn__active"]);
            }
        } catch (e) {
            console.log("something wrong" + e)
        }
    }

    const handleCheckOut = async () => {
        //xử lý ngày tháng
        const date = new Date(Date.now());
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const start = `${year}-${month}-${day}`;

        const newObj = {
            employeeID: 1,
            start_date: start,
            end_date: start,
            hour_work: hour + 1,
        }

        try {
            if (id === undefined) {
                console.log("something wrong")
            } else {
                const result = await axios.put("http://127.0.0.1:8000/api/workdailies/" + id + "/" + newObj.start_date, newObj);
                if (result.status == 200) {
                    handleCountingTime(false, id);
                    checkOutRef.current?.classList.remove(styles["btn__active"]);
                    checkInref.current?.classList.add(styles["btn__active"]);
                    console.log("sửa thành công")
                }
            }
        } catch (e) {
            console.log("something wrong" + e)
        }
    }

    useEffect(() => {
        handleGetUserByID(1);
        handleGetUser();
    }, [])

    return (
        <div className={styles["side__bar-myspace"]}>
            <div className={styles["infor__myspace"]}>
                <div className={styles["img__user"]} style={{
                    backgroundImage: `url('/images/${employee.img || 'user.jpg'}')`
                }}>
                </div>
                <div className={styles["name__user"]}>
                    <span className={styles["id__user"]}>{employee.id}</span>
                    <span>-</span>
                    <Link href="/user/profile">{employee.fullname}</Link>
                </div>
                <div className={styles["role__user"]}>{employee.position}</div>
                <div className={styles["state__user"]}>{employee.state_work}</div>
                <div className={styles["time__user"]}>
                    <span>{hour.toString().padStart(2, '0')}</span>:<span>{minute.toString().padStart(2, '0')}</span>:<span>{second.toString().padStart(2, '0')}</span>
                </div>
                <button ref={checkInref} onClick={e => handleCheckIn()} className={classNames(grid["btn"], styles["btn__check-in"], styles["btn__active"])}>
                    Đăng ký vào
                </button>
                <button ref={checkOutRef} onClick={e => handleCheckOut()} className={classNames(grid["btn"], styles["btn__check-out"])}>
                    Đăng ký ra
                </button>
            </div>

            <div className={styles["list__member"]}>
                <div className="" style={{ width: `100%` }}>
                    <h3 style={{ textAlign: `start`, padding: '10px' }}>Thành viên công ty</h3>
                </div>

                {employees.map(member =>
                    <div key={member.id} className={styles["member__item"]}>
                        <div className={styles["img__member"]} style={{
                            backgroundImage: `url('/images/${employee.img}')`
                        }}>
                        </div>
                        <div className={styles["member__infor"]}>
                            <div className={styles["main__infor"]}>
                                <div className={styles["name__member"]}>
                                    <span className={styles["id__user"]}>{member.id}</span>
                                    <span>-</span>
                                    <Link href="/user/profile">{member.fullname}</Link>
                                </div>
                                <div className={styles["state__member"]}>{member.state_work}</div>
                            </div>

                            <div className={styles["contacts"]}>
                                <FiPhoneCall />
                                <ul className={styles["list__contacts"]}>
                                    <li className={styles["contacts__item"]}>
                                        <IoChatboxEllipsesOutline />
                                        <span>Nhắn tin</span>
                                    </li>
                                    <li className={styles["contacts__item"]}>
                                        <FiPhoneCall />
                                        <span>Cuộc gọi âm thanh</span>
                                    </li>
                                    <li className={styles["contacts__item"]}>
                                        <MdOutlineVideoCall />
                                        <span>Cuộc gọi hình ảnh</span>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>
                )}
            </div>

        </div>
    );
}

export default SideBarMySpace;