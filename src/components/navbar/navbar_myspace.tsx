import styles from "@/styles/myspace.module.scss";
import globals from "@/styles/globals.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { useEffect } from "react";

function NavBarMySpace() {
    var i = 0;
    useEffect(() => {
        const myspace_items = document.querySelectorAll(`.${styles["myspace__item"]}`);
        const items = document.querySelectorAll(`.link__item-navbar`);
        console.log(myspace_items);
        items.forEach((element, index) => {
            element.addEventListener('click', () => {
                i++;
                console.log("test thu " + i);
                myspace_items.forEach(item => item.classList.remove(`${styles["active__myspace"]}`))
                myspace_items[index].classList.add(`${styles["active__myspace"]}`);
            })
        });

    }, []);

    return (
        <div className={styles["navbar__myspace"]}>
            <ul className={styles["list__navbar-myspace"]}>
                <li className={classNames(styles["myspace__item"], styles["active__myspace"])}>
                    <Link className="link__item-navbar" href="/myspace/actionlist" > Thao tác </Link>
                </li>
                <li className={styles["myspace__item"]}>
                    <Link className="link__item-navbar" href="/myspace/feeds" > Thông tin mới </Link>
                </li>
                <li className={styles["myspace__item"]}>
                    <Link className="link__item-navbar" href="/myspace/profile" > Hồ sơ </Link>
                </li>
                <li className={styles["myspace__item"]}>
                    <Link className="link__item-navbar" href="/myspace/diligence" >Chuyên cần</Link>
                </li>
                <li className={styles["myspace__item"]}>
                    Phê duyệt
                </li>
                <li className={styles["myspace__item"]}>
                    Rời khỏi
                </li>

            </ul>

        </div>
    );
}

export default NavBarMySpace;