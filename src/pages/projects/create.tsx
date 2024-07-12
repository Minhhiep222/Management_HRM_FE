import { useEffect } from "react";
import styles from "@/styles/profile.module.scss";
import grid from "@/styles/globals.module.scss";
import "@/app/globals.css";
import classNames from "classnames";

function CreateProJect() {
    const handleClose = () => {
        window.location.href = "/groupspace/project";
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
                                            <input className={styles["input__infor"]} required placeholder="Nhập tên dự án" />
                                        </div>
                                        <div className={styles["infor__item"]}>
                                            <div className={styles["title__infor"]}>*Tên Khách Hàng</div>
                                            <input className={styles["input__infor"]} required placeholder="Nhập tên khách hàng" />
                                        </div>
                                        <div className={styles["infor__item"]}>
                                            <div className={styles["title__infor"]}>*Chi Phí Dự Án</div>
                                            <input className={styles["input__infor"]} required placeholder="Nhập chi phí dự án" />
                                        </div>
                                        <div className={styles["infor__item"]}>
                                            <div className={styles["title__infor"]}>*Trưởng Dự Án</div>
                                            <input className={styles["input__infor"]} required placeholder="Nhập người quản lý dự án" />
                                        </div>
                                        <div className={styles["infor__item"]}>
                                            <div className={styles["title__infor"]}>*Thời Gian Dự Tính</div>
                                            <input className={styles["input__infor"]} required placeholder="Nhập thời gian dự tính" />
                                        </div>
                                        <div className={styles["infor__item"]}>
                                            <div className={styles["title__infor"]}>*Mô Tả</div>
                                            <textarea className={styles["input__infor"]} required placeholder="Nhập mô tả dự án" />
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

export default CreateProJect;