"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import myspace from "@/styles/myspace.module.scss";
import styles from "@/styles/profile.module.scss";
import grid from "@/styles/globals.module.scss";
import "@/app/globals.css";
import classNames from "classnames";
import DataList from "@/pages/api/datalist";
import ModalItem from "@/components/modal/Modal_Item";
import { IoMdSearch } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { IoAddOutline } from "react-icons/io5";
import axios from "axios";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { time } from "console";
import { useParams } from "next/navigation";
import { start } from "repl";

function UpdateProJect() {
    const param = useParams();
    const [dateStart, setDateStart] = React.useState<Date>();
    const [dateFinish, setDateFinish] = React.useState<Date>();
    const {
        employees, handleGetUser,
        managers, handleGetManager,
        customers, handleGetCustomer,
        brands, handleGetBrand,
        rooms, handleGetRoom
    } = DataList();
    const [selectMember, setSelectMember] = useState<any[]>([]);
    const idAllUserRef = useRef<HTMLInputElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const chooseRef = useRef<HTMLInputElement | null>(null);
    const [isModalOpenItem, setIsModalOpenItem] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState({ id: '', name: '' });
    const [selectedManager, setSelectedManager] = useState({ id: '', fullname: '' });
    const [useProjectField, setProjectField] = useState({
        id: '',
        name: '',
        description: '',
        time: '',
        expense: 0,
        state: 'đang thực hiện',
        start_date: '',
        finish_date: '',
        managerID: '',
        memberID: [0],
        customerID: '',
    });

    const handleClose = () => {
        window.location.href = "/manager/listprojects";
    }

    //method lấy team bằng id
    const handleGetProjectByID = async (id: any) => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/projects/" + id);
            setProjectField(result.data.project);
            setSelectMember(result.data.project.members);
            setSelectedManager(result.data.project.manager);
            setSelectedCustomer(result.data.project.customer);
            setDateFinish(result.data.project.finish_date);
            setDateStart(result.data.project.start_date);
            console.log(result.data.project);
        } catch (e) {
            console.log("Something wrong !");
        }
    }

    //method lấy tất cả cách thành viên
    const handleCheckedAll = () => {
        const checkeds = document.querySelectorAll("input[name='idUser']") as NodeListOf<HTMLInputElement>;
        checkeds.forEach(element => {
            if (idAllUserRef.current?.checked === false) {
                element.checked = false
                setSelectMember([]);
            }
            else {
                element.checked = true;
                setSelectMember(employees);
            }
        });
    }

    //method mở modal
    const handleOpenModalItem = () => {
        setIsModalOpenItem(true);
    };

    //method đóng modal
    const handleCloseModalItem = () => {
        setIsModalOpenItem(false);
    };


    const handleGetValue = (e: any) => {
        handleCloseModalItem();
    }

    //method kiểm tra thành viên nào đã được chọn
    const isMemberSelected = (employee: any): boolean => {
        return selectMember.some(member => member.id === employee.id);
    };

    //method chọn thành viên
    const handleSelectMember = (e: any): void => {
        setSelectMember(prevMembers => {
            const isMemberSelected = prevMembers.some(member => member.id === e.id);
            if (isMemberSelected) {
                return prevMembers.filter(member => member.id !== e.id);
            } else {
                return [...prevMembers, e];
            }
        });
    }

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
    }

    //chọn khách hàng
    const handleSelectCustomer = (e: any) => {
        setSelectedCustomer(e);
        console.log("click");
    }

    //chọn giá trị
    const handleSetProjectField = (e: any) => {
        setProjectField({
            ...useProjectField,
            [e.target.name]: e.target.value
        });
    }

    //method format ngày tháng
    const handleFormatDate = (date: any) => {
        let dob = "";
        let year = date.getFullYear();
        let month = (date.getMonth() + 1).toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
        dob = `${year}-${month}-${day}`;
        return dob;
    }

    const handleSubmitProject = async (e: any) => {
        e.preventDefault();
        if (dateStart instanceof Object) {
            useProjectField.start_date = handleFormatDate(dateStart)
        }
        if (dateFinish instanceof Object) {
            useProjectField.finish_date = handleFormatDate(dateFinish)
        }

        useProjectField.name = useProjectField.name;
        useProjectField.managerID = selectedManager.id;
        useProjectField.memberID = selectMember;
        useProjectField.customerID = selectedCustomer.id;
        useProjectField.description = useProjectField.description;
        useProjectField.time = useProjectField.time;
        useProjectField.expense = useProjectField.expense;
        useProjectField.state = useProjectField.state;

        try {
            const response = await axios.put("http://127.0.0.1:8000/api/projects/" + useProjectField.id, useProjectField);
            alert(response.data.message);
            if (response.status == 200)
                window.location.href = '/manager/listprojects';
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        handleGetUser();
        handleGetCustomer();
        handleGetManager();
        handleSelect();
        if (param)
            handleGetProjectByID(param.id)
    }, [])
    return (
        <div>
            <div className={classNames(styles["header__information-user"], styles["header__information__user-update"])}>
                <div className={styles["z_raty"]}>
                    <div className={styles["infor__user"]}>
                        <div className={styles["role__user"]} style={{ fontSize: '1.8rem' }}>Thêm dự án</div>
                    </div>
                </div>
            </div>

            <div className={styles["container_profile"]}>
                <div className={grid["grid"]}>
                    <div className={grid["grid__row"]}>
                        <div className={grid["grid__column-12"]}>
                            <form className={styles["content_user"]}>
                                {/* Thông tin dự án */}
                                <div className={styles["introduce"]}>
                                    <h3 className={styles["title__introduce"]}>Thông Tin Cấu Hình Dự Án</h3>
                                    <div className={styles["infor__project"]}>
                                        <div className={grid["grid"]}>
                                            <div className={grid["grid__row"]}>
                                                <div className={grid["grid__column-6"]}>

                                                    <div className={classNames(styles["infor__item"])}>
                                                        <div className={styles["title__infor"]}>*Tên dự án</div>
                                                        <input name="name" onChange={handleSetProjectField} className={classNames(styles["input__infor"], styles["choosen__item-infor"])} required placeholder="Nhập tên dự án" defaultValue={useProjectField.name} />
                                                    </div>

                                                    <div className={classNames(styles["infor__item"])}>
                                                        <div className={styles["title__infor"]}>*Chọn khách hàng</div>
                                                        <div className={styles["groups__choose"]}>
                                                            <input name="managerID" readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} placeholder="Chọn người khách hàng" defaultValue={selectedCustomer.name} />
                                                            <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                                {customers.map((customer: any) =>
                                                                    <div onClick={() => handleSelectCustomer(customer)} className={myspace["member__item"]} key={customer.id}>
                                                                        <div className={myspace["img__member"]} style={{
                                                                            backgroundImage: `url('/images/${customer.img}')`
                                                                        }}>
                                                                        </div>
                                                                        <div className={myspace["member__infor"]}>
                                                                            <div className={myspace["main__infor"]}>
                                                                                <div className={myspace["name__member"]}>
                                                                                    {customer.name}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                                <div className={myspace["action__btn"]}>
                                                                    <button className={grid["btn"]}>
                                                                        <IoAddOutline />
                                                                        <span>Thêm phòng</span>
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className={classNames(styles["infor__item"])}>
                                                        <div className={styles["title__infor"]}>*Thành viên nhóm</div>
                                                        <div className={styles["groups__choose"]}>
                                                            <input onClick={handleOpenModalItem} name="memberID" ref={chooseRef} readOnly
                                                                className={classNames(styles["input__infor"], styles["choosen__item-infor"], "choose__member")}
                                                                placeholder="Chọn thành viên nhóm"
                                                                defaultValue={selectMember.map(member =>
                                                                    member.fullname
                                                                )}
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className={classNames(styles["infor__item"])}>
                                                        <div className={styles["title__infor"]}>*Từ ngày</div>
                                                        <div className={styles["groups__choose"]}>
                                                            <input name="start_date" onChange={handleSetProjectField} style={{ display: 'none' }} readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} placeholder="Chọn loại hợp đồng" />
                                                            <Popover>
                                                                <PopoverTrigger asChild>
                                                                    <Button
                                                                        variant={"outline"}
                                                                        className={classNames(cn(
                                                                            "w-[100%] justify-start text-left font-normal flex-1",
                                                                            !dateStart && "text-muted-foreground"
                                                                        ))}
                                                                        onClick={handleSetProjectField}
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
                                                </div>
                                                <div className={grid["grid__column-6"]}>
                                                    <div className={styles["infor__item"]}>
                                                        <div className={styles["title__infor"]}>*Chi Phí Dự Án</div>
                                                        <input name="expense" onChange={handleSetProjectField} className={styles["input__infor"]} required placeholder="Nhập chi phí dự án" defaultValue={useProjectField.expense} />
                                                    </div>

                                                    <div className={classNames(styles["infor__item"])}>
                                                        <div className={styles["title__infor"]}>*Người Quản Lý</div>
                                                        <div className={styles["groups__choose"]}>
                                                            <input name="managerID" readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} placeholder="Chọn người quản lý" defaultValue={selectedManager.fullname} />
                                                            <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                                {managers.map((manager: any) =>
                                                                    manager.members.map((member: any) =>
                                                                        <div onClick={() => setSelectedManager(member)} className={myspace["member__item"]} key={member.id}>
                                                                            <div className={myspace["img__member"]} style={{
                                                                                backgroundImage: `url('/images/${member.img}')`
                                                                            }}>
                                                                            </div>
                                                                            <div className={myspace["member__infor"]}>
                                                                                <div className={myspace["main__infor"]}>
                                                                                    <div className={myspace["name__member"]}>
                                                                                        {member.fullname}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                )}
                                                                <div className={myspace["action__btn"]}>
                                                                    <button className={grid["btn"]}>
                                                                        <IoAddOutline />
                                                                        <span>Thêm người quản lý</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className={styles["infor__item"]}>
                                                        <div className={styles["title__infor"]}>*Số Giờ Dự Tính</div>
                                                        <input name="time" onChange={handleSetProjectField} className={styles["input__infor"]} required placeholder="Nhập thời gian dự tính" defaultValue={useProjectField.time} />
                                                    </div>


                                                    <div className={classNames(styles["infor__item"])}>
                                                        <div className={styles["title__infor"]}>*Đến ngày</div>
                                                        <div className={styles["groups__choose"]}>
                                                            <input name="end_date" onChange={handleSetProjectField} style={{ display: 'none' }} readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} placeholder="Chọn loại hợp đồng" />
                                                            <Popover>
                                                                <PopoverTrigger asChild>
                                                                    <Button
                                                                        variant={"outline"}
                                                                        className={classNames(cn(
                                                                            "w-[100%] justify-start text-left font-normal flex-1",
                                                                            !dateFinish && "text-muted-foreground"
                                                                        ))}
                                                                        onClick={handleSetProjectField}
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
                                                </div>
                                            </div>
                                        </div>

                                        <div className={styles["infor__item"]}>
                                            <div className={styles["title__infor"]}>*Mô Tả</div>
                                            <textarea name="description" onChange={handleSetProjectField} className={styles["input__infor"]} required placeholder="Nhập mô tả dự án" defaultValue={useProjectField.description} />
                                        </div>
                                    </div>
                                </div>
                                <div className={classNames(styles["footer__information-user"], styles["footer__information__user-update"])}>
                                    <button onClick={handleClose} className={classNames(styles["btn__save"])}>Đóng</button>
                                    <button onClick={handleSubmitProject} className={classNames(styles["btn__save"])}>Lưu</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <ModalItem isOpen={isModalOpenItem} onClose={handleCloseModalItem}>
                <div>
                    <div className={myspace["introduce"]}>
                        <h3 className={myspace["title__introduce"]}>Thêm thành viên nhóm</h3>
                        <div className={myspace["search__member"]}>
                            <input type="text" placeholder="Tìm kiếm" />
                            <IoMdSearch />
                        </div>
                        <div className={classNames(myspace["infor__employee"], myspace["scroll-infor"])}>
                            <table className={myspace["table__experience"]}>
                                <thead className={myspace["head__experience"]}>
                                    <tr className={myspace["tr__experience"]}>
                                        <th className={classNames(myspace["th__experience-checkbox"], myspace["sticky-col-0"])}>
                                            <div>
                                                <input onClick={handleCheckedAll} ref={idAllUserRef} type="checkbox" onChange={handleSetProjectField} name="allIdUser" id="" />
                                            </div>
                                        </th>
                                        <th className={classNames(myspace["th__experience"], myspace["sticky-col-1"])}>
                                            <div>
                                                <span>Tên</span>
                                                <span>
                                                    <FontAwesomeIcon className={classNames(myspace["icon__arrow"], myspace["active"])} icon={faArrowUp} />
                                                    <FontAwesomeIcon className={classNames(myspace["icon__arrow"])} icon={faArrowDown} />
                                                </span>
                                            </div>
                                        </th>
                                        <th className={myspace["th__experience"]}>
                                            <div>
                                                <span>Địa Chỉ Email</span>
                                                <span>
                                                    <FontAwesomeIcon className={classNames(myspace["icon__arrow"], myspace["active"])} icon={faArrowUp} />
                                                    <FontAwesomeIcon className={classNames(myspace["icon__arrow"])} icon={faArrowDown} />
                                                </span>
                                            </div>
                                        </th>
                                        <th className={myspace["th__experience"]}>
                                            <div>
                                                <span> Ảnh </span>
                                                <span>
                                                    <FontAwesomeIcon className={classNames(myspace["icon__arrow"], myspace["active"])} icon={faArrowUp} />
                                                    <FontAwesomeIcon className={classNames(myspace["icon__arrow"])} icon={faArrowDown} />
                                                </span>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody id={myspace["body__experience"]}>

                                    {employees.map((employee, index) =>
                                        <tr className={myspace["employee__item"]} key={employee.id}>
                                            <td className={classNames(myspace["td__experience"], myspace["sticky-col-0"])}>
                                                <div>
                                                    <input checked={isMemberSelected(employee)} type="checkbox" onChange={() => handleSelectMember(employee)} name="idUser" id="" defaultValue={employee.fullname} />
                                                </div>
                                            </td>
                                            <td className={classNames(myspace["td__experience"], myspace["sticky-col-1"])}>{employee.fullname}</td>
                                            <td className={classNames(myspace["td__experience"], myspace["sticky-col-2"])}>{employee.email}</td>
                                            <td className={styles["td__experience"]} >
                                                <div className={myspace["img__teams"]}>
                                                    <div className={myspace["td__img"]} style={{
                                                        backgroundImage: `url("/images/${employee.img}")`
                                                    }}>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>
                        </div>
                        <div style={{ justifyContent: "end", margin: "10px 0" }} className={myspace["search__member"]}>
                            <button onClick={handleGetValue} className={classNames(styles["btn__save"])}>Chọn</button>
                        </div>
                    </div>
                </div>
            </ModalItem>


        </div>

    );
}

export default UpdateProJect;