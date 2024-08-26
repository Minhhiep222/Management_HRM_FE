"use client";

import { useEffect } from "react";
import styles from "@/styles/profile.module.scss";
import myspace from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import "@/app/globals.css";
import classNames from "classnames";
import Image from "next/image";
import { Input } from "postcss";
import Link from "next/link";
function DetailContract() {

    useEffect(() => {
        const chooseImg = document.querySelector(`.${styles["input__infor-img"]}`);
        const inputFile = document.querySelector('input[type="file"]');
        const inputGroup = document.querySelectorAll<HTMLInputElement>('input.choosen__item-infor');
        const listMember = document.querySelectorAll(`.${styles["choose"]}`);
        const itemMember = document.querySelectorAll(`.${styles["member__item"]}`);
        const choose = document.querySelectorAll(`.${styles["choose"]}`)
        chooseImg?.addEventListener('click', () => {
            const file = inputFile as HTMLInputElement;
            file.click();
        })

        console.log(inputGroup);
        // inputGroup.forEach((element, index) => {
        //     const item = element as HTMLInputElement;
        //     item.addEventListener('click', () => {
        //         const list = listMember[index] as HTMLElement;
        //         list.style.display = `block`;
        //         console.log("wqew")
        //     })
        // })
    }, []);





    return (
        <div>
            <div className={classNames(styles["header__information-user"], styles["header__information__user-update"])}>
                <div className={styles["z_raty"]}>
                    <div className={styles["infor__user"]}>
                        <div className={styles["role__user"]} style={{ fontSize: '1.8rem' }}>Thêm Nhóm Làm Việc</div>
                    </div>
                </div>
            </div>

            <div className={styles["container_profile"]}>
                <div className={grid["grid"]}>
                    <div className={grid["grid__row"]}>
                        <div className={grid["grid__column-12"]}>
                            <div className={styles["content_user"]}>
                                <div className={styles["introduce"]}>
                                    <h3 className={styles["title__introduce"]}>Thông Tin Cấu Hình Nhóm</h3>
                                    <div className={styles["infor__project"]}>
                                        <div className={styles["infor__item"]}>
                                            <div className={styles["title__infor"]}>*Hình ảnh</div>
                                            <div className={styles["input__infor-img"]} style={{
                                                backgroundImage: 'url("/images/space.jpg")'
                                            }}>
                                            </div>
                                            <input style={{ display: 'none' }} type="file" className={styles["input__infor"]} required />
                                        </div>
                                        <div className={styles["infor__item"]}>
                                            <div className={styles["title__infor"]}>*Tên Nhóm</div>
                                            <input className={styles["input__infor"]} readOnly required defaultValue="Management" placeholder="Nhập tên nhóm" />
                                        </div>
                                        <div className={classNames(styles["infor__item"])}>

                                            <div className={styles["title__infor"]}>*Người Quản Lý</div>
                                            <div className={styles["groups__choose"]}>
                                                <div className={classNames(myspace["list__member"])} >
                                                    <div className={myspace["member__item"]} >
                                                        <div className={myspace["img__member"]} style={{
                                                            backgroundImage: `url('/images/space.jpg')`
                                                        }}>
                                                        </div>
                                                        <div className={myspace["member__infor"]}>
                                                            <div className={myspace["main__infor"]}>
                                                                <div className={myspace["name__member"]}>
                                                                    Nguyễn Minh Hiệp
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={classNames(styles["infor__item"])}>
                                            <div className={styles["title__infor"]}>*Thành viên nhóm</div>
                                            <div className={styles["groups__choose"]}>
                                                <div className={classNames(myspace["list__member"])} >
                                                    <div className={myspace["member__item"]} >
                                                        <div className={myspace["img__member"]} style={{
                                                            backgroundImage: `url('/images/space.jpg')`
                                                        }}>
                                                        </div>
                                                        <div className={myspace["member__infor"]}>
                                                            <div className={myspace["main__infor"]}>
                                                                <div className={myspace["name__member"]}>
                                                                    Nguyễn Minh Hiệp
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={myspace["member__item"]} >
                                                        <div className={myspace["img__member"]} style={{
                                                            backgroundImage: `url('/images/space.jpg')`
                                                        }}>
                                                        </div>
                                                        <div className={myspace["member__infor"]}>
                                                            <div className={myspace["main__infor"]}>
                                                                <div className={myspace["name__member"]}>
                                                                    Trần Đức Toản
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={myspace["member__item"]} >
                                                        <div className={myspace["img__member"]} style={{
                                                            backgroundImage: `url('/images/space.jpg')`
                                                        }}>
                                                        </div>
                                                        <div className={myspace["member__infor"]}>
                                                            <div className={myspace["main__infor"]}>
                                                                <div className={myspace["name__member"]}>
                                                                    Nguyễn Văn Huy
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={classNames(styles["infor__item"])}>
                                            <div className={styles["title__infor"]}>*Phòng</div>
                                            <div className={styles["groups__choose"]}>
                                                <input readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} defaultValue="Management" placeholder="Chọn phòng" />
                                            </div>
                                        </div>
                                        <div className={classNames(styles["infor__item"])}>
                                            <div className={styles["title__infor"]}>*Khu Vực</div>
                                            <div className={styles["groups__choose"]}>
                                                <input readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} defaultValue="Chi nhánh Thủ Đức" placeholder="Chọn khu vực" />
                                            </div>
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
                <button className={classNames(styles["btn__save"])}>Đóng</button>
            </div>
        </div>

    );
}

export default DetailContract;