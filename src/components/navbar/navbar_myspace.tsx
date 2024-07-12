import styles from "@/styles/myspace.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

function NavBarMySpace() {

    const router = useRouter();

    return (
        <div className={styles["navbar__myspace"]}>
            <ul className={styles["list__navbar-myspace"]}>
                <li className={classNames(styles["myspace__item"], router.pathname === "/myspace/actionlist" ? styles["active__myspace"] : "")}>
                    <Link className="link__item-navbar" href="/myspace/actionlist" > Thao tác </Link>
                </li>
                <li className={classNames(styles["myspace__item"], router.pathname === "/myspace/feeds" ? styles["active__myspace"] : "")}>
                    <Link className="link__item-navbar" href="/myspace/feeds" > Thông tin mới </Link>
                </li>
                <li className={classNames(styles["myspace__item"], router.pathname === "/myspace/profile" ? styles["active__myspace"] : "")}>
                    <Link className="link__item-navbar" href="/myspace/profile" > Hồ sơ </Link>
                </li>
                <li className={classNames(styles["myspace__item"], router.pathname === "/myspace/diligence" ? styles["active__myspace"] : "")}>
                    <Link className="link__item-navbar" href="/myspace/diligence" >Chuyên cần</Link>
                </li>
                <li className={classNames(styles["myspace__item"], router.pathname === "/" ? styles["active__myspace"] : "")}>
                    Phê duyệt
                </li>
                <li className={classNames(styles["myspace__item"], router.pathname === "/" ? styles["active__myspace"] : "")}>
                    Rời khỏi
                </li>

            </ul>

        </div>
    );
}

export default NavBarMySpace;