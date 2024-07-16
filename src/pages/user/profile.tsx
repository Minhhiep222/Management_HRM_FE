import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import SideBar from "@/components/side-bar/side-bar";
import styles from "@/styles/profile.module.scss";
import grid from "@/styles/globals.module.scss";
import "@/app/globals.css";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from "classnames";
import { BsThreeDots } from "react-icons/bs";
import { PiPencilThin } from "react-icons/pi";
import axios from "axios";
import { useState } from "react";
import {
    faHospital,
    faCirclePlus,
    faArrowUp,
    faArrowDown,
    faChair,
    faComputer,
    faClock,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { useEffect} from "react";
import Link from "next/link";

function Profile() {

    useEffect(() => {
        const change = document.querySelector(`.${styles["change__profile"]}`);
        const extend = document.querySelector(`.${styles["extend"]}`);

        extend?.addEventListener('click', () => {
            const item = change as HTMLElement;
            item.style.display == "block" ? item.style.display = "none"
                : item.style.display = "block";
        });

        extend?.addEventListener('mouseover', () => {
            const item = change as HTMLElement;
            item.style.display = "block";
        });
    })



    const [userData, setUSerData] = useState([]);
    useEffect(() => {
        fetchData();
        // fetchData2();
        // fetchData3();
   }, [])

   const fetchData = async () => {
    const myCookies = document.cookie ;
    const newCookie = myCookies.substring(4);
   console.log('mycookie:',myCookies);
   console.log('newCookie:',newCookie);

   const headers = {
       "Authorization": `Bearer ${newCookie}`
   };
   
   try {
    const response = await axios.get("http://127.0.0.1:8000/api/getValues", { headers });
    console.log("User data:", response.data);
   } catch (error) {
       console.error("Error fetching department data:", error);
   }
};

//    const fetchData2 = async () => {
//     try {
//          const result = await axios("http://127.0.0.1:8000/api/getAllDepartment");
//          console.log("dpm",result);
//     } catch (err) {
//          console.log("");
//     }
// }
// const fetchData3 = async () => {
//     try {
//          const result = await axios.post("http://127.0.0.1:8000/api/login");
//          console.log("login",result);
//     } catch (err) {
//          console.log("");
//     }
// }





    return (
        <div className={styles["content_user"]}>
            <div className={styles["background__header"]}>
                <Image src="/images/space.jpg" alt="space" style={{ borderRadius: '20px', width: `100%` }} width={1200} height={200} priority />
                <div className={styles["extend"]}>
                    <BsThreeDots />
                </div>
                <div className={styles["change__profile"]}>
                    <div className={styles["change__item"]}>
                        <PiPencilThin />
                        <Link href="/user/update" >Chỉnh sửa</Link>
                    </div>
                </div>
            </div>

            <div className={styles["title__information"]}>
                <div className={styles["header__information-user"]}>
                    <div className={styles["z_raty"]}>
                        <div
                            className={styles["box__img-user"]}
                            style={{
                                zIndex: 99,
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

                <div className={styles["top__class"]}>
                    <div className={styles["class__item"]}>
                        <div className={styles["box__font"]}>
                            <FontAwesomeIcon style={{ fontSize: '1rem', width: '30px' }} icon={faHospital} />
                        </div>
                        <div className={styles["infor__class"]}>
                            <div className={styles["room"]}>Phòng</div>
                            <div>Management</div>
                        </div>
                    </div>
                    <div className={styles["class__item"]}>
                        <div className={styles["box__font"]}>
                            <FontAwesomeIcon style={{ fontSize: '1rem', width: '20px' }} icon={faChair} />
                        </div>
                        <div className={styles["infor__class"]}>
                            <div className={styles["room"]}>Vị trí chỗ ngồi</div>
                            <div>Phòng CEO</div>
                        </div>
                    </div>
                    <div className={styles["class__item"]}>
                        <div className={styles["box__font"]}>
                            <FontAwesomeIcon style={{ fontSize: '1rem', width: '30px' }} icon={faComputer} />
                        </div>
                        <div className={styles["infor__class"]}>
                            <div className={styles["room"]}>Số máy</div>
                            <div>1</div>
                        </div>
                    </div>
                    <div className={styles["class__item"]}>
                        <div className={styles["box__font"]}>
                            <FontAwesomeIcon style={{ fontSize: '1rem', width: '30px' }} icon={faClock} />
                        </div>
                        <div className={styles["infor__class"]}>
                            <div className={styles["room"]}>Giờ làm việc</div>
                            <div>9:00</div>
                        </div>
                    </div>
                    <div className={styles["class__item"]}>
                        <div className={styles["box__font"]}>
                            <FontAwesomeIcon style={{ fontSize: '1rem', width: '30px' }} icon={faEnvelope} />
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
                        <FontAwesomeIcon style={{ fontSize: '1rem', color: '#1c2655', width: '35px' }} icon={faCirclePlus} />
                        <div>Thêm Giới Thiệu</div>
                    </div>
                </div>

                <div className={classNames(styles["introduce"])}>
                    <h3 className={styles["title__introduce"]}>Cơ cấu tổ chức</h3>
                    <div className={classNames(styles["organization"])}>
                        <div className={styles["box__font"]}>
                            <FontAwesomeIcon style={{ fontSize: '1rem', width: '30px' }} icon={faHospital} />
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
                            <div className={classNames(styles["content__infor"], styles[""])}>001</div>
                        </div>
                        <div className={styles["infor__item"]}>
                            <div className={styles["title__infor"]}>Tên</div>
                            <div className={classNames(styles["content__infor"], styles[""])}>Minh Hiệp</div>
                        </div>
                        <div className={styles["infor__item"]}>
                            <div className={styles["title__infor"]}>Họ</div>
                            <div className={classNames(styles["content__infor"], styles[""])}>Nguyễn</div>
                        </div>
                        <div className={styles["infor__item"]}>
                            <div className={styles["title__infor"]}>Biệt Danh</div>
                            <div className={classNames(styles["content__infor"], styles[""])}>MinhDepzaii</div>
                        </div>
                        <div className={styles["infor__item"]}>
                            <div className={styles["title__infor"]}>Địa chỉ email</div>
                            <div className={classNames(styles["content__infor"], styles[""])}>minhhiep325@gmail.com</div>
                        </div>
                        <div className={styles["infor__item"]}>
                            <div className={styles["title__infor"]}>Số điện thoại</div>
                            <div className={classNames(styles["content__infor"], styles[""])}>minhhiep325@gmail.com</div>
                        </div>
                        <div className={styles["infor__item"]}>
                            <div className={styles["title__infor"]}>Sinh nhật</div>
                            <div className={classNames(styles["content__infor"], styles[""])}>minhhiep325@gmail.com</div>
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
                                        <div className={classNames(styles["content__infor"], styles[""])}>001</div>
                                    </div>
                                    <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                        <div className={styles["title__infor"]}>Địa điểm</div>
                                        <div className={classNames(styles["content__infor"], styles[""])}>Minh Hiệp</div>
                                    </div>
                                    <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                        <div className={styles["title__infor"]}>Chức vụ</div>
                                        <div className={classNames(styles["content__infor"], styles[""])}>Nguyễn</div>
                                    </div>
                                </div>

                                <div className={grid["grid__column-6"]}>
                                    <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                        <div className={styles["title__infor"]}>Role</div>
                                        <div className={classNames(styles["content__infor"], styles[""])}>Admin</div>
                                    </div>
                                    <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                        <div className={styles["title__infor"]}>Loại công việc</div>
                                        <div className={classNames(styles["content__infor"], styles[""])}>Permanent</div>
                                    </div>
                                    <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                        <div className={styles["title__infor"]}>Trạng thái nhân viên</div>
                                        <div className={classNames(styles["content__infor"], styles[""])}>Active</div>
                                    </div>
                                    <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                        <div className={styles["title__infor"]}>Ngày gia nhập</div>
                                        <div className={classNames(styles["content__infor"], styles[""])}>02-Feb-2024</div>
                                    </div>
                                    <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                        <div className={styles["title__infor"]}>Kinh nghiệm</div>
                                        <div className={classNames(styles["content__infor"], styles[""])}>24 năm</div>
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
                            <div className={classNames(styles["content__infor"], styles[""])}>001</div>
                        </div>
                        <div className={styles["infor__item"]}>
                            <div className={styles["title__infor"]}>Ngày sinh</div>
                            <div className={classNames(styles["content__infor"], styles[""])}>Minh Hiệp</div>
                        </div>
                        <div className={styles["infor__item"]}>
                            <div className={styles["title__infor"]}>Giới tính</div>
                            <div className={classNames(styles["content__infor"], styles[""])}>Nguyễn</div>
                        </div>
                        <div className={styles["infor__item"]}>
                            <div className={styles["title__infor"]}>Tình trạng hôn nhân</div>
                            <div className={classNames(styles["content__infor"], styles[""])}>MinhDepzaii</div>
                        </div>
                        <div className={styles["infor__item"]}>
                            <div className={styles["title__infor"]}>Tự giới thiệu</div>
                            <div className={classNames(styles["content__infor"], styles[""])}>minhhiep325@gmail.com</div>
                        </div>
                        <div className={styles["infor__item"]}>
                            <div className={styles["title__infor"]}>Thông tin khác</div>
                            <div className={classNames(styles["content__infor"], styles[""])}>minhhiep325@gmail.com</div>
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
                                        <div className={classNames(styles["content__infor"], styles[""])}>0834983286</div>
                                    </div>
                                    <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                        <div className={styles["title__infor"]}>Địa chỉ email công việc</div>
                                        <div className={classNames(styles["content__infor"], styles[""])}>Nguyễn</div>
                                    </div>
                                    <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                        <div className={styles["title__infor"]}>Vị trí chỗ ngồi</div>
                                        <div className={classNames(styles["content__infor"], styles[""])}>Minh Hiệp</div>
                                    </div>
                                    <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                        <div className={styles["title__infor"]}>Tag</div>
                                        <div className={classNames(styles["content__infor"], styles[""])}>Nguyễn</div>
                                    </div></div>
                                <div className={grid["grid__column-6"]}>
                                    <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                        <div className={styles["title__infor"]}>Số điện thoại cá nhân</div>
                                        <div className={classNames(styles["content__infor"], styles[""])}>MinhDepzaii</div>
                                    </div>
                                    <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                        <div className={styles["title__infor"]}>Địa chỉ email cá nhân</div>
                                        <div className={classNames(styles["content__infor"], styles[""])}>minhhiep325@gmail.com</div>
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
                                        <div className={classNames(styles["content__infor"], styles[""])}>Nguyễn Minh Hiệp</div>
                                    </div>
                                    <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                        <div className={styles["title__infor"]}>Thời gian thêm</div>
                                        <div className={classNames(styles["content__infor"], styles[""])}>20-Jun-2024 05:59 PM</div>
                                    </div>
                                </div>
                                <div className={grid["grid__column-6"]}>
                                    <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                        <div className={styles["title__infor"]}>Người điều chỉnh</div>
                                        <div className={classNames(styles["content__infor"], styles[""])}>MinhDepzaii</div>
                                    </div>
                                    <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                        <div className={styles["title__infor"]}>Thời gian điều chỉnh</div>
                                        <div className={classNames(styles["content__infor"], styles[""])}>20-Jun-2024 05:59 PM</div>
                                    </div>
                                    <div className={classNames(styles["infor__item"], styles["item__full__width"])}>
                                        <div className={styles["title__infor"]}>Trạng thái nhân viên mới</div>
                                        <div className={classNames(styles["content__infor"], styles[""])}>minhhiep325@gmail.com</div>
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
    );
}

export default Profile;
