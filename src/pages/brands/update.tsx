import { useEffect, useState } from "react";
import styles from "@/styles/profile.module.scss";
import myspace from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import "@/app/globals.css";
import classNames from "classnames";

function CreateBrand() {

    useEffect(() => {
        handleSelect();
        handleSelectImg();
    }, []);

    const handleClose = () => {
        let address = ""
        window.location.href = localStorage.getItem('address') || address;
    }

    const handleSelect = (): void => {
        const content__infor = document.querySelectorAll(`.${styles.input__infor}`);
        content__infor.forEach(element => {
            element.addEventListener('click', () => {
                console.log(element);
                const list__members = element.nextElementSibling;
                const list = list__members as HTMLElement
                if (list !== null) {
                    list.style.display = 'block';
                }
                if (list__members && list__members.classList.contains(myspace["list__member"])) {
                    const member__items = list__members.querySelectorAll(`.${myspace["member__item"]}`);
                    member__items.forEach(item => {
                        item.addEventListener('click', () => {
                            var option = item as HTMLElement
                            option.textContent;
                            const valueInput = element as HTMLInputElement;
                            valueInput.value = option.textContent || "";
                            list.style.display = 'none';
                        });
                    })
                }
            });
        });
    }

    const handleSelectImg = (): void => {
        const chooseImg = document.querySelector(`.${styles["input__infor-img"]}`);
        const inputFile = document.querySelector('input[type="file"]');
        chooseImg?.addEventListener('click', () => {
            const file = inputFile as HTMLInputElement;
            file.click();
        })
    }

    return (
        <div>
            <div className={classNames(styles["header__information-user"], styles["header__information__user-update"])}>
                <div className={styles["z_raty"]}>
                    <div className={styles["infor__user"]}>
                        <div className={styles["role__user"]} style={{ fontSize: '1.8rem' }}>Chỉnh Sửa Chi Nhánh Làm Việc</div>
                    </div>
                </div>
            </div>

            <div className={styles["container_profile"]}>
                <div className={grid["grid"]}>
                    <div className={grid["grid__row"]}>
                        <div className={grid["grid__column-12"]}>
                            <div className={styles["content_user"]}>
                                <div className={styles["introduce"]}>
                                    <h3 className={styles["title__introduce"]}>Thông Tin Cấu Hình Chi Nhánh</h3>
                                    <div className={styles["infor__project"]}>
                                        <div className={styles["infor__item"]}>
                                            <div className={styles["title__infor"]}>*Hình ảnh</div>
                                            <div className={styles["input__infor-img"]} style={{
                                                backgroundImage: 'url("/images/space.jpg")'
                                            }}>
                                            </div>
                                            <input style={{ display: 'none' }} type="file" className={styles["input__infor"]} required placeholder="Chọn hình ảnh" />
                                        </div>
                                        <div className={styles["infor__item"]}>
                                            <div className={styles["title__infor"]}>*Tên Chi Nhánh</div>
                                            <input className={styles["input__infor"]} required placeholder="Nhập tên chi nhánh" />
                                        </div>
                                        <div className={styles["infor__item"]}>
                                            <div className={styles["title__infor"]}>*Địa Chỉ</div>
                                            <input className={styles["input__infor"]} required placeholder="Nhập địa chỉ" />
                                        </div>
                                        <div className={styles["infor__item"]}>
                                            <div className={styles["title__infor"]}>*Hotline</div>
                                            <input className={styles["input__infor"]} required placeholder="Nhập số điện thoại" />
                                        </div>
                                        <div className={classNames(styles["infor__item"])}>
                                            <div className={styles["title__infor"]}>*Người Quản Lý</div>
                                            <div className={styles["groups__choose"]}>
                                                <input readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} placeholder="Chọn người quản lý" />
                                                <div className={classNames(myspace["list__member"], styles["choose"])} >
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

export default CreateBrand;