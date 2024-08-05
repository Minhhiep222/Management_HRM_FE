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
import DataList from "../../api/datalist";
import { useParams } from "next/navigation";

function UpdateTeam() {
    const param = useParams();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const { img, setImg, handleSelectImg, handleUpload } = useSelectImage(inputRef);
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
    const [selectedRoom, setSelectedRoom] = useState({ department_id: '', department_name: '' });
    const [selectedManager, setSelectedManager] = useState({ id: '', fullname: '' });
    const [selectedBrand, setSelectedBrand] = useState({ brand_id: '', brand_address: '' });
    const [selectMember, setSelectMember] = useState<any[]>([]);
    const [teamField, setTeamField] = useState({
        id: '',
        name: '',
        img: '',
        description: '',
        managerID: '',
        brandID: '',
        roomID: '',
    });

    useEffect(() => {
        handleGetManager();
        handleGetRoom();
        handleGetBrand();
        handleGetUser();
        handleSelect();
        if (param) {
            handleGetTeamByID(param.id);
        }
    }, [param]);
    

    //method lấy team bằng id
    const handleGetTeamByID = async (id: any) => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/teams/" + id);
            setTeamField(result.data.team);
            setImg(`/images/${result.data.team.img}`)
            setSelectMember(result.data.team.members);
            setSelectedManager(result.data.team.manager);
            setSelectedRoom(result.data.team.room);
            setSelectedBrand(result.data.team.brand);
            console.log(result.data.team)
        } catch (e) {
            console.log("Something wrong !");
        }
    }

    const handleGetValue = (e: any) => {
        handleCloseModalItem();
    }

    // method chọn hoặc hủy tất cả
    const handleCheckedAll = () => {
        const checkeds = document.querySelectorAll("input[name='idUser']") as NodeListOf<HTMLInputElement>;
        checkeds.forEach(element => {
            if (idAllUserRef.current?.checked === false) {
                element.checked = false
                setSelectMember([]);
            }
            else {
                element.checked = true;
                setSelectMember(employees);
            }
        });

    }

    const handleUpdate = useCallback(() => {
        saveAddress(window.location.href);
        window.location.href = "/user/update";
    }, []);

    const handleOpenModalItem = () => {
        setIsModalOpenItem(true);
    };

    const handleCloseModalItem = () => {
        setIsModalOpenItem(false);
    };

    const handleCreateRoom = () => {

    };

    const handleSetChangeValue = (e: any) => {
        console.log(teamField);
        setTeamField({
            ...teamField,
            [e.target.name]: e.target.value
        });
    }

    const handleSetImg = (e: any) => {
        setTeamField({
            ...teamField,
            [e.target.name]: e.target.files[0].name
        });
    }

    const handleSubmitTeam = async (e: any) => {
        e.preventDefault();
        handleUpload();
        const newObj = {
            name: teamField.name,
            managerID: selectedManager.id,
            memberID: selectMember,
            img: teamField.img,
            roomID: selectedRoom.department_id,
            brandID: selectedBrand.brand_id,
            description: teamField.description
        }

        try {
            const response = await axios.put("http://127.0.0.1:8000/api/teams/" + teamField.id, newObj);
            alert(response.data.message);
            if (response.status == 200)
                window.location.href = '/manager/listgroups';
        } catch (e) {
            console.log(e);
        }
    }

    const handleClose = () => {
        let address = ""
        window.location.href = localStorage.getItem('address') || address;
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
                            // setChangeValue({
                            //     ...changeValue,
                            //     [valueInput.name]: valueInput.value
                            // });
                        });
                    })
                }
            });
        });
    }

    //method chọn thành viên
    const handleSelectMember = (e: any): void => {
        setSelectMember(prevMembers => {
            const isMemberSelected = prevMembers.some(member => member.id === e.id);
            if (isMemberSelected) {
                return prevMembers.filter(member => member.id !== e.id);
            } else {
                return [...prevMembers, e];
            }
        });
    }

    const isMemberSelected = (employee: any): boolean => {
        return selectMember.some(member => member.id === employee.id);
    };


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
                            <form className={styles["content_user"]} method="POST" ref={formRef}    >

                                <div className={styles["introduce"]}>
                                    <h3 className={styles["title__introduce"]}>Thông Tin Cấu Hình Nhóm</h3>
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
                                            <div className={styles["title__infor"]}>*Tên Nhóm</div>
                                            <input onChange={handleSetChangeValue} name="name" className={styles["input__infor"]} required placeholder="Nhập tên nhóm" defaultValue={teamField.name} />
                                        </div>

                                        <div className={classNames(styles["infor__item"])}>
                                            <div className={styles["title__infor"]}>*Người Quản Lý</div>
                                            <div className={styles["groups__choose"]}>
                                                <input name="managerID" readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])}
                                                    placeholder="Chọn người quản lý" defaultValue={selectedManager.fullname} />
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
                                                </div>
                                            </div>
                                        </div>

                                        <div className={classNames(styles["infor__item"])}>
                                            <div className={styles["title__infor"]}>*Thành viên nhóm</div>
                                            <div className={styles["groups__choose"]}>
                                                <input onClick={handleOpenModalItem} name="memberID" ref={chooseRef} readOnly
                                                    className={classNames(styles["input__infor"], styles["choosen__item-infor"], "choose__member")}
                                                    placeholder="Chọn thành viên nhóm"
                                                    defaultValue={selectMember.map(member =>
                                                        member.fullname
                                                    )}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className={classNames(styles["infor__item"])}>
                                            <div className={styles["title__infor"]}>*Phòng</div>
                                            <div className={styles["groups__choose"]}>
                                                <input name="roomID" readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} placeholder="Chọn phòng" defaultValue={selectedRoom.department_name} />
                                                <div className={classNames(myspace["list__member"], styles["choose"])} >
                                                    {rooms.map((room, index) =>
                                                        <div onClick={() => setSelectedRoom(room)} className={myspace["member__item"]} key={index}>
                                                            {room.department_name}
                                                        </div>
                                                    )}

                                                    <div className={myspace["action__btn"]}>
                                                        <button onClick={handleCreateRoom} className={grid["btn"]}>
                                                            <IoAddOutline />
                                                            Thêm phòng
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={classNames(styles["infor__item"])}>
                                            <div className={styles["title__infor"]}>*Khu Vực</div>
                                            <div className={styles["groups__choose"]}>
                                                <input onClick={handleSetChangeValue} name="brandID" readOnly className={classNames(styles["input__infor"], styles["choosen__item-infor"])} placeholder="Chọn khu vực" defaultValue={selectedBrand.brand_address} />
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
                                            <textarea onChange={handleSetChangeValue} name="description" className={styles["input__infor"]} required placeholder="Nhập mô tả dự án" defaultValue={teamField.description} />
                                        </div>
                                    </div>
                                </div>

                                <div className={classNames(styles["footer__information-user"], styles["footer__information__user-update"])}>
                                    <button onClick={handleClose} className={classNames(styles["btn__save"])}>Đóng</button>
                                    <button type="submit" onClick={e => handleSubmitTeam(e)} className={classNames(styles["btn__save"])}>Lưu</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
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
                                                <input onClick={handleCheckedAll} ref={idAllUserRef} type="checkbox" onChange={handleSetChangeValue} name="allIdUser" id="" />
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

                                    {employees.map((employee, index) =>
                                        <tr className={myspace["employee__item"]} key={employee.id}>
                                            <td className={classNames(myspace["td__experience"], myspace["sticky-col-0"])}>
                                                <div>
                                                    <input checked={isMemberSelected(employee)} type="checkbox" onChange={() => handleSelectMember(employee)} name="idUser" id="" defaultValue={employee.fullname} />
                                                </div>
                                            </td>
                                            <td className={classNames(myspace["td__experience"], myspace["sticky-col-1"])}>{employee.fullname}</td>
                                            <td className={classNames(myspace["td__experience"], myspace["sticky-col-2"])}>{employee.email}</td>
                                            <td className={styles["td__experience"]} >
                                                <div className={myspace["img__teams"]}>
                                                    <div className={myspace["td__img"]} style={{
                                                        backgroundImage: `url("/images/${employee.img}")`
                                                    }}>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>
                        </div>
                        <div style={{ justifyContent: "end", margin: "10px 0" }} className={myspace["search__member"]}>
                            <button onClick={handleGetValue} className={classNames(styles["btn__save"])}>Chọn</button>
                        </div>
                    </div>
                </div>
            </ModalItem>

        </div >

    );
}

export default UpdateTeam;