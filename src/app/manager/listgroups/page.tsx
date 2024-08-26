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

function ListGroup() {
    const { isModalOpen, handleOpenModal, handleCloseModal } = useModals();
    const { address, saveAddress } = useAddress();
    const [teams, setTeams] = useState<any[]>([]);
    const idAllUserRef = useRef<HTMLInputElement | null>(null);
    const [selectTeam, setSelectTeam] = useState<any[]>([]);

    const handleGetTeams = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/teams/list");
            setTeams(result.data.teams);
            console.log(result.data.teams);
        } catch (e) {
            console.log("Something wrong !");
        }
    }

    const handleUpdate = (id: any) => {
        saveAddress(window.location.href);
        window.location.href = `/teams/update/${id}`;
    };

    const handleCreateTeam = () => {
        window.location.href = "/teams/create";
    }

    const handleCheckedAll = () => {
        const checkeds = document.querySelectorAll("input[name='idTeam']") as NodeListOf<HTMLInputElement>;
        checkeds.forEach((element, index) => {
            if (idAllUserRef.current?.checked === false) {
                element.checked = false
                setSelectTeam([]);
            }
            else {
                element.checked = true;
                setSelectTeam(teams)
            }
        });
    }

    const handleSelectTeam = (e: any): void => {
        setSelectTeam(prevTeams => {
            const isTeamSelected = prevTeams.some(Team => Team.id === e.id);
            if (isTeamSelected) {
                return prevTeams.filter(Team => Team.id !== e.id);
            } else {
                return [...prevTeams, e];
            }
        });
    }

    const handleDeleteTeams = async () => {
        try {
            var arrayId: any = [];
            if (selectTeam) {
                selectTeam.map((Team, index) =>
                    arrayId[index] = Team.id
                )
            }

            const result = await axios.patch("http://127.0.0.1:8000/api/teams/deleteAll", arrayId);

            if (result.status == 200) {
                console.log("xóa thành công");
                handleGetTeams();
                const checkeds = document.querySelectorAll("input[name='idTeam']") as NodeListOf<HTMLInputElement>;
                checkeds.forEach(checked => checked.checked = false);
            }

        } catch (e) {
            console.log("something wrong")
        }
    }

    const handleDeleteTeamById = async (id: any) => {
        const confim = window.confirm("Bạn có muốn xóa nhóm này không");
        if (confim)
            try {
                const result = await axios.delete("http://127.0.0.1:8000/api/teams/" + id);
                if (result.status == 200) {
                    console.log("xóa thành công");
                    handleGetTeams();
                }
            } catch (e) {
                console.log("something wrong")
            }
    }

    useEffect(() => {
        handleGetTeams();
        // handleGetEmployee();
        // console.log(result.data.teams);
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
                                        <button onClick={handleDeleteTeams} className={classNames(grid["btn"], styles["btn__control-project"])}>Xóa</button>
                                        <button onClick={handleCreateTeam} className={classNames(grid["btn"], styles["btn__create-project"])}>Thêm nhóm</button>
                                    </div>
                                </div>
                                <div className={styles["introduce"]}>
                                    <h3 className={styles["title__introduce"]}>Danh sách nhóm</h3>
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
                                                            <span>Tên nhóm</span>
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
                                                            <span>Người quản lý</span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Thành viên </span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Phòng</span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Khu vực</span>
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

                                                {teams.map((team, index) =>
                                                    <tr className={styles["employee__item"]} key={index}>
                                                        <td className={classNames(styles["td__experience"], styles["sticky-col-0"])}>
                                                            <div className={styles["control__project"]}>
                                                                <HiOutlineDotsHorizontal />
                                                                <ul className={styles["list__contacts"]}>
                                                                    <Link href="/teams/detail" className={styles["contacts__item"]}>
                                                                        <IoEyeOutline />
                                                                        <span>Xem</span>
                                                                    </Link>
                                                                    <button onClick={() => handleDeleteTeamById(team.id)} className={styles["contacts__item"]}>
                                                                        <TiUserDelete />
                                                                        <span>Xóa</span>
                                                                    </button>
                                                                    <button onClick={() => handleUpdate(team.id)} className={styles["contacts__item"]}>
                                                                        <MdOutlineTipsAndUpdates />
                                                                        <span>Sửa</span>
                                                                    </button>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                        <td className={classNames(styles["td__experience"], styles["sticky-col-1"])}>
                                                            <div className="">
                                                                <input onClick={() => handleSelectTeam(team)} type="checkbox" name="idTeam" id="" />
                                                            </div>
                                                        </td>
                                                        <td className={classNames(styles["td__experience"], styles["sticky-col-2"])}>{team.name}</td>
                                                        <td className={styles["td__experience"]} >
                                                            <div className={styles["img__teams"]}>
                                                                <div className={styles["td__img"]} style={{
                                                                    backgroundImage: `url("/images/${team.img}")`
                                                                }}>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className={styles["td__experience"]}>{team.manager.fullname}</td>
                                                        <td className={classNames(styles["td__experience"])}>
                                                            {team.members.map((mem: any, index: any) =>
                                                                <div key={index} className={styles["members"]}>
                                                                    {mem.fullname}
                                                                </div>
                                                            )}
                                                        </td>
                                                        <td className={styles["td__experience"]}>{team.room.department_name}</td>
                                                        <td className={styles["td__experience"]}>{team.brand.brand_address}</td>
                                                        <td className={styles["td__experience"]}>{team.description}</td>
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

export default ListGroup;


