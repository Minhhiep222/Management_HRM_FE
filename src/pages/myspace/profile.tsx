import profiles from "@/styles/profile.module.scss";
import grid from "@/styles/globals.module.scss";
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHospital,
    faArrowDown,
    faChair,
    faComputer,
    faClock,
    faEnvelope,
    faArrowUp
} from "@fortawesome/free-solid-svg-icons";


function Profile() {
    return (
        <div className={profiles["main__list-infor"]}>
            <div className={profiles["top__class"]}>
                <div className={profiles["class__item"]}>
                    <div className={profiles["box__font"]}>
                        <FontAwesomeIcon style={{ fontSize: '1rem', width: '30px' }} icon={faHospital} />
                    </div>
                    <div className={profiles["infor__class"]}>
                        <div className={profiles["room"]}>Phòng</div>
                        <div>Management</div>
                    </div>
                </div>
                <div className={profiles["class__item"]}>
                    <div className={profiles["box__font"]}>
                        <FontAwesomeIcon style={{ fontSize: '1rem', width: '20px' }} icon={faChair} />
                    </div>
                    <div className={profiles["infor__class"]}>
                        <div className={profiles["room"]}>Vị trí chỗ ngồi</div>
                        <div>Phòng CEO</div>
                    </div>
                </div>
                <div className={profiles["class__item"]}>
                    <div className={profiles["box__font"]}>
                        <FontAwesomeIcon style={{ fontSize: '1rem', width: '30px' }} icon={faComputer} />
                    </div>
                    <div className={profiles["infor__class"]}>
                        <div className={profiles["room"]}>Số máy</div>
                        <div>1</div>
                    </div>
                </div>
                <div className={profiles["class__item"]}>
                    <div className={profiles["box__font"]}>
                        <FontAwesomeIcon style={{ fontSize: '1rem', width: '30px' }} icon={faClock} />
                    </div>
                    <div className={profiles["infor__class"]}>
                        <div className={profiles["room"]}>Giờ làm việc</div>
                        <div>9:00</div>
                    </div>
                </div>
                <div className={profiles["class__item"]}>
                    <div className={profiles["box__font"]}>
                        <FontAwesomeIcon style={{ fontSize: '1rem', width: '30px' }} icon={faEnvelope} />
                    </div>
                    <div className={profiles["infor__class"]}>
                        <div className={profiles["room"]}>Email</div>
                        <div>minhhiep325@gmail.com</div>
                    </div>
                </div>
            </div>

            <div className={classNames(profiles["introduce"])}>
                <h3 className={profiles["title__introduce"]}>Cơ cấu tổ chức</h3>
                <div className={classNames(profiles["organization"])}>
                    <div className={profiles["box__font"]}>
                        <FontAwesomeIcon style={{ fontSize: '1rem', width: '30px' }} icon={faHospital} />
                        <div className={profiles["room"]}>Phòng</div>
                    </div>
                    <div className={profiles["infor__class"]}>
                        <div>Management</div>
                    </div>
                </div>
            </div>

            {/* Basic information */}
            <div className={profiles["introduce"]}>
                <h3 className={profiles["title__introduce"]}>Thông Tin Cơ Bản</h3>
                <div className={profiles["infor__employee"]}>

                    <div className={profiles["infor__item"]}>
                        <div className={profiles["title__infor"]}>ID Nhân Viên</div>
                        <div className={classNames(profiles["content__infor"], profiles[""])}>001</div>
                    </div>
                    <div className={profiles["infor__item"]}>
                        <div className={profiles["title__infor"]}>Tên</div>
                        <div className={classNames(profiles["content__infor"], profiles[""])}>Minh Hiệp</div>
                    </div>
                    <div className={profiles["infor__item"]}>
                        <div className={profiles["title__infor"]}>Họ</div>
                        <div className={classNames(profiles["content__infor"], profiles[""])}>Nguyễn</div>
                    </div>
                    <div className={profiles["infor__item"]}>
                        <div className={profiles["title__infor"]}>Biệt Danh</div>
                        <div className={classNames(profiles["content__infor"], profiles[""])}>MinhDepzaii</div>
                    </div>
                    <div className={profiles["infor__item"]}>
                        <div className={profiles["title__infor"]}>Địa chỉ email</div>
                        <div className={classNames(profiles["content__infor"], profiles[""])}>minhhiep325@gmail.com</div>
                    </div>
                    <div className={profiles["infor__item"]}>
                        <div className={profiles["title__infor"]}>Số điện thoại</div>
                        <div className={classNames(profiles["content__infor"], profiles[""])}>minhhiep325@gmail.com</div>
                    </div>
                    <div className={profiles["infor__item"]}>
                        <div className={profiles["title__infor"]}>Sinh nhật</div>
                        <div className={classNames(profiles["content__infor"], profiles[""])}>minhhiep325@gmail.com</div>
                    </div>
                </div>
            </div>

            {/* Job Description */}
            <div className={profiles["introduce"]}>
                <h3 className={profiles["title__introduce"]}>Thông Tin Công Việc</h3>
                <div className={profiles["infor__employee"]}>
                    <div className={grid["grid"]}>
                        <div className={grid["grid__row"]}>
                            <div className={grid["grid__column-6"]}>
                                <div className={classNames(profiles["infor__item"], profiles["item__full__width"])}>
                                    <div className={profiles["title__infor"]}>Phòng</div>
                                    <div className={classNames(profiles["content__infor"], profiles[""])}>001</div>
                                </div>
                                <div className={classNames(profiles["infor__item"], profiles["item__full__width"])}>
                                    <div className={profiles["title__infor"]}>Địa điểm</div>
                                    <div className={classNames(profiles["content__infor"], profiles[""])}>Minh Hiệp</div>
                                </div>
                                <div className={classNames(profiles["infor__item"], profiles["item__full__width"])}>
                                    <div className={profiles["title__infor"]}>Chức vụ</div>
                                    <div className={classNames(profiles["content__infor"], profiles[""])}>Nguyễn</div>
                                </div>
                            </div>

                            <div className={grid["grid__column-6"]}>
                                <div className={classNames(profiles["infor__item"], profiles["item__full__width"])}>
                                    <div className={profiles["title__infor"]}>Role</div>
                                    <div className={classNames(profiles["content__infor"], profiles[""])}>Admin</div>
                                </div>
                                <div className={classNames(profiles["infor__item"], profiles["item__full__width"])}>
                                    <div className={profiles["title__infor"]}>Loại công việc</div>
                                    <div className={classNames(profiles["content__infor"], profiles[""])}>Permanent</div>
                                </div>
                                <div className={classNames(profiles["infor__item"], profiles["item__full__width"])}>
                                    <div className={profiles["title__infor"]}>Trạng thái nhân viên</div>
                                    <div className={classNames(profiles["content__infor"], profiles[""])}>Active</div>
                                </div>
                                <div className={classNames(profiles["infor__item"], profiles["item__full__width"])}>
                                    <div className={profiles["title__infor"]}>Ngày gia nhập</div>
                                    <div className={classNames(profiles["content__infor"], profiles[""])}>02-Feb-2024</div>
                                </div>
                                <div className={classNames(profiles["infor__item"], profiles["item__full__width"])}>
                                    <div className={profiles["title__infor"]}>Kinh nghiệm</div>
                                    <div className={classNames(profiles["content__infor"], profiles[""])}>24 năm</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Personal Details */}
            <div className={profiles["introduce"]}>
                <h3 className={profiles["title__introduce"]}>Chi Tiết Cá Nhân</h3>
                <div className={profiles["infor__employee"]}>
                    <div className={profiles["infor__item"]}>
                        <div className={profiles["title__infor"]}>Họ và tên</div>
                        <div className={classNames(profiles["content__infor"], profiles[""])}>001</div>
                    </div>
                    <div className={profiles["infor__item"]}>
                        <div className={profiles["title__infor"]}>Ngày sinh</div>
                        <div className={classNames(profiles["content__infor"], profiles[""])}>Minh Hiệp</div>
                    </div>
                    <div className={profiles["infor__item"]}>
                        <div className={profiles["title__infor"]}>Giới tính</div>
                        <div className={classNames(profiles["content__infor"], profiles[""])}>Nguyễn</div>
                    </div>
                    <div className={profiles["infor__item"]}>
                        <div className={profiles["title__infor"]}>Tình trạng hôn nhân</div>
                        <div className={classNames(profiles["content__infor"], profiles[""])}>MinhDepzaii</div>
                    </div>
                    <div className={profiles["infor__item"]}>
                        <div className={profiles["title__infor"]}>Tự giới thiệu</div>
                        <div className={classNames(profiles["content__infor"], profiles[""])}>minhhiep325@gmail.com</div>
                    </div>
                    <div className={profiles["infor__item"]}>
                        <div className={profiles["title__infor"]}>Thông tin khác</div>
                        <div className={classNames(profiles["content__infor"], profiles[""])}>minhhiep325@gmail.com</div>
                    </div>
                </div>
            </div>

            {/* Contacts Detail */}
            <div className={profiles["introduce"]}>
                <h3 className={profiles["title__introduce"]}>Chi Tiết Liên Hệ</h3>
                <div className={profiles["infor__employee"]}>
                    <div className={grid["grid"]}>
                        <div className={grid["grid__row"]}>
                            <div className={grid["grid__column-6"]}>
                                <div className={classNames(profiles["infor__item"], profiles["item__full__width"])}>
                                    <div className={profiles["title__infor"]}>Số điện thoại công việc</div>
                                    <div className={classNames(profiles["content__infor"], profiles[""])}>0834983286</div>
                                </div>
                                <div className={classNames(profiles["infor__item"], profiles["item__full__width"])}>
                                    <div className={profiles["title__infor"]}>Địa chỉ email công việc</div>
                                    <div className={classNames(profiles["content__infor"], profiles[""])}>Nguyễn</div>
                                </div>
                                <div className={classNames(profiles["infor__item"], profiles["item__full__width"])}>
                                    <div className={profiles["title__infor"]}>Vị trí chỗ ngồi</div>
                                    <div className={classNames(profiles["content__infor"], profiles[""])}>Minh Hiệp</div>
                                </div>
                                <div className={classNames(profiles["infor__item"], profiles["item__full__width"])}>
                                    <div className={profiles["title__infor"]}>Tag</div>
                                    <div className={classNames(profiles["content__infor"], profiles[""])}>Nguyễn</div>
                                </div></div>
                            <div className={grid["grid__column-6"]}>
                                <div className={classNames(profiles["infor__item"], profiles["item__full__width"])}>
                                    <div className={profiles["title__infor"]}>Số điện thoại cá nhân</div>
                                    <div className={classNames(profiles["content__infor"], profiles[""])}>MinhDepzaii</div>
                                </div>
                                <div className={classNames(profiles["infor__item"], profiles["item__full__width"])}>
                                    <div className={profiles["title__infor"]}>Địa chỉ email cá nhân</div>
                                    <div className={classNames(profiles["content__infor"], profiles[""])}>minhhiep325@gmail.com</div>
                                </div></div>
                        </div>
                    </div>


                </div>
            </div>

            {/* System Fields */}
            <div className={profiles["introduce"]}>
                <h3 className={profiles["title__introduce"]}>System Fields</h3>
                <div className={profiles["infor__employee"]}>
                    <div className={grid["grid"]}>
                        <div className={grid["grid__row"]}>
                            <div className={grid["grid__column-6"]}>
                                <div className={classNames(profiles["infor__item"], profiles["item__full__width"])}>
                                    <div className={profiles["title__infor"]}>Thêm bởi</div>
                                    <div className={classNames(profiles["content__infor"], profiles[""])}>Nguyễn Minh Hiệp</div>
                                </div>
                                <div className={classNames(profiles["infor__item"], profiles["item__full__width"])}>
                                    <div className={profiles["title__infor"]}>Thời gian thêm</div>
                                    <div className={classNames(profiles["content__infor"], profiles[""])}>20-Jun-2024 05:59 PM</div>
                                </div>
                            </div>
                            <div className={grid["grid__column-6"]}>
                                <div className={classNames(profiles["infor__item"], profiles["item__full__width"])}>
                                    <div className={profiles["title__infor"]}>Người điều chỉnh</div>
                                    <div className={classNames(profiles["content__infor"], profiles[""])}>MinhDepzaii</div>
                                </div>
                                <div className={classNames(profiles["infor__item"], profiles["item__full__width"])}>
                                    <div className={profiles["title__infor"]}>Thời gian điều chỉnh</div>
                                    <div className={classNames(profiles["content__infor"], profiles[""])}>20-Jun-2024 05:59 PM</div>
                                </div>
                                <div className={classNames(profiles["infor__item"], profiles["item__full__width"])}>
                                    <div className={profiles["title__infor"]}>Trạng thái nhân viên mới</div>
                                    <div className={classNames(profiles["content__infor"], profiles[""])}>minhhiep325@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            {/* Work Experience */}
            <div className={profiles["introduce"]}>
                <h3 className={profiles["title__introduce"]}>Kinh Nghiệm Làm Việc</h3>
                <div className={classNames(profiles["infor__employee"], profiles["scroll-infor"])}>
                    <table className={profiles["table__experience"]}>
                        <thead className={profiles["head__experience"]}>
                            <tr className={profiles["tr__experience"]}>
                                <th className={profiles["th__experience"]}>
                                    <div>
                                        <span>Tên công ty</span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(profiles["icon__arrow"], profiles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(profiles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={profiles["th__experience"]}>
                                    <div>
                                        <span>Chức Danh</span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(profiles["icon__arrow"], profiles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(profiles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={profiles["th__experience"]}>
                                    <div>
                                        <span>Từ Ngày</span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(profiles["icon__arrow"], profiles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(profiles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={profiles["th__experience"]}>
                                    <div>
                                        <span>Đến Ngày</span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(profiles["icon__arrow"], profiles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(profiles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={profiles["th__experience"]}>
                                    <div>
                                        <span>Mô Tả Công Việc</span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(profiles["icon__arrow"], profiles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(profiles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={profiles["th__experience"]}>
                                    <div>
                                        <span>Phù hợp</span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(profiles["icon__arrow"], profiles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(profiles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody id={profiles["body__experience"]}>
                            <tr id={profiles[""]}>
                                <td className={profiles["td__experience"]}>Infomax</td>
                                <td className={profiles["td__experience"]}>Assistant Manager</td>
                                <td className={profiles["td__experience"]}>30-Apr-1998</td>
                                <td className={profiles["td__experience"]}>01-Jan-2004</td>
                                <td className={profiles["td__experience"]}>-</td>
                                <td className={profiles["td__experience"]}>Yes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className={profiles["introduce"]}>
                <h3 className={profiles["title__introduce"]}>Chi Tiết Trình Độ</h3>
                <div className={classNames(profiles["infor__employee"], profiles["scroll-infor"])}>
                    <table className={profiles["table__experience"]}>
                        <thead className={profiles["head__experience"]}>
                            <tr className={profiles["tr__experience"]}>
                                <th className={profiles["th__experience"]}>
                                    <div>
                                        <span>Tên học viện</span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(profiles["icon__arrow"], profiles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(profiles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={profiles["th__experience"]}>
                                    <div>
                                        <span>Bằng cấp/Bằng tốt nghiệp</span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(profiles["icon__arrow"], profiles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(profiles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={profiles["th__experience"]}>
                                    <div>
                                        <span>Chuyên môn</span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(profiles["icon__arrow"], profiles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(profiles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={profiles["th__experience"]}>
                                    <div>
                                        <span>Ngày hoàn thành</span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(profiles["icon__arrow"], profiles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(profiles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody id={profiles["body__experience"]}>
                            <tr id={profiles[""]}>
                                <td className={profiles["td__experience"]}>Infomax</td>
                                <td className={profiles["td__experience"]}>Assistant Manager</td>
                                <td className={profiles["td__experience"]}>30-Apr-1998</td>
                                <td className={profiles["td__experience"]}>01-Jan-2004</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className={profiles["introduce"]}>
                <h3 className={profiles["title__introduce"]}>Chi Tiết Phụ Thuộc</h3>
                <div className={classNames(profiles["infor__employee"], profiles["scroll-infor"])}>
                    <table className={profiles["table__experience"]}>
                        <thead className={profiles["head__experience"]}>
                            <tr className={profiles["tr__experience"]}>
                                <th className={profiles["th__experience"]}>
                                    <div>
                                        <span>Tên </span>
                                    </div>
                                </th>
                                <th className={profiles["th__experience"]}>
                                    <div>
                                        <span>Quan hệ</span>
                                    </div>
                                </th>
                                <th className={profiles["th__experience"]}>
                                    <div>
                                        <span>Ngày sinh</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody id={profiles["body__experience"]}>
                            <tr id={profiles[""]}>
                                <td className={profiles["td__experience"]}>Infomax</td>
                                <td className={profiles["td__experience"]}>Assistant Manager</td>
                                <td className={profiles["td__experience"]}>30-Apr-1998</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Profile;
