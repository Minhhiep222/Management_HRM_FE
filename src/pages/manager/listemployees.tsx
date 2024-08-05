import styles from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoMdSearch } from "react-icons/io";
import {
    faArrowUp,
    faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import Modal from "@/components/Modal";
import ProfileUser from "@/pages/user/profile";
import axios from "axios";
import Employee from "@/components/Employee";
import useModals from '@/components/hook/useModal';
import useAddress from '@/components/hook/useAddress';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import Header from "@/components/header/header";
import SideBar from "@/components/side-bar/side-bar";
import HeaderManager from "@/components/header/header__manager";
function ListEmployee() {
    const [employees, setEmployees] = useState<any[]>([]);
    const { isModalOpen, handleOpenModal, handleCloseModal } = useModals();
    const { address, saveAddress } = useAddress();
    const idAllUserRef = useRef<HTMLInputElement | null>(null);
    const [selectMember, setSelectMember] = useState<any[]>([]);
    //create user
    const handleCreate = (id: any) => {
        saveAddress(window.location.href);
        window.location.href = "/user/create";
    };

    //update
    const handleUpdate = useCallback(() => {
        saveAddress(window.location.href);
        window.location.href = "/user/update";
    }, []);

    //get user
    const handleGetUser = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/employees/list");
            setEmployees(result.data.employees);
        } catch (e) {
            console.log("Something wrong");
        }
    };

    const handleCheckedAll = () => {
        const checkeds = document.querySelectorAll("input[name='idUser']") as NodeListOf<HTMLInputElement>;
        checkeds.forEach((element, index) => {
            if (idAllUserRef.current?.checked === false) {
                element.checked = false
                setSelectMember([]);
            }
            else {
                element.checked = true;
                setSelectMember(employees)
            }
        });
    }

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

    const handleDeleteMembers = async () => {
        try {
            var arrayId: any = [];
            if (selectMember) {
                selectMember.map((member, index) =>
                    arrayId[index] = member.id
                )
            }

            const result = await axios.patch("http://127.0.0.1:8000/api/employees/deleteAll", arrayId);

            if (result.status == 200) {
                console.log("xóa thành công");
                handleGetUser();
                const checkeds = document.querySelectorAll("input[name='idUser']") as NodeListOf<HTMLInputElement>;
                checkeds.forEach(checked => checked.checked = false);
            }

        } catch (e) {
            console.log("something wrong")
        }
    }


    const handleDeleteMemberById = async (id: any) => {
        const confim = window.confirm("Bạn có muốn xóa nhân viên này không");
        if (confim)
            try {
                const result = await axios.delete("http://127.0.0.1:8000/api/employees/" + id);
                if (result.status == 200) {
                    console.log("xóa thành công");
                    handleGetUser();
                }
            } catch (e) {
                console.log("something wrong")
            }
    }

    useEffect(() => {
        handleGetUser();
    }, [])


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
                            <div className={grid["grid__column-12"]}>
                                {<HeaderManager />}
                            </div>
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
                                                            <button onClick={handleDeleteMembers} className={classNames(grid["btn"], styles["btn__control-project"])}>Xóa</button>
                                                            <button onClick={handleCreate} className={classNames(grid["btn"], styles["btn__create-project"])}>Thêm</button>
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
                                                                                <input onClick={handleCheckedAll} ref={idAllUserRef} type="checkbox" name="" id="" />
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
                                                                                <span>Địa Chỉ Email Cá Nhân</span>
                                                                                <span>
                                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                                </span>
                                                                            </div>
                                                                        </th>

                                                                        <th className={styles["th__experience"]}>
                                                                            <div>
                                                                                <span>Địa Chỉ Email Công Việc</span>
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
                                                                                <span> Số Điện Thoại Công Việc </span>
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
                                                                        /*Employee*/
                                                                        <Employee key={index}
                                                                            employee={employee}
                                                                            onSelectMember={handleSelectMember}
                                                                            onOpenModal={handleOpenModal}
                                                                            onCloseModal={handleCloseModal}
                                                                            onDelete={handleDeleteMemberById}
                                                                            onUpdate={() => window.location.href = `/user/update/${employee.id}`}
                                                                        // onUpdate={handleCreate}
                                                                        />
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>


    );
}

export default memo(ListEmployee);

