import globals from "@/styles/globals.module.scss";
import classNames from "classnames";
// import styles from "@/styles/myspace.module.scss";
import Link from "next/link";
import { useEffect } from "react";
function HeaderManager() {
    var i = 0;
    useEffect(() => {
        const myspace_items = document.querySelectorAll(`.${globals["myspace__item"]}`);
        const items = document.querySelectorAll(`.link__item`);
        console.log(items);
        items.forEach((element, index) => {
            element.addEventListener('click', () => {
                i++;
                myspace_items.forEach(item => item.classList.remove(`${globals["active"]}`))
                myspace_items[index].classList.add(`${globals["active"]}`);
                console.log("test thu gia tri render" + i);
            })
        });

    }, []);

    return (
        <div className={globals["grid"]}>
            <div className={globals["grid__row"]}>
                <div className={globals["grid__column-12"]}>
                    <div className={globals["header__myspace"]}>
                        <div className={globals["navbar__myspace"]}>
                            <ul className={globals["list__navbar-myspace"]}>
                                <li className={classNames(globals["myspace__item"], globals["active"])}>
                                    <Link className="link__item" href="/manager/listemployees" > Danh sách nhân viên </Link>
                                </li>
                                <li className={globals["myspace__item"]}>
                                    <Link className="link__item" href="/manager/listgroups" > Danh sách nhóm  </Link>
                                </li>
                                <li className={globals["myspace__item"]}>
                                    <Link className="link__item" href="/manager/listprojects" > Danh sách dự án </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default HeaderManager;