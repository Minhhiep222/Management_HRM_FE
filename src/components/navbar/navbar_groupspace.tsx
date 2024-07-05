import styles from "@/styles/myspace.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { useEffect } from "react";

function NavBarGroupSpace() {

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
                <li className={classNames(styles["myspace__item"], styles["active__myspace"])}>
                    <Link href="/groupspace/feeds" > Tường của nhóm </Link>
                </li>
                <li className={styles["myspace__item"]}>
                    Phê duyệt
                </li>
                <li className={styles["myspace__item"]}>
                    Rời khỏi
                </li>
                <li className={styles["myspace__item"]}>
                    <Link href="" >Chuyên cần</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBarGroupSpace;