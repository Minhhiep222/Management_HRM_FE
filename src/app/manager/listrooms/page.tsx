"use client";

import styles from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUp,
    faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { TiUserDelete } from "react-icons/ti";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import Link from "next/link";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import useModals from '@/components/hook/useModal';
import useAddress from '@/components/hook/useAddress';
import { useEffect, useRef, useState } from "react";
import axios from "axios";


function ListRoom() {
    const { isModalOpen, handleOpenModal, handleCloseModal } = useModals();
    const { address, saveAddress } = useAddress();
    const [employees, setEmployees] = useState<any[]>([]);
    const idAllUserRef = useRef<HTMLInputElement | null>(null);
    const [selectMember, setSelectMember] = useState<any[]>([]);
    const [selectDepartment, setSelectDepartment] = useState<any[]>([]);
    const [departments, setDepartments] = useState<any[]>([]);

    const handleGetdepartments = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/departments/list");
            setDepartments(result.data.departments);
            console.log(result.data.departments);
        } catch (e) {
            console.log("Something wrong !");
        }
    }
    const handleCreate = () => {
        saveAddress(window.location.href);
        window.location.href = "/rooms/create";
    };

    const handleUpdate = (id: any) => {
        saveAddress(window.location.href);
        window.location.href = `/rooms/update/${id}`;
    };

    const handleCheckedAll = () => {
        const checkeds = document.querySelectorAll("input[name='idDepartment']") as NodeListOf<HTMLInputElement>;
        checkeds.forEach((element, index) => {
            if (idAllUserRef.current?.checked === false) {
                element.checked = false
                setSelectDepartment([]);
            }
            else {
                element.checked = true;
                setSelectDepartment(departments)
            }
        });
    }

    const handleSelectDepartment = (e: any): void => {
        setSelectDepartment(prevdepartments => {
            const isdepartmentselected = prevdepartments.some(department => department.id === e.id);
            if (isdepartmentselected) {
                return prevdepartments.filter(department => department.id !== e.id);
            } else {
                return [...prevdepartments, e];
            }
        });
    }

    const handleDeleteDepartments = async () => {
        try {
            var arrayId: any = [];
            if (selectDepartment) {
                selectDepartment.map((department, index) =>
                    arrayId[index] = department.id
                )
            }

            const result = await axios.patch("http://127.0.0.1:8000/api/departments/deleteAll", arrayId);

            if (result.status == 200) {
                console.log("xóa thành công");
                handleGetdepartments();
                const checkeds = document.querySelectorAll("input[name='idDepartment']") as NodeListOf<HTMLInputElement>;
                checkeds.forEach(checked => checked.checked = false);
            }

        } catch (e) {
            console.log("something wrong")
        }
    }

    const handleDeleteDepartmentById = async (id: any) => {
        const confim = window.confirm("Bạn có muốn xóa nhóm này không");
        if (confim)
            try {
                const result = await axios.delete("http://127.0.0.1:8000/api/departments/" + id);
                if (result.status == 200) {
                    console.log("xóa thành công");
                    handleGetdepartments();
                }
            } catch (e) {
                console.log("something wrong")
            }
    }

    useEffect(() => {
        handleGetdepartments();
        // handleGetEmployee();
        // console.log(result.data.departments);
    }, []);



    return (
        <div className={styles["container__my-space"]}>
            <div className={grid["grid"]}>
                <div className={grid["grid__row"]}>
                    <div className={grid["grid__column-12"]}>
                        <div className={styles["content__myspace"]}>
                            <div>
                                <div className={styles["control__project"]}>
                                    <div className={styles["search__member"]}>
                                        <input type="text" placeholder="Tìm kiếm" />
                                        <IoMdSearch />
                                    </div>

                                    <div className={styles["control"]}>
                                        <button className={classNames(grid["btn"], styles["btn__control-project"])}>Nhân viên</button>
                                        <button className={classNames(grid["btn"], styles["btn__control-project"])}>Phòng</button>
                                        <button onClick={handleDeleteDepartments} className={classNames(grid["btn"], styles["btn__control-project"])}>Xóa phòng ban</button>
                                        <button onClick={handleCreate} className={classNames(grid["btn"], styles["btn__create-project"])}>Thêm phòng ban</button>
                                    </div>
                                </div>
                                <div className={styles["introduce"]}>
                                    <h3 className={styles["title__introduce"]}>Danh sách phòng ban</h3>
                                    <div className={classNames(styles["infor__employee"], styles["scroll-infor"])}>
                                        <table className={styles["table__experience"]}>
                                            <thead className={styles["head__experience"]}>
                                                <tr className={styles["tr__experience"]}>
                                                    <th style={{ backgroundColor: 'white', borderRadius: 0 }} className={classNames(styles["th__experience-checkbox"], styles["sticky-col-0"])}>
                                                    </th>
                                                    <th className={classNames(styles["th__experience-checkbox"], styles["sticky-col-1"])}>
                                                        <div>
                                                            <input onClick={handleCheckedAll} type="checkbox" name="" id="" ref={idAllUserRef} />
                                                        </div>
                                                    </th>
                                                    <th className={classNames(styles["th__experience"], styles["sticky-col-2"])} style={{
                                                        minWidth: '400px'
                                                    }} >
                                                        <div>
                                                            <span>Tên phòng</span>
                                                            <span>
                                                                <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                            </span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Ảnh</span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Chi nhánh</span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Người quản lý</span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Nhân viên</span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Trạng thái</span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Mô tả</span>
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody id={styles["body__experience"]}>

                                                {departments.map(department =>
                                                    <tr key={department.id} className={styles["employee__item"]}>
                                                        <td className={classNames(styles["td__experience"], styles["sticky-col-0"])}>
                                                            <div className={styles["control__project"]}>
                                                                <HiOutlineDotsHorizontal />
                                                                <ul className={styles["list__contacts"]}>
                                                                    <Link href="/projects/detail" className={styles["contacts__item"]}>
                                                                        <IoEyeOutline />
                                                                        <span>Xem</span>
                                                                    </Link>
                                                                    <button onClick={() => handleDeleteDepartmentById(department.id)} className={styles["contacts__item"]}>
                                                                        <TiUserDelete />
                                                                        <span>Xóa</span>
                                                                    </button>
                                                                    <button onClick={() => handleUpdate(department.id)} className={styles["contacts__item"]}>
                                                                        <MdOutlineTipsAndUpdates />
                                                                        <span>Sửa</span>
                                                                    </button>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                        <td className={classNames(styles["td__experience"], styles["sticky-col-1"])}>
                                                            <div className="">
                                                                <input onClick={() => handleSelectDepartment(department)} type="checkbox" name="idDepartment" id="" />
                                                            </div>
                                                        </td>
                                                        <td className={classNames(styles["td__experience"], styles["sticky-col-2"])}>{department.department_name}</td>
                                                        <td className={styles["td__experience"]} >
                                                            <div className={styles["img__departments"]}>
                                                                <div className={styles["td__img"]} style={{
                                                                    backgroundImage: `url("/images/${department.img}")`
                                                                }}>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className={styles["td__experience"]}>{department.brand.brand_address}</td>
                                                        <td className={styles["td__experience"]}>{department.manager.fullname}</td>
                                                        <td className={styles["td__experience"]}>
                                                            {department.employees.map((em: any) =>
                                                                <div key={em.id}>{em.fullname}</div>
                                                            )}
                                                        </td>
                                                        <td className={styles["td__experience"]}>{department.state}</td>
                                                        <td className={styles["td__experience"]}>{department.description}</td>
                                                    </tr>
                                                )}

                                            </tbody>
                                        </table>
                                    </div>
                                </div >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default ListRoom;
