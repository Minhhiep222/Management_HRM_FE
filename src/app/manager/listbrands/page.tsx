'use client';

import styles from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUp,
    faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { TiUserDelete } from "react-icons/ti";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import Link from "next/link";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import useModals from '@/components/hook/useModal';
import useAddress from '@/components/hook/useAddress';
import Header from "@/components/header/header";
import SideBar from "@/components/side-bar/side-bar";
import HeaderManager from "@/components/header/header__manager";
import axios from "axios";

function ListProject() {
    const { isModalOpen, handleOpenModal, handleCloseModal } = useModals();
    const { address, saveAddress } = useAddress();
    const [employees, setEmployees] = useState<any[]>([]);
    const idAllUserRef = useRef<HTMLInputElement | null>(null);
    const [selectMember, setSelectMember] = useState<any[]>([]);
    const [selectBrand, setSelectBrand] = useState<any[]>([]);
    const [brands, setBrands] = useState<any[]>([]);

    useEffect(() => {
        handleGetBrand();
    }, []);

    const handleCheckedAll = () => {
        const checkeds = document.querySelectorAll("input[name='idBrand']") as NodeListOf<HTMLInputElement>;
        checkeds.forEach((element, index) => {
            if (idAllUserRef.current?.checked === false) {
                element.checked = false
                setSelectBrand([]);
            }
            else {
                element.checked = true;
                setSelectBrand(brands)
            }
        });
    }


    const handleSelectBrand = (e: any): void => {
        setSelectBrand(prevBrands => {
            const isBrandselected = prevBrands.some(Brand => Brand.id === e.id);
            if (isBrandselected) {
                return prevBrands.filter(Brand => Brand.id !== e.id);
            } else {
                return [...prevBrands, e];
            }
        });
    }

    const handleGetBrand = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/brands/list");
            setBrands(result.data.brands);
        } catch (e) {
            console.log("Something wrong !");
        }
    }

    const handleDeleteBrandById = async (id: any) => {
        const confim = window.confirm("Bạn có muốn xóa chi nhánh này không");
        if (confim)
            try {
                const result = await axios.delete("http://127.0.0.1:8000/api/brands/" + id);
                if (result.status == 200) {
                    console.log("xóa thành công");
                    handleGetBrand();
                }
            } catch (e) {
                console.log("something wrong")
            }
    }

    const handleDeleteBrands = async () => {
        try {
            var arrayId: any = [];
            if (selectBrand) {
                selectBrand.map((brand, index) =>
                    arrayId[index] = brand.id
                )
            }
            const result = await axios.patch("http://127.0.0.1:8000/api/brands/deleteAll", arrayId);
            if (result.status == 200) {
                console.log("xóa thành công");
                handleGetBrand();
                const checkeds = document.querySelectorAll("input[name='idBrand']") as NodeListOf<HTMLInputElement>;
                checkeds.forEach(checked => checked.checked = false);
            }

        } catch (e) {
            console.log("something wrong")
        }
    }

    const handleCreate = () => {
        // saveAddress(window.location.href);
        window.location.href = "/brands/create";
    };

    const handleUpdate = (id: any) => {
        window.location.href = `/brands/update/${id}`;
    };

    return (

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
                                        <button className={classNames(grid["btn"], styles["btn__control-project"])}>Nhân viên</button>
                                        <button className={classNames(grid["btn"], styles["btn__control-project"])}>Phòng</button>
                                        <button onClick={handleDeleteBrands} className={classNames(grid["btn"], styles["btn__control-project"])}>Xóa chi nhánh</button>
                                        <button onClick={handleCreate} className={classNames(grid["btn"], styles["btn__create-project"])}>Thêm chi nhánh</button>
                                    </div>
                                </div>
                                <div className={styles["introduce"]}>
                                    <h3 className={styles["title__introduce"]}>Danh sách chi nhánh</h3>
                                    <div className={classNames(styles["infor__employee"], styles["scroll-infor"])}>
                                        <table className={styles["table__experience"]}>
                                            <thead className={styles["head__experience"]}>
                                                <tr className={styles["tr__experience"]}>
                                                    <th style={{ backgroundColor: 'white', borderRadius: 0 }} className={classNames(styles["th__experience-checkbox"], styles["sticky-col-0"])}>
                                                    </th>
                                                    <th className={classNames(styles["th__experience-checkbox"], styles["sticky-col-1"])}>
                                                        <div>
                                                            <input onClick={handleCheckedAll} type="checkbox" name="" id="" ref={idAllUserRef} />
                                                        </div>
                                                    </th>
                                                    <th className={classNames(styles["th__experience"], styles["sticky-col-2"])} style={{
                                                        minWidth: '400px'
                                                    }} >
                                                        <div>
                                                            <span>Tên chi nhánh</span>
                                                            <span>
                                                                <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                            </span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Địa chỉ</span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Hình ảnh</span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Hotline</span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Người quản lý</span>
                                                        </div>
                                                    </th>
                                                    <th className={styles["th__experience"]}>
                                                        <div>
                                                            <span>Trạng thái</span>
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody id={styles["body__experience"]}>
                                                {brands.map(brand =>
                                                    <tr key={brand.id} className={styles["employee__item"]}>
                                                        <td className={classNames(styles["td__experience"], styles["sticky-col-0"])}>
                                                            <div className={styles["control__project"]}>
                                                                <HiOutlineDotsHorizontal />
                                                                <ul className={styles["list__contacts"]}>
                                                                    <Link href="/projects/detail" className={styles["contacts__item"]}>
                                                                        <IoEyeOutline />
                                                                        <span>Xem</span>
                                                                    </Link>
                                                                    <button onClick={() => handleDeleteBrandById(brand.id)} className={styles["contacts__item"]}>
                                                                        <TiUserDelete />
                                                                        <span>Xóa</span>
                                                                    </button>
                                                                    <button onClick={() => handleUpdate(brand.id)} className={styles["contacts__item"]}>
                                                                        <MdOutlineTipsAndUpdates />
                                                                        <span>Sửa</span>
                                                                    </button>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                        <td className={classNames(styles["td__experience"], styles["sticky-col-1"])}>
                                                            <div className="">
                                                                <input onClick={() => handleSelectBrand(brand)} type="checkbox" name="idBrand" id="idBrand" />
                                                            </div>
                                                        </td>
                                                        <td className={classNames(styles["td__experience"], styles["sticky-col-2"])}>{brand.brand_name}</td>
                                                        <td className={styles["td__experience"]}>{brand.brand_address}</td>
                                                        <td className={styles["td__experience"]} >
                                                            <div className={styles["img__Brands"]}>
                                                                <div className={styles["td__img"]} style={{
                                                                    backgroundImage: `url("/images/${brand.img}")`
                                                                }}>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className={styles["td__experience"]}>{brand.phone}</td>
                                                        <td className={styles["td__experience"]}>{brand.manager.fullname}</td>
                                                        <td className={styles["td__experience"]}>{brand.state}</td>
                                                    </tr>
                                                )}

                                            </tbody>
                                        </table>
                                    </div>
                                </div >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListProject;
