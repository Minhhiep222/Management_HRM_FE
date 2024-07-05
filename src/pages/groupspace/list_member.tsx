import styles from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoMdSearch } from "react-icons/io";
import {
    faArrowUp,
    faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

function ListView() {
    return (
        <div>
            <div className={styles["control__project"]}>
                <div className={styles["search__member"]}>
                    {/* <select name="name__project" id="" className={styles["select__name-project"]}>
                        Dự án
                        <option value="Quản lý nhân sự" className={styles["item__project"]}>Quản lý nhân sự</option>
                        <option value="Thương mại điện tử" className={styles["item__project"]}>Thương mại điện tử</option>
                    </select> */}
                    <input type="text" placeholder="Tìm kiếm" />
                    <IoMdSearch />
                </div>

                <div className={styles["control"]}>
                    <button className={classNames(grid["btn"], styles["btn__control-project"])}>Xóa </button>
                    <button className={classNames(grid["btn"], styles["btn__control-project"])}>Sửa</button>
                    <button className={classNames(grid["btn"], styles["btn__create-project"])}>Thêm</button>
                    {/* <button className={classNames(grid["btn"], styles["btn__control-project"])}> <CiImport /> Nhập</button>
                    <button className={classNames(grid["btn"], styles["btn__control-project"])}> <CiExport /> Xuất</button> */}
                </div>
            </div>
            <div className={styles["introduce"]}>
                <h3 className={styles["title__introduce"]}>Thành viên nhóm</h3>
                <div className={classNames(styles["infor__employee"], styles["scroll-infor"])}>
                    <table className={styles["table__experience"]}>
                        <thead className={styles["head__experience"]}>
                            <tr className={styles["tr__experience"]}>
                                <th className={classNames(styles["th__experience-checkbox"], styles["sticky-col-1"])}>
                                    <div>
                                        <input type="checkbox" name="" id="" />
                                    </div>
                                </th>
                                <th className={classNames(styles["th__experience"], styles["sticky-col-2"])}>
                                    <div>
                                        <span>ID Nhân Viên</span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={classNames(styles["th__experience"], styles["sticky-col-3"])}>
                                    <div>
                                        <span>Tên</span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={classNames(styles["th__experience"], styles["sticky-col-4"])}>
                                    <div>
                                        <span>Họ</span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span>Biệt Danh</span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span>Địa Chỉ Email</span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Ảnh </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Ngày Sinh </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Giới Tính </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Số Điện Thoại Cá Nhân </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Tình Trạng Hôn Nhân</span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Tự Giới Thiệu </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Số Điện Thoại </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Số Máy </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Vị trí chỗ ngồi </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Thêm Bởi </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span>Người Điều Chỉnh </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Thời Gian Thêm </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Thời Gian Điều Chỉnh </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Phòng  </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Chỉ Định   </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Loại Công Việc </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Trạng Thái </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Ngày Gia Nhập </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Kinh Nghiệm Hiện Tại </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Tổng Kinh Nghiệm </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span> Người Quản Lý </span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody id={styles["body__experience"]}>
                            <tr className={styles["employee__item"]}>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-1"])}>
                                    <div>
                                        <input type="checkbox" name="" id="" />
                                    </div>
                                </td>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-2"])}>Infomax</td>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-3"])}>Assistant Manager</td>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-4"])}>30-Apr-1998</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                            </tr>
                            <tr className={styles["employee__item"]}>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-1"])}>
                                    <div>
                                        <input type="checkbox" name="" id="" />
                                    </div>
                                </td>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-2"])}>Infomax</td>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-3"])}>Assistant Manager</td>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-4"])}>30-Apr-1998</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                            </tr>
                            <tr className={styles["employee__item"]}>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-1"])}>
                                    <div>
                                        <input type="checkbox" name="" id="" />
                                    </div>
                                </td>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-2"])}>Infomax</td>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-3"])}>Assistant Manager</td>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-4"])}>30-Apr-1998</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                            </tr>
                            <tr className={styles["employee__item"]}>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-1"])}>
                                    <div>
                                        <input type="checkbox" name="" id="" />
                                    </div>
                                </td>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-2"])}>Infomax</td>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-3"])}>Assistant Manager</td>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-4"])}>30-Apr-1998</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                            </tr>
                            <tr className={styles["employee__item"]}>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-1"])}>
                                    <div>
                                        <input type="checkbox" name="" id="" />
                                    </div>
                                </td>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-2"])}>Infomax</td>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-3"])}>Assistant Manager</td>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-4"])}>30-Apr-1998</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                            </tr>
                            <tr className={styles["employee__item"]}>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-1"])}>
                                    <div>
                                        <input type="checkbox" name="" id="" />
                                    </div>
                                </td>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-2"])}>Infomax</td>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-3"])}>Assistant Manager</td>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-4"])}>30-Apr-1998</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                                <td className={styles["td__experience"]}>Yes</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>-</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default ListView;
