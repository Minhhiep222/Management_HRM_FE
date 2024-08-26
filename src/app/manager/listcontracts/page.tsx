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
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import useModals from '@/components/hook/useModal';
import useAddress from '@/components/hook/useAddress';
import Header from "@/components/header/header";
import SideBar from "@/components/side-bar/side-bar";
import HeaderManager from "@/components/header/header__manager";

function ListContracts() {
    const { isModalOpen, handleOpenModal, handleCloseModal } = useModals();
    const { address, saveAddress } = useAddress();
    const [teams, setTeams] = useState<any[]>([]);
    const [Teams, setTeam] = useState<any[]>([]);
    const [contracts, setContracts] = useState<any[]>([]);
    const idAllUserRef = useRef<HTMLInputElement | null>(null);
    const [selectContract, setSelectContract] = useState<any[]>([]);

    const handleGetContracts = async () => {
        try {
            const result = await axios(`http://127.0.0.1:8000/api/contracts/list`);
            setContracts(result.data.contracts);
            console.log(result.data.contracts);
        } catch (e) {
            console.log("Something wrong !");
        }
    }

    const handleUpdate = (id: any) => {
        saveAddress(window.location.href);
        window.location.href = `/contracts/update/${id}`;
    };

    const handleCreateContract = () => {
        window.location.href = "/contracts/create";
    }

    const handleCheckedAll = () => {
        const checkeds = document.querySelectorAll("input[name='idContract']") as NodeListOf<HTMLInputElement>;
        checkeds.forEach((element, index) => {
            if (idAllUserRef.current?.checked === false) {
                element.checked = false
                setSelectContract([]);
            }
            else {
                element.checked = true;
                setSelectContract(contracts)
            }
        });
    }

    const handleSelectContract = (e: any): void => {
        setSelectContract(prevContracts => {
            const isContractSelected = prevContracts.some(Contract => Contract.id === e.id);
            if (isContractSelected) {
                return prevContracts.filter(Contract => Contract.id !== e.id);
            } else {
                return [...prevContracts, e];
            }
        });
    }

    const handleDeleteContracts = async () => {
        try {
            var arrayId: any = [];
            if (selectContract) {
                selectContract.map((selectContract, index) =>
                    arrayId[index] = selectContract.id
                )
            }

            const result = await axios.patch("http://127.0.0.1:8000/api/contracts/deleteAll", arrayId);

            if (result.status == 200) {
                console.log("xóa thành công");
                handleGetContracts();
                const checkeds = document.querySelectorAll("input[name='idContract']") as NodeListOf<HTMLInputElement>;
                checkeds.forEach(checked => checked.checked = false);
            }

        } catch (e) {
            console.log("something wrong")
        }
    }

    const handleDeleteContractById = async (id: any) => {
        const confim = window.confirm("Bạn có muốn xóa hợp đồng này không");
        if (confim)
            try {
                const result = await axios.delete("http://127.0.0.1:8000/api/contracts/" + id);
                if (result.status == 200) {
                    console.log("xóa thành công");
                    handleGetContracts();
                }
            } catch (e) {
                console.log("something wrong")
            }
    }

    useEffect(() => {
        handleGetContracts();
    }, []);


    return (
        <div className={styles["container__my-space"]}>
            <div className={grid["grid"]}>
                <div className={grid["grid__row"]}>
                    <div className={grid["grid__column-12"]}>
                        <div className={styles["content__myspace"]}>
                            <div>
                                <div className={styles["control__project"]}>
                                    <div className={styles["list__select"]}>
                                        <select name="name__project" id="" className={styles["select__name-project"]}>
                                            Nhóm
                                            <option value="Quản lý nhân sự" className={styles["item__project"]}>Quản lý nhân sự</option>
                                            <option value="Thương mại điện tử" className={styles["item__project"]}>Thương mại điện tử</option>
                                        </select>
                                    </div>

                                    <div className={styles["control"]}>
                                        <button className={classNames(grid["btn"], styles["btn__control-project"])}>Nhân viên</button>
                                        <button className={classNames(grid["btn"], styles["btn__control-project"])}>Phòng</button>
                                        <button onClick={handleDeleteContracts} className={classNames(grid["btn"], styles["btn__control-project"])}>Xóa hợp đồng</button>
                                        <button onClick={handleCreateContract} className={classNames(grid["btn"], styles["btn__create-project"])}>Thêm hợp đồng</button>
                                    </div>
                                </div>
                                <div className={styles["introduce"]}>
                                    <h3 className={styles["title__introduce"]}>Danh sách hợp đồng</h3>
                                    <div className={classNames(styles["infor__employee"], styles["scroll-infor"])}>
                                        <table className={styles["table__experience"]}>
                                            <thead className={styles["head__experience"]}>
                                                <tr className={styles["tr__experience"]}>
                                                    <th style={{ backgroundColor: 'white', borderRadius: 0 }} className={classNames(styles["th__experience-checkbox"], styles["sticky-col-0"])}>
                                                    </th>
                                                    <th className={classNames(styles["th__experience-checkbox"], styles["sticky-col-1"])}>
                                                        <div>
                                                            <input ref={idAllUserRef} onClick={handleCheckedAll} type="checkbox" name="" id="" />
                                                        </div>
                                                    </th>
                                                    <th className={classNames(styles["th__experience"], styles["sticky-col-2"])} style={{
                                                        minWidth: '400px'
                                                    }} >
                                                        <div>
                                                            <span>Tên hợp đồng</span>
                                                            <span>
                                                                <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                            </span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Nhân viên</span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Ngày bắt đầu</span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Ngày kết thúc </span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Ngày duyệt</span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Hợp đồng số</span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Loại hợp đồng</span>
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

                                                {contracts.map((contract, index) =>
                                                    <tr className={styles["employee__item"]} key={contract.id}>
                                                        <td className={classNames(styles["td__experience"], styles["sticky-col-0"])}>
                                                            <div className={styles["control__project"]}>
                                                                <HiOutlineDotsHorizontal />
                                                                <ul className={styles["list__contacts"]}>
                                                                    <Link href="/teams/detail" className={styles["contacts__item"]}>
                                                                        <IoEyeOutline />
                                                                        <span>Xem</span>
                                                                    </Link>
                                                                    <button onClick={() => handleDeleteContractById(contract.id)} className={styles["contacts__item"]}>
                                                                        <TiUserDelete />
                                                                        <span>Xóa</span>
                                                                    </button>
                                                                    <button onClick={() => handleUpdate(contract.id)} className={styles["contacts__item"]}>
                                                                        <MdOutlineTipsAndUpdates />
                                                                        <span>Sửa</span>
                                                                    </button>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                        <td className={classNames(styles["td__experience"], styles["sticky-col-1"])}>
                                                            <div className="">
                                                                <input onClick={() => handleSelectContract(contract)} type="checkbox" name="idContract" id="" />
                                                            </div>
                                                        </td>
                                                        <td className={styles["td__experience"]}>{contract.contract_type}</td>
                                                        <td className={styles["td__experience"]}>{contract.employee.fullname}</td>
                                                        <td className={styles["td__experience"]}>{contract.start_date}</td>
                                                        <td className={styles["td__experience"]}>{contract.end_date}</td>
                                                        <td className={styles["td__experience"]}>{contract.approval_date}</td>
                                                        <td className={styles["td__experience"]}>{contract.contract_num}</td>
                                                        <td className={styles["td__experience"]}>{contract.contract_type}</td>
                                                        <td className={styles["td__experience"]}>{contract.contract_status}</td>
                                                        <td className={styles["td__experience"]}>{contract.description}</td>
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

export default ListContracts;


