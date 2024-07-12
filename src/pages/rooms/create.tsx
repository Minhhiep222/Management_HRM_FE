import { useEffect, useState } from "react";
import styles from "@/styles/profile.module.scss";
import myspace from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import "@/app/globals.css";
import classNames from "classnames";
import Image from "next/image";
import { Input } from "postcss";
import Link from "next/link";
import { IoAddOutline } from "react-icons/io5";
import ModalItem from "@/components/modal/Modal_Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoMdSearch } from "react-icons/io";
import {
    faArrowUp,
    faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
function CreateRoom() {
    const [isModalOpenItem, setIsModalOpenItem] = useState(false);
    const [address, setAddress] = useState<string>('');

    useEffect(() => {
        handleSelect();
        handleSelectImg();
        const choose = document.querySelector(".choose__member");
        console.log(choose)
        choose?.addEventListener('click', () => {
            handleOpenModalItem();
        })
    }, []);

    const handleOpenModalItem = () => {
        setIsModalOpenItem(true);
    };

    const handleCloseModalItem = () => {
        setIsModalOpenItem(false);
    };

    const handleCreateRoom = () => {

    };


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
                                            <input style={{ display: 'none' }} type="file" className={styles["input__infor"]} required placeholder="Chọn hình ảnh" />
                                        </div>
                                        <div className={styles["infor__item"]}>
                                            <div className={styles["title__infor"]}>*Tên Nhóm</div>
                                            <input className={styles["input__infor"]} required placeholder="Nhập tên nhóm" />
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

                                        <div className={classNames(styles["infor__item"])}>

                                            <div className={styles["title__infor"]}>*Thành viên nhóm</div>
                                            <div className={styles["groups__choose"]}>
                                                <input readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"], "choose__member")} placeholder="Chọn thành viên nhóm" />

                                            </div>
                                        </div>
                                        <div className={classNames(styles["infor__item"])}>
                                            <div className={styles["title__infor"]}>*Khu Vực</div>
                                            <div className={styles["groups__choose"]}>
                                                <input readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} placeholder="Chọn khu vực" />
                                                <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                    <div className={myspace["member__item"]} >
                                                        Chi nhánh Thủ Đức
                                                    </div>
                                                    <div className={myspace["member__item"]} >
                                                        Chinh Nhánh Quận 1
                                                    </div>
                                                    <div className={myspace["action__btn"]}>
                                                        <button className={grid["btn"]}>
                                                            <IoAddOutline />
                                                            Thêm khu vực
                                                        </button>
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
            <ModalItem isOpen={isModalOpenItem} onClose={handleCloseModalItem}>
                <div>
                    <div className={myspace["introduce"]}>
                        <h3 className={myspace["title__introduce"]}>Thêm thành viên nhóm</h3>
                        <div className={myspace["search__member"]}>
                            <input type="text" placeholder="Tìm kiếm" />
                            <IoMdSearch />
                        </div>
                        <div className={classNames(myspace["infor__employee"], myspace["scroll-infor"])}>
                            <table className={myspace["table__experience"]}>
                                <thead className={myspace["head__experience"]}>
                                    <tr className={myspace["tr__experience"]}>
                                        <th className={classNames(myspace["th__experience-checkbox"], myspace["sticky-col-0"])}>
                                            <div>
                                                <input type="checkbox" name="" id="" />
                                            </div>
                                        </th>
                                        <th className={classNames(myspace["th__experience"], myspace["sticky-col-1"])}>
                                            <div>
                                                <span>Tên</span>
                                                <span>
                                                    <FontAwesomeIcon className={classNames(myspace["icon__arrow"], myspace["active"])} icon={faArrowUp} />
                                                    <FontAwesomeIcon className={classNames(myspace["icon__arrow"])} icon={faArrowDown} />
                                                </span>
                                            </div>
                                        </th>
                                        <th className={myspace["th__experience"]}>
                                            <div>
                                                <span>Địa Chỉ Email</span>
                                                <span>
                                                    <FontAwesomeIcon className={classNames(myspace["icon__arrow"], myspace["active"])} icon={faArrowUp} />
                                                    <FontAwesomeIcon className={classNames(myspace["icon__arrow"])} icon={faArrowDown} />
                                                </span>
                                            </div>
                                        </th>
                                        <th className={myspace["th__experience"]}>
                                            <div>
                                                <span> Ảnh </span>
                                                <span>
                                                    <FontAwesomeIcon className={classNames(myspace["icon__arrow"], myspace["active"])} icon={faArrowUp} />
                                                    <FontAwesomeIcon className={classNames(myspace["icon__arrow"])} icon={faArrowDown} />
                                                </span>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody id={myspace["body__experience"]}>
                                    <tr className={myspace["employee__item"]}>
                                        <td className={classNames(myspace["td__experience"], myspace["sticky-col-0"])}>
                                            <div>
                                                <input type="checkbox" name="" id="" />
                                            </div>
                                        </td>
                                        <td className={classNames(myspace["td__experience"], myspace["sticky-col-1"])}>Assistant Manager</td>
                                        <td className={classNames(myspace["td__experience"], myspace["sticky-col-2"])}>30-Apr-1998</td>
                                        <td className={styles["td__experience"]} >
                                            <div className={myspace["img__teams"]}>
                                                <div className={myspace["td__img"]} style={{
                                                    backgroundImage: 'url("/images/space.jpg")'
                                                }}>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </ModalItem>
        </div>

    );
}

export default CreateRoom;