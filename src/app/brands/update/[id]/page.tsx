"use client";

import { useEffect, useRef, useState } from "react";
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
import DataList from "@/pages/api/datalist";
import useAddress from '@/components/hook/useAddress';
import useSelectImage from '@/components/hook/useSelectImage';
import axios from "axios";
import { useParams } from "next/navigation";

function UpdateBrand() {
    const param = useParams();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const { img, setImg, handleSelectImg, handleUpload } = useSelectImage(inputRef);
    const [isModalOpenItem, setIsModalOpenItem] = useState(false);
    const {
        managers, handleGetManager,
        brands, handleGetBrand,
    } = DataList();
    const formRef = useRef<HTMLFormElement | null>(null);
    const chooseRef = useRef<HTMLInputElement | null>(null);
    const { address, saveAddress } = useAddress();
    const idAllUserRef = useRef<HTMLInputElement | null>(null);
    const [selectedManager, setSelectedManager] = useState({ id: '', fullname: '' });
    const [brandField, setBrandField] = useState({
        id: '',
        brand_name: '',
        img: '',
        description: '',
        state: 'đang hoạt động',
        phone: '',
        bank_account_number: '',
        bank_name: '',
        brand_address: '',
    });

    useEffect(() => {
        handleSelect();
        handleSelectImg();
        handleGetBrand();
        handleGetManager();
        if (param)
            handleGetBrandByID(param.id)
    }, []);

    //method lấy brand bằng id
    const handleGetBrandByID = async (id: any) => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/brands/" + id);
            setImg(`/images/${result.data.brand.img}`)
            setSelectedManager(result.data.brand.manager);
            setBrandField(result.data.brand);
        } catch (e) {
            console.log("Something wrong !");
        }
    }


    const handleOpenModalItem = () => {
        setIsModalOpenItem(true);
    };

    const handleClose = () => {
        window.location.href = "manager/listbrands";
    }


    const handleSetImg = (e: any) => {
        setBrandField({
            ...brandField,
            [e.target.name]: e.target.files[0].name
        });
    }

    const handleSetBrandField = (e: any) => {
        setBrandField({
            ...brandField,
            [e.target.name]: e.target.value
        });
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

    const handleSubmitBrand = async (e: any) => {
        e.preventDefault();
        handleUpload();

        try {
            const response = await axios.put("http://127.0.0.1:8000/api/brands/" + brandField.id, brandField);
            alert(response.data.message);
            if (response.status == 200)
                window.location.href = '/manager/listbrands';
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <div className={classNames(styles["header__information-user"], styles["header__information__user-update"])}>
                <div className={styles["z_raty"]}>
                    <div className={styles["infor__user"]}>
                        <div className={styles["role__user"]} style={{ fontSize: '1.8rem' }}>Thêm Chi Nhánh Làm Việc</div>
                    </div>
                </div>
            </div>

            <div className={styles["container_profile"]}>
                <div className={grid["grid"]}>
                    <div className={grid["grid__row"]}>
                        <div className={grid["grid__column-12"]}>
                            <form className={styles["content_user"]}>
                                <div className={styles["introduce"]}>
                                    <h3 className={styles["title__introduce"]}>Thông Tin Cấu Hình Chi Nhánh</h3>
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
                                            <div className={styles["title__infor"]}>*Tên Chi Nhánh</div>
                                            <input onChange={handleSetBrandField} name="brand_name" className={styles["input__infor"]} required placeholder="Nhập tên chi nhánh" defaultValue={brandField.brand_name} />
                                        </div>
                                        <div className={styles["infor__item"]}>
                                            <div className={styles["title__infor"]}>*Địa Chỉ</div>
                                            <input onChange={handleSetBrandField} name="address" className={styles["input__infor"]} required placeholder="Nhập địa chỉ" defaultValue={brandField.brand_address} />
                                        </div>

                                        <div className={classNames(styles["infor__item"])}>
                                            <div className={styles["title__infor"]}>*Người Quản Lý</div>
                                            <div className={styles["groups__choose"]}>
                                                <input onChange={handleSetBrandField} name="managerID" readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} placeholder="Chọn người quản lý" defaultValue={selectedManager.fullname} />
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
                                        <div className={styles["infor__item"]}>
                                            <div className={styles["title__infor"]}>*Tên tài khoản</div>
                                            <input onChange={handleSetBrandField} name="bank_name" className={styles["input__infor"]} required placeholder="Nhập số điện thoại" defaultValue={brandField.phone} />
                                        </div>
                                        <div className={styles["infor__item"]}>
                                            <div className={styles["title__infor"]}>*Số tài khoản</div>
                                            <input onChange={handleSetBrandField} name="bank_account_number" className={styles["input__infor"]} required placeholder="Nhập tên ngân hàng" defaultValue={brandField.bank_name} />
                                        </div>
                                        <div className={styles["infor__item"]}>
                                            <div className={styles["title__infor"]}>*Hotline</div>
                                            <input onChange={handleSetBrandField} name="phone" className={styles["input__infor"]} required placeholder="Nhập số tài khoản" defaultValue={brandField.bank_account_number} />
                                        </div>
                                        <div className={styles["infor__item"]}>
                                            <div className={styles["title__infor"]}>*Mô Tả</div>
                                            <textarea onChange={handleSetBrandField} name="description" className={styles["input__infor"]} required placeholder="Nhập mô tả dự án" defaultValue={brandField.description} />
                                        </div>
                                    </div>
                                </div>
                                <div className={classNames(styles["footer__information-user"], styles["footer__information__user-update"])}>
                                    <button onClick={handleClose} className={classNames(styles["btn__save"])}>Đóng</button>
                                    <button onClick={handleSubmitBrand} className={classNames(styles["btn__save"])}>Lưu</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default UpdateBrand;