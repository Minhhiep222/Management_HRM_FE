
import styles from "@/styles/control.module.scss";
import myspace from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import classNames from "classnames";
import { IoMdSearch } from "react-icons/io";


function ListProject() {
    return (
        <div >
            <div className={myspace["control__project"]}>
                <div className={myspace["search__member"]}>
                    <input type="text" placeholder="Tìm kiếm" />
                    <IoMdSearch />
                </div>

                <div className={myspace["control"]}>
                    <button className={classNames(grid["btn"], myspace["btn__create-project"])}>Thêm</button>
                </div>
            </div>
            <div className={styles["content__control"]}>
                <div className={styles["box__list"]}>
                    <div className={grid["grid"]}>
                        <div className={grid["grid__row"]}>
                            <div className={grid["grid__column-4"]}>
                                <div className={styles["box__item"]}>
                                    <div className={styles["header__box"]}>Nguyễn Minh Hiệp</div>
                                    <div style={{
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        borderRadius: '3px',
                                        backgroundImage: 'url("/images/space.jpg")',
                                    }} className={styles["content__box"]}>Nội dung hộp đồng</div>
                                </div>
                            </div>
                            <div className={grid["grid__column-4"]}>
                                <div className={styles["box__item"]}>
                                    <div className={styles["header__box"]}>Nguyễn Minh Hiệp</div>
                                    <div style={{
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        borderRadius: '3px',
                                        backgroundImage: 'url("/images/space.jpg")',
                                    }} className={styles["content__box"]}>Nội dung hộp đồng</div>
                                </div>
                            </div>
                            <div className={grid["grid__column-4"]}>
                                <div className={styles["box__item"]}>
                                    <div className={styles["header__box"]}>Nguyễn Minh Hiệp</div>
                                    <div style={{
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        borderRadius: '3px',
                                        backgroundImage: 'url("/images/space.jpg")',
                                    }} className={styles["content__box"]}>Nội dung hộp đồng</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListProject;
function clsx() {
    throw new Error("Function not implemented.");
}

