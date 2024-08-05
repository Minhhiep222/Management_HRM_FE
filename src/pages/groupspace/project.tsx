
import styles from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUp,
    faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { CiImport } from "react-icons/ci";
import { CiExport } from "react-icons/ci";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { TiUserDelete } from "react-icons/ti";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import ProejectCreate from "@/pages/projects/create";
import Link from "next/link";
import Header from "@/components/header/header";
import SideBar from "@/components/side-bar/side-bar";
import HeaderGroupSpace from "@/components/header/header__groupspace";
import SideBarGroupSpace from "@/components/side-bar/side-bar__group";
import NavBarGroupSpace from "@/components/navbar/navbar_groupspace";
function Project() {


    const [address, setAddress] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const saveAddress = (address: string) => {
        setAddress(address);
        localStorage.setItem('address', address);
    }

    const handleCreate = () => {
        saveAddress(window.location.href);
        window.location.href = "/projects/create";
    };

    const handleUpdate = () => {
        saveAddress(window.location.href);
        window.location.href = "/projects/update";
    };
    return (
        <main>
            <Header />
            <div className={styles["session"]}>
                <div className={grid["grid"]}>
                    <div className={grid["grid__row"]}>
                        <div className={grid["grid__column-2__sidebar"]}>
                            <SideBar />
                        </div>
                        <div className={grid["grid__column-10"]}>
                            {<HeaderGroupSpace />}
                            <div className={styles["container__my-space"]}>
                                <div>
                                    <div className={styles["control__project"]}>
                                        <div className={styles["list__select"]}>
                                            <select name="name__project" id="" className={styles["select__name-project"]}>
                                                Dự án
                                                <option value="Quản lý nhân sự" className={styles["item__project"]}>Quản lý nhân sự</option>
                                                <option value="Thương mại điện tử" className={styles["item__project"]}>Thương mại điện tử</option>
                                            </select>
                                        </div>

                                        <div className={styles["control"]}>
                                            <button className={classNames(grid["btn"], styles["btn__control-project"])}>Nhân viên</button>
                                            <button className={classNames(grid["btn"], styles["btn__control-project"])}>Phòng</button>
                                            <button onClick={handleCreate} className={classNames(grid["btn"], styles["btn__create-project"])}>Thêm sự án</button>
                                            <button className={classNames(grid["btn"], styles["btn__control-project"])}> <CiImport /> Nhập</button>
                                            <button className={classNames(grid["btn"], styles["btn__control-project"])}> <CiExport /> Xuất</button>
                                        </div>
                                    </div>
                                    <div className={styles["introduce"]}>
                                        <h3 className={styles["title__introduce"]}>Quản lý dự án</h3>
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
                                                                <span>Tên dự án</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Mô tả</span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Ngày bắt đầu</span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Ngày kết thúc</span>
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
                                                    <tr id={styles[""]}>
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
                                                        <td className={styles["td__experience"]}>30-Apr-1998</td>
                                                        <td className={styles["td__experience"]}>01-Jan-2004</td>
                                                        <td className={styles["td__experience"]}>Đang bắt đầu</td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div >
                                    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                                        <ProejectCreate />
                                        <div className={classNames(styles["footer__information-user"], styles["footer__information__user-update"])}>
                                            <button style={{
                                                marginRight: '5px'
                                            }} onClick={handleCloseModal} className={classNames(styles["btn__save"])}>Đóng</button>
                                            <button className={classNames(styles["btn__save"])}>Lưu</button>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>


    );
}

export default Project;
