import styles from "@/styles/myspace.module.scss";
import classNames from "classnames";
import Link from "next/link";

function NavBarMySpace() {
    return (
        <div className={styles["navbar__myspace"]}>
            <ul className={styles["list__navbar-myspace"]}>
                <li className={classNames(styles["myspace_item"], styles["active__myspace"])}>
                    <Link href="/myspace/actionlist" > Thao tác </Link>
                </li>
                <li className={styles["myspace_item"]}>
                    <Link href="/myspace/feeds" > Thông tin mới </Link>
                </li>
                <li className={styles["myspace_item"]}>
                    <Link href="/myspace/profile" > Hồ sơ </Link>
                </li>
                <li className={styles["myspace_item"]}>
                    Phê duyệt
                </li>
                <li className={styles["myspace_item"]}>
                    Rời khỏi
                </li>
                <li className={styles["myspace_item"]}>
                    <Link href="/myspace/diligence" >Chuyên cần</Link>
                </li>
            </ul>

        </div>
    );
}

export default NavBarMySpace;