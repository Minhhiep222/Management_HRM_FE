
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
import { useEffect, useState } from "react";
import axios from "axios";

function ListGroup() {
    const [address, setAddress] = useState<string>('');
    const [teams, setTeams] = useState<any[]>([]);


    const handleGetTeams = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/employees");
            setTeams(result.data.result);
            console.log(teams);
        } catch (e) {
            console.log("Something wrong !");
        }
    }

    const saveAddress = (address: string) => {
        setAddress(address);
        localStorage.setItem('address', address);

    }

    const handleUpdate = () => {
        saveAddress(window.location.href);
        window.location.href = "/teams/update";
    };

    const handleCreateTeam = () => {
        window.location.href = "/teams/create";
    }


    useEffect(() => {
        handleGetTeams();
    });

    return (
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
                                        <input type="checkbox" name="" id="" />
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
                            <tr className={styles["employee__item"]}>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-0"])}>
                                    <div className={styles["control__project"]}>
                                        <HiOutlineDotsHorizontal />
                                        <ul className={styles["list__contacts"]}>
                                            <Link href="/teams/detail" className={styles["contacts__item"]}>
                                                <IoEyeOutline />
                                                <span>Xem</span>
                                            </Link>
                                            <li className={styles["contacts__item"]}>
                                                <TiUserDelete />
                                                <span>Xóa</span>
                                            </li>
                                            <button onClick={handleUpdate} className={styles["contacts__item"]}>
                                                <MdOutlineTipsAndUpdates />
                                                <span>Sửa</span>
                                            </button>
                                        </ul>
                                    </div>
                                </td>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-1"])}>
                                    <div className="">
                                        <input type="checkbox" name="" id="" />
                                    </div>
                                </td>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-2"])}>Management</td>
                                <td className={styles["td__experience"]} >
                                    <div className={styles["img__teams"]}>
                                        <div className={styles["td__img"]} style={{
                                            backgroundImage: 'url("/images/space.jpg")'
                                        }}>
                                        </div>
                                    </div>
                                </td>
                                <td className={styles["td__experience"]}>Nguyễn Minh Hiệp</td>
                                <td className={styles["td__experience"]}>Nguyễn Minh Minh, Trần Minh Tuấn</td>
                                <td className={styles["td__experience"]}>Nhân sự</td>
                                <td className={styles["td__experience"]}>Thủ Đức</td>
                                <td className={styles["td__experience"]}>Một cây làm chẳng nên non</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div >
        </div>
    );
}

export default ListGroup;
