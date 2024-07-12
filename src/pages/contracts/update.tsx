import { useEffect } from "react";
import styles from "@/styles/profile.module.scss";
import myspace from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import "@/app/globals.css";
import classNames from "classnames";
import Image from "next/image";
import { Input } from "postcss";
import Link from "next/link";
function UpdateRoom() {

    useEffect(() => {
        handleSelect();
        handleSelectImg();
    }, []);

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

    const handleClose = () => {
        let address = ""
        window.location.href = localStorage.getItem('address') || address;
    }


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
                                            <input className={styles["input__infor"]} required defaultValue="Management" placeholder="Nhập tên nhóm" />
                                        </div>
                                        <div className={classNames(styles["infor__item"])}>

                                            <div className={styles["title__infor"]}>*Người Quản Lý</div>
                                            <div className={styles["groups__choose"]}>
                                                <input readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} defaultValue="Nguyễn Minh Hiệp" placeholder="Chọn người quản lý" />
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

                                        <div className={classNames(styles["infor__item"])}>

                                            <div className={styles["title__infor"]}>*Thành viên nhóm</div>
                                            <div className={styles["groups__choose"]}>
                                                <input readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} defaultValue="Nguyễn Minh Hiệp, Nguyễn Thành Đạt" />
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

                                        <div className={classNames(styles["infor__item"])}>
                                            <div className={styles["title__infor"]}>*Khu Vực</div>
                                            <div className={styles["groups__choose"]}>
                                                <input readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} defaultValue="Chi nhánh Thủ Đức" placeholder="Chọn khu vực" />
                                                <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                    <div className={myspace["member__item"]} >
                                                        <div className={myspace["img__member"]} style={{
                                                            backgroundImage: `url('/images/space.jpg')`
                                                        }}>
                                                        </div>
                                                        <div className={myspace["member__infor"]}>
                                                            <div className={myspace["main__infor"]}>
                                                                <div className={myspace["name__member"]}>
                                                                    Chi nhánh Thủ Đức
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
                                                                    Chinh Nhánh Quận 1
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

export default UpdateRoom;