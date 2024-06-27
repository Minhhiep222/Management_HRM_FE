import styles from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import "@/app/globals.css";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import classNames from "classnames";
import Link from "next/link";
function SideBarMySpace() {
    return (
        <div className={styles["side__bar-myspace"]}>
            <div className={styles["infor__myspace"]}>
                <div className={styles["img__user"]} style={{
                    backgroundImage: `url('/images/space.jpg')`
                }}>
                </div>
                <div className={styles["name__user"]}>
                    <span className={styles["id__user"]}>1</span>
                    <span>-</span>
                    <Link href="/users/profile">Nguyễn Minh Hiệp</Link>
                </div>
                <div className={styles["role__user"]}>CEO</div>
                <div className={styles["state__user"]}>Chưa đăng nhập</div>
                <div className={styles["time__user"]}>
                    <span>00</span>:<span>00</span>:<span>00</span>
                </div>
                <button className={classNames(grid["btn"], styles["btn__check-in"], styles["btn__active"])}>
                    Đăng ký vào
                </button>
                <button className={classNames(grid["btn"], styles["btn__check-out"])}>
                    Đăng ký ra
                </button>
            </div>

            <div className={styles["list__member"]}>
                <div className="" style={{ width: `100%` }}>
                    <h3 style={{ textAlign: `start` }}>Thành viên</h3>
                </div>
                <div className={styles["member__item"]}>
                    <div className={styles["img__member"]} style={{
                        backgroundImage: `url('/images/space.jpg')`
                    }}>
                    </div>
                    <div className={styles["member__infor"]}>
                        <div className={styles["main__infor"]}>
                            <div className={styles["name__member"]}>
                                <span className={styles["id__user"]}>1</span>
                                <span>-</span>
                                <Link href="/users/profile">Nguyễn Minh Hiệp</Link>
                            </div>
                            <div className={styles["state__member"]}>Chưa đăng nhập</div>
                        </div>

                        <div className={styles["contacts"]}>
                            <FiPhoneCall />
                            <ul className={styles["list__contacts"]}>
                                <li className={styles["contacts__item"]}>
                                    <IoChatboxEllipsesOutline />
                                    <span>Nhắn tin</span>
                                </li>
                                <li className={styles["contacts__item"]}>
                                    <FiPhoneCall />
                                    <span>Cuộc gọi âm thanh</span>
                                </li>
                                <li className={styles["contacts__item"]}>
                                    <MdOutlineVideoCall />
                                    <span>Cuộc gọi hình ảnh</span>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>

                <div className={styles["member__item"]}>
                    <div className={styles["img__member"]} style={{
                        backgroundImage: `url('/images/space.jpg')`
                    }}>
                    </div>
                    <div className={styles["member__infor"]}>
                        <div className={styles["main__infor"]}>
                            <div className={styles["name__member"]}>
                                <span className={styles["id__user"]}>1</span>
                                <span>-</span>
                                <Link href="/users/profile">Nguyễn Minh Hiệp</Link>
                            </div>
                            <div className={styles["state__member"]}>Chưa đăng nhập</div>
                        </div>

                        <div className={styles["contacts"]}>
                            <FiPhoneCall />
                            <ul className={styles["list__contacts"]}>
                                <li className={styles["contacts__item"]}>
                                    <IoChatboxEllipsesOutline />
                                    <span>Nhắn tin</span>
                                </li>
                                <li className={styles["contacts__item"]}>
                                    <FiPhoneCall />
                                    <span>Cuộc gọi âm thanh</span>
                                </li>
                                <li className={styles["contacts__item"]}>
                                    <MdOutlineVideoCall />
                                    <span>Cuộc gọi hình ảnh</span>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default SideBarMySpace;