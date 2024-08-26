"use client";

import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import styles from "@/styles/profile.module.scss";
import grid from "@/styles/globals.module.scss";
import myspace from "@/styles/myspace.module.scss";
import "@/app/globals.css";
import { TiPencil } from "react-icons/ti";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from "classnames";
import {
    faArrowUp,
    faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import useSelectImage from '@/components/hook/useSelectImage';
import useAddress from '@/components/hook/useAddress';
import axios from "axios";
import DataList from "@/pages/api/datalist";

function CreateTeam() {
    const [date, setDate] = React.useState<Date>();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const { img, handleSelectImg, handleUpload, handleDelete, selectedFile } = useSelectImage(inputRef);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
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
    const [selectedRoom, setSelectedRoom] = useState({ id: '' });
    const [selectedManager, setSelectedManager] = useState({ id: '' });
    const [selectedBrand, setSelectedBrand] = useState({ id: '' });
    const [selectMember, setSelectMember] = useState<any[]>([]);
    const [sex, setSex] = useState('');
    const [marry, setMarry] = useState('');
    const [stateEmployee, setStateEmployee] = useState('');
    const [typework, setTypework] = useState('');
    const [seat, setSeat] = useState('');
    const [position, setPosition] = useState('');
    const [changeValue, setChangeValue] = useState({
        fullname: '',
        img: '',
        description: '',
        nickname: '',
        address: '',
        phone: '',
        phone_work: '',
        sex: '',
        marital_status: 'Khác',
        dob: '',
        email: '',
        email_work: '',
        start_date: '2024-07-03',
        finish_date: '2024-07-03',
        type_work: '',
        position: '',
        state_work: 'Mới',
        type: 'Part Time',
        seat: '',
        tag: '',
        state_employee: 'Hoạt động',
    });

    useEffect(() => {
        handleGetManager();
        handleGetRoom();
        handleGetBrand();
        handleGetUser();
        handleSelect();
    }, []);

    const handleSetChangeValue = (e: any) => {
        console.log(changeValue);
        setChangeValue({
            ...changeValue,
            [e.target.name]: e.target.value
        });
    }

    const handleSetImg = (e: any) => {
        setChangeValue({
            ...changeValue,
            [e.target.name]: e.target.files[0].name
        });
    }

    const handleClose = () => {
        let address = "";
        window.location.href = localStorage.getItem('address') || "/manager/listemployees";
    }

    const handleSelect = (): void => {
        const content__infor = document.querySelectorAll(`.${styles.content__infor}`);
        content__infor.forEach(element => {
            element.addEventListener('click', () => {
                const list__members = element.nextElementSibling;
                const list = list__members as HTMLElement
                list.style.display = 'block';
                if (list__members && list__members.classList.contains(myspace["list__member"])) {
                    const member__items = list__members.querySelectorAll(`.${myspace["member__item"]}`);
                    member__items.forEach(item => {
                        item.addEventListener('click', () => {
                            var option = item as HTMLElement
                            option.textContent;
                            const valueInput = element as HTMLInputElement;
                            valueInput.value = option.textContent || "";
                            list.style.display = 'none';
                        });
                    })
                }
            });
        });
    }

    const handleCreate = () => {
        handleUpload();
        buttonRef.current?.click();
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        handleUpload();
        let dob = "";
        if (date) {
            let year = date.getFullYear();
            let month = (date.getMonth() + 1).toString().padStart(2, '0');
            let day = date.getDate().toString().padStart(2, '0');
            dob = `${year}-${month}-${day}`;
        }

        const newObj = {
            fullname: changeValue.fullname,
            img: changeValue.img,
            description: changeValue.nickname,
            nickname: changeValue.nickname,
            address: changeValue.address,
            phone: changeValue.phone,
            phone_work: changeValue.phone_work,
            sex: sex,
            marital_status: marry,

            dob: dob,
            email: changeValue.email,
            email_work: changeValue.email_work,
            start_date: "2024-07-24",
            finish_date: "2024-07-24",
            type_work: typework,
            seat: seat,
            position: position,
            state_work: changeValue.state_work,
            state_employee: stateEmployee,
            departmentID: selectedRoom.id,
            brandID: selectedBrand.id,
            type: changeValue.type,
        }

        console.log(newObj);

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/employees", newObj);
            alert(response.data.message);
            if (response.status == 200)
                window.location.href = '/manager/listemployees';
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <div className={styles["session"]}>
            <div className={classNames(styles["header__information-user"], styles["header__information__user-update"])}>
                <div className={styles["z_raty"]}>
                    <div className={styles["infor__user"]}>
                        <div style={{ fontSize: '1.8rem' }} className={styles["role__user"]}>Thêm nhân viên</div>
                    </div>
                </div>
            </div>
            <div className={styles["container_profile"]}>
                <div className={grid["grid"]}>
                    <div className={grid["grid__row"]}>
                        <div className={grid["grid__column-12"]}>
                            <form className={styles["content_user"]} method="POST" ref={formRef}>
                                <div className={styles["title__information"]}>
                                    {/* IMAGES */}
                                    <div className={styles["introduce"]}>
                                        <h3 className={styles["title__introduce"]}>Hình ảnh</h3>
                                        <div className={styles["infor__project"]}>
                                            <div className={styles["infor__item"]}>
                                                <div onClick={handleSelectImg} className={styles["input__infor-img"]} style={{
                                                    backgroundImage: `url("${img}")`
                                                }}>
                                                </div>
                                                <input ref={inputRef} onChange={handleSetImg} name="img" style={{ display: 'none' }} type="file" className={styles["input__infor"]} required placeholder="Chọn hình ảnh" accept="image/*" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Personal Details */}
                                    <div className={styles["introduce"]}>
                                        <h3 className={styles["title__introduce"]}>Chi Tiết Cá Nhân</h3>
                                        <div className={styles["infor__employee"]}>
                                            <div className={styles["infor__item"]}>
                                                <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Họ và tên</div>
                                                <input onChange={handleSetChangeValue} name="fullname" required className={classNames(styles["content__infor"], styles["input__change-infor"])} placeholder="Thêm họ tên" />
                                                <div className={styles["change__content-infor"]}>
                                                    <TiPencil />
                                                    <div className={styles["change"]}>Chỉnh sửa</div>
                                                </div>
                                            </div>

                                            <div className={styles["infor__item"]}>
                                                <div className={styles["title__infor"]}>Nick name</div>
                                                <input onChange={handleSetChangeValue} name="nickname" required className={classNames(styles["content__infor"], styles["input__change-infor"])} placeholder="Thêm nick name" />
                                                <div className={styles["change__content-infor"]}>
                                                    <TiPencil />
                                                    <div className={styles["change"]}>Chỉnh sửa</div>
                                                </div>
                                            </div>

                                            <div className={styles["infor__item"]}>
                                                <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Giới tính</div>
                                                <div className={classNames(styles["change__content-infor"], styles["choose__list"])}>
                                                    <div className={styles["groups__choose"]}>
                                                        <input name="sex" style={{ cursor: 'pointer' }} required className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly placeholder="Chọn giới tính" />
                                                        <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                            <div onClick={() => setSex('Nam')} className={myspace["member__item"]} >
                                                                Nam
                                                            </div>
                                                            <div onClick={() => setSex('Nữ')} className={myspace["member__item"]} >
                                                                Nữ
                                                            </div>
                                                            <div onClick={() => setSex('Khác')} className={myspace["member__item"]} >
                                                                Khác
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles["infor__item"]}>
                                                <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Tình trạng hôn nhân</div>
                                                <div className={classNames(styles["change__content-infor"], styles["choose__list"])}>
                                                    <div className={styles["groups__choose"]}>
                                                        <input name="marital_status" style={{ cursor: 'pointer' }} required className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly placeholder="Chọn tình trạng hôn nhân" />
                                                        <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                            <div onClick={() => setMarry('Chưa kết hôn')} className={myspace["member__item"]} >
                                                                Chưa kết hôn
                                                            </div>
                                                            <div onClick={() => setMarry('Đã kết hôn')} className={myspace["member__item"]} >
                                                                Đã kết hôn
                                                            </div>
                                                            <div onClick={() => setMarry('Khác')} className={myspace["member__item"]} >
                                                                Khác
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles["infor__item"]}>
                                                <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Địa chỉ</div>
                                                <input onChange={handleSetChangeValue} name="address" required className={classNames(styles["content__infor"], styles["input__change-infor"])} placeholder="" />
                                                <div className={styles["change__content-infor"]}>
                                                    <TiPencil />
                                                    <div className={styles["change"]}>Chỉnh sửa</div>
                                                </div>
                                            </div>
                                            <div className={styles["infor__item"]}>
                                                <div className={styles["title__infor"]}>Tự giới thiệu</div>
                                                <input onChange={handleSetChangeValue} name="introSeft" required className={classNames(styles["content__infor"], styles["input__change-infor"])} placeholder="" />
                                                <div className={styles["change__content-infor"]}>
                                                    <TiPencil />
                                                    <div className={styles["change"]}>Chỉnh sửa</div>
                                                </div>
                                            </div>
                                            <div className={styles["infor__item"]}>
                                                <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Ngày sinh</div>
                                                <input name="dob" readOnly
                                                    style={{ display: 'none' }}
                                                    required className={classNames(styles["content__infor"],
                                                        styles["input__change-infor"])}
                                                    value={date ? format(date, 'dd/MM/yyyy') : ''} placeholder="dd/mm/yyyy" />
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant={"outline"}
                                                            className={classNames(cn(
                                                                "w-[280px] justify-start text-left font-normal flex-1",
                                                                !date && "text-muted-foreground"
                                                            ))}
                                                            onClick={handleSetChangeValue}
                                                        >
                                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                                            {date ? format(date, 'dd/MM/yyyy') : <span>Pick a date</span>}
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0">
                                                        <Calendar
                                                            mode="single"
                                                            selected={date}
                                                            onSelect={(date) => {
                                                                setDate(date);
                                                            }}
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>

                                            </div>
                                            <div className={styles["infor__item"]}>
                                                <div className={styles["title__infor"]}>Thông tin khác</div>
                                                <input onChange={handleSetChangeValue} name="difInfor" required className={classNames(styles["content__infor"], styles["input__change-infor"])} placeholder="" />
                                                <div className={styles["change__content-infor"]}>
                                                    <TiPencil />
                                                    <div className={styles["change"]}>Chỉnh sửa</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Job Description */}
                                    <div className={styles["introduce"]}>
                                        <h3 className={styles["title__introduce"]}>Thông Tin Công Việc</h3>
                                        <div className={styles["infor__employee"]}>
                                            <div className={grid["grid"]}>
                                                <div className={grid["grid__row"]}>
                                                    <div className={grid["grid__column-6"]}>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Phòng</div>
                                                            <div className={classNames(styles["change__content-infor"], styles["choose__list"])}>
                                                                <div className={styles["groups__choose"]}>
                                                                    <input onClick={handleSetChangeValue} name="roomID" style={{ cursor: 'pointer' }} required className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly placeholder="Chọn phòng" />
                                                                    <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                                        {rooms.map((room, index) =>
                                                                            <div onClick={e => setSelectedRoom(room)} key={index} className={myspace["member__item"]} >
                                                                                <div className={myspace["img__member"]} style={{
                                                                                    backgroundImage: `url('/images/${room.img}')`
                                                                                }}>
                                                                                </div>
                                                                                <div className={myspace["member__infor"]}>
                                                                                    <div className={myspace["main__infor"]}>
                                                                                        <div className={myspace["name__member"]}>
                                                                                            {room.department_name}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Địa điểm</div>
                                                            <div className={classNames(styles["change__content-infor"], styles["choose__list"])}>
                                                                <div className={styles["groups__choose"]}>
                                                                    <input onClick={handleSetChangeValue} name="brandID" style={{ cursor: 'pointer' }} required className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly placeholder="Chọn địa điểm" />
                                                                    <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                                        {brands.map((brand, index) =>
                                                                            <div key={index} onClick={e => setSelectedBrand(brand)} className={myspace["member__item"]} >
                                                                                {brand.brand_address}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Chức vụ</div>
                                                            <div className={classNames(styles["change__content-infor"], styles["choose__list"])}>
                                                                <div className={styles["groups__choose"]}>
                                                                    <input onChange={handleSetChangeValue} name="position" style={{ cursor: 'pointer' }} required className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly placeholder="Chọn chức vụ" />
                                                                    <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                                        <div onClick={() => setPosition('CEO')} className={myspace["member__item"]} >
                                                                            CEO
                                                                        </div>
                                                                        <div onClick={() => setPosition('Manager')} className={myspace["member__item"]} >
                                                                            Manager
                                                                        </div>
                                                                        <div onClick={() => setPosition('Employee')} className={myspace["member__item"]} >
                                                                            Employee
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className={grid["grid__column-6"]}>

                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Loại công việc</div>
                                                            <div className={classNames(styles["change__content-infor"], styles["choose__list"])}>
                                                                <div className={styles["groups__choose"]}>
                                                                    <input onClick={handleSetChangeValue} name="type" style={{ cursor: 'pointer' }} required className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly placeholder="Chọn loại công việc" />
                                                                    <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                                        <div onClick={() => setTypework('Part Time')} className={myspace["member__item"]} >
                                                                            Part Time
                                                                        </div>
                                                                        <div onClick={() => setTypework('Over Time')} className={myspace["member__item"]} >
                                                                            Over Time
                                                                        </div>
                                                                        <div onClick={() => setTypework('Hot Desking')} className={myspace["member__item"]} >
                                                                            Hot Desking
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Trạng thái nhân viên</div>
                                                            <div className={classNames(styles["change__content-infor"], styles["choose__list"])}>
                                                                <div className={styles["groups__choose"]}>
                                                                    <input onClick={handleSetChangeValue} name="state_employee" style={{ cursor: 'pointer' }} required className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly placeholder="Chọn trạng thái nhân viên" />
                                                                    <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                                        <div onClick={() => setStateEmployee('Hoạt động')} className={myspace["member__item"]} >
                                                                            Hoạt động
                                                                        </div>
                                                                        <div onClick={() => setStateEmployee('Dừng')} className={myspace["member__item"]} >
                                                                            Dừng
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}>Kinh nghiệm</div>
                                                            <input onChange={handleSetChangeValue} name="experience" required className={classNames(styles["content__infor"], styles["input__change-infor"])} placeholder="" />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contacts Detail */}
                                    <div className={styles["introduce"]}>
                                        <h3 className={styles["title__introduce"]}>Chi Tiết Liên Hệ</h3>
                                        <div className={styles["infor__employee"]}>
                                            <div className={grid["grid"]}>
                                                <div className={grid["grid__row"]}>
                                                    <div className={grid["grid__column-6"]}>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Số điện thoại công việc</div>
                                                            <input onChange={handleSetChangeValue} name="phone_work" required className={classNames(styles["content__infor"], styles["input__change-infor"])} placeholder="" />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Địa chỉ email công việc</div>
                                                            <input onChange={handleSetChangeValue} name="email_work" required className={classNames(styles["content__infor"], styles["input__change-infor"])} placeholder="" />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Vị trí chỗ ngồi</div>
                                                            <div className={classNames(styles["change__content-infor"], styles["choose__list"])}>
                                                                <div className={styles["groups__choose"]}>
                                                                    <input onClick={handleSetChangeValue} name="seat" style={{ cursor: 'pointer' }} required className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly placeholder="Chọn chỗ ngồi" />
                                                                    <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                                        <div onClick={() => setSeat('Ghế số 1')} className={myspace["member__item"]} >
                                                                            Ghế số 1
                                                                        </div>
                                                                        <div onClick={() => setSeat('Ghế số 2')} className={myspace["member__item"]} >
                                                                            Ghế số 2
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}>Tag</div>
                                                            <input onChange={handleSetChangeValue} name="tag" required className={classNames(styles["content__infor"], styles["input__change-infor"])} placeholder="" />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div></div>
                                                    <div className={grid["grid__column-6"]}>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Số điện thoại cá nhân</div>
                                                            <input onChange={handleSetChangeValue} name="phone" required className={classNames(styles["content__infor"], styles["input__change-infor"])} placeholder="" />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}><span style={{ color: 'red' }}>*</span> Địa chỉ email cá nhân</div>
                                                            <input onChange={handleSetChangeValue} name="email" required className={classNames(styles["content__infor"], styles["input__change-infor"])} placeholder="" />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div></div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                    {/* Work Experience */}
                                    <div className={styles["introduce"]}>
                                        <h3 className={styles["title__introduce"]}>Kinh Nghiệm Làm Việc</h3>
                                        <div className={classNames(styles["infor__employee"], styles["scroll-infor"])}>
                                            <table className={styles["table__experience"]}>
                                                <thead className={styles["head__experience"]}>
                                                    <tr className={styles["tr__experience"]}>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Tên công ty</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Chức Danh</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Từ Ngày</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Đến Ngày</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Mô Tả Công Việc</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Phù hợp</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody id={styles["body__experience"]}>
                                                    <tr id={styles[""]}>
                                                        <td className={styles["td__experience"]}>Infomax</td>
                                                        <td className={styles["td__experience"]}>Assistant Manager</td>
                                                        <td className={styles["td__experience"]}>30-Apr-1998</td>
                                                        <td className={styles["td__experience"]}>01-Jan-2004</td>
                                                        <td className={styles["td__experience"]}>-</td>
                                                        <td className={styles["td__experience"]}>Yes</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className={styles["introduce"]}>
                                        <h3 className={styles["title__introduce"]}>Chi Tiết Trình Độ</h3>
                                        <div className={classNames(styles["infor__employee"], styles["scroll-infor"])}>
                                            <table className={styles["table__experience"]}>
                                                <thead className={styles["head__experience"]}>
                                                    <tr className={styles["tr__experience"]}>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Tên học viện</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Bằng cấp/Bằng tốt nghiệp</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Chuyên môn</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Ngày hoàn thành</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody id={styles["body__experience"]}>
                                                    <tr id={styles[""]}>
                                                        <td className={styles["td__experience"]}>Infomax</td>
                                                        <td className={styles["td__experience"]}>Assistant Manager</td>
                                                        <td className={styles["td__experience"]}>30-Apr-1998</td>
                                                        <td className={styles["td__experience"]}>01-Jan-2004</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className={styles["introduce"]}>
                                        <h3 className={styles["title__introduce"]}>Chi Tiết Phụ Thuộc</h3>
                                        <div className={classNames(styles["infor__employee"], styles["scroll-infor"])}>
                                            <table className={styles["table__experience"]}>
                                                <thead className={styles["head__experience"]}>
                                                    <tr className={styles["tr__experience"]}>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Tên </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Quan hệ</span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Ngày sinh</span>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody id={styles["body__experience"]}>
                                                    <tr id={styles[""]}>
                                                        <td className={styles["td__experience"]}>Infomax</td>
                                                        <td className={styles["td__experience"]}>Assistant Manager</td>
                                                        <td className={styles["td__experience"]}>30-Apr-1998</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className={classNames(styles["footer__information-user"], styles["footer__information__user-update"])}>
                                        <button onClick={handleClose} className={classNames(styles["btn__save"])}>Đóng</button>
                                        <button type="submit" onClick={e => handleSubmit(e)} className={classNames(styles["btn__save"])}>Lưu</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default CreateTeam;