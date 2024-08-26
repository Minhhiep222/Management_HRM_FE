"use client";

import styles from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import classNames from "classnames";
import { MdMoreTime } from "react-icons/md";
import { FaPeopleLine } from "react-icons/fa6";
import { IoAddOutline } from "react-icons/io5";
import ModalItem from "@/components/modal/Modal_Item";
import useSelectImage from '@/components/hook/useSelectImage';
import useModals from '@/components/hook/useModal';
import useAddress from '@/components/hook/useAddress';
import { IoMdSearch } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import DataList from "@/pages/api/datalist";
import { count } from "console";
import { useEffect, useRef, useState } from "react";
import SideBar from "@/components/side-bar/side-bar";
import HeaderMySpace from "@/components/header/header__myspace";
import SideBarMySpace from "@/components/side-bar/side-bar__my-space";
import NavBarMySpace from "@/components/navbar/navbar_myspace";
import Header from "@/components/header/header";
import { useParams } from "next/navigation";
function MySpace() {
    const param = useParams();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const { img, setImg, handleSelectImg, handleUpload } = useSelectImage(inputRef);
    const [isModalOpenItem, setIsModalOpenItem] = useState(false);
    const {
        employees, handleGetUser,
        managers, handleGetManager,
        brands, handleGetBrand,
        rooms, handleGetRoom
    } = DataList();
    const formRef = useRef<HTMLFormElement | null>(null);
    const chooseRef = useRef<HTMLInputElement | null>(null);
    const { address, saveAddress } = useAddress();
    const idAllUserRef = useRef<HTMLInputElement | null>(null);
    const memberRef = useRef<HTMLDivElement | null>(null);
    const [selectedRoom, setSelectedRoom] = useState({ id: '' });
    const [selectedManager, setSelectedManager] = useState({ id: '' });
    const [selectedBrand, setSelectedBrand] = useState({ id: '' });
    // const [selectMember, setSelectMember] = useState<any[]>([]);
    const [member, setSelectMember] = useState<any[]>([]);
    const [employee, setSelectEmployee] = useState<any>([]);
    const [userField, setUserField] = useState({
        id: '',
        fullname: '',
        img: '',
        description: '',
        nickname: '',
        address: '',
        phone: '',
        phone_work: '',
        sex: '',
        marital_status: '',
        dob: '',
        email: '',
        email_work: '',
        start_date: '2024/07/03',
        finish_date: '2024/07/03',
        position: '',
        state_work: 'Mới',
        type: 'Part time',
        seat: '',
        tag: '',
        state_employee: '',
        brandID: '',
        departmentID: '',
    });

    useEffect(() => {
        handleGetManager();
        handleGetRoom();
        handleGetBrand();
        handleGetUser();
        if (param)
            handleGetUserByID(param.id);
    }, []);

    const handleGetUserByID = async (id: any) => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/employees/1");
            setUserField(result.data.employee);
            console.log();
            setSelectEmployee(result.data.employee);
            // setDate(result.data.employee.dob);
            // setImg(`/images/${result.data.employee.img}`)
        } catch (e) {
            console.log("Something wrong !");
        }
    }

    return (
        <div >
            <div className={styles["greating__my-space"]}>
                <FaPeopleLine fontSize={'8rem'} />
                <div className={styles["wish__myspace"]}>
                    <p>Chào Buổi Chiều {employee.fullname}</p>
                    <p className={styles["hello__myspace"]}>Chúc bạn một ngày làm việc hiệu quả!</p>
                </div>
            </div>

            <div className={styles["calendar-work__my-space"]}>
                <div className={styles["icon__time"]}>
                    <MdMoreTime fontSize={'4rem'} style={{
                        backgroundColor: `#e0f7ff`,
                        color: `#46b3de`,
                        fontWeight: '10',
                        borderRadius: '4px',
                        padding: `5px`
                    }} />
                </div>
                <div className={styles["content__calendar"]}>
                    <div className={styles["title__calendar-work"]}>
                        <div className={styles["title__calendar"]}>Lịch làm việc</div>
                        <div className={styles["week__calendar-work"]}>
                            <em>23-Jun-2024</em>
                            <span>-</span>
                            <em>29-Jun-2024</em>
                        </div>
                    </div>
                    <div className={styles["time__calendar-work"]}>
                        <div className={styles["hook__calendar"]}>
                            <div className={styles["name__work"]}>General</div>
                            <div className={styles["day__calendar-work"]}>
                                <em>9:00 SÁNG</em>
                                <span>-</span>
                                <em>18:00 TỐI</em>
                            </div>
                        </div>
                    </div>

                    <div className={styles["hook-week__calendar-work"]}>
                        <div className={styles["doc__day-list"]}>
                            <div className={styles["doc__day-item"]}>
                                <span className={styles["date__in-week"]}>Chủ nhật</span>
                                <span>24</span>
                                <div className={classNames(styles["state__user"], styles["state__user-weekend"])}>Cuối tuần</div>
                            </div>
                            <div className={styles["doc__day-item"]}>
                                <span className={styles["date__in-week"]}>Thứ 2</span>
                                <span>25</span>
                                <div className={classNames(styles["state__user"], styles["state__user-absent"])}>Vắng mặt</div>
                            </div>
                            <div className={styles["doc__day-item"]}>
                                <span className={styles["date__in-week"]}>Thứ 3</span>  <span>26</span>
                                <div className={classNames(styles["state__user"], styles["state__user-present"])}>Có mặt</div>                                                            </div>
                            <div className={styles["doc__day-item"]}>
                                <span className={styles["date__in-week"]}>Thứ 4 </span>
                                <span>27</span>
                                <div className={classNames(styles["state__user"])}></div>
                            </div>
                            <div className={styles["doc__day-item"]}>
                                <span className={styles["date__in-week"]}>Thứ 5</span>
                                <span>28</span>
                                <div className={classNames(styles["state__user"])}></div>
                            </div>
                            <div className={styles["doc__day-item"]}>
                                <span className={styles["date__in-week"]}>Thứ 6</span>
                                <span>29</span>
                                <div className={classNames(styles["state__user"])}></div>
                            </div>
                            <div className={styles["doc__day-item"]}>
                                <span className={styles["date__in-week"]}>Thứ 7</span>
                                <span>30</span>
                                <div className={classNames(styles["state__user"])}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles["calendar-work__my-space"]}>

                <div className={styles["note__authencation"]}>
                    <div className={styles["icon__time"]}>
                        <MdMoreTime fontSize={'4rem'} style={{
                            backgroundColor: `#fdeece`,
                            color: `#f6ac0b`,
                            fontWeight: '10',
                            borderRadius: '4px',
                            padding: `5px`
                        }} />
                    </div>
                    <div className={styles["content__calendar"]}>
                        Hôm nay bạn chưa thêm nhật ký
                    </div>
                </div>
                <button className={classNames(grid["btn"], styles["btn__note"])}>
                    Thêm nhật ký
                </button>

            </div>

        </div>
    );
}

export default MySpace;
