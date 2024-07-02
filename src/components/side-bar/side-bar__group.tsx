import styles from "@/styles/myspace.module.scss";
import grid from "@/styles/globals.module.scss";
import "@/app/globals.css";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import classNames from "classnames";
import Link from "next/link";
function SideBarGroupSpace() {
    return (
        <div className={styles["side__bar-myspace"]}>
            <div className={styles["infor__myspace"]}>
                <div className={styles["img__user"]} style={{
                    backgroundImage: `url('/images/space.jpg')`
                }}>
                </div>
                <div className={styles["name__user"]}>
                    <Link href="/user/profile">Management</Link>
                </div>

            </div>

            <div className={styles["list__member"]}>
                <div className="" style={{ width: `100%` }}>
                    <h3 style={{ textAlign: `start` }}>Thành viên nhóm</h3>
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
                                <Link href="/user/profile">Nguyễn Minh Hiệp</Link>
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
                                <Link href="/user/profile">Nguyễn Minh Hiệp</Link>
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

export default SideBarGroupSpace;