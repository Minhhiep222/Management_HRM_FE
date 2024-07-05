
import styles from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUp,
    faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { CiImport } from "react-icons/ci";
import { CiExport } from "react-icons/ci";

function Project() {
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
                    <button className={classNames(grid["btn"], styles["btn__control-project"])}> <CiImport /> Nhập</button>
                    <button className={classNames(grid["btn"], styles["btn__control-project"])}> <CiExport /> Xuất</button>
                </div>
            </div>
            <div className={styles["introduce"]}>
                <h3 className={styles["title__introduce"]}>Quản lý dự án</h3>
                <div className={classNames(styles["infor__employee"], styles["scroll-infor"])}>
                    <table className={styles["table__experience"]}>
                        <thead className={styles["head__experience"]}>
                            <tr className={styles["tr__experience"]}>
                                <th className={styles["th__experience"]} style={{
                                    minWidth: '400px'
                                }}>
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
                                        <span>Số giờ ước tính</span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span>Trạng thái</span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]}>
                                    <div>
                                        <span>Việc làm</span>
                                    </div>
                                </th>
                                <th className={styles["th__experience"]} style={{
                                    minWidth: '50px'
                                }}>
                                    <div>
                                        <span></span>
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
            </div >
        </div>
    );
}

export default Project;
