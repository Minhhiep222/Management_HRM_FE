
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
import { useState } from "react";
import Image from "next/image";

function ListRoom() {
    const [address, setAddress] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const saveAddress = (address: string) => {
        setAddress(address);
        localStorage.setItem('address', address);
    }

    const handleCreate = () => {
        saveAddress(window.location.href);
        window.location.href = "/rooms/create";
    };

    const handleUpdate = () => {
        saveAddress(window.location.href);
        window.location.href = "/rooms/update";
    };

    return (
        <div>
            <div className={styles["control__project"]}>
                <div className={styles["search__member"]}>
                    <input type="text" placeholder="Tìm kiếm" />
                    <IoMdSearch />
                </div>

                <div className={styles["control"]}>
                    <button className={classNames(grid["btn"], styles["btn__control-project"])}>Nhân viên</button>
                    <button className={classNames(grid["btn"], styles["btn__control-project"])}>Phòng</button>
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
                                        <input type="checkbox" name="" id="" />
                                    </div>
                                </th>
                                <th className={classNames(styles["th__experience"], styles["sticky-col-2"])} style={{
                                    minWidth: '400px'
                                }} >
                                    <div>
                                        <span>ID Phòng</span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span>Tên phòng</span>
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
                                        <span>Trạng thái</span>
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
                                            <Link href="/projects/detail" className={styles["contacts__item"]}>
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
                                <td className={classNames(styles["td__experience"], styles["sticky-col-2"])}>Quản lý nhà hàng</td>
                                <td className={styles["td__experience"]}>Cở sở tổ chức quán lý nhà hàng hiệu quả</td>
                                <td className={styles["td__experience"]} >
                                    <div className={styles["img__teams"]}>
                                        <div className={styles["td__img"]} style={{
                                            backgroundImage: 'url("/images/space.jpg")'
                                        }}>
                                        </div>
                                    </div>
                                </td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>Đang bắt đầu</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div >
        </div>
    );
}

export default ListRoom;
