import styles from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoMdSearch } from "react-icons/io";
import {
    faArrowUp,
    faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import UserCreate from "@/pages/user/create";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { TiUserDelete } from "react-icons/ti";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import Link from "next/link";
import ProfileUser from "@/pages/user/profile";
import axios from "axios";

function ListEmployee() {
    const [address, setAddress] = useState<string>('');
    const [employees, setEmployees] = useState<any[]>([]);
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

    const handleUpdate = () => {
        saveAddress(window.location.href);
        window.location.href = "/user/update";
    };

    const handleCreate = () => {
        saveAddress(window.location.href);
        window.location.href = "/user/create";
    };

    const handleGetUser = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/employees/list");
            setEmployees(result.data.employees);

        } catch (e) {
            console.log("Something wrong");
        }
    };

    useEffect(() => {
        handleGetUser();
    }, [])

    return (
        <div>
            <div className={styles["control__project"]}>
                <div className={styles["search__member"]}>
                    {/* <select name="name__project" id="" className={styles["select__name-project"]}>
                        Dự án
                        <option value="Quản lý nhân sự" className={styles["item__project"]}>Quản lý nhân sự</option>
                        <option value="Thương mại điện tử" className={styles["item__project"]}>Thương mại điện tử</option>
                    </select> */}
                    <input type="text" placeholder="Tìm kiếm" />
                    <IoMdSearch />
                </div>

                <div className={styles["control"]}>
                    <button className={classNames(grid["btn"], styles["btn__control-project"])}>Xóa</button>
                    <button onClick={handleCreate} className={classNames(grid["btn"], styles["btn__create-project"])}>Thêm</button>
                    {/* <button className={classNames(grid["btn"], styles["btn__control-project"])}> <CiImport /> Nhập</button>
                    <button className={classNames(grid["btn"], styles["btn__control-project"])}> <CiExport /> Xuất</button> */}
                </div>
            </div>
            <div className={styles["introduce"]}>
                <h3 className={styles["title__introduce"]}>Danh sách nhân viên</h3>
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
                                <th className={classNames(styles["th__experience"], styles["sticky-col-2"])}>
                                    <div>
                                        <span>ID Nhân Viên</span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={classNames(styles["th__experience"], styles["sticky-col-3"])}>
                                    <div>
                                        <span>Họ và Tên</span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>

                                <th className={classNames(styles["th__experience"], styles["sticky-col-4"])}>
                                    <div>
                                        <span>Biệt Danh</span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>

                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span>Địa Chỉ</span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Ảnh </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span>Địa Chỉ Email</span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>

                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Ngày Sinh </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Giới Tính </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Số Điện Thoại Cá Nhân </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Tình Trạng Hôn Nhân</span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Tự Giới Thiệu </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Số Điện Thoại </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Số Máy </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Vị trí chỗ ngồi </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Thêm Bởi </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span>Người Điều Chỉnh </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Thời Gian Thêm </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Thời Gian Điều Chỉnh </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Phòng  </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Chỉ Định   </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Loại Công Việc </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Trạng Thái </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Ngày Gia Nhập </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Kinh Nghiệm Hiện Tại </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Tổng Kinh Nghiệm </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Người Quản Lý </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody style={{ minHeight: '10px    ', overflowY: 'scroll' }} id={styles["body__experience"]}>

                            {employees.map((employee, index) =>
                                <tr className={styles["employee__item"]} key={employee.id}>
                                    <td className={classNames(styles["td__experience"], styles["sticky-col-0"])}>
                                        <div className={styles["control__project"]}>
                                            <HiOutlineDotsHorizontal />
                                            <ul className={styles["list__contacts"]}>
                                                <button onClick={handleOpenModal} className={styles["contacts__item"]}>
                                                    <IoEyeOutline />
                                                    <span>Xem</span>
                                                </button>
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
                                        <div>
                                            <input type="checkbox" name="" id="" />
                                        </div>
                                    </td>
                                    <td className={classNames(styles["td__experience"], styles["sticky-col-2"])}>{employee.id}</td>
                                    <td className={classNames(styles["td__experience"], styles["sticky-col-3"])}>{employee.fullname}</td>
                                    <td className={classNames(styles["td__experience"], styles["sticky-col-4"])}>{employee.nickname}</td>
                                    <td className={styles["td__experience"]}>{employee.address}</td>
                                    <td className={styles["td__experience"]} >
                                        <div className={styles["img__teams"]}>
                                            <div className={styles["td__img"]} style={{
                                                backgroundImage: `url("/images/${employee.img}")`
                                            }}>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={styles["td__experience"]}>{employee.email}</td>
                                    <td className={styles["td__experience"]}>{employee.dob}</td>
                                    <td className={styles["td__experience"]}>{employee.sex}</td>
                                    <td className={styles["td__experience"]}>{employee.phone}</td>
                                    <td className={styles["td__experience"]}>{employee.marital_status}</td>
                                    <td className={styles["td__experience"]}>{employee.marital_status}</td>
                                    <td className={styles["td__experience"]}>{employee.phone}</td>
                                    <td className={styles["td__experience"]}>{employee.phone}</td>
                                    <td className={styles["td__experience"]}>{employee.phone}</td>
                                    <td className={styles["td__experience"]}>{employee.phone}</td>
                                    <td className={styles["td__experience"]}>{employee.phone}</td>
                                    <td className={styles["td__experience"]}>{employee.phone}</td>
                                    <td className={styles["td__experience"]}>{employee.phone}</td>
                                    <td className={styles["td__experience"]}>{employee.phone}</td>
                                    <td className={styles["td__experience"]}>{employee.phone}</td>
                                    <td className={styles["td__experience"]}>{employee.type}</td>
                                    <td className={styles["td__experience"]}>{employee.state_work}</td>
                                    <td className={styles["td__experience"]}>{employee.start_date}</td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <ProfileUser />
                <div className={classNames(styles["footer__information-user"], styles["footer__information__user-update"])}>
                    <button style={{
                        marginRight: '5px'
                    }} onClick={handleCloseModal} className={classNames(styles["btn__save"])}>Đóng</button>
                </div>
            </Modal>

        </div>
    );
}

export default ListEmployee;
