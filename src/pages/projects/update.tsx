import { useEffect } from "react";
import styles from "@/styles/profile.module.scss";
import grid from "@/styles/globals.module.scss";
import "@/app/globals.css";
import { IoCloseSharp } from "react-icons/io5";
import { TiPencil } from "react-icons/ti";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from "classnames";
import {
    faSearch,
    faHospital,
    faCirclePlus,
    faArrowUp,
    faArrowDown,
    faChair,
    faComputer,
    faClock,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";

function UpdateProJect() {

    const handleClose = () => {
        let address = ""
        window.location.href = localStorage.getItem('address') || address;
    }

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
                            <div className={styles["content_user"]}>
                                <div className={styles["introduce"]}>
                                    <h3 className={styles["title__introduce"]}>Thông Tin Cấu Hình Dự Án</h3>
                                    <div className={styles["infor__project"]}>
                                        <div className={styles["infor__item"]}>
                                            <div className={styles["title__infor"]}>*Tên dự án</div>
                                            <input className={styles["input__infor"]} defaultValue="Quản lý dự án" />
                                        </div>
                                        <div className={styles["infor__item"]}>
                                            <div className={styles["title__infor"]}>*Tên Khách Hàng</div>
                                            <input className={styles["input__infor"]} defaultValue="Nguyễn Minh Hiệp" />
                                        </div>
                                        <div className={styles["infor__item"]}>
                                            <div className={styles["title__infor"]}>*CHi Phí Dự Án</div>
                                            <input className={styles["input__infor"]} defaultValue="888$" />
                                        </div>
                                        <div className={styles["infor__item"]}>
                                            <div className={styles["title__infor"]}>*Trưởng Dự Án</div>
                                            <input className={styles["input__infor"]} defaultValue="Nguyễn Minh Hiệp" />
                                        </div>
                                        <div className={styles["infor__item"]}>
                                            <div className={styles["title__infor"]}>*Thời Gian Dự Tính</div>
                                            <input className={styles["input__infor"]} defaultValue="7000 giờ" />
                                        </div>
                                        <div className={styles["infor__item"]}>
                                            <div className={styles["title__infor"]}>*Mô Tả</div>
                                            <textarea className={styles["input__infor"]} defaultValue="Dự án được tạo ra để quản lý hiệu quả các dự án" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={classNames(styles["footer__information-user"], styles["footer__information__user-update"])}>
                <button onClick={handleClose} className={classNames(styles["btn__save"])}>Đóng</button>
                <button className={classNames(styles["btn__save"])}>Lưu</button>
            </div>
        </div>

    );
}

export default UpdateProJect;