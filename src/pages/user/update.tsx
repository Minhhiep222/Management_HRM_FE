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

function UpdateProfile() {
    useEffect(() => {
        const content__infor = document.querySelectorAll(`.${styles.content__infor}`);
        const pencils = document.querySelectorAll(`.${styles["change__content-infor"]}`)
        pencils.forEach((element, index) => {
            element.addEventListener('click', () => {
                const inputItem = content__infor[index] as HTMLInputElement
                inputItem.readOnly = false;
                //thiết lập vị trí bắt đầu và kết thúc của chuỗi nhập liệu
                inputItem.setSelectionRange(inputItem.value.length, inputItem.value.length);
                inputItem.focus();
            })
        });


        // content__infor.forEach((element) => {
        //     const inputItem = element as HTMLInputElement
        //     inputItem.readOnly = true;
        // })
        // console.log(content__infor)
    }, []);

    return (
        <div className={styles["session"]}>
            <div className={classNames(styles["header__information-user"], styles["header__information__user-update"])}>
                <div className={styles["z_raty"]}>
                    <div
                        className={classNames(styles["box__img-user"], styles["box__img__user-update"])}
                        style={{
                            backgroundImage: `url("/images/space.jpg")`,
                        }}
                    >
                    </div>
                    <div className={styles["infor__user"]}>
                        <div className={styles["name__user"]}>Nguyễn Thành Công</div>
                        <div className={styles["role__user"]}>CEO</div>
                    </div>
                </div>

                <ul className={styles["ul__navbar"]}>
                    <li className={classNames(styles["li__navbar"], styles["active__li"])}>Hồ sơ của tui</li>
                    <li className={classNames(styles["li__navbar"], styles[""])}>Thuộc cấp</li>
                    <li className={classNames(styles["li__navbar"], styles[""])}>Phòng</li>
                    <li className={classNames(styles["li__navbar"], styles[""])}>Ý kiến phản hồi</li>
                    <li className={classNames(styles["li__navbar"], styles[""])}>Dữ liệu liên quan</li>
                </ul>
            </div>
            <div className={styles["container_profile"]}>
                <div className={grid["grid"]}>
                    <div className={grid["grid__row"]}>
                        <div className={grid["grid__column-12"]}>
                            <div className={styles["content_user"]}>

                                <div className={styles["title__information"]}>


                                    <div className={styles["top__class"]}>
                                        <div className={styles["class__item"]}>
                                            <div className={styles["box__font"]}>
                                                <FontAwesomeIcon style={{ fontSize: '2rem', width: '30px' }} icon={faHospital} />
                                            </div>
                                            <div className={styles["infor__class"]}>
                                                <div className={styles["room"]}>Phòng</div>
                                                <div>Management</div>
                                            </div>
                                        </div>
                                        <div className={styles["class__item"]}>
                                            <div className={styles["box__font"]}>
                                                <FontAwesomeIcon style={{ fontSize: '2rem', width: '20px' }} icon={faChair} />
                                            </div>
                                            <div className={styles["infor__class"]}>
                                                <div className={styles["room"]}>Vị trí chỗ ngồi</div>
                                                <div>Phòng CEO</div>
                                            </div>
                                        </div>
                                        <div className={styles["class__item"]}>
                                            <div className={styles["box__font"]}>
                                                <FontAwesomeIcon style={{ fontSize: '2rem', width: '30px' }} icon={faComputer} />
                                            </div>
                                            <div className={styles["infor__class"]}>
                                                <div className={styles["room"]}>Số máy</div>
                                                <div>1</div>
                                            </div>
                                        </div>
                                        <div className={styles["class__item"]}>
                                            <div className={styles["box__font"]}>
                                                <FontAwesomeIcon style={{ fontSize: '2rem', width: '30px' }} icon={faClock} />
                                            </div>
                                            <div className={styles["infor__class"]}>
                                                <div className={styles["room"]}>Giờ làm việc</div>
                                                <div>9:00</div>
                                            </div>
                                        </div>
                                        <div className={styles["class__item"]}>
                                            <div className={styles["box__font"]}>
                                                <FontAwesomeIcon style={{ fontSize: '2rem', width: '30px' }} icon={faEnvelope} />
                                            </div>
                                            <div className={styles["infor__class"]}>
                                                <div className={styles["room"]}>Email</div>
                                                <div>minhhiep325@gmail.com</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles["introduce"]}>
                                        <h3 className={styles["title__introduce"]}>Giới thiệu</h3>
                                        <div className={styles["add__people-introduce"]}>
                                            <FontAwesomeIcon style={{ fontSize: '3rem', color: '#1c2655', width: '35px' }} icon={faCirclePlus} />
                                            <div>Thêm Giới Thiệu</div>
                                        </div>
                                    </div>

                                    <div className={classNames(styles["introduce"])}>
                                        <h3 className={styles["title__introduce"]}>Cơ cấu tổ chức</h3>
                                        <div className={classNames(styles["organization"])}>
                                            <div className={styles["box__font"]}>
                                                <FontAwesomeIcon style={{ fontSize: '2rem', width: '30px' }} icon={faHospital} />
                                                <div className={styles["room"]}>Phòng</div>
                                            </div>
                                            <div className={styles["infor__class"]}>
                                                <div>Management</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles["introduce"]}>
                                        <h3 className={styles["title__introduce"]}>Tag</h3>
                                        <div className={styles["add__people-introduce"]}>
                                            <FontAwesomeIcon style={{ fontSize: '3rem', color: '#1c2655', width: '35px' }} icon={faCirclePlus} />
                                            <div>Thêm Tag</div>
                                        </div>
                                    </div>

                                    {/* Basic information */}
                                    <div className={styles["introduce"]}>
                                        <h3 className={styles["title__introduce"]}>Thông Tin Cơ Bản</h3>
                                        <div className={styles["infor__employee"]}>

                                            <div className={styles["infor__item"]}>
                                                <div className={styles["title__infor"]}>ID Nhân Viên</div>
                                                <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                <div className={styles["change__content-infor"]}>
                                                    <TiPencil />
                                                    <div className={styles["change"]}>Chỉnh sửa</div>
                                                </div>
                                            </div>
                                            <div className={styles["infor__item"]}>
                                                <div className={styles["title__infor"]}>Tên</div>
                                                <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                <div className={styles["change__content-infor"]}>
                                                    <TiPencil />
                                                    <div className={styles["change"]}>Chỉnh sửa</div>
                                                </div>
                                            </div>
                                            <div className={styles["infor__item"]}>
                                                <div className={styles["title__infor"]}>Họ</div>
                                                <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                <div className={styles["change__content-infor"]}>
                                                    <TiPencil />
                                                    <div className={styles["change"]}>Chỉnh sửa</div>
                                                </div>
                                            </div>
                                            <div className={styles["infor__item"]}>
                                                <div className={styles["title__infor"]}>Biệt Danh</div>
                                                <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                <div className={styles["change__content-infor"]}>
                                                    <TiPencil />
                                                    <div className={styles["change"]}>Chỉnh sửa</div>
                                                </div>
                                            </div>
                                            <div className={styles["infor__item"]}>
                                                <div className={styles["title__infor"]}>Địa chỉ email</div>
                                                <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                <div className={styles["change__content-infor"]}>
                                                    <TiPencil />
                                                    <div className={styles["change"]}>Chỉnh sửa</div>
                                                </div>
                                            </div>
                                            <div className={styles["infor__item"]}>
                                                <div className={styles["title__infor"]}>Số điện thoại</div>
                                                <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                <div className={styles["change__content-infor"]}>
                                                    <TiPencil />
                                                    <div className={styles["change"]}>Chỉnh sửa</div>
                                                </div>
                                            </div>
                                            <div className={styles["infor__item"]}>
                                                <div className={styles["title__infor"]}>Sinh nhật</div>
                                                <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                <div className={styles["change__content-infor"]}>
                                                    <TiPencil />
                                                    <div className={styles["change"]}>Chỉnh sửa</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Job Description */}
                                    <div className={styles["introduce"]}>
                                        <h3 className={styles["title__introduce"]}>Thông Tin Công Việc</h3>
                                        <div className={styles["infor__employee"]}>
                                            <div className={grid["grid"]}>
                                                <div className={grid["grid__row"]}>
                                                    <div className={grid["grid__column-6"]}>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}>Phòng</div>
                                                            <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}>Địa điểm</div>
                                                            <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}>Chức vụ</div>
                                                            <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className={grid["grid__column-6"]}>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}>Role</div>
                                                            <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}>Loại công việc</div>
                                                            <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}>Trạng thái nhân viên</div>
                                                            <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}>Ngày gia nhập</div>
                                                            <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}>Kinh nghiệm</div>
                                                            <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Personal Details */}
                                    <div className={styles["introduce"]}>
                                        <h3 className={styles["title__introduce"]}>Chi Tiết Cá Nhân</h3>
                                        <div className={styles["infor__employee"]}>
                                            <div className={styles["infor__item"]}>
                                                <div className={styles["title__infor"]}>Họ và tên</div>
                                                <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                <div className={styles["change__content-infor"]}>
                                                    <TiPencil />
                                                    <div className={styles["change"]}>Chỉnh sửa</div>
                                                </div>
                                            </div>
                                            <div className={styles["infor__item"]}>
                                                <div className={styles["title__infor"]}>Ngày sinh</div>
                                                <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                <div className={styles["change__content-infor"]}>
                                                    <TiPencil />
                                                    <div className={styles["change"]}>Chỉnh sửa</div>
                                                </div>
                                            </div>
                                            <div className={styles["infor__item"]}>
                                                <div className={styles["title__infor"]}>Giới tính</div>
                                                <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                <div className={styles["change__content-infor"]}>
                                                    <TiPencil />
                                                    <div className={styles["change"]}>Chỉnh sửa</div>
                                                </div>
                                            </div>
                                            <div className={styles["infor__item"]}>
                                                <div className={styles["title__infor"]}>Tình trạng hôn nhân</div>
                                                <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                <div className={styles["change__content-infor"]}>
                                                    <TiPencil />
                                                    <div className={styles["change"]}>Chỉnh sửa</div>
                                                </div>
                                            </div>
                                            <div className={styles["infor__item"]}>
                                                <div className={styles["title__infor"]}>Tự giới thiệu</div>
                                                <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                <div className={styles["change__content-infor"]}>
                                                    <TiPencil />
                                                    <div className={styles["change"]}>Chỉnh sửa</div>
                                                </div>
                                            </div>
                                            <div className={styles["infor__item"]}>
                                                <div className={styles["title__infor"]}>Thông tin khác</div>
                                                <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                <div className={styles["change__content-infor"]}>
                                                    <TiPencil />
                                                    <div className={styles["change"]}>Chỉnh sửa</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contacts Detail */}
                                    <div className={styles["introduce"]}>
                                        <h3 className={styles["title__introduce"]}>Chi Tiết Liên Hệ</h3>
                                        <div className={styles["infor__employee"]}>
                                            <div className={grid["grid"]}>
                                                <div className={grid["grid__row"]}>
                                                    <div className={grid["grid__column-6"]}>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}>Số điện thoại công việc</div>
                                                            <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}>Địa chỉ email công việc</div>
                                                            <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}>Vị trí chỗ ngồi</div>
                                                            <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}>Tag</div>
                                                            <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div></div>
                                                    <div className={grid["grid__column-6"]}>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}>Số điện thoại cá nhân</div>
                                                            <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}>Địa chỉ email cá nhân</div>
                                                            <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div></div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                    {/* System Fields */}
                                    <div className={styles["introduce"]}>
                                        <h3 className={styles["title__introduce"]}>System Fields</h3>
                                        <div className={styles["infor__employee"]}>
                                            <div className={grid["grid"]}>
                                                <div className={grid["grid__row"]}>
                                                    <div className={grid["grid__column-6"]}>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}>Thêm bởi</div>
                                                            <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}>Thời gian thêm</div>
                                                            <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={grid["grid__column-6"]}>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}>Người điều chỉnh</div>
                                                            <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}>Thời gian điều chỉnh</div>
                                                            <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div>
                                                        <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                                            <div className={styles["title__infor"]}>Trạng thái nhân viên mới</div>
                                                            <input className={classNames(styles["content__infor"], styles["input__change-infor"])} readOnly defaultValue='000' />
                                                            <div className={styles["change__content-infor"]}>
                                                                <TiPencil />
                                                                <div className={styles["change"]}>Chỉnh sửa</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                    {/* Work Experience */}
                                    <div className={styles["introduce"]}>
                                        <h3 className={styles["title__introduce"]}>Kinh Nghiệm Làm Việc</h3>
                                        <div className={classNames(styles["infor__employee"], styles["scroll-infor"])}>
                                            <table className={styles["table__experience"]}>
                                                <thead className={styles["head__experience"]}>
                                                    <tr className={styles["tr__experience"]}>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Tên công ty</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Chức Danh</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Từ Ngày</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Đến Ngày</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Mô Tả Công Việc</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Phù hợp</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody id={styles["body__experience"]}>
                                                    <tr id={styles[""]}>
                                                        <td className={styles["td__experience"]}>Infomax</td>
                                                        <td className={styles["td__experience"]}>Assistant Manager</td>
                                                        <td className={styles["td__experience"]}>30-Apr-1998</td>
                                                        <td className={styles["td__experience"]}>01-Jan-2004</td>
                                                        <td className={styles["td__experience"]}>-</td>
                                                        <td className={styles["td__experience"]}>Yes</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className={styles["introduce"]}>
                                        <h3 className={styles["title__introduce"]}>Chi Tiết Trình Độ</h3>
                                        <div className={classNames(styles["infor__employee"], styles["scroll-infor"])}>
                                            <table className={styles["table__experience"]}>
                                                <thead className={styles["head__experience"]}>
                                                    <tr className={styles["tr__experience"]}>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Tên học viện</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Bằng cấp/Bằng tốt nghiệp</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Chuyên môn</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Ngày hoàn thành</span>
                                                                <span>
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                                                    <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                                                </span>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody id={styles["body__experience"]}>
                                                    <tr id={styles[""]}>
                                                        <td className={styles["td__experience"]}>Infomax</td>
                                                        <td className={styles["td__experience"]}>Assistant Manager</td>
                                                        <td className={styles["td__experience"]}>30-Apr-1998</td>
                                                        <td className={styles["td__experience"]}>01-Jan-2004</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className={styles["introduce"]}>
                                        <h3 className={styles["title__introduce"]}>Chi Tiết Phụ Thuộc</h3>
                                        <div className={classNames(styles["infor__employee"], styles["scroll-infor"])}>
                                            <table className={styles["table__experience"]}>
                                                <thead className={styles["head__experience"]}>
                                                    <tr className={styles["tr__experience"]}>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Tên </span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Quan hệ</span>
                                                            </div>
                                                        </th>
                                                        <th className={styles["th__experience"]}>
                                                            <div>
                                                                <span>Ngày sinh</span>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody id={styles["body__experience"]}>
                                                    <tr id={styles[""]}>
                                                        <td className={styles["td__experience"]}>Infomax</td>
                                                        <td className={styles["td__experience"]}>Assistant Manager</td>
                                                        <td className={styles["td__experience"]}>30-Apr-1998</td>
                                                    </tr>
                                                </tbody>
                                            </table>
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
                <button className={classNames(styles["btn__save"])}>Lưu</button>
            </div>
        </div >
    );
}

export default UpdateProfile;
