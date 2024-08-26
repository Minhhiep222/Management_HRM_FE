"use client";

import { MouseEvent, use, useCallback, useEffect, useRef, useState } from "react";
import styles from "@/styles/profile.module.scss";
import myspace from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import "@/app/globals.css";
import classNames from "classnames";
import { IoAddOutline } from "react-icons/io5";
import ModalItem from "@/components/modal/Modal_Item";
import useSelectImage from '@/components/hook/useSelectImage';
import useModals from '@/components/hook/useModal';
import useAddress from '@/components/hook/useAddress';
import { IoMdSearch } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import DataList from "@/pages/api/datalist";
import { count } from "console";

function CreateDepartment() {

    const inputRef = useRef<HTMLInputElement | null>(null);
    const { img, handleSelectImg, handleUpload } = useSelectImage(inputRef);
    const [isModalOpenItem, setIsModalOpenItem] = useState(false);
    const {
        employees, handleGetUser,
        managers, handleGetManager,
        brands, handleGetBrand,
        rooms, handleGetRoom
    } = DataList();
    const formRef = useRef<HTMLFormElement | null>(null);
    const chooseRef = useRef<HTMLInputElement | null>(null);
    const { address, saveAddress } = useAddress();
    const idAllUserRef = useRef<HTMLInputElement | null>(null);
    const memberRef = useRef<HTMLDivElement | null>(null);
    const [selectedRoom, setSelectedRoom] = useState({ id: '' });
    const [selectedManager, setSelectedManager] = useState({ id: '' });
    const [selectedBrand, setSelectedBrand] = useState({ id: '' });
    const [selectMember, setSelectMember] = useState<any[]>([]);
    const [changeValue, setChangeValue] = useState({
        name: '',
        img: '',
        description: '',
        sate: 'đang hoạt động',
    });

    useEffect(() => {
        handleGetManager();
        handleGetRoom();
        handleGetBrand();
        handleGetUser();
        handleSelect();
    }, []);

    const handleSetChangeValue = (e: any) => {
        setChangeValue({
            ...changeValue,
            [e.target.name]: e.target.value
        });
    }

    const handleSetImg = (e: any) => {
        setChangeValue({
            ...changeValue,
            [e.target.name]: e.target.files[0].name
        });
    }

    const handleSubmitDepartment = async (e: any) => {
        e.preventDefault();
        handleUpload();
        const newObj = {
            department_name: changeValue.name,
            managerID: selectedManager.id,
            img: changeValue.img,
            roomID: selectedRoom.id,
            brandID: selectedBrand.id,
            description: changeValue.description,
            sate: changeValue.sate
        }

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/departments", newObj);
            alert(response.data.message);
            if (response.status == 200)
                window.location.href = '/manager/listrooms';
        } catch (e) {
            console.log(e);
        }
    }

    const handleClose = () => {
        window.location.href = "/manager/listrooms";
    }

    const handleSelect = (): void => {
        const content__infor = document.querySelectorAll(`.${styles.input__infor}`);
        content__infor.forEach(element => {
            element.addEventListener('click', () => {
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



    return (
        <div>

            <div className={classNames(styles["header__information-user"], styles["header__information__user-update"])}>
                <div className={styles["z_raty"]}>
                    <div className={styles["infor__user"]}>
                        <div className={styles["role__user"]} style={{ fontSize: '1.8rem' }}>Thêm Phòng Ban </div>
                    </div>
                </div>
            </div>

            <div className={styles["container_profile"]}>
                <div className={grid["grid"]}>
                    <div className={grid["grid__row"]}>
                        <div className={grid["grid__column-12"]}>
                            <form className={styles["content_user"]} method="POST" ref={formRef}    >

                                <div className={styles["introduce"]}>
                                    <h3 className={styles["title__introduce"]}>Thông Tin Cấu Hình Phòng Ban</h3>
                                    <div className={styles["infor__project"]}>
                                        <div className={styles["infor__item"]}>
                                            <div className={styles["title__infor"]}>*Hình ảnh</div>
                                            <div className={styles["infor__item"]}>
                                                <div onClick={handleSelectImg} className={styles["input__infor-img"]} style={{
                                                    backgroundImage: `url("${img}")`
                                                }}>
                                                </div>
                                                <input ref={inputRef} onChange={handleSetImg} name="img" style={{ display: 'none' }} type="file" className={styles["input__infor"]} required placeholder="Chọn hình ảnh" accept="image/*" />
                                            </div>
                                        </div>

                                        <div className={styles["infor__item"]}>
                                            <div className={styles["title__infor"]}>*Tên Phòng Ban</div>
                                            <input onChange={handleSetChangeValue} name="name" className={styles["input__infor"]} required placeholder="Nhập tên Phòng Ban" />
                                        </div>

                                        <div className={classNames(styles["infor__item"])}>
                                            <div className={styles["title__infor"]}>*Người Quản Lý</div>
                                            <div className={styles["groups__choose"]}>
                                                <input name="managerID" readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} placeholder="Chọn người quản lý" />
                                                <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                    {managers.map((manager: any) =>
                                                        manager.members.map((member: any) =>
                                                            <div onClick={() => setSelectedManager(member)} className={myspace["member__item"]} key={member.id}>
                                                                <div className={myspace["img__member"]} style={{
                                                                    backgroundImage: `url('/images/${member.img}')`
                                                                }}>
                                                                </div>
                                                                <div className={myspace["member__infor"]}>
                                                                    <div className={myspace["main__infor"]}>
                                                                        <div className={myspace["name__member"]}>
                                                                            {member.fullname}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                    <div className={myspace["action__btn"]}>
                                                        <button className={grid["btn"]}>
                                                            <IoAddOutline />
                                                            Thêm người quản lý
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className={classNames(styles["infor__item"])}>
                                            <div className={styles["title__infor"]}>*Khu Vực</div>
                                            <div className={styles["groups__choose"]}>
                                                <input onClick={handleSetChangeValue} name="brandID" readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} placeholder="Chọn khu vực" />
                                                <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                    {brands.map((brand, index) =>
                                                        <div key={index} onClick={e => setSelectedBrand(brand)} className={myspace["member__item"]} >
                                                            {brand.brand_address}
                                                        </div>
                                                    )}
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
                                            <textarea onChange={handleSetChangeValue} name="description" className={styles["input__infor"]} required placeholder="Nhập mô tả dự án" />
                                        </div>
                                    </div>
                                </div>

                                <div className={classNames(styles["footer__information-user"], styles["footer__information__user-update"])}>
                                    <button onClick={handleClose} className={classNames(styles["btn__save"])}>Đóng</button>
                                    <button type="submit" onClick={e => handleSubmitDepartment(e)} className={classNames(styles["btn__save"])}>Lưu</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div >

    );
}

export default CreateDepartment;