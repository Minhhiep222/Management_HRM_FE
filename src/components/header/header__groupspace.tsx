import globals from "@/styles/globals.module.scss";
import classNames from "classnames";
// import styles from "@/styles/myspace.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
function HeaderGroupSpace() {
    const router = useRouter();
    return (
        <div className={globals["grid"]}>
            <div className={globals["grid__row"]}>
                <div className={globals["grid__column-12"]}>
                    <div className={globals["header__myspace"]}>
                        <div className={globals["navbar__myspace"]}>
                            <ul className={globals["list__navbar-myspace"]}>
                                <li className={classNames(globals["myspace__item"], router.pathname === '/groupspace/feeds' ? globals["active"] : '')}>
                                    <Link className="link__item" href="/groupspace/feeds" > Không gian nhóm </Link>
                                </li>
                                <li className={classNames(globals["myspace__item"], router.pathname === '/groupspace/project' ? globals["active"] : '')}>
                                    <Link className="link__item" href="/groupspace/project" > Dự án  </Link>
                                </li>
                                <li className={classNames(globals["myspace__item"], router.pathname === '/groupspace/list_member' ? globals["active"] : '')}>
                                    <Link className="link__item" href="/groupspace/list_member" > Danh sách nhóm  </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default HeaderGroupSpace;