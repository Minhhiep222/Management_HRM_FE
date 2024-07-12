import styles from "@/styles/myspace.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

function NavBarGroupSpace() {
    const router = useRouter();
    useEffect(() => {
        const myspace_items = document.querySelectorAll(`.${styles["myspace__item"]}`);
        const items = document.querySelectorAll(`.link__item`);
        console.log(items);
        items.forEach((element, index) => {
            element.addEventListener('click', () => {
                console.log(element);
                myspace_items.forEach(item => item.classList.remove(`${styles["active__myspace"]}`))
                myspace_items[index].classList.add(`${styles["active__myspace"]}`);
            })
        });

    }, []);

    return (
        <div className={styles["navbar__myspace"]}>
            <ul className={styles["list__navbar-myspace"]}>
                <li className={classNames(styles["myspace__item"], router.pathname === "/groupspace/feeds" ? styles["active__myspace"] : "")}>
                    <Link href="/groupspace/feeds" > Tường của nhóm </Link>
                </li>
                <li className={classNames(styles["myspace__item"], router.pathname === "/" ? styles["active__myspace"] : "")}>
                    Phê duyệt
                </li>
                <li className={classNames(styles["myspace__item"], router.pathname === "/" ? styles["active__myspace"] : "")}>
                    Rời khỏi
                </li>
                <li className={classNames(styles["myspace__item"], router.pathname === "/" ? styles["active__myspace"] : "")}>
                    <Link href="" >Chuyên cần</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBarGroupSpace;