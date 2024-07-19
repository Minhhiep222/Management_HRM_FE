import globals from "@/styles/globals.module.scss";
import classNames from "classnames";
// import styles from "@/styles/myspace.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
function HeaderManager() {
    const router = useRouter();

    useEffect(() => {
        const myspace_items = document.querySelectorAll(`.${globals["myspace__item"]}`);
        const items = document.querySelectorAll(`.link__item`);
        items.forEach((element, index) => {
            element.addEventListener('click', () => {
                myspace_items.forEach(item => item.classList.remove(`${globals["active"]}`))
                myspace_items[index].classList.add(`${globals["active"]}`);
            })
        });

    }, []);

    return (
        <div className={globals["header__myspace"]}>
            <div className={globals["navbar__myspace"]}>
                <ul className={globals["list__navbar-myspace"]}>
                    <li className={classNames(globals["myspace__item"], router.pathname == "/manager/listemployees" ? globals["active"] : "")}>
                        <Link className="link__item" href="/manager/listemployees" > Quản lý nhân viên </Link>
                    </li>
                    <li className={classNames(globals["myspace__item"], router.pathname == "/manager/listcontracts" ? globals["active"] : "")}>
                        <Link className="link__item" href="/manager/listcontracts" > Quản lý hợp đồng </Link>
                    </li>
                    <li className={classNames(globals["myspace__item"], router.pathname == "/manager/listgroups" ? globals["active"] : "")}>
                        <Link className="link__item" href="/manager/listgroups"> Quản lý nhóm  </Link>
                    </li>
                    <li className={classNames(globals["myspace__item"], router.pathname == "/manager/listprojects" ? globals["active"] : "")}>
                        <Link className="link__item" href="/manager/listprojects" > Quản lý dự án </Link>
                    </li>
                    <li className={classNames(globals["myspace__item"], router.pathname == "/manager/listrooms" ? globals["active"] : "")}>
                        <Link className="link__item" href="/manager/listrooms" > Quản lý phòng ban </Link>
                    </li>
                    <li className={classNames(globals["myspace__item"], router.pathname == "/manager/listbrands" ? globals["active"] : "")}>
                        <Link className="link__item" href="/manager/listbrands" > Quản lý chi nhánh </Link>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default HeaderManager;