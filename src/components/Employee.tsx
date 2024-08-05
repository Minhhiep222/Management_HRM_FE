import styles from "@/styles/myspace.module.scss";
import classNames from "classnames";
import { memo, useEffect, useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { TiUserDelete } from "react-icons/ti";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
function Employee(props: {
    employee: any;
    onOpenModal: () => void | undefined;
    onCloseModal: () => void | undefined;
    onSelectMember: (e: any) => void | undefined;
    onDelete: (e: any) => void;
    onUpdate: () => void
}) {
    const { employee } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [address, setAddress] = useState<string>('');

    return (
        <>
            <tr className={styles["employee__item"]}>
                <td className={classNames(styles["td__experience"], styles["sticky-col-0"])}>
                    <div className={styles["control__project"]}>
                        <HiOutlineDotsHorizontal />
                        <ul className={styles["list__contacts"]}>
                            <button onClick={props.onOpenModal} className={styles["contacts__item"]}>
                                <IoEyeOutline />
                                <span>Xem</span>
                            </button>
                            <button onClick={e => props.onDelete(employee.id)} className={styles["contacts__item"]}>
                                <TiUserDelete />
                                <span>Xóa</span>
                            </button>
                            <button onClick={props.onUpdate} className={styles["contacts__item"]}>
                                <MdOutlineTipsAndUpdates />
                                <span>Sửa</span>
                            </button>
                        </ul>
                    </div>
                </td>
                <td className={classNames(styles["td__experience"], styles["sticky-col-1"])}>
                    <div>
                        <input onClick={e => props.onSelectMember(employee)} defaultValue={employee} type="checkbox" name="idUser" id="" />
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
                <td className={styles["td__experience"]}>{employee.email_work}</td>
                <td className={styles["td__experience"]}>{employee.dob}</td>
                <td className={styles["td__experience"]}>{employee.sex}</td>
                <td className={styles["td__experience"]}>{employee.phone}</td>
                <td className={styles["td__experience"]}>{employee.phone_work}</td>
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
        </>
    );
}

export default memo(Employee);