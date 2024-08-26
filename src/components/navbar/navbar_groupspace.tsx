import styles from "@/styles/myspace.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function NavBarGroupSpace() {
    const pathname = usePathname();
    return (
        <div className={styles["navbar__myspace"]}>
            <ul className={styles["list__navbar-myspace"]}>
                <li className={classNames(styles["myspace__item"], pathname === "/groupspace/feeds" ? styles["active__myspace"] : "")}>
                    <Link href="/groupspace/feeds" > Tường của nhóm </Link>
                </li>
                <li className={classNames(styles["myspace__item"], pathname === "/" ? styles["active__myspace"] : "")}>
                    Phê duyệt
                </li>
                <li className={classNames(styles["myspace__item"], pathname === "/" ? styles["active__myspace"] : "")}>
                    Rời khỏi
                </li>
                <li className={classNames(styles["myspace__item"], pathname === "/" ? styles["active__myspace"] : "")}>
                    <Link href="" >Chuyên cần</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBarGroupSpace;