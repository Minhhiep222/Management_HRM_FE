import styles from "@/styles/myspace.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";

export const getSeverSideProps = async (context: any) => {
    const cookie = context.req.headers.cookie;
    parseTokenFromCookie(cookie);
    console.log("cookie" + cookie);
    console.log("getId" + parseTokenFromCookie(cookie));
    const employee = await fetchEmployeeData(token);
    return {
        props: {
            employee
        }
    }
}

// Hàm giả sử để parse cookie và lấy token
const parseTokenFromCookie = (cookie: any) => {
    // Ví dụ: parse cookie để lấy token
    const token = cookie.split('/')[0]; // Lấy token từ cookie
    return token;
};

function NavBarMySpace({ employee: any }) {

    const pathname: any = usePathname();

    return (
        <div className={styles["navbar__myspace"]}>
            <ul className={styles["list__navbar-myspace"]}>
                <li className={classNames(styles["myspace__item"], pathname === "/myspace/actionlist" ? styles["active__myspace"] : "")}>
                    <Link className="link__item-navbar" href="/myspace/actionlist" > Thao tác </Link>
                </li>
                <li className={classNames(styles["myspace__item"], pathname === "/myspace/feeds" ? styles["active__myspace"] : "")}>
                    <Link className="link__item-navbar" href="/myspace/feeds" > Thông tin mới </Link>
                </li>
                <li className={classNames(styles["myspace__item"], pathname === "/myspace/profile" ? styles["active__myspace"] : "")}>
                    <Link className="link__item-navbar" href="/myspace/profile" > Hồ sơ </Link>
                </li>
                <li className={classNames(styles["myspace__item"], pathname === "/myspace/diligence" ? styles["active__myspace"] : "")}>
                    <Link className="link__item-navbar" href="/myspace/diligence" >Chuyên cần</Link>
                </li>
                <li className={classNames(styles["myspace__item"], pathname === "/" ? styles["active__myspace"] : "")}>
                    Phê duyệt
                </li>
                <li className={classNames(styles["myspace__item"], pathname === "/" ? styles["active__myspace"] : "")}>
                    Rời khỏi
                </li>

            </ul>

        </div>
    );
}

export default NavBarMySpace;