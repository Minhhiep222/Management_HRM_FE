
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

function ListProject() {
    return (
        <div>
            <div className={styles["control__project"]}>
                <div className={styles["list__select"]}>
                    <select name="name__project" id="" className={styles["select__name-project"]}>
                        Dự án
                        <option value="Quản lý nhân sự" className={styles["item__project"]}>Quản lý nhân sự</option>
                        <option value="Thương mại điện tử" className={styles["item__project"]}>Thương mại điện tử</option>
                    </select>
                </div>

                <div className={styles["control"]}>
                    <button className={classNames(grid["btn"], styles["btn__control-project"])}>Nhân viên</button>
                    <button className={classNames(grid["btn"], styles["btn__control-project"])}>Phòng</button>
                    <button className={classNames(grid["btn"], styles["btn__create-project"])}>Thêm sự án</button>
                </div>
            </div>
            <div className={styles["introduce"]}>
                <h3 className={styles["title__introduce"]}>Danh sách dự án</h3>
                <div className={classNames(styles["infor__employee"], styles["scroll-infor"])}>
                    <table className={styles["table__experience"]}>
                        <thead className={styles["head__experience"]}>
                            <tr className={styles["tr__experience"]}>
                                <th style={{ backgroundColor: 'white', borderRadius: 0 }} className={classNames(styles["th__experience-checkbox"], styles["sticky-col-0"])}>
                                </th>
                                <th className={classNames(styles["th__experience-checkbox"], styles["sticky-col-1"])}>
                                    <div>
                                        <input type="checkbox" name="" id="" />
                                    </div>
                                </th>
                                <th className={classNames(styles["th__experience"], styles["sticky-col-2"])} style={{
                                    minWidth: '400px'
                                }} >
                                    <div>
                                        <span>Tên dự án</span>
                                        <span>
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"], styles["active"])} icon={faArrowUp} />
                                            <FontAwesomeIcon className={classNames(styles["icon__arrow"])} icon={faArrowDown} />
                                        </span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span>Mô tả</span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span>Ngày bắt đầu</span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span>Ngày kết thúc</span>
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
                            <tr className={styles["employee__item"]}>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-0"])}>
                                    <div className={styles["control__project"]}>
                                        <HiOutlineDotsHorizontal />
                                        <ul className={styles["list__contacts"]}>
                                            <li className={styles["contacts__item"]}>
                                                <TiUserDelete />
                                                <span>Xóa</span>
                                            </li>
                                            <li className={styles["contacts__item"]}>
                                                <MdOutlineTipsAndUpdates />
                                                <span>Sửa</span>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-1"])}>
                                    <div className="">
                                        <input type="checkbox" name="" id="" />
                                    </div>
                                </td>
                                <td className={classNames(styles["td__experience"], styles["sticky-col-2"])}>Quản lý nhà hàng</td>
                                <td className={styles["td__experience"]}>Cở sở tổ chức quán lý nhà hàng hiệu quả</td>
                                <td className={styles["td__experience"]}>30-Apr-1998</td>
                                <td className={styles["td__experience"]}>01-Jan-2004</td>
                                <td className={styles["td__experience"]}>Đang bắt đầu</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div >
        </div>
    );
}

export default ListProject;