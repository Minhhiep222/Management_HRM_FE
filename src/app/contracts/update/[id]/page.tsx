"use client";

import classNames from "classnames";
import * as React from "react";
import { useEffect, useState } from "react";
import styles from "@/styles/profile.module.scss";
import myspace from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import "@/app/globals.css";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import DataList from "@/pages/api/datalist";
import axios from "axios";
import { useParams } from "next/navigation";

function CreateContract() {
    const param = useParams();
    const [dateStart, setDateStart] = React.useState<Date>();
    const [dateFinish, setDateFinish] = React.useState<Date>();
    const [date, setDate] = React.useState<Date>();
    const [selectedRoom, setSelectedRoom] = useState({ department_id: '', department_name: '' });
    const [selectEmployee, setSelectEmployee] = useState({ id: '', fullname: '' });
    const [changeValue, setChangeValue] = useState({
        id: '',
        employee_id: '',
        start_date: '',
        end_date: '',
        approval_date: '',
        contract_type: '',
        contract_status: "đang hiệu lực",
        contract_num: '',
        roomID: '',
        description: '',
    });
    const [contractType, setContractType] = useState<string>('');
    const [contractStatus, setContractStatus] = useState<string>('');
    const [contractNum, setContractNum] = useState<string>('');

    //method lấy giá trị trên input
    const handleSetChangeValue = (e: any) => {
        setChangeValue({
            ...changeValue,
            [e.target.name]: e.target.value,
        })
    }

    const handleFormatDate = (date: any) => {
        let dob = "";
        let year = date.getFullYear();
        let month = (date.getMonth() + 1).toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
        dob = `${year}-${month}-${day}`;
        return dob;
    }

    const handleGetContractByID = async (id: any) => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/contracts/" + id);
            setSelectEmployee(result.data.contract.employee);
            setContractType(result.data.contract.contract_type);
            setContractNum(result.data.contract.contract_num);
            setContractStatus(result.data.contract.contract_status);
            setDateStart(result.data.contract.start_date);
            setDateFinish(result.data.contract.end_date);
            setDate(result.data.contract.approval_date);
            setChangeValue(result.data.contract)
        } catch (e) {
            console.log("Something wrong !");
        }
    }

    const {
        employees, handleGetUser,
        rooms, handleGetRoom
    } = DataList();

    useEffect(() => {
        handleSelect();
        handleGetRoom();
        handleGetUser();
        if (param)
            handleGetContractByID(param.id);
    }, [contractStatus]);

    const handleClose = () => {
        let address = ""
        window.location.href = localStorage.getItem('address') || address;
    };

    const handleSelect = (): void => {
        const content__infor = document.querySelectorAll(`.${styles.input__infor}`);
        content__infor.forEach(element => {
            element.addEventListener('click', () => {
                const list__members = element.nextElementSibling;
                const list = list__members as HTMLElement
                if (list !== null) {
                    list.style.display = 'block';
                }
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
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (dateStart instanceof Object) {
            changeValue.start_date = handleFormatDate(dateStart)
        }
        if (dateFinish instanceof Object) {
            changeValue.end_date = handleFormatDate(dateFinish)
        }
        if (date instanceof Object) {
            changeValue.approval_date = handleFormatDate(date)
        }
        changeValue.contract_status = contractStatus;
        changeValue.contract_num = contractNum;
        changeValue.contract_type = contractType;
        changeValue.employee_id = selectEmployee.id;
        changeValue.roomID = selectedRoom.department_id;

        try {
            const response = await axios.put("http://127.0.0.1:8000/api/contracts/" + changeValue.id, changeValue);
            alert(response.data.message);
            if (response.status == 200)
                window.location.href = '/manager/listcontracts';
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <div className={classNames(styles["header__information-user"], styles["header__information__user-update"])}>
                <div className={styles["z_raty"]}>
                    <div className={styles["infor__user"]}>
                        <div className={styles["role__user"]} style={{ fontSize: '1.8rem' }}>Thêm Hợp Đồng Làm Việc</div>
                    </div>
                </div>
            </div>

            <div className={styles["container_profile"]}>
                <div className={grid["grid"]}>
                    <div className={grid["grid__row"]}>
                        <div className={grid["grid__column-12"]}>

                            <form className={styles["content_user"]}>
                                <div className={styles["introduce"]}>
                                    <h3 className={styles["title__introduce"]}>Thông Tin Cấu Hình Hợp Đồng</h3>
                                    <div className={styles["infor__project"]}>
                                        <div className={grid["grid"]}>
                                            <div className={grid["grid__row"]}>

                                                <div className={grid["grid__column-6"]}>
                                                    <div className={classNames(styles["infor__item"])}>
                                                        <div className={styles["title__infor"]}>*Nhân viên</div>
                                                        <div className={styles["groups__choose"]}>
                                                            <input onChange={handleSetChangeValue} name="employee_id" readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} placeholder="Chọn mã nhân viên" defaultValue={selectEmployee.fullname} />
                                                            <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                                {employees.map(employee =>
                                                                    <div key={employee.id} onClick={e => setSelectEmployee(employee)} className={myspace["member__item"]} >
                                                                        <div className={myspace["img__member"]} style={{
                                                                            backgroundImage: `url('/images/${employee.img}')`
                                                                        }}>
                                                                        </div>
                                                                        <div className={myspace["member__infor"]}>
                                                                            <div className={myspace["main__infor"]}>
                                                                                <div className={myspace["name__member"]}>
                                                                                    {employee.fullname}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={classNames(styles["infor__item"])}>
                                                        <div className={styles["title__infor"]}>*Bộ phận</div>
                                                        <div className={styles["groups__choose"]}>
                                                            <input name="roomID" onChange={handleSetChangeValue} readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} placeholder="Chọn bộ phận" defaultValue={selectedRoom.department_name} />
                                                            <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                                {rooms.map(room =>
                                                                    <div key={room.department_id} onClick={e => setSelectedRoom(room)} className={myspace["member__item"]} >
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
                                                    <div className={classNames(styles["infor__item"])}>
                                                        <div className={styles["title__infor"]}>*Hợp đồng số</div>
                                                        <div className={styles["groups__choose"]}>
                                                            <input name="contract_num" onChange={handleSetChangeValue} readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} placeholder="Chọn hợp đồng số" defaultValue={contractNum} />
                                                            <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                                <div onClick={() => setContractNum('HĐLĐ-1')} className={myspace["member__item"]} >
                                                                    HĐLĐ-1
                                                                </div>
                                                                <div onClick={() => setContractNum('HĐLĐ-2')} className={myspace["member__item"]} >
                                                                    HĐLĐ-2
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={classNames(styles["infor__item"])}>
                                                        <div className={styles["title__infor"]}>*Loại hợp đồng</div>
                                                        <div className={styles["groups__choose"]}>
                                                            <input name="contract_type" onChange={handleSetChangeValue} readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} placeholder="Chọn loại hợp đồng" defaultValue={contractType} />
                                                            <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                                <div onClick={() => setContractType('Hợp đồng lao động')} className={myspace["member__item"]} >
                                                                    Hợp đồng lao động
                                                                </div>
                                                                <div onClick={() => setContractType('Hợp đồng thử việc')} className={myspace["member__item"]} >
                                                                    Hợp đồng thử việc
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={grid["grid__column-6"]}>
                                                    <div className={classNames(styles["infor__item"])}>
                                                        <div className={styles["title__infor"]}>*Từ ngày</div>
                                                        <div className={styles["groups__choose"]}>
                                                            <input name="start_date" onChange={handleSetChangeValue} style={{ display: 'none' }} readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} placeholder="Chọn loại hợp đồng" />
                                                            <Popover>
                                                                <PopoverTrigger asChild>
                                                                    <Button
                                                                        variant={"outline"}
                                                                        className={classNames(cn(
                                                                            "w-[100%] justify-start text-left font-normal flex-1",
                                                                            !dateStart && "text-muted-foreground"
                                                                        ))}
                                                                        onClick={handleSetChangeValue}
                                                                    >
                                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                                        {dateStart ? format(dateStart, 'dd/MM/yyyy') : <span>Pick a dateStart</span>}
                                                                    </Button>
                                                                </PopoverTrigger>
                                                                <PopoverContent className="w-auto p-0">
                                                                    <Calendar
                                                                        mode="single"
                                                                        selected={dateStart}
                                                                        onSelect={(dateStart) => {
                                                                            setDateStart(dateStart);
                                                                        }}
                                                                        initialFocus
                                                                    />
                                                                </PopoverContent>
                                                            </Popover>
                                                        </div>
                                                    </div>
                                                    <div className={classNames(styles["infor__item"])}>
                                                        <div className={styles["title__infor"]}>*Đến ngày</div>
                                                        <div className={styles["groups__choose"]}>
                                                            <input name="end_date" onChange={handleSetChangeValue} style={{ display: 'none' }} readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} placeholder="Chọn loại hợp đồng" />
                                                            <Popover>
                                                                <PopoverTrigger asChild>
                                                                    <Button
                                                                        variant={"outline"}
                                                                        className={classNames(cn(
                                                                            "w-[100%] justify-start text-left font-normal flex-1",
                                                                            !dateFinish && "text-muted-foreground"
                                                                        ))}
                                                                        onClick={handleSetChangeValue}
                                                                    >
                                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                                        {dateFinish ? format(dateFinish, 'dd/MM/yyyy') : <span>Pick a dateFinish</span>}
                                                                    </Button>
                                                                </PopoverTrigger>
                                                                <PopoverContent className="w-auto p-0">
                                                                    <Calendar
                                                                        mode="single"
                                                                        selected={dateFinish}
                                                                        onSelect={(dateFinish) => {
                                                                            setDateFinish(dateFinish);
                                                                        }}
                                                                        initialFocus
                                                                    />
                                                                </PopoverContent>
                                                            </Popover>
                                                        </div>
                                                    </div>
                                                    <div className={classNames(styles["infor__item"])}>
                                                        <div className={styles["title__infor"]}>*Ngày duyệt</div>
                                                        <div className={styles["groups__choose"]}>
                                                            <input name="approval_date" onChange={handleSetChangeValue} style={{ display: 'none' }} readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} placeholder="Chọn loại hợp đồng" />
                                                            <Popover>
                                                                <PopoverTrigger asChild>
                                                                    <Button
                                                                        variant={"outline"}
                                                                        className={classNames(cn(
                                                                            "w-[100%] justify-start text-left font-normal flex-1",
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
                                                    </div>
                                                    <div className={styles["infor__item"]}>
                                                        <div className={styles["title__infor"]}>*Mẫu hợp đồng</div>
                                                        <input onChange={handleSetChangeValue} className={styles["input__infor"]} required placeholder="Nhập mẫu hợp đồng" />
                                                    </div>
                                                </div>
                                                <div className={grid["grid__column-12"]}>
                                                    <div className={styles["infor__item"]}>
                                                        <div className={styles["title__infor"]}>*Mô tả hợp đồng</div>
                                                        <textarea onChange={handleSetChangeValue} name="description" className={styles["input__infor"]} required placeholder="Nhập mô tả hợp đồng" defaultValue={changeValue.description} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className={classNames(styles["footer__information-user"], styles["footer__information__user-update"])}>
                                            <button onClick={handleClose} className={classNames(styles["btn__save"])}>Đóng</button>
                                            <button onClick={handleSubmit} className={classNames(styles["btn__save"])}>Lưu</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div >
                </div >
            </div >


        </div >

    );
}

export default CreateContract;